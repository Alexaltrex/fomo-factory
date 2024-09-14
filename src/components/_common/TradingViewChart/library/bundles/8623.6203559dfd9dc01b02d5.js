"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [8623],
    {
        40169: (e, t, i) => {
            i.d(t, {
                getCoordinateYMetaInfo: () => d,
                getCoordinateXMetaInfo: () => h,
                getCoordinatesPropertiesDefinitions: () => u,
            });
            var r = i(28353),
                o = i(24980),
                n = i(50366),
                s = i(52714),
                l = i.n(s),
                a = i(80054);
            const c = new o.TranslatedString(
                    "change price Y coordinate",
                    (0, r.t)("change price Y coordinate")
                ),
                p = new o.TranslatedString(
                    "change bar X coordinate",
                    (0, r.t)("change bar X coordinate")
                );
            function d(e, t, i) {
                return {
                    property: (0, n.convertToDefinitionProperty)(e, t.price, c),
                    info: { typeY: 1, stepY: i },
                };
            }
            function h(e, t) {
                return {
                    property: (0, n.convertToDefinitionProperty)(e, t.bar, p),
                    info: {
                        typeX: 0,
                        minX: new (l())(-5e4),
                        maxX: new (l())(15e3),
                        stepX: new (l())(1),
                    },
                };
            }
            function u(e, t, i, r, o, s) {
                const l = h(e, t),
                    c = d(e, t, r);
                return (0, n.createCoordinatesPropertyDefinition)(
                    { x: l.property, y: c.property },
                    {
                        id: (0, a.removeSpaces)(`${s}Coordinates${o}`),
                        title: o,
                        ...l.info,
                        ...c.info,
                    }
                );
            }
        },
        80975: (e, t, i) => {
            i.r(t),
                i.d(t, {
                    getIntervalsVisibilitiesPropertiesDefinitions: () => ce,
                    getSelectionIntervalsVisibilitiesPropertiesDefinition: () =>
                        pe,
                });
            var r = i(28353),
                o = i(24980),
                n = i(67337),
                s = i(50366),
                l = i(52714),
                a = i.n(l),
                c = i(9315),
                p = i(37865),
                d = i(98222);
            const h = new o.TranslatedString(
                    "change {title} visibility on ticks",
                    (0, r.t)("change {title} visibility on ticks")
                ),
                u = new o.TranslatedString(
                    "change {title} visibility on seconds",
                    (0, r.t)("change {title} visibility on seconds")
                ),
                y = new o.TranslatedString(
                    "change {title} seconds from",
                    (0, r.t)("change {title} seconds from")
                ),
                g = new o.TranslatedString(
                    "change {title} seconds to",
                    (0, r.t)("change {title} seconds to")
                ),
                P = new o.TranslatedString(
                    "change {title} visibility on minutes",
                    (0, r.t)("change {title} visibility on minutes")
                ),
                f = new o.TranslatedString(
                    "change {title} minutes from",
                    (0, r.t)("change {title} minutes from")
                ),
                w = new o.TranslatedString(
                    "change {title} minutes to",
                    (0, r.t)("change {title} minutes to")
                ),
                m = new o.TranslatedString(
                    "change {title} visibility on hours",
                    (0, r.t)("change {title} visibility on hours")
                ),
                b = new o.TranslatedString(
                    "change {title} hours from",
                    (0, r.t)("change {title} hours from")
                ),
                _ = new o.TranslatedString(
                    "change {title} hours to",
                    (0, r.t)("change {title} hours to")
                ),
                T = new o.TranslatedString(
                    "change {title} visibility on days",
                    (0, r.t)("change {title} visibility on days")
                ),
                S = new o.TranslatedString(
                    "change {title} days from",
                    (0, r.t)("change {title} days from")
                ),
                v = new o.TranslatedString(
                    "change {title} days to",
                    (0, r.t)("change {title} days to")
                ),
                C = new o.TranslatedString(
                    "change {title} visibility on weeks",
                    (0, r.t)("change {title} visibility on weeks")
                ),
                D = new o.TranslatedString(
                    "change {title} weeks from",
                    (0, r.t)("change {title} weeks from")
                ),
                k = new o.TranslatedString(
                    "change {title} weeks to",
                    (0, r.t)("change {title} weeks to")
                ),
                V = new o.TranslatedString(
                    "change {title} visibility on months",
                    (0, r.t)("change {title} visibility on months")
                ),
                W = new o.TranslatedString(
                    "change {title} months from",
                    (0, r.t)("change {title} months from")
                ),
                M = new o.TranslatedString(
                    "change {title} months to",
                    (0, r.t)("change {title} months to")
                ),
                U =
                    (new o.TranslatedString(
                        "change {title} visibility on ranges",
                        (0, r.t)("change {title} visibility on ranges")
                    ),
                    (0, r.t)("Ticks")),
                I = (0, r.t)("Seconds"),
                x = (0, r.t)("Minutes"),
                L = (0, r.t)("Hours"),
                A = (0, r.t)("Days"),
                R = (0, r.t)("Weeks"),
                F = (0, r.t)("Months"),
                N =
                    ((0, r.t)("Ranges"),
                    new o.TranslatedString("ticks", (0, r.t)("ticks"))),
                Y = new o.TranslatedString("seconds", (0, r.t)("seconds")),
                E = new o.TranslatedString(
                    "seconds from",
                    (0, r.t)("seconds from")
                ),
                X = new o.TranslatedString(
                    "seconds to",
                    (0, r.t)("seconds to")
                ),
                H = new o.TranslatedString("minutes", (0, r.t)("minutes")),
                j = new o.TranslatedString(
                    "minutes from",
                    (0, r.t)("minutes from")
                ),
                K = new o.TranslatedString(
                    "minutes to",
                    (0, r.t)("minutes to")
                ),
                $ = new o.TranslatedString("hours", (0, r.t)("hours")),
                q = new o.TranslatedString(
                    "hours from",
                    (0, r.t)("hours from")
                ),
                z = new o.TranslatedString("hours to", (0, r.t)("hours to")),
                B = new o.TranslatedString("days", (0, r.t)("days")),
                G = new o.TranslatedString("days from", (0, r.t)("days from")),
                J = new o.TranslatedString("days to", (0, r.t)("days to")),
                O = new o.TranslatedString("weeks", (0, r.t)("weeks")),
                Q = new o.TranslatedString(
                    "weeks from",
                    (0, r.t)("weeks from")
                ),
                Z = new o.TranslatedString("weeks to", (0, r.t)("weeks to")),
                ee = new o.TranslatedString("months", (0, r.t)("months")),
                te = new o.TranslatedString(
                    "months from",
                    (0, r.t)("months from")
                ),
                ie = new o.TranslatedString("months to", (0, r.t)("months to")),
                re =
                    (new o.TranslatedString("ranges", (0, r.t)("ranges")),
                    [1, 59]),
                oe = [1, 59],
                ne = [1, 24],
                se = [1, 366],
                le = [1, 52],
                ae = [1, 12];
            function ce(e, t, i) {
                const r = [];
                if (n.enabled("tick_resolution")) {
                    const o = (0, s.createCheckablePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.ticks,
                                h.format({ title: i })
                            ),
                        },
                        { id: "IntervalsVisibilitiesTicks", title: U }
                    );
                    r.push(o);
                }
                if ((0, c.isSecondsEnabled)()) {
                    const o = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.seconds,
                                u.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.secondsFrom,
                                y.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.secondsTo,
                                g.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesSecond",
                            title: I,
                            min: new (a())(re[0]),
                            max: new (a())(re[1]),
                        }
                    );
                    r.push(o);
                }
                const o = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.minutes,
                                P.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.minutesFrom,
                                f.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.minutesTo,
                                w.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesMinutes",
                            title: x,
                            min: new (a())(oe[0]),
                            max: new (a())(oe[1]),
                        }
                    ),
                    l = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.hours,
                                m.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.hoursFrom,
                                b.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.hoursTo,
                                _.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesHours",
                            title: L,
                            min: new (a())(ne[0]),
                            max: new (a())(ne[1]),
                        }
                    ),
                    p = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.days,
                                T.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.daysFrom,
                                S.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.daysTo,
                                v.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesDays",
                            title: A,
                            min: new (a())(se[0]),
                            max: new (a())(se[1]),
                        }
                    );
                r.push(o, l, p);
                const d = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.weeks,
                                C.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.weeksFrom,
                                D.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.weeksTo,
                                k.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesWeeks",
                            title: R,
                            min: new (a())(le[0]),
                            max: new (a())(le[1]),
                        }
                    ),
                    N = (0, s.createRangePropertyDefinition)(
                        {
                            checked: (0, s.convertToDefinitionProperty)(
                                e,
                                t.months,
                                V.format({ title: i })
                            ),
                            from: (0, s.convertToDefinitionProperty)(
                                e,
                                t.monthsFrom,
                                W.format({ title: i })
                            ),
                            to: (0, s.convertToDefinitionProperty)(
                                e,
                                t.monthsTo,
                                M.format({ title: i })
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesMonths",
                            title: F,
                            min: new (a())(ae[0]),
                            max: new (a())(ae[1]),
                        }
                    );
                return r.push(d, N), { definitions: r };
            }
            function pe(e, t) {
                const i = [];
                if (n.enabled("tick_resolution")) {
                    const r = (0, s.createCheckablePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.ticks),
                                N,
                                t
                            ),
                        },
                        { id: "IntervalsVisibilitiesTicks", title: U }
                    );
                    i.push(r);
                }
                if ((0, c.isSecondsEnabled)()) {
                    const r = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.seconds),
                                Y,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.secondsFrom),
                                E,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.secondsTo),
                                X,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesSecond",
                            title: I,
                            min: new (a())(re[0]),
                            max: new (a())(re[1]),
                        }
                    );
                    i.push(r);
                }
                const r = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.minutes),
                                H,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.minutesFrom),
                                j,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.minutesTo),
                                K,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesMinutes",
                            title: x,
                            min: new (a())(oe[0]),
                            max: new (a())(oe[1]),
                        }
                    ),
                    o = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.hours),
                                $,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.hoursFrom),
                                q,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.hoursTo),
                                z,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesHours",
                            title: L,
                            min: new (a())(ne[0]),
                            max: new (a())(ne[1]),
                        }
                    ),
                    l = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.days),
                                B,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.daysFrom),
                                G,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.daysTo),
                                J,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesDays",
                            title: A,
                            min: new (a())(se[0]),
                            max: new (a())(se[1]),
                        }
                    );
                i.push(r, o, l);
                const h = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.weeks),
                                O,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.weeksFrom),
                                Q,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.weeksTo),
                                Z,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesWeeks",
                            title: R,
                            min: new (a())(le[0]),
                            max: new (a())(le[1]),
                        }
                    ),
                    u = (0, s.createRangePropertyDefinition)(
                        {
                            checked: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.months),
                                ee,
                                t
                            ),
                            from: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.monthsFrom),
                                te,
                                t
                            ),
                            to: new d.CollectiblePropertyUndoWrapper(
                                new p.LineToolCollectedProperty(e.monthsTo),
                                ie,
                                t
                            ),
                        },
                        {
                            id: "IntervalsVisibilitiesMonths",
                            title: F,
                            min: new (a())(ae[0]),
                            max: new (a())(ae[1]),
                        }
                    );
                return i.push(h, u), { definitions: i };
            }
        },
        68623: (e, t, i) => {
            i.d(t, { LineDataSourceDefinitionsViewModel: () => b });
            var r = i(88537),
                o = i(28353),
                n = i(24980),
                s = (i(94419), i(50366)),
                l = i(80331),
                a = i(52714),
                c = i.n(a),
                p = i(80975),
                d = i(40169),
                h = i(44159),
                u = i(46627);
            const y = (0, o.t)("Visibility"),
                g = (0, o.t)("Coordinates"),
                P = (0, o.t)("Style"),
                f = (0, o.t)("Text"),
                w = (0, o.t)("Inputs"),
                m = (0, o.t)("#{count} (price, bar)", {
                    context: "linetool point",
                });
            class b {
                constructor(e, t) {
                    (this._yCoordinateStepWV = null),
                        (this._propertyPages = []),
                        (this._lineToolsDoNotAffectChartInvalidation =
                            new u.FeatureToggleWatchedValue(
                                "do_not_invalidate_chart_on_changing_line_tools",
                                !1
                            )),
                        (this._source = t),
                        (this._undoModel = e),
                        (this._ownerSource = (0, r.ensureNotNull)(
                            this._source.ownerSource()
                        )),
                        (this._propertyApplier =
                            new h.PropertyApplierWithoutSavingChart(
                                () => e,
                                this._lineToolsDoNotAffectChartInvalidation
                            )),
                        this._createPropertyRages();
                }
                destroy() {
                    null !== this._yCoordinateStepWV &&
                        (this._source.ownerSourceChanged().unsubscribeAll(this),
                        this._ownerSource
                            .priceStepChanged()
                            .unsubscribeAll(this)),
                        this._propertyPages.forEach((e) => {
                            (0, s.destroyDefinitions)(e.definitions.value());
                        }),
                        this._lineToolsDoNotAffectChartInvalidation.destroy();
                }
                propertyPages() {
                    return Promise.resolve(this._propertyPages);
                }
                _createPropertyRages() {
                    this._propertyPages = [];
                    const e = this._createInputsPropertyPage();
                    null !== e && this._propertyPages.push(e);
                    const t = this._createStylePropertyPage();
                    null !== t && this._propertyPages.push(t);
                    const i = this._createTextPropertyPage();
                    if (
                        (null !== i && this._propertyPages.push(i),
                        this._source.hasEditableCoordinates())
                    ) {
                        const e = this._createCoordinatesPropertyPage();
                        null !== e && this._propertyPages.push(e);
                    }
                    const r = this._createVisibilitiesPropertyPage();
                    this._propertyPages.push(r);
                }
                _createVisibilitiesPropertyPage() {
                    const e = this._source
                        .properties()
                        .childs()
                        .intervalsVisibilities.childs();
                    return (0, l.createPropertyPage)(
                        (0, p.getIntervalsVisibilitiesPropertiesDefinitions)(
                            this._undoModel,
                            e,
                            new n.TranslatedString(
                                this._source.name(),
                                this._source.title(!0)
                            )
                        ),
                        "visibility",
                        y
                    );
                }
                _createCoordinatesPropertyPage() {
                    const e = this._coordinatesPropertyDefinitions();
                    return null !== e
                        ? (0, l.createPropertyPage)(e, "coordinates", g)
                        : null;
                }
                _getYCoordinateStepWV() {
                    return (
                        null === this._yCoordinateStepWV &&
                            ((this._yCoordinateStepWV = new (c())(
                                (function (e) {
                                    if (null !== e) {
                                        const t = e.priceStep();
                                        if (null !== t) return t;
                                    }
                                    return 1;
                                })(this._source.ownerSource())
                            )),
                            this._ownerSource
                                .priceStepChanged()
                                .subscribe(this, () =>
                                    this._updateYCoordinateStep()
                                ),
                            this._source
                                .ownerSourceChanged()
                                .subscribe(this, () => {
                                    this._ownerSource
                                        .priceStepChanged()
                                        .unsubscribeAll(this),
                                        (this._ownerSource = (0,
                                        r.ensureNotNull)(
                                            this._source.ownerSource()
                                        )),
                                        this._ownerSource
                                            .priceStepChanged()
                                            .subscribe(this, () =>
                                                this._updateYCoordinateStep()
                                            );
                                })),
                        this._yCoordinateStepWV
                    );
                }
                _coordinatesPropertyDefinitions() {
                    const e = this._source.points(),
                        t = this._source.pointsProperty().childs().points,
                        i = [],
                        r = this._getYCoordinateStepWV();
                    return (
                        e.forEach((e, o) => {
                            const n = t[o].childs();
                            n &&
                                i.push(
                                    (0, d.getCoordinatesPropertiesDefinitions)(
                                        this._propertyApplier,
                                        n,
                                        e,
                                        r,
                                        m.format({ count: (o + 1).toString() }),
                                        this._source.name()
                                    )
                                );
                        }),
                        { definitions: i }
                    );
                }
                _createStylePropertyPage() {
                    const e = this._stylePropertyDefinitions();
                    return null !== e
                        ? (0, l.createPropertyPage)(e, "style", P)
                        : null;
                }
                _stylePropertyDefinitions() {
                    return null;
                }
                _createTextPropertyPage() {
                    const e = this._textPropertyDefinitions();
                    return null !== e
                        ? (0, l.createPropertyPage)(e, "text", f)
                        : null;
                }
                _textPropertyDefinitions() {
                    return null;
                }
                _createInputsPropertyPage() {
                    const e = this._inputsPropertyDefinitions();
                    return null !== e
                        ? (0, l.createPropertyPage)(e, "inputs", w)
                        : null;
                }
                _inputsPropertyDefinitions() {
                    return null;
                }
                _updateYCoordinateStep() {
                    const e = this._ownerSource.priceStep();
                    this._getYCoordinateStepWV().setValue(e || 1);
                }
            }
        },
        98222: (e, t, i) => {
            i.d(t, { CollectiblePropertyUndoWrapper: () => c });
            var r = i(88537),
                o = i(28353),
                n = i(24980),
                s = i(2015),
                l = i.n(s);
            const a = new n.TranslatedString(
                "change {propertyName} property",
                (0, o.t)("change {propertyName} property")
            );
            class c extends l() {
                constructor(e, t, i) {
                    super(),
                        (this._isProcess = !1),
                        (this._listenersMappers = []),
                        (this._valueApplier = {
                            applyValue: (e, t) => {
                                this._propertyApplier.setProperty(e, t, a);
                            },
                        }),
                        (this._baseProperty = e),
                        (this._propertyApplier = i),
                        (this._propertyName = t);
                }
                destroy() {
                    this._baseProperty.destroy();
                }
                value() {
                    return this._baseProperty.value();
                }
                setValue(e, t) {
                    this._propertyApplier.beginUndoMacro(
                        a.format({ propertyName: this._propertyName })
                    ),
                        (this._isProcess = !0),
                        this._baseProperty.setValue(
                            e,
                            void 0,
                            this._valueApplier
                        ),
                        (this._isProcess = !1),
                        this._propertyApplier.endUndoMacro(),
                        this._listenersMappers.forEach((e) => {
                            e.method.call(e.obj, this);
                        });
                }
                subscribe(e, t) {
                    const i = () => {
                        this._isProcess || t.call(e, this);
                    };
                    this._listenersMappers.push({
                        obj: e,
                        method: t,
                        callback: i,
                    }),
                        this._baseProperty.subscribe(e, i);
                }
                unsubscribe(e, t) {
                    var i;
                    const o = (0, r.ensureDefined)(
                        null ===
                            (i = this._listenersMappers.find(
                                (i) => i.obj === e && i.method === t
                            )) || void 0 === i
                            ? void 0
                            : i.callback
                    );
                    this._baseProperty.unsubscribe(e, o);
                }
                unsubscribeAll(e) {
                    this._baseProperty.unsubscribeAll(e);
                }
            }
        },
        44159: (e, t, i) => {
            i.d(t, { PropertyApplierWithoutSavingChart: () => r });
            class r {
                constructor(e, t) {
                    (this._undoModelSupplier = e), (this._featureToggle = t);
                }
                setProperty(e, t, i) {
                    this._undoModelSupplier().setProperty(
                        e,
                        t,
                        i,
                        this._featureToggle.value()
                    );
                }
                beginUndoMacro(e) {
                    return this._undoModelSupplier().beginUndoMacro(
                        e,
                        this._shouldWeKeepChartValidated()
                    );
                }
                endUndoMacro() {
                    this._undoModelSupplier().endUndoMacro();
                }
                setWatchedValue(e, t, i) {
                    this._undoModelSupplier()
                        .undoHistory()
                        .setWatchedValue(e, t, i, !0);
                }
                _shouldWeKeepChartValidated() {
                    const e = this._undoModelSupplier()
                        .model()
                        .isAutoSaveEnabled()
                        .value();
                    return this._featureToggle.value() && e;
                }
            }
        },
    },
]);