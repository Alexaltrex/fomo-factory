"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [607],
    {
        96457: (e, t, i) => {
            i.r(t), i.d(t, { RegressionTrendDefinitionsViewModel: () => C });
            var n = i(28353),
                o = i(24980),
                s = (i(94419), i(50366)),
                r = i(26667),
                l = i(80054);
            const a = new o.TranslatedString(
                    "change {title} base line visibility",
                    (0, n.t)("change {title} base line visibility")
                ),
                p = new o.TranslatedString(
                    "change {title} base line color",
                    (0, n.t)("change {title} base line color")
                ),
                c = new o.TranslatedString(
                    "change {title} base line width",
                    (0, n.t)("change {title} base line width")
                ),
                u = new o.TranslatedString(
                    "change {title} base line style",
                    (0, n.t)("change {title} base line style")
                ),
                y = new o.TranslatedString(
                    "change {title} up line visibility",
                    (0, n.t)("change {title} up line visibility")
                ),
                d = new o.TranslatedString(
                    "change {title} up line color",
                    (0, n.t)("change {title} up line color")
                ),
                h = new o.TranslatedString(
                    "change {title} up line width",
                    (0, n.t)("change {title} up line width")
                ),
                f = new o.TranslatedString(
                    "change {title} up line style",
                    (0, n.t)("change {title} up line style")
                ),
                _ = new o.TranslatedString(
                    "change {title} down line visibility",
                    (0, n.t)("change {title} down line visibility")
                ),
                m = new o.TranslatedString(
                    "change {title} down line color",
                    (0, n.t)("change {title} down line color")
                ),
                S = new o.TranslatedString(
                    "change {title} down line width",
                    (0, n.t)("change {title} down line width")
                ),
                g = new o.TranslatedString(
                    "change {title} down line style",
                    (0, n.t)("change {title} down line style")
                ),
                P = new o.TranslatedString(
                    "change {title} extend lines",
                    (0, n.t)("change {title} extend lines")
                ),
                v = new o.TranslatedString(
                    "change {title} show pearson's r",
                    (0, n.t)("change {title} show pearson's r")
                ),
                b = (0, n.t)("Base"),
                D = (0, n.t)("Up"),
                w = (0, n.t)("Down"),
                I = (0, n.t)("Pearson's R"),
                T = (0, n.t)("Extend lines");
            class C extends r.StudyLineDataSourceDefinitionsViewModel {
                constructor(e, t) {
                    super(e, t);
                }
                _stylePropertyDefinitions() {
                    const e = this._source
                            .properties()
                            .childs()
                            .styles.childs(),
                        t = this._source.name(),
                        i = (0, l.removeSpaces)(t),
                        n = new o.TranslatedString(t, this._source.title()),
                        r = e.baseLine.childs(),
                        C = (0, s.createLinePropertyDefinition)(
                            {
                                checked: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    r.visible,
                                    a.format({ title: n })
                                ),
                                color: (0, s.getColorDefinitionProperty)(
                                    this._propertyApplier,
                                    r.color,
                                    e.transparency,
                                    p.format({ title: n })
                                ),
                                width: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    r.linewidth,
                                    c.format({ title: n })
                                ),
                                style: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    r.linestyle,
                                    u.format({ title: n })
                                ),
                            },
                            { id: i + "BaseLine", title: b }
                        ),
                        M = e.upLine.childs(),
                        k = (0, s.createLinePropertyDefinition)(
                            {
                                checked: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    M.visible,
                                    y.format({ title: n })
                                ),
                                color: (0, s.getColorDefinitionProperty)(
                                    this._propertyApplier,
                                    M.color,
                                    e.transparency,
                                    d.format({ title: n })
                                ),
                                width: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    M.linewidth,
                                    h.format({ title: n })
                                ),
                                style: (0, s.convertToDefinitionProperty)(
                                    this._propertyApplier,
                                    M.linestyle,
                                    f.format({ title: n })
                                ),
                            },
                            { id: i + "UpLine", title: D }
                        ),
                        A = e.downLine.childs();
                    return {
                        definitions: [
                            C,
                            k,
                            (0, s.createLinePropertyDefinition)(
                                {
                                    checked: (0, s.convertToDefinitionProperty)(
                                        this._propertyApplier,
                                        A.visible,
                                        _.format({ title: n })
                                    ),
                                    color: (0, s.getColorDefinitionProperty)(
                                        this._propertyApplier,
                                        A.color,
                                        e.transparency,
                                        m.format({ title: n })
                                    ),
                                    width: (0, s.convertToDefinitionProperty)(
                                        this._propertyApplier,
                                        A.linewidth,
                                        S.format({ title: n })
                                    ),
                                    style: (0, s.convertToDefinitionProperty)(
                                        this._propertyApplier,
                                        A.linestyle,
                                        g.format({ title: n })
                                    ),
                                },
                                { id: i + "DownLine", title: w }
                            ),
                            (0, s.createCheckablePropertyDefinition)(
                                {
                                    checked: (0, s.convertToDefinitionProperty)(
                                        this._propertyApplier,
                                        e.extendLines,
                                        P.format({ title: n })
                                    ),
                                },
                                { id: i + "ExtendLines", title: T }
                            ),
                            (0, s.createCheckablePropertyDefinition)(
                                {
                                    checked: (0, s.convertToDefinitionProperty)(
                                        this._propertyApplier,
                                        e.showPearsons,
                                        v.format({ title: n })
                                    ),
                                },
                                { id: i + "Pearsons", title: I }
                            ),
                        ],
                    };
                }
            }
        },
        26667: (e, t, i) => {
            i.r(t),
                i.d(t, { StudyLineDataSourceDefinitionsViewModel: () => u });
            var n = i(28353),
                o = (i(94419), i(2872)),
                s = i.n(o),
                r = i(50366),
                l = i(68623),
                a = i(56756),
                p = i(40169),
                c = i(80054);
            class u extends l.LineDataSourceDefinitionsViewModel {
                constructor(e, t) {
                    super(e, t);
                }
                _inputsPropertyDefinitions() {
                    return {
                        definitions: [
                            (0, r.createStudyInputsPropertyDefinition)(
                                {},
                                {
                                    id: "StudyInputs",
                                    inputs: new a.MetaInfoHelper(
                                        this._source.metaInfo()
                                    ).getUserEditableInputs(),
                                    inputsTabProperty:
                                        this._source.properties(),
                                    model: this._undoModel,
                                    source: {
                                        isInputsStudy: !0,
                                        symbolsResolved: () => new (s())(),
                                        resolvedSymbolInfoBySymbol: (e) => null,
                                    },
                                }
                            ),
                        ],
                    };
                }
                _coordinatesPropertyDefinitions() {
                    const e = this._source.points(),
                        t = this._source.pointsProperty().childs().points,
                        i = [];
                    return (
                        e.forEach((e, o) => {
                            const s = t[o].childs();
                            if (!s) return;
                            const l = (0, p.getCoordinateXMetaInfo)(
                                this._propertyApplier,
                                s
                            );
                            i.push(
                                (0, r.createCoordinatesPropertyDefinition)(
                                    { x: l.property },
                                    {
                                        id: (0, c.removeSpaces)(
                                            `${this._source.name()}Point${o}`
                                        ),
                                        title: (0, n.t)("#{count} (bar)", {
                                            context: "linetool point",
                                        }).format({
                                            count: (o + 1).toString(),
                                        }),
                                        ...l.info,
                                    }
                                )
                            );
                        }),
                        { definitions: i }
                    );
                }
            }
        },
        55976: (e, t, i) => {
            i.r(t), i.d(t, { StudyOverlayDefinitionsViewModel: () => H });
            var n = i(28353),
                o = i(24980),
                s = i(88537),
                r = (i(94419), i(67337)),
                l = i(50366),
                a = i(80331),
                p = i(52714),
                c = i.n(p),
                u = i(80054);
            const y = new o.TranslatedString(
                "change {inputName} property",
                (0, n.t)("change {inputName} property")
            );
            function d(e, t) {
                const i = e.id;
                return (
                    "first_visible_bar_time" !== i &&
                    "last_visible_bar_time" !== i &&
                    "time" !== e.type &&
                    !e.isHidden &&
                    !(t && !e.confirm) &&
                    void 0 === e.groupId
                );
            }
            function h(e) {
                return (
                    e.name ||
                    (0, u.capitalizeFirstLetterInWord)(e.id.toLowerCase())
                );
            }
            function f(e) {
                return (0, n.t)(e, { context: "input" });
            }
            var _ = i(87387),
                m = i(67072),
                S = i.n(m),
                g = i(9315),
                P = i(80975);
            const v = (0, n.t)("Style"),
                b = (0, n.t)("Inputs"),
                D = (0, n.t)("Visibility"),
                w = [
                    "1",
                    "3",
                    "5",
                    "15",
                    "30",
                    "45",
                    "60",
                    "120",
                    "180",
                    "240",
                    "1D",
                    "1W",
                    "1M",
                ].map((e) => ({
                    value: e,
                    title: (0, g.getTranslatedResolutionModel)(e).hint,
                }));
            var I = i(16717),
                T = i(37667);
            const C = new o.TranslatedString(
                    "change study overlay style",
                    (0, n.t)("change study overlay style")
                ),
                M = new o.TranslatedString(
                    "change price line visibility",
                    (0, n.t)("change price line visibility")
                ),
                k = new o.TranslatedString(
                    "change study overlay min tick",
                    (0, n.t)("change study overlay min tick")
                ),
                A = (0, n.t)("Bars"),
                V = (0, n.t)("Candles"),
                L = (0, n.t)("Hollow candles"),
                x = (0, n.t)("Columns"),
                B = (0, n.t)("Line"),
                N = (0, n.t)("Area"),
                O = (0, n.t)("Baseline"),
                R = (0, n.t)("Style"),
                E = (0, n.t)("Price line"),
                W = (0, n.t)("Override min tick"),
                $ = [
                    { title: A, value: 0 },
                    { title: V, value: 1 },
                    { title: L, value: 9 },
                    { title: x, value: 13 },
                    { title: B, value: 2 },
                    { title: N, value: 3 },
                    { title: O, value: 10 },
                ];
            class H extends class {
                constructor(e, t) {
                    (this._inputSourceItems = null),
                        (this._propertyPages = []),
                        (this._sourceInput = null),
                        (this._source = t),
                        (this._undoModel = e);
                    const i = this._sortInputs(this._source.metaInfo().inputs);
                    for (const e of i)
                        "source" === e.type && (this._sourceInput = e);
                    this._createPropertyRages(),
                        null !== this._inputSourceItems &&
                            this._undoModel
                                .model()
                                .dataSourceCollectionChanged()
                                .subscribe(this, () => {
                                    null !== this._inputSourceItems &&
                                        this._inputSourceItems.setValue(
                                            this._getInputSourceItems()
                                        );
                                });
                }
                destroy() {
                    null !== this._inputSourceItems &&
                        this._undoModel
                            .model()
                            .dataSourceCollectionChanged()
                            .unsubscribeAll(this),
                        this._propertyPages.forEach((e) => {
                            (0, l.destroyDefinitions)(e.definitions.value());
                        });
                }
                propertyPages() {
                    return Promise.resolve(this._propertyPages);
                }
                _createPropertyRages() {
                    this._propertyPages = [];
                    const e = this._createInputsPropertyPage();
                    null !== e && this._propertyPages.push(e);
                    const t = this._createStylePropertyPage();
                    null !== t && this._propertyPages.push(t),
                        this._propertyPages.push(
                            this._createVisibilitiesPropertyPage()
                        );
                }
                _createStylePropertyPage() {
                    const e = this._stylePropertyDefinitions();
                    return null !== e
                        ? (0, a.createPropertyPage)(e, "style", v)
                        : null;
                }
                _createVisibilitiesPropertyPage() {
                    const e = this._source
                        .properties()
                        .childs()
                        .intervalsVisibilities.childs();
                    return (0, a.createPropertyPage)(
                        (0, P.getIntervalsVisibilitiesPropertiesDefinitions)(
                            this._undoModel,
                            e,
                            new o.TranslatedString(
                                this._source.name(!0),
                                this._source.title(!0)
                            )
                        ),
                        "visibility",
                        D
                    );
                }
                _stylePropertyDefinitions() {
                    return null;
                }
                _createInputsPropertyPage() {
                    const e = this._inputsPropertyDefinitions();
                    return null !== e
                        ? (0, a.createPropertyPage)(e, "inputs", b)
                        : null;
                }
                _inputsPropertyDefinitions() {
                    const e = this._sortInputs(this._source.metaInfo().inputs),
                        t = this._source.properties().childs().inputs.childs();
                    return (
                        null !== this._sourceInput &&
                            (this._inputSourceItems = new (c())(
                                this._getInputSourceItems()
                            )),
                        (function (e, t, i, r, a) {
                            const p = [];
                            for (const u of t) {
                                if (!d(u, r)) continue;
                                const t = h(u),
                                    _ = "StudyInput" + u.id,
                                    m = f(t),
                                    S = new o.TranslatedString(t, m);
                                let g = null;
                                if ("resolution" === u.type)
                                    g = (0, l.createOptionsPropertyDefinition)(
                                        {
                                            option: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        {
                                            id: _,
                                            title: m,
                                            options: new (c())(
                                                a.resolutionItems
                                            ),
                                        }
                                    );
                                else if ("source" === u.type) {
                                    const t = (0, s.ensure)(a.sourcesItems);
                                    g = (0, l.createOptionsPropertyDefinition)(
                                        {
                                            option: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        { id: _, title: m, options: t }
                                    );
                                } else if (
                                    "options" in u &&
                                    void 0 !== u.options
                                ) {
                                    const t = [];
                                    for (const e of u.options) {
                                        const i =
                                                (u.optionsTitles &&
                                                    u.optionsTitles[e]) ||
                                                e,
                                            o = (0, n.t)(i);
                                        t.push({ value: e, title: o });
                                    }
                                    g = (0, l.createOptionsPropertyDefinition)(
                                        {
                                            option: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        {
                                            id: _,
                                            title: m,
                                            options: new (c())(t),
                                        }
                                    );
                                } else if ("symbol" === u.type) {
                                    const t = i[u.id],
                                        n = (0, s.ensure)(
                                            a.getSymbolInfoBySymbol
                                        ),
                                        o = (0, s.ensure)(
                                            a.onSymbolsInfosChanged
                                        );
                                    g = (0, l.createSymbolPropertyDefinition)(
                                        {
                                            symbol: (0,
                                            l.getSymbolDefinitionProperty)(
                                                e,
                                                t,
                                                n,
                                                o,
                                                y.format({ inputName: S }),
                                                a.customSymbolInputSetter
                                            ),
                                        },
                                        { id: _, title: m }
                                    );
                                } else if ("session" === u.type)
                                    g = (0, l.createSessionPropertyDefinition)(
                                        {
                                            session: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        { id: _, title: m }
                                    );
                                else if ("bool" === u.type)
                                    g = (0,
                                    l.createCheckablePropertyDefinition)(
                                        {
                                            checked: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        { id: _, title: m }
                                    );
                                else if (
                                    "integer" === u.type ||
                                    "float" === u.type ||
                                    "price" === u.type
                                ) {
                                    const t = {
                                        id: _,
                                        title: m,
                                        type:
                                            "float" === u.type ||
                                            "price" === u.type
                                                ? 1
                                                : 0,
                                        defval: u.defval,
                                    };
                                    void 0 !== u.min &&
                                        (t.min = new (c())(u.min)),
                                        void 0 !== u.max &&
                                            (t.max = new (c())(u.max)),
                                        void 0 !== u.step &&
                                            isFinite(u.step) &&
                                            u.step > 0 &&
                                            (t.step = new (c())(u.step)),
                                        (g = (0,
                                        l.createNumberPropertyDefinition)(
                                            {
                                                value: (0,
                                                l.convertToDefinitionProperty)(
                                                    e,
                                                    i[u.id],
                                                    y.format({ inputName: S })
                                                ),
                                            },
                                            t
                                        ));
                                } else
                                    g = (0, l.createTextPropertyDefinition)(
                                        {
                                            text: (0,
                                            l.convertToDefinitionProperty)(
                                                e,
                                                i[u.id],
                                                y.format({ inputName: S })
                                            ),
                                        },
                                        {
                                            id: _,
                                            title: m,
                                            isEditable: !0,
                                            isMultiLine: !1,
                                        }
                                    );
                                p.push(g);
                            }
                            return 0 === p.length ? null : { definitions: p };
                        })(this._undoModel, e, t, !1, {
                            resolutionItems: w,
                            customSymbolInputSetter:
                                this._customSymbolInputSetter(),
                            getSymbolInfoBySymbol:
                                this._getSymbolInfoBySymbol.bind(this),
                            onSymbolsInfosChanged:
                                this._source.symbolsResolved(),
                            sourcesItems: this._inputSourceItems,
                        })
                    );
                }
                _sortInputs(e) {
                    return e;
                }
                _getInputSourceItems() {
                    const e = _.basePriceSources.slice(),
                        t = (0, s.ensureNotNull)(this._sourceInput);
                    if (this._source && this._source.isChildStudy()) {
                        const i = this._source.parentSource(),
                            n = i.title(),
                            o = S().getChildSourceInputTitles(
                                t,
                                i.metaInfo(),
                                n
                            );
                        for (const t of Object.keys(o))
                            e.push({ id: t, value: t, title: o[t] });
                    }
                    if (
                        r.enabled("study_on_study") &&
                        this._source &&
                        (this._source.isChildStudy() ||
                            S().canBeChild(this._source.metaInfo()))
                    ) {
                        const t = new Set([
                            this._source,
                            ...this._source.getAllChildren(),
                        ]);
                        this._undoModel
                            .model()
                            .allStudies()
                            .filter((e) => e.canHaveChildren() && !t.has(e))
                            .forEach((t) => {
                                const i = t.title(!0, void 0, !0),
                                    n = t.sourceId() || "#" + t.id(),
                                    o = t.metaInfo(),
                                    r = o.styles,
                                    l = o.plots || [];
                                if (1 === l.length)
                                    e.push({ id: n, value: n, title: i });
                                else if (l.length > 1) {
                                    const t = l.reduce((e, t, o) => {
                                        if (
                                            !S().canPlotBeSourceOfChildStudy(
                                                t.type
                                            )
                                        )
                                            return e;
                                        let l;
                                        try {
                                            l = (0, s.ensureDefined)(
                                                (0, s.ensureDefined)(r)[t.id]
                                            ).title;
                                        } catch (e) {
                                            l = t.id;
                                        }
                                        return {
                                            ...e,
                                            [`${n}$${o}`]: `${i}: ${l}`,
                                        };
                                    }, {});
                                    for (const i of Object.keys(t))
                                        e.push({
                                            id: i,
                                            value: i,
                                            title: t[i],
                                        });
                                }
                            });
                    }
                    return e;
                }
                _customSymbolInputSetter() {}
                _getSymbolInfoBySymbol(e) {
                    return this._source.resolvedSymbolInfoBySymbol(e.value());
                }
            } {
                constructor(e, t) {
                    super(e, t),
                        (this._stylesPropertyPage = null),
                        this.propertyPages().then((e) => {
                            this._stylesPropertyPage = e.filter(
                                (e) => "style" === e.id
                            )[0];
                        }),
                        this._source
                            .properties()
                            .childs()
                            .style.subscribe(this, (e) => {
                                var t;
                                null !== this._stylesPropertyPage &&
                                    ((0, l.destroyDefinitions)(
                                        this._stylesPropertyPage.definitions.value()
                                    ),
                                    this._stylesPropertyPage.definitions.setValue(
                                        this._stylePropertyDefinitions()
                                            .definitions
                                    )),
                                    null === (t = this._availableStylesWV) ||
                                        void 0 === t ||
                                        t.setValue(this._availableStyles());
                            });
                }
                destroy() {
                    this._source
                        .properties()
                        .childs()
                        .style.unsubscribeAll(this),
                        this._source.symbolResolved().unsubscribeAll(this),
                        super.destroy();
                }
                _customSymbolInputSetter() {
                    return (e) => {
                        this._undoModel.setSymbol(this._source, e);
                    };
                }
                _stylePropertyDefinitions() {
                    void 0 === this._availableStylesWV &&
                        ((this._availableStylesWV = new (c())(
                            this._availableStyles()
                        )),
                        this._source.symbolResolved().subscribe(this, () => {
                            var e;
                            null === (e = this._availableStylesWV) ||
                                void 0 === e ||
                                e.setValue(this._availableStyles());
                        }));
                    const e = this._source.properties().childs(),
                        t = (0, l.createOptionsPropertyDefinition)(
                            {
                                option: (0, l.convertToDefinitionProperty)(
                                    this._undoModel,
                                    e.style,
                                    C
                                ),
                            },
                            {
                                id: "StudyOverlayStyle",
                                title: R,
                                options: this._availableStylesWV,
                            }
                        ),
                        i = (0, l.createCheckablePropertyDefinition)(
                            {
                                checked: (0, l.convertToDefinitionProperty)(
                                    this._undoModel,
                                    e.showPriceLine,
                                    M
                                ),
                            },
                            { id: "StudyOverlayPriceLine", title: E }
                        ),
                        n = (0, l.createOptionsPropertyDefinition)(
                            {
                                option: (0, l.convertToDefinitionProperty)(
                                    this._undoModel,
                                    e.minTick,
                                    k
                                ),
                            },
                            {
                                id: "StudyOverlayMinTick",
                                title: W,
                                options: new (c())(
                                    (0, _.seriesPrecisionValues)()
                                ),
                            }
                        ),
                        o = (0, u.removeSpaces)(this._source.title());
                    return {
                        definitions: [
                            (0, l.createPropertyDefinitionsGeneralGroup)(
                                [t, ...this._getSeriesStylesDefinitions()],
                                "SeriesStyleGroup" + o
                            ),
                            i,
                            n,
                        ],
                    };
                }
                _getSeriesStylesDefinitions() {
                    const e = this._source.properties().childs();
                    return (0, I.getSeriesStylePropertiesDefinitions)(
                        this._undoModel,
                        e,
                        e.style.value(),
                        {
                            seriesPriceSources: _.basePriceSources,
                            lineStyleTypes: _.lineStyleTypes,
                            isJapaneseChartsAvailable: !1,
                        },
                        "mainSeries"
                    );
                }
                _availableStyles() {
                    const e = this._source.symbolInfo();
                    return $.map((t) =>
                        t.readonly
                            ? t
                            : {
                                  readonly: !1,
                                  value: t.value,
                                  title: t.title,
                                  disabled:
                                      (0, T.isCloseBasedSymbol)(e) &&
                                      !(0, T.isSingleValueBasedStyle)(t.value),
                              }
                    );
                }
            }
        },
    },
]);
