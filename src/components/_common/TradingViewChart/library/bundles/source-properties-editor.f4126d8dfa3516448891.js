(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [6780],
    {
        84662: (e) => {
            e.exports = {
                defaultsButtonText: "defaultsButtonText-4BZduqY4",
                defaultsButtonItem: "defaultsButtonItem-4BZduqY4",
                defaultsButtonIcon: "defaultsButtonIcon-4BZduqY4",
            };
        },
        85623: (e) => {
            e.exports = {
                themesButtonText: "themesButtonText-KBqedPzF",
                themesButtonIcon: "themesButtonIcon-KBqedPzF",
                defaultsButtonText: "defaultsButtonText-KBqedPzF",
                defaultsButtonItem: "defaultsButtonItem-KBqedPzF",
            };
        },
        27492: (e) => {
            e.exports = { scrollable: "scrollable-szuZ9HSm" };
        },
        88401: (e) => {
            e.exports = {
                titleWrap: "titleWrap-a798UFpk",
                ellipsis: "ellipsis-a798UFpk",
                hideInput: "hideInput-a798UFpk",
                hideText: "hideText-a798UFpk",
                empty: "empty-a798UFpk",
                hideEmpty: "hideEmpty-a798UFpk",
                editIcon: "editIcon-a798UFpk",
            };
        },
        64886: (e) => {
            e.exports = { slider: "slider-Q7h4o6oW", inner: "inner-Q7h4o6oW" };
        },
        42545: (e) => {
            e.exports = {
                scrollWrap: "scrollWrap-VabV7Fn8",
                tabsWrap: "tabsWrap-VabV7Fn8",
                tabs: "tabs-VabV7Fn8",
                withoutBorder: "withoutBorder-VabV7Fn8",
                tab: "tab-VabV7Fn8",
                withHover: "withHover-VabV7Fn8",
                headerBottomSeparator: "headerBottomSeparator-VabV7Fn8",
                fadeWithoutSlider: "fadeWithoutSlider-VabV7Fn8",
                withBadge: "withBadge-VabV7Fn8",
            };
        },
        41814: (e) => {
            e.exports = {
                wrap: "wrap-sfzcrPlH",
                wrapWithArrowsOuting: "wrapWithArrowsOuting-sfzcrPlH",
                wrapOverflow: "wrapOverflow-sfzcrPlH",
                scrollWrap: "scrollWrap-sfzcrPlH",
                noScrollBar: "noScrollBar-sfzcrPlH",
                icon: "icon-sfzcrPlH",
                scrollLeft: "scrollLeft-sfzcrPlH",
                scrollRight: "scrollRight-sfzcrPlH",
                isVisible: "isVisible-sfzcrPlH",
                iconWrap: "iconWrap-sfzcrPlH",
                fadeLeft: "fadeLeft-sfzcrPlH",
                fadeRight: "fadeRight-sfzcrPlH",
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
        34290: (e, t, s) => {
            "use strict";
            s.d(t, { StudyDefaultsManager: () => m });
            var i = s(59496),
                o = s(97754),
                n = s.n(o),
                r = s(9745),
                a = s(28353),
                l = s(95276),
                c = s(16396),
                u = s(31328),
                d = s(84662);
            const h = {
                reset: (0, a.t)("Reset settings"),
                saveAsDefault: (0, a.t)("Save as default"),
                defaults: (0, a.t)("Defaults"),
            };
            class m extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleResetToDefaults = () => {
                            this.props.model.restorePropertiesForSource(
                                this.props.source
                            );
                        }),
                        (this._handleSaveAsDefaults = () => {
                            this.props.source.properties().saveDefaults();
                        });
                }
                render() {
                    const { mode: e } = this.props;
                    return i.createElement(
                        l.ControlDisclosure,
                        {
                            id: "study-defaults-manager",
                            className: n()(
                                "normal" === e && d.defaultsButtonText
                            ),
                            hideArrowButton: "compact" === e,
                            buttonChildren: this._getPlaceHolderItem(
                                "compact" === e
                            ),
                        },
                        i.createElement(c.PopupMenuItem, {
                            className: d.defaultsButtonItem,
                            isActive: !1,
                            label: h.reset,
                            onClick: this._handleResetToDefaults,
                        }),
                        i.createElement(c.PopupMenuItem, {
                            className: d.defaultsButtonItem,
                            isActive: !1,
                            label: h.saveAsDefault,
                            onClick: this._handleSaveAsDefaults,
                        })
                    );
                }
                _getPlaceHolderItem(e) {
                    return e
                        ? i.createElement(r.Icon, {
                              className: d.defaultsButtonIcon,
                              icon: u,
                          })
                        : h.defaults;
                }
            }
        },
        95275: (e, t, s) => {
            "use strict";
            s.d(t, { FooterMenu: () => d });
            var i = s(59496),
                o = s(28353),
                n = s(9745),
                r = s(95276),
                a = s(90692),
                l = s(85623),
                c = s(31328);
            function u(e) {
                return e.isTabletWidth
                    ? i.createElement(n.Icon, {
                          className: l.themesButtonIcon,
                          icon: c,
                      })
                    : i.createElement(i.Fragment, null, (0, o.t)("Template"));
            }
            function d(e) {
                return i.createElement(
                    a.MatchMedia,
                    { rule: "screen and (max-width: 768px)" },
                    (t) =>
                        i.createElement(
                            r.ControlDisclosure,
                            {
                                className: !t && l.themesButtonText,
                                hideArrowButton: t,
                                buttonChildren: i.createElement(u, {
                                    isTabletWidth: t,
                                }),
                            },
                            e.children
                        )
                );
            }
        },
        44e3: (e, t, s) => {
            "use strict";
            s.d(t, { TemplateMenuItem: () => c });
            var i = s(59496),
                o = s(16396),
                n = s(96040),
                r = s(70412),
                a = s(32563),
                l = s(85623);
            function c(e) {
                const { name: t, onRemove: s, onClick: c } = e,
                    [u, d] = (0, r.useHover)(),
                    h = i.useCallback(() => c(t), [c, t]),
                    m = i.useCallback(() => {
                        s && s(t);
                    }, [s, t]);
                return i.createElement(
                    "div",
                    { ...d },
                    i.createElement(o.PopupMenuItem, {
                        className: l.defaultsButtonItem,
                        isActive: !1,
                        label: t,
                        onClick: h,
                        toolbox:
                            s &&
                            i.createElement(n.RemoveButton, {
                                hidden: !a.mobiletouch && !u,
                                onClick: m,
                            }),
                    })
                );
            }
        },
        37289: (e, t, s) => {
            "use strict";
            s.d(t, { PropertiesEditorTab: () => c });
            var i = s(59496),
                o = s(66849);
            const n = {
                    "Elliott Impulse Wave (12345)Degree": "normal",
                    "Elliott Triangle Wave (ABCDE)Degree": "normal",
                    "Elliott Triple Combo Wave (WXYXZ)Degree": "normal",
                    "Elliott Correction Wave (ABC)Degree": "normal",
                    "Elliott Double Combo Wave (WXY)Degree": "normal",
                    BarsPatternMode: "normal",
                    StudyInputSource: "normal",
                },
                r = {
                    TextText: "big",
                    AnchoredTextText: "big",
                    NoteText: "big",
                    AnchoredNoteText: "big",
                    CalloutText: "big",
                    BalloonText: "big",
                };
            var a = s(35868),
                l = s(90545);
            function c(e) {
                const { page: t, pageRef: s, tableKey: c } = e;
                return i.createElement(
                    o.ControlCustomHeightContext.Provider,
                    { value: r },
                    i.createElement(
                        o.ControlCustomWidthContext.Provider,
                        { value: n },
                        t &&
                            i.createElement(
                                a.PropertyTable,
                                { reference: s, key: c },
                                t.definitions
                                    .value()
                                    .map((e) =>
                                        i.createElement(l.Section, {
                                            key: e.id,
                                            definition: e,
                                        })
                                    )
                            )
                    )
                );
            }
        },
        18460: (e, t, s) => {
            "use strict";
            s.d(t, { FooterMenu: () => l });
            var i = s(59496),
                o = (s(79049), s(28353)),
                n = s(95275),
                r = s(44e3);
            function a(e) {
                const { model: t, source: s } = e;
                return i.createElement(
                    n.FooterMenu,
                    null,
                    i.createElement(r.TemplateMenuItem, {
                        onClick: function () {
                            t.restorePropertiesForSource(s);
                        },
                        name: (0, o.t)("Apply Defaults"),
                    })
                );
            }
            function l(e) {
                return i.createElement(a, { ...e });
            }
        },
        75892: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { SourcePropertiesEditorRenderer: () => k });
            var i = s(28353),
                o = s(59496),
                n = s(87995),
                r = s(76422),
                a = s(88537),
                l = s(49483),
                c = s(56840),
                u = s.n(c),
                d = s(50182),
                h = s(59064),
                m = s(31807),
                p = s(18460),
                f = s(86656),
                _ = s(14291),
                g = s(34290),
                b = s(47443),
                v = s(56972),
                C = s(89857),
                S = s(66101),
                T = s(90692),
                w = s(37289),
                E = s(24980),
                P = s(46627),
                B = s(68495),
                I = s(67337),
                M = s(27492);
            const y = new E.TranslatedString(
                "change {sourceTitle} title to {newSourceTitle}",
                (0, i.t)("change {sourceTitle} title to {newSourceTitle}")
            );
            class D extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._activePageRef = o.createRef()),
                        (this._lineToolsAffectChartInvalidation =
                            new P.FeatureToggleWatchedValue(
                                "do_not_invalidate_chart_on_changing_line_tools",
                                !1
                            )),
                        (this._handleChangeMode = (e) => {
                            this.setState({ isRenaming: e });
                        }),
                        (this._getTranslatedStringForSource = (e) =>
                            new E.TranslatedString(e.name(), e.title())),
                        (this._setTitle = (e) => {
                            const { source: t, model: s } = this.props,
                                i = y.format({
                                    sourceTitle:
                                        t.properties().title.value() ||
                                        this._getTranslatedStringForSource(t),
                                    newSourceTitle: e,
                                });
                            s.setProperty(
                                t.properties().title,
                                e,
                                i,
                                this._lineToolsAffectChartInvalidation.value()
                            );
                        }),
                        (this._getActionPageById = (e) => {
                            if (!e) return;
                            const { pages: t } = this.props;
                            return t.find(
                                (t) => t.id.toLowerCase() === e.toLowerCase()
                            );
                        }),
                        (this._onChangeActivePageDefinitions = () => {
                            this.setState({ tableKey: Date.now() }, () => {
                                this._requestResize && this._requestResize();
                            });
                        }),
                        (this._renderFooterLeft = () => {
                            const { source: e, model: t } = this.props;
                            return (0, _.isLineTool)(e)
                                ? o.createElement(p.FooterMenu, {
                                      source: e,
                                      model: t,
                                  })
                                : o.createElement(
                                      T.MatchMedia,
                                      { rule: "screen and (max-width: 428px)" },
                                      (s) =>
                                          (0, b.isStudy)(e) &&
                                          o.createElement(
                                              g.StudyDefaultsManager,
                                              {
                                                  model: t,
                                                  source: e,
                                                  mode: s
                                                      ? "compact"
                                                      : "normal",
                                              }
                                          )
                                  );
                        }),
                        (this._subscribe = (e) => {
                            e &&
                                e.definitions.subscribe(
                                    this._onChangeActivePageDefinitions
                                );
                        }),
                        (this._unsubscribe = (e) => {
                            e &&
                                e.definitions.unsubscribe(
                                    this._onChangeActivePageDefinitions
                                );
                        }),
                        (this._getActiveTabSettingsName = () => {
                            const { source: e } = this.props;
                            return e instanceof v.Series
                                ? "properties_dialog.active_tab.chart"
                                : e instanceof C.LineDataSource
                                ? "properties_dialog.active_tab.drawing"
                                : e instanceof S.Study
                                ? "properties_dialog.active_tab.study"
                                : "";
                        }),
                        (this._handleSelectPage = (e) => {
                            const { activePageId: t } = this.state,
                                s = this._getActionPageById(t),
                                i = this._getActionPageById(e),
                                o = this._getActiveTabSettingsName();
                            t !== e &&
                                (this._unsubscribe(s),
                                o && u().setValue(o, e),
                                this._subscribe(i),
                                this.setState(
                                    { activePageId: e, tableKey: Date.now() },
                                    () => {
                                        this._requestResize &&
                                            this._requestResize(),
                                            this._focusActivePageFirstTextInput();
                                    }
                                ));
                        }),
                        (this._handleScroll = () => {
                            h.globalCloseDelegate.fire();
                        }),
                        (this._handleSubmit = () => {
                            this.props.onSubmit(), this._closePopupDialog();
                        }),
                        (this._closePopupDialog = () => {
                            window.lineToolPropertiesToolbar &&
                                window.lineToolPropertiesToolbar.refresh(),
                                this.props.onClose();
                        });
                    const { pages: t } = this.props;
                    let s;
                    if (this._getActionPageById(this.props.activePageId))
                        s = (0, a.ensureDefined)(this.props.activePageId);
                    else {
                        const e = u().getValue(
                                this._getActiveTabSettingsName(),
                                ""
                            ),
                            i = this._getActionPageById(e);
                        s = i ? i.id : t[0].id;
                    }
                    (this.state = {
                        activePageId: s,
                        tableKey: Date.now(),
                        isRenaming: !1,
                    }),
                        window.lineToolPropertiesToolbar &&
                            window.lineToolPropertiesToolbar.hide();
                }
                componentDidMount() {
                    const { activePageId: e } = this.state,
                        t = this._getActionPageById(e);
                    this._focusActivePageFirstTextInput(), this._subscribe(t);
                }
                componentWillUnmount() {
                    const { activePageId: e } = this.props,
                        t = this._getActionPageById(e);
                    clearTimeout(this._timeout), this._unsubscribe(t);
                }
                render() {
                    var e;
                    const { onCancel: t, source: s } = this.props,
                        { activePageId: i, isRenaming: n } = this.state,
                        r =
                            (null === (e = s.properties().title) || void 0 === e
                                ? void 0
                                : e.value()) || s.title(),
                        a = o.createElement(B.Title, {
                            isRenaming: n,
                            onChangeMode: this._handleChangeMode,
                            setTitle: this._setTitle,
                            defaultTitle: r,
                            canBeRenamed:
                                (0, _.isLineTool)(s) && !I.enabled("widget"),
                        });
                    return o.createElement(d.AdaptiveConfirmDialog, {
                        dataName: "source-properties-editor",
                        dataDialogName: r,
                        title: a,
                        isOpened: !0,
                        onSubmit: this._handleSubmit,
                        onCancel: t,
                        onClickOutside: this._handleSubmit,
                        onClose: this._closePopupDialog,
                        footerLeftRenderer: this._renderFooterLeft,
                        render: this._renderChildren(i),
                        submitOnEnterKey: !1,
                        showCloseIcon: !n,
                    });
                }
                _renderChildren(e) {
                    return ({ requestResize: t }) => {
                        this._requestResize = t;
                        const { pages: s } = this.props,
                            i = {
                                allIds: s.map((e) => e.id),
                                byId: s.reduce(
                                    (e, t) => ({
                                        ...e,
                                        [t.id]: { title: t.title },
                                    }),
                                    {}
                                ),
                            },
                            n = s.find((t) => t.id === e);
                        return o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(m.DialogTabs, {
                                activeTabId: e,
                                onSelect: this._handleSelectPage,
                                tabs: i,
                            }),
                            o.createElement(
                                f.TouchScrollContainer,
                                {
                                    className: M.scrollable,
                                    onScroll: this._handleScroll,
                                },
                                o.createElement(w.PropertiesEditorTab, {
                                    page: n,
                                    pageRef: this._activePageRef,
                                    tableKey: this.state.tableKey,
                                })
                            )
                        );
                    };
                }
                _focusActivePageFirstTextInput() {
                    if (!l.CheckMobile.any() && this._activePageRef.current) {
                        const e = this._activePageRef.current.querySelector(
                            "input[type=text],textarea"
                        );
                        e &&
                            (this._timeout = setTimeout(() => {
                                e.focus();
                            }, 0));
                    }
                }
            }
            var R = s(22729);
            class k extends R.DialogRenderer {
                constructor(e) {
                    super(),
                        (this._timeout = null),
                        (this._handleClose = () => {
                            n.unmountComponentAtNode(this._container),
                                this._setVisibility(!1),
                                this._onClose && this._onClose(),
                                this._subscription.unsubscribe(
                                    this,
                                    this._handleCollectionChanged
                                );
                        }),
                        (this._handleSubmit = () => {
                            const e = this._source;
                            (0, _.isLineTool)(e) &&
                                e.hasAlert.value() &&
                                setTimeout(() => {
                                    e.areLocalAndServerAlertsMismatch() &&
                                        e.synchronizeAlert(!0);
                                });
                        }),
                        (this._handleCancel = () => {
                            this._model.undoToCheckpoint(this._checkpoint);
                        }),
                        (this._propertyPages = e.propertyPages),
                        (this._model = e.model),
                        (this._activePageId = e.activePageId),
                        (this._onClose = e.onClose),
                        (this._source = e.source),
                        (this._checkpoint = this._ensureCheckpoint(
                            e.undoCheckPoint
                        )),
                        (this._subscription = this._model
                            .model()
                            .dataSourceCollectionChanged()),
                        this._subscription.subscribe(
                            this,
                            this._handleCollectionChanged
                        );
                }
                hide(e) {
                    e ? this._handleCancel() : this._handleSubmit(),
                        this._handleClose();
                }
                isVisible() {
                    return this.visible().value();
                }
                show() {
                    n.render(
                        o.createElement(D, {
                            source: this._source,
                            onSubmit: this._handleSubmit,
                            onClose: this._handleClose,
                            onCancel: this._handleCancel,
                            pages: this._propertyPages,
                            model: this._model,
                            activePageId: this._activePageId,
                        }),
                        this._container
                    ),
                        this._setVisibility(!0),
                        r.emit("drawings_settings_dialog", {
                            objectType: "drawing",
                            scriptTitle: this._source.title(),
                        });
                }
                _handleCollectionChanged() {
                    null === this._timeout &&
                        (this._timeout = setTimeout(() => {
                            this._closeDialogIfSourceIsDeleted(),
                                (this._timeout = null);
                        }));
                }
                _closeDialogIfSourceIsDeleted() {
                    null ===
                        this._model
                            .model()
                            .dataSourceForId(this._source.id()) &&
                        this._handleClose();
                }
                _ensureCheckpoint(e) {
                    return (
                        void 0 === e &&
                            (e = this._model.createUndoCheckpoint()),
                        e
                    );
                }
            }
        },
        68495: (e, t, s) => {
            "use strict";
            s.d(t, { Title: () => h });
            var i = s(59496),
                o = s(97754),
                n = s(31261),
                r = s(9745),
                a = s(54475),
                l = s(68335),
                c = s(51768),
                u = s(94669),
                d = s(88401);
            function h(e) {
                const {
                        isRenaming: t,
                        onChangeMode: s,
                        setTitle: h,
                        defaultTitle: m,
                        canBeRenamed: p,
                    } = e,
                    f = (0, i.useRef)(null),
                    [_, g] = (0, i.useState)(m),
                    [b, v] = (0, i.useState)(m);
                return (
                    (0, i.useEffect)(() => {
                        t &&
                            f.current &&
                            (f.current.focus(),
                            f.current.setSelectionRange(0, _.length));
                    }, [t]),
                    i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                            "div",
                            { className: o(d.titleWrap, t && d.hideText) },
                            i.createElement(
                                "span",
                                { className: d.ellipsis },
                                " ",
                                b
                            ),
                            p &&
                                i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(r.Icon, {
                                        className: o(d.editIcon),
                                        icon: u,
                                        onClick: function () {
                                            (0, c.trackEvent)(
                                                "GUI",
                                                "Rename",
                                                "Drawing settings"
                                            ),
                                                g(b),
                                                s(!0);
                                        },
                                        "data-name": "edit",
                                        "data-role": "button",
                                    }),
                                    i.createElement("div", {
                                        className: o(
                                            d.empty,
                                            !t && d.hideEmpty
                                        ),
                                    })
                                )
                        ),
                        p &&
                            i.createElement(
                                "div",
                                {
                                    className: o(!t && d.hideInput),
                                    "data-disable-drag": !0,
                                },
                                i.createElement(n.InputControl, {
                                    value: _,
                                    onChange: function (e) {
                                        g(e.currentTarget.value);
                                    },
                                    onBlur: C,
                                    reference: f,
                                    onClick: a.preventDefault,
                                    onKeyDown: function (e) {
                                        27 === (0, l.hashFromEvent)(e) &&
                                            (e.preventDefault(), g(m), s(!1));
                                        13 === (0, l.hashFromEvent)(e) &&
                                            (e.preventDefault(), C());
                                    },
                                    "data-disable-drag": !0,
                                    stretch: !0,
                                })
                            )
                    )
                );
                function C() {
                    "" !== _ && (h(_), v(_)), s(!1);
                }
            }
        },
        66512: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { SourcesPropertiesEditorRenderer: () => C });
            var i = s(59496),
                o = s(87995),
                n = s(28353),
                r = s(24980),
                a = s(22729),
                l = s(31807),
                c = s(86656),
                u = s(50182),
                d = s(95275),
                h = s(44e3),
                m = s(37289),
                p = s(68495),
                f = s(67337);
            const _ = (0, n.t)("Apply Defaults"),
                g = (0, n.t)("Selected Drawings");
            function b(e) {
                const {
                        propertyPages: t,
                        onSubmit: s,
                        onCancel: o,
                        onClose: n,
                        onApplyDefaults: r,
                        title: a,
                        activeTabId: b,
                        sources: v,
                        undoModel: C,
                        renamable: S,
                    } = e,
                    T =
                        b && t.filter((e) => e.id === b).length > 0
                            ? b
                            : t[0].id,
                    w = C.model().lineToolsGroupModel().groupForLineTool(v[0]),
                    E = !!(
                        S &&
                        w &&
                        a &&
                        v.every((e) => {
                            var t;
                            return (
                                (null == w ? void 0 : w.id) ===
                                (null ===
                                    (t = C.model()
                                        .lineToolsGroupModel()
                                        .groupForLineTool(e)) || void 0 === t
                                    ? void 0
                                    : t.id)
                            );
                        })
                    ),
                    [P, B] = (0, i.useState)(T),
                    [I, M] = (0, i.useState)(!1),
                    [y, D] = (0, i.useState)(a || g),
                    R = (0, i.useMemo)(
                        () => ({
                            allIds: t.map((e) => e.id),
                            byId: t.reduce(
                                (e, t) => ({
                                    ...e,
                                    [t.id]: { title: t.title },
                                }),
                                {}
                            ),
                        }),
                        [t]
                    );
                const k = i.createElement(p.Title, {
                    isRenaming: I,
                    onChangeMode: function (e) {
                        M(e);
                    },
                    setTitle: function (e) {
                        w && (w.setName(e), D(e));
                    },
                    defaultTitle: y,
                    canBeRenamed: E && !f.enabled("widget"),
                });
                return i.createElement(u.AdaptiveConfirmDialog, {
                    dataName: "sources-properties-editor",
                    dataDialogName: y,
                    title: k,
                    isOpened: !0,
                    onSubmit: s,
                    onCancel: o,
                    onClickOutside: n,
                    onClose: n,
                    footerLeftRenderer: function () {
                        return i.createElement(
                            d.FooterMenu,
                            null,
                            i.createElement(h.TemplateMenuItem, {
                                onClick: r,
                                name: _,
                            })
                        );
                    },
                    render: function () {
                        const e = t.find((e) => e.id === P);
                        return i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(l.DialogTabs, {
                                activeTabId: P,
                                onSelect: B,
                                tabs: R,
                            }),
                            i.createElement(
                                c.TouchScrollContainer,
                                null,
                                i.createElement(m.PropertiesEditorTab, {
                                    page: e,
                                    tableKey: P,
                                })
                            )
                        );
                    },
                    submitOnEnterKey: !1,
                    showCloseIcon: !I,
                });
            }
            const v = new r.TranslatedString(
                "apply factory defaults to selected sources",
                (0, n.t)("apply factory defaults to selected sources")
            );
            class C extends a.DialogRenderer {
                constructor(e) {
                    super(),
                        (this._dataSourceChangedPromise = null),
                        (this._submitHandler = () => {
                            Promise.resolve().then(() => {
                                this._sources.map((e) => {
                                    e.areLocalAndServerAlertsMismatch() &&
                                        e.synchronizeAlert(!0);
                                });
                            }),
                                this._close();
                        }),
                        (this._cancelHandler = () => {
                            this._undoModel.undoToCheckpoint(
                                this._undoCheckpoint
                            );
                        }),
                        (this._closeHandler = () => {
                            this._close();
                        }),
                        (this._applyDefaultsHandler = () => {
                            this._undoModel.beginUndoMacro(v),
                                this._sources.forEach((e) => {
                                    this._undoModel.restorePropertiesForSource(
                                        e
                                    );
                                }),
                                this._undoModel.endUndoMacro();
                        }),
                        (this._dataSourceCollectionChangedHandler = () => {
                            null === this._dataSourceChangedPromise &&
                                (this._dataSourceChangedPromise =
                                    Promise.resolve().then(() => {
                                        const e = this._undoModel.model();
                                        this._sources.find(
                                            (t) =>
                                                null ===
                                                e.dataSourceForId(t.id())
                                        ) && this._close(),
                                            (this._dataSourceChangedPromise =
                                                null);
                                    }));
                        }),
                        (this._sources = e.sources),
                        (this._propertyPages = e.propertyPages),
                        (this._undoModel = e.undoModel),
                        (this._title = e.title),
                        (this._activeTabId = e.activeTabId),
                        (this._renamable = e.renamable),
                        (this._undoCheckpoint =
                            this._undoModel.createUndoCheckpoint()),
                        this._undoModel
                            .model()
                            .dataSourceCollectionChanged()
                            .subscribe(
                                this,
                                this._dataSourceCollectionChangedHandler
                            );
                }
                destroy() {
                    this._close();
                }
                show() {
                    this._isVisible() ||
                        (this._mount(), this._setVisibility(!0));
                }
                hide() {
                    this._isVisible() &&
                        (this._unmount(), this._setVisibility(!1));
                }
                _mount() {
                    o.render(
                        i.createElement(b, {
                            propertyPages: this._propertyPages,
                            sources: this._sources,
                            undoModel: this._undoModel,
                            onSubmit: this._submitHandler,
                            onCancel: this._cancelHandler,
                            onClose: this._closeHandler,
                            onApplyDefaults: this._applyDefaultsHandler,
                            title: this._title,
                            activeTabId: this._activeTabId,
                            renamable: this._renamable,
                        }),
                        this._container
                    );
                }
                _unmount() {
                    o.unmountComponentAtNode(this._container);
                }
                _isVisible() {
                    return this.visible().value();
                }
                _close() {
                    this.hide(),
                        this._undoModel
                            .model()
                            .dataSourceCollectionChanged()
                            .unsubscribe(
                                this,
                                this._dataSourceCollectionChangedHandler
                            );
                }
            }
        },
        31807: (e, t, s) => {
            "use strict";
            s.d(t, { DialogTabs: () => p });
            var i = s(59496),
                o = s(97754),
                n = s(64205),
                r = s(40173),
                a = s(64886);
            const l = (0, r.mergeThemes)(n.DEFAULT_SLIDER_THEME, a);
            var c = s(39440),
                u = s(32563),
                d = s(42545);
            const h = d,
                m = (0, n.factory)(function (e) {
                    return i.createElement(
                        "div",
                        { className: l.slider, ref: e.reference },
                        i.createElement("div", { className: l.inner })
                    );
                });
            class p extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._createClickHandler = (e) => () => {
                            this.props.onSelect(e);
                        });
                }
                render() {
                    const {
                            theme: e = h,
                            hiddenBottomBorders: t,
                            fadedSlider: s = !0,
                            ScrollComponent: n = c.HorizontalScroll,
                        } = this.props,
                        r = this._generateDialogTabs();
                    return i.createElement(
                        "div",
                        { className: o(e.scrollWrap) },
                        !t &&
                            i.createElement("div", {
                                className: e.headerBottomSeparator,
                            }),
                        i.createElement(
                            n,
                            {
                                isVisibleFade: u.mobiletouch,
                                isVisibleButtons: !u.mobiletouch,
                                isVisibleScrollbar: !1,
                                fadeClassName: o({ [e.fadeWithoutSlider]: !s }),
                            },
                            i.createElement(
                                "div",
                                { className: e.tabsWrap },
                                i.createElement(
                                    m,
                                    {
                                        className: o(
                                            e.tabs,
                                            t && e.withoutBorder
                                        ),
                                    },
                                    r
                                )
                            )
                        )
                    );
                }
                _generateDialogTabs() {
                    const {
                        activeTabId: e,
                        tabs: t,
                        theme: s = h,
                    } = this.props;
                    return t.allIds.map((r) => {
                        const a = e === r,
                            l = t.byId[r].withNotificationsBadge;
                        return i.createElement(
                            n.SliderItem,
                            {
                                key: r,
                                value: r,
                                className: o(
                                    s.tab,
                                    !a && s.withHover,
                                    l && d.withBadge
                                ),
                                isActive: a,
                                onClick: this._createClickHandler(r),
                            },
                            t.byId[r].title
                        );
                    });
                }
            }
        },
        39440: (e, t, s) => {
            "use strict";
            s.d(t, { HorizontalScroll: () => v });
            var i = s(59496),
                o = s(97754),
                n = s(9837),
                r = s(88537),
                a = s(9745),
                l = s(59199),
                c = s(68587),
                u = s(62820),
                d = s(33086),
                h = s(41814);
            const m = {
                isVisibleScrollbar: !0,
                shouldMeasure: !0,
                hideButtonsFrom: 1,
            };
            function p(e) {
                return i.createElement("div", {
                    className: o(h.fadeLeft, e.className, {
                        [h.isVisible]: e.isVisible,
                    }),
                });
            }
            function f(e) {
                return i.createElement("div", {
                    className: o(h.fadeRight, e.className, {
                        [h.isVisible]: e.isVisible,
                    }),
                });
            }
            function _(e) {
                return i.createElement(b, { ...e, className: h.scrollLeft });
            }
            function g(e) {
                return i.createElement(b, { ...e, className: h.scrollRight });
            }
            function b(e) {
                return i.createElement(
                    "div",
                    {
                        className: o(e.className, {
                            [h.isVisible]: e.isVisible,
                        }),
                        onClick: e.onClick,
                    },
                    i.createElement(
                        "div",
                        { className: h.iconWrap },
                        i.createElement(a.Icon, { icon: d, className: h.icon })
                    )
                );
            }
            const v = (function (e = _, t = g, s = p, a = f) {
                var d;
                return (
                    ((d = class extends i.PureComponent {
                        constructor(e) {
                            super(e),
                                (this._scroll = i.createRef()),
                                (this._wrapMeasureRef = i.createRef()),
                                (this._contentMeasureRef = i.createRef()),
                                (this._handleScrollLeft = () => {
                                    if (this.props.onScrollButtonClick)
                                        return void this.props.onScrollButtonClick(
                                            "left"
                                        );
                                    const e =
                                        this.props.scrollStepSize ||
                                        this.state.widthWrap - 50;
                                    this.animateTo(
                                        Math.max(0, this.currentPosition() - e)
                                    );
                                }),
                                (this._handleScrollRight = () => {
                                    if (this.props.onScrollButtonClick)
                                        return void this.props.onScrollButtonClick(
                                            "right"
                                        );
                                    const e =
                                        this.props.scrollStepSize ||
                                        this.state.widthWrap - 50;
                                    this.animateTo(
                                        Math.min(
                                            (this.state.widthContent || 0) -
                                                (this.state.widthWrap || 0),
                                            this.currentPosition() + e
                                        )
                                    );
                                }),
                                (this._handleResizeWrap = (e) => {
                                    this.props.onMeasureWrap &&
                                        this.props.onMeasureWrap(e),
                                        this.setState({ widthWrap: e.width }),
                                        this._checkButtonsVisibility();
                                }),
                                (this._handleResizeContent = (e) => {
                                    this.props.onMeasureContent &&
                                        this.props.onMeasureContent(e);
                                    const {
                                        shouldDecreaseWidthContent: t,
                                        buttonsWidthIfDecreasedWidthContent: s,
                                    } = this.props;
                                    t && s
                                        ? this.setState({
                                              widthContent: e.width + 2 * s,
                                          })
                                        : this.setState({
                                              widthContent: e.width,
                                          });
                                }),
                                (this._handleScroll = () => {
                                    const { onScroll: e } = this.props;
                                    e &&
                                        e(
                                            this.currentPosition(),
                                            this.isAtLeft(),
                                            this.isAtRight()
                                        ),
                                        this._checkButtonsVisibility();
                                }),
                                (this._checkButtonsVisibility = () => {
                                    const {
                                            isVisibleLeftButton: e,
                                            isVisibleRightButton: t,
                                        } = this.state,
                                        s = this.isAtLeft(),
                                        i = this.isAtRight();
                                    s || e
                                        ? s &&
                                          e &&
                                          this.setState({
                                              isVisibleLeftButton: !1,
                                          })
                                        : this.setState({
                                              isVisibleLeftButton: !0,
                                          }),
                                        i || t
                                            ? i &&
                                              t &&
                                              this.setState({
                                                  isVisibleRightButton: !1,
                                              })
                                            : this.setState({
                                                  isVisibleRightButton: !0,
                                              });
                                }),
                                (this.state = {
                                    widthContent: 0,
                                    widthWrap: 0,
                                    isVisibleRightButton: !1,
                                    isVisibleLeftButton: !1,
                                });
                        }
                        componentDidMount() {
                            this._checkButtonsVisibility();
                        }
                        componentDidUpdate(e, t) {
                            (t.widthWrap === this.state.widthWrap &&
                                t.widthContent === this.state.widthContent) ||
                                this._handleScroll(),
                                this.props.shouldMeasure &&
                                    this._wrapMeasureRef.current &&
                                    this._contentMeasureRef.current &&
                                    (this._wrapMeasureRef.current.measure(),
                                    this._contentMeasureRef.current.measure());
                        }
                        currentPosition() {
                            return this._scroll.current
                                ? (0, u.isRtl)()
                                    ? (0, u.getLTRScrollLeft)(
                                          this._scroll.current
                                      )
                                    : this._scroll.current.scrollLeft
                                : 0;
                        }
                        isAtLeft() {
                            return (
                                !this._isOverflowed() ||
                                this.currentPosition() <=
                                    (0, r.ensureDefined)(
                                        this.props.hideButtonsFrom
                                    )
                            );
                        }
                        isAtRight() {
                            return (
                                !this._isOverflowed() ||
                                this.currentPosition() + this.state.widthWrap >=
                                    this.state.widthContent -
                                        (0, r.ensureDefined)(
                                            this.props.hideButtonsFrom
                                        )
                            );
                        }
                        animateTo(e, t = c.dur) {
                            const s = this._scroll.current;
                            s &&
                                ((0, u.isRtl)() &&
                                    (e = (0, u.getLTRScrollLeftOffset)(s, e)),
                                t <= 0
                                    ? (s.scrollLeft = Math.round(e))
                                    : (0, l.doAnimate)({
                                          onStep(e, t) {
                                              s.scrollLeft = Math.round(t);
                                          },
                                          from: s.scrollLeft,
                                          to: Math.round(e),
                                          easing: c.easingFunc.easeInOutCubic,
                                          duration: t,
                                      }));
                        }
                        render() {
                            const {
                                    children: r,
                                    isVisibleScrollbar: l,
                                    isVisibleFade: c,
                                    isVisibleButtons: u,
                                    shouldMeasure: d,
                                    shouldDecreaseWidthContent: m,
                                    buttonsWidthIfDecreasedWidthContent: p,
                                    onMouseOver: f,
                                    onMouseOut: _,
                                    scrollWrapClassName: g,
                                    fadeClassName: b,
                                } = this.props,
                                {
                                    isVisibleRightButton: v,
                                    isVisibleLeftButton: C,
                                } = this.state,
                                S = m && p;
                            return i.createElement(
                                n,
                                {
                                    whitelist: ["width"],
                                    onMeasure: this._handleResizeWrap,
                                    shouldMeasure: d,
                                    ref: this._wrapMeasureRef,
                                },
                                i.createElement(
                                    "div",
                                    {
                                        className: h.wrapOverflow,
                                        onMouseOver: f,
                                        onMouseOut: _,
                                    },
                                    i.createElement(
                                        "div",
                                        {
                                            className: o(
                                                h.wrap,
                                                S ? h.wrapWithArrowsOuting : ""
                                            ),
                                        },
                                        i.createElement(
                                            "div",
                                            {
                                                className: o(h.scrollWrap, g, {
                                                    [h.noScrollBar]: !l,
                                                }),
                                                onScroll: this._handleScroll,
                                                ref: this._scroll,
                                            },
                                            i.createElement(
                                                n,
                                                {
                                                    onMeasure:
                                                        this
                                                            ._handleResizeContent,
                                                    whitelist: ["width"],
                                                    shouldMeasure: d,
                                                    ref: this
                                                        ._contentMeasureRef,
                                                },
                                                r
                                            )
                                        ),
                                        c &&
                                            i.createElement(s, {
                                                isVisible: C,
                                                className: b,
                                            }),
                                        c &&
                                            i.createElement(a, {
                                                isVisible: v,
                                                className: b,
                                            }),
                                        u &&
                                            i.createElement(e, {
                                                onClick: this._handleScrollLeft,
                                                isVisible: C,
                                            }),
                                        u &&
                                            i.createElement(t, {
                                                onClick:
                                                    this._handleScrollRight,
                                                isVisible: v,
                                            })
                                    )
                                )
                            );
                        }
                        _isOverflowed() {
                            const { widthContent: e, widthWrap: t } =
                                this.state;
                            return e > t;
                        }
                    }).defaultProps = m),
                    d
                );
            })(_, g, p, f);
        },
        64205: (e, t, s) => {
            "use strict";
            s.d(t, {
                DEFAULT_SLIDER_THEME: () => a,
                SliderItem: () => l,
                factory: () => c,
            });
            var i = s(59496),
                o = s(97754),
                n = s(88537),
                r = s(37740);
            const a = r;
            function l(e) {
                const t = o(e.className, r.tab, {
                    [r.active]: e.isActive,
                    [r.disabled]: e.isDisabled,
                    [r.defaultCursor]: !!e.shouldUseDefaultCursor,
                    [r.noBorder]: !!e.noBorder,
                });
                return i.createElement(
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
                return class extends i.PureComponent {
                    constructor() {
                        super(...arguments),
                            (this.activeTab = { current: null });
                    }
                    componentDidUpdate() {
                        ((0, n.ensureNotNull)(this._slider).style.transition =
                            "transform 350ms"),
                            this._componentDidUpdate();
                    }
                    componentDidMount() {
                        this._componentDidUpdate();
                    }
                    render() {
                        const { className: t } = this.props,
                            s = this._generateTabs();
                        return i.createElement(
                            "div",
                            {
                                className: o(t, r.tabs),
                                "data-name": this.props["data-name"],
                            },
                            s,
                            i.createElement(e, {
                                reference: (e) => {
                                    this._slider = e;
                                },
                            })
                        );
                    }
                    _generateTabs() {
                        return (
                            (this.activeTab.current = null),
                            i.Children.map(this.props.children, (e) => {
                                const t = e,
                                    s = Boolean(t.props.isActive),
                                    o = {
                                        reference: (e) => {
                                            s && (this.activeTab.current = e),
                                                t.props.reference &&
                                                    t.props.reference(e);
                                        },
                                    };
                                return i.cloneElement(t, o);
                            })
                        );
                    }
                    _componentDidUpdate() {
                        const e = (0, n.ensureNotNull)(this._slider).style;
                        if (this.activeTab.current) {
                            const t = this.activeTab.current.offsetWidth,
                                s = this.activeTab.current.offsetLeft;
                            (e.transform = `translateX(${s}px)`),
                                (e.width = t + "px"),
                                (e.opacity = "1");
                        } else e.opacity = "0";
                    }
                };
            }
            c(function (e) {
                return i.createElement("div", {
                    className: r.slider,
                    ref: e.reference,
                });
            });
        },
        33086: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
        },
        94669: (e) => {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
        },
    },
]);
