(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [155],
  {
    9155: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return In;
          },
        });
      var r = {};
      t.r(r),
        t.d(r, {
          Alerts: function () {
            return W;
          },
          Env: function () {
            return O;
          },
          Runner: function () {
            return D;
          },
          Schedule: function () {
            return U;
          },
        });
      var i = {};
      t.r(i),
        t.d(i, {
          Check: function () {
            return ue;
          },
          Group: function () {
            return ce;
          },
        });
      var a = {};
      t.r(a),
        t.d(a, {
          Preview: function () {
            return Fe;
          },
          Runs: function () {
            return Pe;
          },
        });
      var s = t(6586),
        o = t(7458),
        c = t(1251),
        l = t(9702),
        u = t(1864),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = Object.entries(e)
              .reduce(function (e, n) {
                var t = (0, u.Z)(n, 2),
                  r = t[0],
                  i = t[1];
                return i ? (0, c.Z)(e).concat(["".concat(r, "=").concat(i)]) : e;
              }, [])
              .join("&");
          return n ? "?".concat(n) : "";
        },
        h = { "content-type": "application/json", accept: "application/json" },
        m = function (e) {
          return (0, s.Z)({ mode: "cors", cache: "no-cache", credentials: "include" }, e);
        },
        p = function (e) {
          return e.json().then(function (e) {
            var n = e.ok,
              t = e.data,
              r = e.message;
            if (n) return t;
            throw new Error(r);
          });
        },
        x = void 0,
        f = (function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = function (t) {
              return ["PUT", "POST"].includes((t || "").toUpperCase())
                ? function (r, i) {
                    return e(n + r, m({ method: t, headers: h, body: JSON.stringify(i) })).then(p);
                  }
                : function (r, i) {
                    return e(i ? "".concat(n + r).concat(d(i)) : n + r, m({ method: t })).then(p);
                  };
            };
          return { get: t("GET"), post: t("POST"), put: t("PUT"), del: t("DELETE") };
        })(fetch, "http://localhost:5000"),
        v = {
          getScripts: function () {
            return f.get("/scripts");
          },
          getScript: function (e) {
            return f.get("/scripts/".concat(e));
          },
          getScriptRuns: function (e) {
            return f.get("/scripts/".concat(e, "/runs"));
          },
          createScript: function (e) {
            return f.post("/scripts", e);
          },
          updateScript: function (e, n) {
            return f.put("/scripts/".concat(e), n);
          },
          deleteScript: function (e) {
            return f.del("/scripts/".concat(e));
          },
          updateAccount: function (e) {
            return f.put("/accounts", e);
          },
          getAPIToken: function () {
            return f.get("/accounts/token");
          },
          updateAPIToken: function () {
            return f.put("/accounts/token").finally(function () {
              return b.mutate("getAPIToken");
            });
          },
          updateEmailRequest: function (e) {
            return f.put("/accounts/email", e);
          },
          updatePasswordRequest: function (e) {
            return f.put("/accounts/password", e);
          },
          deleteAccountRequest: function () {
            return f.del("/accounts");
          },
          getGlobalEnv: function () {
            return f.get("/globals");
          },
          updateGlobalEnv: function (e) {
            return f.put("/globals", e).finally(function () {
              return b.mutate("getGlobalEnv");
            });
          },
          getRunners: function () {
            return f.get("/runners");
          },
          deleteRunner: function (e) {
            return f.del("/runners/".concat(e)).finally(function () {
              return b.mutate("getRunners");
            });
          },
          getSubscriptions: function () {
            return f.get("/subscriptions");
          },
          updateSubscription: function (e) {
            return f.put("/subscriptions", e);
          },
          getRuns: function () {
            return f.get("/analytics/runs");
          },
          getRuntime: function () {
            return f.get("/analytics/runtime");
          },
          getCreditUsage: function () {
            return f.get("/analytics/credits");
          },
          current: function () {
            return f.get("/accounts");
          },
          register: function (e) {
            return f.post("/auth/signup", e).finally(function () {
              return b.mutate("current");
            });
          },
          login: function (e) {
            return f.post("/auth/signin", e).finally(function () {
              return b.mutate("current");
            });
          },
          logout: function () {
            return f.post("/auth/signout").finally(function () {
              return b.mutate("current");
            });
          },
        },
        g = v,
        j = function (e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          return (0, l.ZP)(
            function () {
              return t.length ? "".concat(e, "(").concat(t.join(), ")") : e;
            },
            function () {
              return v[e].apply(x, (0, c.Z)(t));
            }
          );
        },
        b = { mutate: l.JG },
        y = function () {
          var e = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));
          return (
            window.addEventListener("beforeunload", function () {
              var n = JSON.stringify(Array.from(e.entries()));
              localStorage.setItem("app-cache", n);
            }),
            e
          );
        },
        w = function (e) {
          var n = (0, l.kY)().mutate;
          return (b.mutate = n), e.children;
        },
        _ = function (e) {
          return (0, o.jsx)(l.J$, { value: { provider: y }, children: (0, o.jsx)(w, (0, s.Z)({}, e)) });
        },
        k = t(5056),
        Z = t(5197),
        S = t(4922),
        C = t(4583),
        I = t(2983),
        A = t(7944),
        N = t(2604),
        P = t(7086),
        E = function (e) {
          var n = e.x,
            t = e.y,
            r = e.maxX,
            i = e.maxY,
            a = e.children,
            s = e.width,
            c = e.height,
            l = Math.min(r - s, Math.max(0, n)),
            u = Math.min(i - c, Math.max(0, t));
          return (0, o.jsxs)("g", {
            onPointerOver: function (e) {
              return e.stopPropagation();
            },
            children: [
              (0, o.jsx)("rect", { x: l, y: u, width: s, height: c, stroke: "var(--border-color)", strokeWidth: "1px", fill: "white", rx: 5 }),
              (0, o.jsx)("text", { x: l + s / 2, y: u + c / 2, dominantBaseline: "middle", textAnchor: "middle", children: a }),
            ],
          });
        },
        T = [
          { x: 0, y: 100 },
          { x: 250, y: 300 },
          { x: 500, y: 200 },
          { x: 750, y: 600 },
          { x: 1e3, y: 200 },
        ],
        R = function (e) {
          var n,
            t = e.preview,
            r = e.data,
            i = void 0 === r ? T : r,
            a = e.width,
            c = e.height,
            l = e.color,
            d = void 0 === l ? "var(--tint)" : l,
            h = e.getter,
            m =
              void 0 === h
                ? function (e) {
                    return [e.x, e.y];
                  }
                : h,
            p = e.renderTooltip,
            x =
              void 0 === p
                ? function (e) {
                    return "Hello ".concat(e.x, " ").concat(e.y);
                  }
                : p,
            f = e.strokeW,
            v = void 0 === f ? 5 : f,
            g = e.pointW,
            j = void 0 === g ? 15 : g,
            b = (0, I.useState)({ width: a, height: c }),
            y = b[0],
            w = b[1],
            _ = (0, u.Z)(
              (function (e, n, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [0, 1e3],
                  i = e.reduce(
                    function (e, n) {
                      var r = (0, u.Z)(t(n), 2),
                        i = r[0],
                        a = r[1];
                      return (
                        (e.min.x = Math.min(i, e.min.x)),
                        (e.min.y = Math.min(a, e.min.y)),
                        (e.max.x = Math.max(i, e.max.x)),
                        (e.max.y = Math.max(a, e.max.y)),
                        e
                      );
                    },
                    { min: { x: 0, y: r[0] }, max: { x: 0, y: r[1] } }
                  ),
                  a = { x: n.width / (i.max.x - i.min.x), y: n.height / (i.max.y - i.min.y) };
                return [
                  e.map(function (e) {
                    var n = e.x,
                      t = e.y;
                    return { x: n * a.x, y: (i.max.y - t) * a.y };
                  }),
                  i,
                ];
              })(i, y, m),
              2
            ),
            k = _[0],
            Z = _[1],
            C = (n = k).reduce(function (e, t, r) {
              var i,
                a,
                s = n[r - 1];
              return s
                ? ""
                    .concat(e, " ")
                    .concat(((i = s), (a = t), "C ".concat(i.x, ",").concat(i.y, " ").concat(a.x, ",").concat(a.y)), " ")
                    .concat(t.x, ",")
                    .concat(t.y)
                : "M ".concat(t.x, ",").concat(t.y);
            }, ""),
            A = (0, I.useState)(null),
            N = A[0],
            R = A[1];
          (0, P.z0)(function () {
            return R(null);
          });
          var z = (0, P.Hl)(function (e, n) {
              return n && R(null);
            }, "pointerover"),
            F = function () {
              var e = z.current.getBoundingClientRect(),
                n = e.width,
                t = e.height;
              n + t != y.width + y.height && w({ width: n, height: t });
            };
          (0, I.useEffect)(
            function () {
              return F();
            },
            [z.current]
          ),
            (0, P.zX)(
              "resize",
              function () {
                return F();
              },
              window
            );
          var L,
            O,
            D = y.width / (k.length - 1);
          return (0, o.jsxs)(
            "svg",
            (0, S.Z)((0, s.Z)({ ref: z }, y), {
              viewBox: ""
                .concat(-j / 2, " ")
                .concat(-j, " ")
                .concat(y.width + j, " ")
                .concat(y.height + j),
              children: [
                !t &&
                  (0, o.jsx)("g", {
                    children: Array.from({ length: 5 }, function (e, n) {
                      return (0,
                      o.jsxs)(o.Fragment, { children: [(0, o.jsx)("line", { x1: 0, x2: y.width, y1: (n / 5) * y.height, y2: (n / 5) * y.height, stroke: "var(--border-muted-color)" }), (0, o.jsx)("text", { x: y.width, y: (n / 5) * y.height, fill: "var(--text-muted)", dominantBaseline: "middle", textAnchor: "end", children: ((5 - n) * Z.max.y) / 5 })] });
                    }),
                  }),
                (0, o.jsx)("path", {
                  d: ((L = C), (O = y), L + " L ".concat(O.width, ",").concat(O.height, " L 0,").concat(O.height, " Z")),
                  fill: d,
                  fillOpacity: 0.2,
                }),
                (0, o.jsx)("path", { d: C, fill: "none", stroke: d, strokeWidth: v }),
                !t &&
                  (0, o.jsx)("g", {
                    children: k.map(function (e, n) {
                      return (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)("rect", {
                            x: e.x - D / 2,
                            width: D,
                            height: y.height,
                            fill: "transparent",
                            onPointerOver: function () {
                              return R((0, S.Z)((0, s.Z)({}, e), { i: n }));
                            },
                          }),
                          (0, o.jsx)("circle", { cx: e.x, cy: e.y, r: j / 2, fill: d }),
                        ],
                      });
                    }),
                  }),
                !t && N
                  ? (0, o.jsx)(E, (0, S.Z)((0, s.Z)({}, N), { width: 100, height: 50, maxX: y.width, maxY: y.height, children: x(i[N.i]) }))
                  : null,
              ],
            })
          );
        },
        z = t(5388),
        F = t(9952),
        L = t.n(F),
        O = function (e) {
          var n = j("getGlobalEnv"),
            t = (0, A.cI)([]),
            r = (0, c.Z)(n.data || []).concat((0, c.Z)(t.values)),
            i = (0, I.useState)({}),
            a = i[0],
            l = i[1];
          return (0, o.jsxs)(A.Zb, {
            title: (0, o.jsx)(o.Fragment, { children: (0, o.jsx)("span", { children: "Environment Variables" }) }),
            description: "Environment variables can be used in API request URLs, headers, query parameters etc.",
            children: [
              n.isLoading || !r.length
                ? (0, o.jsx)("p", { children: r.length ? "Loading..." : "No environment variables set." })
                : r.map(function (e, n) {
                    var r = !a[n],
                      i = r ? N.bAj : N._jl;
                    return (0, o.jsxs)(
                      "div",
                      {
                        className: L().var,
                        children: [
                          (0, o.jsx)(A.II, {
                            name: "name",
                            value: e.name,
                            onChange: function (r) {
                              return t.set(n, (0, S.Z)((0, s.Z)({}, e), { name: r.target.value }));
                            },
                          }),
                          (0, o.jsx)(A.II, {
                            name: "value",
                            value: e.value,
                            secure: r,
                            post: (0, o.jsx)(i, {
                              onClick: function () {
                                return l((0, S.Z)((0, s.Z)({}, a), (0, z.Z)({}, n, r)));
                              },
                            }),
                            onChange: function (r) {
                              return t.set(n, (0, S.Z)((0, s.Z)({}, e), { value: r.target.value }));
                            },
                          }),
                          (0, o.jsx)(A.zx, {
                            kind: "muted",
                            onClick: function () {
                              t.reset(
                                t.values.filter(function (e, t) {
                                  return t != n;
                                })
                              ),
                                l((0, S.Z)((0, s.Z)({}, a), (0, z.Z)({}, n, !1)));
                            },
                            children: (0, o.jsx)(N.rFk, {}),
                          }),
                        ],
                      },
                      n
                    );
                  }),
              (0, o.jsxs)(A.zx, {
                disabled: n.isValidating,
                onClick: function () {
                  return t.set(r.length, { name: "", value: "" });
                },
                children: [(0, o.jsx)("span", { children: "Add Variable" }), (0, o.jsx)(N.v37, {})],
              }),
            ],
          });
        },
        D = function (e) {
          return (0, o.jsx)(A.Zb, { title: "Runner", description: "This will be used for executing checks (unless overriden by the check/group)." });
        },
        W = function (e) {
          return (0, o.jsx)(A.Zb, { title: "Alerting", description: "This will be used for alerting you (unless overriden by the check/group)." });
        },
        U = function (e) {
          return (0, o.jsx)(A.Zb, {
            title: "Scheduling",
            description: "This will be used for scheduling your checks (unless overriden by the check/group).",
          });
        },
        G = t(2370),
        M = t.n(G),
        B = [
          { name: "Env", icon: N.THo },
          { name: "Alerts", icon: N.Uos },
          { name: "Schedule", icon: N.SUY },
          { name: "Runner", icon: N.xLm },
        ],
        V = function (e) {
          var n = (0, I.useState)("Env"),
            t = n[0],
            i = n[1],
            a = r[t];
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                className: M().buttons,
                children: B.map(function (e) {
                  var n = e.name,
                    r = e.icon;
                  return (0, o.jsxs)(A.zx, {
                    kind: n !== t && "muted",
                    onClick: function () {
                      return i(n);
                    },
                    children: [(0, o.jsx)(r, {}), (0, o.jsx)("span", { children: n })],
                  });
                }),
              }),
              (0, o.jsx)(a, {}),
            ],
          });
        },
        J = function (e) {
          var n = e.state,
            t = e.setState,
            i = e.children,
            a = n.tab,
            c = n.overriden,
            l = void 0 === c ? {} : c,
            u = r[a],
            d = B.some(function (e) {
              return !l[e.name];
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className: M().tabs,
                children: [
                  (0, o.jsxs)("span", {
                    className: M().buttons,
                    children: [
                      i,
                      B.map(function (e) {
                        var r = e.name,
                          i = e.icon,
                          c = r === a;
                        return l[r]
                          ? (0, o.jsxs)(A.zx, {
                              kind: !c && "muted",
                              onClick: function () {
                                return t((0, S.Z)((0, s.Z)({}, n), { tab: r }));
                              },
                              children: [
                                (0, o.jsx)(i, {}),
                                (0, o.jsx)("span", { children: r }),
                                (0, o.jsx)(N.X, {
                                  onClick: function (e) {
                                    var n;
                                    e.stopPropagation(),
                                      t({
                                        tab:
                                          null ===
                                            (n = B.find(function (e) {
                                              return l[e.name];
                                            })) || void 0 === n
                                            ? void 0
                                            : n.name,
                                        overriden: (0, S.Z)((0, s.Z)({}, l), (0, z.Z)({}, r, !1)),
                                      });
                                  },
                                }),
                              ],
                            })
                          : null;
                      }),
                    ],
                  }),
                  d
                    ? (0, o.jsx)(A.J2, {
                        click: !0,
                        value: B.map(function (e) {
                          var n = e.name,
                            r = e.icon;
                          return l[n]
                            ? null
                            : (0, o.jsxs)(A.zx, {
                                onClick: function () {
                                  t({ tab: n, overriden: (0, S.Z)((0, s.Z)({}, l), (0, z.Z)({}, n, !0)) });
                                },
                                children: [(0, o.jsx)(r, {}), (0, o.jsx)("span", { children: n })],
                              });
                        }),
                        children: (0, o.jsxs)(A.zx, { ghost: !0, children: [(0, o.jsx)("span", { children: "Add" }), (0, o.jsx)(N.v37, {})] }),
                      })
                    : null,
                ],
              }),
              u ? (0, o.jsx)(u, {}) : null,
            ],
          });
        },
        Y = t(4557),
        q = t.n(Y),
        H = function (e) {
          var n = e.large,
            t = void 0 === n || n,
            r = e.title,
            i = e.subtitle,
            a = e.className,
            c = e.aside,
            l = (e.actions, e.links),
            u = void 0 === l ? [] : l,
            d = e.empty,
            h = e.home,
            m = e.children,
            p = (0, C.Z)(e, ["large", "title", "subtitle", "className", "aside", "actions", "links", "empty", "home", "children"]);
          return (0, o.jsxs)("main", {
            className: (0, P.Wy)(q().layout, t && q().large),
            children: [
              c || u.length
                ? (0, o.jsxs)("aside", {
                    className: q().aside,
                    children: [
                      (0, o.jsxs)(ae, {
                        className: q().asideHeader,
                        href: "/dashboard/scripts",
                        children: [h ? (0, o.jsx)("span", { className: q().logo }) : (0, o.jsx)(N.s$$, {}), h ? "induktive" : r],
                      }),
                      c ||
                        u.map(function (e, n) {
                          var t = e.label,
                            r = e.icon,
                            i = (0, C.Z)(e, ["label", "icon"]);
                          return (0, o.jsxs)(
                            ae,
                            (0, S.Z)(
                              (0, s.Z)(
                                {
                                  nav: !0,
                                  end: !0,
                                  className: function (e) {
                                    return e.isActive && i.href ? q().active : void 0;
                                  },
                                },
                                i
                              ),
                              {
                                children: [
                                  (0, o.jsx)(r, {}),
                                  (0, o.jsx)("span", { children: t }),
                                  !i.href || i.href.startsWith("/dashboard") ? null : (0, o.jsx)(N.dLw, {}),
                                ],
                              }
                            ),
                            i.href
                          );
                        }),
                    ],
                  })
                : null,
              d
                ? m
                : (0, o.jsxs)(
                    "div",
                    (0, S.Z)((0, s.Z)({ className: (0, P.Wy)(q().content, q().fadeIn, a) }, p), {
                      children: [i && (0, o.jsx)("header", { children: i }), m],
                    })
                  ),
            ],
          });
        },
        $ = function () {
          var e = (0, I.useRef)(null),
            n = "checkout-container";
          return (
            (0, I.useEffect)(function () {
              if (e.current && !document.querySelector('head script[src="'.concat("https://cdn.paddle.com/paddle/paddle.js", '"]'))) {
                var t = document.createElement("script");
                return (
                  (t.src = "https://cdn.paddle.com/paddle/paddle.js"),
                  (t.async = !0),
                  (t.onload = function () {
                    var t, r, i;
                    (e.current.innerHTML = ""),
                      null === (t = window.Paddle) || void 0 === t || t.Environment.set("sandbox"),
                      null === (r = window.Paddle) || void 0 === r || r.Setup({ vendor: 6872 }),
                      null === (i = window.Paddle) ||
                        void 0 === i ||
                        i.Checkout.open({
                          method: "inline",
                          product: 30916,
                          allowQuantity: !1,
                          disableLogout: !0,
                          frameTarget: n,
                          frameInitialHeight: 416,
                          frameStyle: "width:100%; min-width:312px; background-color: transparent; border: none;",
                        });
                  }),
                  document.head.appendChild(t),
                  function () {
                    document.head.removeChild(t);
                  }
                );
              }
            }, []),
            (0, o.jsx)("div", { ref: e, className: n, children: "Loading..." })
          );
        },
        Q = function (e) {
          return e.subscribed ? (0, o.jsx)("div", { children: "Billing will start from: ...." }) : (0, o.jsx)($, {});
        },
        K = function () {
          var e = (0, I.useRef)(null),
            n = "https://cdn.paddle.com/paddle/paddle.js";
          return (
            (0, I.useEffect)(function () {
              if (e.current && !document.querySelector('head script[src="'.concat(n, '"]'))) {
                var t = document.createElement("script");
                return (
                  (t.src = n),
                  (t.async = !0),
                  (t.onload = function () {
                    var n, t, r;
                    (e.current.innerHTML = ""),
                      null === (n = window.Paddle) || void 0 === n || n.Environment.set("sandbox"),
                      null === (t = window.Paddle) || void 0 === t || t.Setup({ vendor: 6872 }),
                      null === (r = window.Paddle) ||
                        void 0 === r ||
                        r.Checkout.open({
                          override: "https://sandbox-subscription-management.paddle.com/subscription/"
                            .concat(279651, "/hash/")
                            .concat("ff4a2b786877954fa72194beec3a91300883daf53257c8faa0fa3afff71c6519", "/update"),
                          method: "inline",
                          frameTarget: "checkout-container",
                          frameInitialHeight: 416,
                          frameStyle: "width:100%; min-width:312px; background-color: transparent; border: none;",
                          successCallback: function () {
                            return console.log("https://example.com/subscription/update/success");
                          },
                        });
                  }),
                  document.head.appendChild(t),
                  function () {
                    document.head.removeChild(t);
                  }
                );
              }
            }, []),
            (0, o.jsx)("div", { ref: e, className: "checkout-container", children: "Loading..." })
          );
        },
        X = t(2357),
        ee = t.n(X),
        ne = [
          { title: "Free", description: "For trying out stuff", price: 0 },
          { title: "Shared", description: "Perfect for starting out", price: 49 },
          { title: "Dedicated", description: "Unlimited time, we self-host everything for you", price: 249 },
        ],
        te = function (e) {
          var n = e.selectable,
            t = e.title,
            r = e.price,
            i = e.description,
            a = (0, C.Z)(e, ["selectable", "title", "price", "description"]);
          return (0, o.jsx)(
            A.Zb,
            (0, s.Z)(
              {
                className: (0, P.Wy)(ee().plan, n && ee().selectable),
                title: (0, o.jsxs)(o.Fragment, {
                  children: [t, (0, o.jsxs)("span", { children: ["$", r, (0, o.jsx)("small", { children: "/mo" })] })],
                }),
                description: i,
              },
              a
            )
          );
        },
        re = function () {
          var e = (0, I.useState)(0),
            n = e[0],
            t = (e[1], (0, I.useState)(null)),
            r = t[0],
            i = t[1],
            a = "selecting" == (null === r || void 0 === r ? void 0 : r.name);
          return "subscribing" == (null === r || void 0 === r ? void 0 : r.name)
            ? (0, o.jsx)(A.Zb, {
                title: "Subscribe: ".concat(ne[r.data].title, " Plan"),
                footer: (0, o.jsxs)(A.zx, {
                  small: !0,
                  ghost: !0,
                  onClick: function () {
                    return i(null);
                  },
                  children: [(0, o.jsx)(N.s$$, {}), " Back to Plans"],
                }),
                children: (0, o.jsx)(Q, { subscribed: 1 == r.data }),
              })
            : "updating" == (null === r || void 0 === r ? void 0 : r.name)
            ? (0, o.jsx)(A.Zb, {
                title: "Update Payment Info",
                description: "Change what you're using to pay.",
                footer: (0, o.jsxs)(A.zx, {
                  small: !0,
                  ghost: !0,
                  onClick: function () {
                    return i(null);
                  },
                  children: [(0, o.jsx)(N.s$$, {}), " Back to Plans"],
                }),
                children: (0, o.jsx)(K, {}),
              })
            : (0, o.jsxs)(A.Zb, {
                title: "Current Subscription",
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    a ? "Choose a plan from the above" : null,
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)(A.zx, {
                          small: !0,
                          ghost: !0,
                          onClick: function () {
                            return i(a ? null : { name: "updating" });
                          },
                          children: a ? "Cancel" : "Update Payment Info",
                        }),
                        "\xa0",
                        a
                          ? null
                          : (0, o.jsx)(A.zx, {
                              small: !0,
                              onClick: function () {
                                return i(a ? null : { name: "selecting" });
                              },
                              children: a ? "Cancel" : "Change Plan",
                            }),
                      ],
                    }),
                  ],
                }),
                children: [
                  (0, o.jsx)(
                    te,
                    (0, S.Z)((0, s.Z)({}, ne[n]), {
                      footer: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("span", { children: "Current Plan" }), (0, o.jsx)("span", { children: "Active Until 02/24" })],
                      }),
                    })
                  ),
                  (0, o.jsx)("h4", { children: (0, o.jsxs)(ae, { href: "/pricing", children: ["Available Plans ", (0, o.jsx)(N.dLw, {})] }) }),
                  ne
                    .filter(function (e, t) {
                      return t !== n;
                    })
                    .map(function (e, n) {
                      return (0, I.createElement)(
                        te,
                        (0, S.Z)((0, s.Z)({}, e), {
                          key: e.title,
                          selectable: a,
                          onClick: a
                            ? function () {
                                return i({ name: "subscribing", data: n });
                              }
                            : void 0,
                        })
                      );
                    }),
                ],
              });
        },
        ie = function (e) {
          e.end;
          var n = e.className,
            t = (0, C.Z)(e, ["end", "className"]);
          return (0, o.jsx)("a", (0, s.Z)({ className: "function" == typeof n ? void 0 : n }, t));
        },
        ae = function (e) {
          var n = e.nav,
            t = e.href,
            r = void 0 === t ? "" : t,
            i = e.external,
            a = (0, C.Z)(e, ["nav", "href", "external"]),
            c = void 0 == i && (!r || r.startsWith("/dashboard")),
            l = c ? (n ? k.OL : k.rU) : ie,
            u = c ? { to: r } : { href: r, target: "_blank" };
          return (0, o.jsx)(l, (0, s.Z)({}, a, u));
        },
        se = t(9792),
        oe = t.n(se),
        ce = function (e) {
          var n = (0, I.useState)({ name: "" }),
            t = n[0],
            r = n[1],
            i = (0, I.useState)({ overriden: {} }),
            a = i[0],
            c = i[1],
            l = Object.values(a.overriden).some(function (e) {
              return e;
            });
          return (0, o.jsxs)(
            A.u_,
            (0, S.Z)((0, s.Z)({}, e), {
              large: l,
              title: "New Group",
              description: "Add a new group",
              footer: (0, o.jsx)(A.zx, { children: "Create" }),
              children: [
                (0, o.jsx)(A.II, {
                  full: !0,
                  name: "name",
                  placeholder: "Name your group",
                  value: t.name,
                  onChange: function (e) {
                    return (n = "name"), (i = e.target.value), r((0, S.Z)((0, s.Z)({}, t), (0, z.Z)({}, n, i)));
                    var n, i;
                  },
                }),
                (0, o.jsx)("h5", { children: "Global Overrides" }),
                (0, o.jsx)(J, { state: a, setState: c }),
              ],
            })
          );
        },
        le = [
          {
            author: "induktive",
            name: "puppeteer",
            lang: "js",
            icon: "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
          },
          { author: "induktive", name: "playwright", lang: "js", icon: "https://playwright.dev/img/playwright-logo.svg" },
        ],
        ue = function (e) {
          var n = (0, I.useState)({ type: "api", name: "", runner: "puppeteer" }),
            t = n[0],
            r = n[1],
            i = function (e, n) {
              return r((0, S.Z)((0, s.Z)({}, t), (0, z.Z)({}, e, n)));
            };
          return (0, o.jsxs)(
            A.u_,
            (0, S.Z)((0, s.Z)({}, e), {
              title: "New Check",
              description: "Add a new check",
              footer: (0, o.jsx)(A.zx, { children: "Create" }),
              children: [
                (0, o.jsx)(A.II, {
                  full: !0,
                  name: "name",
                  placeholder: "Name your check",
                  value: t.name,
                  onChange: function (e) {
                    return i("name", e.target.value);
                  },
                }),
                (0, o.jsx)(A.Ph, {
                  full: !0,
                  loading: !1,
                  name: "filter",
                  placeholder: "Filter Items",
                  label: "Filter",
                  value: t.type,
                  onChange: function (e) {
                    return i("type", e);
                  },
                  options: ["api", "browser"],
                }),
                "browser" == t.type
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)("h5", { children: "Choose a template" }),
                        (0, o.jsx)("section", {
                          className: oe().templates,
                          children: le.map(function (e) {
                            return (0, o.jsxs)(
                              "article",
                              {
                                className: (0, P.Wy)(oe().template, t.runner == e.name && oe().templateActive),
                                onClick: function () {
                                  return i("runner", e.name);
                                },
                                children: [
                                  (0, o.jsx)("img", { src: e.icon }),
                                  (0, o.jsxs)("header", {
                                    children: [(0, o.jsx)("strong", { children: e.name }), (0, o.jsx)("small", { children: e.author })],
                                  }),
                                ],
                              },
                              e.name
                            );
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          );
        },
        de = [
          { icon: N.fU8, label: "Checks", href: "/dashboard/scripts" },
          { icon: N.THo, label: "Globals", href: "/dashboard/globals", style: { marginBottom: "auto" } },
          { icon: N.Zrf, label: "Settings", href: "/dashboard/settings" },
          {
            icon: N.d6Z,
            label: "Log Out",
            onClick: function () {
              return g.logout();
            },
          },
        ],
        he = [
          { icon: N.n5m, label: "Account", href: "/dashboard/settings" },
          { icon: N.aBT, label: "Subscription", href: "/dashboard/settings/subscription" },
          { icon: N.EKh, label: "API", href: "/dashboard/settings/api" },
          { icon: N.xLm, label: "Custom Runners", href: "/dashboard/settings/runners" },
        ],
        me = function (e) {
          return [
            { icon: N.fU8, label: "Check", href: "/dashboard/scripts/".concat(e) },
            { icon: N.ucW, label: "Stats", href: "/dashboard/scripts/".concat(e, "/stats") },
          ];
        },
        pe = (A.qE, t(4776)),
        xe = t.n(pe),
        fe = function (e) {
          var n = e.id,
            t = e.active,
            r = e.name,
            i = e.type,
            a = e.query,
            c = (0, C.Z)(e, ["id", "active", "name", "type", "query"]);
          return (0, o.jsxs)(
            "article",
            (0, S.Z)((0, s.Z)({ className: xe().script }, c), {
              children: [
                (0, o.jsx)(A.rs, { checked: t }),
                (0, o.jsxs)(ae, {
                  href: "/dashboard/scripts/".concat(n),
                  draggable: !1,
                  children: [
                    (0, o.jsx)("span", { dangerouslySetInnerHTML: { __html: (0, P.B1)(r, a) } }),
                    (0, o.jsx)("span", { children: "api" == i ? (0, o.jsx)(N.tnx, { size: 32 }) : (0, o.jsx)(N.ap$, { size: 24 }) }),
                  ],
                }),
                (0, o.jsx)(R, { preview: !0, width: 100, height: 50 }),
                (0, o.jsx)(A.zx, { small: !0, children: (0, o.jsx)(N.shV, {}) }),
                (0, o.jsx)(A.J2, {
                  dir: "left",
                  click: !0,
                  value: "TEST",
                  children: (0, o.jsx)(A.zx, { kind: "muted", small: !0, children: (0, o.jsx)(N.hlC, {}) }),
                }),
              ],
            })
          );
        },
        ve = function (e) {
          var n = e.name,
            t = e.showChildren,
            r = e.children,
            i = (0, C.Z)(e, ["name", "showChildren", "children"]),
            a = t ? N.KuQ : N.GSs;
          return (0, o.jsxs)("section", {
            className: xe().group,
            children: [
              (0, o.jsxs)("header", (0, S.Z)((0, s.Z)({}, i), { children: [(0, o.jsx)(a, { size: 24 }), (0, o.jsx)("span", { children: n })] })),
              r,
            ],
          });
        },
        ge = function (e) {
          return (0, o.jsxs)("div", {
            className: xe().glance,
            children: [
              (0, o.jsx)(A.Zb, {
                title: (0, o.jsxs)("span", {
                  className: xe().glanceTitle,
                  children: [(0, o.jsx)(N.fU8, { color: "var(--c-success-500)" }), "3 Passing"],
                }),
              }),
              (0, o.jsx)(A.Zb, {
                title: (0, o.jsxs)("span", {
                  className: xe().glanceTitle,
                  children: [(0, o.jsx)(N.a2, { color: "var(--c-error-500)" }), "2 Failing"],
                }),
              }),
            ],
          });
        },
        je = function (e) {
          var n,
            t = (0, I.useRef)({ dragging: null, dropping: null }),
            r = (0, I.useState)(),
            a = r[0],
            l = r[1],
            u = i[a],
            d = j("getScripts"),
            h = [{ id: 0, name: "Group #1" }],
            m =
              null === (n = d.data) || void 0 === n
                ? void 0
                : n.map(function (e, n) {
                    return n > 2 ? e : (0, S.Z)((0, s.Z)({}, e), { group: 0 });
                  }),
            p = m.reduce(function (e, n, t) {
              return void 0 === n.group ? e.push(n) : ((e[n.group].children = e[n.group].children || []), e[n.group].children.push(n)), e;
            }, (0, c.Z)(h)),
            x = h.reduce(function (e, n) {
              return (e[n.id] = n), e;
            }, {}),
            f = m.reduce(function (e, n) {
              return (e[n.id] = n), e;
            }, {}),
            v = (0, I.useState)({ query: "", props: "" }),
            g = v[0],
            b = v[1];
          return (0, o.jsxs)(H, {
            home: !0,
            subtitle: (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("span", { children: "Checks" }), (0, o.jsx)(ge, {})] }),
            links: de,
            className: xe().scripts,
            children: [
              (0, o.jsxs)("div", {
                className: xe().filter,
                children: [
                  (0, o.jsx)(A.II, {
                    name: "query",
                    placeholder: "Search by name, status etc...",
                    value: g.query,
                    onChange: function (e) {
                      return b((0, S.Z)((0, s.Z)({}, g), { query: e.target.value.trimStart() }));
                    },
                    pre: (0, o.jsx)(N.olm, {}),
                    post: (0, o.jsx)(A.Ph, {
                      multi: !0,
                      loading: !1,
                      value: g.props,
                      onChange: function (e) {
                        return b((0, S.Z)((0, s.Z)({}, g), { props: e }));
                      },
                      options: [
                        ["status", ["good", "bad"]],
                        ["done", ["yes", "no"]],
                      ],
                      Component: function (e) {
                        return (0, o.jsxs)("div", {
                          style: { display: "flex", justifyContent: "flex-end", width: "10rem" },
                          children: [(0, o.jsx)("span", { children: e.value }), (0, o.jsx)(N.wn$, {})],
                        });
                      },
                    }),
                  }),
                  (0, o.jsx)(A.J2, {
                    click: !0,
                    value: (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(A.zx, {
                          onClick: function () {
                            return l("Check");
                          },
                          children: "Add Check",
                        }),
                        (0, o.jsx)(A.zx, {
                          onClick: function () {
                            return l("Group");
                          },
                          children: "Add Group",
                        }),
                      ],
                    }),
                    children: (0, o.jsxs)(A.zx, { children: [(0, o.jsx)("span", { children: "Add New" }), (0, o.jsx)(N.v37, {})] }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                children: d.isLoading
                  ? "Loading..."
                  : (0, o.jsx)(ye, {
                      state: t,
                      data: p,
                      onDrag: function (e, n) {
                        e != n
                          ? f[n]
                            ? void 0 !== f[n].group
                              ? alert("Move inside group on top of script")
                              : alert("Move on top of script")
                            : x[n] && alert("Move inside group")
                          : alert("Move on self");
                      },
                    }),
              }),
              u && (0, o.jsx)(u, { setActive: l }),
            ],
          });
        },
        be = function (e) {
          var n = e.id,
            t = e.children,
            r = e.state,
            i = e.onDrag,
            a = (0, C.Z)(e, ["id", "children", "state", "onDrag"]),
            c = (0, I.useState)(!1),
            l = c[0],
            u = c[1],
            d = {
              draggable: !0,
              onDragStart: function (e) {
                return (r.current = { dragging: n, dropping: null });
              },
              onDragEnd: function (e) {
                var n, t;
                i(r.current.dragging, null === (n = r.current.dropping) || void 0 === n ? void 0 : n.id),
                  null === (t = r.current.dropping) || void 0 === t || t.element.classList.remove(xe().dragOver),
                  (r.current = { dragging: null, dropping: null });
              },
              onDragOver: function (e) {
                var t,
                  i,
                  a = e.target.closest(".".concat(xe().script, ",.").concat(xe().group));
                a &&
                  a !== (null === (t = r.current.dropping) || void 0 === t ? void 0 : t.element) &&
                  (null === (i = r.current.dropping) || void 0 === i || i.element.classList.remove(xe().dragOver),
                  (r.current.dropping = { element: a, id: n }),
                  a.classList.add(xe().dragOver));
              },
            };
          return t
            ? (0, o.jsx)(
                ve,
                (0, S.Z)((0, s.Z)({}, a, d), {
                  showChildren: l,
                  onClick: function () {
                    return u(!l);
                  },
                  children: l ? (0, o.jsx)(ye, { state: r, onDrag: i, data: t }) : null,
                })
              )
            : (0, o.jsx)(fe, (0, s.Z)({ id: n }, a, d));
        },
        ye = function (e) {
          var n = e.data,
            t = (0, C.Z)(e, ["data"]);
          return n.map(function (e) {
            return (0, I.createElement)(be, (0, s.Z)((0, S.Z)((0, s.Z)({}, t), { key: e.key }), e));
          });
        },
        we = t(8642),
        _e = t.n(we),
        ke = function (e) {
          return (0, o.jsx)(H, {
            home: !0,
            subtitle: (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("span", { children: "Global Configuration" }), (0, o.jsx)(A.zx, { kind: "muted", children: "Save Changes" })],
            }),
            className: _e().globals,
            links: de,
            children: (0, o.jsx)(V, {}),
          });
        },
        Ze = t(1163),
        Se = t.n(Ze),
        Ce = { success: N.fU8, timeout: N.bG7, fail: N.a2 },
        Ie = function (e, n) {
          var t = (new Date(n).getTime() - new Date(e).getTime()) / 1e3,
            r = Math.trunc(t / 60).toLocaleString("en-US", { minimumIntegerDigits: 2 }),
            i = Math.trunc(t % 60).toLocaleString("en-US", { minimumIntegerDigits: 2 });
          return "".concat(r, ":").concat(i);
        },
        Ae = function (e) {
          var n = e.status,
            t = e.runtime,
            r = Ce[n];
          return (0, o.jsxs)("div", {
            children: [
              (0, o.jsxs)("span", { className: Se()[n], children: [(0, o.jsx)(r, {}), " ", n] }),
              (0, o.jsxs)("div", { children: [(0, o.jsx)(N.SUY, {}), t] }),
            ],
          });
        },
        Ne = function (e) {
          var n = e.created,
            t = e.completed,
            r = e.status,
            i = e.id,
            a = (e.query, e.onSelect);
          return (0, o.jsxs)("div", {
            className: Se().run,
            onClick: function () {
              return a(e);
            },
            children: [
              (0, o.jsx)(Ae, { status: r, runtime: Ie(n, t) }),
              (0, o.jsxs)("div", { children: ["Run #", (0, o.jsx)("strong", { dangerouslySetInnerHTML: { __html: i.split("-")[0] } })] }),
              (0, o.jsx)("div", { children: n }),
              (0, o.jsx)(A.zx, { kind: "muted", small: !0, children: (0, o.jsx)(N.hlC, {}) }),
            ],
          });
        },
        Pe = function () {
          var e,
            n = (0, Z.UO)().id,
            t = (j("getScript", n), j("getScriptRuns", n)),
            r = (0, I.useState)(null),
            i = r[0],
            a = r[1],
            c = (0, I.useState)(void 0),
            l = c[0],
            u = c[1],
            d = (0, I.useState)("Logs"),
            h = d[0],
            m = d[1];
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(A.FR, {
                value: l,
                onChange: u,
                items: t.data,
                renderItem: function (e) {
                  return (0, o.jsx)(Ne, (0, S.Z)((0, s.Z)({}, e), { onSelect: a }));
                },
              }),
              (0, o.jsxs)(A.u_, {
                active: i,
                setActive: a,
                title: (0, o.jsxs)("div", {
                  children: [
                    "Run #",
                    (0, o.jsx)("strong", { children: null === i || void 0 === i || null === (e = i.id) || void 0 === e ? void 0 : e.split("-")[0] }),
                  ],
                }),
                description: "Pick from the available templates below",
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)(A.zx, {
                      small: !0,
                      onClick: function () {
                        return a(null);
                      },
                      children: [(0, o.jsx)(N.s$$, {}), " Back to Script"],
                    }),
                    (0, o.jsx)("span", {}),
                  ],
                }),
                children: [
                  (0, o.jsx)(Ae, {
                    status: null === i || void 0 === i ? void 0 : i.status,
                    runtime: Ie(null === i || void 0 === i ? void 0 : i.created, null === i || void 0 === i ? void 0 : i.completed),
                  }),
                  (0, o.jsx)("div", {
                    children: ["Logs", "Recording"].map(function (e) {
                      return (0, o.jsx)("div", {
                        onClick: function () {
                          return m(e);
                        },
                        children: e,
                      });
                    }),
                  }),
                  "Logs" == h
                    ? (0, o.jsx)("pre", {
                        className: Se().logs,
                        children: JSON.parse((null === i || void 0 === i ? void 0 : i.logs) || "[]").map(function (e) {
                          return console.log(e), (0, o.jsx)("code", { children: e.value });
                        }),
                      })
                    : (0, o.jsx)("video", {
                        width: "800",
                        height: "600",
                        controls: !0,
                        children: (0, o.jsx)("source", { src: "/videos/example-run.mp4", type: "video/mp4" }),
                      }),
                ],
              }),
            ],
          });
        },
        Ee = t(3513),
        Te = t.n(Ee),
        Re = function (e) {
          var n = e.getScript,
            t = (0, I.useRef)(new WebSocket("ws://localhost:5001/run")),
            r = (0, I.useRef)(null),
            i = (0, I.useState)({ width: 1e3, height: 854 }),
            a = i[0],
            s =
              (i[1],
              function (e, n) {
                var r, i, a;
                return (
                  (null === (r = t.current) || void 0 === r ? void 0 : r.readyState) ===
                    (null === (i = t.current) || void 0 === i ? void 0 : i.OPEN) &&
                  (null === (a = t.current) || void 0 === a ? void 0 : a.send(JSON.stringify({ event: e, data: n })))
                );
              }),
            c = function (e) {
              if (r.current) {
                var n,
                  t = null === (n = r.current) || void 0 === n ? void 0 : n.getContext("2d");
                t.clearRect(0, 0, r.current.width, r.current.height), t.drawImage(e, 0, 0);
              }
            };
          return (
            (0, I.useEffect)(function () {
              var e;
              return (
                t.current &&
                  ((t.current.onopen = function () {
                    console.log("WebSocket Client Connected"),
                      (e = setInterval(function () {
                        var r, i;
                        (null === (r = t.current) || void 0 === r ? void 0 : r.readyState) ===
                          (null === (i = t.current) || void 0 === i ? void 0 : i.OPEN) &&
                          (console.log("Initiated"), s("run", { viewport: a, script: n() }), clearInterval(e));
                      }, 500));
                  }),
                  (t.current.onerror = function () {
                    return console.log("Connection Error");
                  }),
                  (t.current.onclose = function () {
                    return console.log("echo-protocol Client Closed");
                  }),
                  (t.current.onmessage = function (e) {
                    var n = JSON.parse(e.data),
                      t = n.type,
                      r = n.data;
                    switch (t) {
                      case "streamStart":
                        return console.log("Stream started");
                      case "streamStop":
                        return console.log("Stream stopped");
                      case "streamData":
                        return fetch("data:image/png;base64,".concat(r))
                          .then(function (e) {
                            return e.blob();
                          })
                          .then(function (e) {
                            return createImageBitmap(e);
                          })
                          .then(c);
                    }
                  })),
                function () {
                  t.current.close(), clearInterval(e);
                }
              );
            }, []),
            (0, I.useEffect)(
              function () {
                s("viewport", a),
                  r.current && ((r.current.style.width = "".concat(a.width, "px")), (r.current.style.height = "".concat(a.height, "px")));
              },
              [a.width, a.height]
            ),
            (0, o.jsx)("canvas", { ref: r, width: a.width, height: a.height })
          );
        },
        ze = function (e) {
          var n = e.running,
            t = (e.setRunning, (0, C.Z)(e, ["running", "setRunning"]));
          return (
            (0, I.useEffect)(function () {}, [n]),
            (0, o.jsx)("div", { className: Te().browser, children: n ? (0, o.jsx)(Re, (0, s.Z)({}, t)) : "Not running." })
          );
        },
        Fe = function (e) {
          return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(A.Zb, { title: "Run Summary" }), (0, o.jsx)(ze, (0, s.Z)({}, e))] });
        },
        Le = t(6399),
        Oe = t.n(Le),
        De = t(7118),
        We = t(5167),
        Ue = t(1362),
        Ge = t(8735),
        Me = t(4169),
        Be = t(2312),
        Ve = t(5381);
      function Je(e, n) {
        var t = [];
        for (var r in n) t.push({ label: r, type: "function" == typeof n[r] ? "function" : "variable" });
        return { from: e, options: t, validFor: /^[\w$]*$/ };
      }
      var Ye = ["PropertyName", ".", "?."],
        qe = ["TemplateString", "LineComment", "BlockComment", "VariableDefinition", "PropertyDefinition"];
      var He = Ge.Lz.data.of({
          autocomplete: function (e) {
            var n,
              t = (0, Ve.qz)(e.state).resolveInner(e.pos, -1);
            if (Ye.includes(t.name) && "MemberExpression" == (null === (n = t.parent) || void 0 === n ? void 0 : n.name)) {
              var r = t.parent.getChild("Expression");
              if ("VariableName" == (null === r || void 0 === r ? void 0 : r.name)) {
                var i = /\./.test(t.name) ? t.to : t.from,
                  a = e.state.sliceDoc(r.from, r.to);
                if ("object" == typeof window[a]) return Je(i, window[a]);
              }
            } else {
              if ("VariableName" == t.name) return Je(t.from, window);
              if (e.explicit && !qe.includes(t.name)) return Je(e.pos, window);
            }
            return null;
          },
        }),
        $e = function (e, n) {
          return Me.yy.create({
            doc: e,
            extensions: [
              De.Xy,
              Ue.$f.of([We.oc]),
              (0, Ge.eJ)({ typescript: !0 }),
              He,
              Be.W,
              Ue.tk.updateListener.of(function (e) {
                return null === n || void 0 === n ? void 0 : n(e.state.doc.toString());
              }),
            ],
          });
        },
        Qe = function (e, n) {
          return (0, P.Yr)(e) == (0, P.Yr)(n);
        },
        Ke = { Preview: { icon: N.EKh }, Runs: { icon: N.cS$ } },
        Xe = ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        en = function (e) {
          var n = e.children,
            t = ((0, C.Z)(e, ["children"]), (0, I.useState)({ method: "GET", url: "http://example.org" })),
            r = t[0],
            i = t[1];
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(A.Zb, {
              title: "Request",
              children: [
                (0, o.jsxs)("div", {
                  className: Oe().api,
                  children: [
                    (0, o.jsx)(A.Ph, {
                      pre: (0, o.jsx)(N._ME, {}),
                      name: "method",
                      options: Xe,
                      value: r.method,
                      onChange: function (e) {
                        return i((0, S.Z)((0, s.Z)({}, r), { method: e }));
                      },
                    }),
                    (0, o.jsx)(A.II, {
                      name: "url",
                      value: r.url,
                      onChange: function (e) {
                        return i((0, S.Z)((0, s.Z)({}, r), { url: e.target.value }));
                      },
                    }),
                  ],
                }),
                (0, o.jsx)("div", { children: (0, o.jsx)("h4", { children: "Headers" }) }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("h4", { children: "Body" }),
                    ["Form", "JSON", "GraphQL"].map(function (e) {
                      return (0, o.jsx)(A.zx, { kind: "muted", children: e });
                    }),
                    n,
                  ],
                }),
              ],
            }),
          });
        },
        nn = function (e) {
          var n,
            t,
            r,
            i,
            c,
            l,
            d,
            h = (0, Z.UO)().id,
            m = j("getScript", h),
            p =
              (null === (n = m.data) || void 0 === n || null === (t = n.browservalue) || void 0 === t ? void 0 : t.source) ||
              (null === (r = m.data) || void 0 === r || null === (i = r.apivalue) || void 0 === i || null === (c = i.body) || void 0 === c
                ? void 0
                : c.value),
            x = (0, u.Z)(
              (function (e) {
                var n = (0, I.useRef)(null),
                  t = (0, I.useRef)();
                (0, I.useEffect)(function () {
                  if (n.current) {
                    var r = $e(e);
                    return (
                      (t.current = new Ue.tk({ state: r, parent: n.current })),
                      function () {
                        var e;
                        return null === (e = t.current) || void 0 === e ? void 0 : e.destroy();
                      }
                    );
                  }
                }, []);
                var r = function () {
                  var e;
                  return (null === (e = t.current) || void 0 === e ? void 0 : e.state.doc.toString()) || "";
                };
                return [
                  n,
                  {
                    getValue: r,
                    hasChanged: function () {
                      return !Qe(r(), e);
                    },
                    willChange: function (e) {
                      return !Qe(r(), e);
                    },
                    reset: function (e) {
                      var n;
                      return null === (n = t.current) || void 0 === n ? void 0 : n.setState($e(e));
                    },
                  },
                ];
              })(p),
              2
            ),
            f = x[0],
            v = x[1];
          (0, I.useEffect)(
            function () {
              !m.isValidating && v.willChange(p) && (v.hasChanged() ? console.log("Prompt Refresh to User") : v.reset(p));
            },
            [m.isValidating]
          );
          var g = (0, I.useState)(!1),
            b = g[0],
            y = g[1],
            w = { getScript: v.getValue, id: h, running: b, setRunning: y },
            _ = (0, I.useState)({ tab: "Preview" }),
            k = _[0],
            C = _[1],
            P = a[k.tab],
            E = (0, o.jsx)("div", { className: Oe().code, ref: f });
          return (0, o.jsxs)(H, {
            className: Oe().script,
            title: "Go Back",
            links: me(h),
            large: !1,
            children: [
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsxs)("header", {
                    className: Oe().codeActions,
                    children: [
                      (0, o.jsx)(A.II, { name: "name", value: null === (l = m.data) || void 0 === l ? void 0 : l.name }),
                      (0, o.jsxs)(A.zx, { kind: "muted", children: [(0, o.jsx)(N.vcT, {}), (0, o.jsx)("span", { children: "Save Changes" })] }),
                      (0, o.jsxs)(A.zx, {
                        kind: "secondary",
                        onClick: function () {
                          return y(!0);
                        },
                        children: [(0, o.jsx)(N.itc, {}), (0, o.jsx)("span", { children: b ? "Running..." : "Run Now" })],
                      }),
                    ],
                  }),
                  "browser" == (null === (d = m.data) || void 0 === d ? void 0 : d.type) ? E : (0, o.jsx)(en, { children: E }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)(J, {
                    state: k,
                    setState: C,
                    children: Object.entries(Ke).map(function (e) {
                      var n = (0, u.Z)(e, 2),
                        t = n[0],
                        r = n[1].icon;
                      return (0, o.jsxs)(A.zx, {
                        kind: t != k.tab && "muted",
                        onClick: function () {
                          return C((0, S.Z)((0, s.Z)({}, k), { tab: t }));
                        },
                        children: [(0, o.jsx)(r, {}), (0, o.jsx)("span", { children: t })],
                      });
                    }),
                  }),
                  P ? (0, o.jsx)(P, (0, s.Z)({}, w)) : null,
                ],
              }),
            ],
          });
        },
        tn = function (e) {
          var n,
            t = (0, Z.UO)().id,
            r = j("getScript", t);
          return (0, o.jsx)(H, {
            title: (null === (n = r.data) || void 0 === n ? void 0 : n.name) || "Script",
            subtitle: "Overview",
            links: me(t),
            children: (0, o.jsx)("div", { children: "TEST" }),
          });
        },
        rn = function (e) {
          var n,
            t,
            r,
            i,
            a = e.account,
            s = (0, A.cI)({}),
            c = s.values.name || s.values.teamname,
            l =
              (null !== (n = s.values.name) && void 0 !== n ? n : null === a || void 0 === a ? void 0 : a.name) &&
              (null !== (t = s.values.teamname) && void 0 !== t ? t : null === a || void 0 === a ? void 0 : a.teamname);
          return (0, o.jsxs)(A.Zb, {
            title: "Information",
            description: "A display or full name you want to use on our platform and future communications.",
            footer: (0, o.jsx)(A.zx, { disabled: !(l && c), small: !0, children: "Update Info" }),
            children: [
              (0, o.jsx)(A.II, {
                full: !0,
                name: "name",
                placeholder: "Your Name",
                value: null !== (r = s.values.name) && void 0 !== r ? r : null === a || void 0 === a ? void 0 : a.name,
                onChange: function (e) {
                  return s.set("name", e.target.value);
                },
              }),
              (0, o.jsx)("br", {}),
              (0, o.jsx)(A.II, {
                full: !0,
                name: "team",
                placeholder: "Your Team's Name",
                value: null !== (i = s.values.teamname) && void 0 !== i ? i : null === a || void 0 === a ? void 0 : a.teamname,
                onChange: function (e) {
                  return s.set("teamname", e.target.value);
                },
              }),
            ],
          });
        },
        an = function (e) {
          var n = e.account,
            t = (0, I.useState)(),
            r = t[0],
            i = t[1],
            a = r != n.email,
            s = null === r || void 0 === r ? void 0 : r.length;
          return (0, o.jsx)(A.Zb, {
            title: "Email Address",
            description: "The email address you want to use for logging in and receiving notifications.",
            footer: (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("span", { children: "We'll send a confirmation email first." }),
                (0, o.jsx)(A.zx, { small: !0, disabled: !(s && a), onClick: function () {}, children: "Change Email" }),
              ],
            }),
            children: (0, o.jsx)(A.II, {
              full: !0,
              name: "email",
              placeholder: "Your Email",
              value: null !== r && void 0 !== r ? r : null === n || void 0 === n ? void 0 : n.email,
              onChange: function (e) {
                return i(e.target.value);
              },
            }),
          });
        },
        sn = function () {
          var e = (0, I.useState)(!1),
            n = e[0],
            t = e[1],
            r = (0, A.cI)({}),
            i = Object.keys(r.values).length,
            a = r.values.new && r.values.confirm;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(A.l0, {
                autoComplete: "off",
                children: (0, o.jsxs)(A.Zb, {
                  title: "Password",
                  description: "Set up a new password.",
                  footer: (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("span", { children: "We'll send a confirmation email first." }),
                      (0, o.jsx)(A.zx, {
                        disabled: !(a && i),
                        small: !0,
                        onClick: function () {
                          return t(!0);
                        },
                        children: "Change Password",
                      }),
                    ],
                  }),
                  children: [
                    (0, o.jsx)(A.II, {
                      type: "password",
                      full: !0,
                      name: "new",
                      placeholder: "New Password",
                      value: r.values.new,
                      onChange: function (e) {
                        return r.set("new", e.target.value);
                      },
                    }),
                    (0, o.jsx)(A.II, {
                      type: "password",
                      full: !0,
                      name: "confirm",
                      placeholder: "Confirm New Password",
                      value: r.values.confirm,
                      onChange: function (e) {
                        return r.set("confirm", e.target.value);
                      },
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(A.u_, {
                active: !!n,
                setActive: t,
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("span", { children: "aaa" }),
                    (0, o.jsx)(A.zx, {
                      onClick: function () {
                        return t(!1);
                      },
                      children: "Close",
                    }),
                  ],
                }),
                children: (0, o.jsx)("div", { children: "TEST" }),
              }),
            ],
          });
        },
        on = function (e) {
          var n = j("current");
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(H, {
              title: "Settings",
              subtitle: "Account",
              links: he,
              children: [
                (0, o.jsx)(rn, { account: n.data }),
                (0, o.jsx)(sn, {}),
                (0, o.jsx)(an, { account: n.data }),
                (0, o.jsx)("header", { children: "Danger Zone" }),
                (0, o.jsx)(A.Zb, {
                  title: "Delete Account",
                  description:
                    "Permanently remove your Personal Account and all of its contents from our platform. This includes instances, logs, account information and more.",
                  footer: (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("span", { children: "This action is not reversible, proceed with caution." }),
                      (0, o.jsx)(A.zx, { ghost: !0, small: !0, children: "Delete Your Account" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        cn = function (e) {
          var n,
            t = j("getAPIToken"),
            r = (0, u.Z)((0, P.F1)(""), 2),
            i = r[0],
            a = r[1];
          return (0, o.jsx)(H, {
            title: "Settings",
            subtitle: "Applications & APIs",
            links: he,
            children: (0, o.jsx)(A.Zb, {
              title: "Your API Token",
              description: "The billing details shown on your monthly invoice.",
              footer: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("span", { children: "Generating a new token will disable the existing one." }),
                  (0, o.jsx)(A.zx, {
                    disabled: t.isValidating,
                    onClick: function () {
                      return g.updateAPIToken();
                    },
                    small: !0,
                    children: "Generate new token",
                  }),
                ],
              }),
              children: (0, o.jsx)(A.II, {
                disabled: !0,
                pre: (0, o.jsx)(N.srI, {}),
                post: i
                  ? (0, o.jsx)("small", { children: i })
                  : (0, o.jsx)(A.zx, {
                      kind: "muted",
                      onClick: function () {
                        var e;
                        return null === (e = navigator.clipboard) || void 0 === e
                          ? void 0
                          : e.writeText(t.data.value).finally(function () {
                              return a("Copied!");
                            });
                      },
                      children: (0, o.jsx)(N.CKM, {}),
                    }),
                full: !0,
                name: "name",
                value: null === (n = t.data) || void 0 === n ? void 0 : n.value,
                placeholder: "Generate a new token below",
              }),
            }),
          });
        },
        ln = function (e) {
          return (0, o.jsxs)(H, {
            title: "Settings",
            subtitle: "Subscription",
            links: he,
            children: [
              (0, o.jsx)(re, {}),
              (0, o.jsx)(A.Zb, {
                title: "Billing Email",
                description: "The email address you want to use for logging in and receiving notifications.",
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("span", { children: "We'll send a confirmation email first." }),
                    (0, o.jsx)(A.zx, { small: !0, children: "Change Email" }),
                  ],
                }),
                children: (0, o.jsx)(A.II, { full: !0, name: "email", placeholder: "Your Email", defaultValue: "admin@induktive.com" }),
              }),
            ],
          });
        },
        un = t(4958),
        dn = t.n(un),
        hn = function (e) {
          var n,
            t = j("getRunners");
          return (0, o.jsxs)(H, {
            title: "Settings",
            subtitle: "Custom Runners",
            links: he,
            children: [
              (0, o.jsx)(A.Zb, {
                title: "Available",
                description: "Runners you have configured",
                children: t.isLoading
                  ? "Loading..."
                  : null === (n = t.data) || void 0 === n
                  ? void 0
                  : n.map(function (e, n) {
                      return (0, o.jsx)(
                        A.Zb,
                        {
                          className: dn().runner,
                          title: e.name,
                          footer: (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("span", { children: "Online" }),
                              (0, o.jsx)(A.zx, {
                                small: !0,
                                onClick: function () {
                                  return g.deleteRunner(e.id);
                                },
                                children: "Remove",
                              }),
                            ],
                          }),
                        },
                        n
                      );
                    }),
              }),
              (0, o.jsxs)(A.Zb, {
                title: "Setup Instructions",
                description: "Here's how you add a new runner",
                footer: (0, o.jsxs)(ae, {
                  href: "/",
                  children: [(0, o.jsx)("span", { children: "Read Full Documentation" }), "\xa0", (0, o.jsx)(N.dLw, {})],
                }),
                children: [
                  (0, o.jsx)("h5", { children: "Installing a Runner" }),
                  (0, o.jsx)("p", { children: "Lorem Ipsum Dolor Sit Amet" }),
                  (0, o.jsx)("pre", { children: (0, o.jsx)("code", { children: "npm i -g @induktive/runner" }) }),
                  (0, o.jsx)("h5", { children: "Configuring it" }),
                  (0, o.jsx)("p", { children: "Lorem Ipsum Dolor Sit Amet" }),
                  (0, o.jsx)("pre", { children: (0, o.jsx)("code", { children: "induktive config 'YOUR-ID-HERE'" }) }),
                  (0, o.jsx)("h5", { children: "Starting it" }),
                  (0, o.jsx)("p", { children: "Lorem Ipsum Dolor Sit Amet" }),
                  (0, o.jsx)("pre", { children: (0, o.jsx)("code", { children: "induktive start" }) }),
                  (0, o.jsx)("h5", { children: "Troubleshooting" }),
                  (0, o.jsx)("p", { children: "Lorem Ipsum Dolor Sit Amet" }),
                  (0, o.jsx)("pre", { children: (0, o.jsx)("code", { children: "induktive stop && induktive start" }) }),
                ],
              }),
            ],
          });
        },
        mn = t(4134),
        pn = t(1191),
        xn = t.n(pn),
        fn = t(9685),
        vn = t.n(fn),
        gn = function (e) {
          var n = (0, I.useState)(!1),
            t = n[0],
            r = n[1],
            i = (0, A.cI)({ email: "" }),
            a = i.values.email,
            s = (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)(ae, { href: "/dashboard/login", children: [(0, o.jsx)(N.s$$, {}), " Back to Login"] }),
                (0, o.jsxs)("span", { children: ["Don't have an account? ", (0, o.jsx)(ae, { href: "/dashboard/signup", children: "Join Now" })] }),
              ],
            });
          return (0, o.jsxs)(H, {
            home: !0,
            empty: !0,
            children: [
              (0, o.jsx)(A.u_, {
                overlay: !1,
                title: t ? "Check your email" : "Recover your account",
                description: null !== t && void 0 !== t ? t : "Enter your account's email address to receive a magic login link",
                footer: s,
                children: t
                  ? (0, o.jsx)("p", { children: "An email has been sent to you with instructions on how to recover your account." })
                  : (0, o.jsxs)(A.l0, {
                      className: vn().form,
                      onSubmit: (0, mn.Z)(
                        xn().mark(function e() {
                          return xn().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  r(!0);
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      ),
                      children: [
                        (0, o.jsx)(A.II, {
                          full: !0,
                          value: i.values.email,
                          onChange: function (e) {
                            return i.set("email", e.target.value);
                          },
                          name: "email",
                          placeholder: "Your Email",
                        }),
                        (0, o.jsxs)(A.zx, { type: "submit", kind: "secondary", disabled: !a, children: ["Send magic link ", (0, o.jsx)(N._Qn, {})] }),
                      ],
                    }),
              }),
              jn,
            ],
          });
        },
        jn = (0, o.jsx)("div", { style: { margin: "10vh auto", textAlign: "center" }, children: (0, o.jsx)(A.H2, { children: "Dashboard" }) }),
        bn = t(3617),
        yn = t.n(bn),
        wn = function (e) {
          var n = (0, A.cI)({ email: "", password: "" }),
            t = n.values.email && n.values.password;
          return (0, o.jsxs)(H, {
            home: !0,
            empty: !0,
            children: [
              (0, o.jsx)(A.u_, {
                overlay: !1,
                title: "Welcome back",
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(ae, { href: "/dashboard/recover", children: "Forgot your password?" }),
                    (0, o.jsxs)("span", {
                      children: ["Don't have an account? ", (0, o.jsx)(ae, { href: "/dashboard/signup", children: "Join Now" })],
                    }),
                  ],
                }),
                children: (0, o.jsxs)(A.l0, {
                  className: yn().form,
                  onSubmit: (0, mn.Z)(
                    xn().mark(function e() {
                      var r, i, a;
                      return xn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((r = n.values), (i = r.email), (a = r.password), t)) {
                                  e.next = 5;
                                  break;
                                }
                                alert("Validation error"), (e.next = 13);
                                break;
                              case 5:
                                return (e.prev = 5), (e.next = 8), g.login({ email: i, password: a });
                              case 8:
                                e.next = 13;
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(5)), alert("Something went wrong");
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 10]]
                      );
                    })
                  ),
                  children: [
                    (0, o.jsx)(A.II, {
                      full: !0,
                      value: n.values.email,
                      onChange: function (e) {
                        return n.set("email", e.target.value);
                      },
                      name: "email",
                      placeholder: "Your Email",
                    }),
                    (0, o.jsx)(A.II, {
                      type: "password",
                      full: !0,
                      value: n.values.password,
                      onChange: function (e) {
                        return n.set("password", e.target.value);
                      },
                      name: "password",
                      placeholder: "Your Password",
                    }),
                    (0, o.jsx)(A.zx, { type: "submit", kind: "secondary", disabled: !t, children: "Log In" }),
                  ],
                }),
              }),
              jn,
            ],
          });
        },
        _n = t(1741),
        kn = t.n(_n),
        Zn = function (e) {
          var n = (0, A.cI)({ name: "", lname: "", email: "", password: "" }),
            t = n.values.email && n.values.password;
          return (0, o.jsxs)(H, {
            home: !0,
            empty: !0,
            children: [
              (0, o.jsx)(A.u_, {
                overlay: !1,
                title: "Create your account",
                footer: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)("span", {
                      children: [
                        "By registering, you agree to our\xa0",
                        (0, o.jsx)(ae, { href: "/terms", children: "Terms" }),
                        "\xa0and\xa0",
                        (0, o.jsx)(ae, { href: "/privacy", children: "Privacy Policy" }),
                      ],
                    }),
                    (0, o.jsxs)("span", {
                      children: ["Already have an account? ", (0, o.jsx)(ae, { href: "/dashboard/login", children: "Log In" })],
                    }),
                  ],
                }),
                children: (0, o.jsxs)(A.l0, {
                  className: kn().form,
                  onSubmit: (0, mn.Z)(
                    xn().mark(function e() {
                      var r, i, a;
                      return xn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((r = n.values), (i = r.email), (a = r.password), t)) {
                                  e.next = 5;
                                  break;
                                }
                                alert("Validation error"), (e.next = 13);
                                break;
                              case 5:
                                return (e.prev = 5), (e.next = 8), g.register({ email: i, password: a });
                              case 8:
                                e.next = 13;
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(5)), alert("Something went wrong");
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 10]]
                      );
                    })
                  ),
                  children: [
                    (0, o.jsx)(A.II, {
                      full: !0,
                      value: n.values.name,
                      onChange: function (e) {
                        return n.set("name", e.target.value);
                      },
                      name: "name",
                      placeholder: "Your Name (optional)",
                    }),
                    (0, o.jsx)(A.II, {
                      full: !0,
                      value: n.values.email,
                      onChange: function (e) {
                        return n.set("email", e.target.value);
                      },
                      name: "email",
                      placeholder: "Your Email",
                    }),
                    (0, o.jsx)(A.II, {
                      full: !0,
                      type: "password",
                      value: n.values.password,
                      onChange: function (e) {
                        return n.set("password", e.target.value);
                      },
                      name: "password",
                      placeholder: "Create a Password",
                    }),
                    (0, o.jsx)(A.zx, { type: "submit", kind: "secondary", disabled: !t, children: "Get Started for Free" }),
                  ],
                }),
              }),
              jn,
            ],
          });
        },
        Sn = "/dashboard",
        Cn = function (e) {
          var n = j("current"),
            t = n.data,
            r = (n.error, null === t || void 0 === t ? void 0 : t.id),
            i = { user: r };
          return (0, o.jsx)(k.VK, {
            children: (0, o.jsxs)(Z.Z5, {
              children: [
                r
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/scripts"), element: (0, o.jsx)(je, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/globals"), element: (0, o.jsx)(ke, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/scripts/:id"), element: (0, o.jsx)(nn, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/scripts/:id/stats"), element: (0, o.jsx)(tn, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/settings/api"), element: (0, o.jsx)(cn, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/settings/subscription"), element: (0, o.jsx)(ln, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/settings/runners"), element: (0, o.jsx)(hn, (0, s.Z)({}, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/settings"), element: (0, o.jsx)(on, (0, s.Z)({}, i)) }),
                      ],
                    })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/login"), element: (0, o.jsx)(wn, (0, s.Z)({}, e, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/recover"), element: (0, o.jsx)(gn, (0, s.Z)({}, e, i)) }),
                        (0, o.jsx)(Z.AW, { path: "".concat(Sn, "/signup"), element: (0, o.jsx)(Zn, (0, s.Z)({}, e, i)) }),
                      ],
                    }),
                (0, o.jsx)(Z.AW, { path: "*", element: (0, o.jsx)(Z.Fg, { replace: !0, to: "".concat(Sn, "/").concat(r ? "scripts" : "login") }) }),
              ],
            }),
          });
        };
      function In(e) {
        return (0, o.jsx)(_, { children: (0, o.jsx)(Cn, (0, s.Z)({}, e)) });
      }
    },
    2370: function (e) {
      e.exports = { tabs: "config_tabs__U_Aiz", buttons: "config_buttons__M4foC" };
    },
    9952: function (e) {
      e.exports = { var: "screens_var__bJFgh" };
    },
    4557: function (e) {
      e.exports = {
        layout: "layout_layout__Z2QJi",
        content: "layout_content__Smn_P",
        large: "layout_large__lQ_Iy",
        aside: "layout_aside__wNlgF",
        active: "layout_active__cj3iG",
        asideHeader: "layout_asideHeader__iYWDn",
        popover: "layout_popover__kQBr3",
        fadeIn: "layout_fadeIn__E15bp",
        logo: "layout_logo__zmlBn",
      };
    },
    2357: function (e) {
      e.exports = { plan: "plans_plan__JfCli", selectable: "plans_selectable__bUqAg" };
    },
    8642: function (e) {
      e.exports = { globals: "globals_globals__cd3RR", tabs: "globals_tabs__e_oJ5" };
    },
    9685: function (e) {
      e.exports = { form: "recover_form__21dWB" };
    },
    6399: function (e) {
      e.exports = { script: "script_script__Oduyn", codeActions: "script_codeActions__AR6Bx", code: "script_code__MOggl", api: "script_api__VjOy7" };
    },
    3513: function (e) {
      e.exports = {
        browser: "browser_browser__O5Ode",
        screenActive: "browser_screenActive__7x0Os",
        envSwitch: "browser_envSwitch__P5QJr",
        envSwitchActive: "browser_envSwitchActive__BHMQq",
        screen: "browser_screen__PaeVP",
        runner: "browser_runner__DTcAP",
      };
    },
    1163: function (e) {
      e.exports = {
        run: "runs_run__uaV1t",
        success: "runs_success__4hO6K",
        timeout: "runs_timeout__cp176",
        fail: "runs_fail__z_NoX",
        logs: "runs_logs__ipaQF",
      };
    },
    4776: function (e) {
      e.exports = {
        scripts: "scripts_scripts__V7tVy",
        script: "scripts_script__mc5Ek",
        group: "scripts_group__7mVcv",
        glance: "scripts_glance__fNPis",
        glanceTitle: "scripts_glanceTitle__rTR_7",
        filter: "scripts_filter___2BrI",
        dragOver: "scripts_dragOver__KKNA_",
      };
    },
    9792: function (e) {
      e.exports = { templates: "modals_templates__maOm0", template: "modals_template__L4fgV", templateActive: "modals_templateActive__8v2WV" };
    },
    4958: function (e) {
      e.exports = { runner: "settingsRunners_runner__8K2NR" };
    },
    3617: function (e) {
      e.exports = { form: "signin_form__0GB8D" };
    },
    1741: function (e) {
      e.exports = { form: "signup_form__OiNZv" };
    },
  },
]);
