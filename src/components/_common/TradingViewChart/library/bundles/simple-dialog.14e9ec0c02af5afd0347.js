(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [8890],
    {
        59142: function (e, t) {
            var n, o, r;
            (o = [t]),
                void 0 ===
                    (r =
                        "function" ==
                        typeof (n = function (e) {
                            "use strict";
                            function t(e) {
                                if (Array.isArray(e)) {
                                    for (
                                        var t = 0, n = Array(e.length);
                                        t < e.length;
                                        t++
                                    )
                                        n[t] = e[t];
                                    return n;
                                }
                                return Array.from(e);
                            }
                            Object.defineProperty(e, "__esModule", {
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
                            var r =
                                    "undefined" != typeof window &&
                                    window.navigator &&
                                    window.navigator.platform &&
                                    /iP(ad|hone|od)/.test(
                                        window.navigator.platform
                                    ),
                                i = [],
                                s = !1,
                                a = -1,
                                l = void 0,
                                c = void 0,
                                u = function (e) {
                                    return i.some(function (t) {
                                        return !(
                                            !t.options.allowTouchMove ||
                                            !t.options.allowTouchMove(e)
                                        );
                                    });
                                },
                                d = function (e) {
                                    var t = e || window.event;
                                    return (
                                        !!u(t.target) ||
                                        1 < t.touches.length ||
                                        (t.preventDefault && t.preventDefault(),
                                        !1)
                                    );
                                },
                                m = function () {
                                    setTimeout(function () {
                                        void 0 !== c &&
                                            ((document.body.style.paddingRight =
                                                c),
                                            (c = void 0)),
                                            void 0 !== l &&
                                                ((document.body.style.overflow =
                                                    l),
                                                (l = void 0));
                                    });
                                };
                            (e.disableBodyScroll = function (e, o) {
                                if (r) {
                                    if (!e)
                                        return void console.error(
                                            "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                                        );
                                    if (
                                        e &&
                                        !i.some(function (t) {
                                            return t.targetElement === e;
                                        })
                                    ) {
                                        var m = {
                                            targetElement: e,
                                            options: o || {},
                                        };
                                        (i = [].concat(t(i), [m])),
                                            (e.ontouchstart = function (e) {
                                                1 === e.targetTouches.length &&
                                                    (a =
                                                        e.targetTouches[0]
                                                            .clientY);
                                            }),
                                            (e.ontouchmove = function (t) {
                                                var n, o, r, i;
                                                1 === t.targetTouches.length &&
                                                    ((o = e),
                                                    (i =
                                                        (n = t).targetTouches[0]
                                                            .clientY - a),
                                                    !u(n.target) &&
                                                        ((o &&
                                                            0 === o.scrollTop &&
                                                            0 < i) ||
                                                        ((r = o) &&
                                                            r.scrollHeight -
                                                                r.scrollTop <=
                                                                r.clientHeight &&
                                                            i < 0)
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
                                    (h = o),
                                        setTimeout(function () {
                                            if (void 0 === c) {
                                                var e =
                                                        !!h &&
                                                        !0 ===
                                                            h.reserveScrollBarGap,
                                                    t =
                                                        window.innerWidth -
                                                        document.documentElement
                                                            .clientWidth;
                                                e &&
                                                    0 < t &&
                                                    ((c =
                                                        document.body.style
                                                            .paddingRight),
                                                    (document.body.style.paddingRight =
                                                        t + "px"));
                                            }
                                            void 0 === l &&
                                                ((l =
                                                    document.body.style
                                                        .overflow),
                                                (document.body.style.overflow =
                                                    "hidden"));
                                        });
                                    var p = {
                                        targetElement: e,
                                        options: o || {},
                                    };
                                    i = [].concat(t(i), [p]);
                                }
                                var h;
                            }),
                                (e.clearAllBodyScrollLocks = function () {
                                    r
                                        ? (i.forEach(function (e) {
                                              (e.targetElement.ontouchstart =
                                                  null),
                                                  (e.targetElement.ontouchmove =
                                                      null);
                                          }),
                                          s &&
                                              (document.removeEventListener(
                                                  "touchmove",
                                                  d,
                                                  n ? { passive: !1 } : void 0
                                              ),
                                              (s = !1)),
                                          (i = []),
                                          (a = -1))
                                        : (m(), (i = []));
                                }),
                                (e.enableBodyScroll = function (e) {
                                    if (r) {
                                        if (!e)
                                            return void console.error(
                                                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                                            );
                                        (e.ontouchstart = null),
                                            (e.ontouchmove = null),
                                            (i = i.filter(function (t) {
                                                return t.targetElement !== e;
                                            })),
                                            s &&
                                                0 === i.length &&
                                                (document.removeEventListener(
                                                    "touchmove",
                                                    d,
                                                    n ? { passive: !1 } : void 0
                                                ),
                                                (s = !1));
                                    } else
                                        1 === i.length &&
                                        i[0].targetElement === e
                                            ? (m(), (i = []))
                                            : (i = i.filter(function (t) {
                                                  return t.targetElement !== e;
                                              }));
                                });
                        })
                            ? n.apply(t, o)
                            : n) || (e.exports = r);
        },
        6539: (e) => {
            e.exports = {
                button: "button-YKkCvwjV",
                content: "content-YKkCvwjV",
                "icon-only": "icon-only-YKkCvwjV",
                "color-brand": "color-brand-YKkCvwjV",
                "variant-primary": "variant-primary-YKkCvwjV",
                "variant-secondary": "variant-secondary-YKkCvwjV",
                "color-gray": "color-gray-YKkCvwjV",
                "color-green": "color-green-YKkCvwjV",
                "color-red": "color-red-YKkCvwjV",
                "size-xsmall": "size-xsmall-YKkCvwjV",
                "size-small": "size-small-YKkCvwjV",
                "size-medium": "size-medium-YKkCvwjV",
                "size-large": "size-large-YKkCvwjV",
                "size-xlarge": "size-xlarge-YKkCvwjV",
                "with-start-icon": "with-start-icon-YKkCvwjV",
                "with-end-icon": "with-end-icon-YKkCvwjV",
                "start-icon-wrap": "start-icon-wrap-YKkCvwjV",
                "end-icon-wrap": "end-icon-wrap-YKkCvwjV",
                animated: "animated-YKkCvwjV",
                stretch: "stretch-YKkCvwjV",
                grouped: "grouped-YKkCvwjV",
                "adjust-position": "adjust-position-YKkCvwjV",
                "first-row": "first-row-YKkCvwjV",
                "first-col": "first-col-YKkCvwjV",
                "no-corner-top-left": "no-corner-top-left-YKkCvwjV",
                "no-corner-top-right": "no-corner-top-right-YKkCvwjV",
                "no-corner-bottom-right": "no-corner-bottom-right-YKkCvwjV",
                "no-corner-bottom-left": "no-corner-bottom-left-YKkCvwjV",
            };
        },
        21103: (e) => {
            e.exports = {
                container: "container-pgo9gj31",
                "intent-default": "intent-default-pgo9gj31",
                focused: "focused-pgo9gj31",
                readonly: "readonly-pgo9gj31",
                disabled: "disabled-pgo9gj31",
                "with-highlight": "with-highlight-pgo9gj31",
                grouped: "grouped-pgo9gj31",
                "adjust-position": "adjust-position-pgo9gj31",
                "first-row": "first-row-pgo9gj31",
                "first-col": "first-col-pgo9gj31",
                stretch: "stretch-pgo9gj31",
                "font-size-medium": "font-size-medium-pgo9gj31",
                "font-size-large": "font-size-large-pgo9gj31",
                "size-small": "size-small-pgo9gj31",
                "size-medium": "size-medium-pgo9gj31",
                "size-large": "size-large-pgo9gj31",
                "intent-success": "intent-success-pgo9gj31",
                "intent-warning": "intent-warning-pgo9gj31",
                "intent-danger": "intent-danger-pgo9gj31",
                "intent-primary": "intent-primary-pgo9gj31",
                "border-none": "border-none-pgo9gj31",
                "border-thin": "border-thin-pgo9gj31",
                "border-thick": "border-thick-pgo9gj31",
                "no-corner-top-left": "no-corner-top-left-pgo9gj31",
                "no-corner-top-right": "no-corner-top-right-pgo9gj31",
                "no-corner-bottom-right": "no-corner-bottom-right-pgo9gj31",
                "no-corner-bottom-left": "no-corner-bottom-left-pgo9gj31",
                highlight: "highlight-pgo9gj31",
                shown: "shown-pgo9gj31",
            };
        },
        10306: (e) => {
            e.exports = {
                "inner-slot": "inner-slot-QpAAIiaV",
                interactive: "interactive-QpAAIiaV",
                icon: "icon-QpAAIiaV",
                "inner-middle-slot": "inner-middle-slot-QpAAIiaV",
                "before-slot": "before-slot-QpAAIiaV",
                "after-slot": "after-slot-QpAAIiaV",
            };
        },
        66579: (e) => {
            e.exports = {
                input: "input-uGWFLwEy",
                "with-start-slot": "with-start-slot-uGWFLwEy",
                "with-end-slot": "with-end-slot-uGWFLwEy",
            };
        },
        62092: (e) => {
            e.exports = {
                loader: "loader-MuZZSHRY",
                static: "static-MuZZSHRY",
                item: "item-MuZZSHRY",
                "tv-button-loader": "tv-button-loader-MuZZSHRY",
                medium: "medium-MuZZSHRY",
                small: "small-MuZZSHRY",
                black: "black-MuZZSHRY",
                white: "white-MuZZSHRY",
                gray: "gray-MuZZSHRY",
                primary: "primary-MuZZSHRY",
                "loader-initial": "loader-initial-MuZZSHRY",
                "loader-appear": "loader-appear-MuZZSHRY",
            };
        },
        96746: (e) => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
            };
        },
        41227: (e) => {
            e.exports = {
                actionButton: "actionButton-EGu7SRYD",
                small: "small-EGu7SRYD",
                hiddenTitle: "hiddenTitle-EGu7SRYD",
            };
        },
        36045: (e) => {
            e.exports = { label: "label-lgIqilXY", input: "input-lgIqilXY" };
        },
        87992: (e) => {
            e.exports = {
                popupDialog: "popupDialog-2AC2DTdZ",
                wrap: "wrap-2AC2DTdZ",
                main: "main-2AC2DTdZ",
                small: "small-2AC2DTdZ",
                title: "title-2AC2DTdZ",
                content: "content-2AC2DTdZ",
                html: "html-2AC2DTdZ",
                footer: "footer-2AC2DTdZ",
                close: "close-2AC2DTdZ",
            };
        },
        94720: (e, t, n) => {
            "use strict";
            n.d(t, { Button: () => C });
            var o = n(59496),
                r = n(97754),
                i = n(95604),
                s = n(9745),
                a = n(6539),
                l = n.n(a);
            function c(e) {
                const {
                        color: t = "brand",
                        size: n = "medium",
                        variant: o = "primary",
                        stretch: s = !1,
                        icon: a,
                        startIcon: c,
                        endIcon: u,
                        iconOnly: d = !1,
                        className: m,
                        isGrouped: p,
                        cellState: h,
                        disablePositionAdjustment: g = !1,
                    } = e,
                    f = (function (e) {
                        let t = "";
                        return (
                            0 !== e &&
                                (1 & e && (t = r(t, l()["no-corner-top-left"])),
                                2 & e && (t = r(t, l()["no-corner-top-right"])),
                                4 & e &&
                                    (t = r(t, l()["no-corner-bottom-right"])),
                                8 & e &&
                                    (t = r(t, l()["no-corner-bottom-left"]))),
                            t
                        );
                    })((0, i.getGroupCellRemoveRoundBorders)(h));
                return r(
                    m,
                    l().button,
                    l()["size-" + n],
                    l()["color-" + t],
                    l()["variant-" + o],
                    s && l().stretch,
                    (a || c) && l()["with-start-icon"],
                    u && l()["with-end-icon"],
                    d && l()["icon-only"],
                    f,
                    p && l().grouped,
                    p && !g && l()["adjust-position"],
                    p && h.isTop && l()["first-row"],
                    p && h.isLeft && l()["first-col"]
                );
            }
            function u(e) {
                const {
                        size: t,
                        startIcon: n,
                        icon: r,
                        iconOnly: i,
                        children: a,
                        endIcon: c,
                    } = e,
                    u = null != n ? n : r;
                return o.createElement(
                    o.Fragment,
                    null,
                    u &&
                        "xsmall" !== t &&
                        o.createElement(s.Icon, {
                            icon: u,
                            className: l()["start-icon-wrap"],
                        }),
                    a && o.createElement("span", { className: l().content }, a),
                    c &&
                        !i &&
                        "xsmall" !== t &&
                        o.createElement(s.Icon, {
                            icon: c,
                            className: l()["end-icon-wrap"],
                        })
                );
            }
            var d = n(86332),
                m = n(90186);
            function p(e) {
                const {
                    className: t,
                    color: n,
                    variant: o,
                    size: r,
                    stretch: i,
                    animated: s,
                    icon: a,
                    iconOnly: l,
                    startIcon: c,
                    endIcon: u,
                    ...d
                } = e;
                return {
                    ...d,
                    ...(0, m.filterDataProps)(e),
                    ...(0, m.filterAriaProps)(e),
                };
            }
            function h(e) {
                const { reference: t, ...n } = e,
                    {
                        isGrouped: r,
                        cellState: i,
                        disablePositionAdjustment: s,
                    } = (0, o.useContext)(d.ControlGroupContext),
                    a = c({
                        ...n,
                        isGrouped: r,
                        cellState: i,
                        disablePositionAdjustment: s,
                    });
                return o.createElement(
                    "button",
                    { ...p(n), className: a, ref: t },
                    o.createElement(u, { ...n })
                );
            }
            function g(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary";
                }
            }
            function f(e = "primary") {
                switch (e) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red";
                }
            }
            function v(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large";
                }
            }
            function w(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: o,
                    useFullWidth: r,
                    icon: i,
                    ...s
                } = e;
                return {
                    ...s,
                    color: f(t),
                    size: v(n),
                    variant: g(o),
                    stretch: r,
                    startIcon: i,
                };
            }
            function C(e) {
                return o.createElement(h, { ...w(e) });
            }
        },
        86332: (e, t, n) => {
            "use strict";
            n.d(t, { ControlGroupContext: () => o });
            const o = n(59496).createContext({
                isGrouped: !1,
                cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
            });
        },
        95604: (e, t, n) => {
            "use strict";
            function o(e) {
                let t = 0;
                return (
                    (e.isTop && e.isLeft) || (t += 1),
                    (e.isTop && e.isRight) || (t += 2),
                    (e.isBottom && e.isLeft) || (t += 8),
                    (e.isBottom && e.isRight) || (t += 4),
                    t
                );
            }
            n.d(t, { getGroupCellRemoveRoundBorders: () => o });
        },
        67029: (e, t, n) => {
            "use strict";
            n.d(t, { ControlSkeleton: () => w, InputClasses: () => g });
            var o = n(59496),
                r = n(97754),
                i = n(88537),
                s = n(66092),
                a = n(90186),
                l = n(86332),
                c = n(95604);
            var u = n(21103),
                d = n.n(u);
            function m(e) {
                let t = "";
                return (
                    0 !== e &&
                        (1 & e && (t = r(t, d()["no-corner-top-left"])),
                        2 & e && (t = r(t, d()["no-corner-top-right"])),
                        4 & e && (t = r(t, d()["no-corner-bottom-right"])),
                        8 & e && (t = r(t, d()["no-corner-bottom-left"]))),
                    t
                );
            }
            function p(e, t, n, o) {
                const {
                        removeRoundBorder: i,
                        className: s,
                        intent: a = "default",
                        borderStyle: l = "thin",
                        size: u,
                        highlight: p,
                        disabled: h,
                        readonly: g,
                        stretch: f,
                        noReadonlyStyles: v,
                        isFocused: w,
                    } = e,
                    C = m(
                        null != i ? i : (0, c.getGroupCellRemoveRoundBorders)(n)
                    );
                return r(
                    d().container,
                    d()["intent-" + a],
                    d()["border-" + l],
                    u && d()["size-" + u],
                    C,
                    p && d()["with-highlight"],
                    h && d().disabled,
                    g && !v && d().readonly,
                    w && d().focused,
                    f && d().stretch,
                    t && d().grouped,
                    !o && d()["adjust-position"],
                    n.isTop && d()["first-row"],
                    n.isLeft && d()["first-col"],
                    s
                );
            }
            function h(e, t) {
                const { highlight: n, highlightRemoveRoundBorder: o } = e;
                if (!n) return d().highlight;
                const i = m(
                    null != o ? o : (0, c.getGroupCellRemoveRoundBorders)(t)
                );
                return r(d().highlight, d().shown, i);
            }
            const g = {
                    FontSizeMedium: (0, i.ensureDefined)(
                        d()["font-size-medium"]
                    ),
                    FontSizeLarge: (0, i.ensureDefined)(d()["font-size-large"]),
                },
                f = { passive: !1 };
            function v(e, t) {
                const {
                        id: n,
                        role: r,
                        onFocus: i,
                        onBlur: c,
                        onMouseOver: u,
                        onMouseOut: d,
                        onMouseDown: m,
                        onMouseUp: g,
                        onKeyDown: v,
                        onClick: w,
                        tabIndex: C,
                        startSlot: b,
                        middleSlot: y,
                        endSlot: E,
                        onWheel: S,
                        onWheelNoPassive: x = null,
                    } = e,
                    {
                        isGrouped: k,
                        cellState: _,
                        disablePositionAdjustment: M = !1,
                    } = (0, o.useContext)(l.ControlGroupContext),
                    D = (function (e, t = null, n) {
                        const r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            s = (0, o.useCallback)(() => {
                                if (null === r.current || null === i.current)
                                    return;
                                const [e, t, n] = i.current;
                                null !== t &&
                                    r.current.addEventListener(e, t, n);
                            }, []),
                            a = (0, o.useCallback)(() => {
                                if (null === r.current || null === i.current)
                                    return;
                                const [e, t, n] = i.current;
                                null !== t &&
                                    r.current.removeEventListener(e, t, n);
                            }, []),
                            l = (0, o.useCallback)((e) => {
                                a(), (r.current = e), s();
                            }, []);
                        return (
                            (0, o.useEffect)(
                                () => ((i.current = [e, t, n]), s(), a),
                                [e, t, n]
                            ),
                            l
                        );
                    })("wheel", x, f);
                return o.createElement(
                    "span",
                    {
                        id: n,
                        role: r,
                        className: p(e, k, _, M),
                        tabIndex: C,
                        ref: (0, s.useMergedRefs)([t, D]),
                        onFocus: i,
                        onBlur: c,
                        onMouseOver: u,
                        onMouseOut: d,
                        onMouseDown: m,
                        onMouseUp: g,
                        onKeyDown: v,
                        onClick: w,
                        onWheel: S,
                        ...(0, a.filterDataProps)(e),
                        ...(0, a.filterAriaProps)(e),
                    },
                    b,
                    y,
                    E,
                    o.createElement("span", { className: h(e, _) })
                );
            }
            v.displayName = "ControlSkeleton";
            const w = o.forwardRef(v);
        },
        78274: (e, t, n) => {
            "use strict";
            n.d(t, {
                StartSlot: () => a,
                MiddleSlot: () => l,
                EndSlot: () => c,
                AfterSlot: () => u,
            });
            var o = n(59496),
                r = n(97754),
                i = n(10306),
                s = n.n(i);
            function a(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: i = !1,
                    children: a,
                } = e;
                return o.createElement(
                    "span",
                    {
                        className: r(
                            s()["inner-slot"],
                            n && s().interactive,
                            i && s().icon,
                            t
                        ),
                    },
                    a
                );
            }
            function l(e) {
                const { className: t, children: n } = e;
                return o.createElement(
                    "span",
                    {
                        className: r(
                            s()["inner-slot"],
                            s()["inner-middle-slot"],
                            t
                        ),
                    },
                    n
                );
            }
            function c(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: i = !1,
                    children: a,
                } = e;
                return o.createElement(
                    "span",
                    {
                        className: r(
                            s()["inner-slot"],
                            n && s().interactive,
                            i && s().icon,
                            t
                        ),
                    },
                    a
                );
            }
            function u(e) {
                const { className: t, children: n } = e;
                return o.createElement(
                    "span",
                    { className: r(s()["after-slot"], t) },
                    n
                );
            }
        },
        31261: (e, t, n) => {
            "use strict";
            n.d(t, { InputControl: () => w });
            var o = n(59496),
                r = n(97754),
                i = n(90186),
                s = n(47201),
                a = n(48907),
                l = n(66092),
                c = n(48027),
                u = n(29202),
                d = n(45812),
                m = n(67029),
                p = n(78274),
                h = n(66579),
                g = n.n(h);
            function f(e) {
                return !(0, i.isAriaAttribute)(e) && !(0, i.isDataAttribute)(e);
            }
            function v(e) {
                const {
                        id: t,
                        title: n,
                        role: s,
                        tabIndex: a,
                        placeholder: l,
                        name: c,
                        type: u,
                        value: d,
                        defaultValue: h,
                        draggable: v,
                        autoComplete: w,
                        autoFocus: C,
                        maxLength: b,
                        min: y,
                        max: E,
                        step: S,
                        pattern: x,
                        inputMode: k,
                        onSelect: _,
                        onFocus: M,
                        onBlur: D,
                        onKeyDown: j,
                        onKeyUp: T,
                        onKeyPress: N,
                        onChange: A,
                        onDragStart: R,
                        size: I = "medium",
                        className: B,
                        inputClassName: O,
                        disabled: L,
                        readonly: Y,
                        containerTabIndex: z,
                        startSlot: P,
                        endSlot: V,
                        reference: K,
                        containerReference: F,
                        onContainerFocus: Z,
                        ...H
                    } = e,
                    W = (0, i.filterProps)(H, f),
                    G = {
                        ...(0, i.filterAriaProps)(H),
                        ...(0, i.filterDataProps)(H),
                        id: t,
                        title: n,
                        role: s,
                        tabIndex: a,
                        placeholder: l,
                        name: c,
                        type: u,
                        value: d,
                        defaultValue: h,
                        draggable: v,
                        autoComplete: w,
                        autoFocus: C,
                        maxLength: b,
                        min: y,
                        max: E,
                        step: S,
                        pattern: x,
                        inputMode: k,
                        onSelect: _,
                        onFocus: M,
                        onBlur: D,
                        onKeyDown: j,
                        onKeyUp: T,
                        onKeyPress: N,
                        onChange: A,
                        onDragStart: R,
                    };
                return o.createElement(m.ControlSkeleton, {
                    ...W,
                    disabled: L,
                    readonly: Y,
                    tabIndex: z,
                    className: r(g().container, B),
                    size: I,
                    ref: F,
                    onFocus: Z,
                    startSlot: P,
                    middleSlot: o.createElement(
                        p.MiddleSlot,
                        null,
                        o.createElement("input", {
                            ...G,
                            className: r(
                                g().input,
                                O,
                                P && g()["with-start-slot"],
                                V && g()["with-end-slot"]
                            ),
                            disabled: L,
                            readOnly: Y,
                            ref: K,
                        })
                    ),
                    endSlot: V,
                });
            }
            function w(e) {
                e = (0, c.useControl)(e);
                const {
                        disabled: t,
                        autoSelectOnFocus: n,
                        tabIndex: r = 0,
                        onFocus: i,
                        onBlur: m,
                        reference: p,
                        containerReference: h = null,
                    } = e,
                    g = (0, o.useRef)(null),
                    f = (0, o.useRef)(null),
                    [w, C] = (0, u.useFocus)(),
                    b = t ? void 0 : w ? -1 : r,
                    y = t ? void 0 : w ? r : -1,
                    {
                        isMouseDown: E,
                        handleMouseDown: S,
                        handleMouseUp: x,
                    } = (0, d.useIsMouseDown)(),
                    k = (0, s.createSafeMulticastEventHandler)(
                        C.onFocus,
                        function (e) {
                            n &&
                                !E.current &&
                                (0, a.selectAllContent)(e.currentTarget);
                        },
                        i
                    ),
                    _ = (0, s.createSafeMulticastEventHandler)(C.onBlur, m),
                    M = (0, o.useCallback)(
                        (e) => {
                            (g.current = e),
                                p &&
                                    ("function" == typeof p && p(e),
                                    "object" == typeof p && (p.current = e));
                        },
                        [g, p]
                    );
                return o.createElement(v, {
                    ...e,
                    isFocused: w,
                    containerTabIndex: b,
                    tabIndex: y,
                    onContainerFocus: function (e) {
                        f.current === e.target &&
                            null !== g.current &&
                            g.current.focus();
                    },
                    onFocus: k,
                    onBlur: _,
                    reference: M,
                    containerReference: (0, l.useMergedRefs)([f, h]),
                    onMouseDown: S,
                    onMouseUp: x,
                });
            }
        },
        48027: (e, t, n) => {
            "use strict";
            n.d(t, { useControl: () => i });
            var o = n(47201),
                r = n(29202);
            function i(e) {
                const {
                        onFocus: t,
                        onBlur: n,
                        intent: i,
                        highlight: s,
                        disabled: a,
                    } = e,
                    [l, c] = (0, r.useFocus)(void 0, a),
                    u = (0, o.createSafeMulticastEventHandler)(
                        a ? void 0 : c.onFocus,
                        t
                    ),
                    d = (0, o.createSafeMulticastEventHandler)(
                        a ? void 0 : c.onBlur,
                        n
                    );
                return {
                    ...e,
                    intent: i || (l ? "primary" : "default"),
                    highlight: null != s ? s : l,
                    onFocus: u,
                    onBlur: d,
                };
            }
        },
        29202: (e, t, n) => {
            "use strict";
            n.d(t, { useFocus: () => r });
            var o = n(59496);
            function r(e, t) {
                const [n, r] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    t && n && r(!1);
                }, [t, n]);
                const i = {
                    onFocus: (0, o.useCallback)(
                        function (t) {
                            (void 0 !== e && e.current !== t.target) || r(!0);
                        },
                        [e]
                    ),
                    onBlur: (0, o.useCallback)(
                        function (t) {
                            (void 0 !== e && e.current !== t.target) || r(!1);
                        },
                        [e]
                    ),
                };
                return [n, i];
            }
        },
        76974: (e, t, n) => {
            "use strict";
            n.d(t, { useIsMounted: () => r });
            var o = n(59496);
            const r = () => {
                const e = (0, o.useRef)(!1);
                return (
                    (0, o.useEffect)(
                        () => (
                            (e.current = !0),
                            () => {
                                e.current = !1;
                            }
                        ),
                        []
                    ),
                    e
                );
            };
        },
        45812: (e, t, n) => {
            "use strict";
            n.d(t, { useIsMouseDown: () => r });
            var o = n(59496);
            function r() {
                const e = (0, o.useRef)(!1),
                    t = (0, o.useCallback)(() => {
                        e.current = !0;
                    }, [e]),
                    n = (0, o.useCallback)(() => {
                        e.current = !1;
                    }, [e]);
                return { isMouseDown: e, handleMouseDown: t, handleMouseUp: n };
            }
        },
        66092: (e, t, n) => {
            "use strict";
            n.d(t, { useMergedRefs: () => r });
            var o = n(59496);
            function r(e) {
                return (0, o.useCallback)(
                    (function (e) {
                        return (t) => {
                            e.forEach((e) => {
                                "function" == typeof e
                                    ? e(t)
                                    : null != e && (e.current = t);
                            });
                        };
                    })(e),
                    e
                );
            }
        },
        9745: (e, t, n) => {
            "use strict";
            n.d(t, { Icon: () => r });
            var o = n(59496);
            const r = o.forwardRef((e, t) => {
                const { icon: n = "", ...r } = e;
                return o.createElement("span", {
                    ...r,
                    ref: t,
                    dangerouslySetInnerHTML: { __html: n },
                });
            });
        },
        26996: (e, t, n) => {
            "use strict";
            n.d(t, { Loader: () => c });
            var o,
                r = n(59496),
                i = n(97754),
                s = n(74991),
                a = n(62092),
                l = n.n(a);
            !(function (e) {
                (e[(e.Initial = 0)] = "Initial"),
                    (e[(e.Appear = 1)] = "Appear"),
                    (e[(e.Active = 2)] = "Active");
            })(o || (o = {}));
            class c extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._stateChangeTimeout = null),
                        (this.state = { state: o.Initial });
                }
                render() {
                    const {
                            className: e,
                            color: t = "black",
                            size: n = "medium",
                            staticPosition: o,
                        } = this.props,
                        s = i(l().item, l()[t], l()[n]);
                    return r.createElement(
                        "span",
                        {
                            className: i(
                                l().loader,
                                o && l().static,
                                this._getStateClass(),
                                e
                            ),
                        },
                        r.createElement("span", { className: s }),
                        r.createElement("span", { className: s }),
                        r.createElement("span", { className: s })
                    );
                }
                componentDidMount() {
                    this.setState({ state: o.Appear }),
                        (this._stateChangeTimeout = setTimeout(() => {
                            this.setState({ state: o.Active });
                        }, 2 * s.dur));
                }
                componentWillUnmount() {
                    this._stateChangeTimeout &&
                        (clearTimeout(this._stateChangeTimeout),
                        (this._stateChangeTimeout = null));
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case o.Initial:
                            return l()["loader-initial"];
                        case o.Appear:
                            return l()["loader-appear"];
                        default:
                            return "";
                    }
                }
            }
        },
        90186: (e, t, n) => {
            "use strict";
            function o(e) {
                return i(e, s);
            }
            function r(e) {
                return i(e, a);
            }
            function i(e, t) {
                const n = Object.entries(e).filter(t),
                    o = {};
                for (const [e, t] of n) o[e] = t;
                return o;
            }
            function s(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n;
            }
            function a(e) {
                return 0 === e[0].indexOf("aria-");
            }
            n.d(t, {
                filterDataProps: () => o,
                filterAriaProps: () => r,
                filterProps: () => i,
                isDataAttribute: () => s,
                isAriaAttribute: () => a,
            });
        },
        48907: (e, t, n) => {
            "use strict";
            function o(e) {
                null !== e && e.setSelectionRange(0, e.value.length);
            }
            n.d(t, { selectAllContent: () => o });
        },
        47201: (e, t, n) => {
            "use strict";
            function o(...e) {
                return (t) => {
                    for (const n of e) void 0 !== n && n(t);
                };
            }
            n.d(t, { createSafeMulticastEventHandler: () => o });
        },
        39640: (e, t, n) => {
            "use strict";
            function o(e, t, n, o, r) {
                function i(r) {
                    if (e > r.timeStamp) return;
                    const i = r.target;
                    void 0 !== n &&
                        null !== t &&
                        null !== i &&
                        i.ownerDocument === o &&
                        (t.contains(i) || n(r));
                }
                return (
                    r.click && o.addEventListener("click", i, !1),
                    r.mouseDown && o.addEventListener("mousedown", i, !1),
                    r.touchEnd && o.addEventListener("touchend", i, !1),
                    r.touchStart && o.addEventListener("touchstart", i, !1),
                    () => {
                        o.removeEventListener("click", i, !1),
                            o.removeEventListener("mousedown", i, !1),
                            o.removeEventListener("touchend", i, !1),
                            o.removeEventListener("touchstart", i, !1);
                    }
                );
            }
            n.d(t, { addOutsideEventListener: () => o });
        },
        99054: (e, t, n) => {
            "use strict";
            n.d(t, { setFixedBodyState: () => c });
            const o = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const n = document.createElement("div"),
                            o = n.style;
                        (o.visibility = "hidden"),
                            (o.width = "100px"),
                            (o.msOverflowStyle = "scrollbar"),
                            document.body.appendChild(n);
                        const r = n.offsetWidth;
                        n.style.overflow = "scroll";
                        const i = document.createElement("div");
                        (i.style.width = "100%"), n.appendChild(i);
                        const s = i.offsetWidth;
                        null === (t = n.parentNode) ||
                            void 0 === t ||
                            t.removeChild(n),
                            (e = r - s);
                    }
                    return e;
                };
            })();
            function r(e, t, n) {
                null !== e && e.style.setProperty(t, n);
            }
            function i(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t);
            }
            function s(e, t) {
                return parseInt(i(e, t));
            }
            let a = 0,
                l = !1;
            function c(e) {
                const { body: t } = document,
                    n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++a) {
                    const e = i(t, "overflow"),
                        a = s(t, "padding-right");
                    "hidden" !== e.toLowerCase() &&
                        t.scrollHeight > t.offsetHeight &&
                        (r(n, "right", o() + "px"),
                        (t.style.paddingRight = a + o() + "px"),
                        (l = !0)),
                        t.classList.add("i-no-scroll");
                } else if (
                    !e &&
                    a > 0 &&
                    0 == --a &&
                    (t.classList.remove("i-no-scroll"), l)
                ) {
                    r(n, "right", "0px");
                    let e = 0;
                    0,
                        t.scrollHeight <= t.clientHeight && (e -= o()),
                        (t.style.paddingRight = (e < 0 ? 0 : e) + "px"),
                        (l = !1);
                }
            }
        },
        24437: (e, t, n) => {
            "use strict";
            n.d(t, { DialogBreakpoints: () => r });
            var o = n(96746);
            const r = {
                SmallHeight: o["small-height-breakpoint"],
                TabletSmall: o["tablet-small-breakpoint"],
                TabletNormal: o["tablet-normal-breakpoint"],
            };
        },
        70493: (e, t, n) => {
            "use strict";
            n.r(t),
                n.d(t, {
                    confirmModule: () => R,
                    renameModule: () => I,
                    showSimpleDialog: () => O,
                    warningModule: () => B,
                });
            var o = n(59496),
                r = n(28353),
                i = n(97754),
                s = n(9745),
                a = n(76422),
                l = n(63016),
                c = n(68335),
                u = n(90692),
                d = n(52092),
                m = n(24437),
                p = n(86656),
                h = n(94720),
                g = n(26996),
                f = n(88537),
                v = n(76974),
                w = n(50655);
            const C = o.createContext({
                isSmallTablet: !1,
                dialogCloseHandler: () => {},
            });
            var b = n(41227);
            function y(e) {
                const {
                        disabled: t,
                        name: n,
                        title: r,
                        appearance: s,
                        intent: a,
                        handler: l,
                        reference: c,
                    } = e,
                    { isSmallTablet: u, dialogCloseHandler: d } = (0,
                    o.useContext)(C),
                    m = (0, f.ensureNotNull)((0, o.useContext)(w.SlotContext)),
                    p = (0, v.useIsMounted)(),
                    [y, E] = (0, o.useState)(!1);
                return o.createElement(
                    h.Button,
                    {
                        disabled: t,
                        reference: c,
                        className: i(b.actionButton, u && b.small),
                        name: n,
                        size: u ? "l" : void 0,
                        appearance: s,
                        intent: a,
                        onClick: function () {
                            if (y) return;
                            const e = l({ dialogClose: d, innerManager: m });
                            e &&
                                (E(!0),
                                e.then(() => {
                                    p.current && E(!1);
                                }));
                        },
                    },
                    o.createElement(
                        "span",
                        { className: i(y && b.hiddenTitle) },
                        r
                    ),
                    y && o.createElement(g.Loader, { color: "white" })
                );
            }
            var E = n(37257),
                S = n(87992);
            function x(e) {
                const {
                    title: t,
                    onClose: n,
                    actions: r,
                    dataName: h,
                    popupDialogClassName: g,
                    backdrop: f,
                    closeOnOutsideClick: v = !0,
                } = e;
                (0, o.useEffect)(
                    () => (
                        a.subscribe(
                            d.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                            n,
                            null
                        ),
                        () => {
                            a.unsubscribe(
                                d.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                                n,
                                null
                            );
                        }
                    ),
                    [n]
                );
                const [w, b] = (0, o.useState)(!0),
                    x = (0, o.useRef)(null);
                return o.createElement(
                    u.MatchMedia,
                    { rule: m.DialogBreakpoints.TabletSmall },
                    (a) =>
                        o.createElement(
                            C.Provider,
                            {
                                value: {
                                    isSmallTablet: a,
                                    dialogCloseHandler: n,
                                },
                            },
                            o.createElement(
                                l.PopupDialog,
                                {
                                    className: i(S.popupDialog, g),
                                    isOpened: w,
                                    backdrop: f,
                                    onClickBackdrop: _,
                                    onClickOutside: v ? _ : void 0,
                                    onKeyDown: k,
                                    autofocus: !0,
                                    fixedBody: !0,
                                },
                                o.createElement(
                                    "div",
                                    { className: S.wrap, "data-name": h },
                                    o.createElement(
                                        "div",
                                        { className: i(S.main, a && S.small) },
                                        o.createElement(
                                            "div",
                                            {
                                                className: i(
                                                    S.title,
                                                    a && S.small
                                                ),
                                            },
                                            t
                                        ),
                                        (function (t) {
                                            if ("html" in e)
                                                return o.createElement(
                                                    p.TouchScrollContainer,
                                                    {
                                                        className: i(
                                                            S.content,
                                                            t && S.small,
                                                            S.html
                                                        ),
                                                        dangerouslySetInnerHTML:
                                                            { __html: e.html },
                                                    }
                                                );
                                            if ("content" in e)
                                                return o.createElement(
                                                    p.TouchScrollContainer,
                                                    {
                                                        className: i(
                                                            S.content,
                                                            t && S.small
                                                        ),
                                                    },
                                                    e.content
                                                );
                                            return null;
                                        })(a),
                                        r &&
                                            r.length > 0 &&
                                            o.createElement(
                                                "div",
                                                {
                                                    className: i(
                                                        S.footer,
                                                        a && S.small
                                                    ),
                                                },
                                                r.map((e, t) =>
                                                    o.createElement(y, {
                                                        ...e,
                                                        key: e.name,
                                                        reference:
                                                            0 === t
                                                                ? x
                                                                : void 0,
                                                    })
                                                )
                                            )
                                    ),
                                    o.createElement(s.Icon, {
                                        className: i(S.close, a && S.small),
                                        icon: E,
                                        onClick: _,
                                        "data-name": "close",
                                        "data-role": "button",
                                    })
                                )
                            )
                        )
                );
                function k(e) {
                    switch ((0, c.hashFromEvent)(e)) {
                        case 27:
                            w && (e.preventDefault(), n());
                            break;
                        case 13:
                            if (w && r && r.length) {
                                e.preventDefault();
                                const t = x.current;
                                t && t.click();
                            }
                    }
                }
                function _() {
                    b(!1), n();
                }
            }
            function k(e) {
                return "html" in e ? { html: e.html } : { content: e.text };
            }
            var _ = n(31261),
                M = n(36045);
            function D(e) {
                const {
                        maxLength: t,
                        value: n,
                        placeholder: r,
                        onValueChange: i,
                        nameInputRef: s,
                    } = e,
                    { isSmallTablet: a } = (0, o.useContext)(C),
                    l = o.useRef(null);
                return (
                    (0, o.useLayoutEffect)(() => {
                        l.current && l.current.select();
                    }, []),
                    o.createElement(
                        o.Fragment,
                        null,
                        (function () {
                            if ("content" in e)
                                return o.createElement(
                                    "div",
                                    { className: M.label },
                                    e.content
                                );
                            if ("html" in e)
                                return o.createElement("div", {
                                    className: M.label,
                                    dangerouslySetInnerHTML: { __html: e.html },
                                });
                            return null;
                        })(),
                        o.createElement(_.InputControl, {
                            inputClassName: M.input,
                            autoComplete: "no",
                            size: a ? "large" : void 0,
                            reference: function (e) {
                                (l.current = e), s && (s.current = e);
                            },
                            value: n,
                            placeholder: r,
                            maxLength: t,
                            onChange: function (e) {
                                i(e.currentTarget.value);
                            },
                        })
                    )
                );
            }
            function j(e) {
                return Boolean(e.trim());
            }
            function T(e) {
                const { buttonText: t, intentButton: n, actions: o } = e,
                    i = [
                        {
                            name: "ok",
                            title: t || (0, r.t)("Ok"),
                            intent: n,
                            handler: ({ dialogClose: e }) => {
                                e();
                            },
                        },
                    ];
                return o && o.forEach((e) => i.push(e)), i;
            }
            var N = n(87995);
            const A = new (n(51826).DialogsOpenerManager)();
            const R = function (e) {
                    const {
                            title: t,
                            onClose: n = () => {},
                            mainButtonText: i,
                            mainButtonIntent: s,
                            cancelButtonText: a,
                            closeOnOutsideClick: l,
                            onConfirm: c,
                            onCancel: u,
                        } = e,
                        d = k(e);
                    return o.createElement(x, {
                        ...d,
                        title: t || (0, r.t)("Confirmation"),
                        onClose: n,
                        actions: [
                            {
                                name: "yes",
                                title: i || (0, r.t)("Yes"),
                                intent: s || "success",
                                handler: c,
                            },
                            {
                                name: "no",
                                title: a || (0, r.t)("No"),
                                appearance: "stroke",
                                intent: "default",
                                handler: (e) => {
                                    u ? u(e) : e.dialogClose();
                                },
                            },
                        ],
                        dataName: "confirm-dialog",
                        closeOnOutsideClick: l,
                    });
                },
                I = function (e) {
                    const {
                            title: t,
                            maxLength: n,
                            initValue: i,
                            placeholder: s,
                            onClose: a = () => {},
                            mainButtonText: l,
                            mainButtonIntent: c,
                            cancelButtonText: u,
                            validator: d = j,
                            onRename: m,
                        } = e,
                        p = (0, o.useRef)(null),
                        [h, g] = (0, o.useState)(i || ""),
                        [f, v] = (0, o.useState)(() => d(h)),
                        w = k(e);
                    return o.createElement(x, {
                        title: t || (0, r.t)("Rename"),
                        content: o.createElement(D, {
                            ...w,
                            nameInputRef: p,
                            maxLength: n,
                            placeholder: s,
                            value: h,
                            onValueChange: function (e) {
                                g(e), v(d(e));
                            },
                        }),
                        onClose: a,
                        actions: [
                            {
                                disabled: !f,
                                name: "save",
                                title: l || (0, r.t)("Save"),
                                intent: c || "primary",
                                handler: ({
                                    dialogClose: e,
                                    innerManager: t,
                                }) =>
                                    m({
                                        newValue: h,
                                        focusInput: C,
                                        dialogClose: e,
                                        innerManager: t,
                                    }),
                            },
                            {
                                name: "cancel",
                                title: u || (0, r.t)("Cancel"),
                                appearance: "stroke",
                                intent: "default",
                                handler: ({ dialogClose: e }) => {
                                    e();
                                },
                            },
                        ],
                        dataName: "rename-dialog",
                    });
                    function C() {
                        p.current && p.current.focus();
                    }
                },
                B = function (e) {
                    const {
                            title: t,
                            closeOnOutsideClick: n,
                            onClose: i = () => {},
                        } = e,
                        s = k(e);
                    return o.createElement(x, {
                        ...s,
                        title: t || (0, r.t)("Warning"),
                        onClose: i,
                        actions: T(e),
                        dataName: "warning-dialog",
                        closeOnOutsideClick: n,
                    });
                },
                O = function (e, t, n) {
                    const { title: r } = e,
                        i = `${r}_${"text" in e ? e.text : e.html}`;
                    if (A.isOpened(i))
                        return (0, f.ensureDefined)(A.getDialogPayload(i))
                            .closeHandler;
                    const s = document.createElement("div"),
                        a = () => {
                            var t;
                            null === (t = e.onClose) ||
                                void 0 === t ||
                                t.call(e),
                                N.unmountComponentAtNode(s),
                                A.setAsClosed(i);
                        };
                    return (
                        N.render(
                            o.createElement(
                                w.SlotContext.Provider,
                                { value: n || null },
                                o.createElement(t, { ...e, onClose: a })
                            ),
                            s
                        ),
                        A.setAsOpened(i, { closeHandler: a }),
                        a
                    );
                };
        },
        51826: (e, t, n) => {
            "use strict";
            n.d(t, {
                DialogsOpenerManager: () => o,
                dialogsOpenerManager: () => r,
            });
            class o {
                constructor() {
                    this._storage = new Map();
                }
                setAsOpened(e, t) {
                    this._storage.set(e, t);
                }
                setAsClosed(e) {
                    this._storage.delete(e);
                }
                isOpened(e) {
                    return this._storage.has(e);
                }
                getDialogPayload(e) {
                    return this._storage.get(e);
                }
            }
            const r = new o();
        },
        58095: (e, t, n) => {
            "use strict";
            n.d(t, { useOutsideEvent: () => i });
            var o = n(59496),
                r = n(39640);
            function i(e) {
                const {
                        click: t,
                        mouseDown: n,
                        touchEnd: i,
                        touchStart: s,
                        handler: a,
                        reference: l,
                        ownerDocument: c = document,
                    } = e,
                    u = (0, o.useRef)(null),
                    d = (0, o.useRef)(new CustomEvent("timestamp").timeStamp);
                return (
                    (0, o.useLayoutEffect)(() => {
                        const e = {
                                click: t,
                                mouseDown: n,
                                touchEnd: i,
                                touchStart: s,
                            },
                            o = l ? l.current : u.current;
                        return (0, r.addOutsideEventListener)(
                            d.current,
                            o,
                            a,
                            c,
                            e
                        );
                    }, [t, n, i, s, a]),
                    l || u
                );
            }
        },
        90692: (e, t, n) => {
            "use strict";
            n.d(t, { MatchMedia: () => r });
            var o = n(59496);
            class r extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = () => {
                            this.forceUpdate();
                        }),
                        (this.state = {
                            query: window.matchMedia(this.props.rule),
                        });
                }
                componentDidMount() {
                    this._subscribe(this.state.query);
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query &&
                        (this._unsubscribe(t.query),
                        this._subscribe(this.state.query));
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query);
                }
                render() {
                    return this.props.children(this.state.query.matches);
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media
                        ? { query: window.matchMedia(e.rule) }
                        : null;
                }
                _subscribe(e) {
                    e.addListener(this._handleChange);
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange);
                }
            }
        },
        88216: (e, t, n) => {
            "use strict";
            n.d(t, { OverlapManager: () => i, getRootOverlapManager: () => a });
            var o = n(88537);
            class r {
                constructor() {
                    this._storage = [];
                }
                add(e) {
                    this._storage.push(e);
                }
                remove(e) {
                    this._storage = this._storage.filter((t) => e !== t);
                }
                has(e) {
                    return this._storage.includes(e);
                }
                getItems() {
                    return this._storage;
                }
            }
            class i {
                constructor(e = document) {
                    (this._storage = new r()),
                        (this._windows = new Map()),
                        (this._index = 0),
                        (this._document = e),
                        (this._container = e.createDocumentFragment());
                }
                setContainer(e) {
                    const t = this._container,
                        n =
                            null === e
                                ? this._document.createDocumentFragment()
                                : e;
                    !(function (e, t) {
                        Array.from(e.childNodes).forEach((e) => {
                            e.nodeType === Node.ELEMENT_NODE &&
                                t.appendChild(e);
                        });
                    })(t, n),
                        (this._container = n);
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e);
                }
                ensureWindow(
                    e,
                    t = { position: "fixed", direction: "normal" }
                ) {
                    const n = this._windows.get(e);
                    if (void 0 !== n) return n;
                    this.registerWindow(e);
                    const o = this._document.createElement("div");
                    if (
                        ((o.style.position = t.position),
                        (o.style.zIndex = this._index.toString()),
                        (o.dataset.id = e),
                        void 0 !== t.index)
                    ) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(o);
                        else if (t.index <= 0)
                            this._container.insertBefore(
                                o,
                                this._container.firstChild
                            );
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(o, e);
                        }
                    } else
                        "reverse" === t.direction
                            ? this._container.insertBefore(
                                  o,
                                  this._container.firstChild
                              )
                            : this._container.appendChild(o);
                    return this._windows.set(e, o), ++this._index, o;
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t &&
                        (null !== t.parentElement &&
                            t.parentElement.removeChild(t),
                        this._windows.delete(e));
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0");
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this
                            ._index).toString();
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e);
                }
            }
            const s = new WeakMap();
            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, o.ensureDefined)(s.get(t));
                {
                    const t = new i(e),
                        n = (function (e) {
                            const t = e.createElement("div");
                            return (
                                (t.style.position = "absolute"),
                                (t.style.zIndex = (150).toString()),
                                (t.style.top = "0px"),
                                (t.style.left = "0px"),
                                (t.id = "overlap-manager-root"),
                                t
                            );
                        })(e);
                    return (
                        s.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                    );
                }
            }
        },
        65718: (e, t, n) => {
            "use strict";
            n.d(t, { Portal: () => l, PortalContext: () => c });
            var o = n(59496),
                r = n(87995),
                i = n(9423),
                s = n(88216),
                a = n(50655);
            class l extends o.PureComponent {
                constructor() {
                    super(...arguments), (this._uuid = (0, i.guid)());
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid);
                }
                render() {
                    const e = this._manager().ensureWindow(
                        this._uuid,
                        this.props.layerOptions
                    );
                    return (
                        (e.style.top = this.props.top || ""),
                        (e.style.bottom = this.props.bottom || ""),
                        (e.style.left = this.props.left || ""),
                        (e.style.right = this.props.right || ""),
                        (e.style.pointerEvents =
                            this.props.pointerEvents || ""),
                        r.createPortal(
                            o.createElement(
                                c.Provider,
                                { value: this },
                                this.props.children
                            ),
                            e
                        )
                    );
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid);
                }
                _manager() {
                    return null === this.context
                        ? (0, s.getRootOverlapManager)()
                        : this.context;
                }
            }
            l.contextType = a.SlotContext;
            const c = o.createContext(null);
        },
        50655: (e, t, n) => {
            "use strict";
            n.d(t, { Slot: () => r, SlotContext: () => i });
            var o = n(59496);
            class r extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0,
                        },
                        ref: this.props.reference,
                    });
                }
            }
            const i = o.createContext(null);
        },
        86656: (e, t, n) => {
            "use strict";
            n.d(t, { TouchScrollContainer: () => a });
            var o = n(59496),
                r = n(59142),
                i = n(88537),
                s = n(49483);
            function a(e) {
                const { reference: t, children: n, ...i } = e,
                    a = (0, o.useRef)(null),
                    c = (0, o.useCallback)(
                        (e) => {
                            t && (t.current = e),
                                s.CheckMobile.iOS() &&
                                    (null !== a.current &&
                                        (0, r.enableBodyScroll)(a.current),
                                    (a.current = e),
                                    null !== a.current &&
                                        (0, r.disableBodyScroll)(a.current, {
                                            allowTouchMove: l(a),
                                        }));
                        },
                        [t]
                    );
                return o.createElement("div", { ref: c, ...i }, n);
            }
            function l(e) {
                return (t) => {
                    const n = (0, i.ensureNotNull)(e.current),
                        o = document.activeElement;
                    return (
                        !n.contains(t) ||
                        (null !== o && n.contains(o) && o.contains(t))
                    );
                };
            }
        },
        37257: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
        },
    },
]);
