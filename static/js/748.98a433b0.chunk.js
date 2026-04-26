"use strict";
(self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []).push([
  [748],
  {
    3748: (e, t, a) => {
      (a.r(t), a.d(t, { default: () => q }));
      var r = a(9950),
        i = a(4752),
        o = a(5385),
        n = a(2903),
        s = a(1131),
        l = a(4414);
      n.Ay.registerPlugin(s.u);
      const c = (0, i.Ay)(o.P.div)`
  position: relative;
  padding: var(--space-2xl) 0;
  
  @media (max-width: 1024px) {
    padding: var(--space-xl) 0;
  }
  
  @media (max-width: 768px) {
    padding: var(--space-lg) 0;
  }
`,
        d = i.Ay.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(0, 210, 255, 0.24);
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 20px;
    transform: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: var(--gradient-neon);
    transition: height 1.5s ease-out;
  }
  
  &.active::before {
    height: 100%;
  }
`,
        p = (0, i.Ay)(o.P.div)`
  position: relative;
  width: 50%;
  padding: var(--space-xl) var(--space-2xl);
  margin-left: ${(e) => ("right" === e.$align ? "50%" : "0")};
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: var(--space-lg) 0 var(--space-lg) calc(40px + var(--space-lg));
  }
  
  @media (max-width: 480px) {
    padding: var(--space-md) 0 var(--space-md) calc(40px + var(--space-md));
  }
`,
        m = (0, i.Ay)(o.P.div)`
  position: relative;
  background: var(--color-surface);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 210, 255, 0.24);
  }
  
  @media (max-width: 768px) {
    padding: var(--space-lg);
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--space-md);
  }
`,
        x = (0, i.Ay)(o.P.div)`
  position: absolute;
  top: var(--space-xl);
  ${(e) => ("right" === e.$align ? "left: -8px;" : "right: -8px;")}
  width: 16px;
  height: 16px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--color-surface), 0 0 0 8px rgba(0, 210, 255, 0.34);
  z-index: 10;
  
  @media (max-width: 768px) {
    left: 12px;
    right: auto;
    top: var(--space-lg);
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    left: 13px;
    top: var(--space-md);
    box-shadow: 0 0 0 3px var(--color-surface), 0 0 0 6px rgba(0, 210, 255, 0.34);
  }
`,
        g = (0, i.Ay)(o.P.span)`
  position: absolute;
  top: var(--space-xl);
  ${(e) => ("right" === e.$align ? "right: calc(100% + var(--space-2xl));" : "left: calc(100% + var(--space-2xl));")}
  font-size: var(--text-2xl);
  font-weight: 900;
  color: var(--color-neon-blue);
  
  @media (max-width: 768px) {
    position: static;
    display: block;
    margin-bottom: var(--space-sm);
    font-size: var(--text-xl);
  }
`,
        v = i.Ay.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-sm);
  
  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-base);
  }
`,
        h = i.Ay.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--text-sm);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
    line-height: 1.5;
  }
