"use strict";
(self.webpackChunkkenshin13 = self.webpackChunkkenshin13 || []).push([
  [522],
  {
    6394: (e, t, r) => {
      (r.r(t), r.d(t, { default: () => Q }));
      var i = r(9950),
        a = r(4752),
        o = r(5385),
        n = r(2903),
        s = r(1131);
      const l = r.p + "static/media/lua.75103638716ba2f3b9e6.png";
      const c =
          r.p + "static/media/react.png",
        p = r.p + "static/media/mongo_db.0d7cce387af9b39bf209.png";
      r.p;
      const d = r.p + "static/media/php.a2ea1951dde994014a34.png";
      const m =
        r.p + "static/media/devops.92006e9d6d09682dc47f22bbaea5bcb9.svg";
      var g = r(4414);
      n.Ay.registerPlugin(s.u);
      const h = a.Ay.section`
  position: relative;
  background: transparent;
  padding: var(--space-2xl) 0 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: var(--space-xl) 0 0;
  }
`,
        x = a.Ay.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,
        f = a.Ay.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
`,
        v = (0, a.Ay)(o.P.span)`
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-neon-blue);
  margin-bottom: var(--space-md);
`,
        u = (0, a.Ay)(o.P.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--color-white);
  margin-bottom: var(--space-lg);
  line-height: 1.1;
  background: linear-gradient(135deg, var(--color-white) 0%, var(--color-light-blue) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
  }
`,
        y = (0, a.Ay)(o.P.p)`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-base);
  }
`,
        b = a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
  margin-top: var(--space-3xl);
  margin-bottom: var(--space-xl);
  
  @media (max-width: 768px) {
    gap: var(--space-2xl);
    margin-top: var(--space-2xl);
  }
`,
        w = (0, a.Ay)(o.P.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-3xl);
  align-items: center;
  min-height: 350px;
  position: relative;
  
  &:nth-child(even) {
    grid-template-columns: 2fr 1fr;
    
    .skill-content {
      order: 2;
    }
    
    .skill-visual {
      order: 1;
      justify-self: end;
    }
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    text-align: center;
    
    &:nth-child(even) {
      grid-template-columns: 1fr;
      
      .skill-content {
        order: 1;
      }
      
      .skill-visual {
        order: 2;
        justify-self: center;
      }
    }
  }
`,
        k = a.Ay.div`
  max-width: 500px;
  
  @media (max-width: 1024px) {
    max-width: none;
  }
`,
        A = a.Ay.div`
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-neon-blue);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin-bottom: var(--space-sm);
  opacity: 0.8;
`,
        j = a.Ay.h3`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: var(--space-md);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.25rem, 6vw, 1.75rem);
  }
`,
        S = a.Ay.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-sm);
  }
`,
        z = a.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
  }
`,
        P = a.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-light-blue);
  font-size: var(--text-sm);
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
    gap: var(--space-xs);
  }
  
  &::before {
    content: '▸';
    color: var(--color-neon-blue);
    font-weight: bold;
  }
`,
        D = a.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
`,
        T = a.Ay.span`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: 600;
`,
        M = a.Ay.span`
  font-size: var(--text-lg);
  color: var(--color-neon-blue);
  font-weight: 700;
`,
        N = a.Ay.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,
        C = (0, a.Ay)(o.P.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--color-neon-blue), var(--color-electric-cyan));
  border-radius: 2px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`,
        E = a.Ay.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    max-width: 250px;
    height: 250px;
  }
  
  @media (max-width: 480px) {
    max-width: 200px;
    height: 200px;
  }
`,
        q = a.Ay.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`,
        L = a.Ay.circle`
  fill: none;
  stroke: rgba(0, 210, 255, 0.14);
  stroke-width: 2;
`,
        O = (0, a.Ay)(o.P.circle)`
  fill: none;
  stroke: url(#gradient);
  stroke-width: 3;
  stroke-linecap: round;
  filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.52));
`,
        B = a.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(0, 210, 255, 0.6));
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
      filter: brightness(0) invert(1) drop-shadow(0 0 30px rgba(0, 210, 255, 0.8));
    }
  }
  
  @media (max-width: 1024px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`,
        I = a.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`,
        R = (0, a.Ay)(o.P.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  opacity: 0.6;
  
  @media (max-width: 768px) {
    display: none; /* Hide floating dots on mobile for performance */
  }
`,
        F = a.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 210, 255, 0.14) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    filter: blur(40px);
  }
