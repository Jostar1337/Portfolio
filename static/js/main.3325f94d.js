(() => {
  "use strict";
  var e = {
      1848: (e, t, n) => {
        var r = n(9950),
          i = n(1352),
          o = n(4752),
          a = n(234),
          s = n(5385),
          l = n(2903),
          c = n(1131),
          d = n(7007);
        l.os.registerPlugin(c.u);
        l.os.registerPlugin(c.u);
        let p;
        window.addEventListener("resize", () => {
          (clearTimeout(p),
            (p = setTimeout(() => {
              c.u.refresh();
            }, 300)));
        });
        var u = n(7119),
          m = n(4414);
        const h = o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2147483647; /* Maximum z-index value */
  isolation: isolate;
`,
          x = o.Ay.div`
  position: absolute;
  width: 25px;
  height: 25px;
  transform: translate(-12.5px, -12.5px);
  pointer-events: none;
  
  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 3px rgba(0, 210, 255, 0.8));
    transition: transform 0.2s ease-out, filter 0.2s ease-out;
    
    path {
      fill: #00d2ff;
      stroke: #FFFFFF;
      stroke-width: 0.5;
      transition: fill 0.2s ease-out, stroke-width 0.2s ease-out, stroke 0.2s ease-out;
    }
  }
  
  &.hovering {
    svg {
      transform: scale(1.15) rotate(-10deg);
      filter: drop-shadow(0 0 6px rgba(0, 210, 255, 1));
      transition: none;
      
      path {
        fill: #00d2ff;
        stroke: #FFFFFF;
        stroke-width: 1;
      }
    }
  }
  
  &.button-hovering {
    svg {
      transform: scale(1.25) rotate(-15deg);
      filter: drop-shadow(0 0 10px rgba(0, 210, 255, 1)) drop-shadow(0 0 20px rgba(0, 210, 255, 0.52));
      transition: transform 0.15s ease-out, filter 0.15s ease-out;
      
      path {
        fill: #00d2ff;
        stroke: #FFFFFF;
        stroke-width: 1.5;
      }
    }
  }
`,
          g = o.Ay.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  pointer-events: none;
  will-change: transform, opacity;
  box-shadow: 0 0 6px var(--color-neon-blue);
`,
          f = () => {
            const e = (0, r.useRef)(null),
              t = (0, r.useRef)(null),
              n = (0, r.useRef)(null),
              [i, o] = (0, r.useState)(null),
              a = (0, r.useRef)({ x: 0, y: 0 }),
              s = (0, r.useRef)({ x: 0, y: 0 }),
              l = (0, r.useRef)(!1),
              c = (0, r.useRef)([]),
              d = (0, r.useRef)([]);
            return (
              (0, r.useEffect)(() => {
                const e = document.createElement("div");
                return (
                  (e.id = "custom-cursor-portal"),
                  (e.style.cssText =
                    "\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      pointer-events: none !important;\n      z-index: 2147483647 !important;\n      isolation: isolate !important;\n    "),
                  setTimeout(() => {
                    document.body.appendChild(e);
                  }, 0),
                  o(e),
                  () => {
                    e &&
                      document.body.contains(e) &&
                      document.body.removeChild(e);
                  }
                );
              }, []),
              (0, r.useEffect)(() => {
                if (!i) return;
                const r = "ontouchstart" in window,
                  o = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches;
                if (r || o) return;
                const p = document.createElement("style");
                ((p.textContent =
                  '\n      *, *::before, *::after {\n        cursor: none !important;\n      }\n      html, body {\n        cursor: none !important;\n      }\n      button, a, input, textarea, select, [role="button"], \n      .scroll-to-top-fixed-button, .floating-contact-island {\n        cursor: none !important;\n      }\n    '),
                  document.head.appendChild(p));
                const u = (t) => {
                    ((a.current = { x: t.clientX, y: t.clientY }),
                      (s.current = { x: t.clientX, y: t.clientY }),
                      e.current &&
                        (e.current.style.transform = `translate3d(${t.clientX}px, ${t.clientY}px, 0) translate(-12.5px, -12.5px)`));
                  },
                  m = (t) => {
                    if (((l.current = !0), e.current)) {
                      const n = t.target,
                        r =
                          "BUTTON" === n.tagName ||
                          n.closest("button") ||
                          n.closest(".scroll-to-top-fixed-button") ||
                          n.closest(".floating-contact-island");
                      (e.current.classList.remove(
                        "hovering",
                        "button-hovering",
                      ),
                        r
                          ? e.current.classList.add("button-hovering")
                          : e.current.classList.add("hovering"));
                    }
                  },
                  h = () => {
                    ((l.current = !1),
                      e.current &&
                        (e.current.classList.remove("hovering"),
                        e.current.classList.remove("button-hovering")));
                  },
                  x = (e) => {
                    if (void 0 !== n.current) {
                      if (0 === d.current.length)
                        for (let e = 0; e < 20; e++)
                          d.current.push({ x: s.current.x, y: s.current.y });
                      for (let e = 19; e > 0; e--) {
                        const t = d.current[e - 1],
                          n = d.current[e],
                          r = 0.5 - (e / 20) * 0.3;
                        ((n.x += (t.x - n.x) * r), (n.y += (t.y - n.y) * r));
                      }
                      ((d.current[0].x += 0.8 * (s.current.x - d.current[0].x)),
                        (d.current[0].y +=
                          0.8 * (s.current.y - d.current[0].y)),
                        c.current.forEach((e, t) => {
                          if (e && d.current[t]) {
                            const { x: n, y: r } = d.current[t],
                              i = t / 20,
                              o = 1 - 0.7 * i,
                              a = 1 - 0.95 * i;
                            ((e.style.transform = `translate3d(${n - 2}px, ${r - 2}px, 0) scale(${o})`),
                              (e.style.opacity = a));
                          }
                        }));
                    }
                    ((n.current = e), (t.current = requestAnimationFrame(x)));
                  };
                window.addEventListener("mousemove", u, { passive: !0 });
                const g = () => {
                  document
                    .querySelectorAll(
                      'a, button, input, textarea, select, [role="button"], .scroll-to-top-fixed-button, .floating-contact-island',
                    )
                    .forEach((e) => {
                      (e.addEventListener("mouseenter", m),
                        e.addEventListener("mouseleave", h));
                    });
                };
                g();
                const f = new MutationObserver(() => {
                  g();
                });
                return (
                  f.observe(document.body, { childList: !0, subtree: !0 }),
                  (t.current = requestAnimationFrame(x)),
                  () => {
                    (p && p.parentNode && p.parentNode.removeChild(p),
                      window.removeEventListener("mousemove", u));
                    (document
                      .querySelectorAll(
                        'a, button, input, textarea, select, [role="button"], .scroll-to-top-fixed-button, .floating-contact-island',
                      )
                      .forEach((e) => {
                        (e.removeEventListener("mouseenter", m),
                          e.removeEventListener("mouseleave", h));
                      }),
                      f.disconnect(),
                      t.current && cancelAnimationFrame(t.current));
                  }
                );
              }, [i]),
              i
                ? u.createPortal(
                    (0, m.jsxs)(h, {
                      children: [
                        [...Array(20)].map((e, t) =>
                          (0, m.jsx)(g, { ref: (e) => (c.current[t] = e) }, t),
                        ),
                        (0, m.jsx)(x, {
                          ref: e,
                          children: (0, m.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "33",
                            viewBox: "0 0 24 24",
                            children: (0, m.jsx)("path", {
                              d: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z",
                            }),
                          }),
                        }),
                      ],
                    }),
                    i,
                  )
                : null
            );
          },
          v = () => {
            const [e, t] = (0, r.useState)(!1),
              [n, i] = (0, r.useState)(0),
              [o, l] = (0, r.useState)(null);
            ((0, r.useEffect)(() => {
              const e = document.createElement("div");
              return (
                (e.id = "scroll-to-top-portal"),
                (e.className = "scroll-to-top-fixed-button"),
                (e.style.cssText =
                  "\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      pointer-events: none !important;\n      z-index: 9999 !important;\n      transform: none !important;\n    "),
                document.body.appendChild(e),
                l(e),
                () => {
                  e &&
                    document.body.contains(e) &&
                    document.body.removeChild(e);
                }
              );
            }, []),
              (0, r.useEffect)(() => {
                const e = () => {
                  const e =
                      window.scrollY ||
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      0,
                    n =
                      document.documentElement.scrollHeight -
                      window.innerHeight,
                    r = Math.min((e / n) * 100, 100);
                  (i(r), t(e > 300));
                };
                return (
                  window.addEventListener("scroll", e, { passive: !0 }),
                  e(),
                  () => {
                    window.removeEventListener("scroll", e);
                  }
                );
              }, []));
            return o
              ? u.createPortal(
                  (0, m.jsx)(a.N, {
                    children:
                      e &&
                      (0, m.jsxs)(s.P.button, {
                        onClick: () => {
                          d.A.programmaticScroll(0);
                        },
                        "aria-label": "Scroll to top",
                        className: "scroll-to-top-fixed-button",
                        style: {
                          position: "fixed",
                          bottom: window.innerWidth <= 768 ? "1.5rem" : "3rem",
                          right: window.innerWidth <= 768 ? "1.5rem" : "3rem",
                          width: window.innerWidth <= 768 ? "48px" : "60px",
                          height: window.innerWidth <= 768 ? "48px" : "60px",
                          borderRadius: "50%",
                          border: "none",
                          background:
                            "linear-gradient(135deg, #0a2f6b 0%, #00d2ff 100%)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 20px rgba(0, 210, 255, 0.52)",
                          zIndex: 9999,
                          pointerEvents: "auto",
                          overflow: "hidden",
                          transform: "none",
                        },
                        initial: { opacity: 0, scale: 0.5 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.5 },
                        whileHover: {
                          scale: 1.1,
                          boxShadow: "0 0 30px rgba(0, 210, 255, 0.8)",
                        },
                        whileTap: { scale: 0.95 },
                        transition: { duration: 0.3 },
                        children: [
                          (0, m.jsx)("svg", {
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              transform: "rotate(-90deg)",
                            },
                            children: (0, m.jsx)("circle", {
                              cx: window.innerWidth <= 768 ? "24" : "30",
                              cy: window.innerWidth <= 768 ? "24" : "30",
                              r: window.innerWidth <= 768 ? "20" : "26",
                              fill: "none",
                              stroke: "rgba(255, 255, 255, 0.3)",
                              strokeWidth: "2",
                              strokeDasharray:
                                "" +
                                2 *
                                  Math.PI *
                                  (window.innerWidth <= 768 ? 20 : 26),
                              strokeDashoffset:
                                "" +
                                (2 *
                                  Math.PI *
                                  (window.innerWidth <= 768 ? 20 : 26) -
                                  (n / 100) *
                                    2 *
                                    Math.PI *
                                    (window.innerWidth <= 768 ? 20 : 26)),
                              style: {
                                transition: "stroke-dashoffset 0.3s ease",
                              },
                            }),
                          }),
                          (0, m.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            style: {
                              width: "24px",
                              height: "24px",
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              zIndex: 1,
                            },
                            children: (0, m.jsx)("path", {
                              d: "M7 14l5-5 5 5",
                            }),
                          }),
                        ],
                      }),
                  }),
                  o,
                )
              : null;
          },
          b = () => {
            const [e, t] = (0, r.useState)(!1),
              [n, i] = (0, r.useState)(null),
              [o, l] = (0, r.useState)(!1),
              [c, d] = (0, r.useState)(!1),
              [p, h] = (0, r.useState)(!1),
              x = (0, r.useRef)(null);
            ((0, r.useEffect)(() => {
              const e = document.createElement("div");
              return (
                (e.id = "floating-contact-portal"),
                (e.className = "floating-contact-container"),
                (e.style.cssText =
                  "\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      pointer-events: none !important;\n      z-index: 9998 !important;\n      transform: none !important;\n    "),
                document.body.appendChild(e),
                i(e),
                () => {
                  e &&
                    document.body.contains(e) &&
                    document.body.removeChild(e);
                }
              );
            }, []),
              (0, r.useEffect)(() => {
                const e = setTimeout(() => {
                  l(!0);
                }, 1500);
                return () => clearTimeout(e);
              }, []),
              (0, r.useEffect)(() => {
                const e = () => {
                  const e = window.scrollY + window.innerHeight,
                    t = document.documentElement.scrollHeight;
                  l(!(t - e < 150));
                };
                return (
                  window.addEventListener("scroll", e),
                  e(),
                  () => window.removeEventListener("scroll", e)
                );
              }, []),
              (0, r.useEffect)(
                () => (
                  e &&
                    (x.current = setTimeout(() => {
                      t(!1);
                    }, 5e3)),
                  () => {
                    x.current && clearTimeout(x.current);
                  }
                ),
                [e],
              ),
              (0, r.useEffect)(() => {
                const n = (n) => {
                  "Escape" === n.key && e && t(!1);
                };
                return (
                  window.addEventListener("keydown", n),
                  () => window.removeEventListener("keydown", n)
                );
              }, [e]));
            if (!n) return null;
            const g = window.innerWidth <= 768 ? 280 : 320,
              f = window.innerWidth <= 768 ? 140 : 160;
            return u.createPortal(
              (0, m.jsx)(a.N, {
                mode: "wait",
                children:
                  o &&
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(a.N, {
                        children:
                          c &&
                          (0, m.jsxs)(s.P.div, {
                            style: {
                              position: "fixed",
                              bottom:
                                window.innerWidth <= 768 ? "85px" : "100px",
                              left: "50%",
                              background: "rgba(255, 255, 255, 0.08)",
                              backdropFilter: "blur(24px) saturate(180%)",
                              WebkitBackdropFilter: "blur(24px) saturate(180%)",
                              border: "1px solid rgba(255, 255, 255, 0.12)",
                              color: "rgba(255, 255, 255, 0.9)",
                              padding: "8px 16px",
                              borderRadius: "100px",
                              fontSize: "13px",
                              fontWeight: "600",
                              letterSpacing: "0.3px",
                              pointerEvents: "none",
                              zIndex: 9999,
                              boxShadow:
                                "0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginLeft: -60,
                            },
                            initial: { opacity: 0, y: 10, scale: 0.8 },
                            animate: { opacity: 1, y: 0, scale: 1 },
                            exit: { opacity: 0, y: 5, scale: 0.9 },
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            },
                            children: [
                              (0, m.jsx)(s.P.svg, {
                                viewBox: "0 0 24 24",
                                style: { width: "14px", height: "14px" },
                                initial: { scale: 0, rotate: -90 },
                                animate: { scale: 1, rotate: 0 },
                                transition: {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 20,
                                },
                                children: (0, m.jsx)("polyline", {
                                  points: "20 6 9 17 4 12",
                                  fill: "none",
                                  stroke: "rgba(74, 222, 128, 1)",
                                  strokeWidth: "2.5",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                              "Copied!",
                            ],
                          }),
                      }),
                      (0, m.jsx)(s.P.div, {
                        className: "floating-contact-island",
                        style: {
                          position: "fixed",
                          bottom: window.innerWidth <= 768 ? "24px" : "32px",
                          left: "50%",
                          zIndex: 9998,
                          pointerEvents: "auto",
                        },
                        initial: { opacity: 0, y: 100, scale: 0.8 },
                        animate: { opacity: 1, y: 0, scale: 1 },
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                          mass: 0.5,
                          delay: 0.2,
                        },
                        children: (0, m.jsxs)(s.P.div, {
                          onClick: () => {
                            (t(!e), x.current && clearTimeout(x.current));
                          },
                          style: {
                            background: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(24px) saturate(180%)",
                            WebkitBackdropFilter: "blur(24px) saturate(180%)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "100px",
                            cursor: "pointer",
                            position: "relative",
                            overflow: "hidden",
                            minHeight:
                              window.innerWidth <= 768 ? "48px" : "56px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: e ? -g / 2 : -f / 2,
                          },
                          animate: {
                            width: e ? g : f,
                            boxShadow: e
                              ? "0 8px 40px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.08) inset, 0 0 120px rgba(0, 210, 255, 0.24)"
                              : "0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 80px rgba(0, 210, 255, 0.18)",
                          },
                          transition: {
                            width: {
                              type: "spring",
                              stiffness: 700,
                              damping: 35,
                              mass: 0.5,
                            },
                            boxShadow: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          },
                          whileHover: {
                            scale: 1.02,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            },
                          },
                          whileTap: {
                            scale: 0.98,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            },
                          },
                          children: [
                            (0, m.jsx)(s.P.div, {
                              style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background:
                                  "linear-gradient(135deg, rgba(0, 210, 255, 0.18) 0%, rgba(0, 210, 255, 0) 100%)",
                                pointerEvents: "none",
                              },
                              animate: { opacity: e ? 0.6 : 0.3 },
                              transition: {
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                              },
                            }),
                            !e &&
                              (0, m.jsx)(s.P.div, {
                                style: {
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  width: "200%",
                                  height: "200%",
                                  borderRadius: "100px",
                                  background:
                                    "radial-gradient(circle, rgba(0, 210, 255, 0.24) 0%, transparent 70%)",
                                  pointerEvents: "none",
                                },
                                animate: {
                                  scale: [1, 1.5, 1],
                                  opacity: [0.3, 0, 0.3],
                                },
                                transition: {
                                  duration: 3,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                              }),
                            (0, m.jsx)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                zIndex: 1,
                                width: "100%",
                                height: "100%",
                              },
                              children: (0, m.jsx)(a.N, {
                                mode: "wait",
                                children: e
                                  ? (0, m.jsxs)(
                                      s.P.div,
                                      {
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "10px",
                                          width: "100%",
                                          justifyContent: "center",
                                          padding: "0 12px",
                                        },
                                        initial: { opacity: 0, scale: 0.9 },
                                        animate: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 0.9 },
                                        transition: {
                                          duration: 0.2,
                                          ease: [0.4, 0, 0.2, 1],
                                        },
                                        children: [
                                          (0, m.jsxs)(s.P.button, {
                                            onClick: (e) => {
                                              (e.stopPropagation(),
                                                window.open(
                                                  window.SITE_CONFIG.profile.githubUrl,
                                                  "_blank",
                                                ),
                                                d(!1));
                                            },
                                            style: {
                                              background:
                                                "rgba(255, 255, 255, 0.08)",
                                              border:
                                                "1px solid rgba(255, 255, 255, 0.15)",
                                              borderRadius: "14px",
                                              padding: "10px 18px",
                                              color: "rgba(255, 255, 255, 0.9)",
                                              fontSize:
                                                window.innerWidth <= 768
                                                  ? "13px"
                                                  : "14px",
                                              fontWeight: "600",
                                              cursor: "pointer",
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              justifyContent: "center",
                                              letterSpacing: "0.3px",
                                              backdropFilter: "blur(10px)",
                                            },
                                            initial: { x: -20, opacity: 0 },
                                            animate: { x: 0, opacity: 1 },
                                            transition: {
                                              delay: 0.05,
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 25,
                                            },
                                            whileHover: {
                                              scale: 1.05,
                                              background:
                                                "rgba(255, 255, 255, 0.12)",
                                              transition: { duration: 0.15 },
                                            },
                                            whileTap: {
                                              scale: 0.95,
                                              transition: { duration: 0.1 },
                                            },
                                            children: [
                                              (0, m.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: (0, m.jsx)("path", {
                                                  d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.012-1.244-.018-2.256-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.403c1.02.005 2.046.138 3 .403 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.628-5.478 5.924.43.37.814 1.102.814 2.222 0 1.606-.014 2.896-.014 3.286 0 .324.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z",
                                                }),
                                              }),
                                              "GitHub",
                                            ],
                                          }),
                                          (0, m.jsxs)(s.P.button, {
                                            onClick: (e) => {
                                              (e.stopPropagation(),
                                                navigator.clipboard.writeText(
                                                  window.SITE_CONFIG.profile.discord,
                                                ),
                                                h(!0),
                                                d(!0),
                                                setTimeout(() => {
                                                  (d(!1), h(!1));
                                                }, 2e3));
                                            },
                                            style: {
                                              background:
                                                "rgba(255, 255, 255, 0.08)",
                                              border:
                                                "1px solid rgba(255, 255, 255, 0.15)",
                                              borderRadius: "14px",
                                              padding: "10px 18px",
                                              color: "rgba(255, 255, 255, 0.9)",
                                              fontSize:
                                                window.innerWidth <= 768
                                                  ? "13px"
                                                  : "14px",
                                              fontWeight: "600",
                                              cursor: "pointer",
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              justifyContent: "center",
                                              letterSpacing: "0.3px",
                                              backdropFilter: "blur(10px)",
                                              position: "relative",
                                              overflow: "hidden",
                                            },
                                            initial: { opacity: 0 },
                                            animate: { opacity: 1 },
                                            transition: {
                                              delay: 0.1,
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 25,
                                            },
                                            whileHover: {
                                              scale: 1.05,
                                              background:
                                                "rgba(255, 255, 255, 0.12)",
                                              transition: { duration: 0.15 },
                                            },
                                            whileTap: {
                                              scale: 0.95,
                                              transition: { duration: 0.1 },
                                            },
                                            children: [
                                              p &&
                                                (0, m.jsx)(s.P.div, {
                                                  style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background:
                                                      "rgba(74, 222, 128, 0.1)",
                                                    pointerEvents: "none",
                                                  },
                                                  initial: { scale: 0 },
                                                  animate: { scale: 1 },
                                                  exit: { scale: 0 },
                                                  transition: { duration: 0.3 },
                                                }),
                                              (0, m.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                style: {
                                                  width: "16px",
                                                  height: "16px",
                                                  fill: "currentColor",
                                                },
                                                children: (0, m.jsx)("path", {
                                                  d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
                                                }),
                                              }),
                                              "Discord",
                                            ],
                                          }),
                                          (0, m.jsx)(s.P.button, {
                                            onClick: (e) => {
                                              (e.stopPropagation(), t(!1));
                                            },
                                            style: {
                                              background:
                                                "rgba(255, 255, 255, 0.05)",
                                              border: "none",
                                              borderRadius: "50%",
                                              width: "32px",
                                              height: "32px",
                                              color: "rgba(255, 255, 255, 0.6)",
                                              cursor: "pointer",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              flexShrink: 0,
                                            },
                                            initial: { x: 20, opacity: 0 },
                                            animate: { x: 0, opacity: 1 },
                                            transition: {
                                              delay: 0.15,
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 25,
                                            },
                                            whileHover: {
                                              background:
                                                "rgba(255, 255, 255, 0.1)",
                                              color: "rgba(255, 255, 255, 0.9)",
                                              rotate: 90,
                                              transition: { duration: 0.15 },
                                            },
                                            whileTap: {
                                              scale: 0.9,
                                              transition: { duration: 0.1 },
                                            },
                                            "aria-label": "Close",
                                            children: (0, m.jsxs)("svg", {
                                              viewBox: "0 0 24 24",
                                              style: {
                                                width: "16px",
                                                height: "16px",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              },
                                              children: [
                                                (0, m.jsx)("line", {
                                                  x1: "18",
                                                  y1: "6",
                                                  x2: "6",
                                                  y2: "18",
                                                }),
                                                (0, m.jsx)("line", {
                                                  x1: "6",
                                                  y1: "6",
                                                  x2: "18",
                                                  y2: "18",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                      "expanded",
                                    )
                                  : (0, m.jsxs)(
                                      s.P.div,
                                      {
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "10px",
                                          justifyContent: "center",
                                        },
                                        initial: { opacity: 0, scale: 0.8 },
                                        animate: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 0.8 },
                                        transition: {
                                          duration: 0.2,
                                          ease: [0.4, 0, 0.2, 1],
                                        },
                                        children: [
                                          (0, m.jsx)(s.P.div, {
                                            animate: {
                                              rotate: [0, 10, -10, 0],
                                            },
                                            transition: {
                                              duration: 4,
                                              repeat: 1 / 0,
                                              ease: "easeInOut",
                                            },
                                            children: (0, m.jsxs)("svg", {
                                              viewBox: "0 0 24 24",
                                              style: {
                                                width: "20px",
                                                height: "20px",
                                                fill: "none",
                                                stroke:
                                                  "rgba(255, 255, 255, 0.9)",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              },
                                              children: [
                                                (0, m.jsx)("path", {
                                                  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                }),
                                                (0, m.jsx)("polyline", {
                                                  points: "22,6 12,13 2,6",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsx)("span", {
                                            style: {
                                              color: "rgba(255, 255, 255, 0.9)",
                                              fontSize:
                                                window.innerWidth <= 768
                                                  ? "14px"
                                                  : "15px",
                                              fontWeight: "600",
                                              letterSpacing: "0.3px",
                                            },
                                            children: "Contact",
                                          }),
                                        ],
                                      },
                                      "collapsed",
                                    ),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              }),
              n,
            );
          };
        var w = n(5549);
        const y = o.i7`
  0% {
    transform: scale(15) translateZ(1000px);
    opacity: 0;
    filter: blur(20px);
  }
  30% {
    transform: scale(8) translateZ(500px);
    opacity: 0.5;
    filter: blur(10px);
  }
  60% {
    transform: scale(3) translateZ(200px);
    opacity: 0.8;
    filter: blur(5px);
  }
  85% {
    transform: scale(0.8) translateZ(0);
    opacity: 1;
    filter: blur(0);
  }
  90% {
    transform: scale(1.1) translateZ(0);
    opacity: 1;
    filter: blur(0) brightness(2);
  }
  95% {
    transform: scale(0.95) translateZ(0);
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  100% {
    transform: scale(1) translateZ(0);
    opacity: 1;
    filter: blur(0) brightness(1);
  }
`,
          A = o.i7`
  0% {
    transform: translate(0, 0) scale(1);
    filter: none;
  }
  10% {
    transform: translate(-2px, 2px) scale(1.01);
    filter: hue-rotate(90deg) saturate(2);
  }
  20% {
    transform: translate(2px, -2px) scale(0.99);
    filter: hue-rotate(-90deg) saturate(2);
  }
  30% {
    transform: translate(-1px, 1px) scale(1.01);
    filter: hue-rotate(180deg) saturate(3);
  }
  40% {
    transform: translate(1px, -1px) scale(0.99);
    filter: hue-rotate(270deg) saturate(2);
  }
  50% {
    transform: translate(-2px, 0) scale(1.02);
    filter: hue-rotate(45deg) saturate(2.5);
  }
  60% {
    transform: translate(2px, 1px) scale(0.98);
    filter: hue-rotate(-45deg) saturate(2);
  }
  70% {
    transform: translate(0, -2px) scale(1.01);
    filter: hue-rotate(135deg) saturate(3);
  }
  80% {
    transform: translate(-1px, 2px) scale(0.99);
    filter: hue-rotate(-135deg) saturate(2);
  }
  90% {
    transform: translate(1px, -1px) scale(1);
    filter: hue-rotate(60deg) saturate(2);
  }
  100% {
    transform: translate(0, 0) scale(1);
    filter: none;
  }
`,
          k = o.i7`
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    width: 100px;
    height: 100px;
    opacity: 0.8;
  }
  60% {
    width: 150vmax;
    height: 150vmax;
    opacity: 0.3;
  }
  100% {
    width: 300vmax;
    height: 300vmax;
    opacity: 0;
  }
`,
          j = o.i7`
  0%, 100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-10px, 10px);
  }
  20% {
    transform: translate(10px, -10px);
  }
  30% {
    transform: translate(-10px, -10px);
  }
  40% {
    transform: translate(10px, 10px);
  }
  50% {
    transform: translate(-5px, 5px);
  }
  60% {
    transform: translate(5px, -5px);
  }
  70% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
`,
          E = o.i7`
  0%, 100% {
    content: 'ASHRAF1337';
    opacity: 1;
  }
  10% {
    content: 'ASHRAF1337';
    opacity: 0.8;
  }
  20% {
    content: '▓▒░▓▒░▓▒░';
    opacity: 0.9;
  }
  30% {
    content: 'ASH▓▒░RAF1337';
    opacity: 0.7;
  }
  40% {
    content: '010011010';
    opacity: 0.8;
  }
  50% {
    content: 'A█SH█RAF█1337';
    opacity: 0.9;
  }
  60% {
    content: 'ASHRAF1337';
    opacity: 0.7;
  }
  70% {
    content: '█▓▒░▓▒░█';
    opacity: 0.8;
  }
  80% {
    content: 'A3SHR1AF1337';
    opacity: 0.9;
  }
  90% {
    content: 'ASHR▓AF1337';
    opacity: 0.8;
  }
`,
          S = (0, o.Ay)(s.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  animation: ${(e) => (e.$shake ? j : "none")} 0.5s ease-out;
`,
          C = o.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`,
          P = o.Ay.img`
  height: 120px;
  width: auto;
  animation: 
    ${y} 1s cubic-bezier(0.11, 0, 0.5, 0) forwards,
    ${(e) => (e.$glitch ? A : "none")} 0.3s linear;
  animation-delay: 0s, 1s;
  /* filter: drop-shadow(0 0 50px rgba(0, 210, 255, 1)); */
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    height: 100px;
  }
`,
          B = o.Ay.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-family: 'Courier New', monospace;
  color: var(--color-neon-blue);
  letter-spacing: 3px;
  opacity: ${(e) => (e.$show ? 1 : 0)};
  transition: opacity 0.1s;
  
  &::before {
    content: 'ASHRAF1337';
    animation: ${(e) => (e.$show ? E : "none")} 0.3s steps(10);
  }
`,
          z = o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${(e) => (e.$show ? 1 : 0)};
  mix-blend-mode: screen;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: url(${w}) center/120px no-repeat;
    filter: hue-rotate(180deg) blur(1px);
    animation: ${A} 0.3s linear;
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: url(${w}) center/120px no-repeat;
    filter: hue-rotate(90deg) blur(1px);
    animation: ${A} 0.3s linear reverse;
    opacity: 0.5;
  }
`,
          L = o.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px solid var(--color-neon-blue);
  animation: ${k} 0.8s cubic-bezier(0, 0.5, 0.5, 1) forwards;
  animation-delay: 0.7s;
  pointer-events: none;
  z-index: 1;
  /* box-shadow: 
    0 0 50px var(--color-neon-blue),
    inset 0 0 50px var(--color-neon-blue); */
`,
          T =
            ((0, o.Ay)(L)`
  animation-delay: 0.75s;
  border-width: 1px;
  opacity: 0.5;
`,
            (0, o.Ay)(L)`
  animation-delay: 0.8s;
  border-width: 1px;
  opacity: 0.3;
`,
            o.Ay.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: ${(e) => e.$animation} 1s cubic-bezier(0, 0.5, 0.5, 1) forwards;
  animation-delay: 0.7s;
  animation-fill-mode: both;
  opacity: 0;
  visibility: hidden;
  /* box-shadow: 0 0 10px var(--color-neon-blue); */
`),
          K = (e) => {
            let { onLoadingComplete: t } = e;
            const [n, i] = (0, r.useState)(!0),
              [s, l] = (0, r.useState)(!1),
              [c, d] = (0, r.useState)(!1),
              [p, u] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              const e = setTimeout(() => {
                  l(!0);
                }, 700),
                n = setTimeout(() => {
                  (d(!0),
                    u(!0),
                    setTimeout(() => {
                      (d(!1), u(!1));
                    }, 300));
                }, 1e3),
                r = setTimeout(() => {
                  (i(!1),
                    setTimeout(() => {
                      t && t();
                    }, 200));
                }, 1400);
              return () => {
                (clearTimeout(e), clearTimeout(n), clearTimeout(r));
              };
            }, [t]);
            const h = Array.from({ length: 20 }, (e, t) => {
              const n = (t / 20) * Math.PI * 2,
                r = 200 + 300 * Math.random();
              return { id: t, x: Math.cos(n) * r, y: Math.sin(n) * r };
            });
            return (0, m.jsx)(a.N, {
              children:
                n &&
                (0, m.jsx)(S, {
                  $shake: s,
                  initial: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    scale: 1.05,
                    filter: "brightness(2) blur(10px)",
                  },
                  transition: { duration: 0.3, ease: [0.11, 0, 0.5, 0] },
                  children: (0, m.jsxs)(C, {
                    children: [
                      (0, m.jsx)(P, {
                        src: w,
                        alt: "ashraf1337",
                        width: "120",
                        height: "120",
                        $glitch: c,
                      }),
                      (0, m.jsx)(z, { $show: c }),
                      (0, m.jsx)(B, { $show: p }),
                      h.map((e) => {
                        return (0, m.jsx)(
                          T,
                          {
                            $animation:
                              ((t = e.x),
                              (n = e.y),
                              o.i7`
  0% {
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }
  10% {
    transform: translate(calc(-50% + ${0.1 * t}px), calc(-50% + ${0.1 * n}px));
    opacity: 1;
    visibility: visible;
  }
  100% {
    transform: translate(calc(-50% + ${t}px), calc(-50% + ${n}px));
    opacity: 0;
    visibility: hidden;
  }
`),
                          },
                          e.id,
                        );
                        var t, n;
                      }),
                    ],
                  }),
                }),
            });
          };
        var I = n(1105),
          N = n(2178);
        const M = (0, o.Ay)(s.P.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  padding: var(--space-lg) 0;
  transition: all var(--duration-normal) var(--ease-out-expo);
  
  @media (max-width: 768px) {
    padding: var(--space-md) 0;
  }
`,
          Y = o.Ay.nav`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
          D = (0, o.Ay)(s.P.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 2;
`,
          H = (0, o.Ay)(s.P.img)`
  height: 40px;
  width: auto;
  filter: brightness(1.2) saturate(1.1);
  transition: all var(--duration-normal) var(--ease-out-expo);
  
  @media (max-width: 768px) {
    height: 32px;
  }
  
  &:hover {
    filter: brightness(1.4) saturate(1.3);
    transform: scale(1.05);
  }
`,
          F = o.Ay.ul`
  display: flex;
  gap: var(--space-2xl);
  list-style: none;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,
          O = (0, o.Ay)(s.P.li)`
  position: relative;
`,
          W = o.Ay.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--text-base);
  transition: color var(--duration-fast) var(--ease-out-expo);
  position: relative;
  display: block;
  padding: var(--space-sm) 0;
  
  &:hover {
    color: var(--color-text-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-neon-blue);
    transition: width var(--duration-normal) var(--ease-out-expo);
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  &.active {
    color: var(--color-text-primary);
  }
`,
          G = o.Ay.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text-primary);
  cursor: pointer;
  padding: var(--space-sm);
  position: relative;
  width: 44px;
  height: 44px;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,
          R = o.Ay.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--duration-normal) var(--ease-out-expo);
  
  ${(e) => {
    if (e.$isOpen)
      switch (e.$index) {
        case 0:
          return "\n            top: 50%;\n            transform: translate(-50%, -50%) rotate(45deg);\n          ";
        case 1:
          return "\n            top: 50%;\n            opacity: 0;\n          ";
        case 2:
          return "\n            top: 50%;\n            transform: translate(-50%, -50%) rotate(-45deg);\n          ";
        default:
          return "";
      }
    else
      switch (e.$index) {
        case 0:
          return "top: 25%;";
        case 1:
          return "top: 50%; transform: translate(-50%, -50%);";
        case 2:
          return "bottom: 25%;";
        default:
          return "";
      }
  }}
`,
          J = (0, o.Ay)(s.P.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--gradient-neon);
  transform-origin: left;
`,
          V = (0, o.Ay)(s.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: calc(var(--z-modal) - 1);
`,
          q = (0, o.Ay)(s.P.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(100%, 320px);
  height: 100vh;
  background: var(--color-deep-blue);
  border-left: 1px solid rgba(0, 210, 255, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
  z-index: var(--z-modal);
  padding: var(--space-2xl);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
  
  @supports (padding: max(0px)) {
    padding-top: max(var(--space-2xl), env(safe-area-inset-top));
    padding-bottom: max(var(--space-2xl), env(safe-area-inset-bottom));
  }
`,
          X = (0, o.Ay)(s.P.a)`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
  position: relative;
  padding: var(--space-sm) var(--space-lg);
  min-height: 44px;
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 480px) {
    font-size: var(--text-xl);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: var(--color-neon-blue);
    transition: width var(--duration-normal) var(--ease-out-expo);
  }
  
  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`,
          Q = r.memo(() => {
            const [e, t] = (0, r.useState)(!1),
              [n, i] = (0, r.useState)("hero"),
              [o, s] = (0, r.useState)(!1),
              c = (0, r.useRef)(null),
              { scrollYProgress: p } = (0, I.L)(),
              u = (0, N.G)(p, [0, 1], [0, 1]),
              h = (0, r.useMemo)(
                () => [
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "services", label: "Services" },
                  { id: "clients", label: "Clients" },
                ],
                [],
              );
            ((0, r.useEffect)(() => {
              let e;
              const n = () => {
                (t(window.scrollY > 50),
                  clearTimeout(e),
                  (e = setTimeout(() => {
                    const e = h.map((e) => document.getElementById(e.id)),
                      t = window.scrollY + 100;
                    e.forEach((e, n) => {
                      if (e) {
                        const { offsetTop: r, offsetHeight: o } = e;
                        t >= r && t < r + o && i(h[n].id);
                      }
                    });
                  }, 100)));
              };
              return (
                window.addEventListener("scroll", n, { passive: !0 }),
                () => {
                  (window.removeEventListener("scroll", n), clearTimeout(e));
                }
              );
            }, [h]),
              (0, r.useEffect)(() => {
                var e;
                const t =
                  null === (e = c.current) || void 0 === e
                    ? void 0
                    : e.querySelectorAll("a");
                t &&
                  t.forEach((e) => {
                    const t = (t) => {
                        const n = e.getBoundingClientRect(),
                          r = t.clientX - n.left - n.width / 2,
                          i = t.clientY - n.top - n.height / 2;
                        l.Ay.to(e, {
                          x: 0.3 * r,
                          y: 0.3 * i,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      },
                      n = () => {
                        l.Ay.to(e, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      };
                    return (
                      e.addEventListener("mousemove", t),
                      e.addEventListener("mouseleave", n),
                      () => {
                        (e.removeEventListener("mousemove", t),
                          e.removeEventListener("mouseleave", n));
                      }
                    );
                  });
              }, []));
            const x = (0, r.useCallback)((e, t) => {
              (e.preventDefault(),
                d.A.programmaticScroll(t, {
                  onComplete: () => {
                    s(!1);
                  },
                }));
            }, []);
            return (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsxs)(M, {
                  ref: c,
                  initial: { y: -100 },
                  animate: { y: 0 },
                  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
                  style: {
                    background: e ? "rgba(1, 8, 20, 0.9)" : "transparent",
                    backdropFilter: e ? "blur(10px)" : "none",
                    borderBottom: e
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "none",
                  },
                  children: [
                    (0, m.jsxs)(Y, {
                      children: [
                        (0, m.jsx)(D, {
                          href: "#hero",
                          onClick: (e) => x(e, "hero"),
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: (0, m.jsx)(H, {
                            ref: (e) => e,
                            src: w,
                            alt: "Kenshin13 Logo",
                            width: "48",
                            height: "48",
                            whileHover: { rotate: 360 },
                            transition: {
                              duration: 0.8,
                              type: "spring",
                              stiffness: 100,
                            },
                          }),
                        }),
                        (0, m.jsx)(F, {
                          children: h.map((e, t) =>
                            (0, m.jsx)(
                              O,
                              {
                                initial: { opacity: 0, y: -20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.1 * t },
                                children: (0, m.jsx)(W, {
                                  href: `#${e.id}`,
                                  onClick: (t) => x(t, e.id),
                                  className: n === e.id ? "active" : "",
                                  children: e.label,
                                }),
                              },
                              e.id,
                            ),
                          ),
                        }),
                        (0, m.jsxs)(G, {
                          onClick: () => s(!o),
                          "aria-label": "Toggle menu",
                          children: [
                            (0, m.jsx)(R, { $isOpen: o, $index: 0 }),
                            (0, m.jsx)(R, { $isOpen: o, $index: 1 }),
                            (0, m.jsx)(R, { $isOpen: o, $index: 2 }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsx)(J, { style: { scaleX: u } }),
                  ],
                }),
                (0, m.jsx)(a.N, {
                  children:
                    o &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsx)(V, {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.3 },
                          onClick: () => s(!1),
                        }),
                        (0, m.jsx)(q, {
                          initial: { x: "100%" },
                          animate: { x: 0 },
                          exit: { x: "100%" },
                          transition: {
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                          },
                          children: h.map((e, t) =>
                            (0, m.jsx)(
                              X,
                              {
                                href: `#${e.id}`,
                                onClick: (t) => x(t, e.id),
                                initial: { opacity: 0, x: 50 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: 0.1 * t },
                                children: e.label,
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                }),
              ],
            });
          });
        Q.displayName = "Navigation";
        const U = Q,
          Z = o.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.6;
`,
          $ = r.memo(() => {
            const e = (0, r.useRef)(null),
              t = (0, r.useRef)(),
              n = (0, r.useRef)([]),
              i = (0, r.useRef)({ x: 0, y: 0 }),
              o = (0, r.useRef)(0),
              [a, s] = (0, r.useState)(!0),
              [l, c] = (0, r.useState)("normal");
            return (
              (0, r.useEffect)(() => {
                (() => {
                  var e;
                  const t =
                      (null === (e = performance.memory) || void 0 === e
                        ? void 0
                        : e.usedJSHeapSize) || 0,
                    n =
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                      ),
                    r = navigator.hardwareConcurrency <= 4 || t > 5e8 || n;
                  c(r ? "low" : "normal");
                })();
              }, []),
              (0, r.useEffect)(() => {
                const t = () => {
                  s(!document.hidden);
                };
                document.addEventListener("visibilitychange", t);
                const n = new IntersectionObserver(
                  (e) => {
                    let [t] = e;
                    s(t.isIntersecting);
                  },
                  { threshold: 0.1 },
                );
                return (
                  e.current && n.observe(e.current),
                  () => {
                    (document.removeEventListener("visibilitychange", t),
                      n.disconnect());
                  }
                );
              }, []),
              (0, r.useEffect)(() => {
                const r = e.current;
                if (!r) return;
                const s = r.getContext("2d");
                if (!s) return;
                const c = () => {
                  ((r.width = window.innerWidth),
                    (r.height = window.innerHeight));
                };
                (c(), window.addEventListener("resize", c));
                const d = window.innerWidth <= 768,
                  p = "low" === l ? 4e4 : d ? 25e3 : 15e3,
                  u = Math.min(
                    Math.floor((r.width * r.height) / p),
                    "low" === l ? 30 : d ? 50 : 100,
                  ),
                  m = [];
                for (let e = 0; e < u; e++)
                  m.push({
                    x: Math.random() * r.width,
                    y: Math.random() * r.height,
                    vx: 0.5 * (Math.random() - 0.5),
                    vy: 0.5 * (Math.random() - 0.5),
                    radius: 2 * Math.random() + 1,
                    color: Math.random() > 0.5 ? "#006effff" : "#008cffff",
                    alpha: 0.5 * Math.random() + 0.5,
                    targetAlpha: 0.5 * Math.random() + 0.5,
                    connections: [],
                  });
                n.current = m;
                let h = null;
                const x = (e) => {
                  h ||
                    (h = setTimeout(() => {
                      ((i.current = { x: e.clientX, y: e.clientY }),
                        (h = null));
                    }, 16));
                };
                window.addEventListener("mousemove", x, { passive: !0 });
                const g = 1e3 / ("low" === l ? 30 : 60),
                  f = (e) => {
                    if (!a) return void (t.current = requestAnimationFrame(f));
                    const n = e - o.current;
                    (n > g &&
                      ((o.current = e - (n % g)),
                      s.clearRect(0, 0, r.width, r.height),
                      m.forEach((e, t) => {
                        ((e.x += e.vx),
                          (e.y += e.vy),
                          (e.x < 0 || e.x > r.width) && (e.vx *= -1),
                          (e.y < 0 || e.y > r.height) && (e.vy *= -1));
                        const n = i.current.x - e.x,
                          o = i.current.y - e.y,
                          a = Math.sqrt(n * n + o * o);
                        if (a < 100) {
                          const t = (100 - a) / 100;
                          ((e.vx -= (n / a) * t * 0.02),
                            (e.vy -= (o / a) * t * 0.02),
                            (e.targetAlpha = 1));
                        } else e.targetAlpha = 0.5 * Math.random() + 0.5;
                        if (
                          ((e.alpha += 0.1 * (e.targetAlpha - e.alpha)),
                          s.beginPath(),
                          s.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                          (s.fillStyle = e.color),
                          (s.globalAlpha = e.alpha),
                          s.fill(),
                          "normal" === l || t < 20)
                        ) {
                          const n = "low" === l ? 2 : 5;
                          let r = 0;
                          for (let i = t + 1; i < m.length && r < n; i++) {
                            const t = m[i],
                              n = t.x - e.x,
                              o = t.y - e.y,
                              a = Math.sqrt(n * n + o * o);
                            a < 120 &&
                              (s.beginPath(),
                              s.moveTo(e.x, e.y),
                              s.lineTo(t.x, t.y),
                              (s.strokeStyle = e.color),
                              (s.globalAlpha = (1 - a / 120) * e.alpha * 0.3),
                              (s.lineWidth = 0.5),
                              s.stroke(),
                              r++);
                          }
                        }
                      })),
                      (t.current = requestAnimationFrame(f)));
                  };
                return (
                  (t.current = requestAnimationFrame(f)),
                  () => {
                    (window.removeEventListener("resize", c),
                      window.removeEventListener("mousemove", x),
                      h && clearTimeout(h),
                      t.current && cancelAnimationFrame(t.current));
                  }
                );
              }, [a, l]),
              (0, m.jsx)(Z, { ref: e })
            );
          });
        $.displayName = "ParticleField";
        const _ = $;
        var ee = n(9824);
        l.Ay.registerPlugin(ee.J);
        const te = o.Ay.div`
  position: relative;
  margin-bottom: var(--space-2xl);
  min-width: 420px; /* Accommodate longest text "INNOVATOR" */
  
  @media (max-width: 1024px) {
    min-width: 360px;
  }
  
  @media (max-width: 768px) {
    min-width: unset; /* Allow natural width on mobile */
  }
`,
          ne = (0, o.Ay)(s.P.h1)`
  font-size: var(--text-6xl);
  font-weight: 900;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--color-light-blue) 0%, var(--color-neon-blue) 50%, var(--color-electric-cyan) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradientShift 8s ease infinite;
  position: relative;
  transform: none !important;
  
  @media (max-width: 1024px) {
    font-size: var(--text-5xl);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 12vw, 3rem);
  }
`,
          re = o.Ay.h1`
  position: absolute;
  top: 0;
  left: 0;
  font-size: var(--text-6xl);
  font-weight: 900;
  line-height: 1.1;
  color: var(--color-neon-blue);
  opacity: 0;
  pointer-events: none;
  
  @media (max-width: 1024px) {
    font-size: var(--text-5xl);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 12vw, 3rem);
  }
`,
          ie = () => {
            const e = (0, r.useRef)(null),
              t = (0, r.useRef)(null),
              n = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                const r = window.SITE_CONFIG.hero.roles;
                let i = 0;
                const o = () => {
                    if (!e.current) return;
                    (0 === i && window.SITE_CONFIG.profile.logoText === e.current.textContent) ||
                      (i = (i + 1) % r.length);
                    const a = r[i],
                      s = a.charAt(0),
                      c = l.Ay.timeline({
                        onComplete: () => {
                          setTimeout(o, 2e3);
                        },
                      });
                    (t.current &&
                      n.current &&
                      ((t.current.textContent = a),
                      (n.current.textContent = a)),
                      c.to([t.current, n.current], {
                        opacity: 1,
                        duration: 0.1,
                        ease: "power2.inOut",
                        repeat: 3,
                        yoyo: !0,
                        onUpdate: function () {
                          t.current &&
                            n.current &&
                            ((t.current.style.transform = `translate(${4 * Math.random() - 2}px, ${4 * Math.random() - 2}px)`),
                            (n.current.style.transform = `translate(${4 * Math.random() - 2}px, ${4 * Math.random() - 2}px)`),
                            (t.current.style.textShadow =
                              4 * Math.random() -
                              2 +
                              "px 0 var(--color-electric-cyan)"),
                            (n.current.style.textShadow =
                              4 * Math.random() -
                              2 +
                              "px 0 var(--color-neon-blue)"));
                        },
                      }),
                      c.to(e.current, { duration: 0.5, text: s, ease: "none" }),
                      c.to(e.current, { duration: 1, text: a, ease: "none" }));
                  },
                  a = setTimeout(o, 1e3);
                return () => {
                  clearTimeout(a);
                  const r = e.current,
                    i = t.current,
                    o = n.current;
                  (r && l.Ay.killTweensOf(r),
                    i && l.Ay.killTweensOf(i),
                    o && l.Ay.killTweensOf(o));
                };
              }, []),
              (0, m.jsxs)(te, {
                children: [
                  (0, m.jsx)(ne, { ref: e, children: window.SITE_CONFIG.profile.logoText }),
                  (0, m.jsx)(re, { ref: t }),
                  (0, m.jsx)(re, {
                    ref: n,
                    style: { color: "var(--color-electric-cyan)" },
                  }),
                ],
              })
            );
          };
        var oe = n(282),
          ae = n(8140);
        const se = (0, o.Ay)(s.P.div)`
  position: relative;
  background: var(--color-dark-surface);
  border: 1px solid rgba(0, 210, 255, 0.34);
  border-radius: var(--radius-xl);
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(0, 210, 255, 0.14);
  min-width: 500px;
  width: fit-content;
    
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--color-neon-blue) 0%, transparent 70%);
    opacity: 0.08;
    animation: rotateCode 20s linear infinite;
    pointer-events: none;
  }
  
  @keyframes rotateCode {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,
          le = o.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: var(--color-dark-surface-elevated);
  border-bottom: 1px solid rgba(0, 81, 255, 0.24);
`,
          ce = o.Ay.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(e) => e.color};
  opacity: 0.8;
`,
          de = o.Ay.span`
  margin-left: var(--space-md);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
`,
          pe =
            (o.i7`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`,
            o.Ay.div`
  position: relative;
`),
          ue = (0, o.Ay)(oe.A)`
  margin: 0 !important;
  padding: var(--space-xl) !important;
  background: transparent !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  
  @media (min-width: 1921px) {
    font-size: 16px !important;
  }
  
  @media (max-width: 1280px) {
    font-size: 13px !important;
  }
  
  & code {
    font-family: var(--font-mono) !important;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    white-space: pre !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
  }
  
  /* Custom line highlighting on hover */
  & .token-line:hover {
    background: rgba(0, 210, 255, 0.08);
    position: relative;
  }
`,
          me = () => {
            const [e, t] = (0, r.useState)(""),
              [n, i] = (0, r.useState)(!1),
              [o, a] = (0, r.useState)(!0),
              l = (0, r.useRef)(null),
              c = (0, r.useRef)(0),
              d = window.SITE_CONFIG.terminal.code,
              p = (0, r.useCallback)(() => {
                if (c.current < d.length) {
                  let e = d[c.current];
                  "\\" === e && "n" === d[c.current + 1]
                    ? ((e = "\n"), (c.current += 2))
                    : (c.current++);
                  t((t) => t + e);
                  let n = 22;
                  ((n += 15 * Math.random()),
                    "\n" === e
                      ? (n = 70)
                      : "(" === e || ")" === e || "{" === e || "}" === e
                        ? (n = 45)
                        : " " === e && (n = 15),
                    (l.current = setTimeout(() => {
                      p();
                    }, n)));
                } else
                  (i(!0),
                    setTimeout(() => {
                      a(!1);
                    }, 2e3));
              }, [d.length]);
            (0, r.useEffect)(() => {
              const e = setTimeout(() => {
                p();
              }, 800);
              return () => {
                (clearTimeout(e), l.current && clearTimeout(l.current));
              };
            }, [p]);
            const u = {
              ...ae.A,
              'pre[class*="language-"]': {
                ...ae.A['pre[class*="language-"]'],
                background: "transparent",
                margin: 0,
              },
              'code[class*="language-"]': {
                ...ae.A['code[class*="language-"]'],
                background: "transparent",
              },
            };
            return (0, m.jsxs)(se, {
              initial: { opacity: 0, rotateY: -15, scale: 0.9 },
              animate: { opacity: 1, rotateY: 0, scale: 1 },
              transition: { duration: 0.8, delay: 0.3 },
              whileHover: { rotateY: 5, scale: 1.02 },
              children: [
                (0, m.jsxs)(le, {
                  children: [
                    (0, m.jsx)(ce, { color: "#ff5f57" }),
                    (0, m.jsx)(ce, { color: "#ffbd2e" }),
                    (0, m.jsx)(ce, { color: "#28ca42" }),
                    (0, m.jsx)(de, { children: "server.lua" }),
                  ],
                }),
                (0, m.jsx)(pe, {
                  children: (0, m.jsx)(s.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5 },
                    children: (0, m.jsx)(ue, {
                      language: "lua",
                      style: u,
                      showLineNumbers: !0,
                      lineNumberStyle: {
                        color: "#6e6e80",
                        paddingRight: "20px",
                        userSelect: "none",
                        minWidth: "45px",
                        fontSize: "inherit",
                        fontWeight: "400",
                      },
                      children: e + (o && !n ? "\u2588" : ""),
                    }),
                  }),
                }),
              ],
            });
          },
          he = o.Ay.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: clip;
  background: radial-gradient(ellipse at top, var(--color-royal-blue) 0%, var(--color-deep-blue) 50%);
  padding: var(--space-4xl) 0;
  
  @media (max-width: 768px) {
    padding: var(--space-3xl) 0;
    min-height: 100svh; /* Use small viewport height for mobile */
  }
  
  @supports (padding: max(0px)) {
    @media (max-width: 768px) {
      padding-top: max(var(--space-3xl), env(safe-area-inset-top));
      padding-bottom: max(var(--space-3xl), env(safe-area-inset-bottom));
    }
  }