`,
        u = () => {
          const e = (0, r.useRef)(null),
            t = (0, r.useRef)(null),
            a = (0, r.useRef)([]),
            i = window.SITE_CONFIG.timeline.map((e, t) => ({
              ...e,
              align: t % 2 === 0 ? "left" : "right",
            }));
          return (
            (0, r.useEffect)(() => {
              const r = e.current,
                o = t.current,
                l = a.current;
              if (r && o && 0 !== l.length)
                return (
                  setTimeout(() => {
                    try {
                      n.Ay.fromTo(
                        o,
                        { "--progress": "0%" },
                        {
                          "--progress": "100%",
                          ease: "none",
                          scrollTrigger: {
                            trigger: r,
                            start: "top 80%",
                            end: "bottom 60%",
                            scrub: 1,
                            onUpdate: (e) => {
                              o &&
                                o.style &&
                                o.style.setProperty(
                                  "--progress",
                                  100 * e.progress + "%",
                                );
                            },
                          },
                        },
                      );
                    } catch (e) {}
                    l.forEach((t, a) => {
                      if (t)
                        try {
                          const e = n.Ay.timeline({
                              scrollTrigger: {
                                trigger: t,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                              },
                            }),
                            r = i[a] && "left" === i[a].align ? -50 : 50;
                          e.fromTo(
                            t,
                            { opacity: 0, x: r, scale: 0.9 },
                            {
                              opacity: 1,
                              x: 0,
                              scale: 1,
                              duration: 0.8,
                              ease: "power2.out",
                            },
                          );
                          const o = t.querySelector(".timeline-dot"),
                            s = t.querySelector(".timeline-year");
                          (o &&
                            e.fromTo(
                              o,
                              { scale: 0 },
                              {
                                scale: 1,
                                duration: 0.4,
                                ease: "back.out(1.7)",
                              },
                              "-=0.4",
                            ),
                            s &&
                              e.fromTo(
                                s,
                                { opacity: 0, scale: 0.8 },
                                { opacity: 1, scale: 1, duration: 0.4 },
                                "-=0.2",
                              ));
                        } catch (e) {}
                    });
                    try {
                      const e = document.createElement("style");
                      (e.setAttribute("data-timeline", "true"),
                        o &&
                          o.className &&
                          ((e.textContent = `\n            ${o.className
                            .split(" ")
                            .map((e) => `.${e}`)
                            .join(
                              "",
                            )}::before {\n              height: var(--progress, 0%);\n            }\n          `),
                          document.head.appendChild(e)));
                    } catch (e) {}
                  }, 100),
                  () => {
                    s.u.getAll().forEach((e) => {
                      (e.trigger === r || l.includes(e.trigger)) && e.kill();
                    });
                    document
                      .querySelectorAll("style[data-timeline]")
                      .forEach((e) => e.remove());
                  }
                );
            }, [i]),
            (0, l.jsxs)(c, {
              ref: e,
              children: [
                (0, l.jsx)(d, { ref: t }),
                i.map((e, t) =>
                  (0, l.jsxs)(
                    p,
                    {
                      ref: (e) => (a.current[t] = e),
                      $align: e.align,
                      children: [
                        (0, l.jsx)(x, {
                          className: "timeline-dot",
                          $align: e.align,
                        }),
                        (0, l.jsx)(g, {
                          className: "timeline-year",
                          $align: e.align,
                          children: e.year,
                        }),
                        (0, l.jsxs)(m, {
                          children: [
                            (0, l.jsx)(v, { children: e.title }),
                            (0, l.jsx)(h, { children: e.description }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              ],
            })
          );
        };
      var f = a(8688);
      const y = i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-xl);
  }
  
  @media (max-width: 480px) {
    gap: var(--space-sm);
  }
`,
        b = (0, i.Ay)(o.P.div)`
  text-align: center;
  padding: var(--space-xl);
  background: rgba(0, 210, 255, 0.08);
  border: 1px solid rgba(0, 210, 255, 0.24);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out-expo);
  
  @media (max-width: 640px) {
    padding: var(--space-lg);
  }
  
  @media (max-width: 480px) {
    padding: var(--space-md);
    border-radius: var(--radius-lg);
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-neon-blue);
    background: rgba(0, 210, 255, 0.14);
    
    &::before {
      transform: translateX(0);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 210, 255, 0.14) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform var(--duration-slow) var(--ease-out-expo);
  }
`,
        w = i.Ay.div`
  font-size: var(--text-4xl);
  font-weight: 900;
  color: var(--color-neon-blue);
  margin-bottom: var(--space-sm);
  font-family: var(--font-mono);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`,
        j = i.Ay.div`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  font-weight: 600;
  position: relative;
  z-index: 1;
`,
        A = (e) => {
          let { value: t, suffix: a = "", label: i, delay: o = 0 } = e;
          const [n, s] = (0, r.useState)(0),
            c = (0, r.useRef)(null),
            d = (0, f.W)(c, { once: !0, margin: "-50px" }),
            p = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(() => {
              if (!d || p.current || !t) return;
              p.current = !0;
              let e = 0;
              const a = setInterval(() => {
                if ((e++, 60 === e)) (s(t), clearInterval(a));
                else {
                  const a = e / 60,
                    r = 1 - Math.pow(1 - a, 3);
                  s(Math.floor(t * r));
                }
              }, 2e3 / 60);
              return () => clearInterval(a);
            }, [d, t]),
            (0, l.jsxs)(b, {
              ref: c,
              initial: { scale: 0.8, opacity: 0 },
              animate: d ? { scale: 1, opacity: 1 } : {},
              transition: {
                duration: 0.5,
                delay: o,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
              whileHover: { scale: 1.05 },
              children: [
                (0, l.jsxs)(w, { children: [n.toLocaleString(), a] }),
                (0, l.jsx)(j, { children: i }),
              ],
            })
          );
        },
        z = () =>
          (0, l.jsx)(y, {
            children: window.SITE_CONFIG.stats.map((e, t) =>
              (0, l.jsx)(
                A,
                {
                  value: e.value,
                  suffix: e.suffix,
                  label: e.label,
                  delay: 0.1 * t,
                },
                t,
              ),
            ),
          });
      n.Ay.registerPlugin(s.u);
      const k = i.Ay.section`
  min-height: 100vh;
  padding: var(--space-5xl) 0;
  position: relative;
  background: linear-gradient(180deg, var(--color-deep-blue) 0%, var(--color-dark-surface) 100%);
  overflow: hidden;
  /* Prevent margin collapse */
  &::before {
    content: '';
    display: table;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  @media (max-width: 768px) {
    padding: var(--space-4xl) 0;
    min-height: auto;
  }
  
  @media (max-width: 480px) {
    padding: var(--space-3xl) 0;
  }
`,
        P = i.Ay.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 var(--space-lg);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--space-md);
  }
