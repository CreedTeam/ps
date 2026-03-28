(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const v of d)
      if (v.type === "childList")
        for (const S of v.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const v = {};
    return (
      d.integrity && (v.integrity = d.integrity),
      d.referrerPolicy && (v.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (v.credentials = "omit")
          : (v.credentials = "same-origin"),
      v
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const v = o(d);
    fetch(d.href, v);
  }
})();
function fy(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default")
    ? c.default
    : c;
}
var Of = { exports: {} },
  Mn = {};
var Wd;
function sy() {
  if (Wd) return Mn;
  Wd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(f, d, v) {
    var S = null;
    if (
      (v !== void 0 && (S = "" + v),
      d.key !== void 0 && (S = "" + d.key),
      "key" in d)
    ) {
      v = {};
      for (var C in d) C !== "key" && (v[C] = d[C]);
    } else v = d;
    return (
      (d = v.ref),
      { $$typeof: c, type: f, key: S, ref: d !== void 0 ? d : null, props: v }
    );
  }
  return ((Mn.Fragment = r), (Mn.jsx = o), (Mn.jsxs = o), Mn);
}
var Fd;
function ry() {
  return (Fd || ((Fd = 1), (Of.exports = sy())), Of.exports);
}
var m = ry(),
  Mf = { exports: {} },
  P = {};
var Id;
function oy() {
  if (Id) return P;
  Id = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    E = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (B && b[B]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    X = {};
  function L(b, H, Q) {
    ((this.props = b),
      (this.context = H),
      (this.refs = X),
      (this.updater = Q || D));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (b, H) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, b, H, "setState");
    }),
    (L.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    }));
  function q() {}
  q.prototype = L.prototype;
  function V(b, H, Q) {
    ((this.props = b),
      (this.context = H),
      (this.refs = X),
      (this.updater = Q || D));
  }
  var yt = (V.prototype = new q());
  ((yt.constructor = V), Y(yt, L.prototype), (yt.isPureReactComponent = !0));
  var it = Array.isArray;
  function Tt() {}
  var I = { H: null, A: null, T: null, S: null },
    Et = Object.prototype.hasOwnProperty;
  function rt(b, H, Q) {
    var K = Q.ref;
    return {
      $$typeof: c,
      type: b,
      key: H,
      ref: K !== void 0 ? K : null,
      props: Q,
    };
  }
  function $(b, H) {
    return rt(b.type, H, b.props);
  }
  function _t(b) {
    return typeof b == "object" && b !== null && b.$$typeof === c;
  }
  function Yt(b) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (Q) {
        return H[Q];
      })
    );
  }
  var we = /\/+/g;
  function Le(b, H) {
    return typeof b == "object" && b !== null && b.key != null
      ? Yt("" + b.key)
      : H.toString(36);
  }
  function Ce(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Tt, Tt)
            : ((b.status = "pending"),
              b.then(
                function (H) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = H));
                },
                function (H) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = H));
                },
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function M(b, H, Q, K, tt) {
    var at = typeof b;
    (at === "undefined" || at === "boolean") && (b = null);
    var ht = !1;
    if (b === null) ht = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case c:
            case r:
              ht = !0;
              break;
            case A:
              return ((ht = b._init), M(ht(b._payload), H, Q, K, tt));
          }
      }
    if (ht)
      return (
        (tt = tt(b)),
        (ht = K === "" ? "." + Le(b, 0) : K),
        it(tt)
          ? ((Q = ""),
            ht != null && (Q = ht.replace(we, "$&/") + "/"),
            M(tt, H, Q, "", function (wa) {
              return wa;
            }))
          : tt != null &&
            (_t(tt) &&
              (tt = $(
                tt,
                Q +
                  (tt.key == null || (b && b.key === tt.key)
                    ? ""
                    : ("" + tt.key).replace(we, "$&/") + "/") +
                  ht,
              )),
            H.push(tt)),
        1
      );
    ht = 0;
    var Wt = K === "" ? "." : K + ":";
    if (it(b))
      for (var Dt = 0; Dt < b.length; Dt++)
        ((K = b[Dt]), (at = Wt + Le(K, Dt)), (ht += M(K, H, Q, at, tt)));
    else if (((Dt = w(b)), typeof Dt == "function"))
      for (b = Dt.call(b), Dt = 0; !(K = b.next()).done; )
        ((K = K.value), (at = Wt + Le(K, Dt++)), (ht += M(K, H, Q, at, tt)));
    else if (at === "object") {
      if (typeof b.then == "function") return M(Ce(b), H, Q, K, tt);
      throw (
        (H = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ht;
  }
  function G(b, H, Q) {
    if (b == null) return b;
    var K = [],
      tt = 0;
    return (
      M(b, K, "", "", function (at) {
        return H.call(Q, at, tt++);
      }),
      K
    );
  }
  function F(b) {
    if (b._status === -1) {
      var H = b._result;
      ((H = H()),
        H.then(
          function (Q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = Q));
          },
          function (Q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = Q));
          },
        ),
        b._status === -1 && ((b._status = 0), (b._result = H)));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var pt =
      typeof reportError == "function"
        ? reportError
        : function (b) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof b == "object" &&
                  b !== null &&
                  typeof b.message == "string"
                    ? String(b.message)
                    : String(b),
                error: b,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", b);
              return;
            }
            console.error(b);
          },
    Nt = {
      map: G,
      forEach: function (b, H, Q) {
        G(
          b,
          function () {
            H.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (b) {
        var H = 0;
        return (
          G(b, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (b) {
        return (
          G(b, function (H) {
            return H;
          }) || []
        );
      },
      only: function (b) {
        if (!_t(b))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return b;
      },
    };
  return (
    (P.Activity = E),
    (P.Children = Nt),
    (P.Component = L),
    (P.Fragment = o),
    (P.Profiler = d),
    (P.PureComponent = V),
    (P.StrictMode = f),
    (P.Suspense = p),
    (P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (P.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return I.H.useMemoCache(b);
      },
    }),
    (P.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (P.cacheSignal = function () {
      return null;
    }),
    (P.cloneElement = function (b, H, Q) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + ".",
        );
      var K = Y({}, b.props),
        tt = b.key;
      if (H != null)
        for (at in (H.key !== void 0 && (tt = "" + H.key), H))
          !Et.call(H, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && H.ref === void 0) ||
            (K[at] = H[at]);
      var at = arguments.length - 2;
      if (at === 1) K.children = Q;
      else if (1 < at) {
        for (var ht = Array(at), Wt = 0; Wt < at; Wt++)
          ht[Wt] = arguments[Wt + 2];
        K.children = ht;
      }
      return rt(b.type, tt, K);
    }),
    (P.createContext = function (b) {
      return (
        (b = {
          $$typeof: S,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: v, _context: b }),
        b
      );
    }),
    (P.createElement = function (b, H, Q) {
      var K,
        tt = {},
        at = null;
      if (H != null)
        for (K in (H.key !== void 0 && (at = "" + H.key), H))
          Et.call(H, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (tt[K] = H[K]);
      var ht = arguments.length - 2;
      if (ht === 1) tt.children = Q;
      else if (1 < ht) {
        for (var Wt = Array(ht), Dt = 0; Dt < ht; Dt++)
          Wt[Dt] = arguments[Dt + 2];
        tt.children = Wt;
      }
      if (b && b.defaultProps)
        for (K in ((ht = b.defaultProps), ht))
          tt[K] === void 0 && (tt[K] = ht[K]);
      return rt(b, at, tt);
    }),
    (P.createRef = function () {
      return { current: null };
    }),
    (P.forwardRef = function (b) {
      return { $$typeof: C, render: b };
    }),
    (P.isValidElement = _t),
    (P.lazy = function (b) {
      return { $$typeof: A, _payload: { _status: -1, _result: b }, _init: F };
    }),
    (P.memo = function (b, H) {
      return { $$typeof: h, type: b, compare: H === void 0 ? null : H };
    }),
    (P.startTransition = function (b) {
      var H = I.T,
        Q = {};
      I.T = Q;
      try {
        var K = b(),
          tt = I.S;
        (tt !== null && tt(Q, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(Tt, pt));
      } catch (at) {
        pt(at);
      } finally {
        (H !== null && Q.types !== null && (H.types = Q.types), (I.T = H));
      }
    }),
    (P.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (P.use = function (b) {
      return I.H.use(b);
    }),
    (P.useActionState = function (b, H, Q) {
      return I.H.useActionState(b, H, Q);
    }),
    (P.useCallback = function (b, H) {
      return I.H.useCallback(b, H);
    }),
    (P.useContext = function (b) {
      return I.H.useContext(b);
    }),
    (P.useDebugValue = function () {}),
    (P.useDeferredValue = function (b, H) {
      return I.H.useDeferredValue(b, H);
    }),
    (P.useEffect = function (b, H) {
      return I.H.useEffect(b, H);
    }),
    (P.useEffectEvent = function (b) {
      return I.H.useEffectEvent(b);
    }),
    (P.useId = function () {
      return I.H.useId();
    }),
    (P.useImperativeHandle = function (b, H, Q) {
      return I.H.useImperativeHandle(b, H, Q);
    }),
    (P.useInsertionEffect = function (b, H) {
      return I.H.useInsertionEffect(b, H);
    }),
    (P.useLayoutEffect = function (b, H) {
      return I.H.useLayoutEffect(b, H);
    }),
    (P.useMemo = function (b, H) {
      return I.H.useMemo(b, H);
    }),
    (P.useOptimistic = function (b, H) {
      return I.H.useOptimistic(b, H);
    }),
    (P.useReducer = function (b, H, Q) {
      return I.H.useReducer(b, H, Q);
    }),
    (P.useRef = function (b) {
      return I.H.useRef(b);
    }),
    (P.useState = function (b) {
      return I.H.useState(b);
    }),
    (P.useSyncExternalStore = function (b, H, Q) {
      return I.H.useSyncExternalStore(b, H, Q);
    }),
    (P.useTransition = function () {
      return I.H.useTransition();
    }),
    (P.version = "19.2.0"),
    P
  );
}
var Pd;
function Gf() {
  return (Pd || ((Pd = 1), (Mf.exports = oy())), Mf.exports);
}
var T = Gf();
const dy = fy(T);
var Rf = { exports: {} },
  Rn = {},
  Df = { exports: {} },
  Uf = {};
var tm;
function my() {
  return (
    tm ||
      ((tm = 1),
      (function (c) {
        function r(M, G) {
          var F = M.length;
          M.push(G);
          t: for (; 0 < F; ) {
            var pt = (F - 1) >>> 1,
              Nt = M[pt];
            if (0 < d(Nt, G)) ((M[pt] = G), (M[F] = Nt), (F = pt));
            else break t;
          }
        }
        function o(M) {
          return M.length === 0 ? null : M[0];
        }
        function f(M) {
          if (M.length === 0) return null;
          var G = M[0],
            F = M.pop();
          if (F !== G) {
            M[0] = F;
            t: for (var pt = 0, Nt = M.length, b = Nt >>> 1; pt < b; ) {
              var H = 2 * (pt + 1) - 1,
                Q = M[H],
                K = H + 1,
                tt = M[K];
              if (0 > d(Q, F))
                K < Nt && 0 > d(tt, Q)
                  ? ((M[pt] = tt), (M[K] = F), (pt = K))
                  : ((M[pt] = Q), (M[H] = F), (pt = H));
              else if (K < Nt && 0 > d(tt, F))
                ((M[pt] = tt), (M[K] = F), (pt = K));
              else break t;
            }
          }
          return G;
        }
        function d(M, G) {
          var F = M.sortIndex - G.sortIndex;
          return F !== 0 ? F : M.id - G.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          c.unstable_now = function () {
            return v.now();
          };
        } else {
          var S = Date,
            C = S.now();
          c.unstable_now = function () {
            return S.now() - C;
          };
        }
        var p = [],
          h = [],
          A = 1,
          E = null,
          B = 3,
          w = !1,
          D = !1,
          Y = !1,
          X = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function yt(M) {
          for (var G = o(h); G !== null; ) {
            if (G.callback === null) f(h);
            else if (G.startTime <= M)
              (f(h), (G.sortIndex = G.expirationTime), r(p, G));
            else break;
            G = o(h);
          }
        }
        function it(M) {
          if (((Y = !1), yt(M), !D))
            if (o(p) !== null) ((D = !0), Tt || ((Tt = !0), Yt()));
            else {
              var G = o(h);
              G !== null && Ce(it, G.startTime - M);
            }
        }
        var Tt = !1,
          I = -1,
          Et = 5,
          rt = -1;
        function $() {
          return X ? !0 : !(c.unstable_now() - rt < Et);
        }
        function _t() {
          if (((X = !1), Tt)) {
            var M = c.unstable_now();
            rt = M;
            var G = !0;
            try {
              t: {
                ((D = !1), Y && ((Y = !1), q(I), (I = -1)), (w = !0));
                var F = B;
                try {
                  e: {
                    for (
                      yt(M), E = o(p);
                      E !== null && !(E.expirationTime > M && $());
                    ) {
                      var pt = E.callback;
                      if (typeof pt == "function") {
                        ((E.callback = null), (B = E.priorityLevel));
                        var Nt = pt(E.expirationTime <= M);
                        if (((M = c.unstable_now()), typeof Nt == "function")) {
                          ((E.callback = Nt), yt(M), (G = !0));
                          break e;
                        }
                        (E === o(p) && f(p), yt(M));
                      } else f(p);
                      E = o(p);
                    }
                    if (E !== null) G = !0;
                    else {
                      var b = o(h);
                      (b !== null && Ce(it, b.startTime - M), (G = !1));
                    }
                  }
                  break t;
                } finally {
                  ((E = null), (B = F), (w = !1));
                }
                G = void 0;
              }
            } finally {
              G ? Yt() : (Tt = !1);
            }
          }
        }
        var Yt;
        if (typeof V == "function")
          Yt = function () {
            V(_t);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            Le = we.port2;
          ((we.port1.onmessage = _t),
            (Yt = function () {
              Le.postMessage(null);
            }));
        } else
          Yt = function () {
            L(_t, 0);
          };
        function Ce(M, G) {
          I = L(function () {
            M(c.unstable_now());
          }, G);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (c.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Et = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (c.unstable_next = function (M) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = B;
            }
            var F = B;
            B = G;
            try {
              return M();
            } finally {
              B = F;
            }
          }),
          (c.unstable_requestPaint = function () {
            X = !0;
          }),
          (c.unstable_runWithPriority = function (M, G) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var F = B;
            B = M;
            try {
              return G();
            } finally {
              B = F;
            }
          }),
          (c.unstable_scheduleCallback = function (M, G, F) {
            var pt = c.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? pt + F : pt))
                : (F = pt),
              M)
            ) {
              case 1:
                var Nt = -1;
                break;
              case 2:
                Nt = 250;
                break;
              case 5:
                Nt = 1073741823;
                break;
              case 4:
                Nt = 1e4;
                break;
              default:
                Nt = 5e3;
            }
            return (
              (Nt = F + Nt),
              (M = {
                id: A++,
                callback: G,
                priorityLevel: M,
                startTime: F,
                expirationTime: Nt,
                sortIndex: -1,
              }),
              F > pt
                ? ((M.sortIndex = F),
                  r(h, M),
                  o(p) === null &&
                    M === o(h) &&
                    (Y ? (q(I), (I = -1)) : (Y = !0), Ce(it, F - pt)))
                : ((M.sortIndex = Nt),
                  r(p, M),
                  D || w || ((D = !0), Tt || ((Tt = !0), Yt()))),
              M
            );
          }),
          (c.unstable_shouldYield = $),
          (c.unstable_wrapCallback = function (M) {
            var G = B;
            return function () {
              var F = B;
              B = G;
              try {
                return M.apply(this, arguments);
              } finally {
                B = F;
              }
            };
          }));
      })(Uf)),
    Uf
  );
}
var em;
function hy() {
  return (em || ((em = 1), (Df.exports = my())), Df.exports);
}
var Hf = { exports: {} },
  $t = {};
