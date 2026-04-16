"use strict";
(self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []).push([
  [568],
  {
    1568: (e, r, n) => {
      (n.r(r), n.d(r, { default: () => f }));
      var o = n(9950),
        s = n(4752),
        t = n(4414);
      const i = s.Ay.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #00ff00;
  font-family: monospace;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;
  z-index: 10000;
  pointer-events: none;
  display: ${(e) => (e.$visible ? "block" : "none")};
`,
        c = s.Ay.div`
  margin: 2px 0;
  color: ${(e) => ("fps" === e.$type ? (e.$value < 30 ? "#ff0000" : e.$value < 50 ? "#ffff00" : "#00ff00") : "#00ff00")};
`,
        l = o.memo(() => {
          const [e, r] = (0, o.useState)({
              fps: 0,
              memory: 0,
              domNodes: 0,
              scrollTriggers: 0,
            }),
            [n, s] = (0, o.useState)(!1),
            l = (0, o.useRef)(0),
            f = (0, o.useRef)(performance.now());
          return (
            (0, o.useEffect)(() => {
              const e = (e) => {
                e.ctrlKey && e.shiftKey && "P" === e.key && s((e) => !e);
              };
              return (
                window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e)
              );
            }, []),
            (0, o.useEffect)(() => {
              if (!n) return;
              let e;
              const o = () => {
                l.current++;
                const n = performance.now();
                if (n >= f.current + 1e3) {
                  const e = Math.round((1e3 * l.current) / (n - f.current)),
                    o = performance.memory
                      ? Math.round(performance.memory.usedJSHeapSize / 1048576)
                      : 0,
                    s = document.getElementsByTagName("*").length;
                  let t = 0;
                  (window.ScrollTrigger &&
                    (t = window.ScrollTrigger.getAll().length),
                    r({ fps: e, memory: o, domNodes: s, scrollTriggers: t }),
                    (l.current = 0),
                    (f.current = n));
                }
                e = requestAnimationFrame(o);
              };
              return (
                (e = requestAnimationFrame(o)),
                () => {
                  e && cancelAnimationFrame(e);
                }
              );
            }, [n]),
            (0, t.jsxs)(i, {
              $visible: n,
              children: [
                (0, t.jsxs)(c, {
                  $type: "fps",
                  $value: e.fps,
                  children: ["FPS: ", e.fps],
                }),
                e.memory > 0 &&
                  (0, t.jsxs)(c, { children: ["Memory: ", e.memory, " MB"] }),
                (0, t.jsxs)(c, { children: ["DOM Nodes: ", e.domNodes] }),
                (0, t.jsxs)(c, {
                  children: ["ScrollTriggers: ", e.scrollTriggers],
                }),
              ],
            })
          );
        });
      l.displayName = "PerformanceMonitor";
      const f = l;
    },
  },
]);
