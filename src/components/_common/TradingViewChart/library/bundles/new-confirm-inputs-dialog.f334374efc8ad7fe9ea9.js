(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [3030],
    {
        59142: function (t, e) {
            var n, o, i;
            (o = [e]),
                void 0 ===
                    (i =
                        "function" ==
                        typeof (n = function (t) {
                            "use strict";
                            function e(t) {
                                if (Array.isArray(t)) {
                                    for (
                                        var e = 0, n = Array(t.length);
                                        e < t.length;
                                        e++
                                    )
                                        n[e] = t[e];
                                    return n;
                                }
                                return Array.from(t);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0,
                            });
                            var n = !1;
                            if ("undefined" != typeof window) {
                                var o = {
                                    get passive() {
                                        n = !0;
                                    },
                                };
                                window.addEventListener("testPassive", null, o),
                                    window.removeEventListener(
                                        "testPassive",
                                        null,
                                        o
                                    );
                            }
                            var i =
                                    "undefined" != typeof window &&
                                    window.navigator &&
                                    window.navigator.platform &&
                                    /iP(ad|hone|od)/.test(
                                        window.navigator.platform
                                    ),
                                r = [],
                                s = !1,
                                l = -1,
                                c = void 0,
                                u = void 0,
                                a = function (t) {
                                    return r.some(function (e) {
                                        return !(
                                            !e.options.allowTouchMove ||
                                            !e.options.allowTouchMove(t)
                                        );
                                    });
                                },
                                d = function (t) {
                                    var e = t || window.event;
                                    return (
                                        !!a(e.target) ||
                                        1 < e.touches.length ||
                                        (e.preventDefault && e.preventDefault(),
                                        !1)
                                    );
                                },
                                p = function () {
                                    setTimeout(function () {
                                        void 0 !== u &&
                                            ((document.body.style.paddingRight =
                                                u),
                                            (u = void 0)),
                                            void 0 !== c &&
                                                ((document.body.style.overflow =
                                                    c),
                                                (c = void 0));
                                    });
                                };
                            (t.disableBodyScroll = function (t, o) {
                                if (i) {
                                    if (!t)
                                        return void console.error(
                                            "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                                        );
                                    if (
                                        t &&
                                        !r.some(function (e) {
                                            return e.targetElement === t;
                                        })
                                    ) {
                                        var p = {
                                            targetElement: t,
                                            options: o || {},
                                        };
                                        (r = [].concat(e(r), [p])),
                                            (t.ontouchstart = function (t) {
                                                1 === t.targetTouches.length &&
                                                    (l =
                                                        t.targetTouches[0]
                                                            .clientY);
                                            }),
                                            (t.ontouchmove = function (e) {
                                                var n, o, i, r;
                                                1 === e.targetTouches.length &&
                                                    ((o = t),
                                                    (r =
                                                        (n = e).targetTouches[0]
                                                            .clientY - l),
                                                    !a(n.target) &&
                                                        ((o &&
                                                            0 === o.scrollTop &&
                                                            0 < r) ||
                                                        ((i = o) &&
                                                            i.scrollHeight -
                                                                i.scrollTop <=
                                                                i.clientHeight &&
                                                            r < 0)
                                                            ? d(n)
                                                            : n.stopPropagation()));
                                            }),
                                            s ||
                                                (document.addEventListener(
                                                    "touchmove",
                                                    d,
                                                    n ? { passive: !1 } : void 0
                                                ),
                                                (s = !0));
                                    }
                                } else {
                                    (m = o),
                                        setTimeout(function () {
                                            if (void 0 === u) {
                                                var t =
                                                        !!m &&
                                                        !0 ===
                                                            m.reserveScrollBarGap,
                                                    e =
                                                        window.innerWidth -
                                                        document.documentElement
                                                            .clientWidth;
                                                t &&
                                                    0 < e &&
                                                    ((u =
                                                        document.body.style
                                                            .paddingRight),
                                                    (document.body.style.paddingRight =
                                                        e + "px"));
                                            }
                                            void 0 === c &&
                                                ((c =
                                                    document.body.style
                                                        .overflow),
                                                (document.body.style.overflow =
                                                    "hidden"));
                                        });
                                    var f = {
                                        targetElement: t,
                                        options: o || {},
                                    };
                                    r = [].concat(e(r), [f]);
                                }
                                var m;
                            }),
                                (t.clearAllBodyScrollLocks = function () {
                                    i
                                        ? (r.forEach(function (t) {
                                              (t.targetElement.ontouchstart =
                                                  null),
                                                  (t.targetElement.ontouchmove =
                                                      null);
                                          }),
                                          s &&
                                              (document.removeEventListener(
                                                  "touchmove",
                                                  d,
                                                  n ? { passive: !1 } : void 0
                                              ),
                                              (s = !1)),
                                          (r = []),
                                          (l = -1))
                                        : (p(), (r = []));
                                }),
                                (t.enableBodyScroll = function (t) {
                                    if (i) {
                                        if (!t)
                                            return void console.error(
                                                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                                            );
                                        (t.ontouchstart = null),
                                            (t.ontouchmove = null),
                                            (r = r.filter(function (e) {
                                                return e.targetElement !== t;
                                            })),
                                            s &&
                                                0 === r.length &&
                                                (document.removeEventListener(
                                                    "touchmove",
                                                    d,
                                                    n ? { passive: !1 } : void 0
                                                ),
                                                (s = !1));
                                    } else
                                        1 === r.length &&
                                        r[0].targetElement === t
                                            ? (p(), (r = []))
                                            : (r = r.filter(function (e) {
                                                  return e.targetElement !== t;
                                              }));
                                });
                        })
                            ? n.apply(e, o)
                            : n) || (t.exports = i);
        },
        52932: (t) => {
            t.exports = {
                separator: "separator-s5VT2kNH",
                scrollable: "scrollable-s5VT2kNH",
            };
        },
        70589: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, { ConfirmInputsDialogRenderer: () => h });
            var o = n(87995),
                i = n(59496),
                r = n(28353),
                s = n(50182),
                l = n(59064),
                c = n(86656),
                u = n(27423),
                a = n(2872),
                d = n.n(a),
                p = n(49483),
                f = n(52932);
            function m(t) {
                const {
                        title: e,
                        confirmInputs: n,
                        inputsProperty: o,
                        model: a,
                        confirmInputsType: m,
                        onCancel: h,
                        onSubmit: y,
                        onClose: v,
                        onStudyInputChange: g,
                    } = t,
                    [S, w] = (0, i.useState)(!0),
                    b = (0, i.useMemo)(function () {
                        const t = new (d())();
                        return {
                            isInputsStudy: !0,
                            symbolsResolved: () => t,
                            resolvedSymbolInfoBySymbol: () => null,
                            tempProperties: o,
                        };
                    }, []),
                    C = (0, i.useRef)(null),
                    [E, I] = (0, i.useState)(D());
                return (
                    (0, i.useEffect)(() => {
                        if (
                            !p.CheckMobile.any() &&
                            S &&
                            "symbol" === m &&
                            C.current
                        ) {
                            const t = C.current.querySelector("input");
                            t && t.focus();
                        }
                    }, [S]),
                    i.createElement(s.AdaptiveConfirmDialog, {
                        dataName: "confirm-inputs-dialog",
                        title: e,
                        isOpened: S,
                        onSubmit: function () {
                            y(o.state().inputs), _();
                        },
                        onCancel: h,
                        onClickOutside: _,
                        onClose: _,
                        render: () =>
                            i.createElement(
                                i.Fragment,
                                null,
                                i.createElement("div", {
                                    className: f.separator,
                                }),
                                i.createElement(
                                    c.TouchScrollContainer,
                                    { className: f.scrollable, onScroll: T },
                                    i.createElement(u.InputsTabContent, {
                                        reference: C,
                                        property: o,
                                        model: a,
                                        study: b,
                                        inputs: n,
                                        onStudyInputChange: P,
                                    })
                                )
                            ),
                        defaultActionOnClose: "none",
                        submitButtonText: (0, r.t)("Apply"),
                        submitButtonDisabled: E,
                        submitOnEnterKey: !1,
                    })
                );
                function T() {
                    l.globalCloseDelegate.fire();
                }
                function _() {
                    w(!1), v();
                }
                function D() {
                    const { inputs: t } = o.state();
                    for (const e of n)
                        if (
                            "symbol" === e.type &&
                            !e.optional &&
                            "" === t[e.id]
                        )
                            return !0;
                    return !1;
                }
                function P(t, e) {
                    null == g || g(t, e), I(D());
                }
            }
            class h {
                constructor(t, e, n, i, r, s, l, c) {
                    (this._container = document.createElement("div")),
                        (this._handleClose = () => {
                            o.unmountComponentAtNode(this._container),
                                this._onClose();
                        }),
                        (this._title = t),
                        (this._confirmInputs = e),
                        (this._model = r),
                        (this._confirmInputsType = i),
                        (this._onSubmit = s),
                        (this._onClose = l),
                        (this._onStudyInputChange = c),
                        (this._inputsProperty = n);
                }
                show() {
                    o.render(
                        i.createElement(m, {
                            title: this._title,
                            confirmInputs: this._confirmInputs,
                            inputsProperty: this._inputsProperty,
                            model: this._model,
                            confirmInputsType: this._confirmInputsType,
                            onSubmit: this._onSubmit,
                            onCancel: () => {},
                            onClose: this._handleClose,
                            onStudyInputChange: this._onStudyInputChange,
                        }),
                        this._container
                    );
                }
            }
        },
        73339: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, { selectInputValuesOnChart: () => l });
            var o = n(88537),
                i = n(45112),
                r = n(28353),
                s = n(95087);
            i.colorsPalette["color-cold-gray-500"];
            async function l(t, e, n, i, l) {
                let c;
                const u = (0, s.getInputGroups)(e);
                t.model().model();
                for await (const t of u)
                    await a(t).catch((t) => {
                        throw new Error(t);
                    });
                return { customSourceId: void 0, destPane: c };
                async function a(t) {
                    if ((0, s.isGroup)(t))
                        if ((0, s.isInputInlines)(t)) {
                            const e = (function (t) {
                                if (2 !== t.length || t[0].type === t[1].type)
                                    return null;
                                return "price" === t[0].type
                                    ? { price: t[0], time: t[1] }
                                    : { price: t[1], time: t[0] };
                            })(t.children);
                            if (e) {
                                const { time: n, price: o } = e,
                                    s = n.inline
                                        ? (0, r.t)(
                                              'Set the "{inputInline}" time and price for "{studyShortDescription}"',
                                              {
                                                  replace: {
                                                      inputInline: n.inline,
                                                      studyShortDescription: i,
                                                  },
                                              }
                                          )
                                        : (0, r.t)(
                                              'Set the time and price for "{studyShortDescription}"',
                                              {
                                                  replace: {
                                                      studyShortDescription: i,
                                                  },
                                              }
                                          ),
                                    l = f(t.id);
                                await p(
                                    t,
                                    "all",
                                    null != l ? l : s,
                                    n.id,
                                    o.id
                                );
                            } else for await (const e of t.children) await d(e);
                        } else for await (const e of t.children) await a(e);
                    else await d(t);
                }
                async function d(t) {
                    const e = "time" === t.type,
                        n = e ? "time" : "price",
                        o = (function () {
                            if (t.inline) {
                                const e = f(t.inline);
                                if (e) return e;
                            }
                            if (t.tooltip) return t.tooltip;
                            const n = t.name
                                    ? (0, r.t)(
                                          'Set the "{inputTitle}" time for "{studyShortDescription}"',
                                          {
                                              replace: {
                                                  inputTitle: t.name,
                                                  studyShortDescription: i,
                                              },
                                          }
                                      )
                                    : (0, r.t)(
                                          'Set the time for "{studyShortDescription}"',
                                          {
                                              replace: {
                                                  studyShortDescription: i,
                                              },
                                          }
                                      ),
                                o = t.name
                                    ? (0, r.t)(
                                          'Set the "{inputTitle}" price for "{studyShortDescription}"',
                                          {
                                              replace: {
                                                  inputTitle: t.name,
                                                  studyShortDescription: i,
                                              },
                                          }
                                      )
                                    : (0, r.t)(
                                          'Set the price for "{studyShortDescription}"',
                                          {
                                              replace: {
                                                  studyShortDescription: i,
                                              },
                                          }
                                      );
                            return e ? n : o;
                        })(),
                        s = e ? t.id : void 0,
                        l = e ? void 0 : t.id;
                    await p(t, n, o, s, l);
                }
                async function p(e, i, r, s, l) {
                    const u = await t.requestSelectPoint(
                        { pointType: i, pane: c, lineColor: void 0 },
                        r
                    );
                    void 0 === c && (c = u.pane);
                    const a = n.childs().inputs;
                    a &&
                        (s &&
                            (0, o.ensureDefined)(a.child(s)).setValue(
                                1e3 * (u.point.time || 0)
                            ),
                        l &&
                            (0, o.ensureDefined)(a.child(l)).setValue(
                                u.point.price
                            ));
                }
                function f(t) {
                    let e;
                    return (
                        l
                            .filter((e) => e.inline === t)
                            .forEach((t) => {
                                t.tooltip && (e = t.tooltip);
                            }),
                        e
                    );
                }
            }
        },
    },
]);
