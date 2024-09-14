(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9837, 9255],
    {
        59255: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => T });
            var r = (function () {
                    if ("undefined" != typeof Map) return Map;
                    function e(e, t) {
                        var n = -1;
                        return (
                            e.some(function (e, r) {
                                return e[0] === t && ((n = r), !0);
                            }),
                            n
                        );
                    }
                    return (function () {
                        function t() {
                            this.__entries__ = [];
                        }
                        return (
                            Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                    return this.__entries__.length;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (t.prototype.get = function (t) {
                                var n = e(this.__entries__, t),
                                    r = this.__entries__[n];
                                return r && r[1];
                            }),
                            (t.prototype.set = function (t, n) {
                                var r = e(this.__entries__, t);
                                ~r
                                    ? (this.__entries__[r][1] = n)
                                    : this.__entries__.push([t, n]);
                            }),
                            (t.prototype.delete = function (t) {
                                var n = this.__entries__,
                                    r = e(n, t);
                                ~r && n.splice(r, 1);
                            }),
                            (t.prototype.has = function (t) {
                                return !!~e(this.__entries__, t);
                            }),
                            (t.prototype.clear = function () {
                                this.__entries__.splice(0);
                            }),
                            (t.prototype.forEach = function (e, t) {
                                void 0 === t && (t = null);
                                for (
                                    var n = 0, r = this.__entries__;
                                    n < r.length;
                                    n++
                                ) {
                                    var o = r[n];
                                    e.call(t, o[1], o[0]);
                                }
                            }),
                            t
                        );
                    })();
                })(),
                o =
                    "undefined" != typeof window &&
                    "undefined" != typeof document &&
                    window.document === document,
                i =
                    void 0 !== n.g && n.g.Math === Math
                        ? n.g
                        : "undefined" != typeof self && self.Math === Math
                        ? self
                        : "undefined" != typeof window && window.Math === Math
                        ? window
                        : Function("return this")(),
                s =
                    "function" == typeof requestAnimationFrame
                        ? requestAnimationFrame.bind(i)
                        : function (e) {
                              return setTimeout(function () {
                                  return e(Date.now());
                              }, 1e3 / 60);
                          };
            var u = [
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "width",
                    "height",
                    "size",
                    "weight",
                ],
                a = "undefined" != typeof MutationObserver,
                c = (function () {
                    function e() {
                        (this.connected_ = !1),
                            (this.mutationEventsAdded_ = !1),
                            (this.mutationsObserver_ = null),
                            (this.observers_ = []),
                            (this.onTransitionEnd_ =
                                this.onTransitionEnd_.bind(this)),
                            (this.refresh = (function (e, t) {
                                var n = !1,
                                    r = !1,
                                    o = 0;
                                function i() {
                                    n && ((n = !1), e()), r && a();
                                }
                                function u() {
                                    s(i);
                                }
                                function a() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - o < 2) return;
                                        r = !0;
                                    } else (n = !0), (r = !1), setTimeout(u, t);
                                    o = e;
                                }
                                return a;
                            })(this.refresh.bind(this), 20));
                    }
                    return (
                        (e.prototype.addObserver = function (e) {
                            ~this.observers_.indexOf(e) ||
                                this.observers_.push(e),
                                this.connected_ || this.connect_();
                        }),
                        (e.prototype.removeObserver = function (e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1),
                                !t.length &&
                                    this.connected_ &&
                                    this.disconnect_();
                        }),
                        (e.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh();
                        }),
                        (e.prototype.updateObservers_ = function () {
                            var e = this.observers_.filter(function (e) {
                                return e.gatherActive(), e.hasActive();
                            });
                            return (
                                e.forEach(function (e) {
                                    return e.broadcastActive();
                                }),
                                e.length > 0
                            );
                        }),
                        (e.prototype.connect_ = function () {
                            o &&
                                !this.connected_ &&
                                (document.addEventListener(
                                    "transitionend",
                                    this.onTransitionEnd_
                                ),
                                window.addEventListener("resize", this.refresh),
                                a
                                    ? ((this.mutationsObserver_ =
                                          new MutationObserver(this.refresh)),
                                      this.mutationsObserver_.observe(
                                          document,
                                          {
                                              attributes: !0,
                                              childList: !0,
                                              characterData: !0,
                                              subtree: !0,
                                          }
                                      ))
                                    : (document.addEventListener(
                                          "DOMSubtreeModified",
                                          this.refresh
                                      ),
                                      (this.mutationEventsAdded_ = !0)),
                                (this.connected_ = !0));
                        }),
                        (e.prototype.disconnect_ = function () {
                            o &&
                                this.connected_ &&
                                (document.removeEventListener(
                                    "transitionend",
                                    this.onTransitionEnd_
                                ),
                                window.removeEventListener(
                                    "resize",
                                    this.refresh
                                ),
                                this.mutationsObserver_ &&
                                    this.mutationsObserver_.disconnect(),
                                this.mutationEventsAdded_ &&
                                    document.removeEventListener(
                                        "DOMSubtreeModified",
                                        this.refresh
                                    ),
                                (this.mutationsObserver_ = null),
                                (this.mutationEventsAdded_ = !1),
                                (this.connected_ = !1));
                        }),
                        (e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            u.some(function (e) {
                                return !!~n.indexOf(e);
                            }) && this.refresh();
                        }),
                        (e.getInstance = function () {
                            return (
                                this.instance_ || (this.instance_ = new e()),
                                this.instance_
                            );
                        }),
                        (e.instance_ = null),
                        e
                    );
                })(),
                f = function (e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(e, o, {
                            value: t[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0,
                        });
                    }
                    return e;
                },
                l = function (e) {
                    return (
                        (e && e.ownerDocument && e.ownerDocument.defaultView) ||
                        i
                    );
                },
                p = m(0, 0, 0, 0);
            function d(e) {
                return parseFloat(e) || 0;
            }
            function h(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                return t.reduce(function (t, n) {
                    return t + d(e["border-" + n + "-width"]);
                }, 0);
            }
            function v(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return p;
                var r = l(e).getComputedStyle(e),
                    o = (function (e) {
                        for (
                            var t = {},
                                n = 0,
                                r = ["top", "right", "bottom", "left"];
                            n < r.length;
                            n++
                        ) {
                            var o = r[n],
                                i = e["padding-" + o];
                            t[o] = d(i);
                        }
                        return t;
                    })(r),
                    i = o.left + o.right,
                    s = o.top + o.bottom,
                    u = d(r.width),
                    a = d(r.height);
                if (
                    ("border-box" === r.boxSizing &&
                        (Math.round(u + i) !== t &&
                            (u -= h(r, "left", "right") + i),
                        Math.round(a + s) !== n &&
                            (a -= h(r, "top", "bottom") + s)),
                    !(function (e) {
                        return e === l(e).document.documentElement;
                    })(e))
                ) {
                    var c = Math.round(u + i) - t,
                        f = Math.round(a + s) - n;
                    1 !== Math.abs(c) && (u -= c),
                        1 !== Math.abs(f) && (a -= f);
                }
                return m(o.left, o.top, u, a);
            }
            var y =
                "undefined" != typeof SVGGraphicsElement
                    ? function (e) {
                          return e instanceof l(e).SVGGraphicsElement;
                      }
                    : function (e) {
                          return (
                              e instanceof l(e).SVGElement &&
                              "function" == typeof e.getBBox
                          );
                      };
            function b(e) {
                return o
                    ? y(e)
                        ? (function (e) {
                              var t = e.getBBox();
                              return m(0, 0, t.width, t.height);
                          })(e)
                        : v(e)
                    : p;
            }
            function m(e, t, n, r) {
                return { x: e, y: t, width: n, height: r };
            }
            var g = (function () {
                    function e(e) {
                        (this.broadcastWidth = 0),
                            (this.broadcastHeight = 0),
                            (this.contentRect_ = m(0, 0, 0, 0)),
                            (this.target = e);
                    }
                    return (
                        (e.prototype.isActive = function () {
                            var e = b(this.target);
                            return (
                                (this.contentRect_ = e),
                                e.width !== this.broadcastWidth ||
                                    e.height !== this.broadcastHeight
                            );
                        }),
                        (e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return (
                                (this.broadcastWidth = e.width),
                                (this.broadcastHeight = e.height),
                                e
                            );
                        }),
                        e
                    );
                })(),
                _ = function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        s,
                        u,
                        a,
                        c =
                            ((r = (n = t).x),
                            (o = n.y),
                            (i = n.width),
                            (s = n.height),
                            (u =
                                "undefined" != typeof DOMRectReadOnly
                                    ? DOMRectReadOnly
                                    : Object),
                            (a = Object.create(u.prototype)),
                            f(a, {
                                x: r,
                                y: o,
                                width: i,
                                height: s,
                                top: o,
                                right: r + i,
                                bottom: s + o,
                                left: r,
                            }),
                            a);
                    f(this, { target: e, contentRect: c });
                },
                w = (function () {
                    function e(e, t, n) {
                        if (
                            ((this.activeObservations_ = []),
                            (this.observations_ = new r()),
                            "function" != typeof e)
                        )
                            throw new TypeError(
                                "The callback provided as parameter 1 is not a function."
                            );
                        (this.callback_ = e),
                            (this.controller_ = t),
                            (this.callbackCtx_ = n);
                    }
                    return (
                        (e.prototype.observe = function (e) {
                            if (!arguments.length)
                                throw new TypeError(
                                    "1 argument required, but only 0 present."
                                );
                            if (
                                "undefined" != typeof Element &&
                                Element instanceof Object
                            ) {
                                if (!(e instanceof l(e).Element))
                                    throw new TypeError(
                                        'parameter 1 is not of type "Element".'
                                    );
                                var t = this.observations_;
                                t.has(e) ||
                                    (t.set(e, new g(e)),
                                    this.controller_.addObserver(this),
                                    this.controller_.refresh());
                            }
                        }),
                        (e.prototype.unobserve = function (e) {
                            if (!arguments.length)
                                throw new TypeError(
                                    "1 argument required, but only 0 present."
                                );
                            if (
                                "undefined" != typeof Element &&
                                Element instanceof Object
                            ) {
                                if (!(e instanceof l(e).Element))
                                    throw new TypeError(
                                        'parameter 1 is not of type "Element".'
                                    );
                                var t = this.observations_;
                                t.has(e) &&
                                    (t.delete(e),
                                    t.size ||
                                        this.controller_.removeObserver(this));
                            }
                        }),
                        (e.prototype.disconnect = function () {
                            this.clearActive(),
                                this.observations_.clear(),
                                this.controller_.removeObserver(this);
                        }),
                        (e.prototype.gatherActive = function () {
                            var e = this;
                            this.clearActive(),
                                this.observations_.forEach(function (t) {
                                    t.isActive() &&
                                        e.activeObservations_.push(t);
                                });
                        }),
                        (e.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map(function (
                                        e
                                    ) {
                                        return new _(
                                            e.target,
                                            e.broadcastRect()
                                        );
                                    });
                                this.callback_.call(e, t, e),
                                    this.clearActive();
                            }
                        }),
                        (e.prototype.clearActive = function () {
                            this.activeObservations_.splice(0);
                        }),
                        (e.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0;
                        }),
                        e
                    );
                })(),
                O = "undefined" != typeof WeakMap ? new WeakMap() : new r(),
                E = function e(t) {
                    if (!(this instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function."
                        );
                    if (!arguments.length)
                        throw new TypeError(
                            "1 argument required, but only 0 present."
                        );
                    var n = c.getInstance(),
                        r = new w(t, n, this);
                    O.set(this, r);
                };
            ["observe", "unobserve", "disconnect"].forEach(function (e) {
                E.prototype[e] = function () {
                    var t;
                    return (t = O.get(this))[e].apply(t, arguments);
                };
            });
            const T = void 0 !== i.ResizeObserver ? i.ResizeObserver : E;
        },
        9837: function (e, t, n) {
            var r, o, i;
            e.exports =
                ((r = n(59496)),
                (o = n(87995)),
                (i = n(59255)),
                (function (e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = (n[r] = { exports: {}, id: r, loaded: !1 });
                        return (
                            e[r].call(o.exports, o, o.exports, t),
                            (o.loaded = !0),
                            o.exports
                        );
                    }
                    var n = {};
                    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
                })([
                    function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.default = void 0);
                        var r = (function (e) {
                            return e && e.__esModule ? e : { default: e };
                        })(n(1));
                        (t.default = r.default), (e.exports = t.default);
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var o = (function () {
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
                                    return (
                                        n && e(t.prototype, n), r && e(t, r), t
                                    );
                                };
                            })(),
                            i = n(2),
                            s = (r(i), n(3)),
                            u = r(s),
                            a = r(n(13)),
                            c = r(n(14)),
                            f = r(n(15)),
                            l = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t))
                                            throw new TypeError(
                                                "Cannot call a class as a function"
                                            );
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e)
                                            throw new ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called"
                                            );
                                        return !t ||
                                            ("object" != typeof t &&
                                                "function" != typeof t)
                                            ? e
                                            : t;
                                    })(
                                        this,
                                        (
                                            t.__proto__ ||
                                            Object.getPrototypeOf(t)
                                        ).call(this, e)
                                    );
                                    return (
                                        (n.measure = function () {
                                            var e =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : n.props.includeMargin;
                                            if (n.props.shouldMeasure) {
                                                n._node.parentNode ||
                                                    n._setDOMNode();
                                                var t = n.getDimensions(
                                                        n._node,
                                                        e
                                                    ),
                                                    r =
                                                        "function" ==
                                                        typeof n.props.children;
                                                n._propsToMeasure.some(
                                                    function (e) {
                                                        if (
                                                            t[e] !==
                                                            n._lastDimensions[e]
                                                        )
                                                            return (
                                                                n.props.onMeasure(
                                                                    t
                                                                ),
                                                                r &&
                                                                    void 0 !==
                                                                        n &&
                                                                    n.setState({
                                                                        dimensions:
                                                                            t,
                                                                    }),
                                                                (n._lastDimensions =
                                                                    t),
                                                                !0
                                                            );
                                                    }
                                                );
                                            }
                                        }),
                                        (n.state = {
                                            dimensions: {
                                                width: 0,
                                                height: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                left: 0,
                                            },
                                        }),
                                        (n._node = null),
                                        (n._propsToMeasure =
                                            n._getPropsToMeasure(e)),
                                        (n._lastDimensions = {}),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if (
                                            "function" != typeof t &&
                                            null !== t
                                        )
                                            throw new TypeError(
                                                "Super expression must either be null or a function, not " +
                                                    typeof t
                                            );
                                        (e.prototype = Object.create(
                                            t && t.prototype,
                                            {
                                                constructor: {
                                                    value: e,
                                                    enumerable: !1,
                                                    writable: !0,
                                                    configurable: !0,
                                                },
                                            }
                                        )),
                                            t &&
                                                (Object.setPrototypeOf
                                                    ? Object.setPrototypeOf(
                                                          e,
                                                          t
                                                      )
                                                    : (e.__proto__ = t));
                                    })(t, e),
                                    o(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                var e = this;
                                                this._setDOMNode(),
                                                    this.measure(),
                                                    (this.resizeObserver =
                                                        new c.default(
                                                            function () {
                                                                return e.measure();
                                                            }
                                                        )),
                                                    this.resizeObserver.observe(
                                                        this._node
                                                    );
                                            },
                                        },
                                        {
                                            key: "componentWillReceiveProps",
                                            value: function (e) {
                                                var t = (e.config, e.whitelist),
                                                    n = e.blacklist;
                                                (this.props.whitelist === t &&
                                                    this.props.blacklist ===
                                                        n) ||
                                                    (this._propsToMeasure =
                                                        this._getPropsToMeasure(
                                                            {
                                                                whitelist: t,
                                                                blacklist: n,
                                                            }
                                                        ));
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.resizeObserver.disconnect(
                                                    this._node
                                                ),
                                                    (this._node = null);
                                            },
                                        },
                                        {
                                            key: "_setDOMNode",
                                            value: function () {
                                                this._node =
                                                    a.default.findDOMNode(this);
                                            },
                                        },
                                        {
                                            key: "getDimensions",
                                            value: function () {
                                                var e =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : this._node,
                                                    t =
                                                        arguments.length > 1 &&
                                                        void 0 !== arguments[1]
                                                            ? arguments[1]
                                                            : this.props
                                                                  .includeMargin;
                                                return (0, f.default)(e, {
                                                    margin: t,
                                                });
                                            },
                                        },
                                        {
                                            key: "_getPropsToMeasure",
                                            value: function (e) {
                                                var t = e.whitelist,
                                                    n = e.blacklist;
                                                return t.filter(function (e) {
                                                    return n.indexOf(e) < 0;
                                                });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props.children;
                                                return i.Children.only(
                                                    "function" == typeof e
                                                        ? e(
                                                              this.state
                                                                  .dimensions
                                                          )
                                                        : e
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(i.Component);
                        (l.propTypes = {
                            whitelist: u.default.array,
                            blacklist: u.default.array,
                            includeMargin: u.default.bool,
                            useClone: u.default.bool,
                            cloneOptions: u.default.object,
                            shouldMeasure: u.default.bool,
                            onMeasure: u.default.func,
                        }),
                            (l.defaultProps = {
                                whitelist: [
                                    "width",
                                    "height",
                                    "top",
                                    "right",
                                    "bottom",
                                    "left",
                                ],
                                blacklist: [],
                                includeMargin: !0,
                                useClone: !1,
                                cloneOptions: {},
                                shouldMeasure: !0,
                                onMeasure: function () {
                                    return null;
                                },
                            }),
                            (t.default = l),
                            (e.exports = t.default);
                    },
                    function (e, t) {
                        e.exports = r;
                    },
                    function (e, t, n) {
                        (function (t) {
                            "use strict";
                            var r =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" == typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      };
                            if ("production" !== t.env.NODE_ENV) {
                                var o =
                                    ("function" == typeof Symbol &&
                                        Symbol.for &&
                                        Symbol.for("react.element")) ||
                                    60103;
                                e.exports = n(5)(function (e) {
                                    return (
                                        "object" ===
                                            (void 0 === e
                                                ? "undefined"
                                                : r(e)) &&
                                        null !== e &&
                                        e.$$typeof === o
                                    );
                                }, !0);
                            } else e.exports = n(12)();
                        }).call(t, n(4));
                    },
                    function (e, t) {
                        "use strict";
                        function n() {
                            throw new Error("setTimeout has not been defined");
                        }
                        function r() {
                            throw new Error(
                                "clearTimeout has not been defined"
                            );
                        }
                        function o(e) {
                            if (c === setTimeout) return setTimeout(e, 0);
                            if ((c === n || !c) && setTimeout)
                                return (c = setTimeout), setTimeout(e, 0);
                            try {
                                return c(e, 0);
                            } catch (t) {
                                try {
                                    return c.call(null, e, 0);
                                } catch (t) {
                                    return c.call(this, e, 0);
                                }
                            }
                        }
                        function i() {
                            h &&
                                p &&
                                ((h = !1),
                                p.length ? (d = p.concat(d)) : (v = -1),
                                d.length && s());
                        }
                        function s() {
                            if (!h) {
                                var e = o(i);
                                h = !0;
                                for (var t = d.length; t; ) {
                                    for (p = d, d = []; ++v < t; )
                                        p && p[v].run();
                                    (v = -1), (t = d.length);
                                }
                                (p = null),
                                    (h = !1),
                                    (function (e) {
                                        if (f === clearTimeout)
                                            return clearTimeout(e);
                                        if ((f === r || !f) && clearTimeout)
                                            return (
                                                (f = clearTimeout),
                                                clearTimeout(e)
                                            );
                                        try {
                                            f(e);
                                        } catch (t) {
                                            try {
                                                return f.call(null, e);
                                            } catch (t) {
                                                return f.call(this, e);
                                            }
                                        }
                                    })(e);
                            }
                        }
                        function u(e, t) {
                            (this.fun = e), (this.array = t);
                        }
                        function a() {}
                        var c,
                            f,
                            l = (e.exports = {});
                        !(function () {
                            try {
                                c =
                                    "function" == typeof setTimeout
                                        ? setTimeout
                                        : n;
                            } catch (e) {
                                c = n;
                            }
                            try {
                                f =
                                    "function" == typeof clearTimeout
                                        ? clearTimeout
                                        : r;
                            } catch (e) {
                                f = r;
                            }
                        })();
                        var p,
                            d = [],
                            h = !1,
                            v = -1;
                        (l.nextTick = function (e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var n = 1; n < arguments.length; n++)
                                    t[n - 1] = arguments[n];
                            d.push(new u(e, t)), 1 !== d.length || h || o(s);
                        }),
                            (u.prototype.run = function () {
                                this.fun.apply(null, this.array);
                            }),
                            (l.title = "browser"),
                            (l.browser = !0),
                            (l.env = {}),
                            (l.argv = []),
                            (l.version = ""),
                            (l.versions = {}),
                            (l.on = a),
                            (l.addListener = a),
                            (l.once = a),
                            (l.off = a),
                            (l.removeListener = a),
                            (l.removeAllListeners = a),
                            (l.emit = a),
                            (l.prependListener = a),
                            (l.prependOnceListener = a),
                            (l.listeners = function (e) {
                                return [];
                            }),
                            (l.binding = function (e) {
                                throw new Error(
                                    "process.binding is not supported"
                                );
                            }),
                            (l.cwd = function () {
                                return "/";
                            }),
                            (l.chdir = function (e) {
                                throw new Error(
                                    "process.chdir is not supported"
                                );
                            }),
                            (l.umask = function () {
                                return 0;
                            });
                    },
                    function (e, t, n) {
                        (function (t) {
                            "use strict";
                            var r =
                                    "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e &&
                                                  "function" == typeof Symbol &&
                                                  e.constructor === Symbol &&
                                                  e !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof e;
                                          },
                                o = n(6),
                                i = n(7),
                                s = n(8),
                                u = n(9),
                                a = n(10),
                                c = n(11);
                            e.exports = function (e, n) {
                                function f(e, t) {
                                    return e === t
                                        ? 0 !== e || 1 / e == 1 / t
                                        : e != e && t != t;
                                }
                                function l(e) {
                                    (this.message = e), (this.stack = "");
                                }
                                function p(e) {
                                    function r(r, c, f, p, d, h, v) {
                                        if (
                                            ((p = p || _),
                                            (h = h || f),
                                            v !== a)
                                        )
                                            if (n)
                                                i(
                                                    !1,
                                                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                                                );
                                            else if (
                                                "production" !==
                                                    t.env.NODE_ENV &&
                                                "undefined" != typeof console
                                            ) {
                                                var y = p + ":" + f;
                                                !o[y] &&
                                                    u < 3 &&
                                                    (s(
                                                        !1,
                                                        "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                                                        h,
                                                        p
                                                    ),
                                                    (o[y] = !0),
                                                    u++);
                                            }
                                        return null == c[f]
                                            ? r
                                                ? new l(
                                                      null === c[f]
                                                          ? "The " +
                                                            d +
                                                            " `" +
                                                            h +
                                                            "` is marked as required in `" +
                                                            p +
                                                            "`, but its value is `null`."
                                                          : "The " +
                                                            d +
                                                            " `" +
                                                            h +
                                                            "` is marked as required in `" +
                                                            p +
                                                            "`, but its value is `undefined`."
                                                  )
                                                : null
                                            : e(c, f, p, d, h);
                                    }
                                    if ("production" !== t.env.NODE_ENV)
                                        var o = {},
                                            u = 0;
                                    var c = r.bind(null, !1);
                                    return (c.isRequired = r.bind(null, !0)), c;
                                }
                                function d(e) {
                                    return p(function (t, n, r, o, i, s) {
                                        var u = t[n];
                                        return v(u) !== e
                                            ? new l(
                                                  "Invalid " +
                                                      o +
                                                      " `" +
                                                      i +
                                                      "` of type `" +
                                                      y(u) +
                                                      "` supplied to `" +
                                                      r +
                                                      "`, expected `" +
                                                      e +
                                                      "`."
                                              )
                                            : null;
                                    });
                                }
                                function h(t) {
                                    switch (void 0 === t ? "undefined" : r(t)) {
                                        case "number":
                                        case "string":
                                        case "undefined":
                                            return !0;
                                        case "boolean":
                                            return !t;
                                        case "object":
                                            if (Array.isArray(t))
                                                return t.every(h);
                                            if (null === t || e(t)) return !0;
                                            var n = (function (e) {
                                                var t =
                                                    e && ((m && e[m]) || e[g]);
                                                if ("function" == typeof t)
                                                    return t;
                                            })(t);
                                            if (!n) return !1;
                                            var o,
                                                i = n.call(t);
                                            if (n !== t.entries) {
                                                for (; !(o = i.next()).done; )
                                                    if (!h(o.value)) return !1;
                                            } else
                                                for (; !(o = i.next()).done; ) {
                                                    var s = o.value;
                                                    if (s && !h(s[1]))
                                                        return !1;
                                                }
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                }
                                function v(e) {
                                    var t = void 0 === e ? "undefined" : r(e);
                                    return Array.isArray(e)
                                        ? "array"
                                        : e instanceof RegExp
                                        ? "object"
                                        : (function (e, t) {
                                              return (
                                                  "symbol" === e ||
                                                  "Symbol" ===
                                                      t["@@toStringTag"] ||
                                                  ("function" ==
                                                      typeof Symbol &&
                                                      t instanceof Symbol)
                                              );
                                          })(t, e)
                                        ? "symbol"
                                        : t;
                                }
                                function y(e) {
                                    if (null == e) return "" + e;
                                    var t = v(e);
                                    if ("object" === t) {
                                        if (e instanceof Date) return "date";
                                        if (e instanceof RegExp)
                                            return "regexp";
                                    }
                                    return t;
                                }
                                function b(e) {
                                    var t = y(e);
                                    switch (t) {
                                        case "array":
                                        case "object":
                                            return "an " + t;
                                        case "boolean":
                                        case "date":
                                        case "regexp":
                                            return "a " + t;
                                        default:
                                            return t;
                                    }
                                }
                                var m =
                                        "function" == typeof Symbol &&
                                        Symbol.iterator,
                                    g = "@@iterator",
                                    _ = "<<anonymous>>",
                                    w = {
                                        array: d("array"),
                                        bool: d("boolean"),
                                        func: d("function"),
                                        number: d("number"),
                                        object: d("object"),
                                        string: d("string"),
                                        symbol: d("symbol"),
                                        any: p(o.thatReturnsNull),
                                        arrayOf: function (e) {
                                            return p(function (t, n, r, o, i) {
                                                if ("function" != typeof e)
                                                    return new l(
                                                        "Property `" +
                                                            i +
                                                            "` of component `" +
                                                            r +
                                                            "` has invalid PropType notation inside arrayOf."
                                                    );
                                                var s = t[n];
                                                if (!Array.isArray(s))
                                                    return new l(
                                                        "Invalid " +
                                                            o +
                                                            " `" +
                                                            i +
                                                            "` of type `" +
                                                            v(s) +
                                                            "` supplied to `" +
                                                            r +
                                                            "`, expected an array."
                                                    );
                                                for (
                                                    var u = 0;
                                                    u < s.length;
                                                    u++
                                                ) {
                                                    var c = e(
                                                        s,
                                                        u,
                                                        r,
                                                        o,
                                                        i + "[" + u + "]",
                                                        a
                                                    );
                                                    if (c instanceof Error)
                                                        return c;
                                                }
                                                return null;
                                            });
                                        },
                                        element: p(function (t, n, r, o, i) {
                                            var s = t[n];
                                            return e(s)
                                                ? null
                                                : new l(
                                                      "Invalid " +
                                                          o +
                                                          " `" +
                                                          i +
                                                          "` of type `" +
                                                          v(s) +
                                                          "` supplied to `" +
                                                          r +
                                                          "`, expected a single ReactElement."
                                                  );
                                        }),
                                        instanceOf: function (e) {
                                            return p(function (t, n, r, o, i) {
                                                if (!(t[n] instanceof e)) {
                                                    var s = e.name || _;
                                                    return new l(
                                                        "Invalid " +
                                                            o +
                                                            " `" +
                                                            i +
                                                            "` of type `" +
                                                            (function (e) {
                                                                return e.constructor &&
                                                                    e
                                                                        .constructor
                                                                        .name
                                                                    ? e
                                                                          .constructor
                                                                          .name
                                                                    : _;
                                                            })(t[n]) +
                                                            "` supplied to `" +
                                                            r +
                                                            "`, expected instance of `" +
                                                            s +
                                                            "`."
                                                    );
                                                }
                                                return null;
                                            });
                                        },
                                        node: p(function (e, t, n, r, o) {
                                            return h(e[t])
                                                ? null
                                                : new l(
                                                      "Invalid " +
                                                          r +
                                                          " `" +
                                                          o +
                                                          "` supplied to `" +
                                                          n +
                                                          "`, expected a ReactNode."
                                                  );
                                        }),
                                        objectOf: function (e) {
                                            return p(function (t, n, r, o, i) {
                                                if ("function" != typeof e)
                                                    return new l(
                                                        "Property `" +
                                                            i +
                                                            "` of component `" +
                                                            r +
                                                            "` has invalid PropType notation inside objectOf."
                                                    );
                                                var s = t[n],
                                                    u = v(s);
                                                if ("object" !== u)
                                                    return new l(
                                                        "Invalid " +
                                                            o +
                                                            " `" +
                                                            i +
                                                            "` of type `" +
                                                            u +
                                                            "` supplied to `" +
                                                            r +
                                                            "`, expected an object."
                                                    );
                                                for (var c in s)
                                                    if (s.hasOwnProperty(c)) {
                                                        var f = e(
                                                            s,
                                                            c,
                                                            r,
                                                            o,
                                                            i + "." + c,
                                                            a
                                                        );
                                                        if (f instanceof Error)
                                                            return f;
                                                    }
                                                return null;
                                            });
                                        },
                                        oneOf: function (e) {
                                            return Array.isArray(e)
                                                ? p(function (t, n, r, o, i) {
                                                      for (
                                                          var s = t[n], u = 0;
                                                          u < e.length;
                                                          u++
                                                      )
                                                          if (f(s, e[u]))
                                                              return null;
                                                      return new l(
                                                          "Invalid " +
                                                              o +
                                                              " `" +
                                                              i +
                                                              "` of value `" +
                                                              s +
                                                              "` supplied to `" +
                                                              r +
                                                              "`, expected one of " +
                                                              JSON.stringify(
                                                                  e
                                                              ) +
                                                              "."
                                                      );
                                                  })
                                                : ("production" !==
                                                      t.env.NODE_ENV &&
                                                      s(
                                                          !1,
                                                          "Invalid argument supplied to oneOf, expected an instance of array."
                                                      ),
                                                  o.thatReturnsNull);
                                        },
                                        oneOfType: function (e) {
                                            if (!Array.isArray(e))
                                                return (
                                                    "production" !==
                                                        t.env.NODE_ENV &&
                                                        s(
                                                            !1,
                                                            "Invalid argument supplied to oneOfType, expected an instance of array."
                                                        ),
                                                    o.thatReturnsNull
                                                );
                                            for (var n = 0; n < e.length; n++) {
                                                var r = e[n];
                                                if ("function" != typeof r)
                                                    return (
                                                        s(
                                                            !1,
                                                            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                                                            b(r),
                                                            n
                                                        ),
                                                        o.thatReturnsNull
                                                    );
                                            }
                                            return p(function (t, n, r, o, i) {
                                                for (
                                                    var s = 0;
                                                    s < e.length;
                                                    s++
                                                )
                                                    if (
                                                        null ==
                                                        (0, e[s])(
                                                            t,
                                                            n,
                                                            r,
                                                            o,
                                                            i,
                                                            a
                                                        )
                                                    )
                                                        return null;
                                                return new l(
                                                    "Invalid " +
                                                        o +
                                                        " `" +
                                                        i +
                                                        "` supplied to `" +
                                                        r +
                                                        "`."
                                                );
                                            });
                                        },
                                        shape: function (e) {
                                            return p(function (t, n, r, o, i) {
                                                var s = t[n],
                                                    u = v(s);
                                                if ("object" !== u)
                                                    return new l(
                                                        "Invalid " +
                                                            o +
                                                            " `" +
                                                            i +
                                                            "` of type `" +
                                                            u +
                                                            "` supplied to `" +
                                                            r +
                                                            "`, expected `object`."
                                                    );
                                                for (var c in e) {
                                                    var f = e[c];
                                                    if (f) {
                                                        var p = f(
                                                            s,
                                                            c,
                                                            r,
                                                            o,
                                                            i + "." + c,
                                                            a
                                                        );
                                                        if (p) return p;
                                                    }
                                                }
                                                return null;
                                            });
                                        },
                                        exact: function (e) {
                                            return p(function (t, n, r, o, i) {
                                                var s = t[n],
                                                    c = v(s);
                                                if ("object" !== c)
                                                    return new l(
                                                        "Invalid " +
                                                            o +
                                                            " `" +
                                                            i +
                                                            "` of type `" +
                                                            c +
                                                            "` supplied to `" +
                                                            r +
                                                            "`, expected `object`."
                                                    );
                                                var f = u({}, t[n], e);
                                                for (var p in f) {
                                                    var d = e[p];
                                                    if (!d)
                                                        return new l(
                                                            "Invalid " +
                                                                o +
                                                                " `" +
                                                                i +
                                                                "` key `" +
                                                                p +
                                                                "` supplied to `" +
                                                                r +
                                                                "`.\nBad object: " +
                                                                JSON.stringify(
                                                                    t[n],
                                                                    null,
                                                                    "  "
                                                                ) +
                                                                "\nValid keys: " +
                                                                JSON.stringify(
                                                                    Object.keys(
                                                                        e
                                                                    ),
                                                                    null,
                                                                    "  "
                                                                )
                                                        );
                                                    var h = d(
                                                        s,
                                                        p,
                                                        r,
                                                        o,
                                                        i + "." + p,
                                                        a
                                                    );
                                                    if (h) return h;
                                                }
                                                return null;
                                            });
                                        },
                                    };
                                return (
                                    (l.prototype = Error.prototype),
                                    (w.checkPropTypes = c),
                                    (w.PropTypes = w),
                                    w
                                );
                            };
                        }).call(t, n(4));
                    },
                    function (e, t) {
                        "use strict";
                        function n(e) {
                            return function () {
                                return e;
                            };
                        }
                        var r = function () {};
                        (r.thatReturns = n),
                            (r.thatReturnsFalse = n(!1)),
                            (r.thatReturnsTrue = n(!0)),
                            (r.thatReturnsNull = n(null)),
                            (r.thatReturnsThis = function () {
                                return this;
                            }),
                            (r.thatReturnsArgument = function (e) {
                                return e;
                            }),
                            (e.exports = r);
                    },
                    function (e, t, n) {
                        (function (t) {
                            "use strict";
                            var n = function (e) {};
                            "production" !== t.env.NODE_ENV &&
                                (n = function (e) {
                                    if (void 0 === e)
                                        throw new Error(
                                            "invariant requires an error message argument"
                                        );
                                }),
                                (e.exports = function (e, t, r, o, i, s, u, a) {
                                    if ((n(t), !e)) {
                                        var c;
                                        if (void 0 === t)
                                            c = new Error(
                                                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                                            );
                                        else {
                                            var f = [r, o, i, s, u, a],
                                                l = 0;
                                            (c = new Error(
                                                t.replace(/%s/g, function () {
                                                    return f[l++];
                                                })
                                            )).name = "Invariant Violation";
                                        }
                                        throw ((c.framesToPop = 1), c);
                                    }
                                });
                        }).call(t, n(4));
                    },
                    function (e, t, n) {
                        (function (t) {
                            "use strict";
                            var r = n(6);
                            if ("production" !== t.env.NODE_ENV) {
                                var o = function (e) {
                                    for (
                                        var t = arguments.length,
                                            n = Array(t > 1 ? t - 1 : 0),
                                            r = 1;
                                        r < t;
                                        r++
                                    )
                                        n[r - 1] = arguments[r];
                                    var o = 0,
                                        i =
                                            "Warning: " +
                                            e.replace(/%s/g, function () {
                                                return n[o++];
                                            });
                                    "undefined" != typeof console &&
                                        console.error(i);
                                    try {
                                        throw new Error(i);
                                    } catch (e) {}
                                };
                                r = function (e, t) {
                                    if (void 0 === t)
                                        throw new Error(
                                            "`warning(condition, format, ...args)` requires a warning message argument"
                                        );
                                    if (
                                        0 !==
                                            t.indexOf(
                                                "Failed Composite propType: "
                                            ) &&
                                        !e
                                    ) {
                                        for (
                                            var n = arguments.length,
                                                r = Array(n > 2 ? n - 2 : 0),
                                                i = 2;
                                            i < n;
                                            i++
                                        )
                                            r[i - 2] = arguments[i];
                                        o.apply(void 0, [t].concat(r));
                                    }
                                };
                            }
                            e.exports = r;
                        }).call(t, n(4));
                    },
                    function (e, t) {
                        "use strict";
                        function n(e) {
                            if (null == e)
                                throw new TypeError(
                                    "Object.assign cannot be called with null or undefined"
                                );
                            return Object(e);
                        }
                        var r = Object.getOwnPropertySymbols,
                            o = Object.prototype.hasOwnProperty,
                            i = Object.prototype.propertyIsEnumerable;
                        e.exports = (function () {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (
                                    ((e[5] = "de"),
                                    "5" === Object.getOwnPropertyNames(e)[0])
                                )
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
                                    "abcdefghijklmnopqrst"
                                        .split("")
                                        .forEach(function (e) {
                                            r[e] = e;
                                        }),
                                    "abcdefghijklmnopqrst" ===
                                        Object.keys(Object.assign({}, r)).join(
                                            ""
                                        )
                                );
                            } catch (e) {
                                return !1;
                            }
                        })()
                            ? Object.assign
                            : function (e, t) {
                                  for (
                                      var s, u, a = n(e), c = 1;
                                      c < arguments.length;
                                      c++
                                  ) {
                                      for (var f in (s = Object(arguments[c])))
                                          o.call(s, f) && (a[f] = s[f]);
                                      if (r) {
                                          u = r(s);
                                          for (var l = 0; l < u.length; l++)
                                              i.call(s, u[l]) &&
                                                  (a[u[l]] = s[u[l]]);
                                      }
                                  }
                                  return a;
                              };
                    },
                    function (e, t) {
                        "use strict";
                        e.exports =
                            "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                    },
                    function (e, t, n) {
                        (function (t) {
                            "use strict";
                            var r =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" == typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      };
                            if ("production" !== t.env.NODE_ENV)
                                var o = n(7),
                                    i = n(8),
                                    s = n(10),
                                    u = {};
                            e.exports = function (e, n, a, c, f) {
                                if ("production" !== t.env.NODE_ENV)
                                    for (var l in e)
                                        if (e.hasOwnProperty(l)) {
                                            var p;
                                            try {
                                                o(
                                                    "function" == typeof e[l],
                                                    "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",
                                                    c || "React class",
                                                    a,
                                                    l,
                                                    r(e[l])
                                                ),
                                                    (p = e[l](
                                                        n,
                                                        l,
                                                        c,
                                                        a,
                                                        null,
                                                        s
                                                    ));
                                            } catch (e) {
                                                p = e;
                                            }
                                            if (
                                                (i(
                                                    !p || p instanceof Error,
                                                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                                                    c || "React class",
                                                    a,
                                                    l,
                                                    void 0 === p
                                                        ? "undefined"
                                                        : r(p)
                                                ),
                                                p instanceof Error &&
                                                    !(p.message in u))
                                            ) {
                                                u[p.message] = !0;
                                                var d = f ? f() : "";
                                                i(
                                                    !1,
                                                    "Failed %s type: %s%s",
                                                    a,
                                                    p.message,
                                                    null != d ? d : ""
                                                );
                                            }
                                        }
                            };
                        }).call(t, n(4));
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(6),
                            o = n(7),
                            i = n(10);
                        e.exports = function () {
                            function e(e, t, n, r, s, u) {
                                u !== i &&
                                    o(
                                        !1,
                                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                                    );
                            }
                            function t() {
                                return e;
                            }
                            e.isRequired = e;
                            var n = {
                                array: e,
                                bool: e,
                                func: e,
                                number: e,
                                object: e,
                                string: e,
                                symbol: e,
                                any: e,
                                arrayOf: t,
                                element: e,
                                instanceOf: t,
                                node: e,
                                objectOf: t,
                                oneOf: t,
                                oneOfType: t,
                                shape: t,
                                exact: t,
                            };
                            return (n.checkPropTypes = r), (n.PropTypes = n), n;
                        };
                    },
                    function (e, t) {
                        e.exports = o;
                    },
                    function (e, t) {
                        e.exports = i;
                    },
                    function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.default = function (e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                    n = e.getBoundingClientRect(),
                                    o = void 0,
                                    i = void 0,
                                    s = void 0;
                                return (
                                    t.margin &&
                                        (s = (0, r.default)(
                                            getComputedStyle(e)
                                        )),
                                    t.margin
                                        ? ((o = s.left + n.width + s.right),
                                          (i = s.top + n.height + s.bottom))
                                        : ((o = n.width), (i = n.height)),
                                    {
                                        width: o,
                                        height: i,
                                        top: n.top,
                                        right: n.right,
                                        bottom: n.bottom,
                                        left: n.left,
                                    }
                                );
                            });
                        var r = (function (e) {
                            return e && e.__esModule ? e : { default: e };
                        })(n(16));
                        e.exports = t.default;
                    },
                    function (e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.default = function (e) {
                                return {
                                    top: n((e = e || {}).marginTop),
                                    right: n(e.marginRight),
                                    bottom: n(e.marginBottom),
                                    left: n(e.marginLeft),
                                };
                            });
                        var n = function (e) {
                            return parseInt(e) || 0;
                        };
                        e.exports = t.default;
                    },
                ]));
        },
    },
]);
