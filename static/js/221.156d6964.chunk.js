"use strict";
(self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []).push([
  [221],
  {
    5221: (e, a, t) => {
      (t.r(a), t.d(a, { default: () => m }));
      var i = t(9950),
        r = t(4752),
        o = t(5385),
        n = t(5549),
        s = t(4414);
      const l = r.Ay.footer`
  position: relative;
  padding: var(--space-md) 0;
  background: transparent;
  border-top: 1px solid rgba(0, 210, 255, 0.14);
  overflow: hidden;
  min-height: 80px;
  
  @media (max-width: 768px) {
    padding: var(--space-lg) 0;
  }
`,
        p = r.Ay.div`
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
        d = r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }
`,
        c = r.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`,
        x = (0, r.Ay)(o.P.img)`
  height: 40px;
  width: auto;
  filter: brightness(1.2) saturate(1.1);
  transition: all var(--duration-normal) var(--ease-out-expo);
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: 36px;
  }
  
  &:hover {
    filter: brightness(1.4) saturate(1.3);
    transform: scale(1.1);
  }
`,
        h = r.Ay.p`
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
  }
`,
        g = r.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,
        u = r.Ay.div`
  display: flex;
  gap: var(--space-sm);
`,
        b = (0, r.Ay)(o.P.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 210, 255, 0.08);
  border: 1px solid rgba(0, 210, 255, 0.24);
  border-radius: var(--radius-full);
  color: var(--color-light-blue);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out-expo);
  position: relative;
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--color-neon-blue), var(--color-electric-cyan));
    border-radius: var(--radius-full);
    opacity: 0;
    z-index: -1;
    transition: opacity var(--duration-normal) ease;
  }
  
  &:hover {
    background: rgba(0, 210, 255, 0.14);
    border-color: transparent;
    color: var(--color-white);
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.3;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    
    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`,
        v =
          ((0, r.Ay)(o.P.button)`
  width: 40px;
  height: 40px;
  background: rgba(0, 210, 255, 0.08);
  border: 1px solid rgba(0, 210, 255, 0.24);
  border-radius: var(--radius-full);
  color: var(--color-light-blue);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out-expo);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 0;
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
  
  &:hover {
    background: var(--color-neon-blue);
    border-color: var(--color-neon-blue);
    color: var(--color-white);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 210, 255, 0.34);
  }
`,
          r.Ay.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(0, 210, 255, 0.34) 25%, 
    rgba(0, 210, 255, 0.52) 50%, 
    rgba(0, 210, 255, 0.34) 75%, 
    transparent 100%
  );
  top: 0;
  left: 0;
  opacity: 0.5;
  pointer-events: none;
`),
        m = () => {
          const [e, a] = (0, i.useState)(!1),
            [t, r] = (0, i.useState)(!1),
            [m, f] = (0, i.useState)(!1),
            [w, y] = (0, i.useState)(!1),
            [k, j] = (0, i.useState)(!1);
          return (0, s.jsxs)(l, {
            children: [
              (0, s.jsx)(v, {}),
              m &&
                (0, s.jsxs)(o.P.div, {
                  style: {
                    position: "fixed",
                    bottom: "120px",
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
                  transition: { type: "spring", stiffness: 500, damping: 30 },
                  children: [
                    (0, s.jsx)(o.P.svg, {
                      viewBox: "0 0 24 24",
                      style: { width: "14px", height: "14px" },
                      initial: { scale: 0, rotate: -90 },
                      animate: { scale: 1, rotate: 0 },
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                      },
                      children: (0, s.jsx)("polyline", {
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
              (0, s.jsx)(p, {
                children: (0, s.jsxs)(d, {
                  children: [
                    (0, s.jsxs)(c, {
                      children: [
                        (0, s.jsx)(x, {
                          src: n,
                          alt: "Ashraf1337",
                          onClick: () => {
                            (a(!0),
                              setTimeout(() => a(!1), 600),
                              window.scrollTo({ top: 0, behavior: "smooth" }));
                          },
                          animate: { rotate: e ? 360 : 0 },
                          transition: { duration: 0.6, ease: "easeInOut" },
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.95 },
                        }),
                        (0, s.jsxs)(h, {
                          children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Ashraf1337",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(g, {
                      children: (0, s.jsxs)(u, {
                        children: [
                          (0, s.jsx)(b, {
                            href: "https://github.com/kenshiin13",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "GitHub Profile",
                            onClick: () => {
                              (y(!0), setTimeout(() => y(!1), 600));
                            },
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            title: "GitHub",
                            children: (0, s.jsx)(o.P.svg, {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              animate: { rotate: w ? 360 : 0 },
                              transition: { duration: 0.6, ease: "easeInOut" },
                              children: (0, s.jsx)("path", {
                                d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
                              }),
                            }),
                          }),
                          (0, s.jsx)(b, {
                            as: "button",
                            onClick: (e) => {
                              (e.preventDefault(),
                                j(!0),
                                setTimeout(() => j(!1), 600),
                                navigator.clipboard.writeText("kenshin13"),
                                r(!0),
                                f(!0),
                                setTimeout(() => {
                                  (f(!1), r(!1));
                                }, 2e3));
                            },
                            "aria-label": "Discord: kenshin13 (Click to copy)",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            title: "Discord: kenshin13 (Click to copy)",
                            style: {
                              background: t
                                ? "rgba(74, 222, 128, 0.1)"
                                : "rgba(0, 210, 255, 0.08)",
                              borderColor: t
                                ? "rgba(74, 222, 128, 0.3)"
                                : "rgba(0, 210, 255, 0.24)",
                            },
                            children: (0, s.jsx)(o.P.svg, {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              animate: { rotate: k ? 360 : 0 },
                              transition: { duration: 0.6, ease: "easeInOut" },
                              children: (0, s.jsx)("path", {
                                d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);
