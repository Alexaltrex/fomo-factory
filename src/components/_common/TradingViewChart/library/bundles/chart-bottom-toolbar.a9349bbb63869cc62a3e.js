(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [7260],
    {
        59142: function (e, t) {
            var n, s, a;
            (s = [t]),
                void 0 ===
                    (a =
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
                                var s = {
                                    get passive() {
                                        n = !0;
                                    },
                                };
                                window.addEventListener("testPassive", null, s),
                                    window.removeEventListener(
                                        "testPassive",
                                        null,
                                        s
                                    );
                            }
                            var a =
                                    "undefined" != typeof window &&
                                    window.navigator &&
                                    window.navigator.platform &&
                                    /iP(ad|hone|od)/.test(
                                        window.navigator.platform
                                    ),
                                i = [],
                                o = !1,
                                r = -1,
                                l = void 0,
                                c = void 0,
                                h = function (e) {
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
                                            void 0 !== l &&
                                                ((document.body.style.overflow =
                                                    l),
                                                (l = void 0));
                                    });
                                };
                            (e.disableBodyScroll = function (e, s) {
                                if (a) {
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
                                        var u = {
                                            targetElement: e,
                                            options: s || {},
                                        };
                                        (i = [].concat(t(i), [u])),
                                            (e.ontouchstart = function (e) {
                                                1 === e.targetTouches.length &&
                                                    (r =
                                                        e.targetTouches[0]
                                                            .clientY);
                                            }),
                                            (e.ontouchmove = function (t) {
                                                var n, s, a, i;
                                                1 === t.targetTouches.length &&
                                                    ((s = e),
                                                    (i =
                                                        (n = t).targetTouches[0]
                                                            .clientY - r),
                                                    !h(n.target) &&
                                                        ((s &&
                                                            0 === s.scrollTop &&
                                                            0 < i) ||
                                                        ((a = s) &&
                                                            a.scrollHeight -
                                                                a.scrollTop <=
                                                                a.clientHeight &&
                                                            i < 0)
                                                            ? d(n)
                                                            : n.stopPropagation()));
                                            }),
                                            o ||
                                                (document.addEventListener(
                                                    "touchmove",
                                                    d,
                                                    n ? { passive: !1 } : void 0
                                                ),
                                                (o = !0));
                                    }
                                } else {
                                    (g = s),
                                        setTimeout(function () {
                                            if (void 0 === c) {
                                                var e =
                                                        !!g &&
                                                        !0 ===
                                                            g.reserveScrollBarGap,
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
                                    var m = {
                                        targetElement: e,
                                        options: s || {},
                                    };
                                    i = [].concat(t(i), [m]);
                                }
                                var g;
                            }),
                                (e.clearAllBodyScrollLocks = function () {
                                    a
                                        ? (i.forEach(function (e) {
                                              (e.targetElement.ontouchstart =
                                                  null),
                                                  (e.targetElement.ontouchmove =
                                                      null);
                                          }),
                                          o &&
                                              (document.removeEventListener(
                                                  "touchmove",
                                                  d,
                                                  n ? { passive: !1 } : void 0
                                              ),
                                              (o = !1)),
                                          (i = []),
                                          (r = -1))
                                        : (u(), (i = []));
                                }),
                                (e.enableBodyScroll = function (e) {
                                    if (a) {
                                        if (!e)
                                            return void console.error(
                                                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                                            );
                                        (e.ontouchstart = null),
                                            (e.ontouchmove = null),
                                            (i = i.filter(function (t) {
                                                return t.targetElement !== e;
                                            })),
                                            o &&
                                                0 === i.length &&
                                                (document.removeEventListener(
                                                    "touchmove",
                                                    d,
                                                    n ? { passive: !1 } : void 0
                                                ),
                                                (o = !1));
                                    } else
                                        1 === i.length &&
                                        i[0].targetElement === e
                                            ? (u(), (i = []))
                                            : (i = i.filter(function (t) {
                                                  return t.targetElement !== e;
                                              }));
                                });
                        })
                            ? n.apply(t, s)
                            : n) || (e.exports = a);
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
        32925: (e) => {
            e.exports = {
                button: "button-WhrIKIq9",
                hover: "hover-WhrIKIq9",
                inner: "inner-WhrIKIq9",
            };
        },
        43527: (e) => {
            e.exports = {
                toolbar: "toolbar-sFd8og5Y",
                dateRangeWrapper: "dateRangeWrapper-sFd8og5Y",
                seriesControlWrapper: "seriesControlWrapper-sFd8og5Y",
                dateRangeExpanded: "dateRangeExpanded-sFd8og5Y",
                dateRangeCollapsed: "dateRangeCollapsed-sFd8og5Y",
                item: "item-sFd8og5Y",
                first: "first-sFd8og5Y",
                last: "last-sFd8og5Y",
                inline: "inline-sFd8og5Y",
                timezone: "timezone-sFd8og5Y",
                session: "session-sFd8og5Y",
                icon: "icon-sFd8og5Y",
                hidden: "hidden-sFd8og5Y",
                collapsed: "collapsed-sFd8og5Y",
            };
        },
        47393: (e) => {
            e.exports = {
                button: "button-YwWuPcCo",
                separator: "separator-YwWuPcCo",
            };
        },
        25033: (e) => {
            e.exports = {
                button: "button-wNyKS1Qc",
                hover: "hover-wNyKS1Qc",
                icon: "icon-wNyKS1Qc",
            };
        },
        71922: (e) => {
            e.exports = { separator: "separator-ArqK8T1e" };
        },
        17963: (e) => {
            e.exports = { button: "button-U8Px2hz6" };
        },
        22880: (e) => {
            e.exports = {
                item: "item-G1QqQDLk",
                hover: "hover-G1QqQDLk",
                isActive: "isActive-G1QqQDLk",
                isFirst: "isFirst-G1QqQDLk",
                isLast: "isLast-G1QqQDLk",
            };
        },
        72767: (e) => {
            e.exports = { slider: "slider-eR7xmZ00", inner: "inner-eR7xmZ00" };
        },
        38952: (e) => {
            e.exports = { sliderRow: "sliderRow-DtHrLXA3" };
        },
        19119: (e) => {
            e.exports = {
                item: "item-tPYeYcJa",
                interactive: "interactive-tPYeYcJa",
                hovered: "hovered-tPYeYcJa",
                disabled: "disabled-tPYeYcJa",
                active: "active-tPYeYcJa",
                shortcut: "shortcut-tPYeYcJa",
                normal: "normal-tPYeYcJa",
                big: "big-tPYeYcJa",
                iconCell: "iconCell-tPYeYcJa",
                icon: "icon-tPYeYcJa",
                checkmark: "checkmark-tPYeYcJa",
                content: "content-tPYeYcJa",
                label: "label-tPYeYcJa",
                checked: "checked-tPYeYcJa",
                toolbox: "toolbox-tPYeYcJa",
                showToolboxOnHover: "showToolboxOnHover-tPYeYcJa",
                arrowIcon: "arrowIcon-tPYeYcJa",
                subMenu: "subMenu-tPYeYcJa",
                invisibleHotkey: "invisibleHotkey-tPYeYcJa",
            };
        },
        61999: (e) => {
            e.exports = {
                item: "item-zoYF2FPa",
                emptyIcons: "emptyIcons-zoYF2FPa",
                loading: "loading-zoYF2FPa",
                disabled: "disabled-zoYF2FPa",
                interactive: "interactive-zoYF2FPa",
                hovered: "hovered-zoYF2FPa",
                normal: "normal-zoYF2FPa",
                big: "big-zoYF2FPa",
                icon: "icon-zoYF2FPa",
                label: "label-zoYF2FPa",
                title: "title-zoYF2FPa",
                nested: "nested-zoYF2FPa",
                shortcut: "shortcut-zoYF2FPa",
                remove: "remove-zoYF2FPa",
            };
        },
        91626: (e) => {
            e.exports = { separator: "separator-jtAq6E4V" };
        },
        524: (e) => {
            e.exports = {
                separator: "separator-GzmeVcFo",
                small: "small-GzmeVcFo",
                normal: "normal-GzmeVcFo",
                large: "large-GzmeVcFo",
            };
        },
        37740: (e) => {
            e.exports = {
                tabs: "tabs-rKFlMYkc",
                tab: "tab-rKFlMYkc",
                noBorder: "noBorder-rKFlMYkc",
                disabled: "disabled-rKFlMYkc",
                active: "active-rKFlMYkc",
                defaultCursor: "defaultCursor-rKFlMYkc",
                slider: "slider-rKFlMYkc",
                content: "content-rKFlMYkc",
            };
        },
        26996: (e, t, n) => {
            "use strict";
            n.d(t, { Loader: () => c });
            var s,
                a = n(59496),
                i = n(97754),
                o = n(74991),
                r = n(62092),
                l = n.n(r);
            !(function (e) {
                (e[(e.Initial = 0)] = "Initial"),
                    (e[(e.Appear = 1)] = "Appear"),
                    (e[(e.Active = 2)] = "Active");
            })(s || (s = {}));
            class c extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._stateChangeTimeout = null),
                        (this.state = { state: s.Initial });
                }
                render() {
                    const {
                            className: e,
                            color: t = "black",
                            size: n = "medium",
                            staticPosition: s,
                        } = this.props,
                        o = i(l().item, l()[t], l()[n]);
                    return a.createElement(
                        "span",
                        {
                            className: i(
                                l().loader,
                                s && l().static,
                                this._getStateClass(),
                                e
                            ),
                        },
                        a.createElement("span", { className: o }),
                        a.createElement("span", { className: o }),
                        a.createElement("span", { className: o })
                    );
                }
                componentDidMount() {
                    this.setState({ state: s.Appear }),
                        (this._stateChangeTimeout = setTimeout(() => {
                            this.setState({ state: s.Active });
                        }, 2 * o.dur));
                }
                componentWillUnmount() {
                    this._stateChangeTimeout &&
                        (clearTimeout(this._stateChangeTimeout),
                        (this._stateChangeTimeout = null));
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case s.Initial:
                            return l()["loader-initial"];
                        case s.Appear:
                            return l()["loader-appear"];
                        default:
                            return "";
                    }
                }
            }
        },
        42766: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { BottomToolbarRenderer: () => Ke });
            var s = n(59496),
                a = n(87995),
                i = n(28353),
                o = n(19036),
                r = n(97754),
                l = n(9837),
                c = n(67337),
                h = n(35390),
                d = n(40233),
                u = n(59064),
                m = n(90692),
                g = n(16396),
                p = n(51613),
                v = n(88537),
                b = n(51768),
                _ = n(55402),
                C = n(2872),
                f = n.n(C),
                S = n(16654);
            class y {
                constructor(e) {
                    (this._state = { ranges: [] }),
                        (this._change = new (f())()),
                        (this._rangeChangedListenerBound =
                            this._onRangeChanged.bind(this));
                    const { chartWidget: t } = (this._context = e);
                    t.withModel(null, () => {
                        const e = t.model(),
                            n = e.mainSeries();
                        n
                            .onStatusChanged()
                            .subscribe(this, this._updateAvailableRanges),
                            c.enabled(
                                "update_timeframes_set_on_symbol_resolve"
                            ) &&
                                n
                                    .dataEvents()
                                    .symbolResolved()
                                    .subscribe(
                                        this,
                                        this._updateAvailableRanges
                                    ),
                            n
                                .priceScale()
                                .properties()
                                .childs()
                                .lockScale.subscribe(
                                    this,
                                    this._updateAvailableRanges
                                );
                        const s = e.model().appliedTimeFrame();
                        s.subscribe(this._rangeChangedListenerBound),
                            this._rangeChangedListenerBound(s.value()),
                            this._updateAvailableRanges();
                    });
                }
                state() {
                    return this._state;
                }
                onChange() {
                    return this._change;
                }
                selectRange(e) {
                    this._setState({ activeRange: e.value.value });
                    const { chartWidgetCollection: t } = this._context,
                        n = { val: e.value, res: e.targetResolution };
                    t.setTimeFrame(n);
                }
                destroy() {
                    const { chartWidget: e } = this._context;
                    e.withModel(null, () => {
                        const t = e.model(),
                            n = t.mainSeries();
                        n
                            .onStatusChanged()
                            .unsubscribe(this, this._updateAvailableRanges),
                            c.enabled(
                                "update_timeframes_set_on_symbol_resolve"
                            ) &&
                                n
                                    .dataEvents()
                                    .symbolResolved()
                                    .unsubscribe(
                                        this,
                                        this._updateAvailableRanges
                                    ),
                            n
                                .priceScale()
                                .properties()
                                .childs()
                                .lockScale.unsubscribe(
                                    this,
                                    this._updateAvailableRanges
                                ),
                            t
                                .model()
                                .appliedTimeFrame()
                                .unsubscribe(this._rangeChangedListenerBound);
                    }),
                        this._change.destroy();
                }
                _setState(e) {
                    (this._state = Object.assign({}, this._state, e)),
                        this._change.fire(this._state);
                }
                _onRangeChanged(e) {
                    let t;
                    null !== e &&
                        "period-back" === e.val.type &&
                        (t = e.val.value),
                        this._setState({ activeRange: t });
                }
                _updateAvailableRanges() {
                    const { availableTimeFrames: e, chartWidget: t } =
                        this._context;
                    if (!t.hasModel()) return;
                    const n = t.model().mainSeries(),
                        s = n.status();
                    if (s === S.STATUS_LOADING || s === S.STATUS_RESOLVING)
                        return;
                    const a = e(n.symbolInfo(), n.status());
                    0 !== a.length && this._setState({ ranges: a });
                }
            }
            const E = (0, _.registryContextType)();
            function x(e) {
                var t;
                return (
                    ((t = class extends s.PureComponent {
                        constructor(e, t) {
                            super(e, t),
                                (this._handleUpdate = (e) => {
                                    this.setState(e);
                                }),
                                (this._handleSelectRange = (e) => {
                                    var t, n;
                                    (0, b.trackEvent)(
                                        "GUI",
                                        "Chart Bottom Toolbar",
                                        "range " + e.value
                                    ),
                                        null ===
                                            (n = (t = this.props)
                                                .onSelectRange) ||
                                            void 0 === n ||
                                            n.call(t, e),
                                        this._binding.selectRange(e);
                                }),
                                (0, _.validateRegistry)(t, {
                                    availableTimeFrames: o.any.isRequired,
                                    chartWidgetCollection: o.any.isRequired,
                                    chartWidget: o.any.isRequired,
                                }),
                                M.has(t.chartWidget) ||
                                    M.set(t.chartWidget, new y(t));
                            const n = (this._binding = (0, v.ensureDefined)(
                                M.get(t.chartWidget)
                            ));
                            this.state = n.state();
                        }
                        componentDidMount() {
                            this._binding
                                .onChange()
                                .subscribe(this, this._handleUpdate);
                        }
                        componentWillUnmount() {
                            this._binding
                                .onChange()
                                .unsubscribe(this, this._handleUpdate);
                        }
                        render() {
                            return s.createElement(e, {
                                goToDateButton: this.props.goToDateButton,
                                className: this.props.className,
                                ranges: this.state.ranges,
                                activeRange: this.state.activeRange,
                                onSelectRange: this._handleSelectRange,
                            });
                        }
                    }).contextType = E),
                    t
                );
            }
            const M = new WeakMap();
            var R = n(94420),
                k = n(23829),
                w = n(1109),
                T = n(82724),
                A = n(52360),
                N = n(47393);
            function W(e) {
                const { ranges: t, activeRange: n, onSelectRange: a } = e;
                return s.createElement(
                    s.Fragment,
                    null,
                    t.map((e) =>
                        s.createElement(k.ContextMenuItem, {
                            key: e.value.value,
                            label: e.description || e.text,
                            active: n === e.value.value,
                            checked: n === e.value.value,
                            checkable: !0,
                            disabled: !1,
                            onClick: i.bind(null, e),
                            doNotCloseOnClick: !1,
                            subItems: [],
                        })
                    )
                );
                function i(e) {
                    e && a && a(e), (0, u.globalCloseMenu)();
                }
            }
            function F(e) {
                const { onGoToDateClick: t } = e;
                return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(w.Separator, { className: N.separator }),
                    s.createElement(k.ContextMenuItem, {
                        icon: A,
                        label: (0, T.appendEllipsis)((0, i.t)("Go to")),
                        onClick: t,
                        active: !1,
                        checked: !1,
                        checkable: !1,
                        disabled: !1,
                        doNotCloseOnClick: !1,
                        subItems: [],
                    })
                );
            }
            const B = {
                    title: (0, i.t)("Date Range"),
                    goToDate: (0, T.appendEllipsis)((0, i.t)("Go to")),
                },
                P = (0, _.registryContextType)();
            class z extends s.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleGoToDateClick = () => {
                            const { chartWidget: e } = this.context;
                            (0, R.showGoToDateDialog)(e),
                                (0, u.globalCloseMenu)();
                        }),
                        (this._handleRangeSelect = (e) => {
                            e &&
                                this.props.onSelectRange &&
                                this.props.onSelectRange(e),
                                (0, u.globalCloseMenu)();
                        }),
                        (this._renderChildren = (e) => {
                            const {
                                ranges: t,
                                activeRange: n,
                                goToDateButton: a,
                            } = this.props;
                            return e
                                ? s.createElement(
                                      s.Fragment,
                                      null,
                                      s.createElement(W, {
                                          ranges: t,
                                          activeRange: n,
                                          onSelectRange:
                                              this._handleRangeSelect,
                                      }),
                                      a &&
                                          s.createElement(F, {
                                              onGoToDateClick:
                                                  this._handleGoToDateClick,
                                          })
                                  )
                                : s.createElement(
                                      s.Fragment,
                                      null,
                                      t.map((e) =>
                                          s.createElement(g.PopupMenuItem, {
                                              key: e.value.value,
                                              label: e.description || e.text,
                                              isActive: n === e.value.value,
                                              onClick: this._handleRangeSelect,
                                              onClickArg: e,
                                          })
                                      ),
                                      a &&
                                          s.createElement(
                                              p.PopupMenuSeparator,
                                              null
                                          ),
                                      a &&
                                          s.createElement(g.PopupMenuItem, {
                                              label: B.goToDate,
                                              onClick:
                                                  this._handleGoToDateClick,
                                          })
                                  );
                        }),
                        (0, _.validateRegistry)(t, {
                            chartWidget: o.any.isRequired,
                        });
                }
                render() {
                    return s.createElement(
                        m.MatchMedia,
                        { rule: "screen and (max-width: 428px)" },
                        (e) =>
                            s.createElement(
                                h.ToolWidgetMenu,
                                {
                                    className: N.button,
                                    content: B.title,
                                    arrow: !0,
                                    verticalAttachEdge:
                                        d.VerticalAttachEdge.Top,
                                    verticalDropDirection:
                                        d.VerticalDropDirection.FromBottomToTop,
                                    horizontalMargin: 4,
                                    "data-name": "date-ranges-menu",
                                    isDrawer: e,
                                    onClick: this._trackClick,
                                },
                                this._renderChildren(e)
                            )
                    );
                }
                _trackClick() {
                    0;
                }
            }
            z.contextType = P;
            const Y = x(z);
            var L = n(64205),
                D = n(22880);
            function I(e) {
                const t = r(e.className, D.item, {
                    [D.isActive]: e.isActive,
                    [D.isFirst]: e.isFirst,
                    [D.isLast]: e.isLast,
                });
                return s.createElement(
                    "div",
                    { className: t, onClick: e.onClick, ref: e.reference },
                    e.children
                );
            }
            var H = n(40173),
                j = n(72767);
            const Z = (0, H.mergeThemes)(L.DEFAULT_SLIDER_THEME, j);
            var G = n(38952);
            const q = (0, L.factory)(function (e) {
                return s.createElement(
                    "div",
                    { className: r(e.className, Z.slider), ref: e.reference },
                    s.createElement("div", { className: Z.inner })
                );
            });
            const U = x(function (e) {
                const {
                    className: t,
                    ranges: n,
                    activeRange: a,
                    onSelectRange: i,
                } = e;
                return s.createElement(
                    q,
                    {
                        className: r(G.sliderRow, t),
                        "data-name": "date-ranges-tabs",
                    },
                    n.map((e, t) =>
                        s.createElement(
                            I,
                            {
                                key: e.value.value,
                                value: e.value.value,
                                isFirst: 0 === t,
                                isLast: t === n.length - 1,
                                isActive: a === e.value.value,
                                onClick: i && i.bind(null, e),
                            },
                            s.createElement(
                                "div",
                                {
                                    title: e.description || e.text,
                                    className: "apply-common-tooltip",
                                },
                                e.text
                            )
                        )
                    )
                );
            });
            var O = n(9745),
                V = n(61814),
                J = n(68335),
                K = n(68139),
                Q = n(25033);
            const X = (0, V.hotKeySerialize)({
                    keys: [
                        (0, J.humanReadableModifiers)(J.Modifiers.Alt, !1),
                        "G",
                    ],
                    text: "{0} + {1}",
                }),
                $ = (0, _.registryContextType)();
            class ee extends s.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const { chartWidget: e } = this.context;
                            (0, b.trackEvent)(
                                "GUI",
                                "Chart Bottom Toolbar",
                                "go to"
                            ),
                                (0, R.showGoToDateDialog)(e);
                        }),
                        (0, _.validateRegistry)(t, {
                            chartWidget: o.any.isRequired,
                        });
                }
                render() {
                    const { className: e, ranges: t } = this.props;
                    return (
                        t.length > 0 &&
                        s.createElement(
                            "div",
                            {
                                className: r(
                                    "apply-common-tooltip",
                                    Q.button,
                                    e
                                ),
                                "data-name": "go-to-date",
                                "data-tooltip-hotkey": X,
                                onClick: this._handleClick,
                                title: (0, i.t)("Go to"),
                            },
                            s.createElement(O.Icon, {
                                className: Q.icon,
                                icon: K,
                            })
                        )
                    );
                }
            }
            ee.contextType = $;
            const te = x(ee);
            var ne = n(32925);
            function se(e) {
                const { reference: t, className: n, children: a, ...i } = e;
                return s.createElement(
                    "button",
                    { ...i, className: r(n, ne.button), ref: t },
                    s.createElement("span", { className: ne.inner }, a)
                );
            }
            var ae = n(23095),
                ie = n(64806),
                oe = n(28296),
                re = n(97056);
            class le extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._element = null),
                        (this._menuShown = !1),
                        (this._preventShowingMenu = !1),
                        (this._handleRef = (e) => {
                            this._element = e;
                        }),
                        (this._onMouseDown = () => {
                            this._preventShowingMenu = this._menuShown;
                        }),
                        (this._showMenu = () => {
                            if (this._preventShowingMenu)
                                return void re.ContextMenuManager.hideAll();
                            const { getActions: e } = this.props,
                                t = (0, v.ensureNotNull)(this._element),
                                n = e();
                            if (0 === n.length) return;
                            const s = t.getBoundingClientRect();
                            re.ContextMenuManager.showMenu(
                                n,
                                {
                                    clientX: s.left,
                                    clientY: s.top,
                                    attachToYBy: "bottom",
                                },
                                void 0,
                                { menuName: "TimezoneMenuContextMenu" },
                                () => {
                                    this._menuShown = !1;
                                }
                            ).then(() => {
                                this._menuShown = !0;
                            });
                        });
                }
                render() {
                    const { children: e } = this.props;
                    return s.createElement(
                        "span",
                        {
                            onClick: this._showMenu,
                            onMouseDown: this._onMouseDown,
                            ref: this._handleRef,
                        },
                        e
                    );
                }
            }
            var ce = n(10480),
                he = n(17963);
            const de = { hint: (0, i.t)("Timezone") };
            const ue = (0, _.registryContextType)();
            class me extends s.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._timeFormatter = new ie.TimeFormatter()),
                        (this._tickInterval = void 0),
                        (this._tickClock = () => {
                            const { chartApiInstance: e } = this.context;
                            if (void 0 !== this._timezone) {
                                const t = (0, ce.utc_to_cal)(
                                    this._timezone,
                                    e.serverTime()
                                );
                                this.setState({
                                    time: this._timeFormatter.format(t),
                                });
                            }
                        }),
                        (this._getActions = () => {
                            if (!this.props.withMenu) return [];
                            const { chartWidget: e } = this.context;
                            return (function (e) {
                                e.updateActions();
                                const t = e.actions();
                                return t && t.applyTimeZone instanceof oe.Action
                                    ? t.applyTimeZone.getSubItems()
                                    : [];
                            })(e);
                        }),
                        (0, _.validateRegistry)(t, {
                            chartWidget: o.any.isRequired,
                            chartApiInstance: o.any.isRequired,
                        }),
                        (this.state = { time: "" });
                }
                componentDidMount() {
                    const { chartWidget: e } = this.context;
                    (this._tickInterval = setInterval(this._tickClock, 1e3)),
                        e.withModel(null, () => {
                            const t = e.model();
                            t
                                .model()
                                .mainSeries()
                                .dataEvents()
                                .symbolResolved()
                                .subscribe(this, this.updateTimezonesButton),
                                t
                                    .model()
                                    .properties()
                                    .childs()
                                    .timezone.subscribe(
                                        this,
                                        this.updateTimezonesButton
                                    );
                        });
                }
                componentWillUnmount() {
                    const { chartWidget: e } = this.context;
                    clearInterval(this._tickInterval),
                        e.withModel(null, () => {
                            const t = e.model();
                            t
                                .model()
                                .mainSeries()
                                .dataEvents()
                                .symbolResolved()
                                .unsubscribe(this, this.updateTimezonesButton),
                                t
                                    .model()
                                    .properties()
                                    .childs()
                                    .timezone.unsubscribe(
                                        this,
                                        this.updateTimezonesButton
                                    );
                        });
                }
                render() {
                    const { className: e, withMenu: t } = this.props,
                        { time: n } = this.state,
                        a =
                            void 0 !== this._timezone
                                ? (0, ae.parseTzOffset)(this._timezone.name())
                                      .string
                                : null;
                    return s.createElement(
                        le,
                        { getActions: this._getActions },
                        s.createElement(
                            se,
                            {
                                className: r(
                                    e,
                                    he.button,
                                    "apply-common-tooltip"
                                ),
                                title: t ? de.hint : void 0,
                                disabled: !t,
                                "data-name": "time-zone-menu",
                            },
                            n && a && `${n} (${a})`
                        )
                    );
                }
                updateTimezonesButton() {
                    const { chartWidget: e } = this.context;
                    if (!e.hasModel()) return;
                    if (null === e.model().mainSeries().symbolInfo()) return;
                    let t = e.model().model().timezone();
                    if ("exchange" === t) {
                        const n = (0, v.ensureNotNull)(
                            e.model().mainSeries().symbolInfo()
                        ).timezone;
                        n && (t = n);
                    }
                    (this._timezone = (0, ce.get_timezone)(t)),
                        this._tickClock();
                }
            }
            me.contextType = ue;
            var ge = n(71922);
            function pe(e) {
                return s.createElement("span", {
                    className: r(ge.separator, e.className),
                });
            }
            var ve = n(4825),
                be = n(24980),
                _e = n(49483);
            class Ce {
                constructor(e, t, n) {
                    (this._highlighted = !1),
                        (this._chartWidget = e),
                        (this._priceScaleGetter = t),
                        (this._owner = n),
                        (this._setHighlight = this._setHighlight.bind(this)),
                        (this._removeHighlight =
                            this._removeHighlight.bind(this));
                }
                destroy() {
                    this._highlighted && this._removeHighlight();
                }
                handlers() {
                    const e = _e.CheckMobile.any();
                    return {
                        onMouseEnter: e ? void 0 : this._setHighlight,
                        onMouseLeave: e ? void 0 : this._removeHighlight,
                    };
                }
                _setHighlight() {
                    if (!this._chartWidget.hasModel()) return;
                    const e = this._chartWidget.model().model(),
                        t = e.paneForSource(e.mainSeries()),
                        n = this._priceScaleGetter();
                    if (null === t || null === n) return;
                    const s = this._chartWidget.paneByState(t);
                    if (null !== s) {
                        const t = s
                            .rightPriceAxisesContainer()
                            .findAxisWidgetForScale(n);
                        let a = null;
                        null !== t && (a = t.axisInfo());
                        const i = s
                            .leftPriceAxisesContainer()
                            .findAxisWidgetForScale(n);
                        null !== i && (a = i.axisInfo());
                        const o = s.highlightedPriceAxis();
                        null !== a &&
                            o.value().axis !== a &&
                            (o.setValue({ owner: this._owner, axis: a }),
                            e.lightUpdate(),
                            (this._highlighted = !0));
                    }
                }
                _removeHighlight() {
                    if (!this._chartWidget.hasModel()) return;
                    const e = this._chartWidget.model().model(),
                        t = e.paneForSource(e.mainSeries());
                    if (null === t) return;
                    const n = this._chartWidget.paneByState(t);
                    if (null !== n) {
                        const t = n.highlightedPriceAxis(),
                            s = t.value();
                        null !== s.axis &&
                            s.owner === this._owner &&
                            (t.setValue({ owner: this._owner, axis: null }),
                            e.lightUpdate(),
                            (this._highlighted = !1));
                    }
                }
            }
            const fe = (0, _.registryContextType)(),
                Se = new be.TranslatedString(
                    "toggle log scale",
                    (0, i.t)("toggle log scale")
                );
            const ye = (0, _.registryContextType)(),
                Ee = new be.TranslatedString(
                    "toggle auto scale",
                    (0, i.t)("toggle auto scale")
                );
            const xe = (0, _.registryContextType)(),
                Me = new be.TranslatedString(
                    "toggle percentage scale",
                    (0, i.t)("toggle percentage scale")
                );
            const Re = (0, _.registryContextType)();
            var ke = n(42142),
                we = n(54475),
                Te = n(99499),
                Ae = n(11178),
                Ne = n(43527);
            const We = {
                    extLabel: (0, i.t)("ext"),
                    extHint: (0, i.t)(
                        "Extended Hours is available only for intraday charts"
                    ),
                    percentageHint: (0, i.t)("Toggle Percentage"),
                    logLabel: (0, i.t)("log", { context: "scale" }),
                    logHint: (0, i.t)("Toggle Log Scale"),
                    autoLabel: (0, i.t)("auto", { context: "scale" }),
                    autoHint: (0, i.t)("Toggle Auto Scale"),
                    fullscreenHint: (0, i.t)("Toggle Maximize Chart"),
                    adjLabel: (0, i.t)("adj", { context: "adjustments" }),
                    adjHint: (0, i.t)("Adjust data for dividends"),
                    adjForDividendsOnlyHint: (0, i.t)(
                        "Main symbol data is adjusted for dividends only"
                    ),
                    adjForSplitsOnlyHint: (0, i.t)(
                        "Main symbol data is adjusted for splits only"
                    ),
                    backAdjustLabel: (0, i.t)("b-adj", {
                        context: "adjustments",
                    }),
                    backAdjustHint: (0, i.t)("Adjust for contract changes"),
                    settlementAsCloseLabel: (0, i.t)("set", {
                        context: "adjustments",
                    }),
                    settlementAsCloseHint: (0, i.t)(
                        "Use settlement as close on daily interval"
                    ),
                },
                Fe =
                    ((Be = (e) =>
                        s.createElement(ve.ToolWidgetButton, {
                            text: We.logLabel,
                            title: We.logHint,
                            className: e.className,
                            isActive: e.isLogarithm,
                            isGrouped: !0,
                            onClick: Ge(e.onClick, "log", e.isLogarithm),
                            onMouseEnter: e.onMouseEnter,
                            onMouseLeave: e.onMouseLeave,
                            "data-name": "logarithm",
                        })),
                    ((Pe = class extends s.PureComponent {
                        constructor(e, t) {
                            super(e, t),
                                (this._priceScale = null),
                                (this._handleSelect = () => {
                                    const e = this.context.chartWidget.model(),
                                        t = (0, v.ensureNotNull)(
                                            this.state.series
                                        ),
                                        n = t.priceScale(),
                                        s = n.mode();
                                    t.priceScale().isLockScale() ||
                                        e.setPriceScaleMode(
                                            { log: !s.log },
                                            n,
                                            Se
                                        );
                                }),
                                (0, _.validateRegistry)(t, {
                                    chartWidget: o.any.isRequired,
                                }),
                                (this.state = { isActive: !1, series: null }),
                                (this._priceAxisHighlighter = new Ce(
                                    this.context.chartWidget,
                                    () => this._priceScale,
                                    "logarithm"
                                ));
                        }
                        componentDidMount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, () => {
                                const t = e.model().mainSeries(),
                                    n = t.priceScale();
                                this._handleMainSeriesPriceScaleChanged(n),
                                    t
                                        .priceScaleChanged()
                                        .subscribe(
                                            this,
                                            this
                                                ._handleMainSeriesPriceScaleChanged
                                        ),
                                    this._handleModeChanged({}, n.mode()),
                                    this.setState({
                                        isActive: t.priceScale().isLog(),
                                        series: t,
                                    });
                            });
                        }
                        componentWillUnmount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, () => {
                                e.model()
                                    .mainSeries()
                                    .priceScaleChanged()
                                    .unsubscribe(
                                        this,
                                        this._handleMainSeriesPriceScaleChanged
                                    );
                            }),
                                null !== this._priceScale &&
                                    (this._priceScale
                                        .modeChanged()
                                        .unsubscribeAll(this),
                                    (this._priceScale = null)),
                                this._priceAxisHighlighter.destroy();
                        }
                        render() {
                            const { className: e } = this.props,
                                { isActive: t, series: n } = this.state;
                            return s.createElement(Be, {
                                ...this._priceAxisHighlighter.handlers(),
                                className: e,
                                isLogarithm: t,
                                isDisabled: null === n,
                                onClick: this._handleSelect,
                            });
                        }
                        _handleMainSeriesPriceScaleChanged(e) {
                            null !== this._priceScale &&
                                this._priceScale
                                    .modeChanged()
                                    .unsubscribe(this, this._handleModeChanged),
                                (this._priceScale = e),
                                this._priceScale
                                    .modeChanged()
                                    .subscribe(this, this._handleModeChanged),
                                this._handleModeChanged({}, e.mode());
                        }
                        _handleModeChanged(e, t) {
                            Boolean(t.log) !== this.state.isActive &&
                                this.setState({ isActive: Boolean(t.log) });
                        }
                    }).contextType = fe),
                    Pe);
            var Be, Pe;
            const ze = (function (e) {
                    var t;
                    return (
                        ((t = class extends s.PureComponent {
                            constructor(e, t) {
                                super(e, t),
                                    (this._priceScale = null),
                                    (this._handleSelect = () => {
                                        const e =
                                                this.context.chartWidget.model(),
                                            t = (0, v.ensureNotNull)(
                                                this.state.series
                                            ).priceScale(),
                                            n = t.mode();
                                        e.setPriceScaleMode(
                                            { autoScale: !n.autoScale },
                                            t,
                                            Ee
                                        );
                                    }),
                                    (0, _.validateRegistry)(t, {
                                        chartWidget: o.any.isRequired,
                                    }),
                                    (this.state = {
                                        isActive: !1,
                                        series: null,
                                    }),
                                    (this._priceAxisHighlighter = new Ce(
                                        this.context.chartWidget,
                                        () => this._priceScale,
                                        "auto"
                                    ));
                            }
                            componentDidMount() {
                                const e = this.context.chartWidget;
                                e.withModel(null, () => {
                                    const t = e.model().mainSeries(),
                                        n = t.priceScale();
                                    this._handleMainSeriesPriceScaleChanged(n),
                                        t
                                            .priceScaleChanged()
                                            .subscribe(
                                                this,
                                                this
                                                    ._handleMainSeriesPriceScaleChanged
                                            ),
                                        this._handleModeChanged({}, n.mode()),
                                        this.setState({
                                            isActive: t
                                                .priceScale()
                                                .isAutoScale(),
                                            series: t,
                                        });
                                });
                            }
                            componentWillUnmount() {
                                const e = this.context.chartWidget;
                                e.withModel(null, () => {
                                    e.model()
                                        .mainSeries()
                                        .priceScaleChanged()
                                        .unsubscribe(
                                            this,
                                            this
                                                ._handleMainSeriesPriceScaleChanged
                                        );
                                }),
                                    null !== this._priceScale &&
                                        (this._priceScale
                                            .modeChanged()
                                            .unsubscribeAll(this),
                                        (this._priceScale = null)),
                                    this._priceAxisHighlighter.destroy();
                            }
                            render() {
                                const { className: t } = this.props,
                                    { isActive: n, series: a } = this.state;
                                return s.createElement(e, {
                                    ...this._priceAxisHighlighter.handlers(),
                                    className: t,
                                    isAuto: n,
                                    isDisabled: null === a,
                                    onClick: this._handleSelect,
                                });
                            }
                            _handleMainSeriesPriceScaleChanged(e) {
                                null !== this._priceScale &&
                                    this._priceScale
                                        .modeChanged()
                                        .unsubscribe(
                                            this,
                                            this._handleModeChanged
                                        ),
                                    (this._priceScale = e),
                                    this._priceScale
                                        .modeChanged()
                                        .subscribe(
                                            this,
                                            this._handleModeChanged
                                        ),
                                    this._handleModeChanged({}, e.mode());
                            }
                            _handleModeChanged(e, t) {
                                Boolean(t.autoScale) !== this.state.isActive &&
                                    this.setState({
                                        isActive: Boolean(t.autoScale),
                                    });
                            }
                        }).contextType = ye),
                        t
                    );
                })((e) =>
                    s.createElement(ve.ToolWidgetButton, {
                        text: We.autoLabel,
                        title: We.autoHint,
                        className: e.className,
                        isActive: e.isAuto,
                        isGrouped: !0,
                        onClick: Ge(e.onClick, "auto", e.isAuto),
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        "data-name": "auto",
                    })
                ),
                Ye = (function (e) {
                    var t;
                    return (
                        ((t = class extends s.PureComponent {
                            constructor(e, t) {
                                super(e, t),
                                    (this._priceScale = null),
                                    (this._handleSelect = () => {
                                        const e =
                                                this.context.chartWidget.model(),
                                            t = (0, v.ensureNotNull)(
                                                this.state.series
                                            ),
                                            n = t.priceScale(),
                                            s = n.mode();
                                        t.priceScale().isLockScale() ||
                                            e.setPriceScaleMode(
                                                { percentage: !s.percentage },
                                                n,
                                                Me
                                            );
                                    }),
                                    (0, _.validateRegistry)(t, {
                                        chartWidget: o.any.isRequired,
                                    }),
                                    (this.state = {
                                        isActive: !1,
                                        series: null,
                                    }),
                                    (this._priceAxisHighlighter = new Ce(
                                        this.context.chartWidget,
                                        () => this._priceScale,
                                        "percentage"
                                    ));
                            }
                            componentDidMount() {
                                const e = this.context.chartWidget;
                                e.withModel(null, () => {
                                    const t = e.model().mainSeries(),
                                        n = t.priceScale();
                                    this._handleMainSeriesPriceScaleChanged(n),
                                        t
                                            .priceScaleChanged()
                                            .subscribe(
                                                this,
                                                this
                                                    ._handleMainSeriesPriceScaleChanged
                                            ),
                                        this._handleScaleChange({}, n.mode()),
                                        this.setState({
                                            isActive: t
                                                .priceScale()
                                                .isPercentage(),
                                            series: t,
                                        });
                                });
                            }
                            componentWillUnmount() {
                                const e = this.context.chartWidget;
                                e.withModel(null, () => {
                                    e.model()
                                        .mainSeries()
                                        .priceScaleChanged()
                                        .unsubscribe(
                                            this,
                                            this
                                                ._handleMainSeriesPriceScaleChanged
                                        );
                                }),
                                    null !== this._priceScale &&
                                        (this._priceScale
                                            .modeChanged()
                                            .unsubscribeAll(this),
                                        (this._priceScale = null)),
                                    this._priceAxisHighlighter.destroy();
                            }
                            render() {
                                const { className: t } = this.props,
                                    { isActive: n, series: a } = this.state;
                                return s.createElement(e, {
                                    ...this._priceAxisHighlighter.handlers(),
                                    className: t,
                                    isPercentage: n,
                                    isDisabled: null === a,
                                    onClick: this._handleSelect,
                                });
                            }
                            _handleMainSeriesPriceScaleChanged(e) {
                                null !== this._priceScale &&
                                    this._priceScale
                                        .modeChanged()
                                        .unsubscribe(
                                            this,
                                            this._handleScaleChange
                                        ),
                                    (this._priceScale = e),
                                    this._priceScale
                                        .modeChanged()
                                        .subscribe(
                                            this,
                                            this._handleScaleChange
                                        ),
                                    this._handleScaleChange({}, e.mode());
                            }
                            _handleScaleChange(e, t) {
                                Boolean(t.percentage) !== this.state.isActive &&
                                    this.setState({
                                        isActive: Boolean(t.percentage),
                                    });
                            }
                        }).contextType = xe),
                        t
                    );
                })((e) =>
                    s.createElement(ve.ToolWidgetButton, {
                        icon: Te,
                        title: We.percentageHint,
                        className: e.className,
                        isActive: e.isPercentage,
                        isDisabled: e.isDisabled,
                        isGrouped: !0,
                        onClick: Ge(e.onClick, "percent", e.isPercentage),
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        "data-name": "percentage",
                    })
                );
            const Le = (0, V.hotKeySerialize)({
                    keys: [
                        (0, J.humanReadableModifiers)(J.Modifiers.Alt, !1),
                        "Enter",
                    ],
                    text: "{0} + {1}",
                }),
                De = (function (e) {
                    var t;
                    return (
                        ((t = class extends s.PureComponent {
                            constructor(e, t) {
                                super(e, t),
                                    (this._handleClick = (e) => {
                                        const {
                                            resizerDetacher: t,
                                            chartWidgetCollection: n,
                                        } = this.context;
                                        e.shiftKey && t.detachable.value()
                                            ? t.detach()
                                            : this.state.isFullscreen
                                            ? t.exitFullscreen()
                                            : t.requestFullscreen();
                                    }),
                                    (this._handleLayoutChange = (e) => {
                                        this.setState({ isFullscreen: e });
                                    }),
                                    (this._handlePhoneSize = () => {
                                        0;
                                    }),
                                    (0, _.validateRegistry)(t, {
                                        chartWidgetCollection: o.any.isRequired,
                                        resizerDetacher: o.any.isRequired,
                                    });
                                const { resizerDetacher: n } = t;
                                this.state = {
                                    isFullscreen: n.fullscreen.value(),
                                    isChangeLayoutButton:
                                        this._isChangeLayoutButton(),
                                };
                            }
                            componentDidMount() {
                                const {
                                        resizerDetacher: e,
                                        chartWidgetCollection: t,
                                    } = this.context,
                                    { mobileChangeLayoutEnabled: n } =
                                        this.props;
                                e.fullscreen.subscribe(
                                    this._handleLayoutChange
                                );
                            }
                            componentWillUnmount() {
                                const {
                                        resizerDetacher: e,
                                        chartWidgetCollection: t,
                                    } = this.context,
                                    { mobileChangeLayoutEnabled: n } =
                                        this.props;
                                e.fullscreen.unsubscribe(
                                    this._handleLayoutChange
                                );
                            }
                            render() {
                                const { className: t } = this.props,
                                    {
                                        isFullscreen: n,
                                        isChangeLayoutButton: a,
                                    } = this.state;
                                return s.createElement(e, {
                                    className: t,
                                    isFullscreen: n,
                                    onClick: this._handleClick,
                                });
                            }
                            _isChangeLayoutButton() {
                                return !1;
                            }
                        }).contextType = Re),
                        t
                    );
                })((e) =>
                    s.createElement(ve.ToolWidgetButton, {
                        icon: Ae,
                        title: We.fullscreenHint,
                        className: e.className,
                        isActive: e.isFullscreen,
                        onClick: Ge(
                            e.onClick,
                            "maximize chart",
                            e.isFullscreen
                        ),
                        "data-tooltip-hotkey": Le,
                        "data-name": "fullscreen",
                    })
                ),
                Ie = { properties: !0, fullscreen: !0, preventPhoneLayout: !0 },
                He = {
                    fullscreen: Number.MIN_SAFE_INTEGER,
                    preventPhoneLayout: Number.MIN_SAFE_INTEGER,
                    properties: Number.MIN_SAFE_INTEGER,
                    separator: -2,
                    timeZones: -1,
                    auto: 0,
                    logarithm: 1,
                    percentage: 2,
                    session: 3,
                    adj: 4,
                    backAdj: 5,
                    settlementAsClose: 6,
                },
                je = (() => {
                    const e = new Map();
                    return (
                        e.set(Fe, "logarithm"),
                        e.set(Ye, "percentage"),
                        e.set(ze, "auto"),
                        e.set(De, "fullscreen"),
                        e
                    );
                })();
            function Ze(e) {
                0;
            }
            function Ge(e, t, n) {
                return (t) => {
                    e(t);
                };
            }
            const qe = {
                    dateRangeMode: "hidden",
                    separator: !0,
                    timeZones: !0,
                    fullscreen: !0,
                    preventPhoneLayout: !0,
                    properties: !0,
                    auto: !0,
                    logarithm: !0,
                    percentage: !0,
                    session: !0,
                    adj: !0,
                    backAdj: !0,
                    settlementAsClose: !0,
                },
                Ue = (0, _.registryContextType)();
            class Oe extends s.PureComponent {
                constructor(e, t) {
                    var n, i;
                    super(e, t),
                        (this._timezoneButtonRef = null),
                        (this._layout = Object.assign({}, qe)),
                        (this._raf = null),
                        (this._toolbar = null),
                        (this._rangeExpanded = null),
                        (this._rangeCollapsed = null),
                        (this._seriesComponents = {}),
                        (this._injector =
                            ((n = () => this._layout),
                            (i = (e, t) => (this._seriesComponents[t] = e)),
                            (e, t, a) => {
                                if (
                                    s.isValidElement(e) &&
                                    "string" != typeof e.type
                                ) {
                                    const { props: o } = e;
                                    if ("string" == typeof o.className) {
                                        const l = {
                                                className: r(
                                                    o.className,
                                                    0 === t && Ne.first,
                                                    t === a.length - 1 &&
                                                        Ne.last
                                                ),
                                            },
                                            c = n(),
                                            h = (0, v.ensureDefined)(
                                                je.get(e.type)
                                            );
                                        return s.createElement(
                                            "div",
                                            {
                                                key:
                                                    null === e.key
                                                        ? void 0
                                                        : e.key,
                                                className: r(
                                                    Ne.inline,
                                                    c[h] && Ne.collapsed
                                                ),
                                                ref: (e) => i(e, h),
                                                onClick: () => Ze(),
                                            },
                                            s.cloneElement(e, l)
                                        );
                                    }
                                }
                                return e;
                            })),
                        (this._updateButtonsVisibility = () => {
                            0;
                        }),
                        (this._handleResize = () => {
                            null === this._raf &&
                                (this._raf = requestAnimationFrame(() => {
                                    const e = this._layout,
                                        t = (0, v.ensureNotNull)(this._toolbar),
                                        n = (0, v.ensureNotNull)(
                                            this._rangeExpanded
                                        ),
                                        s =
                                            ((i = (function (e) {
                                                const t = {};
                                                return (
                                                    Object.keys(e).forEach(
                                                        (n) => {
                                                            const s = e[n];
                                                            if (null !== s) {
                                                                const e =
                                                                    a.findDOMNode(
                                                                        s
                                                                    );
                                                                null !== e &&
                                                                    (t[n] = e);
                                                            }
                                                        }
                                                    ),
                                                    t
                                                );
                                            })(this._seriesComponents)),
                                            Object.keys(i)
                                                .map((e) => ({
                                                    name: e,
                                                    width: i[e].offsetWidth,
                                                }))
                                                .sort(
                                                    (e, t) =>
                                                        He[e.name] - He[t.name]
                                                ));
                                    var i;
                                    const o = t.offsetWidth,
                                        r = s.reduce((e, t) => e + t.width, 0),
                                        l = n.offsetWidth,
                                        c =
                                            !Boolean(n.textContent) ||
                                            o - r - l <= 0
                                                ? "collapsed"
                                                : "expanded";
                                    if (
                                        (Object.assign(e, { dateRangeMode: c }),
                                        "expanded" !== c)
                                    ) {
                                        const t =
                                            o -
                                            (0, v.ensureNotNull)(
                                                this._rangeCollapsed
                                            ).offsetWidth -
                                            0;
                                        let n = 0,
                                            a = 0;
                                        for (const i of s)
                                            (n += i.width),
                                                i.name in Ie
                                                    ? ((a += i.width),
                                                      Object.assign(e, {
                                                          [i.name]: !1,
                                                      }))
                                                    : Object.assign(e, {
                                                          [i.name]: t <= n,
                                                      });
                                        t <= a &&
                                            Object.assign(e, {
                                                dateRangeMode: "hidden",
                                            });
                                    } else
                                        Object.assign(e, {
                                            separator: !1,
                                            timeZones: !1,
                                            fullscreen: !1,
                                            preventPhoneLayout: !1,
                                            properties: !1,
                                            auto: !1,
                                            logarithm: !1,
                                            percentage: !1,
                                            session: !1,
                                            adj: !1,
                                            settlementAsClose: !1,
                                            backAdj: !1,
                                        });
                                    this._applyResizing(), (this._raf = null);
                                }));
                        }),
                        (this._handleTimezoneButtonRef = (e) => {
                            this._timezoneButtonRef = e;
                        }),
                        (this._handleMeasure = () => {
                            null !== this._toolbar && this.resizeUI();
                        }),
                        (this._handleFullscreenableChange = (e) => {
                            this._setStateWithResize({ isFullscreenable: e });
                        }),
                        (this._handlePreventPhoneLayoutButtonVisibility =
                            () => {
                                0;
                            }),
                        (this._handleToolbarRef = (e) => (this._toolbar = e)),
                        (this._handleRangeCollapsedRef = (e) =>
                            (this._rangeCollapsed = e)),
                        (this._handleRangeExpandedRef = (e) =>
                            (this._rangeExpanded = e)),
                        (this._handleTimeZonesRef = (e) => {
                            this._seriesComponents.timeZones = e;
                        }),
                        (this._handleSessionsRef = (e) => {
                            this._seriesComponents.session = e;
                        }),
                        (this._handleSeparatorRef = (e) => {
                            this._seriesComponents.separator = e;
                        }),
                        (0, _.validateRegistry)(t, {
                            onContentBoxChanged: o.any.isRequired,
                            chartApiInstance: o.any.isRequired,
                            chartWidget: o.any.isRequired,
                            chartWidgetCollection: o.any.isRequired,
                            resizerDetacher: o.any.isRequired,
                        });
                    const { resizerDetacher: l } = this.context;
                    this.state = {
                        isFullscreenable: l.fullscreenable.value(),
                        isPreventPhoneLayoutButton:
                            this._isPreventPhoneLayoutButton(),
                    };
                }
                componentDidMount() {
                    const {
                        onContentBoxChanged: e,
                        resizerDetacher: t,
                        chartWidgetCollection: n,
                        chartWidget: s,
                    } = this.context;
                    e.subscribe(this, this._handleResize),
                        t.fullscreenable.subscribe(
                            this._handleFullscreenableChange
                        ),
                        this.updateTimezonesButton(),
                        this.resizeUI();
                }
                componentWillUnmount() {
                    const {
                        onContentBoxChanged: e,
                        resizerDetacher: t,
                        chartWidgetCollection: n,
                        chartWidget: s,
                    } = this.context;
                    e.unsubscribe(this, this._handleResize),
                        t.fullscreenable.unsubscribe(
                            this._handleFullscreenableChange
                        ),
                        null !== this._raf &&
                            (cancelAnimationFrame(this._raf),
                            (this._raf = null));
                }
                render() {
                    const e = this._layout,
                        {
                            timeFramesWidgetEnabled: t,
                            timeWidgetEnabled: n,
                            percentageScaleButtonEnabled: a,
                            logScaleButtonEnabled: i,
                            autoScaleButtonEnabled: o,
                            fullscreenButtonEnabled: h,
                        } = this.props;
                    return s.createElement(
                        "div",
                        {
                            className: Ne.toolbar,
                            ref: this._handleToolbarRef,
                            onContextMenu: we.preventDefault,
                        },
                        t &&
                            s.createElement(
                                ke.FragmentMap,
                                null,
                                s.createElement(
                                    "div",
                                    {
                                        className: r(
                                            Ne.dateRangeWrapper,
                                            "collapsed" !== e.dateRangeMode &&
                                                Ne.collapsed
                                        ),
                                        ref: this._handleRangeCollapsedRef,
                                    },
                                    s.createElement(
                                        "div",
                                        { className: r(Ne.dateRangeCollapsed) },
                                        s.createElement(Y, {
                                            goToDateButton:
                                                this.props.goToDateEnabled,
                                        })
                                    )
                                ),
                                s.createElement(
                                    l,
                                    { onMeasure: this._handleMeasure },
                                    s.createElement(
                                        "div",
                                        {
                                            className: r(
                                                Ne.dateRangeWrapper,
                                                "expanded" !==
                                                    e.dateRangeMode &&
                                                    Ne.collapsed
                                            ),
                                            ref: this._handleRangeExpandedRef,
                                        },
                                        s.createElement(
                                            "div",
                                            {
                                                className: r(
                                                    Ne.dateRangeExpanded
                                                ),
                                            },
                                            s.createElement(U, {
                                                onSelectRange:
                                                    this._trackRangeButtonClick,
                                            }),
                                            this.props.goToDateEnabled &&
                                                s.createElement(pe, null),
                                            this.props.goToDateEnabled &&
                                                s.createElement(te, null)
                                        )
                                    )
                                )
                            ),
                        s.createElement(
                            "div",
                            { className: Ne.seriesControlWrapper },
                            n &&
                                s.createElement(
                                    l,
                                    { onMeasure: this._handleMeasure },
                                    s.createElement(
                                        "div",
                                        {
                                            className: r(
                                                Ne.inline,
                                                e.timeZones && Ne.collapsed
                                            ),
                                            ref: this._handleTimeZonesRef,
                                        },
                                        s.createElement(
                                            "div",
                                            {
                                                className: Ne.inline,
                                                onClick:
                                                    this
                                                        ._trackTimezonesButtonClick,
                                            },
                                            s.createElement(me, {
                                                className: Ne.timezone,
                                                withMenu:
                                                    this.props
                                                        .timezoneMenuEnabled,
                                                ref: this
                                                    ._handleTimezoneButtonRef,
                                            })
                                        )
                                    )
                                ),
                            !1,
                            s.createElement(
                                "div",
                                {
                                    ref: this._handleSeparatorRef,
                                    className: r(
                                        Ne.inline,
                                        e.separator && Ne.collapsed
                                    ),
                                },
                                s.createElement(pe, null)
                            ),
                            s.createElement(
                                ke.FragmentMap,
                                { map: this._injector },
                                !1,
                                !1,
                                !1,
                                a &&
                                    !c.enabled("fundamental_widget") &&
                                    s.createElement(Ye, { className: Ne.icon }),
                                i &&
                                    s.createElement(Fe, { className: Ne.item }),
                                o &&
                                    s.createElement(ze, { className: Ne.item }),
                                h &&
                                    this.state.isFullscreenable &&
                                    s.createElement(De, {
                                        className: Ne.icon,
                                        mobileChangeLayoutEnabled:
                                            this.props
                                                .mobileChangeLayoutEnabled,
                                    }),
                                !1
                            )
                        )
                    );
                }
                updateTimezonesButton() {
                    null !== this._timezoneButtonRef &&
                        this._timezoneButtonRef.updateTimezonesButton();
                }
                resizeUI() {
                    this._handleResize();
                }
                _trackRangeButtonClick(e) {
                    0;
                }
                _trackTimezonesButtonClick() {
                    Ze();
                }
                _setStateWithResize(e) {
                    Object.assign(this._layout, qe),
                        this._applyResizing(),
                        this.setState(e, () => this._handleResize());
                }
                _applyResizing() {
                    const { dateRangeMode: e, ...t } = this._layout;
                    this._rangeExpanded &&
                        this._rangeExpanded.classList.toggle(
                            Ne.collapsed,
                            "expanded" !== e
                        ),
                        this._rangeCollapsed &&
                            this._rangeCollapsed.classList.toggle(
                                Ne.collapsed,
                                "collapsed" !== e
                            ),
                        Object.keys(t).forEach((e) => {
                            const n = e,
                                s = this._seriesComponents[n];
                            s && s.classList.toggle(Ne.collapsed, t[n]);
                        });
                }
                _isPreventPhoneLayoutButton() {
                    return !1;
                }
            }
            Oe.contextType = Ue;
            const Ve = {
                onContentBoxChanged: o.any,
                computeContentBox: o.any,
                chartWidget: o.any,
                chartApiInstance: o.any,
                chartWidgetCollection: o.any,
                resizerDetacher: o.any,
                availableTimeFrames: o.any,
            };
            class Je extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._setActiveChart = (e) => {
                            this._defineRegistry(e),
                                this.setState({ chartWidget: e });
                        });
                    const t =
                        this.props.chartWidgetCollection.activeChartWidget.value();
                    (this.state = { chartWidget: t }), this._defineRegistry(t);
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.activeChartWidget.subscribe(
                        this._setActiveChart
                    );
                }
                componentWillUnmount() {
                    this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
                        this._setActiveChart
                    );
                }
                render() {
                    const { chartWidget: e } = this.state;
                    if (!e) return null;
                    const { options: t } = this.props,
                        n = {
                            timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
                            goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
                            timeWidgetEnabled: t.timeWidgetEnabled,
                            timezoneMenuEnabled:
                                t.timeWidget &&
                                t.timeWidget.timezoneMenuEnabled,
                            sessionIdButtonEnabled: t.sessionIdButtonEnabled,
                            backAdjustmentButtonEnabled:
                                t.backAdjustmentButtonEnabled,
                            settlementAsCloseButtonEnabled:
                                t.settlementAsCloseButtonEnabled,
                            adjustForDividendsButtonEnabled:
                                t.adjustForDividendsButtonEnabled,
                            logScaleButtonEnabled: t.logScaleButtonEnabled,
                            percentageScaleButtonEnabled:
                                t.percentageScaleButtonEnabled,
                            autoScaleButtonEnabled: t.autoScaleButtonEnabled,
                            fullscreenButtonEnabled: t.fullscreenButtonEnabled,
                            mobileChangeLayoutEnabled:
                                t.mobileChangeLayoutEnabled,
                        };
                    return s.createElement(
                        _.RegistryProvider,
                        { validation: Ve, value: this._registry },
                        s.createElement(Oe, { key: e.id(), ...n })
                    );
                }
                _defineRegistry(e) {
                    const {
                            onContentBoxChanged: t,
                            computeContentBox: n,
                            chartApiInstance: s,
                            chartWidgetCollection: a,
                            options: {
                                timeFramesWidgetEnabled: i,
                                timeFramesWidget: o,
                            },
                        } = this.props,
                        r = i ? o.availableTimeFrames : void 0;
                    this._registry = {
                        onContentBoxChanged: t,
                        computeContentBox: n,
                        chartWidget: e,
                        availableTimeFrames: r,
                        chartApiInstance: s,
                        chartWidgetCollection: a,
                        resizerDetacher: e.getResizerDetacher(),
                    };
                }
            }
            class Ke {
                constructor(e, t, n, i, o, r, l) {
                    this._container = e;
                    const c = s.createElement(Je, {
                        onContentBoxChanged: t,
                        computeContentBox: n,
                        chartWidgetCollection: i,
                        chartApiInstance: o,
                        chartWidgetOptions: r,
                        options: l,
                    });
                    a.render(c, e), e.setAttribute("data-initialized", "true");
                }
                destroy() {
                    a.unmountComponentAtNode(this._container),
                        this._container.removeAttribute("data-initialized");
                }
            }
        },
        55402: (e, t, n) => {
            "use strict";
            n.d(t, {
                validateRegistry: () => r,
                RegistryProvider: () => l,
                registryContextType: () => c,
            });
            var s = n(59496),
                a = n(19036),
                i = n.n(a);
            const o = s.createContext({});
            function r(e, t) {
                i().checkPropTypes(t, e, "context", "RegistryContext");
            }
            function l(e) {
                const { validation: t, value: n } = e;
                return (
                    r(n, t),
                    s.createElement(o.Provider, { value: n }, e.children)
                );
            }
            function c() {
                return o;
            }
        },
        42142: (e, t, n) => {
            "use strict";
            n.d(t, { FragmentMap: () => a });
            var s = n(59496);
            function a(e) {
                if (e.map) {
                    return s.Children.toArray(e.children).map(e.map);
                }
                return e.children;
            }
        },
        99025: (e, t, n) => {
            "use strict";
            n.d(t, { Hint: () => r });
            var s = n(59496),
                a = n(97754),
                i = n.n(a),
                o = n(19119);
            function r(e) {
                const { text: t = "", className: n } = e;
                return s.createElement(
                    "span",
                    { className: i()(o.shortcut, n) },
                    t
                );
            }
        },
        23829: (e, t, n) => {
            "use strict";
            n.d(t, { ContextMenuItem: () => g });
            var s = n(59496),
                a = n(97754),
                i = n.n(a),
                o = n(9745),
                r = n(26996),
                l = n(54627),
                c = n(99025),
                h = n(86440),
                d = n(4585),
                u = n(74471),
                m = n(61999);
            function g(e) {
                const {
                        isTitle: t,
                        isLoading: n,
                        isHovered: a,
                        active: g,
                        checkable: p,
                        disabled: v,
                        checked: b,
                        icon: _,
                        iconChecked: C,
                        hint: f,
                        subItems: S,
                        label: y,
                        onClick: E,
                        children: x,
                        toolbox: M,
                        jsxLabel: R,
                        size: k = "normal",
                    } = e,
                    w = (0, s.useContext)(l.EmptyIconsContext),
                    T = !!S.length;
                return n
                    ? s.createElement(
                          "li",
                          { className: i()(m.item, m.loading, m[k]) },
                          s.createElement(r.Loader, null)
                      )
                    : s.createElement(
                          "li",
                          {
                              className: i()(
                                  m.item,
                                  m.interactive,
                                  t && m.title,
                                  v && m.disabled,
                                  a && m.hovered,
                                  g && m.active,
                                  w && m.emptyIcons,
                                  m[k]
                              ),
                              onClick: E,
                          },
                          s.createElement(o.Icon, {
                              className: i()(m.icon),
                              icon: (function () {
                                  if (p && b) return C || _ || h;
                                  return _;
                              })(),
                          }),
                          s.createElement(
                              "span",
                              { className: i()(m.label) },
                              null != R ? R : y
                          ),
                          !!M &&
                              s.createElement(o.Icon, {
                                  onClick: function () {
                                      M && M.action();
                                  },
                                  className: m.remove,
                                  icon: u,
                              }),
                          !T &&
                              f &&
                              s.createElement(c.Hint, {
                                  className: m.shortcut,
                                  text: f,
                              }),
                          T &&
                              s.createElement(o.Icon, {
                                  className: m.nested,
                                  icon: d,
                              }),
                          x
                      );
            }
        },
        54627: (e, t, n) => {
            "use strict";
            n.d(t, { EmptyIconsContext: () => s });
            const s = n(59496).createContext(!1);
        },
        1109: (e, t, n) => {
            "use strict";
            n.d(t, { Separator: () => o });
            var s = n(59496),
                a = n(97754),
                i = n(91626);
            function o(e) {
                return s.createElement("div", {
                    className: a(i.separator, e.className),
                });
            }
        },
        51613: (e, t, n) => {
            "use strict";
            n.d(t, { PopupMenuSeparator: () => r });
            var s = n(59496),
                a = n(97754),
                i = n.n(a),
                o = n(524);
            function r(e) {
                const { size: t = "normal", className: n } = e;
                return s.createElement("div", {
                    className: i()(
                        o.separator,
                        "small" === t && o.small,
                        "normal" === t && o.normal,
                        "large" === t && o.large,
                        n
                    ),
                });
            }
        },
        64205: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_SLIDER_THEME: () => r,
                SliderItem: () => l,
                factory: () => c,
            });
            var s = n(59496),
                a = n(97754),
                i = n(88537),
                o = n(37740);
            const r = o;
            function l(e) {
                const t = a(e.className, o.tab, {
                    [o.active]: e.isActive,
                    [o.disabled]: e.isDisabled,
                    [o.defaultCursor]: !!e.shouldUseDefaultCursor,
                    [o.noBorder]: !!e.noBorder,
                });
                return s.createElement(
                    "div",
                    {
                        className: t,
                        onClick: e.onClick,
                        ref: e.reference,
                        "data-type": "tab-item",
                        "data-value": e.value,
                        "data-name":
                            "tab-item-" + e.value.toString().toLowerCase(),
                    },
                    e.children
                );
            }
            function c(e) {
                return class extends s.PureComponent {
                    constructor() {
                        super(...arguments),
                            (this.activeTab = { current: null });
                    }
                    componentDidUpdate() {
                        ((0, i.ensureNotNull)(this._slider).style.transition =
                            "transform 350ms"),
                            this._componentDidUpdate();
                    }
                    componentDidMount() {
                        this._componentDidUpdate();
                    }
                    render() {
                        const { className: t } = this.props,
                            n = this._generateTabs();
                        return s.createElement(
                            "div",
                            {
                                className: a(t, o.tabs),
                                "data-name": this.props["data-name"],
                            },
                            n,
                            s.createElement(e, {
                                reference: (e) => {
                                    this._slider = e;
                                },
                            })
                        );
                    }
                    _generateTabs() {
                        return (
                            (this.activeTab.current = null),
                            s.Children.map(this.props.children, (e) => {
                                const t = e,
                                    n = Boolean(t.props.isActive),
                                    a = {
                                        reference: (e) => {
                                            n && (this.activeTab.current = e),
                                                t.props.reference &&
                                                    t.props.reference(e);
                                        },
                                    };
                                return s.cloneElement(t, a);
                            })
                        );
                    }
                    _componentDidUpdate() {
                        const e = (0, i.ensureNotNull)(this._slider).style;
                        if (this.activeTab.current) {
                            const t = this.activeTab.current.offsetWidth,
                                n = this.activeTab.current.offsetLeft;
                            (e.transform = `translateX(${n}px)`),
                                (e.width = t + "px"),
                                (e.opacity = "1");
                        } else e.opacity = "0";
                    }
                };
            }
            c(function (e) {
                return s.createElement("div", {
                    className: o.slider,
                    ref: e.reference,
                });
            });
        },
        40173: (e, t, n) => {
            "use strict";
            function s(e, t, n = {}) {
                const s = Object.assign({}, t);
                for (const a of Object.keys(t)) {
                    const i = n[a] || a;
                    i in e && (s[a] = [e[i], t[a]].join(" "));
                }
                return s;
            }
            function a(e, t, n = {}) {
                return Object.assign({}, e, s(e, t, n));
            }
            n.d(t, { weakComposeClasses: () => s, mergeThemes: () => a });
        },
        4585: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
        },
        11178: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>';
        },
        99499: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
        },
        86440: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
        },
        74471: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
        },
        52360: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
        },
        68139: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>';
        },
    },
]);
