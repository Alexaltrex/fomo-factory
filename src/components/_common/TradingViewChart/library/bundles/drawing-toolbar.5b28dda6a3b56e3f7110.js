(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [2878],
    {
        10745: (e) => {
            e.exports = {
                dropdown: "dropdown-m5d9X7vB",
                buttonWrap: "buttonWrap-m5d9X7vB",
                control: "control-m5d9X7vB",
                arrow: "arrow-m5d9X7vB",
                arrowIcon: "arrowIcon-m5d9X7vB",
                isOpened: "isOpened-m5d9X7vB",
                hover: "hover-m5d9X7vB",
                isGrayed: "isGrayed-m5d9X7vB",
            };
        },
        61226: (e) => {
            e.exports = {
                container: "container-68Nk42BD",
                mirror: "mirror-68Nk42BD",
                background: "background-68Nk42BD",
                arrow: "arrow-68Nk42BD",
            };
        },
        83860: (e) => {
            e.exports = { item: "item-x0Gb0fpu", label: "label-x0Gb0fpu" };
        },
        85494: (e) => {
            e.exports = {
                drawingToolbar: "drawingToolbar-3e32hIe9",
                isHidden: "isHidden-3e32hIe9",
                inner: "inner-3e32hIe9",
                popupMenuItem: "popupMenuItem-3e32hIe9",
                group: "group-3e32hIe9",
                noGroupPadding: "noGroupPadding-3e32hIe9",
                lastGroup: "lastGroup-3e32hIe9",
                fill: "fill-3e32hIe9",
                separator: "separator-3e32hIe9",
            };
        },
        84006: (e) => {
            e.exports = {
                toggleButton: "toggleButton-5IlBhjdP",
                collapsed: "collapsed-5IlBhjdP",
                background: "background-5IlBhjdP",
                arrow: "arrow-5IlBhjdP",
            };
        },
        88234: (e) => {
            e.exports = {
                wrap: "wrap-9Mqd4dY6",
                smallTablet: "smallTablet-9Mqd4dY6",
                mobileWrap: "mobileWrap-9Mqd4dY6",
                item: "item-9Mqd4dY6",
                hovered: "hovered-9Mqd4dY6",
                active: "active-9Mqd4dY6",
                title: "title-9Mqd4dY6",
                separator: "separator-9Mqd4dY6",
            };
        },
        48214: (e) => {
            e.exports = {
                buttonIcon: "buttonIcon-OGj1N2Ml",
                button: "button-OGj1N2Ml",
            };
        },
        60306: (e) => {
            e.exports = {
                wrap: "wrap-GVak88eE",
                scrollWrap: "scrollWrap-GVak88eE",
                noScrollBar: "noScrollBar-GVak88eE",
                content: "content-GVak88eE",
                icon: "icon-GVak88eE",
                scrollBot: "scrollBot-GVak88eE",
                scrollTop: "scrollTop-GVak88eE",
                isVisible: "isVisible-GVak88eE",
                iconWrap: "iconWrap-GVak88eE",
                fadeBot: "fadeBot-GVak88eE",
                fadeTop: "fadeTop-GVak88eE",
            };
        },
        66998: (e) => {
            e.exports = {
                wrap: "wrap-3HaHQVJm",
                positionBottom: "positionBottom-3HaHQVJm",
                backdrop: "backdrop-3HaHQVJm",
                drawer: "drawer-3HaHQVJm",
                positionLeft: "positionLeft-3HaHQVJm",
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
        23576: (e) => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
                item: "item-4TFSfyGO",
                hovered: "hovered-4TFSfyGO",
                isDisabled: "isDisabled-4TFSfyGO",
                isActive: "isActive-4TFSfyGO",
                shortcut: "shortcut-4TFSfyGO",
                toolbox: "toolbox-4TFSfyGO",
                withIcon: "withIcon-4TFSfyGO",
                icon: "icon-4TFSfyGO",
                labelRow: "labelRow-4TFSfyGO",
                label: "label-4TFSfyGO",
                showOnHover: "showOnHover-4TFSfyGO",
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
        90186: (e, t, o) => {
            "use strict";
            function i(e) {
                return s(e, a);
            }
            function n(e) {
                return s(e, l);
            }
            function s(e, t) {
                const o = Object.entries(e).filter(t),
                    i = {};
                for (const [e, t] of o) i[e] = t;
                return i;
            }
            function a(e) {
                const [t, o] = e;
                return 0 === t.indexOf("data-") && "string" == typeof o;
            }
            function l(e) {
                return 0 === e[0].indexOf("aria-");
            }
            o.d(t, {
                filterDataProps: () => i,
                filterAriaProps: () => n,
                filterProps: () => s,
                isDataAttribute: () => a,
                isAriaAttribute: () => l,
            });
        },
        26862: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { DrawingToolbarRenderer: () => it });
            var i = o(59496),
                n = o(87995),
                s = o(88537),
                a = o(28353),
                l = o(97754),
                r = o.n(l),
                c = o(32563),
                d = o(56840),
                h = o(67337),
                u = o(85733),
                m = o(30460),
                p = o(76422),
                g = o(2872),
                b = o.n(g),
                v = o(49483),
                T = (o(84015), o(92469));
            class _ {
                constructor(e) {
                    this._drawingsAccess = e || { tools: [], type: "black" };
                }
                isToolEnabled(e) {
                    const t = this._findTool(e);
                    return (
                        !(!t || !t.grayed) ||
                        ("black" === this._drawingsAccess.type ? !t : !!t)
                    );
                }
                isToolGrayed(e) {
                    const t = this._findTool(e);
                    return Boolean(t && t.grayed);
                }
                _findTool(e) {
                    return this._drawingsAccess.tools.find((t) => t.name === e);
                }
            }
            var C = o(68335);
            const w = [
                {
                    id: "linetool-group-cursors",
                    title: (0, a.t)("Cursors"),
                    items: [
                        { name: "cursor" },
                        { name: "dot" },
                        { name: "arrow" },
                        { name: "eraser" },
                    ],
                    trackLabel: null,
                },
                {
                    id: "linetool-group-trend-line",
                    title: (0, a.t)("Trend Line Tools"),
                    items: [
                        {
                            name: "LineToolTrendLine",
                            hotkeyHash: C.Modifiers.Alt + 84,
                        },
                        { name: "LineToolArrow" },
                        { name: "LineToolRay" },
                        { name: "LineToolInfoLine" },
                        { name: "LineToolExtended" },
                        { name: "LineToolTrendAngle" },
                        {
                            name: "LineToolHorzLine",
                            hotkeyHash: C.Modifiers.Alt + 72,
                        },
                        {
                            name: "LineToolHorzRay",
                            hotkeyHash: C.Modifiers.Alt + 74,
                        },
                        {
                            name: "LineToolVertLine",
                            hotkeyHash: C.Modifiers.Alt + 86,
                        },
                        {
                            name: "LineToolCrossLine",
                            hotkeyHash: C.Modifiers.Alt + 67,
                        },
                        { name: "LineToolParallelChannel" },
                        { name: "LineToolRegressionTrend" },
                        { name: "LineToolFlatBottom" },
                        { name: "LineToolDisjointAngle" },
                        null,
                    ].filter(Boolean),
                    trackLabel: null,
                },
                {
                    id: "linetool-group-gann-and-fibonacci",
                    title: (0, a.t)("Gann and Fibonacci Tools"),
                    items: [
                        {
                            name: "LineToolFibRetracement",
                            hotkeyHash: C.Modifiers.Alt + 70,
                        },
                        { name: "LineToolTrendBasedFibExtension" },
                        { name: "LineToolPitchfork" },
                        { name: "LineToolSchiffPitchfork2" },
                        { name: "LineToolSchiffPitchfork" },
                        { name: "LineToolInsidePitchfork" },
                        { name: "LineToolFibChannel" },
                        { name: "LineToolFibTimeZone" },
                        { name: "LineToolGannSquare" },
                        { name: "LineToolGannFixed" },
                        { name: "LineToolGannComplex" },
                        { name: "LineToolGannFan" },
                        { name: "LineToolFibSpeedResistanceFan" },
                        { name: "LineToolTrendBasedFibTime" },
                        { name: "LineToolFibCircles" },
                        { name: "LineToolPitchfan" },
                        { name: "LineToolFibSpiral" },
                        { name: "LineToolFibSpeedResistanceArcs" },
                        { name: "LineToolFibWedge" },
                    ],
                    trackLabel: null,
                },
                {
                    id: "linetool-group-geometric-shapes",
                    title: (0, a.t)("Geometric Shapes"),
                    items: [
                        { name: "LineToolBrush" },
                        { name: "LineToolHighlighter" },
                        { name: "LineToolRectangle" },
                        { name: "LineToolCircle" },
                        { name: "LineToolEllipse" },
                        { name: "LineToolPath" },
                        { name: "LineToolBezierQuadro" },
                        { name: "LineToolPolyline" },
                        { name: "LineToolTriangle" },
                        { name: "LineToolRotatedRectangle" },
                        { name: "LineToolArc" },
                        { name: "LineToolBezierCubic" },
                    ],
                    trackLabel: null,
                },
                {
                    id: "linetool-group-annotation",
                    title: (0, a.t)("Annotation Tools"),
                    items: [
                        { name: "LineToolText" },
                        { name: "LineToolTextAbsolute" },
                        { name: "LineToolNote" },
                        { name: "LineToolNoteAbsolute" },
                        { name: "LineToolSignpost" },
                        null,
                        null,
                        null,
                        { name: "LineToolCallout" },
                        { name: "LineToolBalloon" },
                        { name: "LineToolPriceLabel" },
                        { name: "LineToolPriceNote" },
                        { name: "LineToolArrowMarker" },
                        { name: "LineToolArrowMarkLeft" },
                        { name: "LineToolArrowMarkRight" },
                        { name: "LineToolArrowMarkUp" },
                        { name: "LineToolArrowMarkDown" },
                        { name: "LineToolFlagMark" },
                    ].filter(Boolean),
                    trackLabel: null,
                },
                {
                    id: "linetool-group-patterns",
                    title: (0, a.t)("Patterns"),
                    items: [
                        {
                            name: "LineTool5PointsPattern",
                        },
                        { name: "LineToolCypherPattern" },
                        { name: "LineToolABCD" },
                        { name: "LineToolTrianglePattern" },
                        { name: "LineToolThreeDrivers" },
                        { name: "LineToolHeadAndShoulders" },
                        { name: "LineToolElliottImpulse" },
                        { name: "LineToolElliottTriangle" },
                        { name: "LineToolElliottTripleCombo" },
                        { name: "LineToolElliottCorrection" },
                        { name: "LineToolElliottDoubleCombo" },
                        { name: "LineToolCircleLines" },
                        { name: "LineToolTimeCycles" },
                        { name: "LineToolSineLine" },
                    ],
                    trackLabel: null,
                },
                {
                    id: "linetool-group-prediction-and-measurement",
                    title: (0, a.t)("Prediction and Measurement Tools"),
                    items: [
                        { name: "LineToolRiskRewardLong" },
                        { name: "LineToolRiskRewardShort" },
                        { name: "LineToolPrediction" },
                        { name: "LineToolDateRange" },
                        { name: "LineToolPriceRange" },
                        { name: "LineToolDateAndPriceRange" },
                        { name: "LineToolBarsPattern" },
                        { name: "LineToolGhostFeed" },
                        { name: "LineToolProjection" },
                        { name: "LineToolFixedRangeVolumeProfile" },
                    ].filter(Boolean),
                    trackLabel: null,
                },
            ];
            var k = o(85593),
                f = o(9837),
                S = o(9745),
                E = o(59199),
                y = o(68587),
                M = o(60306),
                D = o(33086);
            class L extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._scroll = null),
                        (this._handleScrollTop = () => {
                            this.animateTo(
                                Math.max(
                                    0,
                                    this.currentPosition() -
                                        (this.state.heightWrap - 50)
                                )
                            );
                        }),
                        (this._handleScrollBot = () => {
                            this.animateTo(
                                Math.min(
                                    (this.state.heightContent || 0) -
                                        (this.state.heightWrap || 0),
                                    this.currentPosition() +
                                        (this.state.heightWrap - 50)
                                )
                            );
                        }),
                        (this._handleResizeWrap = ({ height: e }) => {
                            this.setState({ heightWrap: e });
                        }),
                        (this._handleResizeContent = ({ height: e }) => {
                            this.setState({ heightContent: e });
                        }),
                        (this._handleScroll = () => {
                            const { onScroll: e } = this.props;
                            e &&
                                e(
                                    this.currentPosition(),
                                    this.isAtTop(),
                                    this.isAtBot()
                                ),
                                this._checkButtonsVisibility();
                        }),
                        (this._checkButtonsVisibility = () => {
                            const {
                                    isVisibleTopButton: e,
                                    isVisibleBotButton: t,
                                } = this.state,
                                o = this.isAtTop(),
                                i = this.isAtBot();
                            o || e
                                ? o &&
                                  e &&
                                  this.setState({ isVisibleTopButton: !1 })
                                : this.setState({ isVisibleTopButton: !0 }),
                                i || t
                                    ? i &&
                                      t &&
                                      this.setState({ isVisibleBotButton: !1 })
                                    : this.setState({ isVisibleBotButton: !0 });
                        }),
                        (this.state = {
                            heightContent: 0,
                            heightWrap: 0,
                            isVisibleBotButton: !1,
                            isVisibleTopButton: !1,
                        });
                }
                componentDidMount() {
                    this._checkButtonsVisibility();
                }
                componentDidUpdate(e, t) {
                    (t.heightWrap === this.state.heightWrap &&
                        t.heightContent === this.state.heightContent) ||
                        this._handleScroll();
                }
                currentPosition() {
                    return this._scroll ? this._scroll.scrollTop : 0;
                }
                isAtTop() {
                    return this.currentPosition() <= 1;
                }
                isAtBot() {
                    return (
                        this.currentPosition() + this.state.heightWrap >=
                        this.state.heightContent - 1
                    );
                }
                animateTo(e, t = y.dur) {
                    const o = this._scroll;
                    o &&
                        (0, E.doAnimate)({
                            onStep(e, t) {
                                o.scrollTop = t;
                            },
                            from: o.scrollTop,
                            to: Math.round(e),
                            easing: y.easingFunc.easeInOutCubic,
                            duration: t,
                        });
                }
                render() {
                    const {
                            children: e,
                            isVisibleScrollbar: t,
                            isVisibleFade: o,
                            isVisibleButtons: n,
                            onMouseOver: s,
                            onMouseOut: a,
                        } = this.props,
                        {
                            heightContent: l,
                            heightWrap: c,
                            isVisibleBotButton: d,
                            isVisibleTopButton: h,
                        } = this.state;
                    return i.createElement(
                        f,
                        {
                            whitelist: ["height"],
                            onMeasure: this._handleResizeWrap,
                        },
                        i.createElement(
                            "div",
                            {
                                className: M.wrap,
                                onMouseOver: s,
                                onMouseOut: a,
                            },
                            i.createElement(
                                "div",
                                {
                                    className: r()(M.scrollWrap, {
                                        [M.noScrollBar]: !t,
                                    }),
                                    onScroll: this._handleScroll,
                                    ref: (e) => (this._scroll = e),
                                },
                                i.createElement(
                                    f,
                                    {
                                        onMeasure: this._handleResizeContent,
                                        whitelist: ["height"],
                                    },
                                    i.createElement(
                                        "div",
                                        { className: M.content },
                                        e
                                    )
                                )
                            ),
                            o &&
                                i.createElement("div", {
                                    className: r()(M.fadeTop, {
                                        [M.isVisible]: h && l > c,
                                    }),
                                }),
                            o &&
                                i.createElement("div", {
                                    className: r()(M.fadeBot, {
                                        [M.isVisible]: d && l > c,
                                    }),
                                }),
                            n &&
                                i.createElement(
                                    "div",
                                    {
                                        className: r()(M.scrollTop, {
                                            [M.isVisible]: h && l > c,
                                        }),
                                        onClick: this._handleScrollTop,
                                    },
                                    i.createElement(
                                        "div",
                                        { className: M.iconWrap },
                                        i.createElement(S.Icon, {
                                            icon: D,
                                            className: M.icon,
                                        })
                                    )
                                ),
                            n &&
                                i.createElement(
                                    "div",
                                    {
                                        className: r()(M.scrollBot, {
                                            [M.isVisible]: d && l > c,
                                        }),
                                        onClick: this._handleScrollBot,
                                    },
                                    i.createElement(
                                        "div",
                                        { className: M.iconWrap },
                                        i.createElement(S.Icon, {
                                            icon: D,
                                            className: M.icon,
                                        })
                                    )
                                )
                        )
                    );
                }
            }
            L.defaultProps = { isVisibleScrollbar: !0 };
            var A = o(25760),
                N = o(59064),
                I = o(16534);
            function B(e) {
                const {
                    id: t,
                    action: o,
                    isActive: n,
                    isHidden: s,
                    isTransparent: a,
                    toolName: l,
                } = e;
                return i.createElement(I.ToolButton, {
                    id: t,
                    icon: T.lineToolsInfo[l].icon,
                    isActive: n,
                    isHidden: s,
                    isTransparent: a,
                    onClick: o,
                    title: T.lineToolsInfo[l].localizedName,
                    "data-name": l,
                });
            }
            var P = o(59803);
            const F = [
                61536, 61537, 61538, 61539, 61725, 61726, 61575, 61576, 61796,
                61797, 61779, 61780, 61781, 61782, 61783, 61784, 61785, 61786,
                61845, 61440, 61442, 61444, 61445, 61446, 61447, 61452, 61453,
                61454, 61457, 61458, 61459, 61461, 61463, 61466, 61467, 61470,
                61473, 61476, 61488, 61504, 61505, 61507, 61510, 61523, 61524,
                61525, 61526, 61527, 61528, 61529, 61530, 61531, 61532, 61533,
                61534, 61540, 61541, 61542, 61543, 61544, 61545, 61546, 61547,
                61548, 61550, 61552, 61553, 61554, 61557, 61558, 61559, 61560,
                61565, 61566, 61568, 61572, 61578, 61601, 61602, 61603, 61604,
                61605, 61606, 61607, 61609, 61610, 61611, 61654, 61655, 61656,
                61657, 61658, 61667, 61669, 61671, 61675, 61683, 61698, 61699,
                61700, 61701, 61702, 61703, 61708, 61712, 61713, 61714, 61715,
                61720, 61721, 61722, 61731, 61732, 61736, 61737, 61738, 61749,
                61751, 61753, 61754, 61757, 61760, 61768, 61769, 61770, 61813,
                61814, 61815, 61816, 61817, 61820, 61827, 61829, 61830, 61832,
                61842,
            ];
            var x = o(50628),
                V = o(90186),
                O = o(41590),
                W = o(37049),
                G = o(10745);
            class R extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._toggleDropdown = (e) => {
                            this.setState({
                                isOpened:
                                    void 0 !== e ? e : !this.state.isOpened,
                            });
                        }),
                        (this._handleClose = () => {
                            this._toggleDropdown(!1);
                        }),
                        (this._getDropdownPosition = () => {
                            if (!this._control) return { x: 0, y: 0 };
                            const e = this._control.getBoundingClientRect();
                            return { x: e.left + e.width + 1, y: e.top - 6 };
                        }),
                        (this._handleClickArrow = () => {
                            var e, t;
                            null === (t = (e = this.props).onArrowClick) ||
                                void 0 === t ||
                                t.call(e),
                                this._toggleDropdown();
                        }),
                        (this._handleTouchStart = () => {
                            this.props.onClickButton &&
                                this.props.onClickButton(),
                                this._toggleDropdown();
                        }),
                        (this._handlePressStart = () => {
                            if (c.mobiletouch && !this.props.checkable)
                                !this._longPressDelay &&
                                    this.props.onClickButton &&
                                    this.props.onClickButton();
                            else {
                                if (this._doubleClickDelay)
                                    return (
                                        clearTimeout(this._doubleClickDelay),
                                        delete this._doubleClickDelay,
                                        void this._toggleDropdown(!0)
                                    );
                                this._doubleClickDelay = setTimeout(() => {
                                    delete this._doubleClickDelay,
                                        !this._longPressDelay &&
                                            this.props.onClickButton &&
                                            this.props.onClickButton();
                                }, 175);
                            }
                            this._longPressDelay = setTimeout(() => {
                                delete this._longPressDelay,
                                    this._toggleDropdown(!0);
                            }, 300);
                        }),
                        (this._cancelAllTimeouts = () => {
                            clearTimeout(this._longPressDelay),
                                delete this._longPressDelay,
                                clearTimeout(this._doubleClickDelay),
                                delete this._doubleClickDelay;
                        }),
                        (this._handleTouchPressEnd = (e) => {
                            e.cancelable && e.preventDefault(),
                                this._handlePressEnd();
                        }),
                        (this._handlePressEnd = () => {
                            this._longPressDelay &&
                                (clearTimeout(this._longPressDelay),
                                delete this._longPressDelay,
                                this.state.isOpened
                                    ? this._toggleDropdown(!1)
                                    : this.props.checkable ||
                                      this.state.isOpened ||
                                      c.mobiletouch ||
                                      (!this.props.isActive &&
                                          !this.props.openDropdownByClick)
                                    ? !this._doubleClickDelay &&
                                      this.props.onClickButton &&
                                      this.props.onClickButton()
                                    : this._toggleDropdown(!0));
                        }),
                        (this.state = { isOpened: !1 });
                }
                render() {
                    const {
                            buttonActiveClass: e,
                            buttonClass: t,
                            buttonIcon: o,
                            buttonTitle: n,
                            buttonHotKey: s,
                            dropdownTooltip: a,
                            children: r,
                            isActive: d,
                            isGrayed: h,
                            onClickWhenGrayed: u,
                            checkable: m,
                            isSmallTablet: p,
                        } = this.props,
                        { isOpened: g } = this.state,
                        b = (0, V.filterDataProps)(this.props);
                    return i.createElement(
                        "div",
                        {
                            className: l(G.dropdown, {
                                [G.isGrayed]: h,
                                [G.isActive]: d,
                                [G.isOpened]: g,
                            }),
                            onClick: h ? u : void 0,
                        },
                        i.createElement(
                            "div",
                            {
                                ...b,
                                ref: (e) => (this._control = e),
                                className: G.control,
                            },
                            i.createElement(
                                "div",
                                {
                                    ...this._getButtonHandlers(),
                                    className: l(G.buttonWrap, {
                                        "apply-common-tooltip common-tooltip-vertical":
                                            Boolean(n || s),
                                    }),
                                    "data-tooltip-hotkey": s,
                                    "data-tooltip-delay": 1500,
                                    "data-role": "button",
                                    title: n,
                                },
                                i.createElement(I.ToolButton, {
                                    activeClass: e,
                                    className: t,
                                    icon: o,
                                    isActive: d,
                                    isGrayed: h,
                                    isTransparent: !m,
                                })
                            ),
                            !h &&
                                !c.mobiletouch &&
                                i.createElement(
                                    "div",
                                    {
                                        className: l(
                                            G.arrow,
                                            a &&
                                                "apply-common-tooltip common-tooltip-vertical"
                                        ),
                                        title: a,
                                        onClick: this._handleClickArrow,
                                        "data-role": "menu-handle",
                                    },
                                    i.createElement(S.Icon, {
                                        className: G.arrowIcon,
                                        icon: W,
                                    })
                                )
                        ),
                        !h &&
                            (p
                                ? g &&
                                  i.createElement(
                                      O.Drawer,
                                      {
                                          onClose: this._handleClose,
                                          position: "Bottom",
                                      },
                                      r
                                  )
                                : i.createElement(
                                      x.PopupMenu,
                                      {
                                          doNotCloseOn: this,
                                          isOpened: g,
                                          onClose: this._handleClose,
                                          position: this._getDropdownPosition,
                                      },
                                      r
                                  ))
                    );
                }
                _getButtonHandlers() {
                    const { isGrayed: e, checkable: t } = this.props;
                    return e
                        ? {}
                        : c.mobiletouch
                        ? t
                            ? {
                                  onTouchStart: this._handlePressStart,
                                  onTouchEnd: this._handleTouchPressEnd,
                                  onTouchMove: this._cancelAllTimeouts,
                              }
                            : { onClick: this._handleTouchStart }
                        : {
                              onMouseDown: this._handlePressStart,
                              onMouseUp: this._handlePressEnd,
                          };
                }
            }
            var H = o(51613),
                U = o(88234);
            class z extends i.Component {
                constructor(e) {
                    super(e),
                        (this._renderItem = (e, t) => {
                            const { isSmallTablet: o } = this.props,
                                n = l(
                                    U.item,
                                    o && U.smallTablet,
                                    t &&
                                        o &&
                                        this.state.isActive &&
                                        e === this.state.current &&
                                        U.active
                                );
                            return i.createElement(
                                "div",
                                {
                                    className: n,
                                    key: e,
                                    onClick: () => {
                                        this._handleSelect(e),
                                            (0, N.globalCloseMenu)();
                                    },
                                },
                                String.fromCharCode(e)
                            );
                        }),
                        (this._onChangeDrawingStateTool = () => {
                            this.setState({ isActive: this._isActive() });
                        }),
                        (this._onChangeDrawingStateIcon = () => {
                            const e = u.iconTool.value();
                            let { recents: t } = this.state;
                            const o = t.indexOf(e);
                            -1 !== o && t.splice(o, 1),
                                (t = [e, ...t.slice(0, 9)]),
                                (0, d.setJSON)("linetoolicon.recenticons", t),
                                this.setState({ current: e, recents: t });
                        }),
                        (this._handleSelect = (e) => {
                            u.iconTool.setValue(e),
                                u.tool.setValue("LineToolIcon");
                        }),
                        (this.state = {
                            current: (0, P.defaults)("linetoolicon").icon,
                            recents:
                                (0, d.getJSON)("linetoolicon.recenticons") ||
                                [],
                            isActive: this._isActive(),
                        });
                }
                componentDidMount() {
                    u.tool.subscribe(this._onChangeDrawingStateTool),
                        u.iconTool.subscribe(this._onChangeDrawingStateIcon),
                        d.onSync.subscribe(this, this._onSyncSettings);
                }
                componentWillUnmount() {
                    u.tool.unsubscribe(this._onChangeDrawingStateTool),
                        u.iconTool.unsubscribe(this._onChangeDrawingStateIcon),
                        d.onSync.unsubscribe(this, this._onSyncSettings);
                }
                render() {
                    const { isSmallTablet: e, isMobileWrap: t } = this.props,
                        { recents: o } = this.state,
                        n = l(U.wrap, e && U.smallTablet, t && U.mobileWrap);
                    return i.createElement(
                        i.Fragment,
                        null,
                        o &&
                            i.createElement(
                                i.Fragment,
                                null,
                                e &&
                                    i.createElement(
                                        "div",
                                        { className: U.title },
                                        (0, a.t)("Recently used")
                                    ),
                                i.createElement(
                                    "div",
                                    { className: n },
                                    o.map((e) => this._renderItem(e, !0))
                                ),
                                i.createElement(H.PopupMenuSeparator, {
                                    className: l(e && U.separator),
                                })
                            ),
                        i.createElement(
                            "div",
                            { key: "all", className: n },
                            F.map((e) => this._renderItem(e))
                        )
                    );
                }
                _isActive() {
                    var e;
                    return (
                        u.tool.value() ===
                        (null !== (e = this.props.toolName) && void 0 !== e
                            ? e
                            : "LineToolIcon")
                    );
                }
                _onSyncSettings() {
                    this.setState({
                        recents: (0, d.getJSON)("linetoolicon.recenticons"),
                    });
                }
            }
            var j = o(48214);
            const q = {
                icon: (0, a.t)("Icon"),
                dropdownTooltip: (0, a.t)("Icons"),
            };
            class J extends i.Component {
                constructor(e) {
                    super(e),
                        (this._onChangeDrawingStateTool = () => {
                            this.setState({ isActive: this._isActive() });
                        }),
                        (this._onChangeDrawingStateIcon = () => {
                            const e = u.iconTool.value();
                            this.setState({ current: e });
                        }),
                        (this._handleSelect = (e) => {
                            u.iconTool.setValue(e),
                                u.tool.setValue("LineToolIcon");
                        }),
                        (this._handleClick = () => {
                            const { current: e } = this.state;
                            this._handleSelect(e || F[0]), this._trackClick();
                        }),
                        (this._handleArrowClick = () => {
                            this._trackClick("menu");
                        }),
                        (this.state = {
                            current: (0, P.defaults)("linetoolicon").icon,
                            isActive: this._isActive(),
                        });
                }
                componentDidMount() {
                    u.tool.subscribe(this._onChangeDrawingStateTool),
                        u.iconTool.subscribe(this._onChangeDrawingStateIcon);
                }
                componentWillUnmount() {
                    u.tool.unsubscribe(this._onChangeDrawingStateTool),
                        u.iconTool.unsubscribe(this._onChangeDrawingStateIcon);
                }
                render() {
                    const {
                            isGrayed: e,
                            toolName: t,
                            isSmallTablet: o,
                        } = this.props,
                        { current: n, isActive: s } = this.state,
                        a = (0, V.filterDataProps)(this.props);
                    return i.createElement(
                        R,
                        {
                            buttonClass: j.button,
                            buttonIcon: i.createElement(
                                "div",
                                { className: j.buttonIcon },
                                String.fromCharCode(n || F[0])
                            ),
                            buttonTitle: q.icon,
                            dropdownTooltip: q.dropdownTooltip,
                            isActive: s,
                            isGrayed: e,
                            isSmallTablet: o,
                            onClickButton: this._handleClick,
                            onClickWhenGrayed: () =>
                                (0, p.emit)("onGrayedObjectClicked", {
                                    type: "drawing",
                                    name: T.lineToolsInfo[t].localizedName,
                                }),
                            onArrowClick: this._handleArrowClick,
                            ...a,
                        },
                        i.createElement(z, { isSmallTablet: o, toolName: t })
                    );
                }
                _isActive() {
                    return u.tool.value() === this.props.toolName;
                }
                _trackClick(e) {
                    0;
                }
            }
            var K = o(88564);
            class X extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleClick = () => {
                            this.props.saveDefaultOnChange &&
                                (0, K.saveDefaultProperties)(!0);
                            const e = !this.props.property.value();
                            this.props.property.setValue(e),
                                this.props.saveDefaultOnChange &&
                                    (0, K.saveDefaultProperties)(!1),
                                this.props.onClick && this.props.onClick(e);
                        }),
                        (this.state = {
                            isActive: this.props.property.value(),
                        });
                }
                componentDidMount() {
                    this.props.property.subscribe(this, this._onChange);
                }
                componentWillUnmount() {
                    this.props.property.unsubscribe(this, this._onChange);
                }
                render() {
                    const { toolName: e } = this.props,
                        { isActive: t } = this.state,
                        o = T.lineToolsInfo[e];
                    return i.createElement(I.ToolButton, {
                        icon: t && o.iconActive ? o.iconActive : o.icon,
                        isActive: t,
                        onClick: this._handleClick,
                        title: o.localizedName,
                        buttonHotKey: o.hotKey,
                        "data-name": e,
                    });
                }
                _onChange(e) {
                    this.setState({ isActive: e.value() });
                }
            }
            class Y extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleClick = () => {
                            var e, t;
                            u.tool.setValue(this.props.toolName),
                                null === (t = (e = this.props).onClick) ||
                                    void 0 === t ||
                                    t.call(e);
                        }),
                        (this._onChange = () => {
                            this.setState({
                                isActive:
                                    u.tool.value() === this.props.toolName,
                            });
                        }),
                        (this.state = {
                            isActive: u.tool.value() === this.props.toolName,
                        });
                }
                componentDidMount() {
                    u.tool.subscribe(this._onChange);
                }
                componentWillUnmount() {
                    u.tool.unsubscribe(this._onChange);
                }
                render() {
                    const { toolName: e } = this.props,
                        { isActive: t } = this.state,
                        o = T.lineToolsInfo[e];
                    return i.createElement(I.ToolButton, {
                        icon: T.lineToolsInfo[e].icon,
                        isActive: t,
                        isTransparent: !0,
                        onClick: this._handleClick,
                        title: o.localizedName,
                        buttonHotKey: o.hotKey,
                        "data-name": e,
                    });
                }
            }
            class Z extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._boundUndoModel = null),
                        (this._handleClick = () => {
                            const e = this._activeChartWidget();
                            e.hasModel() && e.model().zoomFromViewport();
                        }),
                        (this._syncUnzoomButton = () => {
                            const e = this._activeChartWidget();
                            let t = !1;
                            if (e.hasModel()) {
                                const o = e.model();
                                this._boundUndoModel !== o &&
                                    (this._boundUndoModel &&
                                        this._boundUndoModel
                                            .zoomStack()
                                            .onChange()
                                            .unsubscribe(
                                                null,
                                                this._syncUnzoomButton
                                            ),
                                    o
                                        .zoomStack()
                                        .onChange()
                                        .subscribe(
                                            null,
                                            this._syncUnzoomButton
                                        ),
                                    (this._boundUndoModel = o)),
                                    (t = !o.zoomStack().isEmpty());
                            } else e.withModel(null, this._syncUnzoomButton);
                            this.setState({ isVisible: t });
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.activeChartWidget.subscribe(
                        this._syncUnzoomButton,
                        { callWithLast: !0 }
                    );
                }
                componentWillUnmount() {
                    this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
                        this._syncUnzoomButton
                    );
                }
                render() {
                    return this.state.isVisible
                        ? i.createElement(B, {
                              action: this._handleClick,
                              isTransparent: !0,
                              toolName: "zoom-out",
                          })
                        : i.createElement("div", null);
                }
                _activeChartWidget() {
                    return this.props.chartWidgetCollection.activeChartWidget.value();
                }
            }
            var Q = o(89377),
                $ = o(36189),
                ee = o(16396),
                te = o(81332);
            class oe extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._onChangeDrawingState = () => {
                            const e = this._getActiveToolIndex();
                            this.setState({
                                current: -1 !== e ? e : this.state.current,
                                isActive: -1 !== e,
                            });
                        }),
                        (this._handleClickButton = () => {
                            if ((this._trackClick(), v.CheckMobile.any()))
                                return;
                            const e = this._getCurrentToolName();
                            this._selectTool(e);
                        }),
                        (this._handleClickItem = (e) => {
                            this._selectTool(e);
                        }),
                        (this._handleGrayedClick = (e) => {
                            (0, p.emit)("onGrayedObjectClicked", {
                                type: "drawing",
                                name: T.lineToolsInfo[e].localizedName,
                            });
                        }),
                        (this._handleClickFavorite = (e) => {
                            this.state.favState && this.state.favState[e]
                                ? Q.LinetoolsFavoritesStore.removeFavorite(e)
                                : Q.LinetoolsFavoritesStore.addFavorite(e);
                        }),
                        (this._onAddFavorite = (e) => {
                            this.setState({
                                favState: { ...this.state.favState, [e]: !0 },
                            });
                        }),
                        (this._onRemoveFavorite = (e) => {
                            this.setState({
                                favState: { ...this.state.favState, [e]: !1 },
                            });
                        }),
                        (this._onSyncFavorites = () => {
                            this.setState({
                                favState: this._composeFavState(),
                            });
                        }),
                        (this._handleArrowClick = () => {
                            this._trackClick("menu");
                        }),
                        (this._trackClick = (e) => {
                            const { trackLabel: t } = this.props;
                        });
                    const t = this._getActiveToolIndex();
                    this.state = {
                        current: -1 === t ? this._firstNonGrayedTool() : t,
                        favState: this._composeFavState(),
                        isActive: -1 !== t,
                    };
                }
                componentDidMount() {
                    u.tool.subscribe(this._onChangeDrawingState),
                        Q.LinetoolsFavoritesStore.favoriteAdded.subscribe(
                            null,
                            this._onAddFavorite
                        ),
                        Q.LinetoolsFavoritesStore.favoriteRemoved.subscribe(
                            null,
                            this._onRemoveFavorite
                        ),
                        Q.LinetoolsFavoritesStore.favoritesSynced.subscribe(
                            null,
                            this._onSyncFavorites
                        );
                }
                componentWillUnmount() {
                    u.tool.unsubscribe(this._onChangeDrawingState),
                        Q.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(
                            null,
                            this._onAddFavorite
                        ),
                        Q.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(
                            null,
                            this._onRemoveFavorite
                        ),
                        Q.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(
                            null,
                            this._onSyncFavorites
                        );
                }
                componentDidUpdate(e, t) {
                    e.lineTools !== this.props.lineTools &&
                        this.setState({ favState: this._composeFavState() });
                }
                render() {
                    const {
                            favoriting: e,
                            grayedTools: t,
                            lineTools: o,
                            dropdownTooltip: n,
                            isSmallTablet: s,
                        } = this.props,
                        { current: a, favState: l, isActive: r } = this.state,
                        c = this._getCurrentToolName(),
                        d = T.lineToolsInfo[c],
                        h = this._showShortcuts(),
                        u = (0, V.filterDataProps)(this.props);
                    return i.createElement(
                        "span",
                        null,
                        i.createElement(
                            R,
                            {
                                buttonIcon: d.icon,
                                buttonTitle: d.localizedName,
                                buttonHotKey: d.hotKey,
                                dropdownTooltip: n,
                                isActive: r,
                                onClickButton: this._handleClickButton,
                                onArrowClick: this._handleArrowClick,
                                isSmallTablet: s,
                                ...u,
                            },
                            o.map((o, n) => {
                                const c = o.name,
                                    d = T.lineToolsInfo[c],
                                    u = t[c];
                                return i.createElement(ee.PopupMenuItem, {
                                    key: c,
                                    "data-name": o.name,
                                    theme: s
                                        ? te.multilineLabelWithIconAndToolboxTheme
                                        : void 0,
                                    dontClosePopup: u,
                                    forceShowShortcuts: h,
                                    shortcut:
                                        !s && o.hotkeyHash
                                            ? (0, C.humanReadableHash)(
                                                  o.hotkeyHash
                                              )
                                            : void 0,
                                    icon: d.icon,
                                    isActive: r && a === n,
                                    appearAsDisabled: u,
                                    label: d.localizedName,
                                    onClick: u
                                        ? this._handleGrayedClick
                                        : this._handleClickItem,
                                    onClickArg: c,
                                    showToolboxOnHover: !l[c],
                                    toolbox:
                                        e && !u
                                            ? i.createElement(
                                                  $.FavoriteButton,
                                                  {
                                                      isActive: r && a === n,
                                                      isFilled: l[c],
                                                      onClick: () =>
                                                          this._handleClickFavorite(
                                                              c
                                                          ),
                                                  }
                                              )
                                            : void 0,
                                });
                            })
                        )
                    );
                }
                _getCurrentToolName() {
                    const { current: e } = this.state,
                        { lineTools: t } = this.props;
                    return t[e || 0].name;
                }
                _firstNonGrayedTool() {
                    const { grayedTools: e, lineTools: t } = this.props;
                    return t.findIndex((t) => !e[t.name]);
                }
                _getActiveToolIndex() {
                    return this.props.lineTools.findIndex(
                        (e) => e.name === u.tool.value()
                    );
                }
                _showShortcuts() {
                    return this.props.lineTools.some((e) => "shortcut" in e);
                }
                _selectTool(e) {
                    u.tool.setValue(e);
                }
                _composeFavState() {
                    const e = {};
                    return (
                        this.props.lineTools.forEach((t) => {
                            e[t.name] = Q.LinetoolsFavoritesStore.isFavorite(
                                t.name
                            );
                        }),
                        e
                    );
                }
            }
            var ie = o(51768),
                ne = o(40173),
                se = o(83860);
            const ae = (0, ne.mergeThemes)(
                    ee.DEFAULT_POPUP_MENU_ITEM_THEME,
                    se
                ),
                le = {
                    all: (0, a.t)("Remove Drawings & Indicators"),
                    drawings: (0, a.t)("Remove Drawings"),
                    studies: (0, a.t)("Remove Indicators"),
                };
            class re extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleRemoveToolClick = () => {
                            c.mobiletouch || this._handleRemoveDrawings(), de();
                        }),
                        (this._handleRemoveDrawings = () => {
                            ce("remove drawing"),
                                this.props.chartWidgetCollection.activeChartWidget
                                    .value()
                                    .removeAllDrawingTools();
                        }),
                        (this._handleRemoveStudies = () => {
                            ce("remove indicator"),
                                this.props.chartWidgetCollection.activeChartWidget
                                    .value()
                                    .removeAllStudies();
                        }),
                        (this._handleRemoveAll = () => {
                            ce("remove all"),
                                this.props.chartWidgetCollection.activeChartWidget
                                    .value()
                                    .removeAllStudiesDrawingTools();
                        });
                }
                render() {
                    const e = this.props.isSmallTablet ? ae : void 0;
                    return i.createElement(
                        R,
                        {
                            buttonIcon:
                                T.lineToolsInfo[this.props.toolName].icon,
                            buttonTitle: le.drawings,
                            onClickButton: this._handleRemoveToolClick,
                            isSmallTablet: this.props.isSmallTablet,
                            "data-name": this.props.toolName,
                            onArrowClick: this._handleArrowClick,
                            openDropdownByClick: !1,
                        },
                        i.createElement(ee.PopupMenuItem, {
                            "data-name": "remove-drawing-tools",
                            label: le.drawings,
                            onClick: this._handleRemoveDrawings,
                            theme: e,
                        }),
                        i.createElement(ee.PopupMenuItem, {
                            "data-name": "remove-studies",
                            label: le.studies,
                            onClick: this._handleRemoveStudies,
                            theme: e,
                        }),
                        i.createElement(ee.PopupMenuItem, {
                            "data-name": "remove-all",
                            label: le.all,
                            onClick: this._handleRemoveAll,
                            theme: e,
                        })
                    );
                }
                _handleArrowClick() {
                    de("menu");
                }
            }
            function ce(e) {
                (0, ie.trackEvent)("GUI", "Chart Left Toolbar", e);
            }
            function de(e) {
                0;
            }
            var he = o(10458),
                ue = o(90995),
                me = o(14881);
            const pe = i.createContext({ hideMode: "drawings", isActive: !1 });
            function ge(e) {
                const {
                        hideMode: t,
                        option: { label: o, dataName: n, getBoxedValue: s },
                        isSmallTablet: a,
                        onClick: l,
                    } = e,
                    { hideMode: r, isActive: c } = (0, i.useContext)(pe),
                    d = null == s ? void 0 : s();
                return "all" === t || d
                    ? i.createElement(ee.PopupMenuItem, {
                          label: o,
                          isActive: r === t && c,
                          onClick: function () {
                              l(t, (0, ue.toggleHideMode)(t));
                          },
                          "data-name": n,
                          theme: a ? ae : void 0,
                      })
                    : i.createElement(i.Fragment, null);
            }
            const be = {
                drawings: {
                    active: he.drawingToolsIcons.hideAllDrawingToolsActive,
                    inactive: he.drawingToolsIcons.hideAllDrawingTools,
                },
                indicators: {
                    active: he.drawingToolsIcons.hideAllIndicatorsActive,
                    inactive: he.drawingToolsIcons.hideAllIndicators,
                },
                positions: {
                    active: he.drawingToolsIcons.hideAllPositionsToolsActive,
                    inactive: he.drawingToolsIcons.hideAllPositionsTools,
                },
                all: {
                    active: he.drawingToolsIcons.hideAllDrawingsActive,
                    inactive: he.drawingToolsIcons.hideAllDrawings,
                },
            };
            function ve(e) {
                const { isSmallTablet: t } = e,
                    [{ isActive: o, hideMode: n }, a] = (0, i.useState)(() => ({
                        isActive: !1,
                        hideMode: (0, ue.getSavedHideMode)(),
                    }));
                (0, i.useEffect)(
                    () => (
                        me.hideStateChange.subscribe(null, a),
                        () => {
                            me.hideStateChange.unsubscribe(null, a);
                        }
                    ),
                    []
                );
                const l = T.lineToolsInfo.hideAllDrawings,
                    {
                        trackLabel: r,
                        tooltip: c,
                        dataName: d,
                    } = (0, s.ensureDefined)((0, ue.getHideOptions)().get(n)),
                    h = be[n][o ? "active" : "inactive"],
                    u = o ? c.active : c.inactive;
                return i.createElement(
                    R,
                    {
                        buttonIcon: h,
                        buttonTitle: u,
                        buttonHotKey: l.hotKey,
                        onClickButton: function () {
                            (0, ue.toggleHideMode)(n),
                                Te(r, !o),
                                _e(o ? "on" : "off");
                        },
                        isSmallTablet: t,
                        isActive: o,
                        checkable: !0,
                        "data-name": "hide-all",
                        "data-type": d,
                        onArrowClick: function () {
                            _e("menu");
                        },
                    },
                    i.createElement(
                        pe.Provider,
                        { value: { isActive: o, hideMode: n } },
                        Array.from((0, ue.getHideOptions)()).map(([e, o]) =>
                            i.createElement(ge, {
                                key: e,
                                hideMode: e,
                                option: o,
                                isSmallTablet: t,
                                onClick: m,
                            })
                        )
                    )
                );
                function m(e, t) {
                    Te(
                        (0, s.ensureDefined)((0, ue.getHideOptions)().get(e))
                            .trackLabel,
                        t
                    );
                }
            }
            function Te(e, t) {
                (0, ie.trackEvent)(
                    "GUI",
                    "Chart Left Toolbar",
                    `${e} ${t ? "on" : "off"}`
                );
            }
            function _e(e) {
                0;
            }
            var Ce = o(12409),
                we = o(31330);
            const ke = (0, a.t)("Show Favorite Drawing Tools Toolbar");
            class fe extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._instance = null),
                        (this._promise = null),
                        (this._bindedForceUpdate = () => this.forceUpdate()),
                        (this._handleClick = () => {
                            null !== this._instance &&
                                (this._instance.isVisible()
                                    ? (this._instance.hide(),
                                      this._trackClick(!1))
                                    : (this._instance.show(),
                                      this._trackClick(!0)));
                        });
                }
                componentDidMount() {
                    const e = (this._promise = (0, s.ensureNotNull)(
                        (0, Ce.getFavoriteDrawingToolbarPromise)()
                    ));
                    e.then((t) => {
                        this._promise === e &&
                            ((this._instance = t),
                            this._instance
                                .canBeShown()
                                .subscribe(this._bindedForceUpdate),
                            this._instance
                                .visibility()
                                .subscribe(this._bindedForceUpdate),
                            this.forceUpdate());
                    });
                }
                componentWillUnmount() {
                    (this._promise = null),
                        null !== this._instance &&
                            (this._instance
                                .canBeShown()
                                .unsubscribe(this._bindedForceUpdate),
                            this._instance
                                .visibility()
                                .unsubscribe(this._bindedForceUpdate),
                            (this._instance = null));
                }
                render() {
                    return null !== this._instance &&
                        this._instance.canBeShown().value()
                        ? i.createElement(I.ToolButton, {
                              id: this.props.id,
                              icon: we,
                              isActive: this._instance.isVisible(),
                              onClick: this._handleClick,
                              title: ke,
                          })
                        : null;
                }
                _trackClick(e) {
                    0;
                }
            }
            var Se,
                Ee = o(90373);
            !(function (e) {
                (e.Screenshot = "drawing-toolbar-screenshot"),
                    (e.FavoriteDrawings = "drawing-toolbar-favorite-drawings"),
                    (e.ObjectTree = "drawing-toolbar-object-tree");
            })(Se || (Se = {}));
            var ye = o(70412),
                Me = o(54475),
                De = o(45216),
                Le = o(29197),
                Ae = o(61226);
            const Ne = Ae,
                Ie = "http://www.w3.org/2000/svg";
            function Be(e) {
                const { direction: t, theme: o = Ae } = e;
                return i.createElement(
                    "svg",
                    {
                        xmlns: Ie,
                        width: "9",
                        height: "27",
                        viewBox: "0 0 9 27",
                        className: l(
                            o.container,
                            "right" === t ? o.mirror : null
                        ),
                        onContextMenu: Me.preventDefault,
                    },
                    i.createElement(
                        "g",
                        { fill: "none", fillRule: "evenodd" },
                        i.createElement("path", {
                            className: o.background,
                            d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z",
                        }),
                        i.createElement("path", {
                            className: o.arrow,
                            d: "M5.5 10l-2 3.5 2 3.5",
                        })
                    )
                );
            }
            var Pe = o(84006);
            const Fe = (0, ne.mergeThemes)(Ne, Pe),
                xe = {
                    hide: (0, a.t)("Hide Drawings Toolbar"),
                    show: (0, a.t)("Show Drawings Toolbar"),
                };
            class Ve extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._toggleVisibility = () => {
                            k.isDrawingToolbarVisible.setValue(
                                !k.isDrawingToolbarVisible.value()
                            );
                        });
                }
                render() {
                    const { toolbarVisible: e, "data-name": t } = this.props;
                    return i.createElement(
                        "div",
                        {
                            className: l(
                                Fe.toggleButton,
                                "apply-common-tooltip common-tooltip-vertical",
                                !e && Fe.collapsed
                            ),
                            onClick: this._toggleVisibility,
                            title: e ? xe.hide : xe.show,
                            "data-name": t,
                            "data-value": e ? "visible" : "collapsed",
                        },
                        i.createElement(Be, {
                            direction: e ? "left" : "right",
                            theme: e ? void 0 : Fe,
                        })
                    );
                }
            }
            var Oe = o(37558),
                We = o(24437),
                Ge = o(90692);
            const Re = { chartWidgetCollection: o(19036).any.isRequired };
            var He = o(55402),
                Ue = o(85494);
            const ze = h.enabled("right_toolbar"),
                je = h.enabled("keep_object_tree_widget_in_right_toolbar"),
                qe = {
                    weakMagnet: (0, a.t)("Weak Magnet"),
                    strongMagnet: (0, a.t)("Strong Magnet"),
                },
                Je = (0, v.onWidget)(),
                Ke = new (b())(),
                Xe = ie.trackEvent.bind(null, "GUI", "Chart Left Toolbar"),
                Ye = (e, t) => Xe(`${e} ${t ? "on" : "off"}`);
            function Ze() {
                const e = !u.properties().childs().magnet.value();
                Ye("magnet mode", e),
                    ot("magnet mode", e ? "on" : "off"),
                    (0, m.setIsMagnetEnabled)(e);
            }
            function Qe() {
                (0, ie.trackEvent)("GUI", "Magnet mode", "Weak"),
                    (0, m.setMagnetMode)(Ee.MagnetMode.WeakMagnet);
            }
            function $e() {
                (0, ie.trackEvent)("GUI", "Magnet mode", "Strong"),
                    (0, m.setMagnetMode)(Ee.MagnetMode.StrongMagnet);
            }
            function et() {
                ot("magnet mode", "menu");
            }
            class tt extends i.PureComponent {
                constructor(e) {
                    var t;
                    super(e),
                        (this._grayedTools = {}),
                        (this._handleMeasureClick = () => {
                            ot("measure");
                        }),
                        (this._handleZoomInClick = () => {
                            ot("zoom in");
                        }),
                        (this._handleDrawingClick = (e) => {
                            Ye("drawing mode", e),
                                ot("drawing mode", e ? "on" : "off");
                        }),
                        (this._handleLockClick = (e) => {
                            Ye("lock all drawing", e),
                                ot("lock", e ? "on" : "off");
                        }),
                        (this._handleSyncClick = (e) => {
                            Ye("sync", e), ot("sync", e ? "on" : "off");
                        }),
                        (this._handleObjectsTreeClick = () => {
                            this._activeChartWidget().showObjectsTreeDialog(),
                                ot("object tree");
                        }),
                        (this._handleMouseOver = (e) => {
                            (0, ye.hoverMouseEventFilter)(e) &&
                                this.setState({ isHovered: !0 });
                        }),
                        (this._handleMouseOut = (e) => {
                            (0, ye.hoverMouseEventFilter)(e) &&
                                this.setState({ isHovered: !1 });
                        }),
                        (this._handleChangeVisibility = (e) => {
                            this.setState({ isVisible: e });
                        }),
                        (this._handleEsc = () => {
                            u.resetToCursor(!0);
                        }),
                        (this._updateMagnetEnabled = () => {
                            const e = {
                                magnet: (0, m.magnetEnabled)().value(),
                            };
                            this.setState(e);
                        }),
                        (this._updateMagnetMode = () => {
                            const e = {
                                magnetMode: (0, m.magnetMode)().value(),
                            };
                            this.setState(e);
                        }),
                        (this._handleWidgetbarSettled = (e) => {
                            var t;
                            this.setState({
                                isWidgetbarVisible: Boolean(
                                    null === (t = window.widgetbar) ||
                                        void 0 === t
                                        ? void 0
                                        : t.visible().value()
                                ),
                                widgetbarSettled: e,
                            });
                        }),
                        (this._handleWidgetbarVisible = (e) => {
                            this.setState({ isWidgetbarVisible: e });
                        }),
                        u.init(),
                        (this._toolsFilter = new _(this.props.drawingsAccess)),
                        (this._filteredLineTools = w
                            .map((e) => ({
                                id: e.id,
                                title: e.title,
                                items: e.items.filter((e) =>
                                    this._toolsFilter.isToolEnabled(
                                        T.lineToolsInfo[e.name].localizedName
                                    )
                                ),
                                trackLabel: e.trackLabel,
                            }))
                            .filter((e) => 0 !== e.items.length)),
                        this._filteredLineTools.forEach((e) =>
                            e.items.forEach((e) => {
                                this._grayedTools[e.name] =
                                    this._toolsFilter.isToolGrayed(
                                        T.lineToolsInfo[e.name].localizedName
                                    );
                            })
                        ),
                        (this.state = {
                            isHovered: !1,
                            isVisible: k.isDrawingToolbarVisible.value(),
                            isWidgetbarVisible: Boolean(
                                null === (t = window.widgetbar) || void 0 === t
                                    ? void 0
                                    : t.visible().value()
                            ),
                            widgetbarSettled: void 0 !== window.widgetbar,
                            magnet: u.properties().childs().magnet.value(),
                            magnetMode: u
                                .properties()
                                .childs()
                                .magnetMode.value(),
                        }),
                        (this._features = {
                            favoriting: !Je && h.enabled("items_favoriting"),
                            multicharts: h.enabled("support_multicharts"),
                            tools: !Je || h.enabled("charting_library_base"),
                        }),
                        (this._registry = {
                            chartWidgetCollection:
                                this.props.chartWidgetCollection,
                        }),
                        this._negotiateResizer();
                }
                componentDidMount() {
                    var e;
                    k.isDrawingToolbarVisible.subscribe(
                        this._handleChangeVisibility
                    ),
                        N.globalCloseDelegate.subscribe(
                            this,
                            this._handleGlobalClose
                        ),
                        (0, m.magnetEnabled)().subscribe(
                            this._updateMagnetEnabled
                        ),
                        (0, m.magnetMode)().subscribe(this._updateMagnetMode),
                        (this._tool = u.tool.spawn()),
                        this._tool.subscribe(this._updateHotkeys.bind(this)),
                        this._initHotkeys(),
                        this.props.widgetbarSettled &&
                            (this.props.widgetbarSettled.subscribe(
                                this,
                                this._handleWidgetbarSettled
                            ),
                            v.CheckMobile.any() &&
                                (null === (e = window.widgetbar) ||
                                    void 0 === e ||
                                    e
                                        .visible()
                                        .subscribe(
                                            this._handleWidgetbarVisible
                                        )));
                }
                componentWillUnmount() {
                    var e;
                    null === (e = window.widgetbar) ||
                        void 0 === e ||
                        e.visible().unsubscribe(this._handleWidgetbarVisible),
                        k.isDrawingToolbarVisible.unsubscribe(
                            this._handleChangeVisibility
                        ),
                        N.globalCloseDelegate.unsubscribe(
                            this,
                            this._handleGlobalClose
                        ),
                        (0, m.magnetEnabled)().unsubscribe(
                            this._updateMagnetEnabled
                        ),
                        (0, m.magnetMode)().unsubscribe(this._updateMagnetMode),
                        this._tool.destroy(),
                        this._hotkeys.destroy();
                }
                componentDidUpdate(e, t) {
                    var o;
                    const { isVisible: i, widgetbarSettled: n } = this.state;
                    i !== t.isVisible &&
                        (p.emit("toggle_sidebar", !i),
                        d.setValue("ChartDrawingToolbarWidget.visible", i),
                        this._negotiateResizer()),
                        t.widgetbarSettled !== n &&
                            n &&
                            v.CheckMobile.any() &&
                            (null === (o = window.widgetbar) ||
                                void 0 === o ||
                                o
                                    .visible()
                                    .subscribe(this._handleWidgetbarVisible));
                }
                render() {
                    const {
                            bgColor: e,
                            chartWidgetCollection: t,
                            readOnly: o,
                        } = this.props,
                        {
                            isHovered: n,
                            isVisible: s,
                            magnet: a,
                            magnetMode: r,
                        } = this.state,
                        d = { backgroundColor: e && "#" + e };
                    let m;
                    m = i.createElement(Ve, {
                        toolbarVisible: s,
                        "data-name": "toolbar-drawing-toggle-button",
                    });
                    const p = () =>
                        !!this._features.tools &&
                        !(!h.enabled("show_object_tree") || (je && !ze));
                    return i.createElement(
                        He.RegistryProvider,
                        { validation: Re, value: this._registry },
                        i.createElement(
                            Le.CloseDelegateContext.Provider,
                            { value: Ke },
                            i.createElement(
                                Oe.DrawerManager,
                                null,
                                i.createElement(
                                    Ge.MatchMedia,
                                    { rule: We.DialogBreakpoints.TabletSmall },
                                    (e) =>
                                        i.createElement(
                                            "div",
                                            {
                                                id: "drawing-toolbar",
                                                className: l(
                                                    Ue.drawingToolbar,
                                                    { [Ue.isHidden]: !s }
                                                ),
                                                style: d,
                                                onClick: this.props.onClick,
                                                onContextMenu:
                                                    Me.preventDefaultForContextMenu,
                                            },
                                            i.createElement(
                                                L,
                                                {
                                                    onScroll:
                                                        this._handleGlobalClose,
                                                    isVisibleFade:
                                                        c.mobiletouch,
                                                    isVisibleButtons:
                                                        !c.mobiletouch && n,
                                                    isVisibleScrollbar: !1,
                                                    onMouseOver:
                                                        this._handleMouseOver,
                                                    onMouseOut:
                                                        this._handleMouseOut,
                                                },
                                                i.createElement(
                                                    "div",
                                                    { className: Ue.inner },
                                                    !o &&
                                                        i.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    Ue.group,
                                                                style: d,
                                                            },
                                                            this._filteredLineTools.map(
                                                                (o, n) =>
                                                                    i.createElement(
                                                                        oe,
                                                                        {
                                                                            "data-name":
                                                                                o.id,
                                                                            chartWidgetCollection:
                                                                                t,
                                                                            favoriting:
                                                                                this
                                                                                    ._features
                                                                                    .favoriting,
                                                                            grayedTools:
                                                                                this
                                                                                    ._grayedTools,
                                                                            key: n,
                                                                            dropdownTooltip:
                                                                                o.title,
                                                                            lineTools:
                                                                                o.items,
                                                                            isSmallTablet:
                                                                                e,
                                                                            trackLabel:
                                                                                o.trackLabel,
                                                                        }
                                                                    )
                                                            ),
                                                            this._toolsFilter.isToolEnabled(
                                                                "Font Icons"
                                                            ) &&
                                                                i.createElement(
                                                                    J,
                                                                    {
                                                                        "data-name":
                                                                            "linetool-group-font-icons",
                                                                        isGrayed:
                                                                            this
                                                                                ._grayedTools[
                                                                                "Font Icons"
                                                                            ],
                                                                        toolName:
                                                                            "LineToolIcon",
                                                                        isSmallTablet:
                                                                            e,
                                                                    }
                                                                )
                                                        ),
                                                    !o &&
                                                        i.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    Ue.group,
                                                                style: d,
                                                            },
                                                            i.createElement(Y, {
                                                                toolName:
                                                                    "measure",
                                                                onClick:
                                                                    this
                                                                        ._handleMeasureClick,
                                                            }),
                                                            i.createElement(Y, {
                                                                toolName:
                                                                    "zoom",
                                                                onClick:
                                                                    this
                                                                        ._handleZoomInClick,
                                                            }),
                                                            i.createElement(Z, {
                                                                chartWidgetCollection:
                                                                    t,
                                                            })
                                                        ),
                                                    !o &&
                                                        i.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    Ue.group,
                                                                style: d,
                                                            },
                                                            i.createElement(
                                                                R,
                                                                {
                                                                    "data-name":
                                                                        "magnet-button",
                                                                    buttonIcon:
                                                                        r ===
                                                                        Ee
                                                                            .MagnetMode
                                                                            .StrongMagnet
                                                                            ? he
                                                                                  .drawingToolsIcons
                                                                                  .strongMagnet
                                                                            : he
                                                                                  .drawingToolsIcons
                                                                                  .magnet,
                                                                    buttonTitle:
                                                                        T
                                                                            .lineToolsInfo
                                                                            .magnet
                                                                            .localizedName,
                                                                    isActive: a,
                                                                    onClickButton:
                                                                        Ze,
                                                                    buttonHotKey:
                                                                        T
                                                                            .lineToolsInfo
                                                                            .magnet
                                                                            .hotKey,
                                                                    checkable:
                                                                        !0,
                                                                    isSmallTablet:
                                                                        e,
                                                                    onArrowClick:
                                                                        et,
                                                                },
                                                                i.createElement(
                                                                    ee.PopupMenuItem,
                                                                    {
                                                                        key: "weakMagnet",
                                                                        className:
                                                                            e
                                                                                ? Ue.popupMenuItem
                                                                                : void 0,
                                                                        "data-name":
                                                                            "weakMagnet",
                                                                        icon: he
                                                                            .drawingToolsIcons
                                                                            .magnet,
                                                                        isActive:
                                                                            a &&
                                                                            r !==
                                                                                Ee
                                                                                    .MagnetMode
                                                                                    .StrongMagnet,
                                                                        label: qe.weakMagnet,
                                                                        onClick:
                                                                            Qe,
                                                                    }
                                                                ),
                                                                i.createElement(
                                                                    ee.PopupMenuItem,
                                                                    {
                                                                        key: "strongMagnet",
                                                                        className:
                                                                            e
                                                                                ? Ue.popupMenuItem
                                                                                : void 0,
                                                                        "data-name":
                                                                            "strongMagnet",
                                                                        icon: he
                                                                            .drawingToolsIcons
                                                                            .strongMagnet,
                                                                        isActive:
                                                                            a &&
                                                                            r ===
                                                                                Ee
                                                                                    .MagnetMode
                                                                                    .StrongMagnet,
                                                                        label: qe.strongMagnet,
                                                                        onClick:
                                                                            $e,
                                                                    }
                                                                )
                                                            ),
                                                            this._features
                                                                .tools &&
                                                                i.createElement(
                                                                    X,
                                                                    {
                                                                        property:
                                                                            u
                                                                                .properties()
                                                                                .childs()
                                                                                .stayInDrawingMode,
                                                                        saveDefaultOnChange:
                                                                            !0,
                                                                        toolName:
                                                                            "drawginmode",
                                                                        onClick:
                                                                            this
                                                                                ._handleDrawingClick,
                                                                    }
                                                                ),
                                                            this._features
                                                                .tools &&
                                                                i.createElement(
                                                                    X,
                                                                    {
                                                                        property:
                                                                            u.lockDrawings(),
                                                                        toolName:
                                                                            "lockAllDrawings",
                                                                        onClick:
                                                                            this
                                                                                ._handleLockClick,
                                                                    }
                                                                ),
                                                            this._features
                                                                .tools &&
                                                                i.createElement(
                                                                    ve,
                                                                    {
                                                                        isSmallTablet:
                                                                            e,
                                                                    }
                                                                ),
                                                            !1
                                                        ),
                                                    !o &&
                                                        this._features.tools &&
                                                        i.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    Ue.group,
                                                                style: d,
                                                            },
                                                            i.createElement(
                                                                re,
                                                                {
                                                                    chartWidgetCollection:
                                                                        t,
                                                                    isSmallTablet:
                                                                        e,
                                                                    toolName:
                                                                        "removeAllDrawingTools",
                                                                }
                                                            )
                                                        ),
                                                    i.createElement("div", {
                                                        className: Ue.fill,
                                                        style: d,
                                                    }),
                                                    !o &&
                                                        (this._features.tools ||
                                                            !1) &&
                                                        i.createElement(
                                                            "div",
                                                            {
                                                                className: l(
                                                                    Ue.group,
                                                                    Ue.lastGroup
                                                                ),
                                                                style: d,
                                                            },
                                                            !1,
                                                            this._features
                                                                .tools &&
                                                                this._features
                                                                    .favoriting &&
                                                                i.createElement(
                                                                    fe,
                                                                    {
                                                                        id: Se.FavoriteDrawings,
                                                                    }
                                                                ),
                                                            p() &&
                                                                i.createElement(
                                                                    B,
                                                                    {
                                                                        id: Se.ObjectTree,
                                                                        action: this
                                                                            ._handleObjectsTreeClick,
                                                                        toolName:
                                                                            "showObjectsTree",
                                                                    }
                                                                )
                                                        )
                                                )
                                            ),
                                            m
                                        )
                                )
                            )
                        )
                    );
                }
                _activeChartWidget() {
                    return this.props.chartWidgetCollection.activeChartWidget.value();
                }
                _negotiateResizer() {
                    const e = De.TOOLBAR_WIDTH_COLLAPSED;
                    this.props.resizerBridge.negotiateWidth(
                        this.state.isVisible ? De.TOOLBAR_WIDTH_EXPANDED : e
                    );
                }
                _handleGlobalClose() {
                    Ke.fire();
                }
                _updateHotkeys() {
                    this._hotkeys.promote();
                }
                _initHotkeys() {
                    (this._hotkeys = A.createGroup({
                        desc: "Drawing Toolbar",
                    })),
                        this._hotkeys.add({
                            desc: "Reset",
                            hotkey: 27,
                            handler: () => this._handleEsc(),
                            isDisabled: () => u.toolIsCursor(u.tool.value()),
                        });
                }
            }
            function ot(e, t) {
                0;
            }
            class it {
                constructor(e, t) {
                    (this._component = null),
                        (this._handleRef = (e) => {
                            this._component = e;
                        }),
                        (this._container = e),
                        n.render(
                            i.createElement(tt, { ...t, ref: this._handleRef }),
                            this._container
                        );
                }
                destroy() {
                    n.unmountComponentAtNode(this._container);
                }
                getComponent() {
                    return (0, s.ensureNotNull)(this._component);
                }
            }
        },
        55402: (e, t, o) => {
            "use strict";
            o.d(t, {
                validateRegistry: () => l,
                RegistryProvider: () => r,
                registryContextType: () => c,
            });
            var i = o(59496),
                n = o(19036),
                s = o.n(n);
            const a = i.createContext({});
            function l(e, t) {
                s().checkPropTypes(t, e, "context", "RegistryContext");
            }
            function r(e) {
                const { validation: t, value: o } = e;
                return (
                    l(o, t),
                    i.createElement(a.Provider, { value: o }, e.children)
                );
            }
            function c() {
                return a;
            }
        },
        39640: (e, t, o) => {
            "use strict";
            function i(e, t, o, i, n) {
                function s(n) {
                    if (e > n.timeStamp) return;
                    const s = n.target;
                    void 0 !== o &&
                        null !== t &&
                        null !== s &&
                        s.ownerDocument === i &&
                        (t.contains(s) || o(n));
                }
                return (
                    n.click && i.addEventListener("click", s, !1),
                    n.mouseDown && i.addEventListener("mousedown", s, !1),
                    n.touchEnd && i.addEventListener("touchend", s, !1),
                    n.touchStart && i.addEventListener("touchstart", s, !1),
                    () => {
                        i.removeEventListener("click", s, !1),
                            i.removeEventListener("mousedown", s, !1),
                            i.removeEventListener("touchend", s, !1),
                            i.removeEventListener("touchstart", s, !1);
                    }
                );
            }
            o.d(t, { addOutsideEventListener: () => i });
        },
        37558: (e, t, o) => {
            "use strict";
            o.d(t, { DrawerManager: () => n, DrawerContext: () => s });
            var i = o(59496);
            class n extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._addDrawer = () => {
                            const e = this.state.currentDrawer + 1;
                            return this.setState({ currentDrawer: e }), e;
                        }),
                        (this._removeDrawer = () => {
                            const e = this.state.currentDrawer - 1;
                            return this.setState({ currentDrawer: e }), e;
                        }),
                        (this.state = { currentDrawer: 0 });
                }
                render() {
                    return i.createElement(
                        s.Provider,
                        {
                            value: {
                                addDrawer: this._addDrawer,
                                removeDrawer: this._removeDrawer,
                                currentDrawer: this.state.currentDrawer,
                            },
                        },
                        this.props.children
                    );
                }
            }
            const s = i.createContext(null);
        },
        41590: (e, t, o) => {
            "use strict";
            o.d(t, { Drawer: () => m });
            var i = o(59496),
                n = o(88537),
                s = o(97754),
                a = o(59142),
                l = o(99054),
                r = o(65718),
                c = o(37558),
                d = o(49483),
                h = o(29197),
                u = o(66998);
            function m(e) {
                const {
                        position: t = "Bottom",
                        onClose: o,
                        children: m,
                        className: p,
                        theme: g = u,
                    } = e,
                    b = (0, n.ensureNotNull)(
                        (0, i.useContext)(c.DrawerContext)
                    ),
                    [v, T] = (0, i.useState)(0),
                    _ = (0, i.useRef)(null),
                    C = (0, i.useContext)(h.CloseDelegateContext);
                return (
                    (0, i.useEffect)(() => {
                        const e = (0, n.ensureNotNull)(_.current);
                        return (
                            e.focus({ preventScroll: !0 }),
                            C.subscribe(b, o),
                            0 === b.currentDrawer &&
                                (0, l.setFixedBodyState)(!0),
                            d.CheckMobile.iOS() && (0, a.disableBodyScroll)(e),
                            T(b.addDrawer()),
                            () => {
                                C.unsubscribe(b, o);
                                const t = b.removeDrawer();
                                d.CheckMobile.iOS() &&
                                    (0, a.enableBodyScroll)(e),
                                    0 === t && (0, l.setFixedBodyState)(!1);
                            }
                        );
                    }, []),
                    i.createElement(
                        r.Portal,
                        null,
                        i.createElement(
                            "div",
                            { className: s(u.wrap, u["position" + t]) },
                            v === b.currentDrawer &&
                                i.createElement("div", {
                                    className: u.backdrop,
                                    onClick: o,
                                }),
                            i.createElement(
                                "div",
                                {
                                    className: s(
                                        u.drawer,
                                        g.drawer,
                                        u["position" + t],
                                        p
                                    ),
                                    ref: _,
                                    tabIndex: -1,
                                    "data-name": e["data-name"],
                                },
                                m
                            )
                        )
                    )
                );
            }
        },
        70412: (e, t, o) => {
            "use strict";
            o.d(t, {
                hoverMouseEventFilter: () => s,
                useAccurateHover: () => a,
                useHover: () => n,
            });
            var i = o(59496);
            function n() {
                const [e, t] = (0, i.useState)(!1);
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
            function a(e) {
                const [t, o] = (0, i.useState)(!1);
                return (
                    (0, i.useEffect)(() => {
                        const t = (t) => {
                            if (null === e.current) return;
                            const i = e.current.contains(t.target);
                            o(i);
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
        16396: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u,
            });
            var i = o(59496),
                n = o(97754),
                s = o(59064),
                a = o(51768),
                l = o(90186),
                r = o(23576);
            const c = r;
            function d(e) {
                const { reference: t, ...o } = e,
                    n = { ...o, ref: t };
                return i.createElement(e.href ? "a" : "div", n);
            }
            function h(e) {
                e.stopPropagation();
            }
            function u(e) {
                const {
                        id: t,
                        role: o,
                        "aria-selected": c,
                        className: u,
                        title: m,
                        labelRowClassName: p,
                        labelClassName: g,
                        shortcut: b,
                        forceShowShortcuts: v,
                        icon: T,
                        isActive: _,
                        isDisabled: C,
                        isHovered: w,
                        appearAsDisabled: k,
                        label: f,
                        link: S,
                        showToolboxOnHover: E,
                        target: y,
                        rel: M,
                        toolbox: D,
                        reference: L,
                        onMouseOut: A,
                        onMouseOver: N,
                        suppressToolboxClick: I = !0,
                        theme: B = r,
                    } = e,
                    P = (0, l.filterDataProps)(e),
                    F = (0, i.useRef)(null);
                return i.createElement(
                    d,
                    {
                        ...P,
                        id: t,
                        role: o,
                        "aria-selected": c,
                        className: n(u, B.item, T && B.withIcon, {
                            [B.isActive]: _,
                            [B.isDisabled]: C || k,
                            [B.hovered]: w,
                        }),
                        title: m,
                        href: S,
                        target: y,
                        rel: M,
                        reference: function (e) {
                            (F.current = e), "function" == typeof L && L(e);
                            "object" == typeof L && (L.current = e);
                        },
                        onClick: function (t) {
                            const {
                                dontClosePopup: o,
                                onClick: i,
                                onClickArg: n,
                                trackEventObject: l,
                            } = e;
                            if (C) return;
                            l &&
                                (0, a.trackEvent)(l.category, l.event, l.label);
                            i && i(n, t);
                            o || (0, s.globalCloseMenu)();
                        },
                        onContextMenu: function (t) {
                            const { trackEventObject: o, trackRightClick: i } =
                                e;
                            o &&
                                i &&
                                (0, a.trackEvent)(
                                    o.category,
                                    o.event,
                                    o.label + "_rightClick"
                                );
                        },
                        onMouseUp: function (t) {
                            const {
                                trackEventObject: o,
                                trackMouseWheelClick: i,
                            } = e;
                            if (1 === t.button && S && o) {
                                let e = o.label;
                                i && (e += "_mouseWheelClick"),
                                    (0, a.trackEvent)(o.category, o.event, e);
                            }
                        },
                        onMouseOver: N,
                        onMouseOut: A,
                    },
                    void 0 !== T &&
                        i.createElement("div", {
                            className: B.icon,
                            dangerouslySetInnerHTML: { __html: T },
                        }),
                    i.createElement(
                        "div",
                        { className: n(B.labelRow, p) },
                        i.createElement("div", { className: n(B.label, g) }, f)
                    ),
                    (void 0 !== b || v) &&
                        i.createElement(
                            "div",
                            { className: B.shortcut },
                            (x = b) && x.split("+").join(" + ")
                        ),
                    void 0 !== D &&
                        i.createElement(
                            "div",
                            {
                                onClick: I ? h : void 0,
                                className: n(B.toolbox, { [B.showOnHover]: E }),
                            },
                            D
                        )
                );
                var x;
            }
        },
        81332: (e, t, o) => {
            "use strict";
            o.d(t, { multilineLabelWithIconAndToolboxTheme: () => a });
            var i = o(40173),
                n = o(23576),
                s = o(63095);
            const a = (0, i.mergeThemes)(n, s);
        },
        51613: (e, t, o) => {
            "use strict";
            o.d(t, { PopupMenuSeparator: () => l });
            var i = o(59496),
                n = o(97754),
                s = o.n(n),
                a = o(524);
            function l(e) {
                const { size: t = "normal", className: o } = e;
                return i.createElement("div", {
                    className: s()(
                        a.separator,
                        "small" === t && a.small,
                        "normal" === t && a.normal,
                        "large" === t && a.large,
                        o
                    ),
                });
            }
        },
        50628: (e, t, o) => {
            "use strict";
            o.d(t, { PopupMenu: () => c });
            var i = o(59496),
                n = o(87995),
                s = o(65718),
                a = o(27317),
                l = o(29197),
                r = o(58095);
            function c(e) {
                const {
                        controller: t,
                        children: o,
                        isOpened: c,
                        closeOnClickOutside: d = !0,
                        doNotCloseOn: h,
                        onClickOutside: u,
                        onClose: m,
                        ...p
                    } = e,
                    g = (0, i.useContext)(l.CloseDelegateContext),
                    b = (0, r.useOutsideEvent)({
                        handler: function (e) {
                            u && u(e);
                            if (!d) return;
                            if (h && e.target instanceof Node) {
                                const t = n.findDOMNode(h);
                                if (t instanceof Node && t.contains(e.target))
                                    return;
                            }
                            m();
                        },
                        mouseDown: !0,
                        touchStart: !0,
                    });
                return c
                    ? i.createElement(
                          s.Portal,
                          {
                              top: "0",
                              left: "0",
                              right: "0",
                              bottom: "0",
                              pointerEvents: "none",
                          },
                          i.createElement(
                              "span",
                              { ref: b, style: { pointerEvents: "auto" } },
                              i.createElement(
                                  a.Menu,
                                  {
                                      ...p,
                                      onClose: m,
                                      onScroll: function (t) {
                                          const { onScroll: o } = e;
                                          o && o(t);
                                      },
                                      customCloseDelegate: g,
                                      ref: t,
                                  },
                                  o
                              )
                          )
                      )
                    : null;
            }
        },
        33086: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
        },
        31330: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
        },
    },
]);
