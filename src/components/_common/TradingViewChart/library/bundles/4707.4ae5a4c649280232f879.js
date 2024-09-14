"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [4707],
    {
        46123: (e, t, r) => {
            function n(e, t) {
                for (
                    var r = arguments.length,
                        n = new Array(r > 2 ? r - 2 : 0),
                        o = 2;
                    o < r;
                    o++
                )
                    n[o - 2] = arguments[o];
                if (!e) {
                    var i;
                    if (void 0 === t)
                        i = new Error(
                            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                        );
                    else {
                        var a = 0;
                        (i = new Error(
                            t.replace(/%s/g, function () {
                                return n[a++];
                            })
                        )).name = "Invariant Violation";
                    }
                    throw ((i.framesToPop = 1), i);
                }
            }
            r.d(t, { invariant: () => n });
        },
        1633: (e, t, r) => {
            function n(e, t, r, n) {
                var o = r ? r.call(n, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t)
                    return !1;
                var i = Object.keys(e),
                    a = Object.keys(t);
                if (i.length !== a.length) return !1;
                for (
                    var s = Object.prototype.hasOwnProperty.bind(t), u = 0;
                    u < i.length;
                    u++
                ) {
                    var c = i[u];
                    if (!s(c)) return !1;
                    var d = e[c],
                        l = t[c];
                    if (
                        !1 === (o = r ? r.call(n, d, l, c) : void 0) ||
                        (void 0 === o && d !== l)
                    )
                        return !1;
                }
                return !0;
            }
            r.d(t, { shallowEqual: () => n });
        },
        53408: (e, t, r) => {
            var n;
            function o() {
                return (
                    n ||
                        ((n = new Image()).src =
                            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                    n
                );
            }
            r.d(t, { getEmptyImage: () => o });
        },
        11307: (e, t, r) => {
            r.d(t, { HTML5Backend: () => R });
            var n = {};
            function o(e) {
                var t = null;
                return function () {
                    return null == t && (t = e()), t;
                };
            }
            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            r.r(n),
                r.d(n, {
                    FILE: () => p,
                    HTML: () => m,
                    TEXT: () => y,
                    URL: () => v,
                });
            var a = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.entered = []),
                            (this.isNodeInDocument = t);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "enter",
                                value: function (e) {
                                    var t = this,
                                        r = this.entered.length;
                                    return (
                                        (this.entered = (function (e, t) {
                                            var r = new Set(),
                                                n = function (e) {
                                                    return r.add(e);
                                                };
                                            e.forEach(n), t.forEach(n);
                                            var o = [];
                                            return (
                                                r.forEach(function (e) {
                                                    return o.push(e);
                                                }),
                                                o
                                            );
                                        })(
                                            this.entered.filter(function (r) {
                                                return (
                                                    t.isNodeInDocument(r) &&
                                                    (!r.contains ||
                                                        r.contains(e))
                                                );
                                            }),
                                            [e]
                                        )),
                                        0 === r && this.entered.length > 0
                                    );
                                },
                            },
                            {
                                key: "leave",
                                value: function (e) {
                                    var t,
                                        r,
                                        n = this.entered.length;
                                    return (
                                        (this.entered =
                                            ((t = this.entered.filter(
                                                this.isNodeInDocument
                                            )),
                                            (r = e),
                                            t.filter(function (e) {
                                                return e !== r;
                                            }))),
                                        n > 0 && 0 === this.entered.length
                                    );
                                },
                            },
                            {
                                key: "reset",
                                value: function () {
                                    this.entered = [];
                                },
                            },
                        ]) && i(t.prototype, r),
                        n && i(t, n),
                        e
                    );
                })(),
                s = o(function () {
                    return /firefox/i.test(navigator.userAgent);
                }),
                u = o(function () {
                    return Boolean(window.safari);
                });
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var d = (function () {
                function e(t, r) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e);
                    for (var n = t.length, o = [], i = 0; i < n; i++) o.push(i);
                    o.sort(function (e, r) {
                        return t[e] < t[r] ? -1 : 1;
                    });
                    for (
                        var a, s, u = [], c = [], d = [], l = 0;
                        l < n - 1;
                        l++
                    )
                        (a = t[l + 1] - t[l]),
                            (s = r[l + 1] - r[l]),
                            c.push(a),
                            u.push(s),
                            d.push(s / a);
                    for (var f = [d[0]], h = 0; h < c.length - 1; h++) {
                        var g = d[h],
                            p = d[h + 1];
                        if (g * p <= 0) f.push(0);
                        else {
                            a = c[h];
                            var v = c[h + 1],
                                y = a + v;
                            f.push((3 * y) / ((y + v) / g + (y + a) / p));
                        }
                    }
                    f.push(d[d.length - 1]);
                    for (var m, b = [], O = [], D = 0; D < f.length - 1; D++) {
                        m = d[D];
                        var S = f[D],
                            w = 1 / c[D],
                            T = S + f[D + 1] - m - m;
                        b.push((m - S - T) * w), O.push(T * w * w);
                    }
                    (this.xs = t),
                        (this.ys = r),
                        (this.c1s = f),
                        (this.c2s = b),
                        (this.c3s = O);
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "interpolate",
                            value: function (e) {
                                var t = this.xs,
                                    r = this.ys,
                                    n = this.c1s,
                                    o = this.c2s,
                                    i = this.c3s,
                                    a = t.length - 1;
                                if (e === t[a]) return r[a];
                                for (var s, u = 0, c = i.length - 1; u <= c; ) {
                                    var d = t[(s = Math.floor(0.5 * (u + c)))];
                                    if (d < e) u = s + 1;
                                    else {
                                        if (!(d > e)) return r[s];
                                        c = s - 1;
                                    }
                                }
                                var l = e - t[(a = Math.max(0, c))],
                                    f = l * l;
                                return (
                                    r[a] + n[a] * l + o[a] * f + i[a] * l * f
                                );
                            },
                        },
                    ]) && c(t.prototype, r),
                    n && c(t, n),
                    e
                );
            })();
            function l(e) {
                var t = 1 === e.nodeType ? e : e.parentElement;
                if (!t) return null;
                var r = t.getBoundingClientRect(),
                    n = r.top;
                return { x: r.left, y: n };
            }
            function f(e) {
                return { x: e.clientX, y: e.clientY };
            }
            function h(e, t, r, n, o) {
                var i,
                    a,
                    c,
                    f =
                        "IMG" === (i = t).nodeName &&
                        (s() ||
                            !(
                                null !== (a = document.documentElement) &&
                                void 0 !== a &&
                                a.contains(i)
                            )),
                    h = l(f ? e : t),
                    g = { x: r.x - h.x, y: r.y - h.y },
                    p = e.offsetWidth,
                    v = e.offsetHeight,
                    y = n.anchorX,
                    m = n.anchorY,
                    b = (function (e, t, r, n) {
                        var o = e ? t.width : r,
                            i = e ? t.height : n;
                        return (
                            u() &&
                                e &&
                                ((i /= window.devicePixelRatio),
                                (o /= window.devicePixelRatio)),
                            { dragPreviewWidth: o, dragPreviewHeight: i }
                        );
                    })(f, t, p, v),
                    O = b.dragPreviewWidth,
                    D = b.dragPreviewHeight,
                    S = o.offsetX,
                    w = o.offsetY,
                    T = 0 === w || w;
                return {
                    x:
                        0 === S || S
                            ? S
                            : new d(
                                  [0, 0.5, 1],
                                  [g.x, (g.x / p) * O, g.x + O - p]
                              ).interpolate(y),
                    y: T
                        ? w
                        : ((c = new d(
                              [0, 0.5, 1],
                              [g.y, (g.y / v) * D, g.y + D - v]
                          ).interpolate(m)),
                          u() && f && (c += (window.devicePixelRatio - 1) * D),
                          c),
                };
            }
            var g,
                p = "__NATIVE_FILE__",
                v = "__NATIVE_URL__",
                y = "__NATIVE_TEXT__",
                m = "__NATIVE_HTML__";
            function b(e, t, r) {
                var n = t.reduce(function (t, r) {
                    return t || e.getData(r);
                }, "");
                return null != n ? n : r;
            }
            function O(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var D =
                (O((g = {}), p, {
                    exposeProperties: {
                        files: function (e) {
                            return Array.prototype.slice.call(e.files);
                        },
                        items: function (e) {
                            return e.items;
                        },
                    },
                    matchesTypes: ["Files"],
                }),
                O(g, m, {
                    exposeProperties: {
                        html: function (e, t) {
                            return b(e, t, "");
                        },
                    },
                    matchesTypes: ["Html", "text/html"],
                }),
                O(g, v, {
                    exposeProperties: {
                        urls: function (e, t) {
                            return b(e, t, "").split("\n");
                        },
                    },
                    matchesTypes: ["Url", "text/uri-list"],
                }),
                O(g, y, {
                    exposeProperties: {
                        text: function (e, t) {
                            return b(e, t, "");
                        },
                    },
                    matchesTypes: ["Text", "text/plain"],
                }),
                g);
            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var w = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.config = t),
                        (this.item = {}),
                        this.initializeExposedProperties();
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "initializeExposedProperties",
                            value: function () {
                                var e = this;
                                Object.keys(
                                    this.config.exposeProperties
                                ).forEach(function (t) {
                                    Object.defineProperty(e.item, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: function () {
                                            return (
                                                console.warn(
                                                    "Browser doesn't allow reading \"".concat(
                                                        t,
                                                        '" until the drop event.'
                                                    )
                                                ),
                                                null
                                            );
                                        },
                                    });
                                });
                            },
                        },
                        {
                            key: "loadDataTransfer",
                            value: function (e) {
                                var t = this;
                                if (e) {
                                    var r = {};
                                    Object.keys(
                                        this.config.exposeProperties
                                    ).forEach(function (n) {
                                        r[n] = {
                                            value: t.config.exposeProperties[n](
                                                e,
                                                t.config.matchesTypes
                                            ),
                                            configurable: !0,
                                            enumerable: !0,
                                        };
                                    }),
                                        Object.defineProperties(this.item, r);
                                }
                            },
                        },
                        {
                            key: "canDrag",
                            value: function () {
                                return !0;
                            },
                        },
                        {
                            key: "beginDrag",
                            value: function () {
                                return this.item;
                            },
                        },
                        {
                            key: "isDragging",
                            value: function (e, t) {
                                return t === e.getSourceId();
                            },
                        },
                        { key: "endDrag", value: function () {} },
                    ]) && S(t.prototype, r),
                    n && S(t, n),
                    e
                );
            })();
            function T(e) {
                if (!e) return null;
                var t = Array.prototype.slice.call(e.types || []);
                return (
                    Object.keys(D).filter(function (e) {
                        return D[e].matchesTypes.some(function (e) {
                            return t.indexOf(e) > -1;
                        });
                    })[0] || null
                );
            }
            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var E = (function () {
                function e(t, r) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.ownerDocument = null),
                        (this.globalContext = t),
                        (this.optionsArgs = r);
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "window",
                            get: function () {
                                return this.globalContext
                                    ? this.globalContext
                                    : "undefined" != typeof window
                                    ? window
                                    : void 0;
                            },
                        },
                        {
                            key: "document",
                            get: function () {
                                var e;
                                return null !== (e = this.globalContext) &&
                                    void 0 !== e &&
                                    e.document
                                    ? this.globalContext.document
                                    : this.window
                                    ? this.window.document
                                    : void 0;
                            },
                        },
                        {
                            key: "rootElement",
                            get: function () {
                                var e;
                                return (
                                    (null === (e = this.optionsArgs) ||
                                    void 0 === e
                                        ? void 0
                                        : e.rootElement) || this.window
                                );
                            },
                        },
                    ]) && C(t.prototype, r),
                    n && C(t, n),
                    e
                );
            })();
            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? I(Object(r), !0).forEach(function (t) {
                              P(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : I(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function P(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function j(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var N = (function () {
                    function e(t, r, n) {
                        var o = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.sourcePreviewNodes = new Map()),
                            (this.sourcePreviewNodeOptions = new Map()),
                            (this.sourceNodes = new Map()),
                            (this.sourceNodeOptions = new Map()),
                            (this.dragStartSourceIds = null),
                            (this.dropTargetIds = []),
                            (this.dragEnterTargetIds = []),
                            (this.currentNativeSource = null),
                            (this.currentNativeHandle = null),
                            (this.currentDragSourceNode = null),
                            (this.altKeyPressed = !1),
                            (this.mouseMoveTimeoutTimer = null),
                            (this.asyncEndDragFrameId = null),
                            (this.dragOverTargetIds = null),
                            (this.getSourceClientOffset = function (e) {
                                var t = o.sourceNodes.get(e);
                                return (t && l(t)) || null;
                            }),
                            (this.endDragNativeItem = function () {
                                o.isDraggingNativeItem() &&
                                    (o.actions.endDrag(),
                                    o.currentNativeHandle &&
                                        o.registry.removeSource(
                                            o.currentNativeHandle
                                        ),
                                    (o.currentNativeHandle = null),
                                    (o.currentNativeSource = null));
                            }),
                            (this.isNodeInDocument = function (e) {
                                return Boolean(
                                    e &&
                                        o.document &&
                                        o.document.body &&
                                        document.body.contains(e)
                                );
                            }),
                            (this.endDragIfSourceWasRemovedFromDOM =
                                function () {
                                    var e = o.currentDragSourceNode;
                                    null == e ||
                                        o.isNodeInDocument(e) ||
                                        (o.clearCurrentDragSourceNode() &&
                                            o.monitor.isDragging() &&
                                            o.actions.endDrag());
                                }),
                            (this.handleTopDragStartCapture = function () {
                                o.clearCurrentDragSourceNode(),
                                    (o.dragStartSourceIds = []);
                            }),
                            (this.handleTopDragStart = function (e) {
                                if (!e.defaultPrevented) {
                                    var t = o.dragStartSourceIds;
                                    o.dragStartSourceIds = null;
                                    var r = f(e);
                                    o.monitor.isDragging() &&
                                        o.actions.endDrag(),
                                        o.actions.beginDrag(t || [], {
                                            publishSource: !1,
                                            getSourceClientOffset:
                                                o.getSourceClientOffset,
                                            clientOffset: r,
                                        });
                                    var n = e.dataTransfer,
                                        i = T(n);
                                    if (o.monitor.isDragging()) {
                                        if (
                                            n &&
                                            "function" == typeof n.setDragImage
                                        ) {
                                            var a = o.monitor.getSourceId(),
                                                s = o.sourceNodes.get(a),
                                                u =
                                                    o.sourcePreviewNodes.get(
                                                        a
                                                    ) || s;
                                            if (u) {
                                                var c =
                                                        o.getCurrentSourcePreviewNodeOptions(),
                                                    d = h(
                                                        s,
                                                        u,
                                                        r,
                                                        {
                                                            anchorX: c.anchorX,
                                                            anchorY: c.anchorY,
                                                        },
                                                        {
                                                            offsetX: c.offsetX,
                                                            offsetY: c.offsetY,
                                                        }
                                                    );
                                                n.setDragImage(u, d.x, d.y);
                                            }
                                        }
                                        try {
                                            null == n ||
                                                n.setData(
                                                    "application/json",
                                                    {}
                                                );
                                        } catch (e) {}
                                        o.setCurrentDragSourceNode(e.target),
                                            o.getCurrentSourcePreviewNodeOptions()
                                                .captureDraggingState
                                                ? o.actions.publishDragSource()
                                                : setTimeout(function () {
                                                      return o.actions.publishDragSource();
                                                  }, 0);
                                    } else if (i) o.beginDragNativeItem(i);
                                    else {
                                        if (
                                            n &&
                                            !n.types &&
                                            ((e.target &&
                                                !e.target.hasAttribute) ||
                                                !e.target.hasAttribute(
                                                    "draggable"
                                                ))
                                        )
                                            return;
                                        e.preventDefault();
                                    }
                                }
                            }),
                            (this.handleTopDragEndCapture = function () {
                                o.clearCurrentDragSourceNode() &&
                                    o.monitor.isDragging() &&
                                    o.actions.endDrag();
                            }),
                            (this.handleTopDragEnterCapture = function (e) {
                                if (
                                    ((o.dragEnterTargetIds = []),
                                    o.enterLeaveCounter.enter(e.target) &&
                                        !o.monitor.isDragging())
                                ) {
                                    var t = e.dataTransfer,
                                        r = T(t);
                                    r && o.beginDragNativeItem(r, t);
                                }
                            }),
                            (this.handleTopDragEnter = function (e) {
                                var t = o.dragEnterTargetIds;
                                ((o.dragEnterTargetIds = []),
                                o.monitor.isDragging()) &&
                                    ((o.altKeyPressed = e.altKey),
                                    t.length > 0 &&
                                        o.actions.hover(t, {
                                            clientOffset: f(e),
                                        }),
                                    t.some(function (e) {
                                        return o.monitor.canDropOnTarget(e);
                                    }) &&
                                        (e.preventDefault(),
                                        e.dataTransfer &&
                                            (e.dataTransfer.dropEffect =
                                                o.getCurrentDropEffect())));
                            }),
                            (this.handleTopDragOverCapture = function () {
                                o.dragOverTargetIds = [];
                            }),
                            (this.handleTopDragOver = function (e) {
                                var t = o.dragOverTargetIds;
                                if (
                                    ((o.dragOverTargetIds = []),
                                    !o.monitor.isDragging())
                                )
                                    return (
                                        e.preventDefault(),
                                        void (
                                            e.dataTransfer &&
                                            (e.dataTransfer.dropEffect = "none")
                                        )
                                    );
                                (o.altKeyPressed = e.altKey),
                                    o.actions.hover(t || [], {
                                        clientOffset: f(e),
                                    }),
                                    (t || []).some(function (e) {
                                        return o.monitor.canDropOnTarget(e);
                                    })
                                        ? (e.preventDefault(),
                                          e.dataTransfer &&
                                              (e.dataTransfer.dropEffect =
                                                  o.getCurrentDropEffect()))
                                        : o.isDraggingNativeItem()
                                        ? e.preventDefault()
                                        : (e.preventDefault(),
                                          e.dataTransfer &&
                                              (e.dataTransfer.dropEffect =
                                                  "none"));
                            }),
                            (this.handleTopDragLeaveCapture = function (e) {
                                o.isDraggingNativeItem() && e.preventDefault(),
                                    o.enterLeaveCounter.leave(e.target) &&
                                        o.isDraggingNativeItem() &&
                                        setTimeout(function () {
                                            return o.endDragNativeItem();
                                        }, 0);
                            }),
                            (this.handleTopDropCapture = function (e) {
                                var t;
                                ((o.dropTargetIds = []),
                                o.isDraggingNativeItem()) &&
                                    (e.preventDefault(),
                                    null === (t = o.currentNativeSource) ||
                                        void 0 === t ||
                                        t.loadDataTransfer(e.dataTransfer));
                                o.enterLeaveCounter.reset();
                            }),
                            (this.handleTopDrop = function (e) {
                                var t = o.dropTargetIds;
                                (o.dropTargetIds = []),
                                    o.actions.hover(t, { clientOffset: f(e) }),
                                    o.actions.drop({
                                        dropEffect: o.getCurrentDropEffect(),
                                    }),
                                    o.isDraggingNativeItem()
                                        ? o.endDragNativeItem()
                                        : o.monitor.isDragging() &&
                                          o.actions.endDrag();
                            }),
                            (this.handleSelectStart = function (e) {
                                var t = e.target;
                                "function" == typeof t.dragDrop &&
                                    ("INPUT" === t.tagName ||
                                        "SELECT" === t.tagName ||
                                        "TEXTAREA" === t.tagName ||
                                        t.isContentEditable ||
                                        (e.preventDefault(), t.dragDrop()));
                            }),
                            (this.options = new E(r, n)),
                            (this.actions = t.getActions()),
                            (this.monitor = t.getMonitor()),
                            (this.registry = t.getRegistry()),
                            (this.enterLeaveCounter = new a(
                                this.isNodeInDocument
                            ));
                    }
                    var t, r, o;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "profile",
                                value: function () {
                                    var e, t;
                                    return {
                                        sourcePreviewNodes:
                                            this.sourcePreviewNodes.size,
                                        sourcePreviewNodeOptions:
                                            this.sourcePreviewNodeOptions.size,
                                        sourceNodeOptions:
                                            this.sourceNodeOptions.size,
                                        sourceNodes: this.sourceNodes.size,
                                        dragStartSourceIds:
                                            (null ===
                                                (e = this.dragStartSourceIds) ||
                                            void 0 === e
                                                ? void 0
                                                : e.length) || 0,
                                        dropTargetIds:
                                            this.dropTargetIds.length,
                                        dragEnterTargetIds:
                                            this.dragEnterTargetIds.length,
                                        dragOverTargetIds:
                                            (null ===
                                                (t = this.dragOverTargetIds) ||
                                            void 0 === t
                                                ? void 0
                                                : t.length) || 0,
                                    };
                                },
                            },
                            {
                                key: "window",
                                get: function () {
                                    return this.options.window;
                                },
                            },
                            {
                                key: "document",
                                get: function () {
                                    return this.options.document;
                                },
                            },
                            {
                                key: "rootElement",
                                get: function () {
                                    return this.options.rootElement;
                                },
                            },
                            {
                                key: "setup",
                                value: function () {
                                    var e = this.rootElement;
                                    if (void 0 !== e) {
                                        if (e.__isReactDndBackendSetUp)
                                            throw new Error(
                                                "Cannot have two HTML5 backends at the same time."
                                            );
                                        (e.__isReactDndBackendSetUp = !0),
                                            this.addEventListeners(e);
                                    }
                                },
                            },
                            {
                                key: "teardown",
                                value: function () {
                                    var e,
                                        t = this.rootElement;
                                    void 0 !== t &&
                                        ((t.__isReactDndBackendSetUp = !1),
                                        this.removeEventListeners(
                                            this.rootElement
                                        ),
                                        this.clearCurrentDragSourceNode(),
                                        this.asyncEndDragFrameId &&
                                            (null === (e = this.window) ||
                                                void 0 === e ||
                                                e.cancelAnimationFrame(
                                                    this.asyncEndDragFrameId
                                                )));
                                },
                            },
                            {
                                key: "connectDragPreview",
                                value: function (e, t, r) {
                                    var n = this;
                                    return (
                                        this.sourcePreviewNodeOptions.set(e, r),
                                        this.sourcePreviewNodes.set(e, t),
                                        function () {
                                            n.sourcePreviewNodes.delete(e),
                                                n.sourcePreviewNodeOptions.delete(
                                                    e
                                                );
                                        }
                                    );
                                },
                            },
                            {
                                key: "connectDragSource",
                                value: function (e, t, r) {
                                    var n = this;
                                    this.sourceNodes.set(e, t),
                                        this.sourceNodeOptions.set(e, r);
                                    var o = function (t) {
                                            return n.handleDragStart(t, e);
                                        },
                                        i = function (e) {
                                            return n.handleSelectStart(e);
                                        };
                                    return (
                                        t.setAttribute("draggable", "true"),
                                        t.addEventListener("dragstart", o),
                                        t.addEventListener("selectstart", i),
                                        function () {
                                            n.sourceNodes.delete(e),
                                                n.sourceNodeOptions.delete(e),
                                                t.removeEventListener(
                                                    "dragstart",
                                                    o
                                                ),
                                                t.removeEventListener(
                                                    "selectstart",
                                                    i
                                                ),
                                                t.setAttribute(
                                                    "draggable",
                                                    "false"
                                                );
                                        }
                                    );
                                },
                            },
                            {
                                key: "connectDropTarget",
                                value: function (e, t) {
                                    var r = this,
                                        n = function (t) {
                                            return r.handleDragEnter(t, e);
                                        },
                                        o = function (t) {
                                            return r.handleDragOver(t, e);
                                        },
                                        i = function (t) {
                                            return r.handleDrop(t, e);
                                        };
                                    return (
                                        t.addEventListener("dragenter", n),
                                        t.addEventListener("dragover", o),
                                        t.addEventListener("drop", i),
                                        function () {
                                            t.removeEventListener(
                                                "dragenter",
                                                n
                                            ),
                                                t.removeEventListener(
                                                    "dragover",
                                                    o
                                                ),
                                                t.removeEventListener(
                                                    "drop",
                                                    i
                                                );
                                        }
                                    );
                                },
                            },
                            {
                                key: "addEventListeners",
                                value: function (e) {
                                    e.addEventListener &&
                                        (e.addEventListener(
                                            "dragstart",
                                            this.handleTopDragStart
                                        ),
                                        e.addEventListener(
                                            "dragstart",
                                            this.handleTopDragStartCapture,
                                            !0
                                        ),
                                        e.addEventListener(
                                            "dragend",
                                            this.handleTopDragEndCapture,
                                            !0
                                        ),
                                        e.addEventListener(
                                            "dragenter",
                                            this.handleTopDragEnter
                                        ),
                                        e.addEventListener(
                                            "dragenter",
                                            this.handleTopDragEnterCapture,
                                            !0
                                        ),
                                        e.addEventListener(
                                            "dragleave",
                                            this.handleTopDragLeaveCapture,
                                            !0
                                        ),
                                        e.addEventListener(
                                            "dragover",
                                            this.handleTopDragOver
                                        ),
                                        e.addEventListener(
                                            "dragover",
                                            this.handleTopDragOverCapture,
                                            !0
                                        ),
                                        e.addEventListener(
                                            "drop",
                                            this.handleTopDrop
                                        ),
                                        e.addEventListener(
                                            "drop",
                                            this.handleTopDropCapture,
                                            !0
                                        ));
                                },
                            },
                            {
                                key: "removeEventListeners",
                                value: function (e) {
                                    e.removeEventListener &&
                                        (e.removeEventListener(
                                            "dragstart",
                                            this.handleTopDragStart
                                        ),
                                        e.removeEventListener(
                                            "dragstart",
                                            this.handleTopDragStartCapture,
                                            !0
                                        ),
                                        e.removeEventListener(
                                            "dragend",
                                            this.handleTopDragEndCapture,
                                            !0
                                        ),
                                        e.removeEventListener(
                                            "dragenter",
                                            this.handleTopDragEnter
                                        ),
                                        e.removeEventListener(
                                            "dragenter",
                                            this.handleTopDragEnterCapture,
                                            !0
                                        ),
                                        e.removeEventListener(
                                            "dragleave",
                                            this.handleTopDragLeaveCapture,
                                            !0
                                        ),
                                        e.removeEventListener(
                                            "dragover",
                                            this.handleTopDragOver
                                        ),
                                        e.removeEventListener(
                                            "dragover",
                                            this.handleTopDragOverCapture,
                                            !0
                                        ),
                                        e.removeEventListener(
                                            "drop",
                                            this.handleTopDrop
                                        ),
                                        e.removeEventListener(
                                            "drop",
                                            this.handleTopDropCapture,
                                            !0
                                        ));
                                },
                            },
                            {
                                key: "getCurrentSourceNodeOptions",
                                value: function () {
                                    var e = this.monitor.getSourceId(),
                                        t = this.sourceNodeOptions.get(e);
                                    return k(
                                        {
                                            dropEffect: this.altKeyPressed
                                                ? "copy"
                                                : "move",
                                        },
                                        t || {}
                                    );
                                },
                            },
                            {
                                key: "getCurrentDropEffect",
                                value: function () {
                                    return this.isDraggingNativeItem()
                                        ? "copy"
                                        : this.getCurrentSourceNodeOptions()
                                              .dropEffect;
                                },
                            },
                            {
                                key: "getCurrentSourcePreviewNodeOptions",
                                value: function () {
                                    var e = this.monitor.getSourceId();
                                    return k(
                                        {
                                            anchorX: 0.5,
                                            anchorY: 0.5,
                                            captureDraggingState: !1,
                                        },
                                        this.sourcePreviewNodeOptions.get(e) ||
                                            {}
                                    );
                                },
                            },
                            {
                                key: "isDraggingNativeItem",
                                value: function () {
                                    var e = this.monitor.getItemType();
                                    return Object.keys(n).some(function (t) {
                                        return n[t] === e;
                                    });
                                },
                            },
                            {
                                key: "beginDragNativeItem",
                                value: function (e, t) {
                                    this.clearCurrentDragSourceNode(),
                                        (this.currentNativeSource = (function (
                                            e,
                                            t
                                        ) {
                                            var r = new w(D[e]);
                                            return r.loadDataTransfer(t), r;
                                        })(e, t)),
                                        (this.currentNativeHandle =
                                            this.registry.addSource(
                                                e,
                                                this.currentNativeSource
                                            )),
                                        this.actions.beginDrag([
                                            this.currentNativeHandle,
                                        ]);
                                },
                            },
                            {
                                key: "setCurrentDragSourceNode",
                                value: function (e) {
                                    var t = this;
                                    this.clearCurrentDragSourceNode(),
                                        (this.currentDragSourceNode = e),
                                        (this.mouseMoveTimeoutTimer =
                                            setTimeout(function () {
                                                var e;
                                                return null ===
                                                    (e = t.rootElement) ||
                                                    void 0 === e
                                                    ? void 0
                                                    : e.addEventListener(
                                                          "mousemove",
                                                          t.endDragIfSourceWasRemovedFromDOM,
                                                          !0
                                                      );
                                            }, 1e3));
                                },
                            },
                            {
                                key: "clearCurrentDragSourceNode",
                                value: function () {
                                    var e;
                                    return (
                                        !!this.currentDragSourceNode &&
                                        ((this.currentDragSourceNode = null),
                                        this.rootElement &&
                                            (null === (e = this.window) ||
                                                void 0 === e ||
                                                e.clearTimeout(
                                                    this
                                                        .mouseMoveTimeoutTimer ||
                                                        void 0
                                                ),
                                            this.rootElement.removeEventListener(
                                                "mousemove",
                                                this
                                                    .endDragIfSourceWasRemovedFromDOM,
                                                !0
                                            )),
                                        (this.mouseMoveTimeoutTimer = null),
                                        !0)
                                    );
                                },
                            },
                            {
                                key: "handleDragStart",
                                value: function (e, t) {
                                    e.defaultPrevented ||
                                        (this.dragStartSourceIds ||
                                            (this.dragStartSourceIds = []),
                                        this.dragStartSourceIds.unshift(t));
                                },
                            },
                            {
                                key: "handleDragEnter",
                                value: function (e, t) {
                                    this.dragEnterTargetIds.unshift(t);
                                },
                            },
                            {
                                key: "handleDragOver",
                                value: function (e, t) {
                                    null === this.dragOverTargetIds &&
                                        (this.dragOverTargetIds = []),
                                        this.dragOverTargetIds.unshift(t);
                                },
                            },
                            {
                                key: "handleDrop",
                                value: function (e, t) {
                                    this.dropTargetIds.unshift(t);
                                },
                            },
                        ]) && j(t.prototype, r),
                        o && j(t, o),
                        e
                    );
                })(),
                R = function (e, t, r) {
                    return new N(e, t, r);
                };
        },
        36028: (e, t, r) => {
            r.d(t, { TouchBackend: () => m });
            var n,
                o = r(46123);
            !(function (e) {
                (e.mouse = "mouse"),
                    (e.touch = "touch"),
                    (e.keyboard = "keyboard");
            })(n || (n = {}));
            var i = 1,
                a = 0;
            function s(e) {
                return void 0 === e.button || e.button === a;
            }
            function u(e) {
                return !!e.targetTouches;
            }
            function c(e, t) {
                return u(e)
                    ? (function (e, t) {
                          return 1 === e.targetTouches.length
                              ? c(e.targetTouches[0])
                              : t &&
                                1 === e.touches.length &&
                                e.touches[0].target === t.target
                              ? c(e.touches[0])
                              : void 0;
                      })(e, t)
                    : { x: e.clientX, y: e.clientY };
            }
            var d = (function () {
                var e = !1;
                try {
                    addEventListener(
                        "test",
                        function () {},
                        Object.defineProperty({}, "passive", {
                            get: function () {
                                return (e = !0), !0;
                            },
                        })
                    );
                } catch (e) {}
                return e;
            })();
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var f,
                h = (function () {
                    function e(t, r) {
                        var n = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.enableTouchEvents = !0),
                            (this.enableMouseEvents = !1),
                            (this.enableKeyboardEvents = !1),
                            (this.ignoreContextMenu = !1),
                            (this.enableHoverOutsideTarget = !1),
                            (this.touchSlop = 0),
                            (this.scrollAngleRanges = void 0),
                            (this.context = r),
                            (this.delayTouchStart =
                                t.delayTouchStart || t.delay || 0),
                            (this.delayMouseStart =
                                t.delayMouseStart || t.delay || 0),
                            Object.keys(t).forEach(function (e) {
                                null != t[e] && (n[e] = t[e]);
                            });
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "window",
                                get: function () {
                                    return this.context && this.context.window
                                        ? this.context.window
                                        : "undefined" != typeof window
                                        ? window
                                        : void 0;
                                },
                            },
                            {
                                key: "document",
                                get: function () {
                                    var e;
                                    return null !== (e = this.context) &&
                                        void 0 !== e &&
                                        e.document
                                        ? this.context.document
                                        : this.window
                                        ? this.window.document
                                        : void 0;
                                },
                            },
                        ]) && l(t.prototype, r),
                        n && l(t, n),
                        e
                    );
                })();
            function g(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function p(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var v =
                    (p((f = {}), n.mouse, {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup",
                        contextmenu: "contextmenu",
                    }),
                    p(f, n.touch, {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                    }),
                    p(f, n.keyboard, { keydown: "keydown" }),
                    f),
                y = (function () {
                    function e(t, r, o) {
                        var a = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.getSourceClientOffset = function (e) {
                                var t = a.sourceNodes.get(e);
                                return (
                                    t &&
                                    (function (e) {
                                        var t =
                                            1 === e.nodeType
                                                ? e
                                                : e.parentElement;
                                        if (t) {
                                            var r = t.getBoundingClientRect(),
                                                n = r.top;
                                            return { x: r.left, y: n };
                                        }
                                    })(t)
                                );
                            }),
                            (this.handleTopMoveStartCapture = function (e) {
                                s(e) && (a.moveStartSourceIds = []);
                            }),
                            (this.handleMoveStart = function (e) {
                                Array.isArray(a.moveStartSourceIds) &&
                                    a.moveStartSourceIds.unshift(e);
                            }),
                            (this.handleTopMoveStart = function (e) {
                                if (s(e)) {
                                    var t = c(e);
                                    t &&
                                        (u(e) &&
                                            (a.lastTargetTouchFallback =
                                                e.targetTouches[0]),
                                        (a._mouseClientOffset = t)),
                                        (a.waitingForDelay = !1);
                                }
                            }),
                            (this.handleTopMoveStartDelay = function (e) {
                                if (s(e)) {
                                    var t =
                                        e.type === v.touch.start
                                            ? a.options.delayTouchStart
                                            : a.options.delayMouseStart;
                                    (a.timeout = setTimeout(
                                        a.handleTopMoveStart.bind(a, e),
                                        t
                                    )),
                                        (a.waitingForDelay = !0);
                                }
                            }),
                            (this.handleTopMoveCapture = function () {
                                a.dragOverTargetIds = [];
                            }),
                            (this.handleMove = function (e, t) {
                                a.dragOverTargetIds &&
                                    a.dragOverTargetIds.unshift(t);
                            }),
                            (this.handleTopMove = function (e) {
                                if (
                                    (a.timeout && clearTimeout(a.timeout),
                                    a.document && !a.waitingForDelay)
                                ) {
                                    var t,
                                        r,
                                        n,
                                        o,
                                        i = a.moveStartSourceIds,
                                        s = a.dragOverTargetIds,
                                        u = a.options.enableHoverOutsideTarget,
                                        d = c(e, a.lastTargetTouchFallback);
                                    if (d)
                                        if (
                                            a._isScrolling ||
                                            (!a.monitor.isDragging() &&
                                                (function (e, t, r, n, o) {
                                                    if (!o) return !1;
                                                    for (
                                                        var i =
                                                                (180 *
                                                                    Math.atan2(
                                                                        n - t,
                                                                        r - e
                                                                    )) /
                                                                    Math.PI +
                                                                180,
                                                            a = 0;
                                                        a < o.length;
                                                        ++a
                                                    )
                                                        if (
                                                            (null ==
                                                                o[a].start ||
                                                                i >=
                                                                    o[a]
                                                                        .start) &&
                                                            (null == o[a].end ||
                                                                i <= o[a].end)
                                                        )
                                                            return !0;
                                                    return !1;
                                                })(
                                                    a._mouseClientOffset.x || 0,
                                                    a._mouseClientOffset.y || 0,
                                                    d.x,
                                                    d.y,
                                                    a.options.scrollAngleRanges
                                                ))
                                        )
                                            a._isScrolling = !0;
                                        else if (
                                            (!a.monitor.isDragging() &&
                                                a._mouseClientOffset.hasOwnProperty(
                                                    "x"
                                                ) &&
                                                i &&
                                                ((t =
                                                    a._mouseClientOffset.x ||
                                                    0),
                                                (r =
                                                    a._mouseClientOffset.y ||
                                                    0),
                                                (n = d.x),
                                                (o = d.y),
                                                Math.sqrt(
                                                    Math.pow(
                                                        Math.abs(n - t),
                                                        2
                                                    ) +
                                                        Math.pow(
                                                            Math.abs(o - r),
                                                            2
                                                        )
                                                ) >
                                                    (a.options.touchSlop
                                                        ? a.options.touchSlop
                                                        : 0)) &&
                                                ((a.moveStartSourceIds =
                                                    void 0),
                                                a.actions.beginDrag(i, {
                                                    clientOffset:
                                                        a._mouseClientOffset,
                                                    getSourceClientOffset:
                                                        a.getSourceClientOffset,
                                                    publishSource: !1,
                                                })),
                                            a.monitor.isDragging())
                                        ) {
                                            var l = a.sourceNodes.get(
                                                a.monitor.getSourceId()
                                            );
                                            a.installSourceNodeRemovalObserver(
                                                l
                                            ),
                                                a.actions.publishDragSource(),
                                                e.cancelable &&
                                                    e.preventDefault();
                                            var f = (s || [])
                                                    .map(function (e) {
                                                        return a.targetNodes.get(
                                                            e
                                                        );
                                                    })
                                                    .filter(function (e) {
                                                        return !!e;
                                                    }),
                                                h = a.options
                                                    .getDropTargetElementsAtPoint
                                                    ? a.options.getDropTargetElementsAtPoint(
                                                          d.x,
                                                          d.y,
                                                          f
                                                      )
                                                    : a.document.elementsFromPoint(
                                                          d.x,
                                                          d.y
                                                      ),
                                                g = [];
                                            for (var p in h)
                                                if (h.hasOwnProperty(p)) {
                                                    var v = h[p];
                                                    for (g.push(v); v; )
                                                        (v = v.parentElement) &&
                                                            -1 ===
                                                                g.indexOf(v) &&
                                                            g.push(v);
                                                }
                                            var y = g
                                                .filter(function (e) {
                                                    return f.indexOf(e) > -1;
                                                })
                                                .map(function (e) {
                                                    return a._getDropTargetId(
                                                        e
                                                    );
                                                })
                                                .filter(function (e) {
                                                    return !!e;
                                                })
                                                .filter(function (e, t, r) {
                                                    return r.indexOf(e) === t;
                                                });
                                            if (u)
                                                for (var m in a.targetNodes) {
                                                    var b =
                                                        a.targetNodes.get(m);
                                                    if (
                                                        l &&
                                                        b &&
                                                        b.contains(l) &&
                                                        -1 === y.indexOf(m)
                                                    ) {
                                                        y.unshift(m);
                                                        break;
                                                    }
                                                }
                                            y.reverse(),
                                                a.actions.hover(y, {
                                                    clientOffset: d,
                                                });
                                        }
                                }
                            }),
                            (this._getDropTargetId = function (e) {
                                for (
                                    var t = a.targetNodes.keys(), r = t.next();
                                    !1 === r.done;

                                ) {
                                    var n = r.value;
                                    if (e === a.targetNodes.get(n)) return n;
                                    r = t.next();
                                }
                            }),
                            (this.handleTopMoveEndCapture = function (e) {
                                (a._isScrolling = !1),
                                    (a.lastTargetTouchFallback = void 0),
                                    (function (e) {
                                        return (
                                            void 0 === e.buttons ||
                                            0 == (e.buttons & i)
                                        );
                                    })(e) &&
                                        (a.monitor.isDragging() &&
                                        !a.monitor.didDrop()
                                            ? (e.cancelable &&
                                                  e.preventDefault(),
                                              (a._mouseClientOffset = {}),
                                              a.uninstallSourceNodeRemovalObserver(),
                                              a.actions.drop(),
                                              a.actions.endDrag())
                                            : (a.moveStartSourceIds = void 0));
                            }),
                            (this.handleCancelOnEscape = function (e) {
                                "Escape" === e.key &&
                                    a.monitor.isDragging() &&
                                    ((a._mouseClientOffset = {}),
                                    a.uninstallSourceNodeRemovalObserver(),
                                    a.actions.endDrag());
                            }),
                            (this.options = new h(o, r)),
                            (this.actions = t.getActions()),
                            (this.monitor = t.getMonitor()),
                            (this.sourceNodes = new Map()),
                            (this.sourcePreviewNodes = new Map()),
                            (this.sourcePreviewNodeOptions = new Map()),
                            (this.targetNodes = new Map()),
                            (this.listenerTypes = []),
                            (this._mouseClientOffset = {}),
                            (this._isScrolling = !1),
                            this.options.enableMouseEvents &&
                                this.listenerTypes.push(n.mouse),
                            this.options.enableTouchEvents &&
                                this.listenerTypes.push(n.touch),
                            this.options.enableKeyboardEvents &&
                                this.listenerTypes.push(n.keyboard);
                    }
                    var t, r, a;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "profile",
                                value: function () {
                                    var e;
                                    return {
                                        sourceNodes: this.sourceNodes.size,
                                        sourcePreviewNodes:
                                            this.sourcePreviewNodes.size,
                                        sourcePreviewNodeOptions:
                                            this.sourcePreviewNodeOptions.size,
                                        targetNodes: this.targetNodes.size,
                                        dragOverTargetIds:
                                            (null ===
                                                (e = this.dragOverTargetIds) ||
                                            void 0 === e
                                                ? void 0
                                                : e.length) || 0,
                                    };
                                },
                            },
                            {
                                key: "document",
                                get: function () {
                                    return this.options.document;
                                },
                            },
                            {
                                key: "setup",
                                value: function () {
                                    this.document &&
                                        ((0, o.invariant)(
                                            !e.isSetUp,
                                            "Cannot have two Touch backends at the same time."
                                        ),
                                        (e.isSetUp = !0),
                                        this.addEventListener(
                                            this.document,
                                            "start",
                                            this.getTopMoveStartHandler()
                                        ),
                                        this.addEventListener(
                                            this.document,
                                            "start",
                                            this.handleTopMoveStartCapture,
                                            !0
                                        ),
                                        this.addEventListener(
                                            this.document,
                                            "move",
                                            this.handleTopMove
                                        ),
                                        this.addEventListener(
                                            this.document,
                                            "move",
                                            this.handleTopMoveCapture,
                                            !0
                                        ),
                                        this.addEventListener(
                                            this.document,
                                            "end",
                                            this.handleTopMoveEndCapture,
                                            !0
                                        ),
                                        this.options.enableMouseEvents &&
                                            !this.options.ignoreContextMenu &&
                                            this.addEventListener(
                                                this.document,
                                                "contextmenu",
                                                this.handleTopMoveEndCapture
                                            ),
                                        this.options.enableKeyboardEvents &&
                                            this.addEventListener(
                                                this.document,
                                                "keydown",
                                                this.handleCancelOnEscape,
                                                !0
                                            ));
                                },
                            },
                            {
                                key: "teardown",
                                value: function () {
                                    this.document &&
                                        ((e.isSetUp = !1),
                                        (this._mouseClientOffset = {}),
                                        this.removeEventListener(
                                            this.document,
                                            "start",
                                            this.handleTopMoveStartCapture,
                                            !0
                                        ),
                                        this.removeEventListener(
                                            this.document,
                                            "start",
                                            this.handleTopMoveStart
                                        ),
                                        this.removeEventListener(
                                            this.document,
                                            "move",
                                            this.handleTopMoveCapture,
                                            !0
                                        ),
                                        this.removeEventListener(
                                            this.document,
                                            "move",
                                            this.handleTopMove
                                        ),
                                        this.removeEventListener(
                                            this.document,
                                            "end",
                                            this.handleTopMoveEndCapture,
                                            !0
                                        ),
                                        this.options.enableMouseEvents &&
                                            !this.options.ignoreContextMenu &&
                                            this.removeEventListener(
                                                this.document,
                                                "contextmenu",
                                                this.handleTopMoveEndCapture
                                            ),
                                        this.options.enableKeyboardEvents &&
                                            this.removeEventListener(
                                                this.document,
                                                "keydown",
                                                this.handleCancelOnEscape,
                                                !0
                                            ),
                                        this.uninstallSourceNodeRemovalObserver());
                                },
                            },
                            {
                                key: "addEventListener",
                                value: function (e, t, r, n) {
                                    var o = d ? { capture: n, passive: !1 } : n;
                                    this.listenerTypes.forEach(function (n) {
                                        var i = v[n][t];
                                        i && e.addEventListener(i, r, o);
                                    });
                                },
                            },
                            {
                                key: "removeEventListener",
                                value: function (e, t, r, n) {
                                    var o = d ? { capture: n, passive: !1 } : n;
                                    this.listenerTypes.forEach(function (n) {
                                        var i = v[n][t];
                                        i && e.removeEventListener(i, r, o);
                                    });
                                },
                            },
                            {
                                key: "connectDragSource",
                                value: function (e, t) {
                                    var r = this,
                                        n = this.handleMoveStart.bind(this, e);
                                    return (
                                        this.sourceNodes.set(e, t),
                                        this.addEventListener(t, "start", n),
                                        function () {
                                            r.sourceNodes.delete(e),
                                                r.removeEventListener(
                                                    t,
                                                    "start",
                                                    n
                                                );
                                        }
                                    );
                                },
                            },
                            {
                                key: "connectDragPreview",
                                value: function (e, t, r) {
                                    var n = this;
                                    return (
                                        this.sourcePreviewNodeOptions.set(e, r),
                                        this.sourcePreviewNodes.set(e, t),
                                        function () {
                                            n.sourcePreviewNodes.delete(e),
                                                n.sourcePreviewNodeOptions.delete(
                                                    e
                                                );
                                        }
                                    );
                                },
                            },
                            {
                                key: "connectDropTarget",
                                value: function (e, t) {
                                    var r = this;
                                    if (!this.document) return function () {};
                                    var n = function (n) {
                                        if (
                                            r.document &&
                                            r.monitor.isDragging()
                                        ) {
                                            var o;
                                            switch (n.type) {
                                                case v.mouse.move:
                                                    o = {
                                                        x: n.clientX,
                                                        y: n.clientY,
                                                    };
                                                    break;
                                                case v.touch.move:
                                                    o = {
                                                        x: n.touches[0].clientX,
                                                        y: n.touches[0].clientY,
                                                    };
                                            }
                                            var i =
                                                    null != o
                                                        ? r.document.elementFromPoint(
                                                              o.x,
                                                              o.y
                                                          )
                                                        : void 0,
                                                a = i && t.contains(i);
                                            return i === t || a
                                                ? r.handleMove(n, e)
                                                : void 0;
                                        }
                                    };
                                    return (
                                        this.addEventListener(
                                            this.document.body,
                                            "move",
                                            n
                                        ),
                                        this.targetNodes.set(e, t),
                                        function () {
                                            r.document &&
                                                (r.targetNodes.delete(e),
                                                r.removeEventListener(
                                                    r.document.body,
                                                    "move",
                                                    n
                                                ));
                                        }
                                    );
                                },
                            },
                            {
                                key: "getTopMoveStartHandler",
                                value: function () {
                                    return this.options.delayTouchStart ||
                                        this.options.delayMouseStart
                                        ? this.handleTopMoveStartDelay
                                        : this.handleTopMoveStart;
                                },
                            },
                            {
                                key: "installSourceNodeRemovalObserver",
                                value: function (e) {
                                    var t = this;
                                    this.uninstallSourceNodeRemovalObserver(),
                                        (this.draggedSourceNode = e),
                                        (this.draggedSourceNodeRemovalObserver =
                                            new MutationObserver(function () {
                                                e &&
                                                    !e.parentElement &&
                                                    (t.resurrectSourceNode(),
                                                    t.uninstallSourceNodeRemovalObserver());
                                            })),
                                        e &&
                                            e.parentElement &&
                                            this.draggedSourceNodeRemovalObserver.observe(
                                                e.parentElement,
                                                { childList: !0 }
                                            );
                                },
                            },
                            {
                                key: "resurrectSourceNode",
                                value: function () {
                                    this.document &&
                                        this.draggedSourceNode &&
                                        ((this.draggedSourceNode.style.display =
                                            "none"),
                                        this.draggedSourceNode.removeAttribute(
                                            "data-reactid"
                                        ),
                                        this.document.body.appendChild(
                                            this.draggedSourceNode
                                        ));
                                },
                            },
                            {
                                key: "uninstallSourceNodeRemovalObserver",
                                value: function () {
                                    this.draggedSourceNodeRemovalObserver &&
                                        this.draggedSourceNodeRemovalObserver.disconnect(),
                                        (this.draggedSourceNodeRemovalObserver =
                                            void 0),
                                        (this.draggedSourceNode = void 0);
                                },
                            },
                        ]) && g(t.prototype, r),
                        a && g(t, a),
                        e
                    );
                })(),
                m = function (e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                    return new y(e, t, r);
                };
        },
        89742: (e, t, r) => {
            r.d(t, { DndContext: () => n });
            var n = (0, r(59496).createContext)({ dragDropManager: void 0 });
        },
        86416: (e, t, r) => {
            r.d(t, { DndProvider: () => Ze });
            var n = r(4637),
                o = r(59496),
                i = r(46123),
                a = "dnd-core/INIT_COORDS",
                s = "dnd-core/BEGIN_DRAG",
                u = "dnd-core/PUBLISH_DRAG_SOURCE",
                c = "dnd-core/HOVER",
                d = "dnd-core/DROP",
                l = "dnd-core/END_DRAG";
            function f(e, t) {
                return {
                    type: a,
                    payload: {
                        sourceClientOffset: t || null,
                        clientOffset: e || null,
                    },
                };
            }
            function h(e) {
                return (h =
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
                          })(e);
            }
            function g(e, t, r) {
                return t.split(".").reduce(function (e, t) {
                    return e && e[t] ? e[t] : r || null;
                }, e);
            }
            function p(e, t) {
                return e.filter(function (e) {
                    return e !== t;
                });
            }
            function v(e) {
                return "object" === h(e);
            }
            function y(e, t) {
                var r = new Map(),
                    n = function (e) {
                        r.set(e, r.has(e) ? r.get(e) + 1 : 1);
                    };
                e.forEach(n), t.forEach(n);
                var o = [];
                return (
                    r.forEach(function (e, t) {
                        1 === e && o.push(t);
                    }),
                    o
                );
            }
            var m = {
                type: a,
                payload: { clientOffset: null, sourceClientOffset: null },
            };
            function b(e) {
                return function () {
                    var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                        r =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { publishSource: !0 },
                        n = r.publishSource,
                        o = void 0 === n || n,
                        i = r.clientOffset,
                        a = r.getSourceClientOffset,
                        u = e.getMonitor(),
                        c = e.getRegistry();
                    e.dispatch(f(i)), O(t, u, c);
                    var d = w(t, u);
                    if (null !== d) {
                        var l = null;
                        if (i) {
                            if (!a)
                                throw new Error(
                                    "getSourceClientOffset must be defined"
                                );
                            D(a), (l = a(d));
                        }
                        e.dispatch(f(i, l));
                        var h = c.getSource(d),
                            g = h.beginDrag(u, d);
                        if (null != g) {
                            S(g), c.pinSource(d);
                            var p = c.getSourceType(d);
                            return {
                                type: s,
                                payload: {
                                    itemType: p,
                                    item: g,
                                    sourceId: d,
                                    clientOffset: i || null,
                                    sourceClientOffset: l || null,
                                    isSourcePublic: !!o,
                                },
                            };
                        }
                    } else e.dispatch(m);
                };
            }
            function O(e, t, r) {
                (0, i.invariant)(
                    !t.isDragging(),
                    "Cannot call beginDrag while dragging."
                ),
                    e.forEach(function (e) {
                        (0,
                        i.invariant)(r.getSource(e), "Expected sourceIds to be registered.");
                    });
            }
            function D(e) {
                (0, i.invariant)(
                    "function" == typeof e,
                    "When clientOffset is provided, getSourceClientOffset must be a function."
                );
            }
            function S(e) {
                (0, i.invariant)(v(e), "Item must be an object.");
            }
            function w(e, t) {
                for (var r = null, n = e.length - 1; n >= 0; n--)
                    if (t.canDragSource(e[n])) {
                        r = e[n];
                        break;
                    }
                return r;
            }
            function T(e) {
                return function () {
                    if (e.getMonitor().isDragging()) return { type: u };
                };
            }
            function C(e, t) {
                return null === t
                    ? null === e
                    : Array.isArray(e)
                    ? e.some(function (e) {
                          return e === t;
                      })
                    : e === t;
            }
            function E(e) {
                return function (t) {
                    var r =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        n = r.clientOffset;
                    I(t);
                    var o = t.slice(0),
                        i = e.getMonitor(),
                        a = e.getRegistry();
                    k(o, i, a);
                    var s = i.getItemType();
                    return (
                        P(o, a, s),
                        j(o, i, a),
                        {
                            type: c,
                            payload: { targetIds: o, clientOffset: n || null },
                        }
                    );
                };
            }
            function I(e) {
                (0, i.invariant)(
                    Array.isArray(e),
                    "Expected targetIds to be an array."
                );
            }
            function k(e, t, r) {
                (0, i.invariant)(
                    t.isDragging(),
                    "Cannot call hover while not dragging."
                ),
                    (0, i.invariant)(
                        !t.didDrop(),
                        "Cannot call hover after drop."
                    );
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    (0, i.invariant)(
                        e.lastIndexOf(o) === n,
                        "Expected targetIds to be unique in the passed array."
                    );
                    var a = r.getTarget(o);
                    (0, i.invariant)(a, "Expected targetIds to be registered.");
                }
            }
            function P(e, t, r) {
                for (var n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    C(t.getTargetType(o), r) || e.splice(n, 1);
                }
            }
            function j(e, t, r) {
                e.forEach(function (e) {
                    r.getTarget(e).hover(t, e);
                });
            }
            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? N(Object(r), !0).forEach(function (t) {
                              M(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : N(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function M(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function x(e) {
                return function () {
                    var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                        r = e.getMonitor(),
                        n = e.getRegistry();
                    A(r);
                    var o = L(r);
                    o.forEach(function (o, i) {
                        var a = _(o, i, n, r),
                            s = {
                                type: d,
                                payload: { dropResult: R(R({}, t), a) },
                            };
                        e.dispatch(s);
                    });
                };
            }
            function A(e) {
                (0, i.invariant)(
                    e.isDragging(),
                    "Cannot call drop while not dragging."
                ),
                    (0, i.invariant)(
                        !e.didDrop(),
                        "Cannot call drop twice during one drag operation."
                    );
            }
            function _(e, t, r, n) {
                var o = r.getTarget(e),
                    a = o ? o.drop(n, e) : void 0;
                return (
                    (function (e) {
                        (0, i.invariant)(
                            void 0 === e || v(e),
                            "Drop result must either be an object or undefined."
                        );
                    })(a),
                    void 0 === a && (a = 0 === t ? {} : n.getDropResult()),
                    a
                );
            }
            function L(e) {
                var t = e.getTargetIds().filter(e.canDropOnTarget, e);
                return t.reverse(), t;
            }
            function H(e) {
                return function () {
                    var t = e.getMonitor(),
                        r = e.getRegistry();
                    !(function (e) {
                        (0, i.invariant)(
                            e.isDragging(),
                            "Cannot call endDrag while not dragging."
                        );
                    })(t);
                    var n = t.getSourceId();
                    null != n &&
                        (r.getSource(n, !0).endDrag(t, n), r.unpinSource());
                    return { type: l };
                };
            }
            function U(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var F = (function () {
                    function e(t, r) {
                        var n = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.isSetUp = !1),
                            (this.handleRefCountChange = function () {
                                var e = n.store.getState().refCount > 0;
                                n.backend &&
                                    (e && !n.isSetUp
                                        ? (n.backend.setup(), (n.isSetUp = !0))
                                        : !e &&
                                          n.isSetUp &&
                                          (n.backend.teardown(),
                                          (n.isSetUp = !1)));
                            }),
                            (this.store = t),
                            (this.monitor = r),
                            t.subscribe(this.handleRefCountChange);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "receiveBackend",
                                value: function (e) {
                                    this.backend = e;
                                },
                            },
                            {
                                key: "getMonitor",
                                value: function () {
                                    return this.monitor;
                                },
                            },
                            {
                                key: "getBackend",
                                value: function () {
                                    return this.backend;
                                },
                            },
                            {
                                key: "getRegistry",
                                value: function () {
                                    return this.monitor.registry;
                                },
                            },
                            {
                                key: "getActions",
                                value: function () {
                                    var e = this,
                                        t = this.store.dispatch,
                                        r = (function (e) {
                                            return {
                                                beginDrag: b(e),
                                                publishDragSource: T(e),
                                                hover: E(e),
                                                drop: x(e),
                                                endDrag: H(e),
                                            };
                                        })(this);
                                    return Object.keys(r).reduce(function (
                                        n,
                                        o
                                    ) {
                                        var i,
                                            a = r[o];
                                        return (
                                            (n[o] =
                                                ((i = a),
                                                function () {
                                                    for (
                                                        var r =
                                                                arguments.length,
                                                            n = new Array(r),
                                                            o = 0;
                                                        o < r;
                                                        o++
                                                    )
                                                        n[o] = arguments[o];
                                                    var a = i.apply(e, n);
                                                    void 0 !== a && t(a);
                                                })),
                                            n
                                        );
                                    },
                                    {});
                                },
                            },
                            {
                                key: "dispatch",
                                value: function (e) {
                                    this.store.dispatch(e);
                                },
                            },
                        ]) && U(t.prototype, r),
                        n && U(t, n),
                        e
                    );
                })(),
                B = r(83243),
                q = function (e, t) {
                    return e === t;
                };
            function X(e, t) {
                return (
                    (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y)
                );
            }
            function G(e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : q;
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; ++n)
                    if (!r(e[n], t[n])) return !1;
                return !0;
            }
            function Y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Y(Object(r), !0).forEach(function (t) {
                              K(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : Y(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function K(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var W = {
                initialSourceClientOffset: null,
                initialClientOffset: null,
                clientOffset: null,
            };
            function z() {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : W,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = t.payload;
                switch (t.type) {
                    case a:
                    case s:
                        return {
                            initialSourceClientOffset: r.sourceClientOffset,
                            initialClientOffset: r.clientOffset,
                            clientOffset: r.clientOffset,
                        };
                    case c:
                        return X(e.clientOffset, r.clientOffset)
                            ? e
                            : V(V({}, e), {}, { clientOffset: r.clientOffset });
                    case l:
                    case d:
                        return W;
                    default:
                        return e;
                }
            }
            var $ = "dnd-core/ADD_SOURCE",
                Q = "dnd-core/ADD_TARGET",
                J = "dnd-core/REMOVE_SOURCE",
                Z = "dnd-core/REMOVE_TARGET";
            function ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ee(Object(r), !0).forEach(function (t) {
                              re(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : ee(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function re(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var ne = {
                itemType: null,
                item: null,
                sourceId: null,
                targetIds: [],
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
            };
            function oe() {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : ne,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = t.payload;
                switch (t.type) {
                    case s:
                        return te(
                            te({}, e),
                            {},
                            {
                                itemType: r.itemType,
                                item: r.item,
                                sourceId: r.sourceId,
                                isSourcePublic: r.isSourcePublic,
                                dropResult: null,
                                didDrop: !1,
                            }
                        );
                    case u:
                        return te(te({}, e), {}, { isSourcePublic: !0 });
                    case c:
                        return te(te({}, e), {}, { targetIds: r.targetIds });
                    case Z:
                        return -1 === e.targetIds.indexOf(r.targetId)
                            ? e
                            : te(
                                  te({}, e),
                                  {},
                                  { targetIds: p(e.targetIds, r.targetId) }
                              );
                    case d:
                        return te(
                            te({}, e),
                            {},
                            {
                                dropResult: r.dropResult,
                                didDrop: !0,
                                targetIds: [],
                            }
                        );
                    case l:
                        return te(
                            te({}, e),
                            {},
                            {
                                itemType: null,
                                item: null,
                                sourceId: null,
                                dropResult: null,
                                didDrop: !1,
                                isSourcePublic: null,
                                targetIds: [],
                            }
                        );
                    default:
                        return e;
                }
            }
            function ie() {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case $:
                    case Q:
                        return e + 1;
                    case J:
                    case Z:
                        return e - 1;
                    default:
                        return e;
                }
            }
            var ae = [],
                se = [];
            function ue(e, t) {
                return (
                    e !== ae &&
                    (e === se ||
                        void 0 === t ||
                        ((r = e),
                        t.filter(function (e) {
                            return r.indexOf(e) > -1;
                        })).length > 0)
                );
                var r;
            }
            function ce() {
                var e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case c:
                        break;
                    case $:
                    case Q:
                    case Z:
                    case J:
                        return ae;
                    case s:
                    case u:
                    case l:
                    case d:
                    default:
                        return se;
                }
                var t = e.payload,
                    r = t.targetIds,
                    n = void 0 === r ? [] : r,
                    o = t.prevTargetIds,
                    i = void 0 === o ? [] : o,
                    a = y(n, i),
                    f = a.length > 0 || !G(n, i);
                if (!f) return ae;
                var h = i[i.length - 1],
                    g = n[n.length - 1];
                return h !== g && (h && a.push(h), g && a.push(g)), a;
            }
            function de() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                return e + 1;
            }
            function le(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? le(Object(r), !0).forEach(function (t) {
                              he(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : le(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function he(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function ge() {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return {
                    dirtyHandlerIds: ce(e.dirtyHandlerIds, {
                        type: t.type,
                        payload: fe(
                            fe({}, t.payload),
                            {},
                            {
                                prevTargetIds: g(
                                    e,
                                    "dragOperation.targetIds",
                                    []
                                ),
                            }
                        ),
                    }),
                    dragOffset: z(e.dragOffset, t),
                    refCount: ie(e.refCount, t),
                    dragOperation: oe(e.dragOperation, t),
                    stateId: de(e.stateId),
                };
            }
            function pe(e, t) {
                return { x: e.x - t.x, y: e.y - t.y };
            }
            function ve(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            (ae.__IS_NONE__ = !0), (se.__IS_ALL__ = !0);
            var ye,
                me = (function () {
                    function e(t, r) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.store = t),
                            (this.registry = r);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "subscribeToStateChange",
                                value: function (e) {
                                    var t = this,
                                        r =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { handlerIds: void 0 },
                                        n = r.handlerIds;
                                    (0, i.invariant)(
                                        "function" == typeof e,
                                        "listener must be a function."
                                    ),
                                        (0, i.invariant)(
                                            void 0 === n || Array.isArray(n),
                                            "handlerIds, when specified, must be an array of strings."
                                        );
                                    var o = this.store.getState().stateId,
                                        a = function () {
                                            var r = t.store.getState(),
                                                i = r.stateId;
                                            try {
                                                i === o ||
                                                    (i === o + 1 &&
                                                        !ue(
                                                            r.dirtyHandlerIds,
                                                            n
                                                        )) ||
                                                    e();
                                            } finally {
                                                o = i;
                                            }
                                        };
                                    return this.store.subscribe(a);
                                },
                            },
                            {
                                key: "subscribeToOffsetChange",
                                value: function (e) {
                                    var t = this;
                                    (0, i.invariant)(
                                        "function" == typeof e,
                                        "listener must be a function."
                                    );
                                    var r = this.store.getState().dragOffset;
                                    return this.store.subscribe(function () {
                                        var n = t.store.getState().dragOffset;
                                        n !== r && ((r = n), e());
                                    });
                                },
                            },
                            {
                                key: "canDragSource",
                                value: function (e) {
                                    if (!e) return !1;
                                    var t = this.registry.getSource(e);
                                    return (
                                        (0, i.invariant)(
                                            t,
                                            "Expected to find a valid source. sourceId=".concat(
                                                e
                                            )
                                        ),
                                        !this.isDragging() && t.canDrag(this, e)
                                    );
                                },
                            },
                            {
                                key: "canDropOnTarget",
                                value: function (e) {
                                    if (!e) return !1;
                                    var t = this.registry.getTarget(e);
                                    return (
                                        (0, i.invariant)(
                                            t,
                                            "Expected to find a valid target. targetId=".concat(
                                                e
                                            )
                                        ),
                                        !(
                                            !this.isDragging() || this.didDrop()
                                        ) &&
                                            C(
                                                this.registry.getTargetType(e),
                                                this.getItemType()
                                            ) &&
                                            t.canDrop(this, e)
                                    );
                                },
                            },
                            {
                                key: "isDragging",
                                value: function () {
                                    return Boolean(this.getItemType());
                                },
                            },
                            {
                                key: "isDraggingSource",
                                value: function (e) {
                                    if (!e) return !1;
                                    var t = this.registry.getSource(e, !0);
                                    return (
                                        (0, i.invariant)(
                                            t,
                                            "Expected to find a valid source. sourceId=".concat(
                                                e
                                            )
                                        ),
                                        !(
                                            !this.isDragging() ||
                                            !this.isSourcePublic()
                                        ) &&
                                            this.registry.getSourceType(e) ===
                                                this.getItemType() &&
                                            t.isDragging(this, e)
                                    );
                                },
                            },
                            {
                                key: "isOverTarget",
                                value: function (e) {
                                    var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : { shallow: !1 };
                                    if (!e) return !1;
                                    var r = t.shallow;
                                    if (!this.isDragging()) return !1;
                                    var n = this.registry.getTargetType(e),
                                        o = this.getItemType();
                                    if (o && !C(n, o)) return !1;
                                    var i = this.getTargetIds();
                                    if (!i.length) return !1;
                                    var a = i.indexOf(e);
                                    return r ? a === i.length - 1 : a > -1;
                                },
                            },
                            {
                                key: "getItemType",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .itemType;
                                },
                            },
                            {
                                key: "getItem",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .item;
                                },
                            },
                            {
                                key: "getSourceId",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .sourceId;
                                },
                            },
                            {
                                key: "getTargetIds",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .targetIds;
                                },
                            },
                            {
                                key: "getDropResult",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .dropResult;
                                },
                            },
                            {
                                key: "didDrop",
                                value: function () {
                                    return this.store.getState().dragOperation
                                        .didDrop;
                                },
                            },
                            {
                                key: "isSourcePublic",
                                value: function () {
                                    return Boolean(
                                        this.store.getState().dragOperation
                                            .isSourcePublic
                                    );
                                },
                            },
                            {
                                key: "getInitialClientOffset",
                                value: function () {
                                    return this.store.getState().dragOffset
                                        .initialClientOffset;
                                },
                            },
                            {
                                key: "getInitialSourceClientOffset",
                                value: function () {
                                    return this.store.getState().dragOffset
                                        .initialSourceClientOffset;
                                },
                            },
                            {
                                key: "getClientOffset",
                                value: function () {
                                    return this.store.getState().dragOffset
                                        .clientOffset;
                                },
                            },
                            {
                                key: "getSourceClientOffset",
                                value: function () {
                                    return (
                                        (e = this.store.getState().dragOffset),
                                        (n = e.clientOffset),
                                        (o = e.initialClientOffset),
                                        (i = e.initialSourceClientOffset),
                                        n && o && i
                                            ? pe(
                                                  ((r = i),
                                                  {
                                                      x: (t = n).x + r.x,
                                                      y: t.y + r.y,
                                                  }),
                                                  o
                                              )
                                            : null
                                    );
                                    var e, t, r, n, o, i;
                                },
                            },
                            {
                                key: "getDifferenceFromInitialOffset",
                                value: function () {
                                    return (
                                        (e = this.store.getState().dragOffset),
                                        (t = e.clientOffset),
                                        (r = e.initialClientOffset),
                                        t && r ? pe(t, r) : null
                                    );
                                    var e, t, r;
                                },
                            },
                        ]) && ve(t.prototype, r),
                        n && ve(t, n),
                        e
                    );
                })(),
                be = 0;
            function Oe(e) {
                return (Oe =
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
                          })(e);
            }
            function De(e, t) {
                t && Array.isArray(e)
                    ? e.forEach(function (e) {
                          return De(e, !1);
                      })
                    : (0, i.invariant)(
                          "string" == typeof e || "symbol" === Oe(e),
                          t
                              ? "Type can only be a string, a symbol, or an array of either."
                              : "Type can only be a string or a symbol."
                      );
            }
            function Se(e) {
                Te.length || (we(), !0), (Te[Te.length] = e);
            }
            !(function (e) {
                (e.SOURCE = "SOURCE"), (e.TARGET = "TARGET");
            })(ye || (ye = {}));
            var we,
                Te = [],
                Ce = 0;
            function Ee() {
                for (; Ce < Te.length; ) {
                    var e = Ce;
                    if (((Ce += 1), Te[e].call(), Ce > 1024)) {
                        for (var t = 0, r = Te.length - Ce; t < r; t++)
                            Te[t] = Te[t + Ce];
                        (Te.length -= Ce), (Ce = 0);
                    }
                }
                (Te.length = 0), (Ce = 0), !1;
            }
            var Ie,
                ke,
                Pe,
                je = void 0 !== r.g ? r.g : self,
                Ne = je.MutationObserver || je.WebKitMutationObserver;
            function Re(e) {
                return function () {
                    var t = setTimeout(n, 0),
                        r = setInterval(n, 50);
                    function n() {
                        clearTimeout(t), clearInterval(r), e();
                    }
                };
            }
            "function" == typeof Ne
                ? ((Ie = 1),
                  (ke = new Ne(Ee)),
                  (Pe = document.createTextNode("")),
                  ke.observe(Pe, { characterData: !0 }),
                  (we = function () {
                      (Ie = -Ie), (Pe.data = Ie);
                  }))
                : (we = Re(Ee)),
                (Se.requestFlush = we),
                (Se.makeRequestCallFromTimer = Re);
            var Me = [],
                xe = [],
                Ae = Se.makeRequestCallFromTimer(function () {
                    if (xe.length) throw xe.shift();
                });
            function _e(e) {
                var t;
                ((t = Me.length ? Me.pop() : new Le()).task = e), Se(t);
            }
            var Le = (function () {
                function e() {}
                return (
                    (e.prototype.call = function () {
                        try {
                            this.task.call();
                        } catch (e) {
                            _e.onerror ? _e.onerror(e) : (xe.push(e), Ae());
                        } finally {
                            (this.task = null), (Me[Me.length] = this);
                        }
                    }),
                    e
                );
            })();
            function He(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function Ue(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            "undefined" == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, s = e[Symbol.iterator]();
                                !(n = (a = s.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return Fe(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Fe(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            function Fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Be(e) {
                var t = (be++).toString();
                switch (e) {
                    case ye.SOURCE:
                        return "S".concat(t);
                    case ye.TARGET:
                        return "T".concat(t);
                    default:
                        throw new Error("Unknown Handler Role: ".concat(e));
                }
            }
            function qe(e) {
                switch (e[0]) {
                    case "S":
                        return ye.SOURCE;
                    case "T":
                        return ye.TARGET;
                    default:
                        (0, i.invariant)(
                            !1,
                            "Cannot parse handler ID: ".concat(e)
                        );
                }
            }
            function Xe(e, t) {
                var r = e.entries(),
                    n = !1;
                do {
                    var o = r.next(),
                        i = o.done;
                    if (Ue(o.value, 2)[1] === t) return !0;
                    n = !!i;
                } while (!n);
                return !1;
            }
            var Ge = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.types = new Map()),
                        (this.dragSources = new Map()),
                        (this.dropTargets = new Map()),
                        (this.pinnedSourceId = null),
                        (this.pinnedSource = null),
                        (this.store = t);
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "addSource",
                            value: function (e, t) {
                                De(e),
                                    (function (e) {
                                        (0, i.invariant)(
                                            "function" == typeof e.canDrag,
                                            "Expected canDrag to be a function."
                                        ),
                                            (0, i.invariant)(
                                                "function" ==
                                                    typeof e.beginDrag,
                                                "Expected beginDrag to be a function."
                                            ),
                                            (0, i.invariant)(
                                                "function" == typeof e.endDrag,
                                                "Expected endDrag to be a function."
                                            );
                                    })(t);
                                var r = this.addHandler(ye.SOURCE, e, t);
                                return (
                                    this.store.dispatch(
                                        (function (e) {
                                            return {
                                                type: $,
                                                payload: { sourceId: e },
                                            };
                                        })(r)
                                    ),
                                    r
                                );
                            },
                        },
                        {
                            key: "addTarget",
                            value: function (e, t) {
                                De(e, !0),
                                    (function (e) {
                                        (0, i.invariant)(
                                            "function" == typeof e.canDrop,
                                            "Expected canDrop to be a function."
                                        ),
                                            (0, i.invariant)(
                                                "function" == typeof e.hover,
                                                "Expected hover to be a function."
                                            ),
                                            (0, i.invariant)(
                                                "function" == typeof e.drop,
                                                "Expected beginDrag to be a function."
                                            );
                                    })(t);
                                var r = this.addHandler(ye.TARGET, e, t);
                                return (
                                    this.store.dispatch(
                                        (function (e) {
                                            return {
                                                type: Q,
                                                payload: { targetId: e },
                                            };
                                        })(r)
                                    ),
                                    r
                                );
                            },
                        },
                        {
                            key: "containsHandler",
                            value: function (e) {
                                return (
                                    Xe(this.dragSources, e) ||
                                    Xe(this.dropTargets, e)
                                );
                            },
                        },
                        {
                            key: "getSource",
                            value: function (e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                (0, i.invariant)(
                                    this.isSourceId(e),
                                    "Expected a valid source ID."
                                );
                                var r = t && e === this.pinnedSourceId,
                                    n = r
                                        ? this.pinnedSource
                                        : this.dragSources.get(e);
                                return n;
                            },
                        },
                        {
                            key: "getTarget",
                            value: function (e) {
                                return (
                                    (0, i.invariant)(
                                        this.isTargetId(e),
                                        "Expected a valid target ID."
                                    ),
                                    this.dropTargets.get(e)
                                );
                            },
                        },
                        {
                            key: "getSourceType",
                            value: function (e) {
                                return (
                                    (0, i.invariant)(
                                        this.isSourceId(e),
                                        "Expected a valid source ID."
                                    ),
                                    this.types.get(e)
                                );
                            },
                        },
                        {
                            key: "getTargetType",
                            value: function (e) {
                                return (
                                    (0, i.invariant)(
                                        this.isTargetId(e),
                                        "Expected a valid target ID."
                                    ),
                                    this.types.get(e)
                                );
                            },
                        },
                        {
                            key: "isSourceId",
                            value: function (e) {
                                return qe(e) === ye.SOURCE;
                            },
                        },
                        {
                            key: "isTargetId",
                            value: function (e) {
                                return qe(e) === ye.TARGET;
                            },
                        },
                        {
                            key: "removeSource",
                            value: function (e) {
                                var t = this;
                                (0, i.invariant)(
                                    this.getSource(e),
                                    "Expected an existing source."
                                ),
                                    this.store.dispatch(
                                        (function (e) {
                                            return {
                                                type: J,
                                                payload: { sourceId: e },
                                            };
                                        })(e)
                                    ),
                                    _e(function () {
                                        t.dragSources.delete(e),
                                            t.types.delete(e);
                                    });
                            },
                        },
                        {
                            key: "removeTarget",
                            value: function (e) {
                                (0, i.invariant)(
                                    this.getTarget(e),
                                    "Expected an existing target."
                                ),
                                    this.store.dispatch(
                                        (function (e) {
                                            return {
                                                type: Z,
                                                payload: { targetId: e },
                                            };
                                        })(e)
                                    ),
                                    this.dropTargets.delete(e),
                                    this.types.delete(e);
                            },
                        },
                        {
                            key: "pinSource",
                            value: function (e) {
                                var t = this.getSource(e);
                                (0, i.invariant)(
                                    t,
                                    "Expected an existing source."
                                ),
                                    (this.pinnedSourceId = e),
                                    (this.pinnedSource = t);
                            },
                        },
                        {
                            key: "unpinSource",
                            value: function () {
                                (0, i.invariant)(
                                    this.pinnedSource,
                                    "No source is pinned at the time."
                                ),
                                    (this.pinnedSourceId = null),
                                    (this.pinnedSource = null);
                            },
                        },
                        {
                            key: "addHandler",
                            value: function (e, t, r) {
                                var n = Be(e);
                                return (
                                    this.types.set(n, t),
                                    e === ye.SOURCE
                                        ? this.dragSources.set(n, r)
                                        : e === ye.TARGET &&
                                          this.dropTargets.set(n, r),
                                    n
                                );
                            },
                        },
                    ]) && He(t.prototype, r),
                    n && He(t, n),
                    e
                );
            })();
            function Ye(e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : void 0,
                    r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                    n =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                    o = Ve(n),
                    i = new me(o, new Ge(o)),
                    a = new F(o, i),
                    s = e(a, t, r);
                return a.receiveBackend(s), a;
            }
            function Ve(e) {
                var t =
                    "undefined" != typeof window &&
                    window.__REDUX_DEVTOOLS_EXTENSION__;
                return (0, B.createStore)(
                    ge,
                    e && t && t({ name: "dnd-core", instanceId: "dnd-core" })
                );
            }
            var Ke = r(89742);
            function We(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            "undefined" == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, s = e[Symbol.iterator]();
                                !(n = (a = s.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return ze(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return ze(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            function ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function $e(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                            (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            var Qe = 0,
                Je = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
                Ze = (0, o.memo)(function (e) {
                    var t = e.children,
                        r = We(
                            (function (e) {
                                if ("manager" in e) {
                                    return [{ dragDropManager: e.manager }, !1];
                                }
                                var t = (function (e) {
                                        var t =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : et(),
                                            r =
                                                arguments.length > 2
                                                    ? arguments[2]
                                                    : void 0,
                                            n =
                                                arguments.length > 3
                                                    ? arguments[3]
                                                    : void 0,
                                            o = t;
                                        o[Je] ||
                                            (o[Je] = {
                                                dragDropManager: Ye(e, t, r, n),
                                            });
                                        return o[Je];
                                    })(
                                        e.backend,
                                        e.context,
                                        e.options,
                                        e.debugMode
                                    ),
                                    r = !e.context;
                                return [t, r];
                            })($e(e, ["children"])),
                            2
                        ),
                        i = r[0],
                        a = r[1];
                    return (
                        (0, o.useEffect)(function () {
                            if (a) {
                                var e = et();
                                return (
                                    ++Qe,
                                    function () {
                                        0 == --Qe && (e[Je] = null);
                                    }
                                );
                            }
                        }, []),
                        (0, n.jsx)(
                            Ke.DndContext.Provider,
                            Object.assign({ value: i }, { children: t }),
                            void 0
                        )
                    );
                });
            function et() {
                return void 0 !== r.g ? r.g : window;
            }
        },
        53614: (e, t, r) => {
            r.d(t, { DragLayer: () => O });
            var n = r(4637),
                o = r(59496),
                i = r(1633),
                a = r(46123),
                s = r(72535),
                u = r.n(s),
                c = r(89742),
                d = r(59885);
            function l(e) {
                return (l =
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
                          })(e);
            }
            function f(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function h(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function g(e, t, r) {
                return t && h(e.prototype, t), r && h(e, r), e;
            }
            function p(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && v(e, t);
            }
            function v(e, t) {
                return (v =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function y(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return m(this, r);
                };
            }
            function m(e, t) {
                return !t || ("object" !== l(t) && "function" != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function b(e) {
                return (b = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function O(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                return (
                    (0, d.checkDecoratorArguments)(
                        "DragLayer",
                        "collect[, options]",
                        e,
                        t
                    ),
                    (0, a.invariant)(
                        "function" == typeof e,
                        'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
                        "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",
                        e
                    ),
                    (0, a.invariant)(
                        (0, d.isPlainObject)(t),
                        'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
                        t
                    ),
                    function (r) {
                        var s = r,
                            h = t.arePropsEqual,
                            v = void 0 === h ? i.shallowEqual : h,
                            m = s.displayName || s.name || "Component",
                            b = (function (t) {
                                p(u, t);
                                var r = y(u);
                                function u() {
                                    var e;
                                    return (
                                        f(this, u),
                                        ((e = r.apply(
                                            this,
                                            arguments
                                        )).isCurrentlyMounted = !1),
                                        (e.ref = (0, o.createRef)()),
                                        (e.handleChange = function () {
                                            if (e.isCurrentlyMounted) {
                                                var t = e.getCurrentState();
                                                (0, i.shallowEqual)(
                                                    t,
                                                    e.state
                                                ) || e.setState(t);
                                            }
                                        }),
                                        e
                                    );
                                }
                                return (
                                    g(u, [
                                        {
                                            key: "getDecoratedComponentInstance",
                                            value: function () {
                                                return (
                                                    (0, a.invariant)(
                                                        this.ref.current,
                                                        "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"
                                                    ),
                                                    this.ref.current
                                                );
                                            },
                                        },
                                        {
                                            key: "shouldComponentUpdate",
                                            value: function (e, t) {
                                                return (
                                                    !v(e, this.props) ||
                                                    !(0, i.shallowEqual)(
                                                        t,
                                                        this.state
                                                    )
                                                );
                                            },
                                        },
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                (this.isCurrentlyMounted = !0),
                                                    this.handleChange();
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                (this.isCurrentlyMounted = !1),
                                                    this
                                                        .unsubscribeFromOffsetChange &&
                                                        (this.unsubscribeFromOffsetChange(),
                                                        (this.unsubscribeFromOffsetChange =
                                                            void 0)),
                                                    this
                                                        .unsubscribeFromStateChange &&
                                                        (this.unsubscribeFromStateChange(),
                                                        (this.unsubscribeFromStateChange =
                                                            void 0));
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this;
                                                return (0, n.jsx)(
                                                    c.DndContext.Consumer,
                                                    {
                                                        children: function (t) {
                                                            var r =
                                                                t.dragDropManager;
                                                            return void 0 === r
                                                                ? null
                                                                : (e.receiveDragDropManager(
                                                                      r
                                                                  ),
                                                                  e.isCurrentlyMounted
                                                                      ? (0,
                                                                        n.jsx)(
                                                                            s,
                                                                            Object.assign(
                                                                                {},
                                                                                e.props,
                                                                                e.state,
                                                                                {
                                                                                    ref: (0,
                                                                                    d.isRefable)(
                                                                                        s
                                                                                    )
                                                                                        ? e.ref
                                                                                        : null,
                                                                                }
                                                                            ),
                                                                            void 0
                                                                        )
                                                                      : null);
                                                        },
                                                    },
                                                    void 0
                                                );
                                            },
                                        },
                                        {
                                            key: "receiveDragDropManager",
                                            value: function (e) {
                                                if (void 0 === this.manager) {
                                                    (this.manager = e),
                                                        (0, a.invariant)(
                                                            "object" === l(e),
                                                            "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                                            m,
                                                            m
                                                        );
                                                    var t =
                                                        this.manager.getMonitor();
                                                    (this.unsubscribeFromOffsetChange =
                                                        t.subscribeToOffsetChange(
                                                            this.handleChange
                                                        )),
                                                        (this.unsubscribeFromStateChange =
                                                            t.subscribeToStateChange(
                                                                this
                                                                    .handleChange
                                                            ));
                                                }
                                            },
                                        },
                                        {
                                            key: "getCurrentState",
                                            value: function () {
                                                if (!this.manager) return {};
                                                var t =
                                                    this.manager.getMonitor();
                                                return e(t, this.props);
                                            },
                                        },
                                    ]),
                                    u
                                );
                            })(o.Component);
                        return (
                            (b.displayName = "DragLayer(".concat(m, ")")),
                            (b.DecoratedComponent = r),
                            u()(b, r)
                        );
                    }
                );
            }
        },
        61625: (e, t, r) => {
            r.d(t, { DragSource: () => D });
            var n = r(46123),
                o = r(53502),
                i = r(83040),
                a = r(1633);
            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var u = (function () {
                function e(t) {
                    var r = this;
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.hooks = (0, o.wrapConnectorHooks)({
                            dragSource: function (e, t) {
                                r.clearDragSource(),
                                    (r.dragSourceOptions = t || null),
                                    (0, i.isRef)(e)
                                        ? (r.dragSourceRef = e)
                                        : (r.dragSourceNode = e),
                                    r.reconnectDragSource();
                            },
                            dragPreview: function (e, t) {
                                r.clearDragPreview(),
                                    (r.dragPreviewOptions = t || null),
                                    (0, i.isRef)(e)
                                        ? (r.dragPreviewRef = e)
                                        : (r.dragPreviewNode = e),
                                    r.reconnectDragPreview();
                            },
                        })),
                        (this.handlerId = null),
                        (this.dragSourceRef = null),
                        (this.dragSourceOptionsInternal = null),
                        (this.dragPreviewRef = null),
                        (this.dragPreviewOptionsInternal = null),
                        (this.lastConnectedHandlerId = null),
                        (this.lastConnectedDragSource = null),
                        (this.lastConnectedDragSourceOptions = null),
                        (this.lastConnectedDragPreview = null),
                        (this.lastConnectedDragPreviewOptions = null),
                        (this.backend = t);
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "receiveHandlerId",
                            value: function (e) {
                                this.handlerId !== e &&
                                    ((this.handlerId = e), this.reconnect());
                            },
                        },
                        {
                            key: "connectTarget",
                            get: function () {
                                return this.dragSource;
                            },
                        },
                        {
                            key: "dragSourceOptions",
                            get: function () {
                                return this.dragSourceOptionsInternal;
                            },
                            set: function (e) {
                                this.dragSourceOptionsInternal = e;
                            },
                        },
                        {
                            key: "dragPreviewOptions",
                            get: function () {
                                return this.dragPreviewOptionsInternal;
                            },
                            set: function (e) {
                                this.dragPreviewOptionsInternal = e;
                            },
                        },
                        {
                            key: "reconnect",
                            value: function () {
                                this.reconnectDragSource(),
                                    this.reconnectDragPreview();
                            },
                        },
                        {
                            key: "reconnectDragSource",
                            value: function () {
                                var e = this.dragSource,
                                    t =
                                        this.didHandlerIdChange() ||
                                        this.didConnectedDragSourceChange() ||
                                        this.didDragSourceOptionsChange();
                                t && this.disconnectDragSource(),
                                    this.handlerId &&
                                        (e
                                            ? t &&
                                              ((this.lastConnectedHandlerId =
                                                  this.handlerId),
                                              (this.lastConnectedDragSource =
                                                  e),
                                              (this.lastConnectedDragSourceOptions =
                                                  this.dragSourceOptions),
                                              (this.dragSourceUnsubscribe =
                                                  this.backend.connectDragSource(
                                                      this.handlerId,
                                                      e,
                                                      this.dragSourceOptions
                                                  )))
                                            : (this.lastConnectedDragSource =
                                                  e));
                            },
                        },
                        {
                            key: "reconnectDragPreview",
                            value: function () {
                                var e = this.dragPreview,
                                    t =
                                        this.didHandlerIdChange() ||
                                        this.didConnectedDragPreviewChange() ||
                                        this.didDragPreviewOptionsChange();
                                t && this.disconnectDragPreview(),
                                    this.handlerId &&
                                        (e
                                            ? t &&
                                              ((this.lastConnectedHandlerId =
                                                  this.handlerId),
                                              (this.lastConnectedDragPreview =
                                                  e),
                                              (this.lastConnectedDragPreviewOptions =
                                                  this.dragPreviewOptions),
                                              (this.dragPreviewUnsubscribe =
                                                  this.backend.connectDragPreview(
                                                      this.handlerId,
                                                      e,
                                                      this.dragPreviewOptions
                                                  )))
                                            : (this.lastConnectedDragPreview =
                                                  e));
                            },
                        },
                        {
                            key: "didHandlerIdChange",
                            value: function () {
                                return (
                                    this.lastConnectedHandlerId !==
                                    this.handlerId
                                );
                            },
                        },
                        {
                            key: "didConnectedDragSourceChange",
                            value: function () {
                                return (
                                    this.lastConnectedDragSource !==
                                    this.dragSource
                                );
                            },
                        },
                        {
                            key: "didConnectedDragPreviewChange",
                            value: function () {
                                return (
                                    this.lastConnectedDragPreview !==
                                    this.dragPreview
                                );
                            },
                        },
                        {
                            key: "didDragSourceOptionsChange",
                            value: function () {
                                return !(0, a.shallowEqual)(
                                    this.lastConnectedDragSourceOptions,
                                    this.dragSourceOptions
                                );
                            },
                        },
                        {
                            key: "didDragPreviewOptionsChange",
                            value: function () {
                                return !(0, a.shallowEqual)(
                                    this.lastConnectedDragPreviewOptions,
                                    this.dragPreviewOptions
                                );
                            },
                        },
                        {
                            key: "disconnectDragSource",
                            value: function () {
                                this.dragSourceUnsubscribe &&
                                    (this.dragSourceUnsubscribe(),
                                    (this.dragSourceUnsubscribe = void 0));
                            },
                        },
                        {
                            key: "disconnectDragPreview",
                            value: function () {
                                this.dragPreviewUnsubscribe &&
                                    (this.dragPreviewUnsubscribe(),
                                    (this.dragPreviewUnsubscribe = void 0),
                                    (this.dragPreviewNode = null),
                                    (this.dragPreviewRef = null));
                            },
                        },
                        {
                            key: "dragSource",
                            get: function () {
                                return (
                                    this.dragSourceNode ||
                                    (this.dragSourceRef &&
                                        this.dragSourceRef.current)
                                );
                            },
                        },
                        {
                            key: "dragPreview",
                            get: function () {
                                return (
                                    this.dragPreviewNode ||
                                    (this.dragPreviewRef &&
                                        this.dragPreviewRef.current)
                                );
                            },
                        },
                        {
                            key: "clearDragSource",
                            value: function () {
                                (this.dragSourceNode = null),
                                    (this.dragSourceRef = null);
                            },
                        },
                        {
                            key: "clearDragPreview",
                            value: function () {
                                (this.dragPreviewNode = null),
                                    (this.dragPreviewRef = null);
                            },
                        },
                    ]) && s(t.prototype, r),
                    n && s(t, n),
                    e
                );
            })();
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var d = !1,
                l = !1,
                f = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.sourceId = null),
                            (this.internalMonitor = t.getMonitor());
                    }
                    var t, r, o;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "receiveHandlerId",
                                value: function (e) {
                                    this.sourceId = e;
                                },
                            },
                            {
                                key: "getHandlerId",
                                value: function () {
                                    return this.sourceId;
                                },
                            },
                            {
                                key: "canDrag",
                                value: function () {
                                    (0, n.invariant)(
                                        !d,
                                        "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                                    );
                                    try {
                                        return (
                                            (d = !0),
                                            this.internalMonitor.canDragSource(
                                                this.sourceId
                                            )
                                        );
                                    } finally {
                                        d = !1;
                                    }
                                },
                            },
                            {
                                key: "isDragging",
                                value: function () {
                                    if (!this.sourceId) return !1;
                                    (0, n.invariant)(
                                        !l,
                                        "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                                    );
                                    try {
                                        return (
                                            (l = !0),
                                            this.internalMonitor.isDraggingSource(
                                                this.sourceId
                                            )
                                        );
                                    } finally {
                                        l = !1;
                                    }
                                },
                            },
                            {
                                key: "subscribeToStateChange",
                                value: function (e, t) {
                                    return this.internalMonitor.subscribeToStateChange(
                                        e,
                                        t
                                    );
                                },
                            },
                            {
                                key: "isDraggingSource",
                                value: function (e) {
                                    return this.internalMonitor.isDraggingSource(
                                        e
                                    );
                                },
                            },
                            {
                                key: "isOverTarget",
                                value: function (e, t) {
                                    return this.internalMonitor.isOverTarget(
                                        e,
                                        t
                                    );
                                },
                            },
                            {
                                key: "getTargetIds",
                                value: function () {
                                    return this.internalMonitor.getTargetIds();
                                },
                            },
                            {
                                key: "isSourcePublic",
                                value: function () {
                                    return this.internalMonitor.isSourcePublic();
                                },
                            },
                            {
                                key: "getSourceId",
                                value: function () {
                                    return this.internalMonitor.getSourceId();
                                },
                            },
                            {
                                key: "subscribeToOffsetChange",
                                value: function (e) {
                                    return this.internalMonitor.subscribeToOffsetChange(
                                        e
                                    );
                                },
                            },
                            {
                                key: "canDragSource",
                                value: function (e) {
                                    return this.internalMonitor.canDragSource(
                                        e
                                    );
                                },
                            },
                            {
                                key: "canDropOnTarget",
                                value: function (e) {
                                    return this.internalMonitor.canDropOnTarget(
                                        e
                                    );
                                },
                            },
                            {
                                key: "getItemType",
                                value: function () {
                                    return this.internalMonitor.getItemType();
                                },
                            },
                            {
                                key: "getItem",
                                value: function () {
                                    return this.internalMonitor.getItem();
                                },
                            },
                            {
                                key: "getDropResult",
                                value: function () {
                                    return this.internalMonitor.getDropResult();
                                },
                            },
                            {
                                key: "didDrop",
                                value: function () {
                                    return this.internalMonitor.didDrop();
                                },
                            },
                            {
                                key: "getInitialClientOffset",
                                value: function () {
                                    return this.internalMonitor.getInitialClientOffset();
                                },
                            },
                            {
                                key: "getInitialSourceClientOffset",
                                value: function () {
                                    return this.internalMonitor.getInitialSourceClientOffset();
                                },
                            },
                            {
                                key: "getSourceClientOffset",
                                value: function () {
                                    return this.internalMonitor.getSourceClientOffset();
                                },
                            },
                            {
                                key: "getClientOffset",
                                value: function () {
                                    return this.internalMonitor.getClientOffset();
                                },
                            },
                            {
                                key: "getDifferenceFromInitialOffset",
                                value: function () {
                                    return this.internalMonitor.getDifferenceFromInitialOffset();
                                },
                            },
                        ]) && c(t.prototype, r),
                        o && c(t, o),
                        e
                    );
                })(),
                h = r(83030),
                g = r(59885),
                p = r(57227);
            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var y = ["canDrag", "beginDrag", "isDragging", "endDrag"],
                m = ["beginDrag"],
                b = (function () {
                    function e(t, r, n) {
                        var o = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.props = null),
                            (this.beginDrag = function () {
                                if (o.props)
                                    return o.spec.beginDrag(
                                        o.props,
                                        o.monitor,
                                        o.ref.current
                                    );
                            }),
                            (this.spec = t),
                            (this.monitor = r),
                            (this.ref = n);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "receiveProps",
                                value: function (e) {
                                    this.props = e;
                                },
                            },
                            {
                                key: "canDrag",
                                value: function () {
                                    return (
                                        !!this.props &&
                                        (!this.spec.canDrag ||
                                            this.spec.canDrag(
                                                this.props,
                                                this.monitor
                                            ))
                                    );
                                },
                            },
                            {
                                key: "isDragging",
                                value: function (e, t) {
                                    return (
                                        !!this.props &&
                                        (this.spec.isDragging
                                            ? this.spec.isDragging(
                                                  this.props,
                                                  this.monitor
                                              )
                                            : t === e.getSourceId())
                                    );
                                },
                            },
                            {
                                key: "endDrag",
                                value: function () {
                                    this.props &&
                                        this.spec.endDrag &&
                                        this.spec.endDrag(
                                            this.props,
                                            this.monitor,
                                            (0, g.getDecoratedComponent)(
                                                this.ref
                                            )
                                        );
                                },
                            },
                        ]) && v(t.prototype, r),
                        n && v(t, n),
                        e
                    );
                })();
            function O(e) {
                return (
                    Object.keys(e).forEach(function (t) {
                        (0, n.invariant)(
                            y.indexOf(t) > -1,
                            'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                            y.join(", "),
                            t
                        ),
                            (0, n.invariant)(
                                "function" == typeof e[t],
                                "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                                t,
                                t,
                                e[t]
                            );
                    }),
                    m.forEach(function (t) {
                        (0,
                        n.invariant)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t]);
                    }),
                    function (t, r) {
                        return new b(e, t, r);
                    }
                );
            }
            function D(e, t, r) {
                var o =
                    arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                (0, g.checkDecoratorArguments)(
                    "DragSource",
                    "type, spec, collect[, options]",
                    e,
                    t,
                    r,
                    o
                );
                var i = e;
                "function" != typeof e &&
                    ((0, n.invariant)(
                        (0, g.isValidType)(e),
                        'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                        e
                    ),
                    (i = function () {
                        return e;
                    })),
                    (0, n.invariant)(
                        (0, g.isPlainObject)(t),
                        'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                        t
                    );
                var a = O(t);
                return (
                    (0, n.invariant)(
                        "function" == typeof r,
                        'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                        r
                    ),
                    (0, n.invariant)(
                        (0, g.isPlainObject)(o),
                        'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                        r
                    ),
                    function (e) {
                        return (0, p.decorateHandler)({
                            containerDisplayName: "DragSource",
                            createHandler: a,
                            registerHandler: h.registerSource,
                            createConnector: function (e) {
                                return new u(e);
                            },
                            createMonitor: function (e) {
                                return new f(e);
                            },
                            DecoratedComponent: e,
                            getType: i,
                            collect: r,
                            options: o,
                        });
                    }
                );
            }
        },
        35126: (e, t, r) => {
            r.d(t, { DropTarget: () => b });
            var n = r(46123);
            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var i = !1,
                a = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.targetId = null),
                            (this.internalMonitor = t.getMonitor());
                    }
                    var t, r, a;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "receiveHandlerId",
                                value: function (e) {
                                    this.targetId = e;
                                },
                            },
                            {
                                key: "getHandlerId",
                                value: function () {
                                    return this.targetId;
                                },
                            },
                            {
                                key: "subscribeToStateChange",
                                value: function (e, t) {
                                    return this.internalMonitor.subscribeToStateChange(
                                        e,
                                        t
                                    );
                                },
                            },
                            {
                                key: "canDrop",
                                value: function () {
                                    if (!this.targetId) return !1;
                                    (0, n.invariant)(
                                        !i,
                                        "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
                                    );
                                    try {
                                        return (
                                            (i = !0),
                                            this.internalMonitor.canDropOnTarget(
                                                this.targetId
                                            )
                                        );
                                    } finally {
                                        i = !1;
                                    }
                                },
                            },
                            {
                                key: "isOver",
                                value: function (e) {
                                    return (
                                        !!this.targetId &&
                                        this.internalMonitor.isOverTarget(
                                            this.targetId,
                                            e
                                        )
                                    );
                                },
                            },
                            {
                                key: "getItemType",
                                value: function () {
                                    return this.internalMonitor.getItemType();
                                },
                            },
                            {
                                key: "getItem",
                                value: function () {
                                    return this.internalMonitor.getItem();
                                },
                            },
                            {
                                key: "getDropResult",
                                value: function () {
                                    return this.internalMonitor.getDropResult();
                                },
                            },
                            {
                                key: "didDrop",
                                value: function () {
                                    return this.internalMonitor.didDrop();
                                },
                            },
                            {
                                key: "getInitialClientOffset",
                                value: function () {
                                    return this.internalMonitor.getInitialClientOffset();
                                },
                            },
                            {
                                key: "getInitialSourceClientOffset",
                                value: function () {
                                    return this.internalMonitor.getInitialSourceClientOffset();
                                },
                            },
                            {
                                key: "getSourceClientOffset",
                                value: function () {
                                    return this.internalMonitor.getSourceClientOffset();
                                },
                            },
                            {
                                key: "getClientOffset",
                                value: function () {
                                    return this.internalMonitor.getClientOffset();
                                },
                            },
                            {
                                key: "getDifferenceFromInitialOffset",
                                value: function () {
                                    return this.internalMonitor.getDifferenceFromInitialOffset();
                                },
                            },
                        ]) && o(t.prototype, r),
                        a && o(t, a),
                        e
                    );
                })(),
                s = r(1633),
                u = r(53502),
                c = r(83040);
            function d(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var l = (function () {
                    function e(t) {
                        var r = this;
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.hooks = (0, u.wrapConnectorHooks)({
                                dropTarget: function (e, t) {
                                    r.clearDropTarget(),
                                        (r.dropTargetOptions = t),
                                        (0, c.isRef)(e)
                                            ? (r.dropTargetRef = e)
                                            : (r.dropTargetNode = e),
                                        r.reconnect();
                                },
                            })),
                            (this.handlerId = null),
                            (this.dropTargetRef = null),
                            (this.dropTargetOptionsInternal = null),
                            (this.lastConnectedHandlerId = null),
                            (this.lastConnectedDropTarget = null),
                            (this.lastConnectedDropTargetOptions = null),
                            (this.backend = t);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "connectTarget",
                                get: function () {
                                    return this.dropTarget;
                                },
                            },
                            {
                                key: "reconnect",
                                value: function () {
                                    var e =
                                        this.didHandlerIdChange() ||
                                        this.didDropTargetChange() ||
                                        this.didOptionsChange();
                                    e && this.disconnectDropTarget();
                                    var t = this.dropTarget;
                                    this.handlerId &&
                                        (t
                                            ? e &&
                                              ((this.lastConnectedHandlerId =
                                                  this.handlerId),
                                              (this.lastConnectedDropTarget =
                                                  t),
                                              (this.lastConnectedDropTargetOptions =
                                                  this.dropTargetOptions),
                                              (this.unsubscribeDropTarget =
                                                  this.backend.connectDropTarget(
                                                      this.handlerId,
                                                      t,
                                                      this.dropTargetOptions
                                                  )))
                                            : (this.lastConnectedDropTarget =
                                                  t));
                                },
                            },
                            {
                                key: "receiveHandlerId",
                                value: function (e) {
                                    e !== this.handlerId &&
                                        ((this.handlerId = e),
                                        this.reconnect());
                                },
                            },
                            {
                                key: "dropTargetOptions",
                                get: function () {
                                    return this.dropTargetOptionsInternal;
                                },
                                set: function (e) {
                                    this.dropTargetOptionsInternal = e;
                                },
                            },
                            {
                                key: "didHandlerIdChange",
                                value: function () {
                                    return (
                                        this.lastConnectedHandlerId !==
                                        this.handlerId
                                    );
                                },
                            },
                            {
                                key: "didDropTargetChange",
                                value: function () {
                                    return (
                                        this.lastConnectedDropTarget !==
                                        this.dropTarget
                                    );
                                },
                            },
                            {
                                key: "didOptionsChange",
                                value: function () {
                                    return !(0, s.shallowEqual)(
                                        this.lastConnectedDropTargetOptions,
                                        this.dropTargetOptions
                                    );
                                },
                            },
                            {
                                key: "disconnectDropTarget",
                                value: function () {
                                    this.unsubscribeDropTarget &&
                                        (this.unsubscribeDropTarget(),
                                        (this.unsubscribeDropTarget = void 0));
                                },
                            },
                            {
                                key: "dropTarget",
                                get: function () {
                                    return (
                                        this.dropTargetNode ||
                                        (this.dropTargetRef &&
                                            this.dropTargetRef.current)
                                    );
                                },
                            },
                            {
                                key: "clearDropTarget",
                                value: function () {
                                    (this.dropTargetRef = null),
                                        (this.dropTargetNode = null);
                                },
                            },
                        ]) && d(t.prototype, r),
                        n && d(t, n),
                        e
                    );
                })(),
                f = r(83030),
                h = r(59885),
                g = r(57227);
            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var v = ["canDrop", "hover", "drop"],
                y = (function () {
                    function e(t, r, n) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.props = null),
                            (this.spec = t),
                            (this.monitor = r),
                            (this.ref = n);
                    }
                    var t, r, n;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: "receiveProps",
                                value: function (e) {
                                    this.props = e;
                                },
                            },
                            {
                                key: "receiveMonitor",
                                value: function (e) {
                                    this.monitor = e;
                                },
                            },
                            {
                                key: "canDrop",
                                value: function () {
                                    return (
                                        !this.spec.canDrop ||
                                        this.spec.canDrop(
                                            this.props,
                                            this.monitor
                                        )
                                    );
                                },
                            },
                            {
                                key: "hover",
                                value: function () {
                                    this.spec.hover &&
                                        this.props &&
                                        this.spec.hover(
                                            this.props,
                                            this.monitor,
                                            (0, h.getDecoratedComponent)(
                                                this.ref
                                            )
                                        );
                                },
                            },
                            {
                                key: "drop",
                                value: function () {
                                    if (this.spec.drop)
                                        return this.spec.drop(
                                            this.props,
                                            this.monitor,
                                            this.ref.current
                                        );
                                },
                            },
                        ]) && p(t.prototype, r),
                        n && p(t, n),
                        e
                    );
                })();
            function m(e) {
                return (
                    Object.keys(e).forEach(function (t) {
                        (0, n.invariant)(
                            v.indexOf(t) > -1,
                            'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                            v.join(", "),
                            t
                        ),
                            (0, n.invariant)(
                                "function" == typeof e[t],
                                "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                                t,
                                t,
                                e[t]
                            );
                    }),
                    function (t, r) {
                        return new y(e, t, r);
                    }
                );
            }
            function b(e, t, r) {
                var o =
                    arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                (0, h.checkDecoratorArguments)(
                    "DropTarget",
                    "type, spec, collect[, options]",
                    e,
                    t,
                    r,
                    o
                );
                var i = e;
                "function" != typeof e &&
                    ((0, n.invariant)(
                        (0, h.isValidType)(e, !0),
                        'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                        e
                    ),
                    (i = function () {
                        return e;
                    })),
                    (0, n.invariant)(
                        (0, h.isPlainObject)(t),
                        'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                        t
                    );
                var s = m(t);
                return (
                    (0, n.invariant)(
                        "function" == typeof r,
                        'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                        r
                    ),
                    (0, n.invariant)(
                        (0, h.isPlainObject)(o),
                        'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                        r
                    ),
                    function (e) {
                        return (0, g.decorateHandler)({
                            containerDisplayName: "DropTarget",
                            createHandler: s,
                            registerHandler: f.registerTarget,
                            createMonitor: function (e) {
                                return new a(e);
                            },
                            createConnector: function (e) {
                                return new l(e);
                            },
                            DecoratedComponent: e,
                            getType: i,
                            collect: r,
                            options: o,
                        });
                    }
                );
            }
        },
        57227: (e, t, r) => {
            r.d(t, { decorateHandler: () => C });
            var n = r(4637),
                o = r(59496),
                i = r(1633),
                a = r(46123),
                s = r(89742),
                u = r(59885);
            function c(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function d(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function l(e, t, r) {
                return t && d(e.prototype, t), r && d(e, r), e;
            }
            var f = (function () {
                function e(t) {
                    c(this, e),
                        (this.isDisposed = !1),
                        (this.action = (0, u.isFunction)(t) ? t : u.noop);
                }
                return (
                    l(
                        e,
                        [
                            {
                                key: "dispose",
                                value: function () {
                                    this.isDisposed ||
                                        (this.action(), (this.isDisposed = !0));
                                },
                            },
                        ],
                        [
                            {
                                key: "isDisposable",
                                value: function (e) {
                                    return Boolean(
                                        e && (0, u.isFunction)(e.dispose)
                                    );
                                },
                            },
                            {
                                key: "_fixup",
                                value: function (t) {
                                    return e.isDisposable(t) ? t : e.empty;
                                },
                            },
                            {
                                key: "create",
                                value: function (t) {
                                    return new e(t);
                                },
                            },
                        ]
                    ),
                    e
                );
            })();
            f.empty = { dispose: u.noop };
            var h = (function () {
                    function e() {
                        c(this, e), (this.isDisposed = !1);
                        for (
                            var t = arguments.length, r = new Array(t), n = 0;
                            n < t;
                            n++
                        )
                            r[n] = arguments[n];
                        this.disposables = r;
                    }
                    return (
                        l(e, [
                            {
                                key: "add",
                                value: function (e) {
                                    this.isDisposed
                                        ? e.dispose()
                                        : this.disposables.push(e);
                                },
                            },
                            {
                                key: "remove",
                                value: function (e) {
                                    var t = !1;
                                    if (!this.isDisposed) {
                                        var r = this.disposables.indexOf(e);
                                        -1 !== r &&
                                            ((t = !0),
                                            this.disposables.splice(r, 1),
                                            e.dispose());
                                    }
                                    return t;
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    if (!this.isDisposed) {
                                        for (
                                            var e = this.disposables.length,
                                                t = new Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = this.disposables[r];
                                        this.disposables = [];
                                        for (var n = 0; n < e; n++)
                                            t[n].dispose();
                                    }
                                },
                            },
                            {
                                key: "dispose",
                                value: function () {
                                    if (!this.isDisposed) {
                                        this.isDisposed = !0;
                                        for (
                                            var e = this.disposables.length,
                                                t = new Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = this.disposables[r];
                                        this.disposables = [];
                                        for (var n = 0; n < e; n++)
                                            t[n].dispose();
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                g = (function () {
                    function e() {
                        c(this, e), (this.isDisposed = !1);
                    }
                    return (
                        l(e, [
                            {
                                key: "getDisposable",
                                value: function () {
                                    return this.current;
                                },
                            },
                            {
                                key: "setDisposable",
                                value: function (e) {
                                    var t = this.isDisposed;
                                    if (!t) {
                                        var r = this.current;
                                        (this.current = e), r && r.dispose();
                                    }
                                    t && e && e.dispose();
                                },
                            },
                            {
                                key: "dispose",
                                value: function () {
                                    if (!this.isDisposed) {
                                        this.isDisposed = !0;
                                        var e = this.current;
                                        (this.current = void 0),
                                            e && e.dispose();
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                p = r(72535),
                v = r.n(p);
            function y(e) {
                return (y =
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
                          })(e);
            }
            function m(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            "undefined" == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, s = e[Symbol.iterator]();
                                !(n = (a = s.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return b(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return b(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function O(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function D(e, t) {
                return (D =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function S(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return w(this, r);
                };
            }
            function w(e, t) {
                return !t || ("object" !== y(t) && "function" != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function T(e) {
                return (T = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function C(e) {
                var t = e.DecoratedComponent,
                    r = e.createHandler,
                    c = e.createMonitor,
                    d = e.createConnector,
                    l = e.registerHandler,
                    p = e.containerDisplayName,
                    y = e.getType,
                    b = e.collect,
                    w = e.options.arePropsEqual,
                    T = void 0 === w ? i.shallowEqual : w,
                    C = t,
                    E = t.displayName || t.name || "Component",
                    I = (function (e) {
                        !(function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function"
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                t && D(e, t);
                        })(I, e);
                        var t,
                            p,
                            v,
                            w = S(I);
                        function I(e) {
                            var t;
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                })(this, I),
                                ((t = w.call(this, e)).decoratedRef = (0,
                                o.createRef)()),
                                (t.handleChange = function () {
                                    var e = t.getCurrentState();
                                    (0, i.shallowEqual)(e, t.state) ||
                                        t.setState(e);
                                }),
                                (t.disposable = new g()),
                                t.receiveProps(e),
                                t.dispose(),
                                t
                            );
                        }
                        return (
                            (t = I),
                            (p = [
                                {
                                    key: "getHandlerId",
                                    value: function () {
                                        return this.handlerId;
                                    },
                                },
                                {
                                    key: "getDecoratedComponentInstance",
                                    value: function () {
                                        return (
                                            (0, a.invariant)(
                                                this.decoratedRef.current,
                                                "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"
                                            ),
                                            this.decoratedRef.current
                                        );
                                    },
                                },
                                {
                                    key: "shouldComponentUpdate",
                                    value: function (e, t) {
                                        return (
                                            !T(e, this.props) ||
                                            !(0, i.shallowEqual)(t, this.state)
                                        );
                                    },
                                },
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        (this.disposable = new g()),
                                            (this.currentType = void 0),
                                            this.receiveProps(this.props),
                                            this.handleChange();
                                    },
                                },
                                {
                                    key: "componentDidUpdate",
                                    value: function (e) {
                                        T(this.props, e) ||
                                            (this.receiveProps(this.props),
                                            this.handleChange());
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function () {
                                        this.dispose();
                                    },
                                },
                                {
                                    key: "receiveProps",
                                    value: function (e) {
                                        this.handler &&
                                            (this.handler.receiveProps(e),
                                            this.receiveType(y(e)));
                                    },
                                },
                                {
                                    key: "receiveType",
                                    value: function (e) {
                                        if (
                                            this.handlerMonitor &&
                                            this.manager &&
                                            this.handlerConnector &&
                                            e !== this.currentType
                                        ) {
                                            this.currentType = e;
                                            var t = m(
                                                    l(
                                                        e,
                                                        this.handler,
                                                        this.manager
                                                    ),
                                                    2
                                                ),
                                                r = t[0],
                                                n = t[1];
                                            (this.handlerId = r),
                                                this.handlerMonitor.receiveHandlerId(
                                                    r
                                                ),
                                                this.handlerConnector.receiveHandlerId(
                                                    r
                                                );
                                            var o = this.manager
                                                .getMonitor()
                                                .subscribeToStateChange(
                                                    this.handleChange,
                                                    { handlerIds: [r] }
                                                );
                                            this.disposable.setDisposable(
                                                new h(new f(o), new f(n))
                                            );
                                        }
                                    },
                                },
                                {
                                    key: "dispose",
                                    value: function () {
                                        this.disposable.dispose(),
                                            this.handlerConnector &&
                                                this.handlerConnector.receiveHandlerId(
                                                    null
                                                );
                                    },
                                },
                                {
                                    key: "getCurrentState",
                                    value: function () {
                                        return this.handlerConnector
                                            ? b(
                                                  this.handlerConnector.hooks,
                                                  this.handlerMonitor,
                                                  this.props
                                              )
                                            : {};
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return (0, n.jsx)(
                                            s.DndContext.Consumer,
                                            {
                                                children: function (t) {
                                                    var r = t.dragDropManager;
                                                    return (
                                                        e.receiveDragDropManager(
                                                            r
                                                        ),
                                                        "undefined" !=
                                                            typeof requestAnimationFrame &&
                                                            requestAnimationFrame(
                                                                function () {
                                                                    var t;
                                                                    return null ===
                                                                        (t =
                                                                            e.handlerConnector) ||
                                                                        void 0 ===
                                                                            t
                                                                        ? void 0
                                                                        : t.reconnect();
                                                                }
                                                            ),
                                                        (0, n.jsx)(
                                                            C,
                                                            Object.assign(
                                                                {},
                                                                e.props,
                                                                e.getCurrentState(),
                                                                {
                                                                    ref: (0,
                                                                    u.isRefable)(
                                                                        C
                                                                    )
                                                                        ? e.decoratedRef
                                                                        : null,
                                                                }
                                                            ),
                                                            void 0
                                                        )
                                                    );
                                                },
                                            },
                                            void 0
                                        );
                                    },
                                },
                                {
                                    key: "receiveDragDropManager",
                                    value: function (e) {
                                        void 0 === this.manager &&
                                            ((0, a.invariant)(
                                                void 0 !== e,
                                                "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                                E,
                                                E
                                            ),
                                            void 0 !== e &&
                                                ((this.manager = e),
                                                (this.handlerMonitor = c(e)),
                                                (this.handlerConnector = d(
                                                    e.getBackend()
                                                )),
                                                (this.handler = r(
                                                    this.handlerMonitor,
                                                    this.decoratedRef
                                                ))));
                                    },
                                },
                            ]) && O(t.prototype, p),
                            v && O(t, v),
                            I
                        );
                    })(o.Component);
                return (
                    (I.DecoratedComponent = t),
                    (I.displayName = "".concat(p, "(").concat(E, ")")),
                    v()(I, t)
                );
            }
        },
        59885: (e, t, r) => {
            function n(e) {
                return (n =
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
                          })(e);
            }
            function o(e) {
                var t = e.current;
                return null == t
                    ? null
                    : t.decoratedRef
                    ? t.decoratedRef.current
                    : t;
            }
            function i(e) {
                return (
                    ((t = e) &&
                        t.prototype &&
                        "function" == typeof t.prototype.render) ||
                    (function (e) {
                        var t,
                            r = e;
                        return (
                            "Symbol(react.forward_ref)" ===
                            (null == r ||
                            null === (t = r.$$typeof) ||
                            void 0 === t
                                ? void 0
                                : t.toString())
                        );
                    })(e)
                );
                var t;
            }
            function a(e, t) {}
            function s(e) {
                return "function" == typeof e;
            }
            function u() {}
            function c(e) {
                if (
                    !(function (e) {
                        return "object" === n(e) && null !== e;
                    })(e)
                )
                    return !1;
                if (null === Object.getPrototypeOf(e)) return !0;
                for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            }
            function d(e, t) {
                return (
                    "string" == typeof e ||
                    "symbol" === n(e) ||
                    (!!t &&
                        Array.isArray(e) &&
                        e.every(function (e) {
                            return d(e, !1);
                        }))
                );
            }
            r.d(t, {
                getDecoratedComponent: () => o,
                isRefable: () => i,
                checkDecoratorArguments: () => a,
                isFunction: () => s,
                noop: () => u,
                isPlainObject: () => c,
                isValidType: () => d,
            });
        },
        83040: (e, t, r) => {
            function n(e) {
                return (n =
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
                          })(e);
            }
            function o(e) {
                return (
                    null !== e &&
                    "object" === n(e) &&
                    Object.prototype.hasOwnProperty.call(e, "current")
                );
            }
            r.d(t, { isRef: () => o });
        },
        83030: (e, t, r) => {
            function n(e, t, r) {
                var n = r.getRegistry(),
                    o = n.addTarget(e, t);
                return [
                    o,
                    function () {
                        return n.removeTarget(o);
                    },
                ];
            }
            function o(e, t, r) {
                var n = r.getRegistry(),
                    o = n.addSource(e, t);
                return [
                    o,
                    function () {
                        return n.removeSource(o);
                    },
                ];
            }
            r.d(t, { registerTarget: () => n, registerSource: () => o });
        },
        53502: (e, t, r) => {
            r.d(t, { wrapConnectorHooks: () => a });
            var n = r(46123),
                o = r(59496);
            function i(e) {
                if ("string" != typeof e.type) {
                    var t =
                        e.type.displayName || e.type.name || "the component";
                    throw new Error(
                        "Only native element nodes can now be passed to React DnD connectors." +
                            "You can either wrap ".concat(
                                t,
                                " into a <div>, or turn it into a "
                            ) +
                            "drag source or a drop target itself."
                    );
                }
            }
            function a(e) {
                var t = {};
                return (
                    Object.keys(e).forEach(function (r) {
                        var n = e[r];
                        if (r.endsWith("Ref")) t[r] = e[r];
                        else {
                            var a = (function (e) {
                                return function () {
                                    var t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : null,
                                        r =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : null;
                                    if (!(0, o.isValidElement)(t)) {
                                        var n = t;
                                        return e(n, r), n;
                                    }
                                    var a = t;
                                    i(a);
                                    var s = r
                                        ? function (t) {
                                              return e(t, r);
                                          }
                                        : e;
                                    return u(a, s);
                                };
                            })(n);
                            t[r] = function () {
                                return a;
                            };
                        }
                    }),
                    t
                );
            }
            function s(e, t) {
                "function" == typeof e ? e(t) : (e.current = t);
            }
            function u(e, t) {
                var r = e.ref;
                return (
                    (0, n.invariant)(
                        "string" != typeof r,
                        "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
                    ),
                    r
                        ? (0, o.cloneElement)(e, {
                              ref: function (e) {
                                  s(r, e), s(t, e);
                              },
                          })
                        : (0, o.cloneElement)(e, { ref: t })
                );
            }
        },
    },
]);