`,
          xe = o.Ay.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  display: grid;
  grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
  gap: var(--space-5xl);
  align-items: center;
  min-height: 600px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-3xl);
  }
  
  @media (max-width: 768px) {
    padding: 0 var(--space-lg);
    min-height: auto;
    gap: var(--space-2xl);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--space-md);
  }
`,
          ge = (0, o.Ay)(s.P.div)`
  position: relative;
`,
          fe = (0, o.Ay)(s.P.div)`
  position: relative;
  overflow: visible;
  @media (max-width: 1024px) {
    display: none;
  }
`,
          ve = (0, o.Ay)(s.P.p)`
  font-size: var(--text-xl);
  color: var(--color-light-blue);
  margin-bottom: var(--space-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  
  @media (max-width: 768px) {
    font-size: var(--text-lg);
    margin-bottom: var(--space-md);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-base);
  }
`,
          be = (0, o.Ay)(s.P.p)`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-2xl);
  max-width: 600px;
  
  @media (max-width: 1024px) {
    margin: 0 auto var(--space-2xl);
  }
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
    margin-bottom: var(--space-xl);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
  }
`,
          we = (0, o.Ay)(s.P.div)`
  display: flex;
  gap: var(--space-lg);
  flex-wrap: nowrap;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: var(--space-md);
    width: 100%;
    flex-wrap: nowrap;
  }
`,
          ye = (0, o.Ay)(s.P.a)`
  position: relative;
  padding: var(--space-md) var(--space-2xl);
  font-size: var(--text-base);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out-expo);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 480px) {
    flex: 1;
    min-width: 140px;
    padding: var(--space-md) var(--space-xl);
    font-size: var(--text-sm);
  }
  
  &.primary {
    background: var(--gradient-neon);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-glow);
    
    &:hover {
      box-shadow: var(--shadow-glow-intense);
      transform: translateY(-2px) scale(1.05);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--color-neon-blue);
    border: 2px solid var(--color-neon-blue);
    
    &:hover {
      background: var(--color-neon-blue);
      color: var(--color-text-primary);
      border-color: transparent;
      transform: translateY(-2px) scale(1.05);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
  }
`,
          Ae = (0, o.Ay)(s.P.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-neon-blue) 0%, transparent 70%);
  filter: blur(60px);
  opacity: 0.3;
  pointer-events: none;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    filter: blur(40px);
    opacity: 0.2;
  }
  
  @media (max-width: 480px) {
  }