var lm;
function yy() {
  if (lm) return $t;
  lm = 1;
  var c = Gf();
  function r(p) {
    var h = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        h += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function v(p, h, A) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: h,
      implementation: A,
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(p, h) {
    if (p === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (p, h) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(r(299));
      return v(p, h, null, A);
    }),
    ($t.flushSync = function (p) {
      var h = S.T,
        A = f.p;
      try {
        if (((S.T = null), (f.p = 2), p)) return p();
      } finally {
        ((S.T = h), (f.p = A), f.d.f());
      }
    }),
    ($t.preconnect = function (p, h) {
      typeof p == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        f.d.C(p, h));
    }),
    ($t.prefetchDNS = function (p) {
      typeof p == "string" && f.d.D(p);
    }),
    ($t.preinit = function (p, h) {
      if (typeof p == "string" && h && typeof h.as == "string") {
        var A = h.as,
          E = C(A, h.crossOrigin),
          B = typeof h.integrity == "string" ? h.integrity : void 0,
          w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        A === "style"
          ? f.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: E,
              integrity: B,
              fetchPriority: w,
            })
          : A === "script" &&
            f.d.X(p, {
              crossOrigin: E,
              integrity: B,
              fetchPriority: w,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (p, h) {
      if (typeof p == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var A = C(h.as, h.crossOrigin);
            f.d.M(p, {
              crossOrigin: A,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && f.d.M(p);
    }),
    ($t.preload = function (p, h) {
      if (
        typeof p == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var A = h.as,
          E = C(A, h.crossOrigin);
        f.d.L(p, A, {
          crossOrigin: E,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (p, h) {
      if (typeof p == "string")
        if (h) {
          var A = C(h.as, h.crossOrigin);
          f.d.m(p, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: A,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else f.d.m(p);
    }),
    ($t.requestFormReset = function (p) {
      f.d.r(p);
    }),
    ($t.unstable_batchedUpdates = function (p, h) {
      return p(h);
    }),
    ($t.useFormState = function (p, h, A) {
      return S.H.useFormState(p, h, A);
    }),
    ($t.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    ($t.version = "19.2.0"),
    $t
  );
}
var am;
function vy() {
  if (am) return Hf.exports;
  am = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (Hf.exports = yy()), Hf.exports);
}
var nm;
function gy() {
  if (nm) return Rn;
  nm = 1;
  var c = hy(),
    r = Gf(),
    o = vy();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function v(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (v(t) !== t) throw Error(f(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = v(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (p(n), t);
          if (u === a) return (p(n), e);
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function A(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = A(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign,
    B = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    yt = Symbol.for("react.forward_ref"),
    it = Symbol.for("react.suspense"),
    Tt = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Et = Symbol.for("react.lazy"),
    rt = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function Yt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (_t && t[_t]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var we = Symbol.for("react.client.reference");
  function Le(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === we ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Y:
        return "Fragment";
      case L:
        return "Profiler";
      case X:
        return "StrictMode";
      case it:
        return "Suspense";
      case Tt:
        return "SuspenseList";
      case rt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case yt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return (
            (e = t.displayName || null),
            e !== null ? e : Le(t.type) || "Memo"
          );
        case Et:
          ((e = t._payload), (t = t._init));
          try {
            return Le(t(e));
          } catch {}
      }
    return null;
  }
  var Ce = Array.isArray,
    M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    pt = [],
    Nt = -1;
  function b(t) {
    return { current: t };
  }
  function H(t) {
    0 > Nt || ((t.current = pt[Nt]), (pt[Nt] = null), Nt--);
  }
  function Q(t, e) {
    (Nt++, (pt[Nt] = t.current), (t.current = e));
  }
  var K = b(null),
    tt = b(null),
    at = b(null),
    ht = b(null);
  function Wt(t, e) {
    switch ((Q(at, e), Q(tt, t), Q(K, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? bd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = bd(e)), (t = xd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (H(K), Q(K, t));
  }
  function Dt() {
    (H(K), H(tt), H(at));
  }
  function wa(t) {
    t.memoizedState !== null && Q(ht, t);
    var e = K.current,
      l = xd(e, t.type);
    e !== l && (Q(tt, t), Q(K, l));
  }
  function Yn(t) {
    (tt.current === t && (H(K), H(tt)),
      ht.current === t && (H(ht), (Cn._currentValue = F)));
  }
  var oi, kf;
  function Ml(t) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((oi = (e && e[1]) || ""),
          (kf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      oi +
      t +
      kf
    );
  }
  var di = !1;
  function mi(t, e) {
    if (!t || di) return "";
    di = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (j) {
                  var _ = j;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (j) {
                  _ = j;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                _ = j;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (j) {
            if (j && _ && typeof j.stack == "string") return [j.stack, _.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var y = i.split(`
`),
          z = s.split(`
`);
        for (
          n = a = 0;
          a < y.length && !y[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < z.length && !z[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === y.length || n === z.length)
          for (
            a = y.length - 1, n = z.length - 1;
            1 <= a && 0 <= n && y[a] !== z[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== z[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || y[a] !== z[n])) {
                  var O =
                    `
` + y[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((di = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Ml(l) : "";
  }
  function qm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ml(t.type);
      case 16:
        return Ml("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Ml("Suspense Fallback")
          : Ml("Suspense");
      case 19:
        return Ml("SuspenseList");
      case 0:
      case 15:
        return mi(t.type, !1);
      case 11:
        return mi(t.type.render, !1);
      case 1:
        return mi(t.type, !0);
      case 31:
        return Ml("Activity");
      default:
        return "";
    }
  }
  function $f(t) {
    try {
      var e = "",
        l = null;
      do ((e += qm(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var hi = Object.prototype.hasOwnProperty,
    yi = c.unstable_scheduleCallback,
    vi = c.unstable_cancelCallback,
    Ym = c.unstable_shouldYield,
    Gm = c.unstable_requestPaint,
    ie = c.unstable_now,
    Qm = c.unstable_getCurrentPriorityLevel,
    Wf = c.unstable_ImmediatePriority,
    Ff = c.unstable_UserBlockingPriority,
    Gn = c.unstable_NormalPriority,
    Xm = c.unstable_LowPriority,
    If = c.unstable_IdlePriority,
    Zm = c.log,
    Vm = c.unstable_setDisableYieldValue,
    La = null,
    ce = null;
  function il(t) {
    if (
      (typeof Zm == "function" && Vm(t),
      ce && typeof ce.setStrictMode == "function")
    )
      try {
        ce.setStrictMode(La, t);
      } catch {}
  }
  var fe = Math.clz32 ? Math.clz32 : km,
    Km = Math.log,
    Jm = Math.LN2;
  function km(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Km(t) / Jm) | 0)) | 0);
  }
  var Qn = 256,
    Xn = 262144,
    Zn = 4194304;
  function Rl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Rl(a))
            : ((i &= s),
              i !== 0
                ? (n = Rl(i))
                : l || ((l = s & ~t), l !== 0 && (n = Rl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Rl(s))
            : i !== 0
              ? (n = Rl(i))
              : l || ((l = a & ~t), l !== 0 && (n = Rl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n),
            (l = e & -e),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function qa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function $m(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var t = Zn;
    return ((Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), t);
  }
  function gi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ya(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Wm(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var s = t.entanglements,
      y = t.expirationTimes,
      z = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var O = 31 - fe(l),
        U = 1 << O;
      ((s[O] = 0), (y[O] = -1));
      var _ = z[O];
      if (_ !== null)
        for (z[O] = null, O = 0; O < _.length; O++) {
          var j = _[O];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~U;
    }
    (a !== 0 && ts(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function ts(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - fe(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function es(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - fe(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function ls(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : pi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function pi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function bi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function as() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Xd(t.type));
  }
  function ns(t, e) {
    var l = G.p;
    try {
      return ((G.p = t), e());
    } finally {
      G.p = l;
    }
  }
  var cl = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + cl,
    Pt = "__reactProps$" + cl,
    Wl = "__reactContainer$" + cl,
    xi = "__reactEvents$" + cl,
    Fm = "__reactListeners$" + cl,
    Im = "__reactHandles$" + cl,
    us = "__reactResources$" + cl,
    Ga = "__reactMarker$" + cl;
  function Si(t) {
    (delete t[Zt], delete t[Pt], delete t[xi], delete t[Fm], delete t[Im]);
  }
  function Fl(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Wl] || l[Zt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Cd(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = Cd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Il(t) {
    if ((t = t[Zt] || t[Wl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Pl(t) {
    var e = t[us];
    return (
      e ||
        (e = t[us] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Qt(t) {
    t[Ga] = !0;
  }
  var is = new Set(),
    cs = {};
  function Dl(t, e) {
    (ta(t, e), ta(t + "Capture", e));
  }
  function ta(t, e) {
    for (cs[t] = e, t = 0; t < e.length; t++) is.add(e[t]);
  }
  var Pm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    fs = {},
    ss = {};
  function th(t) {
    return hi.call(ss, t)
      ? !0
      : hi.call(fs, t)
        ? !1
        : Pm.test(t)
          ? (ss[t] = !0)
          : ((fs[t] = !0), !1);
  }
  function Kn(t, e, l) {
    if (th(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Jn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function qe(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function rs(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function eh(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Ei(t) {
    if (!t._valueTracker) {
      var e = rs(t) ? "checked" : "value";
      t._valueTracker = eh(t, e, "" + t[e]);
    }
  }
  function os(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = rs(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function kn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var lh = /[\n"\\]/g;
  function ge(t) {
    return t.replace(lh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ni(t, e, l, a, n, u, i, s) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ve(e))
          : t.value !== "" + ve(e) && (t.value = "" + ve(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? zi(t, i, ve(e))
        : l != null
          ? zi(t, i, ve(l))
          : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + ve(s))
        : t.removeAttribute("name"));
  }
  function ds(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        Ei(t);
        return;
      }
      ((l = l != null ? "" + ve(l) : ""),
        (e = e != null ? "" + ve(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      Ei(t));
  }
  function zi(t, e, l) {
    (e === "number" && kn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function ea(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + ve(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ms(t, e, l) {
    if (
      e != null &&
      ((e = "" + ve(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ve(l) : "";
  }
  function hs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ce(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = ve(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      Ei(t));
  }
  function la(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ah = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ys(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || ah.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function vs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && ys(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && ys(t, u, e[u]);
  }
  function Ti(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    uh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $n(t) {
    return uh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ye() {}
  var Ai = null;
  function Ci(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var aa = null,
    na = null;
  function gs(t) {
    var e = Il(t);
    if (e && (t = e.stateNode)) {
      var l = t[Pt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ni(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ge("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Pt] || null;
                if (!n) throw Error(f(90));
                Ni(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && os(a));
          }
          break t;
        case "textarea":
          ms(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && ea(t, !!l.multiple, e, !1));
      }
    }
  }
  var _i = !1;
  function ps(t, e, l) {
    if (_i) return t(e, l);
    _i = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((_i = !1),
        (aa !== null || na !== null) &&
          (Bu(), aa && ((e = aa), (t = na), (na = aa = null), gs(e), t)))
      )
        for (e = 0; e < t.length; e++) gs(t[e]);
    }
  }
  function Xa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Pt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Ge = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ji = !1;
  if (Ge)
    try {
      var Za = {};
      (Object.defineProperty(Za, "passive", {
        get: function () {
          ji = !0;
        },
      }),
        window.addEventListener("test", Za, Za),
        window.removeEventListener("test", Za, Za));
    } catch {
      ji = !1;
    }
  var fl = null,
    Oi = null,
    Wn = null;
  function bs() {
    if (Wn) return Wn;
    var t,
      e = Oi,
      l = e.length,
      a,
      n = "value" in fl ? fl.value : fl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (Wn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Fn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function In() {
    return !0;
  }
  function xs() {
    return !1;
  }
  function te(t) {
    function e(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? In
          : xs),
        (this.isPropagationStopped = xs),
        this
      );
    }
    return (
      E(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = In));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = In));
        },
        persist: function () {},
        isPersistent: In,
      }),
      e
    );
  }
  var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pn = te(Ul),
    Va = E({}, Ul, { view: 0, detail: 0 }),
    ih = te(Va),
    Mi,
    Ri,
    Ka,
    tu = E({}, Va, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ka &&
              (Ka && t.type === "mousemove"
                ? ((Mi = t.screenX - Ka.screenX), (Ri = t.screenY - Ka.screenY))
                : (Ri = Mi = 0),
              (Ka = t)),
            Mi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ri;
      },
    }),
    Ss = te(tu),
    ch = E({}, tu, { dataTransfer: 0 }),
    fh = te(ch),
    sh = E({}, Va, { relatedTarget: 0 }),
    Di = te(sh),
    rh = E({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oh = te(rh),
    dh = E({}, Ul, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    mh = te(dh),
    hh = E({}, Ul, { data: 0 }),
    Es = te(hh),
    yh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    vh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ph(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = gh[t])
        ? !!e[t]
        : !1;
  }
  function Ui() {
    return ph;
  }
  var bh = E({}, Va, {
      key: function (t) {
        if (t.key) {
          var e = yh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Fn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? vh[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ui,
      charCode: function (t) {
        return t.type === "keypress" ? Fn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Fn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    xh = te(bh),
    Sh = E({}, tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ns = te(Sh),
    Eh = E({}, Va, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui,
    }),
    Nh = te(Eh),
    zh = E({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Th = te(zh),
    Ah = E({}, tu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ch = te(Ah),
    _h = E({}, Ul, { newState: 0, oldState: 0 }),
    jh = te(_h),
    Oh = [9, 13, 27, 32],
    Hi = Ge && "CompositionEvent" in window,
    Ja = null;
  Ge && "documentMode" in document && (Ja = document.documentMode);
  var Mh = Ge && "TextEvent" in window && !Ja,
    zs = Ge && (!Hi || (Ja && 8 < Ja && 11 >= Ja)),
    Ts = " ",
    As = !1;
  function Cs(t, e) {
    switch (t) {
      case "keyup":
        return Oh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _s(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var ua = !1;
  function Rh(t, e) {
    switch (t) {
      case "compositionend":
        return _s(e);
      case "keypress":
        return e.which !== 32 ? null : ((As = !0), Ts);
      case "textInput":
        return ((t = e.data), t === Ts && As ? null : t);
      default:
        return null;
    }
  }
  function Dh(t, e) {
    if (ua)
      return t === "compositionend" || (!Hi && Cs(t, e))
        ? ((t = bs()), (Wn = Oi = fl = null), (ua = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Uh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function js(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Uh[t.type] : e === "textarea";
  }
  function Os(t, e, l, a) {
    (aa ? (na ? na.push(a) : (na = [a])) : (aa = a),
      (e = Xu(e, "onChange")),
      0 < e.length &&
        ((l = new Pn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var ka = null,
    $a = null;
  function Hh(t) {
    md(t, 0);
  }
  function eu(t) {
    var e = Qa(t);
    if (os(e)) return t;
  }
  function Ms(t, e) {
    if (t === "change") return e;
  }
  var Rs = !1;
  if (Ge) {
    var Bi;
    if (Ge) {
      var wi = "oninput" in document;
      if (!wi) {
        var Ds = document.createElement("div");
        (Ds.setAttribute("oninput", "return;"),
          (wi = typeof Ds.oninput == "function"));
      }
      Bi = wi;
    } else Bi = !1;
    Rs = Bi && (!document.documentMode || 9 < document.documentMode);
  }
  function Us() {
    ka && (ka.detachEvent("onpropertychange", Hs), ($a = ka = null));
  }
  function Hs(t) {
    if (t.propertyName === "value" && eu($a)) {
      var e = [];
      (Os(e, $a, t, Ci(t)), ps(Hh, e));
    }
  }
  function Bh(t, e, l) {
    t === "focusin"
      ? (Us(), (ka = e), ($a = l), ka.attachEvent("onpropertychange", Hs))
      : t === "focusout" && Us();
  }
  function wh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return eu($a);
  }
  function Lh(t, e) {
    if (t === "click") return eu(e);
  }
  function qh(t, e) {
    if (t === "input" || t === "change") return eu(e);
  }
  function Yh(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var se = typeof Object.is == "function" ? Object.is : Yh;
  function Wa(t, e) {
    if (se(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(e, n) || !se(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Bs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ws(t, e) {
    var l = Bs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Bs(l);
    }
  }
  function Ls(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Ls(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function qs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = kn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = kn(t.document);
    }
    return e;
  }
  function Li(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Gh = Ge && "documentMode" in document && 11 >= document.documentMode,
    ia = null,
    qi = null,
    Fa = null,
    Yi = !1;
  function Ys(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yi ||
      ia == null ||
      ia !== kn(a) ||
      ((a = ia),
      "selectionStart" in a && Li(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Fa && Wa(Fa, a)) ||
        ((Fa = a),
        (a = Xu(qi, "onSelect")),
        0 < a.length &&
          ((e = new Pn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ia))));
  }
  function Hl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ca = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd"),
    },
    Gi = {},
    Gs = {};
  Ge &&
    ((Gs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function Bl(t) {
    if (Gi[t]) return Gi[t];
    if (!ca[t]) return t;
    var e = ca[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Gs) return (Gi[t] = e[l]);
    return t;
  }
  var Qs = Bl("animationend"),
    Xs = Bl("animationiteration"),
    Zs = Bl("animationstart"),
    Qh = Bl("transitionrun"),
    Xh = Bl("transitionstart"),
    Zh = Bl("transitioncancel"),
    Vs = Bl("transitionend"),
    Ks = new Map(),
    Qi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Qi.push("scrollEnd");
  function _e(t, e) {
    (Ks.set(t, e), Dl(e, [t]));
  }
  var lu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    pe = [],
    fa = 0,
    Xi = 0;
  function au() {
    for (var t = fa, e = (Xi = fa = 0); e < t; ) {
      var l = pe[e];
      pe[e++] = null;
      var a = pe[e];
      pe[e++] = null;
      var n = pe[e];
      pe[e++] = null;
      var u = pe[e];
      if (((pe[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && Js(l, n, u);
    }
  }
  function nu(t, e, l, a) {
    ((pe[fa++] = t),
      (pe[fa++] = e),
      (pe[fa++] = l),
      (pe[fa++] = a),
      (Xi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Zi(t, e, l, a) {
    return (nu(t, e, l, a), uu(t));
  }
  function wl(t, e) {
    return (nu(t, null, null, e), uu(t));
  }
  function Js(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - fe(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function uu(t) {
    if (50 < xn) throw ((xn = 0), (Pc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var sa = {};
  function Vh(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function re(t, e, l, a) {
    return new Vh(t, e, l, a);
  }
  function Vi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Qe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = re(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function ks(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function iu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == "function")) Vi(t) && (i = 1);
    else if (typeof t == "string")
      i = W0(t, l, K.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case rt:
          return (
            (t = re(31, l, e, n)),
            (t.elementType = rt),
            (t.lanes = u),
            t
          );
        case Y:
          return Ll(l.children, n, u, e);
        case X:
          ((i = 8), (n |= 24));
          break;
        case L:
          return (
            (t = re(12, l, e, n | 2)),
            (t.elementType = L),
            (t.lanes = u),
            t
          );
        case it:
          return (
            (t = re(13, l, e, n)),
            (t.elementType = it),
            (t.lanes = u),
            t
          );
        case Tt:
          return (
            (t = re(19, l, e, n)),
            (t.elementType = Tt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case V:
                i = 10;
                break t;
              case q:
                i = 9;
                break t;
              case yt:
                i = 11;
                break t;
              case I:
                i = 14;
                break t;
              case Et:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = re(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Ll(t, e, l, a) {
    return ((t = re(7, t, a, e)), (t.lanes = l), t);
  }
  function Ki(t, e, l) {
    return ((t = re(6, t, null, e)), (t.lanes = l), t);
  }
  function $s(t) {
    var e = re(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ji(t, e, l) {
    return (
      (e = re(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ws = new WeakMap();
  function be(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ws.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: $f(e) }), Ws.set(t, e), e);
    }
    return { value: t, source: e, stack: $f(e) };
  }
  var ra = [],
    oa = 0,
    cu = null,
    Ia = 0,
    xe = [],
    Se = 0,
    sl = null,
    Me = 1,
    Re = "";
  function Xe(t, e) {
    ((ra[oa++] = Ia), (ra[oa++] = cu), (cu = t), (Ia = e));
  }
  function Fs(t, e, l) {
    ((xe[Se++] = Me), (xe[Se++] = Re), (xe[Se++] = sl), (sl = t));
    var a = Me;
    t = Re;
    var n = 32 - fe(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - fe(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Me = (1 << (32 - fe(e) + n)) | (l << n) | a),
        (Re = u + t));
    } else ((Me = (1 << u) | (l << n) | a), (Re = t));
  }
  function ki(t) {
    t.return !== null && (Xe(t, 1), Fs(t, 1, 0));
  }
  function $i(t) {
    for (; t === cu; )
      ((cu = ra[--oa]), (ra[oa] = null), (Ia = ra[--oa]), (ra[oa] = null));
    for (; t === sl; )
      ((sl = xe[--Se]),
        (xe[Se] = null),
        (Re = xe[--Se]),
        (xe[Se] = null),
        (Me = xe[--Se]),
        (xe[Se] = null));
  }
  function Is(t, e) {
    ((xe[Se++] = Me),
      (xe[Se++] = Re),
      (xe[Se++] = sl),
      (Me = e.id),
      (Re = e.overflow),
      (sl = t));
  }
  var Vt = null,
    At = null,
    st = !1,
    rl = null,
    Ee = !1,
    Wi = Error(f(519));
  function ol(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Pa(be(e, t)), Wi);
  }
  function Ps(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[Pt] = a), l)) {
      case "dialog":
        (ut("cancel", e), ut("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) ut(En[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ut("error", e), ut("load", e));
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        (ut("invalid", e),
          ds(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        (ut("invalid", e), hs(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      gd(e.textContent, l)
        ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          a.onScroll != null && ut("scroll", e),
          a.onScrollEnd != null && ut("scrollend", e),
          a.onClick != null && (e.onclick = Ye),
          (e = !0))
        : (e = !1),
      e || ol(t, !0));
  }
  function tr(t) {
    for (Vt = t.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 31:
        case 13:
          Ee = !1;
          return;
        case 27:
        case 3:
          Ee = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function da(t) {
    if (t !== Vt) return !1;
    if (!st) return (tr(t), (st = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || yf(t.type, t.memoizedProps))),
        (l = !l)),
      l && At && ol(t),
      tr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      At = Ad(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      At = Ad(t);
    } else
      e === 27
        ? ((e = At), Tl(t.type) ? ((t = xf), (xf = null), (At = t)) : (At = e))
        : (At = Vt ? ze(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ql() {
    ((At = Vt = null), (st = !1));
  }
  function Fi() {
    var t = rl;
    return (
      t !== null &&
        (ne === null ? (ne = t) : ne.push.apply(ne, t), (rl = null)),
      t
    );
  }
  function Pa(t) {
    rl === null ? (rl = [t]) : rl.push(t);
  }
  var Ii = b(null),
    Yl = null,
    Ze = null;
  function dl(t, e, l) {
    (Q(Ii, e._currentValue), (e._currentValue = l));
  }
  function Ve(t) {
    ((t._currentValue = Ii.current), H(Ii));
  }
  function Pi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function tc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var y = 0; y < e.length; y++)
            if (s.context === e[y]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Pi(u.return, l, t),
                a || (i = null));
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Pi(i, l, t),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ma(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          se(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === ht.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Cn) : (t = [Cn]));
      }
      n = n.return;
    }
    (t !== null && tc(e, t, l, a), (e.flags |= 262144));
  }
  function fu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!se(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Gl(t) {
    ((Yl = t),
      (Ze = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Kt(t) {
    return er(Yl, t);
  }
  function su(t, e) {
    return (Yl === null && Gl(t), er(t, e));
  }
  function er(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ze === null)) {
      if (t === null) throw Error(f(308));
      ((Ze = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Ze = Ze.next = e;
    return l;
  }
  var Kh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    Jh = c.unstable_scheduleCallback,
    kh = c.unstable_NormalPriority,
    Bt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ec() {
    return { controller: new Kh(), data: new Map(), refCount: 0 };
  }
  function tn(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Jh(kh, function () {
          t.controller.abort();
        }));
  }
  var en = null,
    lc = 0,
    ha = 0,
    ya = null;
  function $h(t, e) {
    if (en === null) {
      var l = (en = []);
      ((lc = 0),
        (ha = uf()),
        (ya = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (lc++, e.then(lr, lr), e);
  }
  function lr() {
    if (--lc === 0 && en !== null) {
      ya !== null && (ya.status = "fulfilled");
      var t = en;
      ((en = null), (ha = 0), (ya = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Wh(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var ar = M.S;
  M.S = function (t, e) {
    ((Go = ie()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        $h(t, e),
      ar !== null && ar(t, e));
  };
  var Ql = b(null);
  function ac() {
    var t = Ql.current;
    return t !== null ? t : zt.pooledCache;
  }
  function ru(t, e) {
    e === null ? Q(Ql, Ql.current) : Q(Ql, e.pool);
  }
  function nr() {
    var t = ac();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var va = Error(f(460)),
    nc = Error(f(474)),
    ou = Error(f(542)),
    du = { then: function () {} };
  function ur(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function ir(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ye, Ye), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), fr(t), t);
      default:
        if (typeof e.status == "string") e.then(Ye, Ye);
        else {
          if (((t = zt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), fr(t), t);
        }
        throw ((Zl = e), va);
    }
  }
  function Xl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Zl = l), va)
        : l;
    }
  }
  var Zl = null;
  function cr() {
    if (Zl === null) throw Error(f(459));
    var t = Zl;
    return ((Zl = null), t);
  }
  function fr(t) {
    if (t === va || t === ou) throw Error(f(483));
  }
  var ga = null,
    ln = 0;
  function mu(t) {
    var e = ln;
    return ((ln += 1), ga === null && (ga = []), ir(ga, t, e));
  }
  function an(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function hu(t, e) {
    throw e.$$typeof === B
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function sr(t) {
    function e(x, g) {
      if (t) {
        var N = x.deletions;
        N === null ? ((x.deletions = [g]), (x.flags |= 16)) : N.push(g);
      }
    }
    function l(x, g) {
      if (!t) return null;
      for (; g !== null; ) (e(x, g), (g = g.sibling));
      return null;
    }
    function a(x) {
      for (var g = new Map(); x !== null; )
        (x.key !== null ? g.set(x.key, x) : g.set(x.index, x), (x = x.sibling));
      return g;
    }
    function n(x, g) {
      return ((x = Qe(x, g)), (x.index = 0), (x.sibling = null), x);
    }
    function u(x, g, N) {
      return (
        (x.index = N),
        t
          ? ((N = x.alternate),
            N !== null
              ? ((N = N.index), N < g ? ((x.flags |= 67108866), g) : N)
              : ((x.flags |= 67108866), g))
          : ((x.flags |= 1048576), g)
      );
    }
    function i(x) {
      return (t && x.alternate === null && (x.flags |= 67108866), x);
    }
    function s(x, g, N, R) {
      return g === null || g.tag !== 6
        ? ((g = Ki(N, x.mode, R)), (g.return = x), g)
        : ((g = n(g, N)), (g.return = x), g);
    }
    function y(x, g, N, R) {
      var k = N.type;
      return k === Y
        ? O(x, g, N.props.children, R, N.key)
        : g !== null &&
            (g.elementType === k ||
              (typeof k == "object" &&
                k !== null &&
                k.$$typeof === Et &&
                Xl(k) === g.type))
          ? ((g = n(g, N.props)), an(g, N), (g.return = x), g)
          : ((g = iu(N.type, N.key, N.props, null, x.mode, R)),
            an(g, N),
            (g.return = x),
            g);
    }
    function z(x, g, N, R) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== N.containerInfo ||
        g.stateNode.implementation !== N.implementation
        ? ((g = Ji(N, x.mode, R)), (g.return = x), g)
        : ((g = n(g, N.children || [])), (g.return = x), g);
    }
    function O(x, g, N, R, k) {
      return g === null || g.tag !== 7
        ? ((g = Ll(N, x.mode, R, k)), (g.return = x), g)
        : ((g = n(g, N)), (g.return = x), g);
    }
    function U(x, g, N) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return ((g = Ki("" + g, x.mode, N)), (g.return = x), g);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case w:
            return (
              (N = iu(g.type, g.key, g.props, null, x.mode, N)),
              an(N, g),
              (N.return = x),
              N
            );
          case D:
            return ((g = Ji(g, x.mode, N)), (g.return = x), g);
          case Et:
            return ((g = Xl(g)), U(x, g, N));
        }
        if (Ce(g) || Yt(g))
          return ((g = Ll(g, x.mode, N, null)), (g.return = x), g);
        if (typeof g.then == "function") return U(x, mu(g), N);
        if (g.$$typeof === V) return U(x, su(x, g), N);
        hu(x, g);
      }
      return null;
    }
    function _(x, g, N, R) {
      var k = g !== null ? g.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return k !== null ? null : s(x, g, "" + N, R);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case w:
            return N.key === k ? y(x, g, N, R) : null;
          case D:
            return N.key === k ? z(x, g, N, R) : null;
          case Et:
            return ((N = Xl(N)), _(x, g, N, R));
        }
        if (Ce(N) || Yt(N)) return k !== null ? null : O(x, g, N, R, null);
        if (typeof N.then == "function") return _(x, g, mu(N), R);
        if (N.$$typeof === V) return _(x, g, su(x, N), R);
        hu(x, N);
      }
      return null;
    }
    function j(x, g, N, R, k) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((x = x.get(N) || null), s(g, x, "" + R, k));
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case w:
            return (
              (x = x.get(R.key === null ? N : R.key) || null),
              y(g, x, R, k)
            );
          case D:
            return (
              (x = x.get(R.key === null ? N : R.key) || null),
              z(g, x, R, k)
            );
          case Et:
            return ((R = Xl(R)), j(x, g, N, R, k));
        }
        if (Ce(R) || Yt(R))
          return ((x = x.get(N) || null), O(g, x, R, k, null));
        if (typeof R.then == "function") return j(x, g, N, mu(R), k);
        if (R.$$typeof === V) return j(x, g, N, su(g, R), k);
        hu(g, R);
      }
      return null;
    }
    function Z(x, g, N, R) {
      for (
        var k = null, ot = null, J = g, lt = (g = 0), ft = null;
        J !== null && lt < N.length;
        lt++
      ) {
        J.index > lt ? ((ft = J), (J = null)) : (ft = J.sibling);
        var dt = _(x, J, N[lt], R);
        if (dt === null) {
          J === null && (J = ft);
          break;
        }
        (t && J && dt.alternate === null && e(x, J),
          (g = u(dt, g, lt)),
          ot === null ? (k = dt) : (ot.sibling = dt),
          (ot = dt),
          (J = ft));
      }
      if (lt === N.length) return (l(x, J), st && Xe(x, lt), k);
      if (J === null) {
        for (; lt < N.length; lt++)
          ((J = U(x, N[lt], R)),
            J !== null &&
              ((g = u(J, g, lt)),
              ot === null ? (k = J) : (ot.sibling = J),
              (ot = J)));
        return (st && Xe(x, lt), k);
      }
      for (J = a(J); lt < N.length; lt++)
        ((ft = j(J, x, lt, N[lt], R)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              J.delete(ft.key === null ? lt : ft.key),
            (g = u(ft, g, lt)),
            ot === null ? (k = ft) : (ot.sibling = ft),
            (ot = ft)));
      return (
        t &&
          J.forEach(function (Ol) {
            return e(x, Ol);
          }),
        st && Xe(x, lt),
        k
      );
    }
    function W(x, g, N, R) {
      if (N == null) throw Error(f(151));
      for (
        var k = null, ot = null, J = g, lt = (g = 0), ft = null, dt = N.next();
        J !== null && !dt.done;
        lt++, dt = N.next()
      ) {
        J.index > lt ? ((ft = J), (J = null)) : (ft = J.sibling);
        var Ol = _(x, J, dt.value, R);
        if (Ol === null) {
          J === null && (J = ft);
          break;
        }
        (t && J && Ol.alternate === null && e(x, J),
          (g = u(Ol, g, lt)),
          ot === null ? (k = Ol) : (ot.sibling = Ol),
          (ot = Ol),
          (J = ft));
      }
      if (dt.done) return (l(x, J), st && Xe(x, lt), k);
      if (J === null) {
        for (; !dt.done; lt++, dt = N.next())
          ((dt = U(x, dt.value, R)),
            dt !== null &&
              ((g = u(dt, g, lt)),
              ot === null ? (k = dt) : (ot.sibling = dt),
              (ot = dt)));
        return (st && Xe(x, lt), k);
      }
      for (J = a(J); !dt.done; lt++, dt = N.next())
        ((dt = j(J, x, lt, dt.value, R)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              J.delete(dt.key === null ? lt : dt.key),
            (g = u(dt, g, lt)),
            ot === null ? (k = dt) : (ot.sibling = dt),
            (ot = dt)));
      return (
        t &&
          J.forEach(function (cy) {
            return e(x, cy);
          }),
        st && Xe(x, lt),
        k
      );
    }
    function St(x, g, N, R) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === Y &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case w:
            t: {
              for (var k = N.key; g !== null; ) {
                if (g.key === k) {
                  if (((k = N.type), k === Y)) {
                    if (g.tag === 7) {
                      (l(x, g.sibling),
                        (R = n(g, N.props.children)),
                        (R.return = x),
                        (x = R));
                      break t;
                    }
                  } else if (
                    g.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === Et &&
                      Xl(k) === g.type)
                  ) {
                    (l(x, g.sibling),
                      (R = n(g, N.props)),
                      an(R, N),
                      (R.return = x),
                      (x = R));
                    break t;
                  }
                  l(x, g);
                  break;
                } else e(x, g);
                g = g.sibling;
              }
              N.type === Y
                ? ((R = Ll(N.props.children, x.mode, R, N.key)),
                  (R.return = x),
                  (x = R))
                : ((R = iu(N.type, N.key, N.props, null, x.mode, R)),
                  an(R, N),
                  (R.return = x),
                  (x = R));
            }
            return i(x);
          case D:
            t: {
              for (k = N.key; g !== null; ) {
                if (g.key === k)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === N.containerInfo &&
                    g.stateNode.implementation === N.implementation
                  ) {
                    (l(x, g.sibling),
                      (R = n(g, N.children || [])),
                      (R.return = x),
                      (x = R));
                    break t;
                  } else {
                    l(x, g);
                    break;
                  }
                else e(x, g);
                g = g.sibling;
              }
              ((R = Ji(N, x.mode, R)), (R.return = x), (x = R));
            }
            return i(x);
          case Et:
            return ((N = Xl(N)), St(x, g, N, R));
        }
        if (Ce(N)) return Z(x, g, N, R);
        if (Yt(N)) {
          if (((k = Yt(N)), typeof k != "function")) throw Error(f(150));
          return ((N = k.call(N)), W(x, g, N, R));
        }
        if (typeof N.then == "function") return St(x, g, mu(N), R);
        if (N.$$typeof === V) return St(x, g, su(x, N), R);
        hu(x, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          g !== null && g.tag === 6
            ? (l(x, g.sibling), (R = n(g, N)), (R.return = x), (x = R))
            : (l(x, g), (R = Ki(N, x.mode, R)), (R.return = x), (x = R)),
          i(x))
        : l(x, g);
    }
    return function (x, g, N, R) {
      try {
        ln = 0;
        var k = St(x, g, N, R);
        return ((ga = null), k);
      } catch (J) {
        if (J === va || J === ou) throw J;
        var ot = re(29, J, null, x.mode);
        return ((ot.lanes = R), (ot.return = x), ot);
      } finally {
      }
    };
  }
  var Vl = sr(!0),
    rr = sr(!1),
    ml = !1;
  function uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ic(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function hl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (mt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = uu(t)),
        Js(t, null, l),
        e
      );
    }
    return (nu(t, a, e, l), uu(t));
  }
  function nn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), es(t, l));
    }
  }
  function cc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var fc = !1;
  function un() {
    if (fc) {
      var t = ya;
      if (t !== null) throw t;
    }
  }
  function cn(t, e, l, a) {
    fc = !1;
    var n = t.updateQueue;
    ml = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var y = s,
        z = y.next;
      ((y.next = null), i === null ? (u = z) : (i.next = z), (i = y));
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (s = O.lastBaseUpdate),
        s !== i &&
          (s === null ? (O.firstBaseUpdate = z) : (s.next = z),
          (O.lastBaseUpdate = y)));
    }
    if (u !== null) {
      var U = n.baseState;
      ((i = 0), (O = z = y = null), (s = u));
      do {
        var _ = s.lane & -536870913,
          j = _ !== s.lane;
        if (j ? (ct & _) === _ : (a & _) === _) {
          (_ !== 0 && _ === ha && (fc = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var Z = t,
              W = s;
            _ = e;
            var St = l;
            switch (W.tag) {
              case 1:
                if (((Z = W.payload), typeof Z == "function")) {
                  U = Z.call(St, U, _);
                  break t;
                }
                U = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = W.payload),
                  (_ = typeof Z == "function" ? Z.call(St, U, _) : Z),
                  _ == null)
                )
                  break t;
                U = E({}, U, _);
                break t;
              case 2:
                ml = !0;
            }
          }
          ((_ = s.callback),
            _ !== null &&
              ((t.flags |= 64),
              j && (t.flags |= 8192),
              (j = n.callbacks),
              j === null ? (n.callbacks = [_]) : j.push(_)));
        } else
          ((j = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            O === null ? ((z = O = j), (y = U)) : (O = O.next = j),
            (i |= _));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((j = s),
            (s = j.next),
            (j.next = null),
            (n.lastBaseUpdate = j),
            (n.shared.pending = null));
        }
      } while (!0);
      (O === null && (y = U),
        (n.baseState = y),
        (n.firstBaseUpdate = z),
        (n.lastBaseUpdate = O),
        u === null && (n.shared.lanes = 0),
        (xl |= i),
        (t.lanes = i),
        (t.memoizedState = U));
    }
  }
  function or(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function dr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) or(l[t], e);
  }
  var pa = b(null),
    yu = b(0);
  function mr(t, e) {
    ((t = tl), Q(yu, t), Q(pa, e), (tl = t | e.baseLanes));
  }
  function sc() {
    (Q(yu, tl), Q(pa, pa.current));
  }
  function rc() {
    ((tl = yu.current), H(pa), H(yu));
  }
  var oe = b(null),
    Ne = null;
  function vl(t) {
    var e = t.alternate;
    (Q(Ut, Ut.current & 1),
      Q(oe, t),
      Ne === null &&
        (e === null || pa.current !== null || e.memoizedState !== null) &&
        (Ne = t));
  }
  function oc(t) {
    (Q(Ut, Ut.current), Q(oe, t), Ne === null && (Ne = t));
  }
  function hr(t) {
    t.tag === 22
      ? (Q(Ut, Ut.current), Q(oe, t), Ne === null && (Ne = t))
      : gl();
  }
  function gl() {
    (Q(Ut, Ut.current), Q(oe, oe.current));
  }
  function de(t) {
    (H(oe), Ne === t && (Ne = null), H(Ut));
  }
  var Ut = b(0);
  function vu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || pf(l) || bf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Ke = 0,
    et = null,
    bt = null,
    wt = null,
    gu = !1,
    ba = !1,
    Kl = !1,
    pu = 0,
    fn = 0,
    xa = null,
    Fh = 0;
  function Mt() {
    throw Error(f(321));
  }
  function dc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!se(t[l], e[l])) return !1;
    return !0;
  }
  function mc(t, e, l, a, n, u) {
    return (
      (Ke = u),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? Fr : _c),
      (Kl = !1),
      (u = l(a, n)),
      (Kl = !1),
      ba && (u = vr(e, l, a, n)),
      yr(t),
      u
    );
  }
  function yr(t) {
    M.H = on;
    var e = bt !== null && bt.next !== null;
    if (((Ke = 0), (wt = bt = et = null), (gu = !1), (fn = 0), (xa = null), e))
      throw Error(f(300));
    t === null ||
      Lt ||
      ((t = t.dependencies), t !== null && fu(t) && (Lt = !0));
  }
  function vr(t, e, l, a) {
    et = t;
    var n = 0;
    do {
      if ((ba && (xa = null), (fn = 0), (ba = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (wt = bt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((M.H = Ir), (u = e(l, a)));
    } while (ba);
    return u;
  }
  function Ih() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? sn(e) : e),
      (t = t.useState()[0]),
      (bt !== null ? bt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function hc() {
    var t = pu !== 0;
    return ((pu = 0), t);
  }
  function yc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function vc(t) {
    if (gu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      gu = !1;
    }
    ((Ke = 0), (wt = bt = et = null), (ba = !1), (fn = pu = 0), (xa = null));
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (wt === null ? (et.memoizedState = wt = t) : (wt = wt.next = t), wt);
  }
  function Ht() {
    if (bt === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = wt === null ? et.memoizedState : wt.next;
    if (e !== null) ((wt = e), (bt = t));
    else {
      if (t === null)
        throw et.alternate === null ? Error(f(467)) : Error(f(310));
      ((bt = t),
        (t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null,
        }),
        wt === null ? (et.memoizedState = wt = t) : (wt = wt.next = t));
    }
    return wt;
  }
  function bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sn(t) {
    var e = fn;
    return (
      (fn += 1),
      xa === null && (xa = []),
      (t = ir(xa, t, e)),
      (e = et),
      (wt === null ? e.memoizedState : wt.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? Fr : _c)),
      t
    );
  }
  function xu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sn(t);
      if (t.$$typeof === V) return Kt(t);
    }
    throw Error(f(438, String(t)));
  }
  function gc(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = bu()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = $;
    return (e.index++, l);
  }
  function Je(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Su(t) {
    var e = Ht();
    return pc(e, bt, t);
  }
  function pc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        y = null,
        z = e,
        O = !1;
      do {
        var U = z.lane & -536870913;
        if (U !== z.lane ? (ct & U) === U : (Ke & U) === U) {
          var _ = z.revertLane;
          if (_ === 0)
            (y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              U === ha && (O = !0));
          else if ((Ke & _) === _) {
            ((z = z.next), _ === ha && (O = !0));
            continue;
          } else
            ((U = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              y === null ? ((s = y = U), (i = u)) : (y = y.next = U),
              (et.lanes |= _),
              (xl |= _));
          ((U = z.action),
            Kl && l(u, U),
            (u = z.hasEagerState ? z.eagerState : l(u, U)));
        } else
          ((_ = {
            lane: U,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            y === null ? ((s = y = _), (i = u)) : (y = y.next = _),
            (et.lanes |= U),
            (xl |= U));
        z = z.next;
      } while (z !== null && z !== e);
      if (
        (y === null ? (i = u) : (y.next = s),
        !se(u, t.memoizedState) && ((Lt = !0), O && ((l = ya), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = y),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function bc(t) {
    var e = Ht(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (se(u, e.memoizedState) || (Lt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function gr(t, e, l) {
    var a = et,
      n = Ht(),
      u = st;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !se((bt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Lt = !0)),
      (n = n.queue),
      Ec(xr.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (wt !== null && wt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Sa(9, { destroy: void 0 }, br.bind(null, a, n, l, e), null),
        zt === null)
      )
        throw Error(f(349));
      u || (Ke & 127) !== 0 || pr(a, e, l);
    }
    return l;
  }
  function pr(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null
        ? ((e = bu()), (et.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function br(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Sr(e) && Er(t));
  }
  function xr(t, e, l) {
    return l(function () {
      Sr(e) && Er(t);
    });
  }
  function Sr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !se(t, l);
    } catch {
      return !0;
    }
  }
  function Er(t) {
    var e = wl(t, 2);
    e !== null && ue(e, t, 2);
  }
  function xc(t) {
    var e = Ft();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Kl)) {
        il(!0);
        try {
          l();
        } finally {
          il(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Nr(t, e, l, a) {
    return ((t.baseState = l), pc(t, bt, typeof a == "function" ? a : Je));
  }
  function Ph(t, e, l, a, n) {
    if (zu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (M.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), zr(e, u))
          : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function zr(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = M.T,
        i = {};
      M.T = i;
      try {
        var s = l(n, a),
          y = M.S;
        (y !== null && y(i, s), Tr(t, e, s));
      } catch (z) {
        Sc(t, e, z);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (M.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Tr(t, e, u));
      } catch (z) {
        Sc(t, e, z);
      }
  }
  function Tr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Ar(t, e, a);
          },
          function (a) {
            return Sc(t, e, a);
          },
        )
      : Ar(t, e, l);
  }
  function Ar(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      Cr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), zr(t, l))));
  }
  function Sc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = l), Cr(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Cr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function _r(t, e) {
    return e;
  }
  function jr(t, e) {
    if (st) {
      var l = zt.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (st) {
            if (At) {
              e: {
                for (var n = At, u = Ee; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = ze(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((At = ze(n.nextSibling)), (a = n.data === "F!"));
                break t;
              }
            }
            ol(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Ft()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _r,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = kr.bind(null, et, a)),
      (a.dispatch = l),
      (a = xc(!1)),
      (u = Cc.bind(null, et, !1, a.queue)),
      (a = Ft()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Ph.bind(null, et, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Or(t) {
    var e = Ht();
    return Mr(e, bt, t);
  }
  function Mr(t, e, l) {
    if (
      ((e = pc(t, e, _r)[0]),
      (t = Su(Je)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = sn(e);
      } catch (i) {
        throw i === va ? ou : i;
      }
    else a = e;
    e = Ht();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048),
        Sa(9, { destroy: void 0 }, t0.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function t0(t, e) {
    t.action = e;
  }
  function Rr(t) {
    var e = Ht(),
      l = bt;
    if (l !== null) return Mr(e, l, t);
    (Ht(), (e = e.memoizedState), (l = Ht()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Sa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = bu()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Dr() {
    return Ht().memoizedState;
  }
  function Eu(t, e, l, a) {
    var n = Ft();
    ((et.flags |= t),
      (n.memoizedState = Sa(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Nu(t, e, l, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    bt !== null && a !== null && dc(a, bt.memoizedState.deps)
      ? (n.memoizedState = Sa(e, u, l, a))
      : ((et.flags |= t), (n.memoizedState = Sa(1 | e, u, l, a)));
  }
  function Ur(t, e) {
    Eu(8390656, 8, t, e);
  }
  function Ec(t, e) {
    Nu(2048, 8, t, e);
  }
  function e0(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null) ((e = bu()), (et.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Hr(t) {
    var e = Ht().memoizedState;
    return (
      e0({ ref: e, nextImpl: t }),
      function () {
        if ((mt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Br(t, e) {
    return Nu(4, 2, t, e);
  }
  function wr(t, e) {
    return Nu(4, 4, t, e);
  }
  function Lr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function qr(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Nu(4, 4, Lr.bind(null, e, t), l));
  }
  function Nc() {}
  function Yr(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && dc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Gr(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && dc(e, a[1])) return a[0];
    if (((a = t()), Kl)) {
      il(!0);
      try {
        t();
      } finally {
        il(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function zc(t, e, l) {
    return l === void 0 || ((Ke & 1073741824) !== 0 && (ct & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Xo()), (et.lanes |= t), (xl |= t), l);
  }
  function Qr(t, e, l, a) {
    return se(l, e)
      ? l
      : pa.current !== null
        ? ((t = zc(t, l, a)), se(t, e) || (Lt = !0), t)
        : (Ke & 42) === 0 || ((Ke & 1073741824) !== 0 && (ct & 261930) === 0)
          ? ((Lt = !0), (t.memoizedState = l))
          : ((t = Xo()), (et.lanes |= t), (xl |= t), e);
  }
  function Xr(t, e, l, a, n) {
    var u = G.p;
    G.p = u !== 0 && 8 > u ? u : 8;
    var i = M.T,
      s = {};
    ((M.T = s), Cc(t, !1, e, l));
    try {
      var y = n(),
        z = M.S;
      if (
        (z !== null && z(s, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var O = Wh(y, a);
        rn(t, e, O, ye(t));
      } else rn(t, e, a, ye(t));
    } catch (U) {
      rn(t, e, { then: function () {}, status: "rejected", reason: U }, ye());
    } finally {
      ((G.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (M.T = i));
    }
  }
  function l0() {}
  function Tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Zr(t).queue;
    Xr(
      t,
      n,
      e,
      F,
      l === null
        ? l0
        : function () {
            return (Vr(t), l(a));
          },
    );
  }
  function Zr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: F,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Je,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Vr(t) {
    var e = Zr(t);
    (e.next === null && (e = t.alternate.memoizedState),
      rn(t, e.next.queue, {}, ye()));
  }
  function Ac() {
    return Kt(Cn);
  }
  function Kr() {
    return Ht().memoizedState;
  }
  function Jr() {
    return Ht().memoizedState;
  }
  function a0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ye();
          t = hl(l);
          var a = yl(e, t, l);
          (a !== null && (ue(a, e, l), nn(a, e, l)),
            (e = { cache: ec() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function n0(t, e, l) {
    var a = ye();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zu(t)
        ? $r(e, l)
        : ((l = Zi(t, e, l, a)), l !== null && (ue(l, t, a), Wr(l, e, a))));
  }
  function kr(t, e, l) {
    var a = ye();
    rn(t, e, l, a);
  }
  function rn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zu(t)) $r(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), se(s, i)))
            return (nu(t, e, n, 0), zt === null && au(), !1);
        } catch {
        } finally {
        }
      if (((l = Zi(t, e, n, a)), l !== null))
        return (ue(l, t, a), Wr(l, e, a), !0);
    }
    return !1;
  }
  function Cc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: uf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zu(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = Zi(t, l, a, 2)), e !== null && ue(e, t, 2));
  }
  function zu(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function $r(t, e) {
    ba = gu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function Wr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), es(t, l));
    }
  }
  var on = {
    readContext: Kt,
    use: xu,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt,
  };
  on.useEffectEvent = Mt;
  var Fr = {
      readContext: Kt,
      use: xu,
      useCallback: function (t, e) {
        return ((Ft().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Kt,
      useEffect: Ur,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Eu(4194308, 4, Lr.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Eu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Eu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ft();
        e = e === void 0 ? null : e;
        var a = t();
        if (Kl) {
          il(!0);
          try {
            t();
          } finally {
            il(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Ft();
        if (l !== void 0) {
          var n = l(e);
          if (Kl) {
            il(!0);
            try {
              l(e);
            } finally {
              il(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = n0.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ft();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = xc(t);
        var e = t.queue,
          l = kr.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Nc,
      useDeferredValue: function (t, e) {
        var l = Ft();
        return zc(l, t, e);
      },
      useTransition: function () {
        var t = xc(!1);
        return (
          (t = Xr.bind(null, et, t.queue, !0, !1)),
          (Ft().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          n = Ft();
        if (st) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), zt === null)) throw Error(f(349));
          (ct & 127) !== 0 || pr(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Ur(xr.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Sa(9, { destroy: void 0 }, br.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ft(),
          e = zt.identifierPrefix;
        if (st) {
          var l = Re,
            a = Me;
          ((l = (a & ~(1 << (32 - fe(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = pu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = Fh++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ac,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function (t) {
        var e = Ft();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Cc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: gc,
      useCacheRefresh: function () {
        return (Ft().memoizedState = a0.bind(null, et));
      },
      useEffectEvent: function (t) {
        var e = Ft(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((mt & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    _c = {
      readContext: Kt,
      use: xu,
      useCallback: Yr,
      useContext: Kt,
      useEffect: Ec,
      useImperativeHandle: qr,
      useInsertionEffect: Br,
      useLayoutEffect: wr,
      useMemo: Gr,
      useReducer: Su,
      useRef: Dr,
      useState: function () {
        return Su(Je);
      },
      useDebugValue: Nc,
      useDeferredValue: function (t, e) {
        var l = Ht();
        return Qr(l, bt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Su(Je)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : sn(t), e];
      },
      useSyncExternalStore: gr,
      useId: Kr,
      useHostTransitionStatus: Ac,
      useFormState: Or,
      useActionState: Or,
      useOptimistic: function (t, e) {
        var l = Ht();
        return Nr(l, bt, t, e);
      },
      useMemoCache: gc,
      useCacheRefresh: Jr,
    };
  _c.useEffectEvent = Hr;
  var Ir = {
    readContext: Kt,
    use: xu,
    useCallback: Yr,
    useContext: Kt,
    useEffect: Ec,
    useImperativeHandle: qr,
    useInsertionEffect: Br,
    useLayoutEffect: wr,
    useMemo: Gr,
    useReducer: bc,
    useRef: Dr,
    useState: function () {
      return bc(Je);
    },
    useDebugValue: Nc,
    useDeferredValue: function (t, e) {
      var l = Ht();
      return bt === null ? zc(l, t, e) : Qr(l, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = bc(Je)[0],
        e = Ht().memoizedState;
      return [typeof t == "boolean" ? t : sn(t), e];
    },
    useSyncExternalStore: gr,
    useId: Kr,
    useHostTransitionStatus: Ac,
    useFormState: Rr,
    useActionState: Rr,
    useOptimistic: function (t, e) {
      var l = Ht();
      return bt !== null
        ? Nr(l, bt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: gc,
    useCacheRefresh: Jr,
  };
  Ir.useEffectEvent = Hr;
  function jc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : E({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Oc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ye(),
        n = hl(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = yl(t, n, a)),
        e !== null && (ue(e, t, a), nn(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ye(),
        n = hl(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = yl(t, n, a)),
        e !== null && (ue(e, t, a), nn(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ye(),
        a = hl(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = yl(t, a, l)),
        e !== null && (ue(e, t, l), nn(e, t, l)));
    },
  };
  function Pr(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Wa(l, a) || !Wa(n, u)
          : !0
    );
  }
  function to(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Oc.enqueueReplaceState(e, e.state, null));
  }
  function Jl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = E({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function eo(t) {
    lu(t);
  }
  function lo(t) {
    console.error(t);
  }
  function ao(t) {
    lu(t);
  }
  function Tu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function no(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Mc(t, e, l) {
    return (
      (l = hl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tu(t, e);
      }),
      l
    );
  }
  function uo(t) {
    return ((t = hl(t)), (t.tag = 3), t);
  }
  function io(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          no(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (no(e, l, a),
          typeof n != "function" &&
            (Sl === null ? (Sl = new Set([this])) : Sl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function u0(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && ma(e, l, n, !0),
        (l = oe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ne === null ? wu() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === du
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  lf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === du
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  lf(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (lf(t, a, n), wu(), !1);
    }
    if (st)
      return (
        (e = oe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Wi && ((t = Error(f(422), { cause: a })), Pa(be(t, l))))
          : (a !== Wi && ((e = Error(f(423), { cause: a })), Pa(be(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = be(a, l)),
            (n = Mc(t.stateNode, a, n)),
            cc(t, n),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = be(u, l)),
      bn === null ? (bn = [u]) : bn.push(u),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    ((a = be(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Mc(l.stateNode, a, t)),
            cc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Sl === null || !Sl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = uo(n)),
              io(n, t, l, a),
              cc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Rc = Error(f(461)),
    Lt = !1;
  function Jt(t, e, l, a) {
    e.child = t === null ? rr(e, null, l, a) : Vl(e, t.child, l, a);
  }
  function co(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a) s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return (
      Gl(e),
      (a = mc(t, e, l, i, u, n)),
      (s = hc()),
      t !== null && !Lt
        ? (yc(t, e, n), ke(t, e, n))
        : (st && s && ki(e), (e.flags |= 1), Jt(t, e, a, n), e.child)
    );
  }
  function fo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Vi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), so(t, e, u, a, n))
        : ((t = iu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Yc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Wa), l(i, a) && t.ref === e.ref)
      )
        return ke(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Qe(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function so(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Wa(u, a) && t.ref === e.ref)
        if (((Lt = !1), (e.pendingProps = a = u), Yc(t, n)))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else return ((e.lanes = t.lanes), ke(t, e, n));
    }
    return Dc(t, e, l, a, n);
  }
  function ro(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return oo(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ru(e, u !== null ? u.cachePool : null),
          u !== null ? mr(e, u) : sc(),
          hr(e));
      else
        return (
          (a = e.lanes = 536870912),
          oo(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (ru(e, u.cachePool), mr(e, u), gl(), (e.memoizedState = null))
        : (t !== null && ru(e, null), sc(), gl());
    return (Jt(t, e, n, l), e.child);
  }
  function dn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function oo(t, e, l, a, n) {
    var u = ac();
    return (
      (u = u === null ? null : { parent: Bt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && ru(e, null),
      sc(),
      hr(e),
      t !== null && ma(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function Au(t, e) {
    return (
      (e = _u({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function mo(t, e, l) {
    return (
      Vl(e, t.child, null, l),
      (t = Au(e, e.pendingProps)),
      (t.flags |= 2),
      de(e),
      (e.memoizedState = null),
      t
    );
  }
  function i0(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (st) {
        if (a.mode === "hidden")
          return ((t = Au(e, a)), (e.lanes = 536870912), dn(null, t));
        if (
          (oc(e),
          (t = At)
            ? ((t = Td(t, Ee)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: sl !== null ? { id: Me, overflow: Re } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Vt = e),
                (At = null)))
            : (t = null),
          t === null)
        )
          throw ol(e);
        return ((e.lanes = 536870912), null);
      }
      return Au(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((oc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = mo(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (Lt || ma(t, e, l, !1), (n = (l & t.childLanes) !== 0), Lt || n)
      ) {
        if (
          ((a = zt),
          a !== null && ((i = ls(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), wl(t, i), ue(a, t, i), Rc);
        (wu(), (e = mo(t, e, l)));
      } else
        ((t = u.treeContext),
          (At = ze(i.nextSibling)),
          (Vt = e),
          (st = !0),
          (rl = null),
          (Ee = !1),
          t !== null && Is(e, t),
          (e = Au(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Qe(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Cu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Dc(t, e, l, a, n) {
    return (
      Gl(e),
      (l = mc(t, e, l, a, void 0, n)),
      (a = hc()),
      t !== null && !Lt
        ? (yc(t, e, n), ke(t, e, n))
        : (st && a && ki(e), (e.flags |= 1), Jt(t, e, l, n), e.child)
    );
  }
  function ho(t, e, l, a, n, u) {
    return (
      Gl(e),
      (e.updateQueue = null),
      (l = vr(e, a, l, n)),
      yr(t),
      (a = hc()),
      t !== null && !Lt
        ? (yc(t, e, u), ke(t, e, u))
        : (st && a && ki(e), (e.flags |= 1), Jt(t, e, l, u), e.child)
    );
  }
  function yo(t, e, l, a, n) {
    if ((Gl(e), e.stateNode === null)) {
      var u = sa,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = Kt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Oc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        uc(e),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Kt(i) : sa),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (jc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Oc.enqueueReplaceState(u, u.state, null),
          cn(e, a, u, n),
          un(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        y = Jl(l, s);
      u.props = y;
      var z = u.context,
        O = l.contextType;
      ((i = sa), typeof O == "object" && O !== null && (i = Kt(O)));
      var U = l.getDerivedStateFromProps;
      ((O =
        typeof U == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        O ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || z !== i) && to(e, u, a, i)),
        (ml = !1));
      var _ = e.memoizedState;
      ((u.state = _),
        cn(e, a, u, n),
        un(),
        (z = e.memoizedState),
        s || _ !== z || ml
          ? (typeof U == "function" && (jc(e, l, U, a), (z = e.memoizedState)),
            (y = ml || Pr(e, l, y, a, _, z, i))
              ? (O ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = z)),
            (u.props = a),
            (u.state = z),
            (u.context = i),
            (a = y))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = e.stateNode),
        ic(t, e),
        (i = e.memoizedProps),
        (O = Jl(l, i)),
        (u.props = O),
        (U = e.pendingProps),
        (_ = u.context),
        (z = l.contextType),
        (y = sa),
        typeof z == "object" && z !== null && (y = Kt(z)),
        (s = l.getDerivedStateFromProps),
        (z =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== U || _ !== y) && to(e, u, a, y)),
        (ml = !1),
        (_ = e.memoizedState),
        (u.state = _),
        cn(e, a, u, n),
        un());
      var j = e.memoizedState;
      i !== U ||
      _ !== j ||
      ml ||
      (t !== null && t.dependencies !== null && fu(t.dependencies))
        ? (typeof s == "function" && (jc(e, l, s, a), (j = e.memoizedState)),
          (O =
            ml ||
            Pr(e, l, O, a, _, j, y) ||
            (t !== null && t.dependencies !== null && fu(t.dependencies)))
            ? (z ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, j, y),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, j, y)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = j)),
          (u.props = a),
          (u.state = j),
          (u.context = y),
          (a = O))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Cu(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Vl(e, t.child, null, n)),
              (e.child = Vl(e, null, l, n)))
            : Jt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = ke(t, e, n)),
      t
    );
  }
  function vo(t, e, l, a) {
    return (ql(), (e.flags |= 256), Jt(t, e, l, a), e.child);
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Hc(t) {
    return { baseLanes: t, cachePool: nr() };
  }
  function Bc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= he), t);
  }
  function go(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Ut.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if (
          (n ? vl(e) : gl(),
          (t = At)
            ? ((t = Td(t, Ee)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: sl !== null ? { id: Me, overflow: Re } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Vt = e),
                (At = null)))
            : (t = null),
          t === null)
        )
          throw ol(e);
        return (bf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (gl(),
            (n = e.mode),
            (s = _u({ mode: "hidden", children: s }, n)),
            (a = Ll(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = Hc(l)),
            (a.childLanes = Bc(t, i, l)),
            (e.memoizedState = Uc),
            dn(null, a))
          : (vl(e), wc(e, s))
      );
    }
    var y = t.memoizedState;
    if (y !== null && ((s = y.dehydrated), s !== null)) {
      if (u)
        e.flags & 256
          ? (vl(e), (e.flags &= -257), (e = Lc(t, e, l)))
          : e.memoizedState !== null
            ? (gl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (gl(),
              (s = a.fallback),
              (n = e.mode),
              (a = _u({ mode: "visible", children: a.children }, n)),
              (s = Ll(s, n, l, null)),
              (s.flags |= 2),
              (a.return = e),
              (s.return = e),
              (a.sibling = s),
              (e.child = a),
              Vl(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = Hc(l)),
              (a.childLanes = Bc(t, i, l)),
              (e.memoizedState = Uc),
              (e = dn(null, a)));
      else if ((vl(e), bf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var z = i.dgst;
        ((i = z),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          Pa({ value: a, source: null, stack: null }),
          (e = Lc(t, e, l)));
      } else if (
        (Lt || ma(t, e, l, !1), (i = (l & t.childLanes) !== 0), Lt || i)
      ) {
        if (
          ((i = zt),
          i !== null && ((a = ls(i, l)), a !== 0 && a !== y.retryLane))
        )
          throw ((y.retryLane = a), wl(t, a), ue(i, t, a), Rc);
        (pf(s) || wu(), (e = Lc(t, e, l)));
      } else
        pf(s)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = y.treeContext),
            (At = ze(s.nextSibling)),
            (Vt = e),
            (st = !0),
            (rl = null),
            (Ee = !1),
            t !== null && Is(e, t),
            (e = wc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (gl(),
        (s = a.fallback),
        (n = e.mode),
        (y = t.child),
        (z = y.sibling),
        (a = Qe(y, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = y.subtreeFlags & 65011712),
        z !== null ? (s = Qe(z, s)) : ((s = Ll(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        dn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = Hc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((y = Bt._currentValue),
                (n = n.parent !== y ? { parent: y, pool: y } : n))
              : (n = nr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Bc(t, i, l)),
        (e.memoizedState = Uc),
        dn(t.child, a))
      : (vl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Qe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function wc(t, e) {
    return (
      (e = _u({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function _u(t, e) {
    return ((t = re(22, t, null, e)), (t.lanes = 0), t);
  }
  function Lc(t, e, l) {
    return (
      Vl(e, t.child, null, l),
      (t = wc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function po(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), Pi(t.return, e, l));
  }
  function qc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function bo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Ut.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      Q(Ut, i),
      Jt(t, e, a, l),
      (a = st ? Ia : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && po(t, l, e);
        else if (t.tag === 19) po(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate),
            t !== null && vu(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          qc(e, !1, n, l, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && vu(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        qc(e, !0, l, null, u, a);
        break;
      case "together":
        qc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ke(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (xl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ma(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Qe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Qe(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Yc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && fu(t)));
  }
  function c0(t, e, l) {
    switch (e.tag) {
      case 3:
        (Wt(e, e.stateNode.containerInfo),
          dl(e, Bt, t.memoizedState.cache),
          ql());
        break;
      case 27:
      case 5:
        wa(e);
        break;
      case 4:
        Wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        dl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), oc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (vl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? go(t, e, l)
              : (vl(e), (t = ke(t, e, l)), t !== null ? t.sibling : null);
        vl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ma(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return bo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Q(Ut, Ut.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), ro(t, e, l, e.pendingProps));
      case 24:
        dl(e, Bt, t.memoizedState.cache);
    }
    return ke(t, e, l);
  }
  function xo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Lt = !0;
      else {
        if (!Yc(t, l) && (e.flags & 128) === 0) return ((Lt = !1), c0(t, e, l));
        Lt = (t.flags & 131072) !== 0;
      }
    else ((Lt = !1), st && (e.flags & 1048576) !== 0 && Fs(e, Ia, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Xl(e.elementType)), (e.type = t), typeof t == "function"))
            Vi(t)
              ? ((a = Jl(t, a)), (e.tag = 1), (e = yo(null, e, t, a, l)))
              : ((e.tag = 0), (e = Dc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === yt) {
                ((e.tag = 11), (e = co(null, e, t, a, l)));
                break t;
              } else if (n === I) {
                ((e.tag = 14), (e = fo(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = Le(t) || t), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return Dc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Jl(a, e.pendingProps)), yo(t, e, a, n, l));
      case 3:
        t: {
          if ((Wt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), ic(t, e), cn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            dl(e, Bt, a),
            a !== u.cache && tc(e, [Bt], l, !0),
            un(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = vo(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = be(Error(f(424)), e)), Pa(n), (e = vo(t, e, a, l)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                At = ze(t.firstChild),
                  Vt = e,
                  st = !0,
                  rl = null,
                  Ee = !0,
                  l = rr(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((ql(), a === n)) {
              e = ke(t, e, l);
              break t;
            }
            Jt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Cu(t, e),
          t === null
            ? (l = Md(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Zu(at.current).createElement(l)),
                (a[Zt] = e),
                (a[Pt] = t),
                kt(a, l, t),
                Qt(a),
                (e.stateNode = a))
            : (e.memoizedState = Md(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          wa(e),
          t === null &&
            st &&
            ((a = e.stateNode = _d(e.type, e.pendingProps, at.current)),
            (Vt = e),
            (Ee = !0),
            (n = At),
            Tl(e.type) ? ((xf = n), (At = ze(a.firstChild))) : (At = n)),
          Jt(t, e, e.pendingProps.children, l),
          Cu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((n = a = At) &&
              ((a = w0(a, e.type, e.pendingProps, Ee)),
              a !== null
                ? ((e.stateNode = a),
                  (Vt = e),
                  (At = ze(a.firstChild)),
                  (Ee = !1),
                  (n = !0))
                : (n = !1)),
            n || ol(e)),
          wa(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          yf(n, u) ? (a = null) : i !== null && yf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = mc(t, e, Ih, null, null, l)), (Cn._currentValue = n)),
          Cu(t, e),
          Jt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = At) &&
              ((l = L0(l, e.pendingProps, Ee)),
              l !== null
                ? ((e.stateNode = l), (Vt = e), (At = null), (t = !0))
                : (t = !1)),
            t || ol(e)),
          null
        );
      case 13:
        return go(t, e, l);
      case 4:
        return (
          Wt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Vl(e, null, a, l)) : Jt(t, e, a, l),
          e.child
        );
      case 11:
        return co(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Jt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Jt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Jt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          dl(e, e.type, a.value),
          Jt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Gl(e),
          (n = Kt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Jt(t, e, a, l),
          e.child
        );
      case 14:
        return fo(t, e, e.type, e.pendingProps, l);
      case 15:
        return so(t, e, e.type, e.pendingProps, l);
      case 19:
        return bo(t, e, l);
      case 31:
        return i0(t, e, l);
      case 22:
        return ro(t, e, l, e.pendingProps);
      case 24:
        return (
          Gl(e),
          (a = Kt(Bt)),
          t === null
            ? ((n = ac()),
              n === null &&
                ((n = zt),
                (u = ec()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              uc(e),
              dl(e, Bt, n))
            : ((t.lanes & l) !== 0 && (ic(t, e), cn(e, null, null, l), un()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  dl(e, Bt, a))
                : ((a = u.cache),
                  dl(e, Bt, a),
                  a !== n.cache && tc(e, [Bt], l, !0))),
          Jt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function $e(t) {
    t.flags |= 4;
  }
  function Gc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Jo()) t.flags |= 8192;
        else throw ((Zl = du), nc);
    } else t.flags &= -16777217;
  }
  function So(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Bd(e)))
      if (Jo()) t.flags |= 8192;
      else throw ((Zl = du), nc);
  }
  function ju(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Pf() : 536870912), (t.lanes |= e), (Ta |= e)));
  }
  function mn(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function f0(t, e, l) {
    var a = e.pendingProps;
    switch (($i(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ct(e), null);
      case 1:
        return (Ct(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ve(Bt),
          Dt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (da(e)
              ? $e(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Fi())),
          Ct(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? ($e(e),
              u !== null ? (Ct(e), So(e, u)) : (Ct(e), Gc(e, n, null, a, l)))
            : u
              ? u !== t.memoizedState
                ? ($e(e), Ct(e), So(e, u))
                : (Ct(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && $e(e),
                Ct(e),
                Gc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Yn(e),
          (l = at.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Ct(e), null);
          }
          ((t = K.current),
            da(e) ? Ps(e) : ((t = _d(n, a, l)), (e.stateNode = t), $e(e)));
        }
        return (Ct(e), null);
      case 5:
        if ((Yn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Ct(e), null);
          }
          if (((u = K.current), da(e))) Ps(e);
          else {
            var i = Zu(at.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[Zt] = e), (u[Pt] = a));
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            t: switch ((kt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && $e(e);
          }
        }
        return (
          Ct(e),
          Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && $e(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = at.current), da(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Vt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                gd(t.nodeValue, l)
              )),
              t || ol(e, !0));
          } else
            ((t = Zu(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t));
        }
        return (Ct(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = da(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Zt] = e;
            } else
              (ql(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ct(e), (t = !1));
          } else
            ((l = Fi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (de(e), e) : (de(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (Ct(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = da(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Zt] = e;
            } else
              (ql(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ct(e), (n = !1));
          } else
            ((n = Fi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (de(e), e) : (de(e), null);
        }
        return (
          de(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              ju(e, e.updateQueue),
              Ct(e),
              null)
        );
      case 4:
        return (Dt(), t === null && rf(e.stateNode.containerInfo), Ct(e), null);
      case 10:
        return (Ve(e.type), Ct(e), null);
      case 19:
        if ((H(Ut), (a = e.memoizedState), a === null)) return (Ct(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) mn(a, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = vu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      mn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      ju(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (ks(l, t), (l = l.sibling));
                  return (
                    Q(Ut, (Ut.current & 1) | 2),
                    st && Xe(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ie() > Uu &&
              ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = vu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ju(e, t),
                mn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !st)
              )
                return (Ct(e), null);
            } else
              2 * ie() - a.renderingStartTime > Uu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ie()),
            (t.sibling = null),
            (l = Ut.current),
            Q(Ut, n ? (l & 1) | 2 : l & 1),
            st && Xe(e, a.treeForkCount),
            t)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          de(e),
          rc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (l = e.updateQueue),
          l !== null && ju(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && H(Ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ve(Bt),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function s0(t, e) {
    switch (($i(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ve(Bt),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Yn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((de(e), e.alternate === null)) throw Error(f(340));
          ql();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (de(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          ql();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (H(Ut), null);
      case 4:
        return (Dt(), null);
      case 10:
        return (Ve(e.type), null);
      case 22:
      case 23:
        return (
          de(e),
          rc(),
          t !== null && H(Ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ve(Bt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Eo(t, e) {
    switch (($i(e), e.tag)) {
      case 3:
        (Ve(Bt), Dt());
        break;
      case 26:
      case 27:
      case 5:
        Yn(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && de(e);
        break;
      case 13:
        de(e);
        break;
      case 19:
        H(Ut);
        break;
      case 10:
        Ve(e.type);
        break;
      case 22:
      case 23:
        (de(e), rc(), t !== null && H(Ql));
        break;
      case 24:
        Ve(Bt);
    }
  }
  function hn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      gt(e, e.return, s);
    }
  }
  function pl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (n = e));
              var y = l,
                z = s;
              try {
                z();
              } catch (O) {
                gt(n, y, O);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (O) {
      gt(e, e.return, O);
    }
  }
  function No(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        dr(e, l);
      } catch (a) {
        gt(t, t.return, a);
      }
    }
  }
  function zo(t, e, l) {
    ((l.props = Jl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      gt(t, e, a);
    }
  }
  function yn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      gt(t, e, n);
    }
  }
  function De(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          gt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          gt(t, e, n);
        }
      else l.current = null;
  }
  function To(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function Qc(t, e, l) {
    try {
      var a = t.stateNode;
      (M0(a, t.type, l, e), (a[Pt] = e));
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function Ao(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Tl(t.type)) ||
      t.tag === 4
    );
  }
  function Xc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ao(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Tl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Ye)));
    else if (
      a !== 4 &&
      (a === 27 && Tl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Zc(t, e, l), t = t.sibling; t !== null; )
        (Zc(t, e, l), (t = t.sibling));
  }
  function Ou(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && Tl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Ou(t, e, l), t = t.sibling; t !== null; )
        (Ou(t, e, l), (t = t.sibling));
  }
  function Co(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (kt(e, a, l), (e[Zt] = t), (e[Pt] = l));
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  var We = !1,
    qt = !1,
    Vc = !1,
    _o = typeof WeakSet == "function" ? WeakSet : Set,
    Xt = null;
  function r0(t, e) {
    if (((t = t.containerInfo), (mf = Fu), (t = qs(t)), Li(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              s = -1,
              y = -1,
              z = 0,
              O = 0,
              U = t,
              _ = null;
            e: for (;;) {
              for (
                var j;
                U !== l || (n !== 0 && U.nodeType !== 3) || (s = i + n),
                  U !== u || (a !== 0 && U.nodeType !== 3) || (y = i + a),
                  U.nodeType === 3 && (i += U.nodeValue.length),
                  (j = U.firstChild) !== null;
              )
                ((_ = U), (U = j));
              for (;;) {
                if (U === t) break e;
                if (
                  (_ === l && ++z === n && (s = i),
                  _ === u && ++O === a && (y = i),
                  (j = U.nextSibling) !== null)
                )
                  break;
                ((U = _), (_ = U.parentNode));
              }
              U = j;
            }
            l = s === -1 || y === -1 ? null : { start: s, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: t, selectionRange: l }, Fu = !1, Xt = e;
      Xt !== null;
    )
      if (
        ((e = Xt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Xt = t));
      else
        for (; Xt !== null; ) {
          switch (((e = Xt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((n = t[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var Z = Jl(l.type, n);
                  ((t = a.getSnapshotBeforeUpdate(Z, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (W) {
                  gt(l, l.return, W);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  gf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Xt = t));
            break;
          }
          Xt = e.return;
        }
  }
  function jo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Ie(t, l), a & 4 && hn(5, l));
        break;
      case 1:
        if ((Ie(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              gt(l, l.return, i);
            }
          else {
            var n = Jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              gt(l, l.return, i);
            }
          }
        (a & 64 && No(l), a & 512 && yn(l, l.return));
        break;
      case 3:
        if ((Ie(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            dr(t, e);
          } catch (i) {
            gt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Co(l);
      case 26:
      case 5:
        (Ie(t, l), e === null && a & 4 && To(l), a & 512 && yn(l, l.return));
        break;
      case 12:
        Ie(t, l);
        break;
      case 31:
        (Ie(t, l), a & 4 && Ro(t, l));
        break;
      case 13:
        (Ie(t, l),
          a & 4 && Do(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = b0.bind(null, l)), q0(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || We), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || qt), (n = We));
          var u = qt;
          ((We = a),
            (qt = e) && !u ? Pe(t, l, (l.subtreeFlags & 8772) !== 0) : Ie(t, l),
            (We = n),
            (qt = u));
        }
        break;
      case 30:
        break;
      default:
        Ie(t, l);
    }
  }
  function Oo(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Oo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Si(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var jt = null,
    ee = !1;
  function Fe(t, e, l) {
    for (l = l.child; l !== null; ) (Mo(t, e, l), (l = l.sibling));
  }
  function Mo(t, e, l) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount(La, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qt || De(l, e),
          Fe(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qt || De(l, e);
        var a = jt,
          n = ee;
        (Tl(l.type) && ((jt = l.stateNode), (ee = !1)),
          Fe(t, e, l),
          zn(l.stateNode),
          (jt = a),
          (ee = n));
        break;
      case 5:
        qt || De(l, e);
      case 6:
        if (
          ((a = jt),
          (n = ee),
          (jt = null),
          Fe(t, e, l),
          (jt = a),
          (ee = n),
          jt !== null)
        )
          if (ee)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                  ? jt.ownerDocument.body
                  : jt
              ).removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
          else
            try {
              jt.removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
        break;
      case 18:
        jt !== null &&
          (ee
            ? ((t = jt),
              Nd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Da(t))
            : Nd(jt, l.stateNode));
        break;
      case 4:
        ((a = jt),
          (n = ee),
          (jt = l.stateNode.containerInfo),
          (ee = !0),
          Fe(t, e, l),
          (jt = a),
          (ee = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (pl(2, l, e), qt || pl(4, l, e), Fe(t, e, l));
        break;
      case 1:
        (qt ||
          (De(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && zo(l, e, a)),
          Fe(t, e, l));
        break;
      case 21:
        Fe(t, e, l);
        break;
      case 22:
        ((qt = (a = qt) || l.memoizedState !== null), Fe(t, e, l), (qt = a));
        break;
      default:
        Fe(t, e, l);
    }
  }
  function Ro(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Da(t);
      } catch (l) {
        gt(e, e.return, l);
      }
    }
  }
  function Do(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Da(t);
      } catch (l) {
        gt(e, e.return, l);
      }
  }
  function o0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new _o()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _o()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Mu(t, e) {
    var l = o0(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = x0.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function le(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Tl(s.type)) {
                ((jt = s.stateNode), (ee = !1));
                break t;
              }
              break;
            case 5:
              ((jt = s.stateNode), (ee = !1));
              break t;
            case 3:
            case 4:
              ((jt = s.stateNode.containerInfo), (ee = !0));
              break t;
          }
          s = s.return;
        }
        if (jt === null) throw Error(f(160));
        (Mo(u, i, n),
          (jt = null),
          (ee = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Uo(e, t), (e = e.sibling));
  }
  var je = null;
  function Uo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (le(e, t),
          ae(t),
          a & 4 && (pl(3, t, t.return), hn(3, t), pl(5, t, t.return)));
        break;
      case 1:
        (le(e, t),
          ae(t),
          a & 512 && (qt || l === null || De(l, l.return)),
          a & 64 &&
            We &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = je;
        if (
          (le(e, t),
          ae(t),
          a & 512 && (qt || l === null || De(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ga] ||
                          u[Zt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        kt(u, a, l),
                        (u[Zt] = t),
                        Qt(u),
                        (a = u));
                      break t;
                    case "link":
                      var i = Ud("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        kt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = Ud("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        kt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  ((u[Zt] = t), Qt(u), (a = u));
                }
                t.stateNode = a;
              } else Hd(n, t.type, t.stateNode);
            else t.stateNode = Dd(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Hd(n, t.type, t.stateNode)
                  : Dd(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Qc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (le(e, t),
          ae(t),
          a & 512 && (qt || l === null || De(l, l.return)),
          l !== null && a & 4 && Qc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (le(e, t),
          ae(t),
          a & 512 && (qt || l === null || De(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            la(n, "");
          } catch (Z) {
            gt(t, t.return, Z);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Qc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Vc = !0));
        break;
      case 6:
        if ((le(e, t), ae(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (Z) {
            gt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Ju = null),
          (n = je),
          (je = Vu(e.containerInfo)),
          le(e, t),
          (je = n),
          ae(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Da(e.containerInfo);
          } catch (Z) {
            gt(t, t.return, Z);
          }
        Vc && ((Vc = !1), Ho(t));
        break;
      case 4:
        ((a = je),
          (je = Vu(t.stateNode.containerInfo)),
          le(e, t),
          ae(t),
          (je = a));
        break;
      case 12:
        (le(e, t), ae(t));
        break;
      case 31:
        (le(e, t),
          ae(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mu(t, a))));
        break;
      case 13:
        (le(e, t),
          ae(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Du = ie()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mu(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          z = We,
          O = qt;
        if (
          ((We = z || n),
          (qt = O || y),
          le(e, t),
          (qt = O),
          (We = z),
          ae(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || y || We || qt || kl(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                y = l = e;
                try {
                  if (((u = y.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    s = y.stateNode;
                    var U = y.memoizedProps.style,
                      _ =
                        U != null && U.hasOwnProperty("display")
                          ? U.display
                          : null;
                    s.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (Z) {
                  gt(y, y.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                } catch (Z) {
                  gt(y, y.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                y = e;
                try {
                  var j = y.stateNode;
                  n ? zd(j, !0) : zd(y.stateNode, !1);
                } catch (Z) {
                  gt(y, y.return, Z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Mu(t, l))));
        break;
      case 19:
        (le(e, t),
          ae(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (le(e, t), ae(t));
    }
  }
  function ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ao(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Xc(t);
            Ou(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (la(i, ""), (l.flags &= -33));
            var s = Xc(t);
            Ou(t, s, i);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              z = Xc(t);
            Zc(t, z, y);
            break;
          default:
            throw Error(f(161));
        }
      } catch (O) {
        gt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ho(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Ho(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Ie(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (jo(t, e.alternate, e), (e = e.sibling));
  }
  function kl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (pl(4, e, e.return), kl(e));
          break;
        case 1:
          De(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && zo(e, e.return, l),
            kl(e));
          break;
        case 27:
          zn(e.stateNode);
        case 26:
        case 5:
          (De(e, e.return), kl(e));
          break;
        case 22:
          e.memoizedState === null && kl(e);
          break;
        case 30:
          kl(e);
          break;
        default:
          kl(e);
      }
      t = t.sibling;
    }
  }
  function Pe(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Pe(n, u, l), hn(4, u));
          break;
        case 1:
          if (
            (Pe(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (z) {
              gt(a, a.return, z);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  or(y[n], s);
            } catch (z) {
              gt(a, a.return, z);
            }
          }
          (l && i & 64 && No(u), yn(u, u.return));
          break;
        case 27:
          Co(u);
        case 26:
        case 5:
          (Pe(n, u, l), l && a === null && i & 4 && To(u), yn(u, u.return));
          break;
        case 12:
          Pe(n, u, l);
          break;
        case 31:
          (Pe(n, u, l), l && i & 4 && Ro(n, u));
          break;
        case 13:
          (Pe(n, u, l), l && i & 4 && Do(n, u));
          break;
        case 22:
          (u.memoizedState === null && Pe(n, u, l), yn(u, u.return));
          break;
        case 30:
          break;
        default:
          Pe(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Kc(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && tn(l)));
  }
  function Jc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && tn(t)));
  }
  function Oe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Bo(t, e, l, a), (e = e.sibling));
  }
  function Bo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Oe(t, e, l, a), n & 2048 && hn(9, e));
        break;
      case 1:
        Oe(t, e, l, a);
        break;
      case 3:
        (Oe(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && tn(t))));
        break;
      case 12:
        if (n & 2048) {
          (Oe(t, e, l, a), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            gt(e, e.return, y);
          }
        } else Oe(t, e, l, a);
        break;
      case 31:
        Oe(t, e, l, a);
        break;
      case 13:
        Oe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Oe(t, e, l, a)
              : vn(t, e)
            : u._visibility & 2
              ? Oe(t, e, l, a)
              : ((u._visibility |= 2),
                Ea(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Kc(i, e));
        break;
      case 24:
        (Oe(t, e, l, a), n & 2048 && Jc(e.alternate, e));
        break;
      default:
        Oe(t, e, l, a);
    }
  }
  function Ea(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        y = a,
        z = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(u, i, s, y, n), hn(8, i));
          break;
        case 23:
          break;
        case 22:
          var O = i.stateNode;
          (i.memoizedState !== null
            ? O._visibility & 2
              ? Ea(u, i, s, y, n)
              : vn(u, i)
            : ((O._visibility |= 2), Ea(u, i, s, y, n)),
            n && z & 2048 && Kc(i.alternate, i));
          break;
        case 24:
          (Ea(u, i, s, y, n), n && z & 2048 && Jc(i.alternate, i));
          break;
        default:
          Ea(u, i, s, y, n);
      }
      e = e.sibling;
    }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (vn(l, a), n & 2048 && Kc(a.alternate, a));
            break;
          case 24:
            (vn(l, a), n & 2048 && Jc(a.alternate, a));
            break;
          default:
            vn(l, a);
        }
        e = e.sibling;
      }
  }
  var gn = 8192;
  function Na(t, e, l) {
    if (t.subtreeFlags & gn)
      for (t = t.child; t !== null; ) (wo(t, e, l), (t = t.sibling));
  }
  function wo(t, e, l) {
    switch (t.tag) {
      case 26:
        (Na(t, e, l),
          t.flags & gn &&
            t.memoizedState !== null &&
            F0(l, je, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Na(t, e, l);
        break;
      case 3:
      case 4:
        var a = je;
        ((je = Vu(t.stateNode.containerInfo)), Na(t, e, l), (je = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = gn), (gn = 16777216), Na(t, e, l), (gn = a))
            : Na(t, e, l));
        break;
      default:
        Na(t, e, l);
    }
  }
  function Lo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function pn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Xt = a), Yo(a, t));
        }
      Lo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (qo(t), (t = t.sibling));
  }
  function qo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pn(t), t.flags & 2048 && pl(9, t, t.return));
        break;
      case 3:
        pn(t);
        break;
      case 12:
        pn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ru(t))
          : pn(t);
        break;
      default:
        pn(t);
    }
  }
  function Ru(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Xt = a), Yo(a, t));
        }
      Lo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (pl(8, e, e.return), Ru(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ru(e)));
          break;
        default:
          Ru(e);
      }
      t = t.sibling;
    }
  }
  function Yo(t, e) {
    for (; Xt !== null; ) {
      var l = Xt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Xt = a));
      else
        t: for (l = t; Xt !== null; ) {
          a = Xt;
          var n = a.sibling,
            u = a.return;
          if ((Oo(a), a === l)) {
            Xt = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (Xt = n));
            break t;
          }
          Xt = u;
        }
    }
  }
  var d0 = {
      getCacheForType: function (t) {
        var e = Kt(Bt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Kt(Bt).controller.signal;
      },
    },
    m0 = typeof WeakMap == "function" ? WeakMap : Map,
    mt = 0,
    zt = null,
    nt = null,
    ct = 0,
    vt = 0,
    me = null,
    bl = !1,
    za = !1,
    kc = !1,
    tl = 0,
    Rt = 0,
    xl = 0,
    $l = 0,
    $c = 0,
    he = 0,
    Ta = 0,
    bn = null,
    ne = null,
    Wc = !1,
    Du = 0,
    Go = 0,
    Uu = 1 / 0,
    Hu = null,
    Sl = null,
    Gt = 0,
    El = null,
    Aa = null,
    el = 0,
    Fc = 0,
    Ic = null,
    Qo = null,
    xn = 0,
    Pc = null;
  function ye() {
    return (mt & 2) !== 0 && ct !== 0 ? ct & -ct : M.T !== null ? uf() : as();
  }
  function Xo() {
    if (he === 0)
      if ((ct & 536870912) === 0 || st) {
        var t = Xn;
        ((Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (he = t));
      } else he = 536870912;
    return ((t = oe.current), t !== null && (t.flags |= 32), he);
  }
  function ue(t, e, l) {
    (((t === zt && (vt === 2 || vt === 9)) || t.cancelPendingCommit !== null) &&
      (Ca(t, 0), Nl(t, ct, he, !1)),
      Ya(t, l),
      ((mt & 2) === 0 || t !== zt) &&
        (t === zt &&
          ((mt & 2) === 0 && ($l |= l), Rt === 4 && Nl(t, ct, he, !1)),
        Ue(t)));
  }
  function Zo(t, e, l) {
    if ((mt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || qa(t, e),
      n = a ? v0(t, e) : ef(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        za && !a && Nl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !h0(l))) {
          ((n = ef(t, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = bn;
              var y = s.current.memoizedState.isDehydrated;
              if ((y && (Ca(s, i).flags |= 256), (i = ef(s, i, !1)), i !== 2)) {
                if (kc && !y) {
                  ((s.errorRecoveryDisabledLanes |= u), ($l |= u), (n = 4));
                  break t;
                }
                ((u = ne),
                  (ne = n),
                  u !== null &&
                    (ne === null ? (ne = u) : ne.push.apply(ne, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ca(t, 0), Nl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Nl(a, e, he, !bl);
              break t;
            case 2:
              ne = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Du + 300 - ie()), 10 < n)) {
            if ((Nl(a, e, he, !bl), Vn(a, 0, !0) !== 0)) break t;
            ((el = e),
              (a.timeoutHandle = Sd(
                Vo.bind(
                  null,
                  a,
                  l,
                  ne,
                  Hu,
                  Wc,
                  e,
                  he,
                  $l,
                  Ta,
                  bl,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          Vo(a, l, ne, Hu, Wc, e, he, $l, Ta, bl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ue(t);
  }
  function Vo(t, e, l, a, n, u, i, s, y, z, O, U, _, j) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      U & 8192 || (U & 16785408) === 16785408)
    ) {
      ((U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ye,
      }),
        wo(e, u, U));
      var Z =
        (u & 62914560) === u ? Du - ie() : (u & 4194048) === u ? Go - ie() : 0;
      if (((Z = I0(U, Z)), Z !== null)) {
        ((el = u),
          (t.cancelPendingCommit = Z(
            Po.bind(null, t, e, u, l, a, n, i, s, y, O, U, null, _, j),
          )),
          Nl(t, u, i, !z));
        return;
      }
    }
    Po(t, e, u, l, a, n, i, s, y);
  }
  function h0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!se(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Nl(t, e, l, a) {
    ((e &= ~$c),
      (e &= ~$l),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - fe(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && ts(t, l, e);
  }
  function Bu() {
    return (mt & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function tf() {
    if (nt !== null) {
      if (vt === 0) var t = nt.return;
      else ((t = nt), (Ze = Yl = null), vc(t), (ga = null), (ln = 0), (t = nt));
      for (; t !== null; ) (Eo(t.alternate, t), (t = t.return));
      nt = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), U0(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (el = 0),
      tf(),
      (zt = t),
      (nt = l = Qe(t.current, null)),
      (ct = e),
      (vt = 0),
      (me = null),
      (bl = !1),
      (za = qa(t, e)),
      (kc = !1),
      (Ta = he = $c = $l = xl = Rt = 0),
      (ne = bn = null),
      (Wc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - fe(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((tl = e), au(), l);
  }
  function Ko(t, e) {
    ((et = null),
      (M.H = on),
      e === va || e === ou
        ? ((e = cr()), (vt = 3))
        : e === nc
          ? ((e = cr()), (vt = 4))
          : (vt =
              e === Rc
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (me = e),
      nt === null && ((Rt = 1), Tu(t, be(e, t.current))));
  }
  function Jo() {
    var t = oe.current;
    return t === null
      ? !0
      : (ct & 4194048) === ct
        ? Ne === null
        : (ct & 62914560) === ct || (ct & 536870912) !== 0
          ? t === Ne
          : !1;
  }
  function ko() {
    var t = M.H;
    return ((M.H = on), t === null ? on : t);
  }
  function $o() {
    var t = M.A;
    return ((M.A = d0), t);
  }
  function wu() {
    ((Rt = 4),
      bl || ((ct & 4194048) !== ct && oe.current !== null) || (za = !0),
      ((xl & 134217727) === 0 && ($l & 134217727) === 0) ||
        zt === null ||
        Nl(zt, ct, he, !1));
  }
  function ef(t, e, l) {
    var a = mt;
    mt |= 2;
    var n = ko(),
      u = $o();
    ((zt !== t || ct !== e) && ((Hu = null), Ca(t, e)), (e = !1));
    var i = Rt;
    t: do
      try {
        if (vt !== 0 && nt !== null) {
          var s = nt,
            y = me;
          switch (vt) {
            case 8:
              (tf(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              oe.current === null && (e = !0);
              var z = vt;
              if (((vt = 0), (me = null), _a(t, s, y, z), l && za)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((z = vt), (vt = 0), (me = null), _a(t, s, y, z));
          }
        }
        (y0(), (i = Rt));
        break;
      } catch (O) {
        Ko(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ze = Yl = null),
      (mt = a),
      (M.H = n),
      (M.A = u),
      nt === null && ((zt = null), (ct = 0), au()),
      i
    );
  }
  function y0() {
    for (; nt !== null; ) Wo(nt);
  }
  function v0(t, e) {
    var l = mt;
    mt |= 2;
    var a = ko(),
      n = $o();
    zt !== t || ct !== e
      ? ((Hu = null), (Uu = ie() + 500), Ca(t, e))
      : (za = qa(t, e));
    t: do
      try {
        if (vt !== 0 && nt !== null) {
          e = nt;
          var u = me;
          e: switch (vt) {
            case 1:
              ((vt = 0), (me = null), _a(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (ur(u)) {
                ((vt = 0), (me = null), Fo(e));
                break;
              }
              ((e = function () {
                ((vt !== 2 && vt !== 9) || zt !== t || (vt = 7), Ue(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              vt = 7;
              break t;
            case 4:
              vt = 5;
              break t;
            case 7:
              ur(u)
                ? ((vt = 0), (me = null), Fo(e))
                : ((vt = 0), (me = null), _a(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (i ? Bd(i) : s.stateNode.complete) {
                    ((vt = 0), (me = null));
                    var y = s.sibling;
                    if (y !== null) nt = y;
                    else {
                      var z = s.return;
                      z !== null ? ((nt = z), Lu(z)) : (nt = null);
                    }
                    break e;
                  }
              }
              ((vt = 0), (me = null), _a(t, e, u, 5));
              break;
            case 6:
              ((vt = 0), (me = null), _a(t, e, u, 6));
              break;
            case 8:
              (tf(), (Rt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        g0();
        break;
      } catch (O) {
        Ko(t, O);
      }
    while (!0);
    return (
      (Ze = Yl = null),
      (M.H = a),
      (M.A = n),
      (mt = l),
      nt !== null ? 0 : ((zt = null), (ct = 0), au(), Rt)
    );
  }
  function g0() {
    for (; nt !== null && !Ym(); ) Wo(nt);
  }
  function Wo(t) {
    var e = xo(t.alternate, t, tl);
    ((t.memoizedProps = t.pendingProps), e === null ? Lu(t) : (nt = e));
  }
  function Fo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ho(l, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = ho(l, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        vc(e);
      default:
        (Eo(l, e), (e = nt = ks(e, tl)), (e = xo(l, e, tl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Lu(t) : (nt = e));
  }
  function _a(t, e, l, a) {
    ((Ze = Yl = null), vc(e), (ga = null), (ln = 0));
    var n = e.return;
    try {
      if (u0(t, n, e, l, ct)) {
        ((Rt = 1), Tu(t, be(l, t.current)), (nt = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((nt = n), u);
      ((Rt = 1), Tu(t, be(l, t.current)), (nt = null));
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : za || (ct & 536870912) !== 0
            ? (t = !1)
            : ((bl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = oe.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Io(e, t))
      : Lu(e);
  }
  function Lu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Io(e, bl);
        return;
      }
      t = e.return;
      var l = f0(e.alternate, e, tl);
      if (l !== null) {
        nt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        nt = e;
        return;
      }
      nt = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function Io(t, e) {
    do {
      var l = s0(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (nt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        nt = t;
        return;
      }
      nt = t = l;
    } while (t !== null);
    ((Rt = 6), (nt = null));
  }
  function Po(t, e, l, a, n, u, i, s, y) {
    t.cancelPendingCommit = null;
    do qu();
    while (Gt !== 0);
    if ((mt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Xi),
        Wm(t, l, u, i, s, y),
        t === zt && ((nt = zt = null), (ct = 0)),
        (Aa = e),
        (El = t),
        (el = l),
        (Fc = u),
        (Ic = n),
        (Qo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            S0(Gn, function () {
              return (nd(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = M.T), (M.T = null), (n = G.p), (G.p = 2), (i = mt), (mt |= 4));
        try {
          r0(t, e, l);
        } finally {
          ((mt = i), (G.p = n), (M.T = a));
        }
      }
      ((Gt = 1), td(), ed(), ld());
    }
  }
  function td() {
    if (Gt === 1) {
      Gt = 0;
      var t = El,
        e = Aa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = M.T), (M.T = null));
        var a = G.p;
        G.p = 2;
        var n = mt;
        mt |= 4;
        try {
          Uo(e, t);
          var u = hf,
            i = qs(t.containerInfo),
            s = u.focusedElem,
            y = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Ls(s.ownerDocument.documentElement, s)
          ) {
            if (y !== null && Li(s)) {
              var z = y.start,
                O = y.end;
              if ((O === void 0 && (O = z), "selectionStart" in s))
                ((s.selectionStart = z),
                  (s.selectionEnd = Math.min(O, s.value.length)));
              else {
                var U = s.ownerDocument || document,
                  _ = (U && U.defaultView) || window;
                if (_.getSelection) {
                  var j = _.getSelection(),
                    Z = s.textContent.length,
                    W = Math.min(y.start, Z),
                    St = y.end === void 0 ? W : Math.min(y.end, Z);
                  !j.extend && W > St && ((i = St), (St = W), (W = i));
                  var x = ws(s, W),
                    g = ws(s, St);
                  if (
                    x &&
                    g &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== x.node ||
                      j.anchorOffset !== x.offset ||
                      j.focusNode !== g.node ||
                      j.focusOffset !== g.offset)
                  ) {
                    var N = U.createRange();
                    (N.setStart(x.node, x.offset),
                      j.removeAllRanges(),
                      W > St
                        ? (j.addRange(N), j.extend(g.node, g.offset))
                        : (N.setEnd(g.node, g.offset), j.addRange(N)));
                  }
                }
              }
            }
            for (U = [], j = s; (j = j.parentNode); )
              j.nodeType === 1 &&
                U.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < U.length;
              s++
            ) {
              var R = U[s];
              ((R.element.scrollLeft = R.left), (R.element.scrollTop = R.top));
            }
          }
          ((Fu = !!mf), (hf = mf = null));
        } finally {
          ((mt = n), (G.p = a), (M.T = l));
        }
      }
      ((t.current = e), (Gt = 2));
    }
  }
  function ed() {
    if (Gt === 2) {
      Gt = 0;
      var t = El,
        e = Aa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = M.T), (M.T = null));
        var a = G.p;
        G.p = 2;
        var n = mt;
        mt |= 4;
        try {
          jo(t, e.alternate, e);
        } finally {
          ((mt = n), (G.p = a), (M.T = l));
        }
      }
      Gt = 3;
    }
  }
  function ld() {
    if (Gt === 4 || Gt === 3) {
      ((Gt = 0), Gm());
      var t = El,
        e = Aa,
        l = el,
        a = Qo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (Aa = El = null), ad(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (Sl = null),
        bi(l),
        (e = e.stateNode),
        ce && typeof ce.onCommitFiberRoot == "function")
      )
        try {
          ce.onCommitFiberRoot(La, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = M.T), (n = G.p), (G.p = 2), (M.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((M.T = e), (G.p = n));
        }
      }
      ((el & 3) !== 0 && qu(),
        Ue(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Pc
            ? xn++
            : ((xn = 0), (Pc = t))
          : (xn = 0),
        Sn(0));
    }
  }
  function ad(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), tn(e)));
  }
  function qu() {
    return (td(), ed(), ld(), nd());
  }
  function nd() {
    if (Gt !== 5) return !1;
    var t = El,
      e = Fc;
    Fc = 0;
    var l = bi(el),
      a = M.T,
      n = G.p;
    try {
      ((G.p = 32 > l ? 32 : l), (M.T = null), (l = Ic), (Ic = null));
      var u = El,
        i = el;
      if (((Gt = 0), (Aa = El = null), (el = 0), (mt & 6) !== 0))
        throw Error(f(331));
      var s = mt;
      if (
        ((mt |= 4),
        qo(u.current),
        Bo(u, u.current, i, l),
        (mt = s),
        Sn(0, !1),
        ce && typeof ce.onPostCommitFiberRoot == "function")
      )
        try {
          ce.onPostCommitFiberRoot(La, u);
        } catch {}
      return !0;
    } finally {
      ((G.p = n), (M.T = a), ad(t, e));
    }
  }
  function ud(t, e, l) {
    ((e = be(l, e)),
      (e = Mc(t.stateNode, e, 2)),
      (t = yl(t, e, 2)),
      t !== null && (Ya(t, 2), Ue(t)));
  }
  function gt(t, e, l) {
    if (t.tag === 3) ud(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ud(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Sl === null || !Sl.has(a)))
          ) {
            ((t = be(l, t)),
              (l = uo(2)),
              (a = yl(e, l, 2)),
              a !== null && (io(l, a, e, t), Ya(a, 2), Ue(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function lf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new m0();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((kc = !0), n.add(l), (t = p0.bind(null, t, e, l)), e.then(t, t));
  }
  function p0(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      zt === t &&
        (ct & l) === l &&
        (Rt === 4 || (Rt === 3 && (ct & 62914560) === ct && 300 > ie() - Du)
          ? (mt & 2) === 0 && Ca(t, 0)
          : ($c |= l),
        Ta === ct && (Ta = 0)),
      Ue(t));
  }
  function id(t, e) {
    (e === 0 && (e = Pf()), (t = wl(t, e)), t !== null && (Ya(t, e), Ue(t)));
  }
  function b0(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), id(t, l));
  }
  function x0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (a !== null && a.delete(e), id(t, l));
  }
  function S0(t, e) {
    return yi(t, e);
  }
  var Yu = null,
    ja = null,
    af = !1,
    Gu = !1,
    nf = !1,
    zl = 0;
  function Ue(t) {
    (t !== ja &&
      t.next === null &&
      (ja === null ? (Yu = ja = t) : (ja = ja.next = t)),
      (Gu = !0),
      af || ((af = !0), N0()));
  }
  function Sn(t, e) {
    if (!nf && Gu) {
      nf = !0;
      do
        for (var l = !1, a = Yu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - fe(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), rd(a, u));
          } else
            ((u = ct),
              (u = Vn(
                a,
                a === zt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || qa(a, u) || ((l = !0), rd(a, u)));
          a = a.next;
        }
      while (l);
      nf = !1;
    }
  }
  function E0() {
    cd();
  }
  function cd() {
    Gu = af = !1;
    var t = 0;
    zl !== 0 && D0() && (t = zl);
    for (var e = ie(), l = null, a = Yu; a !== null; ) {
      var n = a.next,
        u = fd(a, e);
      (u === 0
        ? ((a.next = null),
          l === null ? (Yu = n) : (l.next = n),
          n === null && (ja = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (a = n));
    }
    ((Gt !== 0 && Gt !== 5) || Sn(t), zl !== 0 && (zl = 0));
  }
  function fd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - fe(u),
        s = 1 << i,
        y = n[i];
      (y === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = $m(s, e))
        : y <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = zt),
      (l = ct),
      (l = Vn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (vt === 2 || vt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && vi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || qa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && vi(a), bi(l))) {
        case 2:
        case 8:
          l = Ff;
          break;
        case 32:
          l = Gn;
          break;
        case 268435456:
          l = If;
          break;
        default:
          l = Gn;
      }
      return (
        (a = sd.bind(null, t)),
        (l = yi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && vi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function sd(t, e) {
    if (Gt !== 0 && Gt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (qu() && t.callbackNode !== l) return null;
    var a = ct;
    return (
      (a = Vn(
        t,
        t === zt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Zo(t, a, e),
          fd(t, ie()),
          t.callbackNode != null && t.callbackNode === l
            ? sd.bind(null, t)
            : null)
    );
  }
  function rd(t, e) {
    if (qu()) return null;
    Zo(t, e, !0);
  }
  function N0() {
    H0(function () {
      (mt & 6) !== 0 ? yi(Wf, E0) : cd();
    });
  }
  function uf() {
    if (zl === 0) {
      var t = ha;
      (t === 0 && ((t = Qn), (Qn <<= 1), (Qn & 261888) === 0 && (Qn = 256)),
        (zl = t));
    }
    return zl;
  }
  function od(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : $n("" + t);
  }
  function dd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function z0(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = od((n[Pt] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Pt] || null)
          ? od(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var s = new Pn("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var y = i ? dd(n, i) : new FormData(n);
                  Tc(
                    l,
                    { pending: !0, data: y, method: n.method, action: u },
                    null,
                    y,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (y = i ? dd(n, i) : new FormData(n)),
                  Tc(
                    l,
                    { pending: !0, data: y, method: n.method, action: u },
                    u,
                    y,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var cf = 0; cf < Qi.length; cf++) {
    var ff = Qi[cf],
      T0 = ff.toLowerCase(),
      A0 = ff[0].toUpperCase() + ff.slice(1);
    _e(T0, "on" + A0);
  }
  (_e(Qs, "onAnimationEnd"),
    _e(Xs, "onAnimationIteration"),
    _e(Zs, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(Qh, "onTransitionRun"),
    _e(Xh, "onTransitionStart"),
    _e(Zh, "onTransitionCancel"),
    _e(Vs, "onTransitionEnd"),
    ta("onMouseEnter", ["mouseout", "mouseover"]),
    ta("onMouseLeave", ["mouseout", "mouseover"]),
    ta("onPointerEnter", ["pointerout", "pointerover"]),
    ta("onPointerLeave", ["pointerout", "pointerover"]),
    Dl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Dl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Dl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Dl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    C0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En),
    );
  function md(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              y = s.instance,
              z = s.currentTarget;
            if (((s = s.listener), y !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = z));
            try {
              u(n);
            } catch (O) {
              lu(O);
            }
            ((n.currentTarget = null), (u = y));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (y = s.instance),
              (z = s.currentTarget),
              (s = s.listener),
              y !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = z));
            try {
              u(n);
            } catch (O) {
              lu(O);
            }
            ((n.currentTarget = null), (u = y));
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[xi];
    l === void 0 && (l = e[xi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (hd(e, t, 2, !1), l.add(a));
  }
  function sf(t, e, l) {
    var a = 0;
    (e && (a |= 4), hd(l, t, a, e));
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function rf(t) {
    if (!t[Qu]) {
      ((t[Qu] = !0),
        is.forEach(function (l) {
          l !== "selectionchange" && (C0.has(l) || sf(l, !1, t), sf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qu] || ((e[Qu] = !0), sf("selectionchange", !1, e));
    }
  }
  function hd(t, e, l, a) {
    switch (Xd(e)) {
      case 2:
        var n = ey;
        break;
      case 8:
        n = ly;
        break;
      default:
        n = Tf;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !ji ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1));
  }
  function of(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var y = i.tag;
              if ((y === 3 || y === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Fl(s)), i === null)) return;
            if (((y = i.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ps(function () {
      var z = u,
        O = Ci(l),
        U = [];
      t: {
        var _ = Ks.get(t);
        if (_ !== void 0) {
          var j = Pn,
            Z = t;
          switch (t) {
            case "keypress":
              if (Fn(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = xh;
              break;
            case "focusin":
              ((Z = "focus"), (j = Di));
              break;
            case "focusout":
              ((Z = "blur"), (j = Di));
              break;
            case "beforeblur":
            case "afterblur":
              j = Di;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Ss;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = fh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Nh;
              break;
            case Qs:
            case Xs:
            case Zs:
              j = oh;
              break;
            case Vs:
              j = Th;
              break;
            case "scroll":
            case "scrollend":
              j = ih;
              break;
            case "wheel":
              j = Ch;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = mh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Ns;
              break;
            case "toggle":
            case "beforetoggle":
              j = jh;
          }
          var W = (e & 4) !== 0,
            St = !W && (t === "scroll" || t === "scrollend"),
            x = W ? (_ !== null ? _ + "Capture" : null) : _;
          W = [];
          for (var g = z, N; g !== null; ) {
            var R = g;
            if (
              ((N = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                N === null ||
                x === null ||
                ((R = Xa(g, x)), R != null && W.push(Nn(g, R, N))),
              St)
            )
              break;
            g = g.return;
          }
          0 < W.length &&
            ((_ = new j(_, Z, null, l, O)), U.push({ event: _, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (j = t === "mouseout" || t === "pointerout"),
            _ &&
              l !== Ai &&
              (Z = l.relatedTarget || l.fromElement) &&
              (Fl(Z) || Z[Wl]))
          )
            break t;
          if (
            (j || _) &&
            ((_ =
              O.window === O
                ? O
                : (_ = O.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            j
              ? ((Z = l.relatedTarget || l.toElement),
                (j = z),
                (Z = Z ? Fl(Z) : null),
                Z !== null &&
                  ((St = v(Z)),
                  (W = Z.tag),
                  Z !== St || (W !== 5 && W !== 27 && W !== 6)) &&
                  (Z = null))
              : ((j = null), (Z = z)),
            j !== Z)
          ) {
            if (
              ((W = Ss),
              (R = "onMouseLeave"),
              (x = "onMouseEnter"),
              (g = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((W = Ns),
                (R = "onPointerLeave"),
                (x = "onPointerEnter"),
                (g = "pointer")),
              (St = j == null ? _ : Qa(j)),
              (N = Z == null ? _ : Qa(Z)),
              (_ = new W(R, g + "leave", j, l, O)),
              (_.target = St),
              (_.relatedTarget = N),
              (R = null),
              Fl(O) === z &&
                ((W = new W(x, g + "enter", Z, l, O)),
                (W.target = N),
                (W.relatedTarget = St),
                (R = W)),
              (St = R),
              j && Z)
            )
              e: {
                for (W = _0, x = j, g = Z, N = 0, R = x; R; R = W(R)) N++;
                R = 0;
                for (var k = g; k; k = W(k)) R++;
                for (; 0 < N - R; ) ((x = W(x)), N--);
                for (; 0 < R - N; ) ((g = W(g)), R--);
                for (; N--; ) {
                  if (x === g || (g !== null && x === g.alternate)) {
                    W = x;
                    break e;
                  }
                  ((x = W(x)), (g = W(g)));
                }
                W = null;
              }
            else W = null;
            (j !== null && yd(U, _, j, W, !1),
              Z !== null && St !== null && yd(U, St, Z, W, !0));
          }
        }
        t: {
          if (
            ((_ = z ? Qa(z) : window),
            (j = _.nodeName && _.nodeName.toLowerCase()),
            j === "select" || (j === "input" && _.type === "file"))
          )
            var ot = Ms;
          else if (js(_))
            if (Rs) ot = qh;
            else {
              ot = wh;
              var J = Bh;
            }
          else
            ((j = _.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? z && Ti(z.elementType) && (ot = Ms)
                : (ot = Lh));
          if (ot && (ot = ot(t, z))) {
            Os(U, ot, l, O);
            break t;
          }
          (J && J(t, _, z),
            t === "focusout" &&
              z &&
              _.type === "number" &&
              z.memoizedProps.value != null &&
              zi(_, "number", _.value));
        }
        switch (((J = z ? Qa(z) : window), t)) {
          case "focusin":
            (js(J) || J.contentEditable === "true") &&
              ((ia = J), (qi = z), (Fa = null));
            break;
          case "focusout":
            Fa = qi = ia = null;
            break;
          case "mousedown":
            Yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Yi = !1), Ys(U, l, O));
            break;
          case "selectionchange":
            if (Gh) break;
          case "keydown":
          case "keyup":
            Ys(U, l, O);
        }
        var lt;
        if (Hi)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          ua
            ? Cs(t, l) && (ft = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (ft = "onCompositionStart");
        (ft &&
          (zs &&
            l.locale !== "ko" &&
            (ua || ft !== "onCompositionStart"
              ? ft === "onCompositionEnd" && ua && (lt = bs())
              : ((fl = O),
                (Oi = "value" in fl ? fl.value : fl.textContent),
                (ua = !0))),
          (J = Xu(z, ft)),
          0 < J.length &&
            ((ft = new Es(ft, t, null, l, O)),
            U.push({ event: ft, listeners: J }),
            lt
              ? (ft.data = lt)
              : ((lt = _s(l)), lt !== null && (ft.data = lt)))),
          (lt = Mh ? Rh(t, l) : Dh(t, l)) &&
            ((ft = Xu(z, "onBeforeInput")),
            0 < ft.length &&
              ((J = new Es("onBeforeInput", "beforeinput", null, l, O)),
              U.push({ event: J, listeners: ft }),
              (J.data = lt))),
          z0(U, t, z, l, O));
      }
      md(U, e);
    });
  }
  function Nn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Xu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Xa(t, l)),
          n != null && a.unshift(Nn(t, n, u)),
          (n = Xa(t, e)),
          n != null && a.push(Nn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function _0(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function yd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        y = s.alternate,
        z = s.stateNode;
      if (((s = s.tag), y !== null && y === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        z === null ||
        ((y = z),
        n
          ? ((z = Xa(l, u)), z != null && i.unshift(Nn(l, z, y)))
          : n || ((z = Xa(l, u)), z != null && i.push(Nn(l, z, y)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var j0 = /\r\n?/g,
    O0 = /\u0000|\uFFFD/g;
  function vd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        j0,
        `
`,
      )
      .replace(O0, "");
  }
  function gd(t, e) {
    return ((e = vd(e)), vd(t) === e);
  }
  function xt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || la(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            la(t, "" + a);
        break;
      case "className":
        Jn(t, "class", a);
        break;
      case "tabIndex":
        Jn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jn(t, l, a);
        break;
      case "style":
        vs(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Jn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), t.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && xt(t, e, "name", n.name, n, null),
                xt(t, e, "formEncType", n.formEncType, n, null),
                xt(t, e, "formMethod", n.formMethod, n, null),
                xt(t, e, "formTarget", n.formTarget, n, null))
              : (xt(t, e, "encType", n.encType, n, null),
                xt(t, e, "method", n.method, n, null),
                xt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), t.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (t.onclick = Ye);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = $n("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        (ut("beforetoggle", t), ut("toggle", t), Kn(t, "popover", a));
        break;
      case "xlinkActuate":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Kn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = nh.get(l) || l), Kn(t, l, a));
    }
  }
  function df(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        vs(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? la(t, a)
          : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ye);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!cs.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Pt] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n));
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
                ? t.setAttribute(l, "")
                : Kn(t, l, a);
          }
    }
  }
  function kt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ut("error", t), ut("load", t));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  xt(t, e, u, i, l, null);
              }
          }
        (n && xt(t, e, "srcSet", l.srcSet, l, null),
          a && xt(t, e, "src", l.src, l, null));
        return;
      case "input":
        ut("invalid", t);
        var s = (u = i = n = null),
          y = null,
          z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  n = O;
                  break;
                case "type":
                  i = O;
                  break;
                case "checked":
                  y = O;
                  break;
                case "defaultChecked":
                  z = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  s = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(f(137, e));
                  break;
                default:
                  xt(t, e, a, O, l, null);
              }
          }
        ds(t, u, s, y, z, i, n, !1);
        return;
      case "select":
        (ut("invalid", t), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                xt(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0));
        return;
      case "textarea":
        (ut("invalid", t), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                xt(t, e, i, s, l, null);
            }
        hs(t, a, n, u);
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                xt(t, e, y, a, l, null);
            }
        return;
      case "dialog":
        (ut("beforetoggle", t),
          ut("toggle", t),
          ut("cancel", t),
          ut("close", t));
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) ut(En[a], t);
        break;
      case "image":
        (ut("error", t), ut("load", t));
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ut("error", t), ut("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in l)
          if (l.hasOwnProperty(z) && ((a = l[z]), a != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                xt(t, e, z, a, l, null);
            }
        return;
      default:
        if (Ti(e)) {
          for (O in l)
            l.hasOwnProperty(O) &&
              ((a = l[O]), a !== void 0 && df(t, e, O, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && xt(t, e, s, a, l, null));
  }
  function M0(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          s = null,
          y = null,
          z = null,
          O = null;
        for (j in l) {
          var U = l[j];
          if (l.hasOwnProperty(j) && U != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = U;
              default:
                a.hasOwnProperty(j) || xt(t, e, j, null, a, U);
            }
        }
        for (var _ in a) {
          var j = a[_];
          if (((U = l[_]), a.hasOwnProperty(_) && (j != null || U != null)))
            switch (_) {
              case "type":
                u = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                z = j;
                break;
              case "defaultChecked":
                O = j;
                break;
              case "value":
                i = j;
                break;
              case "defaultValue":
                s = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(f(137, e));
                break;
              default:
                j !== U && xt(t, e, _, j, a, U);
            }
        }
        Ni(t, i, s, y, z, O, u, n);
        return;
      case "select":
        j = i = s = _ = null;
        for (u in l)
          if (((y = l[u]), l.hasOwnProperty(u) && y != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                j = y;
              default:
                a.hasOwnProperty(u) || xt(t, e, u, null, a, y);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (y = l[n]),
            a.hasOwnProperty(n) && (u != null || y != null))
          )
            switch (n) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== y && xt(t, e, n, u, a, y);
            }
        ((e = s),
          (l = i),
          (a = j),
          _ != null
            ? ea(t, !!l, _, !1)
            : !!a != !!l &&
              (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        j = _ = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && xt(t, e, i, n, a, u);
            }
        ms(t, _, j);
        return;
      case "option":
        for (var Z in l)
          if (
            ((_ = l[Z]),
            l.hasOwnProperty(Z) && _ != null && !a.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                xt(t, e, Z, null, a, _);
            }
        for (y in a)
          if (
            ((_ = a[y]),
            (j = l[y]),
            a.hasOwnProperty(y) && _ !== j && (_ != null || j != null))
          )
            switch (y) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                xt(t, e, y, _, a, j);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in l)
          ((_ = l[W]),
            l.hasOwnProperty(W) &&
              _ != null &&
              !a.hasOwnProperty(W) &&
              xt(t, e, W, null, a, _));
        for (z in a)
          if (
            ((_ = a[z]),
            (j = l[z]),
            a.hasOwnProperty(z) && _ !== j && (_ != null || j != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(f(137, e));
                break;
              default:
                xt(t, e, z, _, a, j);
            }
        return;
      default:
        if (Ti(e)) {
          for (var St in l)
            ((_ = l[St]),
              l.hasOwnProperty(St) &&
                _ !== void 0 &&
                !a.hasOwnProperty(St) &&
                df(t, e, St, void 0, a, _));
          for (O in a)
            ((_ = a[O]),
              (j = l[O]),
              !a.hasOwnProperty(O) ||
                _ === j ||
                (_ === void 0 && j === void 0) ||
                df(t, e, O, _, a, j));
          return;
        }
    }
    for (var x in l)
      ((_ = l[x]),
        l.hasOwnProperty(x) &&
          _ != null &&
          !a.hasOwnProperty(x) &&
          xt(t, e, x, null, a, _));
    for (U in a)
      ((_ = a[U]),
        (j = l[U]),
        !a.hasOwnProperty(U) ||
          _ === j ||
          (_ == null && j == null) ||
          xt(t, e, U, _, a, j));
  }
  function pd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function R0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && pd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var y = l[a],
              z = y.startTime;
            if (z > s) break;
            var O = y.transferSize,
              U = y.initiatorType;
            O &&
              pd(U) &&
              ((y = y.responseEnd), (i += O * (y < s ? 1 : (s - z) / (y - z))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var mf = null,
    hf = null;
  function Zu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function bd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function yf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function D0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vf
        ? !1
        : ((vf = t), !0)
      : ((vf = null), !1);
  }
  var Sd = typeof setTimeout == "function" ? setTimeout : void 0,
    U0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ed = typeof Promise == "function" ? Promise : void 0,
    H0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ed < "u"
          ? function (t) {
              return Ed.resolve(null).then(t).catch(B0);
            }
          : Sd;
  function B0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Tl(t) {
    return t === "head";
  }
  function Nd(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (t.removeChild(n), Da(e));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") zn(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), zn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[Ga] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && zn(t.ownerDocument.body);
      l = n;
    } while (l);
    Da(e);
  }
  function zd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function gf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (gf(l), Si(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function w0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ga])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = ze(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function L0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Td(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function bf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function q0(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function ze(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var xf = null;
  function Ad(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return ze(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Cd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _d(t, e, l) {
    switch (((e = Zu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function zn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Si(t);
  }
  var Te = new Map(),
    jd = new Set();
  function Vu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var ll = G.d;
  G.d = { f: Y0, r: G0, D: Q0, C: X0, L: Z0, m: V0, X: J0, S: K0, M: k0 };
  function Y0() {
    var t = ll.f(),
      e = Bu();
    return t || e;
  }
  function G0(t) {
    var e = Il(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vr(e) : ll.r(t);
  }
  var Oa = typeof document > "u" ? null : document;
  function Od(t, e, l) {
    var a = Oa;
    if (a && typeof e == "string" && e) {
      var n = ge(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        jd.has(n) ||
          (jd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            kt(e, "link", t),
            Qt(e),
            a.head.appendChild(e))));
    }
  }
  function Q0(t) {
    (ll.D(t), Od("dns-prefetch", t, null));
  }
  function X0(t, e) {
    (ll.C(t, e), Od("preconnect", t, e));
  }
  function Z0(t, e, l) {
    ll.L(t, e, l);
    var a = Oa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ge(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ge(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + ge(l.imageSizes) + '"]'))
        : (n += '[href="' + ge(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = Ma(t);
          break;
        case "script":
          u = Ra(t);
      }
      Te.has(u) ||
        ((t = E(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Te.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(Tn(u))) ||
          (e === "script" && a.querySelector(An(u))) ||
          ((e = a.createElement("link")),
          kt(e, "link", t),
          Qt(e),
          a.head.appendChild(e)));
    }
  }
  function V0(t, e) {
    ll.m(t, e);
    var l = Oa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ge(a) + '"][href="' + ge(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ra(t);
      }
      if (
        !Te.has(u) &&
        ((t = E({ rel: "modulepreload", href: t }, e)),
        Te.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(An(u))) return;
        }
        ((a = l.createElement("link")),
          kt(a, "link", t),
          Qt(a),
          l.head.appendChild(a));
      }
    }
  }
  function K0(t, e, l) {
    ll.S(t, e, l);
    var a = Oa;
    if (a && t) {
      var n = Pl(a).hoistableStyles,
        u = Ma(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Tn(u)))) s.loading = 5;
        else {
          ((t = E({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Te.get(u)) && Sf(t, l));
          var y = (i = a.createElement("link"));
          (Qt(y),
            kt(y, "link", t),
            (y._p = new Promise(function (z, O) {
              ((y.onload = z), (y.onerror = O));
            })),
            y.addEventListener("load", function () {
              s.loading |= 1;
            }),
            y.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ku(i, e, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function J0(t, e) {
    ll.X(t, e);
    var l = Oa;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = Ra(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = E({ src: t, async: !0 }, e)),
          (e = Te.get(n)) && Ef(t, e),
          (u = l.createElement("script")),
          Qt(u),
          kt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function k0(t, e) {
    ll.M(t, e);
    var l = Oa;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = Ra(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = E({ src: t, async: !0, type: "module" }, e)),
          (e = Te.get(n)) && Ef(t, e),
          (u = l.createElement("script")),
          Qt(u),
          kt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Md(t, e, l, a) {
    var n = (n = at.current) ? Vu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ma(l.href)),
            (l = Pl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ma(l.href);
          var u = Pl(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(Tn(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Te.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Te.set(t, l),
                u || $0(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ra(l)),
              (l = Pl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Ma(t) {
    return 'href="' + ge(t) + '"';
  }
  function Tn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Rd(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function $0(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        kt(e, "link", l),
        Qt(e),
        t.head.appendChild(e));
  }
  function Ra(t) {
    return '[src="' + ge(t) + '"]';
  }
  function An(t) {
    return "script[async]" + t;
  }
  function Dd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ge(l.href) + '"]');
          if (a) return ((e.instance = a), Qt(a), a);
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Qt(a),
            kt(a, "style", n),
            Ku(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Ma(l.href);
          var u = t.querySelector(Tn(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Qt(u), u);
          ((a = Rd(l)),
            (n = Te.get(n)) && Sf(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            Qt(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, y) {
              ((i.onload = s), (i.onerror = y));
            })),
            kt(u, "link", a),
            (e.state.loading |= 4),
            Ku(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Ra(l.src)),
            (n = t.querySelector(An(u)))
              ? ((e.instance = n), Qt(n), n)
              : ((a = l),
                (n = Te.get(u)) && ((a = E({}, l)), Ef(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Qt(n),
                kt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Ku(a, l.precedence, t));
    return e.instance;
  }
  function Ku(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Ef(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ju = null;
  function Ud(t, e, l) {
    if (Ju === null) {
      var a = new Map(),
        n = (Ju = new Map());
      n.set(l, a);
    } else ((n = Ju), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Ga] ||
          u[Zt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Hd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function W0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function F0(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ma(a.href),
          u = e.querySelector(Tn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = ku.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Qt(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Rd(a)),
          (n = Te.get(n)) && Sf(a, n),
          (u = u.createElement("link")),
          Qt(u));
        var i = u;
        ((i._p = new Promise(function (s, y) {
          ((i.onload = s), (i.onerror = y));
        })),
          kt(u, "link", a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = ku.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var Nf = 0;
  function I0(t, e) {
    return (
      t.stylesheets && t.count === 0 && Wu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Wu(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Nf === 0 && (Nf = 62500 * R0());
            var n = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Wu(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > Nf ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ku() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $u = null;
  function Wu(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        ($u = new Map()),
        e.forEach(P0, t),
        ($u = null),
        ku.call(t)));
  }
  function P0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = $u.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), $u.set(t, l));
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ku.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Cn = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function ty(t, e, l, a, n, u, i, s, y) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = gi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gi(0)),
      (this.hiddenUpdates = gi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function wd(t, e, l, a, n, u, i, s, y, z, O, U) {
    return (
      (t = new ty(t, e, l, i, y, z, O, U, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = re(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = ec()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      uc(u),
      t
    );
  }
  function Ld(t) {
    return t ? ((t = sa), t) : sa;
  }
  function qd(t, e, l, a, n, u) {
    ((n = Ld(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = hl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = yl(t, a, e)),
      l !== null && (ue(l, t, e), nn(l, t, e)));
  }
  function Yd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function zf(t, e) {
    (Yd(t, e), (t = t.alternate) && Yd(t, e));
  }
  function Gd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = wl(t, 67108864);
      (e !== null && ue(e, t, 67108864), zf(t, 67108864));
    }
  }
  function Qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ye();
      e = pi(e);
      var l = wl(t, e);
      (l !== null && ue(l, t, e), zf(t, e));
    }
  }
  var Fu = !0;
  function ey(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = G.p;
    try {
      ((G.p = 2), Tf(t, e, l, a));
    } finally {
      ((G.p = u), (M.T = n));
    }
  }
  function ly(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = G.p;
    try {
      ((G.p = 8), Tf(t, e, l, a));
    } finally {
      ((G.p = u), (M.T = n));
    }
  }
  function Tf(t, e, l, a) {
    if (Fu) {
      var n = Af(a);
      if (n === null) (of(t, e, a, Iu, l), Zd(t, a));
      else if (ny(n, t, e, l, a)) a.stopPropagation();
      else if ((Zd(t, a), e & 4 && -1 < ay.indexOf(t))) {
        for (; n !== null; ) {
          var u = Il(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Rl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var y = 1 << (31 - fe(i));
                      ((s.entanglements[1] |= y), (i &= ~y));
                    }
                    (Ue(u), (mt & 6) === 0 && ((Uu = ie() + 500), Sn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = wl(u, 2)), s !== null && ue(s, u, 2), Bu(), zf(u, 2));
            }
          if (((u = Af(a)), u === null && of(t, e, a, Iu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else of(t, e, a, null, l);
    }
  }
  function Af(t) {
    return ((t = Ci(t)), Cf(t));
  }
  var Iu = null;
  function Cf(t) {
    if (((Iu = null), (t = Fl(t)), t !== null)) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = C(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Iu = t), null);
  }
  function Xd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qm()) {
          case Wf:
            return 2;
          case Ff:
            return 8;
          case Gn:
          case Xm:
            return 32;
          case If:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _f = !1,
    Al = null,
    Cl = null,
    _l = null,
    _n = new Map(),
    jn = new Map(),
    jl = [],
    ay =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Zd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        Cl = null;
        break;
      case "mouseover":
      case "mouseout":
        _l = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(e.pointerId);
    }
  }
  function On(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Il(e)), e !== null && Gd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function ny(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return ((Al = On(Al, t, e, l, a, n)), !0);
      case "dragenter":
        return ((Cl = On(Cl, t, e, l, a, n)), !0);
      case "mouseover":
        return ((_l = On(_l, t, e, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (_n.set(u, On(_n.get(u) || null, t, e, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          jn.set(u, On(jn.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Vd(t) {
    var e = Fl(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            ((t.blockedOn = e),
              ns(t.priority, function () {
                Qd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = C(l)), e !== null)) {
            ((t.blockedOn = e),
              ns(t.priority, function () {
                Qd(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Pu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Af(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Ai = a), l.target.dispatchEvent(a), (Ai = null));
      } else return ((e = Il(l)), e !== null && Gd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function Kd(t, e, l) {
    Pu(t) && l.delete(e);
  }
  function uy() {
    ((_f = !1),
      Al !== null && Pu(Al) && (Al = null),
      Cl !== null && Pu(Cl) && (Cl = null),
      _l !== null && Pu(_l) && (_l = null),
      _n.forEach(Kd),
      jn.forEach(Kd));
  }
  function ti(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      _f ||
        ((_f = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, uy)));
  }
  var ei = null;
  function Jd(t) {
    ei !== t &&
      ((ei = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ei === t && (ei = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Cf(a || l) === null) continue;
            break;
          }
          var u = Il(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Tc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Da(t) {
    function e(y) {
      return ti(y, t);
    }
    (Al !== null && ti(Al, t),
      Cl !== null && ti(Cl, t),
      _l !== null && ti(_l, t),
      _n.forEach(e),
      jn.forEach(e));
    for (var l = 0; l < jl.length; l++) {
      var a = jl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < jl.length && ((l = jl[0]), l.blockedOn === null); )
      (Vd(l), l.blockedOn === null && jl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Pt] || null;
        if (typeof u == "function") i || Jd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Pt] || null))) s = i.formAction;
            else if (Cf(n) !== null) continue;
          } else s = i.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Jd(l));
        }
      }
  }
  function kd() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function jf(t) {
    this._internalRoot = t;
  }
  ((li.prototype.render = jf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = ye();
      qd(l, a, t, e, null, null);
    }),
    (li.prototype.unmount = jf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (qd(t.current, 2, null, t, null, null), Bu(), (e[Wl] = null));
        }
      }));
  function li(t) {
    this._internalRoot = t;
  }
  li.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = as();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < jl.length && e !== 0 && e < jl[l].priority; l++);
      (jl.splice(l, 0, t), l === 0 && Vd(t));
    }
  };
  var $d = r.version;
  if ($d !== "19.2.0") throw Error(f(527, $d, "19.2.0"));
  G.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = h(e)),
      (t = t !== null ? A(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var iy = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        ((La = ai.inject(iy)), (ce = ai));
      } catch {}
  }
  return (
    (Rn.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = eo,
        u = lo,
        i = ao;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = wd(t, 1, !1, null, null, l, a, null, n, u, i, kd)),
        (t[Wl] = e.current),
        rf(t),
        new jf(e)
      );
    }),
    (Rn.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = eo,
        i = lo,
        s = ao,
        y = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (y = l.formState)),
        (e = wd(t, 1, !0, e, l ?? null, a, n, y, u, i, s, kd)),
        (e.context = Ld(null)),
        (l = e.current),
        (a = ye()),
        (a = pi(a)),
        (n = hl(a)),
        (n.callback = null),
        yl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ya(e, l),
        Ue(e),
        (t[Wl] = e.current),
        rf(t),
        new li(e)
      );
    }),
    (Rn.version = "19.2.0"),
    Rn
  );
}
var um;
function py() {
  if (um) return Rf.exports;
  um = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (Rf.exports = gy()), Rf.exports);
}
var by = py();
var im = "popstate";
function xy(c = {}) {
  function r(f, d) {
    let { pathname: v, search: S, hash: C } = f.location;
    return Lf(
      "",
      { pathname: v, search: S, hash: C },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function o(f, d) {
    return typeof d == "string" ? d : Un(d);
  }
  return Ey(r, o, null, c);
}
function Ot(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function Ae(c, r) {
  if (!c) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Sy() {
  return Math.random().toString(36).substring(2, 10);
}
function cm(c, r) {
  return { usr: c.state, key: c.key, idx: r };
}
function Lf(c, r, o = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Ha(r) : r),
    state: o,
    key: (r && r.key) || f || Sy(),
  };
}
function Un({ pathname: c = "/", search: r = "", hash: o = "" }) {
  return (
    r && r !== "?" && (c += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (c += o.charAt(0) === "#" ? o : "#" + o),
    c
  );
}
function Ha(c) {
  let r = {};
  if (c) {
    let o = c.indexOf("#");
    o >= 0 && ((r.hash = c.substring(o)), (c = c.substring(0, o)));
    let f = c.indexOf("?");
    (f >= 0 && ((r.search = c.substring(f)), (c = c.substring(0, f))),
      c && (r.pathname = c));
  }
  return r;
}
function Ey(c, r, o, f = {}) {
  let { window: d = document.defaultView, v5Compat: v = !1 } = f,
    S = d.history,
    C = "POP",
    p = null,
    h = A();
  h == null && ((h = 0), S.replaceState({ ...S.state, idx: h }, ""));
  function A() {
    return (S.state || { idx: null }).idx;
  }
  function E() {
    C = "POP";
    let X = A(),
      L = X == null ? null : X - h;
    ((h = X), p && p({ action: C, location: Y.location, delta: L }));
  }
  function B(X, L) {
    C = "PUSH";
    let q = Lf(Y.location, X, L);
    h = A() + 1;
    let V = cm(q, h),
      yt = Y.createHref(q);
    try {
      S.pushState(V, "", yt);
    } catch (it) {
      if (it instanceof DOMException && it.name === "DataCloneError") throw it;
      d.location.assign(yt);
    }
    v && p && p({ action: C, location: Y.location, delta: 1 });
  }
  function w(X, L) {
    C = "REPLACE";
    let q = Lf(Y.location, X, L);
    h = A();
    let V = cm(q, h),
      yt = Y.createHref(q);
    (S.replaceState(V, "", yt),
      v && p && p({ action: C, location: Y.location, delta: 0 }));
  }
  function D(X) {
    return Ny(X);
  }
  let Y = {
    get action() {
      return C;
    },
    get location() {
      return c(d, S);
    },
    listen(X) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(im, E),
        (p = X),
        () => {
          (d.removeEventListener(im, E), (p = null));
        }
      );
    },
    createHref(X) {
      return r(d, X);
    },
    createURL: D,
    encodeLocation(X) {
      let L = D(X);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: B,
    replace: w,
    go(X) {
      return S.go(X);
    },
  };
  return Y;
}
function Ny(c, r = !1) {
  let o = "http://localhost";
  (typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ot(o, "No window.location.(origin|href) available to create URL"));
  let f = typeof c == "string" ? c : Un(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !r && f.startsWith("//") && (f = o + f),
    new URL(f, o)
  );
}
function pm(c, r, o = "/") {
  return zy(c, r, o, !1);
}
function zy(c, r, o, f) {
  let d = typeof r == "string" ? Ha(r) : r,
    v = nl(d.pathname || "/", o);
  if (v == null) return null;
  let S = bm(c);
  Ty(S);
  let C = null;
  for (let p = 0; C == null && p < S.length; ++p) {
    let h = By(v);
    C = Uy(S[p], h, f);
  }
  return C;
}
function bm(c, r = [], o = [], f = "", d = !1) {
  let v = (S, C, p = d, h) => {
    let A = {
      relativePath: h === void 0 ? S.path || "" : h,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: C,
      route: S,
    };
    if (A.relativePath.startsWith("/")) {
      if (!A.relativePath.startsWith(f) && p) return;
      (Ot(
        A.relativePath.startsWith(f),
        `Absolute route path "${A.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (A.relativePath = A.relativePath.slice(f.length)));
    }
    let E = al([f, A.relativePath]),
      B = o.concat(A);
    (S.children &&
      S.children.length > 0 &&
      (Ot(
        S.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${E}".`,
      ),
      bm(S.children, r, B, E, p)),
      !(S.path == null && !S.index) &&
        r.push({ path: E, score: Ry(E, S.index), routesMeta: B }));
  };
  return (
    c.forEach((S, C) => {
      if (S.path === "" || !S.path?.includes("?")) v(S, C);
      else for (let p of xm(S.path)) v(S, C, !0, p);
    }),
    r
  );
}
function xm(c) {
  let r = c.split("/");
  if (r.length === 0) return [];
  let [o, ...f] = r,
    d = o.endsWith("?"),
    v = o.replace(/\?$/, "");
  if (f.length === 0) return d ? [v, ""] : [v];
  let S = xm(f.join("/")),
    C = [];
  return (
    C.push(...S.map((p) => (p === "" ? v : [v, p].join("/")))),
    d && C.push(...S),
    C.map((p) => (c.startsWith("/") && p === "" ? "/" : p))
  );
}
function Ty(c) {
  c.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : Dy(
          r.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
var Ay = /^:[\w-]+$/,
  Cy = 3,
  _y = 2,
  jy = 1,
  Oy = 10,
  My = -2,
  fm = (c) => c === "*";
function Ry(c, r) {
  let o = c.split("/"),
    f = o.length;
  return (
    o.some(fm) && (f += My),
    r && (f += _y),
    o
      .filter((d) => !fm(d))
      .reduce((d, v) => d + (Ay.test(v) ? Cy : v === "" ? jy : Oy), f)
  );
}
function Dy(c, r) {
  return c.length === r.length && c.slice(0, -1).every((f, d) => f === r[d])
    ? c[c.length - 1] - r[r.length - 1]
    : 0;
}
function Uy(c, r, o = !1) {
  let { routesMeta: f } = c,
    d = {},
    v = "/",
    S = [];
  for (let C = 0; C < f.length; ++C) {
    let p = f[C],
      h = C === f.length - 1,
      A = v === "/" ? r : r.slice(v.length) || "/",
      E = ci(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: h },
        A,
      ),
      B = p.route;
    if (
      (!E &&
        h &&
        o &&
        !f[f.length - 1].route.index &&
        (E = ci(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          A,
        )),
      !E)
    )
      return null;
    (Object.assign(d, E.params),
      S.push({
        params: d,
        pathname: al([v, E.pathname]),
        pathnameBase: Gy(al([v, E.pathnameBase])),
        route: B,
      }),
      E.pathnameBase !== "/" && (v = al([v, E.pathnameBase])));
  }
  return S;
}
function ci(c, r) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [o, f] = Hy(c.path, c.caseSensitive, c.end),
    d = r.match(o);
  if (!d) return null;
  let v = d[0],
    S = v.replace(/(.)\/+$/, "$1"),
    C = d.slice(1);
  return {
    params: f.reduce((h, { paramName: A, isOptional: E }, B) => {
      if (A === "*") {
        let D = C[B] || "";
        S = v.slice(0, v.length - D.length).replace(/(.)\/+$/, "$1");
      }
      const w = C[B];
      return (
        E && !w ? (h[A] = void 0) : (h[A] = (w || "").replace(/%2F/g, "/")),
        h
      );
    }, {}),
    pathname: v,
    pathnameBase: S,
    pattern: c,
  };
}
function Hy(c, r = !1, o = !0) {
  Ae(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`,
  );
  let f = [],
    d =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, C, p) => (
            f.push({ paramName: C, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (d += "\\/*$")
        : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, r ? void 0 : "i"), f]
  );
}
function By(c) {
  try {
    return c
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Ae(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      c
    );
  }
}
function nl(c, r) {
  if (r === "/") return c;
  if (!c.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    f = c.charAt(o);
  return f && f !== "/" ? null : c.slice(o) || "/";
}
var wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ly = (c) => wy.test(c);
function qy(c, r = "/") {
  let {
      pathname: o,
      search: f = "",
      hash: d = "",
    } = typeof c == "string" ? Ha(c) : c,
    v;
  if (o)
    if (Ly(o)) v = o;
    else {
      if (o.includes("//")) {
        let S = o;
        ((o = o.replace(/\/\/+/g, "/")),
          Ae(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${S} -> ${o}`,
          ));
      }
      o.startsWith("/") ? (v = sm(o.substring(1), "/")) : (v = sm(o, r));
    }
  else v = r;
  return { pathname: v, search: Qy(f), hash: Xy(d) };
}
function sm(c, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Bf(c, r, o, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yy(c) {
  return c.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Sm(c) {
  let r = Yy(c);
  return r.map((o, f) => (f === r.length - 1 ? o.pathname : o.pathnameBase));
}
function Em(c, r, o, f = !1) {
  let d;
  typeof c == "string"
    ? (d = Ha(c))
    : ((d = { ...c }),
      Ot(
        !d.pathname || !d.pathname.includes("?"),
        Bf("?", "pathname", "search", d),
      ),
      Ot(
        !d.pathname || !d.pathname.includes("#"),
        Bf("#", "pathname", "hash", d),
      ),
      Ot(!d.search || !d.search.includes("#"), Bf("#", "search", "hash", d)));
  let v = c === "" || d.pathname === "",
    S = v ? "/" : d.pathname,
    C;
  if (S == null) C = o;
  else {
    let E = r.length - 1;
    if (!f && S.startsWith("..")) {
      let B = S.split("/");
      for (; B[0] === ".."; ) (B.shift(), (E -= 1));
      d.pathname = B.join("/");
    }
    C = E >= 0 ? r[E] : "/";
  }
  let p = qy(d, C),
    h = S && S !== "/" && S.endsWith("/"),
    A = (v || S === ".") && o.endsWith("/");
  return (!p.pathname.endsWith("/") && (h || A) && (p.pathname += "/"), p);
}
var al = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Gy = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qy = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  Xy = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function Zy(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Nm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Nm);
var Vy = ["GET", ...Nm];
new Set(Vy);
var Ba = T.createContext(null);
Ba.displayName = "DataRouter";
var si = T.createContext(null);
si.displayName = "DataRouterState";
T.createContext(!1);
var zm = T.createContext({ isTransitioning: !1 });
zm.displayName = "ViewTransition";
var Ky = T.createContext(new Map());
Ky.displayName = "Fetchers";
var Jy = T.createContext(null);
Jy.displayName = "Await";
var He = T.createContext(null);
He.displayName = "Navigation";
var Hn = T.createContext(null);
Hn.displayName = "Location";
var ul = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ul.displayName = "Route";
var Qf = T.createContext(null);
Qf.displayName = "RouteError";
function ky(c, { relative: r } = {}) {
  Ot(
    Bn(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: o, navigator: f } = T.useContext(He),
    { hash: d, pathname: v, search: S } = Ln(c, { relative: r }),
    C = v;
  return (
    o !== "/" && (C = v === "/" ? o : al([o, v])),
    f.createHref({ pathname: C, search: S, hash: d })
  );
}
function Bn() {
  return T.useContext(Hn) != null;
}
function Be() {
  return (
    Ot(
      Bn(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(Hn).location
  );
}
var Tm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Am(c) {
  T.useContext(He).static || T.useLayoutEffect(c);
}
function wn() {
  let { isDataRoute: c } = T.useContext(ul);
  return c ? cv() : $y();
}
function $y() {
  Ot(
    Bn(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let c = T.useContext(Ba),
    { basename: r, navigator: o } = T.useContext(He),
    { matches: f } = T.useContext(ul),
    { pathname: d } = Be(),
    v = JSON.stringify(Sm(f)),
    S = T.useRef(!1);
  return (
    Am(() => {
      S.current = !0;
    }),
    T.useCallback(
      (p, h = {}) => {
        if ((Ae(S.current, Tm), !S.current)) return;
        if (typeof p == "number") {
          o.go(p);
          return;
        }
        let A = Em(p, JSON.parse(v), d, h.relative === "path");
        (c == null &&
          r !== "/" &&
          (A.pathname = A.pathname === "/" ? r : al([r, A.pathname])),
          (h.replace ? o.replace : o.push)(A, h.state, h));
      },
      [r, o, v, d, c],
    )
  );
}
T.createContext(null);
function Ln(c, { relative: r } = {}) {
  let { matches: o } = T.useContext(ul),
    { pathname: f } = Be(),
    d = JSON.stringify(Sm(o));
  return T.useMemo(() => Em(c, JSON.parse(d), f, r === "path"), [c, d, f, r]);
}
function Wy(c, r) {
  return Cm(c, r);
}
function Cm(c, r, o, f, d) {
  Ot(
    Bn(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: v } = T.useContext(He),
    { matches: S } = T.useContext(ul),
    C = S[S.length - 1],
    p = C ? C.params : {},
    h = C ? C.pathname : "/",
    A = C ? C.pathnameBase : "/",
    E = C && C.route;
  {
    let q = (E && E.path) || "";
    _m(
      h,
      !E || q.endsWith("*") || q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`,
    );
  }
  let B = Be(),
    w;
  if (r) {
    let q = typeof r == "string" ? Ha(r) : r;
    (Ot(
      A === "/" || q.pathname?.startsWith(A),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${q.pathname}" was given in the \`location\` prop.`,
    ),
      (w = q));
  } else w = B;
  let D = w.pathname || "/",
    Y = D;
  if (A !== "/") {
    let q = A.replace(/^\//, "").split("/");
    Y = "/" + D.replace(/^\//, "").split("/").slice(q.length).join("/");
  }
  let X = pm(c, { pathname: Y });
  (Ae(
    E || X != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `,
  ),
    Ae(
      X == null ||
        X[X.length - 1].route.element !== void 0 ||
        X[X.length - 1].route.Component !== void 0 ||
        X[X.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let L = ev(
    X &&
      X.map((q) =>
        Object.assign({}, q, {
          params: Object.assign({}, p, q.params),
          pathname: al([
            A,
            v.encodeLocation
              ? v.encodeLocation(
                  q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : q.pathname,
          ]),
          pathnameBase:
            q.pathnameBase === "/"
              ? A
              : al([
                  A,
                  v.encodeLocation
                    ? v.encodeLocation(
                        q.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : q.pathnameBase,
                ]),
        }),
      ),
    S,
    o,
    f,
    d,
  );
  return r && L
    ? T.createElement(
        Hn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...w,
            },
            navigationType: "POP",
          },
        },
        L,
      )
    : L;
}
function Fy() {
  let c = iv(),
    r = Zy(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
        ? c.message
        : JSON.stringify(c),
    o = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    v = { padding: "2px 4px", backgroundColor: f },
    S = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (S = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: v }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, r),
      o ? T.createElement("pre", { style: d }, o) : null,
      S,
    )
  );
}
var Iy = T.createElement(Fy, null),
  Py = class extends T.Component {
    constructor(c) {
      (super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, r) {
      return r.location !== c.location ||
        (r.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : r.error,
            location: r.location,
            revalidation: c.revalidation || r.revalidation,
          };
    }
    componentDidCatch(c, r) {
      this.props.onError
        ? this.props.onError(c, r)
        : console.error(
            "React Router caught the following error during render",
            c,
          );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            ul.Provider,
            { value: this.props.routeContext },
            T.createElement(Qf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function tv({ routeContext: c, match: r, children: o }) {
  let f = T.useContext(Ba);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    T.createElement(ul.Provider, { value: c }, o)
  );
}
function ev(c, r = [], o = null, f = null, d = null) {
  if (c == null) {
    if (!o) return null;
    if (o.errors) c = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      c = o.matches;
    else return null;
  }
  let v = c,
    S = o?.errors;
  if (S != null) {
    let A = v.findIndex((E) => E.route.id && S?.[E.route.id] !== void 0);
    (Ot(
      A >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`,
    ),
      (v = v.slice(0, Math.min(v.length, A + 1))));
  }
  let C = !1,
    p = -1;
  if (o)
    for (let A = 0; A < v.length; A++) {
      let E = v[A];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (p = A),
        E.route.id)
      ) {
        let { loaderData: B, errors: w } = o,
          D =
            E.route.loader &&
            !B.hasOwnProperty(E.route.id) &&
            (!w || w[E.route.id] === void 0);
        if (E.route.lazy || D) {
          ((C = !0), p >= 0 ? (v = v.slice(0, p + 1)) : (v = [v[0]]));
          break;
        }
      }
    }
  let h =
    o && f
      ? (A, E) => {
          f(A, {
            location: o.location,
            params: o.matches?.[0]?.params ?? {},
            errorInfo: E,
          });
        }
      : void 0;
  return v.reduceRight((A, E, B) => {
    let w,
      D = !1,
      Y = null,
      X = null;
    o &&
      ((w = S && E.route.id ? S[E.route.id] : void 0),
      (Y = E.route.errorElement || Iy),
      C &&
        (p < 0 && B === 0
          ? (_m(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (D = !0),
            (X = null))
          : p === B &&
            ((D = !0), (X = E.route.hydrateFallbackElement || null))));
    let L = r.concat(v.slice(0, B + 1)),
      q = () => {
        let V;
        return (
          w
            ? (V = Y)
            : D
              ? (V = X)
              : E.route.Component
                ? (V = T.createElement(E.route.Component, null))
                : E.route.element
                  ? (V = E.route.element)
                  : (V = A),
          T.createElement(tv, {
            match: E,
            routeContext: { outlet: A, matches: L, isDataRoute: o != null },
            children: V,
          })
        );
      };
    return o && (E.route.ErrorBoundary || E.route.errorElement || B === 0)
      ? T.createElement(Py, {
          location: o.location,
          revalidation: o.revalidation,
          component: Y,
          error: w,
          children: q(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: h,
        })
      : q();
  }, null);
}
function Xf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lv(c) {
  let r = T.useContext(Ba);
  return (Ot(r, Xf(c)), r);
}
function av(c) {
  let r = T.useContext(si);
  return (Ot(r, Xf(c)), r);
}
function nv(c) {
  let r = T.useContext(ul);
  return (Ot(r, Xf(c)), r);
}
function Zf(c) {
  let r = nv(c),
    o = r.matches[r.matches.length - 1];
  return (
    Ot(
      o.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function uv() {
  return Zf("useRouteId");
}
function iv() {
  let c = T.useContext(Qf),
    r = av("useRouteError"),
    o = Zf("useRouteError");
  return c !== void 0 ? c : r.errors?.[o];
}
function cv() {
  let { router: c } = lv("useNavigate"),
    r = Zf("useNavigate"),
    o = T.useRef(!1);
  return (
    Am(() => {
      o.current = !0;
    }),
    T.useCallback(
      async (d, v = {}) => {
        (Ae(o.current, Tm),
          o.current &&
            (typeof d == "number"
              ? c.navigate(d)
              : await c.navigate(d, { fromRouteId: r, ...v })));
      },
      [c, r],
    )
  );
}
var rm = {};
function _m(c, r, o) {
  !r && !rm[c] && ((rm[c] = !0), Ae(!1, o));
}
T.memo(fv);
function fv({ routes: c, future: r, state: o, unstable_onError: f }) {
  return Cm(c, void 0, o, f, r);
}
function Ua(c) {
  Ot(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function sv({
  basename: c = "/",
  children: r = null,
  location: o,
  navigationType: f = "POP",
  navigator: d,
  static: v = !1,
}) {
  Ot(
    !Bn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let S = c.replace(/^\/*/, "/"),
    C = T.useMemo(
      () => ({ basename: S, navigator: d, static: v, future: {} }),
      [S, d, v],
    );
  typeof o == "string" && (o = Ha(o));
  let {
      pathname: p = "/",
      search: h = "",
      hash: A = "",
      state: E = null,
      key: B = "default",
    } = o,
    w = T.useMemo(() => {
      let D = nl(p, S);
      return D == null
        ? null
        : {
            location: { pathname: D, search: h, hash: A, state: E, key: B },
            navigationType: f,
          };
    }, [S, p, h, A, E, B, f]);
  return (
    Ae(
      w != null,
      `<Router basename="${S}"> is not able to match the URL "${p}${h}${A}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    w == null
      ? null
      : T.createElement(
          He.Provider,
          { value: C },
          T.createElement(Hn.Provider, { children: r, value: w }),
        )
  );
}
function rv({ children: c, location: r }) {
  return Wy(qf(c), r);
}
function qf(c, r = []) {
  let o = [];
  return (
    T.Children.forEach(c, (f, d) => {
      if (!T.isValidElement(f)) return;
      let v = [...r, d];
      if (f.type === T.Fragment) {
        o.push.apply(o, qf(f.props.children, v));
        return;
      }
      (Ot(
        f.type === Ua,
        `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ot(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes.",
        ));
      let S = {
        id: f.props.id || v.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      (f.props.children && (S.children = qf(f.props.children, v)), o.push(S));
    }),
    o
  );
}
var ui = "get",
  ii = "application/x-www-form-urlencoded";
function ri(c) {
  return c != null && typeof c.tagName == "string";
}
function ov(c) {
  return ri(c) && c.tagName.toLowerCase() === "button";
}
function dv(c) {
  return ri(c) && c.tagName.toLowerCase() === "form";
}
function mv(c) {
  return ri(c) && c.tagName.toLowerCase() === "input";
}
function hv(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function yv(c, r) {
  return c.button === 0 && (!r || r === "_self") && !hv(c);
}
function Yf(c = "") {
  return new URLSearchParams(
    typeof c == "string" || Array.isArray(c) || c instanceof URLSearchParams
      ? c
      : Object.keys(c).reduce((r, o) => {
          let f = c[o];
          return r.concat(Array.isArray(f) ? f.map((d) => [o, d]) : [[o, f]]);
        }, []),
  );
}
function vv(c, r) {
  let o = Yf(c);
  return (
    r &&
      r.forEach((f, d) => {
        o.has(d) ||
          r.getAll(d).forEach((v) => {
            o.append(d, v);
          });
      }),
    o
  );
}
var ni = null;
function gv() {
  if (ni === null)
    try {
      (new FormData(document.createElement("form"), 0), (ni = !1));
    } catch {
      ni = !0;
    }
  return ni;
}
var pv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wf(c) {
  return c != null && !pv.has(c)
    ? (Ae(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`,
      ),
      null)
    : c;
}
function bv(c, r) {
  let o, f, d, v, S;
  if (dv(c)) {
    let C = c.getAttribute("action");
    ((f = C ? nl(C, r) : null),
      (o = c.getAttribute("method") || ui),
      (d = wf(c.getAttribute("enctype")) || ii),
      (v = new FormData(c)));
  } else if (ov(c) || (mv(c) && (c.type === "submit" || c.type === "image"))) {
    let C = c.form;
    if (C == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = c.getAttribute("formaction") || C.getAttribute("action");
    if (
      ((f = p ? nl(p, r) : null),
      (o = c.getAttribute("formmethod") || C.getAttribute("method") || ui),
      (d =
        wf(c.getAttribute("formenctype")) ||
        wf(C.getAttribute("enctype")) ||
        ii),
      (v = new FormData(C, c)),
      !gv())
    ) {
      let { name: h, type: A, value: E } = c;
      if (A === "image") {
        let B = h ? `${h}.` : "";
        (v.append(`${B}x`, "0"), v.append(`${B}y`, "0"));
      } else h && v.append(h, E);
    }
  } else {
    if (ri(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = ui), (f = null), (d = ii), (S = c));
  }
  return (
    v && d === "text/plain" && ((S = v), (v = void 0)),
    { action: f, method: o.toLowerCase(), encType: d, formData: v, body: S }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vf(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function xv(c, r, o) {
  let f =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : c;
  return (
    f.pathname === "/"
      ? (f.pathname = `_root.${o}`)
      : r && nl(f.pathname, r) === "/"
        ? (f.pathname = `${r.replace(/\/$/, "")}/_root.${o}`)
        : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${o}`),
    f
  );
}
async function Sv(c, r) {
  if (c.id in r) return r[c.id];
  try {
    let o = await import(c.module);
    return ((r[c.id] = o), o);
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ev(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === "preload" &&
        typeof c.imageSrcSet == "string" &&
        typeof c.imageSizes == "string"
      : typeof c.rel == "string" && typeof c.href == "string";
}
async function Nv(c, r, o) {
  let f = await Promise.all(
    c.map(async (d) => {
      let v = r.routes[d.route.id];
      if (v) {
        let S = await Sv(v, o);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return Cv(
    f
      .flat(1)
      .filter(Ev)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" },
      ),
  );
}
function om(c, r, o, f, d, v) {
  let S = (p, h) => (o[h] ? p.route.id !== o[h].route.id : !0),
    C = (p, h) =>
      o[h].pathname !== p.pathname ||
      (o[h].route.path?.endsWith("*") && o[h].params["*"] !== p.params["*"]);
  return v === "assets"
    ? r.filter((p, h) => S(p, h) || C(p, h))
    : v === "data"
      ? r.filter((p, h) => {
          let A = f.routes[p.route.id];
          if (!A || !A.hasLoader) return !1;
          if (S(p, h) || C(p, h)) return !0;
          if (p.route.shouldRevalidate) {
            let E = p.route.shouldRevalidate({
              currentUrl: new URL(
                d.pathname + d.search + d.hash,
                window.origin,
              ),
              currentParams: o[0]?.params || {},
              nextUrl: new URL(c, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof E == "boolean") return E;
          }
          return !0;
        })
      : [];
}
function zv(c, r, { includeHydrateFallback: o } = {}) {
  return Tv(
    c
      .map((f) => {
        let d = r.routes[f.route.id];
        if (!d) return [];
        let v = [d.module];
        return (
          d.clientActionModule && (v = v.concat(d.clientActionModule)),
          d.clientLoaderModule && (v = v.concat(d.clientLoaderModule)),
          o &&
            d.hydrateFallbackModule &&
            (v = v.concat(d.hydrateFallbackModule)),
          d.imports && (v = v.concat(d.imports)),
          v
        );
      })
      .flat(1),
  );
}
function Tv(c) {
  return [...new Set(c)];
}
function Av(c) {
  let r = {},
    o = Object.keys(c).sort();
  for (let f of o) r[f] = c[f];
  return r;
}
function Cv(c, r) {
  let o = new Set();
  return (
    new Set(r),
    c.reduce((f, d) => {
      let v = JSON.stringify(Av(d));
      return (o.has(v) || (o.add(v), f.push({ key: v, link: d })), f);
    }, [])
  );
}
function jm() {
  let c = T.useContext(Ba);
  return (
    Vf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    c
  );
}
function _v() {
  let c = T.useContext(si);
  return (
    Vf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    c
  );
}
var Kf = T.createContext(void 0);
Kf.displayName = "FrameworkContext";
function Om() {
  let c = T.useContext(Kf);
  return (
    Vf(c, "You must render this element inside a <HydratedRouter> element"),
    c
  );
}
function jv(c, r) {
  let o = T.useContext(Kf),
    [f, d] = T.useState(!1),
    [v, S] = T.useState(!1),
    {
      onFocus: C,
      onBlur: p,
      onMouseEnter: h,
      onMouseLeave: A,
      onTouchStart: E,
    } = r,
    B = T.useRef(null);
  (T.useEffect(() => {
    if ((c === "render" && S(!0), c === "viewport")) {
      let Y = (L) => {
          L.forEach((q) => {
            S(q.isIntersecting);
          });
        },
        X = new IntersectionObserver(Y, { threshold: 0.5 });
      return (
        B.current && X.observe(B.current),
        () => {
          X.disconnect();
        }
      );
    }
  }, [c]),
    T.useEffect(() => {
      if (f) {
        let Y = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(Y);
        };
      }
    }, [f]));
  let w = () => {
      d(!0);
    },
    D = () => {
      (d(!1), S(!1));
    };
  return o
    ? c !== "intent"
      ? [v, B, {}]
      : [
          v,
          B,
          {
            onFocus: Dn(C, w),
            onBlur: Dn(p, D),
            onMouseEnter: Dn(h, w),
            onMouseLeave: Dn(A, D),
            onTouchStart: Dn(E, w),
          },
        ]
    : [!1, B, {}];
}
function Dn(c, r) {
  return (o) => {
    (c && c(o), o.defaultPrevented || r(o));
  };
}
function Ov({ page: c, ...r }) {
  let { router: o } = jm(),
    f = T.useMemo(() => pm(o.routes, c, o.basename), [o.routes, c, o.basename]);
  return f ? T.createElement(Rv, { page: c, matches: f, ...r }) : null;
}
function Mv(c) {
  let { manifest: r, routeModules: o } = Om(),
    [f, d] = T.useState([]);
  return (
    T.useEffect(() => {
      let v = !1;
      return (
        Nv(c, r, o).then((S) => {
          v || d(S);
        }),
        () => {
          v = !0;
        }
      );
    }, [c, r, o]),
    f
  );
}
function Rv({ page: c, matches: r, ...o }) {
  let f = Be(),
    { manifest: d, routeModules: v } = Om(),
    { basename: S } = jm(),
    { loaderData: C, matches: p } = _v(),
    h = T.useMemo(() => om(c, r, p, d, f, "data"), [c, r, p, d, f]),
    A = T.useMemo(() => om(c, r, p, d, f, "assets"), [c, r, p, d, f]),
    E = T.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let D = new Set(),
        Y = !1;
      if (
        (r.forEach((L) => {
          let q = d.routes[L.route.id];
          !q ||
            !q.hasLoader ||
            ((!h.some((V) => V.route.id === L.route.id) &&
              L.route.id in C &&
              v[L.route.id]?.shouldRevalidate) ||
            q.hasClientLoader
              ? (Y = !0)
              : D.add(L.route.id));
        }),
        D.size === 0)
      )
        return [];
      let X = xv(c, S, "data");
      return (
        Y &&
          D.size > 0 &&
          X.searchParams.set(
            "_routes",
            r
              .filter((L) => D.has(L.route.id))
              .map((L) => L.route.id)
              .join(","),
          ),
        [X.pathname + X.search]
      );
    }, [S, C, f, d, h, r, c, v]),
    B = T.useMemo(() => zv(A, d), [A, d]),
    w = Mv(A);
  return T.createElement(
    T.Fragment,
    null,
    E.map((D) =>
      T.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...o,
      }),
    ),
    B.map((D) =>
      T.createElement("link", { key: D, rel: "modulepreload", href: D, ...o }),
    ),
    w.map(({ key: D, link: Y }) =>
      T.createElement("link", { key: D, nonce: o.nonce, ...Y }),
    ),
  );
}
function Dv(...c) {
  return (r) => {
    c.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var Mm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Mm && (window.__reactRouterVersion = "7.9.6");
} catch {}
function Uv({ basename: c, children: r, window: o }) {
  let f = T.useRef();
  f.current == null && (f.current = xy({ window: o, v5Compat: !0 }));
  let d = f.current,
    [v, S] = T.useState({ action: d.action, location: d.location }),
    C = T.useCallback(
      (p) => {
        T.startTransition(() => S(p));
      },
      [S],
    );
  return (
    T.useLayoutEffect(() => d.listen(C), [d, C]),
    T.createElement(sv, {
      basename: c,
      children: r,
      location: v.location,
      navigationType: v.action,
      navigator: d,
    })
  );
}
var Rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Dm = T.forwardRef(function (
    {
      onClick: r,
      discover: o = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: v,
      replace: S,
      state: C,
      target: p,
      to: h,
      preventScrollReset: A,
      viewTransition: E,
      ...B
    },
    w,
  ) {
    let { basename: D } = T.useContext(He),
      Y = typeof h == "string" && Rm.test(h),
      X,
      L = !1;
    if (typeof h == "string" && Y && ((X = h), Mm))
      try {
        let rt = new URL(window.location.href),
          $ = h.startsWith("//") ? new URL(rt.protocol + h) : new URL(h),
          _t = nl($.pathname, D);
        $.origin === rt.origin && _t != null
          ? (h = _t + $.search + $.hash)
          : (L = !0);
      } catch {
        Ae(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let q = ky(h, { relative: d }),
      [V, yt, it] = jv(f, B),
      Tt = Lv(h, {
        replace: S,
        state: C,
        target: p,
        preventScrollReset: A,
        relative: d,
        viewTransition: E,
      });
    function I(rt) {
      (r && r(rt), rt.defaultPrevented || Tt(rt));
    }
    let Et = T.createElement("a", {
      ...B,
      ...it,
      href: X || q,
      onClick: L || v ? r : I,
      ref: Dv(w, yt),
      target: p,
      "data-discover": !Y && o === "render" ? "true" : void 0,
    });
    return V && !Y
      ? T.createElement(T.Fragment, null, Et, T.createElement(Ov, { page: q }))
      : Et;
  });
Dm.displayName = "Link";
var Hv = T.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: f = "",
    end: d = !1,
    style: v,
    to: S,
    viewTransition: C,
    children: p,
    ...h
  },
  A,
) {
  let E = Ln(S, { relative: h.relative }),
    B = Be(),
    w = T.useContext(si),
    { navigator: D, basename: Y } = T.useContext(He),
    X = w != null && Zv(E) && C === !0,
    L = D.encodeLocation ? D.encodeLocation(E).pathname : E.pathname,
    q = B.pathname,
    V =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (o ||
    ((q = q.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (L = L.toLowerCase())),
    V && Y && (V = nl(V, Y) || V));
  const yt = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
  let it = q === L || (!d && q.startsWith(L) && q.charAt(yt) === "/"),
    Tt =
      V != null &&
      (V === L || (!d && V.startsWith(L) && V.charAt(L.length) === "/")),
    I = { isActive: it, isPending: Tt, isTransitioning: X },
    Et = it ? r : void 0,
    rt;
  typeof f == "function"
    ? (rt = f(I))
    : (rt = [
        f,
        it ? "active" : null,
        Tt ? "pending" : null,
        X ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let $ = typeof v == "function" ? v(I) : v;
  return T.createElement(
    Dm,
    {
      ...h,
      "aria-current": Et,
      className: rt,
      ref: A,
      style: $,
      to: S,
      viewTransition: C,
    },
    typeof p == "function" ? p(I) : p,
  );
});
Hv.displayName = "NavLink";
var Bv = T.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: r,
      navigate: o,
      reloadDocument: f,
      replace: d,
      state: v,
      method: S = ui,
      action: C,
      onSubmit: p,
      relative: h,
      preventScrollReset: A,
      viewTransition: E,
      ...B
    },
    w,
  ) => {
    let D = Qv(),
      Y = Xv(C, { relative: h }),
      X = S.toLowerCase() === "get" ? "get" : "post",
      L = typeof C == "string" && Rm.test(C),
      q = (V) => {
        if ((p && p(V), V.defaultPrevented)) return;
        V.preventDefault();
        let yt = V.nativeEvent.submitter,
          it = yt?.getAttribute("formmethod") || S;
        D(yt || V.currentTarget, {
          fetcherKey: r,
          method: it,
          navigate: o,
          replace: d,
          state: v,
          relative: h,
          preventScrollReset: A,
          viewTransition: E,
        });
      };
    return T.createElement("form", {
      ref: w,
      method: X,
      action: Y,
      onSubmit: f ? p : q,
      ...B,
      "data-discover": !L && c === "render" ? "true" : void 0,
    });
  },
);
Bv.displayName = "Form";
function wv(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Um(c) {
  let r = T.useContext(Ba);
  return (Ot(r, wv(c)), r);
}
function Lv(
  c,
  {
    target: r,
    replace: o,
    state: f,
    preventScrollReset: d,
    relative: v,
    viewTransition: S,
  } = {},
) {
  let C = wn(),
    p = Be(),
    h = Ln(c, { relative: v });
  return T.useCallback(
    (A) => {
      if (yv(A, r)) {
        A.preventDefault();
        let E = o !== void 0 ? o : Un(p) === Un(h);
        C(c, {
          replace: E,
          state: f,
          preventScrollReset: d,
          relative: v,
          viewTransition: S,
        });
      }
    },
    [p, C, h, o, f, r, c, d, v, S],
  );
}
function qv(c) {
  Ae(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let r = T.useRef(Yf(c)),
    o = T.useRef(!1),
    f = Be(),
    d = T.useMemo(() => vv(f.search, o.current ? null : r.current), [f.search]),
    v = wn(),
    S = T.useCallback(
      (C, p) => {
        const h = Yf(typeof C == "function" ? C(new URLSearchParams(d)) : C);
        ((o.current = !0), v("?" + h, p));
      },
      [v, d],
    );
  return [d, S];
}
var Yv = 0,
  Gv = () => `__${String(++Yv)}__`;
function Qv() {
  let { router: c } = Um("useSubmit"),
    { basename: r } = T.useContext(He),
    o = uv();
  return T.useCallback(
    async (f, d = {}) => {
      let { action: v, method: S, encType: C, formData: p, body: h } = bv(f, r);
      if (d.navigate === !1) {
        let A = d.fetcherKey || Gv();
        await c.fetch(A, o, d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: p,
          body: h,
          formMethod: d.method || S,
          formEncType: d.encType || C,
          flushSync: d.flushSync,
        });
      } else
        await c.navigate(d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: p,
          body: h,
          formMethod: d.method || S,
          formEncType: d.encType || C,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [c, r, o],
  );
}
function Xv(c, { relative: r } = {}) {
  let { basename: o } = T.useContext(He),
    f = T.useContext(ul);
  Ot(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    v = { ...Ln(c || ".", { relative: r }) },
    S = Be();
  if (c == null) {
    v.search = S.search;
    let C = new URLSearchParams(v.search),
      p = C.getAll("index");
    if (p.some((A) => A === "")) {
      (C.delete("index"),
        p.filter((E) => E).forEach((E) => C.append("index", E)));
      let A = C.toString();
      v.search = A ? `?${A}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      d.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (v.pathname = v.pathname === "/" ? o : al([o, v.pathname])),
    Un(v)
  );
}
function Zv(c, { relative: r } = {}) {
  let o = T.useContext(zm);
  Ot(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = Um("useViewTransitionState"),
    d = Ln(c, { relative: r });
  if (!o.isTransitioning) return !1;
  let v = nl(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    S = nl(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return ci(d.pathname, S) != null || ci(d.pathname, v) != null;
}
const Vv = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Kv = (c) =>
    c.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, o, f) =>
      f ? f.toUpperCase() : o.toLowerCase(),
    ),
  dm = (c) => {
    const r = Kv(c);
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  Hm = (...c) =>
    c
      .filter((r, o, f) => !!r && r.trim() !== "" && f.indexOf(r) === o)
      .join(" ")
      .trim(),
  Jv = (c) => {
    for (const r in c)
      if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  };
var kv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const $v = T.forwardRef(
  (
    {
      color: c = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: f,
      className: d = "",
      children: v,
      iconNode: S,
      ...C
    },
    p,
  ) =>
    T.createElement(
      "svg",
      {
        ref: p,
        ...kv,
        width: r,
        height: r,
        stroke: c,
        strokeWidth: f ? (Number(o) * 24) / Number(r) : o,
        className: Hm("lucide", d),
        ...(!v && !Jv(C) && { "aria-hidden": "true" }),
        ...C,
      },
      [
        ...S.map(([h, A]) => T.createElement(h, A)),
        ...(Array.isArray(v) ? v : [v]),
      ],
    ),
);
const It = (c, r) => {
  const o = T.forwardRef(({ className: f, ...d }, v) =>
    T.createElement($v, {
      ref: v,
      iconNode: r,
      className: Hm(`lucide-${Vv(dm(c))}`, `lucide-${c}`, f),
      ...d,
    }),
  );
  return ((o.displayName = dm(c)), o);
};
const Wv = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  Fv = It("building-2", Wv);
const Iv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Pv = It("chevron-down", Iv);
const tg = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  eg = It("chevron-up", tg);
const lg = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  ag = It("circle-alert", lg);
const ng = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  ug = It("circle-check-big", ng);
const ig = [
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6",
      },
    ],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196",
      },
    ],
    ["path", { d: "M12 11h4", key: "1jrz19" }],
    ["path", { d: "M12 16h4", key: "n85exb" }],
    ["path", { d: "M8 11h.01", key: "1dfujw" }],
    ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ],
  mm = It("clipboard-list", ig);
const cg = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  fg = It("globe", cg);
const sg = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  Bm = It("package", sg);
const rg = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  og = It("phone", rg);
const dg = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  hm = It("search", dg);
const mg = [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm",
      },
    ],
  ],
  hg = It("shopping-bag", mg);
const yg = [
    ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
    ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
    [
      "path",
      {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506",
      },
    ],
  ],
  fi = It("shopping-cart", yg);
const vg = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  gg = It("trash-2", vg);
const pg = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  bg = It("user", pg);
const xg = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Sg = It("x", xg),
  wm = T.createContext(),
  Jf = () => T.useContext(wm),
  Eg = ({ children: c }) => {
    const [r, o] = T.useState({});
    (T.useEffect(() => {
      const E = localStorage.getItem("cart");
      if (E)
        try {
          o(JSON.parse(E));
        } catch {}
    }, []),
      T.useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(r));
      }, [r]));
    const f = (E, B) => {
        o((w) => ({ ...w, [E.code]: { product: E, quantity: B } }));
      },
      d = (E, B) => {
        o((w) => {
          if (!w[E]) return w;
          if (B <= 0) {
            const D = { ...w };
            return (delete D[E], D);
          }
          return { ...w, [E]: { ...w[E], quantity: B } };
        });
      },
      v = (E) => {
        o((B) => {
          const w = { ...B };
          return (delete w[E], w);
        });
      },
      S = () => {
        o({});
      },
      C = Object.values(r),
      p = C.reduce((E, B) => E + B.quantity, 0),
      h = C.reduce((E, B) => E + B.quantity * (B.product.perpack || 1), 0),
      A = C.reduce(
        (E, B) => E + B.product.price * (B.product.perpack || 1) * B.quantity,
        0,
      );
    return m.jsx(wm.Provider, {
      value: {
        cart: r,
        items: C,
        totalItems: p,
        totalAmount: h,
        totalPrice: A,
        addItem: f,
        updateItem: d,
        removeItem: v,
        clearCart: S,
      },
      children: c,
    });
  },
  Lm = T.createContext(),
  Ng = {
    ru: { label: "Русский", flag: "🇷🇺", short: "RU" },
    uz: { label: "O'zbek", flag: "🇺🇿", short: "UZ" },
    en: { label: "English", flag: "🇬🇧", short: "EN" },
  },
  ym = {
    ru: {
      profile: "Профиль",
      phone: "Телефон",
      organization: "Организация",
      notSpecified: "Не указан",
      notSpecifiedF: "Не указана",
      debt: "Долг",
      noDebt: "Задолженности нет",
      overpaid: "Переплата",
      inYourFavor: "↑ В вашу пользу",
      toPay: "↓ К оплате",
      language: "Язык",
      sum: "сум",
      menuProducts: "Товары",
      menuCart: "Корзина",
      menuOrders: "Заказы",
      menuProfile: "Профиль",
      catalog: "Каталог",
      searchPlaceholder: "Поиск по товарам...",
      loadingCatalog: "Загружаем каталог...",
      productsCount: "товаров",
      foundCount: "Найдено:",
      nothingFound: "Ничего не найдено",
      nothingFoundDesc: "по запросу",
      toCartBtn: "В корзину",
      item1: "товар",
      item2: "товара",
      item5: "товаров",
      cartTitle: "Корзина",
      positions: "позиц.",
      units: "единиц",
      totalLabel: "Всего",
      toPayLabel: "К оплате",
      checkoutBtn: "Оформить заказ",
      emptyCart: "Корзина пуста",
      emptyCartDesc: "Добавьте товары из каталога",
      goToProducts: "Перейти к товарам",
      successTitle: "Готово!",
      successDesc: "Заказ успешно отправлен.",
      successSub: "Менеджер свяжется с вами в ближайшее время.",
      removeItem: "Удалить",
      kg: "кг",
      pack: "уп",
      perKg: "сум/кг",
      perPc: "сум/шт",
      orderHistory: "История заказов",
      ordersCount: "заказов",
      loadingOrders: "Загрузка...",
      emptyOrders: "История заказов пуста",
      orderNum: "Заказ #",
      itemsCount: "позиц.",
      totalSum: "Итого",
      unnamed: "Без названия",
    },
    uz: {
      profile: "Profil",
      phone: "Telefon",
      organization: "Tashkilot",
      notSpecified: "Kiritilmagan",
      notSpecifiedF: "Kiritilmagan",
      debt: "Qarz",
      noDebt: "Qarzdorlik yo'q",
      overpaid: "Ortiqcha to'lov",
      inYourFavor: "↑ Sizning foydangizga",
      toPay: "↓ To'lash kerak",
      language: "Til",
      sum: "so'm",
      menuProducts: "Mahsulot",
      menuCart: "Savat",
      menuOrders: "Buyurtma",
      menuProfile: "Profil",
      catalog: "Katalog",
      searchPlaceholder: "Mahsulot qidirish...",
      loadingCatalog: "Katalog yuklanmoqda...",
      productsCount: "mahsulot",
      foundCount: "Topildi:",
      nothingFound: "Hech narsa topilmadi",
      nothingFoundDesc: "so'rov bo'yicha",
      toCartBtn: "Savatga",
      item1: "mahsulot",
      item2: "mahsulot",
      item5: "mahsulot",
      cartTitle: "Savat",
      positions: "ta mahsulot",
      units: "dona",
      totalLabel: "Jami",
      toPayLabel: "To'lash kerak",
      checkoutBtn: "Buyurtma berish",
      emptyCart: "Savat bo'sh",
      emptyCartDesc: "Katalogdan mahsulot qo'shing",
      goToProducts: "Mahsulotlarga o'tish",
      successTitle: "Tayyor!",
      successDesc: "Buyurtma muvaffaqiyatli yuborildi.",
      successSub: "Menejer siz bilan tez orada bog'lanadi.",
      removeItem: "O'chirish",
      kg: "kg",
      pack: "qad",
      perKg: "so'm/kg",
      perPc: "so'm/dona",
      orderHistory: "Buyurtmalar tarixi",
      ordersCount: "ta buyurtma",
      loadingOrders: "Yuklanmoqda...",
      emptyOrders: "Buyurtmalar tarixi bo'sh",
      orderNum: "Buyurtma #",
      itemsCount: "ta",
      totalSum: "Jami",
      unnamed: "Nomsiz",
    },
    en: {
      profile: "Profile",
      phone: "Phone",
      organization: "Organization",
      notSpecified: "Not specified",
      notSpecifiedF: "Not specified",
      debt: "Debt",
      noDebt: "No debt",
      overpaid: "Overpaid",
      inYourFavor: "↑ In your favor",
      toPay: "↓ To pay",
      language: "Language",
      sum: "sum",
      menuProducts: "Products",
      menuCart: "Cart",
      menuOrders: "Orders",
      menuProfile: "Profile",
      catalog: "Catalog",
      searchPlaceholder: "Search products...",
      loadingCatalog: "Loading catalog...",
      productsCount: "products",
      foundCount: "Found:",
      nothingFound: "Nothing found",
      nothingFoundDesc: "for query",
      toCartBtn: "To cart",
      item1: "item",
      item2: "items",
      item5: "items",
      cartTitle: "Cart",
      positions: "items",
      units: "units",
      totalLabel: "Total",
      toPayLabel: "To pay",
      checkoutBtn: "Place Order",
      emptyCart: "Cart is empty",
      emptyCartDesc: "Add products from catalog",
      goToProducts: "Go to products",
      successTitle: "Done!",
      successDesc: "Order sent successfully.",
      successSub: "Manager will contact you shortly.",
      removeItem: "Remove",
      kg: "kg",
      pack: "pcs",
      perKg: "sum/kg",
      perPc: "sum/pc",
      orderHistory: "Order History",
      ordersCount: "orders",
      loadingOrders: "Loading...",
      emptyOrders: "Order history is empty",
      orderNum: "Order #",
      itemsCount: "items",
      totalSum: "Total",
      unnamed: "Unnamed",
    },
  };
function zg({ children: c }) {
  const [r, o] = T.useState(() => localStorage.getItem("app_lang") || "ru"),
    f = (v) => {
      (localStorage.setItem("app_lang", v), o(v));
    },
    d = ym[r] || ym.ru;
  return m.jsx(Lm.Provider, {
    value: { lang: r, changeLang: f, t: d, LANGUAGES: Ng },
    children: c,
  });
}
const qn = () => T.useContext(Lm),
  Tg = () => {
    const c = wn(),
      r = Be(),
      { totalItems: o } = Jf(),
      { t: f } = qn(),
      d = [
        { key: "menuProducts", Icon: hg, path: "/" },
        { key: "menuCart", Icon: fi, path: "/cart", badge: o },
        { key: "menuOrders", Icon: Bm, path: "/orders" },
        { key: "menuProfile", Icon: bg, path: "/profile" },
      ];
    return m.jsx("div", {
      className: "fixed inset-x-0 bottom-0 z-50",
      children: m.jsxs("div", {
        className:
          "bg-gradient-to-b from-[#0077c2] to-[#005fa3] shadow-[0_-4px_24px_rgba(0,100,180,0.25)]",
        children: [
          m.jsx("div", {
            className: "flex justify-around px-3 pt-2 pb-1 max-w-lg mx-auto",
            children: d.map(({ key: v, Icon: S, path: C, badge: p }) => {
              const h = r.pathname === C;
              return m.jsxs(
                "button",
                {
                  onClick: () => c(C),
                  className:
                    "relative flex-1 flex flex-col items-center gap-1 py-1.5 rounded-xl transition-all active:scale-95",
                  children: [
                    m.jsxs("div", {
                      className: `relative flex items-center justify-center transition-all duration-200 ${h ? "bg-white rounded-2xl w-12 h-10 shadow-lg" : "w-10 h-10"}`,
                      children: [
                        m.jsx(S, {
                          size: 20,
                          strokeWidth: 2,
                          className: h ? "text-[#007ACC]" : "text-white/70",
                        }),
                        p > 0 &&
                          m.jsx("span", {
                            className:
                              "absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 leading-none",
                            children: p > 99 ? "99+" : p,
                          }),
                      ],
                    }),
                    m.jsx("span", {
                      className: `text-[10px] font-medium leading-none ${h ? "text-white" : "text-white/60"}`,
                      children: f[v],
                    }),
                  ],
                },
                v,
              );
            }),
          }),
          m.jsx("div", { className: "h-6 bg-[#005fa3]" }),
        ],
      }),
    });
  },
  Ag = ({ product: c, quantity: r = 0, onQuantityChange: o }) => {
    const [f, d] = T.useState(r),
      v = T.useRef(null);
    T.useEffect(() => {
      d(r);
    }, [r]);
    const S = c.isweight === !0 || c.isweight === "true" || c.isweight === 1,
      C = Number(c.perpack || 1) || 1,
      p = 9e3,
      h = T.useMemo(() => (S ? p : Math.floor(p / C)), [S, C]),
      A = Number(c.price) || 0,
      E = S ? A : A * C,
      B = S ? Number(f || 0) * A : Number(f || 0) * E,
      w = T.useCallback(
        (Et) => {
          const rt = parseFloat(Et);
          let $ = isNaN(rt) || rt < 0 ? 0 : rt;
          return (
            $ > h && ($ = h),
            S && $ > 0 && ($ = Number($.toFixed(2))),
            S || ($ = Math.floor($)),
            $
          );
        },
        [S, h],
      ),
      D = T.useCallback(
        (Et) => {
          const rt = w(Et);
          (d(rt), o?.(c, rt));
        },
        [w, o, c],
      ),
      Y = () => D(Number(f || 0) + 1),
      X = () => D(Number(f || 0) <= 1 ? 0 : Number(f || 0) - 1),
      L = () => D(0),
      q = (Et) => {
        let rt = Et.target.value.replace(",", ".").replace(/[^0-9.]/g, "");
        if (rt === "") {
          d("");
          return;
        }
        D(rt);
      },
      V = () => {
        f === "" || Number(f) === 0 ? D(0) : D(f);
      },
      yt = f > 0 || f === "",
      it = Number(f || 0),
      Tt = it >= h,
      I = it > 0;
    return m.jsxs("div", {
      className: `bg-white rounded-2xl transition-all duration-200 flex flex-col h-full w-full min-w-0 overflow-hidden ${I ? "shadow-lg ring-2 ring-[#007ACC]/30" : "shadow-sm"}`,
      children: [
        m.jsxs("div", {
          className: "relative aspect-square bg-gray-50",
          children: [
            m.jsx("img", {
              src: c.img_url || "https://via.placeholder.com/300?text=No+Image",
              alt: c.name,
              className: "w-full h-full object-cover",
              loading: "lazy",
            }),
            !S &&
              C > 1 &&
              m.jsxs("div", {
                className:
                  "absolute top-2 left-2 bg-[#007ACC] text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow",
                children: [C, " шт/уп"],
              }),
            S &&
              m.jsx("div", {
                className:
                  "absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow",
                children: "кг",
              }),
            !yt &&
              m.jsx("button", {
                onClick: Y,
                disabled: Tt,
                className:
                  "absolute bottom-2 right-2 w-9 h-9 bg-[#007ACC] text-white rounded-xl shadow-lg text-xl font-bold active:scale-90 transition flex items-center justify-center",
                children: "+",
              }),
            I &&
              m.jsx("div", {
                className:
                  "absolute top-2 right-2 w-6 h-6 bg-[#007ACC] rounded-full flex items-center justify-center shadow",
                children: m.jsx("svg", {
                  className: "w-3.5 h-3.5 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: m.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 3,
                    d: "M5 13l4 4L19 7",
                  }),
                }),
              }),
          ],
        }),
        m.jsxs("div", {
          className: "p-2.5 flex flex-col justify-between flex-1",
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("h3", {
                  className:
                    "font-semibold text-gray-900 text-xs line-clamp-2 leading-tight",
                  children: c.name,
                }),
                m.jsxs("p", {
                  className: "text-sm font-bold text-[#007ACC] mt-1",
                  children: [
                    E.toLocaleString(),
                    " ",
                    m.jsx("span", {
                      className: "text-[10px] font-medium",
                      children: "сум",
                    }),
                  ],
                }),
                m.jsx("p", {
                  className: "text-[10px] text-gray-400",
                  children: S
                    ? `${A.toLocaleString()} сум/кг`
                    : `${A.toLocaleString()} сум/шт`,
                }),
              ],
            }),
            yt &&
              m.jsxs("div", {
                className: "mt-2",
                children: [
                  m.jsxs("div", {
                    className:
                      "relative flex items-center justify-between bg-gray-100 rounded-xl px-1.5 py-1.5",
                    children: [
                      m.jsx("button", {
                        onClick: X,
                        className:
                          "w-8 h-8 bg-white rounded-lg shadow-sm text-base active:scale-95 flex items-center justify-center",
                        children: "−",
                      }),
                      m.jsx("input", {
                        ref: v,
                        type: "text",
                        value: f,
                        onChange: q,
                        onBlur: V,
                        className:
                          "flex-1 text-center font-bold text-sm text-gray-800 bg-transparent outline-none",
                        inputMode: S ? "decimal" : "numeric",
                        placeholder: "0",
                      }),
                      m.jsx("button", {
                        onClick: Y,
                        disabled: Tt,
                        className: `w-8 h-8 bg-[#007ACC] text-white rounded-lg shadow-sm text-base font-bold active:scale-95 flex items-center justify-center ${Tt ? "opacity-40 pointer-events-none" : ""}`,
                        children: "+",
                      }),
                      m.jsx("button", {
                        onClick: L,
                        className:
                          "absolute -top-2 -right-2 w-5 h-5 bg-red-400 text-white rounded-full text-[10px] font-bold shadow active:scale-90 flex items-center justify-center",
                        children: "×",
                      }),
                    ],
                  }),
                  m.jsx("p", {
                    className:
                      "text-center text-[10px] text-gray-500 mt-1.5 leading-tight",
                    children: S
                      ? m.jsxs(m.Fragment, {
                          children: [
                            m.jsxs("span", {
                              className: "font-semibold text-gray-700",
                              children: [f || "0", " кг"],
                            }),
                            " · ",
                            m.jsxs("span", {
                              className: "font-bold text-[#007ACC]",
                              children: [
                                Math.round(B).toLocaleString(),
                                " сум",
                              ],
                            }),
                          ],
                        })
                      : m.jsx(m.Fragment, {
                          children: m.jsxs("span", {
                            className: "font-bold text-[#007ACC]",
                            children: [Math.round(B).toLocaleString(), " сум"],
                          }),
                        }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Cg = [
    {
      code: "001",
      name: "Молоко Parmalat 1л",
      price: 12e3,
      perpack: 12,
      isweight: !1,
      img_url: "https://placehold.co/300x300/e8f4fd/007ACC?text=Молоко",
    },
    {
      code: "002",
      name: "Хлеб белый нарезной",
      price: 4500,
      perpack: 1,
      isweight: !1,
      img_url: "https://placehold.co/300x300/fff8e8/cc7a00?text=Хлеб",
    },
    {
      code: "003",
      name: "Сахар рафинад",
      price: 8500,
      perpack: 10,
      isweight: !1,
      img_url: "https://placehold.co/300x300/f5f5f5/555?text=Сахар",
    },
    {
      code: "004",
      name: "Куриное филе",
      price: 32e3,
      perpack: 1,
      isweight: !0,
      img_url: "https://placehold.co/300x300/fdf0e8/cc4400?text=Филе",
    },
    {
      code: "005",
      name: "Масло подсолнечное 1л",
      price: 18e3,
      perpack: 6,
      isweight: !1,
      img_url: "https://placehold.co/300x300/fffbe8/aa8800?text=Масло",
    },
    {
      code: "006",
      name: "Рис длиннозерный",
      price: 14e3,
      perpack: 1,
      isweight: !0,
      img_url: "https://placehold.co/300x300/f5f5e8/888?text=Рис",
    },
    {
      code: "007",
      name: "Макароны Barilla 500г",
      price: 9500,
      perpack: 24,
      isweight: !1,
      img_url: "https://placehold.co/300x300/fde8e8/cc0000?text=Макароны",
    },
    {
      code: "008",
      name: "Яйца С1 (лоток 10шт)",
      price: 22e3,
      perpack: 1,
      isweight: !1,
      img_url: "https://placehold.co/300x300/fffbe8/996600?text=Яйца",
    },
    {
      code: "009",
      name: "Сыр Российский",
      price: 45e3,
      perpack: 1,
      isweight: !0,
      img_url: "https://placehold.co/300x300/fff8e0/cc9900?text=Сыр",
    },
    {
      code: "010",
      name: "Вода Nestle 1.5л",
      price: 5e3,
      perpack: 6,
      isweight: !1,
      img_url: "https://placehold.co/300x300/e8f4fd/0055aa?text=Вода",
    },
  ],
  _g = async () => Cg,
  jg = [
    {
      img_url:
        "https://placehold.co/800x300/007ACC/white?text=Акция+недели+-50%",
    },
    {
      img_url:
        "https://placehold.co/800x300/00aa55/white?text=Новые+поступления",
    },
    {
      img_url:
        "https://placehold.co/800x300/cc4400/white?text=Бесплатная+доставка",
    },
  ],
  Og = async () => jg,
  vm = ({ user: c }) => {
    const [r, o] = T.useState([]),
      [f, d] = T.useState([]),
      [v, S] = T.useState(!0),
      [C, p] = T.useState(!0),
      [h, A] = T.useState(""),
      [E, B] = T.useState(0),
      [w, D] = T.useState([]),
      [Y, X] = T.useState({}),
      { totalItems: L, addItem: q, updateItem: V, removeItem: yt } = Jf(),
      { t: it } = qn(),
      Tt = wn();
    (T.useEffect(() => {
      (_g().then(($) => {
        (d($), o($), S(!1));
      }),
        Og().then(($) => {
          (D($), p(!1));
        }));
    }, []),
      T.useEffect(() => {
        if (!w.length) return;
        const $ = setInterval(() => {
          B((_t) => (_t + 1) % w.length);
        }, 4e3);
        return () => clearInterval($);
      }, [w]),
      T.useEffect(() => {
        if (!h.trim()) {
          o(f);
          return;
        }
        const $ = h.toLowerCase();
        o(f.filter((_t) => _t.name.toLowerCase().includes($)));
      }, [h, f]));
    const I = ($, _t) => {
        if (!$?.code) return;
        const Yt = Math.max(0, _t);
        (X((we) => ({ ...we, [$.code]: Yt })),
          Yt === 0 ? yt($.code) : Y[$.code] > 0 ? V($.code, Yt) : q($, Yt));
      },
      Et = Object.values(Y).some(($) => $ > 0),
      rt = ($) => ($ === 1 ? it.item1 : $ < 5 ? it.item2 : it.item5);
    return v || C
      ? m.jsxs("div", {
          className:
            "flex flex-col items-center justify-center h-full min-h-[60vh] gap-3",
          children: [
            m.jsx("div", {
              className:
                "w-10 h-10 border-4 border-[#007ACC] border-t-transparent rounded-full animate-spin",
            }),
            m.jsx("p", {
              className: "text-gray-400 text-sm",
              children: it.loadingCatalog,
            }),
          ],
        })
      : m.jsxs(m.Fragment, {
          children: [
            m.jsxs("div", {
              className: "bg-gray-50 pb-44",
              children: [
                w.length > 0 &&
                  m.jsxs("div", {
                    className:
                      "relative h-44 overflow-hidden bg-gray-200 mx-4 mt-4 rounded-2xl shadow-sm",
                    children: [
                      m.jsx("div", {
                        className:
                          "flex transition-transform duration-700 ease-in-out h-full",
                        style: { transform: `translateX(-${E * 100}%)` },
                        children: w.map(($, _t) =>
                          m.jsx(
                            "img",
                            {
                              src:
                                $.img_url ||
                                "https://via.placeholder.com/800x300",
                              alt: "banner",
                              className:
                                "w-full h-full object-cover flex-shrink-0",
                            },
                            _t,
                          ),
                        ),
                      }),
                      w.length > 1 &&
                        m.jsx("div", {
                          className:
                            "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5",
                          children: w.map(($, _t) =>
                            m.jsx(
                              "div",
                              {
                                className: `rounded-full transition-all duration-300 ${_t === E ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`,
                              },
                              _t,
                            ),
                          ),
                        }),
                    ],
                  }),
                m.jsx("div", {
                  className: "px-4 pt-4",
                  children: m.jsxs("div", {
                    className: "relative",
                    children: [
                      m.jsx(hm, {
                        className:
                          "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none",
                      }),
                      m.jsx("input", {
                        type: "text",
                        placeholder: it.searchPlaceholder,
                        value: h,
                        onChange: ($) => A($.target.value),
                        className:
                          "w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#007ACC]/20 transition",
                      }),
                      h.length > 0 &&
                        m.jsx("button", {
                          onClick: () => A(""),
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2",
                          children: m.jsx(Sg, {
                            className: "w-4 h-4 text-gray-400",
                          }),
                        }),
                    ],
                  }),
                }),
                m.jsxs("div", {
                  className: "px-4 pt-4 pb-3 flex items-center justify-between",
                  children: [
                    m.jsx("h1", {
                      className: "text-base font-bold text-gray-900",
                      children: h ? `${it.foundCount} ${r.length}` : it.catalog,
                    }),
                    m.jsxs("span", {
                      className:
                        "text-xs text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100",
                      children: [f.length, " ", it.productsCount],
                    }),
                  ],
                }),
                r.length === 0
                  ? m.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center pt-16 gap-3 text-center px-6",
                      children: [
                        m.jsx(hm, { className: "w-12 h-12 text-gray-200" }),
                        m.jsxs("p", {
                          className: "text-gray-400 text-sm",
                          children: [
                            it.nothingFound,
                            m.jsx("br", {}),
                            m.jsxs("span", {
                              className: "font-semibold",
                              children: ['"', h, '"'],
                            }),
                          ],
                        }),
                      ],
                    })
                  : m.jsx("div", {
                      className: "grid grid-cols-2 gap-3 px-3",
                      children: r.map(($) =>
                        m.jsx(
                          Ag,
                          {
                            product: $,
                            quantity: Y[$.code] || 0,
                            onQuantityChange: I,
                          },
                          $.code,
                        ),
                      ),
                    }),
              ],
            }),
            Et &&
              m.jsx("div", {
                className:
                  "fixed bottom-[120px] left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-40 pointer-events-none",
                children: m.jsx("div", {
                  className: "pointer-events-auto",
                  children: m.jsxs("button", {
                    onClick: () => {
                      (X({}), Tt("/cart"));
                    },
                    className:
                      "w-full bg-[#007ACC] text-white py-4 rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2",
                    children: [
                      m.jsx(fi, { className: "w-5 h-5" }),
                      it.toCartBtn,
                      " · ",
                      L,
                      " ",
                      rt(L),
                    ],
                  }),
                }),
              }),
          ],
        });
  },
  Mg = ({ user: c }) => {
    const r = wn(),
      {
        items: o,
        updateItem: f,
        removeItem: d,
        totalItems: v,
        totalPrice: S,
        clearCart: C,
      } = Jf(),
      { t: p } = qn(),
      [h, A] = T.useState(!1),
      E = localStorage.getItem("tg_params");
    ((E ? JSON.parse(E) : {}).org,
      c?.telegram_id,
      T.useEffect(() => {
        if (h) {
          const D = setTimeout(() => A(!1), 3e3);
          return () => clearTimeout(D);
        }
      }, [h]));
    const w = async () => {
      o.length !== 0 && (C(), A(!0));
    };
    return o.length === 0 && !h
      ? m.jsxs("div", {
          className:
            "flex flex-col items-center justify-center h-full min-h-[70vh] gap-4 px-6",
          children: [
            m.jsx("div", {
              className:
                "w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center",
              children: m.jsx(fi, { className: "w-10 h-10 text-gray-300" }),
            }),
            m.jsx("p", {
              className: "text-lg font-bold text-gray-800",
              children: p.emptyCart,
            }),
            m.jsx("p", {
              className: "text-gray-400 text-sm text-center",
              children: p.emptyCartDesc,
            }),
            m.jsx("button", {
              onClick: () => r("/"),
              className:
                "mt-2 px-6 py-3 bg-[#007ACC] text-white rounded-2xl font-semibold text-sm active:scale-95 transition",
              children: p.goToProducts,
            }),
          ],
        })
      : m.jsxs(m.Fragment, {
          children: [
            m.jsxs("div", {
              className: "bg-gray-50 pb-52",
              children: [
                m.jsx("div", {
                  className:
                    "bg-gradient-to-b from-[#0077c2] to-[#005fa3] px-6 pt-12 pb-16",
                  children: m.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3",
                        children: m.jsx(fi, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      m.jsx("h1", {
                        className: "text-xl font-bold text-white",
                        children: p.cartTitle,
                      }),
                      m.jsxs("p", {
                        className: "text-blue-100 text-xs mt-1",
                        children: [
                          o.length,
                          " ",
                          p.positions,
                          " · ",
                          v,
                          " ",
                          p.units,
                        ],
                      }),
                    ],
                  }),
                }),
                m.jsx("div", {
                  className: "px-4 -mt-8 space-y-3",
                  children: o.map(({ product: D, quantity: Y }) => {
                    const X =
                        D.isweight === !0 ||
                        D.isweight === "true" ||
                        D.isweight === "1",
                      L = Number(D.perpack) || 1,
                      q = Number(D.price || 0),
                      V = X ? q : q * L;
                    return m.jsx(
                      Rg,
                      {
                        product: D,
                        quantity: Y,
                        isWeight: X,
                        perpack: L,
                        pricePerPiece: q,
                        displayPrice: V,
                        updateItem: f,
                        removeItem: d,
                        t: p,
                      },
                      D.code,
                    );
                  }),
                }),
              ],
            }),
            m.jsx("div", {
              className:
                "fixed bottom-[120px] left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-40 pointer-events-none",
              children: m.jsxs("div", {
                className:
                  "pointer-events-auto bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100",
                children: [
                  m.jsxs("div", {
                    className: "flex justify-between items-center mb-3",
                    children: [
                      m.jsxs("div", {
                        children: [
                          m.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: p.totalLabel,
                          }),
                          m.jsxs("p", {
                            className: "text-lg font-bold text-gray-900",
                            children: [v, " ", p.units],
                          }),
                        ],
                      }),
                      m.jsx("div", { className: "h-8 w-px bg-gray-100" }),
                      m.jsxs("div", {
                        className: "text-right",
                        children: [
                          m.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: p.toPayLabel,
                          }),
                          m.jsxs("p", {
                            className: "text-xl font-bold text-[#007ACC]",
                            children: [
                              Math.round(S).toLocaleString(),
                              " ",
                              p.sum,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx("button", {
                    onClick: w,
                    className:
                      "w-full bg-gradient-to-r from-[#0077c2] to-[#005fa3] text-white font-bold text-sm py-4 rounded-xl shadow active:scale-95 transition-all",
                    children: p.checkoutBtn,
                  }),
                ],
              }),
            }),
            h &&
              m.jsx("div", {
                className:
                  "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-6",
                children: m.jsxs("div", {
                  className:
                    "bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center",
                  children: [
                    m.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: m.jsx(ug, {
                        className: "w-16 h-16 text-emerald-500",
                        strokeWidth: 1.5,
                      }),
                    }),
                    m.jsx("h2", {
                      className: "text-xl font-bold text-gray-900 mb-2",
                      children: p.successTitle,
                    }),
                    m.jsx("p", {
                      className: "text-gray-500 text-sm",
                      children: p.successDesc,
                    }),
                    m.jsx("p", {
                      className: "text-gray-400 text-xs mt-1",
                      children: p.successSub,
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  Rg = dy.memo(
    ({
      product: c,
      quantity: r,
      isWeight: o,
      perpack: f,
      pricePerPiece: d,
      displayPrice: v,
      updateItem: S,
      removeItem: C,
      t: p,
    }) => {
      const [h, A] = T.useState(r === 0 ? "" : String(r));
      T.useEffect(() => {
        A(r === 0 ? "" : String(r));
      }, [r]);
      const E = h === "" ? 0 : Number(h),
        B = o ? E : E * f,
        w = B * d,
        D = (L) => {
          let q = L.replace(",", ".").replace(/[^0-9.]/g, "");
          const V = q.split(".");
          (V.length > 2 && (q = V[0] + "." + V.slice(1).join("")), A(q));
        },
        Y = (L) => {
          let q = o ? Math.round(L * 100) / 100 : Math.floor(L);
          (q < 0 && (q = 0), A(q === 0 ? "" : String(q)), S(c.code, q));
        },
        X = () => {
          if (E === 0) C(c.code);
          else if (o) {
            const L = Number(E.toFixed(2));
            (A(String(L)), S(c.code, L));
          }
        };
      return m.jsx("div", {
        className: "bg-white rounded-2xl shadow-sm overflow-hidden",
        children: m.jsxs("div", {
          className: "p-3 flex gap-3",
          children: [
            m.jsx("img", {
              src: c.img_url || "https://via.placeholder.com/120",
              alt: c.name,
              className:
                "w-18 h-18 min-w-[72px] min-h-[72px] rounded-xl object-cover",
            }),
            m.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                m.jsxs("div", {
                  className: "flex justify-between items-start gap-2",
                  children: [
                    m.jsx("h3", {
                      className:
                        "font-semibold text-gray-900 text-sm leading-tight line-clamp-2 flex-1",
                      children: c.name,
                    }),
                    m.jsx("button", {
                      onClick: () => C(c.code),
                      className:
                        "flex-shrink-0 w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center active:scale-90 transition",
                      children: m.jsx(gg, {
                        className: "w-3.5 h-3.5 text-red-400",
                      }),
                    }),
                  ],
                }),
                m.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children: o
                    ? `${d.toLocaleString()} ${p.perKg}`
                    : `${d.toLocaleString()} ${p.perPc} × ${f}`,
                }),
                m.jsxs("div", {
                  className: "flex items-center justify-between mt-2.5",
                  children: [
                    m.jsxs("div", {
                      className:
                        "flex items-center bg-gray-100 rounded-xl px-2 py-1.5 gap-1.5",
                      children: [
                        m.jsx("button", {
                          onClick: () => Y(E - 1),
                          className:
                            "w-7 h-7 bg-white rounded-lg shadow-sm active:scale-95 text-base font-medium flex items-center justify-center",
                          children: "−",
                        }),
                        m.jsx("input", {
                          type: "text",
                          value: h,
                          onChange: (L) => D(L.target.value),
                          onBlur: X,
                          className:
                            "w-10 text-center font-bold text-sm bg-transparent outline-none",
                          placeholder: "0",
                          inputMode: o ? "decimal" : "numeric",
                        }),
                        m.jsx("button", {
                          onClick: () => Y(E + 1),
                          className:
                            "w-7 h-7 bg-[#007ACC] text-white rounded-lg shadow-sm active:scale-95 text-base font-bold flex items-center justify-center",
                          children: "+",
                        }),
                        m.jsx("span", {
                          className: "text-xs text-gray-400",
                          children: o ? p.kg : p.pack,
                        }),
                      ],
                    }),
                    m.jsxs("p", {
                      className: "text-sm font-bold text-[#007ACC]",
                      children: [Math.round(w).toLocaleString(), " ", p.sum],
                    }),
                  ],
                }),
                !o &&
                  f > 1 &&
                  m.jsxs("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children: [
                      E,
                      " ",
                      p.pack,
                      " × ",
                      f,
                      " = ",
                      B.toLocaleString(),
                      " шт",
                    ],
                  }),
              ],
            }),
          ],
        }),
      });
    },
  ),
  Dg = ({ user: c }) => {
    const [r, o] = T.useState([]),
      [f, d] = T.useState(!0),
      [v, S] = T.useState({}),
      { t: C } = qn(),
      p = c?.telegram_id;
    c?.organization;
    const h = async () => {
      (o([
        {
          id: 1042,
          created_at: "2026-03-27T10:30:00",
          total_price: 284e3,
          order: [
            {
              product: "Молоко Parmalat 1л",
              quantity: 12,
              price: 12e3,
              total: 144e3,
              isweight: !1,
            },
            {
              product: "Куриное филе",
              quantity: 2.5,
              price: 32e3,
              total: 8e4,
              isweight: !0,
            },
            {
              product: "Масло подсолнечное 1л",
              quantity: 6,
              price: 1e4,
              total: 6e4,
              isweight: !1,
            },
          ],
        },
        {
          id: 1031,
          created_at: "2026-03-24T15:10:00",
          total_price: 131500,
          order: [
            {
              product: "Хлеб белый нарезной",
              quantity: 3,
              price: 4500,
              total: 13500,
              isweight: !1,
            },
            {
              product: "Сахар рафинад",
              quantity: 10,
              price: 8500,
              total: 85e3,
              isweight: !1,
            },
            {
              product: "Рис длиннозерный",
              quantity: 1.1,
              price: 3e4,
              total: 33e3,
              isweight: !0,
            },
          ],
        },
      ]),
        d(!1));
    };
    T.useEffect(() => {
      h();
    }, [p]);
    const A = (D) => S((Y) => ({ ...Y, [D]: !Y[D] })),
      E = (D) => {
        if (
          D.isweight === !0 ||
          D.isweight === "true" ||
          D.isweight === "1" ||
          D.isweight === 1
        )
          return !0;
        if (
          D.isweight === !1 ||
          D.isweight === "false" ||
          D.isweight === "0" ||
          D.isweight === 0
        )
          return !1;
        if (D.product_info?.isweight === !0) return !0;
        const Y = Number(D.quantity);
        return !isNaN(Y) && Y % 1 !== 0;
      },
      B = (D) => {
        const Y = Number(D.quantity) || 0;
        return E(D)
          ? `${Y.toFixed(2).replace(/\.?0+$/, "")} ${C.kg}`
          : `${Math.round(Y)} шт`;
      },
      w = (D) =>
        D
          ? new Date(D).toLocaleString("ru-RU", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "—";
    return f
      ? m.jsx("div", {
          className: "flex items-center justify-center h-full min-h-[60vh]",
          children: m.jsx("div", {
            className:
              "w-10 h-10 border-4 border-[#007ACC] border-t-transparent rounded-full animate-spin",
          }),
        })
      : !r || r.length === 0
        ? m.jsxs("div", {
            className:
              "flex flex-col items-center justify-center h-full min-h-[70vh] gap-4",
            children: [
              m.jsx("div", {
                className:
                  "w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center",
                children: m.jsx(mm, { className: "w-10 h-10 text-gray-300" }),
              }),
              m.jsx("p", {
                className: "text-gray-400 font-medium text-sm",
                children: C.emptyOrders,
              }),
            ],
          })
        : m.jsxs("div", {
            className: "bg-gray-50 pb-32",
            children: [
              m.jsx("div", {
                className:
                  "bg-gradient-to-b from-[#0077c2] to-[#005fa3] px-6 pt-12 pb-16",
                children: m.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    m.jsx("div", {
                      className:
                        "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3",
                      children: m.jsx(mm, { className: "w-6 h-6 text-white" }),
                    }),
                    m.jsx("h1", {
                      className: "text-xl font-bold text-white",
                      children: C.orderHistory,
                    }),
                    m.jsxs("p", {
                      className: "text-blue-100 text-xs mt-1",
                      children: [r.length, " ", C.ordersCount],
                    }),
                  ],
                }),
              }),
              m.jsx("div", {
                className: "px-4 -mt-8 space-y-3",
                children: r.map((D) => {
                  const Y = D.id || D.order_id,
                    X = v[Y],
                    L = D.order?.length || 0;
                  return m.jsxs(
                    "div",
                    {
                      className:
                        "bg-white rounded-2xl shadow-sm overflow-hidden",
                      children: [
                        m.jsxs("button", {
                          onClick: () => A(Y),
                          className:
                            "w-full px-4 py-3.5 flex items-center justify-between active:bg-gray-50 transition",
                          children: [
                            m.jsxs("div", {
                              className: "flex items-center gap-3 text-left",
                              children: [
                                m.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0",
                                  children: m.jsx(Bm, {
                                    className: "w-4 h-4 text-[#007ACC]",
                                  }),
                                }),
                                m.jsxs("div", {
                                  children: [
                                    m.jsxs("p", {
                                      className:
                                        "font-bold text-gray-900 text-sm",
                                      children: [C.orderNum, Y],
                                    }),
                                    m.jsx("p", {
                                      className: "text-xs text-gray-400 mt-0.5",
                                      children: w(D.created_at),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                m.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    m.jsxs("p", {
                                      className: "text-xs text-gray-400",
                                      children: [L, " ", C.itemsCount],
                                    }),
                                    m.jsxs("p", {
                                      className:
                                        "text-sm font-bold text-[#007ACC]",
                                      children: [
                                        Number(
                                          D.total_price || 0,
                                        ).toLocaleString(),
                                        " ",
                                        C.sum,
                                      ],
                                    }),
                                  ],
                                }),
                                X
                                  ? m.jsx(eg, {
                                      className:
                                        "w-4 h-4 text-gray-300 flex-shrink-0",
                                    })
                                  : m.jsx(Pv, {
                                      className:
                                        "w-4 h-4 text-gray-300 flex-shrink-0",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        X &&
                          m.jsxs("div", {
                            className: "border-t border-gray-50",
                            children: [
                              m.jsx("div", {
                                className: "px-4 py-2 space-y-0",
                                children: D.order?.map((q, V) =>
                                  m.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0",
                                      children: [
                                        m.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 flex-1 min-w-0 mr-2",
                                          children: [
                                            m.jsx("div", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-[#007ACC] flex-shrink-0",
                                            }),
                                            m.jsx("p", {
                                              className:
                                                "text-sm text-gray-700 truncate",
                                              children: q.product || C.unnamed,
                                            }),
                                          ],
                                        }),
                                        m.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 flex-shrink-0",
                                          children: [
                                            m.jsx("span", {
                                              className:
                                                "text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full",
                                              children: B(q),
                                            }),
                                            m.jsxs("span", {
                                              className:
                                                "text-sm font-bold text-gray-800 w-24 text-right",
                                              children: [
                                                Number(
                                                  q.total || 0,
                                                ).toLocaleString(),
                                                " ",
                                                C.sum,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    q.id || V,
                                  ),
                                ),
                              }),
                              m.jsxs("div", {
                                className:
                                  "mx-4 mb-3 bg-blue-50 rounded-xl px-4 py-3 flex justify-between items-center",
                                children: [
                                  m.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-gray-500",
                                    children: C.totalSum,
                                  }),
                                  m.jsxs("p", {
                                    className:
                                      "text-base font-bold text-[#007ACC]",
                                    children: [
                                      Number(
                                        D.total_price || 0,
                                      ).toLocaleString(),
                                      " ",
                                      C.sum,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    },
                    Y,
                  );
                }),
              }),
            ],
          });
  },
  Ug = ({ user: c }) => {
    const { lang: r, changeLang: o, t: f, LANGUAGES: d } = qn();
    if (!c)
      return m.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: m.jsx("p", {
          className: "text-gray-400",
          children: "Загрузка профиля...",
        }),
      });
    const v = Number(c.debt) || 0,
      S =
        v === 0 ? "text-gray-800" : v < 0 ? "text-emerald-600" : "text-red-500",
      C = v === 0 ? "bg-gray-50" : v < 0 ? "bg-emerald-50" : "bg-red-50",
      p = v === 0 ? f.noDebt : v < 0 ? f.overpaid : f.debt;
    return m.jsxs("div", {
      className: "min-h-screen bg-gray-50 pb-32",
      children: [
        m.jsx("div", {
          className: "bg-[#007ACC] px-6 pt-14 pb-20",
          children: m.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
              m.jsx("div", {
                className:
                  "w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30 shadow-xl overflow-hidden",
                children: m.jsx("img", {
                  src: "https://iili.io/fIxjcFV.png",
                  alt: "logo",
                  className: "w-full h-full object-cover",
                }),
              }),
              m.jsx("h1", {
                className: "mt-4 text-2xl font-bold text-white",
                children: c.name,
              }),
              m.jsxs("p", {
                className: "mt-1 text-blue-100 text-sm",
                children: ["@", c.telegram_id],
              }),
            ],
          }),
        }),
        m.jsxs("div", {
          className: "px-4 -mt-10 space-y-3",
          children: [
            m.jsxs("div", {
              className: `${C} rounded-2xl p-5 flex items-center justify-between shadow-sm`,
              children: [
                m.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    m.jsx("div", {
                      className:
                        "w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm",
                      children: m.jsx(ag, { className: `w-5 h-5 ${S}` }),
                    }),
                    m.jsxs("div", {
                      children: [
                        m.jsx("p", {
                          className: "text-xs text-gray-500 font-medium",
                          children: p,
                        }),
                        m.jsxs("p", {
                          className: `text-xl font-bold ${S}`,
                          children: [Math.abs(v).toLocaleString(), " ", f.sum],
                        }),
                      ],
                    }),
                  ],
                }),
                v !== 0 &&
                  m.jsx("span", {
                    className: `text-xs font-semibold px-3 py-1 rounded-full ${v < 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`,
                    children: v < 0 ? f.inYourFavor : f.toPay,
                  }),
              ],
            }),
            m.jsxs("div", {
              className: "bg-white rounded-2xl shadow-sm overflow-hidden",
              children: [
                m.jsx(gm, {
                  icon: m.jsx(og, { className: "w-5 h-5 text-[#007ACC]" }),
                  label: f.phone,
                  value: c.phone || f.notSpecified,
                }),
                m.jsx("div", { className: "mx-4 h-px bg-gray-100" }),
                m.jsx(gm, {
                  icon: m.jsx(Fv, { className: "w-5 h-5 text-[#007ACC]" }),
                  label: f.organization,
                  value: c.organization || f.notSpecifiedF,
                }),
              ],
            }),
            m.jsxs("div", {
              className: "bg-white rounded-2xl shadow-sm p-5",
              children: [
                m.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    m.jsx("div", {
                      className:
                        "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center",
                      children: m.jsx(fg, {
                        className: "w-5 h-5 text-[#007ACC]",
                      }),
                    }),
                    m.jsx("p", {
                      className: "text-base font-semibold text-gray-900",
                      children: f.language,
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: Object.entries(d).map(([h, A]) =>
                    m.jsxs(
                      "button",
                      {
                        onClick: () => o(h),
                        className: `flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 transition-all ${r === h ? "border-[#007ACC] bg-blue-50" : "border-gray-100 bg-gray-50 active:scale-95"}`,
                        children: [
                          m.jsx("span", {
                            className: "text-2xl",
                            children: A.flag,
                          }),
                          m.jsx("span", {
                            className: `text-xs font-bold ${r === h ? "text-[#007ACC]" : "text-gray-500"}`,
                            children: A.short,
                          }),
                          m.jsx("span", {
                            className: `text-[10px] ${r === h ? "text-[#007ACC]" : "text-gray-400"}`,
                            children: A.label,
                          }),
                        ],
                      },
                      h,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  gm = ({ icon: c, label: r, value: o }) =>
    m.jsxs("div", {
      className: "flex items-center gap-4 px-5 py-4",
      children: [
        m.jsx("div", {
          className:
            "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0",
          children: c,
        }),
        m.jsxs("div", {
          children: [
            m.jsx("p", {
              className: "text-xs text-gray-400 font-medium",
              children: r,
            }),
            m.jsx("p", {
              className: "text-base font-semibold text-gray-900 mt-0.5",
              children: o,
            }),
          ],
        }),
      ],
    }),
  Hg = () =>
    m.jsxs("div", {
      className:
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#007ACC]",
      children: [
        m.jsx("div", {
          className: "mb-12 animate-bounce",
          children: m.jsx("img", {
            src: "https://iili.io/fIxjcFV.png",
            alt: "Логотип",
            className: "w-36 h-36 object-contain drop-shadow-2xl",
          }),
        }),
        m.jsxs("div", {
          className: "relative w-16 h-16",
          children: [
            m.jsx("div", {
              className:
                "absolute inset-0 rounded-full border-8 border-white/20",
            }),
            m.jsx("div", {
              className:
                "absolute inset-0 rounded-full border-8 border-t-white border-r-white border-b-transparent border-l-transparent animate-spin",
            }),
          ],
        }),
        m.jsxs("div", {
          className: "mt-10 text-center",
          children: [
            m.jsx("p", {
              className: "text-xl font-semibold text-white",
              children: "Загружаем каталог",
            }),
            m.jsx("p", {
              className: "mt-3 text-sm text-white/70",
              children: "Подождите пару секунд...",
            }),
          ],
        }),
      ],
    }),
  Bg = "https://online.parchasales.uz/getclient/";
async function wg(c = {}) {
  const r = { ...c };
  console.log("LOGIN REQUEST →", r);
  const f = await (
    await fetch(Bg, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
    })
  ).text();
  console.log("RAW RESPONSE:", f);
  try {
    return JSON.parse(f);
  } catch {
    return { error: "Invalid JSON", raw: f };
  }
}
function Lg() {
  const { pathname: c } = Be();
  return (
    T.useEffect(() => {
      document
        .querySelector(".page-scroll-container")
        ?.scrollTo({ top: 0, behavior: "auto" });
    }, [c]),
    null
  );
}
function qg() {
  const [c] = qv(),
    [r, o] = T.useState(null),
    [f, d] = T.useState(!0),
    v = "tg_params",
    S = (h) => {
      try {
        localStorage.setItem(v, JSON.stringify(h));
      } catch (A) {
        console.error("LocalStorage save error:", A);
      }
    },
    C = () => {
      try {
        const h = localStorage.getItem(v);
        return h ? JSON.parse(h) : {};
      } catch (h) {
        return (console.error("LocalStorage load error:", h), {});
      }
    },
    p = () => {
      const h = {};
      for (const [A, E] of c.entries()) E && (h[A] = E);
      return h;
    };
  return (
    T.useEffect(() => {
      (async () => {
        try {
          let A = p();
          Object.keys(A).length === 0 ? (A = C()) : S(A);
          const E = A.tg_id || A.t_id,
            B = A.username,
            w = A.code;
          if (!E || !B || !w) {
            (S({ org: "ilonsoy" }),
              o({
                telegram_id: "000000",
                name: "Дизайн Мод",
                organization: "ilonsoy",
                phone: "+998901234567",
                debt: 15e4,
                address: "Toshkent",
              }),
              d(!1));
            return;
          }
          const D = await wg({
            telegram_id: E,
            username: B,
            tg_username: A.tg_username || "",
            code: w,
            org: A.org || "",
            ...A,
          });
          D?.telegram_id
            ? o({
                telegram_id: D.telegram_id,
                name: D.name || B || "Mijoz",
                organization: D.organization || A.org || "Do'kon",
                phone: D.phone || "",
                debt: D.debt || 0,
                address: D.address || "",
                ...D,
              })
            : console.error("Invalid user data from server", D);
        } catch (A) {
          console.error("Auto-login error:", A);
        } finally {
          d(!1);
        }
      })();
    }, [c]),
    f
      ? m.jsx("div", {
          className: "flex items-center justify-center min-h-screen bg-gray-50",
          children: m.jsx(Hg, {}),
        })
      : r
        ? m.jsxs("div", {
            className:
              "relative max-w-lg h-screen mx-auto bg-gray-50 overflow-hidden",
            children: [
              m.jsx("div", {
                className:
                  "h-full overflow-y-auto page-scroll-container scrollbar-hide",
                children: m.jsxs(rv, {
                  children: [
                    m.jsx(Ua, { path: "/", element: m.jsx(vm, { user: r }) }),
                    m.jsx(Ua, {
                      path: "/cart",
                      element: m.jsx(Mg, { user: r }),
                    }),
                    m.jsx(Ua, {
                      path: "/orders",
                      element: m.jsx(Dg, { user: r }),
                    }),
                    m.jsx(Ua, {
                      path: "/profile",
                      element: m.jsx(Ug, { user: r }),
                    }),
                    m.jsx(Ua, { path: "*", element: m.jsx(vm, { user: r }) }),
                  ],
                }),
              }),
              m.jsx(Tg, {}),
            ],
          })
        : m.jsxs("div", {
            className:
              "flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center",
            children: [
              m.jsx("h1", {
                className: "text-2xl font-bold text-red-600 mb-4",
                children: "Ошибка при входе",
              }),
              m.jsx("p", {
                className: "text-gray-600 mb-6",
                children:
                  "Откройте заново через бота или свяжитесь с администратором.",
              }),
              m.jsx("button", {
                onClick: () => window.location.reload(),
                className:
                  "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                children: "Повторная попытка",
              }),
            ],
          })
  );
}
function Yg() {
  return m.jsx(zg, {
    children: m.jsx(Eg, {
      children: m.jsxs(Uv, { children: [m.jsx(Lg, {}), m.jsx(qg, {})] }),
    }),
  });
}
by.createRoot(document.getElementById("root")).render(
  m.jsx(T.StrictMode, { children: m.jsx(Yg, {}) }),
);
