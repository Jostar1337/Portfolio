"use strict";
(self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []).push([
  [994],
  {
    5994: (e, t, i) => {
      (i.r(t), i.d(t, { default: () => T }));
      var r = i(9950),
        a = i(4752),
        n = i(2903),
        o = i(1131),
        s = i(5385),
        c = i(234),
        l = i(4414);
      n.Ay.registerPlugin(o.u);
      const d = a.Ay.section`
  padding: var(--space-3xl) 0;
  background: var(--color-deep-blue);
  
  @media (min-width: 769px) {
    display: none;
  }
`,
        p = a.Ay.div`
  max-width: 100%;
  padding: 0 var(--space-lg);
  
  @media (max-width: 480px) {
    padding: 0 var(--space-md);
  }
`,
        m = a.Ay.h2`
  font-size: clamp(1.75rem, 7vw, 2.5rem);
  font-weight: 900;
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--space-2xl);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0;
`,
        g = a.Ay.div`
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
  opacity: 0;
`,
        h = a.Ay.button`
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  border: 2px solid ${(e) => (e.active ? "var(--color-neon-blue)" : "rgba(0, 210, 255, 0.34)")};
  background: ${(e) => (e.active ? "var(--color-neon-blue)" : "transparent")};
  color: ${(e) => (e.active ? "white" : "var(--color-light-blue)")};
  font-weight: 600;
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: ${(e) => (e.active ? "var(--color-neon-blue)" : "rgba(0, 210, 255, 0.14)")};
    border-color: var(--color-neon-blue);
  }
  
  &:focus {
    outline: 2px solid var(--color-neon-blue);
    outline-offset: 2px;
  }
`,
        u = (0, a.Ay)(s.P.div)`
  background: rgba(1, 10, 30, 0.6);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 210, 255, 0.24);
  overflow: hidden;
  padding: var(--space-2xl);
  
  @media (max-width: 480px) {
    padding: var(--space-xl);
  }
`,
        x = a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--space-2xl);
`,
        v = a.Ay.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-lg);
  
  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 20px var(--service-accent, var(--color-neon-blue)));
  }
`,
        f = a.Ay.h3`
  font-size: clamp(1.5rem, 6vw, 2rem);
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: var(--space-md);
`,
        y = a.Ay.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  text-align: center;
  margin-bottom: var(--space-xl);
  
  @media (max-width: 480px) {
    font-size: var(--text-sm);
  }
`,
        w = a.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
    position: relative;
    line-height: 1.6;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--service-accent, var(--color-neon-blue));
      font-weight: bold;
    }
  }
`,
        b = (e) => {
          let { servicesData: t } = e;
          const [i, a] = (0, r.useState)(0),
            o = (0, r.useRef)(null),
            s = (0, r.useRef)(null),
            b = (0, r.useRef)(null),
            j = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              const e = o.current,
                t = s.current,
                i = b.current,
                r = j.current;
              if (!e || !t || !i) return;
              const a = n.Ay.context(() => {
                (n.Ay.fromTo(
                  t,
                  { opacity: 0, y: 30 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: t,
                      start: "top 80%",
                      end: "bottom 20%",
                      toggleActions: "play none none reverse",
                    },
                  },
                ),
                  n.Ay.fromTo(
                    i,
                    { opacity: 0, y: 20 },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.6,
                      delay: 0.2,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: i,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                      },
                    },
                  ),
                  r &&
                    n.Ay.fromTo(
                      r,
                      { opacity: 0, scale: 0.95, y: 30 },
                      {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                          trigger: r,
                          start: "top 85%",
                          end: "bottom 20%",
                          toggleActions: "play none none reverse",
                        },
                      },
                    ));
              }, e);
              return () => {
                a.revert();
              };
            }, []),
            (0, r.useEffect)(() => {
              const e = j.current;
              if (!e) return;
              const t = n.Ay.context(() => {
                const t = e.querySelectorAll("li");
                t.length > 0 &&
                  n.Ay.fromTo(
                    t,
                    { opacity: 0, x: -20 },
                    {
                      opacity: 1,
                      x: 0,
                      duration: 0.4,
                      stagger: 0.05,
                      ease: "power2.out",
                    },
                  );
              }, e);
              return () => {
                t.revert();
              };
            }, [i]),
            (0, l.jsx)(d, {
              ref: o,
              id: "services",
              children: (0, l.jsxs)(p, {
                children: [
                  (0, l.jsx)(m, { ref: s, children: "Services" }),
                  (0, l.jsx)(g, {
                    ref: b,
                    children: t.map((e, t) =>
                      (0, l.jsx)(
                        h,
                        {
                          active: i === t,
                          onClick: () => a(t),
                          "aria-pressed": i === t,
                          "aria-label": `View ${e.title} service`,
                          children: e.title,
                        },
                        e.id,
                      ),
                    ),
                  }),
                  (0, l.jsx)(c.N, {
                    mode: "wait",
                    children: (0, l.jsxs)(
                      u,
                      {
                        ref: j,
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.3 },
                        style: {
                          "--service-accent": t[i].accent,
                        },
                        children: [
                          (0, l.jsxs)(x, {
                            children: [
                              (0, l.jsx)(v, { children: t[i].logo }),
                              (0, l.jsx)(f, { children: t[i].title }),
                            ],
                          }),
                          (0, l.jsx)(y, { children: t[i].description }),
                          (0, l.jsx)("h4", {
                            style: {
                              fontSize: "var(--text-base)",
                              color: "var(--color-text-primary)",
                              marginBottom: "var(--space-md)",
                              fontWeight: 600,
                            },
                            children: "Meine Leistungen:",
                          }),
                          (0, l.jsx)(w, {
                            children: t[i].details.map((e, t) =>
                              (0, l.jsx)("li", { children: e }, t),
                            ),
                          }),
                        ],
                      },
                      i,
                    ),
                  }),
                ],
              }),
            })
          );
        };
      var j = i(7007);
      n.Ay.registerPlugin(o.u);
      const A = a.Ay.div`
  min-height: 400vh;
  position: relative;
  background: var(--color-deep-blue);
`,
        z = a.Ay.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(e) => `radial-gradient(circle at 30% 50%, ${e.$accent}30 0%, transparent 60%)`};
    transition: all 1s ease;
  }
