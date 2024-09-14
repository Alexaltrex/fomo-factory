var TradingView = (function (t) {
    "use strict";
    function e(t, n) {
        const i = { ...t };
        for (const o in n)
            "object" != typeof t[o] || null === t[o] || Array.isArray(t[o])
                ? void 0 !== n[o] && (i[o] = n[o])
                : (i[o] = e(t[o], n[o]));
        return i;
    }
    const n = {
            mobile: {
                disabled_features: [
                    "left_toolbar",
                    "header_widget",
                    "timeframes_toolbar",
                    "edit_buttons_in_legend",
                    "context_menus",
                    "control_bar",
                    "border_around_the_chart",
                ],
                enabled_features: [],
            },
        },
        i = {
            width: 800,
            height: 500,
            interval: "1D",
            timezone: "Etc/UTC",
            container: "",
            library_path: "",
            locale: "en",
            widgetbar: {
                details: !1,
                watchlist: !1,
                watchlist_settings: { default_symbols: [] },
            },
            overrides: { "mainSeriesProperties.showCountdown": !1 },
            studies_overrides: {},
            trading_customization: { position: {}, order: {} },
            brokerConfig: { configFlags: {} },
            fullscreen: !1,
            autosize: !1,
            disabled_features: [],
            enabled_features: [],
            debug: !1,
            logo: {},
            time_frames: [
                { text: "5y", resolution: "1W" },
                { text: "1y", resolution: "1W" },
                { text: "6m", resolution: "120" },
                { text: "3m", resolution: "60" },
                { text: "1m", resolution: "30" },
                { text: "5d", resolution: "5" },
                { text: "1d", resolution: "1" },
            ],
            client_id: "0",
            user_id: "0",
            charts_storage_api_version: "1.0",
            favorites: { intervals: [], chartTypes: [] },
        };
    let o = !1;
    function s(t) {
        var e;
        const n = /\.woff(\d*)/.exec(t);
        return `<link rel="preload" href="${t}" as="font" type="font/woff${
            null !== (e = null == n ? void 0 : n[1]) && void 0 !== e ? e : "2"
        }" crossorigin="anonymous"/>`;
    }
    function r(t, e) {
        const n = new URL(`${t || ""}`, location.href).href,
            i = JSON.parse(
                '["bundles/runtime.19eb0649c7f1a1088161.js","bundles/5386.eb112967859403067d3d.css","bundles/5386.eb112967859403067d3d.rtl.css","bundles/1857.ae7a6ff7283aaeafa5c7.js","bundles/library.94e2215aa1853b5cec0f.js","bundles/b1a63a011fd92dfb93db6db243bb036c.woff2","bundles/40f9a03d174178efb12303caa9bc7cd8.woff2","bundles/3293616ec0c605c7c2db25829a0a509e.woff"]'
            ),
            o = JSON.parse(
                '[{"iso":"ar","dir":"rtl","language":"ar"},{"iso":"pt","dir":"ltr","language":"pt"},{"iso":"cs","dir":"ltr","language":"cs"},{"iso":"de","dir":"ltr","language":"de"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"es","dir":"ltr","language":"es"},{"iso":"fa","dir":"rtl","language":"fa"},{"iso":"fr","dir":"ltr","language":"fr"},{"iso":"he","dir":"rtl","language":"he_IL"},{"iso":"hu","dir":"ltr","language":"hu_HU"},{"iso":"id","dir":"ltr","language":"id_ID"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"it","dir":"ltr","language":"it"},{"iso":"ja","dir":"ltr","language":"ja"},{"iso":"ko","dir":"ltr","language":"ko"},{"iso":"ms","dir":"ltr","language":"ms_MY"},{"iso":"pl","dir":"ltr","language":"pl"},{"iso":"ru","dir":"ltr","language":"ru"},{"iso":"sv","dir":"ltr","language":"sv"},{"iso":"th","dir":"ltr","language":"th"},{"iso":"tr","dir":"ltr","language":"tr"},{"iso":"vi","dir":"ltr","language":"vi"},{"iso":"zh-Hans","dir":"ltr","language":"zh"},{"iso":"zh-Hant","dir":"ltr","language":"zh_TW"},{"iso":"el","dir":"ltr","language":"el"},{"iso":"nl","dir":"ltr","language":"nl_NL"},{"iso":"ro","dir":"ltr","language":"ro"}]'
            ),
            r = encodeURIComponent(e),
            a = o.find((t) => t.language === r),
            d = `lang="${a.iso}" dir="${a.dir}"`,
            l = `\n${(function (t, e) {
                if (void 0 === t) return "";
                const n = [],
                    i = [],
                    o = [],
                    r = /\.css$/i,
                    a = /\.rtl\.css$/i;
                for (const d of t)
                    d.endsWith(".js")
                        ? i.push(
                              `<script defer crossorigin="anonymous" src="${d}"><\/script>`
                          )
                        : r.test(d) && e === a.test(d)
                        ? o.push(
                              `<link type="text/css" href="${d}" rel="stylesheet"/>`
                          )
                        : /\.woff\d*/.test(d) && n.push(s(d));
                return [...n, ...i, ...o].join("\n");
            })(i, "rtl" === a.dir)}\n`;
        return `<!DOCTYPE html><html ${
            (h = {
                bundles: l,
                localeLanguage: r,
                htmlAttrs: d,
                libraryPath: n,
            }).htmlAttrs
        }><head><base href="${
            h.libraryPath
        }"><meta charset="utf-8"><script>window===window.parent&&(location.href="about:blank")<\/script><script src="${
            h.localeLanguage
        }-tv-locale.0545bf04.js" crossorigin="anonymous"><\/script> ${
            h.bundles
        } </head><body class="chart-page unselectable on-widget"><div class="loading-indicator" id="loading-indicator"></div><script>var JSServer={},__initialEnabledFeaturesets=["charting_library"]<\/script><script>(function() {\n\t\twindow.urlParams = (function () {\n\t\t\tvar match,\n\t\t\t\tpl\t = /\\+/g,  // Regex for replacing addition symbol with a space\n\t\t\t\tsearch = /([^&=]+)=?([^&]*)/g,\n\t\t\t\tdecode = function (s) { return decodeURIComponent(s.replace(pl, ' ')).replace(/<\\/?[^>]+(>|$)/g, ''); },\n\t\t\t\tquery = function() {\n\t\t\t\t\t// not using location.hash due to a bug in FF http://stackoverflow.com/questions/7338373/window-location-hash-issue-in-firefox\n\t\t\t\t\tvar url = location.href;\n\t\t\t\t\tvar idx = url.indexOf('#');\n\t\t\t\t\tif (idx >= 0) {\n\t\t\t\t\t\treturn url.substring(idx + 1);\n\t\t\t\t\t} else if (frameElement && frameElement.dataset.widgetOptions) {\n\t\t\t\t\t\t// fallback for safari 14 which strips hash from blob urls\n\t\t\t\t\t\treturn frameElement.dataset.widgetOptions;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthrow "Unexpected use of this page";\n\t\t\t\t\t}\n\t\t\t\t}(),\n\t\t\t\tresult = {};\n\n\t\t\twhile (match = search.exec(query)) {\n\t\t\t\tresult[decode(match[1])] = decode(match[2]);\n\t\t\t}\n\n\t\t\tvar additionalSettingsObject = window.parent[result.uid];\n\n\t\t\tvar customObjectNames = ['datafeed', 'customFormatters', 'brokerFactory', 'save_load_adapter', 'customTranslateFunction', 'contextMenu'];\n\n\t\t\tfor (var p in additionalSettingsObject) {\n\t\t\t\tif (customObjectNames.indexOf(p) === -1) {\n\t\t\t\t\tresult[p] = JSON.stringify(additionalSettingsObject[p]);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn result;\n\t\t})();\n\n\t\twindow.locale = urlParams.locale;\n\t\twindow.language = urlParams.locale; // a very big attention needed here\n\t\twindow.customTranslateFunction = window.parent[urlParams.uid].customTranslateFunction;\n\n\t\twindow.addCustomCSSFile = function(href) {\n\t\t\tvar link = document.createElement('link');\n\t\t\tlink.setAttribute('type', 'text/css');\n\t\t\tlink.setAttribute('rel', 'stylesheet');\n\t\t\tlink.setAttribute('href', href);\n\t\t\tlink.setAttribute('cross-origin', 'anonymous');\n\t\t\t\n\t\t\twindow.loadedCustomCss = new Promise((resolve) => {\n\t\t\t\tlink.onload = resolve;\n\t\t\t\tlink.onerror = resolve;\n\t\t\t});\n\t\t\tdocument.body.appendChild(link);\n\t\t};\n\n\t\twindow.loadedCustomCss = Promise.resolve();\n\t\tif (!!urlParams.customCSS) {\n\t\t\twindow.addCustomCSSFile(urlParams.customCSS);\n\t\t}\n\n\t\tvar loadingScreenParams = {};\n\n\t\tif (typeof urlParams.loading_screen === 'string') {\n\t\t\ttry {\n\t\t\t\tloadingScreenParams = JSON.parse(urlParams.loading_screen);\n\t\t\t} catch(e) {}\n\t\t}\n\n\t\tvar loadingIndicatorElement = document.getElementById('loading-indicator');\n\n\t\tif (loadingScreenParams.backgroundColor) {\n\t\t\tloadingIndicatorElement.style = 'background-color: ' + loadingScreenParams.backgroundColor;\n\t\t}\n\n\t\t!function(){"use strict";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(":global(.tv-spinner) {display: none;position: absolute;width: 1em;height: 1em;top: calc(50% - 0.5em);left: calc(50% - 0.5em);margin: 0 auto;border: 4px solid rgba(135, 151, 165, 0.2);border-radius: 50%;border-top-color: var(--tv-spinner-color, #2962FF);border-left-color: var(--tv-spinner-color, #2962FF);animation: tv-spinner__container-rotate 0.9s linear infinite;}:global(.tv-spinner)--shown {display: block;}:global(.tv-spinner)--size_xsmall {font-size: 14px;border-width: 2px;}:global(.tv-spinner)--size_small {font-size: 20px;border-width: 2px;}:global(.tv-spinner)--size_medium {font-size: 28px;border-width: 3px;}:global(.tv-spinner)--size_large {font-size: 56px;border-width: 4px;}  @keyframes tv-spinner__container-rotate {to {transform: rotate(360deg);}}");var t,e=new WeakMap;!function(t){t[t.Element=1]="Element",t[t.Document=9]="Document"}(t||(t={}));var n={mini:"xsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"};var o,i,r,s,l,a=(void 0===l&&(l=""),o='<div class="tv-spinner '.concat(l,'" role="progressbar"></div>'),r=function(n,o){var i,r;return i=null==o?document.documentElement:o.nodeType===t.Document?o.documentElement:o,e&&(r=e.get(i)),r||((r=i.ownerDocument.createRange()).selectNodeContents(i),e&&e.set(i,r)),r.createContextualFragment(n)}(o,i),null!==(s=r.firstElementChild)&&r.removeChild(s),s),c=function(){function t(t){this._shown=!1,this._el=a.cloneNode(!0),this.setSize(n[t||"large"])}return t.prototype.spin=function(t){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=t,void 0!==t&&t.appendChild(this._el)),this._shown=!0,this},t.prototype.stop=function(t){return t&&void 0!==this._container&&this._container.removeChild(this._el),this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this},t.prototype.setStyle=function(t){var e=this;return Object.keys(t).forEach((function(n){var o=t[n];void 0!==o&&e._el.style.setProperty(n,o)})),this},t.prototype.style=function(){return this._el.style},t.prototype.setSize=function(t){var e=void 0!==t?"tv-spinner--size_".concat(t):"";return this._el.className="tv-spinner ".concat(e," ").concat(this._shown?"tv-spinner--shown":""),this},t.prototype.getEl=function(){return this._el},t.prototype.destroy=function(){this.stop(),delete this._el,delete this._container},t}();window.Spinner=c}();\n\n\n\t\tvar spinnerColor = (loadingScreenParams.foregroundColor) ? loadingScreenParams.foregroundColor : 'auto';\n\n\t\tvar loadingSpinner = new Spinner('large').setStyle({\n\t\t\t'--tv-spinner-color': spinnerColor,\n\t\t\tzIndex: String(2e9),\n\t\t});\n\t\tloadingSpinner.getEl().classList.add('spinner');\n\t\tloadingSpinner.spin(loadingIndicatorElement);\n\t})();<\/script></body></html>`;
        var h;
    }
    function a() {
        return "CL v23.034 (internal id 0545bf04 @ 2022-11-29T12:01:43.889Z)";
    }
    const d = class {
        constructor(t) {
            if (
                ((this._id = `tradingview_${(
                    (1048576 * (1 + Math.random())) |
                    0
                )
                    .toString(16)
                    .substring(1)}`),
                (this._ready = !1),
                (this._readyHandlers = []),
                (this._onWindowResize = this._autoResizeChart.bind(this)),
                !t.datafeed)
            )
                throw new Error("Datafeed is not defined");
            if (((this._options = e(i, t)), t.preset)) {
                const e = n[t.preset];
                e
                    ? (void 0 !== this._options.disabled_features
                          ? (this._options.disabled_features =
                                this._options.disabled_features.concat(
                                    e.disabled_features
                                ))
                          : (this._options.disabled_features =
                                e.disabled_features),
                      void 0 !== this._options.enabled_features
                          ? (this._options.enabled_features =
                                this._options.enabled_features.concat(
                                    e.enabled_features
                                ))
                          : (this._options.enabled_features =
                                e.enabled_features))
                    : console.warn("Unknown preset: `" + t.preset + "`");
            }
            "Dark" === this._options.theme &&
                void 0 === this._options.loading_screen &&
                (this._options.loading_screen = { backgroundColor: "#131722" }),
                this._options.debug &&
                    (o ||
                        ((o = !0),
                        console.log(
                            "Using CL v23.034 (internal id 0545bf04 @ 2022-11-29T12:01:43.889Z)"
                        ))),
                this._create();
        }
        setDebugMode(t) {
            this._innerAPI().setDebugMode(t);
        }
        onChartReady(t) {
            this._ready ? t.call(this) : this._readyHandlers.push(t);
        }
        headerReady() {
            return this._innerWindowLoaded.then(() =>
                this._innerWindow().headerReady()
            );
        }
        onGrayedObjectClicked(t) {
            this._doWhenInnerApiLoaded((e) => {
                e.onGrayedObjectClicked(t);
            });
        }
        onShortcut(t, e) {
            this._doWhenInnerWindowLoaded((n) => {
                n.createShortcutAction(t, e);
            });
        }
        subscribe(t, e) {
            this._doWhenInnerApiLoaded((n) => {
                n.subscribe(t, e);
            });
        }
        unsubscribe(t, e) {
            this._doWhenInnerApiLoaded((n) => {
                n.unsubscribe(t, e);
            });
        }
        chart(t) {
            return this._innerAPI().chart(t);
        }
        getLanguage() {
            return this._options.locale;
        }
        setSymbol(t, e, n) {
            this._innerAPI().changeSymbol(t, e, n);
        }
        remove() {
            window.removeEventListener("resize", this._onWindowResize),
                this._readyHandlers.splice(0, this._readyHandlers.length),
                delete window[this._id],
                this._iFrame.parentNode &&
                    this._iFrame.parentNode.removeChild(this._iFrame);
        }
        closePopupsAndDialogs() {
            this._doWhenInnerApiLoaded((t) => {
                t.closePopupsAndDialogs();
            });
        }
        selectLineTool(t, e) {
            this._innerAPI().selectLineTool(t, e);
        }
        selectedLineTool() {
            return this._innerAPI().selectedLineTool();
        }
        save(t) {
            this._innerAPI().saveChart(t);
        }
        load(t, e) {
            this._innerAPI().loadChart({ json: t, extendedData: e });
        }
        getSavedCharts(t) {
            this._innerAPI().getSavedCharts(t);
        }
        loadChartFromServer(t) {
            this._innerAPI().loadChartFromServer(t);
        }
        saveChartToServer(t, e, n) {
            this._innerAPI().saveChartToServer(t, e, n);
        }
        removeChartFromServer(t, e) {
            this._innerAPI().removeChartFromServer(t, e);
        }
        onContextMenu(t) {
            this._doWhenInnerApiLoaded((e) => {
                e.onContextMenu(t);
            });
        }
        createButton(t) {
            return this._innerWindow().createButton(t);
        }
        createDropdown(t) {
            return this._innerWindow().createDropdown(t);
        }
        showNoticeDialog(t) {
            this._doWhenInnerApiLoaded((e) => {
                e.showNoticeDialog(t);
            });
        }
        showConfirmDialog(t) {
            this._doWhenInnerApiLoaded((e) => {
                e.showConfirmDialog(t);
            });
        }
        showLoadChartDialog() {
            this._innerAPI().showLoadChartDialog();
        }
        showSaveAsChartDialog() {
            this._innerAPI().showSaveAsChartDialog();
        }
        symbolInterval() {
            return this._innerAPI().getSymbolInterval();
        }
        mainSeriesPriceFormatter() {
            return this._innerAPI().mainSeriesPriceFormatter();
        }
        getIntervals() {
            return this._innerAPI().getIntervals();
        }
        getStudiesList() {
            return this._innerAPI().getStudiesList();
        }
        getStudyInputs(t) {
            return this._innerAPI().getStudyInputs(t);
        }
        getStudyStyles(t) {
            return this._innerAPI().getStudyStyles(t);
        }
        addCustomCSSFile(t) {
            this._innerWindow().addCustomCSSFile(t);
        }
        applyOverrides(t) {
            (this._options = e(this._options, { overrides: t })),
                this._doWhenInnerWindowLoaded((e) => {
                    e.applyOverrides(t);
                });
        }
        applyStudiesOverrides(t) {
            this._doWhenInnerWindowLoaded((e) => {
                e.applyStudiesOverrides(t);
            });
        }
        watchList() {
            return this._innerAPI().watchlist();
        }
        news() {
            return this._innerAPI().news();
        }
        widgetbar() {
            return this._innerAPI().widgetbar();
        }
        activeChart() {
            return this._innerAPI().activeChart();
        }
        chartsCount() {
            return this._innerAPI().chartsCount();
        }
        layout() {
            return this._innerAPI().layout();
        }
        setLayout(t) {
            this._innerAPI().setLayout(t);
        }
        layoutName() {
            return this._innerAPI().layoutName();
        }
        changeTheme(t, e) {
            return this._innerWindow().changeTheme(t, e);
        }
        getTheme() {
            return this._innerWindow().getTheme();
        }
        takeScreenshot() {
            this._doWhenInnerApiLoaded((t) => {
                t.takeScreenshot();
            });
        }
        lockAllDrawingTools() {
            return this._innerAPI().lockAllDrawingTools();
        }
        hideAllDrawingTools() {
            return this._innerAPI().hideAllDrawingTools();
        }
        drawOnAllCharts(t) {
            this._innerAPI().drawOnAllCharts(t);
        }
        magnetEnabled() {
            return this._innerAPI().magnetEnabled();
        }
        magnetMode() {
            return this._innerAPI().magnetMode();
        }
        undoRedoState() {
            return this._innerAPI().undoRedoState();
        }
        setIntervalLinkingEnabled(t) {
            this._innerAPI().setIntervalLinkingEnabled(t);
        }
        setTimeFrame(t) {
            this._innerAPI().setTimeFrame(t);
        }
        symbolSync() {
            return this._innerAPI().symbolSync();
        }
        intervalSync() {
            return this._innerAPI().intervalSync();
        }
        crosshairSync() {
            return this._innerAPI().crosshairSync();
        }
        timeSync() {
            return this._innerAPI().timeSync();
        }
        getAllFeatures() {
            return this._innerWindow().getAllFeatures();
        }
        clearUndoHistory() {
            return this._innerAPI().clearUndoHistory();
        }
        undo() {
            return this._innerAPI().undo();
        }
        redo() {
            return this._innerAPI().redo();
        }
        startFullscreen() {
            this._innerAPI().startFullscreen();
        }
        exitFullscreen() {
            this._innerAPI().exitFullscreen();
        }
        takeClientScreenshot(t) {
            return this._innerAPI().takeClientScreenshot(t);
        }
        navigationButtonsVisibility() {
            return this._innerWindow().getNavigationButtonsVisibility();
        }
        paneButtonsVisibility() {
            return this._innerWindow().getPaneButtonsVisibility();
        }
        dateFormat() {
            return this._innerWindow().getDateFormat();
        }
        supportedChartTypes() {
            return this._innerAPI().supportedChartTypes();
        }
        _innerAPI() {
            return this._innerWindow().tradingViewApi;
        }
        _innerWindow() {
            return this._iFrame.contentWindow;
        }
        _doWhenInnerWindowLoaded(t) {
            this._ready
                ? t(this._innerWindow())
                : this._innerWindowLoaded.then(() => {
                      t(this._innerWindow());
                  });
        }
        _doWhenInnerApiLoaded(t) {
            this._doWhenInnerWindowLoaded((e) => {
                e.doWhenApiIsReady(() => t(this._innerAPI()));
            });
        }
        _autoResizeChart() {
            this._options.fullscreen &&
                (this._iFrame.style.height = window.innerHeight + "px");
        }
        _create() {
            const t = this._render();
            this._options.container_id &&
                console.warn(
                    "`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`."
                );
            const e = this._options.container_id || this._options.container,
                n = "string" == typeof e ? document.getElementById(e) : e;
            if (null === n)
                throw new Error(
                    `There is no such element - #${this._options.container}`
                );
            (n.innerHTML = t), (this._iFrame = n.querySelector(`#${this._id}`));
            const i = this._iFrame;
            (this._options.autosize || this._options.fullscreen) &&
                ((i.style.width = "100%"),
                this._options.fullscreen || (i.style.height = "100%")),
                window.addEventListener("resize", this._onWindowResize),
                this._onWindowResize(),
                (this._innerWindowLoaded = new Promise((t) => {
                    const e = () => {
                        i.removeEventListener("load", e, !1), t();
                    };
                    i.addEventListener("load", e, !1);
                })),
                this._innerWindowLoaded.then(() => {
                    this._innerWindow().widgetReady(() => {
                        this._ready = !0;
                        for (const t of this._readyHandlers)
                            try {
                                t.call(this);
                            } catch (t) {
                                console.error(t);
                            }
                        this._innerWindow().initializationFinished();
                    });
                });
        }
        _render() {
            const t = window;
            if (
                ((t[this._id] = {
                    datafeed: this._options.datafeed,
                    customFormatters:
                        this._options.custom_formatters ||
                        this._options.customFormatters,
                    brokerFactory:
                        this._options.broker_factory ||
                        this._options.brokerFactory,
                    overrides: this._options.overrides,
                    studiesOverrides: this._options.studies_overrides,
                    tradingCustomization: this._options.trading_customization,
                    disabledFeatures: this._options.disabled_features,
                    enabledFeatures: this._options.enabled_features,
                    brokerConfig:
                        this._options.broker_config ||
                        this._options.brokerConfig,
                    restConfig: this._options.restConfig,
                    favorites: this._options.favorites,
                    logo: this._options.logo,
                    numeric_formatting: this._options.numeric_formatting,
                    rss_news_feed: this._options.rss_news_feed,
                    newsProvider: this._options.news_provider,
                    loadLastChart: this._options.load_last_chart,
                    saveLoadAdapter: this._options.save_load_adapter,
                    loading_screen: this._options.loading_screen,
                    settingsAdapter: this._options.settings_adapter,
                    getCustomIndicators: this._options.custom_indicators_getter,
                    additionalSymbolInfoFields:
                        this._options.additional_symbol_info_fields,
                    headerWidgetButtonsMode:
                        this._options.header_widget_buttons_mode,
                    customTranslateFunction:
                        this._options.custom_translate_function,
                    symbolSearchComplete: this._options.symbol_search_complete,
                    contextMenu: this._options.context_menu,
                    settingsOverrides: this._options.settings_overrides,
                    timeframe: this._options.timeframe,
                }),
                this._options.saved_data)
            )
                (t[this._id].chartContent = { json: this._options.saved_data }),
                    this._options.saved_data_meta_info &&
                        (t[this._id].chartContentExtendedData =
                            this._options.saved_data_meta_info);
            else if (!this._options.load_last_chart && !this._options.symbol)
                throw new Error(
                    "Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set"
                );
            this._options.library_path &&
                !this._options.library_path.endsWith("/") &&
                console.warn(
                    "library_path option should contain a trailing forward slash"
                );
            const e = r(this._options.library_path || "", this._options.locale),
                n = new Blob([e], { type: "text/html" }),
                i = URL.createObjectURL(n),
                o = new URL(i),
                s =
                    "symbol=" +
                    encodeURIComponent(this._options.symbol || "") +
                    "&interval=" +
                    encodeURIComponent(this._options.interval) +
                    (this._options.toolbar_bg
                        ? "&toolbarbg=" +
                          encodeURIComponent(
                              this._options.toolbar_bg.replace("#", "")
                          )
                        : "") +
                    (this._options.studies_access
                        ? "&studiesAccess=" +
                          encodeURIComponent(
                              JSON.stringify(this._options.studies_access)
                          )
                        : "") +
                    "&widgetbar=" +
                    encodeURIComponent(
                        JSON.stringify(this._options.widgetbar)
                    ) +
                    (this._options.drawings_access
                        ? "&drawingsAccess=" +
                          encodeURIComponent(
                              JSON.stringify(this._options.drawings_access)
                          )
                        : "") +
                    "&timeFrames=" +
                    encodeURIComponent(
                        JSON.stringify(this._options.time_frames)
                    ) +
                    "&locale=" +
                    encodeURIComponent(this._options.locale) +
                    "&uid=" +
                    encodeURIComponent(this._id) +
                    "&clientId=" +
                    encodeURIComponent(String(this._options.client_id)) +
                    "&userId=" +
                    encodeURIComponent(String(this._options.user_id)) +
                    (this._options.charts_storage_url
                        ? "&chartsStorageUrl=" +
                          encodeURIComponent(this._options.charts_storage_url)
                        : "") +
                    (this._options.charts_storage_api_version
                        ? "&chartsStorageVer=" +
                          encodeURIComponent(
                              this._options.charts_storage_api_version
                          )
                        : "") +
                    (this._options.custom_css_url
                        ? "&customCSS=" +
                          encodeURIComponent(this._options.custom_css_url)
                        : "") +
                    (this._options.custom_font_family
                        ? "&customFontFamily=" +
                          encodeURIComponent(this._options.custom_font_family)
                        : "") +
                    (this._options.auto_save_delay
                        ? "&autoSaveDelay=" +
                          encodeURIComponent(
                              String(this._options.auto_save_delay)
                          )
                        : "") +
                    "&debug=" +
                    encodeURIComponent(String(this._options.debug)) +
                    (this._options.snapshot_url
                        ? "&snapshotUrl=" +
                          encodeURIComponent(this._options.snapshot_url)
                        : "") +
                    (this._options.timezone
                        ? "&timezone=" +
                          encodeURIComponent(this._options.timezone)
                        : "") +
                    (this._options.study_count_limit
                        ? "&studyCountLimit=" +
                          encodeURIComponent(
                              String(this._options.study_count_limit)
                          )
                        : "") +
                    (this._options.symbol_search_request_delay
                        ? "&ssreqdelay=" +
                          encodeURIComponent(
                              String(this._options.symbol_search_request_delay)
                          )
                        : "") +
                    (this._options.compare_symbols
                        ? "&compareSymbols=" +
                          encodeURIComponent(
                              JSON.stringify(this._options.compare_symbols)
                          )
                        : "") +
                    (this._options.theme
                        ? "&theme=" +
                          encodeURIComponent(String(this._options.theme))
                        : "") +
                    (this._options.header_widget_buttons_mode
                        ? "&header_widget_buttons_mode=" +
                          encodeURIComponent(
                              String(this._options.header_widget_buttons_mode)
                          )
                        : "") +
                    (this._options.time_scale
                        ? "&time_scale=" +
                          encodeURIComponent(
                              JSON.stringify(this._options.time_scale)
                          )
                        : "");
            return (
                (o.hash = s),
                `<iframe \n\t\t\tid="${this._id}" name="${this._id}" src="${
                    o.href
                }" data-widget-options="${s}"\n\t\t\t${
                    this._options.autosize || this._options.fullscreen
                        ? ""
                        : `width="${this._options.width}" height="${this._options.height}"`
                } title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;">\n\t\t</iframe>`
            );
        }
    };
    return (
        (window.TradingView = window.TradingView || {}),
        (window.TradingView.version = a),
        (t.version = a),
        (t.widget = d),
        t
    );
})({});
