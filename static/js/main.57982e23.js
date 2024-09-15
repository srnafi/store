/*! For license information please see main.57982e23.js.LICENSE.txt */
(() => {
  var e = {
      123: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (l) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, l) {
              for (
                var a,
                  o,
                  i = (function (e) {
                    if (null === e || void 0 === e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  s = 1;
                s < arguments.length;
                s++
              ) {
                for (var u in (a = Object(arguments[s])))
                  n.call(a, u) && (i[u] = a[u]);
                if (t) {
                  o = t(a);
                  for (var c = 0; c < o.length; c++)
                    r.call(a, o[c]) && (i[o[c]] = a[o[c]]);
                }
              }
              return i;
            };
      },
      497: (e, t, n) => {
        "use strict";
        var r = n(218);
        function l() {}
        function a() {}
        (a.resetWarningCache = l),
          (e.exports = function () {
            function e(e, t, n, l, a, o) {
              if (o !== r) {
                var i = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((i.name = "Invariant Violation"), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: l,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          l = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, l, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, r) {
          var l = g.hasOwnProperty(t) ? g[t] : null;
          (null !== l
            ? 0 !== l.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, l, r) && (n = null),
            r || null === l
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : l.mustUseProperty
              ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (l = l.type) || (4 === l && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          N = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function F(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var R,
          M = Object.assign;
        function A(e) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              R = (t && t[1]) || "";
            }
          return "\n" + R + e;
        }
        var D = !1;
        function U(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var l = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = l.length - 1,
                  i = a.length - 1;
                1 <= o && 0 <= i && l[o] !== a[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (l[o] !== a[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || l[o] !== a[i])) {
                        var s = "\n" + l[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case N:
              return "Profiler";
            case j:
              return "StrictMode";
            case T:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case z:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === j ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var l = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return l.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
              (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, l = 0; l < e.length; l++) {
              if (e[l].value === n)
                return (
                  (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
                );
              null !== t || e[l].disabled || (t = e[l]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function le(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function ae(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                l = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          je = null;
        function Ne(e) {
          if ((e = xl(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = wl(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (je ? je.push(e) : (je = [e])) : (Se = e);
        }
        function Ee() {
          if (Se) {
            var e = Se,
              t = je;
            if (((je = Se = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Te() {}
        var Pe = !1;
        function ze(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Pe = !1), (null !== Se || null !== je) && (Te(), Ee());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wl(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            Le = !1;
          }
        function Fe(e, t, n, r, l, a, o, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Re = !1,
          Me = null,
          Ae = !1,
          De = null,
          Ue = {
            onError: function (e) {
              (Re = !0), (Me = e);
            },
          };
        function $e(e, t, n, r, l, a, o, i, s) {
          (Re = !1), (Me = null), Fe.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Be(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var l = n.return;
                if (null === l) break;
                var o = l.alternate;
                if (null === o) {
                  if (null !== (r = l.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (l.child === o.child) {
                  for (o = l.child; o; ) {
                    if (o === n) return Ve(l), e;
                    if (o === r) return Ve(l), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = l), (r = o);
                else {
                  for (var i = !1, s = l.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = l), (r = o);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = l), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = l.unstable_scheduleCallback,
          Ye = l.unstable_cancelCallback,
          Ke = l.unstable_shouldYield,
          Je = l.unstable_requestPaint,
          Xe = l.unstable_now,
          Ge = l.unstable_getCurrentPriorityLevel,
          Ze = l.unstable_ImmediatePriority,
          et = l.unstable_UserBlockingPriority,
          tt = l.unstable_NormalPriority,
          nt = l.unstable_LowPriority,
          rt = l.unstable_IdlePriority,
          lt = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            l = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~l;
            0 !== i ? (r = ft(i)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~l) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & l) &&
            ((l = r & -r) >= (a = t & -t) || (16 === l && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (l = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~l);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              l = 1 << r;
            (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
          }
        }
        var xt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          jt,
          Nt,
          Ct = !1,
          Et = [],
          _t = null,
          Tt = null,
          Pt = null,
          zt = new Map(),
          Ot = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              zt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Rt(e, t, n, r, l, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [l],
              }),
              null !== t && null !== (t = xl(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== l && -1 === t.indexOf(l) && t.push(l),
              e);
        }
        function Mt(e) {
          var t = yl(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Nt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xl(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          At(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== _t && At(_t) && (_t = null),
            null !== Tt && At(Tt) && (Tt = null),
            null !== Pt && At(Pt) && (Pt = null),
            zt.forEach(Dt),
            Ot.forEach(Dt);
        }
        function $t(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              l.unstable_scheduleCallback(l.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return $t(t, e);
          }
          if (0 < Et.length) {
            $t(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && $t(_t, e),
              null !== Tt && $t(Tt, e),
              null !== Pt && $t(Pt, e),
              zt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = b.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var l = xt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 1), qt(e, t, n, r);
          } finally {
            (xt = l), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          var l = xt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 4), qt(e, t, n, r);
          } finally {
            (xt = l), (Ht.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var l = Kt(e, t, n, r);
            if (null === l) Vr(e, t, r, Yt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, l) {
                switch (t) {
                  case "focusin":
                    return (_t = Rt(_t, e, t, n, r, l)), !0;
                  case "dragenter":
                    return (Tt = Rt(Tt, e, t, n, r, l)), !0;
                  case "mouseover":
                    return (Pt = Rt(Pt, e, t, n, r, l)), !0;
                  case "pointerover":
                    var a = l.pointerId;
                    return zt.set(a, Rt(zt.get(a) || null, e, t, n, r, l)), !0;
                  case "gotpointercapture":
                    return (
                      (a = l.pointerId),
                      Ot.set(a, Rt(Ot.get(a) || null, e, t, n, r, l)),
                      !0
                    );
                }
                return !1;
              })(l, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== l; ) {
                var a = xl(l);
                if (
                  (null !== a && wt(a),
                  null === (a = Kt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                  a === l)
                )
                  break;
                l = a;
              }
              null !== l && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = yl((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Jt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            l = "value" in Xt ? Xt.value : Xt.textContent,
            a = l.length;
          for (e = 0; e < r && n[e] === l[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
          return (Zt = l.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, l, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = l),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]));
            return (
              (this.isDefaultPrevented = (
                null != l.defaultPrevented
                  ? l.defaultPrevented
                  : !1 === l.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = ln(un),
          fn = M({}, un, { view: 0, detail: 0 }),
          dn = ln(fn),
          pn = M({}, fn, {
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
            getModifierState: Nn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          mn = ln(pn),
          hn = ln(M({}, pn, { dataTransfer: 0 })),
          gn = ln(M({}, fn, { relatedTarget: 0 })),
          vn = ln(
            M({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = M({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = ln(yn),
          bn = ln(M({}, un, { data: 0 })),
          wn = {
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
          kn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Nn() {
          return jn;
        }
        var Cn = M({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: Nn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = ln(Cn),
          _n = ln(
            M({}, pn, {
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
            })
          ),
          Tn = ln(
            M({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nn,
            })
          ),
          Pn = ln(
            M({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          zn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = ln(zn),
          Ln = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          Fn = null;
        c && "documentMode" in document && (Fn = document.documentMode);
        var Rn = c && "TextEvent" in window && !Fn,
          Mn = c && (!In || (Fn && 8 < Fn && 11 >= Fn)),
          An = String.fromCharCode(32),
          Dn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $n(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Hn = {
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
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Yn(e) {
          Ar(e, 0);
        }
        function Kn(e) {
          if (q(bl(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Gn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Gn = Zn;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            Wn(t, qn, e, we(e)), ze(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Kn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!f.call(t, l) || !ir(e[l], t[l])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var l = n.textContent.length,
                  a = Math.min(r.start, l);
                (r = void 0 === r.end ? a : Math.min(r.end, l)),
                  !e.extend && a > r && ((l = r), (r = a), (a = l)),
                  (l = cr(n, a));
                var o = cr(n, r);
                l &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== l.node ||
                    e.anchorOffset !== l.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(l.node, l.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          xr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == gr ||
            gr !== Y(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          jr = {};
        function Nr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in jr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((jr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = Nr("animationend"),
          Er = Nr("animationiteration"),
          _r = Nr("animationstart"),
          Tr = Nr("transitionend"),
          Pr = new Map(),
          zr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < zr.length; Lr++) {
          var Ir = zr[Lr];
          Or(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Or(Cr, "onAnimationEnd"),
          Or(Er, "onAnimationIteration"),
          Or(_r, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Tr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, l, o, i, s, u) {
              if (($e.apply(this, arguments), Re)) {
                if (!Re) throw Error(a(198));
                var c = Me;
                (Re = !1), (Me = null), Ae || ((Ae = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              l = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== a && l.isPropagationStopped()))
                    break e;
                  Mr(l, i, u), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (i = r[o]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== a && l.isPropagationStopped())
                  )
                    break e;
                  Mr(l, i, u), (a = s);
                }
            }
          }
          if (Ae) throw ((e = De), (Ae = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[hl];
          void 0 === n && (n = t[hl] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var $r = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[$r]) {
            (e[$r] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[$r] || ((t[$r] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var l = Wt;
              break;
            case 4:
              l = Qt;
              break;
            default:
              l = qt;
          }
          (n = l.bind(null, t, n, e)),
            (l = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (l = !0),
            r
              ? void 0 !== l
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
              : void 0 !== l
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, l) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === l ||
                        (8 === s.nodeType && s.parentNode === l))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = yl(i))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = a = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          ze(function () {
            var r = a,
              l = we(n),
              o = [];
            e: {
              var i = Pr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = En;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tn;
                    break;
                  case Cr:
                  case Er:
                  case _r:
                    s = vn;
                    break;
                  case Tr:
                    s = Pn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = _n;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Oe(m, d)) &&
                        c.push(Wr(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, l)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yl(u) && !u[ml])) &&
                  (s || i) &&
                  ((i =
                    l.window === l
                      ? l
                      : (i = l.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yl(u)
                          : null) &&
                        (u !== (f = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = mn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = _n),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == s ? i : bl(s)),
                  (p = null == u ? i : bl(u)),
                  ((i = new c(h, m + "leave", s, n, l)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  yl(l) === r &&
                    (((c = new c(d, m + "enter", u, n, l)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  s && u)
                )
                  e: {
                    for (d = u, m = 0, p = c = s; p; p = qr(p)) m++;
                    for (p = 0, h = d; h; h = qr(h)) p++;
                    for (; 0 < m - p; ) (c = qr(c)), m--;
                    for (; 0 < p - m; ) (d = qr(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Yr(o, i, s, c, !1),
                  null !== u && null !== f && Yr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = r ? bl(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var g = Jn;
              else if (Vn(i))
                if (Xn) g = or;
                else {
                  g = lr;
                  var v = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Wn(o, g, n, l)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = r ? bl(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), br(o, n, l);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  br(o, n, l);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (Mn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Bn && (y = en())
                    : ((Gt = "value" in (Xt = l) ? Xt.value : Xt.textContent),
                      (Bn = !0))),
                0 < (v = Qr(r, x)).length &&
                  ((x = new bn(x, e, null, n, l)),
                  o.push({ event: x, listeners: v }),
                  y ? (x.data = y) : null !== (y = $n(n)) && (x.data = y))),
                (y = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return $n(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!In && Un(e, t))
                          ? ((e = en()), (Zt = Gt = Xt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((l = new bn("onBeforeInput", "beforeinput", null, n, l)),
                  o.push({ event: l, listeners: r }),
                  (l.data = y));
            }
            Ar(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var l = e,
              a = l.stateNode;
            5 === l.tag &&
              null !== a &&
              ((l = a),
              null != (a = Oe(e, n)) && r.unshift(Wr(e, a, l)),
              null != (a = Oe(e, t)) && r.push(Wr(e, a, l))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, l) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              l
                ? null != (s = Oe(n, a)) && o.unshift(Wr(n, s, i))
                : l || (null != (s = Oe(n, a)) && o.push(Wr(n, s, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Jr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var el = null,
          tl = null;
        function nl(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var rl = "function" === typeof setTimeout ? setTimeout : void 0,
          ll = "function" === typeof clearTimeout ? clearTimeout : void 0,
          al = "function" === typeof Promise ? Promise : void 0,
          ol =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof al
              ? function (e) {
                  return al.resolve(null).then(e).catch(il);
                }
              : rl;
        function il(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sl(e, t) {
          var n = t,
            r = 0;
          do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && 8 === l.nodeType))
              if ("/$" === (n = l.data)) {
                if (0 === r) return e.removeChild(l), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = l;
          } while (n);
          Bt(t);
        }
        function ul(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function cl(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fl = Math.random().toString(36).slice(2),
          dl = "__reactFiber$" + fl,
          pl = "__reactProps$" + fl,
          ml = "__reactContainer$" + fl,
          hl = "__reactEvents$" + fl,
          gl = "__reactListeners$" + fl,
          vl = "__reactHandles$" + fl;
        function yl(e) {
          var t = e[dl];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ml] || n[dl])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = cl(e); null !== e; ) {
                  if ((n = e[dl])) return n;
                  e = cl(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xl(e) {
          return !(e = e[dl] || e[ml]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function bl(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wl(e) {
          return e[pl] || null;
        }
        var kl = [],
          Sl = -1;
        function jl(e) {
          return { current: e };
        }
        function Nl(e) {
          0 > Sl || ((e.current = kl[Sl]), (kl[Sl] = null), Sl--);
        }
        function Cl(e, t) {
          Sl++, (kl[Sl] = e.current), (e.current = t);
        }
        var El = {},
          _l = jl(El),
          Tl = jl(!1),
          Pl = El;
        function zl(e, t) {
          var n = e.type.contextTypes;
          if (!n) return El;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var l,
            a = {};
          for (l in n) a[l] = t[l];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Ol(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ll() {
          Nl(Tl), Nl(_l);
        }
        function Il(e, t, n) {
          if (_l.current !== El) throw Error(a(168));
          Cl(_l, t), Cl(Tl, n);
        }
        function Fl(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var l in (r = r.getChildContext()))
            if (!(l in t)) throw Error(a(108, H(e) || "Unknown", l));
          return M({}, n, r);
        }
        function Rl(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              El),
            (Pl = _l.current),
            Cl(_l, e),
            Cl(Tl, Tl.current),
            !0
          );
        }
        function Ml(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Fl(e, t, Pl)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Nl(Tl),
              Nl(_l),
              Cl(_l, e))
            : Nl(Tl),
            Cl(Tl, n);
        }
        var Al = null,
          Dl = !1,
          Ul = !1;
        function $l(e) {
          null === Al ? (Al = [e]) : Al.push(e);
        }
        function Bl() {
          if (!Ul && null !== Al) {
            Ul = !0;
            var e = 0,
              t = xt;
            try {
              var n = Al;
              for (xt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Al = null), (Dl = !1);
            } catch (l) {
              throw (null !== Al && (Al = Al.slice(e + 1)), qe(Ze, Bl), l);
            } finally {
              (xt = t), (Ul = !1);
            }
          }
          return null;
        }
        var Hl = [],
          Vl = 0,
          Wl = null,
          Ql = 0,
          ql = [],
          Yl = 0,
          Kl = null,
          Jl = 1,
          Xl = "";
        function Gl(e, t) {
          (Hl[Vl++] = Ql), (Hl[Vl++] = Wl), (Wl = e), (Ql = t);
        }
        function Zl(e, t, n) {
          (ql[Yl++] = Jl), (ql[Yl++] = Xl), (ql[Yl++] = Kl), (Kl = e);
          var r = Jl;
          e = Xl;
          var l = 32 - ot(r) - 1;
          (r &= ~(1 << l)), (n += 1);
          var a = 32 - ot(t) + l;
          if (30 < a) {
            var o = l - (l % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (l -= o),
              (Jl = (1 << (32 - ot(t) + l)) | (n << l) | r),
              (Xl = a + e);
          } else (Jl = (1 << a) | (n << l) | r), (Xl = e);
        }
        function ea(e) {
          null !== e.return && (Gl(e, 1), Zl(e, 1, 0));
        }
        function ta(e) {
          for (; e === Wl; )
            (Wl = Hl[--Vl]), (Hl[Vl] = null), (Ql = Hl[--Vl]), (Hl[Vl] = null);
          for (; e === Kl; )
            (Kl = ql[--Yl]),
              (ql[Yl] = null),
              (Xl = ql[--Yl]),
              (ql[Yl] = null),
              (Jl = ql[--Yl]),
              (ql[Yl] = null);
        }
        var na = null,
          ra = null,
          la = !1,
          aa = null;
        function oa(e, t) {
          var n = zu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ia(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ul(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Kl ? { id: Jl, overflow: Xl } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = zu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (la) {
            var t = ra;
            if (t) {
              var n = t;
              if (!ia(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = ul(n.nextSibling);
                var r = na;
                t && ia(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (la = !1), (na = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (la = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!la) return ca(e), (la = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !nl(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (sa(e)) throw (da(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ul(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ul(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ul(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var e = ra; e; ) e = ul(e.nextSibling);
        }
        function pa() {
          (ra = na = null), (la = !1);
        }
        function ma(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var ha = b.ReactCurrentBatchConfig;
        function ga(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var l = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = l.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function va(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ya(e) {
          return (0, e._init)(e._payload);
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function l(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = l(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === O &&
                    ya(a) === t.type))
              ? (((r = l(t, n.props)).ref = ga(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = ga(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = l(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Fu(n, e.mode, r, a)).return = e), t)
              : (((t = l(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Mu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = ga(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Au(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return ((t = Fu(t, e.mode, n, null)).return = e), t;
              va(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var l = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== l ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === l ? u(e, t, n, r) : null;
                case k:
                  return n.key === l ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (l = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== l ? null : f(e, t, n, r, null);
              va(e, n);
            }
            return null;
          }
          function m(e, t, n, r, l) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, l);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    l
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    l
                  );
                case O:
                  return m(e, t, n, (0, r._init)(r._payload), l);
              }
              if (te(r) || F(r))
                return f(t, (e = e.get(n) || null), r, l, null);
              va(t, r);
            }
            return null;
          }
          function h(l, a, i, s) {
            for (
              var u = null, c = null, f = a, h = (a = 0), g = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(l, f, i[h], s);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(l, f),
                (a = o(v, a, h)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (f = g);
            }
            if (h === i.length) return n(l, f), la && Gl(l, h), u;
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(l, i[h], s)) &&
                  ((a = o(f, a, h)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return la && Gl(l, h), u;
            }
            for (f = r(l, f); h < i.length; h++)
              null !== (g = m(f, l, h, i[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? h : g.key),
                (a = o(g, a, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(l, e);
                }),
              la && Gl(l, h),
              u
            );
          }
          function g(l, i, s, u) {
            var c = F(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), h = i, g = (i = 0), v = null, y = s.next();
              null !== h && !y.done;
              g++, y = s.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var x = p(l, h, y.value, u);
              if (null === x) {
                null === h && (h = v);
                break;
              }
              e && h && null === x.alternate && t(l, h),
                (i = o(x, i, g)),
                null === f ? (c = x) : (f.sibling = x),
                (f = x),
                (h = v);
            }
            if (y.done) return n(l, h), la && Gl(l, g), c;
            if (null === h) {
              for (; !y.done; g++, y = s.next())
                null !== (y = d(l, y.value, u)) &&
                  ((i = o(y, i, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return la && Gl(l, g), c;
            }
            for (h = r(l, h); !y.done; g++, y = s.next())
              null !== (y = m(h, l, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? g : y.key),
                (i = o(y, i, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(l, e);
                }),
              la && Gl(l, g),
              c
            );
          }
          return function e(r, a, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = l(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === O &&
                            ya(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = l(c, o.props)).ref = ga(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((a = Fu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = a))
                      : (((s = Iu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = ga(r, a, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case k:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = l(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Au(o, r.mode, s)).return = r), (r = a);
                  }
                  return i(r);
                case O:
                  return e(r, a, (c = o._init)(o._payload), s);
              }
              if (te(o)) return h(r, a, o, s);
              if (F(o)) return g(r, a, o, s);
              va(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = l(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Mu(o, r.mode, s)).return = r), (r = a)),
                i(r))
              : n(r, a);
          };
        }
        var ba = xa(!0),
          wa = xa(!1),
          ka = jl(null),
          Sa = null,
          ja = null,
          Na = null;
        function Ca() {
          Na = ja = Sa = null;
        }
        function Ea(e) {
          var t = ka.current;
          Nl(ka), (e._currentValue = t);
        }
        function _a(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ta(e, t) {
          (Sa = e),
            (Na = ja = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null));
        }
        function Pa(e) {
          var t = e._currentValue;
          if (Na !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ja)
            ) {
              if (null === Sa) throw Error(a(308));
              (ja = e), (Sa.dependencies = { lanes: 0, firstContext: e });
            } else ja = ja.next = e;
          return t;
        }
        var za = null;
        function Oa(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function La(e, t, n, r) {
          var l = t.interleaved;
          return (
            null === l
              ? ((n.next = n), Oa(t))
              : ((n.next = l.next), (l.next = n)),
            (t.interleaved = n),
            Ia(e, r)
          );
        }
        function Ia(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fa = !1;
        function Ra(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ma(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Aa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Da(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _s))) {
            var l = r.pending;
            return (
              null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)),
              (r.pending = t),
              Ia(e, n)
            );
          }
          return (
            null === (l = r.interleaved)
              ? ((t.next = t), Oa(r))
              : ((t.next = l.next), (l.next = t)),
            (r.interleaved = t),
            Ia(e, n)
          );
        }
        function Ua(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function $a(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var l = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (l = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (l = a = t) : (a = a.next = t);
            } else l = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ba(e, t, n, r) {
          var l = e.updateQueue;
          Fa = !1;
          var a = l.firstBaseUpdate,
            o = l.lastBaseUpdate,
            i = l.shared.pending;
          if (null !== i) {
            l.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = l.baseState;
            for (o = 0, c = u = s = null, i = a; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = M({}, f, d);
                      break e;
                    case 2:
                      Fa = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = l.effects) ? (l.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = l.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (l.lastBaseUpdate = d),
                  (l.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (l.baseState = s),
              (l.firstBaseUpdate = u),
              (l.lastBaseUpdate = c),
              null !== (t = l.shared.interleaved))
            ) {
              l = t;
              do {
                (o |= l.lane), (l = l.next);
              } while (l !== t);
            } else null === a && (l.shared.lanes = 0);
            (Rs |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                l = r.callback;
              if (null !== l) {
                if (((r.callback = null), (r = n), "function" !== typeof l))
                  throw Error(a(191, l));
                l.call(r);
              }
            }
        }
        var Va = {},
          Wa = jl(Va),
          Qa = jl(Va),
          qa = jl(Va);
        function Ya(e) {
          if (e === Va) throw Error(a(174));
          return e;
        }
        function Ka(e, t) {
          switch ((Cl(qa, t), Cl(Qa, e), Cl(Wa, Va), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Nl(Wa), Cl(Wa, t);
        }
        function Ja() {
          Nl(Wa), Nl(Qa), Nl(qa);
        }
        function Xa(e) {
          Ya(qa.current);
          var t = Ya(Wa.current),
            n = se(t, e.type);
          t !== n && (Cl(Qa, e), Cl(Wa, n));
        }
        function Ga(e) {
          Qa.current === e && (Nl(Wa), Nl(Qa));
        }
        var Za = jl(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = b.ReactCurrentDispatcher,
          lo = b.ReactCurrentBatchConfig,
          ao = 0,
          oo = null,
          io = null,
          so = null,
          uo = !1,
          co = !1,
          fo = 0,
          po = 0;
        function mo() {
          throw Error(a(321));
        }
        function ho(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function go(e, t, n, r, l, o) {
          if (
            ((ao = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : ei),
            (e = n(r, l)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (so = io = null),
                (t.updateQueue = null),
                (ro.current = ti),
                (e = n(r, l));
            } while (co);
          }
          if (
            ((ro.current = Go),
            (t = null !== io && null !== io.next),
            (ao = 0),
            (so = io = oo = null),
            (uo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vo() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === so ? (oo.memoizedState = so = e) : (so = so.next = e), so
          );
        }
        function xo() {
          if (null === io) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = io.next;
          var t = null === so ? oo.memoizedState : so.next;
          if (null !== t) (so = t), (io = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (io = e).memoizedState,
              baseState: io.baseState,
              baseQueue: io.baseQueue,
              queue: io.queue,
              next: null,
            }),
              null === so ? (oo.memoizedState = so = e) : (so = so.next = e);
          }
          return so;
        }
        function bo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function wo(e) {
          var t = xo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = io,
            l = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== l) {
              var i = l.next;
              (l.next = o.next), (o.next = i);
            }
            (r.baseQueue = l = o), (n.pending = null);
          }
          if (null !== l) {
            (o = l.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((ao & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (i = r)) : (u = u.next = d),
                  (oo.lanes |= f),
                  (Rs |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            l = e;
            do {
              (o = l.lane), (oo.lanes |= o), (Rs |= o), (l = l.next);
            } while (l !== e);
          } else null === l && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ko(e) {
          var t = xo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            l = n.pending,
            o = t.memoizedState;
          if (null !== l) {
            n.pending = null;
            var i = (l = l.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== l);
            ir(o, t.memoizedState) || (xi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function So() {}
        function jo(e, t) {
          var n = oo,
            r = xo(),
            l = t(),
            o = !ir(r.memoizedState, l);
          if (
            (o && ((r.memoizedState = l), (xi = !0)),
            (r = r.queue),
            Ro(Eo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== so && 1 & so.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zo(9, Co.bind(null, n, r, l, t), void 0, null),
              null === Ts)
            )
              throw Error(a(349));
            0 !== (30 & ao) || No(n, t, l);
          }
          return l;
        }
        function No(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Co(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _o(t) && To(e);
        }
        function Eo(e, t, n) {
          return n(function () {
            _o(t) && To(e);
          });
        }
        function _o(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function To(e) {
          var t = Ia(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Po(e) {
          var t = yo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: bo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Yo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function zo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Oo() {
          return xo().memoizedState;
        }
        function Lo(e, t, n, r) {
          var l = yo();
          (oo.flags |= e),
            (l.memoizedState = zo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Io(e, t, n, r) {
          var l = xo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== io) {
            var o = io.memoizedState;
            if (((a = o.destroy), null !== r && ho(r, o.deps)))
              return void (l.memoizedState = zo(t, n, a, r));
          }
          (oo.flags |= e), (l.memoizedState = zo(1 | t, n, a, r));
        }
        function Fo(e, t) {
          return Lo(8390656, 8, e, t);
        }
        function Ro(e, t) {
          return Io(2048, 8, e, t);
        }
        function Mo(e, t) {
          return Io(4, 2, e, t);
        }
        function Ao(e, t) {
          return Io(4, 4, e, t);
        }
        function Do(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Uo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Io(4, 4, Do.bind(null, t, e), n)
          );
        }
        function $o() {}
        function Bo(e, t) {
          var n = xo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ho(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ho(e, t) {
          var n = xo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ho(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Vo(e, t, n) {
          return 0 === (21 & ao)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (oo.lanes |= n), (Rs |= n), (e.baseState = !0)),
              t);
        }
        function Wo(e, t) {
          var n = xt;
          (xt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = lo.transition;
          lo.transition = {};
          try {
            e(!1), t();
          } finally {
            (xt = n), (lo.transition = r);
          }
        }
        function Qo() {
          return xo().memoizedState;
        }
        function qo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ko(e))
          )
            Jo(t, n);
          else if (null !== (n = La(e, t, n, r))) {
            nu(n, e, r, eu()), Xo(n, t, r);
          }
        }
        function Yo(e, t, n) {
          var r = tu(e),
            l = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ko(e)) Jo(t, l);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = a(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = i), ir(i, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((l.next = l), Oa(t))
                      : ((l.next = s.next), (s.next = l)),
                    void (t.interleaved = l)
                  );
                }
              } catch (u) {}
            null !== (n = La(e, t, l, r)) &&
              (nu(n, e, r, (l = eu())), Xo(n, t, r));
          }
        }
        function Ko(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Jo(e, t) {
          co = uo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Go = {
            readContext: Pa,
            useCallback: mo,
            useContext: mo,
            useEffect: mo,
            useImperativeHandle: mo,
            useInsertionEffect: mo,
            useLayoutEffect: mo,
            useMemo: mo,
            useReducer: mo,
            useRef: mo,
            useState: mo,
            useDebugValue: mo,
            useDeferredValue: mo,
            useTransition: mo,
            useMutableSource: mo,
            useSyncExternalStore: mo,
            useId: mo,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Pa,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Pa,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Lo(4194308, 4, Do.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Lo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Lo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: Po,
            useDebugValue: $o,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = Po(!1),
                t = e[0];
              return (
                (e = Wo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                l = yo();
              if (la) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ts)) throw Error(a(349));
                0 !== (30 & ao) || No(r, t, n);
              }
              l.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (l.queue = o),
                Fo(Eo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                zo(9, Co.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = Ts.identifierPrefix;
              if (la) {
                var n = Xl;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Jl & ~(1 << (32 - ot(Jl) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Pa,
            useCallback: Bo,
            useContext: Pa,
            useEffect: Ro,
            useImperativeHandle: Uo,
            useInsertionEffect: Mo,
            useLayoutEffect: Ao,
            useMemo: Ho,
            useReducer: wo,
            useRef: Oo,
            useState: function () {
              return wo(bo);
            },
            useDebugValue: $o,
            useDeferredValue: function (e) {
              return Vo(xo(), io.memoizedState, e);
            },
            useTransition: function () {
              return [wo(bo)[0], xo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: jo,
            useId: Qo,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Pa,
            useCallback: Bo,
            useContext: Pa,
            useEffect: Ro,
            useImperativeHandle: Uo,
            useInsertionEffect: Mo,
            useLayoutEffect: Ao,
            useMemo: Ho,
            useReducer: ko,
            useRef: Oo,
            useState: function () {
              return ko(bo);
            },
            useDebugValue: $o,
            useDeferredValue: function (e) {
              var t = xo();
              return null === io
                ? (t.memoizedState = e)
                : Vo(t, io.memoizedState, e);
            },
            useTransition: function () {
              return [ko(bo)[0], xo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: jo,
            useId: Qo,
            unstable_isNewReconciler: !1,
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var li = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              l = tu(e),
              a = Aa(r, l);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, l)) && (nu(t, e, l, r), Ua(t, e, l));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              l = tu(e),
              a = Aa(r, l);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, l)) && (nu(t, e, l, r), Ua(t, e, l));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              l = Aa(n, r);
            (l.tag = 2),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (t = Da(e, l, r)) && (nu(t, e, r, n), Ua(t, e, r));
          },
        };
        function ai(e, t, n, r, l, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(l, a);
        }
        function oi(e, t, n) {
          var r = !1,
            l = El,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Pa(a))
              : ((l = Ol(t) ? Pl : _l.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? zl(e, l)
                  : El)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = li),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                l),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && li.enqueueReplaceState(t, t.state, null);
        }
        function si(e, t, n, r) {
          var l = e.stateNode;
          (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ra(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (l.context = Pa(a))
            : ((a = Ol(t) ? Pl : _l.current), (l.context = zl(e, a))),
            (l.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ri(e, t, a, n), (l.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof l.getSnapshotBeforeUpdate ||
              ("function" !== typeof l.UNSAFE_componentWillMount &&
                "function" !== typeof l.componentWillMount) ||
              ((t = l.state),
              "function" === typeof l.componentWillMount &&
                l.componentWillMount(),
              "function" === typeof l.UNSAFE_componentWillMount &&
                l.UNSAFE_componentWillMount(),
              t !== l.state && li.enqueueReplaceState(l, l.state, null),
              Ba(e, n, l, r),
              (l.state = e.memoizedState)),
            "function" === typeof l.componentDidMount && (e.flags |= 4194308);
        }
        function ui(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += $(r)), (r = r.return);
            } while (r);
            var l = n;
          } catch (a) {
            l = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: l, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var di = "function" === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Aa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), (Ws = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Aa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var l = t.value;
            (n.payload = function () {
              return r(l);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new di();
            var l = new Set();
            r.set(t, l);
          } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
          l.has(n) || (l.add(n), (e = Nu.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, l) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Aa(-1, 1)).tag = 2), Da(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = l), e);
        }
        var yi = b.ReactCurrentOwner,
          xi = !1;
        function bi(e, t, n, r) {
          t.child = null === e ? wa(t, null, n, r) : ba(t, e.child, n, r);
        }
        function wi(e, t, n, r, l) {
          n = n.render;
          var a = t.ref;
          return (
            Ta(t, l),
            (r = go(e, t, n, r, a, l)),
            (n = vo()),
            null === e || xi
              ? (la && n && ea(t), (t.flags |= 1), bi(e, t, r, l), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~l),
                Vi(e, t, l))
          );
        }
        function ki(e, t, n, r, l) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Ou(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, l)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Si(e, t, a, r, l));
          }
          if (((a = e.child), 0 === (e.lanes & l))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Vi(e, t, l);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Si(e, t, n, r, l) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = a), 0 === (e.lanes & l)))
                return (t.lanes = e.lanes), Vi(e, t, l);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return Ci(e, t, n, r, l);
        }
        function ji(e, t, n) {
          var r = t.pendingProps,
            l = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Cl(Ls, Os),
                (Os |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Cl(Ls, Os),
                  (Os |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Cl(Ls, Os),
                (Os |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Cl(Ls, Os),
              (Os |= r);
          return bi(e, t, l, n), t.child;
        }
        function Ni(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ci(e, t, n, r, l) {
          var a = Ol(n) ? Pl : _l.current;
          return (
            (a = zl(t, a)),
            Ta(t, l),
            (n = go(e, t, n, r, a, l)),
            (r = vo()),
            null === e || xi
              ? (la && r && ea(t), (t.flags |= 1), bi(e, t, n, l), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~l),
                Vi(e, t, l))
          );
        }
        function Ei(e, t, n, r, l) {
          if (Ol(n)) {
            var a = !0;
            Rl(t);
          } else a = !1;
          if ((Ta(t, l), null === t.stateNode))
            Hi(e, t), oi(t, n, r), si(t, n, r, l), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Pa(u))
              : (u = zl(t, (u = Ol(n) ? Pl : _l.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || s !== u) && ii(t, o, r, u)),
              (Fa = !1);
            var d = t.memoizedState;
            (o.state = d),
              Ba(t, r, o, l),
              (s = t.memoizedState),
              i !== r || d !== s || Tl.current || Fa
                ? ("function" === typeof c &&
                    (ri(t, n, c, r), (s = t.memoizedState)),
                  (i = Fa || ai(t, n, i, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ma(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : ni(t.type, i)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Pa(s))
                : (s = zl(t, (s = Ol(n) ? Pl : _l.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== s) && ii(t, o, r, s)),
              (Fa = !1),
              (d = t.memoizedState),
              (o.state = d),
              Ba(t, r, o, l);
            var m = t.memoizedState;
            i !== f || d !== m || Tl.current || Fa
              ? ("function" === typeof p &&
                  (ri(t, n, p, r), (m = t.memoizedState)),
                (u = Fa || ai(t, n, u, r, d, m, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, m, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (o.props = r),
                (o.state = m),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _i(e, t, n, r, a, l);
        }
        function _i(e, t, n, r, l, a) {
          Ni(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return l && Ml(t, n, !1), Vi(e, t, a);
          (r = t.stateNode), (yi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = ba(t, e.child, null, a)),
                (t.child = ba(t, null, i, a)))
              : bi(e, t, i, a),
            (t.memoizedState = r.state),
            l && Ml(t, n, !0),
            t.child
          );
        }
        function Ti(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Il(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Il(0, t.context, !1),
            Ka(e, t.containerInfo);
        }
        function Pi(e, t, n, r, l) {
          return pa(), ma(l), (t.flags |= 256), bi(e, t, n, r), t.child;
        }
        var zi,
          Oi,
          Li,
          Ii,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ri(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Mi(e, t, n) {
          var r,
            l = t.pendingProps,
            o = Za.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Cl(Za, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = l.children),
                  (e = l.fallback),
                  i
                    ? ((l = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & l) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Ru(s, l, 0, null)),
                      (e = Fu(e, l, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ri(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Ai(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, l, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Di(e, t, i, (r = ci(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (l = t.mode),
                    (r = Ru(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null
                    )),
                    ((o = Fu(o, l, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && ba(t, e.child, null, i),
                    (t.child.memoizedState = Ri(i)),
                    (t.memoizedState = Fi),
                    o);
              if (0 === (1 & t.mode)) return Di(e, t, i, null);
              if ("$!" === l.data) {
                if ((r = l.nextSibling && l.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Di(e, t, i, (r = ci((o = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), xi || s)) {
                if (null !== (r = Ts)) {
                  switch (i & -i) {
                    case 4:
                      l = 2;
                      break;
                    case 16:
                      l = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      l = 32;
                      break;
                    case 536870912:
                      l = 268435456;
                      break;
                    default:
                      l = 0;
                  }
                  0 !== (l = 0 !== (l & (r.suspendedLanes | i)) ? 0 : l) &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), Ia(e, l), nu(r, e, l, -1));
                }
                return hu(), Di(e, t, i, (r = ci(Error(a(421)))));
              }
              return "$?" === l.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Eu.bind(null, e)),
                  (l._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ul(l.nextSibling)),
                  (na = t),
                  (la = !0),
                  (aa = null),
                  null !== e &&
                    ((ql[Yl++] = Jl),
                    (ql[Yl++] = Xl),
                    (ql[Yl++] = Kl),
                    (Jl = e.id),
                    (Xl = e.overflow),
                    (Kl = t)),
                  (t = Ai(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, l, r, o, n);
          if (i) {
            (i = l.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: l.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((l = t.child).childLanes = 0),
                  (l.pendingProps = u),
                  (t.deletions = null))
                : ((l = Lu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Lu(r, i))
                : ((i = Fu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (l.return = t),
              (l.sibling = i),
              (t.child = l),
              (l = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ri(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              l
            );
          }
          return (
            (e = (i = e.child).sibling),
            (l = Lu(i, { mode: "visible", children: l.children })),
            0 === (1 & t.mode) && (l.lanes = n),
            (l.return = t),
            (l.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = l),
            (t.memoizedState = null),
            l
          );
        }
        function Ai(e, t) {
          return (
            ((t = Ru(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Di(e, t, n, r) {
          return (
            null !== r && ma(r),
            ba(t, e.child, null, n),
            ((e = Ai(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _a(e.return, t, n);
        }
        function $i(e, t, n, r, l) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: l,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = l));
        }
        function Bi(e, t, n) {
          var r = t.pendingProps,
            l = r.revealOrder,
            a = r.tail;
          if ((bi(e, t, r.children, n), 0 !== (2 & (r = Za.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Cl(Za, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (l) {
              case "forwards":
                for (n = t.child, l = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (l = n),
                    (n = n.sibling);
                null === (n = l)
                  ? ((l = t.child), (t.child = null))
                  : ((l = n.sibling), (n.sibling = null)),
                  $i(t, !1, l, n, a);
                break;
              case "backwards":
                for (n = null, l = t.child, t.child = null; null !== l; ) {
                  if (null !== (e = l.alternate) && null === eo(e)) {
                    t.child = l;
                    break;
                  }
                  (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                $i(t, !0, n, null, a);
                break;
              case "together":
                $i(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Rs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!la)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var l = e.child; null !== l; )
              (n |= l.lanes | l.childLanes),
                (r |= 14680064 & l.subtreeFlags),
                (r |= 14680064 & l.flags),
                (l.return = e),
                (l = l.sibling);
          else
            for (l = e.child; null !== l; )
              (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Ol(t.type) && Ll(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Ja(),
                Nl(Tl),
                Nl(_l),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (ou(aa), (aa = null)))),
                Oi(e, t),
                Qi(t),
                null
              );
            case 5:
              Ga(t);
              var l = Ya(qa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Li(e, t, n, r, l),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Qi(t), null;
                }
                if (((e = Ya(Wa.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[dl] = t), (r[pl] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Fr.length; l++) Dr(Fr[l], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      J(r, o), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      le(r, o), Dr("invalid", r);
                  }
                  for (var s in (ye(n, o), (l = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (l = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (l = ["children", "" + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = l), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === l.nodeType ? l : l.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[dl] = t),
                    (e[pl] = r),
                    zi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = xe(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (l = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (l = r);
                        break;
                      case "video":
                      case "audio":
                        for (l = 0; l < Fr.length; l++) Dr(Fr[l], e);
                        l = r;
                        break;
                      case "source":
                        Dr("error", e), (l = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (l = r);
                        break;
                      case "details":
                        Dr("toggle", e), (l = r);
                        break;
                      case "input":
                        J(e, r), (l = K(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        l = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (l = M({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        le(e, r), (l = re(e, r)), Dr("invalid", e);
                    }
                    for (o in (ye(n, l), (u = l)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Dr("scroll", e)
                              : null != c && x(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof l.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Ii(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Ya(qa.current)), Ya(Wa.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[dl] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[dl] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Nl(Za),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  la &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  da(), pa(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[dl] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (o = !1);
                } else null !== aa && (ou(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Za.current)
                        ? 0 === Is && (Is = 3)
                        : hu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                Ja(),
                Oi(e, t),
                null === e && Br(t.stateNode.containerInfo),
                Qi(t),
                null
              );
            case 10:
              return Ea(t.type._context), Qi(t), null;
            case 19:
              if ((Nl(Za), null === (o = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Wi(o, !1);
                else {
                  if (0 !== Is || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = eo(e))) {
                        for (
                          t.flags |= 128,
                            Wi(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Cl(Za, (1 & Za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Bs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !la)
                    )
                      return Qi(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Bs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = Za.current),
                  Cl(Za, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Os) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Yi(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Ol(t.type) && Ll(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Ja(),
                Nl(Tl),
                Nl(_l),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Ga(t), null;
            case 13:
              if (
                (Nl(Za),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Nl(Za), null;
            case 4:
              return Ja(), null;
            case 10:
              return Ea(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (zi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Oi = function () {}),
          (Li = function (e, t, n, r) {
            var l = e.memoizedProps;
            if (l !== r) {
              (e = t.stateNode), Ya(Wa.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (l = K(e, l)), (r = K(e, r)), (o = []);
                  break;
                case "select":
                  (l = M({}, l, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (l = re(e, l)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof l.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), l))
                if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                  if ("style" === c) {
                    var s = l[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != l ? l[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Dr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ii = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ki = !1,
          Ji = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Gi = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ju(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ju(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var l = (r = r.next);
            do {
              if ((l.tag & e) === e) {
                var a = l.destroy;
                (l.destroy = void 0), void 0 !== a && es(t, n, a);
              }
              l = l.next;
            } while (l !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ls(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function as(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), as(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[dl],
              delete t[pl],
              delete t[hl],
              delete t[gl],
              delete t[vl]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(lt, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || Zi(n, t);
            case 6:
              var r = cs,
                l = fs;
              (cs = null),
                ds(e, t, n),
                (fs = l),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sl(e.parentNode, n)
                      : 1 === e.nodeType && sl(e, n),
                    Bt(e))
                  : sl(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (l = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = l);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                l = r = r.next;
                do {
                  var a = l,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      es(n, t, o),
                    (l = l.next);
                } while (l !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Ji &&
                (Zi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  ju(n, t, i);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Ji = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var l = n[r];
              try {
                var o = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(a(160));
                ps(o, i, l), (cs = null), (fs = !1);
                var u = l.alternate;
                null !== u && (u.return = null), (l.return = null);
              } catch (c) {
                ju(l, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hs(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  ju(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 1:
              hs(t, e), vs(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if (
                (hs(t, e),
                vs(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var l = e.stateNode;
                try {
                  de(l, "");
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              if (4 & r && null != (l = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(l, o),
                      xe(s, i);
                    var c = xe(s, o);
                    for (i = 0; i < u.length; i += 2) {
                      var f = u[i],
                        d = u[i + 1];
                      "style" === f
                        ? ge(l, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(l, d)
                        : "children" === f
                        ? de(l, d)
                        : x(l, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        G(l, o);
                        break;
                      case "textarea":
                        ae(l, o);
                        break;
                      case "select":
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        null != m
                          ? ne(l, !!o.multiple, m, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(l, !!o.multiple, o.defaultValue, !0)
                              : ne(l, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    l[pl] = o;
                  } catch (g) {
                    ju(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((hs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                  l.nodeValue = o;
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (hs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (g) {
                  ju(e, e.return, g);
                }
              break;
            case 4:
            default:
              hs(t, e), vs(e);
              break;
            case 13:
              hs(t, e),
                vs(e),
                8192 & (l = e.child).flags &&
                  ((o = null !== l.memoizedState),
                  (l.stateNode.isHidden = o),
                  !o ||
                    (null !== l.alternate &&
                      null !== l.alternate.memoizedState) ||
                    ($s = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (c = Ji) || f), hs(t, e), (Ji = c))
                  : hs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Gi = e, f = e.child; null !== f; ) {
                    for (d = Gi = f; null !== Gi; ) {
                      switch (((m = (p = Gi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              ju(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Gi = m)) : ws(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (l = d.stateNode),
                          c
                            ? "function" === typeof (o = l.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = d.stateNode),
                              (i =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = he("display", i)));
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              hs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var l = r.stateNode;
                  32 & r.flags && (de(l, ""), (r.flags &= -33)),
                    us(e, is(e), l);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, is(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (i) {
              ju(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Gi = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Gi; ) {
            var l = Gi,
              a = l.child;
            if (22 === l.tag && r) {
              var o = null !== l.memoizedState || Ki;
              if (!o) {
                var i = l.alternate,
                  s = (null !== i && null !== i.memoizedState) || Ji;
                i = Ki;
                var u = Ji;
                if (((Ki = o), (Ji = s) && !u))
                  for (Gi = l; null !== Gi; )
                    (s = (o = Gi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ks(l)
                        : null !== s
                        ? ((s.return = o), (Gi = s))
                        : ks(l);
                for (; null !== a; ) (Gi = a), xs(a, t, n), (a = a.sibling);
                (Gi = l), (Ki = i), (Ji = u);
              }
              bs(e);
            } else
              0 !== (8772 & l.subtreeFlags) && null !== a
                ? ((a.return = l), (Gi = a))
                : bs(e);
          }
        }
        function bs(e) {
          for (; null !== Gi; ) {
            var t = Gi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount();
                        else {
                          var l =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            l,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ha(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ha(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Ji || (512 & t.flags && ls(t));
              } catch (p) {
                ju(t, t.return, p);
              }
            }
            if (t === e) {
              Gi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Gi = n);
              break;
            }
            Gi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Gi; ) {
            var t = Gi;
            if (t === e) {
              Gi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Gi = n);
              break;
            }
            Gi = t.return;
          }
        }
        function ks(e) {
          for (; null !== Gi; ) {
            var t = Gi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ju(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var l = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ju(t, l, s);
                    }
                  }
                  var a = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    ju(t, a, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    ju(t, o, s);
                  }
              }
            } catch (s) {
              ju(t, t.return, s);
            }
            if (t === e) {
              Gi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Gi = i);
              break;
            }
            Gi = t.return;
          }
        }
        var Ss,
          js = Math.ceil,
          Ns = b.ReactCurrentDispatcher,
          Cs = b.ReactCurrentOwner,
          Es = b.ReactCurrentBatchConfig,
          _s = 0,
          Ts = null,
          Ps = null,
          zs = 0,
          Os = 0,
          Ls = jl(0),
          Is = 0,
          Fs = null,
          Rs = 0,
          Ms = 0,
          As = 0,
          Ds = null,
          Us = null,
          $s = 0,
          Bs = 1 / 0,
          Hs = null,
          Vs = !1,
          Ws = null,
          Qs = null,
          qs = !1,
          Ys = null,
          Ks = 0,
          Js = 0,
          Xs = null,
          Gs = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & _s) ? Xe() : -1 !== Gs ? Gs : (Gs = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _s) && 0 !== zs
            ? zs & -zs
            : null !== ha.transition
            ? (0 === Zs && (Zs = ht()), Zs)
            : 0 !== (e = xt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Js) throw ((Js = 0), (Xs = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & _s) && e === Ts) ||
              (e === Ts && (0 === (2 & _s) && (Ms |= n), 4 === Is && iu(e, zs)),
              ru(e, r),
              1 === n &&
                0 === _s &&
                0 === (1 & t.mode) &&
                ((Bs = Xe() + 500), Dl && Bl()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                i = 1 << o,
                s = l[o];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (l[o] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (a &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Ts ? zs : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Dl = !0), $l(e);
                  })(su.bind(null, e))
                : $l(su.bind(null, e)),
                ol(function () {
                  0 === (6 & _s) && Bl();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tu(n, lu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function lu(e, t) {
          if (((Gs = -1), (Zs = 0), 0 !== (6 & _s))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ts ? zs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var l = _s;
            _s |= 2;
            var o = mu();
            for (
              (Ts === e && zs === t) ||
              ((Hs = null), (Bs = Xe() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Ca(),
              (Ns.current = o),
              (_s = l),
              null !== Ps ? (t = 0) : ((Ts = null), (zs = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (l = mt(e)) && ((r = l), (t = au(e, l))),
              1 === t)
            )
              throw ((n = Fs), du(e, 0), iu(e, r), ru(e, Xe()), n);
            if (6 === t) iu(e, r);
            else {
              if (
                ((l = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var l = n[r],
                              a = l.getSnapshot;
                            l = l.value;
                            try {
                              if (!ir(a(), l)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(l) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = mt(e)) &&
                    ((r = o), (t = au(e, o))),
                  1 === t))
              )
                throw ((n = Fs), du(e, 0), iu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  wu(e, Us, Hs);
                  break;
                case 3:
                  if (
                    (iu(e, r),
                    (130023424 & r) === r && 10 < (t = $s + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((l = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & l);
                      break;
                    }
                    e.timeoutHandle = rl(wu.bind(null, e, Us, Hs), t);
                    break;
                  }
                  wu(e, Us, Hs);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, l = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > l && (l = i), (r &= ~o);
                  }
                  if (
                    ((r = l),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * js(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = rl(wu.bind(null, e, Us, Hs), r);
                    break;
                  }
                  wu(e, Us, Hs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? lu.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Ds;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Us), (Us = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function iu(e, t) {
          for (
            t &= ~As,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & _s)) throw Error(a(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Fs), du(e, 0), iu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Us, Hs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = _s;
          _s |= 1;
          try {
            return e(t);
          } finally {
            0 === (_s = n) && ((Bs = Xe() + 500), Dl && Bl());
          }
        }
        function cu(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & _s) && ku();
          var t = _s;
          _s |= 1;
          var n = Es.transition,
            r = xt;
          try {
            if (((Es.transition = null), (xt = 1), e)) return e();
          } finally {
            (xt = r), (Es.transition = n), 0 === (6 & (_s = t)) && Bl();
          }
        }
        function fu() {
          (Os = Ls.current), Nl(Ls);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ll(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ll();
                  break;
                case 3:
                  Ja(), Nl(Tl), Nl(_l), no();
                  break;
                case 5:
                  Ga(r);
                  break;
                case 4:
                  Ja();
                  break;
                case 13:
                case 19:
                  Nl(Za);
                  break;
                case 10:
                  Ea(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ts = e),
            (Ps = e = Lu(e.current, null)),
            (zs = Os = t),
            (Is = 0),
            (Fs = null),
            (As = Ms = Rs = 0),
            (Us = Ds = null),
            null !== za)
          ) {
            for (t = 0; t < za.length; t++)
              if (null !== (r = (n = za[t]).interleaved)) {
                n.interleaved = null;
                var l = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = l), (r.next = o);
                }
                n.pending = r;
              }
            za = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((Ca(), (ro.current = Go), uo)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var l = r.queue;
                  null !== l && (l.pending = null), (r = r.next);
                }
                uo = !1;
              }
              if (
                ((ao = 0),
                (so = io = oo = null),
                (co = !1),
                (fo = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (Fs = t), (Ps = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = zs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = gi(i);
                  if (null !== m) {
                    (m.flags &= -257),
                      vi(m, i, s, 0, t),
                      1 & m.mode && hi(o, c, t),
                      (u = c);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else h.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hi(o, c, t), hu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (la && 1 & s.mode) {
                  var v = gi(i);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vi(v, i, s, 0, t),
                      ma(ui(u, s));
                    break e;
                  }
                }
                (o = u = ui(u, s)),
                  4 !== Is && (Is = 2),
                  null === Ds ? (Ds = [o]) : Ds.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        $a(o, pi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        x = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === Qs || !Qs.has(x))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          $a(o, mi(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              bu(n);
            } catch (b) {
              (t = b), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Ns.current;
          return (Ns.current = Go), null === e ? Go : e;
        }
        function hu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ts ||
              (0 === (268435455 & Rs) && 0 === (268435455 & Ms)) ||
              iu(Ts, zs);
        }
        function gu(e, t) {
          var n = _s;
          _s |= 2;
          var r = mu();
          for ((Ts === e && zs === t) || ((Hs = null), du(e, t)); ; )
            try {
              vu();
              break;
            } catch (l) {
              pu(e, l);
            }
          if ((Ca(), (_s = n), (Ns.current = r), null !== Ps))
            throw Error(a(261));
          return (Ts = null), (zs = 0), Is;
        }
        function vu() {
          for (; null !== Ps; ) xu(Ps);
        }
        function yu() {
          for (; null !== Ps && !Ke(); ) xu(Ps);
        }
        function xu(e) {
          var t = Ss(e.alternate, e, Os);
          (e.memoizedProps = e.pendingProps),
            null === t ? bu(e) : (Ps = t),
            (Cs.current = null);
        }
        function bu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Os))) return void (Ps = n);
            } else {
              if (null !== (n = Yi(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (Is = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function wu(e, t, n) {
          var r = xt,
            l = Es.transition;
          try {
            (Es.transition = null),
              (xt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ys);
                if (0 !== (6 & _s)) throw Error(a(327));
                n = e.finishedWork;
                var l = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var l = 31 - ot(n),
                        a = 1 << l;
                      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Ts && ((Ps = Ts = null), (zs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Tu(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Es.transition), (Es.transition = null);
                  var i = xt;
                  xt = 1;
                  var s = _s;
                  (_s |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((el = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var l = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n ||
                                    (0 !== l && 3 !== d.nodeType) ||
                                    (s = i + l),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === l && (s = i),
                                    p === o && ++f === r && (u = i),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        tl = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Gi = t;
                        null !== Gi;

                      )
                        if (
                          ((e = (t = Gi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Gi = e);
                        else
                          for (; null !== Gi; ) {
                            t = Gi;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        y = t.stateNode,
                                        x = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ni(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = x;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              ju(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Gi = e);
                              break;
                            }
                            Gi = t.return;
                          }
                      (h = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    mr(tl),
                    (Vt = !!el),
                    (tl = el = null),
                    (e.current = n),
                    ys(n, e, l),
                    Je(),
                    (_s = s),
                    (xt = i),
                    (Es.transition = o);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Ys = e), (Ks = l)),
                  (o = e.pendingLanes),
                  0 === o && (Qs = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          lt,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (l = t[n]),
                      r(l.value, { componentStack: l.stack, digest: l.digest });
                if (Vs) throw ((Vs = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Ks) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Xs
                      ? Js++
                      : ((Js = 0), (Xs = e))
                    : (Js = 0),
                  Bl();
              })(e, t, n, r);
          } finally {
            (Es.transition = l), (xt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ys) {
            var e = bt(Ks),
              t = Es.transition,
              n = xt;
            try {
              if (((Es.transition = null), (xt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Ks = 0), 0 !== (6 & _s)))
                  throw Error(a(331));
                var l = _s;
                for (_s |= 4, Gi = e.current; null !== Gi; ) {
                  var o = Gi,
                    i = o.child;
                  if (0 !== (16 & Gi.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Gi = c; null !== Gi; ) {
                          var f = Gi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Gi = d);
                          else
                            for (; null !== Gi; ) {
                              var p = (f = Gi).sibling,
                                m = f.return;
                              if ((as(f), f === c)) {
                                Gi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Gi = p);
                                break;
                              }
                              Gi = m;
                            }
                        }
                      }
                      var h = o.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Gi = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Gi = i);
                  else
                    e: for (; null !== Gi; ) {
                      if (0 !== (2048 & (o = Gi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Gi = y);
                        break e;
                      }
                      Gi = o.return;
                    }
                }
                var x = e.current;
                for (Gi = x; null !== Gi; ) {
                  var b = (i = Gi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== b)
                    (b.return = i), (Gi = b);
                  else
                    e: for (i = x; null !== Gi; ) {
                      if (0 !== (2048 & (s = Gi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          ju(s, s.return, k);
                        }
                      if (s === i) {
                        Gi = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Gi = w);
                        break e;
                      }
                      Gi = s.return;
                    }
                }
                if (
                  ((_s = l),
                  Bl(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(lt, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (xt = n), (Es.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Da(e, (t = pi(0, (t = ui(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function ju(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = Da(t, (e = mi(t, (e = ui(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Nu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ts === e &&
              (zs & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & zs) === zs && 500 > Xe() - $s)
                ? du(e, 0)
                : (As |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ia(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Eu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                l = e.memoizedState;
              null !== l && (n = l.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Tu(e, t) {
          return qe(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function zu(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Ou(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, l, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ou(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Fu(n.children, l, o, t);
              case j:
                (i = 8), (l |= 8);
                break;
              case N:
                return (
                  ((e = zu(12, n, t, 2 | l)).elementType = N), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = zu(13, n, t, l)).elementType = T), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = zu(19, n, t, l)).elementType = P), (e.lanes = o), e
                );
              case L:
                return Ru(n, l, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case E:
                      i = 9;
                      break e;
                    case _:
                      i = 11;
                      break e;
                    case z:
                      i = 14;
                      break e;
                    case O:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = zu(i, n, t, l)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Fu(e, t, n, r) {
          return ((e = zu(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = zu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mu(e, t, n) {
          return ((e = zu(6, e, null, t)).lanes = n), e;
        }
        function Au(e, t, n) {
          return (
            ((t = zu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Du(e, t, n, r, l) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, l, a, o, i, s) {
          return (
            (e = new Du(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = zu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ra(a),
            e
          );
        }
        function $u(e) {
          if (!e) return El;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ol(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ol(n)) return Fl(e, n, t);
          }
          return t;
        }
        function Bu(e, t, n, r, l, a, o, i, s) {
          return (
            ((e = Uu(n, r, !0, e, 0, a, 0, i, s)).context = $u(null)),
            (n = e.current),
            ((a = Aa((r = eu()), (l = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Da(n, a, l),
            (e.current.lanes = l),
            vt(e, l, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var l = t.current,
            a = eu(),
            o = tu(l);
          return (
            (n = $u(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Aa(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Da(l, t, o)) && (nu(e, l, o, a), Ua(e, l, o)),
            o
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Tl.current) xi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ti(t), pa();
                        break;
                      case 5:
                        Xa(t);
                        break;
                      case 1:
                        Ol(t.type) && Rl(t);
                        break;
                      case 4:
                        Ka(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          l = t.memoizedProps.value;
                        Cl(ka, r._currentValue), (r._currentValue = l);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Cl(Za, 1 & Za.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Mi(e, t, n)
                            : (Cl(Za, 1 & Za.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        Cl(Za, 1 & Za.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (l = t.memoizedState) &&
                            ((l.rendering = null),
                            (l.tail = null),
                            (l.lastEffect = null)),
                          Cl(Za, Za.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), ji(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), la && 0 !== (1048576 & t.flags) && Zl(t, Ql, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var l = zl(t, _l.current);
              Ta(t, n), (l = go(null, t, r, e, l, n));
              var o = vo();
              return (
                (t.flags |= 1),
                "object" === typeof l &&
                null !== l &&
                "function" === typeof l.render &&
                void 0 === l.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ol(r) ? ((o = !0), Rl(t)) : (o = !1),
                    (t.memoizedState =
                      null !== l.state && void 0 !== l.state ? l.state : null),
                    Ra(t),
                    (l.updater = li),
                    (t.stateNode = l),
                    (l._reactInternals = t),
                    si(t, r, e, n),
                    (t = _i(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    la && o && ea(t),
                    bi(null, t, l, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (l = r._init)(r._payload)),
                  (t.type = r),
                  (l = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ou(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === z) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  l)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ei(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (l = t.pendingProps),
                Ci(e, t, r, (l = t.elementType === r ? l : ni(r, l)), n)
              );
            case 1:
              return (
                (r = t.type),
                (l = t.pendingProps),
                Ei(e, t, r, (l = t.elementType === r ? l : ni(r, l)), n)
              );
            case 3:
              e: {
                if ((Ti(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (l = (o = t.memoizedState).element),
                  Ma(e, t),
                  Ba(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Pi(e, t, r, n, (l = ui(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== l) {
                    t = Pi(e, t, r, n, (l = ui(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ul(t.stateNode.containerInfo.firstChild),
                      na = t,
                      la = !0,
                      aa = null,
                      n = wa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === l)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  bi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xa(t),
                null === e && ua(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = l.children),
                nl(r, l)
                  ? (i = null)
                  : null !== o && nl(r, o) && (t.flags |= 32),
                Ni(e, t),
                bi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Mi(e, t, n);
            case 4:
              return (
                Ka(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ba(t, null, r, n)) : bi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (l = t.pendingProps),
                wi(e, t, r, (l = t.elementType === r ? l : ni(r, l)), n)
              );
            case 7:
              return bi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return bi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (l = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = l.value),
                  Cl(ka, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === l.children && !Tl.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        i = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Aa(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              _a(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(a(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          _a(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                bi(e, t, l.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (l = t.type),
                (r = t.pendingProps.children),
                Ta(t, n),
                (r = r((l = Pa(l)))),
                (t.flags |= 1),
                bi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (l = ni((r = t.type), t.pendingProps)),
                ki(e, t, r, (l = ni(r.type, l)), n)
              );
            case 15:
              return Si(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : ni(r, l)),
                Hi(e, t),
                (t.tag = 1),
                Ol(r) ? ((e = !0), Rl(t)) : (e = !1),
                Ta(t, n),
                oi(t, r, l),
                si(t, r, l, n),
                _i(null, t, r, !0, e, n)
              );
            case 19:
              return Bi(e, t, n);
            case 22:
              return ji(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Gu() {}
        function Zu(e, t, n, r, l) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof l) {
              var i = l;
              l = function () {
                var e = Vu(o);
                i.call(e);
              };
            }
            Hu(t, o, e, l);
          } else
            o = (function (e, t, n, r, l) {
              if (l) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Vu(o);
                    a.call(e);
                  };
                }
                var o = Bu(t, r, e, 0, null, !1, 0, "", Gu);
                return (
                  (e._reactRootContainer = o),
                  (e[ml] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (l = e.lastChild); ) e.removeChild(l);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Vu(s);
                  i.call(e);
                };
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, "", Gu);
              return (
                (e._reactRootContainer = s),
                (e[ml] = s.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, l, r);
          return Vu(o);
        }
        (Ku.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ml] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = jt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & _s) && ((Bs = Xe() + 500), Bl()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ia(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ia(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ia(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (jt = function () {
            return xt;
          }),
          (Nt = function (e, t) {
            var n = xt;
            try {
              return (xt = e), t();
            } finally {
              xt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var l = wl(r);
                      if (!l) throw Error(a(90));
                      q(r), G(r, l);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = uu),
          (Te = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [xl, bl, wl, Ce, Ee, uu],
          },
          tc = {
            findFiberByHostInstance: yl,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (lt = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(a(299));
            var n = !1,
              r = "",
              l = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, l)),
              (e[ml] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              l = !1,
              o = "",
              i = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (l = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Bu(t, null, e, 1, null != n ? n : null, l, 0, o, i)),
              (e[ml] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (l = (l = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ml] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.H = r.createRoot), r.hydrateRoot;
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      366: (e) => {
        var t = "undefined" !== typeof Element,
          n = "function" === typeof Map,
          r = "function" === typeof Set,
          l = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e, o) {
          if (e === o) return !0;
          if (e && o && "object" == typeof e && "object" == typeof o) {
            if (e.constructor !== o.constructor) return !1;
            var i, s, u, c;
            if (Array.isArray(e)) {
              if ((i = e.length) != o.length) return !1;
              for (s = i; 0 !== s--; ) if (!a(e[s], o[s])) return !1;
              return !0;
            }
            if (n && e instanceof Map && o instanceof Map) {
              if (e.size !== o.size) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!o.has(s.value[0])) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!a(s.value[1], o.get(s.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && o instanceof Set) {
              if (e.size !== o.size) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!o.has(s.value[0])) return !1;
              return !0;
            }
            if (l && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
              if ((i = e.length) != o.length) return !1;
              for (s = i; 0 !== s--; ) if (e[s] !== o[s]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === o.source && e.flags === o.flags;
            if (
              e.valueOf !== Object.prototype.valueOf &&
              "function" === typeof e.valueOf &&
              "function" === typeof o.valueOf
            )
              return e.valueOf() === o.valueOf();
            if (
              e.toString !== Object.prototype.toString &&
              "function" === typeof e.toString &&
              "function" === typeof o.toString
            )
              return e.toString() === o.toString();
            if ((i = (u = Object.keys(e)).length) !== Object.keys(o).length)
              return !1;
            for (s = i; 0 !== s--; )
              if (!Object.prototype.hasOwnProperty.call(o, u[s])) return !1;
            if (t && e instanceof Element) return !1;
            for (s = i; 0 !== s--; )
              if (
                (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                  !e.$$typeof) &&
                !a(e[u[s]], o[u[s]])
              )
                return !1;
            return !0;
          }
          return e !== e && o !== o;
        }
        e.exports = function (e, t) {
          try {
            return a(e, t);
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
              return (
                console.warn("react-fast-compare cannot handle circular refs"),
                !1
              );
            throw n;
          }
        };
      },
      161: (e, t, n) => {
        "use strict";
        var r,
          l = n(43),
          a =
            (r = l) && "object" === typeof r && "default" in r ? r.default : r;
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var i = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = function (e, t, n) {
          if ("function" !== typeof e)
            throw new Error("Expected reducePropsToState to be a function.");
          if ("function" !== typeof t)
            throw new Error(
              "Expected handleStateChangeOnClient to be a function."
            );
          if ("undefined" !== typeof n && "function" !== typeof n)
            throw new Error(
              "Expected mapStateOnServer to either be undefined or a function."
            );
          return function (r) {
            if ("function" !== typeof r)
              throw new Error(
                "Expected WrappedComponent to be a React component."
              );
            var s,
              u = [];
            function c() {
              (s = e(
                u.map(function (e) {
                  return e.props;
                })
              )),
                f.canUseDOM ? t(s) : n && (s = n(s));
            }
            var f = (function (e) {
              var t, n;
              function l() {
                return e.apply(this, arguments) || this;
              }
              (n = e),
                ((t = l).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (l.peek = function () {
                  return s;
                }),
                (l.rewind = function () {
                  if (l.canUseDOM)
                    throw new Error(
                      "You may only call rewind() on the server. Call peek() to read the current state."
                    );
                  var e = s;
                  return (s = void 0), (u = []), e;
                });
              var o = l.prototype;
              return (
                (o.UNSAFE_componentWillMount = function () {
                  u.push(this), c();
                }),
                (o.componentDidUpdate = function () {
                  c();
                }),
                (o.componentWillUnmount = function () {
                  var e = u.indexOf(this);
                  u.splice(e, 1), c();
                }),
                (o.render = function () {
                  return a.createElement(r, this.props);
                }),
                l
              );
            })(l.PureComponent);
            return (
              o(
                f,
                "displayName",
                "SideEffect(" +
                  (function (e) {
                    return e.displayName || e.name || "Component";
                  })(r) +
                  ")"
              ),
              o(f, "canUseDOM", i),
              f
            );
          };
        };
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          l = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: l,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: i.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          l = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function y() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var b = (x.prototype = new y());
        (b.constructor = x), h(b, v.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function N(e, t, r) {
          var l,
            a = {},
            o = null,
            i = null;
          if (null != t)
            for (l in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, l) && !j.hasOwnProperty(l) && (a[l] = t[l]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (l in (s = e.defaultProps)) void 0 === a[l] && (a[l] = s[l]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: a,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, l, a, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === a ? "." + _(s, 0) : a),
              w(o)
                ? ((l = ""),
                  null != e && (l = e.replace(E, "$&/") + "/"),
                  T(o, t, l, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      l +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + _((i = e[u]), u);
              s += T(i, t, l, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += T((i = i.value), t, l, (c = a + _(i, u++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            l = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, l++);
            }),
            r
          );
        }
        function z(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        function F() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = l),
          (t.Profiler = o),
          (t.PureComponent = x),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.act = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var l = h({}, e.props),
              a = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !j.hasOwnProperty(u) &&
                  (l[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) l.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              l.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: l,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = N),
          (t.createFactory = function (e) {
            var t = N.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: z,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = F),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              l = e[r];
            if (!(0 < a(l, t))) break e;
            (e[r] = t), (e[n] = l), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function l(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > a(s, n))
                u < l && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < l && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) l(c);
            else {
              if (!(t.startTime <= e)) break;
              l(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), b(e), !h))
            if (null !== r(u)) (h = !0), L(k);
            else {
              var t = r(c);
              null !== t && I(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), g && ((g = !1), y(C), (C = -1)), (m = !0);
          var a = p;
          try {
            for (
              b(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(u) && l(u),
                  b(n);
              } else l(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && I(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          j = !1,
          N = null,
          C = -1,
          E = 5,
          _ = -1;
        function T() {
          return !(t.unstable_now() - _ < E);
        }
        function P() {
          if (null !== N) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = N(!0, e);
            } finally {
              n ? S() : ((j = !1), (N = null));
            }
          } else j = !1;
        }
        if ("function" === typeof x)
          S = function () {
            x(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            O = z.port2;
          (z.port1.onmessage = P),
            (S = function () {
              O.postMessage(null);
            });
        } else
          S = function () {
            v(P, 0);
          };
        function L(e) {
          (N = e), j || ((j = !0), S());
        }
        function I(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, l, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: l,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), I(w, a - o)))
                : ((e.sortIndex = i), n(u, e), h || m || ((h = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var l = t[r];
    if (void 0 !== l) return l.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
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
      "use strict";
      var e,
        t = n(43),
        r = n(391);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(null, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var a = function (e) {
        return e;
      };
      var o = "beforeunload",
        i = "popstate";
      function s(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function u() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function c() {
        return Math.random().toString(36).substr(2, 8);
      }
      function f(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          l = void 0 === r ? "" : r,
          a = e.hash,
          o = void 0 === a ? "" : a;
        return (
          l && "?" !== l && (n += "?" === l.charAt(0) ? l : "?" + l),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function d(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function p(e, t) {
        if (!e) throw new Error(t);
      }
      const m = (0, t.createContext)(null);
      const h = (0, t.createContext)(null);
      const g = (0, t.createContext)({ outlet: null, matches: [] });
      function v(e) {
        return (0, t.useContext)(g).outlet;
      }
      function y(n) {
        let {
          basename: r = "/",
          children: l = null,
          location: a,
          navigationType: o = e.Pop,
          navigator: i,
          static: s = !1,
        } = n;
        b() && p(!1);
        let u = U(r),
          c = (0, t.useMemo)(
            () => ({ basename: u, navigator: i, static: s }),
            [u, i, s]
          );
        "string" === typeof a && (a = d(a));
        let {
            pathname: f = "/",
            search: g = "",
            hash: v = "",
            state: y = null,
            key: x = "default",
          } = a,
          w = (0, t.useMemo)(() => {
            let e = A(f, u);
            return null == e
              ? null
              : { pathname: e, search: g, hash: v, state: y, key: x };
          }, [u, f, g, v, y, x]);
        return null == w
          ? null
          : (0, t.createElement)(
              m.Provider,
              { value: c },
              (0, t.createElement)(h.Provider, {
                children: l,
                value: { location: w, navigationType: o },
              })
            );
      }
      function x(e) {
        b() || p(!1);
        let { basename: n, navigator: r } = (0, t.useContext)(m),
          { hash: l, pathname: a, search: o } = S(e),
          i = a;
        if ("/" !== n) {
          let t = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? d(e).pathname
                : e.pathname;
            })(e),
            r = null != t && t.endsWith("/");
          i = "/" === a ? n + (r ? "/" : "") : D([n, a]);
        }
        return r.createHref({ pathname: i, search: o, hash: l });
      }
      function b() {
        return null != (0, t.useContext)(h);
      }
      function w() {
        return b() || p(!1), (0, t.useContext)(h).location;
      }
      function k() {
        b() || p(!1);
        let { basename: e, navigator: n } = (0, t.useContext)(m),
          { matches: r } = (0, t.useContext)(g),
          { pathname: l } = w(),
          a = JSON.stringify(r.map((e) => e.pathnameBase)),
          o = (0, t.useRef)(!1);
        return (
          (0, t.useEffect)(() => {
            o.current = !0;
          }),
          (0, t.useCallback)(
            function (t, r) {
              if ((void 0 === r && (r = {}), !o.current)) return;
              if ("number" === typeof t) return void n.go(t);
              let i = M(t, JSON.parse(a), l);
              "/" !== e && (i.pathname = D([e, i.pathname])),
                (r.replace ? n.replace : n.push)(i, r.state);
            },
            [e, n, a, l]
          )
        );
      }
      function S(e) {
        let { matches: n } = (0, t.useContext)(g),
          { pathname: r } = w(),
          l = JSON.stringify(n.map((e) => e.pathnameBase));
        return (0, t.useMemo)(() => M(e, JSON.parse(l), r), [e, l, r]);
      }
      function j(e, n) {
        b() || p(!1);
        let { matches: r } = (0, t.useContext)(g),
          l = r[r.length - 1],
          a = l ? l.params : {},
          o = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let i,
          s = w();
        if (n) {
          var u;
          let e = "string" === typeof n ? d(n) : n;
          "/" === o ||
            (null == (u = e.pathname) ? void 0 : u.startsWith(o)) ||
            p(!1),
            (i = e);
        } else i = s;
        let c = i.pathname || "/",
          f = (function (e, t, n) {
            void 0 === n && (n = "/");
            let r = "string" === typeof t ? d(t) : t,
              l = A(r.pathname || "/", n);
            if (null == l) return null;
            let a = N(e);
            !(function (e) {
              e.sort((e, t) =>
                e.score !== t.score
                  ? t.score - e.score
                  : (function (e, t) {
                      let n =
                        e.length === t.length &&
                        e.slice(0, -1).every((e, n) => e === t[n]);
                      return n ? e[e.length - 1] - t[t.length - 1] : 0;
                    })(
                      e.routesMeta.map((e) => e.childrenIndex),
                      t.routesMeta.map((e) => e.childrenIndex)
                    )
              );
            })(a);
            let o = null;
            for (let i = 0; null == o && i < a.length; ++i) o = I(a[i], e, l);
            return o;
          })(e, { pathname: "/" === o ? c : c.slice(o.length) || "/" });
        return F(
          f &&
            f.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, a, e.params),
                pathname: D([o, e.pathname]),
                pathnameBase:
                  "/" === e.pathnameBase ? o : D([o, e.pathnameBase]),
              })
            ),
          r
        );
      }
      function N(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach((e, l) => {
            let a = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: l,
            };
            a.relativePath.startsWith("/") &&
              (a.relativePath.startsWith(r) || p(!1),
              (a.relativePath = a.relativePath.slice(r.length)));
            let o = D([r, a.relativePath]),
              i = n.concat(a);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && p(!1), N(e.children, t, i, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: L(o, e.index), routesMeta: i });
          }),
          t
        );
      }
      const C = /^:\w+$/,
        E = 3,
        _ = 2,
        T = 1,
        P = 10,
        z = -2,
        O = (e) => "*" === e;
      function L(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(O) && (r += z),
          t && (r += _),
          n
            .filter((e) => !O(e))
            .reduce((e, t) => e + (C.test(t) ? E : "" === t ? T : P), r)
        );
      }
      function I(e, t, n) {
        let r = t,
          { routesMeta: l } = e,
          a = {},
          o = "/",
          i = [];
        for (let s = 0; s < l.length; ++s) {
          let e = l[s],
            t = s === l.length - 1,
            u = "/" === o ? n : n.slice(o.length) || "/",
            c = R(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: t },
              u
            );
          if (!c) return null;
          Object.assign(a, c.params);
          let f = r[e.childrenIndex];
          i.push({
            params: a,
            pathname: D([o, c.pathname]),
            pathnameBase: D([o, c.pathnameBase]),
            route: f,
          }),
            "/" !== c.pathnameBase && (o = D([o, c.pathnameBase])),
            (r = f.children);
        }
        return i;
      }
      function F(e, n) {
        return (
          void 0 === n && (n = []),
          null == e
            ? null
            : e.reduceRight(
                (r, l, a) =>
                  (0, t.createElement)(g.Provider, {
                    children:
                      void 0 !== l.route.element
                        ? l.route.element
                        : (0, t.createElement)(v, null),
                    value: { outlet: r, matches: n.concat(e.slice(0, a + 1)) },
                  }),
                null
              )
        );
      }
      function R(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            let r = [],
              l =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, (e, t) => (r.push(t), "([^\\/]+)"));
            e.endsWith("*")
              ? (r.push("*"),
                (l += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (l += n ? "\\/*$" : "(?:\\b|$)");
            let a = new RegExp(l, t ? void 0 : "i");
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          l = t.match(n);
        if (!l) return null;
        let a = l[0],
          o = a.replace(/(.)\/+$/, "$1"),
          i = l.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            if ("*" === t) {
              let e = i[n] || "";
              o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e;
                }
              })(i[n] || "")),
              e
            );
          }, {}),
          pathname: a,
          pathnameBase: o,
          pattern: e,
        };
      }
      function M(e, t, n) {
        let r,
          l = "string" === typeof e ? d(e) : e,
          a = "" === e || "" === l.pathname ? "/" : l.pathname;
        if (null == a) r = n;
        else {
          let e = t.length - 1;
          if (a.startsWith("..")) {
            let t = a.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            l.pathname = t.join("/");
          }
          r = e >= 0 ? t[e] : "/";
        }
        let o = (function (e, t) {
          void 0 === t && (t = "/");
          let {
              pathname: n,
              search: r = "",
              hash: l = "",
            } = "string" === typeof e ? d(e) : e,
            a = n
              ? n.startsWith("/")
                ? n
                : (function (e, t) {
                    let n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach((e) => {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(n, t)
              : t;
          return { pathname: a, search: $(r), hash: B(l) };
        })(l, r);
        return (
          a &&
            "/" !== a &&
            a.endsWith("/") &&
            !o.pathname.endsWith("/") &&
            (o.pathname += "/"),
          o
        );
      }
      function A(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      const D = (e) => e.join("/").replace(/\/\/+/g, "/"),
        U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        $ = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        B = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      var H = n(579);
      const V = (0, t.createContext)(),
        W = (e) => {
          let { children: n } = e;
          const [r, l] = (0, t.useState)(null),
            [a, o] = (0, t.useState)(!1);
          (0, t.useEffect)(() => {
            const e = JSON.parse(localStorage.getItem("user"));
            e && (l(e), o(!0));
          }, []);
          return (0, H.jsx)(V.Provider, {
            value: {
              user: r,
              isAuthenticated: a,
              signup: (e, t) => {
                if (JSON.parse(localStorage.getItem("user")))
                  console.log("User already exists");
                else {
                  const n = { email: e, password: t };
                  l(n),
                    console.log(n),
                    o(!0),
                    localStorage.setItem("user", JSON.stringify(n));
                }
              },
              login: (e, t) => {
                const n = JSON.parse(localStorage.getItem("user"));
                if (n && n.email === e && n.password === t)
                  return (
                    console.log("this", n.email, n.password), l(n), o(!0), !0
                  );
                console.log("Invalid credentials");
              },
              logout: () => {
                l(null), o(!1), localStorage.removeItem("user");
              },
            },
            children: n,
          });
        };
      function Q() {
        return (
          (Q =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Q.apply(this, arguments)
        );
      }
      function q(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l;
      }
      const Y = [
        "onClick",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
      ];
      function K(n) {
        let { basename: r, children: p, window: m } = n,
          h = (0, t.useRef)();
        null == h.current &&
          (h.current = (function (t) {
            void 0 === t && (t = {});
            var n = t.window,
              r = void 0 === n ? document.defaultView : n,
              p = r.history;
            function m() {
              var e = r.location,
                t = e.pathname,
                n = e.search,
                l = e.hash,
                o = p.state || {};
              return [
                o.idx,
                a({
                  pathname: t,
                  search: n,
                  hash: l,
                  state: o.usr || null,
                  key: o.key || "default",
                }),
              ];
            }
            var h = null;
            r.addEventListener(i, function () {
              if (h) w.call(h), (h = null);
              else {
                var t = e.Pop,
                  n = m(),
                  r = n[0],
                  l = n[1];
                if (w.length) {
                  if (null != r) {
                    var a = y - r;
                    a &&
                      ((h = {
                        action: t,
                        location: l,
                        retry: function () {
                          E(-1 * a);
                        },
                      }),
                      E(a));
                  }
                } else C(t);
              }
            });
            var g = e.Pop,
              v = m(),
              y = v[0],
              x = v[1],
              b = u(),
              w = u();
            function k(e) {
              return "string" === typeof e ? e : f(e);
            }
            function S(e, t) {
              return (
                void 0 === t && (t = null),
                a(
                  l(
                    { pathname: x.pathname, hash: "", search: "" },
                    "string" === typeof e ? d(e) : e,
                    { state: t, key: c() }
                  )
                )
              );
            }
            function j(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, k(e)];
            }
            function N(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function C(e) {
              g = e;
              var t = m();
              (y = t[0]), (x = t[1]), b.call({ action: g, location: x });
            }
            function E(e) {
              p.go(e);
            }
            null == y &&
              ((y = 0), p.replaceState(l({}, p.state, { idx: y }), ""));
            var _ = {
              get action() {
                return g;
              },
              get location() {
                return x;
              },
              createHref: k,
              push: function t(n, l) {
                var a = e.Push,
                  o = S(n, l);
                if (
                  N(a, o, function () {
                    t(n, l);
                  })
                ) {
                  var i = j(o, y + 1),
                    s = i[0],
                    u = i[1];
                  try {
                    p.pushState(s, "", u);
                  } catch (c) {
                    r.location.assign(u);
                  }
                  C(a);
                }
              },
              replace: function t(n, r) {
                var l = e.Replace,
                  a = S(n, r);
                if (
                  N(l, a, function () {
                    t(n, r);
                  })
                ) {
                  var o = j(a, y),
                    i = o[0],
                    s = o[1];
                  p.replaceState(i, "", s), C(l);
                }
              },
              go: E,
              back: function () {
                E(-1);
              },
              forward: function () {
                E(1);
              },
              listen: function (e) {
                return b.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && r.addEventListener(o, s),
                  function () {
                    t(), w.length || r.removeEventListener(o, s);
                  }
                );
              },
            };
            return _;
          })({ window: m }));
        let g = h.current,
          [v, x] = (0, t.useState)({ action: g.action, location: g.location });
        return (
          (0, t.useLayoutEffect)(() => g.listen(x), [g]),
          (0, t.createElement)(y, {
            basename: r,
            children: p,
            location: v.location,
            navigationType: v.action,
            navigator: g,
          })
        );
      }
      const J = (0, t.forwardRef)(function (e, n) {
        let {
            onClick: r,
            reloadDocument: l,
            replace: a = !1,
            state: o,
            target: i,
            to: s,
          } = e,
          u = q(e, Y),
          c = x(s),
          d = (function (e, n) {
            let { target: r, replace: l, state: a } = void 0 === n ? {} : n,
              o = k(),
              i = w(),
              s = S(e);
            return (0, t.useCallback)(
              (t) => {
                if (
                  0 === t.button &&
                  (!r || "_self" === r) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  let n = !!l || f(i) === f(s);
                  o(e, { replace: n, state: a });
                }
              },
              [i, o, s, l, a, r, e]
            );
          })(s, { replace: a, state: o, target: i });
        return (0, t.createElement)(
          "a",
          Q({}, u, {
            href: c,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || l || d(e);
            },
            ref: n,
            target: i,
          })
        );
      });
      const X = () =>
          (0, H.jsxs)("div", {
            style: {
              height: "100vh",
              padding: "20px",
              backgroundColor: "#232323",
              color: "white",
            },
            children: [
              (0, H.jsx)("h1", {
                style: { fontSize: "48px", marginBottom: "20px" },
                children: "Homepage",
              }),
              (0, H.jsxs)("p", {
                style: { fontSize: "18px", marginBottom: "30px" },
                children: [
                  "This project was generated By",
                  " ",
                  (0, H.jsx)("a", {
                    href: "https://www.dhiwise.com",
                    style: { color: "#87CEFA", textDecoration: "none" },
                    children: "Dhiwise",
                  }),
                  "Quickly use below links to navigate through all pages.",
                ],
              }),
              (0, H.jsxs)("ul", {
                style: { listStyle: "none", padding: "0" },
                children: [
                  (0, H.jsx)("li", {
                    style: { marginBottom: "10px" },
                    children: (0, H.jsx)(J, {
                      to: "signup",
                      style: { color: "#87CEFA", textDecoration: "none" },
                      children: "Signup",
                    }),
                  }),
                  (0, H.jsx)("li", {
                    style: { marginBottom: "10px" },
                    children: (0, H.jsx)(J, {
                      to: "login",
                      style: { color: "#87CEFA", textDecoration: "none" },
                      children: "Login",
                    }),
                  }),
                  (0, H.jsx)("li", {
                    style: { marginBottom: "10px" },
                    children: (0, H.jsx)(J, {
                      to: "store",
                      style: { color: "#87CEFA", textDecoration: "none" },
                      children: "Store",
                    }),
                  }),
                  (0, H.jsx)("li", {
                    style: { marginBottom: "10px" },
                    children: (0, H.jsx)(J, {
                      to: "orderdetails",
                      style: { color: "#87CEFA", textDecoration: "none" },
                      children: "OrderDetails",
                    }),
                  }),
                ],
              }),
            ],
          }),
        G = () =>
          (0, H.jsx)("div", {
            children: (0, H.jsx)("h1", {
              children: "Oops! We ran out of code",
            }),
          });
      var Z = n(173),
        ee = n.n(Z),
        te = n(161),
        ne = n.n(te),
        re = n(366),
        le = n.n(re),
        ae = n(123),
        oe = n.n(ae),
        ie = "bodyAttributes",
        se = "htmlAttributes",
        ue = "titleAttributes",
        ce = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        fe =
          (Object.keys(ce).map(function (e) {
            return ce[e];
          }),
          "charset"),
        de = "cssText",
        pe = "href",
        me = "http-equiv",
        he = "innerHTML",
        ge = "itemprop",
        ve = "name",
        ye = "property",
        xe = "rel",
        be = "src",
        we = "target",
        ke = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        Se = "defaultTitle",
        je = "defer",
        Ne = "encodeSpecialCharacters",
        Ce = "onChangeClientState",
        Ee = "titleTemplate",
        _e = Object.keys(ke).reduce(function (e, t) {
          return (e[ke[t]] = t), e;
        }, {}),
        Te = [ce.NOSCRIPT, ce.SCRIPT, ce.STYLE],
        Pe = "data-react-helmet",
        ze =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        Oe = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        Le =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ie = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        Fe = function (e) {
          return !1 ===
            (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        Re = function (e) {
          var t = $e(e, ce.TITLE),
            n = $e(e, Ee);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = $e(e, Se);
          return t || r || void 0;
        },
        Me = function (e) {
          return $e(e, Ce) || function () {};
        },
        Ae = function (e, t) {
          return t
            .filter(function (t) {
              return "undefined" !== typeof t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return Le({}, e, t);
            }, {});
        },
        De = function (e, t) {
          return t
            .filter(function (e) {
              return "undefined" !== typeof e[ce.BASE];
            })
            .map(function (e) {
              return e[ce.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), l = 0; l < r.length; l++) {
                  var a = r[l].toLowerCase();
                  if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                }
              return t;
            }, []);
        },
        Ue = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                ("undefined" !== typeof t[e] &&
                  Qe(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      ze(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var l = {};
              n.filter(function (e) {
                for (
                  var n = void 0, a = Object.keys(e), o = 0;
                  o < a.length;
                  o++
                ) {
                  var i = a[o],
                    s = i.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === xe && "canonical" === e[n].toLowerCase()) ||
                    (s === xe && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(i) ||
                      (i !== he && i !== de && i !== ge) ||
                      (n = i);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  l[n] || (l[n] = {}),
                  !r[n][u] && ((l[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var a = Object.keys(l), o = 0; o < a.length; o++) {
                var i = a[o],
                  s = oe()({}, r[i], l[i]);
                r[i] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        $e = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        Be = (function () {
          var e = Date.now();
          return function (t) {
            var n = Date.now();
            n - e > 16
              ? ((e = n), t(n))
              : setTimeout(function () {
                  Be(t);
                }, 0);
          };
        })(),
        He = function (e) {
          return clearTimeout(e);
        },
        Ve =
          "undefined" !== typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              Be
            : n.g.requestAnimationFrame || Be,
        We =
          "undefined" !== typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              He
            : n.g.cancelAnimationFrame || He,
        Qe = function (e) {
          return (
            console && "function" === typeof console.warn && console.warn(e)
          );
        },
        qe = null,
        Ye = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            l = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            f = e.title,
            d = e.titleAttributes;
          Xe(ce.BODY, r), Xe(ce.HTML, l), Je(f, d);
          var p = {
              baseTag: Ge(ce.BASE, n),
              linkTags: Ge(ce.LINK, a),
              metaTags: Ge(ce.META, o),
              noscriptTags: Ge(ce.NOSCRIPT, i),
              scriptTags: Ge(ce.SCRIPT, u),
              styleTags: Ge(ce.STYLE, c),
            },
            m = {},
            h = {};
          Object.keys(p).forEach(function (e) {
            var t = p[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (m[e] = n), r.length && (h[e] = p[e].oldTags);
          }),
            t && t(),
            s(e, m, h);
        },
        Ke = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        Je = function (e, t) {
          "undefined" !== typeof e &&
            document.title !== e &&
            (document.title = Ke(e)),
            Xe(ce.TITLE, t);
        },
        Xe = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(Pe),
                l = r ? r.split(",") : [],
                a = [].concat(l),
                o = Object.keys(t),
                i = 0;
              i < o.length;
              i++
            ) {
              var s = o[i],
                u = t[s] || "";
              n.getAttribute(s) !== u && n.setAttribute(s, u),
                -1 === l.indexOf(s) && l.push(s);
              var c = a.indexOf(s);
              -1 !== c && a.splice(c, 1);
            }
            for (var f = a.length - 1; f >= 0; f--) n.removeAttribute(a[f]);
            l.length === a.length
              ? n.removeAttribute(Pe)
              : n.getAttribute(Pe) !== o.join(",") &&
                n.setAttribute(Pe, o.join(","));
          }
        },
        Ge = function (e, t) {
          var n = document.head || document.querySelector(ce.HEAD),
            r = n.querySelectorAll(e + "[" + Pe + "]"),
            l = Array.prototype.slice.call(r),
            a = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === he) n.innerHTML = t.innerHTML;
                    else if (r === de)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var i = "undefined" === typeof t[r] ? "" : t[r];
                      n.setAttribute(r, i);
                    }
                n.setAttribute(Pe, "true"),
                  l.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? l.splice(o, 1)
                    : a.push(n);
              }),
            l.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            a.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: l, newTags: a }
          );
        },
        Ze = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r =
              "undefined" !== typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        et = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[ke[n] || n] = e[n]), t;
          }, t);
        },
        tt = function (e, n, r) {
          switch (e) {
            case ce.TITLE:
              return {
                toComponent: function () {
                  return (function (e, n, r) {
                    var l,
                      a = (((l = { key: n })[Pe] = !0), l),
                      o = et(r, a);
                    return [t.createElement(ce.TITLE, o, n)];
                  })(0, n.title, n.titleAttributes);
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var l = Ze(n),
                      a = Ke(t);
                    return l
                      ? "<" +
                          e +
                          " " +
                          Pe +
                          '="true" ' +
                          l +
                          ">" +
                          Fe(a, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          " " +
                          Pe +
                          '="true">' +
                          Fe(a, r) +
                          "</" +
                          e +
                          ">";
                  })(e, n.title, n.titleAttributes, r);
                },
              };
            case ie:
            case se:
              return {
                toComponent: function () {
                  return et(n);
                },
                toString: function () {
                  return Ze(n);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, n) {
                    return n.map(function (n, r) {
                      var l,
                        a = (((l = { key: r })[Pe] = !0), l);
                      return (
                        Object.keys(n).forEach(function (e) {
                          var t = ke[e] || e;
                          if (t === he || t === de) {
                            var r = n.innerHTML || n.cssText;
                            a.dangerouslySetInnerHTML = { __html: r };
                          } else a[t] = n[e];
                        }),
                        t.createElement(e, a)
                      );
                    });
                  })(e, n);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var l = Object.keys(r)
                          .filter(function (e) {
                            return !(e === he || e === de);
                          })
                          .reduce(function (e, t) {
                            var l =
                              "undefined" === typeof r[t]
                                ? t
                                : t + '="' + Fe(r[t], n) + '"';
                            return e ? e + " " + l : l;
                          }, ""),
                        a = r.innerHTML || r.cssText || "",
                        o = -1 === Te.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        " " +
                        Pe +
                        '="true" ' +
                        l +
                        (o ? "/>" : ">" + a + "</" + e + ">")
                      );
                    }, "");
                  })(e, n, r);
                },
              };
          }
        },
        nt = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            l = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            s = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            f = void 0 === c ? "" : c,
            d = e.titleAttributes;
          return {
            base: tt(ce.BASE, t, r),
            bodyAttributes: tt(ie, n, r),
            htmlAttributes: tt(se, l, r),
            link: tt(ce.LINK, a, r),
            meta: tt(ce.META, o, r),
            noscript: tt(ce.NOSCRIPT, i, r),
            script: tt(ce.SCRIPT, s, r),
            style: tt(ce.STYLE, u, r),
            title: tt(ce.TITLE, { title: f, titleAttributes: d }, r),
          };
        },
        rt = (function (e) {
          var n, r;
          return (
            (r = n =
              (function (n) {
                function r() {
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, r),
                    (function (e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" !== typeof t && "function" !== typeof t)
                        ? e
                        : t;
                    })(this, n.apply(this, arguments))
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" !== typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(r, n),
                  (r.prototype.shouldComponentUpdate = function (e) {
                    return !le()(this.props, e);
                  }),
                  (r.prototype.mapNestedChildrenToProps = function (e, t) {
                    if (!t) return null;
                    switch (e.type) {
                      case ce.SCRIPT:
                      case ce.NOSCRIPT:
                        return { innerHTML: t };
                      case ce.STYLE:
                        return { cssText: t };
                    }
                    throw new Error(
                      "<" +
                        e.type +
                        " /> elements are self-closing and can not contain children. Refer to our API for more information."
                    );
                  }),
                  (r.prototype.flattenArrayTypeChildren = function (e) {
                    var t,
                      n = e.child,
                      r = e.arrayTypeChildren,
                      l = e.newChildProps,
                      a = e.nestedChildren;
                    return Le(
                      {},
                      r,
                      (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        Le({}, l, this.mapNestedChildrenToProps(n, a)),
                      ])),
                      t)
                    );
                  }),
                  (r.prototype.mapObjectTypeChildren = function (e) {
                    var t,
                      n,
                      r = e.child,
                      l = e.newProps,
                      a = e.newChildProps,
                      o = e.nestedChildren;
                    switch (r.type) {
                      case ce.TITLE:
                        return Le(
                          {},
                          l,
                          (((t = {})[r.type] = o),
                          (t.titleAttributes = Le({}, a)),
                          t)
                        );
                      case ce.BODY:
                        return Le({}, l, { bodyAttributes: Le({}, a) });
                      case ce.HTML:
                        return Le({}, l, { htmlAttributes: Le({}, a) });
                    }
                    return Le({}, l, (((n = {})[r.type] = Le({}, a)), n));
                  }),
                  (r.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                    var n = Le({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        var r;
                        n = Le({}, n, (((r = {})[t] = e[t]), r));
                      }),
                      n
                    );
                  }),
                  (r.prototype.warnOnInvalidChildren = function (e, t) {
                    return !0;
                  }),
                  (r.prototype.mapChildrenToProps = function (e, n) {
                    var r = this,
                      l = {};
                    return (
                      t.Children.forEach(e, function (e) {
                        if (e && e.props) {
                          var t = e.props,
                            a = t.children,
                            o = (function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              return Object.keys(e).reduce(function (t, n) {
                                return (t[_e[n] || n] = e[n]), t;
                              }, t);
                            })(Ie(t, ["children"]));
                          switch ((r.warnOnInvalidChildren(e, a), e.type)) {
                            case ce.LINK:
                            case ce.META:
                            case ce.NOSCRIPT:
                            case ce.SCRIPT:
                            case ce.STYLE:
                              l = r.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: l,
                                newChildProps: o,
                                nestedChildren: a,
                              });
                              break;
                            default:
                              n = r.mapObjectTypeChildren({
                                child: e,
                                newProps: n,
                                newChildProps: o,
                                nestedChildren: a,
                              });
                          }
                        }
                      }),
                      (n = this.mapArrayTypeChildrenToProps(l, n))
                    );
                  }),
                  (r.prototype.render = function () {
                    var n = this.props,
                      r = n.children,
                      l = Ie(n, ["children"]),
                      a = Le({}, l);
                    return (
                      r && (a = this.mapChildrenToProps(r, a)),
                      t.createElement(e, a)
                    );
                  }),
                  Oe(r, null, [
                    {
                      key: "canUseDOM",
                      set: function (t) {
                        e.canUseDOM = t;
                      },
                    },
                  ]),
                  r
                );
              })(t.Component)),
            (n.propTypes = {
              base: ee().object,
              bodyAttributes: ee().object,
              children: ee().oneOfType([ee().arrayOf(ee().node), ee().node]),
              defaultTitle: ee().string,
              defer: ee().bool,
              encodeSpecialCharacters: ee().bool,
              htmlAttributes: ee().object,
              link: ee().arrayOf(ee().object),
              meta: ee().arrayOf(ee().object),
              noscript: ee().arrayOf(ee().object),
              onChangeClientState: ee().func,
              script: ee().arrayOf(ee().object),
              style: ee().arrayOf(ee().object),
              title: ee().string,
              titleAttributes: ee().object,
              titleTemplate: ee().string,
            }),
            (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (n.peek = e.peek),
            (n.rewind = function () {
              var t = e.rewind();
              return (
                t ||
                  (t = nt({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                  })),
                t
              );
            }),
            r
          );
        })(
          ne()(
            function (e) {
              return {
                baseTag: De([pe, we], e),
                bodyAttributes: Ae(ie, e),
                defer: $e(e, je),
                encode: $e(e, Ne),
                htmlAttributes: Ae(se, e),
                linkTags: Ue(ce.LINK, [xe, pe], e),
                metaTags: Ue(ce.META, [ve, fe, me, ye, ge], e),
                noscriptTags: Ue(ce.NOSCRIPT, [he], e),
                onChangeClientState: Me(e),
                scriptTags: Ue(ce.SCRIPT, [be, he], e),
                styleTags: Ue(ce.STYLE, [de], e),
                title: Re(e),
                titleAttributes: Ae(ue, e),
              };
            },
            function (e) {
              qe && We(qe),
                e.defer
                  ? (qe = Ve(function () {
                      Ye(e, function () {
                        qe = null;
                      });
                    }))
                  : (Ye(e), (qe = null));
            },
            nt
          )(function () {
            return null;
          })
        );
      rt.renderStatic = rt.rewind;
      const lt = { round: "rounded-md" },
        at = {
          fill: {
            blue_gray_100_87: "bg-[#d9d9d987]",
            white_A700: "bg-[#ffffff] text-[#212b36]",
            blue_500: "bg-[#1e99f5] text-[#000000]",
            black_900_01: "bg-[#000000] text-[#ffffff]",
            gray_900_01: "bg-[#1f1f1f] text-[#ffffff]",
          },
          outline: {
            blue_gray_100:
              "border-[#d9d9d9] border border-solid text-[#000000]",
          },
        },
        ot = {
          "2xl": "h-[5.25rem] px-[1.63rem] text-[2.25rem]",
          xs: "h-[2.00rem] px-[0.25rem]",
          xl: "h-[3.50rem] px-[2.13rem] text-[1.06rem]",
          lg: "h-[3.25rem] px-[2.13rem] text-[0.75rem]",
          sm: "h-[2.00rem] px-[0.75rem] text-[0.88rem]",
          md: "h-[2.63rem] px-[2.13rem] text-[1.00rem]",
        },
        it = (e) => {
          var t;
          let {
            children: n,
            className: r = "",
            leftIcon: l,
            rightIcon: a,
            shape: o,
            variant: i = "fill",
            size: s = "md",
            color: u = "gray_900_01",
            ...c
          } = e;
          return (0, H.jsxs)("button", {
            className: `${r} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
              o && lt[o]
            } ${s && ot[s]} ${
              i && (null === (t = at[i]) || void 0 === t ? void 0 : t[u])
            }`,
            ...c,
            children: [!!l && l, n, !!a && a],
          });
        },
        st = {
          primary:
            "border-[#000000] border border-solid checked:border-[#000000] checked:border-[3px] checked:border-solid checked:bg-[#000000] checked:focus:bg-[#000000] checked:focus:border-[#000000] checked:hover:bg-[#000000] checked:hover:border-[#000000]",
        },
        ut = { xs: "h-[0.63rem] w-[0.63rem] rounded-sm" },
        ct = t.forwardRef((e, t) => {
          let {
            className: n = "",
            name: r,
            label: l,
            id: a = "checkbox_id",
            checked: o = !1,
            onChange: i,
            variant: s = "primary",
            size: u = "xs",
            ...c
          } = e;
          return (0, H.jsxs)("div", {
            className: `${n} flex items-center gap-[0.31rem] cursor-pointer`,
            children: [
              (0, H.jsx)("input", {
                className: `${ut[u] || ""} ${st[s] || ""}`,
                ref: t,
                type: "checkbox",
                checked: o,
                name: r,
                onChange: (e) => {
                  i && i(e);
                },
                id: a,
                ...c,
              }),
              !!l && (0, H.jsx)("label", { htmlFor: a, children: l }),
            ],
          });
        }),
        ft = {
          textxs: "text-[0.69rem] font-medium",
          texts: "text-[0.75rem] font-medium",
          textlg: "text-[1.00rem] font-medium",
          textxl: "text-[1.13rem] font-medium",
          text3xl: "text-[1.38rem] font-medium",
          text4xl:
            "text-[2.00rem] font-medium md:text-[1.88rem] sm:text-[1.75rem]",
          headingxs: "text-[0.88rem] font-bold",
          headings: "text-[1.00rem] font-bold",
          headingmd: "text-[1.13rem] font-semibold",
          headinglg: "text-[1.25rem] font-semibold",
          headingxl: "text-[1.50rem] font-semibold md:text-[1.38rem]",
          heading2xl:
            "text-[1.75rem] font-semibold md:text-[1.63rem] sm:text-[1.50rem]",
          heading3xl:
            "text-[2.00rem] font-bold md:text-[1.88rem] sm:text-[1.75rem]",
          heading4xl:
            "text-[2.50rem] font-bold md:text-[2.38rem] sm:text-[2.25rem]",
        },
        dt = (e) => {
          let {
            children: t,
            className: n = "",
            size: r = "headingmd",
            as: l,
            ...a
          } = e;
          const o = l || "h6";
          return (0, H.jsx)(o, {
            className: `text-[#81859f] font-[Barlow] ${n} ${ft[r]}`,
            ...a,
            children: t,
          });
        },
        pt = (0, t.createContext)(),
        mt = (e) => {
          let { children: n } = e;
          const [r, l] = (0, t.useState)(() => {
            const e = localStorage.getItem("cart");
            return e ? JSON.parse(e) : [];
          });
          return (
            (0, t.useEffect)(() => {
              const e = (e) => {
                if ("cart" === e.key) {
                  const t = JSON.parse(e.newValue);
                  l(t);
                }
              };
              return (
                window.addEventListener("storage", e),
                () => {
                  window.removeEventListener("storage", e);
                }
              );
            }, []),
            (0, H.jsx)(pt.Provider, {
              value: {
                cart: r,
                addToCart: (e) => {
                  l((t) => {
                    const n = t.findIndex((t) => t.id === e.id);
                    let r;
                    return (
                      (r =
                        -1 !== n
                          ? t.map((e, t) =>
                              t === n ? { ...e, quantity: e.quantity + 1 } : e
                            )
                          : [...t, { ...e, quantity: 1 }]),
                      localStorage.setItem("cart", JSON.stringify(r)),
                      r
                    );
                  }),
                    console.log("Product added to cart:", e);
                },
                removeFromCart: (e) => {
                  l((t) => {
                    const n = t.filter((t) => t.id !== e);
                    return localStorage.setItem("cart", JSON.stringify(n)), n;
                  });
                },
                incrementQuantity: (e) => {
                  l((t) => {
                    const n = t.map((t) =>
                      t.id === e ? { ...t, quantity: t.quantity + 1 } : t
                    );
                    return localStorage.setItem("cart", JSON.stringify(n)), n;
                  });
                },
                decrementQuantity: (e) => {
                  l((t) => {
                    const n = t.map((t) =>
                      t.id === e && t.quantity > 1
                        ? { ...t, quantity: t.quantity - 1 }
                        : t
                    );
                    return localStorage.setItem("cart", JSON.stringify(n)), n;
                  });
                },
              },
              children: n,
            })
          );
        },
        ht = () => (0, t.useContext)(pt);
      function gt(e) {
        let { product: t, ...n } = e;
        const { addToCart: r } = ht();
        return (0, H.jsxs)("div", {
          ...n,
          className: `${n.className} flex flex-col items-center w-full gap-[2.00rem] p-[1.00rem] border-[#f1f1f1] border border-solid rounded-[16px]`,
          children: [
            (0, H.jsx)("div", {
              className:
                "bg-[#f2f2f2] p-[0.88rem] flex self-stretch rounded-1g",
              children: (0, H.jsx)(yt, {
                src: t.image,
                alt: "Recliner Image",
                className: "w-[12.75rem] h-[12.75rem] object-cover",
              }),
            }),
            (0, H.jsxs)("div", {
              className:
                "gap-[1.00rem] flex flex-col items-center self-stretch",
              children: [
                (0, H.jsxs)("div", {
                  className:
                    "mx-[0.50rem] gap-[1.00rem] flex flex-col self-stretch",
                  children: [
                    (0, H.jsx)("div", {
                      className: "flex",
                      children: (0, H.jsx)(dt, {
                        as: "h6",
                        className: "!text-[#343434]",
                        children: t.name,
                      }),
                    }),
                    (0, H.jsxs)("div", {
                      className:
                        "gap-[0.75rem] mr-[0.38rem] flex justify-center",
                      children: [
                        (0, H.jsxs)("div", {
                          className:
                            "gap-[0.50rem] flex flex-1 flex-col justify-center",
                          children: [
                            (0, H.jsxs)(dt, {
                              as: "h6",
                              className: "!text-[#343434] !font-bold",
                              children: ["\u20ac", t.price],
                            }),
                            (0, H.jsxs)(dt, {
                              size: "textxl",
                              as: "p",
                              className: "!text-[#ababab] line-through",
                              children: ["\u20ac", t.oldPrice],
                            }),
                          ],
                        }),
                        (0, H.jsx)(dt, {
                          as: "h6",
                          className: "!text-[#b82e2e]",
                          children: t.offer,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, H.jsx)(bt, {
                  as: "p",
                  className: "leading-[1.00rem] w-[96%] self-end",
                  children: t.desc,
                }),
              ],
            }),
            (0, H.jsx)(it, {
              shape: "round",
              leftIcon: (0, H.jsx)(yt, {
                src: "images/img_shopping_bag.svg",
                alt: "Thumbs Up",
                className: "mb-[0.13rem] w-[1.00rem] h-[1.13rem]",
              }),
              className:
                "!rounded-[5px] gap-[0.75rem] self-stretch font-semibold",
              onClick: () => {
                const e = {
                  id: t.id,
                  image: t.image,
                  name: t.name,
                  price: t.price,
                };
                r(e);
              },
              children: "Add To Cart",
            }),
          ],
        });
      }
      const vt = (e) => {
          let {
            className: t = "",
            name: n = "",
            placeholder: r = "",
            type: l = "text",
            label: a = "",
            prefix: o,
            suffix: i,
            onChange: s,
            size: u = "h-10 px-2 text-base",
            variant: c = "border border-gray-300 bg-white",
            shape: f = "rounded-md",
            ...d
          } = e;
          return (0, H.jsxs)("label", {
            className: `relative flex items-center ${t}`,
            children: [
              !!o && o,
              (0, H.jsx)("input", {
                type: l,
                name: n,
                placeholder: " ",
                onChange: s,
                className: `peer ${u} ${c} ${f} focus:outline-none`,
                ...d,
              }),
              (0, H.jsx)("span", {
                className:
                  "absolute left-2 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm",
                children: a || r,
              }),
              !!i && i,
            ],
          });
        },
        yt = (e) => {
          let {
            className: t,
            src: n = "defaultNoData.png",
            alt: r = "testImg",
            href: l = "",
            ...a
          } = e;
          const o = (0, H.jsx)("img", {
            className: t,
            src: n,
            alt: r,
            ...a,
            loading: "lazy",
          });
          return l ? (0, H.jsx)("a", { href: l, ...a, children: o }) : o;
        },
        xt = {
          textmd: "text-[0.88rem] font-normal",
          text2xl: "text-[1.25rem] font-normal",
        },
        bt = (e) => {
          let {
            children: t,
            className: n = "",
            as: r,
            size: l = "text2xl",
            ...a
          } = e;
          const o = r || "p";
          return (0, H.jsx)(o, {
            className: `text-[#646464] font-['Barlow'] ${n} ${xt[l]}`,
            ...a,
            children: t,
          });
        };
      function wt() {
        const { signup: e } = (0, t.useContext)(V),
          n = k(),
          [r, l] = (0, t.useState)(""),
          [a, o] = (0, t.useState)(""),
          [i, s] = (0, t.useState)(!1),
          [u, c] = (0, t.useState)("");
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsxs)(rt, {
              children: [
                (0, H.jsx)("title", {
                  children: "Signup - Create Your FurniFlex Account",
                }),
                (0, H.jsx)("meta", {
                  name: "description",
                  content:
                    "Welcome back to FurniFlex! Enter your credentials to access your account and continue enjoying our curated collection of quality products. Sign up now.",
                }),
              ],
            }),
            (0, H.jsxs)("div", {
              className: "flex w-full items-center bg-[#ffffff] md:flex-col",
              children: [
                (0, H.jsx)("div", {
                  className:
                    "bg-[#fafafa] border-[#f5f5f5] md:px-[1.25rem] m-[10rem] p-[1.13rem] gap-[0.75rem] w-[40%] flex flex-col rounded-lg border border-solid md:w-full",
                  children: (0, H.jsx)("div", {
                    className:
                      "w-full justify-center rounded-lg border border-solid border-[#f5f5f5] bg-[#fafafa] p-[1.50rem] md:w-full sm:p-[1.25rem]",
                    children: (0, H.jsxs)("div", {
                      className: "gap-[0.88rem] mt-[0.38rem] flex flex-col",
                      children: [
                        (0, H.jsxs)("div", {
                          className: "gap-[0.38rem] flex flex-col items-center",
                          children: [
                            (0, H.jsx)(dt, {
                              size: "headingxl",
                              as: "h1",
                              className: "!text-[#000000]",
                              children: "Welcome To",
                            }),
                            (0, H.jsxs)("div", {
                              className:
                                "flex flex-col items-center self-stretch",
                              children: [
                                (0, H.jsxs)(dt, {
                                  size: "heading3xl",
                                  as: "h2",
                                  className: "!text-[2.50rem] !text-[#4977ee]",
                                  children: [
                                    (0, H.jsx)("span", {
                                      className: "text-[#000000]",
                                      children: "Furni",
                                    }),
                                    (0, H.jsx)("span", {
                                      className: "text-[#1e99f5]",
                                      children: "Flex",
                                    }),
                                  ],
                                }),
                                (0, H.jsx)(dt, {
                                  as: "h3",
                                  className:
                                    "relative mt-[-0.25rem] !text-[#707070]",
                                  children: "Signup For you desired products",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, H.jsxs)("form", {
                          onSubmit: (t) => {
                            t.preventDefault(),
                              i
                                ? (e(r, a), n("/store"))
                                : (c("You must agree to the terms and policy"),
                                  console.log(
                                    "You must agree to the terms and policy"
                                  ));
                          },
                          className: "flex gap-[0.88rem] flex-col",
                          children: [
                            (0, H.jsxs)("div", {
                              className: "gap-[0.88rem] flex sm:flex-col",
                              children: [
                                (0, H.jsx)(vt, {
                                  type: "text",
                                  name: "First Name",
                                  placeholder: "First Name (optional)",
                                  floating: "contained",
                                  className:
                                    "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                                }),
                                (0, H.jsx)(vt, {
                                  type: "text",
                                  name: "Last Name",
                                  placeholder: "Last Name (optional)",
                                  floating: "contained",
                                  className:
                                    "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                                }),
                              ],
                            }),
                            (0, H.jsx)(vt, {
                              type: "email",
                              name: "Email",
                              placeholder: "Email",
                              floating: "contained",
                              className:
                                "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                              value: r,
                              onChange: (e) => l(e.target.value),
                            }),
                            (0, H.jsx)("div", {
                              className:
                                "flex flex-col items-end gap-[0.50rem]",
                              children: (0, H.jsx)(vt, {
                                type: "password",
                                name: "Password",
                                placeholder: "Password",
                                floating: "contained",
                                suffix: (0, H.jsx)(yt, {
                                  src: "images/img_tooltip.svg",
                                  alt: "Tooltip",
                                  className: "h-[3.00rem] w-[2.88rem]",
                                }),
                                className:
                                  "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                                value: a,
                                onChange: (e) => o(e.target.value),
                              }),
                            }),
                            (0, H.jsxs)("div", {
                              className: "flex flex-col gap-[0.88rem]",
                              children: [
                                (0, H.jsx)("div", {
                                  className: "flex items-center gap-[0.25rem]",
                                  children: (0, H.jsx)(ct, {
                                    name: "Terms Checkbox",
                                    label: "I agree to the Terms & Policy",
                                    id: "TermsCheckbox",
                                    className:
                                      "font-['Poppins'] text-[0.88rem] font-medium text-[#000000]",
                                    checked: i,
                                    onChange: (e) => {
                                      s(e.target.checked), u && c("");
                                    },
                                  }),
                                }),
                                u &&
                                  (0, H.jsx)(bt, {
                                    size: "textsm",
                                    as: "p",
                                    className: "text-red-500",
                                    children: u,
                                  }),
                                (0, H.jsx)(it, {
                                  type: "submit",
                                  color: "black_900_01",
                                  size: "xl",
                                  shape: "round",
                                  className:
                                    "self-stretch font-semibold capitalize",
                                  children: "Sign Up",
                                }),
                              ],
                            }),
                            (0, H.jsxs)("div", {
                              className: "flex flex-col gap-[0.88rem]",
                              children: [
                                (0, H.jsxs)("div", {
                                  className:
                                    "mx-[1.00rem] flex flex-col items-center justify-center md:mx-0",
                                  children: [
                                    (0, H.jsx)(dt, {
                                      size: "texts",
                                      as: "h2",
                                      className:
                                        "relative z-[1] mt-3 flex items-center justify-center bg-[#fafafa] px-[0.25rem] !text-[#000000]",
                                      children: "or",
                                    }),
                                    (0, H.jsx)("div", {
                                      className:
                                        "bg-[#f0efef] mt-[-0.25rem] h-[0.13rem] relative w-full self-stretch",
                                    }),
                                  ],
                                }),
                                (0, H.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center gap-[1.13rem]",
                                  children: [
                                    (0, H.jsxs)("div", {
                                      className:
                                        "flex gap-[1.00rem] self-stretch",
                                      children: [
                                        (0, H.jsx)(it, {
                                          color: "blue_gray_100",
                                          size: "lg",
                                          variant: "outline",
                                          shape: "round",
                                          leftIcon: (0, H.jsx)(yt, {
                                            src: "images/gogl.svg",
                                            alt: "Sign up with Google",
                                            className:
                                              "h-[1.50rem] w-[1.50rem]",
                                          }),
                                          className:
                                            "w-full gap-[0.63rem] font-medium",
                                          children: "Sign up with Google",
                                        }),
                                        (0, H.jsx)(it, {
                                          color: "blue_gray_100",
                                          size: "lg",
                                          variant: "outline",
                                          shape: "round",
                                          leftIcon: (0, H.jsx)(yt, {
                                            src: "images/appl.svg",
                                            alt: "Sign up with Apple",
                                            className:
                                              "h-[1.50rem] w-[1.50rem]",
                                          }),
                                          className:
                                            "w-full gap-[0.63rem] font-medium",
                                          children: "Sign up with Apple",
                                        }),
                                      ],
                                    }),
                                    (0, H.jsxs)(bt, {
                                      size: "textmd",
                                      as: "p",
                                      className:
                                        "mb-[1.13rem] !font-medium !text-[#000000]",
                                      children: [
                                        (0, H.jsx)("span", {
                                          className: "text-[#000000]",
                                          children: "Have an account? ",
                                        }),
                                        (0, H.jsx)("span", {
                                          className: "text-[#0f3cde]",
                                          children: (0, H.jsx)(J, {
                                            to: "/Login",
                                            className: "text-inherit inline",
                                            children: "Sign In",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, H.jsxs)("div", {
                  className:
                    "relative h-[64.00rem] flex-1 content-center justify-center md:h-auto md:w-full md:flex-none md:self-stretch md:px-[1.25rem]",
                  children: [
                    (0, H.jsx)("img", {
                      src: "images/img_chris_lee_7011t.png",
                      alt: "Profile Image",
                      className: "m-auto h-[64.00rem] object-contain",
                    }),
                    (0, H.jsx)("div", {
                      className:
                        "w-[72%] content-center absolute bottom-0 left-0 right-0 top-0 m-auto h-max",
                      children: (0, H.jsxs)("div", {
                        className:
                          "content-center flex flex-col mx-auto items-center md:mx-0",
                        children: [
                          (0, H.jsx)(it, {
                            color: "blue_500",
                            size: "2xl",
                            className:
                              "rounded-[42px]  mx-auto min-w-[5.50rem]  uppercase italic",
                            children: "F",
                          }),
                          (0, H.jsxs)(dt, {
                            size: "heading4xl",
                            as: "h2",
                            className: "!text-[#ffffff]",
                            children: [
                              (0, H.jsx)("span", {
                                className: "text-[#ffffff]",
                                children: "Furni",
                              }),
                              (0, H.jsx)("span", {
                                className: "text-[#1e99f5]",
                                children: "Flex",
                              }),
                            ],
                          }),
                          (0, H.jsx)(dt, {
                            size: "textlg",
                            as: "h2",
                            className:
                              "max-w-[400px] text-center leading-[1.19rem] !text-[#c7c4c4] ",
                            children: (0, H.jsx)("span", {
                              children:
                                "Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function kt() {
        const [e, n] = (0, t.useState)(""),
          [r, l] = (0, t.useState)(""),
          [a, o] = (0, t.useState)(""),
          i = k(),
          { login: s } = (0, t.useContext)(V);
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsxs)(rt, {
              children: [
                (0, H.jsx)("title", {
                  children: "Login - Access Your FurniFlex Account",
                }),
                (0, H.jsx)("meta", {
                  name: "description",
                  content:
                    "Welcome back to FurniFlex! Enter your credentials to access your account and continue enjoying our curated collection of quality products. Sign in now.",
                }),
              ],
            }),
            (0, H.jsxs)("div", {
              className: "flex w-full items-center bg-[#ffffff] md:flex-col",
              children: [
                (0, H.jsx)("div", {
                  className:
                    "bg-[#fafafa] border-[#f5f5f5] md:px-[1.25rem] m-[10rem] p-[1.13rem] gap-[0.75rem] w-[40%] flex flex-col rounded-lg border border-solid md:w-full",
                  children: (0, H.jsx)("div", {
                    className:
                      "w-[88%] rounded-lg border border-solid border-[#f5f5f5] bg-[#fafafa] p-[1.50rem] md:w-full sm:p-[1.25rem]",
                    children: (0, H.jsxs)("div", {
                      className: "mb-[2.13rem] flex flex-col gap-[0.75rem]",
                      children: [
                        (0, H.jsxs)("div", {
                          className: "flex flex-col gap-[0.88rem]",
                          children: [
                            (0, H.jsx)("div", {
                              className: "py-[1.50rem] sm:py-[1.25rem]",
                              children: (0, H.jsxs)("div", {
                                className: "flex flex-col items-start",
                                children: [
                                  (0, H.jsx)(dt, {
                                    size: "text4xl",
                                    as: "h1",
                                    className: "!text-[#000000]",
                                    children: "Welcome Back!",
                                  }),
                                  (0, H.jsx)(dt, {
                                    size: "textlg",
                                    as: "h2",
                                    className:
                                      "relative mt-[-0.25rem] !text-[#707070]",
                                    children:
                                      "Enter your Credentials to access your account",
                                  }),
                                ],
                              }),
                            }),
                            (0, H.jsx)(vt, {
                              type: "email",
                              name: "Email Field",
                              placeholder: "Email address",
                              floating: "contained",
                              className:
                                "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                              value: e,
                              onChange: (e) => n(e.target.value),
                            }),
                            (0, H.jsxs)("div", {
                              className:
                                "flex flex-col items-end gap-[0.50rem]",
                              children: [
                                (0, H.jsx)(vt, {
                                  type: "password",
                                  name: "Password Field",
                                  placeholder: "Password",
                                  floating: "contained",
                                  suffix: (0, H.jsx)(yt, {
                                    src: "images/img_tooltip.svg",
                                    alt: "Tooltip",
                                    className: "h-[3.00rem] w-[2.88rem]",
                                  }),
                                  className:
                                    "rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full",
                                  value: r,
                                  onChange: (e) => l(e.target.value),
                                }),
                                (0, H.jsx)("a", {
                                  href: "#",
                                  children: (0, H.jsx)(bt, {
                                    size: "textmd",
                                    as: "p",
                                    className: "!font-medium !text-[#1e99f5]",
                                    children: "Forgot Password",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, H.jsxs)("div", {
                          className: "flex flex-col gap-[0.88rem]",
                          children: [
                            (0, H.jsx)(ct, {
                              name: "Terms Checkbox",
                              label: "I agree to the Terms & Policy",
                              id: "TermsCheckbox",
                              className:
                                "gap-[0.25rem] font-['Poppins'] text-[0.88rem] font-medium text-[#000000]",
                            }),
                            (0, H.jsx)(it, {
                              color: "black_900_01",
                              size: "xl",
                              shape: "round",
                              className:
                                "self-stretch font-semibold capitalize",
                              onClick: () => {
                                s(e, r)
                                  ? i("/store")
                                  : (o("Invalid email or password"),
                                    console.log("Invalid email or password"),
                                    alert("Invalid email or password"));
                              },
                              children: "Sign In",
                            }),
                            a &&
                              (0, H.jsx)(bt, {
                                size: "textmd",
                                as: "p",
                                className: "!font-medium !text-red-500",
                                children: a,
                              }),
                          ],
                        }),
                        (0, H.jsxs)("div", {
                          className: "flex flex-col gap-[0.88rem]",
                          children: [
                            (0, H.jsxs)("div", {
                              className:
                                "mx-[1.00rem] flex flex-col items-center justify-center md:mx-0",
                              children: [
                                (0, H.jsx)(dt, {
                                  size: "texts",
                                  as: "h3",
                                  className:
                                    "relative z-[1] flex items-center justify-center bg-[#fafafa] px-[0.25rem] !text-[#000000]",
                                  children: "or",
                                }),
                                (0, H.jsx)("div", {
                                  className:
                                    "bg-[#f0efef] mt-[-0.25rem] h-[0.13rem] relative w-full self-stretch",
                                }),
                              ],
                            }),
                            (0, H.jsxs)("div", {
                              className:
                                "flex flex-col items-center gap-[1.13rem]",
                              children: [
                                (0, H.jsxs)("div", {
                                  className: "flex gap-[1.00rem] self-stretch",
                                  children: [
                                    (0, H.jsx)(it, {
                                      color: "blue_gray_100",
                                      size: "lg",
                                      variant: "outline",
                                      shape: "round",
                                      leftIcon: (0, H.jsx)(yt, {
                                        src: "images/gogl.svg",
                                        alt: "Google Icon",
                                        className: "h-[1.50rem] w-[1.50rem]",
                                      }),
                                      className:
                                        "w-full gap-[0.63rem] font-medium",
                                      children: "Sign in with Google",
                                    }),
                                    (0, H.jsx)(it, {
                                      color: "blue_gray_100",
                                      size: "lg",
                                      variant: "outline",
                                      shape: "round",
                                      leftIcon: (0, H.jsx)(yt, {
                                        src: "images/appl.svg",
                                        alt: "Apple Icon",
                                        className: "h-[1.50rem] w-[1.50rem]",
                                      }),
                                      className:
                                        "w-full gap-[0.63rem] font-medium",
                                      children: "Sign in with Apple",
                                    }),
                                  ],
                                }),
                                (0, H.jsxs)(bt, {
                                  size: "textmd",
                                  as: "p",
                                  className:
                                    "mb-[1.13rem] !font-medium !text-[#000000]",
                                  children: [
                                    (0, H.jsxs)("span", {
                                      className: "text-[#000000]",
                                      children: ["Don't Have an account?", " "],
                                    }),
                                    (0, H.jsx)("span", {
                                      className: "text-[#0f3cde]",
                                      children: (0, H.jsx)(J, {
                                        to: "/signup",
                                        className: "text-inherit inline",
                                        children: "Sign Up",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, H.jsxs)("div", {
                  className:
                    "relative h-[64.00rem] flex-1 content-center justify-center md:h-auto md:w-full md:flex-none md:self-stretch md:px-[1.25rem]",
                  children: [
                    (0, H.jsx)("img", {
                      src: "images/img_chris_lee_7011t.png",
                      alt: "Profile Image",
                      className: "m-auto h-[64.00rem] object-contain",
                    }),
                    (0, H.jsx)("div", {
                      className:
                        "w-[72%] content-center absolute bottom-0 left-0 right-0 top-0 m-auto h-max",
                      children: (0, H.jsxs)("div", {
                        className:
                          "content-center flex flex-col mx-auto items-center md:mx-0",
                        children: [
                          (0, H.jsx)(it, {
                            color: "blue_500",
                            size: "2xl",
                            className:
                              "rounded-[42px] mx-auto min-w-[5.50rem] uppercase italic",
                            children: "F",
                          }),
                          (0, H.jsxs)(dt, {
                            size: "heading4xl",
                            as: "h2",
                            className: "!text-[#ffffff]",
                            children: [
                              (0, H.jsx)("span", {
                                className: "text-[#ffffff]",
                                children: "Furni",
                              }),
                              (0, H.jsx)("span", {
                                className: "text-[#1e99f5]",
                                children: "Flex",
                              }),
                            ],
                          }),
                          (0, H.jsx)(dt, {
                            size: "textlg",
                            as: "h2",
                            className:
                              "max-w-[400px] text-center leading-[1.19rem] !text-[#c7c4c4]",
                            children: (0, H.jsx)("span", {
                              children:
                                "Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function St(e) {
        let { ...t } = e;
        return (0, H.jsx)("footer", {
          ...t,
          className: `${t.className} flex self-stretch justify-center items-end py-[2.00rem] sm:py-[1.25rem] bg-[#0d0d0d]`,
          children: (0, H.jsx)("div", {
            className:
              "container-xs mt-[3.00rem] flex justify-center md:px-[1.25rem]",
            children: (0, H.jsxs)("div", {
              className: "flex w-full flex-col items-center",
              children: [
                (0, H.jsxs)("div", {
                  className:
                    "flex items-start justify-between gap-[1.25rem] self-stretch md:flex-col",
                  children: [
                    (0, H.jsx)(yt, {
                      src: "images/img_footer_logo.png",
                      alt: "Footer Logo",
                      className: "w-[8.38rem] h-[2.38rem]  object-contain",
                    }),
                    (0, H.jsxs)("div", {
                      className:
                        "flex w-[60%] items-start justify-between gap-[1.25rem] self-center md:w-full md:flex-col",
                      children: [
                        (0, H.jsxs)("div", {
                          className:
                            "flex w-[28%] flex-col items-start gap-[1.75rem] self-center md:w-full",
                          children: [
                            (0, H.jsx)(dt, {
                              as: "h6",
                              className: "!text-[#ffffff]",
                              children: "About Us",
                            }),
                            (0, H.jsxs)("ul", {
                              className:
                                "flex flex-col items-start gap-[0.75rem]",
                              children: [
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Master Plan",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Jobs",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Jobs",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Invest",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Invest",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Pressroom",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Pressroom",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Blog",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Blog",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Contact",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Contact",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, H.jsxs)("div", {
                          className:
                            "flex w-[42%] flex-col items-start gap-[1.75rem] md:w-full",
                          children: [
                            (0, H.jsx)(dt, {
                              as: "h6",
                              className: "!text-[#ffffff]",
                              children: "Explore EEVE",
                            }),
                            (0, H.jsxs)("ul", {
                              className:
                                "flex flex-col items-start gap-[0.75rem]",
                              children: [
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Unlock my Robot Power",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "Starlight",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Starlight",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Robot Platform",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "EEVE Roadmap",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, H.jsxs)("div", {
                          className: "flex flex-col items-start gap-[1.75rem]",
                          children: [
                            (0, H.jsx)(dt, {
                              as: "h6",
                              className: "!text-[#ffffff]",
                              children: "Community & Support",
                            }),
                            (0, H.jsxs)("ul", {
                              className:
                                "flex flex-col items-start gap-[0.75rem]",
                              children: [
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Willow X Community",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Developer & Maker Access",
                                    }),
                                  }),
                                }),
                                (0, H.jsx)("li", {
                                  children: (0, H.jsx)("a", {
                                    href: "#",
                                    children: (0, H.jsx)(dt, {
                                      as: "h6",
                                      children: "Special Cases",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, H.jsxs)("div", {
                  className:
                    "border-[#242948] gap-[1.25rem] mt-[6.75rem] flex items-end justify-between self-stretch border-t border-solid md:flex-col",
                  children: [
                    (0, H.jsxs)("div", {
                      className: "flex gap-[0.63rem]",
                      children: [
                        (0, H.jsx)(yt, {
                          src: "images/img_fb.svg",
                          alt: "Facebook Icon",
                          className: "h-[1.25rem] w-[1.25rem]",
                        }),
                        (0, H.jsx)(yt, {
                          src: "images/img_info.svg",
                          alt: "Info Icon",
                          className: "h-[1.25rem] w-[1.25rem]",
                        }),
                        (0, H.jsx)(yt, {
                          src: "images/img_airplane.svg",
                          alt: "Airplane Icon",
                          className: "h-[1.25rem] w-[1.25rem]",
                        }),
                        (0, H.jsx)(yt, {
                          src: "images/img_link.svg",
                          alt: "Link Icon",
                          className: "h-[1.25rem] w-[1.25rem]",
                        }),
                      ],
                    }),
                    (0, H.jsxs)("div", {
                      className: "flex flex-wrap gap-[1.50rem]",
                      children: [
                        (0, H.jsx)("a", {
                          href: "#",
                          children: (0, H.jsx)(dt, {
                            as: "h6",
                            children: "March22 Recap",
                          }),
                        }),
                        (0, H.jsx)("a", {
                          href: "#",
                          children: (0, H.jsx)(dt, {
                            as: "h6",
                            children: "Privacy Policy",
                          }),
                        }),
                        (0, H.jsx)("a", {
                          href: "#",
                          children: (0, H.jsx)(dt, {
                            as: "h6",
                            children: "General Terms",
                          }),
                        }),
                        (0, H.jsx)("a", {
                          href: "Contact",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, H.jsx)(dt, {
                            as: "h6",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                    (0, H.jsx)("a", {
                      href: "#",
                      children: (0, H.jsxs)("div", {
                        className: "mt-[2.38rem] flex gap-[0.50rem]",
                        children: [
                          (0, H.jsx)(yt, {
                            src: "images/img_lightbulb.png",
                            alt: "Lightbulb Icon",
                            className: "h-[1.38rem] object-cover",
                          }),
                          (0, H.jsx)(dt, {
                            as: "h6",
                            children: "United States (English)",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, H.jsx)(dt, {
                  as: "h6",
                  className: "mt-[2.75rem] !text-[#323444]",
                  children: "EEVE \xa9 2024. All rights reserved.",
                }),
              ],
            }),
          }),
        });
      }
      function jt(e) {
        let { ...n } = e;
        const r = k(),
          [l, a] = (0, t.useState)(!1),
          { cart: o } = (0, t.useContext)(pt),
          i = o.length,
          { logout: s } = (0, t.useContext)(V);
        return (0, H.jsx)("header", {
          ...n,
          className: `${n.className} flex self-stretch justify-center items-center py-[2.38rem] sm:py-[1.25rem] border-b border-solid border-[#f1f1f1] bg-[#ffffff]`,
          children: (0, H.jsxs)("div", {
            className:
              "container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]",
            children: [
              (0, H.jsx)(yt, {
                src: "images/img_header_logo.png",
                alt: "Header Logo",
                className: "h-[2.38rem] w-[8.38rem] object-contain",
              }),
              (0, H.jsxs)("ul", {
                className: "flex flex-wrap items-center gap-[0.50rem]",
                children: [
                  (0, H.jsx)("li", {
                    children: (0, H.jsx)("a", {
                      href: "#",
                      className: "cursor-pointer",
                      children: (0, H.jsx)(dt, {
                        size: "textxl",
                        as: "p",
                        className:
                          "px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold",
                        children: "Home",
                      }),
                    }),
                  }),
                  (0, H.jsx)("li", {
                    children: (0, H.jsx)("a", {
                      href: "store",
                      className:
                        "flex items-center justify-center rounded-md bg-[#f7f7f7]",
                      children: (0, H.jsx)(dt, {
                        as: "p",
                        className: "px-[1.25rem] py-[0.50rem] text-[#1f1f1f]",
                        children: "Products",
                      }),
                    }),
                  }),
                  (0, H.jsx)("li", {
                    children: (0, H.jsx)("a", {
                      href: "#",
                      className: "cursor-pointer",
                      children: (0, H.jsx)(dt, {
                        size: "textxl",
                        as: "p",
                        className:
                          "px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold",
                        children: "Categories",
                      }),
                    }),
                  }),
                  (0, H.jsx)("li", {
                    children: (0, H.jsx)("a", {
                      href: "#",
                      className: "cursor-pointer",
                      children: (0, H.jsx)(dt, {
                        size: "textxl",
                        as: "p",
                        className:
                          "px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold",
                        children: "Custom",
                      }),
                    }),
                  }),
                  (0, H.jsx)("li", {
                    children: (0, H.jsx)("a", {
                      href: "#",
                      className: "cursor-pointer",
                      children: (0, H.jsx)(dt, {
                        size: "textxl",
                        as: "p",
                        className:
                          "px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold",
                        children: "Blog",
                      }),
                    }),
                  }),
                ],
              }),
              (0, H.jsxs)("div", {
                className:
                  "flex w-[8%] items-center justify-center gap-[1.50rem] md:w-full",
                children: [
                  (0, H.jsx)("div", {
                    className: "flex-1",
                    children: (0, H.jsxs)("div", {
                      className: "flex items-center justify-end",
                      children: [
                        (0, H.jsx)("a", {
                          href: "#",
                          children: (0, H.jsx)("img", {
                            src: "images/img_thumbs_up.svg",
                            alt: "Thumbs Up Image",
                            className: "mb-[0.25rem] h-[1.13rem] self-end",
                          }),
                        }),
                        (0, H.jsxs)("a", {
                          href: "orderDetails",
                          className:
                            "relative ml-[-1.13rem] flex flex-1 flex-col items-start gap-[0.38rem]",
                          children: [
                            (0, H.jsx)("img", {
                              src: "images/img_settings.svg",
                              alt: "Settings Image",
                              className: "h-[0.38rem]",
                            }),
                            (0, H.jsx)("div", {
                              className:
                                "flex w-[1.00rem] flex-col items-center justify-center self-end rounded-lg bg-[#313131]",
                              children: (0, H.jsx)(dt, {
                                size: "text-xs",
                                as: "p",
                                className: "!text-[0.69rem] !text-[#ffffff]",
                                children: i,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, H.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, H.jsx)("a", {
                        href: "#",
                        onClick: () => {
                          a(!l);
                        },
                        children: (0, H.jsx)("img", {
                          src: "images/img_account.png",
                          alt: "Account Image",
                          className:
                            "h-[2.50rem] w-[2.50rem] rounded-[20px] object-cover cursor-pointer",
                        }),
                      }),
                      l &&
                        (0, H.jsx)("div", {
                          className:
                            "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg",
                          children: (0, H.jsx)("button", {
                            onClick: () => {
                              s(), r("/login"), console.log("Logging out...");
                            },
                            className:
                              "block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100",
                            children: "Logout",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      const Nt = (0, t.createContext)(),
        Ct = (e) => {
          let { children: n } = e;
          const [r, l] = (0, t.useState)([]);
          return (
            (0, t.useEffect)(() => {
              fetch("store/products.json")
                .then((e) => e.json())
                .then((e) => {
                  console.log("Fetched data:", e), l(e);
                })
                .catch((e) => console.error("Error fetching products:", e));
            }, []),
            (0, H.jsx)(Nt.Provider, { value: { products: r }, children: n })
          );
        };
      function Et() {
        const [e, n] = (0, t.useState)("Rocking Chair"),
          { products: r } = (0, t.useContext)(Nt);
        console.log("Products in StorePage:", r);
        const [l, a] = (0, t.useState)(1),
          o = Math.ceil(r.length / 6),
          i = [];
        for (let t = 1; t <= o; t++) i.push(t);
        const s = 6 * l,
          u = s - 6,
          c = r.slice(u, s);
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsxs)(rt, {
              children: [
                (0, H.jsx)("title", {
                  children:
                    "Store - Explore FurniFlex's Exclusive Furniture Deals",
                }),
                (0, H.jsx)("meta", {
                  name: "description",
                  content:
                    "Discover FurniFlex's store for exclusive furniture deals. Shop the latest in rocking chairs, lounge chairs, and more. Add style and comfort to your home today.",
                }),
              ],
            }),
            (0, H.jsxs)("div", {
              className:
                "bg-[#ffffff] sm:gap-[2.75rem] md:gap-[4.13rem] gap-[5.50rem] flex w-full flex-col items-center",
              children: [
                (0, H.jsx)(jt, {}),
                (0, H.jsx)("div", {
                  className: "container-xs md:px-[1.25rem]",
                  children: (0, H.jsxs)("div", {
                    className: "gap-[2.63rem] flex items-start md:flex-col",
                    children: [
                      (0, H.jsx)("div", {
                        className: "w-[22%] md:w-full",
                        children: (0, H.jsx)("div", {
                          className:
                            "border-[#e7e7e7] py-4 gap-2 flex flex-col items-start border-r border-solid",
                          children: [
                            "Rocking Chair",
                            "Lounge Chair",
                            "Side Chair",
                          ].map((t) =>
                            (0, H.jsx)(
                              it,
                              {
                                shape: "round",
                                name: t,
                                className:
                                  "hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold text-xl w-[88%] " +
                                  (e === t
                                    ? "!bg-[#000000] !text-white"
                                    : "!bg-[#ffffff] !text-black"),
                                onClick: () =>
                                  ((t) => {
                                    n(t), console.log(e);
                                  })(t),
                                children: t,
                              },
                              t
                            )
                          ),
                        }),
                      }),
                      (0, H.jsxs)("div", {
                        className:
                          "sm:gap-[2.00rem] self-start gap-[4.00rem] flex flex-1 flex-col items-center md:self-stretch",
                        children: [
                          (0, H.jsx)("div", {
                            className:
                              "gap-[2.00rem] grid grid-cols-3 justify-center self-stretch md:grid-cols-2 sm:grid-cols-1",
                            children: (0, H.jsx)(t.Suspense, {
                              fallback: (0, H.jsx)("div", {
                                children: "Loading feed...",
                              }),
                              children: c.map((e, t) =>
                                (0, H.jsx)(gt, { product: e }, t)
                              ),
                            }),
                          }),
                          (0, H.jsxs)("div", {
                            className: "gap-[0.50rem] flex",
                            children: [
                              (0, H.jsx)(it, {
                                color: "blue_gray_100_87",
                                size: "xs",
                                shape: "round",
                                className: "w-[2.00rem] !rounded",
                                onClick: () => {
                                  l > 1 && a(l - 1);
                                },
                                disabled: 1 === l,
                                children: (0, H.jsx)(yt, {
                                  src: "images/img_arrow_left.svg",
                                }),
                              }),
                              i.map((e) =>
                                (0, H.jsx)(
                                  it,
                                  {
                                    color:
                                      e === l
                                        ? "white_A700"
                                        : "blue_gray_100_87",
                                    size: "sm",
                                    shape: "round",
                                    className:
                                      "min-w-[2.00rem] border-[#0d0d0d] !text-[#0d0d0d] !rounded border border-solid font-bold " +
                                      (e === l
                                        ? "!bg-[#000000] !text-white"
                                        : ""),
                                    onClick: () => {
                                      a(e);
                                    },
                                    children: e,
                                  },
                                  e
                                )
                              ),
                              (0, H.jsx)(it, {
                                color: "blue_gray_100_87",
                                size: "xs",
                                shape: "round",
                                className: "w-[2.00rem] !rounded",
                                onClick: () => {
                                  l < o && a(l + 1);
                                },
                                disabled: l === o,
                                children: (0, H.jsx)(yt, {
                                  src: "images/img_arrow_right.svg",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(St, {}),
              ],
            }),
          ],
        });
      }
      function _t(e) {
        let { product: n, ...r } = e;
        const {
          incrementQuantity: l,
          decrementQuantity: a,
          removeFromCart: o,
        } = (0, t.useContext)(pt);
        return (0, H.jsxs)("div", {
          ...r,
          className: `${r.className} flex flex-col items-center gap-[0.50rem] flex-1`,
          children: [
            (0, H.jsxs)("div", {
              className: "flex items-start justify-center self-stretch",
              children: [
                (0, H.jsxs)("div", {
                  className: "flex flex-1 items-center justify-center",
                  children: [
                    (0, H.jsxs)("div", {
                      className:
                        "border-[#dedede] py-[0.63rem] px-[0.50rem] gap-[0.50rem] flex flex-wrap items-center rounded-md border border-solid",
                      children: [
                        (0, H.jsx)(it, {
                          color: "blue_gray_100",
                          size: "sm",
                          shape: "round",
                          leftIcon: (0, H.jsx)(yt, {
                            src: "images/img_minus.svg",
                            alt: "Iconsa-google 1",
                            className: "h-[1.50rem] w-[1.50rem]",
                          }),
                          onClick: () => a(n.id),
                        }),
                        (0, H.jsx)(dt, {
                          size: "headinglg",
                          as: "h5",
                          className: "sm:text-[1.06rem] !text-[#0d0d0d]",
                          children: n.quantity,
                        }),
                        (0, H.jsx)(it, {
                          color: "blue_gray_100",
                          size: "sm",
                          shape: "round",
                          leftIcon: (0, H.jsx)(yt, {
                            src: "images/img_plus.svg",
                            alt: "Iconsa-google 1",
                            className: "h-[1.50rem] w-[1.50rem]",
                          }),
                          onClick: () => l(n.id),
                        }),
                      ],
                    }),
                    (0, H.jsxs)("div", {
                      className: "px-[0.75rem] flex flex-1 items-start",
                      children: [
                        (0, H.jsx)("div", {
                          className:
                            "bg-[#eaeaea] border-[#dedede] w-[14%] self-center rounded-lg border border-solid",
                          children: (0, H.jsx)(yt, {
                            src: n.image,
                            alt: "Product Image",
                            className:
                              "h-[5.50rem] w-full rounded-lg object-cover sm:h-auto",
                          }),
                        }),
                        (0, H.jsx)("div", {
                          className: "py-[0.25rem] px-[1.00rem] flex flex-1",
                          children: (0, H.jsx)(dt, {
                            size: "headings",
                            as: "h6",
                            className: "sm:text-[0.81rem] !text-[#424242]",
                            children: n.name,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, H.jsx)(it, {
                  color: "blue_gray_100",
                  size: "sm",
                  shape: "round",
                  leftIcon: (0, H.jsx)(yt, {
                    src: "images/img_close.svg",
                    alt: "Close Icon",
                    className: "w-[1.50rem] h-[1.50rem]",
                  }),
                  onClick: () => o(n.id),
                }),
              ],
            }),
            (0, H.jsx)("div", {
              className: "flex justify-end self-stretch",
              children: (0, H.jsxs)(dt, {
                size: "headinglg",
                as: "h5",
                className: "sm:text-[1.06rem] !text-[#0d0d0d]",
                children: ["\u20ac", n.price],
              }),
            }),
          ],
        });
      }
      function Tt() {
        const { cart: e } = (0, t.useContext)(pt),
          n = e.reduce((e, t) => {
            const n = t.price * t.quantity;
            return (
              console.log(
                `Item: ${t.name}, Price: ${t.price}, Quantity: ${t.quantity}, Item Total: ${n}`
              ),
              e + n
            );
          }, 0),
          r = n;
        return (
          console.log(`Subtotal: ${n}`),
          console.log(`Total: ${r}`),
          (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsxs)(rt, {
                children: [
                  (0, H.jsx)("title", {
                    children: "Order Summary - Review Your Purchase Details",
                  }),
                  (0, H.jsx)("meta", {
                    name: "description",
                    content:
                      "Review your order summary including items like Recliner Chair, Gaming Chair, and more. Complete your purchase with a total of \u20ac1071.00, free shipping, and estimated taxes.",
                  }),
                ],
              }),
              (0, H.jsxs)("div", {
                className: "bg-[#ffffff] flex w-full flex-col items-center",
                children: [
                  (0, H.jsx)(jt, {}),
                  (0, H.jsx)("div", {
                    className: "container-xs md:px-[1.25rem] mt-[1.13rem]",
                    children: (0, H.jsxs)("div", {
                      className: "flex items-start md:flex-col",
                      children: [
                        (0, H.jsxs)("div", {
                          className:
                            "gap-[2.50rem] flex flex-1 flex-col items-start self-center md:self-stretch",
                          children: [
                            (0, H.jsx)(dt, {
                              size: "heading2xl",
                              as: "h1",
                              className: "!text-[#1e1e1e] ml-[0.50rem] md:ml-0",
                              children: "An Overview of Your Order Details",
                            }),
                            (0, H.jsx)("div", {
                              className:
                                "rounded-[12px] bg-[#fafafa] sm:p-[1.25rem] p-[1.50rem] w-[94%] md:w-full",
                              children: (0, H.jsxs)("div", {
                                className: "gap-[1.50rem] flex flex-col",
                                children: [
                                  e.map((e) =>
                                    (0, H.jsx)(_t, { product: e }, e.id)
                                  ),
                                  (0, H.jsxs)(dt, {
                                    size: "headinglg",
                                    as: "h2",
                                    className:
                                      "!text-[#0d0d0d] ml-[38.63rem] md:ml-0",
                                    children: ["\u20ac", r.toFixed(2)],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, H.jsxs)("div", {
                          className:
                            "gap-[1.50rem] w-[34%] flex flex-col items-end md:w-full",
                          children: [
                            (0, H.jsx)("div", {
                              className: "flex justify-center self-stretch",
                              children: (0, H.jsxs)("div", {
                                className:
                                  "gap-[2.50rem] mt-[0.50rem] w-[90%] flex flex-col md:w-full",
                                children: [
                                  (0, H.jsx)("div", {
                                    className: "px-[0.50rem] flex",
                                    children: (0, H.jsx)(dt, {
                                      size: "heading2xl",
                                      as: "h3",
                                      className: "!text-[#1e1e1e]",
                                      children: "Order Details",
                                    }),
                                  }),
                                  (0, H.jsxs)("div", {
                                    className:
                                      "rounded-[12px] bg-[#fafafa] border-[#dedede] sm:p-[1.25rem] p-[1.50rem] gap-[1.13rem] flex flex-col border border-solid",
                                    children: [
                                      (0, H.jsxs)("div", {
                                        className:
                                          "gap-[0.75rem] flex flex-col",
                                        children: [
                                          (0, H.jsxs)("div", {
                                            className: "flex justify-center",
                                            children: [
                                              (0, H.jsx)(bt, {
                                                as: "p",
                                                children: "Subtotal",
                                              }),
                                              (0, H.jsx)("div", {
                                                className:
                                                  "px-[0.50rem] flex flex-1 justify-end",
                                                children: (0, H.jsxs)(bt, {
                                                  as: "p",
                                                  className: "!font-medium",
                                                  children: [
                                                    "\u20ac",
                                                    n.toFixed(2),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, H.jsxs)("div", {
                                            className: "flex justify-center",
                                            children: [
                                              (0, H.jsx)(bt, {
                                                as: "p",
                                                children: "Shipping",
                                              }),
                                              (0, H.jsx)("div", {
                                                className:
                                                  "px-[0.50rem] flex flex-1 justify-end",
                                                children: (0, H.jsx)(bt, {
                                                  as: "p",
                                                  className: "!font-medium",
                                                  children: "Free",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, H.jsxs)("div", {
                                            className:
                                              "gap-[1.88rem] flex justify-center",
                                            children: [
                                              (0, H.jsxs)("div", {
                                                className:
                                                  "gap-[0.56rem] flex flex-1 items-center",
                                                children: [
                                                  (0, H.jsx)(bt, {
                                                    as: "p",
                                                    children: "Estimated Tax",
                                                  }),
                                                  (0, H.jsx)(yt, {
                                                    src: "images/img_!.svg",
                                                    alt: "Tax Image",
                                                    className:
                                                      "w-[1.00rem] h-[1.00rem]",
                                                  }),
                                                ],
                                              }),
                                              (0, H.jsx)("div", {
                                                className: "px-[0.50rem] flex",
                                                children: (0, H.jsx)(bt, {
                                                  as: "p",
                                                  className: "!font-medium",
                                                  children: "\u20ac0.00 ",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, H.jsx)("div", {
                                        className: "bg-[#ebebeb] h-[0.06rem]",
                                      }),
                                      (0, H.jsxs)("div", {
                                        className:
                                          "gap-[1.25rem] flex flex-wrap justify-between",
                                        children: [
                                          (0, H.jsx)(dt, {
                                            size: "headingxl",
                                            as: "h4",
                                            className: "!text-[#646464]",
                                            children: "Total",
                                          }),
                                          (0, H.jsxs)(dt, {
                                            size: "headingxl",
                                            as: "h5",
                                            className: "!text-[#0d0d0d]",
                                            children: ["\u20ac", r.toFixed(2)],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, H.jsx)(it, {
                              color: "black_900_01",
                              size: "xl",
                              shape: "round",
                              className: "mb-5 !rounded-[5px]",
                              children: "Go To CheckOut",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, H.jsx)(St, {}),
                ],
              }),
            ],
          })
        );
      }
      const Pt = (e) => {
          let { message: n, redirectTo: r } = e;
          const l = k();
          return (
            (0, t.useEffect)(() => {
              const e = setTimeout(() => {
                l(r);
              }, 3e3);
              return () => clearTimeout(e);
            }, [l, r]),
            (0, H.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center h-screen bg-gray-100",
              children: [
                (0, H.jsx)("h1", {
                  className: "text-2xl font-bold text-center mb-4",
                  children: n,
                }),
                (0, H.jsxs)("p", {
                  className: "text-lg text-center",
                  children: [
                    "If you are not redirected automatically,",
                    " ",
                    (0, H.jsx)("a", {
                      href: r,
                      className: "text-blue-500",
                      children: "click here",
                    }),
                    ".",
                  ],
                }),
              ],
            })
          );
        },
        zt = (e) => {
          let { message: t, redirectTo: n } = e;
          return (0, H.jsx)(Pt, { message: t, redirectTo: n });
        },
        Ot = () => {
          const { isAuthenticated: e } = (0, t.useContext)(V);
          return j([
            { path: "/", element: (0, H.jsx)(X, {}) },
            { path: "*", element: (0, H.jsx)(G, {}) },
            {
              path: "signup",
              element: e
                ? (0, H.jsx)(zt, {
                    message:
                      "You are already logged in. Redirecting to store...",
                    redirectTo: "/store",
                  })
                : (0, H.jsx)(wt, {}),
            },
            {
              path: "login",
              element: e
                ? (0, H.jsx)(zt, {
                    message:
                      "You are already logged in. Redirecting to store...",
                    redirectTo: "/store",
                  })
                : (0, H.jsx)(kt, {}),
            },
            {
              path: "store",
              element: e
                ? (0, H.jsx)(Et, {})
                : (0, H.jsx)(zt, {
                    message:
                      "You need to log in to access the store. Redirecting to login...",
                    redirectTo: "/login",
                  }),
            },
            {
              path: "orderdetails",
              element: e
                ? (0, H.jsx)(Tt, {})
                : (0, H.jsx)(zt, {
                    message:
                      "You need to log in to access order details. Redirecting to login...",
                    redirectTo: "/login",
                  }),
            },
          ]);
        };
      const Lt = function () {
          return (0, H.jsx)(K, { children: (0, H.jsx)(Ot, {}) });
        },
        It = document.getElementById("root");
      (0, r.H)(It).render(
        (0, H.jsx)(W, {
          children: (0, H.jsx)(Ct, {
            children: (0, H.jsx)(mt, { children: (0, H.jsx)(Lt, {}) }),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.57982e23.js.map