`,
        C = a.Ay.h1`
  position: absolute;
  top: clamp(80px, 10vh, 120px);
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 10;
  
  @media (max-width: 768px) {
    top: 80px;
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    top: 60px;
    font-size: 2rem;
  }
  
  @media (max-height: 850px) and (min-width: 1024px) {
    top: 50px;
    font-size: 2.5rem;
  }
`,
        $ = a.Ay.div`
  max-width: 1400px;
  width: 90%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  @media (max-height: 850px) and (min-width: 1024px) {
    margin-top: 120px;
    gap: 40px;
  }
`,
        k = (0, a.Ay)(s.P.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,
        F = (0, a.Ay)(s.P.div)`
  width: 100%;
`,
        L = (0, a.Ay)(s.P.h1)`
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: ${(e) => e.$accent};
  }
  
  @media (max-width: 1024px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-height: 850px) and (min-width: 1024px) {
    font-size: clamp(2.5rem, 6vw, 5rem);
    margin-bottom: 1.5rem;
  }
`,
        M = (0, a.Ay)(s.P.p)`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  opacity: 0.9;
  margin-bottom: 3rem;
  line-height: 1.8;
  
  @media (max-height: 850px) and (min-width: 1024px) {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`,
        R = (0, a.Ay)(s.P.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  h3 {
    font-size: 1.5rem;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: var(--color-text-secondary);
      margin-bottom: 1.2rem;
      padding-left: 2rem;
      position: relative;
      line-height: 1.6;
      font-weight: 500;
      
      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${(e) => e.$accent || "#00a8ff"};
        font-weight: bold;
      }
    }
  }
  
  @media (max-height: 850px) and (min-width: 1024px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    
    ul li {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`,
        P = (0, a.Ay)(s.P.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  svg {
    filter: drop-shadow(0 0 50px ${(e) => e.$accent}80);
    transition: all 0.15s ease;
    
    &:hover {
      transform: scale(1.05) rotate(5deg);
      filter: drop-shadow(0 0 80px ${(e) => e.$accent}A0);
    }
  }
  
  @media (max-height: 850px) and (min-width: 1024px) {
    .service-logo {
      width: 200px;
      height: 200px;
    }
  }
`,
        S = a.Ay.div`
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  
  @media (max-width: 768px) {
    right: 20px;
  }
`,
        E = a.Ay.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 20px 0;
  background: ${(e) => (e.$active ? e.$accent : "rgba(255,255,255,0.2)")};
  border: 2px solid ${(e) => (e.$active ? e.$accent : "rgba(255,255,255,0.3)")};
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(e) => (e.$active ? "30px" : "0")};
    height: ${(e) => (e.$active ? "30px" : "0")};
    border-radius: 50%;
    background: ${(e) => e.$accent};
    opacity: 0.3;
    transition: all 0.15s ease;
  }
  
  &:hover {
    transform: scale(1.2);
  }
`,
        T = () => {
          const e = (0, r.useRef)(null),
            [t, i] = (0, r.useState)(0),
            [a, n] = (0, r.useState)(!1),
            d = (0, r.useRef)(null),
            p = window.SITE_CONFIG.services.map((e) => {
              const t = {
                fivem: (0, l.jsx)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "-768.1 533.9 210.2 240.1",
                  width: "300",
                  height: "300",
                  className: "service-logo",
                  children: (0, l.jsx)("path", {
                    fill: "#FF6F00",
                    d: "M-766.9,774l-1.2-1.2c14.5-40.8,21.7-62.5,22.9-63.7l67.2-67.2c-2.4,10.8-15.6,54-37.2,132.1H-766.9z M-735.7,681.6h-1.2c2.4-8.4,6-14.4,12-19.2c19.2-19.2,38.4-38.4,57.6-56.4c-0.9,5.4-3.3,10.4-7.1,14.4L-735.7,681.6z M-709.2,602.4L-709.2,602.4c14.4-45.6,22.8-68.5,24-68.5h44.4C-657.6,550.8-680.4,573.6-709.2,602.4z M-722.5,643.1h-1.2c7.3-21.6,10.9-32.4,12.1-33.6l73.3-72.1c1.2,0,3.6,4.9,6,15.7L-722.5,643.1z M-658.8,604.7h-1.2c0-3.6-1.2-4.8-1.2-4.8v-1.2c9.6-10.9,21.7-21.7,33.6-32.4c1.2,1.2,1.2,3.6,1.2,4.8C-638.3,584.3-649.2,595.1-658.8,604.7L-658.8,604.7z M-559.2,774h-51.6c-1.2,0-4.8-12.1-10.8-33.6c-19.2-69.6-31.2-110.4-33.6-121.2l33.6-33.6h1.2c4.8,14.5,25.2,76.8,62.5,187.3L-559.2,774z",
                  }),
                }),
                altv: (0, l.jsxs)("svg", {
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  width: "300",
                  height: "300",
                  className: "service-logo",
                  children: [
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "m40.31.5 387.23 56.53c22.2 3.24 42.07 24.22 44.5 46.85l39.72 370.85c2.39 22.33-13.31 38.96-35.2 37.13L95.1 480.1c-24.44-2.03-46.58-22.98-49.32-46.8L.28 37.68C-2.49 13.5 15.5-3.13 40.31.5Z",
                      fill: "#008736",
                    }),
                    (0, l.jsx)("path", {
                      opacity: ".15",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "m25.23 54.08 41.84 363.96c2.24 19.44 20.62 36.95 40.82 38.63l350.93 29.22c8.66.72 15.78-2.2 20.51-7.2 4.75-5.02 7.44-12.48 6.48-21.44L449.27 116.1c-2-18.6-18.58-36.03-36.69-38.68l-356.22-52c-10.14-1.49-18.4 1.21-23.8 6.23-5.39 4.99-8.45 12.73-7.33 22.44Zm-4.97.57L62.11 418.6c2.51 21.9 22.89 41.17 45.37 43.04l350.92 29.22c20.13 1.68 34.58-13.61 32.38-34.15l-36.54-341.16c-2.23-20.82-20.5-40.11-40.93-43.1l-356.23-52c-22.83-3.34-39.37 11.97-36.82 34.19Z",
                      fill: "#F1F2F2",
                    }),
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "m143 158 113 196.18L369 158H218.43L256 223.52l18.83-32.43h37.47L256 288.52 180.76 158H143Z",
                      fill: "#F1F2F2",
                    }),
                  ],
                }),
                discord: (0, l.jsx)("svg", {
                  width: "256",
                  height: "256",
                  viewBox: "0 -28.5 256 256",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid",
                  className: "service-logo",
                  children: (0, l.jsx)("path", {
                    d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",
                    fill: "#5865F2",
                    fillRule: "nonzero",
                  }),
                }),
              };
              return { ...e, logo: t[e.id] };
            });
          if (
            ((0, r.useEffect)(() => {
              n(window.innerWidth <= 768);
              const e = () => n(window.innerWidth <= 768);
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, r.useEffect)(() => {
              if (a) return;
              const t = e.current;
              if (!t) return;
              const r = function () {
                let e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                (d.current && d.current.kill(),
                  (d.current = o.u.create({
                    trigger: t,
                    start: "top top",
                    end: "+=300%",
                    pin: e,
                    pinSpacing: e,
                    scrub: !!e && 0.2,
                    onUpdate: (t) => {
                      if (e && !j.A.isProgrammaticScrolling()) {
                        const e = Math.min(
                          Math.floor(t.progress * p.length),
                          p.length - 1,
                        );
                        i(e);
                      }
                    },
                  })));
              };
              r(!0);
              const n = j.A.addListener((e) => {
                "start" === e.type
                  ? r(!1)
                  : "end" === e.type &&
                    setTimeout(() => {
                      r(!0);
                    }, 100);
              });
              return () => {
                (n(), d.current && d.current.kill());
              };
            }, [a, p.length]),
            a)
          )
            return (0, l.jsx)(b, { servicesData: p });
          const m = p[t],
            g = {
              enter: { y: 50, opacity: 0 },
              center: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
              },
              exit: { y: -50, opacity: 0 },
            };
          return (0, l.jsx)(A, {
            id: "services",
            children: (0, l.jsxs)(z, {
              ref: e,
              $accent: m.accent,
              children: [
                (0, l.jsx)(C, { children: "Services" }),
                (0, l.jsx)(c.N, {
                  mode: "wait",
                  children: (0, l.jsx)(
                    k,
                    {
                      variants: {
                        enter: { opacity: 0, scale: 0.9, rotateX: -15 },
                        center: {
                          opacity: 1,
                          scale: 1,
                          rotateX: 0,
                          transition: {
                            duration: 0.15,
                            delay: 0,
                            ease: [0.4, 0, 0.2, 1],
                            staggerChildren: 0.07,
                          },
                        },
                        exit: {
                          opacity: 0,
                          scale: 1.1,
                          rotateX: 15,
                          transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
                        },
                      },
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      children: (0, l.jsxs)($, {
                        children: [
                          (0, l.jsxs)(F, {
                            children: [
                              (0, l.jsx)(L, {
                                $accent: m.accent,
                                variants: g,
                                children: m.title,
                              }),
                              (0, l.jsx)(M, {
                                variants: g,
                                children: m.description,
                              }),
                              (0, l.jsxs)(R, {
                                $accent: m.accent,
                                variants: g,
                                children: [
                                  (0, l.jsx)("h3", {
                                    children: "What I Offer:",
                                  }),
                                  (0, l.jsx)("ul", {
                                    children: m.details.map((e, t) =>
                                      (0, l.jsx)(
                                        s.P.li,
                                        {
                                          initial: { opacity: 0, x: -20 },
                                          animate: { opacity: 1, x: 0 },
                                          transition: { delay: 0.015 * t },
                                          children: e,
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)(P, {
                            $accent: m.accent,
                            variants: {
                              enter: { scale: 0, rotate: -180, opacity: 0 },
                              center: {
                                scale: 1,
                                rotate: 0,
                                opacity: 1,
                                transition: {
                                  duration: 0.3,
                                  ease: [0.4, 0, 0.2, 1],
                                },
                              },
                              exit: { scale: 0, rotate: 180, opacity: 0 },
                            },
                            children: m.logo,
                          }),
                        ],
                      }),
                    },
                    m.id,
                  ),
                }),
                (0, l.jsx)(S, {
                  children: p.map((e, i) =>
                    (0, l.jsx)(
                      E,
                      {
                        $active: i === t,
                        $accent: i === t ? m.accent : "transparent",
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
          });
        };
    },
  },
]);
