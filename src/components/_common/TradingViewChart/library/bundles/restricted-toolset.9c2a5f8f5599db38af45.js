(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [5516, 3718],
    {
        59142: function (e, t) {
            var a, n, i;
            (n = [t]),
                void 0 ===
                    (i =
                        "function" ==
                        typeof (a = function (e) {
                            "use strict";
                            function t(e) {
                                if (Array.isArray(e)) {
                                    for (
                                        var t = 0, a = Array(e.length);
                                        t < e.length;
                                        t++
                                    )
                                        a[t] = e[t];
                                    return a;
                                }
                                return Array.from(e);
                            }
                            Object.defineProperty(e, "__esModule", {
                                value: !0,
                            });
                            var a = !1;
                            if ("undefined" != typeof window) {
                                var n = {
                                    get passive() {
                                        a = !0;
                                    },
                                };
                                window.addEventListener("testPassive", null, n),
                                    window.removeEventListener(
                                        "testPassive",
                                        null,
                                        n
                                    );
                            }
                            var i =
                                    "undefined" != typeof window &&
                                    window.navigator &&
                                    window.navigator.platform &&
                                    /iP(ad|hone|od)/.test(
                                        window.navigator.platform
                                    ),
                                s = [],
                                o = !1,
                                l = -1,
                                r = void 0,
                                c = void 0,
                                h = function (e) {
                                    return s.some(function (t) {
                                        return !(
                                            !t.options.allowTouchMove ||
                                            !t.options.allowTouchMove(e)
                                        );
                                    });
                                },
                                d = function (e) {
                                    var t = e || window.event;
                                    return (
                                        !!h(t.target) ||
                                        1 < t.touches.length ||
                                        (t.preventDefault && t.preventDefault(),
                                        !1)
                                    );
                                },
                                u = function () {
                                    setTimeout(function () {
                                        void 0 !== c &&
                                            ((document.body.style.paddingRight =
                                                c),
                                            (c = void 0)),
                                            void 0 !== r &&
                                                ((document.body.style.overflow =
                                                    r),
                                                (r = void 0));
                                    });
                                };
                            (e.disableBodyScroll = function (e, n) {
                                if (i) {
                                    if (!e)
                                        return void console.error(
                                            "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                                        );
                                    if (
                                        e &&
                                        !s.some(function (t) {
                                            return t.targetElement === e;
                                        })
                                    ) {
                                        var u = {
                                            targetElement: e,
                                            options: n || {},
                                        };
                                        (s = [].concat(t(s), [u])),
                                            (e.ontouchstart = function (e) {
                                                1 === e.targetTouches.length &&
                                                    (l =
                                                        e.targetTouches[0]
                                                            .clientY);
                                            }),
                                            (e.ontouchmove = function (t) {
                                                var a, n, i, s;
                                                1 === t.targetTouches.length &&
                                                    ((n = e),
                                                    (s =
                                                        (a = t).targetTouches[0]
                                                            .clientY - l),
                                                    !h(a.target) &&
                                                        ((n &&
                                                            0 === n.scrollTop &&
                                                            0 < s) ||
                                                        ((i = n) &&
                                                            i.scrollHeight -
                                                                i.scrollTop <=
                                                                i.clientHeight &&
                                                            s < 0)
                                                            ? d(a)
                                                            : a.stopPropagation()));
                                            }),
                                            o ||
                                                (document.addEventListener(
                                                    "touchmove",
                                                    d,
                                                    a ? { passive: !1 } : void 0
                                                ),
                                                (o = !0));
                                    }
                                } else {
                                    (v = n),
                                        setTimeout(function () {
                                            if (void 0 === c) {
                                                var e =
                                                        !!v &&
                                                        !0 ===
                                                            v.reserveScrollBarGap,
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
                                            void 0 === r &&
                                                ((r =
                                                    document.body.style
                                                        .overflow),
                                                (document.body.style.overflow =
                                                    "hidden"));
                                        });
                                    var m = {
                                        targetElement: e,
                                        options: n || {},
                                    };
                                    s = [].concat(t(s), [m]);
                                }
                                var v;
                            }),
                                (e.clearAllBodyScrollLocks = function () {
                                    i
                                        ? (s.forEach(function (e) {
                                              (e.targetElement.ontouchstart =
                                                  null),
                                                  (e.targetElement.ontouchmove =
                                                      null);
                                          }),
                                          o &&
                                              (document.removeEventListener(
                                                  "touchmove",
                                                  d,
                                                  a ? { passive: !1 } : void 0
                                              ),
                                              (o = !1)),
                                          (s = []),
                                          (l = -1))
                                        : (u(), (s = []));
                                }),
                                (e.enableBodyScroll = function (e) {
                                    if (i) {
                                        if (!e)
                                            return void console.error(
                                                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                                            );
                                        (e.ontouchstart = null),
                                            (e.ontouchmove = null),
                                            (s = s.filter(function (t) {
                                                return t.targetElement !== e;
                                            })),
                                            o &&
                                                0 === s.length &&
                                                (document.removeEventListener(
                                                    "touchmove",
                                                    d,
                                                    a ? { passive: !1 } : void 0
                                                ),
                                                (o = !1));
                                    } else
                                        1 === s.length &&
                                        s[0].targetElement === e
                                            ? (u(), (s = []))
                                            : (s = s.filter(function (t) {
                                                  return t.targetElement !== e;
                                              }));
                                });
                        })
                            ? a.apply(t, n)
                            : a) || (e.exports = i);
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
        26390: (e) => {
            e.exports = {
                switcher: "switcher-GT7Z98Io",
                "disable-cursor-pointer": "disable-cursor-pointer-GT7Z98Io",
                input: "input-GT7Z98Io",
                "thumb-wrapper": "thumb-wrapper-GT7Z98Io",
                "size-small": "size-small-GT7Z98Io",
                "size-large": "size-large-GT7Z98Io",
                "intent-default": "intent-default-GT7Z98Io",
                "disable-active-state-styles":
                    "disable-active-state-styles-GT7Z98Io",
                "intent-select": "intent-select-GT7Z98Io",
                track: "track-GT7Z98Io",
                thumb: "thumb-GT7Z98Io",
            };
        },
        50789: (e) => {
            e.exports = {
                summary: "summary-hk3Mmxts",
                hovered: "hovered-hk3Mmxts",
                caret: "caret-hk3Mmxts",
            };
        },
        28857: (e) => {
            e.exports = {
                wrapper: "wrapper-OGmb0GMo",
                labelRow: "labelRow-OGmb0GMo",
                label: "label-OGmb0GMo",
                labelHint: "labelHint-OGmb0GMo",
                labelOn: "labelOn-OGmb0GMo",
            };
        },
        31405: (e) => {
            e.exports = {
                wrapper: "wrapper-IbP2mmCe",
                hovered: "hovered-IbP2mmCe",
                labelRow: "labelRow-IbP2mmCe",
                label: "label-IbP2mmCe",
                labelHint: "labelHint-IbP2mmCe",
                labelOn: "labelOn-IbP2mmCe",
            };
        },
        39592: (e) => {
            e.exports = {
                button: "button-Rsu8YfBx",
                withText: "withText-Rsu8YfBx",
                withoutText: "withoutText-Rsu8YfBx",
            };
        },
        64547: (e) => {
            e.exports = { button: "button-SS83RYhy" };
        },
        69698: (e) => {
            e.exports = {
                form: "form-obOlo718",
                interacting: "interacting-obOlo718",
                input: "input-obOlo718",
                menu: "menu-obOlo718",
                add: "add-obOlo718",
                hovered: "hovered-obOlo718",
                hover: "hover-obOlo718",
                wrap: "wrap-obOlo718",
            };
        },
        59174: (e) => {
            e.exports = { spinnerWrap: "spinnerWrap-OjdCXkZp" };
        },
        78966: (e) => {
            e.exports = { title: "title-mAu74Mtg" };
        },
        936: (e) => {
            e.exports = {
                button: "button-2Vex9IkU",
                first: "first-2Vex9IkU",
                last: "last-2Vex9IkU",
            };
        },
        82832: (e) => {
            e.exports = { wrap: "wrap-H6XRnLaC" };
        },
        91887: (e) => {
            e.exports = { hidden: "hidden-vHZuIWsw" };
        },
        75492: (e) => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
                item: "item-AFYo6gMo",
                withIcon: "withIcon-AFYo6gMo",
                shortcut: "shortcut-AFYo6gMo",
                loading: "loading-AFYo6gMo",
                icon: "icon-AFYo6gMo",
            };
        },
        19450: (e) => {
            e.exports = { button: "button-OSzyNVEZ", menu: "menu-OSzyNVEZ" };
        },
        33191: (e) => {
            e.exports = {
                customTradingViewStyleButton:
                    "customTradingViewStyleButton-fjLcMxZj",
                withoutIcon: "withoutIcon-fjLcMxZj",
            };
        },
        64142: (e) => {
            e.exports = {
                dropdown: "dropdown-E3UQYoRD",
                label: "label-E3UQYoRD",
                smallWidthTitle: "smallWidthTitle-E3UQYoRD",
                smallWidthMenuItem: "smallWidthMenuItem-E3UQYoRD",
                smallWidthWrapper: "smallWidthWrapper-E3UQYoRD",
            };
        },
        87906: (e) => {
            e.exports = {
                value: "value-e0RYyFXU",
                selected: "selected-e0RYyFXU",
            };
        },
        32062: (e) => {
            e.exports = { smallWidthMenuItem: "smallWidthMenuItem-xvK6HzAF" };
        },
        6500: (e) => {
            e.exports = {
                button: "button-cXbh8Gcw",
                first: "first-cXbh8Gcw",
                last: "last-cXbh8Gcw",
                newStyles: "newStyles-cXbh8Gcw",
                menu: "menu-cXbh8Gcw",
                dropdown: "dropdown-cXbh8Gcw",
                menuContent: "menuContent-cXbh8Gcw",
                section: "section-cXbh8Gcw",
                smallTabletSectionTitle: "smallTabletSectionTitle-cXbh8Gcw",
                addCustomInterval: "addCustomInterval-cXbh8Gcw",
                hovered: "hovered-cXbh8Gcw",
            };
        },
        76521: (e) => {
            e.exports = { button: "button-CiwmljCL" };
        },
        4050: (e) => {
            e.exports = {
                button: "button-mEQw2hrh",
                isDisabled: "isDisabled-mEQw2hrh",
                text: "text-mEQw2hrh",
            };
        },
        96141: (e) => {
            e.exports = {
                opened: "opened-SUlSleuH",
                hover: "hover-SUlSleuH",
                autoSaveWrapper: "autoSaveWrapper-SUlSleuH",
                sharingWrapper: "sharingWrapper-SUlSleuH",
                button: "button-SUlSleuH",
                buttonSmallPadding: "buttonSmallPadding-SUlSleuH",
                hintPlaceHolder: "hintPlaceHolder-SUlSleuH",
                smallHintPlaceHolder: "smallHintPlaceHolder-SUlSleuH",
                popupItemRowTabletSmall: "popupItemRowTabletSmall-SUlSleuH",
                shortcut: "shortcut-SUlSleuH",
            };
        },
        72597: (e) => {
            e.exports = {
                button: "button-TTaQ4aBF",
                text: "text-TTaQ4aBF",
                logo: "logo-TTaQ4aBF",
            };
        },
        67397: (e) => {
            e.exports = {
                button: "button-IQnsk0hp",
                largeLeftPadding: "largeLeftPadding-IQnsk0hp",
                text: "text-IQnsk0hp",
                uppercase: "uppercase-IQnsk0hp",
            };
        },
        75668: (e) => {
            e.exports = { description: "description-Q7biiIOG" };
        },
        52157: (e) => {
            e.exports = { item: "item-UfrwNtjY", round: "round-UfrwNtjY" };
        },
        41939: (e) => {
            e.exports = {
                wrap: "wrap-hoa11YwL",
                titleWrap: "titleWrap-hoa11YwL",
                indicators: "indicators-hoa11YwL",
                title: "title-hoa11YwL",
                icon: "icon-hoa11YwL",
                text: "text-hoa11YwL",
                titleTabletSmall: "titleTabletSmall-hoa11YwL",
                labelRow: "labelRow-hoa11YwL",
                label: "label-hoa11YwL",
            };
        },
        14621: (e) => {
            e.exports = {
                labelRow: "labelRow-qyt9pxdb",
                toolbox: "toolbox-qyt9pxdb",
                description: "description-qyt9pxdb",
                descriptionTabletSmall: "descriptionTabletSmall-qyt9pxdb",
                item: "item-qyt9pxdb",
                titleItem: "titleItem-qyt9pxdb",
                titleItemTabletSmall: "titleItemTabletSmall-qyt9pxdb",
                itemTabletSmall: "itemTabletSmall-qyt9pxdb",
                itemLabelTabletSmall: "itemLabelTabletSmall-qyt9pxdb",
                wrap: "wrap-qyt9pxdb",
                hovered: "hovered-qyt9pxdb",
            };
        },
        89227: (e) => {
            e.exports = {
                menu: "menu-Pi7orIC5",
                menuSmallTablet: "menuSmallTablet-Pi7orIC5",
                menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-Pi7orIC5",
                menuItemHeader: "menuItemHeader-Pi7orIC5",
            };
        },
        73887: (e) => {
            e.exports = {
                wrap: "wrap-mbKoosX4",
                full: "full-mbKoosX4",
                first: "first-mbKoosX4",
                last: "last-mbKoosX4",
                medium: "medium-mbKoosX4",
                buttonWithFavorites: "buttonWithFavorites-mbKoosX4",
            };
        },
        82559: (e) => {
            e.exports = { icon: "icon-0KfEd2LW" };
        },
        4039: (e) => {
            e.exports = {
                buttonUndo: "buttonUndo-6VeYguKu",
                buttonRedo: "buttonRedo-6VeYguKu",
            };
        },
        96746: (e) => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
            };
        },
        72142: (e) => {
            e.exports = { footer: "footer-C0oTZgbU" };
        },
        49473: (e) => {
            e.exports = {
                dottedCloud: "dottedCloud-NezC5dyJ",
                check: "check-NezC5dyJ",
                spinningCloud: "spinningCloud-NezC5dyJ",
                arrow: "arrow-NezC5dyJ",
                arrowGap: "arrowGap-NezC5dyJ",
                container: "container-NezC5dyJ",
                unsaved: "unsaved-NezC5dyJ",
                hovered: "hovered-NezC5dyJ",
                saving: "saving-NezC5dyJ",
                saved: "saved-NezC5dyJ",
            };
        },
        16842: (e) => {
            e.exports = {
                favorite: "favorite-JVQQsDQk",
                disabled: "disabled-JVQQsDQk",
                active: "active-JVQQsDQk",
                checked: "checked-JVQQsDQk",
            };
        },
        63095: (e) => {
            e.exports = {
                item: "item-UZNJ2Dq5",
                label: "label-UZNJ2Dq5",
                labelRow: "labelRow-UZNJ2Dq5",
                toolbox: "toolbox-UZNJ2Dq5",
            };
        },
        524: (e) => {
            e.exports = {
                separator: "separator-GzmeVcFo",
                small: "small-GzmeVcFo",
                normal: "normal-GzmeVcFo",
                large: "large-GzmeVcFo",
            };
        },
        73432: (e) => {
            e.exports = {
                button: "button-SD4Dbbwd",
                disabled: "disabled-SD4Dbbwd",
                active: "active-SD4Dbbwd",
                hidden: "hidden-SD4Dbbwd",
            };
        },
        76974: (e, t, a) => {
            "use strict";
            a.d(t, { useIsMounted: () => i });
            var n = a(59496);
            const i = () => {
                const e = (0, n.useRef)(!1);
                return (
                    (0, n.useEffect)(
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
        26996: (e, t, a) => {
            "use strict";
            a.d(t, { Loader: () => c });
            var n,
                i = a(59496),
                s = a(97754),
                o = a(74991),
                l = a(62092),
                r = a.n(l);
            !(function (e) {
                (e[(e.Initial = 0)] = "Initial"),
                    (e[(e.Appear = 1)] = "Appear"),
                    (e[(e.Active = 2)] = "Active");
            })(n || (n = {}));
            class c extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._stateChangeTimeout = null),
                        (this.state = { state: n.Initial });
                }
                render() {
                    const {
                            className: e,
                            color: t = "black",
                            size: a = "medium",
                            staticPosition: n,
                        } = this.props,
                        o = s(r().item, r()[t], r()[a]);
                    return i.createElement(
                        "span",
                        {
                            className: s(
                                r().loader,
                                n && r().static,
                                this._getStateClass(),
                                e
                            ),
                        },
                        i.createElement("span", { className: o }),
                        i.createElement("span", { className: o }),
                        i.createElement("span", { className: o })
                    );
                }
                componentDidMount() {
                    this.setState({ state: n.Appear }),
                        (this._stateChangeTimeout = setTimeout(() => {
                            this.setState({ state: n.Active });
                        }, 2 * o.dur));
                }
                componentWillUnmount() {
                    this._stateChangeTimeout &&
                        (clearTimeout(this._stateChangeTimeout),
                        (this._stateChangeTimeout = null));
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case n.Initial:
                            return r()["loader-initial"];
                        case n.Appear:
                            return r()["loader-appear"];
                        default:
                            return "";
                    }
                }
            }
        },
        26005: (e, t, a) => {
            "use strict";
            a.d(t, { CollapsibleSection: () => r });
            var n = a(59496),
                i = a(97754),
                s = a.n(i),
                o = a(10381),
                l = a(50789);
            function r(e) {
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                        "div",
                        {
                            className: s()(e.className, l.summary),
                            onClick: function () {
                                e.onStateChange && e.onStateChange(!e.open);
                            },
                            "data-open": e.open,
                        },
                        e.summary,
                        n.createElement(o.ToolWidgetCaret, {
                            className: l.caret,
                            dropped: Boolean(e.open),
                        })
                    ),
                    e.open && e.children
                );
            }
        },
        84096: (e, t, a) => {
            "use strict";
            a.d(t, {
                DEFAULT_MENU_ITEM_SWITCHER_THEME: () => m,
                MenuItemSwitcher: () => v,
            });
            var n = a(59496),
                i = a(97754),
                s = a.n(i);
            const o = (0, n.createContext)({
                enablePointerOnHover: !0,
                enableActiveStateStyles: !0,
            });
            var l = a(26390),
                r = a.n(l);
            function c(e) {
                const t = (0, n.useContext)(o),
                    {
                        className: a,
                        intent: s = "default",
                        size: l = "small",
                        enablePointerOnHover: c = t.enablePointerOnHover,
                        enableActiveStateStyles: h = t.enableActiveStateStyles,
                    } = e;
                return i(
                    a,
                    r().switcher,
                    r()["size-" + l],
                    r()["intent-" + s],
                    !c && r()["disable-cursor-pointer"],
                    !h && r()["disable-active-state-styles"]
                );
            }
            function h(e) {
                const { reference: t, size: a, intent: i, ...s } = e;
                return n.createElement(
                    "div",
                    { className: c(e) },
                    n.createElement("input", {
                        ...s,
                        type: "checkbox",
                        className: r().input,
                        ref: t,
                    }),
                    n.createElement(
                        "div",
                        { className: r()["thumb-wrapper"] },
                        n.createElement("div", { className: r().track }),
                        n.createElement("div", { className: r().thumb })
                    )
                );
            }
            var d = a(90186),
                u = a(31405);
            const m = u;
            function v(e) {
                const {
                        className: t,
                        checked: a,
                        id: i,
                        label: o,
                        labelDescription: l,
                        value: r,
                        preventLabelHighlight: c,
                        reference: m,
                        switchReference: v,
                        theme: p = u,
                        disabled: g,
                    } = e,
                    b = s()(p.label, a && !c && p.labelOn),
                    S = s()(t, p.wrapper, a && p.wrapperWithOnLabel);
                return n.createElement(
                    "label",
                    { className: S, htmlFor: i, ref: m },
                    n.createElement(
                        "div",
                        { className: p.labelRow },
                        n.createElement("div", { className: b }, o),
                        l &&
                            n.createElement(
                                "div",
                                { className: p.labelHint },
                                l
                            )
                    ),
                    n.createElement(h, {
                        disabled: g,
                        className: p.switch,
                        reference: v,
                        checked: a,
                        onChange: function (t) {
                            const a = t.target.checked;
                            void 0 !== e.onChange && e.onChange(a);
                        },
                        value: r,
                        tabIndex: -1,
                        id: i,
                        ...(0, d.filterDataProps)(e),
                    })
                );
            }
        },
        14593: (e, t, a) => {
            "use strict";
            a.d(t, { ToolWidgetIconButton: () => l });
            var n = a(59496),
                i = a(97754),
                s = a(4825),
                o = a(64547);
            const l = n.forwardRef((e, t) => {
                const { className: a, id: l, ...r } = e;
                return n.createElement(s.ToolWidgetButton, {
                    "data-name": l,
                    ...r,
                    ref: t,
                    className: i(a, o.button),
                });
            });
        },
        53374: (e, t, a) => {
            "use strict";
            a.d(t, { INTERVALS: () => i });
            var n = a(28353);
            const i = [
                {
                    name: "",
                    label: (0, n.t)("minutes", { context: "interval" }),
                },
                {
                    name: "H",
                    label: (0, n.t)("hours", { context: "interval" }),
                },
                { name: "D", label: (0, n.t)("days", { context: "interval" }) },
                {
                    name: "W",
                    label: (0, n.t)("weeks", { context: "interval" }),
                },
                {
                    name: "M",
                    label: (0, n.t)("months", { context: "interval" }),
                },
            ];
        },
        60269: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { getRestrictedToolSet: () => on });
            var n = a(67337),
                i = a(59496),
                s = a(19036),
                o = a(28353),
                l = a(82992),
                r = a(16654),
                c = a(37466),
                h = a(36189),
                d = a(9745),
                u = a(16396),
                m = a(35390),
                v = a(97754),
                p = a.n(v),
                g = a(82832);
            class b extends i.PureComponent {
                render() {
                    const { children: e, className: t, ...a } = this.props;
                    return i.createElement(
                        "div",
                        { className: v(t, g.wrap), ...a },
                        e
                    );
                }
            }
            var S = a(4825),
                C = a(90186),
                _ = a(936);
            class w extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleClick = () => {
                            const { onClick: e, onClickArg: t } = this.props;
                            e && e(t);
                        });
                }
                render() {
                    const {
                            isFirst: e,
                            isLast: t,
                            hint: a,
                            text: n,
                            icon: s,
                            isActive: o,
                            isDisabled: l,
                            className: r,
                        } = this.props,
                        c = (0, C.filterDataProps)(this.props);
                    return i.createElement(S.ToolWidgetButton, {
                        ...c,
                        icon: s,
                        text: n,
                        title: a,
                        isDisabled: l,
                        isActive: o,
                        isGrouped: !0,
                        onClick: this._handleClick,
                        className: v(r, _.button, {
                            [_.first]: e,
                            [_.last]: t,
                        }),
                    });
                }
            }
            var y = a(51613),
                f = a(90692),
                k = a(24437),
                M = a(81332),
                E = a(55402),
                T = a(15943),
                x = a(19450);
            const I = {
                0: (0, o.t)("Bars"),
                1: (0, o.t)("Candles"),
                9: (0, o.t)("Hollow candles"),
                13: (0, o.t)("Columns"),
                8: (0, o.t)("Heikin Ashi"),
                2: (0, o.t)("Line"),
                3: (0, o.t)("Area"),
                10: (0, o.t)("Baseline"),
                12: (0, o.t)("High-low"),
            };
            const A = { barsStyle: (0, o.t)("Bar's style"), labels: I },
                R = (0, E.registryContextType)();
            function N(e) {
                var t;
                return !(null ===
                    (t = l.linking.supportedChartStyles.value()) || void 0 === t
                    ? void 0
                    : t.includes(e));
            }
            class F extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleChangeStyle = (e) => {
                            const {
                                favorites: t,
                                lastSelectedNotFavorite: a,
                                activeStyle: n,
                            } = this.state;
                            this.setState({
                                activeStyle: e,
                                lastSelectedNotFavorite: t.includes(n) ? a : n,
                            });
                        }),
                        (this._handleSelectStyle = (e) => {
                            const { chartWidgetCollection: t } = this.context;
                            e !== t.activeChartStyle.value() &&
                                t.setChartStyleToWidget(e);
                        }),
                        (this._handleClickFavorite = (e) => {
                            this._isStyleFavorited(e)
                                ? this._handleRemoveFavorite(e)
                                : this._handleAddFavorite(e);
                        }),
                        (this._boundForceUpdate = () => {
                            this.forceUpdate();
                        }),
                        (this._handleQuickClick = (e) => {
                            this._handleSelectStyle(e), this._trackClick();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                            favoriteChartStylesService: s.any.isRequired,
                        });
                    const {
                            chartWidgetCollection: a,
                            favoriteChartStylesService: n,
                        } = t,
                        i = a.activeChartStyle.value(),
                        o = n.get(),
                        l = (0, T.japaneseChartStyles)();
                    this.state = {
                        activeStyle: i,
                        favorites: o,
                        styles: (0, T.commonChartStyles)(),
                        japaneseStyles: l,
                    };
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e,
                        favoriteChartStylesService: t,
                    } = this.context;
                    e.activeChartStyle.subscribe(this._handleChangeStyle),
                        t
                            .getOnChange()
                            .subscribe(this, this._handleChangeSettings),
                        l.linking.supportedChartStyles.subscribe(
                            this._boundForceUpdate
                        );
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e,
                        favoriteChartStylesService: t,
                    } = this.context;
                    e.activeChartStyle.unsubscribe(this._handleChangeStyle),
                        t
                            .getOnChange()
                            .unsubscribe(this, this._handleChangeSettings),
                        l.linking.supportedChartStyles.unsubscribe(
                            this._boundForceUpdate
                        );
                }
                render() {
                    const {
                            isShownQuicks: e,
                            displayMode: t = "full",
                            id: a,
                        } = this.props,
                        {
                            activeStyle: n,
                            favorites: s,
                            styles: o,
                            japaneseStyles: l,
                            lastSelectedNotFavorite: h,
                        } = this.state,
                        u = "small" !== t && e && 0 !== s.length,
                        v = [...s];
                    v.includes(n) ? void 0 !== h && v.push(h) : v.push(n);
                    const p = u && v.length > 1;
                    return i.createElement(
                        f.MatchMedia,
                        { rule: k.DialogBreakpoints.TabletSmall },
                        (e) => {
                            const t = o.map((t) =>
                                    this._renderPopupMenuItem(t, t === n, e)
                                ),
                                s = l.map((t) =>
                                    this._renderPopupMenuItem(t, t === n, e)
                                );
                            return i.createElement(
                                b,
                                { id: a },
                                p &&
                                    v.map((e, t) =>
                                        i.createElement(w, {
                                            className: x.button,
                                            icon: c.SERIES_ICONS[e],
                                            isActive: u && n === e,
                                            isDisabled: N(e),
                                            key: t,
                                            hint: A.labels[e],
                                            isFirst: 0 === t,
                                            isLast: t === v.length - 1,
                                            onClick: u
                                                ? this._handleQuickClick
                                                : void 0,
                                            onClickArg: e,
                                            "data-value":
                                                r.STYLE_SHORT_NAMES[e],
                                        })
                                    ),
                                i.createElement(
                                    m.ToolWidgetMenu,
                                    {
                                        arrow: Boolean(p),
                                        content: p
                                            ? void 0
                                            : i.createElement(
                                                  b,
                                                  null,
                                                  i.createElement(d.Icon, {
                                                      icon: c.SERIES_ICONS[n],
                                                  })
                                              ),
                                        title: p ? A.barsStyle : A.labels[n],
                                        className: x.menu,
                                        isDrawer: e,
                                        onClick: this._trackClick,
                                    },
                                    t,
                                    !!s.length &&
                                        i.createElement(
                                            y.PopupMenuSeparator,
                                            null
                                        ),
                                    s
                                )
                            );
                        }
                    );
                }
                _renderPopupMenuItem(e, t, a) {
                    const { isFavoritingAllowed: n } = this.props,
                        s = this._isStyleFavorited(e);
                    return i.createElement(u.PopupMenuItem, {
                        key: e,
                        theme: a
                            ? M.multilineLabelWithIconAndToolboxTheme
                            : void 0,
                        icon: c.SERIES_ICONS[e],
                        isActive: t,
                        isDisabled: N(e),
                        label: A.labels[e] || "",
                        onClick: this._handleSelectStyle,
                        onClickArg: e,
                        showToolboxOnHover: !s,
                        toolbox:
                            n &&
                            i.createElement(h.FavoriteButton, {
                                isActive: t,
                                isFilled: s,
                                onClick: () => this._handleClickFavorite(e),
                            }),
                        "data-value": r.STYLE_SHORT_NAMES[e],
                    });
                }
                _handleChangeSettings(e) {
                    this.setState({
                        lastSelectedNotFavorite: void 0,
                        favorites: e,
                    });
                }
                _isStyleFavorited(e) {
                    return -1 !== this.state.favorites.indexOf(e);
                }
                _handleAddFavorite(e) {
                    const { favorites: t } = this.state,
                        { favoriteChartStylesService: a } = this.context;
                    a.set([...t, e]);
                }
                _handleRemoveFavorite(e) {
                    const { favorites: t } = this.state,
                        { favoriteChartStylesService: a } = this.context;
                    a.set(t.filter((t) => t !== e));
                }
                _trackClick() {
                    0;
                }
            }
            F.contextType = R;
            var H = a(39592);
            const z = ["medium", "small"];
            function P(e) {
                const {
                        text: t,
                        className: a,
                        displayMode: n,
                        collapseWhen: s = z,
                        ...o
                    } = e,
                    l = !s.includes(n);
                return i.createElement(S.ToolWidgetButton, {
                    ...o,
                    text: l ? t : void 0,
                    className: v(a, H.button, l ? H.withText : H.withoutText),
                });
            }
            var D = a(51768),
                L = a(37669),
                W = a(2323);
            const O = {
                    compare: (0, o.t)("Compare"),
                    compareOrAddSymbol: (0, o.t)("Compare or Add Symbol"),
                },
                U = (0, E.registryContextType)();
            class B extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._updateState = (e) => {
                            this.setState({ isActive: e });
                        }),
                        (this._handleClick = () => {
                            var e;
                            (0, D.trackEvent)(
                                "GUI",
                                "Chart Header Toolbar",
                                "compare"
                            ),
                                null === (e = this._compareDialogRenderer) ||
                                    void 0 === e ||
                                    e.show();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                        }),
                        (this.state = { isActive: !1 }),
                        (this._compareDialogRenderer =
                            this.context.chartWidgetCollection.getCompareDialogRenderer());
                }
                componentDidMount() {
                    var e;
                    null === (e = this._compareDialogRenderer) ||
                        void 0 === e ||
                        e.visible().subscribe(this._updateState);
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._compareDialogRenderer) ||
                        void 0 === e ||
                        e.visible().unsubscribe(this._updateState);
                }
                render() {
                    const { isActive: e } = this.state;
                    return i.createElement(P, {
                        ...this.props,
                        icon: W,
                        isOpened: e,
                        onClick: this._handleClick,
                        text: L.hasNewHeaderToolbarStyles ? void 0 : O.compare,
                        title: O.compareOrAddSymbol,
                        collapseWhen: L.hasNewHeaderToolbarStyles
                            ? ["full", "medium", "small"]
                            : void 0,
                    });
                }
            }
            B.contextType = U;
            var V = a(14593),
                G = a(61814),
                Z = a(68335),
                Y = a(90711),
                Q = a(15392);
            const q = { hint: (0, o.t)("Fullscreen mode") },
                K = (0, G.hotKeySerialize)({
                    keys: [
                        (0, Z.humanReadableModifiers)(Z.Modifiers.Shift, !1),
                        "F",
                    ],
                    text: "{0} + {1}",
                }),
                j = (0, E.registryContextType)();
            class J extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const { chartWidgetCollection: e } = this.context;
                            e.startFullscreen();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                        });
                }
                render() {
                    const { className: e, id: t } = this.props;
                    return i.createElement(V.ToolWidgetIconButton, {
                        id: t,
                        icon: L.hasNewHeaderToolbarStyles ? Q : Y,
                        onClick: this._handleClick,
                        title: q.hint,
                        className: v(e),
                        "data-tooltip-hotkey": K,
                    });
                }
            }
            J.contextType = j;
            var X = a(88537);
            const $ = (0, a(98125).getLogger)("FavoritesInfo");
            function ee(e, t) {
                if (0 === e.length) return Promise.resolve([]);
                $.logNormal("Requesting favorites info");
                const a = [],
                    n = new Map(),
                    i = new Map(),
                    s = new Map();
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "java":
                                s.set(e.studyId, e);
                                break;
                            case "pine":
                                isPublishedPineId(e.pineId)
                                    ? n.set(e.pineId, e)
                                    : i.set(e.pineId, e);
                                break;
                            default:
                                (0, X.assert)(
                                    !1,
                                    "unknown favorite type " + JSON.stringify(e)
                                );
                        }
                    }),
                    0 !== s.size &&
                        a.push(
                            t
                                .findAllJavaStudies()
                                .then((e) => {
                                    const t = new Map();
                                    for (const a of e)
                                        !a.is_hidden_study &&
                                            s.has(a.id) &&
                                            t.set(a.id, {
                                                name: a.description,
                                                localizedName:
                                                    a.description_localized,
                                                studyMarketShittyObject: a,
                                            });
                                    return t;
                                })
                                .then((e) => {
                                    const t = (function (e, t) {
                                        const a = {
                                            items: [],
                                            notFoundItems: [],
                                        };
                                        return (
                                            e.forEach((e, n) => {
                                                const i = t.get(n);
                                                void 0 !== i
                                                    ? a.items.push({
                                                          item: e,
                                                          info: i,
                                                      })
                                                    : a.notFoundItems.push(e);
                                            }),
                                            a
                                        );
                                    })(s, e);
                                    if (0 !== t.notFoundItems.length) {
                                        const e = t.notFoundItems.map(
                                            (e) => e.studyId
                                        );
                                        $.logWarn(
                                            "Cannot find java scripts: " +
                                                JSON.stringify(e)
                                        );
                                    }
                                    return t.items;
                                })
                        ),
                    Promise.all(a).then(
                        (e) => (
                            $.logNormal("Requesting favorites info finished"),
                            e.reduce((e, t) => e.concat(t), [])
                        )
                    )
                );
            }
            var te = a(14291),
                ae = a(85733),
                ne = a(26996),
                ie = a(59174);
            function se(e) {
                const { className: t } = e;
                return i.createElement(
                    "div",
                    { className: p()(ie.spinnerWrap, t) },
                    i.createElement(ne.Loader, null)
                );
            }
            var oe = a(78966);
            function le(e) {
                return i.createElement(
                    "div",
                    { className: v(e.className, oe.title) },
                    e.children
                );
            }
            var re = a(76422),
                ce = a(60373),
                he = a(64142);
            const de = {
                    text: (0, o.t)("Indicators"),
                    hint: (0, o.t)("Indicators & Strategies"),
                    favorites: (0, o.t)("Favorites"),
                },
                ue = (0, G.hotKeySerialize)({ keys: ["/"], text: "{0}" }),
                me = (0, E.registryContextType)();
            class ve extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._promise = null),
                        (this._menu = i.createRef()),
                        (this._favoriteFundamentalsModel = null),
                        (this._setActiveState = (e) => {
                            this.setState({ isActive: e });
                        }),
                        (this._handleClick = () => {
                            const { studyMarket: e } = this.props;
                            this.setState({ isActive: !0 }, () => {
                                e.visible().value() ? e.hide() : e.show();
                            }),
                                this._trackClick();
                        }),
                        (this._handleSelectIndicator = (e) => {
                            (e = (0, X.ensureDefined)(e)),
                                this._trackFavoriteAction(
                                    "Favorite indicator from toolbar"
                                );
                            const { chartWidgetCollection: t } = this.context;
                            if ("java" === e.type) {
                                const t = (0,
                                te.tryFindStudyLineToolNameByStudyId)(
                                    e.studyId
                                );
                                if (null !== t) return void ae.tool.setValue(t);
                            }
                            t.activeChartWidget.value().insertStudy(e);
                        }),
                        (this._handleFavoriteIndicatorsChange = () => {
                            const { favoriteScriptsModel: e } = this.context,
                                t = [...(0, X.ensureDefined)(e).favorites()];
                            this.setState({ favorites: t }), this._clearCache();
                        }),
                        (this._handleFavoriteFundamentalsChange = () => {
                            var e;
                            const t = new Set(
                                (null ===
                                    (e = this._favoriteFundamentalsModel) ||
                                void 0 === e
                                    ? void 0
                                    : e.favorites()) || []
                            );
                            this.setState({ favoriteFundamentals: t }),
                                this._clearCache();
                        }),
                        (this._handleMouseEnter = () => {
                            this._prefetchFavorites();
                        }),
                        (this._handleWrapClick = () => {
                            this._prefetchFavorites();
                        }),
                        (this._handleChangeActiveWidget = () => {
                            this._clearCache();
                        }),
                        (this._clearCache = () => {
                            (this._promise = null),
                                this.setState({ infos: [] });
                        }),
                        (this._handleScriptRenamed = (e) => {
                            const { favoriteScriptsModel: t } = this.context;
                            void 0 !== t &&
                                t.isFav(e.scriptIdPart) &&
                                this._clearCache();
                        }),
                        (this._handleFavoriteMenuClick = () => {
                            this._trackClick(),
                                this._trackFavoriteAction(
                                    "Select favorite indicators dropdown"
                                );
                        }),
                        (0, E.validateRegistry)(t, {
                            favoriteScriptsModel: s.any,
                            chartWidgetCollection: s.any.isRequired,
                        });
                    const { favoriteScriptsModel: a } = t,
                        n = void 0 !== a ? a.favorites() : [];
                    this.state = {
                        isActive: !1,
                        isLoading: !1,
                        favorites: n,
                        favoriteFundamentals: void 0,
                        infos: [],
                    };
                }
                componentDidMount() {
                    const { studyMarket: e } = this.props,
                        { favoriteScriptsModel: t, chartWidgetCollection: a } =
                            this.context;
                    e.visible().subscribe(this._setActiveState),
                        void 0 !== t &&
                            (t
                                .favoritesChanged()
                                .subscribe(
                                    this,
                                    this._handleFavoriteIndicatorsChange
                                ),
                            a.activeChartWidget.subscribe(
                                this._handleChangeActiveWidget
                            )),
                        re.on(
                            "TVScriptRenamed",
                            this._handleScriptRenamed,
                            null
                        );
                }
                componentWillUnmount() {
                    const { studyMarket: e } = this.props,
                        { favoriteScriptsModel: t, chartWidgetCollection: a } =
                            this.context;
                    e.visible().unsubscribe(this._setActiveState),
                        void 0 !== t &&
                            (t
                                .favoritesChanged()
                                .unsubscribe(
                                    this,
                                    this._handleFavoriteIndicatorsChange
                                ),
                            a.activeChartWidget.unsubscribe(
                                this._handleChangeActiveWidget
                            )),
                        re.unsubscribe(
                            "TVScriptRenamed",
                            this._handleScriptRenamed,
                            null
                        ),
                        (this._promise = null);
                }
                render() {
                    const {
                            isActive: e,
                            favorites: t,
                            favoriteFundamentals: a,
                            isLoading: n,
                        } = this.state,
                        { className: s, displayMode: l, id: r } = this.props,
                        { chartWidgetCollection: c } = this.context;
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                            b,
                            {
                                id: r,
                                onMouseEnter: this._handleMouseEnter,
                                onClick: this._handleWrapClick,
                            },
                            i.createElement(P, {
                                displayMode: l,
                                className: s,
                                icon: ce,
                                isOpened: e,
                                onClick: this._handleClick,
                                text: de.text,
                                title: de.hint,
                                "data-role": "button",
                                "data-name": "open-indicators-dialog",
                                "data-tooltip-hotkey": ue,
                            }),
                            Boolean(
                                t.length > 0 || (null == a ? void 0 : a.size)
                            ) &&
                                i.createElement(
                                    f.MatchMedia,
                                    { rule: "screen and (max-width: 428px)" },
                                    (e) =>
                                        i.createElement(
                                            m.ToolWidgetMenu,
                                            {
                                                key: c.activeChartWidget
                                                    .value()
                                                    .id(),
                                                arrow: !0,
                                                closeOnClickOutside: !0,
                                                isDrawer: e,
                                                drawerPosition: "Bottom",
                                                title: de.favorites,
                                                ref: this._menu,
                                                onClick:
                                                    this
                                                        ._handleFavoriteMenuClick,
                                                "data-name":
                                                    "show-favorite-indicators",
                                            },
                                            i.createElement(
                                                "div",
                                                {
                                                    className: p()(
                                                        he.dropdown,
                                                        e &&
                                                            he.smallWidthWrapper
                                                    ),
                                                },
                                                i.createElement(
                                                    le,
                                                    {
                                                        className:
                                                            e &&
                                                            he.smallWidthTitle,
                                                    },
                                                    (0, o.t)(
                                                        "Favorite Indicators"
                                                    )
                                                ),
                                                n && i.createElement(se, null),
                                                !n &&
                                                    i.createElement(
                                                        i.Fragment,
                                                        null,
                                                        this.state.infos
                                                            .length > 0
                                                            ? this.state.infos.map(
                                                                  (t) =>
                                                                      i.createElement(
                                                                          u.PopupMenuItem,
                                                                          {
                                                                              className:
                                                                                  p()(
                                                                                      e &&
                                                                                          he.smallWidthMenuItem
                                                                                  ),
                                                                              theme: e
                                                                                  ? M.multilineLabelWithIconAndToolboxTheme
                                                                                  : void 0,
                                                                              key:
                                                                                  "java" ===
                                                                                  t
                                                                                      .item
                                                                                      .type
                                                                                      ? t
                                                                                            .item
                                                                                            .studyId
                                                                                      : t
                                                                                            .item
                                                                                            .pineId,
                                                                              onClick:
                                                                                  this
                                                                                      ._handleSelectIndicator,
                                                                              onClickArg:
                                                                                  t.item,
                                                                              label: i.createElement(
                                                                                  "span",
                                                                                  {
                                                                                      className:
                                                                                          p()(
                                                                                              !e &&
                                                                                                  he.label,
                                                                                              e &&
                                                                                                  he.smallWidthLabel,
                                                                                              "apply-overflow-tooltip"
                                                                                          ),
                                                                                  },
                                                                                  pe(
                                                                                      t
                                                                                  )
                                                                              ),
                                                                          }
                                                                      )
                                                              )
                                                            : null !==
                                                                  this
                                                                      ._promise &&
                                                                  i.createElement(
                                                                      u.PopupMenuItem,
                                                                      {
                                                                          isDisabled:
                                                                              !0,
                                                                          label: (0,
                                                                          o.t)(
                                                                              "You have no Favorites Indicators yet"
                                                                          ),
                                                                      }
                                                                  )
                                                    )
                                            )
                                        )
                                )
                        )
                    );
                }
                _prefetchFavorites() {
                    const { chartWidgetCollection: e } = this.context;
                    if (null !== this._promise || !window.is_authenticated)
                        return;
                    const t = e.activeChartWidget.value();
                    if (!t.hasModel()) return;
                    const a = t.model().model().studyMetaInfoRepository();
                    this.setState({ isLoading: !0 });
                    const n = (this._promise = Promise.all([
                        ee(this.state.favorites, a),
                        void 0,
                    ]).then((e) => {
                        if (n !== this._promise) return;
                        const [t, a] = e;
                        let i = [...t];
                        if (a) {
                            const e = a
                                .filter((e) => {
                                    var t;
                                    return null ===
                                        (t = this.state.favoriteFundamentals) ||
                                        void 0 === t
                                        ? void 0
                                        : t.has(e.scriptIdPart);
                                })
                                .map(this._mapFundamentalToFavoriteItemInfo);
                            i.push(...e);
                        }
                        (i = [...i].sort((e, t) => pe(e).localeCompare(pe(t)))),
                            this.setState({ infos: i, isLoading: !1 }, () => {
                                this._menu.current &&
                                    this._menu.current.update();
                            });
                    }));
                }
                _trackClick() {
                    0;
                }
                _trackFavoriteAction(e) {
                    (0, D.trackEvent)("GUI", "Chart Header Toolbar", e);
                }
                _mapFundamentalToFavoriteItemInfo(e) {
                    return {
                        item: { type: "pine", pineId: e.scriptIdPart },
                        info: {
                            name: e.scriptName,
                            localizedName: getLocalizedFundamentalsName(e),
                            studyMarketShittyObject: void 0,
                        },
                    };
                }
            }
            function pe(e) {
                return (
                    e.info.localizedName ||
                    (0, o.t)(e.info.name, { context: "study" })
                );
            }
            ve.contextType = me;
            var ge = a(9315),
                be = a(29823),
                Se = a(87906);
            function Ce(e) {
                return i.createElement(
                    "div",
                    { className: v(Se.value, { [Se.selected]: e.isSelected }) },
                    e.value,
                    e.metric
                );
            }
            var _e = a(50628),
                we = a(10381),
                ye = a(53374),
                fe = a(69698);
            class ke extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._timeMenu = null),
                        (this._setMenuRef = (e) => {
                            this._timeMenu = e;
                        }),
                        (this._handleChangeInput = (e) => {
                            const { value: t } = e.currentTarget;
                            /^[0-9]*$/.test(t) &&
                                this.setState({ inputValue: t });
                        }),
                        (this._handleSelectTime = (e) => {
                            this.setState({ selectedIntervalSuffix: e }),
                                this._closeMenu();
                        }),
                        (this._handleClickAdd = () => {
                            const { inputValue: e, selectedIntervalSuffix: t } =
                                this.state;
                            this.props.onAdd(e, t);
                        }),
                        (this._toggleMenu = () => {
                            this.state.isOpenedMenu
                                ? this._closeMenu()
                                : this._openMenu();
                        }),
                        (this._closeMenu = () => {
                            this.props.onCloseMenu(),
                                this.setState({
                                    isOpenedMenu: !1,
                                });
                        }),
                        (this._openMenu = () => {
                            this.props.onOpenMenu(),
                                this.setState({ isOpenedMenu: !0 });
                        }),
                        (this._getMenuPosition = () => {
                            const e = (0, X.ensureNotNull)(
                                this._timeMenu
                            ).getBoundingClientRect();
                            return {
                                overrideWidth: e.width,
                                x: e.left,
                                y: e.bottom + 1,
                            };
                        }),
                        (this.state = {
                            inputValue: "1",
                            isOpenedMenu: !1,
                            selectedIntervalSuffix: ye.INTERVALS[0].name,
                        });
                }
                render() {
                    const {
                        inputValue: e,
                        isOpenedMenu: t,
                        menuWidth: a,
                        selectedIntervalSuffix: n,
                    } = this.state;
                    return i.createElement(
                        "div",
                        { className: v(fe.form, { [fe.interacting]: t }) },
                        i.createElement("input", {
                            className: fe.input,
                            maxLength: 7,
                            onChange: this._handleChangeInput,
                            value: e,
                        }),
                        i.createElement(
                            "div",
                            {
                                className: fe.menu,
                                onClick: this._toggleMenu,
                                ref: this._setMenuRef,
                            },
                            ye.INTERVALS.find((e) => e.name === n).label,
                            i.createElement(we.ToolWidgetCaret, { dropped: t })
                        ),
                        i.createElement(
                            "div",
                            {
                                className: fe.add,
                                onClick: this._handleClickAdd,
                            },
                            (0, o.t)("Add")
                        ),
                        i.createElement(
                            _e.PopupMenu,
                            {
                                doNotCloseOn: this,
                                isOpened: t,
                                minWidth: a,
                                onClose: this._closeMenu,
                                position: this._getMenuPosition,
                            },
                            ye.INTERVALS.map((e) =>
                                i.createElement(u.PopupMenuItem, {
                                    dontClosePopup: !0,
                                    key: e.name,
                                    label: e.label,
                                    onClick: this._handleSelectTime,
                                    onClickArg: e.name,
                                })
                            )
                        )
                    );
                }
            }
            var Me = a(96040),
                Ee = a(70412),
                Te = a(32563),
                xe = a(32062);
            function Ie(e) {
                const {
                        interval: t,
                        hint: a,
                        isActive: n,
                        isDisabled: s,
                        isFavorite: o,
                        isSignaling: l,
                        onClick: r,
                        onClickRemove: c,
                        onClickFavorite: d,
                        isSmallTablet: m,
                    } = e,
                    v = (0, C.filterDataProps)(e),
                    [g, b] = (0, Ee.useHover)(),
                    S = i.useCallback(() => c(t), [c, t]),
                    _ = i.useCallback(() => d(t), [d, t]),
                    w = (0, i.useRef)(null);
                return (
                    (0, i.useEffect)(() => {
                        var e;
                        l &&
                            m &&
                            (null === (e = w.current) ||
                                void 0 === e ||
                                e.scrollIntoView());
                    }, [l, m]),
                    i.createElement(
                        "div",
                        { ...b, ref: w },
                        i.createElement(u.PopupMenuItem, {
                            ...v,
                            className: p()(m && xe.smallWidthMenuItem),
                            theme: m
                                ? M.multilineLabelWithIconAndToolboxTheme
                                : void 0,
                            isActive: n,
                            isDisabled: s,
                            isHovered: l,
                            onClick: r,
                            onClickArg: t,
                            toolbox: (function () {
                                const {
                                        isRemovable: t,
                                        isFavoritingAllowed: a,
                                    } = e,
                                    l = i.createElement(Me.RemoveButton, {
                                        key: "remove",
                                        isActive: n,
                                        hidden: !Te.touch && !g,
                                        onClick: S,
                                    }),
                                    r = i.createElement(h.FavoriteButton, {
                                        key: "favorite",
                                        isActive: n,
                                        isFilled: o,
                                        onClick: _,
                                    });
                                return [t && l, !s && a && r];
                            })(),
                            showToolboxOnHover: !o,
                            label: a,
                        })
                    )
                );
            }
            const Ae = {
                [be.ResolutionKind.Ticks]: (0, o.t)("Ticks", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Seconds]: (0, o.t)("Seconds", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Minutes]: (0, o.t)("Minutes", {
                    context: "interval_group_name",
                }),
                [be.SpecialResolutionKind.Hours]: (0, o.t)("Hours", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Days]: (0, o.t)("Days", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Weeks]: (0, o.t)("Weeks", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Months]: (0, o.t)("Months", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Range]: (0, o.t)("Ranges", {
                    context: "interval_group_name",
                }),
                [be.ResolutionKind.Invalid]: "",
            };
            function Re(e, t = !1) {
                return { id: e, name: Ae[e], items: [], mayOmitSeparator: t };
            }
            var Ne = a(26005),
                Fe = a(2872),
                He = a.n(Fe),
                ze = a(29197),
                Pe = a(59064),
                De = a(6500);
            const Le = {
                    openDialog: (0, o.t)("Open Interval Dialog"),
                    timeInterval: (0, o.t)("Time Interval"),
                },
                We = (0, G.hotKeySerialize)({
                    keys: [","],
                    text: (0, o.t)("Number or {hotKey_0}"),
                }),
                Oe = (0, E.registryContextType)(),
                Ue = new (He())(),
                Be = i.lazy(async () => ({
                    default: (
                        await Promise.all([
                            a.e(4194),
                            a.e(7962),
                            a.e(8986),
                            a.e(8463),
                            a.e(9289),
                            a.e(7345),
                            a.e(2385),
                            a.e(5643),
                            a.e(3016),
                            a.e(4013),
                        ]).then(a.bind(a, 21317))
                    ).ToolWidgetIntervalsAddDialog,
                }));
            function Ve(e) {
                {
                    const t = be.Interval.parse(e);
                    if (!(0, ge.isSecondsEnabled)() && t.isSeconds()) return !1;
                    if (!(0, ge.isTicksEnabled)() && t.isTicks()) return !1;
                }
                return !0;
            }
            class Ge extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._menu = i.createRef()),
                        (this._renderChildren = (e, t) => [
                            ...this._createMenuItems(e, t),
                            ...this._createIntervalForm(t),
                        ]),
                        (this._handleChangeInterval = (e) => {
                            const { activeInterval: t, lastNotQuicked: a } =
                                    this.state,
                                n = this._getQuicks();
                            this.setState({
                                activeInterval: (0, ge.normalizeIntervalString)(
                                    e
                                ),
                                lastNotQuicked:
                                    void 0 === t || n.includes(t) ? a : t,
                            });
                        }),
                        (this._bindedForceUpdate = () => {
                            this.forceUpdate();
                        }),
                        (this._handleCloseMenu = () => {
                            this.setState({ isOpenedFormMenu: !1 });
                        }),
                        (this._handleOpenMenu = () => {
                            this.setState({ isOpenedFormMenu: !0 });
                        }),
                        (this._handleSelectInterval = (e) => {
                            void 0 !== e &&
                                e !== l.linking.interval.value() &&
                                this.context.chartWidgetCollection.setResolution(
                                    e
                                ),
                                e &&
                                    (0, D.trackEvent)(
                                        "GUI",
                                        "Time Interval",
                                        e
                                    );
                        }),
                        (this._handleClickFavorite = (e) => {
                            (e = (0, X.ensureDefined)(e)),
                                this._isIntervalFavorite(e)
                                    ? this._handleRemoveFavorite(e)
                                    : this._handleAddFavorite(e);
                        }),
                        (this._handleAddFavorite = (e) => {
                            const { favorites: t } = this.state;
                            this.context.favoriteIntervalsService.set([
                                ...t,
                                e,
                            ]);
                        }),
                        (this._handleRemoveFavorite = (e) => {
                            const { favorites: t } = this.state;
                            this.context.favoriteIntervalsService.set(
                                t.filter((t) => t !== e)
                            );
                        }),
                        (this._handleAddInterval = (e, t) => {
                            const { intervalService: a } = this.context,
                                n = a.add(e, t);
                            n && this.setState({ lastAddedInterval: n });
                        }),
                        (this._handleRemoveInterval = (e) => {
                            const { intervalService: t } = this.context;
                            e && (t.remove(e), this._handleRemoveFavorite(e));
                        }),
                        (this._getHandleSectionStateChange = (e) => (t) => {
                            const { menuViewState: a } = this.state,
                                { intervalsMenuViewStateService: n } =
                                    this.context;
                            n.set({ ...a, [e]: !t });
                        }),
                        (this._handleOpenAddIntervalDialog = () => {
                            this.setState({ isAddIntervalDialogOpened: !0 });
                        }),
                        (this._handleCloseAddIntervalDialog = () => {
                            this.setState({ isAddIntervalDialogOpened: !1 });
                        }),
                        (this._handleGlobalClose = () => {
                            const { isFake: e } = this.props,
                                { isAddIntervalDialogOpened: t } = this.state;
                            e || t || Ue.fire();
                        }),
                        (this._handeQuickClick = (e) => {
                            this._handleSelectInterval(e), this._trackClick();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartApiInstance: s.any.isRequired,
                            favoriteIntervalsService: s.any.isRequired,
                            intervalService: s.any.isRequired,
                            intervalsMenuViewStateService: s.any.isRequired,
                        });
                    const {
                        chartApiInstance: a,
                        favoriteIntervalsService: o,
                        intervalService: r,
                        intervalsMenuViewStateService: c,
                    } = t;
                    this._customIntervals = n.enabled("custom_resolutions");
                    const h = l.linking.interval.value(),
                        d = h && (0, ge.normalizeIntervalString)(h),
                        u = o.get(),
                        m = r.getCustomIntervals(),
                        v = c.get();
                    (this._defaultIntervals = a
                        .defaultResolutions()
                        .filter(Ve)
                        .map(ge.normalizeIntervalString)),
                        (this.state = {
                            isOpenedFormMenu: !1,
                            activeInterval: d,
                            favorites: u,
                            customs: m,
                            menuViewState: v,
                            isAddIntervalDialogOpened: !1,
                        });
                }
                componentDidMount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: a,
                    } = this.context;
                    e
                        .getOnChange()
                        .subscribe(this, this._handleChangeFavorites),
                        a
                            .getOnChange()
                            .subscribe(this, this._handleChangeMenuViewState),
                        t
                            .getOnChange()
                            .subscribe(this, this._handleChangeCustoms),
                        l.linking.interval.subscribe(
                            this._handleChangeInterval
                        ),
                        l.linking.intraday.subscribe(this._bindedForceUpdate),
                        l.linking.seconds.subscribe(this._bindedForceUpdate),
                        l.linking.ticks.subscribe(this._bindedForceUpdate),
                        l.linking.range.subscribe(this._bindedForceUpdate),
                        l.linking.supportedResolutions.subscribe(
                            this._bindedForceUpdate
                        ),
                        Pe.globalCloseDelegate.subscribe(
                            this,
                            this._handleGlobalClose
                        );
                }
                componentWillUnmount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: a,
                    } = this.context;
                    e
                        .getOnChange()
                        .unsubscribe(this, this._handleChangeFavorites),
                        a
                            .getOnChange()
                            .unsubscribe(this, this._handleChangeMenuViewState),
                        t
                            .getOnChange()
                            .unsubscribe(this, this._handleChangeCustoms),
                        l.linking.interval.unsubscribe(
                            this._handleChangeInterval
                        ),
                        l.linking.intraday.unsubscribe(this._bindedForceUpdate),
                        l.linking.seconds.unsubscribe(this._bindedForceUpdate),
                        l.linking.ticks.unsubscribe(this._bindedForceUpdate),
                        l.linking.range.unsubscribe(this._bindedForceUpdate),
                        l.linking.supportedResolutions.unsubscribe(
                            this._bindedForceUpdate
                        ),
                        Pe.globalCloseDelegate.unsubscribe(
                            this,
                            this._handleGlobalClose
                        );
                }
                componentDidUpdate(e, t) {
                    this.state.lastAddedInterval &&
                        setTimeout(
                            () => this.setState({ lastAddedInterval: void 0 }),
                            400
                        );
                }
                render() {
                    const { isShownQuicks: e, id: t } = this.props,
                        {
                            activeInterval: a,
                            customs: n,
                            lastNotQuicked: s,
                            isAddIntervalDialogOpened: o,
                        } = this.state,
                        l = this._getQuicks(),
                        r = (0, ge.sortResolutions)([...l]);
                    void 0 !== a && r.includes(a)
                        ? void 0 !== s && r.push(s)
                        : void 0 !== a && r.push(a);
                    const c =
                            (!(!e || 0 === l.length) || void 0) && r.length > 1,
                        h = {},
                        d = (0, ge.mergeResolutions)(this._defaultIntervals, n);
                    (void 0 !== a ? d.concat(a) : d)
                        .filter(ge.isAvailable)
                        .forEach((e) => (h[e] = !0));
                    const u =
                        void 0 !== a
                            ? (0, ge.getTranslatedResolutionModel)(a)
                            : null;
                    return i.createElement(
                        b,
                        { id: t },
                        c &&
                            r.map((e, t) => {
                                const n = (0, ge.getTranslatedResolutionModel)(
                                    e
                                );
                                return i.createElement(w, {
                                    key: t,
                                    className: v(De.button, {
                                        [De.first]: 0 === t,
                                        [De.last]: t === r.length - 1,
                                        [De.newStyles]:
                                            L.hasNewHeaderToolbarStyles,
                                    }),
                                    text: i.createElement(Ce, {
                                        value: n.mayOmitMultiplier
                                            ? void 0
                                            : n.multiplier,
                                        metric: n.shortKind,
                                    }),
                                    hint: n.hint,
                                    isActive: a === e,
                                    isDisabled: !h[e] && e !== s,
                                    onClick: this._handeQuickClick,
                                    onClickArg: e,
                                    "data-value": e,
                                });
                            }),
                        i.createElement(
                            f.MatchMedia,
                            { rule: k.DialogBreakpoints.TabletSmall },
                            (e) =>
                                i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(
                                        ze.CloseDelegateContext.Provider,
                                        { value: Ue },
                                        i.createElement(
                                            m.ToolWidgetMenu,
                                            {
                                                arrow: Boolean(c),
                                                closeOnClickOutside: !0,
                                                content:
                                                    c || null === u
                                                        ? void 0
                                                        : i.createElement(
                                                              b,
                                                              {
                                                                  className:
                                                                      De.menuContent,
                                                              },
                                                              i.createElement(
                                                                  Ce,
                                                                  {
                                                                      value: u.mayOmitMultiplier
                                                                          ? void 0
                                                                          : u.multiplier,
                                                                      metric: u.shortKind,
                                                                  }
                                                              )
                                                          ),
                                                title:
                                                    c || null === u
                                                        ? Le.timeInterval
                                                        : u.hint,
                                                hotKey: c ? We : void 0,
                                                className: De.menu,
                                                ref: this._menu,
                                                isDrawer: e,
                                                onClick: this._trackClick,
                                            },
                                            i.createElement(
                                                "div",
                                                { className: De.dropdown },
                                                this._renderChildren(d, e)
                                            )
                                        )
                                    ),
                                    e &&
                                        o &&
                                        i.createElement(
                                            i.Suspense,
                                            { fallback: null },
                                            i.createElement(Be, {
                                                onAdd: this._handleAddInterval,
                                                onClose:
                                                    this
                                                        ._handleCloseAddIntervalDialog,
                                                onUnmount:
                                                    this
                                                        ._handleCloseAddIntervalDialog,
                                            })
                                        )
                                )
                        )
                    );
                }
                _createMenuItems(e, t) {
                    const a = (function (e) {
                        const t = Re(be.ResolutionKind.Ticks),
                            a = Re(be.ResolutionKind.Seconds),
                            n = Re(be.ResolutionKind.Minutes),
                            i = Re(be.SpecialResolutionKind.Hours),
                            s = Re(be.ResolutionKind.Days),
                            o = Re(be.ResolutionKind.Range);
                        return (
                            e.forEach((e) => {
                                const l = be.Interval.parse(e);
                                l.isMinuteHours()
                                    ? i.items.push(e)
                                    : l.isMinutes()
                                    ? (0, be.isHour)(Number(l.multiplier()))
                                        ? i.items.push(e)
                                        : n.items.push(e)
                                    : l.isSeconds()
                                    ? a.items.push(e)
                                    : l.isDWM()
                                    ? s.items.push(e)
                                    : l.isRange()
                                    ? o.items.push(e)
                                    : l.isTicks() && t.items.push(e);
                            }),
                            [t, a, n, i, s, o].filter(
                                (e) => 0 !== e.items.length
                            )
                        );
                    })(e).map((e, a, n) =>
                        this._renderResolutionsGroup(e, 1 === n.length, t)
                    );
                    return (function (e) {
                        let t = !1;
                        return e.filter((e, a, n) => {
                            let i = !0;
                            return (
                                e.type === y.PopupMenuSeparator &&
                                    ((0 !== a && a !== n.length - 1) ||
                                        (i = !1),
                                    t && (i = !1)),
                                (t = e.type === y.PopupMenuSeparator),
                                i
                            );
                        });
                    })([].concat(...a));
                }
                _createIntervalForm(e) {
                    if (this._customIntervals) {
                        const t = e
                            ? i.createElement(
                                  "div",
                                  {
                                      key: "add-dialog",
                                      className: De.addCustomInterval,
                                      onClick:
                                          this._handleOpenAddIntervalDialog,
                                  },
                                  (0, o.t)("Add custom interval") + "…"
                              )
                            : i.createElement(ke, {
                                  key: "add-form",
                                  onAdd: this._handleAddInterval,
                                  onCloseMenu: this._handleCloseMenu,
                                  onOpenMenu: this._handleOpenMenu,
                              });
                        return [
                            i.createElement(y.PopupMenuSeparator, {
                                key: "custom-interval-separator",
                            }),
                            t,
                        ];
                    }
                    return [];
                }
                _renderResolutionsGroup(e, t = !1, a) {
                    const n = [],
                        s = e.items.map((e) => this._renderPopupMenuItem(e, a));
                    if (t) n.push(...s);
                    else if (a) {
                        const t = i.createElement(
                            "div",
                            { key: e.id },
                            i.createElement(
                                "div",
                                { className: De.smallTabletSectionTitle },
                                e.name
                            ),
                            s
                        );
                        n.push(t);
                    } else {
                        const { intervalsMenuViewStateService: t } =
                                this.context,
                            { menuViewState: a } = this.state;
                        if (!t.isAllowed(e.id)) return [];
                        const o = i.createElement(
                            Ne.CollapsibleSection,
                            {
                                key: e.id,
                                className: De.section,
                                summary: e.name,
                                open: !a[e.id],
                                onStateChange:
                                    this._getHandleSectionStateChange(e.id),
                            },
                            s
                        );
                        n.push(o);
                    }
                    return (
                        (!e.mayOmitSeparator || e.items.length > 1) &&
                            (n.unshift(
                                i.createElement(y.PopupMenuSeparator, {
                                    key: "begin-" + e.name,
                                })
                            ),
                            n.push(
                                i.createElement(y.PopupMenuSeparator, {
                                    key: "end-" + e.name,
                                })
                            )),
                        n
                    );
                }
                _handleChangeFavorites(e) {
                    this.setState({ lastNotQuicked: void 0, favorites: e });
                }
                _handleChangeCustoms(e) {
                    this.setState({ customs: e });
                }
                _handleChangeMenuViewState(e) {
                    this.setState({ menuViewState: e }, () => {
                        this._menu.current && this._menu.current.update();
                    });
                }
                _renderPopupMenuItem(e, t) {
                    const { isFavoritingAllowed: a } = this.props,
                        { activeInterval: n, lastAddedInterval: s } =
                            this.state,
                        o = e === n,
                        l = (0, ge.isAvailable)(e),
                        r = this._isIntervalFavorite(e),
                        c = this._isIntervalDefault(e),
                        h = (0, ge.getTranslatedResolutionModel)(e);
                    return i.createElement(Ie, {
                        key: e,
                        isSmallTablet: t,
                        interval: e,
                        hint: h.hint,
                        isSignaling: s === e,
                        isFavoritingAllowed: a,
                        isDisabled: !l,
                        isFavorite: r,
                        isRemovable: !c,
                        isActive: o,
                        onClick: this._handleSelectInterval,
                        onClickRemove: this._handleRemoveInterval,
                        onClickFavorite: this._handleClickFavorite,
                        "data-value": e,
                    });
                }
                _isIntervalDefault(e) {
                    return this._defaultIntervals.includes(e);
                }
                _isIntervalFavorite(e) {
                    return this.state.favorites.includes(e);
                }
                _getQuicks(e) {
                    return this.props.isShownQuicks &&
                        "small" !== this.props.displayMode
                        ? void 0 === e
                            ? this.state.favorites
                            : e
                        : [];
                }
                _trackClick() {
                    0;
                }
            }
            Ge.contextType = Oe;
            var Ze = a(76521),
                Ye = a(74034);
            const Qe = { hint: (0, o.t)("Open chart in popup") },
                qe = (0, E.registryContextType)();
            class Ke extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const {
                                    chartWidgetCollection: e,
                                    windowMessageService: t,
                                    isFundamental: a,
                                } = this.context,
                                n = e.activeChartWidget.value();
                            n.withModel(null, () => {
                                t.post(parent, "openChartInPopup", {
                                    symbol: n
                                        .model()
                                        .mainSeries()
                                        .actualSymbol(),
                                    interval: n.model().mainSeries().interval(),
                                    fundamental: a,
                                });
                            });
                        }),
                        (0, E.validateRegistry)(t, {
                            isFundamental: s.any,
                            chartWidgetCollection: s.any.isRequired,
                            windowMessageService: s.any.isRequired,
                        });
                }
                render() {
                    const { className: e } = this.props;
                    return i.createElement(V.ToolWidgetIconButton, {
                        className: v(e, Ze.button),
                        icon: Ye,
                        onClick: this._handleClick,
                        title: Qe.hint,
                    });
                }
            }
            Ke.contextType = qe;
            var je = a(28289);
            const Je = { hint: (0, o.t)("Chart settings") },
                Xe = (0, E.registryContextType)();
            class $e extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const { chartWidgetCollection: e } = this.context,
                                t = e.activeChartWidget.value();
                            (0, D.trackEvent)(
                                "GUI",
                                "Chart Header Toolbar",
                                "chart properties"
                            ),
                                t.showGeneralChartProperties();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                        });
                }
                render() {
                    return i.createElement(V.ToolWidgetIconButton, {
                        ...this.props,
                        icon: je,
                        title: Je.hint,
                        onClick: this._handleClick,
                    });
                }
            }
            $e.contextType = Xe;
            var et = a(25760),
                tt = a(59199),
                at = a(68587),
                nt = a(49473);
            const it =
                    "M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z",
                st = 13.08991081237793,
                ot = {
                    strokeDashOffset: 49.242997817993164,
                    strokeDash: 49.866326904296876,
                    strokeGap: st,
                    strokeDashCheck: 0,
                },
                lt = {
                    strokeDashOffset: 62.956237716674806,
                    strokeGap: 0,
                    strokeDash: 62.956237716674806,
                    strokeDashCheck: 200,
                };
            class rt extends i.PureComponent {
                constructor(e) {
                    super(e), (this.state = ot);
                }
                componentDidMount() {
                    "saved" === this.props.state
                        ? this.setState(lt)
                        : this._goToNextState(this.props.state);
                }
                componentWillUnmount() {
                    this._currentAnimation = void 0;
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.state !== e.state &&
                        this._goToNextState(e.state);
                }
                render() {
                    const {
                            strokeDashOffset: e,
                            strokeDash: t,
                            strokeGap: a,
                            strokeDashCheck: n,
                        } = this.state,
                        {
                            className: s,
                            size: o,
                            onClick: l,
                            state: r,
                            isHovered: c = !1,
                        } = this.props,
                        h = v(nt.container, s, c && nt.hovered, {
                            [nt.unsaved]: "unsaved" === r,
                            [nt.saving]: "saving" === r,
                            [nt.saved]: "saved" === r,
                        });
                    return i.createElement(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: h,
                            version: "1.1",
                            width: o,
                            height: o,
                            viewBox: "0 0 28 28",
                            onClick: l,
                        },
                        i.createElement(
                            "g",
                            { fill: "none" },
                            i.createElement("path", {
                                className: nt.dottedCloud,
                                stroke: "currentColor",
                                strokeDasharray: "3.5,2.5",
                                d: it,
                            }),
                            i.createElement("path", {
                                className: nt.spinningCloud,
                                stroke: "currentColor",
                                strokeDasharray: `${t} ${a}`,
                                strokeDashoffset: e,
                                d: it,
                            }),
                            i.createElement("path", {
                                className: nt.arrowGap,
                                d: "M11 20h6v5h-6z",
                            }),
                            i.createElement(
                                "g",
                                { className: nt.arrow, stroke: "currentColor" },
                                i.createElement("path", {
                                    strokeLinecap: "square",
                                    d: "M14.5 14.5v10",
                                }),
                                i.createElement("path", {
                                    d: "M11 17l3.5-3.5L18 17",
                                })
                            ),
                            i.createElement(
                                "g",
                                { className: nt.check, stroke: "currentColor" },
                                i.createElement("path", {
                                    strokeDasharray: `${n}% ${200 - n}%`,
                                    d: "M10 15l2.5 2.5L18 12",
                                })
                            )
                        )
                    );
                }
                _goToNextState(e) {
                    switch (e) {
                        case "unsaved":
                            this.setState(ot);
                            break;
                        case "saving":
                            "unsaved" !== this.props.state && this.setState(ot),
                                (this._currentAnimation = Promise.resolve(
                                    this._currentAnimation
                                ).then(() =>
                                    this._createSpinAnimationWhile(
                                        () => "saving" === this.props.state
                                    )
                                ));
                            break;
                        case "saved":
                            this._currentAnimation = Promise.resolve(
                                this._currentAnimation
                            )
                                .then(this._createFillGapAnimation.bind(this))
                                .then(this._createCheckAnimation.bind(this));
                    }
                }
                _createSpinAnimationWhile(e) {
                    return this._createSpinAnimation().then(() =>
                        e()
                            ? this._createSpinAnimationWhile(e)
                            : Promise.resolve()
                    );
                }
                _createSpinAnimation() {
                    return new Promise((e) => {
                        (0, tt.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation &&
                                    this.setState({ strokeDashOffset: t });
                            },
                            onComplete: () => e(),
                            from: 49.242997817993164,
                            to: 111.57590644836426,
                            easing: at.easingFunc.linear,
                            duration: 1e3,
                        });
                    });
                }
                _createCheckAnimation() {
                    return new Promise((e) => {
                        (0, tt.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation &&
                                    this.setState({
                                        strokeDashCheck: Math.round(t),
                                    });
                            },
                            onComplete: () => e(),
                            from: 0,
                            to: 200,
                            easing: at.easingFunc.linear,
                            duration: 1e3,
                        });
                    });
                }
                _createFillGapAnimation() {
                    return new Promise((e) => {
                        (0, tt.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation &&
                                    this.setState({
                                        strokeDashOffset:
                                            62.956237716674806 - t,
                                        strokeGap: t,
                                        strokeDash: 62.956237716674806 - t,
                                    });
                            },
                            onComplete: () => e(),
                            from: st,
                            to: 0,
                            easing: at.easingFunc.linear,
                            duration: 200,
                        });
                    });
                }
            }
            var ct = a(40173),
                ht = a(84096),
                dt = a(28857);
            (0, ct.mergeThemes)(ht.DEFAULT_MENU_ITEM_SWITCHER_THEME, dt);
            var ut = a(82724),
                mt = a(16788),
                vt = a(96141),
                pt = a(4050);
            a(31405);
            const gt = n.enabled("widget"),
                bt = (0, ct.mergeThemes)(
                    S.DEFAULT_TOOL_WIDGET_BUTTON_THEME,
                    pt
                ),
                St = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    shortcut: vt.shortcut,
                }),
                Ct = {
                    copy: (0, o.t)("Copy"),
                    makeCopy: (0, o.t)("Make a Copy"),
                    newChartLayout: (0, o.t)("New Chart Layout"),
                    loadChartLayout: (0, ut.appendEllipsis)(
                        (0, o.t)("Load Chart Layout")
                    ),
                    rename: (0, ut.appendEllipsis)((0, o.t)("Rename")),
                    renameChartLayout: (0, o.t)("Rename Chart Layout"),
                    saveAs: (0, ut.appendEllipsis)((0, o.t)("Make a Copy")),
                    saveChartLayout: (0, o.t)("Save"),
                    saveChartLayoutLong: (0, o.t)(
                        "Save all charts for all symbols and intervals on your layout"
                    ),
                    manageChartLayouts: (0, o.t)("Manage Chart Layouts"),
                },
                _t = [],
                wt = (0, G.hotKeySerialize)({
                    keys: [
                        (0, Z.humanReadableModifiers)(Z.Modifiers.Mod, !1),
                        "S",
                    ],
                    text: "{0} + {1}",
                });
            class yt extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleSaveHoverBegin = () => {
                            this.setState({ iconHovered: !0 });
                        }),
                        (this._handleSaveHoverEnd = () => {
                            this.setState({ iconHovered: !1 });
                        }),
                        (this._handleCloneClick = () => {
                            var e, t;
                            null === (t = (e = this.props).onCloneChart) ||
                                void 0 === t ||
                                t.call(e),
                                this._trackClick();
                        }),
                        (this._handleSaveClick = () => {
                            var e, t;
                            null === (t = (e = this.props).onSaveChart) ||
                                void 0 === t ||
                                t.call(e),
                                this._trackClick();
                        }),
                        (this.state = { iconHovered: !1 });
                }
                render() {
                    const {
                            id: e,
                            isReadOnly: t,
                            displayMode: a,
                            isProcessing: n,
                            title: s,
                            chartId: o,
                            wasChanges: l,
                            hideMenu: r,
                            isTabletSmall: c,
                            dataNameSaveMenu: h,
                        } = this.props,
                        { iconHovered: u } = this.state,
                        p = !t && !r;
                    let g = "saved";
                    return (
                        (!l && s) || (g = "unsaved"),
                        n && (g = "saving"),
                        i.createElement(
                            b,
                            null,
                            t
                                ? i.createElement(
                                      b,
                                      null,
                                      i.createElement(P, {
                                          id: e,
                                          displayMode: a,
                                          icon: i.createElement(d.Icon, {
                                              icon: mt,
                                          }),
                                          isDisabled: n,
                                          onClick: this._handleCloneClick,
                                          text: Ct.copy,
                                          title: Ct.makeCopy,
                                          onMouseEnter:
                                              this._handleSaveHoverBegin,
                                          onMouseLeave:
                                              this._handleSaveHoverEnd,
                                          collapseWhen: _t,
                                      })
                                  )
                                : i.createElement(
                                      b,
                                      null,
                                      i.createElement(P, {
                                          id: e,
                                          className: v(
                                              vt.button,
                                              p && vt.buttonSmallPadding
                                          ),
                                          displayMode: a,
                                          icon: i.createElement(rt, {
                                              size: 28,
                                              state: g,
                                              isHovered: u,
                                          }),
                                          isDisabled: (o && !l) || n,
                                          onClick: this._handleSaveClick,
                                          text: s || Ct.saveChartLayout,
                                          title: Ct.saveChartLayoutLong,
                                          onMouseEnter:
                                              this._handleSaveHoverBegin,
                                          onMouseLeave:
                                              this._handleSaveHoverEnd,
                                          theme: bt,
                                          collapseWhen: _t,
                                          "data-tooltip-hotkey": gt ? "" : wt,
                                      }),
                                      p &&
                                          i.createElement(
                                              m.ToolWidgetMenu,
                                              {
                                                  "data-name": h,
                                                  className:
                                                      "js-save-load-menu-open-button",
                                                  arrow: !0,
                                                  isDrawer: c,
                                                  drawerPosition: "Bottom",
                                                  title: Ct.manageChartLayouts,
                                                  onClick: this._trackClick,
                                              },
                                              this._renderMenuItems(Boolean(c))
                                          )
                                  )
                        )
                    );
                }
                _renderMenuItems(e) {
                    const {
                            wasChanges: t,
                            isProcessing: a,
                            chartId: n,
                            onSaveChartFromMenu: s,
                            onRenameChart: l,
                            onSaveAsChart: r,
                            onLoadChart: c,
                            onNewChart: h,
                            isAutoSaveEnabled: d,
                            autoSaveId: m,
                            sharingId: p,
                            onAutoSaveChanged: g,
                            isSharingEnabled: b,
                            onSharingChanged: S,
                        } = this.props,
                        C = e ? M.multilineLabelWithIconAndToolboxTheme : St,
                        _ = e
                            ? void 0
                            : (0, Z.humanReadableHash)(Z.Modifiers.Mod + 83),
                        w = e ? void 0 : (0, o.t)("Dot", { context: "hotkey" }),
                        f = [];
                    return (
                        f.push(
                            i.createElement(u.PopupMenuItem, {
                                key: "save",
                                isDisabled: Boolean(a || (!t && n)),
                                label: Ct.saveChartLayout,
                                onClick: s,
                                shortcut: _,
                                labelRowClassName: v(
                                    e && vt.popupItemRowTabletSmall
                                ),
                                theme: C,
                                "data-name": "save-load-menu-item-save",
                            })
                        ),
                        void 0 !== n &&
                            (e ||
                                f.push(
                                    i.createElement(y.PopupMenuSeparator, {
                                        key: "existing-chart-section-begin",
                                    })
                                ),
                            f.push(
                                i.createElement(u.PopupMenuItem, {
                                    key: "rename",
                                    label: Ct.rename,
                                    onClick: l,
                                    labelRowClassName: v(
                                        e && vt.popupItemRowTabletSmall
                                    ),
                                    theme: C,
                                    "data-name": "save-load-menu-item-rename",
                                }),
                                i.createElement(u.PopupMenuItem, {
                                    key: "save-as",
                                    label: Ct.saveAs,
                                    onClick: r,
                                    labelRowClassName: v(
                                        e && vt.popupItemRowTabletSmall
                                    ),
                                    theme: C,
                                    "data-name": "save-load-menu-item-clone",
                                })
                            )),
                        f.push(
                            i.createElement(y.PopupMenuSeparator, {
                                key: "platform-section-begin",
                            })
                        ),
                        f.push(
                            i.createElement(u.PopupMenuItem, {
                                key: "load-chart",
                                className: "js-save-load-menu-item-load-chart",
                                label: Ct.loadChartLayout,
                                onClick: c,
                                labelRowClassName: v(
                                    e && vt.popupItemRowTabletSmall
                                ),
                                theme: C,
                                shortcut: w,
                                "data-name": "save-load-menu-item-load",
                            })
                        ),
                        f
                    );
                }
                _trackClick() {
                    0;
                }
            }
            const ft = (0, E.registryContextType)();
            class kt extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._syncState = (e) => {
                            this.setState(e);
                        }),
                        (this._onChangeHasChanges = (e) => {
                            this.state.wasChanges !== e &&
                                this.setState({ wasChanges: e });
                        }),
                        (this._onChangeAutoSaveEnabled = (e) => {
                            0;
                        }),
                        (this._onChangeSharingEnabled = (e) => {
                            this.setState({ isSharingEnabled: e });
                        }),
                        (this._onChangeTitle = (e) => {
                            this.setState({ title: e });
                        }),
                        (this._onChangeId = (e) => {
                            this.setState({ id: e });
                        }),
                        (this._onChartAboutToBeSaved = () => {
                            this.setState({ isProcessing: !0 });
                        }),
                        (this._onChartSaved = () => {
                            this.setState({ isProcessing: !1 });
                        }),
                        (this._handleAutoSaveEnabled = (e) => {
                            0;
                        }),
                        (this._handleSharingEnabled = (e) => {
                            0;
                        }),
                        (this._handleClickSave = () => {
                            this.context.saveChartService.saveChartOrShowTitleDialog(),
                                this._trackEvent("Save click");
                        }),
                        (this._handleClickSaveFromMenu = () => {
                            this.context.saveChartService.saveChartOrShowTitleDialog(),
                                this._trackEvent("Save From Menu");
                        }),
                        (this._handleClickClone = () => {
                            this.context.saveChartService.cloneChart();
                        }),
                        (this._handleClickSaveAs = () => {
                            this.context.saveChartService.saveChartAs(),
                                this._trackEvent("Make a copy");
                        }),
                        (this._handleClickNew = () => {
                            this._trackEvent("New chart layout");
                        }),
                        (this._handleClickLoad = () => {
                            this.context.loadChartService.showLoadDialog(),
                                this._trackEvent("Load chart layout");
                        }),
                        (this._handleHotkey = () => {
                            this.context.loadChartService.showLoadDialog();
                        }),
                        (this._handleClickRename = () => {
                            this.context.saveChartService.renameChart(),
                                this._trackEvent("Rename");
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                            chartChangesWatcher: s.any.isRequired,
                            saveChartService: s.any.isRequired,
                            sharingChartService: s.any,
                            loadChartService: s.any.isRequired,
                        });
                    const {
                        chartWidgetCollection: a,
                        chartChangesWatcher: n,
                        saveChartService: i,
                        sharingChartService: o,
                    } = t;
                    this.state = {
                        isAuthenticated: window.is_authenticated,
                        isProcessing: !1,
                        id: a.metaInfo.id.value(),
                        title: a.metaInfo.name.value(),
                        wasChanges: n.hasChanges(),
                        iconHovered: !1,
                    };
                }
                componentDidMount() {
                    const {
                            chartSaver: e,
                            isFake: t,
                            stateSyncEmitter: a,
                        } = this.props,
                        {
                            chartWidgetCollection: n,
                            chartChangesWatcher: i,
                            saveChartService: s,
                            sharingChartService: l,
                        } = this.context;
                    t
                        ? a.on("change", this._syncState)
                        : (i
                              .getOnChange()
                              .subscribe(this, this._onChangeHasChanges),
                          n.metaInfo.name.subscribe(this._onChangeTitle),
                          n.metaInfo.id.subscribe(this._onChangeId),
                          (this._hotkeys = (0, et.createGroup)({
                              desc: "Save/Load",
                          })),
                          this._hotkeys.add({
                              desc: (0, o.t)("Load Chart Layout"),
                              handler: this._handleHotkey,
                              hotkey: 190,
                          }),
                          e.chartSaved().subscribe(this, this._onChartSaved),
                          e
                              .chartAboutToBeSaved()
                              .subscribe(this, this._onChartAboutToBeSaved),
                          window.loginStateChange.subscribe(
                              this,
                              this._onLoginStateChange
                          ));
                }
                componentDidUpdate(e, t) {
                    this.props.isFake ||
                        (t !== this.state &&
                            this.props.stateSyncEmitter.emit(
                                "change",
                                this.state
                            ));
                }
                componentWillUnmount() {
                    const {
                            chartSaver: e,
                            isFake: t,
                            stateSyncEmitter: a,
                        } = this.props,
                        {
                            chartWidgetCollection: n,
                            chartChangesWatcher: i,
                            saveChartService: s,
                            sharingChartService: o,
                        } = this.context;
                    t
                        ? a.off("change", this._syncState)
                        : (i
                              .getOnChange()
                              .unsubscribe(this, this._onChangeHasChanges),
                          n.metaInfo.name.unsubscribe(this._onChangeTitle),
                          n.metaInfo.id.unsubscribe(this._onChangeId),
                          (0, X.ensureDefined)(this._hotkeys).destroy(),
                          e.chartSaved().unsubscribe(this, this._onChartSaved),
                          e
                              .chartAboutToBeSaved()
                              .unsubscribe(this, this._onChartAboutToBeSaved),
                          window.loginStateChange.unsubscribe(
                              this,
                              this._onLoginStateChange
                          ));
                }
                render() {
                    const {
                            isReadOnly: e,
                            displayMode: t,
                            id: a,
                            isFake: n,
                        } = this.props,
                        {
                            isProcessing: s,
                            isAuthenticated: o,
                            title: l,
                            id: r,
                            wasChanges: c,
                            isAutoSaveEnabled: h,
                            isSharingEnabled: d,
                        } = this.state,
                        u = {
                            displayMode: t,
                            isReadOnly: e,
                            isAuthenticated: o,
                            isProcessing: s,
                            wasChanges: c,
                            title: l,
                            id: a,
                            chartId: null !== r ? r : void 0,
                            dataNameSaveMenu: n ? void 0 : "save-load-menu",
                            onCloneChart: this._handleClickClone,
                            onSaveChart: this._handleClickSave,
                            onSaveChartFromMenu: this._handleClickSaveFromMenu,
                            onRenameChart: this._handleClickRename,
                            onSaveAsChart: this._handleClickSaveAs,
                            onLoadChart: this._handleClickLoad,
                        };
                    return i.createElement(
                        f.MatchMedia,
                        { rule: k.DialogBreakpoints.TabletSmall },
                        (e) => i.createElement(yt, { ...u, isTabletSmall: e })
                    );
                }
                _onLoginStateChange() {
                    this.setState({ isAuthenticated: window.is_authenticated });
                }
                _trackEvent(e) {
                    0;
                }
            }
            kt.contextType = ft;
            var Mt = a(20301),
                Et = a(95792),
                Tt = a(82029);
            const xt = new Et.DateTimeFormatter({
                    dateTimeSeparator: "_",
                    timeFormat: "%h-%m-%s",
                }),
                It = { takeSnapshot: (0, o.t)("Take a snapshot") },
                At = (0, E.registryContextType)();
            const Rt = o.t("Loading...");
            function Nt(e, t, a) {
                return (async function (e, t, a) {
                    const n = URL.createObjectURL(
                        new Blob(
                            [
                                `<!doctype html><html style="background-color:${
                                    getComputedStyle(document.documentElement)
                                        .backgroundColor
                                }"><head><meta charset="utf-8"><title>${Rt}</title></head><body style="background-color:${
                                    getComputedStyle(document.body)
                                        .backgroundColor
                                }"></body></html>`,
                            ],
                            { type: "text/html" }
                        )
                    );
                    try {
                        const i = open(n, t, a);
                        if (!i) throw new Error("cound not open a new tab");
                        const s = await e.catch(() => {});
                        void 0 !== s ? i.location.replace(s) : i.close();
                    } finally {
                        URL.revokeObjectURL(n);
                    }
                })(e, t, a);
            }
            var Ft = a(65446),
                Ht = a(58455),
                zt = a(91887);
            function Pt(e) {
                const t = v(e.isLoading && zt.hidden),
                    a = v(!e.isLoading && zt.hidden);
                return i.createElement(
                    "div",
                    null,
                    i.createElement("span", { className: t }, e.children),
                    i.createElement(
                        "span",
                        { className: a },
                        i.createElement(ne.Loader, null)
                    )
                );
            }
            var Dt = a(76974),
                Lt = a(60498),
                Wt = a(17191),
                Ot = a(37402),
                Ut = a(50377),
                Bt = a(86149),
                Vt = a(75492);
            const Gt = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, Vt);
            function Zt(e) {
                const { serverSnapshot: t, clientSnapshot: n } = e,
                    [s, l] = (0, i.useState)(!1),
                    [r, c] = (0, i.useState)(!1),
                    [h, d] = (0, i.useState)(!1),
                    m = (0, Dt.useIsMounted)(),
                    p = (0, i.useCallback)(async () => {
                        var e;
                        const t = n(),
                            a = t.then(
                                (e) =>
                                    new Promise((t) =>
                                        e.canvas.toBlob((e) => {
                                            null !== e && t(e);
                                        })
                                    )
                            );
                        try {
                            await (0, Ft.writePromiseUsingApi)(a, "image/png"),
                                re.emit("onClientScreenshotCopiedToClipboard");
                        } catch (a) {
                            const { canvas: n } = await t;
                            null === (e = window.open()) ||
                                void 0 === e ||
                                e.document.write(
                                    `<img width="100%" src="${n.toDataURL()}"/>`
                                );
                        }
                    }, [n]),
                    g = (0, i.useCallback)(async () => {
                        const e = await n(),
                            t = await (function (e) {
                                return new Promise((t) => {
                                    try {
                                        e.canvas.toBlob((e) => {
                                            if (null === e)
                                                throw new Error(
                                                    "Unable to generate blob"
                                                );
                                            t(URL.createObjectURL(e));
                                        });
                                    } catch (a) {
                                        t(e.canvas.toDataURL());
                                    }
                                });
                            })(e);
                        t && (0, Ht.downloadFile)(e.name + ".png", t);
                    }, [n]),
                    b = (e) => Nt(e.then((e) => e.imageUrl)),
                    S = (0, i.useCallback)(
                        async (e = !1) => {
                            const a = t();
                            try {
                                if (e) await b(a);
                                else {
                                    const e = a.then(
                                        (e) =>
                                            new Blob([e.imageUrl], {
                                                type: "text/plain",
                                            })
                                    );
                                    await (0, Ft.writePromiseUsingApi)(
                                        e,
                                        "text/plain"
                                    ),
                                        re.emit(
                                            "onServerScreenshotCopiedToClipboard"
                                        );
                                }
                                return !0;
                            } catch (e) {
                                return b(a), !0;
                            } finally {
                                m.current &&
                                    (c(!1), l(!1), (0, Pe.globalCloseMenu)());
                            }
                        },
                        [t]
                    ),
                    C = (0, i.useCallback)(async () => {
                        d(!0);
                        const [e, n] = await Promise.all([
                            a.e(4665).then(a.bind(a, 2679)),
                            t(),
                        ]);
                        e.Twitter.shareSnapshotInstantly(n.symbol, n.imageUrl),
                            m.current && (d(!1), (0, Pe.globalCloseMenu)());
                    }, [t]);
                return i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(u.PopupMenuItem, {
                        "data-name": "save-chart-image",
                        label: (0, o.t)("Save chart image"),
                        icon: Ot,
                        onClick: g,
                        shortcut: (0, Z.humanReadableHash)(
                            Z.Modifiers.Mod + Z.Modifiers.Alt + 83
                        ),
                        theme: Gt,
                    }),
                    i.createElement(u.PopupMenuItem, {
                        "data-name": "copy-chart-image",
                        label: (0, o.t)("Copy chart image"),
                        icon: Wt,
                        onClick: p,
                        shortcut: (0, Z.humanReadableHash)(
                            Z.Modifiers.Mod + Z.Modifiers.Shift + 83
                        ),
                        theme: Gt,
                    }),
                    i.createElement(u.PopupMenuItem, {
                        "data-name": "copy-link-to-the-chart-image",
                        label: i.createElement(
                            Pt,
                            { isLoading: s },
                            (0, o.t)("Copy link to the chart image")
                        ),
                        icon: Ut,
                        onClick: () => {
                            l(!0), S(!1);
                        },
                        dontClosePopup: !0,
                        isDisabled: s,
                        shortcut: (0, Z.humanReadableHash)(
                            Z.Modifiers.Alt + 83
                        ),
                        className: v(s && Vt.loading),
                        theme: Gt,
                    }),
                    i.createElement(u.PopupMenuItem, {
                        "data-name": "open-image-in-new-tab",
                        label: i.createElement(
                            Pt,
                            { isLoading: r },
                            (0, o.t)("Open image in new tab")
                        ),
                        icon: Bt,
                        onClick: () => {
                            c(!0), S(!0);
                        },
                        dontClosePopup: !0,
                        isDisabled: r,
                        className: v(r && Vt.loading),
                        theme: Gt,
                    }),
                    i.createElement(u.PopupMenuItem, {
                        "data-name": "tweet-chart-image",
                        label: i.createElement(
                            Pt,
                            { isLoading: h },
                            (0, o.t)("Tweet chart image")
                        ),
                        icon: Lt,
                        onClick: C,
                        dontClosePopup: !0,
                        isDisabled: h,
                        className: v(h && Vt.loading),
                        theme: Gt,
                    })
                );
            }
            var Yt = a(84015);
            function Qt(e) {
                const [t, a] = (0, i.useState)(!1),
                    n = (0, Dt.useIsMounted)(),
                    s = (0, i.useCallback)(async () => {
                        a(!0), await e.serverSnapshot(), n.current && a(!1);
                    }, [e.serverSnapshot]);
                return i.createElement(S.ToolWidgetButton, {
                    id: e.id,
                    className: e.className,
                    isDisabled: t,
                    onClick: s,
                    title: e.tooltip,
                    icon: e.icon,
                });
            }
            var qt = a(62346);
            const Kt =
                ((jt = function (e) {
                    return (0, Yt.isOnMobileAppPage)("any")
                        ? i.createElement(Qt, { ...e, icon: qt })
                        : i.createElement(
                              m.ToolWidgetMenu,
                              {
                                  content: i.createElement(S.ToolWidgetButton, {
                                      id: e.id,
                                      className: e.className,
                                      title: e.tooltip,
                                      icon: qt,
                                  }),
                                  drawerPosition: "Bottom",
                                  drawerBreakpoint:
                                      k.DialogBreakpoints.TabletSmall,
                                  arrow: !1,
                                  onClick: function () {},
                              },
                              i.createElement(Zt, { ...e })
                          );
                }),
                ((Jt = class extends i.PureComponent {
                    constructor(e, t) {
                        super(e, t),
                            (this._clientSnapshot = async () => {
                                const e =
                                    this.context.chartWidgetCollection.activeChartWidget
                                        .value()
                                        .model()
                                        .mainSeries()
                                        .actualSymbol();
                                return {
                                    canvas: await this.context.chartWidgetCollection.clientSnapshot(),
                                    name: `${(0, Tt.shortName)(
                                        e
                                    )}_${xt.formatLocal(new Date())}`,
                                };
                            }),
                            (this._serverSnapshot = async () => {
                                const e =
                                        this.context.chartWidgetCollection.activeChartWidget
                                            .value()
                                            .model()
                                            .mainSeries()
                                            .actualSymbol(),
                                    t =
                                        await this.context.chartWidgetCollection.takeScreenshot(),
                                    a =
                                        n.enabled("charting_library_base") &&
                                        void 0 !== this.context.snapshotUrl
                                            ? t
                                            : (0, Mt.convertImageNameToUrl)(t);
                                return {
                                    symbol: (0, Tt.shortName)(e),
                                    imageUrl: a,
                                };
                            }),
                            (0, E.validateRegistry)(t, {
                                chartWidgetCollection: s.any.isRequired,
                            });
                    }
                    render() {
                        const { className: e, id: t } = this.props;
                        return i.createElement(jt, {
                            id: t,
                            className: e,
                            tooltip: It.takeSnapshot,
                            serverSnapshot: this._serverSnapshot,
                            clientSnapshot: this._clientSnapshot,
                        });
                    }
                }).contextType = At),
                Jt);
            var jt,
                Jt,
                Xt = a(38318),
                $t = a(39362),
                ea = a(11181);
            class ta {
                async show(e) {
                    if (null !== ta._provider) {
                        const e = await ta._provider.getSymbol();
                        return l.linking.symbol.setValue(e.symbol), e;
                    }
                    if (ta._currentShowingInstance)
                        throw new DOMException(
                            "SymbolSearchUI is already shown",
                            "InvalidStateError"
                        );
                    try {
                        (ta._currentShowingInstance = this), ta.preload();
                        const t = await ta._implementation;
                        return (
                            (0, X.assert)(null !== t),
                            new Promise((a) => {
                                t.showDefaultSearchDialog({
                                    ...e,
                                    onSearchComplete: (e) => {
                                        a({ symbol: e });
                                    },
                                });
                            })
                        );
                    } finally {
                        ta._currentShowingInstance = null;
                    }
                }
                static setProvider(e) {
                    this._provider = e;
                }
                static preload() {
                    null === this._provider &&
                        null === this._implementation &&
                        (this._implementation = (0, ea.loadNewSymbolSearch)());
                }
            }
            (ta._currentShowingInstance = null),
                (ta._provider = null),
                (ta._implementation = null);
            var aa = a(67397),
                na = a(72597);
            const ia = (0, ct.mergeThemes)(
                S.DEFAULT_TOOL_WIDGET_BUTTON_THEME,
                aa
            );
            (0, ct.mergeThemes)(ia, na);
            class sa extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._openSymbolSearchDialog = async (e) => {
                            if (
                                (0, Z.modifiersFromEvent)(e) !== Z.Modifiers.Alt
                            )
                                try {
                                    (0, D.trackEvent)(
                                        "GUI",
                                        "SS",
                                        "main search"
                                    ),
                                        await new ta().show({
                                            defaultValue: this._isSpread(
                                                this.state.symbol
                                            )
                                                ? this.state.symbol
                                                : this.state.shortName,
                                            showSpreadActions:
                                                (0,
                                                Xt.canShowSpreadActions)() &&
                                                this.props.isActionsVisible,
                                            source: "searchBar",
                                            footer: Te.mobiletouch
                                                ? void 0
                                                : i.createElement(
                                                      $t.SymbolSearchDialogFooter,
                                                      null,
                                                      (0, o.t)(
                                                          "Simply start typing while on the chart to pull up this search box"
                                                      )
                                                  ),
                                        });
                                } catch (e) {}
                            else
                                navigator.clipboard.writeText(
                                    this.state.symbol
                                );
                        }),
                        (this._isSpread = (e) => !1),
                        (this._onSymbolChanged = () => {
                            const e = l.linking.symbol.value();
                            this.setState({ symbol: e, shortName: oa() });
                        }),
                        (this.state = {
                            symbol: l.linking.symbol.value(),
                            shortName: oa(),
                        });
                }
                componentDidMount() {
                    l.linking.symbol.subscribe(this._onSymbolChanged),
                        l.linking.seriesShortSymbol.subscribe(
                            this._onSymbolChanged
                        ),
                        ta.preload();
                }
                componentWillUnmount() {
                    l.linking.symbol.unsubscribe(this._onSymbolChanged),
                        l.linking.seriesShortSymbol.unsubscribe(
                            this._onSymbolChanged
                        );
                }
                render() {
                    const { id: e, className: t } = this.props;
                    return i.createElement(S.ToolWidgetButton, {
                        id: e,
                        className: p()(
                            t,
                            n.enabled("uppercase_instrument_names") &&
                                aa.uppercase,
                            aa.largeLeftPadding
                        ),
                        theme: ia,
                        icon: void 0,
                        text: this.state.shortName,
                        title: (0, o.t)("Symbol Search"),
                        onClick: this._openSymbolSearchDialog,
                    });
                }
                async _updateQuotes(e) {}
            }
            function oa() {
                return (
                    l.linking.seriesShortSymbol.value() ||
                    l.linking.symbol.value() ||
                    ""
                );
            }
            var la = a(52157);
            class ra extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleClick = (e) => {
                            e.stopPropagation();
                            const { onApply: t, item: a } = this.props;
                            t(a);
                        });
                }
                render() {
                    const { className: e, item: t } = this.props;
                    return i.createElement(
                        "div",
                        {
                            className: v(e, la.item, "apply-common-tooltip"),
                            onClick: this._handleClick,
                            title: t.name,
                        },
                        i.createElement(
                            "div",
                            { className: la.round },
                            t.name.length > 0 ? t.name[0].toUpperCase() : " "
                        )
                    );
                }
            }
            var ca = a(23177),
                ha = a(75668);
            function da(e) {
                return i.createElement(
                    "div",
                    { className: v(ha.description, e.className) },
                    e.children
                );
            }
            var ua = a(14621);
            const ma = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    labelRow: ua.labelRow,
                    toolbox: ua.toolbox,
                    item: ua.titleItem,
                }),
                va = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    labelRow: ua.labelRow,
                    toolbox: ua.toolbox,
                    item: ua.titleItemTabletSmall,
                }),
                pa = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    item: ua.item,
                }),
                ga = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    item: ua.itemTabletSmall,
                });
            function ba(e) {
                const {
                        item: t,
                        onApply: a,
                        onRemove: n,
                        onFavor: s,
                        favorite: o,
                        isFavoritingAllowed: l,
                        isTabletSmall: r,
                    } = e,
                    [c, d] = (0, Ee.useHover)(),
                    m = t.meta_info,
                    v = m ? (0, ca.descriptionString)(m.indicators) : void 0,
                    g = r ? va : ma,
                    b = r ? ga : pa,
                    S = (0, i.useCallback)(() => a(t), [a, t]),
                    C = (0, i.useCallback)(() => n(t), [n, t]),
                    _ = (0, i.useCallback)(() => {
                        s && s(t);
                    }, [s, t]);
                return i.createElement(
                    "div",
                    {
                        ...d,
                        className: ua.wrap,
                        "data-name": t.name,
                        "data-id": t.id,
                        "data-is-default": Boolean(t.is_default),
                    },
                    i.createElement(u.PopupMenuItem, {
                        theme: g,
                        label: t.name,
                        labelRowClassName: p()(r && ua.itemLabelTabletSmall),
                        isHovered: c,
                        showToolboxOnHover: !o && !c,
                        onClick: S,
                        toolbox: i.createElement(
                            i.Fragment,
                            null,
                            !t.is_default &&
                                i.createElement(Me.RemoveButton, {
                                    key: "remove",
                                    hidden: !Te.touch && !c,
                                    onClick: C,
                                }),
                            Boolean(s) &&
                                l &&
                                i.createElement(h.FavoriteButton, {
                                    key: "favorite",
                                    isFilled: Boolean(o),
                                    onClick: _,
                                })
                        ),
                    }),
                    v &&
                        i.createElement(u.PopupMenuItem, {
                            theme: b,
                            label: i.createElement(
                                da,
                                {
                                    className: p()(
                                        ua.description,
                                        r && ua.descriptionTabletSmall
                                    ),
                                },
                                v
                            ),
                            onClick: S,
                            isHovered: c,
                        })
                );
            }
            var Sa = a(25382),
                Ca = a(41939);
            const _a = (0, ct.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, Ca),
                wa = {
                    text: (0, ut.appendEllipsis)(
                        (0, o.t)("Save Indicator template")
                    ),
                };
            function ya(e) {
                const { onClick: t, isTabletSmall: a } = e;
                return i.createElement(u.PopupMenuItem, {
                    theme: _a,
                    className: Ca.wrap,
                    label: i.createElement(
                        "div",
                        { className: Ca.titleWrap },
                        i.createElement(
                            "div",
                            {
                                className: p()(
                                    Ca.title,
                                    a && Ca.titleTabletSmall
                                ),
                            },
                            i.createElement(d.Icon, {
                                className: Ca.icon,
                                icon: Sa,
                            }),
                            i.createElement(
                                "div",
                                { className: Ca.text },
                                wa.text
                            )
                        )
                    ),
                    onClick: t,
                });
            }
            var fa = a(36947),
                ka = a(64706);
            const Ma = i.createContext(null);
            var Ea = a(89227);
            function Ta(e) {
                const {
                        templates: t,
                        favorites: a,
                        onTemplateSave: n,
                        onTemplateRemove: s,
                        onTemplateSelect: o,
                        onTemplateFavorite: l,
                        isTabletSmall: r,
                        isLoading: c,
                    } = e,
                    h = (0, i.useMemo)(
                        () => t.filter((e) => e.is_default),
                        [t]
                    ),
                    d = (0, i.useMemo)(
                        () => t.filter((e) => !e.is_default),
                        [t]
                    ),
                    u = (0, i.useMemo)(
                        () => new Set(a.map((e) => e.name)),
                        [a]
                    ),
                    m = (0, i.useContext)(Ma),
                    v = (0, i.useContext)(ka.MenuContext),
                    g = (0, fa.useForceUpdate)();
                (0, i.useEffect)(() => {
                    if (null !== m) {
                        const e = {};
                        return (
                            m.getOnChange().subscribe(e, () => {
                                g(), v && v.update();
                            }),
                            () => m.getOnChange().unsubscribeAll(e)
                        );
                    }
                    return () => {};
                }, []);
                const b = (e) =>
                    i.createElement(ba, {
                        key: e.name,
                        item: e,
                        isFavoritingAllowed: Boolean(l),
                        favorite: u.has(e.name),
                        onApply: o,
                        onFavor: l,
                        onRemove: s,
                        isTabletSmall: r,
                    });
                return i.createElement(
                    "div",
                    { className: p()(Ea.menu, r && Ea.menuSmallTablet) },
                    i.createElement(ya, { onClick: n, isTabletSmall: r }),
                    c &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(se, null)
                        ),
                    !c &&
                        (r
                            ? i.createElement(xa, {
                                  defaults: h,
                                  customs: d,
                                  render: b,
                              })
                            : i.createElement(Ia, {
                                  defaults: h,
                                  customs: d,
                                  render: b,
                                  state: m,
                              }))
                );
            }
            function xa(e) {
                const { defaults: t, customs: a, render: n } = e;
                return i.createElement(
                    i.Fragment,
                    null,
                    a.length > 0 &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(
                                le,
                                { className: Ea.menuItemHeaderTabletSmall },
                                (0, o.t)("My templates")
                            ),
                            a.map(n)
                        ),
                    t.length > 0 &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(
                                le,
                                { className: Ea.menuItemHeaderTabletSmall },
                                (0, o.t)("Default templates")
                            ),
                            t.map(n)
                        )
                );
            }
            function Ia(e) {
                const { defaults: t, customs: a, render: n, state: s } = e;
                return i.createElement(
                    i.Fragment,
                    null,
                    a.length > 0 &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(
                                le,
                                { className: Ea.menuItemHeader },
                                (0, o.t)("My templates")
                            ),
                            a.map(n)
                        ),
                    a.length > 0 &&
                        t.length > 0 &&
                        s &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(
                                Ne.CollapsibleSection,
                                {
                                    summary: (0, o.t)("Default templates"),
                                    open: !s.get().defaultsCollapsed,
                                    onStateChange: (e) =>
                                        s.set({ defaultsCollapsed: !e }),
                                },
                                t.map(n)
                            )
                        ),
                    0 === a.length &&
                        t.length > 0 &&
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(y.PopupMenuSeparator, null),
                            i.createElement(
                                le,
                                { className: Ea.menuItemHeader },
                                (0, o.t)("Default templates")
                            ),
                            t.map(n)
                        )
                );
            }
            var Aa = a(52714),
                Ra = a.n(Aa);
            class Na {
                constructor(e, t) {
                    var a, i;
                    (this._isFavoriteEnabled = n.enabled("items_favoriting")),
                        (this.handleFavorTemplate = (e) => {
                            if (!this._isFavoriteEnabled) return;
                            const { name: t } = e;
                            this._isTemplateFavorite(t)
                                ? this._removeFavoriteTemplate(t)
                                : this._addFavoriteTemplate(t);
                        }),
                        (this.handleDropdownOpen = () => {
                            this._setState({ isLoading: !0 }),
                                this._studyTemplates.invalidate(),
                                this._studyTemplates.refreshStudyTemplateList(
                                    () => this._setState({ isLoading: !1 })
                                );
                        }),
                        (this.handleApplyTemplate = (e) => {
                            this._studyTemplates.applyTemplate(e.name);
                        }),
                        (this.handleRemoveTemplate = (e) => {
                            this._studyTemplates.deleteStudyTemplate(e.name);
                        }),
                        (this.handleSaveTemplate = () => {
                            this._studyTemplates.showSaveAsDialog();
                        }),
                        (this._studyTemplates = e),
                        (this._favoriteStudyTemplatesService = t);
                    const s =
                            (null ===
                                (a = this._favoriteStudyTemplatesService) ||
                            void 0 === a
                                ? void 0
                                : a.get()) || [],
                        o = this._studyTemplates.list();
                    (this._state = new (Ra())({
                        isLoading: !1,
                        studyTemplatesList: o,
                        favorites: s,
                    })),
                        this._studyTemplates
                            .getOnChange()
                            .subscribe(this, this._handleTemplatesChange),
                        this._studyTemplates.refreshStudyTemplateList(),
                        this._isFavoriteEnabled &&
                            (null ===
                                (i = this._favoriteStudyTemplatesService) ||
                                void 0 === i ||
                                i
                                    .getOnChange()
                                    .subscribe(
                                        this,
                                        this._handleFavoritesChange
                                    ));
                }
                destroy() {
                    var e;
                    this._studyTemplates
                        .getOnChange()
                        .unsubscribe(this, this._handleTemplatesChange),
                        this._isFavoriteEnabled &&
                            (null ===
                                (e = this._favoriteStudyTemplatesService) ||
                                void 0 === e ||
                                e
                                    .getOnChange()
                                    .unsubscribe(
                                        this,
                                        this._handleFavoritesChange
                                    ));
                }
                state() {
                    return this._state.readonly();
                }
                _setState(e) {
                    this._state.setValue({ ...this._state.value(), ...e });
                }
                _handleTemplatesChange() {
                    this._setState({
                        studyTemplatesList: this._studyTemplates.list(),
                    });
                }
                _handleFavoritesChange(e) {
                    this._isFavoriteEnabled && this._setState({ favorites: e });
                }
                _removeFavoriteTemplate(e) {
                    var t;
                    const { favorites: a } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) ||
                        void 0 === t ||
                        t.set(a.filter((t) => t !== e));
                }
                _addFavoriteTemplate(e) {
                    var t;
                    const { favorites: a } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) ||
                        void 0 === t ||
                        t.set([...a, e]);
                }
                _isTemplateFavorite(e) {
                    const { favorites: t } = this._state.value();
                    return t.includes(e);
                }
            }
            var Fa = a(36257),
                Ha = a(73887);
            const za = {
                    title: (0, o.t)("Templates"),
                    tooltip: (0, o.t)("Indicator Templates"),
                },
                Pa = (0, E.registryContextType)();
            class Da extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._updateState = (e) => {
                            this.setState({
                                ...e,
                                isActive: this.state.isActive,
                            });
                        }),
                        (this._handleApplyTemplate = (e) => {
                            this._handleClose(),
                                this._model.handleApplyTemplate(e);
                        }),
                        (this._handleRemoveTemplate = (e) => {
                            this._handleClose(),
                                this._model.handleRemoveTemplate(e);
                        }),
                        (this._handleClose = () => {
                            this._handleToggleDropdown(!1);
                        }),
                        (this._handleToggleDropdown = (e) => {
                            const { isActive: t } = this.state,
                                a = "boolean" == typeof e ? e : !t;
                            this.setState({ isActive: a });
                        }),
                        (0, E.validateRegistry)(t, {
                            favoriteStudyTemplatesService: s.any,
                            studyTemplates: s.any.isRequired,
                            templatesMenuViewStateService: s.any,
                        });
                    const {
                        favoriteStudyTemplatesService: a,
                        studyTemplates: n,
                    } = t;
                    (this._model = new Na(n, a)),
                        (this.state = {
                            ...this._model.state().value(),
                            isActive: !1,
                        });
                }
                componentDidMount() {
                    this._model.state().subscribe(this._updateState);
                }
                componentWillUnmount() {
                    this._model.state().unsubscribe(this._updateState),
                        this._model.destroy();
                }
                render() {
                    const { studyTemplatesList: e, favorites: t } = this.state,
                        {
                            isShownQuicks: a,
                            className: n,
                            displayMode: s,
                            id: o,
                        } = this.props;
                    return i.createElement(
                        Ma.Provider,
                        {
                            value:
                                this.context.templatesMenuViewStateService ||
                                null,
                        },
                        i.createElement(La, {
                            id: o,
                            className: n,
                            mode: s,
                            templates: e,
                            favorites: t,
                            onMenuOpen: this._model.handleDropdownOpen,
                            onTemplateFavorite: a
                                ? this._model.handleFavorTemplate
                                : void 0,
                            onTemplateSelect: this._handleApplyTemplate,
                            onTemplateRemove: this._handleRemoveTemplate,
                            onTemplateSave: this._model.handleSaveTemplate,
                        })
                    );
                }
            }
            function La(e) {
                const {
                        id: t,
                        className: a,
                        mode: n,
                        favorites: s,
                        templates: o,
                        isMenuOpen: l,
                        onTemplateSelect: r,
                        onTemplateSave: c,
                        onTemplateFavorite: h,
                        onTemplateRemove: d,
                    } = e,
                    u = p()(a, Ha.wrap, {
                        [Ha.full]: "full" === n,
                        [Ha.medium]: "medium" === n,
                    }),
                    v = o.filter((e) => s.includes(e.name)),
                    g = "small" !== n && h && v.length > 0;
                return i.createElement(
                    b,
                    { id: t, className: u },
                    i.createElement(
                        f.MatchMedia,
                        { rule: k.DialogBreakpoints.TabletSmall },
                        (t) =>
                            i.createElement(
                                m.ToolWidgetMenu,
                                {
                                    onOpen: e.onMenuOpen,
                                    isDrawer: t,
                                    drawerPosition: "Bottom",
                                    arrow: !1,
                                    content: i.createElement(P, {
                                        className: p()(
                                            g && Ha.buttonWithFavorites
                                        ),
                                        displayMode: n,
                                        isOpened: l,
                                        icon: Fa,
                                        text: L.hasNewHeaderToolbarStyles
                                            ? void 0
                                            : za.title,
                                        title: za.tooltip,
                                        forceInteractive: !0,
                                        collapseWhen:
                                            L.hasNewHeaderToolbarStyles
                                                ? ["full", "medium", "small"]
                                                : void 0,
                                    }),
                                    onClick: S,
                                },
                                i.createElement(Ta, {
                                    onTemplateSave: c,
                                    onTemplateSelect: r,
                                    onTemplateRemove: d,
                                    onTemplateFavorite: h,
                                    templates: o,
                                    favorites: v,
                                    isTabletSmall: t,
                                })
                            )
                    ),
                    g &&
                        i.createElement(Wa, {
                            favorites: v,
                            onTemplateSelect: function (e) {
                                r(e), S();
                            },
                        })
                );
                function S() {
                    0;
                }
            }
            function Wa(e) {
                return i.createElement(
                    i.Fragment,
                    null,
                    e.favorites.map((t, a, n) =>
                        i.createElement(ra, {
                            key: t.name,
                            item: t,
                            onApply: e.onTemplateSelect,
                            className: p()({
                                [Ha.first]: 0 === a,
                                [Ha.last]: a === n.length - 1,
                            }),
                        })
                    )
                );
            }
            Da.contextType = Pa;
            a(94419);
            var Oa = a(4039),
                Ua = a(82559),
                Ba = a(55576),
                Va = a(17717),
                Ga = a(76294);
            const Za = {
                    undoHint: (0, o.t)("Undo {hint}"),
                    redoHint: (0, o.t)("Redo {hint}"),
                },
                Ya = {
                    undoHotKey: (0, G.hotKeySerialize)({
                        keys: [
                            (0, Z.humanReadableModifiers)(Z.Modifiers.Mod, !1),
                            "Z",
                        ],
                        text: "{0} + {1}",
                    }),
                    redoHotKey: (0, G.hotKeySerialize)({
                        keys: [
                            (0, Z.humanReadableModifiers)(Z.Modifiers.Mod, !1),
                            "Y",
                        ],
                        text: "{0} + {1}",
                    }),
                },
                Qa = (0, ct.weakComposeClasses)(Ba, Oa, {
                    buttonUndo: "button",
                    buttonRedo: "button",
                }),
                qa = (0, ct.mergeThemes)(Ba, Ua),
                Ka = { ...Ba, button: Qa.buttonUndo },
                ja = { ...Ba, button: Qa.buttonRedo },
                Ja = (0, E.registryContextType)();
            class Xa extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._batched = null),
                        (this._handleClickUndo = () => {
                            (0, D.trackEvent)("GUI", "Undo");
                            const { chartWidgetCollection: e } = this.context;
                            e.undoHistory.undo();
                        }),
                        (this._handleClickRedo = () => {
                            (0, D.trackEvent)("GUI", "Redo");
                            const { chartWidgetCollection: e } = this.context;
                            e.undoHistory.redo();
                        }),
                        (0, E.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired,
                        }),
                        (this.state = this._getStateFromUndoHistory());
                }
                componentDidMount() {
                    const { chartWidgetCollection: e } = this.context;
                    e.undoHistory
                        .redoStack()
                        .onChange()
                        .subscribe(this, this._onChangeStack),
                        e.undoHistory
                            .undoStack()
                            .onChange()
                            .subscribe(this, this._onChangeStack);
                }
                componentWillUnmount() {
                    const { chartWidgetCollection: e } = this.context;
                    e.undoHistory
                        .redoStack()
                        .onChange()
                        .unsubscribe(this, this._onChangeStack),
                        e.undoHistory
                            .undoStack()
                            .onChange()
                            .unsubscribe(this, this._onChangeStack),
                        (this._batched = null);
                }
                render() {
                    const { id: e } = this.props,
                        {
                            isEnabledRedo: t,
                            isEnabledUndo: a,
                            redoStack: n,
                            undoStack: s,
                        } = this.state;
                    return i.createElement(
                        b,
                        { id: e },
                        i.createElement(S.ToolWidgetButton, {
                            icon: Va,
                            isDisabled: !a,
                            onClick: this._handleClickUndo,
                            title: a ? Za.undoHint.format({ hint: s }) : void 0,
                            "data-tooltip-hotkey": a ? Ya.undoHotKey : void 0,
                            theme: L.hasNewHeaderToolbarStyles ? qa : Ka,
                        }),
                        i.createElement(S.ToolWidgetButton, {
                            icon: Ga,
                            isDisabled: !t,
                            onClick: this._handleClickRedo,
                            title: t ? Za.redoHint.format({ hint: n }) : void 0,
                            "data-tooltip-hotkey": t ? Ya.redoHotKey : void 0,
                            theme: L.hasNewHeaderToolbarStyles ? qa : ja,
                        })
                    );
                }
                _onChangeStack() {
                    null === this._batched &&
                        (this._batched = Promise.resolve().then(() => {
                            if (null === this._batched) return;
                            this._batched = null;
                            const e = this._getStateFromUndoHistory();
                            this.setState(e);
                        }));
                }
                _getStateFromUndoHistory() {
                    const { chartWidgetCollection: e } = this.context,
                        t = e.undoHistory.undoStack(),
                        a = e.undoHistory.redoStack(),
                        n = a.head(),
                        i = t.head();
                    return {
                        isEnabledRedo: !a.isEmpty(),
                        isEnabledUndo: !t.isEmpty(),
                        redoStack: n ? n.text().translatedText() : "",
                        undoStack: i ? i.text().translatedText() : "",
                    };
                }
            }
            Xa.contextType = Ja;
            var $a = a(87995),
                en = a(9837);
            class tn extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._ref = null),
                        (this._update = () => {
                            this.forceUpdate();
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleMeasure = ({ width: e }) => {
                            this.props.width.setValue(e);
                        });
                }
                componentDidMount() {
                    const { element: e, isFake: t, width: a } = this.props;
                    if (t) a.subscribe(this._update);
                    else {
                        const t = (0, X.ensureNotNull)(this._ref);
                        $a.findDOMNode(t).appendChild(e);
                    }
                }
                componentWillUnmount() {
                    const { width: e, isFake: t } = this.props;
                    t && e.unsubscribe(this._update);
                }
                render() {
                    const { isFake: e = !1, width: t } = this.props;
                    return i.createElement(
                        en,
                        {
                            shouldMeasure: !e,
                            whitelist: ["width"],
                            onMeasure: this._handleMeasure,
                        },
                        i.createElement(b, {
                            ref: this._setRef,
                            style: e ? { width: t.value() } : void 0,
                            "data-is-custom-header-element": !0,
                        })
                    );
                }
            }
            function an(e) {
                const { displayMode: t, params: a } = e;
                return i.createElement(
                    m.ToolWidgetMenu,
                    {
                        content: i.createElement(P, {
                            collapseWhen: void 0 !== a.icon ? void 0 : [],
                            displayMode: t,
                            icon: a.icon,
                            text: a.title,
                            title: a.tooltip,
                            "data-name": "dropdown",
                            "data-is-custom-header-element": !0,
                        }),
                        drawerPosition: "Bottom",
                        drawerBreakpoint: k.DialogBreakpoints.TabletSmall,
                        arrow: !1,
                    },
                    a.items.map((e, t) =>
                        i.createElement(u.PopupMenuItem, {
                            key: t,
                            label: e.title,
                            onClick: () => e.onSelect(),
                            "data-name": "dropdown-item",
                        })
                    )
                );
            }
            var nn = a(33191);
            function sn(e) {
                const { className: t, ...a } = e;
                return i.createElement(P, {
                    ...a,
                    className: v(
                        t,
                        nn.customTradingViewStyleButton,
                        nn.withoutIcon
                    ),
                    collapseWhen: [],
                    "data-name": "custom-tradingview-styled-button",
                });
            }
            function on() {
                return {
                    Bars: n.enabled("header_chart_type") ? F : void 0,
                    Compare: n.enabled("header_compare") ? B : void 0,
                    Custom: tn,
                    CustomTradingViewStyledButton: sn,
                    Fullscreen: n.enabled("header_fullscreen_button")
                        ? J
                        : void 0,
                    Indicators: n.enabled("header_indicators") ? ve : void 0,
                    Intervals: n.enabled("header_resolutions") ? Ge : void 0,
                    OpenPopup: Ke,
                    Properties:
                        n.enabled("header_settings") &&
                        n.enabled("show_chart_property_page")
                            ? $e
                            : void 0,
                    SaveLoad: n.enabled("header_saveload") ? kt : void 0,
                    Screenshot: n.enabled("header_screenshot") ? Kt : void 0,
                    SymbolSearch: n.enabled("header_symbol_search")
                        ? sa
                        : void 0,
                    Templates: n.enabled("study_templates") ? Da : void 0,
                    Dropdown: an,
                    UndoRedo: n.enabled("header_undo_redo") ? Xa : void 0,
                    Layout: void 0,
                };
            }
        },
        23177: (e, t, a) => {
            "use strict";
            a.d(t, {
                createStudyTemplateMetaInfo: () => i,
                descriptionString: () => s,
            });
            var n = a(47443);
            function i(e, t) {
                return {
                    indicators: e
                        .orderedDataSources(!0)
                        .filter((e) => (0, n.isStudy)(e) && !0)
                        .map((e) => ({
                            id: e.metaInfo().id,
                            description: e.title(!0, void 0, !0),
                        })),
                    interval: t,
                };
            }
            function s(e) {
                const t = new Map();
                return (
                    e.forEach((e) => {
                        const [a, n] = t.get(e.id) || [e.description, 0];
                        t.set(e.id, [a, n + 1]);
                    }),
                    Array.from(t.values())
                        .map(([e, t]) => `${e}${t > 1 ? " x " + t : ""}`)
                        .join(", ")
                );
            }
        },
        55402: (e, t, a) => {
            "use strict";
            a.d(t, {
                validateRegistry: () => l,
                RegistryProvider: () => r,
                registryContextType: () => c,
            });
            var n = a(59496),
                i = a(19036),
                s = a.n(i);
            const o = n.createContext({});
            function l(e, t) {
                s().checkPropTypes(t, e, "context", "RegistryContext");
            }
            function r(e) {
                const { validation: t, value: a } = e;
                return (
                    l(a, t),
                    n.createElement(o.Provider, { value: a }, e.children)
                );
            }
            function c() {
                return o;
            }
        },
        37466: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { SERIES_ICONS: () => u });
            var n = a(8774),
                i = a(9322),
                s = a(14409),
                o = a(97567),
                l = a(84051),
                r = a(21610),
                c = a(65316),
                h = a(35361),
                d = a(92628);
            const u = {
                3: n,
                0: i,
                1: s,
                8: o,
                9: l,
                2: r,
                10: c,
                12: h,
                13: d,
            };
        },
        20301: (e, t, a) => {
            "use strict";
            a.d(t, { convertImageNameToUrl: () => s });
            var n = a(67337),
                i = a(76861);
            function s(e) {
                return n.enabled("charting_library_base") || (0, i.isProd)()
                    ? "https://www.tradingview.com/x/" + e + "/"
                    : window.location.protocol +
                          "//" +
                          window.location.host +
                          "/x/" +
                          e +
                          "/";
            }
        },
        58455: (e, t, a) => {
            "use strict";
            function n(e, t) {
                const a = document.createElement("a");
                (a.style.display = "none"),
                    (a.href = t),
                    (a.download = e),
                    a.click();
            }
            a.d(t, { downloadFile: () => n });
        },
        24437: (e, t, a) => {
            "use strict";
            a.d(t, { DialogBreakpoints: () => i });
            var n = a(96746);
            const i = {
                SmallHeight: n["small-height-breakpoint"],
                TabletSmall: n["tablet-small-breakpoint"],
                TabletNormal: n["tablet-normal-breakpoint"],
            };
        },
        39362: (e, t, a) => {
            "use strict";
            a.d(t, { SymbolSearchDialogFooter: () => l });
            var n = a(59496),
                i = a(97754),
                s = a.n(i),
                o = a(72142);
            function l(e) {
                const { className: t, children: a } = e;
                return n.createElement(
                    "div",
                    { className: s()(o.footer, t) },
                    a
                );
            }
        },
        36189: (e, t, a) => {
            "use strict";
            a.d(t, { FavoriteButton: () => d });
            var n = a(28353),
                i = a(59496),
                s = a(97754),
                o = a(9745),
                l = a(20614),
                r = a(55783),
                c = a(16842);
            const h = {
                add: (0, n.t)("Add to favorites"),
                remove: (0, n.t)("Remove from favorites"),
            };
            function d(e) {
                const {
                    className: t,
                    isFilled: a,
                    isActive: n,
                    onClick: d,
                    ...u
                } = e;
                return i.createElement(o.Icon, {
                    ...u,
                    className: s(
                        c.favorite,
                        "apply-common-tooltip",
                        a && c.checked,
                        n && c.active,
                        t
                    ),
                    icon: a ? l : r,
                    onClick: d,
                    title: a ? h.remove : h.add,
                });
            }
        },
        36947: (e, t, a) => {
            "use strict";
            a.d(t, { useForceUpdate: () => i });
            var n = a(59496);
            const i = () => {
                const [, e] = (0, n.useReducer)((e, t) => e + 1, 0);
                return e;
            };
        },
        70412: (e, t, a) => {
            "use strict";
            a.d(t, {
                hoverMouseEventFilter: () => s,
                useAccurateHover: () => o,
                useHover: () => i,
            });
            var n = a(59496);
            function i() {
                const [e, t] = (0, n.useState)(!1);
                return [
                    e,
                    {
                        onMouseOver: function (e) {
                            s(e) && t(!0);
                        },
                        onMouseOut: function (e) {
                            s(e) && t(!1);
                        },
                    },
                ];
            }
            function s(e) {
                return !e.currentTarget.contains(e.relatedTarget);
            }
            function o(e) {
                const [t, a] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        const t = (t) => {
                            if (null === e.current) return;
                            const n = e.current.contains(t.target);
                            a(n);
                        };
                        return (
                            document.addEventListener("mouseover", t),
                            () => document.removeEventListener("mouseover", t)
                        );
                    }, []),
                    t
                );
            }
        },
        81332: (e, t, a) => {
            "use strict";
            a.d(t, { multilineLabelWithIconAndToolboxTheme: () => o });
            var n = a(40173),
                i = a(23576),
                s = a(63095);
            const o = (0, n.mergeThemes)(i, s);
        },
        51613: (e, t, a) => {
            "use strict";
            a.d(t, { PopupMenuSeparator: () => l });
            var n = a(59496),
                i = a(97754),
                s = a.n(i),
                o = a(524);
            function l(e) {
                const { size: t = "normal", className: a } = e;
                return n.createElement("div", {
                    className: s()(
                        o.separator,
                        "small" === t && o.small,
                        "normal" === t && o.normal,
                        "large" === t && o.large,
                        a
                    ),
                });
            }
        },
        96040: (e, t, a) => {
            "use strict";
            a.d(t, { RemoveButton: () => h });
            var n = a(28353),
                i = a(59496),
                s = a(97754),
                o = a(9745),
                l = a(73366),
                r = a(73432);
            const c = { remove: (0, n.t)("Remove") };
            function h(e) {
                const {
                    className: t,
                    isActive: a,
                    onClick: n,
                    onMouseDown: h,
                    title: d,
                    hidden: u,
                    "data-name": m = "remove-button",
                    ...v
                } = e;
                return i.createElement(o.Icon, {
                    ...v,
                    "data-name": m,
                    className: s(
                        r.button,
                        "apply-common-tooltip",
                        a && r.active,
                        u && r.hidden,
                        t
                    ),
                    icon: l,
                    onClick: n,
                    onMouseDown: h,
                    title: d || c.remove,
                });
            }
        },
        40173: (e, t, a) => {
            "use strict";
            function n(e, t, a = {}) {
                const n = Object.assign({}, t);
                for (const i of Object.keys(t)) {
                    const s = a[i] || i;
                    s in e && (n[i] = [e[s], t[i]].join(" "));
                }
                return n;
            }
            function i(e, t, a = {}) {
                return Object.assign({}, e, n(e, t, a));
            }
            a.d(t, { weakComposeClasses: () => n, mergeThemes: () => i });
        },
        15392: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>';
        },
        86149: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>';
        },
        8774: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>';
        },
        9322: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>';
        },
        65316: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>';
        },
        14409: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
        },
        25382: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
        },
        92628: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>';
        },
        2323: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
        },
        90711: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"/><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"/><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"/><path d="M16.854 16.146l5 5-.708.708-5-5z"/><g><path d="M7 21v-4H6v5h5v-1z"/><path d="M11.146 16.146l-5 5 .708.708 5-5z"/></g></g></svg>';
        },
        97567: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
        },
        35361: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
        },
        84051: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
        },
        60373: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
        },
        21610: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>';
        },
        74034: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
        },
        28289: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>';
        },
        76294: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
        },
        62346: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
        },
        36257: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>';
        },
        17717: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
        },
        73366: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
        },
        16788: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
        },
        37402: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>';
        },
        20614: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
        },
        55783: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
        },
        50377: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>';
        },
        60498: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
        },
    },
]);
