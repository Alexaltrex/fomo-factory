(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9505],
    {
        55576: (e) => {
            e.exports = {
                button: "button-9pA37sIi",
                hover: "hover-9pA37sIi",
                isInteractive: "isInteractive-9pA37sIi",
                isGrouped: "isGrouped-9pA37sIi",
                newStyles: "newStyles-9pA37sIi",
                isActive: "isActive-9pA37sIi",
                isOpened: "isOpened-9pA37sIi",
                isDisabled: "isDisabled-9pA37sIi",
                text: "text-9pA37sIi",
                icon: "icon-9pA37sIi",
            };
        },
        71123: (e) => {
            e.exports = {
                button: "button-khcLBZEz",
                hover: "hover-khcLBZEz",
                arrow: "arrow-khcLBZEz",
                arrowWrap: "arrowWrap-khcLBZEz",
                newStyles: "newStyles-khcLBZEz",
                isOpened: "isOpened-khcLBZEz",
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
        40367: (e) => {
            e.exports = { icon: "icon-AL2odtws", dropped: "dropped-AL2odtws" };
        },
        90186: (e, t, o) => {
            "use strict";
            function r(e) {
                return i(e, s);
            }
            function n(e) {
                return i(e, a);
            }
            function i(e, t) {
                const o = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of o) r[e] = t;
                return r;
            }
            function s(e) {
                const [t, o] = e;
                return 0 === t.indexOf("data-") && "string" == typeof o;
            }
            function a(e) {
                return 0 === e[0].indexOf("aria-");
            }
            o.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => n,
                filterProps: () => i,
                isDataAttribute: () => s,
                isAriaAttribute: () => a,
            });
        },
        40233: (e, t, o) => {
            "use strict";
            o.d(t, {
                VerticalAttachEdge: () => r,
                HorizontalAttachEdge: () => n,
                VerticalDropDirection: () => i,
                HorizontalDropDirection: () => s,
                getPopupPositioner: () => l,
            });
            var r,
                n,
                i,
                s,
                a = o(88537);
            !(function (e) {
                (e[(e.Top = 0)] = "Top"), (e[(e.Bottom = 1)] = "Bottom");
            })(r || (r = {})),
                (function (e) {
                    (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
                })(n || (n = {})),
                (function (e) {
                    (e[(e.FromTopToBottom = 0)] = "FromTopToBottom"),
                        (e[(e.FromBottomToTop = 1)] = "FromBottomToTop");
                })(i || (i = {})),
                (function (e) {
                    (e[(e.FromLeftToRight = 0)] = "FromLeftToRight"),
                        (e[(e.FromRightToLeft = 1)] = "FromRightToLeft");
                })(s || (s = {}));
            const c = {
                verticalAttachEdge: r.Bottom,
                horizontalAttachEdge: n.Left,
                verticalDropDirection: i.FromTopToBottom,
                horizontalDropDirection: s.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1,
            };
            function l(e, t) {
                return (o, l) => {
                    const d = (0, a.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: p = c.verticalAttachEdge,
                            verticalDropDirection: u = c.verticalDropDirection,
                            horizontalAttachEdge: h = c.horizontalAttachEdge,
                            horizontalDropDirection:
                                m = c.horizontalDropDirection,
                            horizontalMargin: v = c.horizontalMargin,
                            verticalMargin: f = c.verticalMargin,
                            matchButtonAndListboxWidths:
                                w = c.matchButtonAndListboxWidths,
                        } = t,
                        g = p === r.Top ? -1 * f : f,
                        D = h === n.Right ? d.right : d.left,
                        E = p === r.Top ? d.top : d.bottom,
                        b = {
                            x: D - (m === s.FromRightToLeft ? o : 0) + v,
                            y: E - (u === i.FromBottomToTop ? l : 0) + g,
                        };
                    return w && (b.overrideWidth = d.width), b;
                };
            }
        },
        4825: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => c,
                ToolWidgetButton: () => l,
            });
            var r = o(59496),
                n = o(97754),
                i = o(9745),
                s = o(37669),
                a = o(55576);
            const c = a,
                l = r.forwardRef((e, t) => {
                    const {
                            icon: o,
                            isActive: c,
                            isOpened: l,
                            isDisabled: d,
                            isGrouped: p,
                            isHovered: u,
                            onClick: h,
                            text: m,
                            textBeforeIcon: v,
                            title: f,
                            theme: w = a,
                            className: g,
                            forceInteractive: D,
                            "data-name": E,
                            ...b
                        } = e,
                        C = n(g, w.button, f && "apply-common-tooltip", {
                            [w.isActive]: c,
                            [w.isOpened]: l,
                            [w.isInteractive]: (D || Boolean(h)) && !d,
                            [w.isDisabled]: d,
                            [w.isGrouped]: p,
                            [w.hover]: u,
                            [w.newStyles]: s.hasNewHeaderToolbarStyles,
                        }),
                        O =
                            o &&
                            ("string" == typeof o
                                ? r.createElement(i.Icon, {
                                      className: w.icon,
                                      icon: o,
                                  })
                                : r.cloneElement(o, {
                                      className: n(w.icon, o.props.className),
                                  }));
                    return r.createElement(
                        "div",
                        {
                            ...b,
                            ref: t,
                            "data-role": "button",
                            className: C,
                            onClick: d ? void 0 : h,
                            title: f,
                            "data-name": E,
                        },
                        v &&
                            m &&
                            r.createElement(
                                "div",
                                { className: n("js-button-text", w.text) },
                                m
                            ),
                        O,
                        !v &&
                            m &&
                            r.createElement(
                                "div",
                                { className: n("js-button-text", w.text) },
                                m
                            )
                    );
                });
        },
        35390: (e, t, o) => {
            "use strict";
            o.d(t, { ToolWidgetMenu: () => m });
            var r = o(59496),
                n = o(97754),
                i = o(50628),
                s = o(10381),
                a = o(90186),
                c = o(37558),
                l = o(41590),
                d = o(40233),
                p = o(90692),
                u = o(37669),
                h = o(71123);
            class m extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._wrapperRef = null),
                        (this._controller = r.createRef()),
                        (this._handleWrapperRef = (e) => {
                            (this._wrapperRef = e),
                                this.props.reference && this.props.reference(e);
                        }),
                        (this._handleClick = (e) => {
                            e.target instanceof Node &&
                                e.currentTarget.contains(e.target) &&
                                (this._handleToggleDropdown(),
                                this.props.onClick &&
                                    this.props.onClick(
                                        e,
                                        !this.state.isOpened
                                    ));
                        }),
                        (this._handleToggleDropdown = (e) => {
                            const { onClose: t, onOpen: o } = this.props,
                                { isOpened: r } = this.state,
                                n = "boolean" == typeof e ? e : !r;
                            this.setState({ isOpened: n }),
                                n && o && o(),
                                !n && t && t();
                        }),
                        (this._handleClose = () => {
                            this.close();
                        }),
                        (this.state = { isOpened: !1 });
                }
                render() {
                    const {
                            id: e,
                            arrow: t,
                            content: o,
                            isDisabled: i,
                            isDrawer: c,
                            isShowTooltip: l,
                            title: d,
                            className: h,
                            hotKey: m,
                            theme: v,
                            drawerBreakpoint: f,
                        } = this.props,
                        { isOpened: w } = this.state,
                        g = n(h, v.button, {
                            "apply-common-tooltip": l || !i,
                            [v.isDisabled]: i,
                            [v.isOpened]: w,
                            [v.newStyles]: u.hasNewHeaderToolbarStyles,
                        });
                    return r.createElement(
                        "div",
                        {
                            id: e,
                            className: g,
                            onClick: i ? void 0 : this._handleClick,
                            title: d,
                            "data-tooltip-hotkey": m,
                            ref: this._handleWrapperRef,
                            "data-role": "button",
                            ...(0, a.filterDataProps)(this.props),
                        },
                        o,
                        t &&
                            r.createElement(
                                "div",
                                { className: v.arrow },
                                r.createElement(
                                    "div",
                                    { className: v.arrowWrap },
                                    r.createElement(s.ToolWidgetCaret, {
                                        dropped: w,
                                    })
                                )
                            ),
                        this.state.isOpened &&
                            (f
                                ? r.createElement(
                                      p.MatchMedia,
                                      { rule: f },
                                      (e) => this._renderContent(e)
                                  )
                                : this._renderContent(c))
                    );
                }
                close() {
                    this._handleToggleDropdown(!1);
                }
                update() {
                    null !== this._controller.current &&
                        this._controller.current.update();
                }
                _renderContent(e) {
                    const {
                            menuDataName: t,
                            minWidth: o,
                            menuClassName: n,
                            maxHeight: s,
                            drawerPosition: a = "Bottom",
                            children: p,
                        } = this.props,
                        { isOpened: u } = this.state,
                        h = {
                            horizontalMargin: this.props.horizontalMargin || 0,
                            verticalMargin: this.props.verticalMargin || 2,
                            verticalAttachEdge: this.props.verticalAttachEdge,
                            horizontalAttachEdge:
                                this.props.horizontalAttachEdge,
                            verticalDropDirection:
                                this.props.verticalDropDirection,
                            horizontalDropDirection:
                                this.props.horizontalDropDirection,
                            matchButtonAndListboxWidths:
                                this.props.matchButtonAndListboxWidths,
                        },
                        m = Boolean(u && e && a),
                        v = (function (e) {
                            return "function" == typeof e;
                        })(p)
                            ? p({ isDrawer: m })
                            : p;
                    return m
                        ? r.createElement(
                              c.DrawerManager,
                              null,
                              r.createElement(
                                  l.Drawer,
                                  {
                                      onClose: this._handleClose,
                                      position: a,
                                      "data-name": t,
                                  },
                                  v
                              )
                          )
                        : r.createElement(
                              i.PopupMenu,
                              {
                                  controller: this._controller,
                                  closeOnClickOutside:
                                      this.props.closeOnClickOutside,
                                  doNotCloseOn: this,
                                  isOpened: u,
                                  minWidth: o,
                                  onClose: this._handleClose,
                                  position: (0, d.getPopupPositioner)(
                                      this._wrapperRef,
                                      h
                                  ),
                                  className: n,
                                  maxHeight: s,
                                  "data-name": t,
                              },
                              v
                          );
                }
            }
            m.defaultProps = { arrow: !0, closeOnClickOutside: !0, theme: h };
        },
        37669: (e, t, o) => {
            "use strict";
            o.d(t, { hasNewHeaderToolbarStyles: () => r });
            o(67337);
            const r = !1;
        },
        39640: (e, t, o) => {
            "use strict";
            function r(e, t, o, r, n) {
                function i(n) {
                    if (e > n.timeStamp) return;
                    const i = n.target;
                    void 0 !== o &&
                        null !== t &&
                        null !== i &&
                        i.ownerDocument === r &&
                        (t.contains(i) || o(n));
                }
                return (
                    n.click && r.addEventListener("click", i, !1),
                    n.mouseDown && r.addEventListener("mousedown", i, !1),
                    n.touchEnd && r.addEventListener("touchend", i, !1),
                    n.touchStart && r.addEventListener("touchstart", i, !1),
                    () => {
                        r.removeEventListener("click", i, !1),
                            r.removeEventListener("mousedown", i, !1),
                            r.removeEventListener("touchend", i, !1),
                            r.removeEventListener("touchstart", i, !1);
                    }
                );
            }
            o.d(t, { addOutsideEventListener: () => r });
        },
        37558: (e, t, o) => {
            "use strict";
            o.d(t, { DrawerManager: () => n, DrawerContext: () => i });
            var r = o(59496);
            class n extends r.PureComponent {
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
                    return r.createElement(
                        i.Provider,
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
            const i = r.createContext(null);
        },
        41590: (e, t, o) => {
            "use strict";
            o.d(t, { Drawer: () => h });
            var r = o(59496),
                n = o(88537),
                i = o(97754),
                s = o(59142),
                a = o(99054),
                c = o(65718),
                l = o(37558),
                d = o(49483),
                p = o(29197),
                u = o(66998);
            function h(e) {
                const {
                        position: t = "Bottom",
                        onClose: o,
                        children: h,
                        className: m,
                        theme: v = u,
                    } = e,
                    f = (0, n.ensureNotNull)(
                        (0, r.useContext)(l.DrawerContext)
                    ),
                    [w, g] = (0, r.useState)(0),
                    D = (0, r.useRef)(null),
                    E = (0, r.useContext)(p.CloseDelegateContext);
                return (
                    (0, r.useEffect)(() => {
                        const e = (0, n.ensureNotNull)(D.current);
                        return (
                            e.focus({ preventScroll: !0 }),
                            E.subscribe(f, o),
                            0 === f.currentDrawer &&
                                (0, a.setFixedBodyState)(!0),
                            d.CheckMobile.iOS() && (0, s.disableBodyScroll)(e),
                            g(f.addDrawer()),
                            () => {
                                E.unsubscribe(f, o);
                                const t = f.removeDrawer();
                                d.CheckMobile.iOS() &&
                                    (0, s.enableBodyScroll)(e),
                                    0 === t && (0, a.setFixedBodyState)(!1);
                            }
                        );
                    }, []),
                    r.createElement(
                        c.Portal,
                        null,
                        r.createElement(
                            "div",
                            { className: i(u.wrap, u["position" + t]) },
                            w === f.currentDrawer &&
                                r.createElement("div", {
                                    className: u.backdrop,
                                    onClick: o,
                                }),
                            r.createElement(
                                "div",
                                {
                                    className: i(
                                        u.drawer,
                                        v.drawer,
                                        u["position" + t],
                                        m
                                    ),
                                    ref: D,
                                    tabIndex: -1,
                                    "data-name": e["data-name"],
                                },
                                h
                            )
                        )
                    )
                );
            }
        },
        16396: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => l,
                PopupMenuItem: () => u,
            });
            var r = o(59496),
                n = o(97754),
                i = o(59064),
                s = o(51768),
                a = o(90186),
                c = o(23576);
            const l = c;
            function d(e) {
                const { reference: t, ...o } = e,
                    n = {
                        ...o,
                        ref: t,
                    };
                return r.createElement(e.href ? "a" : "div", n);
            }
            function p(e) {
                e.stopPropagation();
            }
            function u(e) {
                const {
                        id: t,
                        role: o,
                        "aria-selected": l,
                        className: u,
                        title: h,
                        labelRowClassName: m,
                        labelClassName: v,
                        shortcut: f,
                        forceShowShortcuts: w,
                        icon: g,
                        isActive: D,
                        isDisabled: E,
                        isHovered: b,
                        appearAsDisabled: C,
                        label: O,
                        link: T,
                        showToolboxOnHover: k,
                        target: x,
                        rel: N,
                        toolbox: A,
                        reference: y,
                        onMouseOut: S,
                        onMouseOver: L,
                        suppressToolboxClick: B = !0,
                        theme: M = c,
                    } = e,
                    _ = (0, a.filterDataProps)(e),
                    F = (0, r.useRef)(null);
                return r.createElement(
                    d,
                    {
                        ..._,
                        id: t,
                        role: o,
                        "aria-selected": l,
                        className: n(u, M.item, g && M.withIcon, {
                            [M.isActive]: D,
                            [M.isDisabled]: E || C,
                            [M.hovered]: b,
                        }),
                        title: h,
                        href: T,
                        target: x,
                        rel: N,
                        reference: function (e) {
                            (F.current = e), "function" == typeof y && y(e);
                            "object" == typeof y && (y.current = e);
                        },
                        onClick: function (t) {
                            const {
                                dontClosePopup: o,
                                onClick: r,
                                onClickArg: n,
                                trackEventObject: a,
                            } = e;
                            if (E) return;
                            a &&
                                (0, s.trackEvent)(a.category, a.event, a.label);
                            r && r(n, t);
                            o || (0, i.globalCloseMenu)();
                        },
                        onContextMenu: function (t) {
                            const { trackEventObject: o, trackRightClick: r } =
                                e;
                            o &&
                                r &&
                                (0, s.trackEvent)(
                                    o.category,
                                    o.event,
                                    o.label + "_rightClick"
                                );
                        },
                        onMouseUp: function (t) {
                            const {
                                trackEventObject: o,
                                trackMouseWheelClick: r,
                            } = e;
                            if (1 === t.button && T && o) {
                                let e = o.label;
                                r && (e += "_mouseWheelClick"),
                                    (0, s.trackEvent)(o.category, o.event, e);
                            }
                        },
                        onMouseOver: L,
                        onMouseOut: S,
                    },
                    void 0 !== g &&
                        r.createElement("div", {
                            className: M.icon,
                            dangerouslySetInnerHTML: { __html: g },
                        }),
                    r.createElement(
                        "div",
                        { className: n(M.labelRow, m) },
                        r.createElement("div", { className: n(M.label, v) }, O)
                    ),
                    (void 0 !== f || w) &&
                        r.createElement(
                            "div",
                            { className: M.shortcut },
                            (H = f) && H.split("+").join(" + ")
                        ),
                    void 0 !== A &&
                        r.createElement(
                            "div",
                            {
                                onClick: B ? p : void 0,
                                className: n(M.toolbox, { [M.showOnHover]: k }),
                            },
                            A
                        )
                );
                var H;
            }
        },
        50628: (e, t, o) => {
            "use strict";
            o.d(t, { PopupMenu: () => l });
            var r = o(59496),
                n = o(87995),
                i = o(65718),
                s = o(27317),
                a = o(29197),
                c = o(58095);
            function l(e) {
                const {
                        controller: t,
                        children: o,
                        isOpened: l,
                        closeOnClickOutside: d = !0,
                        doNotCloseOn: p,
                        onClickOutside: u,
                        onClose: h,
                        ...m
                    } = e,
                    v = (0, r.useContext)(a.CloseDelegateContext),
                    f = (0, c.useOutsideEvent)({
                        handler: function (e) {
                            u && u(e);
                            if (!d) return;
                            if (p && e.target instanceof Node) {
                                const t = n.findDOMNode(p);
                                if (t instanceof Node && t.contains(e.target))
                                    return;
                            }
                            h();
                        },
                        mouseDown: !0,
                        touchStart: !0,
                    });
                return l
                    ? r.createElement(
                          i.Portal,
                          {
                              top: "0",
                              left: "0",
                              right: "0",
                              bottom: "0",
                              pointerEvents: "none",
                          },
                          r.createElement(
                              "span",
                              { ref: f, style: { pointerEvents: "auto" } },
                              r.createElement(
                                  s.Menu,
                                  {
                                      ...m,
                                      onClose: h,
                                      onScroll: function (t) {
                                          const { onScroll: o } = e;
                                          o && o(t);
                                      },
                                      customCloseDelegate: v,
                                      ref: t,
                                  },
                                  o
                              )
                          )
                      )
                    : null;
            }
        },
        10381: (e, t, o) => {
            "use strict";
            o.d(t, { ToolWidgetCaret: () => c });
            var r = o(59496),
                n = o(97754),
                i = o(9745),
                s = o(40367),
                a = o(81268);
            function c(e) {
                const { dropped: t, className: o } = e;
                return r.createElement(i.Icon, {
                    className: n(o, s.icon, { [s.dropped]: t }),
                    icon: a,
                });
            }
        },
        81268: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
        },
    },
]);