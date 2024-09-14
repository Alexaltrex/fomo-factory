(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [1075],
    {
        16059: (e) => {
            e.exports = {
                menuWrap: "menuWrap-8MKeZifP",
                isMeasuring: "isMeasuring-8MKeZifP",
                scrollWrap: "scrollWrap-8MKeZifP",
                momentumBased: "momentumBased-8MKeZifP",
                menuBox: "menuBox-8MKeZifP",
                isHidden: "isHidden-8MKeZifP",
            };
        },
        9745: (e, t, n) => {
            "use strict";
            n.d(t, { Icon: () => r });
            var s = n(59496);
            const r = s.forwardRef((e, t) => {
                const { icon: n = "", ...r } = e;
                return s.createElement("span", {
                    ...r,
                    ref: t,
                    dangerouslySetInnerHTML: { __html: n },
                });
            });
        },
        99054: (e, t, n) => {
            "use strict";
            n.d(t, { setFixedBodyState: () => c });
            const s = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const n = document.createElement("div"),
                            s = n.style;
                        (s.visibility = "hidden"),
                            (s.width = "100px"),
                            (s.msOverflowStyle = "scrollbar"),
                            document.body.appendChild(n);
                        const r = n.offsetWidth;
                        n.style.overflow = "scroll";
                        const i = document.createElement("div");
                        (i.style.width = "100%"), n.appendChild(i);
                        const o = i.offsetWidth;
                        null === (t = n.parentNode) ||
                            void 0 === t ||
                            t.removeChild(n),
                            (e = r - o);
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
            function o(e, t) {
                return parseInt(i(e, t));
            }
            let l = 0,
                a = !1;
            function c(e) {
                const { body: t } = document,
                    n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++l) {
                    const e = i(t, "overflow"),
                        l = o(t, "padding-right");
                    "hidden" !== e.toLowerCase() &&
                        t.scrollHeight > t.offsetHeight &&
                        (r(n, "right", s() + "px"),
                        (t.style.paddingRight = l + s() + "px"),
                        (a = !0)),
                        t.classList.add("i-no-scroll");
                } else if (
                    !e &&
                    l > 0 &&
                    0 == --l &&
                    (t.classList.remove("i-no-scroll"), a)
                ) {
                    r(n, "right", "0px");
                    let e = 0;
                    0,
                        t.scrollHeight <= t.clientHeight && (e -= s()),
                        (t.style.paddingRight = (e < 0 ? 0 : e) + "px"),
                        (a = !1);
                }
            }
        },
        58095: (e, t, n) => {
            "use strict";
            n.d(t, { useOutsideEvent: () => i });
            var s = n(59496),
                r = n(39640);
            function i(e) {
                const {
                        click: t,
                        mouseDown: n,
                        touchEnd: i,
                        touchStart: o,
                        handler: l,
                        reference: a,
                        ownerDocument: c = document,
                    } = e,
                    u = (0, s.useRef)(null),
                    d = (0, s.useRef)(new CustomEvent("timestamp").timeStamp);
                return (
                    (0, s.useLayoutEffect)(() => {
                        const e = {
                                click: t,
                                mouseDown: n,
                                touchEnd: i,
                                touchStart: o,
                            },
                            s = a ? a.current : u.current;
                        return (0, r.addOutsideEventListener)(
                            d.current,
                            s,
                            l,
                            c,
                            e
                        );
                    }, [t, n, i, o, l]),
                    a || u
                );
            }
        },
        90692: (e, t, n) => {
            "use strict";
            n.d(t, { MatchMedia: () => r });
            var s = n(59496);
            class r extends s.PureComponent {
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
        64706: (e, t, n) => {
            "use strict";
            n.d(t, { MenuContext: () => s });
            const s = n(59496).createContext(null);
        },
        27317: (e, t, n) => {
            "use strict";
            n.d(t, { DEFAULT_MENU_THEME: () => _, Menu: () => g });
            var s = n(59496),
                r = n(97754),
                i = n.n(r),
                o = n(88537),
                l = n(64514),
                a = n(54475),
                c = n(50655),
                u = n(59064),
                d = n(88216),
                h = n(25760),
                p = n(14758),
                m = n(64706),
                f = n(16059);
            const _ = f;
            class g extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._containerRef = null),
                        (this._scrollWrapRef = null),
                        (this._raf = null),
                        (this._scrollRaf = null),
                        (this._scrollTimeout = void 0),
                        (this._manager = new d.OverlapManager()),
                        (this._hotkeys = null),
                        (this._scroll = 0),
                        (this._handleContainerRef = (e) => {
                            (this._containerRef = e),
                                this.props.reference &&
                                    ("function" ==
                                        typeof this.props.reference &&
                                        this.props.reference(e),
                                    "object" == typeof this.props.reference &&
                                        (this.props.reference.current = e));
                        }),
                        (this._handleScrollWrapRef = (e) => {
                            (this._scrollWrapRef = e),
                                "function" ==
                                    typeof this.props.scrollWrapReference &&
                                    this.props.scrollWrapReference(e),
                                "object" ==
                                    typeof this.props.scrollWrapReference &&
                                    (this.props.scrollWrapReference.current =
                                        e);
                        }),
                        (this._handleMeasure = ({
                            callback: e,
                            forceRecalcPosition: t,
                        } = {}) => {
                            var n, s, r, i;
                            if (this.state.isMeasureValid && !t) return;
                            const { position: a } = this.props,
                                c = (0, o.ensureNotNull)(this._containerRef);
                            let u = c.getBoundingClientRect();
                            const d = document.documentElement.clientHeight,
                                h = document.documentElement.clientWidth,
                                p =
                                    null !==
                                        (n =
                                            this.props
                                                .closeOnScrollOutsideOffset) &&
                                    void 0 !== n
                                        ? n
                                        : 0;
                            let m = d - 0 - p;
                            const f = u.height > m;
                            if (f) {
                                ((0, o.ensureNotNull)(
                                    this._scrollWrapRef
                                ).style.overflowY = "scroll"),
                                    (u = c.getBoundingClientRect());
                            }
                            const { width: _, height: g } = u,
                                v = "function" == typeof a ? a(_, g, d) : a,
                                y =
                                    h -
                                    (null !== (s = v.overrideWidth) &&
                                    void 0 !== s
                                        ? s
                                        : _) -
                                    0,
                                x = (0, l.clamp)(v.x, 0, Math.max(0, y)),
                                C = 0 + p,
                                w =
                                    d -
                                    (null !== (r = v.overrideHeight) &&
                                    void 0 !== r
                                        ? r
                                        : g) -
                                    0;
                            let M = (0, l.clamp)(v.y, C, Math.max(C, w));
                            if (
                                (v.forbidCorrectYCoord &&
                                    M < v.y &&
                                    ((m -= v.y - M), (M = v.y)),
                                t &&
                                    void 0 !==
                                        this.props.closeOnScrollOutsideOffset &&
                                    v.y <=
                                        this.props.closeOnScrollOutsideOffset)
                            )
                                return void this._handleGlobalClose(!0);
                            const b =
                                null !== (i = v.overrideHeight) && void 0 !== i
                                    ? i
                                    : f
                                    ? m
                                    : void 0;
                            this.setState(
                                {
                                    appearingMenuHeight: t
                                        ? this.state.appearingMenuHeight
                                        : b,
                                    appearingMenuWidth: t
                                        ? this.state.appearingMenuWidth
                                        : v.overrideWidth,
                                    appearingPosition: { x, y: M },
                                    isMeasureValid: !0,
                                },
                                () => {
                                    this._restoreScrollPosition(), e && e();
                                }
                            );
                        }),
                        (this._restoreScrollPosition = () => {
                            const e = document.activeElement,
                                t = (0, o.ensureNotNull)(this._containerRef);
                            if (null !== e && t.contains(e))
                                try {
                                    e.scrollIntoView();
                                } catch (e) {}
                            else
                                (0, o.ensureNotNull)(
                                    this._scrollWrapRef
                                ).scrollTop = this._scroll;
                        }),
                        (this._resizeForced = () => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0,
                            });
                        }),
                        (this._resize = () => {
                            null === this._raf &&
                                (this._raf = requestAnimationFrame(() => {
                                    this.setState({
                                        appearingMenuHeight: void 0,
                                        appearingMenuWidth: void 0,
                                        appearingPosition: void 0,
                                        isMeasureValid: void 0,
                                    }),
                                        (this._raf = null);
                                }));
                        }),
                        (this._handleGlobalClose = (e) => {
                            this.props.onClose(e);
                        }),
                        (this._handleSlot = (e) => {
                            this._manager.setContainer(e);
                        }),
                        (this._handleScroll = () => {
                            this._scroll = (0, o.ensureNotNull)(
                                this._scrollWrapRef
                            ).scrollTop;
                        }),
                        (this._handleScrollOutsideEnd = () => {
                            clearTimeout(this._scrollTimeout),
                                (this._scrollTimeout = setTimeout(() => {
                                    this._handleMeasure({
                                        forceRecalcPosition: !0,
                                    });
                                }, 80));
                        }),
                        (this._handleScrollOutside = (e) => {
                            e.target !== this._scrollWrapRef &&
                                (this._handleScrollOutsideEnd(),
                                null === this._scrollRaf &&
                                    (this._scrollRaf = requestAnimationFrame(
                                        () => {
                                            this._handleMeasure({
                                                forceRecalcPosition: !0,
                                            }),
                                                (this._scrollRaf = null);
                                        }
                                    )));
                        }),
                        (this.state = {});
                }
                componentDidMount() {
                    this._handleMeasure({ callback: this.props.onOpen });
                    const { customCloseDelegate: e = u.globalCloseDelegate } =
                        this.props;
                    e.subscribe(this, this._handleGlobalClose),
                        window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys ||
                        t ||
                        ((this._hotkeys = h.createGroup({
                            desc: "Popup menu",
                        })),
                        this._hotkeys.add({
                            desc: "Close",
                            hotkey: 27,
                            handler: () => this._handleGlobalClose(),
                        })),
                        this.props.repositionOnScroll &&
                            window.addEventListener(
                                "scroll",
                                this._handleScrollOutside,
                                { capture: !0 }
                            );
                }
                componentDidUpdate() {
                    this._handleMeasure();
                }
                componentWillUnmount() {
                    const { customCloseDelegate: e = u.globalCloseDelegate } =
                        this.props;
                    e.unsubscribe(this, this._handleGlobalClose),
                        window.removeEventListener("resize", this._resize),
                        window.removeEventListener(
                            "scroll",
                            this._handleScrollOutside,
                            { capture: !0 }
                        ),
                        this._hotkeys &&
                            (this._hotkeys.destroy(), (this._hotkeys = null)),
                        null !== this._raf &&
                            (cancelAnimationFrame(this._raf),
                            (this._raf = null)),
                        null !== this._scrollRaf &&
                            (cancelAnimationFrame(this._scrollRaf),
                            (this._scrollRaf = null)),
                        this._scrollTimeout &&
                            clearTimeout(this._scrollTimeout);
                }
                render() {
                    const {
                            id: e,
                            role: t,
                            "aria-labelledby": n,
                            "aria-activedescendant": r,
                            children: o,
                            minWidth: l,
                            theme: u = f,
                            className: d,
                            maxHeight: h,
                            onMouseOver: _,
                            onMouseOut: g,
                            onKeyDown: y,
                            onFocus: x,
                            onBlur: C,
                        } = this.props,
                        {
                            appearingMenuHeight: w,
                            appearingMenuWidth: M,
                            appearingPosition: b,
                            isMeasureValid: S,
                        } = this.state;
                    return s.createElement(
                        m.MenuContext.Provider,
                        { value: this },
                        s.createElement(
                            p.SubmenuHandler,
                            null,
                            s.createElement(
                                c.SlotContext.Provider,
                                { value: this._manager },
                                s.createElement(
                                    "div",
                                    {
                                        id: e,
                                        role: t,
                                        "aria-labelledby": n,
                                        "aria-activedescendant": r,
                                        className: i()(
                                            d,
                                            u.menuWrap,
                                            !S && u.isMeasuring
                                        ),
                                        style: {
                                            height: w,
                                            left: b && b.x,
                                            minWidth: l,
                                            position: "fixed",
                                            top: b && b.y,
                                            width: M,
                                        },
                                        "data-name": this.props["data-name"],
                                        ref: this._handleContainerRef,
                                        onScrollCapture: this.props.onScroll,
                                        onContextMenu:
                                            a.preventDefaultForContextMenu,
                                        tabIndex: this.props.tabIndex,
                                        onMouseOver: _,
                                        onMouseOut: g,
                                        onKeyDown: y,
                                        onFocus: x,
                                        onBlur: C,
                                    },
                                    s.createElement(
                                        "div",
                                        {
                                            className: i()(
                                                u.scrollWrap,
                                                !this.props
                                                    .noMomentumBasedScroll &&
                                                    u.momentumBased
                                            ),
                                            style: {
                                                overflowY:
                                                    void 0 !== w
                                                        ? "scroll"
                                                        : "auto",
                                                maxHeight: h,
                                            },
                                            onScrollCapture: this._handleScroll,
                                            ref: this._handleScrollWrapRef,
                                        },
                                        s.createElement(
                                            v,
                                            { className: u.menuBox },
                                            o
                                        )
                                    )
                                )
                            ),
                            s.createElement(c.Slot, {
                                reference: this._handleSlot,
                            })
                        )
                    );
                }
                update(e) {
                    e ? this._resizeForced() : this._resize();
                }
            }
            function v(e) {
                const t = (0, o.ensureNotNull)(
                        (0, s.useContext)(p.SubmenuContext)
                    ),
                    n = s.useRef(null);
                return s.createElement(
                    "div",
                    {
                        ref: n,
                        className: e.className,
                        onMouseOver: function (e) {
                            if (
                                !(
                                    null !== t.current &&
                                    e.target instanceof Node &&
                                    ((s = e.target),
                                    null === (r = n.current) || void 0 === r
                                        ? void 0
                                        : r.contains(s))
                                )
                            )
                                return;
                            var s, r;
                            t.isSubmenuNode(e.target) || t.setCurrent(null);
                        },
                        "data-name": "menu-inner",
                    },
                    e.children
                );
            }
            g.contextType = p.SubmenuContext;
        },
        88216: (e, t, n) => {
            "use strict";
            n.d(t, { OverlapManager: () => i, getRootOverlapManager: () => l });
            var s = n(88537);
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
                    const s = this._document.createElement("div");
                    if (
                        ((s.style.position = t.position),
                        (s.style.zIndex = this._index.toString()),
                        (s.dataset.id = e),
                        void 0 !== t.index)
                    ) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(s);
                        else if (t.index <= 0)
                            this._container.insertBefore(
                                s,
                                this._container.firstChild
                            );
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(s, e);
                        }
                    } else
                        "reverse" === t.direction
                            ? this._container.insertBefore(
                                  s,
                                  this._container.firstChild
                              )
                            : this._container.appendChild(s);
                    return this._windows.set(e, s), ++this._index, s;
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
            const o = new WeakMap();
            function l(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, s.ensureDefined)(o.get(t));
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
                        o.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                    );
                }
            }
        },
        29197: (e, t, n) => {
            "use strict";
            n.d(t, { CloseDelegateContext: () => i });
            var s = n(59496),
                r = n(59064);
            const i = s.createContext(r.globalCloseDelegate);
        },
        65718: (e, t, n) => {
            "use strict";
            n.d(t, { Portal: () => a, PortalContext: () => c });
            var s = n(59496),
                r = n(87995),
                i = n(9423),
                o = n(88216),
                l = n(50655);
            class a extends s.PureComponent {
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
                            s.createElement(
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
                        ? (0, o.getRootOverlapManager)()
                        : this.context;
                }
            }
            a.contextType = l.SlotContext;
            const c = s.createContext(null);
        },
        50655: (e, t, n) => {
            "use strict";
            n.d(t, { Slot: () => r, SlotContext: () => i });
            var s = n(59496);
            class r extends s.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return s.createElement("div", {
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
            const i = s.createContext(null);
        },
        14758: (e, t, n) => {
            "use strict";
            n.d(t, { SubmenuContext: () => r, SubmenuHandler: () => i });
            var s = n(59496);
            const r = s.createContext(null);
            function i(e) {
                const [t, n] = (0, s.useState)(null),
                    i = (0, s.useRef)(null),
                    o = (0, s.useRef)(new Map());
                return (
                    (0, s.useEffect)(
                        () => () => {
                            null !== i.current && clearTimeout(i.current);
                        },
                        []
                    ),
                    s.createElement(
                        r.Provider,
                        {
                            value: {
                                current: t,
                                setCurrent: function (e) {
                                    null !== i.current &&
                                        (clearTimeout(i.current),
                                        (i.current = null));
                                    null === t
                                        ? n(e)
                                        : (i.current = setTimeout(() => {
                                              (i.current = null), n(e);
                                          }, 100));
                                },
                                registerSubmenu: function (e, t) {
                                    return (
                                        o.current.set(e, t),
                                        () => {
                                            o.current.delete(e);
                                        }
                                    );
                                },
                                isSubmenuNode: function (e) {
                                    return Array.from(o.current.values()).some(
                                        (t) => t(e)
                                    );
                                },
                            },
                        },
                        e.children
                    )
                );
            }
        },
    },
]);