`;

const DiscordContainer = o.Ay.div`
  background: rgba(17, 18, 20, 0.5);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 480px; /* Wider to match the red rectangle footprint */
  min-height: 90px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: ${props => props.$banner ? `url(${props.$banner})` : 'none'};
    background-position: center;
    background-size: cover;
    opacity: 0.3; /* Translucent banner */
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  & > * {
    z-index: 1;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 210, 255, 0.34);
    box-shadow: 0 12px 40px rgba(0, 210, 255, 0.18);
    &::before {
      opacity: 0.4;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 auto 24px;
  }
`;
const DiscordAvatarWrapper = o.Ay.div`
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
`;
const DiscordAvatarImg = o.Ay.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
`;
const DiscordStatusDot = o.Ay.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: -2px;
  border: 3px solid #1a1b1e;
`;
const DiscordInfoBody = o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;
const DiscordNameRow = o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const DiscordName = o.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.2px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
`;
const DiscordStatusDetail = o.Ay.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
`;
const DiscordBadgesContainer = o.Ay.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;
const DiscordBadgeImg = o.Ay.img`
  height: 20px;
  width: auto;
  object-fit: contain;
`;

const DiscordActivityIcon = o.Ay.img`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 6px;
  object-fit: cover;
  flex-shrink: 0;