`,
        J = [
          {
            number: "01",
            title: "Backend Game Development",
            description:
              "Specialized in Lua scripting for FiveM and TypeScript for alt:V, delivering high-performance, scalable multiplayer server systems and custom frameworks.",
            technologies: [
              "Lua",
              "FiveM",
              "alt:V",
              "ESX Framework",
              "QBCore",
              "Custom Frameworks",
            ],
            percentage: 95,
            icon: l,
          },
          {
            number: "02",
            title: "JavaScript, TypeScript & React Development",
            description:
              "Building modern web applications and interactive user interfaces with JavaScript, TypeScript, React, and scalable frontend architectures.",
            technologies: [
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Frontend Architecture",
            ],
            percentage: 90,
            icon: c,
          },
          {
            number: "03",
            title: "Application, Microservice & API Development",
            description:
              "Developing robust desktop applications, microservices, and secure REST/WebSocket APIs using C#, Java, and PHP (Symfony) to connect game servers, web platforms, and third-party services.",
            technologies: [
              "C#",
              ".NET",
              "Java",
              "Spring Boot",
              "PHP",
              "Symfony",
              "API Development",
              "Web Services",
              "Microservices",
            ],
            percentage: 88,
            icon: d,
          },
          {
            number: "04",
            title: "Database Architecture & Optimization",
            description:
              "Designing, integrating, and optimizing relational and NoSQL databases for high-load environments with efficient data handling.",
            technologies: [
              "MySQL",
              "MariaDB",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Query Optimization",
            ],
            percentage: 94,
            icon: p,
          },
          {
            number: "05",
            title: "Server Optimization & Deployment",
            description:
              "Performance tuning, bug fixing, exploit patching, and automated deployments to ensure uptime, security, and efficiency across game and application servers.",
            technologies: [
              "Docker",
              "CI/CD",
              "Load Balancing",
              "Performance Profiling",
              "Server Monitoring",
              "Linux",
            ],
            percentage: 92,
            icon: m,
          },
        ],
        Q = () => {
          const e = (0, i.useRef)(null),
            t = (0, i.useRef)(null),
            r = (0, i.useRef)([]);
          (0, i.useLayoutEffect)(() => {
            const i = () => {
              const i = e.current,
                a = t.current,
                o = r.current;
              if (!i || !a) return;
              (n.Ay.timeline({
                scrollTrigger: {
                  trigger: a,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse",
                  refreshPriority: 2,
                  fastScrollEnd: !0,
                  preventOverlaps: !0,
                  invalidateOnRefresh: !0,
                },
              })
                .fromTo(
                  a.querySelector(".section-label"),
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                )
                .fromTo(
                  a.querySelector(".title"),
                  { opacity: 0, y: 40, scale: 0.9 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                  },
                  "-=0.4",
                )
                .fromTo(
                  a.querySelector(".subtitle"),
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                  "-=0.6",
                ),
                o.forEach((e, t) => {
                  if (!e) return;
                  const r = t % 2 === 1,
                    i = e.querySelector(".skill-content"),
                    a = e.querySelector(".skill-visual"),
                    o = e.querySelector(".progress-bar"),
                    s = e.querySelector(".progress-arc"),
                    l = n.Ay.timeline({
                      scrollTrigger: {
                        trigger: e,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                        refreshPriority: t + 3,
                        fastScrollEnd: !0,
                        preventOverlaps: !0,
                        invalidateOnRefresh: !0,
                      },
                    });
                  if (
                    (l
                      .fromTo(
                        i,
                        { opacity: 0, x: r ? 50 : -50, y: 30 },
                        {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          duration: 0.8,
                          ease: "power3.out",
                        },
                      )
                      .fromTo(
                        a,
                        { opacity: 0, x: r ? -50 : 50, scale: 0.8 },
                        {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          duration: 0.8,
                          ease: "power3.out",
                        },
                        "-=0.6",
                      ),
                    o &&
                      l.fromTo(
                        o,
                        { scaleX: 0 },
                        {
                          scaleX: J[t].percentage / 100,
                          duration: 1.5,
                          ease: "power3.out",
                        },
                        "-=0.4",
                      ),
                    s)
                  ) {
                    const e = 2 * Math.PI * 150;
                    (n.Ay.set(s, { strokeDasharray: e, strokeDashoffset: e }),
                      l.to(
                        s,
                        {
                          strokeDashoffset: e - (e * J[t].percentage) / 100,
                          duration: 2,
                          ease: "power3.out",
                        },
                        "-=1",
                      ));
                  }
                }));
              return (
                i.querySelectorAll(".floating-dot").forEach((e, t) => {
                  n.Ay.to(e, {
                    y: -50,
                    x: 20,
                    duration: 4 + 0.5 * t,
                    repeat: -1,
                    yoyo: !0,
                    ease: "power2.inOut",
                    delay: 0.3 * t,
                  });
                }),
                () => {
                  s.u.getAll().forEach((e) => e.kill());
                }
              );
            };
            requestAnimationFrame(() => {
              setTimeout(i, 50);
            });
          }, []);
          return (0, g.jsx)(h, {
            ref: e,
            children: (0, g.jsxs)(x, {
              children: [
                (0, g.jsxs)(f, {
                  ref: t,
                  children: [
                    (0, g.jsx)(v, {
                      className: "section-label",
                      children: "My Skills",
                    }),
                    (0, g.jsx)(u, {
                      className: "title",
                      children: "Skills & Technologies",
                    }),
                    (0, g.jsx)(y, {
                      className: "subtitle",
                      children:
                        "Comprehensive technical expertise built through years of hands-on development and continuous learning",
                    }),
                  ],
                }),
                (0, g.jsx)(b, {
                  children: J.map((e, t) =>
                    (0, g.jsxs)(
                      w,
                      {
                        ref: (e) => (r.current[t] = e),
                        children: [
                          (0, g.jsxs)(k, {
                            className: "skill-content",
                            children: [
                              (0, g.jsx)(A, { children: e.number }),
                              (0, g.jsx)(j, { children: e.title }),
                              (0, g.jsx)(S, { children: e.description }),
                              (0, g.jsx)(z, {
                                children: e.technologies.map((e, t) =>
                                  (0, g.jsx)(P, { children: e }, t),
                                ),
                              }),
                              (0, g.jsxs)(D, {
                                children: [
                                  (0, g.jsx)(T, { children: "Skill-Level" }),
                                  (0, g.jsxs)(M, {
                                    children: [e.percentage, "%"],
                                  }),
                                ],
                              }),
                              (0, g.jsx)(N, {
                                children: (0, g.jsx)(C, {
                                  className: "progress-bar",
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)(E, {
                            className: "skill-visual",
                            children: [
                              (0, g.jsx)(F, {}),
                              (0, g.jsxs)(q, {
                                width: "100%",
                                height: "100%",
                                children: [
                                  (0, g.jsx)("defs", {
                                    children: (0, g.jsxs)("linearGradient", {
                                      id: "gradient",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "0%",
                                      children: [
                                        (0, g.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "var(--color-neon-blue)",
                                        }),
                                        (0, g.jsx)("stop", {
                                          offset: "100%",
                                          stopColor:
                                            "var(--color-electric-cyan)",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, g.jsx)(L, {
                                    cx: "50%",
                                    cy: "50%",
                                    r: 150,
                                    strokeWidth: 3,
                                  }),
                                  (0, g.jsx)(O, {
                                    className: "progress-arc",
                                    cx: "50%",
                                    cy: "50%",
                                    r: 150,
                                    strokeWidth: 3,
                                  }),
                                ],
                              }),
                              (0, g.jsx)(B, {
                                children: (0, g.jsx)("img", {
                                  src: e.icon,
                                  alt: e.title,
                                  width: "48",
                                  height: "48",
                                }),
                              }),
                              (0, g.jsx)(I, {
                                children: [...Array(4)].map((e, t) =>
                                  (0, g.jsx)(
                                    R,
                                    {
                                      className: "floating-dot",
                                      style: {
                                        top: 20 + 60 * Math.random() + "%",
                                        left: 20 + 60 * Math.random() + "%",
                                      },
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
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
