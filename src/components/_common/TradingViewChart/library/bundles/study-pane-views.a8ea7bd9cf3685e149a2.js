"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [507],
    {
        2375: (t, e, i) => {
            i.d(e, { PolygonRenderer: () => u });
            var s = i(34026),
                r = i(4652),
                n = i(29892),
                a = i(63300),
                o = i(49612),
                l = i(84346),
                h = i(68906),
                d = i(16282),
                c = i(49094);
            class u extends d.ScaledPaneRenderer {
                constructor(t) {
                    super(),
                        (this._data = null),
                        (this._backHittest = new l.HitTestResult(
                            l.HitTestResult.MOVEPOINT_BACKGROUND
                        )),
                        (this._points = []),
                        (this._hittest =
                            null != t
                                ? t
                                : new l.HitTestResult(
                                      l.HitTestResult.MOVEPOINT
                                  ));
                }
                setData(t) {
                    (this._data = t), (this._points = t.points);
                }
                hitTest(t) {
                    if (
                        null === this._data ||
                        (void 0 !== this._data.mouseTouchable &&
                            !this._data.mouseTouchable)
                    )
                        return null;
                    const e = Math.max(
                            (0, c.interactionTolerance)().line,
                            Math.ceil(this._data.linewidth / 2)
                        ),
                        i = this._points.length;
                    if (1 === i) {
                        return (0, s.pointInCircle)(t, this._points[0], e)
                            ? this._hittest
                            : null;
                    }
                    for (let s = 1; s < i; s++) {
                        const i = this._points[s - 1],
                            n = this._points[s];
                        if ((0, r.distanceToSegment)(i, n, t).distance <= e)
                            return this._hittest;
                    }
                    if (
                        this._data.filled &&
                        this._data.fillBackground &&
                        i > 0
                    ) {
                        const s = this._points[0],
                            n = this._points[i - 1];
                        if ((0, r.distanceToSegment)(s, n, t).distance <= e)
                            return this._hittest;
                    }
                    return this._data.filled &&
                        this._data.fillBackground &&
                        (0, s.pointInPolygon)(t, this._data.points)
                        ? this._backHittest
                        : null;
                }
                _drawImpl(t, e) {
                    var i, s;
                    const r = this._points.length;
                    if (null === this._data || 0 === r) return;
                    if (1 === r)
                        return void this._drawPoint(
                            t,
                            this._points[0],
                            this._data.linewidth / 2,
                            this._data.color
                        );
                    t.beginPath();
                    const l =
                        null !== (i = this._data.linecap) && void 0 !== i
                            ? i
                            : "butt";
                    (t.lineCap = l),
                        (t.strokeStyle = this._data.color),
                        (t.lineWidth = this._data.linewidth),
                        (t.lineJoin =
                            null !== (s = this._data.linejoin) && void 0 !== s
                                ? s
                                : "miter"),
                        (0, n.setLineStyle)(t, this._data.linestyle);
                    const d = this._points[0];
                    t.moveTo(d.x, d.y);
                    for (const e of this._points) t.lineTo(e.x, e.y);
                    if (
                        (this._data.filled &&
                            this._data.fillBackground &&
                            ((t.fillStyle = (0, h.generateColor)(
                                this._data.backcolor,
                                this._data.transparency
                            )),
                            t.fill()),
                        this._data.filled &&
                            !this._data.skipClosePath &&
                            t.closePath(),
                        this._data.linewidth > 0 && t.stroke(),
                        r > 1)
                    ) {
                        if (
                            ("butt" !== l && (t.lineCap = "butt"),
                            this._data.leftend === o.LineEnd.Arrow)
                        ) {
                            const i = this._correctArrowPoints(
                                this._points[1],
                                this._points[0],
                                t.lineWidth,
                                l
                            );
                            (0, a.drawArrow)(
                                i[0],
                                i[1],
                                t,
                                t.lineWidth,
                                e.pixelRatio
                            );
                        }
                        if (this._data.rightend === o.LineEnd.Arrow) {
                            const i = this._correctArrowPoints(
                                this._points[r - 2],
                                this._points[r - 1],
                                t.lineWidth,
                                l
                            );
                            (0, a.drawArrow)(
                                i[0],
                                i[1],
                                t,
                                t.lineWidth,
                                e.pixelRatio
                            );
                        }
                    }
                }
                _drawPoint(t, e, i, s) {
                    0 !== i &&
                        (t.beginPath(),
                        (t.fillStyle = s),
                        t.arc(e.x, e.y, i, 0, 2 * Math.PI, !0),
                        t.fill(),
                        t.closePath());
                }
                _correctArrowPoints(t, e, i, s) {
                    const r = e.subtract(t),
                        n = r.length();
                    if ("butt" === s || n < 1) return [t, e];
                    const a = n + i / 2;
                    return [t, r.scaled(a / n).add(t)];
                }
            }
        },
        93742: (t, e, i) => {
            i.r(e), i.d(e, { HHistPaneView: () => w });
            var s = i(24377),
                r = i(88537),
                n = i(84346),
                a = i(95018),
                o = i(94804),
                l = i(98664),
                h = i(86441),
                d = i(93435),
                c = i(67802),
                u = i(22799);
            function p(t, e) {
                return { min: Math.min(t, e), max: Math.max(t, e) };
            }
            function f(t) {
                return t.max - t.min;
            }
            class _ {
                constructor(t) {
                    this._data = t;
                }
                hitTest(t, e) {
                    const i = this._data;
                    for (const s of i.histograms) {
                        if (s.yRange.min >= t.y || t.y >= s.yRange.max)
                            continue;
                        let r = null;
                        const o = f(s.xRange);
                        for (const l of s.bars) {
                            const h = i.styles[l.styleId];
                            if (!h.visible) continue;
                            if (
                                h.location === a.HHistLocation.Absolute &&
                                (s.xRange.min >= t.x || t.x >= s.xRange.max)
                            )
                                continue;
                            null === r &&
                                ((r = 0),
                                s.bars.forEach((t) => {
                                    const e = t.subBarValues.reduce(
                                        (t, e) => t + e
                                    );
                                    r = Math.max(r, e);
                                }));
                            const d = v(s.xRange, h, e.cssWidth),
                                { xBasePoint: c, sign: u } = d,
                                p = Math.max(
                                    (h.percentWidth * o) / 100 -
                                        l.subBarValues.length,
                                    0
                                );
                            let f = c;
                            for (let e = 0; e < l.subBarValues.length; e++) {
                                const i = l.y,
                                    s = l.y + l.height,
                                    a = f,
                                    o = a + u * ((p * l.subBarValues[e]) / r);
                                if (
                                    ((f = o),
                                    ((t.x >= a && t.x <= o) ||
                                        (t.x >= o && t.x <= a)) &&
                                        t.y >= i &&
                                        t.y <= s)
                                )
                                    return new n.HitTestResult(
                                        n.HitTestResult.REGULAR
                                    );
                            }
                        }
                    }
                    return null;
                }
                draw(t, e) {
                    const i = this._data;
                    t.save(),
                        i.histograms.forEach((r) => {
                            const n = [];
                            let a = 0,
                                o = 0;
                            r.bars.forEach((t) => {
                                const e = t.subBarValues.reduce(
                                    (t, e) => t + e
                                );
                                (a = Math.max(a, e)), (o += t.height);
                            });
                            const l = o / r.bars.length,
                                h =
                                    ((d = l),
                                    (c = e.pixelRatio),
                                    Math.floor(d * c) >= 1 * c
                                        ? Math.floor(c)
                                        : 0);
                            var d, c;
                            const u = f(r.xRange),
                                p = [];
                            if (
                                (r.bars.forEach((s) => {
                                    const o = i.styles[s.styleId];
                                    if (!o.visible) return;
                                    if (o.showValues && o.addToTotalValue)
                                        for (
                                            let t = 0;
                                            t < s.subBarValues.length;
                                            t++
                                        )
                                            n[t] =
                                                (n[t] || 0) + s.subBarValues[t];
                                    const l = v(r.xRange, o, e.cssWidth),
                                        { xBasePoint: d, sign: c } = l;
                                    if (s.y > e.cssHeight || s.y + s.height < 0)
                                        return;
                                    const f = Math.max(
                                        (o.percentWidth * u) / 100 -
                                            s.subBarValues.length,
                                        0
                                    );
                                    let _ = d;
                                    for (
                                        let i = 0;
                                        i < s.subBarValues.length;
                                        i++
                                    ) {
                                        const r = s.y,
                                            n = s.y + s.height,
                                            l = _,
                                            d =
                                                l +
                                                c *
                                                    ((f * s.subBarValues[i]) /
                                                        a);
                                        if (((_ = d), Math.abs(d - l) < 0.5))
                                            continue;
                                        (t.fillStyle = o.colors[i]),
                                            t.beginPath();
                                        const u = Math.round(l * e.pixelRatio),
                                            p = Math.round(r * e.pixelRatio),
                                            v = Math.round(d * e.pixelRatio),
                                            g = Math.round(n * e.pixelRatio),
                                            m = v - u,
                                            R = Math.max(g - p - h, 1);
                                        t.rect(u, p, m, R), t.fill();
                                    }
                                    if (!o.showValues) return;
                                    const R = g(s.displayedValues, o.direction),
                                        T = m(u, s.y, s.height, l, o, R);
                                    p.push(T);
                                }),
                                n.length > 0)
                            ) {
                                const t = i.styles[r.bars[0].styleId],
                                    a = v(r.xRange, t, e.cssWidth),
                                    o = g(n, t.direction),
                                    h = r.bars[r.bars.length - 1],
                                    d = m(u, h.y + h.height, l, a, t, o);
                                (d.color = (0, s.shiftColor)(d.color, 1.5)),
                                    p.push(d);
                            }
                            const _ = Math.min(...p.map((t) => t.fontSize));
                            if (_ >= 7.5)
                                for (const i of p) (i.fontSize = _), R(t, e, i);
                        }),
                        t.restore();
                }
            }
            function v(t, e, i) {
                const s = e.location === a.HHistLocation.Absolute,
                    r = e.location === a.HHistLocation.Relative,
                    n = e.direction === a.HHistDirection.LeftToRight,
                    o = e.direction === a.HHistDirection.RightToLeft;
                let l, h;
                if (s && n) (l = t.min), (h = 1);
                else if (s && o) (l = t.max), (h = -1);
                else if (r && n) (l = 0), (h = 1);
                else {
                    if (!r || !o)
                        throw new Error(
                            `Unknown location/direction values: ${e.location}/${e.direction}`
                        );
                    (l = i), (h = -1);
                }
                return { xBasePoint: l, sign: h };
            }
            function g(t, e) {
                e === a.HHistDirection.RightToLeft && (t = t.slice()).reverse();
                const i = new c.VolumeFormatter();
                return t.map((t) => i.format(t)).join("x");
            }
            function m(t, e, i, s, r, n) {
                const o = Math.min(
                        Math.round((1.7 * t) / n.length),
                        Math.round(0.6 * i)
                    ),
                    l =
                        r.direction === a.HHistDirection.LeftToRight
                            ? "left"
                            : "right",
                    { xBasePoint: d, sign: c } = s,
                    u = d + 3 * c,
                    p = e + 0.7 * i;
                return {
                    text: n,
                    color: r.valuesColor,
                    fontSize: o,
                    align: l,
                    point: new h.Point(u, p),
                };
            }
            function R(t, e, i) {
                const {
                    text: s,
                    color: r,
                    fontSize: n,
                    align: a,
                    point: o,
                } = i;
                (t.font = `${n}px ${u.CHART_FONT_FAMILY}`),
                    (t.fillStyle = r),
                    (t.textAlign = a),
                    (0, d.drawScaled)(t, e.pixelRatio, () =>
                        t.fillText(s, o.x, o.y)
                    );
            }
            var T = i(68906);
            class w {
                constructor(t, e, i) {
                    (this._invalidated = !0),
                        (this._provider = t),
                        (this._model = e),
                        (this._rendererData = { histograms: [], styles: {} }),
                        (this._textData = []),
                        (this._hhistRenderer = new _(this._rendererData));
                }
                update() {
                    this._invalidated = !0;
                }
                renderer() {
                    this._invalidated &&
                        (this._updateViewInternal(), (this._invalidated = !1));
                    const t = new o.CompositeRenderer();
                    t.append(this._hhistRenderer);
                    for (const e of this._textData)
                        t.append(
                            new l.TextRenderer(
                                e,
                                new n.HitTestResult(n.HitTestResult.REGULAR)
                            )
                        );
                    return t;
                }
                _resetRenderersData() {
                    (this._rendererData.histograms = []),
                        (this._rendererData.styles = {}),
                        (this._textData = []);
                }
                _prepareStyles() {
                    const t = (0, r.ensureDefined)(
                            this._provider.graphicsInfo().hhists
                        ),
                        e = Object.keys(t),
                        i = this._provider.properties().graphics.hhists,
                        s =
                            this._provider
                                .properties()
                                .child("inputs")
                                .child("volume")
                                .value() === a.HHistVolumeMode.Delta;
                    for (const n of e) {
                        const e = (0, r.ensureDefined)(i.child(n)),
                            a = (0, r.ensureDefined)(t[n]);
                        if (s)
                            (this._rendererData.styles[n + "UpDominate"] = {
                                colors: x(
                                    e.colors[0].value(),
                                    e.transparencies[0].value()
                                ),
                                visible: e.visible.value(),
                                percentWidth: e.percentWidth.value(),
                                location: a.location,
                                direction: e.direction.value(),
                                showValues: e.showValues.value(),
                                addToTotalValue: !1,
                                valuesColor: e.valuesColor.value(),
                            }),
                                (this._rendererData.styles[n + "DownDominate"] =
                                    {
                                        colors: x(
                                            e.colors[1].value(),
                                            e.transparencies[1].value()
                                        ),
                                        visible: e.visible.value(),
                                        percentWidth: e.percentWidth.value(),
                                        location: a.location,
                                        direction: e.direction.value(),
                                        showValues: e.showValues.value(),
                                        addToTotalValue: !1,
                                        valuesColor: e.valuesColor.value(),
                                    });
                        else {
                            const t = (0, T.generateColor)(
                                    e.colors[0].value(),
                                    e.transparencies[0].value()
                                ),
                                i = e.colors[1]
                                    ? (0, T.generateColor)(
                                          e.colors[1].value(),
                                          e.transparencies[1].value()
                                      )
                                    : t;
                            this._rendererData.styles[n] = {
                                colors: [t, i],
                                visible: e.visible.value(),
                                percentWidth: e.percentWidth.value(),
                                location: a.location,
                                direction: e.direction.value(),
                                showValues: e.showValues.value(),
                                addToTotalValue: !0,
                                valuesColor: e.valuesColor.value(),
                            };
                        }
                    }
                }
                _updateViewInternal() {
                    this._resetRenderersData();
                    const t = this._provider.priceScale(),
                        e = this._model.timeScale();
                    if (!t || t.isEmpty() || e.isEmpty()) return;
                    if (null === this._provider.firstValue()) return;
                    const i = this._provider
                        .graphics()
                        .hhistsByTimePointIndex();
                    if (0 === i.size) return;
                    const s = e.visibleBarsStrictRange();
                    if (null === s) return;
                    const n = s.firstBar(),
                        a = s.lastBar();
                    this._prepareStyles(),
                        (0, r.ensureDefined)(i).forEach((i, s) => {
                            let r = 1 / 0,
                                o = -1 / 0;
                            i.forEach((t) => {
                                (r = Math.min(r, t.firstBarTime)),
                                    (o = Math.max(o, t.lastBarTime));
                            }),
                                o < n ||
                                    r > a ||
                                    this._updateDataForRenderers(i, t, e);
                        });
                }
                _updateDataForRenderers(t, e, i) {
                    if (t.size <= 0) return;
                    let s = null;
                    if (
                        (t.forEach((t) => {
                            s = s || t;
                        }),
                        null === s)
                    )
                        return;
                    let n = s;
                    t.forEach((t) => {
                        t.priceLow < n.priceLow && (n = t);
                    });
                    const o =
                            this._provider
                                .properties()
                                .child("inputs")
                                .child("volume")
                                .value() === a.HHistVolumeMode.Delta,
                        l = (function (t, e) {
                            return p(
                                e.indexToCoordinate(t.firstBarTime),
                                e.indexToCoordinate(t.lastBarTime)
                            );
                        })(s, i),
                        h = (0, r.ensureNotNull)(this._provider.firstValue()),
                        d = [];
                    t.forEach((t) => {
                        null == t.rate[t.rate.length - 1] &&
                            t.rate.splice(-1, 1);
                        let i = [],
                            s = [],
                            r = t.styleId;
                        if (o) {
                            const [e, n, a] =
                                t.rate[0] > t.rate[1]
                                    ? [t.rate[1], t.rate[0], "UpDominate"]
                                    : [t.rate[0], t.rate[1], "DownDominate"];
                            (i = [n - e, e, e]), (s = [n - e]), (r += a);
                        } else (i = t.rate), (s = t.rate);
                        const n = (function (t, e, i) {
                            return p(
                                e.priceToCoordinate(t.priceHigh, i),
                                e.priceToCoordinate(t.priceLow, i)
                            );
                        })(t, e, h);
                        d.push({
                            height: n.max - n.min,
                            y: n.min,
                            subBarValues: i,
                            displayedValues: s,
                            styleId: r,
                        });
                    }),
                        d.sort((t, e) => t.y - e.y),
                        this._rendererData.histograms.push({
                            xRange: l,
                            yRange: p(
                                d[0].y,
                                d[d.length - 1].y + d[d.length - 1].height
                            ),
                            bars: d,
                        });
                }
            }
            function x(t, e) {
                let i;
                if ((0, T.isHexColor)(t)) i = 100 - e;
                else {
                    const r = (0, s.tryParseRgba)(t);
                    i =
                        100 -
                        (null !== r ? (0, T.alphaToTransparency)(r[3]) : e);
                }
                return [
                    (0, T.generateColor)(t, 100 - i, !0),
                    (0, T.generateColor)(t, 100 - i / 2, !0),
                    (0, T.generateColor)(t, 100 - i / 4, !0),
                ];
            }
        },
        22107: (t, e, i) => {
            i.r(e), i.d(e, { HorizLinePaneView: () => o });
            var s = i(88537),
                r = i(84346),
                n = i(94804),
                a = i(40254);
            class o {
                constructor(t, e, i) {
                    (this._data = []),
                        (this._invalidated = !0),
                        (this._provider = t),
                        (this._model = e),
                        (this._hitTestResult =
                            void 0 !== i
                                ? new r.HitTestResult(r.HitTestResult.CUSTOM, i)
                                : new r.HitTestResult(r.HitTestResult.REGULAR));
                }
                update() {
                    this._invalidated = !0;
                }
                renderer() {
                    this._invalidated &&
                        (this._updateViewInternal(), (this._invalidated = !1));
                    const t = new n.CompositeRenderer();
                    for (const e of this._data) {
                        const i = new a.HorizontalLineRenderer();
                        i.setData(e),
                            i.setHitTest(this._hitTestResult),
                            t.append(i);
                    }
                    return t;
                }
                _updateViewInternal() {
                    this._data = [];
                    const t = this._provider.priceScale(),
                        e = this._model.timeScale();
                    if (!t || t.isEmpty() || e.isEmpty()) return;
                    const i = this._provider.graphics().horizlines();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const n = this._provider.firstValue();
                    if (null === n) return;
                    const a = r.firstBar(),
                        o = r.lastBar();
                    i.forEach((i, r) => {
                        const l =
                            this._provider.properties().graphics.horizlines[r];
                        l.visible.value() &&
                            i.forEach((i) => {
                                const r = i.startIndex,
                                    h = i.endIndex;
                                (!i.extendRight && Math.max(r, h) < a) ||
                                    (!i.extendLeft && Math.min(r, h) > o) ||
                                    this._data.push({
                                        y: t.priceToCoordinate(
                                            (0, s.ensureDefined)(i.level),
                                            n
                                        ),
                                        left: i.extendLeft
                                            ? void 0
                                            : e.indexToCoordinate(r),
                                        right: i.extendRight
                                            ? void 0
                                            : e.indexToCoordinate(h),
                                        color: l.color.value(),
                                        linewidth: l.width.value(),
                                        linestyle: l.style.value(),
                                    });
                            });
                    });
                }
            }
        },
        54077: (t, e, i) => {
            i.r(e), i.d(e, { PolygonPaneView: () => h });
            var s = i(88537),
                r = i(86441),
                n = i(84346),
                a = i(94804),
                o = i(43891),
                l = i(2375);
            class h {
                constructor(t, e, i) {
                    (this._data = []),
                        (this._invalidated = !0),
                        (this._provider = t),
                        (this._model = e),
                        (this._hitTestResult =
                            void 0 !== i
                                ? new n.HitTestResult(n.HitTestResult.CUSTOM, i)
                                : new n.HitTestResult(n.HitTestResult.REGULAR));
                }
                update() {
                    this._invalidated = !0;
                }
                renderer() {
                    this._invalidated &&
                        (this._updateViewInternal(), (this._invalidated = !1));
                    const t = new a.CompositeRenderer();
                    for (const e of this._data) {
                        const i = new l.PolygonRenderer(this._hitTestResult);
                        i.setData(e), t.append(i);
                    }
                    return t;
                }
                _updateViewInternal() {
                    this._data = [];
                    const t = this._provider.priceScale(),
                        e = this._model.timeScale();
                    if (!t || t.isEmpty() || e.isEmpty()) return;
                    const i = this._provider.graphics().polygons();
                    if (0 === i.size) return;
                    const n = this._model.timeScale().visibleBarsStrictRange();
                    if (null === n) return;
                    const a = this._provider.firstValue();
                    if (null === a) return;
                    const l = n.firstBar(),
                        h = n.lastBar(),
                        d = this._provider.properties().graphics.polygons,
                        c = (0, s.ensureDefined)(
                            this._provider.metaInfo().graphics.polygons
                        );
                    i.forEach((i, n) => {
                        const u = d[n];
                        100 !== u.transparency.value() &&
                            i.forEach((i) => {
                                let d = 1 / 0,
                                    p = -1 / 0;
                                for (const t of i.points) {
                                    const e = t.index + (t.offset || 0);
                                    (d = Math.min(d, e)), (p = Math.max(p, e));
                                }
                                if (p < l || h < d) return;
                                const f = i.points.map((i) => {
                                    const n = e.indexToCoordinate(
                                            i.index + (i.offset || 0)
                                        ),
                                        o = t.priceToCoordinate(
                                            (0, s.ensureDefined)(i.level),
                                            a
                                        );
                                    return new r.Point(n, o);
                                });
                                this._data.push({
                                    points: f,
                                    color: u.color.value(),
                                    backcolor: u.color.value(),
                                    linewidth:
                                        void 0 !== u.showBorder &&
                                        u.showBorder.value()
                                            ? 1
                                            : 0,
                                    linestyle: o.LINESTYLE_SOLID,
                                    filled: !0,
                                    fillBackground: !0,
                                    transparency: u.transparency.value(),
                                    mouseTouchable: (0, s.ensureDefined)(c[n])
                                        .mouseTouchable,
                                });
                            });
                    });
                }
            }
        },
        59778: (t, e, i) => {
            i.r(e), i.d(e, { VertLinePaneView: () => l });
            var s = i(88537),
                r = i(84346),
                n = i(95936),
                a = i(94804),
                o = i(44349);
            class l {
                constructor(t, e, i) {
                    (this._data = []),
                        (this._invalidated = !0),
                        (this._provider = t),
                        (this._model = e),
                        (this._hitTestResult =
                            void 0 !== i
                                ? new r.HitTestResult(r.HitTestResult.CUSTOM, i)
                                : new r.HitTestResult(r.HitTestResult.REGULAR));
                }
                update() {
                    this._invalidated = !0;
                }
                renderer() {
                    this._invalidated &&
                        (this._updateViewInternal(), (this._invalidated = !1));
                    const t = new a.CompositeRenderer();
                    for (const e of this._data) {
                        const i = new o.VerticalLineRenderer();
                        i.setData(e),
                            i.setHitTest(this._hitTestResult),
                            t.append(i);
                    }
                    return t;
                }
                _updateViewInternal() {
                    this._data = [];
                    const t = this._provider.priceScale(),
                        e = this._model.timeScale();
                    if (!t || t.isEmpty() || e.isEmpty()) return;
                    const i = this._provider.graphicsInfo().vertlines,
                        r = this._provider.graphics().vertlines();
                    if (0 === r.size || void 0 === i) return;
                    const a = this._model.timeScale().visibleBarsStrictRange();
                    if (null === a) return;
                    const o = this._provider.firstValue();
                    if (null === o) return;
                    const l = a.firstBar(),
                        h = a.lastBar();
                    r.forEach((r, a) => {
                        const d =
                            this._provider.properties().graphics.vertlines[a];
                        if (!d.visible.value()) return;
                        let c = 0;
                        switch ((0, s.ensureDefined)(i[a]).halign) {
                            case n.HAlign.Left:
                                c = -e.barSpacing() / 2;
                                break;
                            case n.HAlign.Right:
                                c = e.barSpacing() / 2;
                        }
                        r.forEach((i) => {
                            const r = i.index;
                            r < l ||
                                h < r ||
                                this._data.push({
                                    x: e.indexToCoordinate(r) + c,
                                    top: i.extendTop
                                        ? void 0
                                        : t.priceToCoordinate(
                                              (0, s.ensureDefined)(i.endPrice),
                                              o
                                          ),
                                    bottom: i.extendBottom
                                        ? void 0
                                        : t.priceToCoordinate(
                                              (0, s.ensureDefined)(
                                                  i.startPrice
                                              ),
                                              o
                                          ),
                                    color: d.color.value(),
                                    linewidth: d.width.value(),
                                    linestyle: d.style.value(),
                                });
                        });
                    });
                }
            }
        },
    },
]);
