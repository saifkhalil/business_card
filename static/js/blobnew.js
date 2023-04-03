!(function (n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function (t, e, n) {
      o.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 97));
})([
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "elements", function () {
        return r;
      }),
      n.d(e, "setElementRefs", function () {
        return o;
      });
    var r = {},
      o = function () {
        (r.browserUpgrade = document.querySelector(".browserupgrade")),
          (r.links = document.querySelectorAll("a")),
          (r.barbaContainer = document.querySelector(".barba-container")),
          (r.firstSection = r.barbaContainer.querySelector("section")),
          (r.secondSection = r.barbaContainer.querySelector(
            "section:nth-of-type(2)"
          )),
          (r.topBar = document.querySelector(".top-bar")),
          (r.nav = document.querySelector(".main-nav")),
          (r.navItems = r.nav.querySelectorAll(".nav-item")),
          (r.currentNavItem = r.nav.querySelector(".active")),
          (r.navActive = r.nav.querySelector(".active-highlight")),
          (r.panelWidths = document.querySelectorAll(".w-panel")),
          (r.contentWidths = document.querySelectorAll(".w-content")),
          (r.invertMenuColorSection = document.querySelectorAll(
            ".js-invert-menu-color"
          )),
          (r.blobCanvas = document.querySelector(".blob-canvas")),
          (r.debugMessageBox = document.getElementById("js-message")),
          (r.animateIn = document.querySelectorAll(".animate-in")),
          (r.philosophySection = document.querySelector("#philosophy-section")),
          (r.paletteSelector = document.querySelectorAll(
            ".js-palette-selector"
          )),
          (r.scrollingSlider = document.querySelector(".js-scrolling-slider")),
          (r.typeSelector = document.querySelectorAll(".js-type-selector")),
          (r.comparisonSliders = document.querySelectorAll(
            ".js-comparison-slider"
          )),
          (r.comparisonSliderInstances = []),
          (r.scrollTriggeredAnimations = []),
          (r.zoomScroller = document.querySelector(".js-zoom-container")),
          (r.zoomControlIn = document.querySelector(".js-zoom-in")),
          (r.zoomControlOut = document.querySelector(".js-zoom-out")),
          (r.zoomContainer = document.querySelector(
            ".js-zoom-content-container"
          )),
          (r.zoomContent = document.querySelector(".js-zoom-content")),
          (r.zoomScrollIndicator = document.querySelector(
            ".js-scroll-bar-indicator"
          )),
          (r.zoomScrollTabs = document.querySelector(".js-zoom-scroll-tabs")),
          (r.zoomScrollImage = document.querySelector(".js-zoom-scroll-image")),
          (r.zoomScrollImageDesktop = document.querySelector(
            ".js-zoom-scroll-image-desktop"
          )),
          (r.navHoverContent = document.querySelector(".js-nav-hover-content")),
          (r.allNavHoverContent =
            document.querySelectorAll("[data-nav-hover]")),
          (r.navHovers = document.querySelector(".js-nav-hovers")),
          (r.scrollIndicator = document.querySelector(".scroll-indicator")),
          (r.expressionChart = document.querySelector(".js-expression-chart")),
          (r.expressionChartSelect =
            document.querySelector(".js-chart-select"));
      };
  },
  function (t, e, n) {
    "use strict";
    var E = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0,
      },
      k = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0,
      },
      r = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
      ],
      f = {
        CSS: {},
        springs: {},
      };
    function T(t, e, n) {
      return Math.min(Math.max(t, e), n);
    }
    function p(t, e) {
      return -1 < t.indexOf(e);
    }
    function i(t, e) {
      return t.apply(null, e);
    }
    var A = {
      arr: function (t) {
        return Array.isArray(t);
      },
      obj: function (t) {
        return p(Object.prototype.toString.call(t), "Object");
      },
      pth: function (t) {
        return A.obj(t) && t.hasOwnProperty("totalLength");
      },
      svg: function (t) {
        return t instanceof SVGElement;
      },
      inp: function (t) {
        return t instanceof HTMLInputElement;
      },
      dom: function (t) {
        return t.nodeType || A.svg(t);
      },
      str: function (t) {
        return "string" == typeof t;
      },
      fnc: function (t) {
        return "function" == typeof t;
      },
      und: function (t) {
        return void 0 === t;
      },
      hex: function (t) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
      },
      rgb: function (t) {
        return /^rgb/.test(t);
      },
      hsl: function (t) {
        return /^hsl/.test(t);
      },
      col: function (t) {
        return A.hex(t) || A.rgb(t) || A.hsl(t);
      },
      key: function (t) {
        return (
          !E.hasOwnProperty(t) &&
          !k.hasOwnProperty(t) &&
          "targets" !== t &&
          "keyframes" !== t
        );
      },
    };
    function d(t) {
      var e = /\(([^)]+)\)/.exec(t);
      return e
        ? e[1].split(",").map(function (t) {
            return parseFloat(t);
          })
        : [];
    }
    function a(o, n) {
      var t = d(o),
        e = T(A.und(t[0]) ? 1 : t[0], 0.1, 100),
        r = T(A.und(t[1]) ? 100 : t[1], 0.1, 100),
        i = T(A.und(t[2]) ? 10 : t[2], 0.1, 100),
        a = T(A.und(t[3]) ? 0 : t[3], 0.1, 100),
        s = Math.sqrt(r / e),
        c = i / (2 * Math.sqrt(r * e)),
        u = c < 1 ? s * Math.sqrt(1 - c * c) : 0,
        l = c < 1 ? (c * s - a) / u : -a + s;
      function p(t) {
        var e = n ? (n * t) / 1e3 : t;
        return (
          (e =
            c < 1
              ? Math.exp(-e * c * s) *
                (1 * Math.cos(u * e) + l * Math.sin(u * e))
              : (1 + l * e) * Math.exp(-e * s)),
          0 === t || 1 === t ? t : 1 - e
        );
      }
      return n
        ? p
        : function () {
            var t = f.springs[o];
            if (t) return t;
            for (var e = 0, n = 0; ; )
              if (1 === p((e += 1 / 6))) {
                if (16 <= ++n) break;
              } else n = 0;
            var r = e * (1 / 6) * 1e3;
            return (f.springs[o] = r);
          };
    }
    function s(t, e) {
      void 0 === t && (t = 1), void 0 === e && (e = 0.5);
      var n = T(t, 1, 10),
        r = T(e, 0.1, 2);
      return function (t) {
        return 0 === t || 1 === t
          ? t
          : -n *
              Math.pow(2, 10 * (t - 1)) *
              Math.sin(
                ((t - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                  (2 * Math.PI)) /
                  r
              );
      };
    }
    function c(e) {
      return (
        void 0 === e && (e = 10),
        function (t) {
          return Math.round(t * e) * (1 / e);
        }
      );
    }
    var u = (function () {
        function r(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function o(t, e) {
          return 3 * e - 6 * t;
        }
        function i(t) {
          return 3 * t;
        }
        function c(t, e, n) {
          return ((r(e, n) * t + o(e, n)) * t + i(e)) * t;
        }
        function u(t, e, n) {
          return 3 * r(e, n) * t * t + 2 * o(e, n) * t + i(e);
        }
        return function (i, e, a, n) {
          if (0 <= i && i <= 1 && 0 <= a && a <= 1) {
            var s = new Float32Array(11);
            if (i !== e || a !== n)
              for (var t = 0; t < 11; ++t) s[t] = c(0.1 * t, i, a);
            return function (t) {
              return i === e && a === n
                ? t
                : 0 === t || 1 === t
                ? t
                : c(
                    (function (t) {
                      for (var e = 0, n = 1; 10 !== n && s[n] <= t; ++n)
                        e += 0.1;
                      var r = e + ((t - s[--n]) / (s[n + 1] - s[n])) * 0.1,
                        o = u(r, i, a);
                      return 0.001 <= o
                        ? (function (t, e, n, r) {
                            for (var o = 0; o < 4; ++o) {
                              var i = u(e, n, r);
                              if (0 === i) return e;
                              e -= (c(e, n, r) - t) / i;
                            }
                            return e;
                          })(t, r, i, a)
                        : 0 === o
                        ? r
                        : (function (t, e, n, r, o) {
                            for (
                              var i, a, s = 0;
                              0 < (i = c((a = e + (n - e) / 2), r, o) - t)
                                ? (n = a)
                                : (e = a),
                                1e-7 < Math.abs(i) && ++s < 10;

                            );
                            return a;
                          })(t, e, e + 0.1, i, a);
                    })(t),
                    e,
                    n
                  );
            };
          }
        };
      })(),
      l = (function () {
        var r = [
            "Quad",
            "Cubic",
            "Quart",
            "Quint",
            "Sine",
            "Expo",
            "Circ",
            "Back",
            "Elastic",
          ],
          t = {
            In: [
              [0.55, 0.085, 0.68, 0.53],
              [0.55, 0.055, 0.675, 0.19],
              [0.895, 0.03, 0.685, 0.22],
              [0.755, 0.05, 0.855, 0.06],
              [0.47, 0, 0.745, 0.715],
              [0.95, 0.05, 0.795, 0.035],
              [0.6, 0.04, 0.98, 0.335],
              [0.6, -0.28, 0.735, 0.045],
              s,
            ],
            Out: [
              [0.25, 0.46, 0.45, 0.94],
              [0.215, 0.61, 0.355, 1],
              [0.165, 0.84, 0.44, 1],
              [0.23, 1, 0.32, 1],
              [0.39, 0.575, 0.565, 1],
              [0.19, 1, 0.22, 1],
              [0.075, 0.82, 0.165, 1],
              [0.175, 0.885, 0.32, 1.275],
              function (e, n) {
                return function (t) {
                  return 1 - s(e, n)(1 - t);
                };
              },
            ],
            InOut: [
              [0.455, 0.03, 0.515, 0.955],
              [0.645, 0.045, 0.355, 1],
              [0.77, 0, 0.175, 1],
              [0.86, 0, 0.07, 1],
              [0.445, 0.05, 0.55, 0.95],
              [1, 0, 0, 1],
              [0.785, 0.135, 0.15, 0.86],
              [0.68, -0.55, 0.265, 1.55],
              function (e, n) {
                return function (t) {
                  return t < 0.5
                    ? s(e, n)(2 * t) / 2
                    : 1 - s(e, n)(-2 * t + 2) / 2;
                };
              },
            ],
          },
          o = {
            linear: [0.25, 0.25, 0.75, 0.75],
          },
          e = function (n) {
            t[n].forEach(function (t, e) {
              o["ease" + n + r[e]] = t;
            });
          };
        for (var n in t) e(n);
        return o;
      })();
    function O(t, e) {
      if (A.fnc(t)) return t;
      var n = t.split("(")[0],
        r = l[n],
        o = d(t);
      switch (n) {
        case "spring":
          return a(t, e);
        case "cubicBezier":
          return i(u, o);
        case "steps":
          return i(c, o);
        default:
          return A.fnc(r) ? i(r, o) : i(u, r);
      }
    }
    function o(t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }
    function L(t, e) {
      for (
        var n = t.length, r = 2 <= arguments.length ? e : void 0, o = [], i = 0;
        i < n;
        i++
      )
        if (i in t) {
          var a = t[i];
          e.call(r, a, i, t) && o.push(a);
        }
      return o;
    }
    function C(t) {
      return t.reduce(function (t, e) {
        return t.concat(A.arr(e) ? C(e) : e);
      }, []);
    }
    function h(t) {
      return A.arr(t)
        ? t
        : (A.str(t) && (t = o(t) || t),
          t instanceof NodeList || t instanceof HTMLCollection
            ? [].slice.call(t)
            : [t]);
    }
    function m(t, e) {
      return t.some(function (t) {
        return t === e;
      });
    }
    function v(t) {
      var e = {};
      for (var n in t) e[n] = t[n];
      return e;
    }
    function j(t, e) {
      var n = v(t);
      for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
      return n;
    }
    function I(t, e) {
      var n = v(t);
      for (var r in e) n[r] = A.und(t[r]) ? e[r] : t[r];
      return n;
    }
    function P(t) {
      var e =
        /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          t
        );
      if (e) return e[2];
    }
    function g(t, e) {
      return A.fnc(t) ? t(e.target, e.id, e.total) : t;
    }
    function y(t, e) {
      return t.getAttribute(e);
    }
    function b(t, e, n) {
      if (m([n, "deg", "rad", "turn"], P(e))) return e;
      var r = f.CSS[e + n];
      if (!A.und(r)) return r;
      var o = document.createElement(t.tagName),
        i =
          t.parentNode && t.parentNode !== document
            ? t.parentNode
            : document.body;
      i.appendChild(o),
        (o.style.position = "absolute"),
        (o.style.width = 100 + n);
      var a = 100 / o.offsetWidth;
      i.removeChild(o);
      var s = a * parseFloat(e);
      return (f.CSS[e + n] = s);
    }
    function w(t, e, n) {
      if (e in t.style) {
        var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          o = t.style[e] || getComputedStyle(t).getPropertyValue(r) || "0";
        return n ? b(t, o, n) : o;
      }
    }
    function x(t, e) {
      return A.dom(t) && !A.inp(t) && (y(t, e) || (A.svg(t) && t[e]))
        ? "attribute"
        : A.dom(t) && m(r, e)
        ? "transform"
        : A.dom(t) && "transform" !== e && w(t, e)
        ? "css"
        : null != t[e]
        ? "object"
        : void 0;
    }
    function S(t) {
      if (A.dom(t)) {
        for (
          var e,
            n = t.style.transform || "",
            r = /(\w+)\(([^)]*)\)/g,
            o = new Map();
          (e = r.exec(n));

        )
          o.set(e[1], e[2]);
        return o;
      }
    }
    function M(t, e, n, r) {
      switch (x(t, e)) {
        case "transform":
          return (
            (o = t),
            (a = r),
            (s = n),
            (u = p((i = e), "scale")
              ? 1
              : 0 +
                (p((c = i), "translate") || "perspective" === c
                  ? "px"
                  : p(c, "rotate") || p(c, "skew")
                  ? "deg"
                  : void 0)),
            (l = S(o).get(i) || u),
            a && (a.transforms.list.set(i, l), (a.transforms.last = i)),
            s ? b(o, l, s) : l
          );
        case "css":
          return w(t, e, n);
        case "attribute":
          return y(t, e);
        default:
          return t[e] || 0;
      }
      var o, i, a, s, c, u, l;
    }
    function D(t, e) {
      var n = /^(\*=|\+=|-=)/.exec(t);
      if (!n) return t;
      var r = P(t) || 0,
        o = parseFloat(e),
        i = parseFloat(t.replace(n[0], ""));
      switch (n[0][0]) {
        case "+":
          return o + i + r;
        case "-":
          return o - i + r;
        case "*":
          return o * i + r;
      }
    }
    function _(t, e) {
      if (A.col(t))
        return (
          (n = t),
          A.rgb(n)
            ? (a = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((i = n)))
              ? "rgba(" + a[1] + ",1)"
              : i
            : A.hex(n)
            ? ((r = n.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (t, e, n, r) {
                  return e + e + n + n + r + r;
                }
              )),
              (o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r)),
              "rgba(" +
                parseInt(o[1], 16) +
                "," +
                parseInt(o[2], 16) +
                "," +
                parseInt(o[3], 16) +
                ",1)")
            : A.hsl(n)
            ? (function (t) {
                var e,
                  n,
                  r,
                  o =
                    /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                    /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                      t
                    ),
                  i = parseInt(o[1], 10) / 360,
                  a = parseInt(o[2], 10) / 100,
                  s = parseInt(o[3], 10) / 100,
                  c = o[4] || 1;
                function u(t, e, n) {
                  return (
                    n < 0 && (n += 1),
                    1 < n && (n -= 1),
                    n < 1 / 6
                      ? t + 6 * (e - t) * n
                      : n < 0.5
                      ? e
                      : n < 2 / 3
                      ? t + (e - t) * (2 / 3 - n) * 6
                      : t
                  );
                }
                if (0 == a) e = n = r = s;
                else {
                  var l = s < 0.5 ? s * (1 + a) : s + a - s * a,
                    p = 2 * s - l;
                  (e = u(p, l, i + 1 / 3)),
                    (n = u(p, l, i)),
                    (r = u(p, l, i - 1 / 3));
                }
                return (
                  "rgba(" +
                  255 * e +
                  "," +
                  255 * n +
                  "," +
                  255 * r +
                  "," +
                  c +
                  ")"
                );
              })(n)
            : void 0
        );
      var n,
        r,
        o,
        i,
        a,
        s = P(t),
        c = s ? t.substr(0, t.length - s.length) : t;
      return e && !/\s/g.test(t) ? c + e : c;
    }
    function q(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function z(t) {
      for (var e, n = t.points, r = 0, o = 0; o < n.numberOfItems; o++) {
        var i = n.getItem(o);
        0 < o && (r += q(e, i)), (e = i);
      }
      return r;
    }
    function N(t) {
      if (t.getTotalLength) return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case "circle":
          return (i = t), 2 * Math.PI * y(i, "r");
        case "rect":
          return 2 * y((o = t), "width") + 2 * y(o, "height");
        case "line":
          return q(
            {
              x: y((r = t), "x1"),
              y: y(r, "y1"),
            },
            {
              x: y(r, "x2"),
              y: y(r, "y2"),
            }
          );
        case "polyline":
          return z(t);
        case "polygon":
          return (
            (n = (e = t).points),
            z(e) + q(n.getItem(n.numberOfItems - 1), n.getItem(0))
          );
      }
      var e, n, r, o, i;
    }
    function H(n, t) {
      var e = t || {},
        r =
          e.el ||
          (function (t) {
            for (
              var e = n.parentNode;
              A.svg(e) && ((e = e.parentNode), A.svg(e.parentNode));

            );
            return e;
          })(),
        o = r.getBoundingClientRect(),
        i = y(r, "viewBox"),
        a = o.width,
        s = o.height,
        c = e.viewBox || (i ? i.split(" ") : [0, 0, a, s]);
      return {
        el: r,
        viewBox: c,
        x: c[0] / 1,
        y: c[1] / 1,
        w: a / c[2],
        h: s / c[3],
      };
    }
    function F(n, r) {
      function t(t) {
        void 0 === t && (t = 0);
        var e = 1 <= r + t ? r + t : 0;
        return n.el.getPointAtLength(e);
      }
      var e = H(n.el, n.svg),
        o = t(),
        i = t(-1),
        a = t(1);
      switch (n.property) {
        case "x":
          return (o.x - e.x) * e.w;
        case "y":
          return (o.y - e.y) * e.h;
        case "angle":
          return (180 * Math.atan2(a.y - i.y, a.x - i.x)) / Math.PI;
      }
    }
    function B(t, e) {
      var n = /-?\d*\.?\d+/g,
        r = _(A.pth(t) ? t.totalLength : t, e) + "";
      return {
        original: r,
        numbers: r.match(n) ? r.match(n).map(Number) : [0],
        strings: A.str(t) || e ? r.split(n) : [],
      };
    }
    function R(t) {
      return L(t ? C(A.arr(t) ? t.map(h) : h(t)) : [], function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function W(t) {
      var n = R(t);
      return n.map(function (t, e) {
        return {
          target: t,
          id: e,
          total: n.length,
          transforms: {
            list: S(t),
          },
        };
      });
    }
    function Y(t, r) {
      var e = v(r);
      if ((/^spring/.test(e.easing) && (e.duration = a(e.easing)), A.arr(t))) {
        var n = t.length;
        2 !== n || A.obj(t[0])
          ? A.fnc(r.duration) || (e.duration = r.duration / n)
          : (t = {
              value: t,
            });
      }
      var o = A.arr(t) ? t : [t];
      return o
        .map(function (t, e) {
          var n =
            A.obj(t) && !A.pth(t)
              ? t
              : {
                  value: t,
                };
          return (
            A.und(n.delay) && (n.delay = e ? 0 : r.delay),
            A.und(n.endDelay) &&
              (n.endDelay = e === o.length - 1 ? r.endDelay : 0),
            n
          );
        })
        .map(function (t) {
          return I(t, e);
        });
    }
    var X = {
      css: function (t, e, n) {
        return (t.style[e] = n);
      },
      attribute: function (t, e, n) {
        return t.setAttribute(e, n);
      },
      object: function (t, e, n) {
        return (t[e] = n);
      },
      transform: function (t, e, n, r, o) {
        if ((r.list.set(e, n), e === r.last || o)) {
          var i = "";
          r.list.forEach(function (t, e) {
            i += e + "(" + t + ") ";
          }),
            (t.style.transform = i);
        }
      },
    };
    function V(t, c) {
      W(t).forEach(function (t) {
        for (var e in c) {
          var n = g(c[e], t),
            r = t.target,
            o = P(n),
            i = M(r, e, o, t),
            a = D(_(n, o || P(i)), i),
            s = x(r, e);
          X[s](r, e, a, t.transforms, !0);
        }
      });
    }
    function U(t, n) {
      return L(
        C(
          t.map(function (e) {
            return n.map(function (t) {
              return (function (t, e) {
                var l,
                  p,
                  f,
                  n = x(t.target, e.name);
                if (n) {
                  var r =
                      ((p = t),
                      (l = e).tweens.map(function (t) {
                        var e = (function (t, e) {
                            var n = {};
                            for (var r in t) {
                              var o = g(t[r], e);
                              A.arr(o) &&
                                1 ===
                                  (o = o.map(function (t) {
                                    return g(t, e);
                                  })).length &&
                                (o = o[0]),
                                (n[r] = o);
                            }
                            return (
                              (n.duration = parseFloat(n.duration)),
                              (n.delay = parseFloat(n.delay)),
                              n
                            );
                          })(t, p),
                          n = e.value,
                          r = A.arr(n) ? n[1] : n,
                          o = P(r),
                          i = M(p.target, l.name, o, p),
                          a = f ? f.to.original : i,
                          s = A.arr(n) ? n[0] : a,
                          c = P(s) || P(i),
                          u = o || c;
                        return (
                          A.und(r) && (r = a),
                          (e.from = B(s, u)),
                          (e.to = B(D(r, s), u)),
                          (e.start = f ? f.end : 0),
                          (e.end = e.start + e.delay + e.duration + e.endDelay),
                          (e.easing = O(e.easing, e.duration)),
                          (e.isPath = A.pth(n)),
                          (e.isColor = A.col(e.from.original)),
                          e.isColor && (e.round = 1),
                          (f = e)
                        );
                      })),
                    o = r[r.length - 1];
                  return {
                    type: n,
                    property: e.name,
                    animatable: t,
                    tweens: r,
                    duration: o.end,
                    delay: r[0].delay,
                    endDelay: o.endDelay,
                  };
                }
              })(e, t);
            });
          })
        ),
        function (t) {
          return !A.und(t);
        }
      );
    }
    function G(t, e) {
      var n = t.length,
        r = function (t) {
          return t.timelineOffset ? t.timelineOffset : 0;
        },
        o = {};
      return (
        (o.duration = n
          ? Math.max.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.duration;
              })
            )
          : e.duration),
        (o.delay = n
          ? Math.min.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.delay;
              })
            )
          : e.delay),
        (o.endDelay = n
          ? o.duration -
            Math.max.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.duration - t.endDelay;
              })
            )
          : e.endDelay),
        o
      );
    }
    var $,
      Q = 0,
      K = [],
      J = [],
      Z = (function () {
        function i() {
          $ = requestAnimationFrame(t);
        }
        function t(t) {
          var e = K.length;
          if (e) {
            for (var n = 0; n < e; ) {
              var r = K[n];
              if (r.paused) {
                var o = K.indexOf(r);
                -1 < o && (K.splice(o, 1), (e = K.length));
              } else r.tick(t);
              n++;
            }
            i();
          } else $ = cancelAnimationFrame($);
        }
        return i;
      })();
    function tt(t) {
      void 0 === t && (t = {});
      var i,
        a = 0,
        s = 0,
        c = 0,
        u = 0,
        l = null;
      function p(t) {
        var e =
          window.Promise &&
          new Promise(function (t) {
            return (l = t);
          });
        return (t.finished = e);
      }
      var e,
        n,
        r,
        o,
        f,
        d,
        h,
        m,
        O =
          ((n = j(E, (e = t))),
          (r = j(k, e)),
          (o = (function (t, e) {
            var n = [],
              r = e.keyframes;
            for (var o in (r &&
              (e = I(
                (function (e) {
                  for (
                    var n = L(
                        C(
                          e.map(function (t) {
                            return Object.keys(t);
                          })
                        ),
                        function (t) {
                          return A.key(t);
                        }
                      ).reduce(function (t, e) {
                        return t.indexOf(e) < 0 && t.push(e), t;
                      }, []),
                      o = {},
                      t = function (t) {
                        var r = n[t];
                        o[r] = e.map(function (t) {
                          var e = {};
                          for (var n in t)
                            A.key(n)
                              ? n == r && (e.value = t[n])
                              : (e[n] = t[n]);
                          return e;
                        });
                      },
                      r = 0;
                    r < n.length;
                    r++
                  )
                    t(r);
                  return o;
                })(r),
                e
              )),
            e))
              A.key(o) &&
                n.push({
                  name: o,
                  tweens: Y(e[o], t),
                });
            return n;
          })(r, e)),
          (f = W(e.targets)),
          (d = U(f, o)),
          (h = G(d, r)),
          (m = Q),
          Q++,
          I(n, {
            id: m,
            children: [],
            animatables: f,
            animations: d,
            duration: h.duration,
            delay: h.delay,
            endDelay: h.endDelay,
          }));
      function v() {
        var t = O.direction;
        "alternate" !== t &&
          (O.direction = "normal" !== t ? "normal" : "reverse"),
          (O.reversed = !O.reversed),
          i.forEach(function (t) {
            return (t.reversed = O.reversed);
          });
      }
      function g(t) {
        return O.reversed ? O.duration - t : t;
      }
      function y() {
        (a = 0), (s = g(O.currentTime) * (1 / tt.speed));
      }
      function b(t, e) {
        e && e.seek(t - e.timelineOffset);
      }
      function w(e) {
        for (var t = 0, n = O.animations, r = n.length; t < r; ) {
          var o = n[t],
            i = o.animatable,
            a = o.tweens,
            s = a.length - 1,
            c = a[s];
          s &&
            (c =
              L(a, function (t) {
                return e < t.end;
              })[0] || c);
          for (
            var u = T(e - c.start - c.delay, 0, c.duration) / c.duration,
              l = isNaN(u) ? 1 : c.easing(u),
              p = c.to.strings,
              f = c.round,
              d = [],
              h = c.to.numbers.length,
              m = void 0,
              v = 0;
            v < h;
            v++
          ) {
            var g = void 0,
              y = c.to.numbers[v],
              b = c.from.numbers[v] || 0;
            (g = c.isPath ? F(c.value, l * y) : b + l * (y - b)),
              f && ((c.isColor && 2 < v) || (g = Math.round(g * f) / f)),
              d.push(g);
          }
          var w = p.length;
          if (w) {
            m = p[0];
            for (var x = 0; x < w; x++) {
              p[x];
              var S = p[x + 1],
                E = d[x];
              isNaN(E) || (m += S ? E + S : E + " ");
            }
          } else m = d[0];
          X[o.type](i.target, o.property, m, i.transforms),
            (o.currentValue = m),
            t++;
        }
      }
      function x(t) {
        O[t] && !O.passThrough && O[t](O);
      }
      function S(t) {
        var e = O.duration,
          n = O.delay,
          r = e - O.endDelay,
          o = g(t);
        (O.progress = T((o / e) * 100, 0, 100)),
          (O.reversePlayback = o < O.currentTime),
          i &&
            (function (t) {
              if (O.reversePlayback) for (var e = u; e--; ) b(t, i[e]);
              else for (var n = 0; n < u; n++) b(t, i[n]);
            })(o),
          !O.began &&
            0 < O.currentTime &&
            ((O.began = !0), x("begin"), x("loopBegin")),
          o <= n && 0 !== O.currentTime && w(0),
          ((r <= o && O.currentTime !== e) || !e) && w(e),
          n < o && o < r
            ? (O.changeBegan ||
                ((O.changeBegan = !0),
                (O.changeCompleted = !1),
                x("changeBegin")),
              x("change"),
              w(o))
            : O.changeBegan &&
              ((O.changeCompleted = !0),
              (O.changeBegan = !1),
              x("changeComplete")),
          (O.currentTime = T(o, 0, e)),
          O.began && x("update"),
          e <= t &&
            ((s = 0),
            O.remaining && !0 !== O.remaining && O.remaining--,
            O.remaining
              ? ((a = c),
                x("loopComplete"),
                x("loopBegin"),
                "alternate" === O.direction && v())
              : ((O.paused = !0),
                O.completed ||
                  ((O.completed = !0),
                  x("loopComplete"),
                  x("complete"),
                  !O.passThrough && "Promise" in window && (l(), p(O)))));
      }
      return (
        p(O),
        (O.reset = function () {
          var t = O.direction;
          (O.passThrough = !1),
            (O.currentTime = 0),
            (O.progress = 0),
            (O.paused = !0),
            (O.began = !1),
            (O.changeBegan = !1),
            (O.completed = !1),
            (O.changeCompleted = !1),
            (O.reversePlayback = !1),
            (O.reversed = "reverse" === t),
            (O.remaining = O.loop),
            (i = O.children);
          for (var e = (u = i.length); e--; ) O.children[e].reset();
          ((O.reversed && !0 !== O.loop) ||
            ("alternate" === t && 1 === O.loop)) &&
            O.remaining++,
            w(0);
        }),
        (O.set = function (t, e) {
          return V(t, e), O;
        }),
        (O.tick = function (t) {
          (c = t), a || (a = c), S((c + (s - a)) * tt.speed);
        }),
        (O.seek = function (t) {
          S(g(t));
        }),
        (O.pause = function () {
          (O.paused = !0), y();
        }),
        (O.play = function () {
          O.paused &&
            (O.completed && O.reset(),
            (O.paused = !1),
            K.push(O),
            y(),
            $ || Z());
        }),
        (O.reverse = function () {
          v(), y();
        }),
        (O.restart = function () {
          O.reset(), O.play();
        }),
        O.reset(),
        O.autoplay && O.play(),
        O
      );
    }
    function et(t, e) {
      for (var n = e.length; n--; )
        m(t, e[n].animatable.target) && e.splice(n, 1);
    }
    "undefined" != typeof document &&
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (K.forEach(function (t) {
              return t.pause();
            }),
            (J = K.slice(0)),
            (K = []))
          : J.forEach(function (t) {
              return t.play();
            });
      }),
      (tt.version = "3.0.1"),
      (tt.speed = 1),
      (tt.running = K),
      (tt.remove = function (t) {
        for (var e = R(t), n = K.length; n--; ) {
          var r = K[n],
            o = r.animations,
            i = r.children;
          et(e, o);
          for (var a = i.length; a--; ) {
            var s = i[a],
              c = s.animations;
            et(e, c), c.length || s.children.length || i.splice(a, 1);
          }
          o.length || i.length || r.pause();
        }
      }),
      (tt.get = M),
      (tt.set = V),
      (tt.convertPx = b),
      (tt.path = function (t, e) {
        var n = A.str(t) ? o(t)[0] : t,
          r = e || 100;
        return function (t) {
          return {
            property: t,
            el: n,
            svg: H(n),
            totalLength: N(n) * (r / 100),
          };
        };
      }),
      (tt.setDashoffset = function (t) {
        var e = N(t);
        return t.setAttribute("stroke-dasharray", e), e;
      }),
      (tt.stagger = function (t, e) {
        void 0 === e && (e = {});
        var u = e.direction || "normal",
          l = e.easing ? O(e.easing) : null,
          p = e.grid,
          f = e.axis,
          d = e.from || 0,
          h = "first" === d,
          m = "center" === d,
          v = "last" === d,
          g = A.arr(t),
          y = g ? parseFloat(t[0]) : parseFloat(t),
          b = g ? parseFloat(t[1]) : 0,
          w = P(g ? t[1] : t) || 0,
          x = e.start || 0 + (g ? y : 0),
          S = [],
          E = 0;
        return function (t, e, n) {
          if (
            (h && (d = 0), m && (d = (n - 1) / 2), v && (d = n - 1), !S.length)
          ) {
            for (var r = 0; r < n; r++) {
              if (p) {
                var o = m ? (p[0] - 1) / 2 : d % p[0],
                  i = m ? (p[1] - 1) / 2 : Math.floor(d / p[0]),
                  a = o - (r % p[0]),
                  s = i - Math.floor(r / p[0]),
                  c = Math.sqrt(a * a + s * s);
                "x" === f && (c = -a), "y" === f && (c = -s), S.push(c);
              } else S.push(Math.abs(d - r));
              E = Math.max.apply(Math, S);
            }
            l &&
              (S = S.map(function (t) {
                return l(t / E) * E;
              })),
              "reverse" === u &&
                (S = S.map(function (t) {
                  return f ? (t < 0 ? -1 * t : -t) : Math.abs(E - t);
                }));
          }
          return x + (g ? (b - y) / E : y) * (Math.round(100 * S[e]) / 100) + w;
        };
      }),
      (tt.timeline = function (l) {
        void 0 === l && (l = {});
        var p = tt(l);
        return (
          (p.duration = 0),
          (p.add = function (t, e) {
            var n = K.indexOf(p),
              r = p.children;
            function o(t) {
              t.passThrough = !0;
            }
            -1 < n && K.splice(n, 1);
            for (var i = 0; i < r.length; i++) o(r[i]);
            var a = I(t, j(k, l));
            a.targets = a.targets || l.targets;
            var s = p.duration;
            (a.autoplay = !1),
              (a.direction = p.direction),
              (a.timelineOffset = A.und(e) ? s : D(e, s)),
              o(p),
              p.seek(a.timelineOffset);
            var c = tt(a);
            o(c), r.push(c);
            var u = G(r, l);
            return (
              (p.delay = u.delay),
              (p.endDelay = u.endDelay),
              (p.duration = u.duration),
              p.seek(0),
              p.reset(),
              p.autoplay && p.play(),
              p
            );
          }),
          p
        );
      }),
      (tt.easing = O),
      (tt.penner = l),
      (tt.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }),
      (e.a = tt);
  },
  function (t, e, n) {
    var r = n(22)("wks"),
      o = n(48),
      i = n(3).Symbol,
      a = n(70);
    t.exports = function (t) {
      return r[t] || (r[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
    };
  },
  function (t, e) {
    t.exports =
      "object" == typeof window && window && window.Math == Math
        ? window
        : "object" == typeof self && self && self.Math == Math
        ? self
        : Function("return this")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initNav", function () {
        return o;
      }),
      n.d(e, "togglePanel", function () {
        return i;
      }),
      n.d(e, "setNavClasses", function () {
        return a;
      }),
      n.d(e, "setHeaderColor", function () {
        return u;
      }),
      n.d(e, "setNavHighlight", function () {
        return c;
      }),
      n(122),
      n(123),
      n(18);
    var s = n(0),
      r = n(62),
      o = function () {
        c(s.elements.currentNavItem),
          u(),
          s.elements.navItems.forEach(function (t) {
            return t.addEventListener("mouseenter", l);
          }),
          s.elements.navItems.forEach(function (t) {
            return t.addEventListener("mouseleave", l);
          });
      },
      i = function (t) {
        t && (t.preventDefault(), t.stopPropagation()),
          s.elements.panelWidths.forEach(function (t) {
            return t.classList.toggle("w-panel-open");
          }),
          s.elements.contentWidths.forEach(function (t) {
            return t.classList.toggle("w-content-open");
          }),
          document.body.classList.toggle("panel-is-open"),
          document.body.classList.toggle("panel-in-transition"),
          document.body.classList.contains("panel-is-open") &&
          "mobile" == getComputedStyle(s.elements.nav, "::after").fontFamily
            ? Object(r.disableBodyScroll)(s.elements.nav)
            : Object(r.clearAllBodyScrollLocks)(),
          setTimeout(function () {
            document.body.classList.remove("panel-in-transition");
          }, 400);
      },
      a = function () {
        for (
          var t = window.location.pathname, e = null, n = 0;
          n < s.elements.navItems.length;
          n++
        ) {
          var r = s.elements.navItems[n],
            o = r.href && r.href.endsWith("#");
          r.classList.remove("active"),
            o || r.pathname !== t || (r.classList.add("active"), (e = r));
        }
        c(e);
      },
      c = function (t) {
        if (t) {
          var e = document.querySelector(".is-highlighted");
          if (e) {
            var n = e.getBoundingClientRect().top,
              r = e.clientHeight;
            (s.elements.navActive.style.height = r + "px"),
              (s.elements.navActive.style.top = n + "px"),
              e.classList.remove("is-highlighted");
          }
          var o = t.getBoundingClientRect().top,
            i = t.clientHeight;
          s.elements.navActive.classList.add("has-transition"),
            s.elements.navActive.classList.remove("no-active"),
            (s.elements.navActive.style.height = i + "px"),
            (s.elements.navActive.style.top = o + "px"),
            window.setTimeout(function () {
              t.classList.add("is-highlighted"),
                window.setTimeout(function () {
                  s.elements.navActive.classList.remove("has-transition");
                }, 200);
            }, 200);
        } else {
          s.elements.navActive.classList.add("no-active");
          var a = document.querySelector(".is-highlighted");
          a && a.classList.remove("is-highlighted");
        }
      },
      u = function (t) {
        var e =
          (function (t) {
            for (var e = 0; e < t.classList.length; e++) {
              var n = t.classList[e];
              if (n.startsWith("bg-")) return n;
            }
          })(t || s.elements.firstSection) || "bg-beige";
        !(function (t) {
          for (var e = 0; e < t.classList.length; e++) {
            var n = t.classList[e];
            n.startsWith("bg-") && t.classList.remove(n);
          }
        })(s.elements.topBar),
          s.elements.topBar.classList.add(e);
      },
      l = function (t) {
        if ("mouseenter" == t.type) {
          s.elements.allNavHoverContent.forEach(function (t) {
            return (t.style.display = "none");
          });
          var e = t.target.dataset.navItem;
          if (!e) return;
          var n = s.elements.navHoverContent.querySelector(
            '[data-nav-hover="' + e + '"]'
          );
          if (!n) return;
          if (document.body.classList.contains("panel-in-transition")) return;
          (n.style.display = "block"),
            s.elements.navHovers.classList.add("is-visible");
        } else
          "mouseleave" == t.type &&
            s.elements.navHovers.classList.remove("is-visible");
      };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var l = n(3),
      p = n(37).f,
      f = n(8),
      d = n(21),
      h = n(47),
      m = n(73),
      v = n(76);
    t.exports = function (t, e) {
      var n,
        r,
        o,
        i,
        a,
        s = t.target,
        c = t.global,
        u = t.stat;
      if ((n = c ? l : u ? l[s] || h(s, {}) : (l[s] || {}).prototype))
        for (r in e) {
          if (
            ((i = e[r]),
            (o = t.noTargetGet ? (a = p(n, r)) && a.value : n[r]),
            !v(c ? r : s + (u ? "." : "#") + r, t.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue;
            m(i, o);
          }
          (t.sham || (o && o.sham)) && f(i, "sham", !0), d(n, r, i, t);
        }
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(12),
      o = n(24);
    t.exports = n(15)
      ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(9);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, n) {
    var r;
    (r = function () {
      return (function (n) {
        var r = {};
        function o(t) {
          if (r[t]) return r[t].exports;
          var e = (r[t] = {
            exports: {},
            id: t,
            loaded: !1,
          });
          return (
            n[t].call(e.exports, e, e.exports, o), (e.loaded = !0), e.exports
          );
        }
        return (o.m = n), (o.c = r), (o.p = "http://localhost:8080/dist"), o(0);
      })([
        function (t, e, n) {
          "function" != typeof Promise && (window.Promise = n(1));
          var r = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5),
          };
          t.exports = r;
        },
        function (d, t, e) {
          (function (n) {
            !(function (t) {
              var e = setTimeout;
              function r() {}
              var o =
                  ("function" == typeof n && n) ||
                  function (t) {
                    e(t, 0);
                  },
                i = function (t) {
                  "undefined" != typeof console && console;
                };
              function a(t) {
                if ("object" != typeof this)
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                  throw new TypeError("not a function");
                (this._state = 0),
                  (this._handled = !1),
                  (this._value = void 0),
                  (this._deferreds = []),
                  f(t, this);
              }
              function s(n, r) {
                for (; 3 === n._state; ) n = n._value;
                0 !== n._state
                  ? ((n._handled = !0),
                    o(function () {
                      var t = 1 === n._state ? r.onFulfilled : r.onRejected;
                      if (null !== t) {
                        var e;
                        try {
                          e = t(n._value);
                        } catch (t) {
                          return void u(r.promise, t);
                        }
                        c(r.promise, e);
                      } else (1 === n._state ? c : u)(r.promise, n._value);
                    }))
                  : n._deferreds.push(r);
              }
              function c(t, e) {
                try {
                  if (e === t)
                    throw new TypeError(
                      "A promise cannot be resolved with itself."
                    );
                  if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof a)
                      return (t._state = 3), (t._value = e), void l(t);
                    if ("function" == typeof n)
                      return void f(
                        ((r = n),
                        (o = e),
                        function () {
                          r.apply(o, arguments);
                        }),
                        t
                      );
                  }
                  (t._state = 1), (t._value = e), l(t);
                } catch (e) {
                  u(t, e);
                }
                var r, o;
              }
              function u(t, e) {
                (t._state = 2), (t._value = e), l(t);
              }
              function l(t) {
                2 === t._state &&
                  0 === t._deferreds.length &&
                  o(function () {
                    t._handled || i(t._value);
                  });
                for (var e = 0, n = t._deferreds.length; e < n; e++)
                  s(t, t._deferreds[e]);
                t._deferreds = null;
              }
              function p(t, e, n) {
                (this.onFulfilled = "function" == typeof t ? t : null),
                  (this.onRejected = "function" == typeof e ? e : null),
                  (this.promise = n);
              }
              function f(t, e) {
                var n = !1;
                try {
                  t(
                    function (t) {
                      n || ((n = !0), c(e, t));
                    },
                    function (t) {
                      n || ((n = !0), u(e, t));
                    }
                  );
                } catch (t) {
                  if (n) return;
                  (n = !0), u(e, t);
                }
              }
              (a.prototype.catch = function (t) {
                return this.then(null, t);
              }),
                (a.prototype.then = function (t, e) {
                  var n = new this.constructor(r);
                  return s(this, new p(t, e, n)), n;
                }),
                (a.all = function (t) {
                  var s = Array.prototype.slice.call(t);
                  return new a(function (r, o) {
                    if (0 === s.length) return r([]);
                    var i = s.length;
                    function a(e, t) {
                      try {
                        if (
                          t &&
                          ("object" == typeof t || "function" == typeof t)
                        ) {
                          var n = t.then;
                          if ("function" == typeof n)
                            return void n.call(
                              t,
                              function (t) {
                                a(e, t);
                              },
                              o
                            );
                        }
                        (s[e] = t), 0 == --i && r(s);
                      } catch (t) {
                        o(t);
                      }
                    }
                    for (var t = 0; t < s.length; t++) a(t, s[t]);
                  });
                }),
                (a.resolve = function (e) {
                  return e && "object" == typeof e && e.constructor === a
                    ? e
                    : new a(function (t) {
                        t(e);
                      });
                }),
                (a.reject = function (n) {
                  return new a(function (t, e) {
                    e(n);
                  });
                }),
                (a.race = function (o) {
                  return new a(function (t, e) {
                    for (var n = 0, r = o.length; n < r; n++) o[n].then(t, e);
                  });
                }),
                (a._setImmediateFn = function (t) {
                  o = t;
                }),
                (a._setUnhandledRejectionFn = function (t) {
                  i = t;
                }),
                void 0 !== d && d.exports
                  ? (d.exports = a)
                  : t.Promise || (t.Promise = a);
            })(this);
          }.call(t, e(2).setImmediate));
        },
        function (t, c, u) {
          (function (t, e) {
            var r = u(3).nextTick,
              n = Function.prototype.apply,
              o = Array.prototype.slice,
              i = {},
              a = 0;
            function s(t, e) {
              (this._id = t), (this._clearFn = e);
            }
            (c.setTimeout = function () {
              return new s(n.call(setTimeout, window, arguments), clearTimeout);
            }),
              (c.setInterval = function () {
                return new s(
                  n.call(setInterval, window, arguments),
                  clearInterval
                );
              }),
              (c.clearTimeout = c.clearInterval =
                function (t) {
                  t.close();
                }),
              (s.prototype.unref = s.prototype.ref = function () {}),
              (s.prototype.close = function () {
                this._clearFn.call(window, this._id);
              }),
              (c.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
              }),
              (c.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
              }),
              (c._unrefActive = c.active =
                function (t) {
                  clearTimeout(t._idleTimeoutId);
                  var e = t._idleTimeout;
                  0 <= e &&
                    (t._idleTimeoutId = setTimeout(function () {
                      t._onTimeout && t._onTimeout();
                    }, e));
                }),
              (c.setImmediate =
                "function" == typeof t
                  ? t
                  : function (t) {
                      var e = a++,
                        n = !(arguments.length < 2) && o.call(arguments, 1);
                      return (
                        (i[e] = !0),
                        r(function () {
                          i[e] &&
                            (n ? t.apply(null, n) : t.call(null),
                            c.clearImmediate(e));
                        }),
                        e
                      );
                    }),
              (c.clearImmediate =
                "function" == typeof e
                  ? e
                  : function (t) {
                      delete i[t];
                    });
          }.call(c, u(2).setImmediate, u(2).clearImmediate));
        },
        function (t, e) {
          var r,
            n,
            o = (t.exports = {});
          !(function () {
            try {
              r = setTimeout;
            } catch (t) {
              r = function () {
                throw new Error("setTimeout is not defined");
              };
            }
            try {
              n = clearTimeout;
            } catch (t) {
              n = function () {
                throw new Error("clearTimeout is not defined");
              };
            }
          })();
          var i,
            a = [],
            s = !1,
            c = -1;
          function u() {
            s &&
              i &&
              ((s = !1),
              i.length ? (a = i.concat(a)) : (c = -1),
              a.length && l());
          }
          function l() {
            if (!s) {
              var t = r(u);
              s = !0;
              for (var e = a.length; e; ) {
                for (i = a, a = []; ++c < e; ) i && i[c].run();
                (c = -1), (e = a.length);
              }
              (i = null), (s = !1), n(t);
            }
          }
          function p(t, e) {
            (this.fun = t), (this.array = e);
          }
          function f() {}
          (o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            a.push(new p(t, e)), 1 !== a.length || s || r(l, 0);
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = f),
            (o.addListener = f),
            (o.once = f),
            (o.off = f),
            (o.removeListener = f),
            (o.removeAllListeners = f),
            (o.emit = f),
            (o.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
              return 0;
            });
        },
        function (t, e, n) {
          var r = n(5),
            o = {
              oldContainer: void 0,
              newContainer: void 0,
              newContainerLoading: void 0,
              extend: function (t) {
                return r.extend(this, t);
              },
              init: function (t, e) {
                var n = this;
                return (
                  (this.oldContainer = t),
                  (this._newContainerPromise = e),
                  (this.deferred = r.deferred()),
                  (this.newContainerReady = r.deferred()),
                  (this.newContainerLoading = this.newContainerReady.promise),
                  this.start(),
                  this._newContainerPromise.then(function (t) {
                    (n.newContainer = t), n.newContainerReady.resolve();
                  }),
                  this.deferred.promise
                );
              },
              done: function () {
                this.oldContainer.parentNode.removeChild(this.oldContainer),
                  (this.newContainer.style.visibility = "visible"),
                  this.deferred.resolve();
              },
              start: function () {},
            };
          t.exports = o;
        },
        function (t, e) {
          var n = {
            getCurrentUrl: function () {
              return (
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                window.location.search
              );
            },
            cleanLink: function (t) {
              return t.replace(/#.*/, "");
            },
            xhrTimeout: 5e3,
            xhr: function (t) {
              var e = this.deferred(),
                n = new XMLHttpRequest();
              return (
                (n.onreadystatechange = function () {
                  if (4 === n.readyState)
                    return 200 === n.status
                      ? e.resolve(n.responseText)
                      : e.reject(new Error("xhr: HTTP code is not 200"));
                }),
                (n.ontimeout = function () {
                  return e.reject(new Error("xhr: Timeout exceeded"));
                }),
                n.open("GET", t),
                (n.timeout = this.xhrTimeout),
                n.setRequestHeader("x-barba", "yes"),
                n.send(),
                e.promise
              );
            },
            extend: function (t, e) {
              var n = Object.create(t);
              for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
              return n;
            },
            deferred: function () {
              return new (function () {
                (this.resolve = null),
                  (this.reject = null),
                  (this.promise = new Promise(
                    function (t, e) {
                      (this.resolve = t), (this.reject = e);
                    }.bind(this)
                  ));
              })();
            },
            getPort: function (t) {
              var e = void 0 !== t ? t : window.location.port,
                n = window.location.protocol;
              return "" != e
                ? parseInt(e)
                : "http:" === n
                ? 80
                : "https:" === n
                ? 443
                : void 0;
            },
          };
          t.exports = n;
        },
        function (t, e, n) {
          var o = n(7),
            r = n(5),
            i = {
              namespace: null,
              extend: function (t) {
                return r.extend(this, t);
              },
              init: function () {
                var r = this;
                o.on("initStateChange", function (t, e) {
                  e && e.namespace === r.namespace && r.onLeave();
                }),
                  o.on("newPageReady", function (t, e, n) {
                    (r.container = n),
                      t.namespace === r.namespace && r.onEnter();
                  }),
                  o.on("transitionCompleted", function (t, e) {
                    t.namespace === r.namespace && r.onEnterCompleted(),
                      e && e.namespace === r.namespace && r.onLeaveCompleted();
                  });
              },
              onEnter: function () {},
              onEnterCompleted: function () {},
              onLeave: function () {},
              onLeaveCompleted: function () {},
            };
          t.exports = i;
        },
        function (t, e) {
          var n = {
            events: {},
            on: function (t, e) {
              (this.events[t] = this.events[t] || []), this.events[t].push(e);
            },
            off: function (t, e) {
              t in this.events != 0 &&
                this.events[t].splice(this.events[t].indexOf(e), 1);
            },
            trigger: function (t) {
              if (t in this.events != 0)
                for (var e = 0; e < this.events[t].length; e++)
                  this.events[t][e].apply(
                    this,
                    Array.prototype.slice.call(arguments, 1)
                  );
            },
          };
          t.exports = n;
        },
        function (t, e, n) {
          var r = n(5),
            o = {
              data: {},
              extend: function (t) {
                return r.extend(this, t);
              },
              set: function (t, e) {
                this.data[t] = e;
              },
              get: function (t) {
                return this.data[t];
              },
              reset: function () {
                this.data = {};
              },
            };
          t.exports = o;
        },
        function (t, e) {
          t.exports = {
            history: [],
            add: function (t, e) {
              e || (e = void 0),
                this.history.push({
                  url: t,
                  namespace: e,
                });
            },
            currentStatus: function () {
              return this.history[this.history.length - 1];
            },
            prevStatus: function () {
              var t = this.history;
              return t.length < 2 ? null : t[t.length - 2];
            },
          };
        },
        function (t, e, n) {
          var o = n(5),
            i = n(7),
            r = n(11),
            a = n(8),
            s = n(9),
            c = {
              Dom: n(12),
              History: s,
              Cache: a,
              cacheEnabled: !0,
              transitionProgress: !1,
              ignoreClassLink: "no-barba",
              start: function () {
                this.init();
              },
              init: function () {
                var t = this.Dom.getContainer();
                this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                  this.History.add(
                    this.getCurrentUrl(),
                    this.Dom.getNamespace(t)
                  ),
                  i.trigger("initStateChange", this.History.currentStatus()),
                  i.trigger(
                    "newPageReady",
                    this.History.currentStatus(),
                    {},
                    t,
                    this.Dom.currentHTML
                  ),
                  i.trigger(
                    "transitionCompleted",
                    this.History.currentStatus()
                  ),
                  this.bindEvents();
              },
              bindEvents: function () {
                document.addEventListener("click", this.onLinkClick.bind(this)),
                  window.addEventListener(
                    "popstate",
                    this.onStateChange.bind(this)
                  );
              },
              getCurrentUrl: function () {
                return o.cleanLink(o.getCurrentUrl());
              },
              goTo: function (t) {
                window.history.pushState(null, null, t), this.onStateChange();
              },
              forceGoTo: function (t) {
                window.location = t;
              },
              load: function (t) {
                var e,
                  n = o.deferred(),
                  r = this;
                return (
                  (e = this.Cache.get(t)) ||
                    ((e = o.xhr(t)), this.Cache.set(t, e)),
                  e.then(
                    function (t) {
                      var e = r.Dom.parseResponse(t);
                      r.Dom.putContainer(e),
                        r.cacheEnabled || r.Cache.reset(),
                        n.resolve(e);
                    },
                    function () {
                      r.forceGoTo(t), n.reject();
                    }
                  ),
                  n.promise
                );
              },
              getHref: function (t) {
                if (t)
                  return t.getAttribute &&
                    "string" == typeof t.getAttribute("xlink:href")
                    ? t.getAttribute("xlink:href")
                    : "string" == typeof t.href
                    ? t.href
                    : void 0;
              },
              onLinkClick: function (t) {
                for (var e = t.target; e && !this.getHref(e); )
                  e = e.parentNode;
                if (this.preventCheck(t, e)) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    i.trigger("linkClicked", e, t);
                  var n = this.getHref(e);
                  this.goTo(n);
                }
              },
              preventCheck: function (t, e) {
                if (!window.history.pushState) return !1;
                var n = this.getHref(e);
                return !(
                  !e ||
                  !n ||
                  1 < t.which ||
                  t.metaKey ||
                  t.ctrlKey ||
                  t.shiftKey ||
                  t.altKey ||
                  (e.target && "_blank" === e.target) ||
                  window.location.protocol !== e.protocol ||
                  window.location.hostname !== e.hostname ||
                  o.getPort() !== o.getPort(e.port) ||
                  -1 < n.indexOf("#") ||
                  (e.getAttribute &&
                    "string" == typeof e.getAttribute("download")) ||
                  o.cleanLink(n) == o.cleanLink(location.href) ||
                  e.classList.contains(this.ignoreClassLink)
                );
              },
              getTransition: function () {
                return r;
              },
              onStateChange: function () {
                var t = this.getCurrentUrl();
                if (
                  (this.transitionProgress && this.forceGoTo(t),
                  this.History.currentStatus().url === t)
                )
                  return !1;
                this.History.add(t);
                var e = this.load(t),
                  n = Object.create(this.getTransition());
                (this.transitionProgress = !0),
                  i.trigger(
                    "initStateChange",
                    this.History.currentStatus(),
                    this.History.prevStatus()
                  );
                var r = n.init(this.Dom.getContainer(), e);
                e.then(this.onNewContainerLoaded.bind(this)),
                  r.then(this.onTransitionEnd.bind(this));
              },
              onNewContainerLoaded: function (t) {
                (this.History.currentStatus().namespace =
                  this.Dom.getNamespace(t)),
                  i.trigger(
                    "newPageReady",
                    this.History.currentStatus(),
                    this.History.prevStatus(),
                    t,
                    this.Dom.currentHTML
                  );
              },
              onTransitionEnd: function () {
                (this.transitionProgress = !1),
                  i.trigger(
                    "transitionCompleted",
                    this.History.currentStatus(),
                    this.History.prevStatus()
                  );
              },
            };
          t.exports = c;
        },
        function (t, e, n) {
          var r = n(4).extend({
            start: function () {
              this.newContainerLoading.then(this.finish.bind(this));
            },
            finish: function () {
              (document.body.scrollTop = 0), this.done();
            },
          });
          t.exports = r;
        },
        function (t, e) {
          var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function (t) {
              this.currentHTML = t;
              var e = document.createElement("div");
              e.innerHTML = t;
              var n = e.querySelector("title");
              return (
                n && (document.title = n.textContent), this.getContainer(e)
              );
            },
            getWrapper: function () {
              var t = document.getElementById(this.wrapperId);
              if (!t) throw new Error("Barba.js: wrapper not found!");
              return t;
            },
            getContainer: function (t) {
              if ((t || (t = document.body), !t))
                throw new Error("Barba.js: DOM not ready!");
              var e = this.parseContainer(t);
              if ((e && e.jquery && (e = e[0]), !e))
                throw new Error("Barba.js: no container found");
              return e;
            },
            getNamespace: function (t) {
              return t && t.dataset
                ? t.dataset[this.dataNamespace]
                : t
                ? t.getAttribute("data-" + this.dataNamespace)
                : null;
            },
            putContainer: function (t) {
              (t.style.visibility = "hidden"), this.getWrapper().appendChild(t);
            },
            parseContainer: function (t) {
              return t.querySelector("." + this.containerClass);
            },
          };
          t.exports = n;
        },
        function (t, e, n) {
          var o = n(5),
            i = n(10),
            r = {
              ignoreClassLink: "no-barba-prefetch",
              init: function () {
                if (!window.history.pushState) return !1;
                document.body.addEventListener(
                  "mouseover",
                  this.onLinkEnter.bind(this)
                ),
                  document.body.addEventListener(
                    "touchstart",
                    this.onLinkEnter.bind(this)
                  );
              },
              onLinkEnter: function (t) {
                for (var e = t.target; e && !i.getHref(e); ) e = e.parentNode;
                if (e && !e.classList.contains(this.ignoreClassLink)) {
                  var n = i.getHref(e);
                  if (i.preventCheck(t, e) && !i.Cache.get(n)) {
                    var r = o.xhr(n);
                    i.Cache.set(n, r);
                  }
                }
              },
            };
          t.exports = r;
        },
      ]);
    }),
      (t.exports = r());
  },
  function (t, e, n) {
    var r = n(15),
      o = n(68),
      i = n(10),
      a = n(23),
      s = Object.defineProperty;
    e.f = r
      ? s
      : function (t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return s(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    "use strict";
    n.r(e), n(18);
    var K = n(94);
    function J() {
      return (J =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }).apply(this, arguments);
    }
    var o = "undefined" != typeof window && "undefined" != typeof document,
      r = o ? navigator.userAgent : "",
      Z = /MSIE |Trident\//.test(r),
      i = /UCBrowser\//.test(r),
      a = o && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
      tt = {
        a11y: !0,
        allowHTML: !0,
        animateFill: !0,
        animation: "shift-away",
        appendTo: function () {
          return document.body;
        },
        aria: "describedby",
        arrow: !1,
        arrowType: "sharp",
        boundary: "scrollParent",
        content: "",
        delay: 0,
        distance: 10,
        duration: [325, 275],
        flip: !0,
        flipBehavior: "flip",
        flipOnUpdate: !1,
        followCursor: !1,
        hideOnClick: !0,
        ignoreAttributes: !1,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        maxWidth: 350,
        multiple: !1,
        offset: 0,
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        placement: "top",
        popperOptions: {},
        role: "tooltip",
        showOnInit: !1,
        size: "regular",
        sticky: !1,
        target: "",
        theme: "dark",
        touch: !0,
        touchHold: !1,
        trigger: "mouseenter focus",
        triggerTarget: null,
        updateDuration: 0,
        wait: null,
        zIndex: 9999,
      },
      et = [
        "arrow",
        "arrowType",
        "boundary",
        "distance",
        "flip",
        "flipBehavior",
        "flipOnUpdate",
        "offset",
        "placement",
        "popperOptions",
      ],
      s = o ? Element.prototype : {},
      nt =
        s.matches ||
        s.matchesSelector ||
        s.webkitMatchesSelector ||
        s.mozMatchesSelector ||
        s.msMatchesSelector;
    function rt(t) {
      return [].slice.call(t);
    }
    function ot(t, e) {
      return it(t, function (t) {
        return nt.call(t, e);
      });
    }
    function it(t, e) {
      for (; t; ) {
        if (e(t)) return t;
        t = t.parentElement;
      }
      return null;
    }
    var at = {
        passive: !0,
      },
      st = 4,
      ct = "x-placement",
      ut = "x-out-of-boundaries",
      c = "tippy-iOS",
      lt = "tippy-active",
      pt = "tippy-popper",
      ft = "tippy-tooltip",
      dt = "tippy-content",
      u = "tippy-backdrop",
      l = "tippy-arrow",
      p = "tippy-roundarrow",
      ht = ".".concat(pt),
      f = ".".concat(ft),
      d = ".".concat(dt),
      h = ".".concat(u),
      m = ".".concat(l),
      v = ".".concat(p),
      mt = !1;
    function g() {
      mt ||
        ((mt = !0),
        a && document.body.classList.add(c),
        window.performance && document.addEventListener("mousemove", b));
    }
    var y = 0;
    function b() {
      var t = performance.now();
      t - y < 20 &&
        ((mt = !1),
        document.removeEventListener("mousemove", b),
        a || document.body.classList.remove(c)),
        (y = t);
    }
    function w() {
      var t = document.activeElement;
      t && t.blur && t._tippy && t.blur();
    }
    var x = Object.keys(tt);
    function vt(t, e) {
      return {}.hasOwnProperty.call(t, e);
    }
    function gt(t, e, n) {
      if (Array.isArray(t)) {
        var r = t[e];
        return null == r ? n : r;
      }
      return t;
    }
    function yt(e, n) {
      return 0 === n
        ? e
        : function (t) {
            clearTimeout(r),
              (r = setTimeout(function () {
                e(t);
              }, n));
          };
      var r;
    }
    function bt(t, e) {
      return t && t.modifiers && t.modifiers[e];
    }
    function wt(t, e) {
      return -1 < t.indexOf(e);
    }
    function xt(t) {
      return t instanceof Element;
    }
    function S(t) {
      return !(!t || !vt(t, "isVirtual")) || xt(t);
    }
    function St(t, e) {
      return "function" == typeof t ? t.apply(null, e) : t;
    }
    function Et(t, e) {
      t.filter(function (t) {
        return "flip" === t.name;
      })[0].enabled = e;
    }
    function Ot() {
      return document.createElement("div");
    }
    function kt(t, e) {
      t.forEach(function (t) {
        t && (t.style.transitionDuration = "".concat(e, "ms"));
      });
    }
    function Tt(t, e) {
      t.forEach(function (t) {
        t && t.setAttribute("data-state", e);
      });
    }
    function At(t, e) {
      var o,
        n = J(
          {},
          e,
          {
            content: St(e.content, [t]),
          },
          e.ignoreAttributes
            ? {}
            : ((o = t),
              x.reduce(function (e, n) {
                var r = (o.getAttribute("data-tippy-".concat(n)) || "").trim();
                if (!r) return e;
                if ("content" === n) e[n] = r;
                else
                  try {
                    e[n] = JSON.parse(r);
                  } catch (t) {
                    e[n] = r;
                  }
                return e;
              }, {}))
        );
      return (n.arrow || i) && (n.animateFill = !1), n;
    }
    function Lt(t, e) {
      Object.keys(t).forEach(function (t) {
        if (!vt(e, t))
          throw new Error("[tippy]: `".concat(t, "` is not a valid option"));
      });
    }
    function E(t, e) {
      t.innerHTML = xt(e) ? e.innerHTML : e;
    }
    function Ct(t, e) {
      xt(e.content)
        ? (E(t, ""), t.appendChild(e.content))
        : "function" != typeof e.content &&
          (t[e.allowHTML ? "innerHTML" : "textContent"] = e.content);
    }
    function jt(t) {
      return {
        tooltip: t.querySelector(f),
        backdrop: t.querySelector(h),
        content: t.querySelector(d),
        arrow: t.querySelector(m) || t.querySelector(v),
      };
    }
    function It(t) {
      t.setAttribute("data-inertia", "");
    }
    function Pt(t) {
      var e = Ot();
      return (
        "round" === t
          ? ((e.className = p),
            E(
              e,
              '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>'
            ))
          : (e.className = l),
        e
      );
    }
    function Mt() {
      var t = Ot();
      return (t.className = u), t.setAttribute("data-state", "hidden"), t;
    }
    function Dt(t, e) {
      t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "");
    }
    function _t(t, e, n) {
      var r =
        i && void 0 !== document.body.style.webkitTransition
          ? "webkitTransitionEnd"
          : "transitionend";
      t[e + "EventListener"](r, n);
    }
    function qt(t) {
      var e = t.getAttribute(ct);
      return e ? e.split("-")[0] : "";
    }
    function zt(e, n, t) {
      t.split(" ").forEach(function (t) {
        e.classList[n](t + "-theme");
      });
    }
    var Nt = 1,
      Ht = [];
    function Ft(v, r) {
      var n,
        g,
        o,
        e,
        i,
        a,
        t = At(v, r);
      if (!t.multiple && v._tippy) return null;
      var c,
        s,
        u,
        y,
        l,
        p = !1,
        f = !1,
        d = !1,
        h = !1,
        m = [],
        b = yt(q, t.interactiveDebounce),
        w = Nt++,
        x = (function (t, e) {
          var n = Ot();
          (n.className = pt),
            (n.id = "tippy-".concat(t)),
            (n.style.zIndex = "" + e.zIndex),
            e.role && n.setAttribute("role", e.role);
          var r = Ot();
          (r.className = ft),
            (r.style.maxWidth =
              e.maxWidth + ("number" == typeof e.maxWidth ? "px" : "")),
            r.setAttribute("data-size", e.size),
            r.setAttribute("data-animation", e.animation),
            r.setAttribute("data-state", "hidden"),
            zt(r, "add", e.theme);
          var o = Ot();
          return (
            (o.className = dt),
            o.setAttribute("data-state", "hidden"),
            e.interactive && Dt(n, r),
            e.arrow && r.appendChild(Pt(e.arrowType)),
            e.animateFill &&
              (r.appendChild(Mt()), r.setAttribute("data-animatefill", "")),
            e.inertia && It(r),
            Ct(o, e),
            r.appendChild(o),
            n.appendChild(r),
            n
          );
        })(w, t),
        S = jt(x),
        E = {
          id: w,
          reference: v,
          popper: x,
          popperChildren: S,
          popperInstance: null,
          props: t,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          clearDelayTimeouts: U,
          set: G,
          setContent: function (t) {
            G({
              content: t,
            });
          },
          show: $,
          hide: Q,
          enable: function () {
            E.state.isEnabled = !0;
          },
          disable: function () {
            E.state.isEnabled = !1;
          },
          destroy: function (t) {
            if (!E.state.isDestroyed) {
              (f = !0), E.state.isMounted && Q(0), M(), delete v._tippy;
              var e = E.props.target;
              e &&
                t &&
                xt(v) &&
                rt(v.querySelectorAll(e)).forEach(function (t) {
                  t._tippy && t._tippy.destroy();
                }),
                E.popperInstance && E.popperInstance.destroy(),
                (f = !1),
                (E.state.isDestroyed = !0);
            }
          },
        };
      return (
        (v._tippy = E),
        (x._tippy = E),
        P(),
        t.lazy || W(),
        t.showOnInit && Y(),
        !t.a11y ||
          t.target ||
          !xt((l = T())) ||
          (nt.call(
            l,
            "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]"
          ) &&
            !l.hasAttribute("disabled")) ||
          T().setAttribute("tabindex", "0"),
        x.addEventListener("mouseenter", function (t) {
          E.props.interactive &&
            E.state.isVisible &&
            "mouseenter" === n &&
            Y(t, !0);
        }),
        x.addEventListener("mouseleave", function () {
          E.props.interactive &&
            "mouseenter" === n &&
            document.addEventListener("mousemove", b);
        }),
        E
      );
      function O() {
        document.removeEventListener("mousemove", D);
      }
      function k() {
        document.body.removeEventListener("mouseleave", X),
          document.removeEventListener("mousemove", b),
          (Ht = Ht.filter(function (t) {
            return t !== b;
          }));
      }
      function T() {
        return E.props.triggerTarget || v;
      }
      function A() {
        document.addEventListener("click", V, !0);
      }
      function L() {
        return [
          E.popperChildren.tooltip,
          E.popperChildren.backdrop,
          E.popperChildren.content,
        ];
      }
      function C() {
        var t = E.props.followCursor;
        return (t && "focus" !== n) || (mt && "initial" === t);
      }
      function j(t, e) {
        var n = E.popperChildren.tooltip;
        function r(t) {
          t.target === n && (_t(n, "remove", r), e());
        }
        if (0 === t) return e();
        _t(n, "remove", u), _t(n, "add", r), (u = r);
      }
      function I(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        T().addEventListener(t, e, n),
          m.push({
            eventType: t,
            handler: e,
            options: n,
          });
      }
      function P() {
        E.props.touchHold &&
          !E.props.target &&
          (I("touchstart", _, at), I("touchend", z, at)),
          E.props.trigger
            .trim()
            .split(" ")
            .forEach(function (t) {
              if ("manual" !== t)
                if (E.props.target)
                  switch (t) {
                    case "mouseenter":
                      I("mouseover", H), I("mouseout", F);
                      break;
                    case "focus":
                      I("focusin", H), I("focusout", F);
                      break;
                    case "click":
                      I(t, H);
                  }
                else
                  switch ((I(t, _), t)) {
                    case "mouseenter":
                      I("mouseleave", z);
                      break;
                    case "focus":
                      I(Z ? "focusout" : "blur", N);
                  }
            });
      }
      function M() {
        m.forEach(function (t) {
          var e = t.eventType,
            n = t.handler,
            r = t.options;
          T().removeEventListener(e, n, r);
        }),
          (m = []);
      }
      function D(t) {
        var e = (g = t),
          n = e.clientX,
          r = e.clientY;
        if (y) {
          var o = it(t.target, function (t) {
              return t === v;
            }),
            i = v.getBoundingClientRect(),
            a = E.props.followCursor,
            s = "horizontal" === a,
            c = "vertical" === a,
            u = wt(["top", "bottom"], qt(x)),
            l = x.getAttribute(ct),
            p = !!l && !!l.split("-")[1],
            f = u ? x.offsetWidth : x.offsetHeight,
            d = f / 2,
            h = u ? 0 : p ? f : d,
            m = u ? (p ? f : d) : 0;
          (!o && E.props.interactive) ||
            ((E.popperInstance.reference = J({}, E.popperInstance.reference, {
              clientWidth: 0,
              clientHeight: 0,
              getBoundingClientRect: function () {
                return {
                  width: u ? f : 0,
                  height: u ? 0 : f,
                  top: (s ? i.top : r) - h,
                  bottom: (s ? i.bottom : r) + h,
                  left: (c ? i.left : n) - m,
                  right: (c ? i.right : n) + m,
                };
              },
            })),
            E.popperInstance.update()),
            "initial" === a && E.state.isVisible && O();
        }
      }
      function _(e) {
        E.state.isEnabled &&
          !B(e) &&
          (E.state.isVisible ||
            ((n = e.type),
            e instanceof MouseEvent &&
              ((g = e),
              Ht.forEach(function (t) {
                return t(e);
              }))),
          "click" === e.type && !1 !== E.props.hideOnClick && E.state.isVisible
            ? X()
            : Y(e));
      }
      function q(t) {
        var e = ot(t.target, ht) === x,
          n = it(t.target, function (t) {
            return t === v;
          });
        e ||
          n ||
          ((function (t, e, n, r) {
            if (!t) return !0;
            var o = n.clientX,
              i = n.clientY,
              a = r.interactiveBorder,
              s = r.distance,
              c = e.top - i > ("top" === t ? a + s : a),
              u = i - e.bottom > ("bottom" === t ? a + s : a),
              l = e.left - o > ("left" === t ? a + s : a),
              p = o - e.right > ("right" === t ? a + s : a);
            return c || u || l || p;
          })(qt(x), x.getBoundingClientRect(), t, E.props) &&
            (k(), X()));
      }
      function z(t) {
        if (!B(t))
          return E.props.interactive
            ? (document.body.addEventListener("mouseleave", X),
              document.addEventListener("mousemove", b),
              void Ht.push(b))
            : void X();
      }
      function N(t) {
        t.target === T() &&
          ((E.props.interactive &&
            t.relatedTarget &&
            x.contains(t.relatedTarget)) ||
            X());
      }
      function H(t) {
        ot(t.target, E.props.target) && Y(t);
      }
      function F(t) {
        ot(t.target, E.props.target) && X();
      }
      function B(t) {
        var e = "ontouchstart" in window,
          n = wt(t.type, "touch"),
          r = E.props.touchHold;
        return (e && mt && r && !n) || (mt && !r && n);
      }
      function R() {
        !h && s && ((h = !0), s());
      }
      function W() {
        var e = E.props.popperOptions,
          t = E.popperChildren,
          a = t.tooltip,
          n = t.arrow,
          s = bt(e, "preventOverflow");
        function r(t) {
          E.props.flip &&
            !E.props.flipOnUpdate &&
            (t.flipped && (E.popperInstance.options.placement = t.placement),
            Et(E.popperInstance.modifiers, !1)),
            a.setAttribute(ct, t.placement),
            !1 !== t.attributes[ut]
              ? a.setAttribute(ut, "")
              : a.removeAttribute(ut),
            c &&
              c !== t.placement &&
              d &&
              ((a.style.transition = "none"),
              requestAnimationFrame(function () {
                a.style.transition = "";
              })),
            (c = t.placement),
            (d = E.state.isVisible);
          var e = qt(x),
            n = a.style;
          (n.top = n.bottom = n.left = n.right = ""),
            (n[e] = -(E.props.distance - 10) + "px");
          var r = s && void 0 !== s.padding ? s.padding : st,
            o = "number" == typeof r,
            i = J(
              {
                top: o ? r : r.top,
                bottom: o ? r : r.bottom,
                left: o ? r : r.left,
                right: o ? r : r.right,
              },
              !o && r
            );
          (i[e] = o ? r + E.props.distance : (r[e] || 0) + E.props.distance),
            (E.popperInstance.modifiers.filter(function (t) {
              return "preventOverflow" === t.name;
            })[0].padding = i),
            (y = i);
        }
        var o = J(
          {
            eventsEnabled: !1,
            placement: E.props.placement,
          },
          e,
          {
            modifiers: J({}, e ? e.modifiers : {}, {
              preventOverflow: J(
                {
                  boundariesElement: E.props.boundary,
                  padding: st,
                },
                s
              ),
              arrow: J(
                {
                  element: n,
                  enabled: !!n,
                },
                bt(e, "arrow")
              ),
              flip: J(
                {
                  enabled: E.props.flip,
                  padding: E.props.distance + st,
                  behavior: E.props.flipBehavior,
                },
                bt(e, "flip")
              ),
              offset: J(
                {
                  offset: E.props.offset,
                },
                bt(e, "offset")
              ),
            }),
            onCreate: function (t) {
              r(t), R(), e && e.onCreate && e.onCreate(t);
            },
            onUpdate: function (t) {
              r(t), R(), e && e.onUpdate && e.onUpdate(t);
            },
          }
        );
        E.popperInstance = new K.a(v, x, o);
      }
      function Y(n, t) {
        if ((U(), !E.state.isVisible)) {
          if (E.props.target)
            return (function (t) {
              if (n) {
                var e = ot(n.target, E.props.target);
                e &&
                  !e._tippy &&
                  Ft(
                    e,
                    J({}, E.props, {
                      content: St(r.content, [e]),
                      appendTo: r.appendTo,
                      target: "",
                      showOnInit: !0,
                    })
                  );
              }
            })();
          if (((p = !0), n && !t && E.props.onTrigger(E, n), E.props.wait))
            return E.props.wait(E, n);
          C() &&
            !E.state.isMounted &&
            (E.popperInstance || W(),
            document.addEventListener("mousemove", D)),
            A();
          var e = gt(E.props.delay, 0, tt.delay);
          e
            ? (o = setTimeout(function () {
                $();
              }, e))
            : $();
        }
      }
      function X() {
        if ((U(), !E.state.isVisible)) return O();
        p = !1;
        var t = gt(E.props.delay, 1, tt.delay);
        t
          ? (e = setTimeout(function () {
              E.state.isVisible && Q();
            }, t))
          : (i = requestAnimationFrame(function () {
              Q();
            }));
      }
      function V(t) {
        if (!E.props.interactive || !x.contains(t.target)) {
          if (T().contains(t.target)) {
            if (mt) return;
            if (E.state.isVisible && wt(E.props.trigger, "click")) return;
          }
          !0 === E.props.hideOnClick && (U(), Q());
        }
      }
      function U() {
        clearTimeout(o), clearTimeout(e), cancelAnimationFrame(i);
      }
      function G(e) {
        Lt((e = e || {}), tt), M();
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          c,
          u,
          l = E.props,
          p = At(
            v,
            J({}, E.props, e, {
              ignoreAttributes: !0,
            })
          );
        (p.ignoreAttributes = vt(e, "ignoreAttributes")
          ? e.ignoreAttributes || !1
          : l.ignoreAttributes),
          (E.props = p),
          P(),
          k(),
          (b = yt(q, p.interactiveDebounce)),
          (n = l),
          (r = p),
          (i = jt((t = x))),
          (a = i.tooltip),
          (s = i.content),
          (c = i.backdrop),
          (u = i.arrow),
          (t.style.zIndex = "" + r.zIndex),
          a.setAttribute("data-size", r.size),
          a.setAttribute("data-animation", r.animation),
          (a.style.maxWidth =
            r.maxWidth + ("number" == typeof r.maxWidth ? "px" : "")),
          r.role ? t.setAttribute("role", r.role) : t.removeAttribute("role"),
          n.content !== r.content && Ct(s, r),
          !n.animateFill && r.animateFill
            ? (a.appendChild(Mt()), a.setAttribute("data-animatefill", ""))
            : n.animateFill &&
              !r.animateFill &&
              (a.removeChild(c), a.removeAttribute("data-animatefill")),
          !n.arrow && r.arrow
            ? a.appendChild(Pt(r.arrowType))
            : n.arrow && !r.arrow && a.removeChild(u),
          n.arrow &&
            r.arrow &&
            n.arrowType !== r.arrowType &&
            a.replaceChild(Pt(r.arrowType), u),
          !n.interactive && r.interactive
            ? Dt(t, a)
            : n.interactive &&
              !r.interactive &&
              ((o = a),
              t.removeAttribute("tabindex"),
              o.removeAttribute("data-interactive")),
          !n.inertia && r.inertia
            ? It(a)
            : n.inertia && !r.inertia && a.removeAttribute("data-inertia"),
          n.theme !== r.theme &&
            (zt(a, "remove", n.theme), zt(a, "add", r.theme)),
          (E.popperChildren = jt(x)),
          E.popperInstance &&
            (et.some(function (t) {
              return vt(e, t) && e[t] !== l[t];
            })
              ? (E.popperInstance.destroy(),
                W(),
                E.state.isVisible && E.popperInstance.enableEventListeners(),
                E.props.followCursor && g && D(g))
              : E.popperInstance.update());
      }
      function $() {
        var r =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : gt(E.props.duration, 0, tt.duration[1]);
        if (
          !E.state.isDestroyed &&
          E.state.isEnabled &&
          (!mt || E.props.touch) &&
          !T().hasAttribute("disabled") &&
          !1 !== E.props.onShow(E)
        ) {
          A(),
            (x.style.visibility = "visible"),
            (E.state.isVisible = !0),
            E.props.interactive && T().classList.add(lt);
          var o = L();
          kt(o.concat(x), 0),
            (s = function () {
              if (E.state.isVisible) {
                var t = E.props.appendTo,
                  e = "parent" === t ? v.parentNode : St(t, [v]);
                e.contains(x) ||
                  (e.appendChild(x),
                  E.props.onMount(E),
                  (E.state.isMounted = !0));
                var n = C();
                n && g ? D(g) : n || E.popperInstance.update(),
                  (a = requestAnimationFrame(function () {
                    x.offsetHeight,
                      E.popperChildren.backdrop &&
                        (E.popperChildren.content.style.transitionDelay =
                          Math.round(r / 12) + "ms"),
                      E.props.sticky &&
                        (kt([x], Z ? 0 : E.props.updateDuration),
                        (function t() {
                          E.popperInstance.scheduleUpdate(),
                            E.state.isMounted
                              ? requestAnimationFrame(t)
                              : kt([x], 0);
                        })()),
                      kt([x], E.props.updateDuration),
                      kt(o, r),
                      Tt(o, "visible"),
                      j(r, function () {
                        E.props.aria &&
                          T().setAttribute("aria-".concat(E.props.aria), x.id),
                          E.props.onShown(E),
                          (E.state.isShown = !0);
                      });
                  }));
              }
            }),
            (function () {
              h = !1;
              var t = C();
              E.popperInstance
                ? (Et(E.popperInstance.modifiers, E.props.flip),
                  t ||
                    ((E.popperInstance.reference = v),
                    E.popperInstance.enableEventListeners()),
                  E.popperInstance.scheduleUpdate())
                : (W(), t || E.popperInstance.enableEventListeners());
            })();
        }
      }
      function Q() {
        var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : gt(E.props.duration, 1, tt.duration[1]);
        if (
          !E.state.isDestroyed &&
          (E.state.isEnabled || f) &&
          (!1 !== E.props.onHide(E) || f)
        ) {
          cancelAnimationFrame(a),
            document.removeEventListener("click", V, !0),
            (x.style.visibility = "hidden"),
            (E.state.isVisible = !1),
            (E.state.isShown = !1),
            (d = !1),
            E.props.interactive && T().classList.remove(lt);
          var e = L();
          kt(e, t),
            Tt(e, "hidden"),
            j(t, function () {
              !E.state.isVisible &&
                x.parentNode &&
                x.parentNode.contains(x) &&
                (p || O(),
                E.props.aria &&
                  T().removeAttribute("aria-".concat(E.props.aria)),
                E.popperInstance.disableEventListeners(),
                (E.popperInstance.options.placement = E.props.placement),
                x.parentNode.removeChild(x),
                E.props.onHidden(E),
                (E.state.isMounted = !1));
            });
        }
      }
    }
    var O = !1;
    function k(t, e) {
      Lt(e || {}, tt),
        O ||
          (document.addEventListener("touchstart", g, at),
          window.addEventListener("blur", w),
          (O = !0));
      var n,
        r = J({}, tt, e);
      (n = t),
        "[object Object]" !== {}.toString.call(n) ||
          n.addEventListener ||
          (function (n) {
            var t = {
              isVirtual: !0,
              attributes: n.attributes || {},
              contains: function () {},
              setAttribute: function (t, e) {
                n.attributes[t] = e;
              },
              getAttribute: function (t) {
                return n.attributes[t];
              },
              removeAttribute: function (t) {
                delete n.attributes[t];
              },
              hasAttribute: function (t) {
                return t in n.attributes;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              classList: {
                classNames: {},
                add: function (t) {
                  n.classList.classNames[t] = !0;
                },
                remove: function (t) {
                  delete n.classList.classNames[t];
                },
                contains: function (t) {
                  return t in n.classList.classNames;
                },
              },
            };
            for (var e in t) n[e] = t[e];
          })(t);
      var o = (function (t) {
        if (S(t)) return [t];
        if (t instanceof NodeList) return rt(t);
        if (Array.isArray(t)) return t;
        try {
          return rt(document.querySelectorAll(t));
        } catch (t) {
          return [];
        }
      })(t).reduce(function (t, e) {
        var n = e && Ft(e, r);
        return n && t.push(n), t;
      }, []);
      return S(t) ? o[0] : o;
    }
    (k.version = "4.3.3"),
      (k.defaults = tt),
      (k.setDefaults = function (e) {
        Object.keys(e).forEach(function (t) {
          tt[t] = e[t];
        });
      }),
      (k.hideAll = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          o = t.exclude,
          i = t.duration;
        rt(document.querySelectorAll(ht)).forEach(function (t) {
          var e,
            n = t._tippy;
          if (n) {
            var r = !1;
            o &&
              (r =
                (e = o)._tippy && !nt.call(e, ht)
                  ? n.reference === o
                  : t === o.popper),
              r || n.hide(i);
          }
        });
      }),
      (k.group = function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.delay,
          r = void 0 === n ? e[0].props.delay : n,
          o = t.duration,
          i = void 0 === o ? 0 : o,
          a = !1;
        function s(t) {
          (a = t), p();
        }
        function c(t) {
          t._originalProps.onShow(t),
            e.forEach(function (t) {
              t.set({
                duration: i,
              }),
                t.state.isVisible && t.hide();
            }),
            s(!0);
        }
        function u(t) {
          t._originalProps.onHide(t), s(!1);
        }
        function l(t) {
          t._originalProps.onShown(t),
            t.set({
              duration: t._originalProps.duration,
            });
        }
        function p() {
          e.forEach(function (t) {
            t.set({
              onShow: c,
              onShown: l,
              onHide: u,
              delay: a ? [0, Array.isArray(r) ? r[1] : r] : r,
              duration: a ? i : t._originalProps.duration,
            });
          });
        }
        e.forEach(function (t) {
          t._originalProps
            ? t.set(t._originalProps)
            : (t._originalProps = J({}, t.props));
        }),
          p();
      }),
      o &&
        setTimeout(function () {
          rt(document.querySelectorAll("[data-tippy]")).forEach(function (t) {
            var e = t.getAttribute("data-tippy");
            e &&
              k(t, {
                content: e,
              });
          });
        }),
      (function (t) {
        if (o) {
          var e = document.createElement("style");
          (e.type = "text/css"),
            (e.textContent =
              '.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px) rotateX(0);transform:perspective(700px) translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(60deg);transform:perspective(700px) translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px) rotateX(0);transform:perspective(700px) translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(-60deg);transform:perspective(700px) translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px) rotateY(0);transform:perspective(700px) translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(-60deg);transform:perspective(700px) translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px) rotateY(0);transform:perspective(700px) translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(60deg);transform:perspective(700px) translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#000;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}'),
            e.setAttribute("data-tippy-stylesheet", "");
          var n = document.head,
            r = n.firstChild;
          r ? n.insertBefore(e, r) : n.appendChild(e);
        }
      })();
    var T,
      A = k;
    n.d(e, "initToolTips", function () {
      return L;
    }),
      n.d(e, "updateToolTips", function () {
        return j;
      });
    var L = function () {
        T = A("[data-tooltip]", {
          content: C,
          followCursor: !0,
          ignoreAttributes: !0,
          theme: "starbucks",
          animateFill: !1,
          maxWidth: 350,
        });
      },
      C = function (t) {
        return t.dataset.tooltip;
      },
      j = function () {
        T.forEach(function (t) {
          t.setContent(C);
        });
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "scrollToDest", function () {
        return i;
      }),
      n.d(e, "initWaypoints", function () {
        return p;
      }),
      n.d(e, "expandTopBar", function () {
        return l;
      }),
      n.d(e, "initScrollIndicator", function () {
        return f;
      }),
      n(18);
    var a = n(0),
      r = n(63),
      o = n.n(r),
      s = n(4),
      c = n(61),
      i =
        (n(131),
        function (t, e) {
          window.location.pathname === e.pathname &&
            (t.preventDefault(), t.stopPropagation(), o()(0));
        }),
      u = function (t, e, n) {
        t.classList.add(e), t.classList.remove(n);
      },
      l = function () {
        u(a.elements.topBar, "transparent", "squished");
      },
      p = function () {
        if (
          (Waypoint.destroyAll(),
          new Waypoint({
            element: a.elements.barbaContainer,
            offset: -100,
            handler: function (t) {
              "down" === t
                ? u(a.elements.topBar, "squished", "transparent")
                : l();
            },
          }),
          a.elements.scrollIndicator &&
            new Waypoint({
              element: a.elements.barbaContainer,
              offset: -50,
              handler: function (t) {
                "down" === t
                  ? a.elements.scrollIndicator.classList.add("is-hidden")
                  : a.elements.scrollIndicator.classList.remove("is-hidden");
              },
            }),
          a.elements.philosophySection &&
            new Waypoint({
              element: a.elements.philosophySection,
              offset: 80,
              handler: function (t) {
                "down" === t
                  ? Object(s.setHeaderColor)(a.elements.philosophySection)
                  : Object(s.setHeaderColor)();
              },
            }),
          a.elements.invertMenuColorSection &&
            a.elements.invertMenuColorSection.forEach(function (e) {
              new Waypoint({
                element: e,
                offset: 80,
                handler: function (t) {
                  "down" === t
                    ? Object(s.setHeaderColor)(e)
                    : Object(s.setHeaderColor)();
                },
              });
            }),
          a.elements.expressionChart &&
            new Waypoint({
              element: a.elements.expressionChart,
              offset: "95%",
              handler: function () {
                Object(c.initCharts)(), this.destroy();
              },
            }),
          a.elements.animateIn)
        )
          for (
            var n = [],
              t = function (t) {
                var e = a.elements.animateIn[t];
                n[t] = new Waypoint({
                  element: e,
                  offset: "95%",
                  handler: function (t) {
                    e.classList.add("entered");
                  },
                });
              },
              e = 0;
            e < a.elements.animateIn.length;
            e++
          )
            t(e);
        if (0 < a.elements.scrollTriggeredAnimations.length)
          for (
            var r = [],
              o = function (t) {
                var e = a.elements.scrollTriggeredAnimations[t];
                r[t] = new Waypoint({
                  element: e.element,
                  offset: "100%",
                  handler: function (t) {
                    "down" === t && e.animation.restart();
                  },
                });
              },
              i = 0;
            i < a.elements.scrollTriggeredAnimations.length;
            i++
          )
            o(i);
      },
      f = function () {
        a.elements.scrollIndicator &&
          a.elements.scrollIndicator.addEventListener("click", d);
      },
      d = function () {
        var t = a.elements.secondSection.getBoundingClientRect();
        o()(t.top, {
          speed: 1e3,
        });
      };
  },
  function (t, e, n) {
    t.exports = !n(5)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(46),
      o = Math.min;
    t.exports = function (t) {
      return 0 < t ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(88),
      o = n(124),
      i = n(8),
      a = n(3);
    for (var s in r) {
      var c = a[s],
        u = c && c.prototype;
      if (u && u.forEach !== o)
        try {
          i(u, "forEach", o);
        } catch (t) {
          u.forEach = o;
        }
    }
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e, n) {
    var r = n(66),
      o = n(16);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e, n) {
    var s = n(3),
      c = n(8),
      u = n(7),
      l = n(47),
      r = n(72),
      o = n(38),
      i = o.get,
      p = o.enforce,
      f = String(r).split("toString");
    n(22)("inspectSource", function (t) {
      return r.call(t);
    }),
      (t.exports = function (t, e, n, r) {
        var o = !!r && !!r.unsafe,
          i = !!r && !!r.enumerable,
          a = !!r && !!r.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || u(n, "name") || c(n, "name", e),
          (p(n).source = f.join("string" == typeof e ? e : ""))),
          t !== s
            ? (o ? !a && t[e] && (i = !0) : delete t[e],
              i ? (t[e] = n) : c(t, e, n))
            : i
            ? (t[e] = n)
            : l(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && i(this).source) || r.call(this);
      });
  },
  function (t, e, n) {
    var r = n(3),
      o = n(47),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.0.1",
      mode: n(36) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, n) {
    var o = n(9);
    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !o((r = n.call(t))))
        return r;
      if ("function" == typeof (n = t.valueOf) && !o((r = n.call(t)))) return r;
      if (!e && "function" == typeof (n = t.toString) && !o((r = n.call(t))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "showBrowserUpgrade", function () {
        return o;
      }),
      n.d(e, "hideBrowserUpgrade", function () {
        return i;
      }),
      n(99),
      n(77),
      n(105),
      n(79),
      n(106);
    var r = n(0),
      o = function () {
        var t =
            -1 !== navigator.userAgent.indexOf("MSIE") ||
            -1 < navigator.appVersion.indexOf("Trident/"),
          e = document.cookie.split(";").filter(function (t) {
            return t.includes("upgradeDismissed=1");
          }).length;
        t &&
          !e &&
          document.querySelector(".browserupgrade").classList.remove("hidden");
      },
      i = function (t) {
        t.preventDefault(),
          r.elements.browserUpgrade.classList.add("hidden"),
          (document.cookie = "upgradeDismissed=1");
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initBlob", function () {
        return i;
      }),
      n(125),
      n(127),
      n(128);
    var g = n(0);
    function y(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function b(t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    }
    var w,
      x = 0,
      S = 0,
      o = function () {
        (x = g.elements.blobCanvas.getBoundingClientRect().width),
          (S = g.elements.blobCanvas.getBoundingClientRect().height);
      },
      E = function () {
        (g.elements.blobCanvas.width =
          g.elements.blobCanvas.offsetWidth * devicePixelRatio),
          (g.elements.blobCanvas.height =
            g.elements.blobCanvas.offsetHeight * devicePixelRatio),
          g.elements.blobCanvas
            .getContext("2d")
            .scale(devicePixelRatio, devicePixelRatio);
      },
      i = function () {
        window.removeEventListener("resize", o),
          window.removeEventListener("resize", E),
          g.elements.blobCanvas &&
            (o(),
            window.addEventListener("resize", o),
            (function () {
              var o,
                e,
                r = window.requestAnimationFrame,
                p = o,
                n = g.elements.blobCanvas,
                t = (window.devicePixelRatio, n.offsetHeight),
                i = n.offsetWidth,
                a = Math.min(t, i),
                s = Math.max(t, i);
              e = i < t ? (s - a) / 2 : 0;
              var h = 3 * (o = a / 10),
                c = [
                  [5, 9.995],
                  [8.214, 8.825],
                  [9.924, 5.863],
                  [9.33, 2.495],
                  [6.71, 0.297],
                  [3.29, 0.297],
                  [0.67, 2.495],
                  [0.076, 5.863],
                  [1.786, 8.825],
                ].map(function (t) {
                  return [t[0] * o + 0, t[1] * o + e];
                }),
                u = (function () {
                  function n(t, e) {
                    y(this, n), (this.x = t), (this.y = e);
                  }
                  return (
                    b(n, [
                      {
                        key: "set",
                        value: function (t, e) {
                          return (this.x = t), (this.y = e), this;
                        },
                      },
                      {
                        key: "copy",
                        value: function (t) {
                          return this.set(t.x, t.y);
                        },
                      },
                      {
                        key: "translate",
                        value: function (t, e) {
                          return this.set(this.x + t, this.y + e);
                        },
                      },
                      {
                        key: "scale",
                        value: function (t) {
                          return this.set(this.x * t, this.y * t);
                        },
                      },
                      {
                        key: "distance",
                        value: function (t) {
                          var e = this.x - t.x,
                            n = this.y - t.y;
                          return Math.sqrt(e * e + n * n);
                        },
                      },
                    ]),
                    n
                  );
                })(),
                f = (function () {
                  function n(t, e) {
                    y(this, n),
                      (this.pos = new u(t, e)),
                      (this.last = new u(t, e)),
                      (this.anchor = new u(t, e)),
                      (this.vel = new u(0, 0)),
                      (this.neighbors = []);
                  }
                  return (
                    b(n, [
                      {
                        key: "addAcrossNeighbor",
                        value: function (t) {
                          this.addNeighbor(t, 1, 2);
                        },
                      },
                      {
                        key: "addNeighbor",
                        value: function (t, e, n) {
                          this.neighbors.push({
                            pos: t.pos,
                            vel: t.vel,
                            dist: this.pos.distance(t.pos),
                            compress: e,
                            strength: n,
                          });
                        },
                      },
                      {
                        key: "setNeighbors",
                        value: function (t, e) {
                          this.addNeighbor(t, 30, 0.5);
                        },
                      },
                      {
                        key: "move",
                        value: function (t, e) {
                          if (e.inside) {
                            var n = e.pos.x - this.pos.x,
                              r = e.pos.y - this.pos.y;
                            Math.sqrt(n * n + r * r) < h &&
                              ((this.vel.x -= 6 * n), (this.vel.y -= 6 * r));
                          }
                          if (
                            (this.pos.x <= 12 &&
                              (this.vel.x += 50 * (12 - this.pos.x)),
                            this.pos.y <= 12 &&
                              (this.vel.y += 50 * (12 - this.pos.y)),
                            this.pos.x >= x - 12 &&
                              (this.vel.x -= 50 * (this.pos.x - (x - 12))),
                            this.pos.y >= S - 12 &&
                              (this.vel.y -= 50 * (this.pos.y - (S - 12))),
                            !e.dragging)
                          ) {
                            if (this.anchor.x <= 12)
                              for (var o = 0; o < w.island.points.length; ++o)
                                w.island.points[o].anchor.translate(5, 0);
                            if (this.anchor.x <= 12)
                              for (var i = 0; i < w.island.points.length; ++i)
                                w.island.points[i].anchor.translate(5, 0);
                            if (this.anchor.y <= 12)
                              for (var a = 0; a < w.island.points.length; ++a)
                                w.island.points[a].anchor.translate(0, 5);
                            if (this.anchor.x >= x + 12)
                              for (var s = 0; s < w.island.points.length; ++s)
                                w.island.points[s].anchor.translate(-5, 0);
                            if (this.anchor.y >= S + 12)
                              for (var c = 0; c < w.island.points.length; ++c)
                                w.island.points[c].anchor.translate(0, -5);
                          }
                          this.vel.scale(0.35);
                          var u = 0.75 * (this.anchor.x - this.pos.x),
                            l = 0.75 * (this.anchor.y - this.pos.y);
                          this.vel.translate(u, l);
                          var p = t * t * 0.5,
                            f =
                              this.pos.x +
                              0.9 * (this.pos.x - this.last.x) +
                              this.vel.x * p,
                            d =
                              this.pos.y +
                              0.9 * (this.pos.y - this.last.y) +
                              this.vel.y * p;
                          this.last.copy(this.pos), this.pos.set(f, d);
                        },
                      },
                      {
                        key: "think",
                        value: function () {
                          for (
                            var t = 0, e = this.neighbors.length;
                            t < e;
                            t++
                          ) {
                            var n = this.neighbors[t],
                              r = this.pos.x - n.pos.x,
                              o = this.pos.y - n.pos.y,
                              i = Math.sqrt(r * r + o * o),
                              a = ((n.dist - i) / i) * n.strength;
                            i < n.dist && (a /= n.compress);
                            var s = r * a,
                              c = o * a;
                            this.vel.translate(+s, +c), n.vel.translate(-s, -c);
                          }
                        },
                      },
                    ]),
                    n
                  );
                })(),
                l = (function () {
                  function l(t) {
                    y(this, l), (this.points = []);
                    for (var e = 0, n = t.length; e < n; e++)
                      this.points.push(new f(t[e][0], t[e][1]));
                    for (var r = 0, o = this.points.length; r < o; r++) {
                      var i = this.points[r],
                        a = 0 === r ? o - 1 : r - 1,
                        s = r === o - 1 ? 0 : r + 1;
                      i.setNeighbors(this.points[a], this.points[s]);
                      for (var c = 0; c < o; c++) {
                        var u = this.points[c];
                        u !== i &&
                          u !== this.points[a] &&
                          u !== this.points[s] &&
                          i.pos.distance(u.pos) <= p &&
                          i.addAcrossNeighbor(u);
                      }
                    }
                  }
                  return (
                    b(l, [
                      {
                        key: "update",
                        value: function (t) {
                          var e,
                            n = this.points.length;
                          for (e = 0; e < n; e++) this.points[e].think();
                          for (e = 0; e < n; e++) this.points[e].move(0.06, t);
                        },
                      },
                      {
                        key: "wobble",
                        value: function (t) {
                          for (var e = 0; e < this.points.length; ++e) {
                            var n = t * (Math.random() - 0.5) * o,
                              r = t * (Math.random() - 0.5) * o;
                            this.points[e].pos.translate(n, r);
                          }
                        },
                      },
                    ]),
                    l
                  );
                })(),
                d = (function () {
                  function t() {
                    y(this, t),
                      (this.drawAnchors = 0),
                      (this.drawJellies = 0),
                      (this.drawMouse = 0),
                      (this.drawOutline = 0),
                      (this.drawCurvy = !0);
                  }
                  return (
                    b(t, [
                      {
                        key: "shouldDrawAnchors",
                        value: function () {
                          return this.drawAnchors;
                        },
                      },
                      {
                        key: "shouldDrawJellies",
                        value: function () {
                          return this.drawJellies;
                        },
                      },
                      {
                        key: "shouldDrawMouse",
                        value: function () {
                          return this.drawMouse;
                        },
                      },
                      {
                        key: "shouldDrawOutline",
                        value: function () {
                          return this.drawOutline;
                        },
                      },
                      {
                        key: "shouldDrawCurvy",
                        value: function () {
                          return this.drawCurvy;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                m = (function () {
                  function e(t) {
                    y(this, e),
                      (this.dImg = this.cacheDotImg("rgb(230, 90, 70)")),
                      (this.aImg = this.cacheDotImg("rgba(152, 65, 52, 0.5)")),
                      (this.canvas = t),
                      (this.ctx = this.canvas.getContext("2d")),
                      (this.ctx.lineWidth = 4),
                      (this.ctx.lineCap = "round"),
                      (this.ctx.lineJoin = "round"),
                      (this.opts = new d()),
                      window.addEventListener("resize", E),
                      E();
                  }
                  return (
                    b(e, [
                      {
                        key: "cacheDotImg",
                        value: function (t) {
                          var e = document.createElement("canvas");
                          (e.width = 22), (e.height = 22);
                          var n = e.getContext("2d");
                          return (
                            (n.lineWidth = 3),
                            (n.lineCap = "round"),
                            (n.lineJoin = "round"),
                            (n.strokeStyle = t),
                            n.beginPath(),
                            n.arc(11, 11, 6, 0, 2 * Math.PI, !0),
                            n.stroke(),
                            e
                          );
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          this.ctx.clearRect(
                            0,
                            0,
                            this.canvas.width,
                            this.canvas.height
                          );
                        },
                      },
                      {
                        key: "drawDots",
                        value: function (t, e, n) {
                          for (var r = 0, o = t.length; r < o; r++)
                            this.ctx.drawImage(
                              n,
                              t[r][e].x - n.width / 2,
                              t[r][e].y - n.height / 2,
                              n.width,
                              n.height
                            );
                        },
                      },
                      {
                        key: "curveBetween",
                        value: function (t, e) {
                          this.ctx.quadraticCurveTo(
                            t.x,
                            t.y,
                            0.5 * (t.x + e.x),
                            0.5 * (t.y + e.y)
                          );
                        },
                      },
                      {
                        key: "outlineCurvePath",
                        value: function (t) {
                          this.ctx.beginPath(),
                            this.ctx.moveTo(t[0].pos.x, t[0].pos.y);
                          for (var e = 0, n = t.length; e <= n; ++e) {
                            var r = t[n <= e + 0 ? e + 0 - n : e + 0].pos,
                              o = t[n <= e + 1 ? e + 1 - n : e + 1].pos;
                            this.ctx.quadraticCurveTo(
                              r.x,
                              r.y,
                              0.5 * (r.x + o.x),
                              0.5 * (r.y + o.y)
                            );
                          }
                        },
                      },
                      {
                        key: "outlineSolidPath",
                        value: function (t) {
                          this.ctx.beginPath(),
                            this.ctx.moveTo(t[0].pos.x, t[0].pos.y);
                          for (var e = 1, n = t.length; e < n; ++e)
                            this.ctx.lineTo(t[e].pos.x, t[e].pos.y);
                          this.ctx.closePath();
                        },
                      },
                      {
                        key: "drawIsland",
                        value: function (t) {
                          var e = t.points;
                          this.ctx.fillStyle = "#FFFFFF";
                          var n = this.opts.drawCurvy;
                          n && (this.outlineCurvePath(e), this.ctx.fill());
                          var r = this.opts.shouldDrawOutline();
                          (!r && n) ||
                            (r &&
                              (this.ctx.strokeStyle =
                                "rgba(243, 218, 131, 0.5)"),
                            this.outlineSolidPath(e),
                            r && this.ctx.stroke(),
                            n || this.ctx.fill()),
                            this.opts.shouldDrawAnchors() &&
                              this.drawDots(e, "anchor", this.aImg),
                            this.opts.shouldDrawJellies() &&
                              this.drawDots(e, "pos", this.dImg);
                        },
                      },
                      {
                        key: "drawMouse",
                        value: function (t) {
                          t.dragging
                            ? ((this.ctx.fillStyle = "rgba(255, 0, 255, 0.46)"),
                              (n.style.cursor = "grabbing"))
                            : (n.style.cursor = "grab"),
                            this.opts.shouldDrawMouse() &&
                              ((this.ctx.fillStyle = "rgba(141, 46, 86, 0.5)"),
                              (this.ctx.strokeStyle = "rgba(170, 60, 82, 0.5)"),
                              this.ctx.beginPath(),
                              this.ctx.arc(
                                t.pos.x,
                                t.pos.y,
                                h,
                                0,
                                2 * Math.PI,
                                !0
                              ),
                              this.ctx.stroke(),
                              this.ctx.fill());
                        },
                      },
                    ]),
                    e
                  );
                })(),
                v = function t(r, o) {
                  y(this, t),
                    (this.pos = new u(0, 0)),
                    (this.down = !1),
                    (this.inside = !1),
                    (this.dragging = !1),
                    (this.dragX = 0),
                    (this.dragY = 0);
                  var i = this;
                  (r.onmousemove = function (t) {
                    i.inside = !0;
                    var e = r.getBoundingClientRect();
                    if (
                      (i.pos.set(t.clientX - e.left, t.clientY - e.top),
                      i.dragging)
                    ) {
                      (i.dragX = i.pos.x - i.mouseStartX),
                        (i.dragY = i.pos.y - i.mouseStartY),
                        (i.mouseStartX = i.pos.x),
                        (i.mouseStartY = i.pos.y);
                      for (var n = 0; n < o.points.length; ++n)
                        o.points[n].anchor.translate(i.dragX, i.dragY);
                    }
                    return t.preventDefault();
                  }),
                    (r.onmouseup = function (t) {
                      return (
                        (i.down = !1),
                        (i.dragging = !1),
                        w.island.wobble(0.1),
                        t.preventDefault()
                      );
                    }),
                    (r.onmousedown = function (t) {
                      (i.down = !0),
                        0 == i.dragging &&
                          ((i.mouseStartX = i.pos.x),
                          (i.mouseStartY = i.pos.y),
                          (i.dragging = !0),
                          w.island.wobble(0.1));
                      var e = r.getBoundingClientRect();
                      return (
                        i.pos.set(t.clientX - e.left, t.clientY - e.top),
                        t.preventDefault()
                      );
                    }),
                    (r.onmouseleave = function (t) {
                      (i.inside = !1), (i.dragging = !1), i.pos.set(-999, -999);
                    }),
                    (r.ontouchstart = function (t) {
                      w.island.wobble(0.2);
                    }),
                    (r.ontouchend = function (t) {
                      w.island.wobble(0.2);
                    });
                };
              (w = new ((function () {
                function n(t, e) {
                  y(this, n),
                    (this.canvas = t),
                    (this.screen = new m(this.canvas)),
                    (this.island = new l(e)),
                    (this.mouse = new v(this.canvas, this.island)),
                    (this.tick = this.tick.bind(this));
                }
                return (
                  b(n, [
                    {
                      key: "updatePositions",
                      value: function () {
                        this.island.update(this.mouse);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        this.screen.clear(),
                          this.screen.drawIsland(this.island),
                          this.screen.drawMouse(this.mouse);
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.running = !1;
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        (this.lastTick = new Date().getTime()),
                          (this.lastPrint = new Date().getTime()),
                          (this.running = !0),
                          this.island.wobble(0.1),
                          this.tick();
                      },
                    },
                    {
                      key: "tick",
                      value: function () {
                        if (this.running) {
                          r(this.tick);
                          for (
                            var t = new Date().getTime(),
                              e = 0.06 * (t - this.lastTick);
                            0 <= e--;

                          )
                            this.updatePositions();
                          (this.lastTick = t),
                            this.render(),
                            250 < t - this.lastPrint && (this.lastPrint = t);
                        }
                      },
                    },
                  ]),
                  n
                );
              })())(n, c)).start();
            })());
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initTabs", function () {
        return i;
      });
    var r = n(93),
      o = n.n(r),
      i = function () {
        document.querySelector("[data-tabs]") && new o.a("[data-tabs]");
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initPaletteSelector", function () {
        return o;
      });
    var r = n(0),
      a = n(13),
      o = function () {
        if (0 < r.elements.paletteSelector.length)
          for (var t = 0; t < r.elements.paletteSelector.length; t++)
            r.elements.paletteSelector[t].addEventListener("click", i);
      },
      i = function () {
        if ("A" != event.target.tagName) return !1;
        for (var t = this.querySelectorAll("a"), e = 0; e < t.length; e++)
          t[e].classList.remove("is-active");
        event.target.classList.add("is-active");
        var n = event.target.dataset.color,
          r = event.target.dataset.tooltipBackground,
          o = event.target.dataset.tooltipForeground,
          i = event.target.dataset.tooltipTrademark;
        this.querySelector("svg").setAttribute("data-background-color", n),
          r &&
            (this.querySelector(".background").setAttribute("data-tooltip", r),
            Object(a.updateToolTips)()),
          o &&
            (this.querySelector(".foreground").setAttribute("data-tooltip", o),
            Object(a.updateToolTips)()),
          i &&
            (this.querySelector(".trademark").setAttribute("data-tooltip", i),
            Object(a.updateToolTips)());
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initScrollingSlider", function () {
        return o;
      });
    var r = n(0),
      o = function () {
        if (r.elements.scrollingSlider) {
          var t = r.elements.scrollingSlider,
            e = r.elements.scrollingSlider.querySelector("div"),
            n = Math.round((e.offsetWidth - t.offsetWidth) / 2);
          r.elements.scrollingSlider.scrollLeft = n;
        }
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initTypeTester", function () {
        return o;
      }),
      n(18);
    var r = n(0),
      o = function () {
        r.elements.typeSelector.forEach(function (t) {
          t.querySelectorAll("select").forEach(function (t) {
            t.addEventListener("change", i);
          });
        });
      },
      i = function (t) {
        if (t.target.value) {
          var e = t.target.closest(".js-type-selector"),
            n = e.dataset.typeSelectorFor,
            r = document.querySelector(
              '[data-type-selector-id="'.concat(n, '"]')
            ),
            o = "";
          e.querySelectorAll("select").forEach(function (t) {
            o += t.value + " ";
          }),
            (r.className = o);
        }
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initTypeAnimations", function () {
        return r;
      }),
      n(18);
    var m = n(0),
      v = n(1),
      r = function () {
        if (
          document.querySelector(".js-page-has-scroll-triggered-animations")
        ) {
          var t = document.querySelector(".js-animation-sodo-sans-1"),
            e = Object(v.a)({
              targets: ".js-animation-sodo-sans-1 tspan",
              letterSpacing: ["-0.04em", "0.04em", "0em"],
              dx: [10, -10, 0],
              easing: "easeInOutQuad",
              loop: !1,
              duration: 2500,
              autoplay: !1,
            }),
            n = v.a.path(".js-animation-sodo-sans-2 .js-floating-path"),
            r = 5e3;
          document
            .querySelectorAll(".js-animation-sodo-sans-2 .js-letter")
            .forEach(function (t) {
              return (
                (t.style.transformOrigin = "center"),
                Object(v.a)({
                  targets: t,
                  easing: "linear",
                  translateX: {
                    value: n("x"),
                    duration: r + 6e3 * Math.random(),
                  },
                  translateY: {
                    value: n("y"),
                    duration: r + 6e3 * Math.random(),
                  },
                  loop: !0,
                }),
                (r += 500),
                !1
              );
            });
          var o = v.a.path(
            ".js-animation-sodo-sans-2-square .js-floating-path"
          );
          document
            .querySelectorAll(".js-animation-sodo-sans-2-square .js-letter")
            .forEach(function (t) {
              return (
                (t.style.transformOrigin = "center"),
                Object(v.a)({
                  targets: t,
                  easing: "linear",
                  translateX: {
                    value: o("x"),
                    duration: r + 6e3 * Math.random(),
                  },
                  translateY: {
                    value: o("y"),
                    duration: r + 6e3 * Math.random(),
                  },
                  loop: !0,
                }),
                (r += 500),
                !1
              );
            });
          var i = document.querySelector(".js-animation-sodo-sans-3"),
            a = Object(v.a)({
              targets: ".js-animation-sodo-sans-3 tspan",
              dy: v.a.stagger([80, 0]),
              easing: "easeInOutCubic",
              loop: !1,
              duration: 3e3,
              delay: v.a.stagger(150),
              autoplay: !1,
            }),
            s = document.querySelector(".js-animation-lander-1"),
            c = Object(v.a)({
              targets: ".js-animation-lander-1 tspan",
              dy: [v.a.stagger([-60, 60]), 0],
              easing: "easeInOutCubic",
              loop: !1,
              duration: 2e3,
              delay: v.a.stagger(150, {
                from: "center",
              }),
              autoplay: !1,
            });
          Object(v.a)({
            targets: ".js-animation-lander-2 path",
            strokeDashoffset: [v.a.setDashoffset, 0],
            loop: !0,
            easing: "easeInOutSine",
            duration: 6e3,
            direction: "alternate",
            endDelay: 1e3,
          });
          var u = document.querySelector(".js-animation-lander-3"),
            l = Object(v.a)({
              targets: ".js-animation-lander-3 tspan",
              letterSpacing: ["0.16em", "0.02em"],
              dx: [-25, 0],
              easing: "easeInOutCubic",
              loop: !1,
              duration: 2600,
              delay: v.a.stagger(160),
              autoplay: !1,
            }),
            p = document.querySelector(".js-animation-pike-1"),
            f = Object(v.a)({
              targets: ".js-animation-pike-1 tspan",
              dy: [v.a.stagger([-30, 30]), v.a.stagger([10, -10])],
              easing: "easeInOutSine",
              loop: !1,
              duration: 2e3,
              delay: v.a.stagger(150, {
                from: "center",
              }),
              autoplay: !1,
            });
          Object(v.a)({
            targets: ".js-animation-pike-2 path",
            skewX: "-10deg",
            loop: !0,
            easing: "easeInOutQuart",
            duration: 2e3,
            direction: "alternate",
          });
          var d = document.querySelector(".js-animation-pike-3"),
            h = Object(v.a)({
              targets: ".js-animation-pike-3 tspan",
              letterSpacing: ["0.0em", "0.2em"],
              dx: [v.a.stagger([24, 32]), 0],
              easing: "easeInOutCubic",
              loop: !1,
              duration: 2e3,
              delay: v.a.stagger(400),
              autoplay: !1,
            });
          m.elements.scrollTriggeredAnimations = [
            {
              element: t,
              animation: e,
            },
            {
              element: i,
              animation: a,
            },
            {
              element: s,
              animation: c,
            },
            {
              element: u,
              animation: l,
            },
            {
              element: p,
              animation: f,
            },
            {
              element: d,
              animation: h,
            },
          ];
        }
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initComparisonSlider", function () {
        return c;
      }),
      n(18);
    var s = n(0),
      r = n(95),
      o = n.n(r),
      i = !1,
      a = function () {
        s.elements.comparisonSliderInstances.forEach(function (t) {
          t.setImgWidth();
        });
      },
      c = function () {
        if (
          (window.removeEventListener("transitionend", a),
          window.removeEventListener("scroll", u),
          !(s.elements.comparisonSliders.length < 1))
        ) {
          for (var t = 0; t < s.elements.comparisonSliders.length; t++) {
            var e = s.elements.comparisonSliders[t];
            (s.elements.comparisonSliderInstances[t] = new o.a(e, {
              start: e.dataset.sliderStart || 50,
            })),
              e.querySelector(".beer-range").setAttribute("step", 0.01);
          }
          window.addEventListener("transitionend", a),
            window.addEventListener("scroll", u);
        }
      },
      u = function (t) {
        i ||
          (window.requestAnimationFrame(function () {
            l(), (i = !1);
          }),
          (i = !0));
      },
      l = function () {
        for (var t = 0; t < s.elements.comparisonSliderInstances.length; t++) {
          var e = s.elements.comparisonSliderInstances[t],
            n = e.element;
          if (n.classList.contains("js-comparison-slider-mobile")) {
            var r = window.innerHeight,
              o = n.getBoundingClientRect(),
              i = r / 7.5,
              a = 100 - ((o.top - i) / (r - 2 * i - o.height)) * 100;
            (e.range.value = Math.round(100 * a) / 100), e.move();
          }
        }
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initZoomScroller", function () {
        return o;
      }),
      n(132),
      n(136),
      n(137),
      n(91),
      n(138),
      n(142),
      n(83),
      n(18),
      n(144);
    var y,
      b,
      w = n(0),
      x = n(1),
      r = n(44),
      S = n.n(r),
      E = !1,
      o = function () {
        window.removeEventListener("scroll", O),
          window.removeEventListener("resize", s),
          w.elements.zoomScroller &&
            (w.elements.zoomControlIn.addEventListener("click", i),
            w.elements.zoomControlOut.addEventListener("click", a),
            (w.elements.zoomContent.style.width =
              w.elements.zoomContent.offsetWidth + "px"),
            (y = w.elements.zoomContainer.getBoundingClientRect()),
            window.addEventListener("scroll", O),
            window.addEventListener("resize", s),
            w.elements.zoomContainer.addEventListener(
              "transitionend",
              function () {
                E = !1;
              }
            ),
            s(),
            w.elements.zoomScrollTabs &&
              (w.elements.zoomScrollTabs
                .querySelectorAll("li")
                .forEach(function (t) {
                  t.addEventListener("click", u);
                }),
              w.elements.zoomScrollTabs.addEventListener("mouseenter", l)));
      },
      i = function () {
        E || c("in");
      },
      a = function () {
        E || c("out");
      },
      c = function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        (E = !0), k();
        var e = 1;
        "in" == t ? (e += 0.5) : "out" == t && (e -= 0.5);
        var n = w.elements.zoomContainer.dataset.zoom || 1,
          r = S()(Number(n) * e, 0.4, 3);
        t && !isNaN(t) && (r = Number(t)),
          (w.elements.zoomContainer.dataset.zoom = r);
        var o,
          i = y.width,
          a = b,
          s = w.elements.zoomContent.offsetWidth,
          c = w.elements.zoomContent.offsetHeight,
          u = i * r,
          l = u * (c / s),
          p = w.elements.zoomContainer.scrollLeft,
          f = s - i,
          d =
            ((u - i) * (0 < f ? S()(Math.round((p / f) * 100), 0, 100) : 50)) /
            100,
          h = 0,
          m = -1 * y.y,
          v = c - a;
        o = 0 < v ? S()(Math.round((m / v) * 100), 0, 100) : 50;
        var g = 0;
        ("in" != t && "out" != t) ||
          ((h = d - p), (g = ((l - a) * o) / 100 - m)),
          x.a
            .timeline({
              easing: "easeInOutQuad",
              duration: 600,
              complete: function (t) {
                E = !1;
              },
            })
            .add(
              {
                targets: w.elements.zoomContent,
                width: u,
              },
              0
            )
            .add(
              {
                targets: w.elements.zoomContainer,
                scrollLeft: "+=" + h,
              },
              0
            )
            .add(
              {
                targets: document.documentElement,
                scrollTop: "+=" + g,
              },
              0
            ),
          O(),
          1 == e && (E = !1);
      },
      O = function () {
        var t =
            ((-1 * (y = w.elements.zoomContainer.getBoundingClientRect()).y) /
              y.height) *
            100,
          e = (b / y.height) * 100,
          n = Math.max(t, 0);
        -y.y - y.height + b < 0
          ? ((w.elements.zoomScrollIndicator.style.top = n + "%"),
            (w.elements.zoomScrollIndicator.style.bottom = ""))
          : ((w.elements.zoomScrollIndicator.style.top = ""),
            (w.elements.zoomScrollIndicator.style.bottom = "0%")),
          (w.elements.zoomScrollIndicator.style.height = e + "%");
      },
      s = function () {
        (b = window.innerHeight), c(), O();
      },
      k = function t() {
        O(), E && requestAnimationFrame(t);
      },
      u = function () {
        var t = event.currentTarget,
          e = w.elements.zoomScrollTabs.querySelector(
            ".current-zoom-scroll-tab"
          );
        e && e.classList.remove("current-zoom-scroll-tab"),
          t.classList.add("current-zoom-scroll-tab");
        var n = t.dataset.zoomScrollAltText,
          r = t.dataset.zoomScrollImage,
          o = t.dataset.zoomScrollImageDesktop || "",
          i = t.dataset.svgTrigger,
          a = document.querySelectorAll(".svg-container"),
          s = w.elements.zoomScrollImage.closest("picture");
        i
          ? (s.classList.add("hidden"),
            a.forEach(function (t) {
              t.dataset.svgReveal === i
                ? t.classList.remove("hidden")
                : t.classList.add("hidden");
            }))
          : r &&
            ((w.elements.zoomScrollImage.src = r),
            (w.elements.zoomScrollImageDesktop.srcset = o),
            s.classList.remove("hidden"),
            a.forEach(function (t) {
              t.classList.add("hidden");
            })),
          n && (w.elements.zoomScrollImage.alt = n),
          c(1);
      },
      l = function t() {
        w.elements.zoomScrollTabs.removeEventListener("mouseenter", t);
        var e = w.elements.zoomScrollTabs.querySelectorAll(
            "[data-zoom-scroll-image]"
          ),
          n = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var i, a = e[Symbol.iterator]();
            !(n = (i = a.next()).done);
            n = !0
          ) {
            var s = i.value,
              c = s.dataset.zoomScrollImage,
              u = s.dataset.zoomScrollImageDesktop;
            (new Image().src = c), u && (new Image().src = u);
          }
        } catch (t) {
          (r = !0), (o = t);
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw o;
          }
        }
      };
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(15),
      o = n(49),
      i = n(24),
      a = n(20),
      s = n(23),
      c = n(7),
      u = n(68),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = a(t)), (e = s(e, !0)), u))
            try {
              return l(t, e);
            } catch (t) {}
          if (c(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(101),
      s = n(9),
      c = n(8),
      u = n(7),
      l = n(39),
      p = n(40),
      f = n(3).WeakMap;
    if (a) {
      var d = new f(),
        h = d.get,
        m = d.has,
        v = d.set;
      (r = function (t, e) {
        return v.call(d, t, e), e;
      }),
        (o = function (t) {
          return h.call(d, t) || {};
        }),
        (i = function (t) {
          return m.call(d, t);
        });
    } else {
      var g = l("state");
      (p[g] = !0),
        (r = function (t, e) {
          return c(t, g, e), e;
        }),
        (o = function (t) {
          return u(t, g) ? t[g] : {};
        }),
        (i = function (t) {
          return u(t, g);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (n) {
        return function (t) {
          var e;
          if (!s(t) || (e = o(t)).type !== n)
            throw TypeError("Incompatible receiver, " + n + " required");
          return e;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(22)("keys"),
      o = n(48);
    t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(74),
      o = n(51).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(10),
      o = n(103),
      i = n(51),
      a = n(104),
      s = n(69),
      c = n(39)("IE_PROTO"),
      u = function () {},
      l = function () {
        var t,
          e = s("iframe"),
          n = i.length;
        for (
          e.style.display = "none",
            a.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            l = t.F;
          n--;

        )
          delete l.prototype[i[n]];
        return l();
      };
    (t.exports =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((u.prototype = r(t)),
              (n = new u()),
              (u.prototype = null),
              (n[c] = t))
            : (n = l()),
          void 0 === e ? n : o(n, e)
        );
      }),
      (n(40)[c] = !0);
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(145),
      o = n(146);
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = o(n)) == n ? n : 0),
        void 0 !== e && (e = (e = o(e)) == e ? e : 0),
        r(o(t), e, n)
      );
    };
  },
  function (t, e, n) {
    var b = n(64),
      w = n(66),
      x = n(35),
      S = n(17),
      r = n(100);
    t.exports = function (p, t) {
      var f = 1 == p,
        d = 2 == p,
        h = 3 == p,
        m = 4 == p,
        v = 6 == p,
        g = 5 == p || v,
        y = t || r;
      return function (t, e, n) {
        for (
          var r,
            o,
            i = x(t),
            a = w(i),
            s = b(e, n, 3),
            c = S(a.length),
            u = 0,
            l = f ? y(t, c) : d ? y(t, 0) : void 0;
          u < c;
          u++
        )
          if ((g || u in a) && ((o = s((r = a[u]), u, i)), p))
            if (f) l[u] = o;
            else if (o)
              switch (p) {
                case 3:
                  return !0;
                case 5:
                  return r;
                case 6:
                  return u;
                case 2:
                  l.push(r);
              }
            else if (m) return !1;
        return v ? -1 : h || m ? m : l;
      };
    };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (0 < t ? r : n)(t);
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(8);
    t.exports = function (e, n) {
      try {
        o(r, e, n);
      } catch (t) {
        r[e] = n;
      }
      return n;
    };
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i =
        o &&
        !r.call(
          {
            1: 2,
          },
          1
        );
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var c = n(20),
      u = n(17),
      l = n(75);
    t.exports = function (s) {
      return function (t, e, n) {
        var r,
          o = c(t),
          i = u(o.length),
          a = l(n, i);
        if (s && e != e) {
          for (; a < i; ) if ((r = o[a++]) != r) return !0;
        } else
          for (; a < i; a++)
            if ((s || a in o) && o[a] === e) return s || a || 0;
        return !s && -1;
      };
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(2)("unscopables"),
      o = n(42),
      i = n(8),
      a = Array.prototype;
    null == a[r] && i(a, r, o(null)),
      (t.exports = function (t) {
        a[r][t] = !0;
      });
  },
  function (t, e, n) {
    var r = n(74),
      o = n(51);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(80),
      o = n(16);
    t.exports = function (t, e, n) {
      if (r(e))
        throw TypeError("String.prototype." + n + " doesn't accept regex");
      return String(o(t));
    };
  },
  function (t, e, n) {
    var r = n(2)("match");
    t.exports = function (e) {
      var n = /./;
      try {
        "/./"[e](n);
      } catch (t) {
        try {
          return (n[r] = !1), "/./"[e](n);
        } catch (e) {}
      }
      return !1;
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      a = n(110),
      s = RegExp.prototype.exec,
      c = String.prototype.replace,
      i = s,
      u =
        ((r = /a/),
        (o = /b*/g),
        s.call(r, "a"),
        s.call(o, "a"),
        0 !== r.lastIndex || 0 !== o.lastIndex),
      l = void 0 !== /()??/.exec("")[1];
    (u || l) &&
      (i = function (t) {
        var e,
          n,
          r,
          o,
          i = this;
        return (
          l && (n = new RegExp("^" + i.source + "$(?!\\s)", a.call(i))),
          u && (e = i.lastIndex),
          (r = s.call(i, t)),
          u && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
          l &&
            r &&
            1 < r.length &&
            c.call(r[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0);
            }),
          r
        );
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(12).f,
      o = n(7),
      i = n(2)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, {
          configurable: !0,
          value: e,
        });
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "setClickHandlers", function () {
        return a;
      }),
      n(112),
      n(77),
      n(79),
      n(83);
    var r = n(0),
      o = n(26),
      i = n(4),
      a = function () {
        document.addEventListener("click", function (t) {
          var e = t.target;
          (e.classList.contains("panel-toggle") ||
            e.classList.contains("close-btn")) &&
            Object(i.togglePanel)(t),
            Array.from(r.elements.links).includes(e) &&
              e.classList.contains("browserupgrade-close") &&
              Object(o.hideBrowserUpgrade)(t);
        });
      };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initBarba", function () {
        return g;
      });
    var r = n(0),
      o = n(4),
      i = n(27),
      a = n(14),
      s = n(28),
      c = n(29),
      u = n(30),
      l = n(13),
      p = n(31),
      f = n(32),
      d = n(33),
      h = n(34),
      m = n(11),
      v = n.n(m),
      g = function () {
        (window.Barba = v.a),
          v.a.Pjax.start(),
          v.a.Prefetch.init(),
          v.a.Dispatcher.on("linkClicked", function () {}),
          v.a.Dispatcher.on("initStateChange", function () {
            Object(o.setNavClasses)();
          }),
          v.a.Dispatcher.on("transitionCompleted", function () {
            Object(r.setElementRefs)(),
              Object(i.initBlob)(),
              Object(s.initTabs)(),
              Object(c.initPaletteSelector)(),
              Object(u.initScrollingSlider)(),
              Object(l.initToolTips)(),
              Object(p.initTypeTester)(),
              Object(f.initTypeAnimations)(),
              Object(d.initComparisonSlider)(),
              Object(a.initWaypoints)(),
              Object(a.initScrollIndicator)(),
              Object(h.initZoomScroller)();
          }),
          (v.a.Pjax.getTransition = function () {
            return "mobile" ==
              getComputedStyle(r.elements.nav, "::after").fontFamily
              ? b
              : y;
          });
      },
      y = v.a.BaseTransition.extend({
        start: function () {
          this.newContainerLoading.then(this.finish.bind(this));
        },
        finish: function () {
          this.done(),
            window.scrollTo(0, 0),
            Object(o.setHeaderColor)(
              this.newContainer.querySelector("section")
            ),
            Object(a.expandTopBar)(),
            r.elements.navHovers.classList.add("fade-out"),
            window.setTimeout(function () {
              r.elements.navHovers.classList.remove("is-visible", "fade-out");
            }, 600);
        },
      }),
      b = v.a.BaseTransition.extend({
        start: function () {
          this.newContainerLoading.then(this.finish.bind(this));
        },
        finish: function () {
          this.done(),
            window.scrollTo(0, 0),
            Object(o.setHeaderColor)(
              this.newContainer.querySelector("section")
            ),
            window.setTimeout(function () {
              document.body.classList.contains("panel-is-open") &&
                Object(o.togglePanel)(),
                Object(a.expandTopBar)();
            }, 300);
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initCharts", function () {
        return r;
      });
    var i = n(0),
      r = function () {
        i.elements.expressionChart &&
          (i.elements.expressionChart
            .querySelector(".chart-svg")
            .classList.add("animate-in", "current-chart"),
          i.elements.expressionChartSelect.addEventListener("change", o));
      },
      o = function (t) {
        var e = t.target,
          n = e.options[e.selectedIndex].value,
          r = i.elements.expressionChart.querySelector(".current-chart"),
          o = i.elements.expressionChart.querySelector(
            ".chart-svg[data-chart-id=" + n + "]"
          );
        o &&
          o != r &&
          (r.classList.add("fade-out"),
          r.classList.remove("current-chart"),
          o.classList.add("current-chart"),
          setTimeout(function () {
            (r.style.display = "none"),
              r.classList.remove("fade-out", "animate-in"),
              (o.style.display = "block"),
              setTimeout(function () {
                o.classList.add("animate-in");
              }, 100);
          }, 200));
      };
  },
  function (t, e, n) {
    var r, o;
    void 0 ===
      (o =
        "function" ==
        typeof (r = function (t) {
          "use strict";
          function o(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
            return Array.from(t);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
          var a = !1;
          if ("undefined" != typeof window) {
            var e = {
              get passive() {
                a = !0;
              },
            };
            window.addEventListener("testPassive", null, e),
              window.removeEventListener("testPassive", null, e);
          }
          var s =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            c = [],
            u = !1,
            l = -1,
            p = void 0,
            f = void 0,
            d = function (e) {
              return c.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            h = function (t) {
              var e = t || window.event;
              return (
                !!d(e.target) ||
                1 < e.touches.length ||
                (e.preventDefault && e.preventDefault(), !1)
              );
            },
            n = function () {
              setTimeout(function () {
                void 0 !== f &&
                  ((document.body.style.paddingRight = f), (f = void 0)),
                  void 0 !== p &&
                    ((document.body.style.overflow = p), (p = void 0));
              });
            };
          (t.disableBodyScroll = function (i, t) {
            if (s) {
              if (!i) return;
              if (
                i &&
                !c.some(function (t) {
                  return t.targetElement === i;
                })
              ) {
                var e = {
                  targetElement: i,
                  options: t || {},
                };
                (c = [].concat(o(c), [e])),
                  (i.ontouchstart = function (t) {
                    1 === t.targetTouches.length &&
                      (l = t.targetTouches[0].clientY);
                  }),
                  (i.ontouchmove = function (t) {
                    var e, n, r, o;
                    1 === t.targetTouches.length &&
                      ((n = i),
                      (o = (e = t).targetTouches[0].clientY - l),
                      !d(e.target) &&
                        (n && 0 === n.scrollTop && 0 < o
                          ? h(e)
                          : (r = n) &&
                            r.scrollHeight - r.scrollTop <= r.clientHeight &&
                            o < 0
                          ? h(e)
                          : e.stopPropagation()));
                  }),
                  u ||
                    (document.addEventListener(
                      "touchmove",
                      h,
                      a
                        ? {
                            passive: !1,
                          }
                        : void 0
                    ),
                    (u = !0));
              }
            } else {
              (r = t),
                setTimeout(function () {
                  if (void 0 === f) {
                    var t = !!r && !0 === r.reserveScrollBarGap,
                      e =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    t &&
                      0 < e &&
                      ((f = document.body.style.paddingRight),
                      (document.body.style.paddingRight = e + "px"));
                  }
                  void 0 === p &&
                    ((p = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var n = {
                targetElement: i,
                options: t || {},
              };
              c = [].concat(o(c), [n]);
            }
            var r;
          }),
            (t.clearAllBodyScrollLocks = function () {
              s
                ? (c.forEach(function (t) {
                    (t.targetElement.ontouchstart = null),
                      (t.targetElement.ontouchmove = null);
                  }),
                  u &&
                    (document.removeEventListener(
                      "touchmove",
                      h,
                      a
                        ? {
                            passive: !1,
                          }
                        : void 0
                    ),
                    (u = !1)),
                  (c = []),
                  (l = -1))
                : (n(), (c = []));
            }),
            (t.enableBodyScroll = function (e) {
              if (s) {
                if (!e) return;
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (c = c.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  u &&
                    0 === c.length &&
                    (document.removeEventListener(
                      "touchmove",
                      h,
                      a
                        ? {
                            passive: !1,
                          }
                        : void 0
                    ),
                    (u = !1));
              } else
                (c = c.filter(function (t) {
                  return t.targetElement !== e;
                })).length || n();
            });
        })
          ? r.apply(e, [e])
          : r) || (t.exports = o);
  },
  function (e, n, t) {
    (function () {
      "use strict";
      function t(i) {
        for (
          var t =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            a = {
              speed: 500,
              minDuration: 250,
              maxDuration: 1500,
              cancelOnUserAction: !0,
              element: window,
              horizontal: !1,
              onComplete: void 0,
              passive: !0,
              offset: 0,
            },
            e = Object.keys(a),
            n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n];
          void 0 !== t[r] && (a[r] = t[r]);
        }
        if (
          (!a.cancelOnUserAction &&
            a.passive &&
            ((a.passive = !1), t.passive && console),
          i instanceof HTMLElement)
        )
          if (t.element && t.element instanceof HTMLElement)
            i = a.horizontal
              ? i.getBoundingClientRect().left +
                t.element.scrollLeft -
                t.element.getBoundingClientRect().left
              : i.getBoundingClientRect().top +
                t.element.scrollTop -
                t.element.getBoundingClientRect().top;
          else if (a.horizontal) {
            var o = window.scrollX || document.documentElement.scrollLeft;
            i = o + i.getBoundingClientRect().left;
          } else {
            var s = window.scrollY || document.documentElement.scrollTop;
            i = s + i.getBoundingClientRect().top;
          }
        (i += a.offset), (a.isWindow = a.element === window);
        var c = null,
          u = 0,
          l = null;
        (l = a.isWindow
          ? a.horizontal
            ? ((c = window.scrollX || document.documentElement.scrollLeft),
              (u = window.scrollY || document.documentElement.scrollTop),
              Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.body.clientWidth,
                document.documentElement.clientWidth
              ) - window.innerWidth)
            : ((c = window.scrollY || document.documentElement.scrollTop),
              (u = window.scrollX || document.documentElement.scrollLeft),
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
              ) - window.innerHeight)
          : a.horizontal
          ? ((c = a.element.scrollLeft),
            a.element.scrollWidth - a.element.clientWidth)
          : ((c = a.element.scrollTop),
            a.element.scrollHeight - a.element.clientHeight)) < i && (i = l);
        var p = i - c;
        if (0 !== p) {
          var f = Math.abs(Math.round((p / 1e3) * a.speed));
          f < a.minDuration
            ? (f = a.minDuration)
            : f > a.maxDuration && (f = a.maxDuration);
          var d = Date.now(),
            h = null,
            m = null,
            v = {
              passive: a.passive,
            };
          a.cancelOnUserAction
            ? ((m = function () {
                g(), cancelAnimationFrame(h);
              }),
              window.addEventListener("keydown", m, v),
              window.addEventListener("mousedown", m, v))
            : ((m = function (t) {
                t.preventDefault();
              }),
              window.addEventListener("scroll", m, v)),
            window.addEventListener("wheel", m, v),
            window.addEventListener("touchstart", m, v);
          var g = function () {
              window.removeEventListener("wheel", m, v),
                window.removeEventListener("touchstart", m, v),
                a.cancelOnUserAction
                  ? (window.removeEventListener("keydown", m, v),
                    window.removeEventListener("mousedown", m, v))
                  : window.removeEventListener("scroll", m, v);
            },
            y = function () {
              var t = Date.now() - d,
                e = t / f - 1,
                n = e * e * e + 1,
                r = Math.round(c + p * n),
                o = function (t) {
                  a.isWindow
                    ? a.horizontal
                      ? a.element.scrollTo(t, u)
                      : a.element.scrollTo(u, t)
                    : a.horizontal
                    ? (a.element.scrollLeft = t)
                    : (a.element.scrollTop = t);
                };
              t < f && r !== i
                ? (o(r), (h = requestAnimationFrame(y)))
                : (o(i),
                  cancelAnimationFrame(h),
                  g(),
                  a.onComplete &&
                    "function" == typeof a.onComplete &&
                    a.onComplete());
            };
          h = requestAnimationFrame(y);
        } else
          a.onComplete && "function" == typeof a.onComplete && a.onComplete();
      }
      e.exports && ((e.exports = t), (n = e.exports)), (n.default = t);
    }.call(this));
  },
  function (t, e, n) {
    var i = n(65);
    t.exports = function (r, o, t) {
      if ((i(r), void 0 === o)) return r;
      switch (t) {
        case 0:
          return function () {
            return r.call(o);
          };
        case 1:
          return function (t) {
            return r.call(o, t);
          };
        case 2:
          return function (t, e) {
            return r.call(o, t, e);
          };
        case 3:
          return function (t, e, n) {
            return r.call(o, t, e, n);
          };
      }
      return function () {
        return r.apply(o, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(19),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(19);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    t.exports =
      !n(15) &&
      !n(5)(function () {
        return (
          7 !=
          Object.defineProperty(n(69)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(9),
      o = n(3).document,
      i = r(o) && r(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    t.exports = !n(5)(function () {
      return !String(Symbol());
    });
  },
  function (t, e, n) {
    var r = n(5),
      o = n(2)("species");
    t.exports = function (e) {
      return !r(function () {
        var t = [];
        return (
          ((t.constructor = {})[o] = function () {
            return {
              foo: 1,
            };
          }),
          1 !== t[e](Boolean).foo
        );
      });
    };
  },
  function (t, e, n) {
    t.exports = n(22)("native-function-to-string", Function.toString);
  },
  function (t, e, n) {
    var s = n(7),
      c = n(102),
      u = n(37),
      l = n(12);
    t.exports = function (t, e) {
      for (var n = c(e), r = l.f, o = u.f, i = 0; i < n.length; i++) {
        var a = n[i];
        s(t, a) || r(t, a, o(e, a));
      }
    };
  },
  function (t, e, n) {
    var a = n(7),
      s = n(20),
      c = n(50)(!1),
      u = n(40);
    t.exports = function (t, e) {
      var n,
        r = s(t),
        o = 0,
        i = [];
      for (n in r) !a(u, n) && a(r, n) && i.push(n);
      for (; e.length > o; ) a(r, (n = e[o++])) && (~c(i, n) || i.push(n));
      return i;
    };
  },
  function (t, e, n) {
    var r = n(46),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = s[a(t)];
        return n == u || (n != c && ("function" == typeof e ? r(e) : !!e));
      },
      a = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      s = (i.data = {}),
      c = (i.NATIVE = "N"),
      u = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, n) {
    "use strict";
    var r = n(50)(!0);
    n(6)(
      {
        target: "Array",
        proto: !0,
      },
      {
        includes: function (t) {
          return r(this, t, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    ),
      n(53)("includes");
  },
  function (t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !n ||
        !r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(55),
      o = n(56)("includes");
    n(6)(
      {
        target: "String",
        proto: !0,
        forced: !o,
      },
      {
        includes: function (t) {
          return !!~r(this, t, "includes").indexOf(
            t,
            1 < arguments.length ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(9),
      o = n(19),
      i = n(2)("match");
    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
    };
  },
  function (t, e, n) {
    var c = n(46),
      u = n(16);
    t.exports = function (t, e, n) {
      var r,
        o,
        i = String(u(t)),
        a = c(e),
        s = i.length;
      return a < 0 || s <= a
        ? n
          ? ""
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          56319 < r ||
          a + 1 === s ||
          (o = i.charCodeAt(a + 1)) < 56320 ||
          57343 < o
        ? n
          ? i.charAt(a)
          : r
        : n
        ? i.slice(a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  function (t, e, n) {
    var o = n(19),
      i = n(2)("toStringTag"),
      a =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var e, n, r;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (n = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? n
        : a
        ? o(e)
        : "Object" == (r = o(e)) && "function" == typeof e.callee
        ? "Arguments"
        : r;
    };
  },
  function (t, e, n) {
    "use strict";
    var o = n(81),
      r = n(38),
      i = n(84),
      a = r.set,
      s = r.getterFor("String Iterator");
    i(
      String,
      "String",
      function (t) {
        a(this, {
          type: "String Iterator",
          string: String(t),
          index: 0,
        });
      },
      function () {
        var t,
          e = s(this),
          n = e.string,
          r = e.index;
        return r >= n.length
          ? {
              value: void 0,
              done: !0,
            }
          : ((t = o(n, r, !0)),
            (e.index += t.length),
            {
              value: t,
              done: !1,
            });
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var g = n(6),
      y = n(119),
      b = n(86),
      w = n(87),
      x = n(58),
      S = n(8),
      E = n(21),
      O = n(36),
      k = n(2)("iterator"),
      T = n(25),
      r = n(85),
      A = r.IteratorPrototype,
      L = r.BUGGY_SAFARI_ITERATORS,
      C = function () {
        return this;
      };
    t.exports = function (t, e, n, r, o, i, a) {
      y(n, e, r);
      var s,
        c,
        u,
        l = function (t) {
          if (t === o && m) return m;
          if (!L && t in d) return d[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        p = e + " Iterator",
        f = !1,
        d = t.prototype,
        h = d[k] || d["@@iterator"] || (o && d[o]),
        m = (!L && h) || l(o),
        v = ("Array" == e && d.entries) || h;
      if (
        (v &&
          ((s = b(v.call(new t()))),
          A !== Object.prototype &&
            s.next &&
            (O ||
              b(s) === A ||
              (w ? w(s, A) : "function" != typeof s[k] && S(s, k, C)),
            x(s, p, !0, !0),
            O && (T[p] = C))),
        "values" == o &&
          h &&
          "values" !== h.name &&
          ((f = !0),
          (m = function () {
            return h.call(this);
          })),
        (O && !a) || d[k] === m || S(d, k, m),
        (T[e] = m),
        o)
      )
        if (
          ((c = {
            values: l("values"),
            keys: i ? m : l("keys"),
            entries: l("entries"),
          }),
          a)
        )
          for (u in c) (!L && !f && u in d) || E(d, u, c[u]);
        else
          g(
            {
              target: e,
              proto: !0,
              forced: L || f,
            },
            c
          );
      return c;
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      a = n(86),
      s = n(8),
      c = n(7),
      u = n(36),
      l = n(2)("iterator"),
      p = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (p = !0)),
      null == r && (r = {}),
      u ||
        c(r, l) ||
        s(r, l, function () {
          return this;
        }),
      (t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: p,
      });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(35),
      i = n(39)("IE_PROTO"),
      a = n(120),
      s = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? s
              : null
          );
        };
  },
  function (t, e, n) {
    var o = n(121);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var n,
              r = !1,
              t = {};
            try {
              (n = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(t, []),
                (r = t instanceof Array);
            } catch (n) {}
            return function (t, e) {
              return o(t, e), r ? n.call(t, e) : (t.__proto__ = e), t;
            };
          })()
        : void 0);
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    e.f = n(2);
  },
  function (t, e, n) {
    var r = n(133),
      o = n(7),
      i = n(89),
      a = n(12).f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) ||
        a(e, t, {
          value: i.f(t),
        });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(20),
      o = n(53),
      i = n(25),
      a = n(38),
      s = n(84),
      c = a.set,
      u = a.getterFor("Array Iterator");
    (t.exports = s(
      Array,
      "Array",
      function (t, e) {
        c(this, {
          type: "Array Iterator",
          target: r(t),
          index: 0,
          kind: e,
        });
      },
      function () {
        var t = u(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? {
              value: (t.target = void 0),
              done: !0,
            }
          : "keys" == n
          ? {
              value: r,
              done: !1,
            }
          : "values" == n
          ? {
              value: e[r],
              done: !1,
            }
          : {
              value: [r, e[r]],
              done: !1,
            };
      },
      "values"
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries");
  },
  function (t, e, n) {
    var r = n(150).Symbol;
    t.exports = r;
  },
  function (r, o, t) {
    (function (t) {
      var e, n;
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        (n = void 0 !== t ? t : "undefined" != typeof window ? window : this),
        void 0 ===
          (e = function () {
            return (function (s) {
              "use strict";
              var c = {
                  idPrefix: "tabby-toggle_",
                  default: "[data-tabby-default]",
                },
                u = function (o) {
                  if (o && "true" != o.getAttribute("aria-selected")) {
                    var t = document.querySelector(o.hash);
                    t &&
                      ((function (t) {
                        var e = o.closest('[role="tablist"]');
                        if (e) {
                          var n = e.querySelector(
                            '[role="tab"][aria-selected="true"]'
                          );
                          if (n) {
                            var r = document.querySelector(n.hash);
                            n.setAttribute("aria-selected", "false"),
                              n.setAttribute("tabindex", "-1"),
                              r && r.setAttribute("hidden", "hidden");
                          }
                        }
                      })(),
                      (i = t),
                      (r = o).setAttribute("aria-selected", "true"),
                      r.setAttribute("tabindex", "0"),
                      i.removeAttribute("hidden"),
                      r.focus(),
                      (e = o),
                      (n = new CustomEvent("tabby", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                          tab: e,
                          content: t,
                        },
                      })),
                      e.dispatchEvent(n));
                  }
                  var e, n, r, i;
                };
              return function (n, t) {
                var i,
                  e,
                  r = {
                    destroy: function () {
                      var t = e.querySelectorAll("a");
                      Array.prototype.forEach.call(t, function (t) {
                        var e,
                          n,
                          r,
                          o = document.querySelector(t.hash);
                        o &&
                          ((n = o),
                          (r = i),
                          (e = t).id.slice(0, r.idPrefix.length) ===
                            r.idPrefix && (e.id = ""),
                          e.removeAttribute("role"),
                          e.removeAttribute("aria-controls"),
                          e.removeAttribute("aria-selected"),
                          e.removeAttribute("tabindex"),
                          e.closest("li").removeAttribute("role"),
                          n.removeAttribute("role"),
                          n.removeAttribute("aria-labelledby"),
                          n.removeAttribute("hidden"));
                      }),
                        e.removeAttribute("role"),
                        document.documentElement.removeEventListener(
                          "click",
                          o,
                          !0
                        ),
                        e.removeEventListener("keydown", a, !0),
                        (e = i = null);
                    },
                    setup: function () {
                      if ((e = document.querySelector(n))) {
                        var t = e.querySelectorAll("a");
                        e.setAttribute("role", "tablist"),
                          Array.prototype.forEach.call(t, function (t) {
                            var e,
                              n,
                              r,
                              o = document.querySelector(t.hash);
                            o &&
                              ((n = o),
                              (r = i),
                              (e = t).id || (e.id = r.idPrefix + n.id),
                              e.setAttribute("role", "tab"),
                              e.setAttribute("aria-controls", n.id),
                              e
                                .closest("li")
                                .setAttribute("role", "presentation"),
                              n.setAttribute("role", "tabpanel"),
                              n.setAttribute("aria-labelledby", e.id),
                              e.matches(r.default)
                                ? e.setAttribute("aria-selected", "true")
                                : (e.setAttribute("aria-selected", "false"),
                                  e.setAttribute("tabindex", "-1"),
                                  n.setAttribute("hidden", "hidden")));
                          });
                      }
                    },
                    toggle: function (t) {
                      var e = t;
                      "string" == typeof t &&
                        (e = document.querySelector(
                          n + ' [role="tab"][href*="' + t + '"]'
                        )),
                        u(e);
                    },
                  },
                  o = function (t) {
                    var e = t.target.closest(n + ' [role="tab"]');
                    e && (t.preventDefault(), u(e));
                  },
                  a = function (t) {
                    var e = document.activeElement;
                    e.matches(n + ' [role="tab"]') &&
                      ([
                        "ArrowUp",
                        "ArrowDown",
                        "ArrowLeft",
                        "ArrowRight",
                        "Up",
                        "Down",
                        "Left",
                        "Right",
                        "Home",
                        "End",
                      ].indexOf(t.key) < 0 ||
                        (function (t, e) {
                          var n = (function (t) {
                            var e = t.closest('[role="tablist"]'),
                              n = e ? e.querySelectorAll('[role="tab"]') : null;
                            if (n)
                              return {
                                tabs: n,
                                index: Array.prototype.indexOf.call(n, t),
                              };
                          })(t);
                          if (n) {
                            var r,
                              o = n.tabs.length - 1;
                            -1 <
                            ["ArrowUp", "ArrowLeft", "Up", "Left"].indexOf(e)
                              ? (r = n.index < 1 ? o : n.index - 1)
                              : -1 <
                                [
                                  "ArrowDown",
                                  "ArrowRight",
                                  "Down",
                                  "Right",
                                ].indexOf(e)
                              ? (r = n.index === o ? 0 : n.index + 1)
                              : "Home" === e
                              ? (r = 0)
                              : "End" === e && (r = o),
                              u(n.tabs[r]);
                          }
                        })(e, t.key));
                  };
                return (
                  (i = (function () {
                    var n = {};
                    return (
                      Array.prototype.forEach.call(arguments, function (t) {
                        for (var e in t) {
                          if (!t.hasOwnProperty(e)) return;
                          n[e] = t[e];
                        }
                      }),
                      n
                    );
                  })(c, t || {})),
                  r.setup(),
                  (function (t) {
                    if (!(s.location.hash.length < 1)) {
                      var e = document.querySelector(
                        t + ' [role="tab"][href*="' + s.location.hash + '"]'
                      );
                      u(e);
                    }
                  })(n),
                  document.documentElement.addEventListener("click", o, !0),
                  e.addEventListener("keydown", a, !0),
                  r
                );
              };
            })(n);
          }.apply(o, [])) || (r.exports = e);
    }.call(this, t(43)));
  },
  function (t, Q, e) {
    "use strict";
    (function (t) {
      for (
        var e = "undefined" != typeof window && "undefined" != typeof document,
          n = ["Edge", "Trident", "Firefox"],
          r = 0,
          o = 0;
        o < n.length;
        o += 1
      )
        if (e && 0 <= navigator.userAgent.indexOf(n[o])) {
          r = 1;
          break;
        }
      var a =
        e && window.Promise
          ? function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function () {
                    (e = !1), t();
                  }));
              };
            }
          : function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  setTimeout(function () {
                    (e = !1), t();
                  }, r));
              };
            };
      function s(t) {
        return t && "[object Function]" === {}.toString.call(t);
      }
      function w(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
      }
      function d(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
      }
      function h(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
          case "HTML":
          case "BODY":
            return t.ownerDocument.body;
          case "#document":
            return t.body;
        }
        var e = w(t),
          n = e.overflow,
          r = e.overflowX,
          o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + r) ? t : h(d(t));
      }
      var i = e && !(!window.MSInputMethodContext || !document.documentMode),
        c = e && /MSIE 10/.test(navigator.userAgent);
      function m(t) {
        return 11 === t ? i : 10 === t ? c : i || c;
      }
      function M(t) {
        if (!t) return document.documentElement;
        for (
          var e = m(10) ? document.body : null, n = t.offsetParent || null;
          n === e && t.nextElementSibling;

        )
          n = (t = t.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r
          ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
            "static" === w(n, "position")
            ? M(n)
            : n
          : t
          ? t.ownerDocument.documentElement
          : document.documentElement;
      }
      function l(t) {
        return null !== t.parentNode ? l(t.parentNode) : t;
      }
      function v(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
          return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? t : e,
          o = n ? e : t,
          i = document.createRange();
        i.setStart(r, 0), i.setEnd(o, 0);
        var a,
          s,
          c = i.commonAncestorContainer;
        if ((t !== c && e !== c) || r.contains(o))
          return "BODY" === (s = (a = c).nodeName) ||
            ("HTML" !== s && M(a.firstElementChild) !== a)
            ? M(c)
            : c;
        var u = l(t);
        return u.host ? v(u.host, e) : v(t, l(e).host);
      }
      function g(t) {
        var e =
            "top" ===
            (1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : "top")
              ? "scrollTop"
              : "scrollLeft",
          n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n) return t[e];
        var r = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || r)[e];
      }
      function p(t, e) {
        var n = "x" === e ? "Left" : "Top",
          r = "Left" === n ? "Right" : "Bottom";
        return (
          parseFloat(t["border" + n + "Width"], 10) +
          parseFloat(t["border" + r + "Width"], 10)
        );
      }
      function u(t, e, n, r) {
        return Math.max(
          e["offset" + t],
          e["scroll" + t],
          n["client" + t],
          n["offset" + t],
          n["scroll" + t],
          m(10)
            ? parseInt(n["offset" + t]) +
                parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) +
                parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")])
            : 0
        );
      }
      function y(t) {
        var e = t.body,
          n = t.documentElement,
          r = m(10) && getComputedStyle(n);
        return {
          height: u("Height", e, n, r),
          width: u("Width", e, n, r),
        };
      }
      var f = (function () {
          function r(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t;
          };
        })(),
        x = function (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        },
        D =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          };
      function S(t) {
        return D({}, t, {
          right: t.left + t.width,
          bottom: t.top + t.height,
        });
      }
      function _(t) {
        var e = {};
        try {
          if (m(10)) {
            e = t.getBoundingClientRect();
            var n = g(t, "top"),
              r = g(t, "left");
            (e.top += n), (e.left += r), (e.bottom += n), (e.right += r);
          } else e = t.getBoundingClientRect();
        } catch (t) {}
        var o = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top,
          },
          i = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
          a = i.width || t.clientWidth || o.right - o.left,
          s = i.height || t.clientHeight || o.bottom - o.top,
          c = t.offsetWidth - a,
          u = t.offsetHeight - s;
        if (c || u) {
          var l = w(t);
          (c -= p(l, "x")), (u -= p(l, "y")), (o.width -= c), (o.height -= u);
        }
        return S(o);
      }
      function b(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          r = m(10),
          o = "HTML" === e.nodeName,
          i = _(t),
          a = _(e),
          s = h(t),
          c = w(e),
          u = parseFloat(c.borderTopWidth, 10),
          l = parseFloat(c.borderLeftWidth, 10);
        n &&
          o &&
          ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var p = S({
          top: i.top - a.top - u,
          left: i.left - a.left - l,
          width: i.width,
          height: i.height,
        });
        if (((p.marginTop = 0), (p.marginLeft = 0), !r && o)) {
          var f = parseFloat(c.marginTop, 10),
            d = parseFloat(c.marginLeft, 10);
          (p.top -= u - f),
            (p.bottom -= u - f),
            (p.left -= l - d),
            (p.right -= l - d),
            (p.marginTop = f),
            (p.marginLeft = d);
        }
        return (
          (r && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
            (p = (function (t, e) {
              var n =
                  2 < arguments.length &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = g(e, "top"),
                o = g(e, "left"),
                i = n ? -1 : 1;
              return (
                (t.top += r * i),
                (t.bottom += r * i),
                (t.left += o * i),
                (t.right += o * i),
                t
              );
            })(p, e)),
          p
        );
      }
      function E(t) {
        if (!t || !t.parentElement || m()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === w(e, "transform"); )
          e = e.parentElement;
        return e || document.documentElement;
      }
      function O(t, e, n, r) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
          i = {
            top: 0,
            left: 0,
          },
          a = o ? E(t) : v(t, e);
        if ("viewport" === r)
          i = (function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              n = t.ownerDocument.documentElement,
              r = b(t, n),
              o = Math.max(n.clientWidth, window.innerWidth || 0),
              i = Math.max(n.clientHeight, window.innerHeight || 0),
              a = e ? 0 : g(n),
              s = e ? 0 : g(n, "left");
            return S({
              top: a - r.top + r.marginTop,
              left: s - r.left + r.marginLeft,
              width: o,
              height: i,
            });
          })(a, o);
        else {
          var s = void 0;
          "scrollParent" === r
            ? "BODY" === (s = h(d(e))).nodeName &&
              (s = t.ownerDocument.documentElement)
            : (s = "window" === r ? t.ownerDocument.documentElement : r);
          var c = b(s, a, o);
          if (
            "HTML" !== s.nodeName ||
            (function t(e) {
              var n = e.nodeName;
              if ("BODY" === n || "HTML" === n) return !1;
              if ("fixed" === w(e, "position")) return !0;
              var r = d(e);
              return !!r && t(r);
            })(a)
          )
            i = c;
          else {
            var u = y(t.ownerDocument),
              l = u.height,
              p = u.width;
            (i.top += c.top - c.marginTop),
              (i.bottom = l + c.top),
              (i.left += c.left - c.marginLeft),
              (i.right = p + c.left);
          }
        }
        var f = "number" == typeof (n = n || 0);
        return (
          (i.left += f ? n : n.left || 0),
          (i.top += f ? n : n.top || 0),
          (i.right -= f ? n : n.right || 0),
          (i.bottom -= f ? n : n.bottom || 0),
          i
        );
      }
      function k(t, e, r, n, o) {
        var i =
          5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = O(r, n, i, o),
          s = {
            top: {
              width: a.width,
              height: e.top - a.top,
            },
            right: {
              width: a.right - e.right,
              height: a.height,
            },
            bottom: {
              width: a.width,
              height: a.bottom - e.bottom,
            },
            left: {
              width: e.left - a.left,
              height: a.height,
            },
          },
          c = Object.keys(s)
            .map(function (t) {
              return D(
                {
                  key: t,
                },
                s[t],
                {
                  area: ((e = s[t]), e.width * e.height),
                }
              );
              var e;
            })
            .sort(function (t, e) {
              return e.area - t.area;
            }),
          u = c.filter(function (t) {
            var e = t.width,
              n = t.height;
            return e >= r.clientWidth && n >= r.clientHeight;
          }),
          l = 0 < u.length ? u[0].key : c[0].key,
          p = t.split("-")[1];
        return l + (p ? "-" + p : "");
      }
      function T(t, e, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return b(n, r ? E(e) : v(e, n), r);
      }
      function A(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
          n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
          r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
          width: t.offsetWidth + r,
          height: t.offsetHeight + n,
        };
      }
      function L(t) {
        var e = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom",
        };
        return t.replace(/left|right|bottom|top/g, function (t) {
          return e[t];
        });
      }
      function C(t, e, n) {
        n = n.split("-")[0];
        var r = A(t),
          o = {
            width: r.width,
            height: r.height,
          },
          i = -1 !== ["right", "left"].indexOf(n),
          a = i ? "top" : "left",
          s = i ? "left" : "top",
          c = i ? "height" : "width",
          u = i ? "width" : "height";
        return (
          (o[a] = e[a] + e[c] / 2 - r[c] / 2),
          (o[s] = n === s ? e[s] - r[u] : e[L(s)]),
          o
        );
      }
      function q(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
      }
      function j(t, n, e) {
        return (
          (void 0 === e
            ? t
            : t.slice(
                0,
                (function (t, e, n) {
                  if (Array.prototype.findIndex)
                    return t.findIndex(function (t) {
                      return t.name === n;
                    });
                  var r = q(t, function (t) {
                    return t.name === n;
                  });
                  return t.indexOf(r);
                })(t, 0, e)
              )
          ).forEach(function (t) {
            t.function;
            var e = t.function || t.fn;
            t.enabled &&
              s(e) &&
              ((n.offsets.popper = S(n.offsets.popper)),
              (n.offsets.reference = S(n.offsets.reference)),
              (n = e(n, t)));
          }),
          n
        );
      }
      function I(t, n) {
        return t.some(function (t) {
          var e = t.name;
          return t.enabled && e === n;
        });
      }
      function z(t) {
        for (
          var e = [!1, "ms", "Webkit", "Moz", "O"],
            n = t.charAt(0).toUpperCase() + t.slice(1),
            r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r],
            i = o ? "" + o + n : t;
          if (void 0 !== document.body.style[i]) return i;
        }
        return null;
      }
      function P(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
      }
      function N(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
      }
      function H(n, r) {
        Object.keys(r).forEach(function (t) {
          var e = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
            N(r[t]) &&
            (e = "px"),
            (n.style[t] = r[t] + e);
        });
      }
      var F = e && /Firefox/i.test(navigator.userAgent);
      function B(t, e, n) {
        var r = q(t, function (t) {
            return t.name === e;
          }),
          o =
            !!r &&
            t.some(function (t) {
              return t.name === n && t.enabled && t.order < r.order;
            });
        if (!o);
        return o;
      }
      var R = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
        W = R.slice(3);
      function Y(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = W.indexOf(t),
          r = W.slice(n + 1).concat(W.slice(0, n));
        return e ? r.reverse() : r;
      }
      var X = "flip",
        V = "clockwise",
        U = "counterclockwise";
      var G = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (t) {
                var e = t.placement,
                  n = e.split("-")[0],
                  r = e.split("-")[1];
                if (r) {
                  var o = t.offsets,
                    i = o.reference,
                    a = o.popper,
                    s = -1 !== ["bottom", "top"].indexOf(n),
                    c = s ? "left" : "top",
                    u = s ? "width" : "height",
                    l = {
                      start: x({}, c, i[c]),
                      end: x({}, c, i[c] + i[u] - a[u]),
                    };
                  t.offsets.popper = D({}, a, l[r]);
                }
                return t;
              },
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (t, e) {
                var n,
                  r = e.offset,
                  o = t.placement,
                  i = t.offsets,
                  a = i.popper,
                  s = i.reference,
                  c = o.split("-")[0];
                return (
                  (n = N(+r)
                    ? [+r, 0]
                    : (function (t, o, i, e) {
                        var a = [0, 0],
                          s = -1 !== ["right", "left"].indexOf(e),
                          n = t.split(/(\+|\-)/).map(function (t) {
                            return t.trim();
                          }),
                          r = n.indexOf(
                            q(n, function (t) {
                              return -1 !== t.search(/,|\s/);
                            })
                          );
                        n[r] && n[r].indexOf(",");
                        var c = /\s*,\s*|\s+/,
                          u =
                            -1 !== r
                              ? [
                                  n.slice(0, r).concat([n[r].split(c)[0]]),
                                  [n[r].split(c)[1]].concat(n.slice(r + 1)),
                                ]
                              : [n];
                        return (
                          (u = u.map(function (t, e) {
                            var n = (1 === e ? !s : s) ? "height" : "width",
                              r = !1;
                            return t
                              .reduce(function (t, e) {
                                return "" === t[t.length - 1] &&
                                  -1 !== ["+", "-"].indexOf(e)
                                  ? ((t[t.length - 1] = e), (r = !0), t)
                                  : r
                                  ? ((t[t.length - 1] += e), (r = !1), t)
                                  : t.concat(e);
                              }, [])
                              .map(function (t) {
                                return (function (t, e, n, r) {
                                  var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    i = +o[1],
                                    a = o[2];
                                  if (!i) return t;
                                  if (0 !== a.indexOf("%"))
                                    return "vh" === a || "vw" === a
                                      ? (("vh" === a
                                          ? Math.max(
                                              document.documentElement
                                                .clientHeight,
                                              window.innerHeight || 0
                                            )
                                          : Math.max(
                                              document.documentElement
                                                .clientWidth,
                                              window.innerWidth || 0
                                            )) /
                                          100) *
                                          i
                                      : i;
                                  var s = void 0;
                                  switch (a) {
                                    case "%p":
                                      s = n;
                                      break;
                                    case "%":
                                    case "%r":
                                    default:
                                      s = r;
                                  }
                                  return (S(s)[e] / 100) * i;
                                })(t, n, o, i);
                              });
                          })).forEach(function (n, r) {
                            n.forEach(function (t, e) {
                              N(t) && (a[r] += t * ("-" === n[e - 1] ? -1 : 1));
                            });
                          }),
                          a
                        );
                      })(r, a, s, c)),
                  "left" === c
                    ? ((a.top += n[0]), (a.left -= n[1]))
                    : "right" === c
                    ? ((a.top += n[0]), (a.left += n[1]))
                    : "top" === c
                    ? ((a.left += n[0]), (a.top -= n[1]))
                    : "bottom" === c && ((a.left += n[0]), (a.top += n[1])),
                  (t.popper = a),
                  t
                );
              },
              offset: 0,
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (t, r) {
                var e = r.boundariesElement || M(t.instance.popper);
                t.instance.reference === e && (e = M(e));
                var n = z("transform"),
                  o = t.instance.popper.style,
                  i = o.top,
                  a = o.left,
                  s = o[n];
                (o.top = ""), (o.left = ""), (o[n] = "");
                var c = O(
                  t.instance.popper,
                  t.instance.reference,
                  r.padding,
                  e,
                  t.positionFixed
                );
                (o.top = i), (o.left = a), (o[n] = s), (r.boundaries = c);
                var u = r.priority,
                  l = t.offsets.popper,
                  p = {
                    primary: function (t) {
                      var e = l[t];
                      return (
                        l[t] < c[t] &&
                          !r.escapeWithReference &&
                          (e = Math.max(l[t], c[t])),
                        x({}, t, e)
                      );
                    },
                    secondary: function (t) {
                      var e = "right" === t ? "left" : "top",
                        n = l[e];
                      return (
                        l[t] > c[t] &&
                          !r.escapeWithReference &&
                          (n = Math.min(
                            l[e],
                            c[t] - ("right" === t ? l.width : l.height)
                          )),
                        x({}, e, n)
                      );
                    },
                  };
                return (
                  u.forEach(function (t) {
                    var e =
                      -1 !== ["left", "top"].indexOf(t)
                        ? "primary"
                        : "secondary";
                    l = D({}, l, p[e](t));
                  }),
                  (t.offsets.popper = l),
                  t
                );
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (t) {
                var e = t.offsets,
                  n = e.popper,
                  r = e.reference,
                  o = t.placement.split("-")[0],
                  i = Math.floor,
                  a = -1 !== ["top", "bottom"].indexOf(o),
                  s = a ? "right" : "bottom",
                  c = a ? "left" : "top",
                  u = a ? "width" : "height";
                return (
                  n[s] < i(r[c]) && (t.offsets.popper[c] = i(r[c]) - n[u]),
                  n[c] > i(r[s]) && (t.offsets.popper[c] = i(r[s])),
                  t
                );
              },
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (t, e) {
                var n;
                if (!B(t.instance.modifiers, "arrow", "keepTogether")) return t;
                var r = e.element;
                if ("string" == typeof r) {
                  if (!(r = t.instance.popper.querySelector(r))) return t;
                } else if (!t.instance.popper.contains(r)) return t;
                var o = t.placement.split("-")[0],
                  i = t.offsets,
                  a = i.popper,
                  s = i.reference,
                  c = -1 !== ["left", "right"].indexOf(o),
                  u = c ? "height" : "width",
                  l = c ? "Top" : "Left",
                  p = l.toLowerCase(),
                  f = c ? "left" : "top",
                  d = c ? "bottom" : "right",
                  h = A(r)[u];
                s[d] - h < a[p] && (t.offsets.popper[p] -= a[p] - (s[d] - h)),
                  s[p] + h > a[d] && (t.offsets.popper[p] += s[p] + h - a[d]),
                  (t.offsets.popper = S(t.offsets.popper));
                var m = s[p] + s[u] / 2 - h / 2,
                  v = w(t.instance.popper),
                  g = parseFloat(v["margin" + l], 10),
                  y = parseFloat(v["border" + l + "Width"], 10),
                  b = m - t.offsets.popper[p] - g - y;
                return (
                  (b = Math.max(Math.min(a[u] - h, b), 0)),
                  (t.arrowElement = r),
                  (t.offsets.arrow =
                    (x((n = {}), p, Math.round(b)), x(n, f, ""), n)),
                  t
                );
              },
              element: "[x-arrow]",
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (m, v) {
                if (I(m.instance.modifiers, "inner")) return m;
                if (m.flipped && m.placement === m.originalPlacement) return m;
                var g = O(
                    m.instance.popper,
                    m.instance.reference,
                    v.padding,
                    v.boundariesElement,
                    m.positionFixed
                  ),
                  y = m.placement.split("-")[0],
                  b = L(y),
                  w = m.placement.split("-")[1] || "",
                  x = [];
                switch (v.behavior) {
                  case X:
                    x = [y, b];
                    break;
                  case V:
                    x = Y(y);
                    break;
                  case U:
                    x = Y(y, !0);
                    break;
                  default:
                    x = v.behavior;
                }
                return (
                  x.forEach(function (t, e) {
                    if (y !== t || x.length === e + 1) return m;
                    (y = m.placement.split("-")[0]), (b = L(y));
                    var n = m.offsets.popper,
                      r = m.offsets.reference,
                      o = Math.floor,
                      i =
                        ("left" === y && o(n.right) > o(r.left)) ||
                        ("right" === y && o(n.left) < o(r.right)) ||
                        ("top" === y && o(n.bottom) > o(r.top)) ||
                        ("bottom" === y && o(n.top) < o(r.bottom)),
                      a = o(n.left) < o(g.left),
                      s = o(n.right) > o(g.right),
                      c = o(n.top) < o(g.top),
                      u = o(n.bottom) > o(g.bottom),
                      l =
                        ("left" === y && a) ||
                        ("right" === y && s) ||
                        ("top" === y && c) ||
                        ("bottom" === y && u),
                      p = -1 !== ["top", "bottom"].indexOf(y),
                      f =
                        !!v.flipVariations &&
                        ((p && "start" === w && a) ||
                          (p && "end" === w && s) ||
                          (!p && "start" === w && c) ||
                          (!p && "end" === w && u)),
                      d =
                        !!v.flipVariationsByContent &&
                        ((p && "start" === w && s) ||
                          (p && "end" === w && a) ||
                          (!p && "start" === w && u) ||
                          (!p && "end" === w && c)),
                      h = f || d;
                    (i || l || h) &&
                      ((m.flipped = !0),
                      (i || l) && (y = x[e + 1]),
                      h &&
                        (w = "end" === w ? "start" : "start" === w ? "end" : w),
                      (m.placement = y + (w ? "-" + w : "")),
                      (m.offsets.popper = D(
                        {},
                        m.offsets.popper,
                        C(m.instance.popper, m.offsets.reference, m.placement)
                      )),
                      (m = j(m.instance.modifiers, m, "flip")));
                  }),
                  m
                );
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (t) {
                var e = t.placement,
                  n = e.split("-")[0],
                  r = t.offsets,
                  o = r.popper,
                  i = r.reference,
                  a = -1 !== ["left", "right"].indexOf(n),
                  s = -1 === ["top", "left"].indexOf(n);
                return (
                  (o[a ? "left" : "top"] =
                    i[n] - (s ? o[a ? "width" : "height"] : 0)),
                  (t.placement = L(e)),
                  (t.offsets.popper = S(o)),
                  t
                );
              },
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (t) {
                if (!B(t.instance.modifiers, "hide", "preventOverflow"))
                  return t;
                var e = t.offsets.reference,
                  n = q(t.instance.modifiers, function (t) {
                    return "preventOverflow" === t.name;
                  }).boundaries;
                if (
                  e.bottom < n.top ||
                  e.left > n.right ||
                  e.top > n.bottom ||
                  e.right < n.left
                ) {
                  if (!0 === t.hide) return t;
                  (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                } else {
                  if (!1 === t.hide) return t;
                  (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                }
                return t;
              },
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (t, e) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u,
                  l,
                  p,
                  f,
                  d,
                  h,
                  m,
                  v,
                  g,
                  y = e.x,
                  b = e.y,
                  w = t.offsets.popper,
                  x = q(t.instance.modifiers, function (t) {
                    return "applyStyle" === t.name;
                  }).gpuAcceleration,
                  S = void 0 !== x ? x : e.gpuAcceleration,
                  E = M(t.instance.popper),
                  O = _(E),
                  k = {
                    position: w.position,
                  },
                  T =
                    ((o = t),
                    (i = window.devicePixelRatio < 2 || !F),
                    (a = o.offsets),
                    (s = a.popper),
                    (c = a.reference),
                    (u = Math.round),
                    (l = Math.floor),
                    (p = function (t) {
                      return t;
                    }),
                    (f = u(c.width)),
                    (d = u(s.width)),
                    (h = -1 !== ["left", "right"].indexOf(o.placement)),
                    (m = -1 !== o.placement.indexOf("-")),
                    (g = i ? u : p),
                    {
                      left: (v = i ? (h || m || f % 2 == d % 2 ? u : l) : p)(
                        f % 2 == 1 && d % 2 == 1 && !m && i
                          ? s.left - 1
                          : s.left
                      ),
                      top: g(s.top),
                      bottom: g(s.bottom),
                      right: v(s.right),
                    }),
                  A = "bottom" === y ? "top" : "bottom",
                  L = "right" === b ? "left" : "right",
                  C = z("transform");
                if (
                  ((r =
                    "bottom" === A
                      ? "HTML" === E.nodeName
                        ? -E.clientHeight + T.bottom
                        : -O.height + T.bottom
                      : T.top),
                  (n =
                    "right" === L
                      ? "HTML" === E.nodeName
                        ? -E.clientWidth + T.right
                        : -O.width + T.right
                      : T.left),
                  S && C)
                )
                  (k[C] = "translate3d(" + n + "px, " + r + "px, 0)"),
                    (k[A] = 0),
                    (k[L] = 0),
                    (k.willChange = "transform");
                else {
                  var j = "bottom" === A ? -1 : 1,
                    I = "right" === L ? -1 : 1;
                  (k[A] = r * j), (k[L] = n * I), (k.willChange = A + ", " + L);
                }
                var P = {
                  "x-placement": t.placement,
                };
                return (
                  (t.attributes = D({}, P, t.attributes)),
                  (t.styles = D({}, k, t.styles)),
                  (t.arrowStyles = D({}, t.offsets.arrow, t.arrowStyles)),
                  t
                );
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (t) {
                var e, n;
                return (
                  H(t.instance.popper, t.styles),
                  (e = t.instance.popper),
                  (n = t.attributes),
                  Object.keys(n).forEach(function (t) {
                    !1 !== n[t]
                      ? e.setAttribute(t, n[t])
                      : e.removeAttribute(t);
                  }),
                  t.arrowElement &&
                    Object.keys(t.arrowStyles).length &&
                    H(t.arrowElement, t.arrowStyles),
                  t
                );
              },
              onLoad: function (t, e, n, r, o) {
                var i = T(o, e, t, n.positionFixed),
                  a = k(
                    n.placement,
                    i,
                    e,
                    t,
                    n.modifiers.flip.boundariesElement,
                    n.modifiers.flip.padding
                  );
                return (
                  e.setAttribute("x-placement", a),
                  H(e, {
                    position: n.positionFixed ? "fixed" : "absolute",
                  }),
                  n
                );
              },
              gpuAcceleration: void 0,
            },
          },
        },
        $ = (function () {
          function i(t, e) {
            var n = this,
              r =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update);
              }),
              (this.update = a(this.update.bind(this))),
              (this.options = D({}, i.Defaults, r)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = e && e.jquery ? e[0] : e),
              (this.options.modifiers = {}),
              Object.keys(D({}, i.Defaults.modifiers, r.modifiers)).forEach(
                function (t) {
                  n.options.modifiers[t] = D(
                    {},
                    i.Defaults.modifiers[t] || {},
                    r.modifiers ? r.modifiers[t] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (t) {
                  return D(
                    {
                      name: t,
                    },
                    n.options.modifiers[t]
                  );
                })
                .sort(function (t, e) {
                  return t.order - e.order;
                })),
              this.modifiers.forEach(function (t) {
                t.enabled &&
                  s(t.onLoad) &&
                  t.onLoad(n.reference, n.popper, n.options, t, n.state);
              }),
              this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), (this.state.eventsEnabled = o);
          }
          return (
            f(i, [
              {
                key: "update",
                value: function () {
                  return function () {
                    if (!this.state.isDestroyed) {
                      var t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {},
                      };
                      (t.offsets.reference = T(
                        this.state,
                        this.popper,
                        this.reference,
                        this.options.positionFixed
                      )),
                        (t.placement = k(
                          this.options.placement,
                          t.offsets.reference,
                          this.popper,
                          this.reference,
                          this.options.modifiers.flip.boundariesElement,
                          this.options.modifiers.flip.padding
                        )),
                        (t.originalPlacement = t.placement),
                        (t.positionFixed = this.options.positionFixed),
                        (t.offsets.popper = C(
                          this.popper,
                          t.offsets.reference,
                          t.placement
                        )),
                        (t.offsets.popper.position = this.options.positionFixed
                          ? "fixed"
                          : "absolute"),
                        (t = j(this.modifiers, t)),
                        this.state.isCreated
                          ? this.options.onUpdate(t)
                          : ((this.state.isCreated = !0),
                            this.options.onCreate(t));
                    }
                  }.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return function () {
                    return (
                      (this.state.isDestroyed = !0),
                      I(this.modifiers, "applyStyle") &&
                        (this.popper.removeAttribute("x-placement"),
                        (this.popper.style.position = ""),
                        (this.popper.style.top = ""),
                        (this.popper.style.left = ""),
                        (this.popper.style.right = ""),
                        (this.popper.style.bottom = ""),
                        (this.popper.style.willChange = ""),
                        (this.popper.style[z("transform")] = "")),
                      this.disableEventListeners(),
                      this.options.removeOnDestroy &&
                        this.popper.parentNode.removeChild(this.popper),
                      this
                    );
                  }.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return function () {
                    this.state.eventsEnabled ||
                      (this.state = (function (t, e, n, r) {
                        (n.updateBound = r),
                          P(t).addEventListener("resize", n.updateBound, {
                            passive: !0,
                          });
                        var o = h(t);
                        return (
                          (function t(e, n, r, o) {
                            var i = "BODY" === e.nodeName,
                              a = i ? e.ownerDocument.defaultView : e;
                            a.addEventListener(n, r, {
                              passive: !0,
                            }),
                              i || t(h(a.parentNode), n, r, o),
                              o.push(a);
                          })(o, "scroll", n.updateBound, n.scrollParents),
                          (n.scrollElement = o),
                          (n.eventsEnabled = !0),
                          n
                        );
                      })(
                        this.reference,
                        this.options,
                        this.state,
                        this.scheduleUpdate
                      ));
                  }.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return function () {
                    var t, e;
                    this.state.eventsEnabled &&
                      (cancelAnimationFrame(this.scheduleUpdate),
                      (this.state =
                        ((t = this.reference),
                        (e = this.state),
                        P(t).removeEventListener("resize", e.updateBound),
                        e.scrollParents.forEach(function (t) {
                          t.removeEventListener("scroll", e.updateBound);
                        }),
                        (e.updateBound = null),
                        (e.scrollParents = []),
                        (e.scrollElement = null),
                        (e.eventsEnabled = !1),
                        e)));
                  }.call(this);
                },
              },
            ]),
            i
          );
        })();
      ($.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
        ($.placements = R),
        ($.Defaults = G),
        (Q.a = $);
    }.call(this, e(43)));
  },
  function (t, e, n) {
    window,
      (t.exports = (function (n) {
        var r = {};
        function o(t) {
          if (r[t]) return r[t].exports;
          var e = (r[t] = {
            i: t,
            l: !1,
            exports: {},
          });
          return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
        }
        return (
          (o.m = n),
          (o.c = r),
          (o.d = function (t, e, n) {
            o.o(t, e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: n,
              });
          }),
          (o.r = function (t) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module",
              }),
              Object.defineProperty(t, "__esModule", {
                value: !0,
              });
          }),
          (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (o.r(n),
              Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e,
              }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                o.d(
                  n,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return n;
          }),
          (o.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return o.d(e, "a", e), e;
          }),
          (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (o.p = ""),
          o((o.s = 47))
        );
      })([
        function (t, e) {
          t.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")();
        },
        function (t, e, n) {
          var r = n(11)("wks"),
            o = n(33),
            i = n(0).Symbol,
            a = n(54);
          t.exports = function (t) {
            return r[t] || (r[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
          };
        },
        function (t, e, n) {
          var r = n(5);
          t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object!");
            return t;
          };
        },
        function (t, e, n) {
          var r = n(8),
            o = n(21);
          t.exports = n(6)
            ? function (t, e, n) {
                return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                return (t[e] = n), t;
              };
        },
        function (t, e) {
          var n = {}.hasOwnProperty;
          t.exports = function (t, e) {
            return n.call(t, e);
          };
        },
        function (t, e) {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          };
        },
        function (t, e, n) {
          t.exports = !n(12)(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        function (t, e) {
          var n = {}.toString;
          t.exports = function (t) {
            return n.call(t).slice(8, -1);
          };
        },
        function (t, e, n) {
          var r = n(6),
            o = n(31),
            i = n(2),
            a = n(32),
            s = Object.defineProperty;
          e.f = r
            ? s
            : function (t, e, n) {
                if ((i(t), (e = a(e, !0)), i(n), o))
                  try {
                    return s(t, e, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
              };
        },
        function (t, e, n) {
          var s = n(0),
            c = n(3),
            u = n(14),
            l = n(19),
            p = n(57);
          t.exports = function (t, e) {
            var n,
              r,
              o,
              i,
              a = t.target;
            if (
              (n = t.global
                ? s
                : t.stat
                ? s[a] || l(a, {})
                : (s[a] || {}).prototype)
            )
              for (r in e) {
                if (((o = n[r]), (i = e[r]), !t.forced && void 0 !== o)) {
                  if (typeof i == typeof o) continue;
                  p(i, o);
                }
                (t.sham || (o && o.sham)) && c(i, "sham", !0),
                  u(n, r, i, t.unsafe);
              }
          };
        },
        function (t, e) {
          t.exports = {};
        },
        function (t, e, n) {
          var r = n(0),
            o = n(19),
            i = r["__core-js_shared__"] || o("__core-js_shared__", {});
          (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
          })("versions", []).push({
            version: "3.0.0-beta.3",
            mode: n(13) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
          });
        },
        function (t, e) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        function (t, e) {
          t.exports = !1;
        },
        function (t, e, n) {
          var o = n(0),
            i = n(3),
            a = n(4),
            s = n(19),
            r = n(34),
            c = n(15),
            u = c.get,
            l = c.enforce,
            p = String(r).split("toString");
          n(11)("inspectSource", function (t) {
            return r.call(t);
          }),
            (t.exports = function (t, e, n, r) {
              "function" == typeof n &&
                ("string" != typeof e || a(n, "name") || i(n, "name", e),
                (l(n).source = p.join("string" == typeof e ? e : ""))),
                t === o
                  ? s(e, n)
                  : r
                  ? t[e]
                    ? (t[e] = n)
                    : i(t, e, n)
                  : (delete t[e], i(t, e, n));
            })(Function.prototype, "toString", function () {
              return (
                ("function" == typeof this && u(this).source) || r.call(this)
              );
            });
        },
        function (t, e, n) {
          var r,
            o,
            i,
            a = n(0),
            s = n(34),
            c = n(5),
            u = n(3),
            l = n(4),
            p = n(22),
            f = n(23),
            d = a.WeakMap;
          if ("function" == typeof d && /native code/.test(s.call(d))) {
            var h = new d(),
              m = h.get,
              v = h.has,
              g = h.set;
            (r = function (t, e) {
              return g.call(h, t, e), e;
            }),
              (o = function (t) {
                return m.call(h, t) || {};
              }),
              (i = function (t) {
                return v.call(h, t);
              });
          } else {
            var y = p("state");
            (f[y] = !0),
              (r = function (t, e) {
                return u(t, y, e), e;
              }),
              (o = function (t) {
                return l(t, y) ? t[y] : {};
              }),
              (i = function (t) {
                return l(t, y);
              });
          }
          t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (t) {
              return i(t) ? o(t) : r(t, {});
            },
            getterFor: function (n) {
              return function (t) {
                var e;
                if (!c(t) || (e = o(t)).type !== n)
                  throw TypeError("Incompatible receiver, " + n + " required!");
                return e;
              };
            },
          };
        },
        function (t, e, n) {
          var r = n(60),
            o = n(25);
          t.exports = function (t) {
            return r(o(t));
          };
        },
        function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t)
              throw TypeError(String(t) + " is not a function!");
            return t;
          };
        },
        function (t, e, n) {
          "use strict";
          var o = n(17);
          t.exports.f = function (t) {
            return new (function (t) {
              var n, r;
              (this.promise = new t(function (t, e) {
                if (void 0 !== n || void 0 !== r)
                  throw TypeError("Bad Promise constructor");
                (n = t), (r = e);
              })),
                (this.resolve = o(n)),
                (this.reject = o(r));
            })(t);
          };
        },
        function (t, e, n) {
          var r = n(0),
            o = n(3);
          t.exports = function (e, n) {
            try {
              o(r, e, n);
            } catch (t) {
              r[e] = n;
            }
            return n;
          };
        },
        function (t, e, n) {
          var r = n(5),
            o = n(0).document,
            i = r(o) && r(o.createElement);
          t.exports = function (t) {
            return i ? o.createElement(t) : {};
          };
        },
        function (t, e) {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        function (t, e, n) {
          var r = n(11)("keys"),
            o = n(33);
          t.exports = function (t) {
            return r[t] || (r[t] = o(t));
          };
        },
        function (t, e) {
          t.exports = {};
        },
        function (t, e) {
          var n = Math.ceil,
            r = Math.floor;
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (0 < t ? r : n)(t);
          };
        },
        function (t, e) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
          };
        },
        function (t, e) {
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        function (t, e, n) {
          var r = n(8).f,
            o = n(4),
            i = n(1)("toStringTag");
          t.exports = function (t, e, n) {
            t &&
              !o((t = n ? t : t.prototype), i) &&
              r(t, i, {
                configurable: !0,
                value: e,
              });
          };
        },
        function (t, e) {
          t.exports = function (t) {
            try {
              return {
                e: !1,
                v: t(),
              };
            } catch (t) {
              return {
                e: !0,
                v: t,
              };
            }
          };
        },
        function (t, e, n) {
          t.exports = n(0);
        },
        function (t, e, n) {
          var o = n(7),
            i = n(1)("toStringTag"),
            a =
              "Arguments" ==
              o(
                (function () {
                  return arguments;
                })()
              );
          t.exports = function (t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), i))
              ? n
              : a
              ? o(e)
              : "Object" == (r = o(e)) && "function" == typeof e.callee
              ? "Arguments"
              : r;
          };
        },
        function (t, e, n) {
          t.exports =
            !n(6) &&
            !n(12)(function () {
              return (
                7 !=
                Object.defineProperty(n(20)("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (t, e, n) {
          var o = n(5);
          t.exports = function (t, e) {
            if (!o(t)) return t;
            var n, r;
            if (
              e &&
              "function" == typeof (n = t.toString) &&
              !o((r = n.call(t)))
            )
              return r;
            if ("function" == typeof (n = t.valueOf) && !o((r = n.call(t))))
              return r;
            if (
              !e &&
              "function" == typeof (n = t.toString) &&
              !o((r = n.call(t)))
            )
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        function (t, e) {
          var n = 0,
            r = Math.random();
          t.exports = function (t) {
            return "Symbol(".concat(
              void 0 === t ? "" : t,
              ")_",
              (++n + r).toString(36)
            );
          };
        },
        function (t, e, n) {
          t.exports = n(11)("native-function-to-string", Function.toString);
        },
        function (t, e, n) {
          "use strict";
          var g = n(9),
            y = n(66),
            b = n(39),
            w = n(71),
            x = n(27),
            S = n(3),
            E = n(14),
            O = n(13),
            k = n(1)("iterator"),
            T = n(10),
            r = n(38),
            A = r.IteratorPrototype,
            L = r.BUGGY_SAFARI_ITERATORS,
            C = function () {
              return this;
            };
          t.exports = function (t, e, n, r, o, i, a) {
            y(n, e, r);
            var s,
              c,
              u,
              l = function (t) {
                if (t === o && m) return m;
                if (!L && t in d) return d[t];
                switch (t) {
                  case "keys":
                  case "values":
                  case "entries":
                    return function () {
                      return new n(this, t);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              p = e + " Iterator",
              f = !1,
              d = t.prototype,
              h = d[k] || d["@@iterator"] || (o && d[o]),
              m = (!L && h) || l(o),
              v = ("Array" == e && d.entries) || h;
            if (
              (v &&
                ((s = b(v.call(new t()))),
                A !== Object.prototype &&
                  s.next &&
                  (O ||
                    b(s) === A ||
                    (w ? w(s, A) : "function" != typeof s[k] && S(s, k, C)),
                  x(s, p, !0, !0),
                  O && (T[p] = C))),
              "values" == o &&
                h &&
                "values" !== h.name &&
                ((f = !0),
                (m = function () {
                  return h.call(this);
                })),
              (O && !a) || d[k] === m || S(d, k, m),
              (T[e] = m),
              o)
            )
              if (
                ((c = {
                  values: l("values"),
                  keys: i ? m : l("keys"),
                  entries: l("entries"),
                }),
                a)
              )
                for (u in c) (!L && !f && u in d) || E(d, u, c[u]);
              else
                g(
                  {
                    target: e,
                    proto: !0,
                    forced: L || f,
                  },
                  c
                );
            return c;
          };
        },
        function (t, e, n) {
          var a = n(4),
            s = n(16),
            c = n(61)(!1),
            u = n(23);
          t.exports = function (t, e) {
            var n,
              r = s(t),
              o = 0,
              i = [];
            for (n in r) !a(u, n) && a(r, n) && i.push(n);
            for (; e.length > o; )
              a(r, (n = e[o++])) && (~c(i, n) || i.push(n));
            return i;
          };
        },
        function (t, e, n) {
          var r = n(24),
            o = Math.min;
          t.exports = function (t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0;
          };
        },
        function (t, e, n) {
          "use strict";
          var r,
            o,
            i,
            a = n(39),
            s = n(3),
            c = n(4),
            u = n(13),
            l = n(1)("iterator"),
            p = !1;
          [].keys &&
            ("next" in (i = [].keys())
              ? (o = a(a(i))) !== Object.prototype && (r = o)
              : (p = !0)),
            null == r && (r = {}),
            u ||
              c(r, l) ||
              s(r, l, function () {
                return this;
              }),
            (t.exports = {
              IteratorPrototype: r,
              BUGGY_SAFARI_ITERATORS: p,
            });
        },
        function (t, e, n) {
          var r = n(4),
            o = n(67),
            i = n(22)("IE_PROTO"),
            a = n(68),
            s = Object.prototype;
          t.exports = a
            ? Object.getPrototypeOf
            : function (t) {
                return (
                  (t = o(t)),
                  r(t, i)
                    ? t[i]
                    : "function" == typeof t.constructor &&
                      t instanceof t.constructor
                    ? t.constructor.prototype
                    : t instanceof Object
                    ? s
                    : null
                );
              };
        },
        function (t, e, n) {
          var r = n(2),
            o = n(69),
            i = n(26),
            a = n(41),
            s = n(20),
            c = n(22)("IE_PROTO"),
            u = function () {},
            l = function () {
              var t,
                e = s("iframe"),
                n = i.length;
              for (
                e.style.display = "none",
                  a.appendChild(e),
                  e.src = "javascript:",
                  (t = e.contentWindow.document).open(),
                  t.write("<script>document.F=Object</script>"),
                  t.close(),
                  l = t.F;
                n--;

              )
                delete l.prototype[i[n]];
              return l();
            };
          (t.exports =
            Object.create ||
            function (t, e) {
              var n;
              return (
                null !== t
                  ? ((u.prototype = r(t)),
                    (n = new u()),
                    (u.prototype = null),
                    (n[c] = t))
                  : (n = l()),
                void 0 === e ? n : o(n, e)
              );
            }),
            (n(23)[c] = !0);
        },
        function (t, e, n) {
          var r = n(0).document;
          t.exports = r && r.documentElement;
        },
        function (t, e, n) {
          var p = n(2),
            f = n(79),
            d = n(37),
            h = n(43),
            m = n(80),
            v = n(81),
            g = {};
          (t.exports = function (t, e, n, r, o) {
            var i,
              a,
              s,
              c,
              u,
              l = h(e, n, r ? 2 : 1);
            if (o) i = t;
            else {
              if ("function" != typeof (a = m(t)))
                throw TypeError("Target is not iterable!");
              if (f(a)) {
                for (s = 0, c = d(t.length); s < c; s++)
                  if ((r ? l(p((u = t[s]))[0], u[1]) : l(t[s])) === g) return;
                return;
              }
              i = a.call(t);
            }
            for (; !(u = i.next()).done; )
              if (v(i, l, u.value, r) === g) return;
          }).BREAK = g;
        },
        function (t, e, n) {
          var i = n(17);
          t.exports = function (r, o, t) {
            if ((i(r), void 0 === o)) return r;
            switch (t) {
              case 0:
                return function () {
                  return r.call(o);
                };
              case 1:
                return function (t) {
                  return r.call(o, t);
                };
              case 2:
                return function (t, e) {
                  return r.call(o, t, e);
                };
              case 3:
                return function (t, e, n) {
                  return r.call(o, t, e, n);
                };
            }
            return function () {
              return r.apply(o, arguments);
            };
          };
        },
        function (t, e, n) {
          var o = n(2),
            i = n(17),
            a = n(1)("species");
          t.exports = function (t, e) {
            var n,
              r = o(t).constructor;
            return void 0 === r || null == (n = o(r)[a]) ? e : i(n);
          };
        },
        function (t, e, n) {
          var r,
            o,
            i,
            a = n(0),
            s = n(7),
            c = n(43),
            u = n(41),
            l = n(20),
            p = a.setImmediate,
            f = a.clearImmediate,
            d = a.process,
            h = a.MessageChannel,
            m = a.Dispatch,
            v = 0,
            g = {},
            y = function () {
              var t = +this;
              if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e();
              }
            },
            b = function (t) {
              y.call(t.data);
            };
          (p && f) ||
            ((p = function (t) {
              for (var e = [], n = 1; arguments.length > n; )
                e.push(arguments[n++]);
              return (
                (g[++v] = function () {
                  ("function" == typeof t ? t : Function(t)).apply(void 0, e);
                }),
                r(v),
                v
              );
            }),
            (f = function (t) {
              delete g[t];
            }),
            "process" == s(d)
              ? (r = function (t) {
                  d.nextTick(c(y, t, 1));
                })
              : m && m.now
              ? (r = function (t) {
                  m.now(c(y, t, 1));
                })
              : h
              ? ((i = (o = new h()).port2),
                (o.port1.onmessage = b),
                (r = c(i.postMessage, i, 1)))
              : a.addEventListener &&
                "function" == typeof postMessage &&
                !a.importScripts
              ? ((r = function (t) {
                  a.postMessage(t + "", "*");
                }),
                a.addEventListener("message", b, !1))
              : (r =
                  "onreadystatechange" in l("script")
                    ? function (t) {
                        u.appendChild(l("script")).onreadystatechange =
                          function () {
                            u.removeChild(this), y.call(t);
                          };
                      }
                    : function (t) {
                        setTimeout(c(y, t, 1), 0);
                      })),
            (t.exports = {
              set: p,
              clear: f,
            });
        },
        function (t, e, n) {
          var r = n(2),
            o = n(5),
            i = n(18);
          t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
          };
        },
        function (t, e, n) {
          "use strict";
          var r;
          Object.defineProperty(e, "__esModule", {
            value: !0,
          }),
            n(48),
            (r = n(50)) && r.__esModule;
          var o = n(91);
          e.default = o.BeerSlider;
        },
        function (t, e, n) {},
        ,
        function (t, e, n) {
          (t.exports = n(51)), n(89), n(90);
        },
        function (t, e, n) {
          n(52), n(55), n(73), n(77), n(88), (t.exports = n(29).Promise);
        },
        function (t, e, n) {
          var r = n(53);
          r !== {}.toString && n(14)(Object.prototype, "toString", r, !0);
        },
        function (t, e, n) {
          "use strict";
          var r = n(30),
            o = {};
          (o[n(1)("toStringTag")] = "z"),
            (t.exports =
              "[object z]" !== String(o)
                ? function () {
                    return "[object " + r(this) + "]";
                  }
                : o.toString);
        },
        function (t, e, n) {
          t.exports = !n(12)(function () {
            String(Symbol());
          });
        },
        function (t, e, n) {
          "use strict";
          var o = n(56)(!0),
            r = n(15),
            i = n(35),
            a = r.set,
            s = r.getterFor("String Iterator");
          i(
            String,
            "String",
            function (t) {
              a(this, {
                type: "String Iterator",
                string: String(t),
                index: 0,
              });
            },
            function () {
              var t,
                e = s(this),
                n = e.string,
                r = e.index;
              return r >= n.length
                ? {
                    value: void 0,
                    done: !0,
                  }
                : ((t = o(n, r)),
                  (e.index += t.length),
                  {
                    value: t,
                    done: !1,
                  });
            }
          );
        },
        function (t, e, n) {
          var c = n(24),
            u = n(25);
          t.exports = function (s) {
            return function (t, e) {
              var n,
                r,
                o = String(u(t)),
                i = c(e),
                a = o.length;
              return i < 0 || a <= i
                ? s
                  ? ""
                  : void 0
                : (n = o.charCodeAt(i)) < 55296 ||
                  56319 < n ||
                  i + 1 === a ||
                  (r = o.charCodeAt(i + 1)) < 56320 ||
                  57343 < r
                ? s
                  ? o.charAt(i)
                  : n
                : s
                ? o.slice(i, i + 2)
                : r - 56320 + ((n - 55296) << 10) + 65536;
            };
          };
        },
        function (t, e, n) {
          var s = n(4),
            c = n(58),
            u = n(64),
            l = n(8);
          t.exports = function (t, e) {
            for (var n = c(e), r = l.f, o = u.f, i = 0; i < n.length; i++) {
              var a = n[i];
              s(t, a) || r(t, a, o(e, a));
            }
          };
        },
        function (t, e, n) {
          var r = n(59),
            o = n(63),
            i = n(2),
            a = n(0).Reflect;
          t.exports =
            (a && a.ownKeys) ||
            function (t) {
              var e = r.f(i(t)),
                n = o.f;
              return n ? e.concat(n(t)) : e;
            };
        },
        function (t, e, n) {
          var r = n(36),
            o = n(26).concat("length", "prototype");
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return r(t, o);
            };
        },
        function (t, e, n) {
          var r = n(7),
            o = "".split;
          t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                return "String" == r(t) ? o.call(t, "") : Object(t);
              };
        },
        function (t, e, n) {
          var c = n(16),
            u = n(37),
            l = n(62);
          t.exports = function (s) {
            return function (t, e, n) {
              var r,
                o = c(t),
                i = u(o.length),
                a = l(n, i);
              if (s && e != e) {
                for (; a < i; ) if ((r = o[a++]) != r) return !0;
              } else
                for (; a < i; a++)
                  if ((s || a in o) && o[a] === e) return s || a || 0;
              return !s && -1;
            };
          };
        },
        function (t, e, n) {
          var r = n(24),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e);
          };
        },
        function (t, e) {
          e.f = Object.getOwnPropertySymbols;
        },
        function (t, e, n) {
          var r = n(6),
            o = n(65),
            i = n(21),
            a = n(16),
            s = n(32),
            c = n(4),
            u = n(31),
            l = Object.getOwnPropertyDescriptor;
          e.f = r
            ? l
            : function (t, e) {
                if (((t = a(t)), (e = s(e, !0)), u))
                  try {
                    return l(t, e);
                  } catch (t) {}
                if (c(t, e)) return i(!o.f.call(t, e), t[e]);
              };
        },
        function (t, e, n) {
          "use strict";
          var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i =
              o &&
              !r.call(
                {
                  1: 2,
                },
                1
              );
          e.f = i
            ? function (t) {
                var e = o(this, t);
                return !!e && e.enumerable;
              }
            : r;
        },
        function (t, e, n) {
          "use strict";
          var o = n(38).IteratorPrototype,
            i = n(40),
            a = n(21),
            s = n(27),
            c = n(10),
            u = function () {
              return this;
            };
          t.exports = function (t, e, n) {
            var r = e + " Iterator";
            return (
              (t.prototype = i(o, {
                next: a(1, n),
              })),
              s(t, r, !1, !0),
              (c[r] = u),
              t
            );
          };
        },
        function (t, e, n) {
          var r = n(25);
          t.exports = function (t) {
            return Object(r(t));
          };
        },
        function (t, e, n) {
          t.exports = !n(12)(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        function (t, e, n) {
          var r = n(6),
            a = n(8),
            s = n(2),
            c = n(70);
          t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                s(t);
                for (var n, r = c(e), o = r.length, i = 0; i < o; )
                  a.f(t, (n = r[i++]), e[n]);
                return t;
              };
        },
        function (t, e, n) {
          var r = n(36),
            o = n(26);
          t.exports =
            Object.keys ||
            function (t) {
              return r(t, o);
            };
        },
        function (t, e, n) {
          var o = n(72);
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var n,
                    t = {},
                    r = !0;
                  try {
                    (n = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set).call(t, []),
                      (r = t instanceof Array);
                  } catch (n) {
                    r = !1;
                  }
                  return function (t, e) {
                    return o(t, e), r ? n.call(t, e) : (t.__proto__ = e), t;
                  };
                })()
              : void 0);
        },
        function (t, e, n) {
          var r = n(5),
            o = n(2);
          t.exports = function (t, e) {
            if ((o(t), !r(e) && null !== e))
              throw TypeError(String(e) + ": can't set as a prototype!");
          };
        },
        function (t, e, n) {
          var r = n(74),
            o = n(75),
            i = n(0),
            a = n(3),
            s = n(1),
            c = s("iterator"),
            u = s("toStringTag"),
            l = o.values;
          for (var p in r) {
            var f = i[p],
              d = f && f.prototype;
            if (d) {
              if (d[c] !== l)
                try {
                  a(d, c, l);
                } catch (t) {
                  d[c] = l;
                }
              if ((d[u] || a(d, u, p), r[p]))
                for (var h in o)
                  if (d[h] !== o[h])
                    try {
                      a(d, h, o[h]);
                    } catch (t) {
                      d[h] = o[h];
                    }
            }
          }
        },
        function (t, e) {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        function (t, e, n) {
          "use strict";
          var r = n(16),
            o = n(76),
            i = n(10),
            a = n(15),
            s = n(35),
            c = a.set,
            u = a.getterFor("Array Iterator");
          (t.exports = s(
            Array,
            "Array",
            function (t, e) {
              c(this, {
                type: "Array Iterator",
                target: r(t),
                index: 0,
                kind: e,
              });
            },
            function () {
              var t = u(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
              return !e || r >= e.length
                ? {
                    value: (t.target = void 0),
                    done: !0,
                  }
                : "keys" == n
                ? {
                    value: r,
                    done: !1,
                  }
                : "values" == n
                ? {
                    value: e[r],
                    done: !1,
                  }
                : {
                    value: [r, e[r]],
                    done: !1,
                  };
            },
            "values"
          )),
            (i.Arguments = i.Array),
            o("keys"),
            o("values"),
            o("entries");
        },
        function (t, e, n) {
          var r = n(1)("unscopables"),
            o = n(40),
            i = n(3),
            a = Array.prototype;
          null == a[r] && i(a, r, o(null)),
            (t.exports = function (t) {
              a[r][t] = !0;
            });
        },
        function (t, e, n) {
          "use strict";
          var r,
            o,
            i,
            a = "Promise",
            s = n(13),
            c = n(0),
            u = n(9),
            l = n(5),
            p = n(17),
            f = n(78),
            d = n(7),
            h = n(42),
            m = n(82),
            v = n(44),
            g = n(45).set,
            y = n(83)(),
            b = n(46),
            w = n(84),
            x = n(18),
            S = n(28),
            E = n(85),
            O = n(1)("species"),
            k = n(15),
            T = k.get,
            A = k.set,
            L = k.getterFor(a),
            C = c.Promise,
            j = c.TypeError,
            I = c.document,
            P = c.process,
            M = P && P.versions,
            D = (M && M.v8) || "",
            _ = x.f,
            q = _,
            z = "process" == d(P),
            N = !!(I && I.createEvent && c.dispatchEvent),
            H = !!(function () {
              try {
                var t = C.resolve(1),
                  e = function () {},
                  n = ((t.constructor = {})[O] = function (t) {
                    t(e, e);
                  });
                return (
                  (z || "function" == typeof PromiseRejectionEvent) &&
                  (!s || t.finally) &&
                  t.then(e) instanceof n &&
                  0 !== D.indexOf("6.6") &&
                  -1 === E.indexOf("Chrome/66")
                );
              } catch (t) {}
            })(),
            F = function (t) {
              var e;
              return !(!l(t) || "function" != typeof (e = t.then)) && e;
            },
            B = function (l, p, n) {
              if (!p.notified) {
                p.notified = !0;
                var r = p.reactions;
                y(function () {
                  for (
                    var c = p.value,
                      u = 1 == p.state,
                      t = 0,
                      e = function (t) {
                        var e,
                          n,
                          r,
                          o = u ? t.ok : t.fail,
                          i = t.resolve,
                          a = t.reject,
                          s = t.domain;
                        try {
                          o
                            ? (u ||
                                (2 === p.rejection && X(l, p),
                                (p.rejection = 1)),
                              !0 === o
                                ? (e = c)
                                : (s && s.enter(),
                                  (e = o(c)),
                                  s && (s.exit(), (r = !0))),
                              e === t.promise
                                ? a(j("Promise-chain cycle"))
                                : (n = F(e))
                                ? n.call(e, i, a)
                                : i(e))
                            : a(c);
                        } catch (t) {
                          s && !r && s.exit(), a(t);
                        }
                      };
                    r.length > t;

                  )
                    e(r[t++]);
                  (p.reactions = []),
                    (p.notified = !1),
                    n && !p.rejection && W(l, p);
                });
              }
            },
            R = function (t, e, n) {
              var r, o;
              N
                ? (((r = I.createEvent("Event")).promise = e),
                  (r.reason = n),
                  r.initEvent(t, !1, !0),
                  c.dispatchEvent(r))
                : (r = {
                    promise: e,
                    reason: n,
                  }),
                (o = c["on" + t])
                  ? o(r)
                  : "unhandledrejection" === t &&
                    w("Unhandled promise rejection", n);
            },
            W = function (r, o) {
              g.call(c, function () {
                var t,
                  e = o.value,
                  n = Y(o);
                if (
                  (n &&
                    ((t = S(function () {
                      z
                        ? P.emit("unhandledRejection", e, r)
                        : R("unhandledrejection", r, e);
                    })),
                    (o.rejection = z || Y(o) ? 2 : 1)),
                  n && t.e)
                )
                  throw t.v;
              });
            },
            Y = function (t) {
              return 1 !== t.rejection && !t.parent;
            },
            X = function (t, e) {
              g.call(c, function () {
                z
                  ? P.emit("rejectionHandled", t)
                  : R("rejectionhandled", t, e.value);
              });
            },
            V = function (e, n, r, o) {
              return function (t) {
                e(n, r, t, o);
              };
            },
            U = function (t, e, n, r) {
              e.done ||
                ((e.done = !0),
                r && (e = r),
                (e.value = n),
                (e.state = 2),
                B(t, e, !0));
            },
            G = function (n, r, t, e) {
              if (!r.done) {
                (r.done = !0), e && (r = e);
                try {
                  if (n === t) throw j("Promise can't be resolved itself!");
                  var o = F(t);
                  o
                    ? y(function () {
                        var e = {
                          done: !1,
                        };
                        try {
                          o.call(t, V(G, n, e, r), V(U, n, e, r));
                        } catch (t) {
                          U(n, e, t, r);
                        }
                      })
                    : ((r.value = t), (r.state = 1), B(n, r, !1));
                } catch (t) {
                  U(
                    n,
                    {
                      done: !1,
                    },
                    t,
                    r
                  );
                }
              }
            };
          H ||
            ((C = function (t) {
              f(this, C, a), p(t), r.call(this);
              var e = T(this);
              try {
                t(V(G, this, e), V(U, this, e));
              } catch (t) {
                U(this, e, t);
              }
            }),
            ((r = function (t) {
              A(this, {
                type: a,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0,
              });
            }).prototype = n(86)(C.prototype, {
              then: function (t, e) {
                var n = L(this),
                  r = _(v(this, C));
                return (
                  (r.ok = "function" != typeof t || t),
                  (r.fail = "function" == typeof e && e),
                  (r.domain = z ? P.domain : void 0),
                  (n.parent = !0),
                  n.reactions.push(r),
                  0 != n.state && B(this, n, !1),
                  r.promise
                );
              },
              catch: function (t) {
                return this.then(void 0, t);
              },
            })),
            (o = function () {
              var t = new r(),
                e = T(t);
              (this.promise = t),
                (this.resolve = V(G, t, e)),
                (this.reject = V(U, t, e));
            }),
            (x.f = _ =
              function (t) {
                return t === C || t === i ? new o(t) : q(t);
              })),
            u(
              {
                global: !0,
                wrap: !0,
                forced: !H,
              },
              {
                Promise: C,
              }
            ),
            n(27)(C, a, !1, !0),
            n(87)(a),
            (i = n(29).Promise),
            u(
              {
                target: a,
                stat: !0,
                forced: !H,
              },
              {
                reject: function (t) {
                  var e = _(this);
                  return e.reject.call(void 0, t), e.promise;
                },
              }
            ),
            u(
              {
                target: a,
                stat: !0,
                forced: s || !H,
              },
              {
                resolve: function (t) {
                  return b(s && this === i ? C : this, t);
                },
              }
            ),
            u(
              {
                target: a,
                stat: !0,
                forced: !(
                  H &&
                  m(function (t) {
                    C.all(t).catch(function () {});
                  })
                ),
              },
              {
                all: function (t) {
                  var a = this,
                    e = _(a),
                    s = e.resolve,
                    c = e.reject,
                    n = S(function () {
                      var r = [],
                        o = 0,
                        i = 1;
                      h(t, function (t) {
                        var e = o++,
                          n = !1;
                        r.push(void 0),
                          i++,
                          a.resolve(t).then(function (t) {
                            n || ((n = !0), (r[e] = t), --i || s(r));
                          }, c);
                      }),
                        --i || s(r);
                    });
                  return n.e && c(n.v), e.promise;
                },
                race: function (t) {
                  var e = this,
                    n = _(e),
                    r = n.reject,
                    o = S(function () {
                      h(t, function (t) {
                        e.resolve(t).then(n.resolve, r);
                      });
                    });
                  return o.e && r(o.v), n.promise;
                },
              }
            );
        },
        function (t, e) {
          t.exports = function (t, e, n) {
            if (!(t instanceof e))
              throw TypeError((n ? n + ": i" : "I") + "ncorrect invocation!");
            return t;
          };
        },
        function (t, e, n) {
          var r = n(10),
            o = n(1)("iterator"),
            i = Array.prototype;
          t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t);
          };
        },
        function (t, e, n) {
          var r = n(30),
            o = n(1)("iterator"),
            i = n(10);
          t.exports = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
          };
        },
        function (t, e, n) {
          var i = n(2);
          t.exports = function (t, e, n, r) {
            try {
              return r ? e(i(n)[0], n[1]) : e(n);
            } catch (e) {
              var o = t.return;
              throw (void 0 !== o && i(o.call(t)), e);
            }
          };
        },
        function (t, e, n) {
          var o = n(1)("iterator"),
            i = !1;
          try {
            var r = 0,
              a = {
                next: function () {
                  return {
                    done: !!r++,
                  };
                },
                return: function () {
                  i = !0;
                },
              };
            (a[o] = function () {
              return this;
            }),
              Array.from(a, function () {
                throw 2;
              });
          } catch (t) {}
          t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
              var r = {};
              (r[o] = function () {
                return {
                  next: function () {
                    return {
                      done: (n = !0),
                    };
                  },
                };
              }),
                t(r);
            } catch (t) {}
            return n;
          };
        },
        function (t, e, n) {
          var s = n(0),
            r = n(7),
            c = n(45).set,
            u = s.MutationObserver || s.WebKitMutationObserver,
            l = s.process,
            p = s.Promise,
            f = "process" == r(l);
          t.exports = function () {
            var n,
              r,
              o,
              t = function () {
                var t, e;
                for (f && (t = l.domain) && t.exit(); n; ) {
                  (e = n.fn), (n = n.next);
                  try {
                    e();
                  } catch (t) {
                    throw (n ? o() : (r = void 0), t);
                  }
                }
                (r = void 0), t && t.enter();
              };
            if (f)
              o = function () {
                l.nextTick(t);
              };
            else if (!u || (s.navigator && s.navigator.standalone))
              if (p && p.resolve) {
                var e = p.resolve(void 0);
                o = function () {
                  e.then(t);
                };
              } else
                o = function () {
                  c.call(s, t);
                };
            else {
              var i = !0,
                a = document.createTextNode("");
              new u(t).observe(a, {
                characterData: !0,
              }),
                (o = function () {
                  a.data = i = !i;
                });
            }
            return function (t) {
              var e = {
                fn: t,
                next: void 0,
              };
              r && (r.next = e), n || ((n = e), o()), (r = e);
            };
          };
        },
        function (t, e, n) {
          var r = n(0);
          t.exports = function (t, e) {
            var n = r.console;
            n &&
              n.error &&
              (1 === arguments.length ? n.error(t) : n.error(t, e));
          };
        },
        function (t, e, n) {
          var r = n(0).navigator;
          t.exports = (r && r.userAgent) || "";
        },
        function (t, e, n) {
          var o = n(14);
          t.exports = function (t, e, n) {
            for (var r in e) o(t, r, e[r], n);
            return t;
          };
        },
        function (t, e, n) {
          "use strict";
          var r = n(0),
            o = n(8),
            i = n(6),
            a = n(1)("species");
          t.exports = function (t) {
            var e = r[t];
            i &&
              e &&
              !e[a] &&
              o.f(e, a, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        function (t, e, n) {
          "use strict";
          var r = n(29),
            o = n(0),
            i = n(44),
            a = n(46);
          n(9)(
            {
              target: "Promise",
              proto: !0,
              real: !0,
            },
            {
              finally: function (e) {
                var n = i(
                    this,
                    "function" == typeof r.Promise ? r.Promise : o.Promise
                  ),
                  t = "function" == typeof e;
                return this.then(
                  t
                    ? function (t) {
                        return a(n, e()).then(function () {
                          return t;
                        });
                      }
                    : e,
                  t
                    ? function (t) {
                        return a(n, e()).then(function () {
                          throw t;
                        });
                      }
                    : e
                );
              },
            }
          );
        },
        function (t, e, n) {
          "use strict";
          var o = n(18),
            i = n(28),
            c = n(42);
          n(9)(
            {
              target: "Promise",
              stat: !0,
            },
            {
              allSettled: function (t) {
                var a = this,
                  e = o.f(a),
                  s = e.resolve,
                  n = e.reject,
                  r = i(function () {
                    var r = [],
                      o = 0,
                      i = 1;
                    c(t, function (t) {
                      var e = o++,
                        n = !1;
                      r.push(void 0),
                        i++,
                        a.resolve(t).then(
                          function (t) {
                            n ||
                              ((n = !0),
                              (r[e] = {
                                value: t,
                                status: "fulfilled",
                              }),
                              --i || s(r));
                          },
                          function (t) {
                            n ||
                              ((n = !0),
                              (r[e] = {
                                reason: t,
                                status: "rejected",
                              }),
                              --i || s(r));
                          }
                        );
                    }),
                      --i || s(r);
                  });
                return r.e && n(r.v), e.promise;
              },
            }
          );
        },
        function (t, e, n) {
          "use strict";
          var r = n(18),
            o = n(28);
          n(9)(
            {
              target: "Promise",
              stat: !0,
            },
            {
              try: function (t) {
                var e = r.f(this),
                  n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise;
              },
            }
          );
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
          var r = (function () {
            function r(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (t, e, n) {
              return e && r(t.prototype, e), n && r(t, n), t;
            };
          })();
          e.BeerSlider = (function () {
            function a(t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.start,
                r = void 0 === n ? "50" : n,
                o = e.prefix,
                i = void 0 === o ? "beer" : o;
              !(function (t, e) {
                if (!(t instanceof a))
                  throw new TypeError("Cannot call a class as a function");
              })(this),
                (this.start = parseInt(r)
                  ? Math.min(100, Math.max(0, parseInt(r)))
                  : 50),
                (this.prefix = i),
                t &&
                  2 === t.children.length &&
                  ((this.element = t),
                  (this.revealContainer = this.element.children[1]),
                  this.revealContainer.children.length < 1 ||
                    ((this.revealElement = this.revealContainer.children[0]),
                    (this.range = this.addElement("input", {
                      type: "range",
                      class: this.prefix + "-range",
                      "aria-label": "Percent of revealed content",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      "aria-valuenow": this.start,
                      value: this.start,
                      min: "0",
                      max: "100",
                    })),
                    (this.handle = this.addElement("span", {
                      class: this.prefix + "-handle",
                    })),
                    this.onImagesLoad()));
            }
            return (
              r(a, [
                {
                  key: "init",
                  value: function () {
                    this.element.classList.add(this.prefix + "-ready"),
                      this.setImgWidth(),
                      this.move(),
                      this.addListeners();
                  },
                },
                {
                  key: "loadingImg",
                  value: function (r) {
                    return new Promise(function (t, e) {
                      r || t();
                      var n = new Image();
                      (n.onload = function () {
                        return t();
                      }),
                        (n.onerror = function () {
                          return e();
                        }),
                        (n.src = r);
                    });
                  },
                },
                {
                  key: "loadedBoth",
                  value: function () {
                    var t =
                        this.element.children[0].src ||
                        this.element.children[0].getAttribute(
                          "data-" + this.prefix + "-src"
                        ),
                      e =
                        this.revealElement.src ||
                        this.revealElement.getAttribute(
                          "data-" + this.prefix + "-src"
                        );
                    return Promise.all([
                      this.loadingImg(t),
                      this.loadingImg(e),
                    ]);
                  },
                },
                {
                  key: "onImagesLoad",
                  value: function () {
                    var t = this;
                    this.revealElement &&
                      this.loadedBoth().then(
                        function () {
                          t.init();
                        },
                        function () {}
                      );
                  },
                },
                {
                  key: "addElement",
                  value: function (t, e) {
                    var n = document.createElement(t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        n.setAttribute(t, e[t]);
                      }),
                      this.element.appendChild(n),
                      n
                    );
                  },
                },
                {
                  key: "setImgWidth",
                  value: function () {
                    this.revealElement.style.width = getComputedStyle(
                      this.element
                    ).width;
                  },
                },
                {
                  key: "addListeners",
                  value: function () {
                    var e = this;
                    ["input", "change"].forEach(function (t) {
                      e.range.addEventListener(t, function () {
                        e.move();
                      });
                    }),
                      window.addEventListener("resize", function () {
                        e.setImgWidth();
                      });
                  },
                },
                {
                  key: "move",
                  value: function () {
                    (this.revealContainer.style.width = this.range.value + "%"),
                      (this.handle.style.left = this.range.value + "%"),
                      this.range.setAttribute(
                        "aria-valuenow",
                        this.range.value
                      );
                  },
                },
              ]),
              a
            );
          })();
        },
      ]).default);
  },
  function (r, o, t) {
    (function (t) {
      var e, n;
      "undefined" != typeof window && window,
        void 0 ===
          (n =
            "function" ==
            typeof (e = function () {
              var w = function (t, e) {
                "use strict";
                var E = Object.create(w.prototype),
                  c = 0,
                  O = 0,
                  u = 0,
                  k = 0,
                  l = [],
                  n = !0,
                  r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    function (t) {
                      return setTimeout(t, 1e3 / 60);
                    },
                  o = null,
                  i = !1;
                try {
                  var a = Object.defineProperty({}, "passive", {
                    get: function () {
                      i = !0;
                    },
                  });
                  window.addEventListener("testPassive", null, a),
                    window.removeEventListener("testPassive", null, a);
                } catch (t) {}
                var s =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    clearTimeout,
                  p =
                    window.transformProp ||
                    (function () {
                      var t = document.createElement("div");
                      if (null === t.style.transform) {
                        var e = ["Webkit", "Moz", "ms"];
                        for (var n in e)
                          if (void 0 !== t.style[e[n] + "Transform"])
                            return e[n] + "Transform";
                      }
                      return "transform";
                    })();
                (E.options = {
                  speed: -2,
                  center: !1,
                  wrapper: null,
                  relativeToWrapper: !1,
                  round: !0,
                  vertical: !0,
                  horizontal: !1,
                  callback: function () {},
                }),
                  e &&
                    Object.keys(e).forEach(function (t) {
                      E.options[t] = e[t];
                    }),
                  t || (t = ".rellax");
                var f =
                  "string" == typeof t ? document.querySelectorAll(t) : [t];
                if (0 < f.length) {
                  if (
                    ((E.elems = f),
                    E.options.wrapper && !E.options.wrapper.nodeType)
                  ) {
                    var d = document.querySelector(E.options.wrapper);
                    if (!d) return;
                    E.options.wrapper = d;
                  }
                  var h = function () {
                      for (var t = 0; t < l.length; t++)
                        E.elems[t].style.cssText = l[t].style;
                      (l = []),
                        (O = window.innerHeight),
                        (k = window.innerWidth),
                        v(),
                        (function () {
                          for (var t = 0; t < E.elems.length; t++) {
                            var e = m(E.elems[t]);
                            l.push(e);
                          }
                        })(),
                        b(),
                        n &&
                          (window.addEventListener("resize", h), (n = !1), y());
                    },
                    m = function (t) {
                      var e = t.getAttribute("data-rellax-percentage"),
                        n = t.getAttribute("data-rellax-speed"),
                        r = t.getAttribute("data-rellax-zindex") || 0,
                        o = t.getAttribute("data-rellax-min"),
                        i = t.getAttribute("data-rellax-max"),
                        a = E.options.wrapper
                          ? E.options.wrapper.scrollTop
                          : window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop;
                      E.options.relativeToWrapper &&
                        (a =
                          (window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop) -
                          E.options.wrapper.offsetTop);
                      var s =
                          E.options.vertical && (e || E.options.center) ? a : 0,
                        c =
                          E.options.horizontal && (e || E.options.center)
                            ? E.options.wrapper
                              ? E.options.wrapper.scrollLeft
                              : window.pageXOffset ||
                                document.documentElement.scrollLeft ||
                                document.body.scrollLeft
                            : 0,
                        u = s + t.getBoundingClientRect().top,
                        l = t.clientHeight || t.offsetHeight || t.scrollHeight,
                        p = c + t.getBoundingClientRect().left,
                        f = t.clientWidth || t.offsetWidth || t.scrollWidth,
                        d = e || (s - u + O) / (l + O),
                        h = e || (c - p + k) / (f + k);
                      E.options.center && (d = h = 0.5);
                      var m = n || E.options.speed,
                        v = T(h, d, m),
                        g = t.style.cssText,
                        y = "",
                        b = /transform\s*:/i.exec(g);
                      if (b) {
                        var w = b.index,
                          x = g.slice(w),
                          S = x.indexOf(";");
                        y = S
                          ? " " + x.slice(11, S).replace(/\s/g, "")
                          : " " + x.slice(11).replace(/\s/g, "");
                      }
                      return {
                        baseX: v.x,
                        baseY: v.y,
                        top: u,
                        left: p,
                        height: l,
                        width: f,
                        speed: m,
                        style: g,
                        transform: y,
                        zindex: r,
                        min: o,
                        max: i,
                      };
                    },
                    v = function () {
                      var t = c,
                        e = u;
                      if (
                        ((c = E.options.wrapper
                          ? E.options.wrapper.scrollTop
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollTop || window.pageYOffset),
                        (u = E.options.wrapper
                          ? E.options.wrapper.scrollLeft
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollLeft || window.pageXOffset),
                        E.options.relativeToWrapper)
                      ) {
                        var n =
                          (
                            document.documentElement ||
                            document.body.parentNode ||
                            document.body
                          ).scrollTop || window.pageYOffset;
                        c = n - E.options.wrapper.offsetTop;
                      }
                      return (
                        !(t == c || !E.options.vertical) ||
                        !(e == u || !E.options.horizontal)
                      );
                    },
                    T = function (t, e, n) {
                      var r = {},
                        o = n * (100 * (1 - t)),
                        i = n * (100 * (1 - e));
                      return (
                        (r.x = E.options.round
                          ? Math.round(o)
                          : Math.round(100 * o) / 100),
                        (r.y = E.options.round
                          ? Math.round(i)
                          : Math.round(100 * i) / 100),
                        r
                      );
                    },
                    g = function () {
                      window.removeEventListener("resize", g),
                        window.removeEventListener("orientationchange", g),
                        (E.options.wrapper
                          ? E.options.wrapper
                          : window
                        ).removeEventListener("scroll", g),
                        (E.options.wrapper
                          ? E.options.wrapper
                          : document
                        ).removeEventListener("touchmove", g),
                        (o = r(y));
                    },
                    y = function () {
                      v() && !1 === n
                        ? (b(), (o = r(y)))
                        : ((o = null),
                          window.addEventListener("resize", g),
                          window.addEventListener("orientationchange", g),
                          (E.options.wrapper
                            ? E.options.wrapper
                            : window
                          ).addEventListener(
                            "scroll",
                            g,
                            !!i && {
                              passive: !0,
                            }
                          ),
                          (E.options.wrapper
                            ? E.options.wrapper
                            : document
                          ).addEventListener(
                            "touchmove",
                            g,
                            !!i && {
                              passive: !0,
                            }
                          ));
                    },
                    b = function () {
                      for (var t, e = 0; e < E.elems.length; e++) {
                        var n = (c - l[e].top + O) / (l[e].height + O),
                          r = (u - l[e].left + k) / (l[e].width + k),
                          o = (t = T(r, n, l[e].speed)).y - l[e].baseY,
                          i = t.x - l[e].baseX;
                        null !== l[e].min &&
                          (E.options.vertical &&
                            !E.options.horizontal &&
                            (o = o <= l[e].min ? l[e].min : o),
                          E.options.horizontal &&
                            !E.options.vertical &&
                            (i = i <= l[e].min ? l[e].min : i)),
                          null !== l[e].max &&
                            (E.options.vertical &&
                              !E.options.horizontal &&
                              (o = o >= l[e].max ? l[e].max : o),
                            E.options.horizontal &&
                              !E.options.vertical &&
                              (i = i >= l[e].max ? l[e].max : i));
                        var a = l[e].zindex,
                          s =
                            "translate3d(" +
                            (E.options.horizontal ? i : "0") +
                            "px," +
                            (E.options.vertical ? o : "0") +
                            "px," +
                            a +
                            "px) " +
                            l[e].transform;
                        E.elems[e].style[p] = s;
                      }
                      E.options.callback(t);
                    };
                  return (
                    (E.destroy = function () {
                      for (var t = 0; t < E.elems.length; t++)
                        E.elems[t].style.cssText = l[t].style;
                      n || (window.removeEventListener("resize", h), (n = !0)),
                        s(o),
                        (o = null);
                    }),
                    h(),
                    (E.refresh = h),
                    E
                  );
                }
              };
              return w;
            })
              ? e.apply(o, [])
              : e) || (r.exports = n);
    }.call(this, t(43)));
  },
  function (t, e, n) {
    n(98),
      n(26),
      n(61),
      n(59),
      n(33),
      n(0),
      n(27),
      n(4),
      n(60),
      n(29),
      n(155),
      n(14),
      n(30),
      n(28),
      n(13),
      n(32),
      n(31),
      (t.exports = n(34));
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(26),
      o = n(0),
      i = n(59),
      a = n(60),
      s = n(4),
      c = n(27),
      u = n(28),
      l = n(29),
      p = n(30),
      f = n(13),
      d = n(31),
      h = n(32),
      m = n(33),
      v = n(14),
      g = n(34);
    Object(r.showBrowserUpgrade)(),
      Object(o.setElementRefs)(),
      Object(i.setClickHandlers)(),
      Object(s.initNav)(),
      Object(a.initBarba)(),
      Object(c.initBlob)(),
      Object(u.initTabs)(),
      Object(l.initPaletteSelector)(),
      Object(p.initScrollingSlider)(),
      Object(f.initToolTips)(),
      Object(d.initTypeTester)(),
      Object(h.initTypeAnimations)(),
      Object(m.initComparisonSlider)(),
      Object(v.initWaypoints)(),
      Object(v.initScrollIndicator)(),
      Object(g.initZoomScroller)();
  },
  function (t, e, n) {
    "use strict";
    var r = n(45)(2),
      o = n(71)("filter");
    n(6)(
      {
        target: "Array",
        proto: !0,
        forced: !o,
      },
      {
        filter: function (t) {
          return r(this, t, arguments[1]);
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(9),
      o = n(67),
      i = n(2)("species");
    t.exports = function (t, e) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    var r = n(72),
      o = n(3).WeakMap;
    t.exports = "function" == typeof o && /native code/.test(r.call(o));
  },
  function (t, e, n) {
    var r = n(41),
      o = n(52),
      i = n(10),
      a = n(3).Reflect;
    t.exports =
      (a && a.ownKeys) ||
      function (t) {
        var e = r.f(i(t)),
          n = o.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(15),
      a = n(12),
      s = n(10),
      c = n(54);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          s(t);
          for (var n, r = c(e), o = r.length, i = 0; i < o; )
            a.f(t, (n = r[i++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(3).document;
    t.exports = r && r.documentElement;
  },
  function (t, e, n) {
    "use strict";
    var r = n(50)(!1),
      o = [].indexOf,
      i = !!o && 1 / [1].indexOf(1, -0) < 0,
      a = n(78)("indexOf");
    n(6)(
      {
        target: "Array",
        proto: !0,
        forced: i || a,
      },
      {
        indexOf: function (t) {
          return i ? o.apply(this, arguments) || 0 : r(this, t, arguments[1]);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var p = n(80),
      b = n(10),
      f = n(16),
      w = n(107),
      x = n(108),
      S = n(17),
      E = n(109),
      d = n(57),
      r = n(5),
      h = [].push,
      O = Math.min,
      k = !r(function () {
        return !RegExp(4294967295, "y");
      });
    n(111)(
      "split",
      2,
      function (o, v, g) {
        var y;
        return (
          (y =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            1 < ".".split(/()()/).length ||
            "".split(/.?/).length
              ? function (t, e) {
                  var n = String(f(this)),
                    r = void 0 === e ? 4294967295 : e >>> 0;
                  if (0 === r) return [];
                  if (void 0 === t) return [n];
                  if (!p(t)) return v.call(n, t, r);
                  for (
                    var o,
                      i,
                      a,
                      s = [],
                      c =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      u = 0,
                      l = new RegExp(t.source, c + "g");
                    (o = d.call(l, n)) &&
                    !(
                      (i = l.lastIndex) > u &&
                      (s.push(n.slice(u, o.index)),
                      1 < o.length &&
                        o.index < n.length &&
                        h.apply(s, o.slice(1)),
                      (a = o[0].length),
                      (u = i),
                      s.length >= r)
                    );

                  )
                    l.lastIndex === o.index && l.lastIndex++;
                  return (
                    u === n.length
                      ? (!a && l.test("")) || s.push("")
                      : s.push(n.slice(u)),
                    s.length > r ? s.slice(0, r) : s
                  );
                }
              : "0".split(void 0, 0).length
              ? function (t, e) {
                  return void 0 === t && 0 === e ? [] : v.call(this, t, e);
                }
              : v),
          [
            function (t, e) {
              var n = f(this),
                r = null == t ? void 0 : t[o];
              return void 0 !== r ? r.call(t, n, e) : y.call(String(n), t, e);
            },
            function (t, e) {
              var n = g(y, t, this, e, y !== v);
              if (n.done) return n.value;
              var r = b(t),
                o = String(this),
                i = w(r, RegExp),
                a = r.unicode,
                s =
                  (r.ignoreCase ? "i" : "") +
                  (r.multiline ? "m" : "") +
                  (r.unicode ? "u" : "") +
                  (k ? "y" : "g"),
                c = new i(k ? r : "^(?:" + r.source + ")", s),
                u = void 0 === e ? 4294967295 : e >>> 0;
              if (0 === u) return [];
              if (0 === o.length) return null === E(c, o) ? [o] : [];
              for (var l = 0, p = 0, f = []; p < o.length; ) {
                c.lastIndex = k ? p : 0;
                var d,
                  h = E(c, k ? o : o.slice(p));
                if (
                  null === h ||
                  (d = O(S(c.lastIndex + (k ? 0 : p)), o.length)) === l
                )
                  p = x(o, p, a);
                else {
                  if ((f.push(o.slice(l, p)), f.length === u)) return f;
                  for (var m = 1; m <= h.length - 1; m++)
                    if ((f.push(h[m]), f.length === u)) return f;
                  p = l = d;
                }
              }
              return f.push(o.slice(l)), f;
            },
          ]
        );
      },
      !k
    );
  },
  function (t, e, n) {
    var o = n(10),
      i = n(65),
      a = n(2)("species");
    t.exports = function (t, e) {
      var n,
        r = o(t).constructor;
      return void 0 === r || null == (n = o(r)[a]) ? e : i(n);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(81);
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e, !0).length : 1);
    };
  },
  function (t, e, n) {
    var o = n(19),
      i = n(57);
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var r = n.call(t, e);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== o(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(10);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var p = n(8),
      f = n(21),
      d = n(5),
      h = n(2),
      m = n(57),
      v = h("species"),
      g = !d(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (
              (t.groups = {
                a: "7",
              }),
              t
            );
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      y = !d(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (n, t, e, r) {
      var o = h(n),
        i = !d(function () {
          var t = {};
          return (
            (t[o] = function () {
              return 7;
            }),
            7 != ""[n](t)
          );
        }),
        a =
          i &&
          !d(function () {
            var t = !1,
              e = /a/;
            return (
              (e.exec = function () {
                return (t = !0), null;
              }),
              "split" === n &&
                ((e.constructor = {}),
                (e.constructor[v] = function () {
                  return e;
                })),
              e[o](""),
              !t
            );
          });
      if (!i || !a || ("replace" === n && !g) || ("split" === n && !y)) {
        var s = /./[o],
          c = e(o, ""[n], function (t, e, n, r, o) {
            return e.exec === m
              ? i && !o
                ? {
                    done: !0,
                    value: s.call(e, n, r),
                  }
                : {
                    done: !0,
                    value: t.call(n, e, r),
                  }
              : {
                  done: !1,
                };
          }),
          u = c[0],
          l = c[1];
        f(String.prototype, n, u),
          f(
            RegExp.prototype,
            o,
            2 == t
              ? function (t, e) {
                  return l.call(t, this, e);
                }
              : function (t) {
                  return l.call(t, this);
                }
          ),
          r && p(RegExp.prototype[o], "sham", !0);
      }
    };
  },
  function (t, e, n) {
    var r = !n(113)(function (t) {
      Array.from(t);
    });
    n(6)(
      {
        target: "Array",
        stat: !0,
        forced: r,
      },
      {
        from: n(114),
      }
    );
  },
  function (t, e, n) {
    var o = n(2)("iterator"),
      i = !1;
    try {
      var r = 0,
        a = {
          next: function () {
            return {
              done: !!r++,
            };
          },
          return: function () {
            i = !0;
          },
        };
      (a[o] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var r = {};
        (r[o] = function () {
          return {
            next: function () {
              return {
                done: (n = !0),
              };
            },
          };
        }),
          t(r);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    "use strict";
    var f = n(64),
      d = n(35),
      h = n(115),
      m = n(116),
      v = n(17),
      g = n(117),
      y = n(118);
    t.exports = function (t) {
      var e,
        n,
        r,
        o,
        i = d(t),
        a = "function" == typeof this ? this : Array,
        s = arguments.length,
        c = 1 < s ? arguments[1] : void 0,
        u = void 0 !== c,
        l = 0,
        p = y(i);
      if (
        (u && (c = f(c, 2 < s ? arguments[2] : void 0, 2)),
        null == p || (a == Array && m(p)))
      )
        for (n = new a((e = v(i.length))); l < e; l++)
          g(n, l, u ? c(i[l], l) : i[l]);
      else
        for (o = p.call(i), n = new a(); !(r = o.next()).done; l++)
          g(n, l, u ? h(o, c, [r.value, l], !0) : r.value);
      return (n.length = l), n;
    };
  },
  function (t, e, n) {
    var i = n(10);
    t.exports = function (t, e, n, r) {
      try {
        return r ? e(i(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && i(o.call(t)), e);
      }
    };
  },
  function (t, e, n) {
    var r = n(25),
      o = n(2)("iterator"),
      i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || i[o] === t);
    };
  },
  function (t, e, n) {
    "use strict";
    var o = n(23),
      i = n(12),
      a = n(24);
    t.exports = function (t, e, n) {
      var r = o(e);
      r in t ? i.f(t, r, a(0, n)) : (t[r] = n);
    };
  },
  function (t, e, n) {
    var r = n(82),
      o = n(2)("iterator"),
      i = n(25);
    t.exports = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
    };
  },
  function (t, e, n) {
    "use strict";
    var o = n(85).IteratorPrototype,
      i = n(42),
      a = n(24),
      s = n(58),
      c = n(25),
      u = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var r = e + " Iterator";
      return (
        (t.prototype = i(o, {
          next: a(1, n),
        })),
        s(t, r, !1, !0),
        (c[r] = u),
        t
      );
    };
  },
  function (t, e, n) {
    t.exports = !n(5)(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(9),
      o = n(10);
    t.exports = function (t, e) {
      if ((o(t), !r(e) && null !== e))
        throw TypeError("Can't set " + String(e) + " as a prototype");
    };
  },
  function (t, e, n) {
    "use strict";
    var a = n(17),
      s = n(55),
      c = "".endsWith,
      u = Math.min,
      r = n(56)("endsWith");
    n(6)(
      {
        target: "String",
        proto: !0,
        forced: !r,
      },
      {
        endsWith: function (t) {
          var e = s(this, t, "endsWith"),
            n = 1 < arguments.length ? arguments[1] : void 0,
            r = a(e.length),
            o = void 0 === n ? r : u(a(n), r),
            i = String(t);
          return c ? c.call(e, i, o) : e.slice(o - i.length, o) === i;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var o = n(17),
      i = n(55),
      r = n(56)("startsWith"),
      a = "".startsWith;
    n(6)(
      {
        target: "String",
        proto: !0,
        forced: !r,
      },
      {
        startsWith: function (t) {
          var e = i(this, t, "startsWith"),
            n = o(
              Math.min(1 < arguments.length ? arguments[1] : void 0, e.length)
            ),
            r = String(t);
          return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = [].forEach,
      o = n(45)(0),
      i = n(78)("forEach");
    t.exports = i
      ? function (t) {
          return o(this, t, arguments[1]);
        }
      : r;
  },
  function (t, e, n) {
    n(6)(
      {
        target: "Array",
        proto: !0,
      },
      {
        fill: n(126),
      }
    ),
      n(53)("fill");
  },
  function (t, e, n) {
    "use strict";
    var s = n(35),
      c = n(75),
      u = n(17);
    t.exports = function (t) {
      for (
        var e = s(this),
          n = u(e.length),
          r = arguments.length,
          o = c(1 < r ? arguments[1] : void 0, n),
          i = 2 < r ? arguments[2] : void 0,
          a = void 0 === i ? n : c(i, n);
        o < a;

      )
        e[o++] = t;
      return e;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(45)(1),
      o = n(71)("map");
    n(6)(
      {
        target: "Array",
        proto: !0,
        forced: !o,
      },
      {
        map: function (t) {
          return r(this, t, arguments[1]);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(129),
      o = n(130)("anchor");
    n(6)(
      {
        target: "String",
        proto: !0,
        forced: o,
      },
      {
        anchor: function (t) {
          return r(this, "a", "name", t);
        },
      }
    );
  },
  function (t, e, n) {
    var a = n(16),
      s = /"/g;
    t.exports = function (t, e, n, r) {
      var o = String(a(t)),
        i = "<" + e;
      return (
        "" !== n &&
          (i += " " + n + '="' + String(r).replace(s, "&quot;") + '"'),
        i + ">" + o + "</" + e + ">"
      );
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (e) {
      return r(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || 3 < t.split('"').length;
      });
    };
  },
  function (t, e) {
    !(function () {
      "use strict";
      var e = 0,
        i = {};
      function n(t) {
        if (!t) throw new Error("No options passed to Waypoint constructor");
        if (!t.element)
          throw new Error("No element option passed to Waypoint constructor");
        if (!t.handler)
          throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
          (this.options = n.Adapter.extend({}, n.defaults, t)),
          (this.element = this.options.element),
          (this.adapter = new n.Adapter(this.element)),
          (this.callback = t.handler),
          (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
          (this.enabled = this.options.enabled),
          (this.triggerPoint = null),
          (this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis,
          })),
          (this.context = n.Context.findOrCreateByElement(
            this.options.context
          )),
          n.offsetAliases[this.options.offset] &&
            (this.options.offset = n.offsetAliases[this.options.offset]),
          this.group.add(this),
          this.context.add(this),
          (i[this.key] = this),
          (e += 1);
      }
      (n.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
      }),
        (n.prototype.trigger = function (t) {
          this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (n.prototype.destroy = function () {
          this.context.remove(this),
            this.group.remove(this),
            delete i[this.key];
        }),
        (n.prototype.disable = function () {
          return (this.enabled = !1), this;
        }),
        (n.prototype.enable = function () {
          return this.context.refresh(), (this.enabled = !0), this;
        }),
        (n.prototype.next = function () {
          return this.group.next(this);
        }),
        (n.prototype.previous = function () {
          return this.group.previous(this);
        }),
        (n.invokeAll = function (t) {
          var e = [];
          for (var n in i) e.push(i[n]);
          for (var r = 0, o = e.length; r < o; r++) e[r][t]();
        }),
        (n.destroyAll = function () {
          n.invokeAll("destroy");
        }),
        (n.disableAll = function () {
          n.invokeAll("disable");
        }),
        (n.enableAll = function () {
          for (var t in (n.Context.refreshAll(), i)) i[t].enabled = !0;
          return this;
        }),
        (n.refreshAll = function () {
          n.Context.refreshAll();
        }),
        (n.viewportHeight = function () {
          return window.innerHeight || document.documentElement.clientHeight;
        }),
        (n.viewportWidth = function () {
          return document.documentElement.clientWidth;
        }),
        (n.adapters = []),
        (n.defaults = {
          context: window,
          continuous: !0,
          enabled: !0,
          group: "default",
          horizontal: !1,
          offset: 0,
        }),
        (n.offsetAliases = {
          "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight();
          },
          "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth();
          },
        }),
        (window.Waypoint = n);
    })(),
      (function () {
        "use strict";
        var e = 0,
          r = {},
          v = window.Waypoint,
          t = window.onload;
        function n(t) {
          (this.element = t),
            (this.Adapter = v.Adapter),
            (this.adapter = new this.Adapter(t)),
            (this.key = "waypoint-context-" + e),
            (this.didScroll = !1),
            (this.didResize = !1),
            (this.oldScroll = {
              x: this.adapter.scrollLeft(),
              y: this.adapter.scrollTop(),
            }),
            (this.waypoints = {
              vertical: {},
              horizontal: {},
            }),
            (t.waypointContextKey = this.key),
            (r[t.waypointContextKey] = this),
            (e += 1),
            v.windowContext ||
              ((v.windowContext = !0), (v.windowContext = new n(window))),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler();
        }
        (n.prototype.add = function (t) {
          var e = t.options.horizontal ? "horizontal" : "vertical";
          (this.waypoints[e][t.key] = t), this.refresh();
        }),
          (n.prototype.checkEmpty = function () {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
              e = this.Adapter.isEmptyObject(this.waypoints.vertical),
              n = this.element == this.element.window;
            t &&
              e &&
              !n &&
              (this.adapter.off(".waypoints"), delete r[this.key]);
          }),
          (n.prototype.createThrottledResizeHandler = function () {
            var t = this;
            function e() {
              t.handleResize(), (t.didResize = !1);
            }
            this.adapter.on("resize.waypoints", function () {
              t.didResize || ((t.didResize = !0), v.requestAnimationFrame(e));
            });
          }),
          (n.prototype.createThrottledScrollHandler = function () {
            var t = this;
            function e() {
              t.handleScroll(), (t.didScroll = !1);
            }
            this.adapter.on("scroll.waypoints", function () {
              (t.didScroll && !v.isTouch) ||
                ((t.didScroll = !0), v.requestAnimationFrame(e));
            });
          }),
          (n.prototype.handleResize = function () {
            v.Context.refreshAll();
          }),
          (n.prototype.handleScroll = function () {
            var t = {},
              e = {
                horizontal: {
                  newScroll: this.adapter.scrollLeft(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left",
                },
                vertical: {
                  newScroll: this.adapter.scrollTop(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up",
                },
              };
            for (var n in e) {
              var r = e[n],
                o = r.newScroll > r.oldScroll ? r.forward : r.backward;
              for (var i in this.waypoints[n]) {
                var a = this.waypoints[n][i];
                if (null !== a.triggerPoint) {
                  var s = r.oldScroll < a.triggerPoint,
                    c = r.newScroll >= a.triggerPoint;
                  ((s && c) || (!s && !c)) &&
                    (a.queueTrigger(o), (t[a.group.id] = a.group));
                }
              }
            }
            for (var u in t) t[u].flushTriggers();
            this.oldScroll = {
              x: e.horizontal.newScroll,
              y: e.vertical.newScroll,
            };
          }),
          (n.prototype.innerHeight = function () {
            return this.element == this.element.window
              ? v.viewportHeight()
              : this.adapter.innerHeight();
          }),
          (n.prototype.remove = function (t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty();
          }),
          (n.prototype.innerWidth = function () {
            return this.element == this.element.window
              ? v.viewportWidth()
              : this.adapter.innerWidth();
          }),
          (n.prototype.destroy = function () {
            var t = [];
            for (var e in this.waypoints)
              for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
            for (var r = 0, o = t.length; r < o; r++) t[r].destroy();
          }),
          (n.prototype.refresh = function () {
            var t,
              e = this.element == this.element.window,
              n = e ? void 0 : this.adapter.offset(),
              r = {};
            for (var o in (this.handleScroll(),
            (t = {
              horizontal: {
                contextOffset: e ? 0 : n.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left",
              },
              vertical: {
                contextOffset: e ? 0 : n.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top",
              },
            }))) {
              var i = t[o];
              for (var a in this.waypoints[o]) {
                var s,
                  c,
                  u,
                  l,
                  p = this.waypoints[o][a],
                  f = p.options.offset,
                  d = p.triggerPoint,
                  h = 0,
                  m = null == d;
                p.element !== p.element.window &&
                  (h = p.adapter.offset()[i.offsetProp]),
                  "function" == typeof f
                    ? (f = f.apply(p))
                    : "string" == typeof f &&
                      ((f = parseFloat(f)),
                      -1 < p.options.offset.indexOf("%") &&
                        (f = Math.ceil((i.contextDimension * f) / 100))),
                  (s = i.contextScroll - i.contextOffset),
                  (p.triggerPoint = Math.floor(h + s - f)),
                  (c = d < i.oldScroll),
                  (u = p.triggerPoint >= i.oldScroll),
                  (l = !c && !u),
                  !m && c && u
                    ? (p.queueTrigger(i.backward), (r[p.group.id] = p.group))
                    : !m && l
                    ? (p.queueTrigger(i.forward), (r[p.group.id] = p.group))
                    : m &&
                      i.oldScroll >= p.triggerPoint &&
                      (p.queueTrigger(i.forward), (r[p.group.id] = p.group));
              }
            }
            return (
              v.requestAnimationFrame(function () {
                for (var t in r) r[t].flushTriggers();
              }),
              this
            );
          }),
          (n.findOrCreateByElement = function (t) {
            return n.findByElement(t) || new n(t);
          }),
          (n.refreshAll = function () {
            for (var t in r) r[t].refresh();
          }),
          (n.findByElement = function (t) {
            return r[t.waypointContextKey];
          }),
          (window.onload = function () {
            t && t(), n.refreshAll();
          }),
          (v.requestAnimationFrame = function (t) {
            (
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (t) {
                window.setTimeout(t, 1e3 / 60);
              }
            ).call(window, t);
          }),
          (v.Context = n);
      })(),
      (function () {
        "use strict";
        function a(t, e) {
          return t.triggerPoint - e.triggerPoint;
        }
        function s(t, e) {
          return e.triggerPoint - t.triggerPoint;
        }
        var e = {
            vertical: {},
            horizontal: {},
          },
          n = window.Waypoint;
        function r(t) {
          (this.name = t.name),
            (this.axis = t.axis),
            (this.id = this.name + "-" + this.axis),
            (this.waypoints = []),
            this.clearTriggerQueues(),
            (e[this.axis][this.name] = this);
        }
        (r.prototype.add = function (t) {
          this.waypoints.push(t);
        }),
          (r.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
              up: [],
              down: [],
              left: [],
              right: [],
            };
          }),
          (r.prototype.flushTriggers = function () {
            for (var t in this.triggerQueues) {
              var e = this.triggerQueues[t],
                n = "up" === t || "left" === t;
              e.sort(n ? s : a);
              for (var r = 0, o = e.length; r < o; r += 1) {
                var i = e[r];
                (i.options.continuous || r === e.length - 1) && i.trigger([t]);
              }
            }
            this.clearTriggerQueues();
          }),
          (r.prototype.next = function (t) {
            this.waypoints.sort(a);
            var e = n.Adapter.inArray(t, this.waypoints);
            return e === this.waypoints.length - 1
              ? null
              : this.waypoints[e + 1];
          }),
          (r.prototype.previous = function (t) {
            this.waypoints.sort(a);
            var e = n.Adapter.inArray(t, this.waypoints);
            return e ? this.waypoints[e - 1] : null;
          }),
          (r.prototype.queueTrigger = function (t, e) {
            this.triggerQueues[e].push(t);
          }),
          (r.prototype.remove = function (t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            -1 < e && this.waypoints.splice(e, 1);
          }),
          (r.prototype.first = function () {
            return this.waypoints[0];
          }),
          (r.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1];
          }),
          (r.findOrCreate = function (t) {
            return e[t.axis][t.name] || new r(t);
          }),
          (n.Group = r);
      })(),
      (function () {
        "use strict";
        var t = window.Waypoint;
        function r(t) {
          return t === t.window;
        }
        function o(t) {
          return r(t) ? t : t.defaultView;
        }
        function e(t) {
          (this.element = t), (this.handlers = {});
        }
        (e.prototype.innerHeight = function () {
          return r(this.element)
            ? this.element.innerHeight
            : this.element.clientHeight;
        }),
          (e.prototype.innerWidth = function () {
            return r(this.element)
              ? this.element.innerWidth
              : this.element.clientWidth;
          }),
          (e.prototype.off = function (t, e) {
            function n(t, e, n) {
              for (var r = 0, o = e.length - 1; r < o; r++) {
                var i = e[r];
                (n && n !== i) || t.removeEventListener(i);
              }
            }
            var r = t.split("."),
              o = r[0],
              i = r[1],
              a = this.element;
            if (i && this.handlers[i] && o)
              n(a, this.handlers[i][o], e), (this.handlers[i][o] = []);
            else if (o)
              for (var s in this.handlers)
                n(a, this.handlers[s][o] || [], e), (this.handlers[s][o] = []);
            else if (i && this.handlers[i]) {
              for (var c in this.handlers[i]) n(a, this.handlers[i][c], e);
              this.handlers[i] = {};
            }
          }),
          (e.prototype.offset = function () {
            if (!this.element.ownerDocument) return null;
            var t = this.element.ownerDocument.documentElement,
              e = o(this.element.ownerDocument),
              n = {
                top: 0,
                left: 0,
              };
            return (
              this.element.getBoundingClientRect &&
                (n = this.element.getBoundingClientRect()),
              {
                top: n.top + e.pageYOffset - t.clientTop,
                left: n.left + e.pageXOffset - t.clientLeft,
              }
            );
          }),
          (e.prototype.on = function (t, e) {
            var n = t.split("."),
              r = n[0],
              o = n[1] || "__default",
              i = (this.handlers[o] = this.handlers[o] || {});
            (i[r] = i[r] || []).push(e), this.element.addEventListener(r, e);
          }),
          (e.prototype.outerHeight = function (t) {
            var e,
              n = this.innerHeight();
            return (
              t &&
                !r(this.element) &&
                ((e = window.getComputedStyle(this.element)),
                (n += parseInt(e.marginTop, 10)),
                (n += parseInt(e.marginBottom, 10))),
              n
            );
          }),
          (e.prototype.outerWidth = function (t) {
            var e,
              n = this.innerWidth();
            return (
              t &&
                !r(this.element) &&
                ((e = window.getComputedStyle(this.element)),
                (n += parseInt(e.marginLeft, 10)),
                (n += parseInt(e.marginRight, 10))),
              n
            );
          }),
          (e.prototype.scrollLeft = function () {
            var t = o(this.element);
            return t ? t.pageXOffset : this.element.scrollLeft;
          }),
          (e.prototype.scrollTop = function () {
            var t = o(this.element);
            return t ? t.pageYOffset : this.element.scrollTop;
          }),
          (e.extend = function () {
            var t = Array.prototype.slice.call(arguments);
            function e(t, e) {
              if ("object" == typeof t && "object" == typeof e)
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              return t;
            }
            for (var n = 1, r = t.length; n < r; n++) e(t[0], t[n]);
            return t[0];
          }),
          (e.inArray = function (t, e, n) {
            return null == e ? -1 : e.indexOf(t, n);
          }),
          (e.isEmptyObject = function (t) {
            for (var e in t) return !1;
            return !0;
          }),
          t.adapters.push({
            name: "noframework",
            Adapter: e,
          }),
          (t.Adapter = e);
      })();
  },
  function (t, e, n) {
    "use strict";
    var r = n(3),
      a = n(7),
      o = n(15),
      i = n(36),
      s = n(6),
      c = n(21),
      u = n(40),
      l = n(5),
      p = n(22),
      f = n(58),
      d = n(48),
      h = n(2),
      m = n(89),
      v = n(90),
      g = n(134),
      y = n(67),
      b = n(10),
      w = n(9),
      x = n(20),
      S = n(23),
      E = n(24),
      O = n(42),
      k = n(135),
      T = n(37),
      A = n(12),
      L = n(49),
      C = n(8),
      j = n(54),
      I = n(39)("hidden"),
      P = n(38),
      M = P.set,
      D = P.getterFor("Symbol"),
      _ = T.f,
      q = A.f,
      z = k.f,
      N = r.Symbol,
      H = r.JSON,
      F = H && H.stringify,
      B = h("toPrimitive"),
      R = L.f,
      W = p("symbol-registry"),
      Y = p("symbols"),
      X = p("op-symbols"),
      V = p("wks"),
      U = Object.prototype,
      G = r.QObject,
      $ = n(70),
      Q = !G || !G.prototype || !G.prototype.findChild,
      K =
        o &&
        l(function () {
          return (
            7 !=
            O(
              q({}, "a", {
                get: function () {
                  return q(this, "a", {
                    value: 7,
                  }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var r = _(U, e);
              r && delete U[e], q(t, e, n), r && t !== U && q(U, e, r);
            }
          : q,
      J = function (t, e) {
        var n = (Y[t] = O(N.prototype));
        return (
          M(n, {
            type: "Symbol",
            tag: t,
            description: e,
          }),
          o || (n.description = e),
          n
        );
      },
      Z =
        $ && "symbol" == typeof N.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof N;
            },
      tt = function (t, e, n) {
        return (
          t === U && tt(X, e, n),
          b(t),
          (e = S(e, !0)),
          b(n),
          a(Y, e)
            ? (n.enumerable
                ? (a(t, I) && t[I][e] && (t[I][e] = !1),
                  (n = O(n, {
                    enumerable: E(0, !1),
                  })))
                : (a(t, I) || q(t, I, E(1, {})), (t[I][e] = !0)),
              K(t, e, n))
            : q(t, e, n)
        );
      },
      et = function (t, e) {
        b(t);
        for (var n, r = g((e = x(e))), o = 0, i = r.length; o < i; )
          tt(t, (n = r[o++]), e[n]);
        return t;
      },
      nt = function (t) {
        var e = R.call(this, (t = S(t, !0)));
        return (
          !(this === U && a(Y, t) && !a(X, t)) &&
          (!(e || !a(this, t) || !a(Y, t) || (a(this, I) && this[I][t])) || e)
        );
      },
      rt = function (t, e) {
        if (((t = x(t)), (e = S(e, !0)), t !== U || !a(Y, e) || a(X, e))) {
          var n = _(t, e);
          return (
            !n || !a(Y, e) || (a(t, I) && t[I][e]) || (n.enumerable = !0), n
          );
        }
      },
      ot = function (t) {
        for (var e, n = z(x(t)), r = [], o = 0; n.length > o; )
          a(Y, (e = n[o++])) || a(u, e) || r.push(e);
        return r;
      },
      it = function (t) {
        for (
          var e, n = t === U, r = z(n ? X : x(t)), o = [], i = 0;
          r.length > i;

        )
          !a(Y, (e = r[i++])) || (n && !a(U, e)) || o.push(Y[e]);
        return o;
      };
    $ ||
      (c(
        (N = function () {
          if (this instanceof N) throw TypeError("Symbol is not a constructor");
          var t = void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = d(t),
            n = function (t) {
              this === U && n.call(X, t),
                a(this, I) && a(this[I], e) && (this[I][e] = !1),
                K(this, e, E(1, t));
            };
          return (
            o &&
              Q &&
              K(U, e, {
                configurable: !0,
                set: n,
              }),
            J(e, t)
          );
        }).prototype,
        "toString",
        function () {
          return D(this).tag;
        }
      ),
      (L.f = nt),
      (A.f = tt),
      (T.f = rt),
      (n(41).f = k.f = ot),
      (n(52).f = it),
      o &&
        (q(N.prototype, "description", {
          configurable: !0,
          get: function () {
            return D(this).description;
          },
        }),
        i ||
          c(U, "propertyIsEnumerable", nt, {
            unsafe: !0,
          })),
      (m.f = function (t) {
        return J(h(t), t);
      })),
      s(
        {
          global: !0,
          wrap: !0,
          forced: !$,
          sham: !$,
        },
        {
          Symbol: N,
        }
      );
    for (var at = j(V), st = 0; at.length > st; ) v(at[st++]);
    s(
      {
        target: "Symbol",
        stat: !0,
        forced: !$,
      },
      {
        for: function (t) {
          return a(W, (t += "")) ? W[t] : (W[t] = N(t));
        },
        keyFor: function (t) {
          if (!Z(t)) throw TypeError(t + " is not a symbol");
          for (var e in W) if (W[e] === t) return e;
        },
        useSetter: function () {
          Q = !0;
        },
        useSimple: function () {
          Q = !1;
        },
      }
    ),
      s(
        {
          target: "Object",
          stat: !0,
          forced: !$,
          sham: !o,
        },
        {
          create: function (t, e) {
            return void 0 === e ? O(t) : et(O(t), e);
          },
          defineProperty: tt,
          defineProperties: et,
          getOwnPropertyDescriptor: rt,
        }
      ),
      s(
        {
          target: "Object",
          stat: !0,
          forced: !$,
        },
        {
          getOwnPropertyNames: ot,
          getOwnPropertySymbols: it,
        }
      ),
      H &&
        s(
          {
            target: "JSON",
            stat: !0,
            forced:
              !$ ||
              l(function () {
                var t = N();
                return (
                  "[null]" != F([t]) ||
                  "{}" !=
                    F({
                      a: t,
                    }) ||
                  "{}" != F(Object(t))
                );
              }),
          },
          {
            stringify: function (t) {
              for (var e, n, r = [t], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
              if (((n = e = r[1]), (w(e) || void 0 !== t) && !Z(t)))
                return (
                  y(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof n && (e = n.call(this, t, e)),
                        !Z(e))
                      )
                        return e;
                    }),
                  (r[1] = e),
                  F.apply(H, r)
                );
            },
          }
        ),
      N.prototype[B] || C(N.prototype, B, N.prototype.valueOf),
      f(N, "Symbol"),
      (u[I] = !0);
  },
  function (t, e, n) {
    t.exports = n(3);
  },
  function (t, e, n) {
    var s = n(54),
      c = n(52),
      u = n(49);
    t.exports = function (t) {
      var e = s(t),
        n = c.f;
      if (n)
        for (var r, o = n(t), i = u.f, a = 0; o.length > a; )
          i.call(t, (r = o[a++])) && e.push(r);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(20),
      o = n(41).f,
      i = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == i.call(t)
        ? (function (t) {
            try {
              return o(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : o(r(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(15),
      o = n(7),
      i = n(9),
      a = n(12).f,
      s = n(73),
      c = n(3).Symbol;
    if (
      r &&
      "function" == typeof c &&
      (!("description" in c.prototype) || void 0 !== c().description)
    ) {
      var u = {},
        l = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof l ? new c(t) : void 0 === t ? c() : c(t);
          return "" === t && (u[e] = !0), e;
        };
      s(l, c);
      var p = (l.prototype = c.prototype);
      p.constructor = l;
      var f = p.toString,
        d = "Symbol(test)" == String(c("test")),
        h = /^Symbol\((.*)\)[^)]+$/;
      a(p, "description", {
        configurable: !0,
        get: function () {
          var t = i(this) ? this.valueOf() : this,
            e = f.call(t);
          if (o(u, t)) return "";
          var n = d ? e.slice(7, -1) : e.replace(h, "$1");
          return "" === n ? void 0 : n;
        },
      }),
        n(6)(
          {
            global: !0,
            forced: !0,
          },
          {
            Symbol: l,
          }
        );
    }
  },
  function (t, e, n) {
    n(90)("iterator");
  },
  function (t, e, n) {
    "use strict";
    var r = n(3),
      o = n(76),
      i = n(7),
      a = n(19),
      s = n(139),
      l = n(23),
      c = n(5),
      u = n(41).f,
      p = n(37).f,
      f = n(12).f,
      d = n(140),
      h = r.Number,
      m = h.prototype,
      v = "Number" == a(n(42)(m)),
      g = "trim" in String.prototype,
      y = function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          s,
          c,
          u = l(t, !1);
        if ("string" == typeof u && 2 < u.length)
          if (
            43 === (e = (u = g ? u.trim() : d(u, 3)).charCodeAt(0)) ||
            45 === e
          ) {
            if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === e) {
            switch (u.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (o = 49);
                break;
              case 79:
              case 111:
                (r = 8), (o = 55);
                break;
              default:
                return +u;
            }
            for (a = (i = u.slice(2)).length, s = 0; s < a; s++)
              if ((c = i.charCodeAt(s)) < 48 || o < c) return NaN;
            return parseInt(i, r);
          }
        return +u;
      };
    if (o("Number", !h(" 0o1") || !h("0b1") || h("+0x1"))) {
      for (
        var b,
          w = function (t) {
            var e = arguments.length < 1 ? 0 : t,
              n = this;
            return n instanceof w &&
              (v
                ? c(function () {
                    m.valueOf.call(n);
                  })
                : "Number" != a(n))
              ? s(new h(y(e)), n, w)
              : y(e);
          },
          x = n(15)
            ? u(h)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          S = 0;
        x.length > S;
        S++
      )
        i(h, (b = x[S])) && !i(w, b) && f(w, b, p(h, b));
      ((w.prototype = m).constructor = w), n(21)(r, "Number", w);
    }
  },
  function (t, e, n) {
    var i = n(9),
      a = n(87);
    t.exports = function (t, e, n) {
      var r,
        o = e.constructor;
      return (
        o !== n &&
          "function" == typeof o &&
          (r = o.prototype) !== n.prototype &&
          i(r) &&
          a &&
          a(t, r),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(16),
      o = "[" + n(141) + "]",
      i = RegExp("^" + o + o + "*"),
      a = RegExp(o + o + "*$");
    t.exports = function (t, e) {
      return (
        (t = String(r(t))),
        1 & e && (t = t.replace(i, "")),
        2 & e && (t = t.replace(a, "")),
        t
      );
    };
  },
  function (t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
  },
  function (t, e, n) {
    var r = n(143),
      o = Object.prototype;
    r !== o.toString &&
      n(21)(o, "toString", r, {
        unsafe: !0,
      });
  },
  function (t, e, n) {
    "use strict";
    var r = n(82),
      o = {};
    (o[n(2)("toStringTag")] = "z"),
      (t.exports =
        "[object z]" !== String(o)
          ? function () {
              return "[object " + r(this) + "]";
            }
          : o.toString);
  },
  function (t, e, n) {
    var r = n(88),
      o = n(91),
      i = n(3),
      a = n(8),
      s = n(2),
      c = s("iterator"),
      u = s("toStringTag"),
      l = o.values;
    for (var p in r) {
      var f = i[p],
        d = f && f.prototype;
      if (d) {
        if (d[c] !== l)
          try {
            a(d, c, l);
          } catch (t) {
            d[c] = l;
          }
        if ((d[u] || a(d, u, p), r[p]))
          for (var h in o)
            if (d[h] !== o[h])
              try {
                a(d, h, o[h]);
              } catch (t) {
                d[h] = o[h];
              }
      }
    }
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        t == t &&
          (void 0 !== n && (t = t <= n ? t : n),
          void 0 !== e && (t = e <= t ? t : e)),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(147),
      o = n(148),
      i = /^\s+|\s+$/g,
      a = /^[-+]0x[0-9a-f]+$/i,
      s = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      u = parseInt;
    t.exports = function (t) {
      if ("number" == typeof t) return t;
      if (o(t)) return NaN;
      if (r(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = r(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(i, "");
      var n = s.test(t);
      return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  },
  function (t, e, n) {
    var r = n(149),
      o = n(154);
    t.exports = function (t) {
      return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
    };
  },
  function (t, e, n) {
    var r = n(92),
      o = n(152),
      i = n(153),
      a = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : a && a in Object(t)
        ? o(t)
        : i(t);
    };
  },
  function (t, e, n) {
    var r = n(151),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r || o || Function("return this")();
    t.exports = i;
  },
  function (n, t, e) {
    (function (t) {
      var e = "object" == typeof t && t && t.Object === Object && t;
      n.exports = e;
    }.call(this, e(43)));
  },
  function (t, e, n) {
    var r = n(92),
      o = Object.prototype,
      i = o.hasOwnProperty,
      a = o.toString,
      s = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      var e = i.call(t, s),
        n = t[s];
      try {
        var r = !(t[s] = void 0);
      } catch (t) {}
      var o = a.call(t);
      return r && (e ? (t[s] = n) : delete t[s]), o;
    };
  },
  function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
      return n.call(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "initParallax", function () {
        return i;
      });
    var r = n(96),
      o = n.n(r),
      i = function () {
        document.querySelector("[data-rellax-speed]") &&
          new o.a("[data-rellax-speed]", {
            speed: -2,
            center: !0,
            round: !0,
          });
      };
  },
]);
