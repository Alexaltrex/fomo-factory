(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [2704],
    {
        50789: (e) => {
            e.exports = {
                summary: "summary-hk3Mmxts",
                hovered: "hovered-hk3Mmxts",
                caret: "caret-hk3Mmxts",
            };
        },
        96746: (e) => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
            };
        },
        67179: (e) => {
            e.exports = {
                dialog: "dialog-HExheUfY",
                wrapper: "wrapper-HExheUfY",
                separator: "separator-HExheUfY",
            };
        },
        91441: (e) => {
            e.exports = {
                "small-height-breakpoint": "screen and (max-height: 360px)",
                container: "container-tuOy5zvD",
                unsetAlign: "unsetAlign-tuOy5zvD",
                title: "title-tuOy5zvD",
                subtitle: "subtitle-tuOy5zvD",
                ellipsis: "ellipsis-tuOy5zvD",
                close: "close-tuOy5zvD",
            };
        },
        28712: (e) => {
            e.exports = {
                container: "container-CcsqUMct",
                inputContainer: "inputContainer-CcsqUMct",
                withCancel: "withCancel-CcsqUMct",
                input: "input-CcsqUMct",
                icon: "icon-CcsqUMct",
                cancel: "cancel-CcsqUMct",
            };
        },
        17147: (e) => {
            e.exports = { scrollWrap: "scrollWrap-wu0oD0zz" };
        },
        75193: (e) => {
            e.exports = {
                container: "container-bD7VSobf",
                separator: "separator-bD7VSobf",
                section: "section-bD7VSobf",
            };
        },
        61936: (e) => {
            e.exports = {
                action: "action-cwmjKW8F",
                hovered: "hovered-cwmjKW8F",
                active: "active-cwmjKW8F",
                label: "label-cwmjKW8F",
                description: "description-cwmjKW8F",
                selected: "selected-cwmjKW8F",
                small: "small-cwmjKW8F",
                withDescription: "withDescription-cwmjKW8F",
                action__favoriteIcon: "action__favoriteIcon-cwmjKW8F",
                action__favoriteIcon_active:
                    "action__favoriteIcon_active-cwmjKW8F",
                labelAndDescription: "labelAndDescription-cwmjKW8F",
                icon: "icon-cwmjKW8F",
                fakeIcon: "fakeIcon-cwmjKW8F",
                highlighted: "highlighted-cwmjKW8F",
            };
        },
        94953: (e) => {
            e.exports = {
                menu: "menu-CW6VX2O6",
                withDescriptions: "withDescriptions-CW6VX2O6",
                header: "header-CW6VX2O6",
                title: "title-CW6VX2O6",
                container: "container-CW6VX2O6",
                icon: "icon-CW6VX2O6",
                clear: "clear-CW6VX2O6",
                input: "input-CW6VX2O6",
                highlighted: "highlighted-CW6VX2O6",
                active: "active-CW6VX2O6",
                section: "section-CW6VX2O6",
            };
        },
        71091: () => {},
        16842: (e) => {
            e.exports = {
                favorite: "favorite-JVQQsDQk",
                disabled: "disabled-JVQQsDQk",
                active: "active-JVQQsDQk",
                checked: "checked-JVQQsDQk",
            };
        },
        81524: (e) => {
            e.exports = { highlighted: "highlighted-YWUtZHTy" };
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
        40367: (e) => {
            e.exports = { icon: "icon-AL2odtws", dropped: "dropped-AL2odtws" };
        },
        90186: (e, t, n) => {
            "use strict";
            function o(e) {
                return r(e, s);
            }
            function i(e) {
                return r(e, a);
            }
            function r(e, t) {
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
                filterAriaProps: () => i,
                filterProps: () => r,
                isDataAttribute: () => s,
                isAriaAttribute: () => a,
            });
        },
        26005: (e, t, n) => {
            "use strict";
            n.d(t, { CollapsibleSection: () => c });
            var o = n(59496),
                i = n(97754),
                r = n.n(i),
                s = n(10381),
                a = n(50789);
            function c(e) {
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                        "div",
                        {
                            className: r()(e.className, a.summary),
                            onClick: function () {
                                e.onStateChange && e.onStateChange(!e.open);
                            },
                            "data-open": e.open,
                        },
                        e.summary,
                        o.createElement(s.ToolWidgetCaret, {
                            className: a.caret,
                            dropped: Boolean(e.open),
                        })
                    ),
                    e.open && e.children
                );
            }
        },
        40233: (e, t, n) => {
            "use strict";
            n.d(t, {
                VerticalAttachEdge: () => o,
                HorizontalAttachEdge: () => i,
                VerticalDropDirection: () => r,
                HorizontalDropDirection: () => s,
                getPopupPositioner: () => l,
            });
            var o,
                i,
                r,
                s,
                a = n(88537);
            !(function (e) {
                (e[(e.Top = 0)] = "Top"), (e[(e.Bottom = 1)] = "Bottom");
            })(o || (o = {})),
                (function (e) {
                    (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
                })(i || (i = {})),
                (function (e) {
                    (e[(e.FromTopToBottom = 0)] = "FromTopToBottom"),
                        (e[(e.FromBottomToTop = 1)] = "FromBottomToTop");
                })(r || (r = {})),
                (function (e) {
                    (e[(e.FromLeftToRight = 0)] = "FromLeftToRight"),
                        (e[(e.FromRightToLeft = 1)] = "FromRightToLeft");
                })(s || (s = {}));
            const c = {
                verticalAttachEdge: o.Bottom,
                horizontalAttachEdge: i.Left,
                verticalDropDirection: r.FromTopToBottom,
                horizontalDropDirection: s.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1,
            };
            function l(e, t) {
                return (n, l) => {
                    const d = (0, a.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = c.verticalAttachEdge,
                            verticalDropDirection: h = c.verticalDropDirection,
                            horizontalAttachEdge: m = c.horizontalAttachEdge,
                            horizontalDropDirection:
                                p = c.horizontalDropDirection,
                            horizontalMargin: v = c.horizontalMargin,
                            verticalMargin: g = c.verticalMargin,
                            matchButtonAndListboxWidths:
                                f = c.matchButtonAndListboxWidths,
                        } = t,
                        C = u === o.Top ? -1 * g : g,
                        E = m === i.Right ? d.right : d.left,
                        w = u === o.Top ? d.top : d.bottom,
                        x = {
                            x: E - (p === s.FromRightToLeft ? n : 0) + v,
                            y: w - (h === r.FromBottomToTop ? l : 0) + C,
                        };
                    return f && (x.overrideWidth = d.width), x;
                };
            }
        },
        11507: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { currencyActions: () => a });
            var o = n(88537),
                i = n(28353),
                r = n(82629),
                s = n(19868);
            function a(e, t, n) {
                if (null === t || t.readOnly) return [];
                const a = [],
                    c = (t) => {
                        e.setPriceScaleCurrency(n, t);
                    },
                    l = t.selectedCurrency,
                    d = t.originalCurrencies,
                    u = t.baseCurrencies,
                    h = t.displayedValues,
                    m =
                        s.favoriteCurrencyUnitConversionService.get()
                            .currencies,
                    p = { id: "first_section", actions: [] };
                if (d.size > 1) {
                    const e = (0, r.createAction)(
                        "Mixed",
                        (0, i.t)("Mixed"),
                        void 0,
                        void 0,
                        null === t.selectedCurrency,
                        () => c(null)
                    );
                    p.actions.push(e);
                }
                const v = e.model().availableCurrencies();
                if (null !== l) {
                    const e = (0, o.ensureNotNull)(v.item(l)),
                        t = (0, r.createAction)(
                            l,
                            (0, o.ensureDefined)(h.get(l)),
                            e.logoUrl,
                            e.description,
                            !0,
                            () => {},
                            m.has(l),
                            () =>
                                s.favoriteCurrencyUnitConversionService.toggle(
                                    "currencies",
                                    l
                                )
                        );
                    p.actions.push(t);
                }
                const g = v.filterConvertible(u, (e) => e !== l && d.has(e));
                for (const e of g) {
                    const n = (0, o.ensureNotNull)(v.item(e.id));
                    p.actions.push(
                        (0, r.createAction)(
                            e.id,
                            e.code,
                            n.logoUrl,
                            n.description,
                            t.selectedCurrency === e.id,
                            () => c(e.id),
                            m.has(e.id),
                            () =>
                                s.favoriteCurrencyUnitConversionService.toggle(
                                    "currencies",
                                    e.id
                                )
                        )
                    );
                }
                p.actions.length > 0 && a.push(p);
                const f = v.filterConvertible(u, (e) => e !== l && !d.has(e)),
                    C = [],
                    E = [];
                for (const e of f) {
                    const n = (0, o.ensureNotNull)(v.item(e.id)),
                        i = m.has(e.id),
                        a = (0, r.createAction)(
                            e.id,
                            e.code,
                            n.logoUrl,
                            n.description,
                            t.selectedCurrency === e.id,
                            () => c(e.id),
                            i,
                            () =>
                                s.favoriteCurrencyUnitConversionService.toggle(
                                    "currencies",
                                    e.id
                                )
                        );
                    i ? C.push(a) : E.push(a);
                }
                return (
                    (E.length > 0 || C.length > 0) &&
                        a.push({ id: "second_section", actions: C.concat(E) }),
                    a
                );
            }
        },
        19868: (e, t, n) => {
            "use strict";
            n.d(t, { favoriteCurrencyUnitConversionService: () => a });
            var o = n(56840),
                i = n(21097),
                r = n(9127);
            class s extends r.AbstractJsonStoreService {
                constructor(e, t) {
                    super(
                        e,
                        t,
                        "FAVORITE_CURRENCY_UNIT_CONVERSION_CHANGED",
                        "currencyUnitConversion.favorites",
                        { currencies: new Set(), units: new Set() }
                    );
                }
                add(e, t) {
                    const n = this.get();
                    n[e].add(t), this.set(n);
                }
                remove(e, t) {
                    const n = this.get();
                    n[e].delete(t) && this.set(n);
                }
                toggle(e, t) {
                    this.get()[e].has(t) ? this.remove(e, t) : this.add(e, t);
                }
                _serialize(e) {
                    return [[...e.currencies], [...e.units]];
                }
                _deserialize(e) {
                    return { currencies: new Set(e[0]), units: new Set(e[1]) };
                }
            }
            const a = new s(i.TVXWindowEvents, o);
        },
        53997: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { unitActions: () => a });
            var o = n(88537),
                i = n(28353),
                r = n(82629),
                s = n(19868);
            function a(e, t, n) {
                if (null === t || 0 === t.availableGroups.size) return [];
                const a = [],
                    c = (t) => {
                        e.setPriceScaleUnit(n, t);
                    },
                    l = t.selectedUnit,
                    d = t.originalUnits,
                    u = t.names,
                    h = t.descriptions,
                    m = s.favoriteCurrencyUnitConversionService.get().units,
                    p = { actions: [], id: "first_section" };
                if (d.size > 1) {
                    const e = (0, r.createAction)(
                        "Mixed",
                        (0, i.t)("Mixed"),
                        void 0,
                        void 0,
                        null === t.selectedUnit,
                        () => c(null)
                    );
                    p.actions.push(e);
                }
                const v = e.model().availableUnits();
                if (null !== l) {
                    const e = (0, r.createAction)(
                        l,
                        (0, o.ensureDefined)(u.get(l)),
                        void 0,
                        (0, o.ensureDefined)(h.get(l)),
                        !0,
                        () => {},
                        m.has(l),
                        () =>
                            s.favoriteCurrencyUnitConversionService.toggle(
                                "units",
                                l
                            )
                    );
                    p.actions.push(e);
                }
                const g = v.unitsByGroups(t.availableGroups),
                    f = [],
                    C = [];
                for (const e of g)
                    for (const t of e.units) {
                        const e = m.has(t.id);
                        if (t.id === l || (!e && !d.has(t.id))) continue;
                        const n = (0, r.createAction)(
                            t.id,
                            t.name,
                            void 0,
                            t.description,
                            !1,
                            () => c(t.id),
                            e,
                            () =>
                                s.favoriteCurrencyUnitConversionService.toggle(
                                    "units",
                                    t.id
                                )
                        );
                        e ? C.push(n) : f.push(n);
                    }
                (f.length > 0 || C.length > 0) &&
                    p.actions.push(
                        ...C.sort((e, t) =>
                            e.label
                                .toLowerCase()
                                .localeCompare(t.label.toLowerCase())
                        ),
                        ...f
                    ),
                    p.actions.length > 0 && a.push(p);
                const E = l && v.unitGroupById(l);
                if (null !== E)
                    for (const e of g) {
                        if (e.name !== E) continue;
                        const t = [];
                        for (const n of e.units)
                            n.id === l ||
                                d.has(n.id) ||
                                m.has(n.id) ||
                                t.push(
                                    (0, r.createAction)(
                                        n.id,
                                        n.name,
                                        void 0,
                                        n.description,
                                        !1,
                                        () => c(n.id),
                                        !1,
                                        () =>
                                            s.favoriteCurrencyUnitConversionService.toggle(
                                                "units",
                                                n.id
                                            )
                                    )
                                );
                        t.length > 0 &&
                            a.push({ id: e.name, name: e.name, actions: t });
                    }
                for (const e of g) {
                    if (e.name === E) continue;
                    const t = [];
                    for (const n of e.units)
                        n.id === l ||
                            d.has(n.id) ||
                            m.has(n.id) ||
                            t.push(
                                (0, r.createAction)(
                                    n.id,
                                    n.name,
                                    void 0,
                                    n.description,
                                    !1,
                                    () => c(n.id),
                                    !1,
                                    () =>
                                        s.favoriteCurrencyUnitConversionService.toggle(
                                            "units",
                                            n.id
                                        )
                                )
                            );
                    t.length > 0 &&
                        a.push({ id: e.name, name: e.name, actions: t });
                }
                return a;
            }
        },
        82629: (e, t, n) => {
            "use strict";
            function o(e, t, n, o, i, r, s, a) {
                return {
                    id: e,
                    label: t,
                    icon: n,
                    description: o,
                    isActive: i,
                    onClick: r,
                    isFavorite: s,
                    onFavoriteClick: a,
                };
            }
            n.d(t, { createAction: () => o });
        },
        39640: (e, t, n) => {
            "use strict";
            function o(e, t, n, o, i) {
                function r(i) {
                    if (e > i.timeStamp) return;
                    const r = i.target;
                    void 0 !== n &&
                        null !== t &&
                        null !== r &&
                        r.ownerDocument === o &&
                        (t.contains(r) || n(i));
                }
                return (
                    i.click && o.addEventListener("click", r, !1),
                    i.mouseDown && o.addEventListener("mousedown", r, !1),
                    i.touchEnd && o.addEventListener("touchend", r, !1),
                    i.touchStart && o.addEventListener("touchstart", r, !1),
                    () => {
                        o.removeEventListener("click", r, !1),
                            o.removeEventListener("mousedown", r, !1),
                            o.removeEventListener("touchend", r, !1),
                            o.removeEventListener("touchstart", r, !1);
                    }
                );
            }
            n.d(t, { addOutsideEventListener: () => o });
        },
        24437: (e, t, n) => {
            "use strict";
            n.d(t, { DialogBreakpoints: () => i });
            var o = n(96746);
            const i = {
                SmallHeight: o["small-height-breakpoint"],
                TabletSmall: o["tablet-small-breakpoint"],
                TabletNormal: o["tablet-normal-breakpoint"],
            };
        },
        85457: (e, t, n) => {
            "use strict";
            n.d(t, { AdaptivePopupDialog: () => D });
            var o = n(59496),
                i = n(88537);
            var r = n(97754),
                s = n.n(r),
                a = n(68335),
                c = n(35749),
                l = n(63016),
                d = n(1109),
                u = n(24437),
                h = n(90692),
                m = n(95711),
                p = n(52092),
                v = n(76422),
                g = n(9745);
            const f = o.createContext({ setHideClose: () => {} });
            var C = n(37257),
                E = n(91441);
            function w(e) {
                const {
                        title: t,
                        subtitle: n,
                        showCloseIcon: i = !0,
                        onClose: r,
                        renderBefore: a,
                        renderAfter: c,
                        draggable: l,
                        className: d,
                        unsetAlign: u,
                    } = e,
                    [h, m] = (0, o.useState)(!1);
                return o.createElement(
                    f.Provider,
                    { value: { setHideClose: m } },
                    o.createElement(
                        "div",
                        {
                            className: s()(
                                E.container,
                                d,
                                (n || u) && E.unsetAlign
                            ),
                        },
                        a,
                        o.createElement(
                            "div",
                            { "data-dragg-area": l, className: E.title },
                            o.createElement(
                                "div",
                                { className: E.ellipsis },
                                t
                            ),
                            n &&
                                o.createElement(
                                    "div",
                                    { className: s()(E.ellipsis, E.subtitle) },
                                    n
                                )
                        ),
                        c,
                        i &&
                            !h &&
                            o.createElement(g.Icon, {
                                className: E.close,
                                icon: C,
                                onClick: r,
                                "data-name": "close",
                                "data-role": "button",
                            })
                    )
                );
            }
            var x = n(67179);
            const y = { vertical: 20 },
                b = { vertical: 0 };
            class D extends o.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._controller = null),
                        (this._reference = null),
                        (this._orientationMediaQuery = null),
                        (this._renderChildren = (e, t) => (
                            (this._controller = e),
                            this.props.render({
                                requestResize: this._requestResize,
                                centerAndFit: this._centerAndFit,
                                isSmallWidth: t,
                            })
                        )),
                        (this._handleReference = (e) => (this._reference = e)),
                        (this._handleClose = () => {
                            this.props.onClose();
                        }),
                        (this._handleOpen = () => {
                            void 0 !== this.props.onOpen &&
                                this.props.isOpened &&
                                this.props.onOpen(
                                    this.props.fullScreen ||
                                        window.matchMedia(
                                            u.DialogBreakpoints.TabletSmall
                                        ).matches
                                );
                        }),
                        (this._handleKeyDown = (e) => {
                            var t;
                            if (!e.defaultPrevented)
                                switch (
                                    (this.props.onKeyDown &&
                                        this.props.onKeyDown(e),
                                    (0, a.hashFromEvent)(e))
                                ) {
                                    case 27:
                                        if (e.defaultPrevented) return;
                                        if (
                                            this.props.forceCloseOnEsc &&
                                            this.props.forceCloseOnEsc()
                                        )
                                            return void this._handleClose();
                                        const { activeElement: n } = document,
                                            o = (0, i.ensureNotNull)(
                                                this._reference
                                            );
                                        if (null !== n) {
                                            if (
                                                (e.preventDefault(),
                                                "true" ===
                                                    (t = n).getAttribute(
                                                        "data-haspopup"
                                                    ) &&
                                                    "true" !==
                                                        t.getAttribute(
                                                            "data-expanded"
                                                        ))
                                            )
                                                return void this._handleClose();
                                            if ((0, c.isTextEditingField)(n))
                                                return void o.focus();
                                            if (o.contains(n))
                                                return void this._handleClose();
                                        }
                                }
                        }),
                        (this._requestResize = () => {
                            null !== this._controller &&
                                this._controller.recalculateBounds();
                        }),
                        (this._centerAndFit = () => {
                            null !== this._controller &&
                                this._controller.centerAndFit();
                        });
                }
                componentDidMount() {
                    var e, t;
                    v.subscribe(
                        p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                        this._handleClose,
                        null
                    ),
                        this._handleOpen(),
                        void 0 !== this.props.onOpen &&
                            ((this._orientationMediaQuery = window.matchMedia(
                                "(orientation: portrait)"
                            )),
                            (e = this._orientationMediaQuery),
                            (t = this._handleOpen),
                            (null == e ? void 0 : e.addEventListener)
                                ? e.addEventListener("change", t)
                                : e.addListener(t));
                }
                componentWillUnmount() {
                    var e, t;
                    v.unsubscribe(
                        p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                        this._handleClose,
                        null
                    ),
                        null !== this._orientationMediaQuery &&
                            ((e = this._orientationMediaQuery),
                            (t = this._handleOpen),
                            (null == e ? void 0 : e.removeEventListener)
                                ? e.removeEventListener("change", t)
                                : e.removeListener(t));
                }
                focus() {
                    (0, i.ensureNotNull)(this._reference).focus();
                }
                getElement() {
                    return this._reference;
                }
                contains(e) {
                    var t, n;
                    return (
                        null !==
                            (n =
                                null === (t = this._reference) || void 0 === t
                                    ? void 0
                                    : t.contains(e)) &&
                        void 0 !== n &&
                        n
                    );
                }
                render() {
                    const {
                            className: e,
                            wrapperClassName: t,
                            headerClassName: n,
                            isOpened: i,
                            title: r,
                            dataName: a,
                            onClickOutside: c,
                            additionalElementPos: p,
                            additionalHeaderElement: v,
                            backdrop: g,
                            shouldForceFocus: f = !0,
                            showSeparator: C,
                            subtitle: E,
                            draggable: D = !0,
                            fullScreen: S = !1,
                            showCloseIcon: _ = !0,
                            rounded: N = !0,
                            isAnimationEnabled: k,
                            growPoint: A,
                            dialogTooltip: O,
                            unsetHeaderAlign: F,
                            onDragStart: M,
                            dataDialogName: z,
                        } = this.props,
                        L = "after" !== p ? v : void 0,
                        I = "after" === p ? v : void 0,
                        U = "string" == typeof r ? r : z || "";
                    return o.createElement(
                        h.MatchMedia,
                        { rule: u.DialogBreakpoints.SmallHeight },
                        (p) =>
                            o.createElement(
                                h.MatchMedia,
                                { rule: u.DialogBreakpoints.TabletSmall },
                                (u) =>
                                    o.createElement(
                                        l.PopupDialog,
                                        {
                                            rounded: !(u || S) && N,
                                            className: s()(x.dialog, e),
                                            isOpened: i,
                                            reference: this._handleReference,
                                            onKeyDown: this._handleKeyDown,
                                            onClickOutside: c,
                                            onClickBackdrop: c,
                                            fullscreen: u || S,
                                            guard: p ? b : y,
                                            boundByScreen: u || S,
                                            shouldForceFocus: f,
                                            backdrop: g,
                                            draggable: D,
                                            isAnimationEnabled: k,
                                            growPoint: A,
                                            name: this.props.dataName,
                                            dialogTooltip: O,
                                            onDragStart: M,
                                        },
                                        o.createElement(
                                            "div",
                                            {
                                                className: s()(x.wrapper, t),
                                                "data-name": a,
                                                "data-dialog-name": U,
                                            },
                                            void 0 !== r &&
                                                o.createElement(w, {
                                                    draggable: D && !(u || S),
                                                    onClose: this._handleClose,
                                                    renderAfter: I,
                                                    renderBefore: L,
                                                    subtitle: E,
                                                    title: r,
                                                    showCloseIcon: _,
                                                    className: n,
                                                    unsetAlign: F,
                                                }),
                                            C &&
                                                o.createElement(d.Separator, {
                                                    className: x.separator,
                                                }),
                                            o.createElement(
                                                m.PopupContext.Consumer,
                                                null,
                                                (e) =>
                                                    this._renderChildren(
                                                        e,
                                                        u || S
                                                    )
                                            )
                                        )
                                    )
                            )
                    );
                }
            }
        },
        69654: (e, t, n) => {
            "use strict";
            n.d(t, { DialogSearch: () => d });
            var o = n(59496),
                i = n(97754),
                r = n.n(i),
                s = n(28353),
                a = n(9745),
                c = n(5639),
                l = n(28712);
            function d(e) {
                const { children: t, renderInput: n, onCancel: i, ...d } = e;
                return o.createElement(
                    "div",
                    { className: l.container },
                    o.createElement(
                        "div",
                        { className: r()(l.inputContainer, i && l.withCancel) },
                        n || o.createElement(u, { ...d })
                    ),
                    t,
                    o.createElement(a.Icon, { className: l.icon, icon: c }),
                    i &&
                        o.createElement(
                            "div",
                            { className: l.cancel, onClick: i },
                            (0, s.t)("Cancel")
                        )
                );
            }
            function u(e) {
                const {
                    className: t,
                    reference: n,
                    value: i,
                    onChange: s,
                    onFocus: a,
                    onBlur: c,
                    onKeyDown: d,
                    onSelect: u,
                    placeholder: h,
                    ...m
                } = e;
                return o.createElement("input", {
                    ...m,
                    ref: n,
                    type: "text",
                    className: r()(t, l.input),
                    autoComplete: "off",
                    "data-role": "search",
                    placeholder: h,
                    value: i,
                    onChange: s,
                    onFocus: a,
                    onBlur: c,
                    onSelect: u,
                    onKeyDown: d,
                });
            }
        },
        71834: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { UnitConversionRenderer: () => P });
            var o = n(59496),
                i = n(87995),
                r = n(19868),
                s = n(90692),
                a = n(19785),
                c = n(68335);
            var l = n(24437),
                d = n(40233),
                u = n(97754),
                h = n.n(u),
                m = n(28353),
                p = n(9745),
                v = n(50628),
                g = n(27317),
                f = n(40173),
                C = n(51613),
                E = n(26005),
                w = n(36189);
            n(71091);
            function x(e) {
                var t, n;
                const i =
                    ((r = e.size),
                    (s = e.className),
                    u("tv-circle-logo", "tv-circle-logo--" + r, s));
                var r, s;
                const a =
                    null !==
                        (n =
                            null !== (t = e.alt) && void 0 !== t
                                ? t
                                : e.title) && void 0 !== n
                        ? n
                        : "";
                return (function (e) {
                    return (
                        "logoUrl" in e &&
                        void 0 !== e.logoUrl &&
                        0 !== e.logoUrl.length
                    );
                })(e)
                    ? o.createElement("img", {
                          className: i,
                          src: e.logoUrl,
                          alt: a,
                          title: e.title,
                          loading: e.loading,
                      })
                    : o.createElement(
                          "span",
                          { className: i, title: e.title },
                          e.placeholderLetter
                      );
            }
            var y = n(24637),
                b = n(61936);
            const D = o.memo(
                function (e) {
                    const {
                            label: t,
                            icon: n,
                            rules: i,
                            search: r,
                            description: s,
                            onClick: a,
                            onClose: c,
                            isActive: l,
                            isSmallSize: d,
                            isSelected: u,
                            selectedRef: m,
                            hasDescriptions: p,
                            hasIcons: v,
                            isFavorite: g,
                            onFavoriteClick: f,
                        } = e,
                        C = (0, o.useCallback)(() => {
                            a(), c && c();
                        }, [a, c]),
                        E = d && b.small;
                    return o.createElement(
                        "div",
                        {
                            className: h()(
                                b.action,
                                l && b.active,
                                E,
                                p && b.withDescription,
                                u && b.selected
                            ),
                            onClick: C,
                            ref: m,
                        },
                        v &&
                            (void 0 !== n
                                ? o.createElement(x, {
                                      logoUrl: n,
                                      size: p ? "xsmall" : "xxsmall",
                                      className: h()(b.icon, E),
                                  })
                                : o.createElement("span", {
                                      className: h()(b.fakeIcon, E),
                                  })),
                        o.createElement(
                            "div",
                            { className: h()(b.labelAndDescription, E) },
                            o.createElement(
                                "span",
                                { className: h()(b.label, E) },
                                D(t)
                            ),
                            p && o.createElement("br", null),
                            p &&
                                o.createElement(
                                    "span",
                                    { className: h()(b.description, E) },
                                    s ? D(s) : ""
                                )
                        ),
                        void 0 !== g &&
                            o.createElement(
                                "div",
                                {
                                    className: h()(
                                        b.action__favoriteIcon,
                                        g && b.action__favoriteIcon_active
                                    ),
                                },
                                o.createElement(w.FavoriteButton, {
                                    isActive: l,
                                    isFilled: g,
                                    onClick: function (e) {
                                        e.stopPropagation(), null == f || f();
                                    },
                                })
                            )
                    );
                    function D(e) {
                        return o.createElement(y.HighlightedText, {
                            text: e,
                            rules: i,
                            queryString: r,
                            className: h()(l && b.highlighted, l && b.active),
                        });
                    }
                },
                (e, t) =>
                    Object.keys(t)
                        .filter(
                            (e) =>
                                ![
                                    "onClick",
                                    "onClose",
                                    "onFavoriteClick",
                                ].includes(e)
                        )
                        .every((n) => t[n] === e[n])
            );
            var S = n(21031),
                _ = n(74471),
                N = n(94953),
                k = n(17147);
            const A = (0, f.mergeThemes)(g.DEFAULT_MENU_THEME, k);
            function O(e) {
                const {
                        title: t,
                        sections: n,
                        onClose: i,
                        selectedId: r,
                        selectedRef: s,
                        search: a,
                        setSearch: c,
                        items: l,
                        rules: d,
                        searchRef: u,
                        hasDescriptions: g,
                        hasIcons: f,
                        ...w
                    } = e,
                    [x, y] = (0, o.useState)(() =>
                        n.reduce((e, t, n) => (t.name && (e[t.id] = !0), e), {})
                    );
                function b(e) {
                    const { id: t, ...n } = e;
                    return o.createElement(D, {
                        key: t,
                        rules: d,
                        search: a,
                        onClose: i,
                        isSmallSize: !0,
                        isSelected: t === r,
                        selectedRef: t === r ? s : void 0,
                        hasDescriptions: g,
                        hasIcons: f,
                        ...n,
                    });
                }
                return o.createElement(
                    v.PopupMenu,
                    {
                        ...w,
                        onClose: i,
                        className: h()(N.menu, g && N.withDescriptions),
                        theme: A,
                        maxHeight: g ? 313 : 280,
                        noMomentumBasedScroll: !0,
                        isOpened: !0,
                        onOpen: function () {
                            var e;
                            null === (e = u.current) ||
                                void 0 === e ||
                                e.focus();
                        },
                    },
                    o.createElement(
                        "div",
                        { className: N.header },
                        o.createElement("div", { className: N.title }, t),
                        o.createElement(
                            "div",
                            { className: N.container },
                            o.createElement(p.Icon, {
                                icon: S,
                                className: N.icon,
                            }),
                            o.createElement("input", {
                                size: 1,
                                type: "text",
                                className: N.input,
                                placeholder: (0, m.t)("Search"),
                                autoComplete: "off",
                                "data-role": "search",
                                onChange: function (e) {
                                    c(e.target.value);
                                },
                                value: a,
                                ref: u,
                            }),
                            Boolean(a) &&
                                o.createElement(p.Icon, {
                                    icon: _,
                                    className: N.clear,
                                    onClick: function () {
                                        c("");
                                    },
                                })
                        )
                    ),
                    a
                        ? l.map(b)
                        : n.map((e, t) =>
                              o.createElement(
                                  o.Fragment,
                                  { key: e.id },
                                  Boolean(t) &&
                                      o.createElement(
                                          C.PopupMenuSeparator,
                                          null
                                      ),
                                  e.name
                                      ? o.createElement(
                                            E.CollapsibleSection,
                                            {
                                                summary: e.name,
                                                className: N.section,
                                                open: x[e.id],
                                                onStateChange: (t) =>
                                                    y({ ...x, [e.id]: t }),
                                            },
                                            e.actions.map(b)
                                        )
                                      : e.actions.map(b)
                              )
                          )
                );
            }
            var F = n(85457),
                M = n(69654),
                z = n(75193);
            function L(e) {
                const {
                    title: t,
                    onClose: n,
                    sections: i,
                    selectedId: r,
                    selectedRef: s,
                    search: a,
                    setSearch: c,
                    items: l,
                    rules: d,
                    searchRef: u,
                    hasIcons: h,
                    hasDescriptions: p,
                } = e;
                return o.createElement(F.AdaptivePopupDialog, {
                    title: t,
                    onClose: n,
                    render: function () {
                        return o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(M.DialogSearch, {
                                placeholder: (0, m.t)("Search"),
                                onChange: v,
                                reference: u,
                            }),
                            o.createElement(
                                "div",
                                { className: z.container },
                                a
                                    ? l.map((e) => {
                                          const {
                                              id: t,
                                              isActive: i,
                                              ...c
                                          } = e;
                                          return o.createElement(D, {
                                              key: t,
                                              isActive: i,
                                              onClose: n,
                                              rules: d,
                                              search: a,
                                              isSelected: t === r,
                                              selectedRef: t === r ? s : void 0,
                                              hasIcons: h,
                                              hasDescriptions: p,
                                              ...c,
                                          });
                                      })
                                    : i.map((e, t) =>
                                          o.createElement(
                                              o.Fragment,
                                              { key: e.id },
                                              e.name &&
                                                  o.createElement(
                                                      "div",
                                                      { className: z.section },
                                                      e.name
                                                  ),
                                              e.actions.map((c, l) => {
                                                  const { id: u, ...m } = c,
                                                      v =
                                                          l ===
                                                          e.actions.length - 1,
                                                      g = t === i.length - 1;
                                                  return o.createElement(
                                                      o.Fragment,
                                                      { key: u },
                                                      o.createElement(D, {
                                                          rules: d,
                                                          search: a,
                                                          onClose: n,
                                                          isSelected: u === r,
                                                          selectedRef:
                                                              u === r
                                                                  ? s
                                                                  : void 0,
                                                          hasIcons: h,
                                                          hasDescriptions: p,
                                                          ...m,
                                                      }),
                                                      !g &&
                                                          v &&
                                                          o.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      z.separator,
                                                              }
                                                          )
                                                  );
                                              })
                                          )
                                      )
                            )
                        );
                    },
                    dataName: "unit-conversion-dialog",
                    draggable: !1,
                    fullScreen: !0,
                    isOpened: !0,
                });
                function v(e) {
                    c(e.target.value);
                }
            }
            const I = {
                horizontalAttachEdge: d.HorizontalAttachEdge.Right,
                horizontalDropDirection:
                    d.HorizontalDropDirection.FromRightToLeft,
            };
            function U(e) {
                const { element: t, ...n } = e,
                    [i, r] = (0, o.useState)(E()),
                    [u, h] = (0, o.useState)(""),
                    m = (0, o.useRef)(null),
                    p = (0, o.useRef)(null),
                    v = (0, o.useMemo)(() => (0, a.createRegExpList)(u), [u]),
                    { activeIdx: g, setActiveIdx: f } = (function (
                        e,
                        t,
                        n,
                        i = "keydown"
                    ) {
                        const [r, s] = (0, o.useState)(-1);
                        return (
                            (0, o.useEffect)(() => {
                                if (!e) return;
                                const n = (e) => {
                                    switch ((0, c.hashFromEvent)(e)) {
                                        case 40:
                                            if (r === t.length - 1) break;
                                            e.preventDefault(), s(r + 1);
                                            break;
                                        case 38:
                                            if (r <= 0) break;
                                            e.preventDefault(), s(r - 1);
                                            break;
                                    }
                                };
                                return (
                                    e.addEventListener("keydown", n),
                                    () => {
                                        e.removeEventListener("keydown", n);
                                    }
                                );
                            }, [e, r, t]),
                            (0, o.useEffect)(() => {
                                if (!e || !n) return;
                                const o = (e) => {
                                    var o;
                                    e.repeat ||
                                        (13 === (0, c.hashFromEvent)(e) &&
                                            n(
                                                null !== (o = t[r]) &&
                                                    void 0 !== o
                                                    ? o
                                                    : null,
                                                e
                                            ));
                                };
                                return (
                                    e.addEventListener(i, o),
                                    () => {
                                        e.removeEventListener(i, o);
                                    }
                                );
                            }, [e, r, t, n, i]),
                            { activeIdx: r, setActiveIdx: s }
                        );
                    })(m.current, i, function (e) {
                        e && (e.onClick(), n.onClose());
                    });
                !(function (e, t = []) {
                    (0, o.useEffect)(() => {
                        e(-1);
                    }, [...t]);
                })(f, [i]),
                    (function (e, t) {
                        (0, o.useEffect)(() => {
                            var n;
                            t >= 0 &&
                                (null === (n = e.current) ||
                                    void 0 === n ||
                                    n.scrollIntoView({ block: "nearest" }));
                        }, [t]);
                    })(p, g),
                    (0, o.useEffect)(() => {
                        r(
                            u
                                ? (function (e, t, n) {
                                      const o = e.reduce(
                                          (e, t) => [...e, ...t.actions],
                                          []
                                      );
                                      return (0, a.rankedSearch)({
                                          data: o,
                                          rules: n,
                                          queryString: t,
                                          primaryKey: "label",
                                          secondaryKey: "description",
                                      });
                                  })(n.sections, u, v)
                                : E()
                        );
                    }, [u, n.sections, v]);
                const C = (0, o.useMemo)(
                    () => ({
                        selectedId: Boolean(g >= 0 && i[g]) ? i[g].id : "",
                        selectedRef: p,
                        search: u,
                        setSearch: h,
                        searchRef: m,
                        items: i,
                        rules: v,
                        hasIcons: i.some((e) => void 0 !== e.icon),
                        hasDescriptions: i.some(
                            (e) => void 0 !== e.description
                        ),
                    }),
                    [g, p, u, h, m, i, v]
                );
                return o.createElement(
                    s.MatchMedia,
                    { rule: l.DialogBreakpoints.TabletSmall },
                    (e) =>
                        e
                            ? o.createElement(L, { ...n, ...C })
                            : o.createElement(O, {
                                  ...n,
                                  ...C,
                                  position: (0, d.getPopupPositioner)(t, I),
                                  doNotCloseOn: t,
                              })
                );
                function E() {
                    return n.sections.reduce(
                        (e, t) => (e.push(...t.actions), e),
                        []
                    );
                }
            }
            class P {
                constructor(e, t, n) {
                    (this._rootElem = document.createElement("div")),
                        (this.close = () => {
                            null !== this._rootElem &&
                                (i.unmountComponentAtNode(this._rootElem),
                                r.favoriteCurrencyUnitConversionService
                                    .getOnChange()
                                    .unsubscribe(this, this._render),
                                (this._rootElem = null));
                        }),
                        (this.isOpened = () => null !== this._rootElem),
                        (this._title = e),
                        (this._element = t),
                        (this._sectionsGetter = n),
                        this._render(),
                        r.favoriteCurrencyUnitConversionService
                            .getOnChange()
                            .subscribe(this, this._render);
                }
                _render() {
                    const e = {
                        title: this._title,
                        sections: this._sectionsGetter(),
                        element: this._element,
                        onClose: this.close,
                    };
                    i.render(o.createElement(U, { ...e }), this._rootElem);
                }
            }
        },
        36189: (e, t, n) => {
            "use strict";
            n.d(t, { FavoriteButton: () => u });
            var o = n(28353),
                i = n(59496),
                r = n(97754),
                s = n(9745),
                a = n(20614),
                c = n(55783),
                l = n(16842);
            const d = {
                add: (0, o.t)("Add to favorites"),
                remove: (0, o.t)("Remove from favorites"),
            };
            function u(e) {
                const {
                    className: t,
                    isFilled: n,
                    isActive: o,
                    onClick: u,
                    ...h
                } = e;
                return i.createElement(s.Icon, {
                    ...h,
                    className: r(
                        l.favorite,
                        "apply-common-tooltip",
                        n && l.checked,
                        o && l.active,
                        t
                    ),
                    icon: n ? a : c,
                    onClick: u,
                    title: n ? d.remove : d.add,
                });
            }
        },
        19785: (e, t, n) => {
            "use strict";
            n.d(t, {
                rankedSearch: () => i,
                createRegExpList: () => r,
                getHighlightedChars: () => s,
            });
            var o = n(80643);
            function i(e) {
                const {
                    data: t,
                    rules: n,
                    queryString: i,
                    isPreventedFromFiltering: r,
                    primaryKey: s,
                    secondaryKey: a = s,
                    optionalPrimaryKey: c,
                } = e;
                return t
                    .map((e) => {
                        const t = c && e[c] ? e[c] : e[s],
                            r = e[a];
                        let l,
                            d = 0;
                        return (
                            n.forEach((e) => {
                                var n, s, a, c;
                                const { re: u, fullMatch: h } = e;
                                return (
                                    (u.lastIndex = 0),
                                    t && t.toLowerCase() === i.toLowerCase()
                                        ? ((d = 3),
                                          void (l =
                                              null === (n = t.match(h)) ||
                                              void 0 === n
                                                  ? void 0
                                                  : n.index))
                                        : (0, o.isString)(t) && h.test(t)
                                        ? ((d = 2),
                                          void (l =
                                              null === (s = t.match(h)) ||
                                              void 0 === s
                                                  ? void 0
                                                  : s.index))
                                        : (0, o.isString)(r) && h.test(r)
                                        ? ((d = 1),
                                          void (l =
                                              null === (a = r.match(h)) ||
                                              void 0 === a
                                                  ? void 0
                                                  : a.index))
                                        : void (
                                              (0, o.isString)(r) &&
                                              u.test(r) &&
                                              ((d = 1),
                                              (l =
                                                  null === (c = r.match(u)) ||
                                                  void 0 === c
                                                      ? void 0
                                                      : c.index))
                                          )
                                );
                            }),
                            { matchPriority: d, matchIndex: l, item: e }
                        );
                    })
                    .filter((e) => r || e.matchPriority)
                    .sort((e, t) => {
                        if (e.matchPriority < t.matchPriority) return 1;
                        if (e.matchPriority > t.matchPriority) return -1;
                        if (e.matchPriority === t.matchPriority) {
                            if (
                                void 0 === e.matchIndex ||
                                void 0 === t.matchIndex
                            )
                                return 0;
                            if (e.matchIndex > t.matchIndex) return 1;
                            if (e.matchIndex < t.matchIndex) return -1;
                        }
                        return 0;
                    })
                    .map(({ item: e }) => e);
            }
            function r(e, t) {
                const n = [],
                    o = e.toLowerCase(),
                    i =
                        e
                            .split("")
                            .map(
                                (e, t) =>
                                    `(${0 !== t ? "[/\\s-]" + a(e) : a(e)})`
                            )
                            .join("(.*?)") + "(.*)";
                return (
                    n.push({
                        fullMatch: new RegExp(`(${a(e)})`, "i"),
                        re: new RegExp("^" + i, "i"),
                        reserveRe: new RegExp(i, "i"),
                        fuzzyHighlight: !0,
                    }),
                    t &&
                        t.hasOwnProperty(o) &&
                        n.push({
                            fullMatch: t[o],
                            re: t[o],
                            fuzzyHighlight: !1,
                        }),
                    n
                );
            }
            function s(e, t, n) {
                const o = [];
                return e && n
                    ? (n.forEach((e) => {
                          const { fullMatch: n, re: i, reserveRe: r } = e;
                          (n.lastIndex = 0), (i.lastIndex = 0);
                          const s = n.exec(t),
                              a = s || i.exec(t) || (r && r.exec(t));
                          if (((e.fuzzyHighlight = !s), a))
                              if (e.fuzzyHighlight) {
                                  let e = a.index;
                                  for (let t = 1; t < a.length; t++) {
                                      const n = a[t],
                                          i = a[t].length;
                                      if (t % 2) {
                                          const t =
                                              n.startsWith(" ") ||
                                              n.startsWith("/") ||
                                              n.startsWith("-");
                                          o[t ? e + 1 : e] = !0;
                                      }
                                      e += i;
                                  }
                              } else
                                  for (let e = 0; e < a[0].length; e++)
                                      o[a.index + e] = !0;
                      }),
                      o)
                    : o;
            }
            function a(e) {
                return e.replace(/[!-/[-^{-}]/g, "\\$&");
            }
        },
        24637: (e, t, n) => {
            "use strict";
            n.d(t, { HighlightedText: () => a });
            var o = n(59496),
                i = n(97754),
                r = n(19785),
                s = n(81524);
            function a(e) {
                const { queryString: t, rules: n, text: a, className: c } = e,
                    l = (0, o.useMemo)(
                        () => (0, r.getHighlightedChars)(t, a, n),
                        [t, n, a]
                    );
                return o.createElement(
                    o.Fragment,
                    null,
                    l.length
                        ? a
                              .split("")
                              .map((e, t) =>
                                  o.createElement(
                                      o.Fragment,
                                      { key: t },
                                      l[t]
                                          ? o.createElement(
                                                "span",
                                                {
                                                    className: i(
                                                        s.highlighted,
                                                        c
                                                    ),
                                                },
                                                e
                                            )
                                          : o.createElement("span", null, e)
                                  )
                              )
                        : a
                );
            }
        },
        1109: (e, t, n) => {
            "use strict";
            n.d(t, { Separator: () => s });
            var o = n(59496),
                i = n(97754),
                r = n(91626);
            function s(e) {
                return o.createElement("div", {
                    className: i(r.separator, e.className),
                });
            }
        },
        51613: (e, t, n) => {
            "use strict";
            n.d(t, { PopupMenuSeparator: () => a });
            var o = n(59496),
                i = n(97754),
                r = n.n(i),
                s = n(524);
            function a(e) {
                const { size: t = "normal", className: n } = e;
                return o.createElement("div", {
                    className: r()(
                        s.separator,
                        "small" === t && s.small,
                        "normal" === t && s.normal,
                        "large" === t && s.large,
                        n
                    ),
                });
            }
        },
        50628: (e, t, n) => {
            "use strict";
            n.d(t, { PopupMenu: () => l });
            var o = n(59496),
                i = n(87995),
                r = n(65718),
                s = n(27317),
                a = n(29197),
                c = n(58095);
            function l(e) {
                const {
                        controller: t,
                        children: n,
                        isOpened: l,
                        closeOnClickOutside: d = !0,
                        doNotCloseOn: u,
                        onClickOutside: h,
                        onClose: m,
                        ...p
                    } = e,
                    v = (0, o.useContext)(a.CloseDelegateContext),
                    g = (0, c.useOutsideEvent)({
                        handler: function (e) {
                            h && h(e);
                            if (!d) return;
                            if (u && e.target instanceof Node) {
                                const t = i.findDOMNode(u);
                                if (t instanceof Node && t.contains(e.target))
                                    return;
                            }
                            m();
                        },
                        mouseDown: !0,
                        touchStart: !0,
                    });
                return l
                    ? o.createElement(
                          r.Portal,
                          {
                              top: "0",
                              left: "0",
                              right: "0",
                              bottom: "0",
                              pointerEvents: "none",
                          },
                          o.createElement(
                              "span",
                              { ref: g, style: { pointerEvents: "auto" } },
                              o.createElement(
                                  s.Menu,
                                  {
                                      ...p,
                                      onClose: m,
                                      onScroll: function (t) {
                                          const { onScroll: n } = e;
                                          n && n(t);
                                      },
                                      customCloseDelegate: v,
                                      ref: t,
                                  },
                                  n
                              )
                          )
                      )
                    : null;
            }
        },
        10381: (e, t, n) => {
            "use strict";
            n.d(t, { ToolWidgetCaret: () => c });
            var o = n(59496),
                i = n(97754),
                r = n(9745),
                s = n(40367),
                a = n(81268);
            function c(e) {
                const { dropped: t, className: n } = e;
                return o.createElement(r.Icon, {
                    className: i(n, s.icon, { [s.dropped]: t }),
                    icon: a,
                });
            }
        },
        40173: (e, t, n) => {
            "use strict";
            function o(e, t, n = {}) {
                const o = Object.assign({}, t);
                for (const i of Object.keys(t)) {
                    const r = n[i] || i;
                    r in e && (o[i] = [e[r], t[i]].join(" "));
                }
                return o;
            }
            function i(e, t, n = {}) {
                return Object.assign({}, e, o(e, t, n));
            }
            n.d(t, { weakComposeClasses: () => o, mergeThemes: () => i });
        },
        81268: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
        },
        37257: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
        },
        74471: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
        },
        21031: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M11.85 11.93A5.48 5.48 0 0 0 8 2.5a5.5 5.5 0 1 0 3.85 9.43zm0 0L16 16"/></svg>';
        },
        5639: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
        },
        20614: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
        },
        55783: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
        },
    },
]);