`;

const SafeDiscordWidget = () => {
  const [data, setData] = (0, r.useState)(null);
  const [profileData, setProfileData] = (0, r.useState)(null);

  (0, r.useEffect)(() => {
    let isMounted = true;
    const targetId = window.SITE_CONFIG?.profile?.discordId || "1073744296215318579";
    
    const fetchPresence = () => {
      fetch("https://api.lanyard.rest/v1/users/" + targetId)
        .then(res => res.json())
        .then(res => { if (isMounted && res.success) setData(res.data); })
        .catch(err => console.error("Discord Widget Error:", err));
    };
    
    const fetchProfile = () => {
      fetch("https://dcdn.dstn.to/profile/" + targetId + "?_t=" + Date.now())
        .then(res => res.json())
        .then(res => { if (isMounted && res.user) setProfileData(res); })
        .catch(err => console.error("Discord Profile API Error:", err));
    };

    fetchPresence();
    fetchProfile();
    const interval = setInterval(fetchPresence, 30000);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  if (!data || !data.discord_user) return null;
  const statusColors = { online: "#23a559", idle: "#f0b232", dnd: "#f23f43", offline: "#80848e" };
  const spotify = data.listening_to_spotify ? data.spotify : null;
  const activity = data.activities?.find(a => a.type !== 4 && a.name !== "Spotify");
  const avatarUrl = data.discord_user?.avatar 
    ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.${data.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=256`
    : `https://cdn.discordapp.com/embed/avatars/${parseInt(data.discord_user.discriminator || "0") % 5}.png`;

  let actualBanner = null;
  let actualBadges = [];
  let activityIcon = null;

  if (profileData && profileData.user && profileData.user.banner) {
     actualBanner = `https://cdn.discordapp.com/banners/${profileData.user.id}/${profileData.user.banner}.${profileData.user.banner.startsWith('a_') ? 'gif' : 'png'}?size=512`;
  } else if (window.SITE_CONFIG?.profile?.discordBanner) {
     actualBanner = window.SITE_CONFIG.profile.discordBanner;
  }

  if (profileData && profileData.badges) {
     actualBadges = profileData.badges.map(b => `https://cdn.discordapp.com/badge-icons/${b.icon}.png`);
  }

  if (activity && activity.assets) {
    const img = activity.assets.large_image || activity.assets.small_image;
    if (img) {
      if (img.startsWith("mp:external/")) {
        activityIcon = `https://media.discordapp.net/external/${img.replace("mp:external/", "")}`;
      } else {
        activityIcon = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png?size=64`;
      }
    }
  }

  return (0, m.jsxs)(DiscordContainer, {
    $banner: actualBanner,
    children: [
      (0, m.jsxs)(DiscordAvatarWrapper, {
        children: [
          (0, m.jsx)(DiscordAvatarImg, { src: avatarUrl, alt: "Avatar" }),
          (0, m.jsx)(DiscordStatusDot, { style: { background: statusColors[data.discord_status] || "#80848e" } })
        ]
      }),
      (0, m.jsxs)(DiscordInfoBody, {
        children: [
          (0, m.jsxs)(DiscordNameRow, { 
            children: [
              (0, m.jsx)(DiscordName, { children: window.SITE_CONFIG?.profile?.discordDisplayName || data.discord_user.global_name || data.discord_user.username }),
              actualBadges.length > 0 && (0, m.jsx)(DiscordBadgesContainer, {
                children: actualBadges.map((badgeUrl, idx) => (0, m.jsx)(DiscordBadgeImg, { src: badgeUrl, alt: "Badge", key: idx }))
              })
            ] 
          }),
          spotify 
            ? (0, m.jsxs)(DiscordStatusDetail, { style: { display: "flex", alignItems: "center" }, children: [(0, m.jsx)("span", { style: { color: "#1DB954", marginRight: "6px" }, children: "🎧" }), spotify.song] })
            : activity 
              ? (0, m.jsxs)(DiscordStatusDetail, { style: { display: "flex", alignItems: "center" }, children: [activityIcon ? (0, m.jsx)(DiscordActivityIcon, { src: activityIcon, alt: "Activity" }) : "\ud83c\udfae ", activity.name] })
              : (0, m.jsx)(DiscordStatusDetail, { children: data.discord_status === "online" ? "Online" : data.discord_status === "dnd" ? "Bitte nicht st\u00f6ren" : "Offline" })
        ]
      })
    ]
  });
};

          const ke = () => {
            const e = (0, r.useRef)(null),
              { scrollYProgress: t } = (0, I.L)({
                target: e,
                offset: ["start start", "end start"],
              }),
              n = (0, N.G)(t, [0, 1], [0, -100]),
              i = (0, N.G)(t, [0, 0.8], [1, 0]);
            (0, r.useEffect)(() => {
              document.querySelectorAll(".floating").forEach((e, t) => {
                l.Ay.to(e, {
                  y: "random(-30, 30)",
                  x: "random(-30, 30)",
                  rotation: "random(-15, 15)",
                  duration: "random(4, 6)",
                  repeat: -1,
                  yoyo: !0,
                  ease: "power1.inOut",
                  delay: 0.2 * t,
                });
              });
            }, []);
            const o = {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            };
            return (0, m.jsxs)(he, {
              ref: e,
              children: [
                (0, m.jsx)(_, {}),
                (0, m.jsx)(Ae, {
                  className: "floating",
                  style: { top: "10%", left: "5%" },
                }),
                (0, m.jsx)(Ae, {
                  className: "floating",
                  style: { bottom: "20%", right: "10%" },
                }),
                (0, m.jsxs)(xe, {
                  children: [
                    (0, m.jsxs)(ge, {
                      variants: {
                        hidden: { opacity: 0, x: -100 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.8,
                            ease: [0.6, -0.05, 0.01, 0.99],
                            staggerChildren: 0.2,
                          },
                        },
                      },
                      initial: "hidden",
                      animate: "visible",
                      style: { y: n, opacity: i },
                      children: [
                        (0, m.jsx)(SafeDiscordWidget, {}),
                        (0, m.jsx)(s.P.div, {
                          variants: o,
                          children: (0, m.jsx)(ve, {
                            children: window.SITE_CONFIG.hero.description,
                          }),
                        }),
                        (0, m.jsx)(ie, {}),
                        (0, m.jsx)(s.P.div, {
                          variants: o,
                          children: (0, m.jsx)(be, {
                            children:
                              "Passionate about creating unique roleplay experiences. I help communities bring their server dreams to life.",
                          }),
                        }),
                        (0, m.jsx)(s.P.div, {
                          variants: o,
                          children: (0, m.jsxs)(we, {
                            children: [
                              (0, m.jsx)(ye, {
                                href: "#services",
                                className: "primary",
                                children: "Explore Services",
                              }),
                              (0, m.jsx)(ye, {
                                href: "#clients",
                                className: "secondary",
                                children: "View Clients",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, m.jsx)(fe, {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 1, delay: 0.5 },
                      children: (0, m.jsx)(me, {}),
                    }),
                  ],
                }),
              ],
            });
          },
          je = () => {
            (0, r.useEffect)(() => {
              const e = ["hero", "about", "skills", "services", "clients"];
              let t = 0;
              const n = (t) => {
                  if (t >= 0 && t < e.length) {
                    const n = document.getElementById(e[t]);
                    if (n) {
                      const e = -80,
                        t =
                          n.getBoundingClientRect().top +
                          window.pageYOffset +
                          e;
                      window.scrollTo({ top: t, behavior: "smooth" });
                    }
                  }
                },
                r = (r) => {
                  if (
                    "INPUT" !== document.activeElement.tagName &&
                    "TEXTAREA" !== document.activeElement.tagName
                  )
                    switch (
                      ((() => {
                        const n = window.scrollY + window.innerHeight / 2;
                        for (let r = 0; r < e.length; r++) {
                          const i = document.getElementById(e[r]);
                          if (i) {
                            const e = i.getBoundingClientRect(),
                              o = e.top + window.scrollY,
                              a = o + e.height;
                            if (n >= o && n <= a) {
                              t = r;
                              break;
                            }
                          }
                        }
                      })(),
                      r.key)
                    ) {
                      case "j":
                      case "ArrowDown":
                        if (r.ctrlKey || r.metaKey) {
                          r.preventDefault();
                          const i = Math.min(t + 1, e.length - 1);
                          n(i);
                        }
                        break;
                      case "k":
                      case "ArrowUp":
                        if (r.ctrlKey || r.metaKey) {
                          r.preventDefault();
                          const e = Math.max(t - 1, 0);
                          n(e);
                        }
                        break;
                      case "1":
                      case "2":
                      case "3":
                      case "4":
                      case "5":
                        if (r.ctrlKey || r.metaKey) {
                          r.preventDefault();
                          const e = parseInt(r.key) - 1;
                          n(e);
                        }
                        break;
                      case "Home":
                        (r.ctrlKey || r.metaKey) && (r.preventDefault(), n(0));
                        break;
                      case "End":
                        (r.ctrlKey || r.metaKey) &&
                          (r.preventDefault(), n(e.length - 1));
                    }
                };
              return (
                window.addEventListener("keydown", r),
                () => {
                  window.removeEventListener("keydown", r);
                }
              );
            }, []);
          },
          Ee = (0, r.lazy)(() => n.e(568).then(n.bind(n, 1568))),
          Se = (0, r.lazy)(() =>
            Promise.all([n.e(96), n.e(748)]).then(n.bind(n, 3748)),
          ),
          Ce = (0, r.lazy)(() => n.e(522).then(n.bind(n, 6394))),
          Pe = (0, r.lazy)(() => n.e(994).then(n.bind(n, 5994))),
          Be = (0, r.lazy)(() => n.e(461).then(n.bind(n, 9461))),
          ze = (0, r.lazy)(() => n.e(221).then(n.bind(n, 5221)));
        l.Ay.registerPlugin(c.u);
        const Le = o.Ay.div`
  position: relative;
  width: 100%;
  background: var(--color-deep-blue);
  /* Prevent margin collapse */
  padding-top: 0.1px;
`,
          Te = o.Ay.main`
  position: relative;
  z-index: 1;
  /* Prevent margin collapse between sections */
  display: flex;
  flex-direction: column;
`,
          Ke = o.Ay.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  background: var(--color-deep-blue);
  /* Prevent margin collapse */
  padding-top: 0.1px;
  padding-bottom: 0.1px;
`,
          Ie = o.Ay.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
`,
          Ne = {
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.2,
              },
            },
          },
          Me = () => {
            const [e, t] = (0, r.useState)(!1),
              [n, i] = (0, r.useState)(!1);
            return (
              je(),
              (0, r.useEffect)(() => {
                (i("ontouchstart" in window || navigator.maxTouchPoints > 0),
                  c.u.config({
                    ignoreMobileResize: !0,
                    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
                  }));
                const e = (() => {
                  ((document.documentElement.style.scrollBehavior = "smooth"),
                    c.u.config({
                      ignoreMobileResize: !0,
                      autoRefreshEvents:
                        "visibilitychange,DOMContentLoaded,load",
                    }));
                  const e = (e) => {
                    const t = 0.9 * window.innerHeight;
                    let n = null;
                    switch (e.key) {
                      case "ArrowDown":
                        n = window.scrollY + 120;
                        break;
                      case "ArrowUp":
                        n = window.scrollY - 120;
                        break;
                      case "PageDown":
                      case " ":
                        e.shiftKey ||
                          ((n = window.scrollY + t), e.preventDefault());
                        break;
                      case "PageUp":
                        n = window.scrollY - t;
                        break;
                      case "Home":
                        n = 0;
                        break;
                      case "End":
                        n =
                          document.documentElement.scrollHeight -
                          window.innerHeight;
                        break;
                      default:
                        return;
                    }
                    null !== n &&
                      (e.preventDefault(), d.A.programmaticScroll(n));
                  };
                  let t;
                  const n = () => {
                    (clearTimeout(t),
                      (t = setTimeout(() => {
                        c.u.update();
                      }, 100)));
                  };
                  return (
                    window.addEventListener("keydown", e),
                    window.addEventListener("scroll", n, { passive: !0 }),
                    window.addEventListener("resize", () => {
                      c.u.refresh();
                    }),
                    c.u.refresh(),
                    () => {
                      ((document.documentElement.style.scrollBehavior = "auto"),
                        window.removeEventListener("keydown", e),
                        window.removeEventListener("scroll", n),
                        clearTimeout(t));
                    }
                  );
                })();
                return (
                  c.u.batch(".fade-in", {
                    start: "top 85%",
                    end: "bottom 15%",
                    onEnter: (e) =>
                      l.os.to(e, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        stagger: 0.1,
                        overwrite: "auto",
                      }),
                    onLeave: (e) =>
                      l.os.set(e, { opacity: 0, y: 30, overwrite: "auto" }),
                    onEnterBack: (e) =>
                      l.os.to(e, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        stagger: 0.08,
                        overwrite: "auto",
                      }),
                    onLeaveBack: (e) =>
                      l.os.set(e, { opacity: 0, y: 30, overwrite: "auto" }),
                  }),
                  l.os.set(".fade-in", { opacity: 0, y: 30 }),
                  l.os.utils.toArray("[data-speed]").forEach((e) => {
                    const t = parseFloat(e.dataset.speed) || 0.5;
                    c.u.create({
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1,
                      onUpdate: (n) => {
                        const r = 100 * n.progress * (1 - t);
                        l.os.set(e, { yPercent: -r, force3D: !0 });
                      },
                    });
                  }),
                  l.os.utils.toArray("[data-scale]").forEach((e) => {
                    l.os.fromTo(
                      e,
                      { scale: 0.8, opacity: 0 },
                      {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                          trigger: e,
                          start: "top 80%",
                          end: "top 50%",
                          scrub: 1,
                        },
                      },
                    );
                  }),
                  () => {
                    e && e();
                  }
                );
              }, []),
              (0, r.useEffect)(() => {
                if (!e) {
                  c.u.refresh();
                  const e = setTimeout(() => {
                    c.u.refresh();
                  }, 500);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [e]),
              (0, m.jsxs)(m.Fragment, {
                children: [
                  null,
                  !e &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsx)(v, {}),
                        (0, m.jsx)(b, {}),
                        (0, m.jsx)(a.N, {
                          children: (0, m.jsxs)(Le, {
                            children: [
                              (0, m.jsx)(r.Suspense, {
                                fallback: null,
                                children: (0, m.jsx)(Ee, {}),
                              }),
                              (0, m.jsx)(U, {}),
                              (0, m.jsxs)(Te, {
                                children: [
                                  (0, m.jsxs)(s.P.div, {
                                    variants: Ne,
                                    initial: "initial",
                                    animate: "animate",
                                    children: [
                                      (0, m.jsx)(Ke, {
                                        id: "hero",
                                        children: (0, m.jsx)(ke, {}),
                                      }),
                                      (0, m.jsx)(Ke, {
                                        id: "about",
                                        children: (0, m.jsx)(r.Suspense, {
                                          fallback: (0, m.jsx)(Ie, {
                                            children: "Loading...",
                                          }),
                                          children: (0, m.jsx)(Se, {}),
                                        }),
                                      }),
                                      (0, m.jsx)(Ke, {
                                        id: "skills",
                                        children: (0, m.jsx)(r.Suspense, {
                                          fallback: (0, m.jsx)(Ie, {
                                            children: "Loading...",
                                          }),
                                          children: (0, m.jsx)(Ce, {}),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsx)(r.Suspense, {
                                    fallback: (0, m.jsx)(Ie, {
                                      children: "Loading...",
                                    }),
                                    children: (0, m.jsx)(Pe, {}),
                                  }),
                                  (0, m.jsxs)(s.P.div, {
                                    variants: Ne,
                                    initial: "initial",
                                    animate: "animate",
                                    children: [
                                      (0, m.jsx)(Ke, {
                                        id: "clients",
                                        children: (0, m.jsx)(r.Suspense, {
                                          fallback: (0, m.jsx)(Ie, {
                                            children: "Loading...",
                                          }),
                                          children: (0, m.jsx)(Be, {}),
                                        }),
                                      }),
                                      (0, m.jsx)(r.Suspense, {
                                        fallback: (0, m.jsx)(Ie, {
                                          children: "Loading...",
                                        }),
                                        children: (0, m.jsx)(ze, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        !n && (0, m.jsx)(f, {}),
                      ],
                    }),
                ],
              })
            );
          },
          Ye = (e) => {
            e &&
              e instanceof Function &&
              n
                .e(96)
                .then(n.bind(n, 8206))
                .then((t) => {
                  let {
                    getCLS: n,
                    getFID: r,
                    getFCP: i,
                    getLCP: o,
                    getTTFB: a,
                  } = t;
                  (n(e), r(e), i(e), o(e), a(e));
                });
          };
        (i
          .createRoot(document.getElementById("root"))
          .render((0, m.jsx)(Me, {})),
          setTimeout(() => {
            document.body.classList.add("loaded");
          }, 100),
          Ye());
      },
      5549: (e) => {
        e.exports =
          "data:image/png;base64,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";
      },
      7007: (e, t, n) => {
        n.d(t, { A: () => r });
        const r = new (class {
          constructor() {
            ((this.isProgScrolling = !1),
              (this.scrollTimeout = null),
              (this.listeners = new Set()));
          }
          addListener(e) {
            return (this.listeners.add(e), () => this.listeners.delete(e));
          }
          notifyListeners(e) {
            this.listeners.forEach((t) => t(e));
          }
          programmaticScroll(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const { smooth: n = !0, offset: r = 0, onComplete: i = null } = t;
            ((this.isProgScrolling = !0),
              this.notifyListeners({ type: "start", smooth: n }),
              clearTimeout(this.scrollTimeout));
            let o = 0;
            if ("string" === typeof e) {
              const t = document.getElementById(e);
              t && (o = t.offsetTop + r);
            } else
              "number" === typeof e
                ? (o = e)
                : e instanceof HTMLElement && (o = e.offsetTop + r);
            window.scrollTo({ top: o, behavior: n ? "smooth" : "instant" });
            const a = window.pageYOffset || document.documentElement.scrollTop,
              s = Math.abs(o - a),
              l = n ? Math.min(Math.max(s / 3, 300), 1500) : 50;
            this.scrollTimeout = setTimeout(() => {
              ((this.isProgScrolling = !1),
                this.notifyListeners({ type: "end" }),
                i && i());
            }, l);
          }
          isProgrammaticScrolling() {
            return this.isProgScrolling;
          }
          cleanup() {
            (clearTimeout(this.scrollTimeout),
              (this.isProgScrolling = !1),
              this.listeners.clear());
          }
        })();
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return (e[r](o, o.exports, n), o.exports);
  }
  ((n.m = e),
    (() => {
      var e = [];
      n.O = (t, r, i, o) => {
        if (!r) {
          var a = 1 / 0;
          for (d = 0; d < e.length; d++) {
            ((r = e[d][0]), (i = e[d][1]), (o = e[d][2]));
            for (var s = !0, l = 0; l < r.length; l++)
              (!1 & o || a >= o) && Object.keys(n.O).every((e) => n.O[e](r[l]))
                ? r.splice(l--, 1)
                : ((s = !1), o < a && (a = o));
            if (s) {
              e.splice(d--, 1);
              var c = i();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        o = o || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
        e[d] = [r, i, o];
      };
    })(),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (n.d(t, { a: t }), t);
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) =>
      "static/js/" +
      e +
      "." +
      {
        221: "156d6964",
        461: "fc4613b2",
        522: "0f6c926d",
        568: "69b20da8",
        748: "98a433b0",
        994: "e9bf1f5e",
      }[e] +
      ".chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "Ashraf1337:";
      n.l = (r, i, o, a) => {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), d = 0;
              d < c.length;
              d++
            ) {
              var p = c[d];
              if (
                p.getAttribute("src") == r ||
                p.getAttribute("data-webpack") == t + o
              ) {
                s = p;
                break;
              }
            }
          (s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + o),
            (s.src = r)),
            (e[r] = [i]));
          var u = (t, n) => {
              ((s.onerror = s.onload = null), clearTimeout(m));
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            m = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: s }),
              12e4,
            );
          ((s.onerror = u.bind(null, s.onerror)),
            (s.onload = u.bind(null, s.onload)),
            l && document.head.appendChild(s));
        }
      };
    })(),
    (n.r = (e) => {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.p = ""),
    (() => {
      var e = { 792: 0 };
      ((n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var o = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = o));
            var a = n.p + n.u(t),
              s = new Error();
            n.l(
              a,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  ((s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    i[1](s));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (n.O.j = (t) => 0 === e[t]));
      var t = (t, r) => {
          var i,
            o,
            a = r[0],
            s = r[1],
            l = r[2],
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) var d = l(n);
          }
          for (t && t(r); c < a.length; c++)
            ((o = a[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
          return n.O(d);
        },
        r = (self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []);
      (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
    })(),
    (n.nc = void 0));
  var r = n.O(void 0, [96], () => n(1848));
  r = n.O(r);
})();