`,
        S = i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
`,
        E = (0, i.Ay)(o.P.div)``,
        T = (0, i.Ay)(o.P.span)`
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-neon-blue);
  margin-bottom: var(--space-md);
`,
        R = (0, i.Ay)(o.P.h2)`
  font-size: var(--text-5xl);
  font-weight: 900;
  color: var(--color-white);
  margin-bottom: var(--space-xl);
  line-height: 1.1;
  
  @media (max-width: 1024px) {
    font-size: var(--text-4xl);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3rem);
    margin-bottom: var(--space-lg);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
  }
`,
        $ = (0, i.Ay)(o.P.p)`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-2xl);
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
    line-height: 1.7;
    margin-bottom: var(--space-xl);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-sm);
    line-height: 1.6;
  }
`,
        F = (0, i.Ay)(o.P.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-3xl);
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-2xl);
  }
`,
        X = (0, i.Ay)(o.P.div)`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
`,
        C = i.Ay.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neon-blue);
`,
        M = i.Ay.div`
  flex: 1;
`,
        N = i.Ay.h4`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-xs);
  
  @media (max-width: 480px) {
    font-size: var(--text-sm);
  }
`,
        L = i.Ay.p`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
`,
        O = (0, i.Ay)(o.P.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-neon-blue) 0%, transparent 70%);
  opacity: 0.1;
  filter: blur(100px);
  pointer-events: none;
  
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
    filter: blur(80px);
    opacity: 0.08;
  }
  
  @media (max-width: 480px) {
    display: none; /* Hide on small screens for performance */
  }
`,
        I = window.SITE_CONFIG.about.offerItems,
        D = r.memo(() => {
          const e = (0, r.useRef)(null),
            t = (0, r.useRef)(null),
            a = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              const r = e.current,
                i = t.current,
                o = a.current;
              if (!r || !i) return;
              const s = [],
                l = n.Ay.context(() => {
                  const e = n.Ay.timeline({
                    scrollTrigger: {
                      trigger: r,
                      start: "top 80%",
                      end: "bottom 20%",
                      toggleActions: "play none none reverse",
                      fastScrollEnd: !0,
                      preventOverlaps: !0,
                      refreshPriority: 1,
                      invalidateOnRefresh: !0,
                    },
                  });
                  if (
                    (n.Ay.set(
                      [
                        ".section-label",
                        ".title",
                        ".description",
                        ".feature-item",
                      ],
                      {
                        opacity: 0,
                        y: function (e) {
                          return 20 + 10 * e;
                        },
                      },
                    ),
                    e
                      .to(".section-label", { opacity: 1, y: 0, duration: 0.6 })
                      .to(
                        ".title",
                        { opacity: 1, y: 0, duration: 0.8 },
                        "-=0.3",
                      )
                      .to(
                        ".description",
                        { opacity: 1, y: 0, duration: 0.8 },
                        "-=0.4",
                      )
                      .to(
                        ".feature-item",
                        {
                          opacity: 1,
                          y: 0,
                          duration: 0.6,
                          stagger: 0.1,
                          ease: "power2.out",
                        },
                        "-=0.3",
                      ),
                    s.push(e.scrollTrigger),
                    o)
                  ) {
                    const e = n.Ay.to(o, {
                      y: -100,
                      x: 50,
                      force3D: !0,
                      scrollTrigger: {
                        trigger: r,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                        fastScrollEnd: !0,
                        refreshPriority: 0,
                        invalidateOnRefresh: !0,
                      },
                    });
                    e.scrollTrigger && s.push(e.scrollTrigger);
                  }
                }, i);
              return () => {
                l.revert();
              };
            }, []),
            (0, l.jsxs)(k, {
              ref: e,
              children: [
                (0, l.jsx)(O, {
                  ref: a,
                  style: { top: "20%", right: "-300px" },
                }),
                (0, l.jsx)(P, {
                  children: (0, l.jsxs)(S, {
                    children: [
                      (0, l.jsxs)(E, {
                        ref: t,
                        children: [
                          (0, l.jsx)(T, {
                            className: "section-label",
                            children: window.SITE_CONFIG.about.label,
                          }),
                          (0, l.jsx)(R, {
                            className: "title",
                            children: window.SITE_CONFIG.about.title,
                          }),
                          (0, l.jsx)($, {
                            className: "description",
                            children: window.SITE_CONFIG.about.description,
                          }),
                          (0, l.jsx)(o.P.h3, {
                            style: {
                              fontSize: "var(--text-2xl)",
                              marginBottom: "var(--space-xl)",
                              color: "var(--color-text-primary)",
                            },
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.3 },
                            children: window.SITE_CONFIG.about.offersTitle,
                          }),
                          (0, l.jsx)(F, {
                            children: I.map((e, t) =>
                              (0, l.jsxs)(
                                X,
                                {
                                  className: "feature-item",
                                  children: [
                                    (0, l.jsx)(C, { children: e.icon }),
                                    (0, l.jsxs)(M, {
                                      children: [
                                        (0, l.jsx)(N, { children: e.title }),
                                        (0, l.jsx)(L, {
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                          (0, l.jsx)(z, {}),
                        ],
                      }),
                      (0, l.jsx)(E, { children: (0, l.jsx)(u, {}) }),
                    ],
                  }),
                }),
              ],
            })
          );
        });
      D.displayName = "About";
      const q = D;
    },
  },
]);
