(function() {
    'use strict';

    function getPlaylist() {
        return (window.SITE_CONFIG && window.SITE_CONFIG.music && window.SITE_CONFIG.music.playlist) || [];
    }

    var PLAYLIST = [];
    var currentTrackIndex = 0;
    var ytPlayer = null;
    var isPlaying = false;
    var playerReady = false;

    // ==============================
    // 1. BUILD THE PLAYER UI
    // ==============================
    function createPlayerHTML() {
        var track = PLAYLIST[currentTrackIndex];
        if (!track) return '';
        var ytThumb = 'https://img.youtube.com/vi/' + track.youtubeId + '/hqdefault.jpg';

        return '<div class="music-player-container" id="music-player">' +
            '<div id="yt-player-host" style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;"></div>' +
            '<div class="album-cover-wrapper">' +
                '<img src="' + (track.image || ytThumb) + '" class="album-cover-img" alt="Cover" onerror="this.src=\'' + ytThumb + '\';this.classList.add(\'yt-thumb\');">' +
            '</div>' +
            '<div class="music-info-vertical">' +
                '<div class="music-title-large" id="player-title">' + track.title + '</div>' +
                '<div class="music-artist-large" id="player-artist">' + track.artist + '</div>' +
            '</div>' +
            '<div class="music-progress-vertical">' +
                '<div class="progress-bar-wrapper-large">' +
                    '<div class="progress-bar-fill-large" id="player-progress"></div>' +
                '</div>' +
            '</div>' +
            '<div class="music-controls-large">' +
                '<button class="control-btn-large" id="player-prev">' +
                    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>' +
                '</button>' +
                '<button class="control-btn-large play-pause-btn-large" id="player-play-pause">' +
                    '<svg id="play-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
                    '<svg id="pause-icon" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>' +
                '</button>' +
                '<button class="control-btn-large" id="player-next">' +
                    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>' +
                '</button>' +
            '</div>' +
            '<div class="volume-container">' +
                '<svg class="volume-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>' +
                '<input type="range" id="player-volume" min="0" max="100" value="100" class="volume-slider">' +
            '</div>' +
        '</div>';
    }

    // ==============================
    // 2. YOUTUBE PLAYER
    // ==============================
    function loadYouTubeAPI() {
        if (window.YT && window.YT.Player) {
            createYTPlayer();
        } else {
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(tag);
        }
    }

    window.onYouTubeIframeAPIReady = function() {
        createYTPlayer();
    };

    function createYTPlayer() {
        var host = document.getElementById('yt-player-host');
        if (!host || ytPlayer) return;

        ytPlayer = new YT.Player('yt-player-host', {
            height: '1',
            width: '1',
            videoId: PLAYLIST[currentTrackIndex].youtubeId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                playsinline: 1
            },
            events: {
                onReady: function(e) {
                    console.log('[MusicPlayer] YouTube ready!');
                    playerReady = true;
                    e.target.setVolume(100);
                    e.target.playVideo();
                    setPlayingUI(true);
                },
                onStateChange: function(e) {
                    if (e.data === YT.PlayerState.ENDED) {
                        nextTrack();
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                        setPlayingUI(true);
                    }
                },
                onError: function(e) {
                    console.error('[MusicPlayer] YT Error:', e.data, '- skipping');
                    setTimeout(nextTrack, 500);
                }
            }
        });
    }

    // Autoplay on first user interaction (browser requires at least one click)
    function setupAutoplayOnInteraction() {
        var triggered = false;
        function tryAutoplay() {
            if (triggered) return;
            if (ytPlayer && playerReady) {
                ytPlayer.playVideo();
                setPlayingUI(true);
                triggered = true;
                document.removeEventListener('click', tryAutoplay);
                document.removeEventListener('touchstart', tryAutoplay);
                document.removeEventListener('keydown', tryAutoplay);
                console.log('[MusicPlayer] Autoplay triggered by user interaction');
            }
        }
        document.addEventListener('click', tryAutoplay);
        document.addEventListener('touchstart', tryAutoplay);
        document.addEventListener('keydown', tryAutoplay);
    }
    setupAutoplayOnInteraction();

    // ==============================
    // 3. CONTROLS
    // ==============================
    function setPlayingUI(playing) {
        isPlaying = playing;
        var playIcon = document.getElementById('play-icon');
        var pauseIcon = document.getElementById('pause-icon');
        if (playIcon) playIcon.style.display = playing ? 'none' : 'block';
        if (pauseIcon) pauseIcon.style.display = playing ? 'block' : 'none';
    }

    function togglePlay() {
        if (!ytPlayer || !playerReady) return;
        if (isPlaying) {
            ytPlayer.pauseVideo();
            setPlayingUI(false);
        } else {
            ytPlayer.playVideo();
            setPlayingUI(true);
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
        switchTrack('next');
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
        switchTrack('prev');
    }

    function switchTrack(direction) {
        var track = PLAYLIST[currentTrackIndex];
        if (!track) return;

        var imgEl = document.querySelector('.album-cover-img');
        var titleEl = document.getElementById('player-title');
        var artistEl = document.getElementById('player-artist');
        var progressEl = document.getElementById('player-progress');

        var outClass = direction === 'next' ? 'slide-left-out' : 'slide-right-out';
        var inClass = direction === 'next' ? 'slide-left-in' : 'slide-right-in';

        if (imgEl) imgEl.className = 'album-cover-img ' + outClass;

        setTimeout(function() {
            if (titleEl) titleEl.innerText = track.title;
            if (artistEl) artistEl.innerText = track.artist;
            if (progressEl) progressEl.style.width = '0%';

            var ytThumb = 'https://img.youtube.com/vi/' + track.youtubeId + '/hqdefault.jpg';
            if (imgEl) {
                imgEl.src = track.image || ytThumb;
                imgEl.className = 'album-cover-img ' + inClass;
                imgEl.onerror = function() {
                    imgEl.src = ytThumb;
                    imgEl.classList.add('yt-thumb');
                };
            }

            if (ytPlayer && playerReady && ytPlayer.loadVideoById) {
                ytPlayer.loadVideoById(track.youtubeId);
            }
        }, 400);
    }

    // ==============================
    // 4. PROGRESS BAR
    // ==============================
    setInterval(function() {
        if (ytPlayer && playerReady && ytPlayer.getDuration) {
            try {
                var duration = ytPlayer.getDuration();
                var currentTime = ytPlayer.getCurrentTime();
                if (duration > 0) {
                    var percent = (currentTime / duration) * 100;
                    var bar = document.getElementById('player-progress');
                    if (bar) bar.style.width = percent + '%';
                }
            } catch(e) {}
        }
    }, 1000);

    // ==============================
    // 5. HERO LAYOUT SHIFT
    // ==============================
    function adjustHeroLayout() {
        var findAndShift = function() {
            var h1s = document.querySelectorAll('h1');
            for (var i = 0; i < h1s.length; i++) {
                var text = h1s[i].textContent || '';
                if (text.indexOf('ASHRAF') !== -1) {
                    var current = h1s[i];
                    while (current.parentElement && current.parentElement.id !== 'root' && current.tagName !== 'SECTION') {
                        current = current.parentElement;
                    }
                    if (current) {
                        current.classList.add('hero-shifted-for-player');
                        return true;
                    }
                }
            }
            return false;
        };

        if (!findAndShift()) {
            var obs = new MutationObserver(function(mutations, observer) {
                if (findAndShift()) observer.disconnect();
            });
            obs.observe(document.body, { childList: true, subtree: true });
        }
    }

    // ==============================
    // 6. INJECT & START
    // ==============================
    function inject() {
        PLAYLIST = getPlaylist();
        if (PLAYLIST.length === 0) return false;
        if (document.getElementById('music-player')) return true;

        currentTrackIndex = Math.floor(Math.random() * PLAYLIST.length);

        var html = createPlayerHTML();
        document.body.insertAdjacentHTML('beforeend', html);

        var playBtn = document.getElementById('player-play-pause');
        var nextBtn = document.getElementById('player-next');
        var prevBtn = document.getElementById('player-prev');
        if (playBtn) playBtn.addEventListener('click', togglePlay);
        if (nextBtn) nextBtn.addEventListener('click', nextTrack);
        if (prevBtn) prevBtn.addEventListener('click', prevTrack);

        var volSlider = document.getElementById('player-volume');
        var volIcon = document.querySelector('.volume-icon');
        if (volSlider) {
            volSlider.addEventListener('input', function(e) {
                var val = e.target.value;
                if (ytPlayer && playerReady) {
                    ytPlayer.setVolume(val);
                }
                e.target.style.background = 'linear-gradient(to right, #fff ' + val + '%, rgba(255, 255, 255, 0.1) ' + val + '%)';
            });
            volSlider.style.background = 'linear-gradient(to right, #fff 100%, rgba(255, 255, 255, 0.1) 100%)';
        }

        if (volIcon && volSlider) {
            volIcon.style.cursor = 'pointer';
            volIcon.addEventListener('click', function() {
                if (ytPlayer && playerReady) {
                    if (ytPlayer.isMuted()) {
                        ytPlayer.unMute();
                        volSlider.value = ytPlayer.getVolume() || 100;
                        volIcon.style.opacity = '1';
                    } else {
                        ytPlayer.mute();
                        volSlider.value = 0;
                        volIcon.style.opacity = '0.3';
                    }
                    volSlider.dispatchEvent(new Event('input'));
                }
            });
        }

        adjustHeroLayout();
        loadYouTubeAPI();

        console.log('[MusicPlayer] Injected - YouTube audio, Spotify images');
        return true;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (!inject()) {
                var obs = new MutationObserver(function(m, o) {
                    if (inject()) o.disconnect();
                });
                obs.observe(document.body, { childList: true, subtree: true });
                setTimeout(inject, 3000);
            }
        });
    } else {
        if (!inject()) {
            var obs = new MutationObserver(function(m, o) {
                if (inject()) o.disconnect();
            });
            obs.observe(document.body, { childList: true, subtree: true });
            setTimeout(inject, 3000);
        }
    }
})();
