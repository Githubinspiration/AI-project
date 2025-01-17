! function e(t, n, r) {
  function i(a, s) {
    if (!n[a]) {
      if (!t[a]) {
        var l = "function" == typeof require && require;
        if (!s && l) return l(a, !0);
        if (o) return o(a, !0);
        var u = new Error("Cannot find module '" + a + "'");
        throw u.code = "MODULE_NOT_FOUND", u
      }
      var c = n[a] = {
        exports: {}
      };
      t[a][0].call(c.exports, function(e) {
        var n = t[a][1][e];
        return i(n || e)
      }, c, c.exports, e, t, n, r)
    }
    return n[a].exports
  }
  for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
  return i
}({
  1: [function(e, t, n) {
    "use strict";

    function r() {
      $(".header__toggle").click(function() {
        $(".header__links").is(".velocity-animating") || ($(".header__links").hasClass("js--open") ? i() : $(".header__links").velocity("slideDown", {
          duration: 300,
          easing: "ease-out",
          display: "block",
          visibility: "visible",
          begin: function() {
            $(".header__toggle").addClass("--open"), $("body").append("<div class='header__overlay'></div>")
          },
          progress: function() {
            $(".header__overlay").addClass("--open")
          },
          complete: function() {
            $(this).addClass("js--open")
          }
        }))
      }), $("body").on("click", function(e) {
        e.target.classList.contains("header__overlay") && i()
      })
    }

    function i() {
      $(".header__overlay").remove(), $(".header__links").velocity("slideUp", {
        duration: 300,
        easing: "ease-out",
        display: "none",
        visibility: "hidden",
        begin: function() {
          $(".header__toggle").removeClass("--open")
        },
        progress: function() {
          $(".header__overlay").removeClass("--open")
        },
        complete: function() {
          $(this).removeClass("js--open"), $(".header__toggle, .header__overlay").removeClass("--open")
        }
      })
    }

    function o() {
      $("body").css({
        overflow: "visible"
      }), $(".modal, .modal__overlay, .modal__inner").velocity({
        opacity: 0
      }, function() {
        $(".modal").css({
          opacity: 1
        }), $(".modal__inner").css({
          "-webkit-transform": "translateY(200px)",
          "-ms-transform": "translateY(200px)",
          transform: "translateY(200px)"
        }), $(".modal, .modal__overlay").hide(), $(".modal__body").empty()
      })
    }

    function a(e) {
      return "" !== e
    }

    function s(e, t) {
      e.parent().addClass("error"), e.after("<span class='error-data'>" + t + "</span>")
    }
    window.jQuery = window.$ = e("jquery"), e("velocity-animate/velocity.js"), e("lazysizes"), e("lazysizes/plugins/unveilhooks/ls.unveilhooks.js"), $(document).ready(function() {
      r(),
        function() {
          var e = 0,
            t = $(".header"),
            n = t.outerHeight();
          $(window).scroll(function() {
            if ($(window).width() >= 1024) {
              if (!t.hasClass("fixed")) {
                var r = $(this).scrollTop(),
                  i = Math.abs(r - e);
                r > n ? (r > 636 && (t.hasClass("fix-nav") || t.addClass("fix-nav")), i >= 6 && (r > e ? t.hasClass("hide-nav") || t.addClass("hide-nav") : t.hasClass("hide-nav") && $(t).removeClass("hide-nav"))) : r <= 0 && (t.removeClass("hide-nav show-nav"), t.addClass("top"))
              }
              window.innerHeight + window.scrollY >= document.body.offsetHeight && t.removeClass("hide-nav"), e = r
            } else t.addClass("fix-nav")
          })
        }(), $(".js-submit").click(function(e) {
          e.preventDefault();
          var t = $(".form__input input"),
            n = $(".form__input textarea"),
            r = !1;
          $(".form__input").removeClass("error"), $(".error-data").remove();
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            $(o).attr("required", !0) && !a($(o).val()) && (s($(o), "This field is required"), r = !0), $(o).attr("required", !0) && "email" === $(o).attr("type") && ! function(e) {
              return "" === e || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(e)
            }($(o).val()) && (s($(o), "Email address is invalid"), r = !0), $(n).attr("required", !0) && !a($(n).val()) && (s($(n), "This field is required"), r = !0)
          }!1 === r && $("#contactForm").submit()
        })
    }), $(document).keyup(function(e) {
      27 === e.keyCode && o()
    }), $(window).resize(function() {
      $(".header").removeClass("hide-nav"), $(".header__links").removeAttr("style"), $(".header__overlay").remove()
    }), $(".js-modal-close").click(function() {
      o()
    }), $(".modal__overlay").click(function() {
      o()
    })
  }, {
    jquery: 2,
    lazysizes: 3,
    "lazysizes/plugins/unveilhooks/ls.unveilhooks.js": 4,
    "velocity-animate/velocity.js": 5
  }],
  2: [function(e, t, n) {
    ! function(e, n) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e)
      } : n(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
      "use strict";

      function n(e, t) {
        var n = (t = t || G).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
      }

      function r(e) {
        var t = !!e && "length" in e && e.length,
          n = se.type(e);
        return "function" !== n && !se.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }

      function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }

      function o(e, t, n) {
        return se.isFunction(t) ? se.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
        }) : t.nodeType ? se.grep(e, function(e) {
          return e === t !== n
        }) : "string" != typeof t ? se.grep(e, function(e) {
          return ee.call(t, e) > -1 !== n
        }) : ye.test(t) ? se.filter(t, e, n) : (t = se.filter(t, e), se.grep(e, function(e) {
          return ee.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
      }

      function a(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e
      }

      function s(e) {
        return e
      }

      function l(e) {
        throw e
      }

      function u(e, t, n, r) {
        var i;
        try {
          e && se.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && se.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }

      function c() {
        G.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), se.ready()
      }

      function f() {
        this.expando = se.expando + f.uid++
      }

      function d(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(je, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
              n = function(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
              }(n)
            } catch (e) {}
            Pe.set(e, t, n)
          } else n = void 0;
        return n
      }

      function p(e, t, n, r) {
        var i, o = 1,
          a = 20,
          s = r ? function() {
            return r.cur()
          } : function() {
            return se.css(e, t, "")
          },
          l = s(),
          u = n && n[3] || (se.cssNumber[t] ? "" : "px"),
          c = (se.cssNumber[t] || "px" !== u && +l) && qe.exec(se.css(e, t));
        if (c && c[3] !== u) {
          u = u || c[3], n = n || [], c = +l || 1;
          do {
            c /= o = o || ".5", se.style(e, t, c + u)
          } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
      }

      function h(e) {
        var t, n = e.ownerDocument,
          r = e.nodeName,
          i = ze[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = se.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ze[r] = i, i)
      }

      function g(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Ae.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && De(r) && (i[o] = h(r))) : "none" !== n && (i[o] = "none", Ae.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
      }

      function m(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? se.merge([e], n) : n
      }

      function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
      }

      function v(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
          if ((o = e[p]) || 0 === o)
            if ("object" === se.type(o)) se.merge(d, o.nodeType ? [o] : o);
            else if (Me.test(o)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (Oe.exec(o) || ["", ""])[1].toLowerCase(), l = Re[s] || Re._default, a.innerHTML = l[1] + se.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
          se.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
          if (r && se.inArray(o, r) > -1) i && i.push(o);
          else if (u = se.contains(o.ownerDocument, o), a = m(f.appendChild(o), "script"), u && y(a), n)
          for (c = 0; o = a[c++];) $e.test(o.type || "") && n.push(o);
        return f
      }

      function b() {
        return !0
      }

      function x() {
        return !1
      }

      function w() {
        try {
          return G.activeElement
        } catch (e) {}
      }

      function C(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof n && (r = r || n, n = void 0);
          for (s in t) C(e, s, n, r, t[s], o);
          return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = x;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
          return se().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = se.guid++)), e.each(function() {
          se.event.add(this, t, i, r, n)
        })
      }

      function T(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? se(">tbody", e)[0] || e : e
      }

      function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function k(e) {
        var t = Ge.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
      }

      function E(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
          if (Ae.hasData(e) && (o = Ae.access(e), a = Ae.set(t, o), u = o.events)) {
            delete a.handle, a.events = {};
            for (i in u)
              for (n = 0, r = u[i].length; n < r; n++) se.event.add(t, i, u[i][n])
          }
          Pe.hasData(e) && (s = Pe.access(e), l = se.extend({}, s), Pe.set(t, l))
        }
      }

      function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }

      function P(e, t, r, i) {
        t = Z.apply([], t);
        var o, a, s, l, u, c, f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = se.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !ae.checkClone && Ye.test(h)) return e.each(function(n) {
          var o = e.eq(n);
          g && (t[0] = h.call(this, n, o.html())), P(o, t, r, i)
        });
        if (d && (o = v(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
          for (l = (s = se.map(m(o, "script"), S)).length; f < d; f++) u = o, f !== p && (u = se.clone(u, !0, !0), l && se.merge(s, m(u, "script"))), r.call(e[f], u, f);
          if (l)
            for (c = s[s.length - 1].ownerDocument, se.map(s, k), f = 0; f < l; f++) u = s[f], $e.test(u.type || "") && !Ae.access(u, "globalEval") && se.contains(c, u) && (u.src ? se._evalUrl && se._evalUrl(u.src) : n(u.textContent.replace(Qe, ""), c))
        }
        return e
      }

      function N(e, t, n) {
        for (var r, i = t ? se.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || se.cleanData(m(r)), r.parentNode && (n && se.contains(r.ownerDocument, r) && y(m(r, "script")), r.parentNode.removeChild(r));
        return e
      }

      function j(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ke(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se.contains(e.ownerDocument, e) || (a = se.style(e, t)), !ae.pixelMarginRight() && Ze.test(a) && Je.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
      }

      function L(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }

      function q(e) {
        var t = se.cssProps[e];
        return t || (t = se.cssProps[e] = function(e) {
          if (e in ot) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;)
            if ((e = it[n] + t) in ot) return e
        }(e) || e), t
      }

      function F(e, t, n) {
        var r = qe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function D(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += se.css(e, n + Fe[o], !0, i)), r ? ("content" === n && (a -= se.css(e, "padding" + Fe[o], !0, i)), "margin" !== n && (a -= se.css(e, "border" + Fe[o] + "Width", !0, i))) : (a += se.css(e, "padding" + Fe[o], !0, i), "padding" !== n && (a += se.css(e, "border" + Fe[o] + "Width", !0, i)));
        return a
      }

      function H(e, t, n) {
        var r, i = Ke(e),
          o = j(e, t, i),
          a = "border-box" === se.css(e, "boxSizing", !1, i);
        return Ze.test(o) ? o : (r = a && (ae.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + D(e, t, n || (a ? "border" : "content"), r, i) + "px")
      }

      function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
      }

      function V() {
        st && (!1 === G.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(V) : e.setTimeout(V, se.fx.interval), se.fx.tick())
      }

      function O() {
        return e.setTimeout(function() {
          at = void 0
        }), at = se.now()
      }

      function $(e, t) {
        var n, r = 0,
          i = {
            height: e
          };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Fe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
      }

      function R(e, t, n) {
        for (var r, i = (M.tweeners[t] || []).concat(M.tweeners["*"]), o = 0, a = i.length; o < a; o++)
          if (r = i[o].call(n, t, e)) return r
      }

      function M(e, t, n) {
        var r, i, o = 0,
          a = M.prefilters.length,
          s = se.Deferred().always(function() {
            delete l.elem
          }),
          l = function() {
            if (i) return !1;
            for (var t = at || O(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
            return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
          },
          u = s.promise({
            elem: e,
            props: se.extend({}, t),
            opts: se.extend(!0, {
              specialEasing: {},
              easing: se.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: at || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var r = se.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(r), r
            },
            stop: function(t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) u.tweens[n].run(1);
              return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
          }),
          c = u.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (r = se.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = se.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
              } else t[r] = i
          }(c, u.opts.specialEasing); o < a; o++)
          if (r = M.prefilters[o].call(u, e, c, u.opts)) return se.isFunction(r.stop) && (se._queueHooks(u.elem, u.opts.queue).stop = se.proxy(r.stop, r)), r;
        return se.map(c, R, u), se.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), se.fx.timer(se.extend(l, {
          elem: e,
          anim: u,
          queue: u.opts.queue
        })), u
      }

      function _(e) {
        return (e.match(Ce) || []).join(" ")
      }

      function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function I(e, t, n, r) {
        var i;
        if (Array.isArray(t)) se.each(t, function(t, i) {
          n || bt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== se.type(t)) r(e, t);
        else
          for (i in t) I(e + "[" + i + "]", t[i], n, r)
      }

      function B(e) {
        return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
            o = t.toLowerCase().match(Ce) || [];
          if (se.isFunction(n))
            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
      }

      function X(e, t, n, r) {
        function i(s) {
          var l;
          return o[s] = !0, se.each(e[s] || [], function(e, s) {
            var u = s(t, n, r);
            return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
          }), l
        }
        var o = {},
          a = e === jt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
      }

      function U(e, t) {
        var n, r, i = se.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && se.extend(!0, e, r), e
      }
      var Y = [],
        G = e.document,
        Q = Object.getPrototypeOf,
        J = Y.slice,
        Z = Y.concat,
        K = Y.push,
        ee = Y.indexOf,
        te = {},
        ne = te.toString,
        re = te.hasOwnProperty,
        ie = re.toString,
        oe = ie.call(Object),
        ae = {},
        se = function(e, t) {
          return new se.fn.init(e, t)
        },
        le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ue = /^-ms-/,
        ce = /-([a-z])/g,
        fe = function(e, t) {
          return t.toUpperCase()
        };
      se.fn = se.prototype = {
        jquery: "3.2.1",
        constructor: se,
        length: 0,
        toArray: function() {
          return J.call(this)
        },
        get: function(e) {
          return null == e ? J.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
          var t = se.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        each: function(e) {
          return se.each(this, e)
        },
        map: function(e) {
          return this.pushStack(se.map(this, function(t, n) {
            return e.call(t, n, t)
          }))
        },
        slice: function() {
          return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
          return this.eq(0)
        },
        last: function() {
          return this.eq(-1)
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
          return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
      }, se.extend = se.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || se.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
          if (null != (e = arguments[s]))
            for (t in e) n = a[t], a !== (r = e[t]) && (u && r && (se.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && se.isPlainObject(n) ? n : {}, a[t] = se.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
      }, se.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
          throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
          return "function" === se.type(e)
        },
        isWindow: function(e) {
          return null != e && e === e.window
        },
        isNumeric: function(e) {
          var t = se.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== ne.call(e)) && (!(t = Q(e)) || "function" == typeof(n = re.call(t, "constructor") && t.constructor) && ie.call(n) === oe)
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
        },
        type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
          n(e)
        },
        camelCase: function(e) {
          return e.replace(ue, "ms-").replace(ce, fe)
        },
        each: function(e, t) {
          var n, i = 0;
          if (r(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else
            for (i in e)
              if (!1 === t.call(e[i], i, e[i])) break;
          return e
        },
        trim: function(e) {
          return null == e ? "" : (e + "").replace(le, "")
        },
        makeArray: function(e, t) {
          var n = t || [];
          return null != e && (r(Object(e)) ? se.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
        },
        inArray: function(e, t, n) {
          return null == t ? -1 : ee.call(t, e, n)
        },
        merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
        },
        grep: function(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
          return r
        },
        map: function(e, t, n) {
          var i, o, a = 0,
            s = [];
          if (r(e))
            for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
          else
            for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
          return Z.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
          var n, r, i;
          if ("string" == typeof t && (n = e[t], t = e, e = n), se.isFunction(e)) return r = J.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(J.call(arguments)))
          }, i.guid = e.guid = e.guid || se.guid++, i
        },
        now: Date.now,
        support: ae
      }), "function" == typeof Symbol && (se.fn[Symbol.iterator] = Y[Symbol.iterator]), se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        te["[object " + t + "]"] = t.toLowerCase()
      });
      var de = function(e) {
        function t(e, t, n, r) {
          var i, o, a, s, l, u, c, d = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
          if (!r && ((t ? t.ownerDocument || t : $) !== L && j(t), t = t || L, F)) {
            if (11 !== h && (l = ge.exec(e)))
              if (i = l[1]) {
                if (9 === h) {
                  if (!(a = t.getElementById(i))) return n;
                  if (a.id === i) return n.push(a), n
                } else if (d && (a = d.getElementById(i)) && V(t, a) && a.id === i) return n.push(a), n
              } else {
                if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                if ((i = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
              } if (x.qsa && !I[e + " "] && (!D || !D.test(e))) {
              if (1 !== h) d = t, c = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((s = t.getAttribute("id")) ? s = s.replace(be, xe) : t.setAttribute("id", s = O), o = (u = S(e)).length; o--;) u[o] = "#" + s + " " + p(u[o]);
                c = u.join(","), d = me.test(e) && f(t.parentNode) || t
              }
              if (c) try {
                return Q.apply(n, d.querySelectorAll(c)), n
              } catch (e) {} finally {
                s === O && t.removeAttribute("id")
              }
            }
          }
          return E(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
          function e(n, r) {
            return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
          }
          var t = [];
          return e
        }

        function r(e) {
          return e[O] = !0, e
        }

        function i(e) {
          var t = L.createElement("fieldset");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function o(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function s(e) {
          return function(t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function l(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function u(e) {
          return function(t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
        }

        function c(e) {
          return r(function(t) {
            return t = +t, r(function(n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
            })
          })
        }

        function f(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
        }

        function h(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            a = n && "parentNode" === o,
            s = M++;
          return t.first ? function(t, n, i) {
            for (; t = t[r];)
              if (1 === t.nodeType || a) return e(t, n, i);
            return !1
          } : function(t, n, l) {
            var u, c, f, d = [R, s];
            if (l) {
              for (; t = t[r];)
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
            } else
              for (; t = t[r];)
                if (1 === t.nodeType || a)
                  if (f = t[O] || (t[O] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                  else {
                    if ((u = c[o]) && u[0] === R && u[1] === s) return d[2] = u[2];
                    if (c[o] = d, d[2] = e(t, n, l)) return !0
                  } return !1
          }
        }

        function g(e) {
          return e.length > 1 ? function(t, n, r) {
            for (var i = e.length; i--;)
              if (!e[i](t, n, r)) return !1;
            return !0
          } : e[0]
        }

        function m(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
          return a
        }

        function y(e, n, i, o, a, s) {
          return o && !o[O] && (o = y(o)), a && !a[O] && (a = y(a, s)), r(function(r, s, l, u) {
            var c, f, d, p = [],
              h = [],
              g = s.length,
              y = r || function(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                return r
              }(n || "*", l.nodeType ? [l] : l, []),
              v = !e || !r && n ? y : m(y, p, e, l, u),
              b = i ? a || (r ? e : g || o) ? [] : s : v;
            if (i && i(v, b, l, u), o)
              for (c = m(b, h), o(c, [], l, u), f = c.length; f--;)(d = c[f]) && (b[h[f]] = !(v[h[f]] = d));
            if (r) {
              if (a || e) {
                if (a) {
                  for (c = [], f = b.length; f--;)(d = b[f]) && c.push(v[f] = d);
                  a(null, b = [], c, u)
                }
                for (f = b.length; f--;)(d = b[f]) && (c = a ? Z(r, d) : p[f]) > -1 && (r[c] = !(s[c] = d))
              }
            } else b = m(b === s ? b.splice(g, b.length) : b), a ? a(null, s, b, u) : Q.apply(s, b)
          })
        }

        function v(e) {
          for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = h(function(e) {
              return e === t
            }, a, !0), u = h(function(e) {
              return Z(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
              var i = !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return t = null, i
            }]; s < i; s++)
            if (n = w.relative[e[s].type]) c = [h(g(c), n)];
            else {
              if ((n = w.filter[e[s].type].apply(null, e[s].matches))[O]) {
                for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                return y(s > 1 && g(c), s > 1 && p(e.slice(0, s - 1).concat({
                  value: " " === e[s - 2].type ? "*" : ""
                })).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && p(e))
              }
              c.push(n)
            } return g(c)
        }
        var b, x, w, C, T, S, k, E, A, P, N, j, L, q, F, D, H, z, V, O = "sizzle" + 1 * new Date,
          $ = e.document,
          R = 0,
          M = 0,
          _ = n(),
          W = n(),
          I = n(),
          B = function(e, t) {
            return e === t && (N = !0), 0
          },
          X = {}.hasOwnProperty,
          U = [],
          Y = U.pop,
          G = U.push,
          Q = U.push,
          J = U.slice,
          Z = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t) return n;
            return -1
          },
          K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ee = "[\\x20\\t\\r\\n\\f]",
          te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
          re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
          ie = new RegExp(ee + "+", "g"),
          oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
          ae = new RegExp("^" + ee + "*," + ee + "*"),
          se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
          le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
          ue = new RegExp(re),
          ce = new RegExp("^" + te + "$"),
          fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
          },
          de = /^(?:input|select|textarea|button)$/i,
          pe = /^h\d$/i,
          he = /^[^{]+\{\s*\[native \w/,
          ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          me = /[+~]/,
          ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
          ve = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          we = function() {
            j()
          },
          Ce = h(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          Q.apply(U = J.call($.childNodes), $.childNodes), U[$.childNodes.length].nodeType
        } catch (e) {
          Q = {
            apply: U.length ? function(e, t) {
              G.apply(e, J.call(t))
            } : function(e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];);
              e.length = n - 1
            }
          }
        }
        x = t.support = {}, T = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : $;
          return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, q = L.documentElement, F = !T(L), $ !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = i(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), x.getElementsByTagName = i(function(e) {
            return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
          }), x.getElementsByClassName = he.test(L.getElementsByClassName), x.getById = i(function(e) {
            return q.appendChild(e).id = O, !L.getElementsByName || !L.getElementsByName(O).length
          }), x.getById ? (w.filter.ID = function(e) {
            var t = e.replace(ye, ve);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }, w.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && F) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (w.filter.ID = function(e) {
            var t = e.replace(ye, ve);
            return function(e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, w.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && F) {
              var n, r, i, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && F) return t.getElementsByClassName(e)
          }, H = [], D = [], (x.qsa = he.test(L.querySelectorAll)) && (i(function(e) {
            q.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:value|" + K + ")"), e.querySelectorAll("[id~=" + O + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || D.push(".#.+[+~]")
          }), i(function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = L.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && D.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
          })), (x.matchesSelector = he.test(z = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
            x.disconnectedMatch = z.call(e, "*"), z.call(e, "[s!='']:x"), H.push("!=", re)
          }), D = D.length && new RegExp(D.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(q.compareDocumentPosition), V = t || he.test(q.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, B = t ? function(e, t) {
            if (e === t) return N = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === $ && V($, e) ? -1 : t === L || t.ownerDocument === $ && V($, t) ? 1 : P ? Z(P, e) - Z(P, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return N = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              l = [t];
            if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : P ? Z(P, e) - Z(P, t) : 0;
            if (i === o) return a(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) l.unshift(n);
            for (; s[r] === l[r];) r++;
            return r ? a(s[r], l[r]) : s[r] === $ ? -1 : l[r] === $ ? 1 : 0
          }, L) : L
        }, t.matches = function(e, n) {
          return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== L && j(e), n = n.replace(le, "='$1']"), x.matchesSelector && F && !I[n + " "] && (!H || !H.test(n)) && (!D || !D.test(n))) try {
            var r = z.call(e, n);
            if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {}
          return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
          return (e.ownerDocument || e) !== L && j(e), V(e, t)
        }, t.attr = function(e, t) {
          (e.ownerDocument || e) !== L && j(e);
          var n = w.attrHandle[t.toLowerCase()],
            r = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
          return void 0 !== r ? r : x.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
          return (e + "").replace(be, xe)
        }, t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            i = 0;
          if (N = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(B), N) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) e.splice(n[r], 1)
          }
          return P = null, e
        }, C = t.getText = function(e) {
          var t, n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
            } else if (3 === i || 4 === i) return e.nodeValue
          } else
            for (; t = e[r++];) n += C(t);
          return n
        }, (w = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(ye, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(ye, ve).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = _[e + " "];
              return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && _(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, n, r) {
              return function(i) {
                var o = t.attr(i, e);
                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
              }
            },
            CHILD: function(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i ? function(e) {
                return !!e.parentNode
              } : function(t, n, l) {
                var u, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  y = s && t.nodeName.toLowerCase(),
                  v = !l && !s,
                  b = !1;
                if (m) {
                  if (o) {
                    for (; g;) {
                      for (d = t; d = d[g];)
                        if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                      h = g = "only" === e && !h && "nextSibling"
                    }
                    return !0
                  }
                  if (h = [a ? m.firstChild : m.lastChild], a && v) {
                    for (b = (p = (u = (c = (f = (d = m)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === R && u[1]) && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                      if (1 === d.nodeType && ++b && d === t) {
                        c[e] = [R, p, b];
                        break
                      }
                  } else if (v && (b = p = (u = (c = (f = (d = t)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === R && u[1]), !1 === b)
                    for (;
                      (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (v && ((c = (f = d[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [R, b]), d !== t)););
                  return (b -= i) === r || b % r == 0 && b / r >= 0
                }
              }
            },
            PSEUDO: function(e, n) {
              var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
              return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                for (var r, i = o(e, n), a = i.length; a--;) e[r = Z(e, i[a])] = !(t[r] = i[a])
              }) : function(e) {
                return o(e, 0, i)
              }) : o
            }
          },
          pseudos: {
            not: r(function(e) {
              var t = [],
                n = [],
                i = k(e.replace(oe, "$1"));
              return i[O] ? r(function(e, t, n, r) {
                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
              }) : function(e, r, o) {
                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
              }
            }),
            has: r(function(e) {
              return function(n) {
                return t(e, n).length > 0
              }
            }),
            contains: r(function(e) {
              return e = e.replace(ye, ve),
                function(t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                }
            }),
            lang: r(function(e) {
              return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, ve).toLowerCase(),
                function(t) {
                  var n;
                  do {
                    if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === q
            },
            focus: function(e) {
              return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: u(!1),
            disabled: u(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !w.pseudos.empty(e)
            },
            header: function(e) {
              return pe.test(e.nodeName)
            },
            input: function(e) {
              return de.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: c(function() {
              return [0]
            }),
            last: c(function(e, t) {
              return [t - 1]
            }),
            eq: c(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: c(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: c(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: c(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
              return e
            }),
            gt: c(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = w.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) w.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
          }) w.pseudos[b] = l(b);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, S = t.tokenize = function(e, n) {
          var r, i, o, a, s, l, u, c = W[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, l = [], u = w.preFilter; s;) {
            r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
              value: r,
              type: i[0].replace(oe, " ")
            }), s = s.slice(r.length));
            for (a in w.filter) !(i = fe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
              value: r,
              type: a,
              matches: i
            }), s = s.slice(r.length));
            if (!r) break
          }
          return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, k = t.compile = function(e, n) {
          var i, o = [],
            a = [],
            s = I[e + " "];
          if (!s) {
            for (n || (n = S(e)), i = n.length; i--;)(s = v(n[i]))[O] ? o.push(s) : a.push(s);
            (s = I(e, function(e, n) {
              var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                  var c, f, d, p = 0,
                    h = "0",
                    g = r && [],
                    y = [],
                    v = A,
                    b = r || o && w.find.TAG("*", u),
                    x = R += null == v ? 1 : Math.random() || .1,
                    C = b.length;
                  for (u && (A = a === L || a || u); h !== C && null != (c = b[h]); h++) {
                    if (o && c) {
                      for (f = 0, a || c.ownerDocument === L || (j(c), s = !F); d = e[f++];)
                        if (d(c, a || L, s)) {
                          l.push(c);
                          break
                        } u && (R = x)
                    }
                    i && ((c = !d && c) && p--, r && g.push(c))
                  }
                  if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++];) d(g, y, a, s);
                    if (r) {
                      if (p > 0)
                        for (; h--;) g[h] || y[h] || (y[h] = Y.call(l));
                      y = m(y)
                    }
                    Q.apply(l, y), u && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                  }
                  return u && (R = x, A = v), g
                };
              return i ? r(a) : a
            }(a, o))).selector = e
          }
          return s
        }, E = t.select = function(e, t, n, r) {
          var i, o, a, s, l, u = "function" == typeof e && e,
            c = !r && S(e = u.selector || e);
          if (n = n || [], 1 === c.length) {
            if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && F && w.relative[o[1].type]) {
              if (!(t = (w.find.ID(a.matches[0].replace(ye, ve), t) || [])[0])) return n;
              u && (t = t.parentNode), e = e.slice(o.shift().value.length)
            }
            for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
              if ((l = w.find[s]) && (r = l(a.matches[0].replace(ye, ve), me.test(o[0].type) && f(t.parentNode) || t))) {
                if (o.splice(i, 1), !(e = r.length && p(o))) return Q.apply(n, r), n;
                break
              }
          }
          return (u || k(e, c))(r, t, !F, n, !t || me.test(e) && f(t.parentNode) || t), n
        }, x.sortStable = O.split("").sort(B).join("") === O, x.detectDuplicates = !!N, j(), x.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }), i(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
          return null == e.getAttribute("disabled")
        }) || o(K, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
      }(e);
      se.find = de, se.expr = de.selectors, se.expr[":"] = se.expr.pseudos, se.uniqueSort = se.unique = de.uniqueSort, se.text = de.getText, se.isXMLDoc = de.isXML, se.contains = de.contains, se.escapeSelector = de.escape;
      var pe = function(e, t, n) {
          for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (i && se(e).is(n)) break;
              r.push(e)
            } return r
        },
        he = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        },
        ge = se.expr.match.needsContext,
        me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ye = /^.[^:#\[\.,]*$/;
      se.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? se.find.matchesSelector(r, e) ? [r] : [] : se.find.matches(e, se.grep(t, function(e) {
          return 1 === e.nodeType
        }))
      }, se.fn.extend({
        find: function(e) {
          var t, n, r = this.length,
            i = this;
          if ("string" != typeof e) return this.pushStack(se(e).filter(function() {
            for (t = 0; t < r; t++)
              if (se.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) se.find(e, i[t], n);
          return r > 1 ? se.uniqueSort(n) : n
        },
        filter: function(e) {
          return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
          return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
          return !!o(this, "string" == typeof e && ge.test(e) ? se(e) : e || [], !1).length
        }
      });
      var ve, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (se.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || ve, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : be.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof se ? t[0] : t, se.merge(this, se.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), me.test(r[1]) && se.isPlainObject(t))
              for (r in t) se.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          return (i = G.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : se.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(se) : se.makeArray(e, this)
      }).prototype = se.fn, ve = se(G);
      var xe = /^(?:parents|prev(?:Until|All))/,
        we = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
      se.fn.extend({
        has: function(e) {
          var t = se(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++)
              if (se.contains(this, t[e])) return !0
          })
        },
        closest: function(e, t) {
          var n, r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && se(e);
          if (!ge.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && se.find.matchesSelector(n, e))) {
                  o.push(n);
                  break
                } return this.pushStack(o.length > 1 ? se.uniqueSort(o) : o)
        },
        index: function(e) {
          return e ? "string" == typeof e ? ee.call(se(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
          return this.pushStack(se.uniqueSort(se.merge(this.get(), se(e, t))))
        },
        addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), se.each({
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
          return pe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
          return pe(e, "parentNode", n)
        },
        next: function(e) {
          return a(e, "nextSibling")
        },
        prev: function(e) {
          return a(e, "previousSibling")
        },
        nextAll: function(e) {
          return pe(e, "nextSibling")
        },
        prevAll: function(e) {
          return pe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
          return pe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
          return pe(e, "previousSibling", n)
        },
        siblings: function(e) {
          return he((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
          return he(e.firstChild)
        },
        contents: function(e) {
          return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), se.merge([], e.childNodes))
        }
      }, function(e, t) {
        se.fn[e] = function(n, r) {
          var i = se.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = se.filter(r, i)), this.length > 1 && (we[e] || se.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
        }
      });
      var Ce = /[^\x20\t\r\n\f]+/g;
      se.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
          var t = {};
          return se.each(e.match(Ce) || [], function(e, n) {
            t[n] = !0
          }), t
        }(e) : se.extend({}, e);
        var t, n, r, i, o = [],
          a = [],
          s = -1,
          l = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
          },
          u = {
            add: function() {
              return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                se.each(n, function(n, r) {
                  se.isFunction(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== se.type(r) && t(r)
                })
              }(arguments), n && !t && l()), this
            },
            remove: function() {
              return se.each(arguments, function(e, t) {
                for (var n;
                  (n = se.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
              }), this
            },
            has: function(e) {
              return e ? se.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
              return o && (o = []), this
            },
            disable: function() {
              return i = a = [], o = n = "", this
            },
            disabled: function() {
              return !o
            },
            lock: function() {
              return i = a = [], n || t || (o = n = ""), this
            },
            locked: function() {
              return !!i
            },
            fireWith: function(e, n) {
              return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
            },
            fire: function() {
              return u.fireWith(this, arguments), this
            },
            fired: function() {
              return !!r
            }
          };
        return u
      }, se.extend({
        Deferred: function(t) {
          var n = [
              ["notify", "progress", se.Callbacks("memory"), se.Callbacks("memory"), 2],
              ["resolve", "done", se.Callbacks("once memory"), se.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", se.Callbacks("once memory"), se.Callbacks("once memory"), 1, "rejected"]
            ],
            r = "pending",
            i = {
              state: function() {
                return r
              },
              always: function() {
                return o.done(arguments).fail(arguments), this
              },
              catch: function(e) {
                return i.then(null, e)
              },
              pipe: function() {
                var e = arguments;
                return se.Deferred(function(t) {
                  se.each(n, function(n, r) {
                    var i = se.isFunction(e[r[4]]) && e[r[4]];
                    o[r[1]](function() {
                      var e = i && i.apply(this, arguments);
                      e && se.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                    })
                  }), e = null
                }).promise()
              },
              then: function(t, r, i) {
                function o(t, n, r, i) {
                  return function() {
                    var u = this,
                      c = arguments,
                      f = function() {
                        var e, f;
                        if (!(t < a)) {
                          if ((e = r.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                          f = e && ("object" == typeof e || "function" == typeof e) && e.then, se.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, l, i), o(a, n, s, n.notifyWith))) : (r !== s && (u = void 0, c = [e]), (i || n.resolveWith)(u, c))
                        }
                      },
                      d = i ? f : function() {
                        try {
                          f()
                        } catch (e) {
                          se.Deferred.exceptionHook && se.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                        }
                      };
                    t ? d() : (se.Deferred.getStackHook && (d.stackTrace = se.Deferred.getStackHook()), e.setTimeout(d))
                  }
                }
                var a = 0;
                return se.Deferred(function(e) {
                  n[0][3].add(o(0, e, se.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, se.isFunction(t) ? t : s)), n[2][3].add(o(0, e, se.isFunction(r) ? r : l))
                }).promise()
              },
              promise: function(e) {
                return null != e ? se.extend(e, i) : i
              }
            },
            o = {};
          return se.each(n, function(e, t) {
            var a = t[2],
              s = t[5];
            i[t[1]] = a.add, s && a.add(function() {
              r = s
            }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
            }, o[t[0] + "With"] = a.fireWith
          }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            i = J.call(arguments),
            o = se.Deferred(),
            a = function(e) {
              return function(n) {
                r[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : n, --t || o.resolveWith(r, i)
              }
            };
          if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || se.isFunction(i[n] && i[n].then))) return o.then();
          for (; n--;) u(i[n], a(n), o.reject);
          return o.promise()
        }
      });
      var Te = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      se.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Te.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
      }, se.readyException = function(t) {
        e.setTimeout(function() {
          throw t
        })
      };
      var Se = se.Deferred();
      se.fn.ready = function(e) {
        return Se.then(e).catch(function(e) {
          se.readyException(e)
        }), this
      }, se.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
          (!0 === e ? --se.readyWait : se.isReady) || (se.isReady = !0, !0 !== e && --se.readyWait > 0 || Se.resolveWith(G, [se]))
        }
      }), se.ready.then = Se.then, "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(se.ready) : (G.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
      var ke = function(e, t, n, r, i, o, a) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ("object" === se.type(n)) {
            i = !0;
            for (s in n) ke(e, t, s, n[s], !0, o, a)
          } else if (void 0 !== r && (i = !0, se.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
              return u.call(se(e), n)
            })), t))
            for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Ee = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
      f.uid = 1, f.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, Ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        },
        set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[se.camelCase(t)] = n;
          else
            for (r in t) i[se.camelCase(r)] = t[r];
          return i
        },
        get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][se.camelCase(t)]
        },
        access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(se.camelCase) : (t = se.camelCase(t)) in r ? [t] : t.match(Ce) || []).length;
              for (; n--;) delete r[t[n]]
            }(void 0 === t || se.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !se.isEmptyObject(t)
        }
      };
      var Ae = new f,
        Pe = new f,
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
      se.extend({
        hasData: function(e) {
          return Pe.hasData(e) || Ae.hasData(e)
        },
        data: function(e, t, n) {
          return Pe.access(e, t, n)
        },
        removeData: function(e, t) {
          Pe.remove(e, t)
        },
        _data: function(e, t, n) {
          return Ae.access(e, t, n)
        },
        _removeData: function(e, t) {
          Ae.remove(e, t)
        }
      }), se.fn.extend({
        data: function(e, t) {
          var n, r, i, o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (this.length && (i = Pe.get(o), 1 === o.nodeType && !Ae.get(o, "hasDataAttrs"))) {
              for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = se.camelCase(r.slice(5)), d(o, r, i[r]));
              Ae.set(o, "hasDataAttrs", !0)
            }
            return i
          }
          return "object" == typeof e ? this.each(function() {
            Pe.set(this, e)
          }) : ke(this, function(t) {
            var n;
            if (o && void 0 === t) {
              if (void 0 !== (n = Pe.get(o, e))) return n;
              if (void 0 !== (n = d(o, e))) return n
            } else this.each(function() {
              Pe.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
          return this.each(function() {
            Pe.remove(this, e)
          })
        }
      }), se.extend({
        queue: function(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = Ae.get(e, t), n && (!r || Array.isArray(n) ? r = Ae.access(e, t, se.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = se.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = se._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
            se.dequeue(e, t)
          }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return Ae.get(e, n) || Ae.access(e, n, {
            empty: se.Callbacks("once memory").add(function() {
              Ae.remove(e, [t + "queue", n])
            })
          })
        }
      }), se.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? se.queue(this[0], e) : void 0 === t ? this : this.each(function() {
            var n = se.queue(this, e, t);
            se._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && se.dequeue(this, e)
          })
        },
        dequeue: function(e) {
          return this.each(function() {
            se.dequeue(this, e)
          })
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
          var n, r = 1,
            i = se.Deferred(),
            o = this,
            a = this.length,
            s = function() {
              --r || i.resolveWith(o, [o])
            };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ae.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
        }
      });
      var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && se.contains(e.ownerDocument, e) && "none" === se.css(e, "display")
        },
        He = function(e, t, n, r) {
          var i, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i
        },
        ze = {};
      se.fn.extend({
        show: function() {
          return g(this, !0)
        },
        hide: function() {
          return g(this)
        },
        toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            De(this) ? se(this).show() : se(this).hide()
          })
        }
      });
      var Ve = /^(?:checkbox|radio)$/i,
        Oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        $e = /^$|\/(?:java|ecma)script/i,
        Re = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td;
      var Me = /<|&#?\w+;/;
      ! function() {
        var e = G.createDocumentFragment().appendChild(G.createElement("div")),
          t = G.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ae.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
      }();
      var _e = G.documentElement,
        We = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Be = /^([^.]*)(?:\.(.+)|)/;
      se.event = {
        global: {},
        add: function(e, t, n, r, i) {
          var o, a, s, l, u, c, f, d, p, h, g, m = Ae.get(e);
          if (m)
            for (n.handler && (n = (o = n).handler, i = o.selector), i && se.find.matchesSelector(_e, i), n.guid || (n.guid = se.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                return void 0 !== se && se.event.triggered !== t.type ? se.event.dispatch.apply(e, arguments) : void 0
              }), u = (t = (t || "").match(Ce) || [""]).length; u--;) p = g = (s = Be.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = se.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = se.event.special[p] || {}, c = se.extend({
              type: p,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && se.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), se.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
          var o, a, s, l, u, c, f, d, p, h, g, m = Ae.hasData(e) && Ae.get(e);
          if (m && (l = m.events)) {
            for (u = (t = (t || "").match(Ce) || [""]).length; u--;)
              if (s = Be.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                for (f = se.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || se.removeEvent(e, p, m.handle), delete l[p])
              } else
                for (p in l) se.event.remove(e, p + t[u], n, r, !0);
            se.isEmptyObject(l) && Ae.remove(e, "handle events")
          }
        },
        dispatch: function(e) {
          var t, n, r, i, o, a, s = se.event.fix(e),
            l = new Array(arguments.length),
            u = (Ae.get(this, "events") || {})[s.type] || [],
            c = se.event.special[s.type] || {};
          for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = se.event.handlers.call(this, s, u), t = 0;
              (i = a[t++]) && !s.isPropagationStopped();)
              for (s.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((se.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, s), s.result
          }
        },
        handlers: function(e, t) {
          var n, r, i, o, a, s = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? se(i, this).index(u) > -1 : se.find(i, this, null, [u]).length), a[i] && o.push(r);
                o.length && s.push({
                  elem: u,
                  handlers: o
                })
              } return u = this, l < t.length && s.push({
            elem: u,
            handlers: t.slice(l)
          }), s
        },
        addProp: function(e, t) {
          Object.defineProperty(se.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: se.isFunction(t) ? function() {
              if (this.originalEvent) return t(this.originalEvent)
            } : function() {
              if (this.originalEvent) return this.originalEvent[e]
            },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              })
            }
          })
        },
        fix: function(e) {
          return e[se.expando] ? e : new se.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function() {
              if (this !== w() && this.focus) return this.focus(), !1
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === w() && this.blur) return this.blur(), !1
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
            },
            _default: function(e) {
              return i(e.target, "a")
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, se.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, se.Event = function(e, t) {
        if (!(this instanceof se.Event)) return new se.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && se.extend(this, t), this.timeStamp = e && e.timeStamp || se.now(), this[se.expando] = !0
      }, se.Event.prototype = {
        constructor: se.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, se.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && We.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ie.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
      }, se.event.addProp), se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(e, t) {
        se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n, r = e.relatedTarget,
              i = e.handleObj;
            return r && (r === this || se.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
          }
        }
      }), se.fn.extend({
        on: function(e, t, n, r) {
          return C(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
          return C(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, se(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function() {
            se.event.remove(this, e, n, t)
          })
        }
      });
      var Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ue = /<script|<style|<link/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ge = /^true\/(.*)/,
        Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      se.extend({
        htmlPrefilter: function(e) {
          return e.replace(Xe, "<$1></$2>")
        },
        clone: function(e, t, n) {
          var r, i, o, a, s = e.cloneNode(!0),
            l = se.contains(e.ownerDocument, e);
          if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || se.isXMLDoc(e)))
            for (a = m(s), r = 0, i = (o = m(e)).length; r < i; r++) A(o[r], a[r]);
          if (t)
            if (n)
              for (o = o || m(e), a = a || m(s), r = 0, i = o.length; r < i; r++) E(o[r], a[r]);
            else E(e, s);
          return (a = m(s, "script")).length > 0 && y(a, !l && m(e, "script")), s
        },
        cleanData: function(e) {
          for (var t, n, r, i = se.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (Ee(n)) {
              if (t = n[Ae.expando]) {
                if (t.events)
                  for (r in t.events) i[r] ? se.event.remove(n, r) : se.removeEvent(n, r, t.handle);
                n[Ae.expando] = void 0
              }
              n[Pe.expando] && (n[Pe.expando] = void 0)
            }
        }
      }), se.fn.extend({
        detach: function(e) {
          return N(this, e, !0)
        },
        remove: function(e) {
          return N(this, e)
        },
        text: function(e) {
          return ke(this, function(e) {
            return void 0 === e ? se.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        },
        append: function() {
          return P(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              T(this, e).appendChild(e)
            }
          })
        },
        prepend: function() {
          return P(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = T(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        },
        before: function() {
          return P(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        },
        after: function() {
          return P(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (se.cleanData(m(e, !1)), e.textContent = "");
          return this
        },
        clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
            return se.clone(this, e, t)
          })
        },
        html: function(e) {
          return ke(this, function(e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ue.test(e) && !Re[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = se.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (se.cleanData(m(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        },
        replaceWith: function() {
          var e = [];
          return P(this, arguments, function(t) {
            var n = this.parentNode;
            se.inArray(this, e) < 0 && (se.cleanData(m(this)), n && n.replaceChild(t, this))
          }, e)
        }
      }), se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(e, t) {
        se.fn[e] = function(e) {
          for (var n, r = [], i = se(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), se(i[a])[t](n), K.apply(r, n.get());
          return this.pushStack(r)
        }
      });
      var Je = /^margin/,
        Ze = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        Ke = function(t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
        };
      ! function() {
        function t() {
          if (s) {
            s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", _e.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, _e.removeChild(a), s = null
          }
        }
        var n, r, i, o, a = G.createElement("div"),
          s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), se.extend(ae, {
          pixelPosition: function() {
            return t(), n
          },
          boxSizingReliable: function() {
            return t(), r
          },
          pixelMarginRight: function() {
            return t(), i
          },
          reliableMarginLeft: function() {
            return t(), o
          }
        }))
      }();
      var et = /^(none|table(?!-c[ea]).+)/,
        tt = /^--/,
        nt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        rt = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        it = ["Webkit", "Moz", "ms"],
        ot = G.createElement("div").style;
      se.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = j(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {
          float: "cssFloat"
        },
        style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i, o, a, s = se.camelCase(t),
              l = tt.test(t),
              u = e.style;
            if (l || (t = q(s)), a = se.cssHooks[t] || se.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
            "string" == (o = typeof n) && (i = qe.exec(n)) && i[1] && (n = p(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (se.cssNumber[s] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
          }
        },
        css: function(e, t, n, r) {
          var i, o, a, s = se.camelCase(t);
          return tt.test(t) || (t = q(s)), (a = se.cssHooks[t] || se.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = j(e, t, r)), "normal" === i && t in rt && (i = rt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
      }), se.each(["height", "width"], function(e, t) {
        se.cssHooks[t] = {
          get: function(e, n, r) {
            if (n) return !et.test(se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, r) : He(e, nt, function() {
              return H(e, t, r)
            })
          },
          set: function(e, n, r) {
            var i, o = r && Ke(e),
              a = r && D(e, t, r, "border-box" === se.css(e, "boxSizing", !1, o), o);
            return a && (i = qe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = se.css(e, t)), F(0, n, a)
          }
        }
      }), se.cssHooks.marginLeft = L(ae.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
          marginLeft: 0
        }, function() {
          return e.getBoundingClientRect().left
        })) + "px"
      }), se.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        se.cssHooks[e + t] = {
          expand: function(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Fe[r] + t] = o[r] || o[r - 2] || o[0];
            return i
          }
        }, Je.test(e) || (se.cssHooks[e + t].set = F)
      }), se.fn.extend({
        css: function(e, t) {
          return ke(this, function(e, t, n) {
            var r, i, o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ke(e), i = t.length; a < i; a++) o[t[a]] = se.css(e, t[a], !1, r);
              return o
            }
            return void 0 !== n ? se.style(e, t, n) : se.css(e, t)
          }, e, t, arguments.length > 1)
        }
      }), se.Tween = z, (z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || se.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (se.cssNumber[n] ? "" : "px")
        },
        cur: function() {
          var e = z.propHooks[this.prop];
          return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
          var t, n = z.propHooks[this.prop];
          return this.options.duration ? this.pos = t = se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
      }).init.prototype = z.prototype, (z.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = se.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
            se.fx.step[e.prop] ? se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[se.cssProps[e.prop]] && !se.cssHooks[e.prop] ? e.elem[e.prop] = e.now : se.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }).scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, se.easing = {
        linear: function(e) {
          return e
        },
        swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
      }, se.fx = z.prototype.init, se.fx.step = {};
      var at, st, lt = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      se.Animation = se.extend(M, {
          tweeners: {
            "*": [function(e, t) {
              var n = this.createTween(e, t);
              return p(n.elem, e, qe.exec(t), n), n
            }]
          },
          tweener: function(e, t) {
            se.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ce);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t)
          },
          prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              m = e.nodeType && De(e),
              y = Ae.get(e, "fxshow");
            n.queue || (null == (a = se._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
              a.unqueued || s()
            }), a.unqueued++, d.always(function() {
              d.always(function() {
                a.unqueued--, se.queue(e, "fx").length || a.empty.fire()
              })
            }));
            for (r in t)
              if (i = t[r], lt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                  if ("show" !== i || !y || void 0 === y[r]) continue;
                  m = !0
                }
                p[r] = y && y[r] || se.style(e, r)
              } if ((l = !se.isEmptyObject(t)) || !se.isEmptyObject(p)) {
              f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = y && y.display) && (u = Ae.get(e, "display")), "none" === (c = se.css(e, "display")) && (u ? c = u : (g([e], !0), u = e.style.display || u, c = se.css(e, "display"), g([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === se.css(e, "float") && (l || (d.done(function() {
                h.display = u
              }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
              })), l = !1;
              for (r in p) l || (y ? "hidden" in y && (m = y.hidden) : y = Ae.access(e, "fxshow", {
                display: u
              }), o && (y.hidden = !m), m && g([e], !0), d.done(function() {
                m || g([e]), Ae.remove(e, "fxshow");
                for (r in p) se.style(e, r, p[r])
              })), l = R(m ? y[r] : 0, r, d), r in y || (y[r] = l.start, m && (l.end = l.start, l.start = 0))
            }
          }],
          prefilter: function(e, t) {
            t ? M.prefilters.unshift(e) : M.prefilters.push(e)
          }
        }), se.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? se.extend({}, e) : {
            complete: n || !n && t || se.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !se.isFunction(t) && t
          };
          return se.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in se.fx.speeds ? r.duration = se.fx.speeds[r.duration] : r.duration = se.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            se.isFunction(r.old) && r.old.call(this), r.queue && se.dequeue(this, r.queue)
          }, r
        }, se.fn.extend({
          fadeTo: function(e, t, n, r) {
            return this.filter(De).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, r)
          },
          animate: function(e, t, n, r) {
            var i = se.isEmptyObject(e),
              o = se.speed(t, n, r),
              a = function() {
                var t = M(this, se.extend({}, e), o);
                (i || Ae.get(this, "finish")) && t.stop(!0)
              };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, t, n) {
            var r = function(e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
              var t = !0,
                i = null != e && e + "queueHooks",
                o = se.timers,
                a = Ae.get(this);
              if (i) a[i] && a[i].stop && r(a[i]);
              else
                for (i in a) a[i] && a[i].stop && ut.test(i) && r(a[i]);
              for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
              !t && n || se.dequeue(this, e)
            })
          },
          finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
              var t, n = Ae.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = se.timers,
                a = r ? r.length : 0;
              for (n.finish = !0, se.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
            })
          }
        }), se.each(["toggle", "show", "hide"], function(e, t) {
          var n = se.fn[t];
          se.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
          }
        }), se.each({
          slideDown: $("show"),
          slideUp: $("hide"),
          slideToggle: $("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function(e, t) {
          se.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
          }
        }), se.timers = [], se.fx.tick = function() {
          var e, t = 0,
            n = se.timers;
          for (at = se.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || se.fx.stop(), at = void 0
        }, se.fx.timer = function(e) {
          se.timers.push(e), se.fx.start()
        }, se.fx.interval = 13, se.fx.start = function() {
          st || (st = !0, V())
        }, se.fx.stop = function() {
          st = null
        }, se.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, se.fn.delay = function(t, n) {
          return t = se.fx ? se.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
              e.clearTimeout(i)
            }
          })
        },
        function() {
          var e = G.createElement("input"),
            t = G.createElement("select").appendChild(G.createElement("option"));
          e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = t.selected, (e = G.createElement("input")).value = "t", e.type = "radio", ae.radioValue = "t" === e.value
        }();
      var ct, ft = se.expr.attrHandle;
      se.fn.extend({
        attr: function(e, t) {
          return ke(this, se.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
          return this.each(function() {
            se.removeAttr(this, e)
          })
        }
      }), se.extend({
        attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? se.prop(e, t, n) : (1 === o && se.isXMLDoc(e) || (i = se.attrHooks[t.toLowerCase()] || (se.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void se.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = se.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!ae.radioValue && "radio" === t && i(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n, r = 0,
            i = t && t.match(Ce);
          if (i && 1 === e.nodeType)
            for (; n = i[r++];) e.removeAttribute(n)
        }
      }), ct = {
        set: function(e, t, n) {
          return !1 === t ? se.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, se.each(se.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ft[t] || se.find.attr;
        ft[t] = function(e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
        }
      });
      var dt = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;
      se.fn.extend({
        prop: function(e, t) {
          return ke(this, se.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[se.propFix[e] || e]
          })
        }
      }), se.extend({
        prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && se.isXMLDoc(e) || (t = se.propFix[t] || t, i = se.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = se.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : dt.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), ae.optSelected || (se.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        se.propFix[this.toLowerCase()] = this
      }), se.fn.extend({
        addClass: function(e) {
          var t, n, r, i, o, a, s, l = 0;
          if (se.isFunction(e)) return this.each(function(t) {
            se(this).addClass(e.call(this, t, W(this)))
          });
          if ("string" == typeof e && e)
            for (t = e.match(Ce) || []; n = this[l++];)
              if (i = W(n), r = 1 === n.nodeType && " " + _(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = _(r)) && n.setAttribute("class", s)
              } return this
        },
        removeClass: function(e) {
          var t, n, r, i, o, a, s, l = 0;
          if (se.isFunction(e)) return this.each(function(t) {
            se(this).removeClass(e.call(this, t, W(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e)
            for (t = e.match(Ce) || []; n = this[l++];)
              if (i = W(n), r = 1 === n.nodeType && " " + _(i) + " ") {
                for (a = 0; o = t[a++];)
                  for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                i !== (s = _(r)) && n.setAttribute("class", s)
              } return this
        },
        toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : se.isFunction(e) ? this.each(function(n) {
            se(this).toggleClass(e.call(this, n, W(this), t), t)
          }) : this.each(function() {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = se(this), o = e.match(Ce) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else void 0 !== e && "boolean" !== n || ((t = W(this)) && Ae.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ae.get(this, "__className__") || ""))
          })
        },
        hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++];)
            if (1 === n.nodeType && (" " + _(W(n)) + " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var ht = /\r/g;
      se.fn.extend({
        val: function(e) {
          var t, n, r, i = this[0]; {
            if (arguments.length) return r = se.isFunction(e), this.each(function(n) {
              var i;
              1 === this.nodeType && (null == (i = r ? e.call(this, n, se(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = se.map(i, function(e) {
                return null == e ? "" : e + ""
              })), (t = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return (t = se.valHooks[i.type] || se.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ht, "") : null == n ? "" : n
          }
        }
      }), se.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = se.find.attr(e, "value");
              return null != t ? t : _(se.text(e))
            }
          },
          select: {
            get: function(e) {
              var t, n, r, o = e.options,
                a = e.selectedIndex,
                s = "select-one" === e.type,
                l = s ? null : [],
                u = s ? a + 1 : o.length;
              for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                  if (t = se(n).val(), s) return t;
                  l.push(t)
                } return l
            },
            set: function(e, t) {
              for (var n, r, i = e.options, o = se.makeArray(t), a = i.length; a--;)((r = i[a]).selected = se.inArray(se.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o
            }
          }
        }
      }), se.each(["radio", "checkbox"], function() {
        se.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t)) return e.checked = se.inArray(se(e).val(), t) > -1
          }
        }, ae.checkOn || (se.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      });
      var gt = /^(?:focusinfocus|focusoutblur)$/;
      se.extend(se.event, {
        trigger: function(t, n, r, i) {
          var o, a, s, l, u, c, f, d = [r || G],
            p = re.call(t, "type") ? t.type : t,
            h = re.call(t, "namespace") ? t.namespace.split(".") : [];
          if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(p + se.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[se.expando] ? t : new se.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : se.makeArray(n, [t]), f = se.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
            if (!i && !f.noBubble && !se.isWindow(r)) {
              for (l = f.delegateType || p, gt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
              s === (r.ownerDocument || G) && d.push(s.defaultView || s.parentWindow || e)
            }
            for (o = 0;
              (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, (c = (Ae.get(a, "events") || {})[t.type] && Ae.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && Ee(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
            return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Ee(r) || u && se.isFunction(r[p]) && !se.isWindow(r) && ((s = r[u]) && (r[u] = null), se.event.triggered = p, r[p](), se.event.triggered = void 0, s && (r[u] = s)), t.result
          }
        },
        simulate: function(e, t, n) {
          var r = se.extend(new se.Event, n, {
            type: e,
            isSimulated: !0
          });
          se.event.trigger(r, null, t)
        }
      }), se.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            se.event.trigger(e, t, this)
          })
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return se.event.trigger(e, t, n, !0)
        }
      }), se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        se.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }), se.fn.extend({
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), ae.focusin = "onfocusin" in e, ae.focusin || se.each({
        focus: "focusin",
        blur: "focusout"
      }, function(e, t) {
        var n = function(e) {
          se.event.simulate(t, e.target, se.event.fix(e))
        };
        se.event.special[t] = {
          setup: function() {
            var r = this.ownerDocument || this,
              i = Ae.access(r, t);
            i || r.addEventListener(e, n, !0), Ae.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
            var r = this.ownerDocument || this,
              i = Ae.access(r, t) - 1;
            i ? Ae.access(r, t, i) : (r.removeEventListener(e, n, !0), Ae.remove(r, t))
          }
        }
      });
      var mt = e.location,
        yt = se.now(),
        vt = /\?/;
      se.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
          n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + t), n
      };
      var bt = /\[\]$/,
        xt = /\r?\n/g,
        wt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
      se.param = function(e, t) {
        var n, r = [],
          i = function(e, t) {
            var n = se.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
        if (Array.isArray(e) || e.jquery && !se.isPlainObject(e)) se.each(e, function() {
          i(this.name, this.value)
        });
        else
          for (n in e) I(n, e[n], t, i);
        return r.join("&")
      }, se.fn.extend({
        serialize: function() {
          return se.param(this.serializeArray())
        },
        serializeArray: function() {
          return this.map(function() {
            var e = se.prop(this, "elements");
            return e ? se.makeArray(e) : this
          }).filter(function() {
            var e = this.type;
            return this.name && !se(this).is(":disabled") && Ct.test(this.nodeName) && !wt.test(e) && (this.checked || !Ve.test(e))
          }).map(function(e, t) {
            var n = se(this).val();
            return null == n ? null : Array.isArray(n) ? se.map(n, function(e) {
              return {
                name: t.name,
                value: e.replace(xt, "\r\n")
              }
            }) : {
              name: t.name,
              value: n.replace(xt, "\r\n")
            }
          }).get()
        }
      });
      var Tt = /%20/g,
        St = /#.*$/,
        kt = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        At = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Nt = {},
        jt = {},
        Lt = "*/".concat("*"),
        qt = G.createElement("a");
      qt.href = mt.href, se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: mt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Lt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": se.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function(e, t) {
          return t ? U(U(e, se.ajaxSettings), t) : U(se.ajaxSettings, e)
        },
        ajaxPrefilter: B(Nt),
        ajaxTransport: B(jt),
        ajax: function(t, n) {
          function r(t, n, r, s) {
            var u, d, p, x, w, C = n;
            c || (c = !0, l && e.clearTimeout(l), i = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (x = function(e, t, n) {
              for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (i in s)
                  if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                  } if (l[0] in n) o = l[0];
              else {
                for (i in n) {
                  if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                  }
                  a || (a = i)
                }
                o = o || a
              }
              if (o) return o !== l[0] && l.unshift(o), n[o]
            }(h, T, r)), x = function(e, t, n, r) {
              var i, o, a, s, l, u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                if (!(a = u[l + " " + o] || u["* " + o]))
                  for (i in u)
                    if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                      !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                      break
                    } if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else try {
                    t = a(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + l + " to " + o
                    }
                  }
              }
              return {
                state: "success",
                data: t
              }
            }(h, x, T, u), u ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (se.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (se.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, u = !(p = x.error))) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? y.resolveWith(g, [d, C, T]) : y.rejectWith(g, [T, C, p]), T.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? d : p]), v.fireWith(g, [T, C]), f && (m.trigger("ajaxComplete", [T, h]), --se.active || se.event.trigger("ajaxStop")))
          }
          "object" == typeof t && (n = t, t = void 0), n = n || {};
          var i, o, a, s, l, u, c, f, d, p, h = se.ajaxSetup({}, n),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? se(g) : se.event,
            y = se.Deferred(),
            v = se.Callbacks("once memory"),
            b = h.statusCode || {},
            x = {},
            w = {},
            C = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (c) {
                  if (!s)
                    for (s = {}; t = Et.exec(a);) s[t[1].toLowerCase()] = t[2];
                  t = s[e.toLowerCase()]
                }
                return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                return c ? a : null
              },
              setRequestHeader: function(e, t) {
                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
              },
              overrideMimeType: function(e) {
                return null == c && (h.mimeType = e), this
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (c) T.always(e[T.status]);
                  else
                    for (t in e) b[t] = [b[t], e[t]];
                return this
              },
              abort: function(e) {
                var t = e || C;
                return i && i.abort(t), r(0, t), this
              }
            };
          if (y.promise(T), h.url = ((t || h.url || mt.href) + "").replace(Pt, mt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ce) || [""], null == h.crossDomain) {
            u = G.createElement("a");
            try {
              u.href = h.url, u.href = u.href, h.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host
            } catch (e) {
              h.crossDomain = !0
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = se.param(h.data, h.traditional)), X(Nt, h, n, T), c) return T;
          (f = se.event && h.global) && 0 == se.active++ && se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !At.test(h.type), o = h.url.replace(St, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Tt, "+")) : (p = h.url.slice(o.length), h.data && (o += (vt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(kt, "$1"), p = (vt.test(o) ? "&" : "?") + "_=" + yt++ + p), h.url = o + p), h.ifModified && (se.lastModified[o] && T.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && T.setRequestHeader("If-None-Match", se.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]);
          for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || c)) return T.abort();
          if (C = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), i = X(jt, h, n, T)) {
            if (T.readyState = 1, f && m.trigger("ajaxSend", [T, h]), c) return T;
            h.async && h.timeout > 0 && (l = e.setTimeout(function() {
              T.abort("timeout")
            }, h.timeout));
            try {
              c = !1, i.send(x, r)
            } catch (e) {
              if (c) throw e;
              r(-1, e)
            }
          } else r(-1, "No Transport");
          return T
        },
        getJSON: function(e, t, n) {
          return se.get(e, t, n, "json")
        },
        getScript: function(e, t) {
          return se.get(e, void 0, t, "script")
        }
      }), se.each(["get", "post"], function(e, t) {
        se[t] = function(e, n, r, i) {
          return se.isFunction(n) && (i = i || r, r = n, n = void 0), se.ajax(se.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, se.isPlainObject(e) && e))
        }
      }), se._evalUrl = function(e) {
        return se.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
        })
      }, se.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (se.isFunction(e) && (e = e.call(this[0])), t = se(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        },
        wrapInner: function(e) {
          return se.isFunction(e) ? this.each(function(t) {
            se(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
            var t = se(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        },
        wrap: function(e) {
          var t = se.isFunction(e);
          return this.each(function(n) {
            se(this).wrapAll(t ? e.call(this, n) : e)
          })
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
            se(this).replaceWith(this.childNodes)
          }), this
        }
      }), se.expr.pseudos.hidden = function(e) {
        return !se.expr.pseudos.visible(e)
      }, se.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, se.ajaxSettings.xhr = function() {
        try {
          return new e.XMLHttpRequest
        } catch (e) {}
      };
      var Ft = {
          0: 200,
          1223: 204
        },
        Dt = se.ajaxSettings.xhr();
      ae.cors = !!Dt && "withCredentials" in Dt, ae.ajax = Dt = !!Dt, se.ajaxTransport(function(t) {
        var n, r;
        if (ae.cors || Dt && !t.crossDomain) return {
          send: function(i, o) {
            var a, s = t.xhr();
            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            n = function(e) {
              return function() {
                n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                  binary: s.response
                } : {
                  text: s.responseText
                }, s.getAllResponseHeaders()))
              }
            }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
              4 === s.readyState && e.setTimeout(function() {
                n && r()
              })
            }, n = n("abort");
            try {
              s.send(t.hasContent && t.data || null)
            } catch (e) {
              if (n) throw e
            }
          },
          abort: function() {
            n && n()
          }
        }
      }), se.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
      }), se.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return se.globalEval(e), e
          }
        }
      }), se.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), se.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function(r, i) {
              t = se("<script>").prop({
                charset: e.scriptCharset,
                src: e.url
              }).on("load error", n = function(e) {
                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
              }), G.head.appendChild(t[0])
            },
            abort: function() {
              n && n()
            }
          }
        }
      });
      var Ht = [],
        zt = /(=)\?(?=&|$)|\?\?/;
      se.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Ht.pop() || se.expando + "_" + yt++;
          return this[e] = !0, e
        }
      }), se.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = se.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
          return a || se.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
          a = arguments
        }, r.always(function() {
          void 0 === o ? se(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), a && se.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
      }), ae.createHTMLDocument = function() {
        var e = G.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
      }(), se.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (ae.createHTMLDocument ? ((r = (t = G.implementation.createHTMLDocument("")).createElement("base")).href = G.location.href, t.head.appendChild(r)) : t = G), i = me.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && se(o).remove(), se.merge([], i.childNodes))
      }, se.fn.load = function(e, t, n) {
        var r, i, o, a = this,
          s = e.indexOf(" ");
        return s > -1 && (r = _(e.slice(s)), e = e.slice(0, s)), se.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && se.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function(e) {
          o = arguments, a.html(r ? se("<div>").append(se.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
          a.each(function() {
            n.apply(this, o || [e.responseText, t, e])
          })
        }), this
      }, se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        se.fn[t] = function(e) {
          return this.on(t, e)
        }
      }), se.expr.pseudos.animated = function(e) {
        return se.grep(se.timers, function(t) {
          return e === t.elem
        }).length
      }, se.offset = {
        setOffset: function(e, t, n) {
          var r, i, o, a, s, l, u = se.css(e, "position"),
            c = se(e),
            f = {};
          "static" === u && (e.style.position = "relative"), s = c.offset(), o = se.css(e, "top"), l = se.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), se.isFunction(t) && (t = t.call(e, n, se.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
      }, se.fn.extend({
        offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
            se.offset.setOffset(this, e, t)
          });
          var t, n, r, i, o = this[0];
          if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
            top: r.top + i.pageYOffset - n.clientTop,
            left: r.left + i.pageXOffset - n.clientLeft
          }) : {
            top: 0,
            left: 0
          }
        },
        position: function() {
          if (this[0]) {
            var e, t, n = this[0],
              r = {
                top: 0,
                left: 0
              };
            return "fixed" === se.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
              top: r.top + se.css(e[0], "borderTopWidth", !0),
              left: r.left + se.css(e[0], "borderLeftWidth", !0)
            }), {
              top: t.top - r.top - se.css(n, "marginTop", !0),
              left: t.left - r.left - se.css(n, "marginLeft", !0)
            }
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (var e = this.offsetParent; e && "static" === se.css(e, "position");) e = e.offsetParent;
            return e || _e
          })
        }
      }), se.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(e, t) {
        var n = "pageYOffset" === t;
        se.fn[e] = function(r) {
          return ke(this, function(e, r, i) {
            var o;
            if (se.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
        }
      }), se.each(["top", "left"], function(e, t) {
        se.cssHooks[t] = L(ae.pixelPosition, function(e, n) {
          if (n) return n = j(e, t), Ze.test(n) ? se(e).position()[t] + "px" : n
        })
      }), se.each({
        Height: "height",
        Width: "width"
      }, function(e, t) {
        se.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(n, r) {
          se.fn[r] = function(i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return ke(this, function(t, n, i) {
              var o;
              return se.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? se.css(t, n, s) : se.style(t, n, i, s)
            }, t, a ? i : void 0, a)
          }
        })
      }), se.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
          return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
      }), se.holdReady = function(e) {
        e ? se.readyWait++ : se.ready(!0)
      }, se.isArray = Array.isArray, se.parseJSON = JSON.parse, se.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return se
      });
      var Vt = e.jQuery,
        Ot = e.$;
      return se.noConflict = function(t) {
        return e.$ === se && (e.$ = Ot), t && e.jQuery === se && (e.jQuery = Vt), se
      }, t || (e.jQuery = e.$ = se), se
    })
  }, {}],
  3: [function(e, t, n) {
    ! function(e, n) {
      var r = function(e, t) {
        "use strict";
        if (!t.getElementsByClassName) return;
        var n, r, i = t.documentElement,
          o = e.Date,
          a = e.HTMLPictureElement,
          s = e.addEventListener,
          l = e.setTimeout,
          u = e.requestAnimationFrame || l,
          c = e.requestIdleCallback,
          f = /^picture$/i,
          d = ["load", "error", "lazyincluded", "_lazyloaded"],
          p = {},
          h = Array.prototype.forEach,
          g = function(e, t) {
            return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(e.getAttribute("class") || "") && p[t]
          },
          m = function(e, t) {
            g(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
          },
          y = function(e, t) {
            var n;
            (n = g(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " "))
          },
          v = function(e, t, n) {
            var r = n ? "addEventListener" : "removeEventListener";
            n && v(e, t), d.forEach(function(n) {
              e[r](n, t)
            })
          },
          b = function(e, r, i, o, a) {
            var s = t.createEvent("CustomEvent");
            return i || (i = {}), i.instance = n, s.initCustomEvent(r, !o, !a, i), e.dispatchEvent(s), s
          },
          x = function(t, n) {
            var i;
            !a && (i = e.picturefill || r.pf) ? i({
              reevaluate: !0,
              elements: [t]
            }) : n && n.src && (t.src = n.src)
          },
          w = function(e, t) {
            return (getComputedStyle(e, null) || {})[t]
          },
          C = function(e, t, n) {
            for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
            return n
          },
          T = function() {
            var e, n, r = [],
              i = [],
              o = r,
              a = function() {
                var t = o;
                for (o = r.length ? i : r, e = !0, n = !1; t.length;) t.shift()();
                e = !1
              },
              s = function(r, i) {
                e && !i ? r.apply(this, arguments) : (o.push(r), n || (n = !0, (t.hidden ? l : u)(a)))
              };
            return s._lsFlush = a, s
          }(),
          S = function(e, t) {
            return t ? function() {
              T(e)
            } : function() {
              var t = this,
                n = arguments;
              T(function() {
                e.apply(t, n)
              })
            }
          },
          k = function(e) {
            var t, n = 0,
              i = r.ricTimeout,
              a = function() {
                t = !1, n = o.now(), e()
              },
              s = c && r.ricTimeout ? function() {
                c(a, {
                  timeout: i
                }), i !== r.ricTimeout && (i = r.ricTimeout)
              } : S(function() {
                l(a)
              }, !0);
            return function(e) {
              var r;
              (e = !0 === e) && (i = 33), t || (t = !0, (r = 125 - (o.now() - n)) < 0 && (r = 0), e || r < 9 && c ? s() : l(s, r))
            }
          },
          E = function(e) {
            var t, n, r = function() {
                t = null, e()
              },
              i = function() {
                var e = o.now() - n;
                e < 99 ? l(i, 99 - e) : (c || r)(r)
              };
            return function() {
              n = o.now(), t || (t = l(i, 99))
            }
          };
        ! function() {
          var t, n = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: .8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 300
          };
          r = e.lazySizesConfig || e.lazysizesConfig || {};
          for (t in n) t in r || (r[t] = n[t]);
          e.lazySizesConfig = r, l(function() {
            r.init && N()
          })
        }();
        var A = function() {
            var a, u, c, d, p, C, A, N, j, L, q, F, D, H, z = /^img$/i,
              V = /^iframe$/i,
              O = "onscroll" in e && !/glebot/.test(navigator.userAgent),
              $ = 0,
              R = 0,
              M = -1,
              _ = function(e) {
                R--, e && e.target && v(e.target, _), (!e || R < 0 || !e.target) && (R = 0)
              },
              W = function(e, n) {
                var r, o = e,
                  a = "hidden" == w(t.body, "visibility") || "hidden" != w(e, "visibility");
                for (N -= n, q += n, j -= n, L += n; a && (o = o.offsetParent) && o != t.body && o != i;)(a = (w(o, "opacity") || 1) > 0) && "visible" != w(o, "overflow") && (r = o.getBoundingClientRect(), a = L > r.left && j < r.right && q > r.top - 1 && N < r.bottom + 1);
                return a
              },
              I = function() {
                var e, o, s, l, c, f, p, h, g, m = n.elements;
                if ((d = r.loadMode) && R < 8 && (e = m.length)) {
                  o = 0, M++, null == D && ("expand" in r || (r.expand = i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370), F = r.expand, D = F * r.expFactor), $ < D && R < 1 && M > 2 && d > 2 && !t.hidden ? ($ = D, M = 0) : $ = d > 1 && M > 1 && R < 6 ? F : 0;
                  for (; o < e; o++)
                    if (m[o] && !m[o]._lazyRace)
                      if (O)
                        if ((h = m[o].getAttribute("data-expand")) && (f = 1 * h) || (f = $), g !== f && (C = innerWidth + f * H, A = innerHeight + f, p = -1 * f, g = f), s = m[o].getBoundingClientRect(), (q = s.bottom) >= p && (N = s.top) <= A && (L = s.right) >= p * H && (j = s.left) <= C && (q || L || j || N) && (r.loadHidden || "hidden" != w(m[o], "visibility")) && (u && R < 3 && !h && (d < 3 || M < 4) || W(m[o], f))) {
                          if (J(m[o]), c = !0, R > 9) break
                        } else !c && u && !l && R < 4 && M < 4 && d > 2 && (a[0] || r.preloadAfterLoad) && (a[0] || !h && (q || L || j || N || "auto" != m[o].getAttribute(r.sizesAttr))) && (l = a[0] || m[o]);
                  else J(m[o]);
                  l && !c && J(l)
                }
              },
              B = k(I),
              X = function(e) {
                m(e.target, r.loadedClass), y(e.target, r.loadingClass), v(e.target, Y), b(e.target, "lazyloaded")
              },
              U = S(X),
              Y = function(e) {
                U({
                  target: e.target
                })
              },
              G = function(e) {
                var t, n = e.getAttribute(r.srcsetAttr);
                (t = r.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
              },
              Q = S(function(e, t, n, i, o) {
                var a, s, u, d, p, g;
                (p = b(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? m(e, r.autosizesClass) : e.setAttribute("sizes", i)), s = e.getAttribute(r.srcsetAttr), a = e.getAttribute(r.srcAttr), o && (u = e.parentNode, d = u && f.test(u.nodeName || "")), g = t.firesLoad || "src" in e && (s || a || d), p = {
                  target: e
                }, g && (v(e, _, !0), clearTimeout(c), c = l(_, 2500), m(e, r.loadingClass), v(e, Y, !0)), d && h.call(u.getElementsByTagName("source"), G), s ? e.setAttribute("srcset", s) : a && !d && (V.test(e.nodeName) ? function(e, t) {
                  try {
                    e.contentWindow.location.replace(t)
                  } catch (n) {
                    e.src = t
                  }
                }(e, a) : e.src = a), o && (s || d) && x(e, {
                  src: a
                })), e._lazyRace && delete e._lazyRace, y(e, r.lazyClass), T(function() {
                  (!g || e.complete && e.naturalWidth > 1) && (g ? _(p) : R--, X(p))
                }, !0)
              }),
              J = function(e) {
                var t, n = z.test(e.nodeName),
                  i = n && (e.getAttribute(r.sizesAttr) || e.getAttribute("sizes")),
                  o = "auto" == i;
                (!o && u || !n || !e.getAttribute("src") && !e.srcset || e.complete || g(e, r.errorClass) || !g(e, r.lazyClass)) && (t = b(e, "lazyunveilread").detail, o && P.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, R++, Q(e, t, o, i, n))
              },
              Z = function() {
                if (!u)
                  if (o.now() - p < 999) l(Z, 999);
                  else {
                    var e = E(function() {
                      r.loadMode = 3, B()
                    });
                    u = !0, r.loadMode = 3, B(), s("scroll", function() {
                      3 == r.loadMode && (r.loadMode = 2), e()
                    }, !0)
                  }
              };
            return {
              _: function() {
                p = o.now(), n.elements = t.getElementsByClassName(r.lazyClass), a = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass), H = r.hFac, s("scroll", B, !0), s("resize", B, !0), e.MutationObserver ? new MutationObserver(B).observe(i, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0
                }) : (i.addEventListener("DOMNodeInserted", B, !0), i.addEventListener("DOMAttrModified", B, !0), setInterval(B, 999)), s("hashchange", B, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                  t.addEventListener(e, B, !0)
                }), /d$|^c/.test(t.readyState) ? Z() : (s("load", Z), t.addEventListener("DOMContentLoaded", B), l(Z, 2e4)), n.elements.length ? (I(), T._lsFlush()) : B()
              },
              checkElems: B,
              unveil: J
            }
          }(),
          P = function() {
            var e, n = S(function(e, t, n, r) {
                var i, o, a;
                if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), f.test(t.nodeName || ""))
                  for (i = t.getElementsByTagName("source"), o = 0, a = i.length; o < a; o++) i[o].setAttribute("sizes", r);
                n.detail.dataAttr || x(e, n.detail)
              }),
              i = function(e, t, r) {
                var i, o = e.parentNode;
                o && (r = C(e, o, r), (i = b(e, "lazybeforesizes", {
                  width: r,
                  dataAttr: !!t
                })).defaultPrevented || (r = i.detail.width) && r !== e._lazysizesWidth && n(e, o, i, r))
              },
              o = E(function() {
                var t, n = e.length;
                if (n)
                  for (t = 0; t < n; t++) i(e[t])
              });
            return {
              _: function() {
                e = t.getElementsByClassName(r.autosizesClass), s("resize", o)
              },
              checkElems: o,
              updateElem: i
            }
          }(),
          N = function() {
            N.i || (N.i = !0, P._(), A._())
          };
        return n = {
          cfg: r,
          autoSizer: P,
          loader: A,
          init: N,
          uP: x,
          aC: m,
          rC: y,
          hC: g,
          fire: b,
          gW: C,
          rAF: T
        }
      }(e, e.document);
      e.lazySizes = r, "object" == typeof t && t.exports && (t.exports = r)
    }(window)
  }, {}],
  4: [function(e, t, n) {
    ! function(n, r) {
      var i = function() {
        r(n.lazySizes), n.removeEventListener("lazyunveilread", i, !0)
      };
      r = r.bind(null, n, n.document), "object" == typeof t && t.exports ? r(e("lazysizes")) : n.lazySizes ? i() : n.addEventListener("lazyunveilread", i, !0)
    }(window, function(e, t, n) {
      "use strict";

      function r(e, n) {
        if (!a[e]) {
          var r = t.createElement(n ? "link" : "script"),
            i = t.getElementsByTagName("script")[0];
          n ? (r.rel = "stylesheet", r.href = e) : r.src = e, a[e] = !0, a[r.src || r.href] = !0, i.parentNode.insertBefore(r, i)
        }
      }
      var i, o, a = {};
      t.addEventListener && (o = /\(|\)|\s|'/, i = function(e, n) {
        var r = t.createElement("img");
        r.onload = function() {
          r.onload = null, r.onerror = null, r = null, n()
        }, r.onerror = r.onload, r.src = e, r && r.complete && r.onload && r.onload()
      }, addEventListener("lazybeforeunveil", function(e) {
        if (e.detail.instance == n) {
          var t, a, s;
          e.defaultPrevented || ("none" == e.target.preload && (e.target.preload = "auto"), (t = e.target.getAttribute("data-link")) && r(t, !0), (t = e.target.getAttribute("data-script")) && r(t), (t = e.target.getAttribute("data-require")) && (n.cfg.requireJs ? n.cfg.requireJs([t]) : r(t)), (a = e.target.getAttribute("data-bg")) && (e.detail.firesLoad = !0, i(a, function() {
            e.target.style.backgroundImage = "url(" + (o.test(a) ? JSON.stringify(a) : a) + ")", e.detail.firesLoad = !1, n.fire(e.target, "_lazyloaded", {}, !0, !0)
          })), (s = e.target.getAttribute("data-poster")) && (e.detail.firesLoad = !0, i(s, function() {
            e.target.poster = s, e.detail.firesLoad = !1, n.fire(e.target, "_lazyloaded", {}, !0, !0)
          })))
        }
      }, !1))
    })
  }, {
    lazysizes: 3
  }],
  5: [function(e, t, n) {
    ! function(e) {
      "use strict";

      function t(e) {
        var t = e.length,
          r = n.type(e);
        return "function" !== r && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
      }
      if (!e.jQuery) {
        var n = function(e, t) {
          return new n.fn.init(e, t)
        };
        n.isWindow = function(e) {
          return e && e === e.window
        }, n.type = function(e) {
          return e ? "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e : e + ""
        }, n.isArray = Array.isArray || function(e) {
          return "array" === n.type(e)
        }, n.isPlainObject = function(e) {
          var t;
          if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
          try {
            if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
          } catch (e) {
            return !1
          }
          for (t in e);
          return void 0 === t || o.call(e, t)
        }, n.each = function(e, n, r) {
          var i = 0,
            o = e.length,
            a = t(e);
          if (r) {
            if (a)
              for (; i < o && !1 !== n.apply(e[i], r); i++);
            else
              for (i in e)
                if (e.hasOwnProperty(i) && !1 === n.apply(e[i], r)) break
          } else if (a)
            for (; i < o && !1 !== n.call(e[i], i, e[i]); i++);
          else
            for (i in e)
              if (e.hasOwnProperty(i) && !1 === n.call(e[i], i, e[i])) break;
          return e
        }, n.data = function(e, t, i) {
          if (void 0 === i) {
            var o = e[n.expando],
              a = o && r[o];
            if (void 0 === t) return a;
            if (a && t in a) return a[t]
          } else if (void 0 !== t) {
            var s = e[n.expando] || (e[n.expando] = ++n.uuid);
            return r[s] = r[s] || {}, r[s][t] = i, i
          }
        }, n.removeData = function(e, t) {
          var i = e[n.expando],
            o = i && r[i];
          o && (t ? n.each(t, function(e, t) {
            delete o[t]
          }) : delete r[i])
        }, n.extend = function() {
          var e, t, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
          for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
            if (o = arguments[l])
              for (i in o) o.hasOwnProperty(i) && (e = s[i], s !== (r = o[i]) && (c && r && (n.isPlainObject(r) || (t = n.isArray(r))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[i] = n.extend(c, a, r)) : void 0 !== r && (s[i] = r)));
          return s
        }, n.queue = function(e, r, i) {
          if (e) {
            r = (r || "fx") + "queue";
            var o = n.data(e, r);
            return i ? (!o || n.isArray(i) ? o = n.data(e, r, function(e, n) {
              var r = n || [];
              return e && (t(Object(e)) ? function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
                if (n != n)
                  for (; void 0 !== t[r];) e[i++] = t[r++];
                e.length = i
              }(r, "string" == typeof e ? [e] : e) : [].push.call(r, e)), r
            }(i)) : o.push(i), o) : o || []
          }
        }, n.dequeue = function(e, t) {
          n.each(e.nodeType ? [e] : e, function(e, r) {
            t = t || "fx";
            var i = n.queue(r, t),
              o = i.shift();
            "inprogress" === o && (o = i.shift()), o && ("fx" === t && i.unshift("inprogress"), o.call(r, function() {
              n.dequeue(r, t)
            }))
          })
        }, n.fn = n.prototype = {
          init: function(e) {
            if (e.nodeType) return this[0] = e, this;
            throw new Error("Not a DOM node.")
          },
          offset: function() {
            var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
              top: 0,
              left: 0
            };
            return {
              top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
              left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
            }
          },
          position: function() {
            var e = this[0],
              t = function(e) {
                for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                return t || document
              }(e),
              r = this.offset(),
              i = /^(?:body|html)$/i.test(t.nodeName) ? {
                top: 0,
                left: 0
              } : n(t).offset();
            return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, t.style && (i.top += parseFloat(t.style.borderTopWidth) || 0, i.left += parseFloat(t.style.borderLeftWidth) || 0), {
              top: r.top - i.top,
              left: r.left - i.left
            }
          }
        };
        var r = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var i = {}, o = i.hasOwnProperty, a = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) i["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, e.Velocity = {
          Utilities: n
        }
      }
    }(window),
    function(e) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports ? t.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
      "use strict";
      return function(e, t, n, r) {
        function i(e) {
          return v.isWrapped(e) ? e = m.call(e) : v.isNode(e) && (e = [e]), e
        }

        function o(e) {
          var t = d.data(e, "velocity");
          return null === t ? r : t
        }

        function a(e, t) {
          var n = o(e);
          n && n.delayTimer && !n.delayPaused && (n.delayRemaining = n.delay - t + n.delayBegin, n.delayPaused = !0, clearTimeout(n.delayTimer.setTimeout))
        }

        function s(e, t) {
          var n = o(e);
          n && n.delayTimer && n.delayPaused && (n.delayPaused = !1, n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining))
        }

        function l(e, n, r, i) {
          function o(e, t) {
            return 1 - 3 * t + 3 * e
          }

          function a(e, t) {
            return 3 * t - 6 * e
          }

          function s(e) {
            return 3 * e
          }

          function l(e, t, n) {
            return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
          }

          function u(e, t, n) {
            return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
          }

          function c(t) {
            for (var n = 0, i = 1, o = m - 1; i !== o && x[i] <= t; ++i) n += y;
            var a = n + (t - x[--i]) / (x[i + 1] - x[i]) * y,
              s = u(a, e, r);
            return s >= p ? function(t, n) {
              for (var i = 0; i < d; ++i) {
                var o = u(n, e, r);
                if (0 === o) return n;
                n -= (l(n, e, r) - t) / o
              }
              return n
            }(t, a) : 0 === s ? a : function(t, n, i) {
              var o, a, s = 0;
              do {
                (o = l(a = n + (i - n) / 2, e, r) - t) > 0 ? i = a : n = a
              } while (Math.abs(o) > h && ++s < g);
              return a
            }(t, n, n + y)
          }

          function f() {
            w = !0, e === n && r === i || function() {
              for (var t = 0; t < m; ++t) x[t] = l(t * y, e, r)
            }()
          }
          var d = 4,
            p = .001,
            h = 1e-7,
            g = 10,
            m = 11,
            y = 1 / (m - 1),
            v = "Float32Array" in t;
          if (4 !== arguments.length) return !1;
          for (var b = 0; b < 4; ++b)
            if ("number" != typeof arguments[b] || isNaN(arguments[b]) || !isFinite(arguments[b])) return !1;
          e = Math.min(e, 1), r = Math.min(r, 1), e = Math.max(e, 0), r = Math.max(r, 0);
          var x = v ? new Float32Array(m) : new Array(m),
            w = !1,
            C = function(t) {
              return w || f(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(c(t), n, i)
            };
          C.getControlPoints = function() {
            return [{
              x: e,
              y: n
            }, {
              x: r,
              y: i
            }]
          };
          var T = "generateBezier(" + [e, n, r, i] + ")";
          return C.toString = function() {
            return T
          }, C
        }

        function u(e, t) {
          var n = e;
          return v.isString(e) ? C.Easings[e] || (n = !1) : n = v.isArray(e) && 1 === e.length ? function(e) {
            return function(t) {
              return Math.round(t * e) * (1 / e)
            }
          }.apply(null, e) : v.isArray(e) && 2 === e.length ? T.apply(null, e.concat([t])) : !(!v.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === n && (n = C.Easings[C.defaults.easing] ? C.defaults.easing : w), n
        }

        function c(e) {
          if (e) {
            var t = C.timestamp && !0 !== e ? e : g.now(),
              n = C.State.calls.length;
            n > 1e4 && (C.State.calls = function(e) {
              for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                var i = e[t];
                i && r.push(i)
              }
              return r
            }(C.State.calls), n = C.State.calls.length);
            for (var i = 0; i < n; i++)
              if (C.State.calls[i]) {
                var a = C.State.calls[i],
                  s = a[0],
                  l = a[2],
                  u = a[3],
                  h = !!u,
                  m = null,
                  y = a[5],
                  b = a[6];
                if (u || (u = C.State.calls[i][3] = t - 16), y) {
                  if (!0 !== y.resume) continue;
                  u = a[3] = Math.round(t - b - 16), a[5] = null
                }
                b = a[6] = t - u;
                for (var x = Math.min(b / l.duration, 1), w = 0, T = s.length; w < T; w++) {
                  var k = s[w],
                    A = k.element;
                  if (o(A)) {
                    var P = !1;
                    if (l.display !== r && null !== l.display && "none" !== l.display) {
                      if ("flex" === l.display) {
                        d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                          S.setPropertyValue(A, "display", t)
                        })
                      }
                      S.setPropertyValue(A, "display", l.display)
                    }
                    l.visibility !== r && "hidden" !== l.visibility && S.setPropertyValue(A, "visibility", l.visibility);
                    for (var N in k)
                      if (k.hasOwnProperty(N) && "element" !== N) {
                        var j, L = k[N],
                          q = v.isString(L.easing) ? C.Easings[L.easing] : L.easing;
                        if (v.isString(L.pattern)) {
                          var F = 1 === x ? function(e, t, n) {
                            var r = L.endValue[t];
                            return n ? Math.round(r) : r
                          } : function(e, t, n) {
                            var r = L.startValue[t],
                              i = L.endValue[t] - r,
                              o = r + i * q(x, l, i);
                            return n ? Math.round(o) : o
                          };
                          j = L.pattern.replace(/{(\d+)(!)?}/g, F)
                        } else if (1 === x) j = L.endValue;
                        else {
                          var D = L.endValue - L.startValue;
                          j = L.startValue + D * q(x, l, D)
                        }
                        if (!h && j === L.currentValue) continue;
                        if (L.currentValue = j, "tween" === N) m = j;
                        else {
                          var H;
                          if (S.Hooks.registered[N]) {
                            H = S.Hooks.getRoot(N);
                            var z = o(A).rootPropertyValueCache[H];
                            z && (L.rootPropertyValue = z)
                          }
                          var V = S.setPropertyValue(A, N, L.currentValue + (p < 9 && 0 === parseFloat(j) ? "" : L.unitType), L.rootPropertyValue, L.scrollData);
                          S.Hooks.registered[N] && (S.Normalizations.registered[H] ? o(A).rootPropertyValueCache[H] = S.Normalizations.registered[H]("extract", null, V[1]) : o(A).rootPropertyValueCache[H] = V[1]), "transform" === V[0] && (P = !0)
                        }
                      } l.mobileHA && o(A).transformCache.translate3d === r && (o(A).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && S.flushTransformCache(A)
                  }
                }
                l.display !== r && "none" !== l.display && (C.State.calls[i][2].display = !1), l.visibility !== r && "hidden" !== l.visibility && (C.State.calls[i][2].visibility = !1), l.progress && l.progress.call(a[1], a[1], x, Math.max(0, u + l.duration - t), u, m), 1 === x && f(i)
              }
          }
          C.State.isTicking && E(c)
        }

        function f(e, t) {
          if (!C.State.calls[e]) return !1;
          for (var n = C.State.calls[e][0], i = C.State.calls[e][1], a = C.State.calls[e][2], s = C.State.calls[e][4], l = !1, u = 0, c = n.length; u < c; u++) {
            var f = n[u].element;
            t || a.loop || ("none" === a.display && S.setPropertyValue(f, "display", a.display), "hidden" === a.visibility && S.setPropertyValue(f, "visibility", a.visibility));
            var p = o(f);
            if (!0 !== a.loop && (d.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(d.queue(f)[1])) && p) {
              p.isAnimating = !1, p.rootPropertyValueCache = {};
              var h = !1;
              d.each(S.Lists.transforms3D, function(e, t) {
                var n = /^scale/.test(t) ? 1 : 0,
                  i = p.transformCache[t];
                p.transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (h = !0, delete p.transformCache[t])
              }), a.mobileHA && (h = !0, delete p.transformCache.translate3d), h && S.flushTransformCache(f), S.Values.removeClass(f, "velocity-animating")
            }
            if (!t && a.complete && !a.loop && u === c - 1) try {
              a.complete.call(i, i)
            } catch (e) {
              setTimeout(function() {
                throw e
              }, 1)
            }
            s && !0 !== a.loop && s(i), p && !0 === a.loop && !t && (d.each(p.tweensContainer, function(e, t) {
              if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                var n = t.startValue;
                t.startValue = t.endValue, t.endValue = n
              }
              /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
            }), C(f, "reverse", {
              loop: !0,
              delay: a.delay
            })), !1 !== a.queue && d.dequeue(f, a.queue)
          }
          C.State.calls[e] = !1;
          for (var g = 0, m = C.State.calls.length; g < m; g++)
            if (!1 !== C.State.calls[g]) {
              l = !0;
              break
            }! 1 === l && (C.State.isTicking = !1, delete C.State.calls, C.State.calls = [])
        }
        var d, p = function() {
            if (n.documentMode) return n.documentMode;
            for (var e = 7; e > 4; e--) {
              var t = n.createElement("div");
              if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
            }
            return r
          }(),
          h = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
              var n, r = (new Date).getTime();
              return n = Math.max(0, 16 - (r - e)), e = r + n, setTimeout(function() {
                t(r + n)
              }, n)
            }
          }(),
          g = function() {
            var e = t.performance || {};
            if ("function" != typeof e.now) {
              var n = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
              e.now = function() {
                return (new Date).getTime() - n
              }
            }
            return e
          }(),
          m = function() {
            var e = Array.prototype.slice;
            try {
              return e.call(n.documentElement), e
            } catch (t) {
              return function(t, n) {
                var r = this.length;
                if ("number" != typeof t && (t = 0), "number" != typeof n && (n = r), this.slice) return e.call(this, t, n);
                var i, o = [],
                  a = t >= 0 ? t : Math.max(0, r + t),
                  s = (n < 0 ? r + n : Math.min(n, r)) - a;
                if (s > 0)
                  if (o = new Array(s), this.charAt)
                    for (i = 0; i < s; i++) o[i] = this.charAt(a + i);
                  else
                    for (i = 0; i < s; i++) o[i] = this[a + i];
                return o
              }
            }
          }(),
          y = function() {
            return Array.prototype.includes ? function(e, t) {
              return e.includes(t)
            } : Array.prototype.indexOf ? function(e, t) {
              return e.indexOf(t) >= 0
            } : function(e, t) {
              for (var n = 0; n < e.length; n++)
                if (e[n] === t) return !0;
              return !1
            }
          },
          v = {
            isNumber: function(e) {
              return "number" == typeof e
            },
            isString: function(e) {
              return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
              return "[object Array]" === Object.prototype.toString.call(e)
            },
            isFunction: function(e) {
              return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
              return e && e.nodeType
            },
            isWrapped: function(e) {
              return e && e !== t && v.isNumber(e.length) && !v.isString(e) && !v.isFunction(e) && !v.isNode(e) && (0 === e.length || v.isNode(e[0]))
            },
            isSVG: function(e) {
              return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
              for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
              return !0
            }
          },
          b = !1;
        if (e.fn && e.fn.jquery ? (d = e, b = !0) : d = t.Velocity.Utilities, p <= 8 && !b) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(p <= 7)) {
          var x = 400,
            w = "swing",
            C = {
              State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: n.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: [],
                delayedElements: {
                  count: 0
                }
              },
              CSS: {},
              Utilities: d,
              Redirects: {},
              Easings: {},
              Promise: t.Promise,
              defaults: {
                queue: "",
                duration: x,
                easing: w,
                begin: r,
                complete: r,
                progress: r,
                display: r,
                visibility: r,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0,
                promiseRejectEmpty: !0
              },
              init: function(e) {
                d.data(e, "velocity", {
                  isSVG: v.isSVG(e),
                  isAnimating: !1,
                  computedStyle: null,
                  tweensContainer: null,
                  rootPropertyValueCache: {},
                  transformCache: {}
                })
              },
              hook: null,
              mock: !1,
              version: {
                major: 1,
                minor: 5,
                patch: 0
              },
              debug: !1,
              timestamp: !0,
              pauseAll: function(e) {
                var t = (new Date).getTime();
                d.each(C.State.calls, function(t, n) {
                  if (n) {
                    if (e !== r && (n[2].queue !== e || !1 === n[2].queue)) return !0;
                    n[5] = {
                      resume: !1
                    }
                  }
                }), d.each(C.State.delayedElements, function(e, n) {
                  n && a(n, t)
                })
              },
              resumeAll: function(e) {
                (new Date).getTime();
                d.each(C.State.calls, function(t, n) {
                  if (n) {
                    if (e !== r && (n[2].queue !== e || !1 === n[2].queue)) return !0;
                    n[5] && (n[5].resume = !0)
                  }
                }), d.each(C.State.delayedElements, function(e, t) {
                  t && s(t)
                })
              }
            };
          t.pageYOffset !== r ? (C.State.scrollAnchor = t, C.State.scrollPropertyLeft = "pageXOffset", C.State.scrollPropertyTop = "pageYOffset") : (C.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, C.State.scrollPropertyLeft = "scrollLeft", C.State.scrollPropertyTop = "scrollTop");
          var T = function() {
            function e(e) {
              return -e.tension * e.x - e.friction * e.v
            }

            function t(t, n, r) {
              var i = {
                x: t.x + r.dx * n,
                v: t.v + r.dv * n,
                tension: t.tension,
                friction: t.friction
              };
              return {
                dx: i.v,
                dv: e(i)
              }
            }

            function n(n, r) {
              var i = {
                  dx: n.v,
                  dv: e(n)
                },
                o = t(n, .5 * r, i),
                a = t(n, .5 * r, o),
                s = t(n, r, a),
                l = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx),
                u = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
              return n.x = n.x + l * r, n.v = n.v + u * r, n
            }
            return function e(t, r, i) {
              var o, a, s, l = {
                  x: -1,
                  v: 0,
                  tension: null,
                  friction: null
                },
                u = [0],
                c = 0;
              for (t = parseFloat(t) || 500, r = parseFloat(r) || 20, i = i || null, l.tension = t, l.friction = r, a = (o = null !== i) ? (c = e(t, r)) / i * .016 : .016;;)
                if (s = n(s || l, a), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4)) break;
              return o ? function(e) {
                return u[e * (u.length - 1) | 0]
              } : c
            }
          }();
          C.Easings = {
            linear: function(e) {
              return e
            },
            swing: function(e) {
              return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
              return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
          }, d.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
          ], function(e, t) {
            C.Easings[t[0]] = l.apply(null, t[1])
          });
          var S = C.CSS = {
            RegEx: {
              isHex: /^#([A-f\d]{3}){1,2}$/i,
              valueUnwrap: /^[A-z]+\((.*)\)$/i,
              wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
              valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
              colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
              transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
              transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
              units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
              colorNames: {
                aliceblue: "240,248,255",
                antiquewhite: "250,235,215",
                aquamarine: "127,255,212",
                aqua: "0,255,255",
                azure: "240,255,255",
                beige: "245,245,220",
                bisque: "255,228,196",
                black: "0,0,0",
                blanchedalmond: "255,235,205",
                blueviolet: "138,43,226",
                blue: "0,0,255",
                brown: "165,42,42",
                burlywood: "222,184,135",
                cadetblue: "95,158,160",
                chartreuse: "127,255,0",
                chocolate: "210,105,30",
                coral: "255,127,80",
                cornflowerblue: "100,149,237",
                cornsilk: "255,248,220",
                crimson: "220,20,60",
                cyan: "0,255,255",
                darkblue: "0,0,139",
                darkcyan: "0,139,139",
                darkgoldenrod: "184,134,11",
                darkgray: "169,169,169",
                darkgrey: "169,169,169",
                darkgreen: "0,100,0",
                darkkhaki: "189,183,107",
                darkmagenta: "139,0,139",
                darkolivegreen: "85,107,47",
                darkorange: "255,140,0",
                darkorchid: "153,50,204",
                darkred: "139,0,0",
                darksalmon: "233,150,122",
                darkseagreen: "143,188,143",
                darkslateblue: "72,61,139",
                darkslategray: "47,79,79",
                darkturquoise: "0,206,209",
                darkviolet: "148,0,211",
                deeppink: "255,20,147",
                deepskyblue: "0,191,255",
                dimgray: "105,105,105",
                dimgrey: "105,105,105",
                dodgerblue: "30,144,255",
                firebrick: "178,34,34",
                floralwhite: "255,250,240",
                forestgreen: "34,139,34",
                fuchsia: "255,0,255",
                gainsboro: "220,220,220",
                ghostwhite: "248,248,255",
                gold: "255,215,0",
                goldenrod: "218,165,32",
                gray: "128,128,128",
                grey: "128,128,128",
                greenyellow: "173,255,47",
                green: "0,128,0",
                honeydew: "240,255,240",
                hotpink: "255,105,180",
                indianred: "205,92,92",
                indigo: "75,0,130",
                ivory: "255,255,240",
                khaki: "240,230,140",
                lavenderblush: "255,240,245",
                lavender: "230,230,250",
                lawngreen: "124,252,0",
                lemonchiffon: "255,250,205",
                lightblue: "173,216,230",
                lightcoral: "240,128,128",
                lightcyan: "224,255,255",
                lightgoldenrodyellow: "250,250,210",
                lightgray: "211,211,211",
                lightgrey: "211,211,211",
                lightgreen: "144,238,144",
                lightpink: "255,182,193",
                lightsalmon: "255,160,122",
                lightseagreen: "32,178,170",
                lightskyblue: "135,206,250",
                lightslategray: "119,136,153",
                lightsteelblue: "176,196,222",
                lightyellow: "255,255,224",
                limegreen: "50,205,50",
                lime: "0,255,0",
                linen: "250,240,230",
                magenta: "255,0,255",
                maroon: "128,0,0",
                mediumaquamarine: "102,205,170",
                mediumblue: "0,0,205",
                mediumorchid: "186,85,211",
                mediumpurple: "147,112,219",
                mediumseagreen: "60,179,113",
                mediumslateblue: "123,104,238",
                mediumspringgreen: "0,250,154",
                mediumturquoise: "72,209,204",
                mediumvioletred: "199,21,133",
                midnightblue: "25,25,112",
                mintcream: "245,255,250",
                mistyrose: "255,228,225",
                moccasin: "255,228,181",
                navajowhite: "255,222,173",
                navy: "0,0,128",
                oldlace: "253,245,230",
                olivedrab: "107,142,35",
                olive: "128,128,0",
                orangered: "255,69,0",
                orange: "255,165,0",
                orchid: "218,112,214",
                palegoldenrod: "238,232,170",
                palegreen: "152,251,152",
                paleturquoise: "175,238,238",
                palevioletred: "219,112,147",
                papayawhip: "255,239,213",
                peachpuff: "255,218,185",
                peru: "205,133,63",
                pink: "255,192,203",
                plum: "221,160,221",
                powderblue: "176,224,230",
                purple: "128,0,128",
                red: "255,0,0",
                rosybrown: "188,143,143",
                royalblue: "65,105,225",
                saddlebrown: "139,69,19",
                salmon: "250,128,114",
                sandybrown: "244,164,96",
                seagreen: "46,139,87",
                seashell: "255,245,238",
                sienna: "160,82,45",
                silver: "192,192,192",
                skyblue: "135,206,235",
                slateblue: "106,90,205",
                slategray: "112,128,144",
                snow: "255,250,250",
                springgreen: "0,255,127",
                steelblue: "70,130,180",
                tan: "210,180,140",
                teal: "0,128,128",
                thistle: "216,191,216",
                tomato: "255,99,71",
                turquoise: "64,224,208",
                violet: "238,130,238",
                wheat: "245,222,179",
                whitesmoke: "245,245,245",
                white: "255,255,255",
                yellowgreen: "154,205,50",
                yellow: "255,255,0"
              }
            },
            Hooks: {
              templates: {
                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                backgroundPosition: ["X Y", "0% 0%"],
                transformOrigin: ["X Y Z", "50% 50% 0px"],
                perspectiveOrigin: ["X Y", "50% 50%"]
              },
              registered: {},
              register: function() {
                for (var e = 0; e < S.Lists.colors.length; e++) {
                  var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                  S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                }
                var n, r, i;
                if (p)
                  for (n in S.Hooks.templates)
                    if (S.Hooks.templates.hasOwnProperty(n)) {
                      i = (r = S.Hooks.templates[n])[0].split(" ");
                      var o = r[1].match(S.RegEx.valueSplit);
                      "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), S.Hooks.templates[n] = [i.join(" "), o.join(" ")])
                    } for (n in S.Hooks.templates)
                  if (S.Hooks.templates.hasOwnProperty(n)) {
                    i = (r = S.Hooks.templates[n])[0].split(" ");
                    for (var a in i)
                      if (i.hasOwnProperty(a)) {
                        var s = n + i[a],
                          l = a;
                        S.Hooks.registered[s] = [n, l]
                      }
                  }
              },
              getRoot: function(e) {
                var t = S.Hooks.registered[e];
                return t ? t[0] : e
              },
              getUnit: function(e, t) {
                var n = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                return n && y(S.Lists.units, n) ? n : ""
              },
              fixColors: function(e) {
                return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, n) {
                  return S.Lists.colorNames.hasOwnProperty(n) ? (t || "rgba(") + S.Lists.colorNames[n] + (t ? "" : ",1)") : t + n
                })
              },
              cleanRootPropertyValue: function(e, t) {
                return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t
              },
              extractValue: function(e, t) {
                var n = S.Hooks.registered[e];
                if (n) {
                  var r = n[0],
                    i = n[1];
                  return (t = S.Hooks.cleanRootPropertyValue(r, t)).toString().match(S.RegEx.valueSplit)[i]
                }
                return t
              },
              injectValue: function(e, t, n) {
                var r = S.Hooks.registered[e];
                if (r) {
                  var i, o = r[0],
                    a = r[1];
                  return n = S.Hooks.cleanRootPropertyValue(o, n), i = n.toString().match(S.RegEx.valueSplit), i[a] = t, i.join(" ")
                }
                return n
              }
            },
            Normalizations: {
              registered: {
                clip: function(e, t, n) {
                  switch (e) {
                    case "name":
                      return "clip";
                    case "extract":
                      var r;
                      return r = S.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (r = n.toString().match(S.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : n;
                    case "inject":
                      return "rect(" + n + ")"
                  }
                },
                blur: function(e, t, n) {
                  switch (e) {
                    case "name":
                      return C.State.isFirefox ? "filter" : "-webkit-filter";
                    case "extract":
                      var r = parseFloat(n);
                      if (!r && 0 !== r) {
                        var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                        r = i ? i[1] : 0
                      }
                      return r;
                    case "inject":
                      return parseFloat(n) ? "blur(" + n + ")" : "none"
                  }
                },
                opacity: function(e, t, n) {
                  if (p <= 8) switch (e) {
                    case "name":
                      return "filter";
                    case "extract":
                      var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                      return n = r ? r[1] / 100 : 1;
                    case "inject":
                      return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                  } else switch (e) {
                    case "name":
                      return "opacity";
                    case "extract":
                    case "inject":
                      return n
                  }
                }
              },
              register: function() {
                function e(e, t, n) {
                  if ("border-box" === S.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (n || !1)) {
                    var r, i, o = 0,
                      a = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                      s = ["padding" + a[0], "padding" + a[1], "border" + a[0] + "Width", "border" + a[1] + "Width"];
                    for (r = 0; r < s.length; r++) i = parseFloat(S.getPropertyValue(t, s[r])), isNaN(i) || (o += i);
                    return n ? -o : o
                  }
                  return 0
                }

                function t(t, n) {
                  return function(r, i, o) {
                    switch (r) {
                      case "name":
                        return t;
                      case "extract":
                        return parseFloat(o) + e(t, i, n);
                      case "inject":
                        return parseFloat(o) - e(t, i, n) + "px"
                    }
                  }
                }
                p && !(p > 9) || C.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                for (var n = 0; n < S.Lists.transformsBase.length; n++) ! function() {
                  var e = S.Lists.transformsBase[n];
                  S.Normalizations.registered[e] = function(t, n, i) {
                    switch (t) {
                      case "name":
                        return "transform";
                      case "extract":
                        return o(n) === r || o(n).transformCache[e] === r ? /^scale/i.test(e) ? 1 : 0 : o(n).transformCache[e].replace(/[()]/g, "");
                      case "inject":
                        var a = !1;
                        switch (e.substr(0, e.length - 1)) {
                          case "translate":
                            a = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                            break;
                          case "scal":
                          case "scale":
                            C.State.isAndroid && o(n).transformCache[e] === r && i < 1 && (i = 1), a = !/(\d)$/i.test(i);
                            break;
                          case "skew":
                          case "rotate":
                            a = !/(deg|\d)$/i.test(i)
                        }
                        return a || (o(n).transformCache[e] = "(" + i + ")"), o(n).transformCache[e]
                    }
                  }
                }();
                for (var i = 0; i < S.Lists.colors.length; i++) ! function() {
                  var e = S.Lists.colors[i];
                  S.Normalizations.registered[e] = function(t, n, i) {
                    switch (t) {
                      case "name":
                        return e;
                      case "extract":
                        var o;
                        if (S.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
                        else {
                          var a, s = {
                            black: "rgb(0, 0, 0)",
                            blue: "rgb(0, 0, 255)",
                            gray: "rgb(128, 128, 128)",
                            green: "rgb(0, 128, 0)",
                            red: "rgb(255, 0, 0)",
                            white: "rgb(255, 255, 255)"
                          };
                          /^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : S.RegEx.isHex.test(i) ? a = "rgb(" + S.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                        }
                        return (!p || p > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                      case "inject":
                        return /^rgb/.test(i) ? i : (p <= 8 ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                    }
                  }
                }();
                S.Normalizations.registered.innerWidth = t("width", !0), S.Normalizations.registered.innerHeight = t("height", !0), S.Normalizations.registered.outerWidth = t("width"), S.Normalizations.registered.outerHeight = t("height")
              }
            },
            Names: {
              camelCase: function(e) {
                return e.replace(/-(\w)/g, function(e, t) {
                  return t.toUpperCase()
                })
              },
              SVGAttribute: function(e) {
                var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                return (p || C.State.isAndroid && !C.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
              },
              prefixCheck: function(e) {
                if (C.State.prefixMatches[e]) return [C.State.prefixMatches[e], !0];
                for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; n < r; n++) {
                  var i;
                  if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                      return e.toUpperCase()
                    }), v.isString(C.State.prefixElement.style[i])) return C.State.prefixMatches[e] = i, [i, !0]
                }
                return [e, !1]
              }
            },
            Values: {
              hexToRgb: function(e) {
                var t;
                return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                  return t + t + n + n + r + r
                }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
              },
              isCSSNullValue: function(e) {
                return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
              },
              getUnitType: function(e) {
                return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
              },
              getDisplayType: function(e) {
                var t = e && e.tagName.toString().toLowerCase();
                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
              },
              addClass: function(e, t) {
                if (e)
                  if (e.classList) e.classList.add(t);
                  else if (v.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                else {
                  var n = e.getAttribute(p <= 7 ? "className" : "class") || "";
                  e.setAttribute("class", n + (n ? " " : "") + t)
                }
              },
              removeClass: function(e, t) {
                if (e)
                  if (e.classList) e.classList.remove(t);
                  else if (v.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                else {
                  var n = e.getAttribute(p <= 7 ? "className" : "class") || "";
                  e.setAttribute("class", n.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                }
              }
            },
            getPropertyValue: function(e, n, i, a) {
              function s(e, n) {
                var i = 0;
                if (p <= 8) i = d.css(e, n);
                else {
                  var l = !1;
                  /^(width|height)$/.test(n) && 0 === S.getPropertyValue(e, "display") && (l = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e)));
                  var u = function() {
                    l && S.setPropertyValue(e, "display", "none")
                  };
                  if (!a) {
                    if ("height" === n && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                      var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
                      return u(), c
                    }
                    if ("width" === n && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                      var f = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
                      return u(), f
                    }
                  }
                  var h;
                  h = o(e) === r ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), "" !== (i = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n]) && null !== i || (i = e.style[n]), u()
                }
                if ("auto" === i && /^(top|right|bottom|left)$/i.test(n)) {
                  var g = s(e, "position");
                  ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (i = d(e).position()[n] + "px")
                }
                return i
              }
              var l;
              if (S.Hooks.registered[n]) {
                var u = n,
                  c = S.Hooks.getRoot(u);
                i === r && (i = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (i = S.Normalizations.registered[c]("extract", e, i)), l = S.Hooks.extractValue(u, i)
              } else if (S.Normalizations.registered[n]) {
                var f, h;
                "transform" !== (f = S.Normalizations.registered[n]("name", e)) && (h = s(e, S.Names.prefixCheck(f)[0]), S.Values.isCSSNullValue(h) && S.Hooks.templates[n] && (h = S.Hooks.templates[n][1])), l = S.Normalizations.registered[n]("extract", e, h)
              }
              if (!/^[\d-]/.test(l)) {
                var g = o(e);
                if (g && g.isSVG && S.Names.SVGAttribute(n))
                  if (/^(height|width)$/i.test(n)) try {
                    l = e.getBBox()[n]
                  } catch (e) {
                    l = 0
                  } else l = e.getAttribute(n);
                  else l = s(e, S.Names.prefixCheck(n)[0])
              }
              return S.Values.isCSSNullValue(l) && (l = 0), C.debug >= 2 && console.log("Get " + n + ": " + l), l
            },
            setPropertyValue: function(e, n, r, i, a) {
              var s = n;
              if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = r : "Left" === a.direction ? t.scrollTo(r, a.alternateValue) : t.scrollTo(a.alternateValue, r);
              else if (S.Normalizations.registered[n] && "transform" === S.Normalizations.registered[n]("name", e)) S.Normalizations.registered[n]("inject", e, r), s = "transform", r = o(e).transformCache[n];
              else {
                if (S.Hooks.registered[n]) {
                  var l = n,
                    u = S.Hooks.getRoot(n);
                  i = i || S.getPropertyValue(e, u), r = S.Hooks.injectValue(l, r, i), n = u
                }
                if (S.Normalizations.registered[n] && (r = S.Normalizations.registered[n]("inject", e, r), n = S.Normalizations.registered[n]("name", e)), s = S.Names.prefixCheck(n)[0], p <= 8) try {
                  e.style[s] = r
                } catch (e) {
                  C.debug && console.log("Browser does not support [" + r + "] for [" + s + "]")
                } else {
                  var c = o(e);
                  c && c.isSVG && S.Names.SVGAttribute(n) ? e.setAttribute(n, r) : e.style[s] = r
                }
                C.debug >= 2 && console.log("Set " + n + " (" + s + "): " + r)
              }
              return [s, r]
            },
            flushTransformCache: function(e) {
              var t = "",
                n = o(e);
              if ((p || C.State.isAndroid && !C.State.isChrome) && n && n.isSVG) {
                var r = function(t) {
                    return parseFloat(S.getPropertyValue(e, t))
                  },
                  i = {
                    translate: [r("translateX"), r("translateY")],
                    skewX: [r("skewX")],
                    skewY: [r("skewY")],
                    scale: 1 !== r("scale") ? [r("scale"), r("scale")] : [r("scaleX"), r("scaleY")],
                    rotate: [r("rotateZ"), 0, 0]
                  };
                d.each(o(e).transformCache, function(e) {
                  /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (t += e + "(" + i[e].join(" ") + ") ", delete i[e])
                })
              } else {
                var a, s;
                d.each(o(e).transformCache, function(n) {
                  if (a = o(e).transformCache[n], "transformPerspective" === n) return s = a, !0;
                  9 === p && "rotateZ" === n && (n = "rotate"), t += n + a + " "
                }), s && (t = "perspective" + s + " " + t)
              }
              S.setPropertyValue(e, "transform", t)
            }
          };
          S.Hooks.register(), S.Normalizations.register(), C.hook = function(e, t, n) {
            var a;
            return e = i(e), d.each(e, function(e, i) {
              if (o(i) === r && C.init(i), n === r) a === r && (a = S.getPropertyValue(i, t));
              else {
                var s = S.setPropertyValue(i, t, n);
                "transform" === s[0] && C.CSS.flushTransformCache(i), a = s
              }
            }), a
          };
          var k = function() {
            function e() {
              return p ? E.promise || null : h
            }
            var l, p, h, g, m, b, w, T = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
            v.isWrapped(this) ? (p = !1, g = 0, m = this, h = this) : (p = !0, g = 1, m = T ? arguments[0].elements || arguments[0].e : arguments[0]);
            var E = {
              promise: null,
              resolver: null,
              rejecter: null
            };
            if (p && C.Promise && (E.promise = new C.Promise(function(e, t) {
                E.resolver = e, E.rejecter = t
              })), T ? (b = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (b = arguments[g], w = arguments[g + 1]), m = i(m)) {
              var A = m.length,
                P = 0;
              if (!/^(stop|finish|finishAll|pause|resume)$/i.test(b) && !d.isPlainObject(w)) {
                w = {};
                for (var N = g + 1; N < arguments.length; N++) v.isArray(arguments[N]) || !/^(fast|normal|slow)$/i.test(arguments[N]) && !/^\d/.test(arguments[N]) ? v.isString(arguments[N]) || v.isArray(arguments[N]) ? w.easing = arguments[N] : v.isFunction(arguments[N]) && (w.complete = arguments[N]) : w.duration = arguments[N]
              }
              var j;
              switch (b) {
                case "scroll":
                  j = "scroll";
                  break;
                case "reverse":
                  j = "reverse";
                  break;
                case "pause":
                  var L = (new Date).getTime();
                  return d.each(m, function(e, t) {
                    a(t, L)
                  }), d.each(C.State.calls, function(e, t) {
                    var n = !1;
                    t && d.each(t[1], function(e, i) {
                      var o = w === r ? "" : w;
                      return !0 !== o && t[2].queue !== o && (w !== r || !1 !== t[2].queue) || (d.each(m, function(e, r) {
                        if (r === i) return t[5] = {
                          resume: !1
                        }, n = !0, !1
                      }), !n && void 0)
                    })
                  }), e();
                case "resume":
                  return d.each(m, function(e, t) {
                    s(t)
                  }), d.each(C.State.calls, function(e, t) {
                    var n = !1;
                    t && d.each(t[1], function(e, i) {
                      var o = w === r ? "" : w;
                      return !0 !== o && t[2].queue !== o && (w !== r || !1 !== t[2].queue) || (!t[5] || (d.each(m, function(e, r) {
                        if (r === i) return t[5].resume = !0, n = !0, !1
                      }), !n && void 0))
                    })
                  }), e();
                case "finish":
                case "finishAll":
                case "stop":
                  d.each(m, function(e, t) {
                    o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== b || !0 !== w && !v.isString(w) || (d.each(d.queue(t, v.isString(w) ? w : ""), function(e, t) {
                      v.isFunction(t) && t()
                    }), d.queue(t, v.isString(w) ? w : "", []))
                  });
                  var q = [];
                  return d.each(C.State.calls, function(e, t) {
                    t && d.each(t[1], function(n, i) {
                      var a = w === r ? "" : w;
                      if (!0 !== a && t[2].queue !== a && (w !== r || !1 !== t[2].queue)) return !0;
                      d.each(m, function(n, r) {
                        if (r === i)
                          if ((!0 === w || v.isString(w)) && (d.each(d.queue(r, v.isString(w) ? w : ""), function(e, t) {
                              v.isFunction(t) && t(null, !0)
                            }), d.queue(r, v.isString(w) ? w : "", [])), "stop" === b) {
                            var s = o(r);
                            s && s.tweensContainer && !1 !== a && d.each(s.tweensContainer, function(e, t) {
                              t.endValue = t.currentValue
                            }), q.push(e)
                          } else "finish" !== b && "finishAll" !== b || (t[2].duration = 1)
                      })
                    })
                  }), "stop" === b && (d.each(q, function(e, t) {
                    f(t, !0)
                  }), E.promise && E.resolver(m)), e();
                default:
                  if (!d.isPlainObject(b) || v.isEmptyObject(b)) {
                    if (v.isString(b) && C.Redirects[b]) {
                      var F = (l = d.extend({}, w)).duration,
                        D = l.delay || 0;
                      return !0 === l.backwards && (m = d.extend(!0, [], m).reverse()), d.each(m, function(e, t) {
                        parseFloat(l.stagger) ? l.delay = D + parseFloat(l.stagger) * e : v.isFunction(l.stagger) && (l.delay = D + l.stagger.call(t, e, A)), l.drag && (l.duration = parseFloat(F) || (/^(callout|transition)/.test(b) ? 1e3 : x), l.duration = Math.max(l.duration * (l.backwards ? 1 - e / A : (e + 1) / A), .75 * l.duration, 200)), C.Redirects[b].call(t, t, l || {}, e, A, m, E.promise ? E : r)
                      }), e()
                    }
                    var H = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                    return E.promise ? E.rejecter(new Error(H)) : t.console && console.log(H), e()
                  }
                  j = "start"
              }
              var z = {
                  lastParent: null,
                  lastPosition: null,
                  lastFontSize: null,
                  lastPercentToPxWidth: null,
                  lastPercentToPxHeight: null,
                  lastEmToPx: null,
                  remToPx: null,
                  vwToPx: null,
                  vhToPx: null
                },
                V = [];
              d.each(m, function(e, i) {
                v.isNode(i) && function(e, i) {
                  function a(a) {
                    var p, h;
                    if (l.begin && 0 === P) try {
                      l.begin.call(m, m)
                    } catch (e) {
                      setTimeout(function() {
                        throw e
                      }, 1)
                    }
                    if ("scroll" === j) {
                      var g, x, T, k = /^x$/i.test(l.axis) ? "Left" : "Top",
                        N = parseFloat(l.offset) || 0;
                      l.container ? v.isWrapped(l.container) || v.isNode(l.container) ? (l.container = l.container[0] || l.container, T = (g = l.container["scroll" + k]) + d(e).position()[k.toLowerCase()] + N) : l.container = null : (g = C.State.scrollAnchor[C.State["scrollProperty" + k]], x = C.State.scrollAnchor[C.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], T = d(e).offset()[k.toLowerCase()] + N), f = {
                        scroll: {
                          rootPropertyValue: !1,
                          startValue: g,
                          currentValue: g,
                          endValue: T,
                          unitType: "",
                          easing: l.easing,
                          scrollData: {
                            container: l.container,
                            direction: k,
                            alternateValue: x
                          }
                        },
                        element: e
                      }, C.debug && console.log("tweensContainer (scroll): ", f.scroll, e)
                    } else if ("reverse" === j) {
                      if (!(p = o(e))) return;
                      if (!p.tweensContainer) return void d.dequeue(e, l.queue);
                      "none" === p.opts.display && (p.opts.display = "auto"), "hidden" === p.opts.visibility && (p.opts.visibility = "visible"), p.opts.loop = !1, p.opts.begin = null, p.opts.complete = null, w.easing || delete l.easing, w.duration || delete l.duration, l = d.extend({}, p.opts, l), h = d.extend(!0, {}, p ? p.tweensContainer : null);
                      for (var L in h)
                        if (h.hasOwnProperty(L) && "element" !== L) {
                          var q = h[L].startValue;
                          h[L].startValue = h[L].currentValue = h[L].endValue, h[L].endValue = q, v.isEmptyObject(w) || (h[L].easing = l.easing), C.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(h[L]), e)
                        } f = h
                    } else if ("start" === j) {
                      (p = o(e)) && p.tweensContainer && !0 === p.isAnimating && (h = p.tweensContainer);
                      var F = function(t, n) {
                          var r, o, a;
                          return v.isFunction(t) && (t = t.call(e, i, A)), v.isArray(t) ? (r = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || S.RegEx.isHex.test(t[1]) ? a = t[1] : v.isString(t[1]) && !S.RegEx.isHex.test(t[1]) && C.Easings[t[1]] || v.isArray(t[1]) ? (o = n ? t[1] : u(t[1], l.duration), a = t[2]) : a = t[1] || t[2]) : r = t, n || (o = o || l.easing), v.isFunction(r) && (r = r.call(e, i, A)), v.isFunction(a) && (a = a.call(e, i, A)), [r || 0, o, a]
                        },
                        D = function(i, o) {
                          var a, u = S.Hooks.getRoot(i),
                            c = !1,
                            g = o[0],
                            m = o[1],
                            y = o[2];
                          if (p && p.isSVG || "tween" === u || !1 !== S.Names.prefixCheck(u)[1] || S.Normalizations.registered[u] !== r) {
                            (l.display !== r && null !== l.display && "none" !== l.display || l.visibility !== r && "hidden" !== l.visibility) && /opacity|filter/.test(i) && !y && 0 !== g && (y = 0), l._cacheValues && h && h[i] ? (y === r && (y = h[i].endValue + h[i].unitType), c = p.rootPropertyValueCache[u]) : S.Hooks.registered[i] ? y === r ? (c = S.getPropertyValue(e, u), y = S.getPropertyValue(e, i, c)) : c = S.Hooks.templates[u][1] : y === r && (y = S.getPropertyValue(e, i));
                            var b, x, w, T = !1,
                              k = function(e, t) {
                                var n, r;
                                return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                  return n = e, ""
                                }), n || (n = S.Values.getUnitType(e)), [r, n]
                              };
                            if (y !== g && v.isString(y) && v.isString(g)) {
                              a = "";
                              var E = 0,
                                A = 0,
                                P = [],
                                N = [],
                                j = 0,
                                L = 0,
                                q = 0;
                              for (y = S.Hooks.fixColors(y), g = S.Hooks.fixColors(g); E < y.length && A < g.length;) {
                                var F = y[E],
                                  D = g[A];
                                if (/[\d\.-]/.test(F) && /[\d\.-]/.test(D)) {
                                  for (var H = F, V = D, O = ".", $ = "."; ++E < y.length;) {
                                    if ((F = y[E]) === O) O = "..";
                                    else if (!/\d/.test(F)) break;
                                    H += F
                                  }
                                  for (; ++A < g.length;) {
                                    if ((D = g[A]) === $) $ = "..";
                                    else if (!/\d/.test(D)) break;
                                    V += D
                                  }
                                  var R = S.Hooks.getUnit(y, E),
                                    M = S.Hooks.getUnit(g, A);
                                  if (E += R.length, A += M.length, R === M) H === V ? a += H + R : (a += "{" + P.length + (L ? "!" : "") + "}" + R, P.push(parseFloat(H)), N.push(parseFloat(V)));
                                  else {
                                    var _ = parseFloat(H),
                                      W = parseFloat(V);
                                    a += (j < 5 ? "calc" : "") + "(" + (_ ? "{" + P.length + (L ? "!" : "") + "}" : "0") + R + " + " + (W ? "{" + (P.length + (_ ? 1 : 0)) + (L ? "!" : "") + "}" : "0") + M + ")", _ && (P.push(_), N.push(0)), W && (P.push(0), N.push(W))
                                  }
                                } else {
                                  if (F !== D) {
                                    j = 0;
                                    break
                                  }
                                  a += F, E++, A++, 0 === j && "c" === F || 1 === j && "a" === F || 2 === j && "l" === F || 3 === j && "c" === F || j >= 4 && "(" === F ? j++ : (j && j < 5 || j >= 4 && ")" === F && --j < 5) && (j = 0), 0 === L && "r" === F || 1 === L && "g" === F || 2 === L && "b" === F || 3 === L && "a" === F || L >= 3 && "(" === F ? (3 === L && "a" === F && (q = 1), L++) : q && "," === F ? ++q > 3 && (L = q = 0) : (q && L < (q ? 5 : 4) || L >= (q ? 4 : 3) && ")" === F && --L < (q ? 5 : 4)) && (L = q = 0)
                                }
                              }
                              E === y.length && A === g.length || (C.debug && console.error('Trying to pattern match mis-matched strings ["' + g + '", "' + y + '"]'), a = r), a && (P.length ? (C.debug && console.log('Pattern found "' + a + '" -> ', P, N, "[" + y + "," + g + "]"), y = P, g = N, x = w = "") : a = r)
                            }
                            if (a || (y = (b = k(i, y))[0], w = b[1], g = (b = k(i, g))[0].replace(/^([+-\/*])=/, function(e, t) {
                                return T = t, ""
                              }), x = b[1], y = parseFloat(y) || 0, g = parseFloat(g) || 0, "%" === x && (/^(fontSize|lineHeight)$/.test(i) ? (g /= 100, x = "em") : /^scale/.test(i) ? (g /= 100, x = "") : /(Red|Green|Blue)$/i.test(i) && (g = g / 100 * 255, x = ""))), /[\/*]/.test(T)) x = w;
                            else if (w !== x && 0 !== y)
                              if (0 === g) x = w;
                              else {
                                s = s || function() {
                                  var r = {
                                      myParent: e.parentNode || n.body,
                                      position: S.getPropertyValue(e, "position"),
                                      fontSize: S.getPropertyValue(e, "fontSize")
                                    },
                                    i = r.position === z.lastPosition && r.myParent === z.lastParent,
                                    o = r.fontSize === z.lastFontSize;
                                  z.lastParent = r.myParent, z.lastPosition = r.position, z.lastFontSize = r.fontSize;
                                  var a = {};
                                  if (o && i) a.emToPx = z.lastEmToPx, a.percentToPxWidth = z.lastPercentToPxWidth, a.percentToPxHeight = z.lastPercentToPxHeight;
                                  else {
                                    var s = p && p.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    C.init(s), r.myParent.appendChild(s), d.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                      C.CSS.setPropertyValue(s, t, "hidden")
                                    }), C.CSS.setPropertyValue(s, "position", r.position), C.CSS.setPropertyValue(s, "fontSize", r.fontSize), C.CSS.setPropertyValue(s, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                      C.CSS.setPropertyValue(s, t, "100%")
                                    }), C.CSS.setPropertyValue(s, "paddingLeft", "100em"), a.percentToPxWidth = z.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(s, "width", null, !0)) || 1) / 100, a.percentToPxHeight = z.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(s, "height", null, !0)) || 1) / 100, a.emToPx = z.lastEmToPx = (parseFloat(S.getPropertyValue(s, "paddingLeft")) || 1) / 100, r.myParent.removeChild(s)
                                  }
                                  return null === z.remToPx && (z.remToPx = parseFloat(S.getPropertyValue(n.body, "fontSize")) || 16), null === z.vwToPx && (z.vwToPx = parseFloat(t.innerWidth) / 100, z.vhToPx = parseFloat(t.innerHeight) / 100), a.remToPx = z.remToPx, a.vwToPx = z.vwToPx, a.vhToPx = z.vhToPx, C.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(a), e), a
                                }();
                                var I = /margin|padding|left|right|width|text|word|letter/i.test(i) || /X$/.test(i) || "x" === i ? "x" : "y";
                                switch (w) {
                                  case "%":
                                    y *= "x" === I ? s.percentToPxWidth : s.percentToPxHeight;
                                    break;
                                  case "px":
                                    break;
                                  default:
                                    y *= s[w + "ToPx"]
                                }
                                switch (x) {
                                  case "%":
                                    y *= 1 / ("x" === I ? s.percentToPxWidth : s.percentToPxHeight);
                                    break;
                                  case "px":
                                    break;
                                  default:
                                    y *= 1 / s[x + "ToPx"]
                                }
                              } switch (T) {
                              case "+":
                                g = y + g;
                                break;
                              case "-":
                                g = y - g;
                                break;
                              case "*":
                                g *= y;
                                break;
                              case "/":
                                g = y / g
                            }
                            f[i] = {
                              rootPropertyValue: c,
                              startValue: y,
                              currentValue: y,
                              endValue: g,
                              unitType: x,
                              easing: m
                            }, a && (f[i].pattern = a), C.debug && console.log("tweensContainer (" + i + "): " + JSON.stringify(f[i]), e)
                          } else C.debug && console.log("Skipping [" + u + "] due to a lack of browser support.")
                        };
                      for (var H in b)
                        if (b.hasOwnProperty(H)) {
                          var O = S.Names.camelCase(H),
                            $ = F(b[H]);
                          if (y(S.Lists.colors, O)) {
                            var R = $[0],
                              M = $[1],
                              _ = $[2];
                            if (S.RegEx.isHex.test(R)) {
                              for (var W = ["Red", "Green", "Blue"], I = S.Values.hexToRgb(R), B = _ ? S.Values.hexToRgb(_) : r, X = 0; X < W.length; X++) {
                                var U = [I[X]];
                                M && U.push(M), B !== r && U.push(B[X]), D(O + W[X], U)
                              }
                              continue
                            }
                          }
                          D(O, $)
                        } f.element = e
                    }
                    f.element && (S.Values.addClass(e, "velocity-animating"), V.push(f), (p = o(e)) && ("" === l.queue && (p.tweensContainer = f, p.opts = l), p.isAnimating = !0), P === A - 1 ? (C.State.calls.push([V, m, l, null, E.resolver, null, 0]), !1 === C.State.isTicking && (C.State.isTicking = !0, c())) : P++)
                  }
                  var s, l = d.extend({}, C.defaults, w),
                    f = {};
                  switch (o(e) === r && C.init(e), parseFloat(l.delay) && !1 !== l.queue && d.queue(e, l.queue, function(t) {
                    C.velocityQueueEntryFlag = !0;
                    var n = C.State.delayedElements.count++;
                    C.State.delayedElements[n] = e;
                    var r = function(e) {
                      return function() {
                        C.State.delayedElements[e] = !1, t()
                      }
                    }(n);
                    o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                      setTimeout: setTimeout(t, parseFloat(l.delay)),
                      next: r
                    }
                  }), l.duration.toString().toLowerCase()) {
                    case "fast":
                      l.duration = 200;
                      break;
                    case "normal":
                      l.duration = x;
                      break;
                    case "slow":
                      l.duration = 600;
                      break;
                    default:
                      l.duration = parseFloat(l.duration) || 1
                  }
                  if (!1 !== C.mock && (!0 === C.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(C.mock) || 1, l.delay *= parseFloat(C.mock) || 1)), l.easing = u(l.easing, l.duration), l.begin && !v.isFunction(l.begin) && (l.begin = null), l.progress && !v.isFunction(l.progress) && (l.progress = null), l.complete && !v.isFunction(l.complete) && (l.complete = null), l.display !== r && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = C.CSS.Values.getDisplayType(e))), l.visibility !== r && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && C.State.isMobile && !C.State.isGingerbread, !1 === l.queue)
                    if (l.delay) {
                      var p = C.State.delayedElements.count++;
                      C.State.delayedElements[p] = e;
                      var h = function(e) {
                        return function() {
                          C.State.delayedElements[e] = !1, a()
                        }
                      }(p);
                      o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(l.delay)),
                        next: h
                      }
                    } else a();
                  else d.queue(e, l.queue, function(e, t) {
                    if (!0 === t) return E.promise && E.resolver(m), !0;
                    C.velocityQueueEntryFlag = !0, a()
                  });
                  "" !== l.queue && "fx" !== l.queue || "inprogress" === d.queue(e)[0] || d.dequeue(e)
                }(i, e)
              }), (l = d.extend({}, C.defaults, w)).loop = parseInt(l.loop, 10);
              var O = 2 * l.loop - 1;
              if (l.loop)
                for (var $ = 0; $ < O; $++) {
                  var R = {
                    delay: l.delay,
                    progress: l.progress
                  };
                  $ === O - 1 && (R.display = l.display, R.visibility = l.visibility, R.complete = l.complete), k(m, "reverse", R)
                }
              return e()
            }
            E.promise && (b && w && !1 === w.promiseRejectEmpty ? E.resolver() : E.rejecter())
          };
          (C = d.extend(k, C)).animate = k;
          var E = t.requestAnimationFrame || h;
          if (!C.State.isMobile && n.hidden !== r) {
            var A = function() {
              n.hidden ? (E = function(e) {
                return setTimeout(function() {
                  e(!0)
                }, 16)
              }, c()) : E = t.requestAnimationFrame || h
            };
            A(), n.addEventListener("visibilitychange", A)
          }
          return e.Velocity = C, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = C.defaults), d.each(["Down", "Up"], function(e, t) {
            C.Redirects["slide" + t] = function(e, n, i, o, a, s) {
              var l = d.extend({}, n),
                u = l.begin,
                c = l.complete,
                f = {},
                p = {
                  height: "",
                  marginTop: "",
                  marginBottom: "",
                  paddingTop: "",
                  paddingBottom: ""
                };
              l.display === r && (l.display = "Down" === t ? "inline" === C.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                0 === i && u && u.call(a, a);
                for (var n in p)
                  if (p.hasOwnProperty(n)) {
                    f[n] = e.style[n];
                    var r = S.getPropertyValue(e, n);
                    p[n] = "Down" === t ? [r, 0] : [0, r]
                  } f.overflow = e.style.overflow, e.style.overflow = "hidden"
              }, l.complete = function() {
                for (var t in f) f.hasOwnProperty(t) && (e.style[t] = f[t]);
                i === o - 1 && (c && c.call(a, a), s && s.resolver(a))
              }, C(e, p, l)
            }
          }), d.each(["In", "Out"], function(e, t) {
            C.Redirects["fade" + t] = function(e, n, i, o, a, s) {
              var l = d.extend({}, n),
                u = l.complete,
                c = {
                  opacity: "In" === t ? 1 : 0
                };
              0 !== i && (l.begin = null), l.complete = i !== o - 1 ? null : function() {
                u && u.call(a, a), s && s.resolver(a)
              }, l.display === r && (l.display = "In" === t ? "auto" : "none"), C(this, c, l)
            }
          }), C
        }
        jQuery.fn.velocity = jQuery.fn.animate
      }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
  }, {}]
}, {}, [1]);