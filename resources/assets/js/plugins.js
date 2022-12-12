/*
 *  Document   : plugins.js
 *  Author     : Various
 *  Description: Jquery Plugins in one file for consistency
 *
 *  Feel free to remove the plugins you won't use (along with their style - if there is one - in css/plugins.css)
 *  or include them separately if you are going to use them only in few pages of your project.
 *  I've included this file along with css/plugins.css in all pages to make all the plugins
 *  available everywhere with the minimum cost (few http requests).
 *
 *  Most plugins are initialized on specific classes in app.js - uiInit() to be available for use in any page.
 *  You can remove the initializations from app.js if you like and only put them in the pages you will use them :-)
 */

/* Avoid `console` errors in browsers that lack a console */
(function () {
    var e;
    var t = function () {
    };
    var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var r = n.length;
    var i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        if (!i[e]) {
            i[e] = t
        }
    }
})();

/*! jQuery UI - v1.11.4 - 2015-04-01
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, draggable.js, resizable.js, sortable.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () {
                var t = e(this);
                return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (i) {
            var s = e.attr(i, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (t) {
            if (void 0 !== t)return this.css("zIndex", t);
            if (this.length)for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
                n = n.parent()
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        }, call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0, n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, n = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {widgetEventPrefix: a ? r.widgetEventPrefix || t : t}, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)for (i in a[o])s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (a) {
            var o = "string" == typeof a, r = n.call(arguments, 1), h = this;
            return o ? this.each(function () {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            })), h
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length)return e.widget.extend({}, this.options);
            if ("string" == typeof t)if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                if (t = s.pop(), 1 === arguments.length)return void 0 === n[t] ? null : n[t];
                n[t] = i
            } else {
                if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
                o[t] = i
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e)this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }

                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function () {
        a = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!a) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this, s = 1 === t.which, n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button)return this._mouseUp(t);
                if (!t.which)return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var i = this.document[0];
            if (this.handleElement.is(t.target))try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
            } catch (s) {
            }
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}
        },
        _mouseDrag: function (t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1)return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (t) {
            var i = this.options, s = e.isFunction(i.helper), n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition)return {top: 0, left: 0};
            var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, n = this.options, a = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (e, t) {
            var i, s, n, a, o = this.options, r = this._isRootNode(this.scrollParent[0]), h = e.pageX, l = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i, s) {
            var n = e.extend({}, i, {item: s.element});
            s.sortables = [], e(s.options.connectToSortable).each(function () {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
            })
        }, stop: function (t, i, s) {
            var n = e.extend({}, i, {item: s.element});
            s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
                var e = this;
                e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
            })
        }, drag: function (t, i, s) {
            e.each(s.sortables, function () {
                var n = !1, a = this;
                a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
                    return i.helper[0]
                }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
                    this.refreshPositions()
                }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, i, s) {
            var n = e("body"), a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._cursor && e("body").css("cursor", n._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i, s) {
            var n = e(i.helper), a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (t, i, s) {
            var n = s.options, a = !1, o = s.scrollParentNotHidden[0], r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, i, s) {
            var n = s.options;
            s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var t = e(this), i = t.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        }, drag: function (t, i, s) {
            var n, a, o, r, h, l, u, d, c, p, f = s.options, m = f.snapTolerance, g = i.offset.left, v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height;
            for (c = s.snapElements.length - 1; c >= 0; c--)h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = n || a || o || r || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, i, s) {
            var n, a = s.options, o = e.makeArray(e(a.stack)).sort(function (t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
                e(this).css("zIndex", n + t)
            }), this.css("zIndex", n + o.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i, s) {
            var n = e(i.helper), a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (e) {
            return parseInt(e, 10) || 0
        },
        _isNumber: function (e) {
            return !isNaN(parseInt(e, 10))
        },
        _hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow"))return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        },
        _create: function () {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = e(), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function (t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles)this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {mousedown: o._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i, s, n = !1;
            for (i in this.handles)s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var i, s, n, a = this.options, o = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: o.width(), height: o.height()}, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {width: o.width(), height: o.height()}, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var i, s, n = this.originalMousePosition, a = this.axis, o = t.pageX - n.left || 0, r = t.pageY - n.top || 0, h = this._change[a];
            return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                top: h,
                left: r
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function (e) {
            var t, i, s, n, a, o = this.options;
            a = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position, i = this.size, s = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries, i = this.axis, s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width, n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height, a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width, o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height, r = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height, l = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i);
            return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function (e) {
            for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++)i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {width: this.originalSize.width + t}
            }, w: function (e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + t, width: i.width - t}
            }, n: function (e, t, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i, height: s.height - i}
            }, s: function (e, t, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, sw: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }, ne: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, nw: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = e(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {
                width: i.size.width - r,
                height: i.size.height - o
            }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var t, i, s, n, a, o, r, h = e(this).resizable("instance"), l = h.options, u = h.element, d = l.containment, c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {left: 0, top: 0}, h.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
                i[e] = h._num(t.css("padding" + s))
            }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
                element: c,
                left: s.left,
                top: s.top,
                width: o,
                height: r
            }))
        }, resize: function (t) {
            var i, s, n, a, o = e(this).resizable("instance"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, d = {
                top: 0,
                left: 0
            }, c = o.containerElement, p = !0;
            c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        }, stop: function () {
            var t = e(this).resizable("instance"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).resizable("instance"), i = t.options;
            e(i.alsoResize).each(function () {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        }, resize: function (t, i) {
            var s = e(this).resizable("instance"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {
                height: s.size.height - a.height || 0,
                width: s.size.width - a.width || 0,
                top: s.position.top - o.top || 0,
                left: s.position.left - o.left || 0
            };
            e(n.alsoResize).each(function () {
                var t = e(this), s = e(this).data("ui-resizable-alsoresize"), n = {}, a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(a, function (e, t) {
                    var i = (s[t] || 0) + (r[t] || 0);
                    i && i >= 0 && (n[t] = i || null)
                }), t.css(n)
            })
        }, stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).resizable("instance"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, i = e(this).resizable("instance"), s = i.options, n = i.size, a = i.originalSize, o = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, u = h[1] || 1, d = Math.round((n.width - a.width) / l) * l, c = Math.round((n.height - a.height) / u) * u, p = a.width + d, f = a.height + c, m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p, y = s.minHeight && s.minHeight > f;
            s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
        }
    }), e.ui.resizable, e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (e, t, i) {
            return e >= t && t + i > e
        },
        _isFloating: function (e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--)this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (t, i) {
            var s = null, n = !1, a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
            }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
                this === t.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (t, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var i, s, n, a, o = this.options, r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
                this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, e(i).each(function () {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !s.length && t.key && s.push(t.key + "="), s.join("&")
        },
        toArray: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, i.each(function () {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = e.left, o = a + e.width, r = e.top, h = r + e.height, l = this.offset.click.top, u = this.offset.click.left, d = "x" === this.options.axis || s + l > r && h > s + l, c = "y" === this.options.axis || t + u > a && o > t + u, p = d && c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (e) {
            var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = t && i, n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function i() {
                r.push(this)
            }

            var s, n, a, o, r = [], h = [], l = this._connectWith();
            if (l && t)for (s = l.length - 1; s >= 0; s--)for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--)o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i);
            return e(r)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function (e) {
                for (var i = 0; t.length > i; i++)if (t[i] === e.item[0])return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, h, l, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]], c = this._connectWith();
            if (c && this.ready)for (i = c.length - 1; i >= 0; i--)for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--)a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {item: this.currentItem}) : e(a.options.items, a.element), a]), this.containers.push(a));
            for (i = d.length - 1; i >= 0; i--)for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++)h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
                item: h,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = t.currentItem[0].nodeName.toLowerCase(), n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                }, update: function (e, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function (t, i) {
            var s = this;
            t.children().each(function () {
                e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function (t) {
            var i, s, n, a, o, r, h, l, u, d, c = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--)if (!e.contains(this.currentItem[0], this.containers[i].element[0]))if (this._intersectsWith(this.containers[i].containerCache)) {
                if (c && e.contains(this.containers[i].element[0], c.element[0]))continue;
                c = this.containers[i], p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (c)if (1 === this.containers.length)this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--)e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                if (!a && !this.options.dropOnEmpty)return;
                if (this.currentContainer === this.containers[p])return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (t) {
            var i, s, n = this.options, a = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (e, t) {
            function i(e, t, i) {
                return function (s) {
                    i._trigger(e, s, t._uiHash(t))
                }
            }

            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && n.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (n.push(function (e) {
                this._trigger("remove", e, this._uiHash())
            }), n.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (s = 0; n.length > s; s++)n[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
});

/*!
 DataTables 1.10.10
 ©2008-2015 SpryMedia Ltd - datatables.net/license
 */
(function (h) {
    "function" === typeof define && define.amd ? define(["jquery"], function (E) {
        return h(E, window, document)
    }) : "object" === typeof exports ? module.exports = function (E, H) {
        E || (E = window);
        H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
        return h(H, E, E.document)
    } : h(jQuery, window, document)
})(function (h, E, H, k) {
    function Y(a) {
        var b, c, d = {};
        h.each(a, function (e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " "))c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && Y(a[e])
        });
        a._hungarianMap = d
    }

    function J(a, b, c) {
        a._hungarianMap || Y(a);
        var d;
        h.each(b, function (e) {
            d = a._hungarianMap[e];
            if (d !== k && (c || b[d] === k))"o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e]
        })
    }

    function Fa(a) {
        var b = m.defaults.oLanguage, c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && db(a)
    }

    function eb(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX =
            a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)for (var b = 0, c = a.length; b < c; b++)a[b] && J(m.models.oSearch, a[b])
    }

    function fb(a) {
        A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        b && !h.isArray(b) && (a.aDataSort = [b])
    }

    function gb(a) {
        if (!m.__browser) {
            var b = {};
            m.__browser = b;
            var c = h("<div/>").css({
                position: "fixed",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(h("<div/>").css({
                position: "absolute", top: 1, left: 1,
                width: 100, overflow: "scroll"
            }).append(h("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body"), d = c.children(), e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        h.extend(a.oBrowser, m.__browser);
        a.oScroll.iBarWidth = m.__browser.barWidth
    }

    function hb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (; d !== e;)a.hasOwnProperty(d) &&
        (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        return g
    }

    function Ga(a, b) {
        var c = m.defaults.column, d = a.aoColumns.length, c = h.extend({}, m.models.oColumn, c, {
            nTh: b ? b : H.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [d],
            mData: c.mData ? c.mData : d,
            idx: d
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, m.models.oSearch, c[d]);
        la(a, d, h(b).data())
    }

    function la(a, b, c) {
        var b = a.aoColumns[b], d = a.oClasses, e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var f =
                (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== k && null !== c && (fb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
        var g = b.mData, j = Q(g), i = b.mRender ? Q(b.mRender) : null, c = function (a) {
            return "string" === typeof a && -1 !== a.indexOf("@")
        };
        b._bAttrSrc = h.isPlainObject(g) &&
            (c(g.sort) || c(g.type) || c(g.filter));
        b.fnGetData = function (a, b, c) {
            var d = j(a, b, k, c);
            return i && b ? i(d, b, a, c) : d
        };
        b.fnSetData = function (a, b, c) {
            return R(g)(a, b, c)
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass =
            d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function U(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ha(a);
            for (var c = 0, d = b.length; c < d; c++)b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && Z(a);
        v(a, null, "column-sizing", [a])
    }

    function $(a, b) {
        var c = aa(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null
    }

    function ba(a, b) {
        var c = aa(a, "bVisible"), c = h.inArray(b, c);
        return -1 !== c ? c : null
    }

    function ca(a) {
        return aa(a,
            "bVisible").length
    }

    function aa(a, b) {
        var c = [];
        h.map(a.aoColumns, function (a, e) {
            a[b] && c.push(e)
        });
        return c
    }

    function Ia(a) {
        var b = a.aoColumns, c = a.aoData, d = m.ext.type.detect, e, f, g, j, i, h, l, q, u;
        e = 0;
        for (f = b.length; e < f; e++)if (l = b[e], u = [], !l.sType && l._sManualType)l.sType = l._sManualType; else if (!l.sType) {
            g = 0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    u[i] === k && (u[i] = B(a, i, e, "type"));
                    q = d[g](u[i], a);
                    if (!q && g !== d.length - 1)break;
                    if ("html" === q)break
                }
                if (q) {
                    l.sType = q;
                    break
                }
            }
            l.sType || (l.sType = "string")
        }
    }

    function ib(a,
                b, c, d) {
        var e, f, g, j, i, o, l = a.aoColumns;
        if (b)for (e = b.length - 1; 0 <= e; e--) {
            o = b[e];
            var q = o.targets !== k ? o.targets : o.aTargets;
            h.isArray(q) || (q = [q]);
            f = 0;
            for (g = q.length; f < g; f++)if ("number" === typeof q[f] && 0 <= q[f]) {
                for (; l.length <= q[f];)Ga(a);
                d(q[f], o)
            } else if ("number" === typeof q[f] && 0 > q[f])d(l.length + q[f], o); else if ("string" === typeof q[f]) {
                j = 0;
                for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, o)
            }
        }
        if (c) {
            e = 0;
            for (a = c.length; e < a; e++)d(e, c[e])
        }
    }

    function N(a, b, c, d) {
        var e = a.aoData.length, f = h.extend(!0,
            {}, m.models.oRow, {src: c ? "dom" : "data", idx: e});
        f._aData = b;
        a.aoData.push(f);
        for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++)g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
        return e
    }

    function ma(a, b) {
        var c;
        b instanceof h || (b = h(b));
        return b.map(function (b, e) {
            c = Ka(a, e);
            return N(a, c.data, e, c.cells)
        })
    }

    function B(a, b, c, d) {
        var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, i = f.fnGetData(g, d, {
            settings: a,
            row: b,
            col: c
        });
        if (i === k)return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j)i = j; else if ("function" === typeof i)return i.call(g);
        return null === i && "display" == d ? "" : i
    }

    function jb(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {settings: a, row: b, col: c})
    }

    function La(a) {
        return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
            return a.replace(/\\./g, ".")
        })
    }

    function Q(a) {
        if (h.isPlainObject(a)) {
            var b =
            {};
            h.each(a, function (a, c) {
                c && (b[a] = Q(c))
            });
            return function (a, c, f, g) {
                var j = b[c] || b._;
                return j !== k ? j(a, c, f, g) : a
            }
        }
        if (null === a)return function (a) {
            return a
        };
        if ("function" === typeof a)return function (b, c, f, g) {
            return a(b, c, f, g)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function (a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = La(f);
                    for (var i = 0, o = j.length; i < o; i++) {
                        f = j[i].match(da);
                        g = j[i].match(V);
                        if (f) {
                            j[i] = j[i].replace(da, "");
                            "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j =
                                j.join(".");
                            if (h.isArray(a)) {
                                i = 0;
                                for (o = a.length; i < o; i++)g.push(c(a[i], b, j))
                            }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a);
                            break
                        } else if (g) {
                            j[i] = j[i].replace(V, "");
                            a = a[j[i]]();
                            continue
                        }
                        if (null === a || a[j[i]] === k)return k;
                        a = a[j[i]]
                    }
                }
                return a
            };
            return function (b, e) {
                return c(b, e, a)
            }
        }
        return function (b) {
            return b[a]
        }
    }

    function R(a) {
        if (h.isPlainObject(a))return R(a._);
        if (null === a)return function () {
        };
        if ("function" === typeof a)return function (b, d, e) {
            a(b, "set", d, e)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") ||
            -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function (a, d, e) {
                var e = La(e), f;
                f = e[e.length - 1];
                for (var g, j, i = 0, o = e.length - 1; i < o; i++) {
                    g = e[i].match(da);
                    j = e[i].match(V);
                    if (g) {
                        e[i] = e[i].replace(da, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join(".");
                        if (h.isArray(d)) {
                            j = 0;
                            for (o = d.length; j < o; j++)f = {}, b(f, d[j], g), a[e[i]].push(f)
                        } else a[e[i]] = d;
                        return
                    }
                    j && (e[i] = e[i].replace(V, ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k)a[e[i]] = {};
                    a = a[e[i]]
                }
                if (f.match(V))a[f.replace(V, "")](d); else a[f.replace(da, "")] =
                    d
            };
            return function (c, d) {
                return b(c, d, a)
            }
        }
        return function (b, d) {
            b[a] = d
        }
    }

    function Ma(a) {
        return D(a.aoData, "_aData")
    }

    function na(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function oa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++)a[e] == b ? d = e : a[e] > b && a[e]--;
        -1 != d && c === k && a.splice(d, 1)
    }

    function ea(a, b, c, d) {
        var e = a.aoData[b], f, g = function (c, d) {
            for (; c.childNodes.length;)c.removeChild(c.firstChild);
            c.innerHTML = B(a, b, d, "display")
        };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src)e._aData =
            Ka(a, e, d, d === k ? k : e._aData).data; else {
            var j = e.anCells;
            if (j)if (d !== k)g(j[d], d); else {
                c = 0;
                for (f = j.length; c < f; c++)g(j[c], c)
            }
        }
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== k)g[d].sType = null; else {
            c = 0;
            for (f = g.length; c < f; c++)g[c].sType = null;
            Na(a, e)
        }
    }

    function Ka(a, b, c, d) {
        var e = [], f = b.firstChild, g, j, i = 0, o, l = a.aoColumns, q = a._rowReadObject, d = d !== k ? d : q ? {} : [], u = function (a, b) {
            if ("string" === typeof a) {
                var c = a.indexOf("@");
                -1 !== c && (c = a.substring(c + 1), R(a)(d, b.getAttribute(c)))
            }
        }, S = function (a) {
            if (c === k ||
                c === i)j = l[i], o = h.trim(a.innerHTML), j && j._bAttrSrc ? (R(j.mData._)(d, o), u(j.mData.sort, a), u(j.mData.type, a), u(j.mData.filter, a)) : q ? (j._setter || (j._setter = R(j.mData)), j._setter(d, o)) : d[i] = o;
            i++
        };
        if (f)for (; f;) {
            g = f.nodeName.toUpperCase();
            if ("TD" == g || "TH" == g)S(f), e.push(f);
            f = f.nextSibling
        } else {
            e = b.anCells;
            f = 0;
            for (g = e.length; f < g; f++)S(e[f])
        }
        if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && R(a.rowId)(d, b);
        return {data: d, cells: e}
    }

    function Ja(a, b, c, d) {
        var e = a.aoData[b], f = e._aData, g = [], j, i, h, l, q;
        if (null ===
            e.nTr) {
            j = c || H.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            Na(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                h = a.aoColumns[l];
                i = c ? d[l] : H.createElement(h.sCellType);
                i._DT_CellIndex = {row: b, column: l};
                g.push(i);
                if (!c || h.mRender || h.mData !== l)i.innerHTML = B(a, b, l, "display");
                h.sClass && (i.className += " " + h.sClass);
                h.bVisible && !c ? j.appendChild(i) : !h.bVisible && c && i.parentNode.removeChild(i);
                h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            }
            v(a, "aoRowCreatedCallback", null, [j, f, b])
        }
        e.nTr.setAttribute("role",
            "row")
    }

    function Na(a, b) {
        var c = b.nTr, d = b._aData;
        if (c) {
            var e = a.rowIdFn(d);
            e && (c.id = e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 === h("th, td", g).length, o = a.oClasses, l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++)f = l[b], d = h(f.nTh).addClass(f.sClass),
        i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, o);
        i && fa(a.aoHeader, g);
        h(g).find(">tr").attr("role", "row");
        h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);
        h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);
        if (null !== j) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++)f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
        }
    }

    function ga(a, b, c) {
        var d, e, f, g = [], j = [], i = a.aoColumns.length, o;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();
                g[d].nTr = b[d].nTr;
                for (f = i - 1; 0 <= f; f--)!a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([])
            }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr)for (; f = a.firstChild;)a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++)if (o = i = 1, j[d][f] === k) {
                    a.appendChild(g[d][f].cell);
                    for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;)j[d + i][f] = 1, i++;
                    for (; g[d][f + o] !== k && g[d][f].cell == g[d][f + o].cell;) {
                        for (c =
                                 0; c < i; c++)j[d + c][f + o] = 1;
                        o++
                    }
                    h(g[d][f].cell).attr("rowspan", i).attr("colspan", o)
                }
            }
        }
    }

    function O(a) {
        var b = v(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== h.inArray(!1, b))C(a, !1); else {
            var b = [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == y(a), i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            var g = a._iDisplayStart, o = a.fnDisplayEnd();
            if (a.bDeferLoading)a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (j) {
                if (!a.bDestroying && !lb(a))return
            } else a.iDraw++;
            if (0 !== i.length) {
                f = j ? a.aoData.length : o;
                for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j], q = a.aoData[l];
                    null === q.nTr && Ja(a, l);
                    l = q.nTr;
                    if (0 !== e) {
                        var u = d[c % e];
                        q._sRowStripe != u && (h(l).removeClass(q._sRowStripe).addClass(u), q._sRowStripe = u)
                    }
                    v(a, "aoRowCallback", null, [l, q._aData, c, j]);
                    b.push(l);
                    c++
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {"class": e ? d[0] : ""}).append(h("<td />", {
                valign: "top", colSpan: ca(a),
                "class": a.oClasses.sRowEmpty
            }).html(c))[0];
            v(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, o, i]);
            v(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, o, i]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            v(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function T(a, b) {
        var c = a.oFeatures, d = c.bFilter;
        c.bSort && mb(a);
        d ? ha(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        O(a);
        a._drawHold = !1
    }

    function nb(a) {
        var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", {
            id: a.sTableId + "_wrapper",
            "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
        });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, o, l, q, u = 0; u < f.length; u++) {
            g = null;
            j = f[u];
            if ("<" == j) {
                i = h("<div/>")[0];
                o = f[u + 1];
                if ("'" == o || '"' == o) {
                    l = "";
                    for (q = 2; f[u + q] != o;)l += f[u + q], q++;
                    "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);
                    -1 != l.indexOf(".") ? (o = l.split("."),
                        i.id = o[0].substr(1, o[0].length - 1), i.className = o[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    u += q
                }
                e.append(i);
                e = h(i)
            } else if (">" == j)e = e.parent(); else if ("l" == j && d.bPaginate && d.bLengthChange)g = ob(a); else if ("f" == j && d.bFilter)g = pb(a); else if ("r" == j && d.bProcessing)g = qb(a); else if ("t" == j)g = rb(a); else if ("i" == j && d.bInfo)g = sb(a); else if ("p" == j && d.bPaginate)g = tb(a); else if (0 !== m.ext.feature.length) {
                i = m.ext.feature;
                q = 0;
                for (o = i.length; q < o; q++)if (j == i[q].cFeature) {
                    g = i[q].fnInit(a);
                    break
                }
            }
            g &&
            (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function fa(a, b) {
        var c = h(b).children("tr"), d, e, f, g, j, i, o, l, q, u;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++)a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g];)g++;
                    o = g;
                    u = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++)for (g =
                                                    0; g < q; g++)a[f + g][o + j] = {
                        cell: e,
                        unique: u
                    }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }

    function qa(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], fa(c, b)));
        for (var b = 0, e = c.length; b < e; b++)for (var f = 0, g = c[b].length; f < g; f++)if (c[b][f].unique && (!d[f] || !a.bSortCellsTop))d[f] = c[b][f].cell;
        return d
    }

    function ra(a, b, c) {
        v(a, "aoServerParams", "serverParams", [b]);
        if (b && h.isArray(b)) {
            var d = {}, e = /(.*?)\[\]$/;
            h.each(b, function (a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var f, g = a.ajax,
            j = a.oInstance, i = function (b) {
                v(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (h.isPlainObject(g) && g.data) {
            f = g.data;
            var o = h.isFunction(f) ? f(b, a) : f, b = h.isFunction(f) && o ? o : h.extend(!0, b, o);
            delete g.data
        }
        o = {
            data: b, success: function (b) {
                var c = b.error || b.sError;
                c && K(a, 0, c);
                a.json = b;
                i(b)
            }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) {
                var d = v(a, null, "xhr", [a, null, a.jqXHR]);
                -1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));
                C(a, !1)
            }
        };
        a.oAjaxData =
            b;
        v(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
            return {name: b, value: a}
        }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(o, {url: g || a.sAjaxSource})) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(o, g)), g.data = f)
    }

    function lb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ra(a, ub(a), function (b) {
            vb(a, b)
        }), !1) : !0
    }

    function ub(a) {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, o,
            l, q = W(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var k = function (a, b) {
            j.push({name: a, value: b})
        };
        k("sEcho", a.iDraw);
        k("iColumns", c);
        k("sColumns", D(b, "sName").join(","));
        k("iDisplayStart", g);
        k("iDisplayLength", i);
        var S = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: g,
            length: i,
            search: {value: e.sSearch, regex: e.bRegex}
        };
        for (g = 0; g < c; g++)o = b[g], l = f[g], i = "function" == typeof o.mData ? "function" : o.mData, S.columns.push({
            data: i, name: o.sName, searchable: o.bSearchable, orderable: o.bSortable, search: {
                value: l.sSearch,
                regex: l.bRegex
            }
        }), k("mDataProp_" + g, i), d.bFilter && (k("sSearch_" + g, l.sSearch), k("bRegex_" + g, l.bRegex), k("bSearchable_" + g, o.bSearchable)), d.bSort && k("bSortable_" + g, o.bSortable);
        d.bFilter && (k("sSearch", e.sSearch), k("bRegex", e.bRegex));
        d.bSort && (h.each(q, function (a, b) {
            S.order.push({column: b.col, dir: b.dir});
            k("iSortCol_" + a, b.col);
            k("sSortDir_" + a, b.dir)
        }), k("iSortingCols", q.length));
        b = m.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : S : b ? j : S
    }

    function vb(a, b) {
        var c = sa(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e =
            b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) {
            if (1 * d < a.iDraw)return;
            a.iDraw = 1 * d
        }
        na(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++)N(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        O(a);
        a._bInitComplete || ta(a, b);
        a.bAjaxDataGet = !0;
        C(a, !1)
    }

    function sa(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ? b.aaData ||
        b[c] : "" !== c ? Q(c)(b) : b
    }

    function pb(a) {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g, b = h("<div/>", {
            id: !f.f ? c + "_filter" : null,
            "class": b.sFilter
        }).append(h("<label/>").append(j)), f = function () {
            var b = !this.value ? "" : this.value;
            b != e.sSearch && (ha(a, {
                sSearch: b,
                bRegex: e.bRegex,
                bSmart: e.bSmart,
                bCaseInsensitive: e.bCaseInsensitive
            }), a._iDisplayStart = 0, O(a))
        }, g = null !==
        a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? ua(f, g) : f).bind("keypress.DT", function (a) {
            if (13 == a.keyCode)return !1
        }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function (b, c) {
            if (a === c)try {
                i[0] !== H.activeElement && i.val(e.sSearch)
            } catch (d) {
            }
        });
        return b[0]
    }

    function ha(a, b, c) {
        var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) {
            d.sSearch = a.sSearch;
            d.bRegex = a.bRegex;
            d.bSmart = a.bSmart;
            d.bCaseInsensitive = a.bCaseInsensitive
        };
        Ia(a);
        if ("ssp" != y(a)) {
            wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++)xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            yb(a)
        } else f(b);
        a.bFiltered = !0;
        v(a, null, "search", [a])
    }

    function yb(a) {
        for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
            for (var j = [], i = 0, o = c.length; i < o; i++)e = c[i], d = a.aoData[e], b[f](a,
                d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j)
        }
    }

    function xb(a, b, c, d, e, f) {
        if ("" !== b)for (var g = a.aiDisplay, d = Qa(b, d, e, f), e = g.length - 1; 0 <= e; e--)b = a.aoData[g[e]]._aFilterData[c], d.test(b) || g.splice(e, 1)
    }

    function wb(a, b, c, d, e, f) {
        var d = Qa(b, d, e, f), e = a.oPreviousSearch.sSearch, f = a.aiDisplayMaster, g;
        0 !== m.ext.search.length && (c = !0);
        g = zb(a);
        if (0 >= b.length)a.aiDisplay = f.slice(); else {
            if (g || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted)a.aiDisplay = f.slice();
            b = a.aiDisplay;
            for (c = b.length - 1; 0 <=
            c; c--)d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
        }
    }

    function Qa(a, b, c, d) {
        a = b ? a : va(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
                if ('"' === a.charAt(0))var b = a.match(/^"(.*)"$/), a = b ? b[1] : a;
                return a.replace('"', "")
            }).join(")(?=.*?") + ").*$");
        return RegExp(a, d ? "i" : "")
    }

    function va(a) {
        return a.replace(Yb, "\\$1")
    }

    function zb(a) {
        var b = a.aoColumns, c, d, e, f, g, j, i, h, l = m.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d < f; d++)if (h = a.aoData[d], !h._aFilterData) {
            j = [];
            e = 0;
            for (g = b.length; e <
            g; e++)c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (wa.innerHTML = i, i = Zb ? wa.textContent : wa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
            h._aFilterData = j;
            h._sFilterRow = j.join("  ");
            c = !0
        }
        return c
    }

    function Ab(a) {
        return {search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive}
    }

    function Bb(a) {
        return {
            sSearch: a.search, bSmart: a.smart, bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function sb(a) {
        var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", {
            "class": a.oClasses.sInfo,
            id: !c ? b + "_info" : null
        });
        c || (a.aoDrawCallback.push({
            fn: Cb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Cb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty;
            g !== f &&
            (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Db(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j)
        }
    }

    function Db(a, b) {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f /
            e)))
    }

    function ia(a) {
        var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            nb(a);
            kb(a);
            ga(a, a.aoHeader);
            ga(a, a.aoFooter);
            C(a, !0);
            c.bAutoWidth && Ha(a);
            b = 0;
            for (c = e.length; b < c; b++)f = e[b], f.sWidth && (f.nTh.style.width = w(f.sWidth));
            v(a, null, "preInit", [a]);
            T(a);
            e = y(a);
            if ("ssp" != e || g)"ajax" == e ? ra(a, [], function (c) {
                var f = sa(a, c);
                for (b = 0; b < f.length; b++)N(a, f[b]);
                a.iInitDisplayStart = d;
                T(a);
                C(a, !1);
                ta(a, c)
            }, a) : (C(a, !1), ta(a))
        } else setTimeout(function () {
            ia(a)
        }, 200)
    }

    function ta(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && U(a);
        v(a, null, "plugin-init", [a, b]);
        v(a, "aoInitComplete", "init", [a, b])
    }

    function Ra(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Sa(a);
        v(a, null, "length", [a, c])
    }

    function ob(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            "class": b.sLengthSelect
        }), g = 0, j = f.length; g < j; g++)e[0][g] = new Option(d[g], f[g]);
        var i = h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).bind("change.DT", function () {
            Ra(a, h(this).val());
            O(a)
        });
        h(a.nTable).bind("length.dt.DT", function (b, c, d) {
            a === c && h("select", i).val(d)
        });
        return i[0]
    }

    function tb(a) {
        var b = a.sPaginationType, c = m.ext.pager[b], d = "function" === typeof c, e = function (a) {
            O(a)
        }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId +
            "_paginate", a.aoDrawCallback.push({
            fn: function (a) {
                if (d) {
                    var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === i, b = l ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), k, l = 0;
                    for (k = f.p.length; l < k; l++)Pa(a, "pageButton")(a, f.p[l], l, h, b, i)
                } else c.fnUpdate(a, e)
            }, sName: "pagination"
        }));
        return b
    }

    function Ta(a, b, c) {
        var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" ==
        b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (v(a, null, "page", [a]), c && O(a));
        return b
    }

    function qb(a) {
        return h("<div/>", {
            id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        v(a, null, "processing", [a, b])
    }

    function rb(a) {
        var b = h(a.nTable);
        b.attr("role",
            "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY)return a.nTable;
        var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), o = h(b[0].cloneNode(!1)), l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", {"class": f.sScrollWrapper}).append(h("<div/>", {"class": f.sScrollHead}).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? !d ? null : w(d) : "100%"
        }).append(h("<div/>", {"class": f.sScrollHeadInner}).css({
            "box-sizing": "content-box", width: c.sXInner ||
            "100%"
        }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {"class": f.sScrollBody}).css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : w(d)
        }).append(b));
        l && i.append(h("<div/>", {"class": f.sScrollFoot}).css({
            overflow: "hidden",
            border: 0,
            width: d ? !d ? null : w(d) : "100%"
        }).append(h("<div/>", {"class": f.sScrollFootInner}).append(o.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(),
            k = b[0], f = b[1], u = l ? b[2] : null;
        if (d)h(f).on("scroll.DT", function () {
            var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (u.scrollLeft = a)
        });
        h(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = u;
        a.aoDrawCallback.push({fn: Z, sName: "scrolling"});
        return i[0]
    }

    function Z(a) {
        var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth, f = h(a.nScrollHead), g = f[0].style, j = f.children("div"), i = j[0].style, o = j.children("table"), j = a.nScrollBody, l = h(j), q = j.style, u = h(a.nScrollFoot).children("div"),
            m = u.children("table"), n = h(a.nTHead), p = h(a.nTable), t = p[0], v = t.style, r = a.nTFoot ? h(a.nTFoot) : null, Eb = a.oBrowser, Ua = Eb.bScrollOversize, s, L, P, x, y = [], z = [], A = [], B, C = function (a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        L = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== L && a.scrollBarVis !== k)a.scrollBarVis = L, U(a); else {
            a.scrollBarVis = L;
            p.children("thead, tfoot").remove();
            x = n.clone().prependTo(p);
            n = n.find("tr");
            L = x.find("tr");
            x.find("th, td").removeAttr("tabindex");
            r && (P = r.clone().prependTo(p), s = r.find("tr"), P = P.find("tr"));
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(qa(a, x), function (b, c) {
                B = $(a, b);
                c.style.width = a.aoColumns[B].sWidth
            });
            r && I(function (a) {
                a.style.width = ""
            }, P);
            f = p.outerWidth();
            if ("" === c) {
                v.width = "100%";
                if (Ua && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y")))v.width = w(p.outerWidth() - b);
                f = p.outerWidth()
            } else"" !== d && (v.width = w(d), f = p.outerWidth());
            I(C, L);
            I(function (a) {
                    A.push(a.innerHTML);
                    y.push(w(h(a).css("width")))
                },
                L);
            I(function (a, b) {
                a.style.width = y[b]
            }, n);
            h(L).height(0);
            r && (I(C, P), I(function (a) {
                z.push(w(h(a).css("width")))
            }, P), I(function (a, b) {
                a.style.width = z[b]
            }, s), h(P).height(0));
            I(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";
                a.style.width = y[b]
            }, L);
            r && I(function (a, b) {
                a.innerHTML = "";
                a.style.width = z[b]
            }, P);
            if (p.outerWidth() < f) {
                s = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (Ua && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y")))v.width =
                    w(s - b);
                ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6)
            } else s = "100%";
            q.width = w(s);
            g.width = w(s);
            r && (a.nScrollFoot.style.width = w(s));
            !e && Ua && (q.height = w(t.offsetHeight + b));
            c = p.outerWidth();
            o[0].style.width = w(c);
            i.width = w(c);
            d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right");
            i[e] = d ? b + "px" : "0px";
            r && (m[0].style.width = w(c), u[0].style.width = w(c), u[0].style[e] = d ? b + "px" : "0px");
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold)j.scrollTop =
                0
        }
    }

    function I(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
            g = b[e].firstChild;
            for (j = c ? c[e].firstChild : null; g;)1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++
        }
    }

    function Ha(a) {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, j = c.length, i = aa(a, "bVisible"), o = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, u = !1, m, n, p = a.oBrowser, d = p.bScrollOversize;
        (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
        for (m = 0; m < i.length; m++)n = c[i[m]], null !== n.sWidth &&
        (n.sWidth = Fb(n.sWidthOrig, k), u = !0);
        if (d || !u && !f && !e && j == ca(a) && j == o.length)for (m = 0; m < j; m++)i = $(a, m), null !== i && (c[i].sWidth = w(o.eq(m).width())); else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var t = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            o = qa(a, j.find("thead")[0]);
            for (m = 0; m < i.length; m++)n = c[i[m]], o[m].style.width = null !== n.sWidthOrig &&
            "" !== n.sWidthOrig ? w(n.sWidthOrig) : "", n.sWidthOrig && f && h(o[m]).append(h("<div/>").css({
                width: n.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)for (m = 0; m < i.length; m++)u = i[m], n = c[u], h(Gb(a, u)).clone(!1).append(n.sContentPadding).appendTo(t);
            n = h("<div/>").css(f || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) :
            l && j.width(l);
            for (m = e = 0; m < i.length; m++)k = h(o[m]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(o[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = w(k - g);
            b.style.width = w(e);
            n.remove()
        }
        l && (b.style.width = w(l));
        if ((l || f) && !a._reszEvt)b = function () {
            h(E).bind("resize.DT-" + a.sInstance, ua(function () {
                U(a)
            }))
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function ua(a, b) {
        var c = b !== k ? b : 200, d, e;
        return function () {
            var b = this, g = +new Date, j = arguments;
            d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
                d =
                    k;
                a.apply(b, j)
            }, c)) : (d = g, a.apply(b, j))
        }
    }

    function Fb(a, b) {
        if (!a)return 0;
        var c = h("<div/>").css("width", w(a)).appendTo(b || H.body), d = c[0].offsetWidth;
        c.remove();
        return d
    }

    function Gb(a, b) {
        var c = Hb(a, b);
        if (0 > c)return null;
        var d = a.aoData[c];
        return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
    }

    function Hb(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)c = B(a, f, b, "display") + "", c = c.replace($b, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        return e
    }

    function w(a) {
        return null ===
        a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function W(a) {
        var b, c, d = [], e = a.aoColumns, f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var o = [];
        f = function (a) {
            a.length && !h.isArray(a[0]) ? o.push(a) : h.merge(o, a)
        };
        h.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < o.length; a++) {
            i = o[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++)g = f[b], j = e[g].sType || "string", o[a]._idx === k && (o[a]._idx = h.inArray(o[a][1], e[g].asSorting)), d.push({
                src: i, col: g, dir: o[a][1],
                index: o[a]._idx, type: j, formatter: m.ext.type.order[j + "-pre"]
            })
        }
        return d
    }

    function mb(a) {
        var b, c, d = [], e = m.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h;
        Ia(a);
        h = W(a);
        b = 0;
        for (c = h.length; b < c; b++)j = h[b], j.formatter && g++, Ib(a, j.col);
        if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++)d[i[b]] = b;
            g === h.length ? i.sort(function (a, b) {
                var c, e, g, j, i = h.length, k = f[a]._aSortData, m = f[b]._aSortData;
                for (g = 0; g < i; g++)if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c)return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function (a, b) {
                var c, g, j, i, k = h.length, m = f[a]._aSortData, p = f[b]._aSortData;
                for (j = 0; j < k; j++)if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c)return c;
                c = d[a];
                g = d[b];
                return c < g ? -1 : c > g ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Jb(a) {
        for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g, "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort",
                "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function Va(a, b, c, d) {
        var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a, b) {
            var c = a._idx;
            c === k && (c = h.inArray(a[1], f));
            return c + 1 < f.length ? c + 1 : b ? null : 0
        };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx =
            b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
        T(a);
        "function" == typeof d && d(a)
    }

    function Oa(a, b, c, d) {
        var e = a.aoColumns[c];
        Wa(b, {}, function (b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
                Va(a, c, b.shiftKey, d);
                "ssp" !== y(a) && C(a, !1)
            }, 0)) : Va(a, c, b.shiftKey, d))
        })
    }

    function xa(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = W(a), e = a.oFeatures, f, g;
        if (e.bSort && e.bSortClasses) {
            e =
                0;
            for (f = b.length; e < f; e++)g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0;
            for (f = d.length; e < f; e++)g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Ib(a, b) {
        var c = a.aoColumns[b], d = m.ext.order[c.sSortDataType], e;
        d && (e = d.call(a.oInstance, a, b, ba(a, b)));
        for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d)f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function ya(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: h.extend(!0, [], a.aaSorting),
                search: Ab(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function (b, d) {
                    return {visible: b.bVisible, search: Ab(a.aoPreSearchCols[d])}
                })
            };
            v(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    }

    function Kb(a) {
        var b, c, d = a.aoColumns;
        if (a.oFeatures.bStateSave) {
            var e = a.fnStateLoadCallback.call(a.oInstance, a);
            if (e && e.time && (b = v(a, "aoStateLoadParams",
                    "stateLoadParams", [a, e]), -1 === h.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                a.oLoadedState = h.extend(!0, {}, e);
                e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start);
                e.length !== k && (a._iDisplayLength = e.length);
                e.order !== k && (a.aaSorting = [], h.each(e.order, function (b, c) {
                    a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c)
                }));
                e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search));
                b = 0;
                for (c = e.columns.length; b < c; b++) {
                    var f = e.columns[b];
                    f.visible !==
                    k && (d[b].bVisible = f.visible);
                    f.search !== k && h.extend(a.aoPreSearchCols[b], Bb(f.search))
                }
                v(a, "aoStateLoaded", "stateLoaded", [a, e])
            }
        }
    }

    function za(a) {
        var b = m.settings, a = h.inArray(a, D(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b)E.console && console.log && console.log(c); else if (b = m.ext, b = b.sErrMode || b.errMode, a && v(a, null, "error", [a, d, c]), "alert" ==
            b)alert(c); else {
            if ("throw" == b)throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function F(a, b, c, d) {
        h.isArray(c) ? h.each(c, function (c, d) {
            h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
        }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
    }

    function Lb(a, b, c) {
        var d, e;
        for (e in b)b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
        return a
    }

    function Wa(a, b, c) {
        h(a).bind("click.DT", b, function (b) {
            a.blur();
            c(b)
        }).bind("keypress.DT",
            b, function (a) {
                13 === a.which && (a.preventDefault(), c(a))
            }).bind("selectstart.DT", function () {
            return !1
        })
    }

    function z(a, b, c, d) {
        c && a[b].push({fn: c, sName: d})
    }

    function v(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function (b) {
            return b.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Sa(a) {
        var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b)b = 0;
        a._iDisplayStart = b
    }

    function Pa(a, b) {
        var c =
            a.renderer, d = m.ext.renderer[b];
        return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
    }

    function y(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function Aa(a, b) {
        var c = [], c = Mb.numbers_length, d = Math.floor(c / 2);
        b <= c ? c = X(0, b) : a <= d ? (c = X(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function db(a) {
        h.each({
            num: function (b) {
                return Ba(b,
                    a)
            }, "num-fmt": function (b) {
                return Ba(b, a, Xa)
            }, "html-num": function (b) {
                return Ba(b, a, Ca)
            }, "html-num-fmt": function (b) {
                return Ba(b, a, Ca, Xa)
            }
        }, function (b, c) {
            s.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (s.type.search[b + a] = s.type.search.html)
        })
    }

    function Nb(a) {
        return function () {
            var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return m.ext.internal[a].apply(this, b)
        }
    }

    var m, s, t, p, r, Ya = {}, Ob = /[\r\n]/g, Ca = /<.*?>/g, ac = /^[\w\+\-]/, bc = /[\w\+\-]$/, Yb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
        "g"), Xa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, M = function (a) {
        return !a || !0 === a || "-" === a ? !0 : !1
    }, Pb = function (a) {
        var b = parseInt(a, 10);
        return !isNaN(b) && isFinite(a) ? b : null
    }, Qb = function (a, b) {
        Ya[b] || (Ya[b] = RegExp(va(b), "g"));
        return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Ya[b], ".") : a
    }, Za = function (a, b, c) {
        var d = "string" === typeof a;
        if (M(a))return !0;
        b && d && (a = Qb(a, b));
        c && d && (a = a.replace(Xa, ""));
        return !isNaN(parseFloat(a)) && isFinite(a)
    }, Rb = function (a, b, c) {
        return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : Za(a.replace(Ca, ""), b, c) ? !0 : null
    }, D = function (a, b, c) {
        var d = [], e = 0, f = a.length;
        if (c !== k)for (; e < f; e++)a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e < f; e++)a[e] && d.push(a[e][b]);
        return d
    }, ja = function (a, b, c, d) {
        var e = [], f = 0, g = b.length;
        if (d !== k)for (; f < g; f++)a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < g; f++)e.push(a[b[f]][c]);
        return e
    }, X = function (a, b) {
        var c = [], d;
        b === k ? (b = 0, d = a) : (d = b, b = a);
        for (var e = b; e < d; e++)c.push(e);
        return c
    }, Sb = function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c++)a[c] && b.push(a[c]);
        return b
    }, pa = function (a) {
        var b = [], c, d, e = a.length, f, g = 0;
        d = 0;
        a:for (; d < e; d++) {
            c = a[d];
            for (f = 0; f < g; f++)if (b[f] === c)continue a;
            b.push(c);
            g++
        }
        return b
    }, A = function (a, b, c) {
        a[b] !== k && (a[c] = a[b])
    }, da = /\[.*?\]$/, V = /\(\)$/, wa = h("<div>")[0], Zb = wa.textContent !== k, $b = /<.*?>/g;
    m = function (a) {
        this.$ = function (a, b) {
            return this.api(!0).$(a, b)
        };
        this._ = function (a, b) {
            return this.api(!0).rows(a, b).data()
        };
        this.api = function (a) {
            return a ? new t(za(this[s.iApiIndex])) : new t(this)
        };
        this.fnAddData = function (a, b) {
            var c = this.api(!0),
                d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
            (b === k || b) && c.draw();
            return d.flatten().toArray()
        };
        this.fnAdjustColumnSizing = function (a) {
            var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll;
            a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c)
        };
        this.fnClearTable = function (a) {
            var b = this.api(!0).clear();
            (a === k || a) && b.draw()
        };
        this.fnClose = function (a) {
            this.api(!0).row(a).child.hide()
        };
        this.fnDeleteRow = function (a, b, c) {
            var d = this.api(!0), a = d.rows(a), e = a.settings()[0],
                h = e.aoData[a[0][0]];
            a.remove();
            b && b.call(this, e, h);
            (c === k || c) && d.draw();
            return h
        };
        this.fnDestroy = function (a) {
            this.api(!0).destroy(a)
        };
        this.fnDraw = function (a) {
            this.api(!0).draw(a)
        };
        this.fnFilter = function (a, b, c, d, e, h) {
            e = this.api(!0);
            null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
            e.draw()
        };
        this.fnGetData = function (a, b) {
            var c = this.api(!0);
            if (a !== k) {
                var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
            }
            return c.data().toArray()
        };
        this.fnGetNodes = function (a) {
            var b = this.api(!0);
            return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
        };
        this.fnGetPosition = function (a) {
            var b = this.api(!0), c = a.nodeName.toUpperCase();
            return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
        };
        this.fnIsOpen = function (a) {
            return this.api(!0).row(a).child.isShown()
        };
        this.fnOpen = function (a, b, c) {
            return this.api(!0).row(a).child(b, c).show().child()[0]
        };
        this.fnPageChange = function (a, b) {
            var c = this.api(!0).page(a);
            (b === k || b) && c.draw(!1)
        };
        this.fnSetColumnVis = function (a, b, c) {
            a = this.api(!0).column(a).visible(b);
            (c === k || c) && a.columns.adjust().draw()
        };
        this.fnSettings = function () {
            return za(this[s.iApiIndex])
        };
        this.fnSort = function (a) {
            this.api(!0).order(a).draw()
        };
        this.fnSortListener = function (a, b, c) {
            this.api(!0).order.listener(a, b, c)
        };
        this.fnUpdate = function (a, b, c, d, e) {
            var h = this.api(!0);
            c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
            (e === k || e) && h.columns.adjust();
            (d === k || d) && h.draw();
            return 0
        };
        this.fnVersionCheck =
            s.fnVersionCheck;
        var b = this, c = a === k, d = this.length;
        c && (a = {});
        this.oApi = this.internal = s.internal;
        for (var e in m.ext.internal)e && (this[e] = Nb(e));
        this.each(function () {
            var e = {}, e = 1 < d ? Lb(e, a, !0) : a, g = 0, j, i = this.getAttribute("id"), o = !1, l = m.defaults, q = h(this);
            if ("table" != this.nodeName.toLowerCase())K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                eb(l);
                fb(l.column);
                J(l, l, !0);
                J(l.column, l.column, !0);
                J(l, h.extend(e, q.data()));
                var u = m.settings, g = 0;
                for (j = u.length; g < j; g++) {
                    var p = u[g];
                    if (p.nTable ==
                        this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
                        g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve;
                        if (c || g)return p.oInstance;
                        if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) {
                            p.oInstance.fnDestroy();
                            break
                        } else {
                            K(p, 0, "Cannot reinitialise DataTable", 3);
                            return
                        }
                    }
                    if (p.sTableId == this.id) {
                        u.splice(g, 1);
                        break
                    }
                }
                if (null === i || "" === i)this.id = i = "DataTables_Table_" + m.ext._unique++;
                var n = h.extend(!0, {}, m.models.oSettings, {
                    sDestroyWidth: q[0].style.width,
                    sInstance: i,
                    sTableId: i
                });
                n.nTable = this;
                n.oApi = b.internal;
                n.oInit = e;
                u.push(n);
                n.oInstance = 1 === b.length ? b : q.dataTable();
                eb(e);
                e.oLanguage && Fa(e.oLanguage);
                e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = h.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]);
                e = Lb(h.extend(!0, {}, l), e);
                F(n.oFeatures, e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                F(n, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu",
                    "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);
                F(n.oScroll, e, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
                F(n.oLanguage, e, "fnInfoCallback");
                z(n, "aoDrawCallback",
                    e.fnDrawCallback, "user");
                z(n, "aoServerParams", e.fnServerParams, "user");
                z(n, "aoStateSaveParams", e.fnStateSaveParams, "user");
                z(n, "aoStateLoadParams", e.fnStateLoadParams, "user");
                z(n, "aoStateLoaded", e.fnStateLoaded, "user");
                z(n, "aoRowCallback", e.fnRowCallback, "user");
                z(n, "aoRowCreatedCallback", e.fnCreatedRow, "user");
                z(n, "aoHeaderCallback", e.fnHeaderCallback, "user");
                z(n, "aoFooterCallback", e.fnFooterCallback, "user");
                z(n, "aoInitComplete", e.fnInitComplete, "user");
                z(n, "aoPreDrawCallback", e.fnPreDrawCallback,
                    "user");
                n.rowIdFn = Q(e.rowId);
                gb(n);
                i = n.oClasses;
                e.bJQueryUI ? (h.extend(i, m.ext.oJUIClasses, e.oClasses), e.sDom === l.sDom && "lfrtip" === l.sDom && (n.sDom = '<"H"lfr>t<"F"ip>'), n.renderer) ? h.isPlainObject(n.renderer) && !n.renderer.header && (n.renderer.header = "jqueryui") : n.renderer = "jqueryui" : h.extend(i, m.ext.classes, e.oClasses);
                q.addClass(i.sTable);
                n.iInitDisplayStart === k && (n.iInitDisplayStart = e.iDisplayStart, n._iDisplayStart = e.iDisplayStart);
                null !== e.iDeferLoading && (n.bDeferLoading = !0, g = h.isArray(e.iDeferLoading),
                    n._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading, n._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading);
                var t = n.oLanguage;
                h.extend(!0, t, e.oLanguage);
                "" !== t.sUrl && (h.ajax({
                    dataType: "json", url: t.sUrl, success: function (a) {
                        Fa(a);
                        J(l.oLanguage, a);
                        h.extend(true, t, a);
                        ia(n)
                    }, error: function () {
                        ia(n)
                    }
                }), o = !0);
                null === e.asStripeClasses && (n.asStripeClasses = [i.sStripeOdd, i.sStripeEven]);
                var g = n.asStripeClasses, r = q.children("tbody").find("tr").eq(0);
                -1 !== h.inArray(!0, h.map(g, function (a) {
                    return r.hasClass(a)
                })) &&
                (h("tbody tr", this).removeClass(g.join(" ")), n.asDestroyStripes = g.slice());
                u = [];
                g = this.getElementsByTagName("thead");
                0 !== g.length && (fa(n.aoHeader, g[0]), u = qa(n));
                if (null === e.aoColumns) {
                    p = [];
                    g = 0;
                    for (j = u.length; g < j; g++)p.push(null)
                } else p = e.aoColumns;
                g = 0;
                for (j = p.length; g < j; g++)Ga(n, u ? u[g] : null);
                ib(n, e.aoColumnDefs, p, function (a, b) {
                    la(n, a, b)
                });
                if (r.length) {
                    var s = function (a, b) {
                        return a.getAttribute("data-" + b) !== null ? b : null
                    };
                    h(r[0]).children("th, td").each(function (a, b) {
                        var c = n.aoColumns[a];
                        if (c.mData ===
                            a) {
                            var d = s(b, "sort") || s(b, "order"), e = s(b, "filter") || s(b, "search");
                            if (d !== null || e !== null) {
                                c.mData = {
                                    _: a + ".display",
                                    sort: d !== null ? a + ".@data-" + d : k,
                                    type: d !== null ? a + ".@data-" + d : k,
                                    filter: e !== null ? a + ".@data-" + e : k
                                };
                                la(n, a)
                            }
                        }
                    })
                }
                var w = n.oFeatures;
                e.bStateSave && (w.bStateSave = !0, Kb(n, e), z(n, "aoDrawCallback", ya, "state_save"));
                if (e.aaSorting === k) {
                    u = n.aaSorting;
                    g = 0;
                    for (j = u.length; g < j; g++)u[g][1] = n.aoColumns[g].asSorting[0]
                }
                xa(n);
                w.bSort && z(n, "aoDrawCallback", function () {
                    if (n.bSorted) {
                        var a = W(n), b = {};
                        h.each(a, function (a,
                                            c) {
                            b[c.src] = c.dir
                        });
                        v(n, null, "order", [n, a, b]);
                        Jb(n)
                    }
                });
                z(n, "aoDrawCallback", function () {
                    (n.bSorted || y(n) === "ssp" || w.bDeferRender) && xa(n)
                }, "sc");
                g = q.children("caption").each(function () {
                    this._captionSide = q.css("caption-side")
                });
                j = q.children("thead");
                0 === j.length && (j = h("<thead/>").appendTo(this));
                n.nTHead = j[0];
                j = q.children("tbody");
                0 === j.length && (j = h("<tbody/>").appendTo(this));
                n.nTBody = j[0];
                j = q.children("tfoot");
                if (0 === j.length && 0 < g.length && ("" !== n.oScroll.sX || "" !== n.oScroll.sY))j = h("<tfoot/>").appendTo(this);
                0 === j.length || 0 === j.children().length ? q.addClass(i.sNoFooter) : 0 < j.length && (n.nTFoot = j[0], fa(n.aoFooter, n.nTFoot));
                if (e.aaData)for (g = 0; g < e.aaData.length; g++)N(n, e.aaData[g]); else(n.bDeferLoading || "dom" == y(n)) && ma(n, h(n.nTBody).children("tr"));
                n.aiDisplay = n.aiDisplayMaster.slice();
                n.bInitialised = !0;
                !1 === o && ia(n)
            }
        });
        b = null;
        return this
    };
    var Tb = [], x = Array.prototype, cc = function (a) {
        var b, c, d = m.settings, e = h.map(d, function (a) {
            return a.nTable
        });
        if (a) {
            if (a.nTable && a.oApi)return [a];
            if (a.nodeName && "table" === a.nodeName.toLowerCase())return b =
                h.inArray(a, e), -1 !== b ? [d[b]] : null;
            if (a && "function" === typeof a.settings)return a.settings().toArray();
            "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
        } else return [];
        if (c)return c.map(function () {
            b = h.inArray(this, e);
            return -1 !== b ? d[b] : null
        }).toArray()
    };
    t = function (a, b) {
        if (!(this instanceof t))return new t(a, b);
        var c = [], d = function (a) {
            (a = cc(a)) && (c = c.concat(a))
        };
        if (h.isArray(a))for (var e = 0, f = a.length; e < f; e++)d(a[e]); else d(a);
        this.context = pa(c);
        b && h.merge(this, b);
        this.selector = {rows: null, cols: null, opts: null};
        t.extend(this, this, Tb)
    };
    m.Api = t;
    h.extend(t.prototype, {
        any: function () {
            return 0 !== this.count()
        }, concat: x.concat, context: [], count: function () {
            return this.flatten().length
        }, each: function (a) {
            for (var b = 0, c = this.length; b < c; b++)a.call(this, this[b], b, this);
            return this
        }, eq: function (a) {
            var b = this.context;
            return b.length > a ? new t(b[a], this[a]) : null
        }, filter: function (a) {
            var b = [];
            if (x.filter)b = x.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)a.call(this, this[c], c, this) && b.push(this[c]);
            return new t(this.context,
                b)
        }, flatten: function () {
            var a = [];
            return new t(this.context, a.concat.apply(a, this.toArray()))
        }, join: x.join, indexOf: x.indexOf || function (a, b) {
            for (var c = b || 0, d = this.length; c < d; c++)if (this[c] === a)return c;
            return -1
        }, iterator: function (a, b, c, d) {
            var e = [], f, g, h, i, o, l = this.context, m, p, r = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            g = 0;
            for (h = l.length; g < h; g++) {
                var n = new t(l[g]);
                if ("table" === b)f = c.call(n, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b)f = c.call(n, l[g], this[g], g), f !== k && e.push(f);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    p = this[g];
                    "column-rows" === b && (m = Da(l[g], r.opts));
                    i = 0;
                    for (o = p.length; i < o; i++)f = p[i], f = "cell" === b ? c.call(n, l[g], f.row, f.column, g, i) : c.call(n, l[g], f, g, i, m), f !== k && e.push(f)
                }
            }
            return e.length || d ? (a = new t(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = r.rows, b.cols = r.cols, b.opts = r.opts, a) : this
        }, lastIndexOf: x.lastIndexOf || function (a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        }, length: 0, map: function (a) {
            var b = [];
            if (x.map)b =
                x.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)b.push(a.call(this, this[c], c));
            return new t(this.context, b)
        }, pluck: function (a) {
            return this.map(function (b) {
                return b[a]
            })
        }, pop: x.pop, push: x.push, reduce: x.reduce || function (a, b) {
            return hb(this, a, b, 0, this.length, 1)
        }, reduceRight: x.reduceRight || function (a, b) {
            return hb(this, a, b, this.length - 1, -1, -1)
        }, reverse: x.reverse, selector: null, shift: x.shift, sort: x.sort, splice: x.splice, toArray: function () {
            return x.slice.call(this)
        }, to$: function () {
            return h(this)
        },
        toJQuery: function () {
            return h(this)
        }, unique: function () {
            return new t(this.context, pa(this))
        }, unshift: x.unshift
    });
    t.extend = function (a, b, c) {
        if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
            var d, e, f, g = function (a, b, c) {
                return function () {
                    var d = b.apply(a, arguments);
                    t.extend(d, d, c.methodExt);
                    return d
                }
            };
            d = 0;
            for (e = c.length; d < e; d++)f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
        }
    };
    t.register = p = function (a, b) {
        if (h.isArray(a))for (var c =
            0, d = a.length; c < d; c++)t.register(a[c], b); else for (var e = a.split("."), f = Tb, g, j, c = 0, d = e.length; c < d; c++) {
            g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
            var i;
            a:{
                i = 0;
                for (var k = f.length; i < k; i++)if (f[i].name === g) {
                    i = f[i];
                    break a
                }
                i = null
            }
            i || (i = {name: g, val: {}, methodExt: [], propExt: []}, f.push(i));
            c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
        }
    };
    t.registerPlural = r = function (a, b, c) {
        t.register(a, c);
        t.register(b, function () {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ?
                new t(a.context, a[0]) : a[0] : k : a
        })
    };
    p("tables()", function (a) {
        var b;
        if (a) {
            b = t;
            var c = this.context;
            if ("number" === typeof a)a = [c[a]]; else var d = h.map(c, function (a) {
                return a.nTable
            }), a = h(d).filter(a).map(function () {
                var a = h.inArray(this, d);
                return c[a]
            }).toArray();
            b = new b(a)
        } else b = this;
        return b
    });
    p("table()", function (a) {
        var a = this.tables(a), b = a.context;
        return b.length ? new t(b[0]) : a
    });
    r("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (a) {
            return a.nTable
        }, 1)
    });
    r("tables().body()",
        "table().body()", function () {
            return this.iterator("table", function (a) {
                return a.nTBody
            }, 1)
        });
    r("tables().header()", "table().header()", function () {
        return this.iterator("table", function (a) {
            return a.nTHead
        }, 1)
    });
    r("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (a) {
            return a.nTFoot
        }, 1)
    });
    r("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (a) {
            return a.nTableWrapper
        }, 1)
    });
    p("draw()", function (a) {
        return this.iterator("table",
            function (b) {
                "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a))
            })
    });
    p("page()", function (a) {
        return a === k ? this.page.info().page : this.iterator("table", function (b) {
            Ta(b, a)
        })
    });
    p("page.info()", function () {
        if (0 === this.context.length)return k;
        var a = this.context[0], b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === y(a)
        }
    });
    p("page.len()", function (a) {
        return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
            Ra(b, a)
        })
    });
    var Ub = function (a, b, c) {
        if (c) {
            var d = new t(a);
            d.one("draw", function () {
                c(d.ajax.json())
            })
        }
        if ("ssp" == y(a))T(a, b); else {
            C(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            ra(a, [], function (c) {
                na(a);
                for (var c = sa(a, c), d = 0, e = c.length; d < e; d++)N(a, c[d]);
                T(a, b);
                C(a, !1)
            })
        }
    };
    p("ajax.json()", function () {
        var a = this.context;
        if (0 <
            a.length)return a[0].json
    });
    p("ajax.params()", function () {
        var a = this.context;
        if (0 < a.length)return a[0].oAjaxData
    });
    p("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            Ub(c, !1 === b, a)
        })
    });
    p("ajax.url()", function (a) {
        var b = this.context;
        if (a === k) {
            if (0 === b.length)return k;
            b = b[0];
            return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function (b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    p("ajax.url().load()", function (a, b) {
        return this.iterator("table",
            function (c) {
                Ub(c, !1 === b, a)
            })
    });
    var $a = function (a, b, c, d, e) {
        var f = [], g, j, i, o, l, m;
        i = typeof b;
        if (!b || "string" === i || "function" === i || b.length === k)b = [b];
        i = 0;
        for (o = b.length; i < o; i++) {
            j = b[i] && b[i].split ? b[i].split(",") : [b[i]];
            l = 0;
            for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
        }
        a = s.selector[a];
        if (a.length) {
            i = 0;
            for (o = a.length; i < o; i++)f = a[i](d, e, f)
        }
        return pa(f)
    }, ab = function (a) {
        a || (a = {});
        a.filter && a.search === k && (a.search = a.filter);
        return h.extend({
            search: "none",
            order: "current", page: "all"
        }, a)
    }, bb = function (a) {
        for (var b = 0, c = a.length; b < c; b++)if (0 < a[b].length)return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
        a.length = 0;
        return a
    }, Da = function (a, b) {
        var c, d, e, f = [], g = a.aiDisplay;
        c = a.aiDisplayMaster;
        var j = b.search;
        d = b.order;
        e = b.page;
        if ("ssp" == y(a))return "removed" === j ? [] : X(0, c.length);
        if ("current" == e) {
            c = a._iDisplayStart;
            for (d = a.fnDisplayEnd(); c < d; c++)f.push(g[c])
        } else if ("current" == d || "applied" == d)f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c,
            function (a) {
                return -1 === h.inArray(a, g) ? a : null
            }); else if ("index" == d || "original" == d) {
            c = 0;
            for (d = a.aoData.length; c < d; c++)"none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
        }
        return f
    };
    p("rows()", function (a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = ab(b), c = this.iterator("table", function (c) {
            var e = b;
            return $a("row", a, function (a) {
                var b = Pb(a);
                if (b !== null && !e)return [b];
                var j = Da(c, e);
                if (b !== null && h.inArray(b, j) !== -1)return [b];
                if (!a)return j;
                if (typeof a === "function")return h.map(j,
                    function (b) {
                        var e = c.aoData[b];
                        return a(b, e._aData, e.nTr) ? b : null
                    });
                b = Sb(ja(c.aoData, j, "nTr"));
                if (a.nodeName && h.inArray(a, b) !== -1)return [a._DT_RowIndex];
                if (typeof a === "string" && a.charAt(0) === "#") {
                    j = c.aIds[a.replace(/^#/, "")];
                    if (j !== k)return [j.idx]
                }
                return h(b).filter(a).map(function () {
                    return this._DT_RowIndex
                }).toArray()
            }, c, e)
        }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    p("rows().nodes()", function () {
        return this.iterator("row", function (a, b) {
            return a.aoData[b].nTr || k
        }, 1)
    });
    p("rows().data()", function () {
        return this.iterator(!0,
            "rows", function (a, b) {
                return ja(a.aoData, b, "_aData")
            }, 1)
    });
    r("rows().cache()", "row().cache()", function (a) {
        return this.iterator("row", function (b, c) {
            var d = b.aoData[c];
            return "search" === a ? d._aFilterData : d._aSortData
        }, 1)
    });
    r("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            ea(b, c, a)
        })
    });
    r("rows().indexes()", "row().index()", function () {
        return this.iterator("row", function (a, b) {
            return b
        }, 1)
    });
    r("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context,
                 d = 0, e = c.length; d < e; d++)for (var f = 0, g = this[d].length; f < g; f++) {
            var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
            b.push((!0 === a ? "#" : "") + h)
        }
        return new t(c, b)
    });
    r("rows().remove()", "row().remove()", function () {
        var a = this;
        this.iterator("row", function (b, c, d) {
            var e = b.aoData, f = e[c], g, h, i, o, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++)if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                i = 0;
                for (o = l.length; i < o; i++)l[i]._DT_CellIndex.row = g
            }
            oa(b.aiDisplayMaster, c);
            oa(b.aiDisplay, c);
            oa(a[d], c, !1);
            Sa(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c]
        });
        this.iterator("table", function (a) {
            for (var c = 0, d = a.aoData.length; c < d; c++)a.aoData[c].idx = c
        });
        return this
    });
    p("rows.add()", function (a) {
        var b = this.iterator("table", function (b) {
            var c, f, g, h = [];
            f = 0;
            for (g = a.length; f < g; f++)c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(N(b, c));
            return h
        }, 1), c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c
    });
    p("row()", function (a, b) {
        return bb(this.rows(a, b))
    });
    p("row().data()", function (a) {
        var b =
            this.context;
        if (a === k)return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
        b[0].aoData[this[0]]._aData = a;
        ea(b[0], this[0], "data");
        return this
    });
    p("row().node()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    p("row.add()", function (a) {
        a instanceof h && a.length && (a = a[0]);
        var b = this.iterator("table", function (b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : N(b, a)
        });
        return this.row(b[0])
    });
    var cb = function (a, b) {
        var c = a.context;
        if (c.length &&
            (c = c[0].aoData[b !== k ? b : a[0]]) && c._details)c._details.remove(), c._detailsShow = k, c._details = k
    }, Vb = function (a, b) {
        var c = a.context;
        if (c.length && a.length) {
            var d = c[0].aoData[a[0]];
            if (d._details) {
                (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
                var e = c[0], f = new t(e), g = e.aoData;
                f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
                    e === b && f.rows({page: "current"}).eq(0).each(function (a) {
                        a = g[a];
                        a._detailsShow && a._details.insertAfter(a.nTr)
                    })
                }), f.on("column-visibility.dt.DT_details", function (a, b) {
                    if (e === b)for (var c, d = ca(b), f = 0, h = g.length; f < h; f++)c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                }), f.on("destroy.dt.DT_details", function (a, b) {
                    if (e === b)for (var c = 0, d = g.length; c < d; c++)g[c]._details && cb(f, c)
                }))
            }
        }
    };
    p("row().child()", function (a, b) {
        var c = this.context;
        if (a === k)return c.length && this.length ? c[0].aoData[this[0]]._details : k;
        if (!0 === a)this.child.show(); else if (!1 ===
            a)cb(this); else if (c.length && this.length) {
            var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) {
                if (h.isArray(a) || a instanceof h)for (var c = 0, k = a.length; c < k; c++)f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ca(d), e.push(c[0]))
            };
            f(a, b);
            c._details && c._details.remove();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr)
        }
        return this
    });
    p(["row().child.show()", "row().child().show()"], function () {
        Vb(this,
            !0);
        return this
    });
    p(["row().child.hide()", "row().child().hide()"], function () {
        Vb(this, !1);
        return this
    });
    p(["row().child.remove()", "row().child().remove()"], function () {
        cb(this);
        return this
    });
    p("row().child.isShown()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var dc = /^(.+):(name|visIdx|visible)$/, Wb = function (a, b, c, d, e) {
        for (var c = [], d = 0, f = e.length; d < f; d++)c.push(B(a, e[d], b));
        return c
    };
    p("columns()", function (a, b) {
        a === k ? a = "" : h.isPlainObject(a) &&
        (b = a, a = "");
        var b = ab(b), c = this.iterator("table", function (c) {
            var e = a, f = b, g = c.aoColumns, j = D(g, "sName"), i = D(g, "nTh");
            return $a("column", e, function (a) {
                var b = Pb(a);
                if (a === "")return X(g.length);
                if (b !== null)return [b >= 0 ? b : g.length + b];
                if (typeof a === "function") {
                    var e = Da(c, f);
                    return h.map(g, function (b, f) {
                        return a(f, Wb(c, f, 0, 0, e), i[f]) ? f : null
                    })
                }
                var k = typeof a === "string" ? a.match(dc) : "";
                if (k)switch (k[2]) {
                    case "visIdx":
                    case "visible":
                        b = parseInt(k[1], 10);
                        if (b < 0) {
                            var m = h.map(g, function (a, b) {
                                return a.bVisible ? b : null
                            });
                            return [m[m.length + b]]
                        }
                        return [$(c, b)];
                    case "name":
                        return h.map(j, function (a, b) {
                            return a === k[1] ? b : null
                        })
                } else return h(i).filter(a).map(function () {
                    return h.inArray(this, i)
                }).toArray()
            }, c, f)
        }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    r("columns().header()", "column().header()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTh
        }, 1)
    });
    r("columns().footer()", "column().footer()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTf
        }, 1)
    });
    r("columns().data()",
        "column().data()", function () {
            return this.iterator("column-rows", Wb, 1)
        });
    r("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    r("columns().cache()", "column().cache()", function (a) {
        return this.iterator("column-rows", function (b, c, d, e, f) {
            return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
        }, 1)
    });
    r("columns().nodes()", "column().nodes()", function () {
        return this.iterator("column-rows", function (a, b, c, d, e) {
            return ja(a.aoData,
                e, "anCells", b)
        }, 1)
    });
    r("columns().visible()", "column().visible()", function (a, b) {
        return this.iterator("column", function (c, d) {
            if (a === k)return c.aoColumns[d].bVisible;
            var e = c.aoColumns, f = e[d], g = c.aoData, j, i, m;
            if (a !== k && f.bVisible !== a) {
                if (a) {
                    var l = h.inArray(!0, D(e, "bVisible"), d + 1);
                    j = 0;
                    for (i = g.length; j < i; j++)m = g[j].nTr, e = g[j].anCells, m && m.insertBefore(e[d], e[l] || null)
                } else h(D(c.aoData, "anCells", d)).detach();
                f.bVisible = a;
                ga(c, c.aoHeader);
                ga(c, c.aoFooter);
                if (b === k || b)U(c), (c.oScroll.sX || c.oScroll.sY) &&
                Z(c);
                v(c, null, "column-visibility", [c, d, a, b]);
                ya(c)
            }
        })
    });
    r("columns().indexes()", "column().index()", function (a) {
        return this.iterator("column", function (b, c) {
            return "visible" === a ? ba(b, c) : c
        }, 1)
    });
    p("columns.adjust()", function () {
        return this.iterator("table", function (a) {
            U(a)
        }, 1)
    });
    p("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a)return $(c, b);
            if ("fromData" === a || "toVisible" === a)return ba(c, b)
        }
    });
    p("column()", function (a, b) {
        return bb(this.columns(a,
            b))
    });
    p("cells()", function (a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === k)return this.iterator("table", function (b) {
            var d = a, e = ab(c), f = b.aoData, g = Da(b, e), j = Sb(ja(f, g, "anCells")), i = h([].concat.apply([], j)), l, m = b.aoColumns.length, o, p, t, r, s, v;
            return $a("cell", d, function (a) {
                var c = typeof a === "function";
                if (a === null || a === k || c) {
                    o = [];
                    p = 0;
                    for (t = g.length; p < t; p++) {
                        l = g[p];
                        for (r = 0; r < m; r++) {
                            s = {row: l, column: r};
                            if (c) {
                                v = f[l];
                                a(s, B(b, l, r), v.anCells ?
                                    v.anCells[r] : null) && o.push(s)
                            } else o.push(s)
                        }
                    }
                    return o
                }
                return h.isPlainObject(a) ? [a] : i.filter(a).map(function (a, b) {
                    return {row: b._DT_CellIndex.row, column: b._DT_CellIndex.column}
                }).toArray()
            }, b, e)
        });
        var d = this.columns(b, c), e = this.rows(a, c), f, g, j, i, m, l = this.iterator("table", function (a, b) {
            f = [];
            g = 0;
            for (j = e[b].length; g < j; g++) {
                i = 0;
                for (m = d[b].length; i < m; i++)f.push({row: e[b][g], column: d[b][i]})
            }
            return f
        }, 1);
        h.extend(l.selector, {cols: b, rows: a, opts: c});
        return l
    });
    r("cells().nodes()", "cell().node()", function () {
        return this.iterator("cell",
            function (a, b, c) {
                return (a = a.aoData[b].anCells) ? a[c] : k
            }, 1)
    });
    p("cells().data()", function () {
        return this.iterator("cell", function (a, b, c) {
            return B(a, b, c)
        }, 1)
    });
    r("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function (b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    r("cells().render()", "cell().render()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            return B(b, c, d, a)
        }, 1)
    });
    r("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell",
            function (a, b, c) {
                return {row: b, column: c, columnVisible: ba(a, c)}
            }, 1)
    });
    r("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            ea(b, c, a, d)
        })
    });
    p("cell()", function (a, b, c) {
        return bb(this.cells(a, b, c))
    });
    p("cell().data()", function (a) {
        var b = this.context, c = this[0];
        if (a === k)return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        jb(b[0], c[0].row, c[0].column, a);
        ea(b[0], c[0].row, "data", c[0].column);
        return this
    });
    p("order()", function (a, b) {
        var c = this.context;
        if (a ===
            k)return 0 !== c.length ? c[0].aaSorting : k;
        "number" === typeof a ? a = [[a, b]] : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function (b) {
            b.aaSorting = a.slice()
        })
    });
    p("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            Oa(d, a, b, c)
        })
    });
    p("order.fixed()", function (a) {
        if (!a) {
            var b = this.context, b = b.length ? b[0].aaSortingFixed : k;
            return h.isArray(b) ? {pre: b} : b
        }
        return this.iterator("table", function (b) {
            b.aaSortingFixed = h.extend(!0, {}, a)
        })
    });
    p(["columns().order()",
        "column().order()"], function (a) {
        var b = this;
        return this.iterator("table", function (c, d) {
            var e = [];
            h.each(b[d], function (b, c) {
                e.push([c, a])
            });
            c.aaSorting = e
        })
    });
    p("search()", function (a, b, c, d) {
        var e = this.context;
        return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
            e.oFeatures.bFilter && ha(e, h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    r("columns().search()", "column().search()", function (a,
                                                           b, c, d) {
        return this.iterator("column", function (e, f) {
            var g = e.aoPreSearchCols;
            if (a === k)return g[f].sSearch;
            e.oFeatures.bFilter && (h.extend(g[f], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), ha(e, e.oPreviousSearch, 1))
        })
    });
    p("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null
    });
    p("state.clear()", function () {
        return this.iterator("table", function (a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    p("state.loaded()", function () {
        return this.context.length ?
            this.context[0].oLoadedState : null
    });
    p("state.save()", function () {
        return this.iterator("table", function (a) {
            ya(a)
        })
    });
    m.versionCheck = m.fnVersionCheck = function (a) {
        for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d)return c > d;
        return !0
    };
    m.isDataTable = m.fnIsDataTable = function (a) {
        var b = h(a).get(0), c = !1;
        h.each(m.settings, function (a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] :
                null;
            if (e.nTable === b || f === b || g === b)c = !0
        });
        return c
    };
    m.tables = m.fnTables = function (a) {
        var b = !1;
        h.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = h.map(m.settings, function (b) {
            if (!a || a && h(b.nTable).is(":visible"))return b.nTable
        });
        return b ? new t(c) : c
    };
    m.util = {throttle: ua, escapeRegex: va};
    m.camelToHungarian = J;
    p("$()", function (a, b) {
        var c = this.rows(b).nodes(), c = h(c);
        return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    h.each(["on", "one", "off"], function (a, b) {
        p(b + "()", function () {
            var a = Array.prototype.slice.call(arguments);
            a[0].match(/\.dt\b/) || (a[0] += ".dt");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    p("clear()", function () {
        return this.iterator("table", function (a) {
            na(a)
        })
    });
    p("settings()", function () {
        return new t(this.context, this.context)
    });
    p("init()", function () {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    p("data()", function () {
        return this.iterator("table", function (a) {
            return D(a.aoData, "_aData")
        }).flatten()
    });
    p("destroy()", function (a) {
        a = a || !1;
        return this.iterator("table", function (b) {
            var c =
                b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function (a) {
                return a.nTr
            }), p;
            b.bDestroying = !0;
            v(b, "aoDestroyCallback", "destroy", [b]);
            a || (new t(b)).columns().visible(!0);
            k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
            h(E).unbind(".DT-" + b.sInstance);
            e != g.parentNode && (i.children("thead").detach(), i.append(g));
            j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            xa(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function () {
                var a = h("div." + d.sSortJUIWrapper, this);
                h(this).append(a.contents());
                a.detach()
            }));
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (p =
                b.asDestroyStripes.length) && f.children().each(function (a) {
                h(this).addClass(b.asDestroyStripes[a % p])
            }));
            c = h.inArray(b, m.settings);
            -1 !== c && m.settings.splice(c, 1)
        })
    });
    h.each(["column", "row", "cell"], function (a, b) {
        p(b + "s().every()", function (a) {
            var d = this.selector.opts, e = this;
            return this.iterator(b, function (f, g, h, i, m) {
                a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m)
            })
        })
    });
    p("i18n()", function (a, b, c) {
        var d = this.context[0], a = Q(a)(d.oLanguage);
        a === k && (a = b);
        c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c)
    });
    m.version = "1.10.10";
    m.settings = [];
    m.models = {};
    m.models.oSearch = {bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0};
    m.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    m.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    m.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bJQueryUI: !1,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" +
                    a.sInstance + "_" + location.pathname))
            } catch (b) {
            }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {
            }
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous"},
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: h.extend({},
            m.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    Y(m.defaults);
    m.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    Y(m.defaults.column);
    m.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null},
        oLanguage: {fnInfoCallback: null},
        oBrowser: {bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0},
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == y(this) ?
            1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function () {
            return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function () {
            var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    m.ext = s = {
        buttons: {},
        classes: {},
        build: "dt/dt-1.10.10",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {cell: [], column: [], row: []},
        internal: {},
        legacy: {ajax: null},
        pager: {},
        renderer: {pageButton: {}, header: {}},
        order: {},
        type: {detect: [], search: {}, order: {}},
        _unique: 0,
        fnVersionCheck: m.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: m.version
    };
    h.extend(s, {
        afnFiltering: s.search,
        aTypes: s.type.detect,
        ofnSearch: s.type.search,
        oSort: s.type.order,
        afnSortData: s.order,
        aoFeatures: s.feature,
        oApi: s.internal,
        oStdClasses: s.classes,
        oPagination: s.pager
    });
    h.extend(m.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Ea = "", Ea = "", G = Ea + "ui-state-default", ka = Ea + "css_right ui-icon ui-icon-", Xb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(m.ext.oJUIClasses, m.ext.classes, {
        sPageButton: "fg-button ui-button " + G,
        sPageButtonActive: "ui-state-disabled",
        sPageButtonDisabled: "ui-state-disabled",
        sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
        sSortAsc: G + " sorting_asc",
        sSortDesc: G + " sorting_desc",
        sSortable: G + " sorting",
        sSortableAsc: G + " sorting_asc_disabled",
        sSortableDesc: G + " sorting_desc_disabled",
        sSortableNone: G + " sorting_disabled",
        sSortJUIAsc: ka + "triangle-1-n",
        sSortJUIDesc: ka + "triangle-1-s",
        sSortJUI: ka + "carat-2-n-s",
        sSortJUIAscAllowed: ka + "carat-1-n",
        sSortJUIDescAllowed: ka + "carat-1-s",
        sSortJUIWrapper: "DataTables_sort_wrapper",
        sSortIcon: "DataTables_sort_icon",
        sScrollHead: "dataTables_scrollHead " + G,
        sScrollFoot: "dataTables_scrollFoot " + G,
        sHeaderTH: G,
        sFooterTH: G,
        sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
        sJUIFooter: Xb +
        " ui-corner-bl ui-corner-br"
    });
    var Mb = m.ext.pager;
    h.extend(Mb, {
        simple: function () {
            return ["previous", "next"]
        }, full: function () {
            return ["first", "previous", "next", "last"]
        }, numbers: function (a, b) {
            return [Aa(a, b)]
        }, simple_numbers: function (a, b) {
            return ["previous", Aa(a, b), "next"]
        }, full_numbers: function (a, b) {
            return ["first", "previous", Aa(a, b), "next", "last"]
        }, _numbers: Aa, numbers_length: 7
    });
    h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e, f) {
                var g = a.oClasses, j = a.oLanguage.oPaginate, i = a.oLanguage.oAria.paginate ||
                    {}, k, l, m = 0, p = function (b, d) {
                    var n, r, t, s, v = function (b) {
                        Ta(a, b.data.action, true)
                    };
                    n = 0;
                    for (r = d.length; n < r; n++) {
                        s = d[n];
                        if (h.isArray(s)) {
                            t = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                            p(t, s)
                        } else {
                            k = null;
                            l = "";
                            switch (s) {
                                case "ellipsis":
                                    b.append('<span class="ellipsis">&#x2026;</span>');
                                    break;
                                case "first":
                                    k = j.sFirst;
                                    l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                    break;
                                case "previous":
                                    k = j.sPrevious;
                                    l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                    break;
                                case "next":
                                    k = j.sNext;
                                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                    break;
                                case "last":
                                    k =
                                        j.sLast;
                                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                    break;
                                default:
                                    k = s + 1;
                                    l = e === s ? g.sPageButtonActive : ""
                            }
                            if (k !== null) {
                                t = h("<a>", {
                                    "class": g.sPageButton + " " + l,
                                    "aria-controls": a.sTableId,
                                    "aria-label": i[s],
                                    "data-dt-idx": m,
                                    tabindex: a.iTabIndex,
                                    id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                                }).html(k).appendTo(b);
                                Wa(t, {action: s}, v);
                                m++
                            }
                        }
                    }
                }, r;
                try {
                    r = h(b).find(H.activeElement).data("dt-idx")
                } catch (n) {
                }
                p(h(b).empty(), d);
                r && h(b).find("[data-dt-idx=" + r + "]").focus()
            }
        }
    });
    h.extend(m.ext.type.detect, [function (a, b) {
        var c =
            b.oLanguage.sDecimal;
        return Za(a, c) ? "num" + c : null
    }, function (a) {
        if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a)))return null;
        var b = Date.parse(a);
        return null !== b && !isNaN(b) || M(a) ? "date" : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Za(a, c, !0) ? "num-fmt" + c : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c) ? "html-num" + c : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c, !0) ? "html-num-fmt" + c : null
    }, function (a) {
        return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" :
            null
    }]);
    h.extend(m.ext.type.search, {
        html: function (a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Ob, " ").replace(Ca, "") : ""
        }, string: function (a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a
        }
    });
    var Ba = function (a, b, c, d) {
        if (0 !== a && (!a || "-" === a))return -Infinity;
        b && (a = Qb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    h.extend(s.type.order, {
        "date-pre": function (a) {
            return Date.parse(a) || 0
        }, "html-pre": function (a) {
            return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() :
            a + ""
        }, "string-pre": function (a) {
            return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
        }, "string-asc": function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        }, "string-desc": function (a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    db("");
    h.extend(!0, m.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                    }
                })
            }, jqueryui: function (a,
                                   b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc :
                            h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    });
    m.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f)return f;
                    var g = 0 > f ? "-" : "", h = parseFloat(f);
                    if (isNaN(h))return f;
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        }, text: function () {
            return {
                display: function (a) {
                    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") :
                        a
                }
            }
        }
    };
    h.extend(m.ext.internal, {
        _fnExternApiFunc: Nb,
        _fnBuildAjax: ra,
        _fnAjaxUpdate: lb,
        _fnAjaxParameters: ub,
        _fnAjaxUpdateDraw: vb,
        _fnAjaxDataSrc: sa,
        _fnAddColumn: Ga,
        _fnColumnOptions: la,
        _fnAdjustColumnSizing: U,
        _fnVisibleToColumnIndex: $,
        _fnColumnIndexToVisible: ba,
        _fnVisbleColumns: ca,
        _fnGetColumns: aa,
        _fnColumnTypes: Ia,
        _fnApplyColumnDefs: ib,
        _fnHungarianMap: Y,
        _fnCamelToHungarian: J,
        _fnLanguageCompat: Fa,
        _fnBrowserDetect: gb,
        _fnAddData: N,
        _fnAddTr: ma,
        _fnNodeToDataIndex: function (a, b) {
            return b._DT_RowIndex !== k ? b._DT_RowIndex :
                null
        },
        _fnNodeToColumnIndex: function (a, b, c) {
            return h.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: B,
        _fnSetCellData: jb,
        _fnSplitObjNotation: La,
        _fnGetObjectDataFn: Q,
        _fnSetObjectDataFn: R,
        _fnGetDataMaster: Ma,
        _fnClearTable: na,
        _fnDeleteIndex: oa,
        _fnInvalidate: ea,
        _fnGetRowElements: Ka,
        _fnCreateTr: Ja,
        _fnBuildHead: kb,
        _fnDrawHead: ga,
        _fnDraw: O,
        _fnReDraw: T,
        _fnAddOptionsHtml: nb,
        _fnDetectHeader: fa,
        _fnGetUniqueThs: qa,
        _fnFeatureHtmlFilter: pb,
        _fnFilterComplete: ha,
        _fnFilterCustom: yb,
        _fnFilterColumn: xb,
        _fnFilter: wb,
        _fnFilterCreateSearch: Qa,
        _fnEscapeRegex: va,
        _fnFilterData: zb,
        _fnFeatureHtmlInfo: sb,
        _fnUpdateInfo: Cb,
        _fnInfoMacros: Db,
        _fnInitialise: ia,
        _fnInitComplete: ta,
        _fnLengthChange: Ra,
        _fnFeatureHtmlLength: ob,
        _fnFeatureHtmlPaginate: tb,
        _fnPageChange: Ta,
        _fnFeatureHtmlProcessing: qb,
        _fnProcessingDisplay: C,
        _fnFeatureHtmlTable: rb,
        _fnScrollDraw: Z,
        _fnApplyToChildren: I,
        _fnCalculateColumnWidths: Ha,
        _fnThrottle: ua,
        _fnConvertToWidth: Fb,
        _fnGetWidestNode: Gb,
        _fnGetMaxLenString: Hb,
        _fnStringToCss: w,
        _fnSortFlatten: W,
        _fnSort: mb,
        _fnSortAria: Jb,
        _fnSortListener: Va,
        _fnSortAttachListener: Oa,
        _fnSortingClasses: xa,
        _fnSortData: Ib,
        _fnSaveState: ya,
        _fnLoadState: Kb,
        _fnSettingsFromNode: za,
        _fnLog: K,
        _fnMap: F,
        _fnBindAction: Wa,
        _fnCallbackReg: z,
        _fnCallbackFire: v,
        _fnLengthOverflow: Sa,
        _fnRenderer: Pa,
        _fnDataSource: y,
        _fnRowAttributes: Na,
        _fnCalculateEnd: function () {
        }
    });
    h.fn.dataTable = m;
    m.$ = h;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt = m.ext;
    h.fn.DataTable = function (a) {
        return h(this).dataTable(a).api()
    };
    h.each(m, function (a, b) {
        h.fn.DataTable[a] = b
    });
    return h.fn.dataTable
});

// Datatables Bootstrap Pagination Integration
jQuery.fn.dataTableExt.oApi.fnPagingInfo = function (e) {
    return {
        iStart: e._iDisplayStart,
        iEnd: e.fnDisplayEnd(),
        iLength: e._iDisplayLength,
        iTotal: e.fnRecordsTotal(),
        iFilteredTotal: e.fnRecordsDisplay(),
        iPage: Math.ceil(e._iDisplayStart / e._iDisplayLength),
        iTotalPages: Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength)
    }
}, jQuery.extend(jQuery.fn.dataTableExt.oPagination, {
    bootstrap: {
        fnInit: function (e, t, n) {
            var i = e.oLanguage.oPaginate, r = function (t) {
                t.preventDefault(), e.oApi._fnPageChange(e, t.data.action) && n(e)
            };
            jQuery(t).append('<ul class="pagination pagination-sm remove-margin"><li class="prev disabled"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i> ' + i.sPrevious + "</a></li>" + '<li class="next disabled"><a href="javascript:void(0)">' + i.sNext + ' <i class="fa fa-chevron-right"></i></a></li>' + "</ul>");
            var o = jQuery("a", t);
            jQuery(o[0]).bind("click.DT", {action: "previous"}, r), jQuery(o[1]).bind("click.DT", {action: "next"}, r)
        }, fnUpdate: function (e, t) {
            var n, i, r, o, a, s = 5, l = e.oInstance.fnPagingInfo(), c = e.aanFeatures.p, u = Math.floor(s / 2);
            for (l.iTotalPages < s ? (o = 1, a = l.iTotalPages) : l.iPage <= u ? (o = 1, a = s) : l.iPage >= l.iTotalPages - u ? (o = l.iTotalPages - s + 1, a = l.iTotalPages) : (o = l.iPage - u + 1, a = o + s - 1), n = 0, iLen = c.length; iLen > n; n++) {
                for (jQuery("li:gt(0)", c[n]).filter(":not(:last)").remove(), i = o; a >= i; i++)r = i === l.iPage + 1 ? 'class="active"' : "", jQuery("<li " + r + '><a href="javascript:void(0)">' + i + "</a></li>").insertBefore(jQuery("li:last", c[n])[0]).bind("click", function (n) {
                    n.preventDefault(), e._iDisplayStart = (parseInt(jQuery("a", this).text(), 10) - 1) * l.iLength, t(e)
                });
                0 === l.iPage ? jQuery("li:first", c[n]).addClass("disabled") : jQuery("li:first", c[n]).removeClass("disabled"), l.iPage === l.iTotalPages - 1 || 0 === l.iTotalPages ? jQuery("li:last", c[n]).addClass("disabled") : jQuery("li:last", c[n]).removeClass("disabled")
            }
        }
    }
});

/*!
 * Javascript plotting library for jQuery, version 0.8.3.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * Plugin for jQuery for working with colors. Version 1.1.
 * Inspiration from jQuery color animation plugin by John Resig.
 * Released under the MIT license by Ole Laursen, October 2009.
 */
(function ($) {
    $.color = {};
    $.color.make = function (r, g, b, a) {
        var o = {};
        o.r = r || 0;
        o.g = g || 0;
        o.b = b || 0;
        o.a = a != null ? a : 1;
        o.add = function (c, d) {
            for (var i = 0; i < c.length; ++i)o[c.charAt(i)] += d;
            return o.normalize()
        };
        o.scale = function (c, f) {
            for (var i = 0; i < c.length; ++i)o[c.charAt(i)] *= f;
            return o.normalize()
        };
        o.toString = function () {
            if (o.a >= 1) {
                return "rgb(" + [o.r, o.g, o.b].join(",") + ")"
            } else {
                return "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
            }
        };
        o.normalize = function () {
            function clamp(min, value, max) {
                return value < min ? min : value > max ? max : value
            }

            o.r = clamp(0, parseInt(o.r), 255);
            o.g = clamp(0, parseInt(o.g), 255);
            o.b = clamp(0, parseInt(o.b), 255);
            o.a = clamp(0, o.a, 1);
            return o
        };
        o.clone = function () {
            return $.color.make(o.r, o.b, o.g, o.a)
        };
        return o.normalize()
    };
    $.color.extract = function (elem, css) {
        var c;
        do {
            c = elem.css(css).toLowerCase();
            if (c != "" && c != "transparent")break;
            elem = elem.parent()
        } while (elem.length && !$.nodeName(elem.get(0), "body"));
        if (c == "rgba(0, 0, 0, 0)")c = "transparent";
        return $.color.parse(c)
    };
    $.color.parse = function (str) {
        var res, m = $.color.make;
        if (res = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1], 10), parseInt(res[2], 10), parseInt(res[3], 10));
        if (res = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1], 10), parseInt(res[2], 10), parseInt(res[3], 10), parseFloat(res[4]));
        if (res = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1]) * 2.55, parseFloat(res[2]) * 2.55, parseFloat(res[3]) * 2.55);
        if (res = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1]) * 2.55, parseFloat(res[2]) * 2.55, parseFloat(res[3]) * 2.55, parseFloat(res[4]));
        if (res = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16));
        if (res = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1] + res[1], 16), parseInt(res[2] + res[2], 16), parseInt(res[3] + res[3], 16));
        var name = $.trim(str).toLowerCase();
        if (name == "transparent")return m(255, 255, 255, 0); else {
            res = lookupColors[name] || [0, 0, 0];
            return m(res[0], res[1], res[2])
        }
    };
    var lookupColors = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
})(jQuery);
(function ($) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (!$.fn.detach) {
        $.fn.detach = function () {
            return this.each(function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            })
        }
    }
    function Canvas(cls, container) {
        var element = container.children("." + cls)[0];
        if (element == null) {
            element = document.createElement("canvas");
            element.className = cls;
            $(element).css({direction: "ltr", position: "absolute", left: 0, top: 0}).appendTo(container);
            if (!element.getContext) {
                if (window.G_vmlCanvasManager) {
                    element = window.G_vmlCanvasManager.initElement(element)
                } else {
                    throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")
                }
            }
        }
        this.element = element;
        var context = this.context = element.getContext("2d");
        var devicePixelRatio = window.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        this.pixelRatio = devicePixelRatio / backingStoreRatio;
        this.resize(container.width(), container.height());
        this.textContainer = null;
        this.text = {};
        this._textCache = {}
    }

    Canvas.prototype.resize = function (width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height)
        }
        var element = this.element, context = this.context, pixelRatio = this.pixelRatio;
        if (this.width != width) {
            element.width = width * pixelRatio;
            element.style.width = width + "px";
            this.width = width
        }
        if (this.height != height) {
            element.height = height * pixelRatio;
            element.style.height = height + "px";
            this.height = height
        }
        context.restore();
        context.save();
        context.scale(pixelRatio, pixelRatio)
    };
    Canvas.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height)
    };
    Canvas.prototype.render = function () {
        var cache = this._textCache;
        for (var layerKey in cache) {
            if (hasOwnProperty.call(cache, layerKey)) {
                var layer = this.getTextLayer(layerKey), layerCache = cache[layerKey];
                layer.hide();
                for (var styleKey in layerCache) {
                    if (hasOwnProperty.call(layerCache, styleKey)) {
                        var styleCache = layerCache[styleKey];
                        for (var key in styleCache) {
                            if (hasOwnProperty.call(styleCache, key)) {
                                var positions = styleCache[key].positions;
                                for (var i = 0, position; position = positions[i]; i++) {
                                    if (position.active) {
                                        if (!position.rendered) {
                                            layer.append(position.element);
                                            position.rendered = true
                                        }
                                    } else {
                                        positions.splice(i--, 1);
                                        if (position.rendered) {
                                            position.element.detach()
                                        }
                                    }
                                }
                                if (positions.length == 0) {
                                    delete styleCache[key]
                                }
                            }
                        }
                    }
                }
                layer.show()
            }
        }
    };
    Canvas.prototype.getTextLayer = function (classes) {
        var layer = this.text[classes];
        if (layer == null) {
            if (this.textContainer == null) {
                this.textContainer = $("<div class='flot-text'></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    "font-size": "smaller",
                    color: "#545454"
                }).insertAfter(this.element)
            }
            layer = this.text[classes] = $("<div></div>").addClass(classes).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)
        }
        return layer
    };
    Canvas.prototype.getTextInfo = function (layer, text, font, angle, width) {
        var textStyle, layerCache, styleCache, info;
        text = "" + text;
        if (typeof font === "object") {
            textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family
        } else {
            textStyle = font
        }
        layerCache = this._textCache[layer];
        if (layerCache == null) {
            layerCache = this._textCache[layer] = {}
        }
        styleCache = layerCache[textStyle];
        if (styleCache == null) {
            styleCache = layerCache[textStyle] = {}
        }
        info = styleCache[text];
        if (info == null) {
            var element = $("<div></div>").html(text).css({
                position: "absolute",
                "max-width": width,
                top: -9999
            }).appendTo(this.getTextLayer(layer));
            if (typeof font === "object") {
                element.css({font: textStyle, color: font.color})
            } else if (typeof font === "string") {
                element.addClass(font)
            }
            info = styleCache[text] = {
                width: element.outerWidth(true),
                height: element.outerHeight(true),
                element: element,
                positions: []
            };
            element.detach()
        }
        return info
    };
    Canvas.prototype.addText = function (layer, x, y, text, font, angle, width, halign, valign) {
        var info = this.getTextInfo(layer, text, font, angle, width), positions = info.positions;
        if (halign == "center") {
            x -= info.width / 2
        } else if (halign == "right") {
            x -= info.width
        }
        if (valign == "middle") {
            y -= info.height / 2
        } else if (valign == "bottom") {
            y -= info.height
        }
        for (var i = 0, position; position = positions[i]; i++) {
            if (position.x == x && position.y == y) {
                position.active = true;
                return
            }
        }
        position = {
            active: true,
            rendered: false,
            element: positions.length ? info.element.clone() : info.element,
            x: x,
            y: y
        };
        positions.push(position);
        position.element.css({top: Math.round(y), left: Math.round(x), "text-align": halign})
    };
    Canvas.prototype.removeText = function (layer, x, y, text, font, angle) {
        if (text == null) {
            var layerCache = this._textCache[layer];
            if (layerCache != null) {
                for (var styleKey in layerCache) {
                    if (hasOwnProperty.call(layerCache, styleKey)) {
                        var styleCache = layerCache[styleKey];
                        for (var key in styleCache) {
                            if (hasOwnProperty.call(styleCache, key)) {
                                var positions = styleCache[key].positions;
                                for (var i = 0, position; position = positions[i]; i++) {
                                    position.active = false
                                }
                            }
                        }
                    }
                }
            }
        } else {
            var positions = this.getTextInfo(layer, text, font, angle).positions;
            for (var i = 0, position; position = positions[i]; i++) {
                if (position.x == x && position.y == y) {
                    position.active = false
                }
            }
        }
    };
    function Plot(placeholder, data_, options_, plugins) {
        var series = [], options = {
            colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
            legend: {
                show: true,
                noColumns: 1,
                labelFormatter: null,
                labelBoxBorderColor: "#ccc",
                container: null,
                position: "ne",
                margin: 5,
                backgroundColor: null,
                backgroundOpacity: .85,
                sorted: null
            },
            xaxis: {
                show: null,
                position: "bottom",
                mode: null,
                font: null,
                color: null,
                tickColor: null,
                transform: null,
                inverseTransform: null,
                min: null,
                max: null,
                autoscaleMargin: null,
                ticks: null,
                tickFormatter: null,
                labelWidth: null,
                labelHeight: null,
                reserveSpace: null,
                tickLength: null,
                alignTicksWithAxis: null,
                tickDecimals: null,
                tickSize: null,
                minTickSize: null
            },
            yaxis: {autoscaleMargin: .02, position: "left"},
            xaxes: [],
            yaxes: [],
            series: {
                points: {show: false, radius: 3, lineWidth: 2, fill: true, fillColor: "#ffffff", symbol: "circle"},
                lines: {lineWidth: 2, fill: false, fillColor: null, steps: false},
                bars: {
                    show: false,
                    lineWidth: 2,
                    barWidth: 1,
                    fill: true,
                    fillColor: null,
                    align: "left",
                    horizontal: false,
                    zero: true
                },
                shadowSize: 3,
                highlightColor: null
            },
            grid: {
                show: true,
                aboveData: false,
                color: "#545454",
                backgroundColor: null,
                borderColor: null,
                tickColor: null,
                margin: 0,
                labelMargin: 5,
                axisMargin: 8,
                borderWidth: 2,
                minBorderMargin: null,
                markings: null,
                markingsColor: "#f4f4f4",
                markingsLineWidth: 2,
                clickable: false,
                hoverable: false,
                autoHighlight: true,
                mouseActiveRadius: 10
            },
            interaction: {redrawOverlayInterval: 1e3 / 60},
            hooks: {}
        }, surface = null, overlay = null, eventHolder = null, ctx = null, octx = null, xaxes = [], yaxes = [], plotOffset = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, plotWidth = 0, plotHeight = 0, hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        }, plot = this;
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function () {
            return placeholder
        };
        plot.getCanvas = function () {
            return surface.element
        };
        plot.getPlotOffset = function () {
            return plotOffset
        };
        plot.width = function () {
            return plotWidth
        };
        plot.height = function () {
            return plotHeight
        };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o
        };
        plot.getData = function () {
            return series
        };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis
            });
            return res
        };
        plot.getXAxes = function () {
            return xaxes
        };
        plot.getYAxes = function () {
            return yaxes
        };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () {
            return options
        };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function (point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            }
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();
            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null
        };
        plot.resize = function () {
            var width = placeholder.width(), height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height)
        };
        plot.hooks = hooks;
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();
        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)hook[i].apply(this, args)
        }

        function initPlugins() {
            var classes = {Canvas: Canvas};
            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)$.extend(true, options, p.options)
            }
        }

        function parseOptions(opts) {
            $.extend(true, options, opts);
            if (opts && opts.colors) {
                options.colors = opts.colors
            }
            if (options.xaxis.color == null)options.xaxis.color = $.color.parse(options.grid.color).scale("a", .22).toString();
            if (options.yaxis.color == null)options.yaxis.color = $.color.parse(options.grid.color).scale("a", .22).toString();
            if (options.xaxis.tickColor == null)options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null)options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;
            if (options.grid.borderColor == null)options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)options.grid.tickColor = $.color.parse(options.grid.color).scale("a", .22).toString();
            var i, axisOptions, axisCount, fontSize = placeholder.css("font-size"), fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13, fontDefaults = {
                style: placeholder.css("font-style"),
                size: Math.round(.8 * fontSizeDefault),
                variant: placeholder.css("font-variant"),
                weight: placeholder.css("font-weight"),
                family: placeholder.css("font-family")
            };
            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {
                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color
                }
                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;
                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15)
                    }
                }
            }
            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {
                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color
                }
                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;
                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15)
                    }
                }
            }
            if (options.xaxis.noTicks && options.xaxis.ticks == null)options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null
                }
            }
            if (options.grid.coloredAreas)options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)$.extend(true, options.series.lines, options.lines);
            if (options.points)$.extend(true, options.series.points, options.points);
            if (options.bars)$.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)options.series.highlightColor = options.highlightColor;
            for (i = 0; i < options.xaxes.length; ++i)getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];
            for (var n in hooks)if (options.hooks[n] && options.hooks[n].length)hooks[n] = hooks[n].concat(options.hooks[n]);
            executeHooks(hooks.processOptions, [options])
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData()
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);
                if (d[i].data != null) {
                    s.data = d[i].data;
                    delete d[i].data;
                    $.extend(true, s, d[i]);
                    d[i].data = s.data
                } else s.data = d[i];
                res.push(s)
            }
            return res
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object")a = a.n;
            if (typeof a != "number")a = 1;
            return a
        }

        function allAxes() {
            return $.grep(xaxes.concat(yaxes), function (a) {
                return a
            })
        }

        function canvasToAxisCoords(pos) {
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)res["x" + axis.n] = axis.c2p(pos.left)
            }
            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)res["y" + axis.n] = axis.c2p(pos.top)
            }
            if (res.x1 !== undefined)res.x = res.x1;
            if (res.y1 !== undefined)res.y = res.y1;
            return res
        }

        function axisToCanvasCoords(pos) {
            var res = {}, i, axis, key;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)key = "x";
                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break
                    }
                }
            }
            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)key = "y";
                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break
                    }
                }
            }
            return res
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])axes[number - 1] = {
                n: number,
                direction: axes == xaxes ? "x" : "y",
                options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
            };
            return axes[number - 1]
        }

        function fillInSeriesOptions() {
            var neededColors = series.length, maxIndex = -1, i;
            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc
                    }
                }
            }
            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1
            }
            var c, colors = [], colorPool = options.colors, colorPoolSize = colorPool.length, variation = 0;
            for (i = 0; i < neededColors; i++) {
                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");
                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < .5) {
                            variation = -variation - .2
                        } else variation = 0
                    } else variation = -variation
                }
                colors[i] = c.scale("rgb", 1 + variation)
            }
            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori
                } else if (typeof s.color == "number")s.color = colors[s.color].toString();
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)if (s[v] && s[v].show) {
                        show = false;
                        break
                    }
                    if (show)s.lines.show = true
                }
                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill
                }
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"))
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY, bottomSentry = Number.NEGATIVE_INFINITY, fakeInfinity = Number.MAX_VALUE, i, j, k, m, length, s, points, ps, x, y, axis, val, f, p, data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)axis.datamax = max
            }

            $.each(allAxes(), function (_, axis) {
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false
            });
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = {points: []};
                executeHooks(hooks.processRawData, [s, s.data, s.datapoints])
            }
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                data = s.data;
                format = s.datapoints.format;
                if (!format) {
                    format = [];
                    format.push({x: true, number: true, required: true});
                    format.push({y: true, number: true, required: true});
                    if (s.bars.show || s.lines.show && s.lines.fill) {
                        var autoscale = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
                        format.push({y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale});
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true
                        }
                    }
                    s.datapoints.format = format
                }
                if (s.datapoints.pointsize != null)continue;
                s.datapoints.pointsize = format.length;
                ps = s.datapoints.pointsize;
                points = s.datapoints.points;
                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;
                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];
                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];
                            if (f) {
                                if (f.number && val != null) {
                                    val = +val;
                                    if (isNaN(val))val = null; else if (val == Infinity)val = fakeInfinity; else if (val == -Infinity)val = -fakeInfinity
                                }
                                if (val == null) {
                                    if (f.required)nullify = true;
                                    if (f.defaultValue != null)val = f.defaultValue
                                }
                            }
                            points[k + m] = val
                        }
                    }
                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val)
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val)
                                    }
                                }
                            }
                            points[k + m] = null
                        }
                    } else {
                        if (insertSteps && k > 0 && points[k - ps] != null && points[k - ps] != points[k] && points[k - ps + 1] != points[k + 1]) {
                            for (m = 0; m < ps; ++m)points[k + ps + m] = points[k + m];
                            points[k + 1] = points[k - ps + 1];
                            k += ps
                        }
                    }
                }
            }
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                executeHooks(hooks.processDatapoints, [s, s.datapoints])
            }
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;
                var xmin = topSentry, ymin = topSentry, xmax = bottomSentry, ymax = bottomSentry;
                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)continue;
                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)continue;
                        if (f.x) {
                            if (val < xmin)xmin = val;
                            if (val > xmax)xmax = val
                        }
                        if (f.y) {
                            if (val < ymin)ymin = val;
                            if (val > ymax)ymax = val
                        }
                    }
                }
                if (s.bars.show) {
                    var delta;
                    switch (s.bars.align) {
                        case"left":
                            delta = 0;
                            break;
                        case"right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2
                    }
                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth
                    } else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth
                    }
                }
                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax)
            }
            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)axis.datamin = null;
                if (axis.datamax == bottomSentry)axis.datamax = null
            })
        }

        function setupCanvases() {
            placeholder.css("padding", 0).children().filter(function () {
                return !$(this).hasClass("flot-overlay") && !$(this).hasClass("flot-base")
            }).remove();
            if (placeholder.css("position") == "static")placeholder.css("position", "relative");
            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder);
            ctx = surface.context;
            octx = overlay.context;
            eventHolder = $(overlay.element).unbind();
            var existing = placeholder.data("plot");
            if (existing) {
                existing.shutdown();
                overlay.clear()
            }
            placeholder.data("plot", plot)
        }

        function bindEvents() {
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);
                eventHolder.bind("mouseleave", onMouseLeave)
            }
            if (options.grid.clickable)eventHolder.click(onClick);
            executeHooks(hooks.bindEvents, [eventHolder])
        }

        function shutdown() {
            if (redrawTimeout)clearTimeout(redrawTimeout);
            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);
            executeHooks(hooks.shutdown, [eventHolder])
        }

        function setTransformationHelpers(axis) {
            function identity(x) {
                return x
            }

            var s, m, t = axis.options.transform || identity, it = axis.options.inverseTransform;
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min))
            } else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min))
            }
            if (t == identity)axis.p2c = function (p) {
                return (p - m) * s
            }; else axis.p2c = function (p) {
                return (t(p) - m) * s
            };
            if (!it)axis.c2p = function (c) {
                return m + c / s
            }; else axis.c2p = function (c) {
                return it(m + c / s)
            }
        }

        function measureTickLabels(axis) {
            var opts = axis.options, ticks = axis.ticks || [], labelWidth = opts.labelWidth || 0, labelHeight = opts.labelHeight || 0, maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null), legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis", layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles, font = opts.font || "flot-tick-label tickLabel";
            for (var i = 0; i < ticks.length; ++i) {
                var t = ticks[i];
                if (!t.label)continue;
                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);
                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height)
            }
            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight
        }

        function allocateAxisBoxFirstPhase(axis) {
            var lw = axis.labelWidth, lh = axis.labelHeight, pos = axis.options.position, isXAxis = axis.direction === "x", tickLength = axis.options.tickLength, axisMargin = options.grid.axisMargin, padding = options.grid.labelMargin, innermost = true, outermost = true, first = true, found = false;
            $.each(isXAxis ? xaxes : yaxes, function (i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false
                        } else {
                            innermost = false
                        }
                    }
                    if (!found) {
                        first = false
                    }
                }
            });
            if (outermost) {
                axisMargin = 0
            }
            if (tickLength == null) {
                tickLength = first ? "full" : 5
            }
            if (!isNaN(+tickLength))padding += +tickLength;
            if (isXAxis) {
                lh += padding;
                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = {top: surface.height - plotOffset.bottom, height: lh}
                } else {
                    axis.box = {top: plotOffset.top + axisMargin, height: lh};
                    plotOffset.top += lh + axisMargin
                }
            } else {
                lw += padding;
                if (pos == "left") {
                    axis.box = {left: plotOffset.left + axisMargin, width: lw};
                    plotOffset.left += lw + axisMargin
                } else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = {left: surface.width - plotOffset.right, width: lw}
                }
            }
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost
        }

        function allocateAxisBoxSecondPhase(axis) {
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth
            } else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight
            }
        }

        function adjustLayoutForThingsStickingOut() {
            var minMargin = options.grid.minBorderMargin, axis, i;
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth / 2))
            }
            var margins = {left: minMargin, right: minMargin, top: minMargin, bottom: minMargin};
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2)
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2)
                    }
                }
            });
            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom))
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;
            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0
            }
            executeHooks(hooks.processOffset, [plotOffset]);
            for (var a in plotOffset) {
                if (typeof options.grid.borderWidth == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0
                } else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0
                }
            }
            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis)
            });
            if (showGrid) {
                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace
                });
                $.each(allocatedAxes, function (_, axis) {
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    measureTickLabels(axis)
                });
                for (i = allocatedAxes.length - 1; i >= 0; --i)allocateAxisBoxFirstPhase(allocatedAxes[i]);
                adjustLayoutForThingsStickingOut();
                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis)
                })
            }
            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis)
            });
            if (showGrid) {
                drawAxisLabels()
            }
            insertLegend()
        }

        function setRange(axis) {
            var opts = axis.options, min = +(opts.min != null ? opts.min : axis.datamin), max = +(opts.max != null ? opts.max : axis.datamax), delta = max - min;
            if (delta == 0) {
                var widen = max == 0 ? 1 : .01;
                if (opts.min == null)min -= widen;
                if (opts.max == null || opts.min != null)max += widen
            } else {
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)min = 0
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)max = 0
                    }
                }
            }
            axis.min = min;
            axis.max = max
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)noTicks = opts.ticks; else noTicks = .3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);
            var delta = (axis.max - axis.min) / noTicks, dec = -Math.floor(Math.log(delta) / Math.LN10), maxDec = opts.tickDecimals;
            if (maxDec != null && dec > maxDec) {
                dec = maxDec
            }
            var magn = Math.pow(10, -dec), norm = delta / magn, size;
            if (norm < 1.5) {
                size = 1
            } else if (norm < 3) {
                size = 2;
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec
                }
            } else if (norm < 7.5) {
                size = 5
            } else {
                size = 10
            }
            size *= magn;
            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize
            }
            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;
            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.")
            }
            if (!axis.tickGenerator) {
                axis.tickGenerator = function (axis) {
                    var ticks = [], start = floorInBase(axis.min, axis.tickSize), i = 0, v = Number.NaN, prev;
                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i
                    } while (v < axis.max && v != prev);
                    return ticks
                };
                axis.tickFormatter = function (value, axis) {
                    var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
                    var formatted = "" + Math.round(value * factor) / factor;
                    if (axis.tickDecimals != null) {
                        var decimal = formatted.indexOf(".");
                        var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
                        if (precision < axis.tickDecimals) {
                            return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision)
                        }
                    }
                    return formatted
                }
            }
            if ($.isFunction(opts.tickFormatter))axis.tickFormatter = function (v, axis) {
                return "" + opts.tickFormatter(v, axis)
            };
            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1])
                    }
                    axis.tickGenerator = function (axis) {
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v)
                        }
                        return ticks
                    };
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1), ts = axis.tickGenerator(axis);
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))axis.tickDecimals = extraDec
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || typeof oticks == "number" && oticks > 0)ticks = axis.tickGenerator(axis); else if (oticks) {
                if ($.isFunction(oticks))ticks = oticks(axis); else ticks = oticks
            }
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)label = t[1]
                } else v = +t;
                if (label == null)label = axis.tickFormatter(v, axis);
                if (!isNaN(v))axis.ticks.push({v: v, label: label})
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                if (axis.options.min == null)axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)axis.max = Math.max(axis.max, ticks[ticks.length - 1].v)
            }
        }

        function draw() {
            surface.clear();
            executeHooks(hooks.drawBackground, [ctx]);
            var grid = options.grid;
            if (grid.show && grid.backgroundColor)drawBackground();
            if (grid.show && !grid.aboveData) {
                drawGrid()
            }
            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i])
            }
            executeHooks(hooks.draw, [ctx]);
            if (grid.show && grid.aboveData) {
                drawGrid()
            }
            surface.render();
            triggerRedrawOverlay()
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();
            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)key = coord + "axis";
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break
                    }
                }
            }
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"]
            }
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp
            }
            return {from: from, to: to, axis: axis}
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore()
        }

        function drawGrid() {
            var i, axes, bw, bc;
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;
                    markings = markings(axes)
                }
                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i], xrange = extractRange(m, "x"), yrange = extractRange(m, "y");
                    if (xrange.from == null)xrange.from = xrange.axis.min;
                    if (xrange.to == null)xrange.to = xrange.axis.max;
                    if (yrange.from == null)yrange.from = yrange.axis.min;
                    if (yrange.to == null)yrange.to = yrange.axis.max;
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max || yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)continue;
                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);
                    var xequal = xrange.from === xrange.to, yequal = yrange.from === yrange.to;
                    if (xequal && yequal) {
                        continue
                    }
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));
                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth, subPixel = lineWidth % 2 ? .5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to)
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel)
                        }
                        ctx.stroke()
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to, xrange.to - xrange.from, yrange.from - yrange.to)
                    }
                }
            }
            axes = allAxes();
            bw = options.grid.borderWidth;
            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box, t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)continue;
                ctx.lineWidth = 1;
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")y = axis.position == "top" ? 0 : plotHeight; else y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0)
                } else {
                    y = 0;
                    if (t == "full")x = axis.position == "left" ? 0 : plotWidth; else x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0)
                }
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")xoff = plotWidth + 1; else yoff = plotHeight + 1;
                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + .5
                        } else {
                            x = Math.floor(x) + .5
                        }
                    }
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke()
                }
                ctx.strokeStyle = axis.options.tickColor;
                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;
                    xoff = yoff = 0;
                    if (isNaN(v) || v < axis.min || v > axis.max || t == "full" && (typeof bw == "object" && bw[axis.position] > 0 || bw > 0) && (v == axis.min || v == axis.max))continue;
                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;
                        if (axis.position == "top")yoff = -yoff
                    } else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;
                        if (axis.position == "left")xoff = -xoff
                    }
                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")x = Math.floor(x) + .5; else y = Math.floor(y) + .5
                    }
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff)
                }
                ctx.stroke()
            }
            if (bw) {
                bc = options.grid.borderColor;
                if (typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw}
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc}
                    }
                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top / 2);
                        ctx.lineTo(plotWidth, 0 - bw.top / 2);
                        ctx.stroke()
                    }
                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke()
                    }
                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke()
                    }
                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left / 2, plotHeight + bw.bottom);
                        ctx.lineTo(0 - bw.left / 2, 0);
                        ctx.stroke()
                    }
                } else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw / 2, -bw / 2, plotWidth + bw, plotHeight + bw)
                }
            }
            ctx.restore()
        }

        function drawAxisLabels() {
            $.each(allAxes(), function (_, axis) {
                var box = axis.box, legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis", layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles, font = axis.options.font || "flot-tick-label tickLabel", tick, x, y, halign, valign;
                surface.removeText(layer);
                if (!axis.show || axis.ticks.length == 0)return;
                for (var i = 0; i < axis.ticks.length; ++i) {
                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)continue;
                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom"
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right"
                        } else {
                            x = box.left + box.padding
                        }
                    }
                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign)
                }
            })
        }

        function drawSeries(series) {
            if (series.lines.show)drawSeriesLines(series);
            if (series.bars.show)drawSeriesBars(series);
            if (series.points.show)drawSeriesPoints(series)
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize, prevx = null, prevy = null;
                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1], x2 = points[i], y2 = points[i + 1];
                    if (x1 == null || x2 == null)continue;
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)continue;
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min
                    } else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min
                    }
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max
                    } else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max
                    }
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min
                    } else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min
                    }
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max
                    } else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max
                    }
                    if (x1 != prevx || y1 != prevy)ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);
                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset)
                }
                ctx.stroke()
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize, bottom = Math.min(Math.max(0, axisy.min), axisy.max), i = 0, top, areaOpen = false, ypos = 1, segmentStart = 0, segmentEnd = 0;
                while (true) {
                    if (ps > 0 && i > points.length + ps)break;
                    i += ps;
                    var x1 = points[i - ps], y1 = points[i - ps + ypos], x2 = points[i], y2 = points[i + ypos];
                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue
                        }
                        if (ps < 0 && i == segmentStart + ps) {
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue
                        }
                    }
                    if (x1 == null || x2 == null)continue;
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min
                    } else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min
                    }
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max
                    } else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max
                    }
                    if (!areaOpen) {
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true
                    }
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue
                    } else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue
                    }
                    var x1old = x1, x2old = x2;
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min
                    } else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min
                    }
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max
                    } else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max
                    }
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1))
                    }
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2))
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";
            var lw = series.lines.lineWidth, sw = series.shadowSize;
            if (lw > 0 && sw > 0) {
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                var angle = Math.PI / 18;
                plotLine(series.datapoints, Math.sin(angle) * (lw / 2 + sw / 2), Math.cos(angle) * (lw / 2 + sw / 2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw / 2;
                plotLine(series.datapoints, Math.sin(angle) * (lw / 2 + sw / 4), Math.cos(angle) * (lw / 2 + sw / 4), series.xaxis, series.yaxis)
            }
            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis)
            }
            if (lw > 0)plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore()
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;
                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)continue;
                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false); else symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();
                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill()
                    }
                    ctx.stroke()
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            var lw = series.points.lineWidth, sw = series.shadowSize, radius = series.points.radius, symbol = series.points.symbol;
            if (lw == 0)lw = 1e-4;
            if (lw > 0 && sw > 0) {
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w / 2, true, series.xaxis, series.yaxis, symbol);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w / 2, true, series.xaxis, series.yaxis, symbol)
            }
            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius, getFillStyle(series.points, series.color), 0, false, series.xaxis, series.yaxis, symbol);
            ctx.restore()
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top, drawLeft, drawRight, drawTop, drawBottom, tmp;
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false
                }
            } else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false
                }
            }
            if (right < axisx.min || left > axisx.max || top < axisy.min || bottom > axisy.max)return;
            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false
            }
            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false
            }
            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false
            }
            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false
            }
            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();
                c.moveTo(left, bottom);
                if (drawLeft)c.lineTo(left, top); else c.moveTo(left, top);
                if (drawTop)c.lineTo(right, top); else c.moveTo(right, top);
                if (drawRight)c.lineTo(right, bottom); else c.moveTo(right, bottom);
                if (drawBottom)c.lineTo(left, bottom); else c.moveTo(left, bottom);
                c.stroke()
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;
                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth)
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;
            var barLeft;
            switch (series.bars.align) {
                case"left":
                    barLeft = 0;
                    break;
                case"right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2
            }
            var fillStyleCallback = series.bars.fill ? function (bottom, top) {
                return getFillStyle(series.bars, series.color, bottom, top)
            } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore()
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)return null;
            if (filloptions.fillColor)return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);
            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : .4;
            c.normalize();
            return c.toString()
        }

        function insertLegend() {
            if (options.legend.container != null) {
                $(options.legend.container).html("")
            } else {
                placeholder.find(".legend").remove()
            }
            if (!options.legend.show) {
                return
            }
            var fragments = [], entries = [], rowStarted = false, lf = options.legend.labelFormatter, s, label;
            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({label: label, color: s.color})
                    }
                }
            }
            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted)
                } else if (options.legend.sorted == "reverse") {
                    entries.reverse()
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function (a, b) {
                        return a.label == b.label ? 0 : a.label < b.label != ascending ? 1 : -1
                    })
                }
            }
            for (var i = 0; i < entries.length; ++i) {
                var entry = entries[i];
                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)fragments.push("</tr>");
                    fragments.push("<tr>");
                    rowStarted = true
                }
                fragments.push('<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' + '<td class="legendLabel">' + entry.label + "</td>")
            }
            if (rowStarted)fragments.push("</tr>");
            if (fragments.length == 0)return;
            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + "</table>";
            if (options.legend.container != null)$(options.legend.container).html(table); else {
                var pos = "", p = options.legend.position, m = options.legend.margin;
                if (m[0] == null)m = [m, m];
                if (p.charAt(0) == "n")pos += "top:" + (m[1] + plotOffset.top) + "px;"; else if (p.charAt(0) == "s")pos += "bottom:" + (m[1] + plotOffset.bottom) + "px;";
                if (p.charAt(1) == "e")pos += "right:" + (m[0] + plotOffset.right) + "px;"; else if (p.charAt(1) == "w")pos += "left:" + (m[0] + plotOffset.left) + "px;";
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos + ";") + "</div>").appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0) {
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")c = $.color.parse(c); else c = $.color.extract(legend, "background-color");
                        c.a = 1;
                        c = c.toString()
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + "px;height:" + div.height() + "px;" + pos + "background-color:" + c + ';"> </div>').prependTo(legend).css("opacity", options.legend.backgroundOpacity)
                }
            }
        }

        var highlights = [], redrawTimeout = null;

        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius, smallestDistance = maxDistance * maxDistance + 1, item = null, foundPoint = false, i, j, ps;
            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))continue;
                var s = series[i], axisx = s.xaxis, axisy = s.yaxis, points = s.datapoints.points, mx = axisx.c2p(mouseX), my = axisy.c2p(mouseY), maxx = maxDistance / axisx.scale, maxy = maxDistance / axisy.scale;
                ps = s.datapoints.pointsize;
                if (axisx.options.inverseTransform)maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)maxy = Number.MAX_VALUE;
                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)continue;
                        if (x - mx > maxx || x - mx < -maxx || y - my > maxy || y - my < -maxy)continue;
                        var dx = Math.abs(axisx.p2c(x) - mouseX), dy = Math.abs(axisy.p2c(y) - mouseY), dist = dx * dx + dy * dy;
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps]
                        }
                    }
                }
                if (s.bars.show && !item) {
                    var barLeft, barRight;
                    switch (s.bars.align) {
                        case"left":
                            barLeft = 0;
                            break;
                        case"right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2
                    }
                    barRight = barLeft + s.bars.barWidth;
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)continue;
                        if (series[i].bars.horizontal ? mx <= Math.max(b, x) && mx >= Math.min(b, x) && my >= y + barLeft && my <= y + barRight : mx >= x + barLeft && mx <= x + barRight && my >= Math.min(b, y) && my <= Math.max(b, y))item = [i, j / ps]
                    }
                }
            }
            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;
                return {
                    datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                    dataIndex: j,
                    series: series[i],
                    seriesIndex: i
                }
            }
            return null
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)triggerClickHoverEvent("plothover", e, function (s) {
                return s["hoverable"] != false
            })
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)triggerClickHoverEvent("plothover", e, function (s) {
                return false
            })
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e, function (s) {
                return s["clickable"] != false
            })
        }

        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(), canvasX = event.pageX - offset.left - plotOffset.left, canvasY = event.pageY - offset.top - plotOffset.top, pos = canvasToAxisCoords({
                left: canvasX,
                top: canvasY
            });
            pos.pageX = event.pageX;
            pos.pageY = event.pageY;
            var item = findNearbyItem(canvasX, canvasY, seriesFilter);
            if (item) {
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10)
            }
            if (options.grid.autoHighlight) {
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname && !(item && h.series == item.series && h.point[0] == item.datapoint[0] && h.point[1] == item.datapoint[1]))unhighlight(h.series, h.point)
                }
                if (item)highlight(item.series, item.datapoint, eventname)
            }
            placeholder.trigger(eventname, [pos, item])
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {
                drawOverlay();
                return
            }
            if (!redrawTimeout)redrawTimeout = setTimeout(drawOverlay, t)
        }

        function drawOverlay() {
            redrawTimeout = null;
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);
            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];
                if (hi.series.bars.show)drawBarHighlight(hi.series, hi.point); else drawPointHighlight(hi.series, hi.point)
            }
            octx.restore();
            executeHooks(hooks.drawOverlay, [octx])
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")s = series[s];
            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1))
            }
            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({series: s, point: point, auto: auto});
                triggerRedrawOverlay()
            } else if (!auto)highlights[i].auto = false
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return
            }
            if (typeof s == "number")s = series[s];
            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1))
            }
            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);
                triggerRedrawOverlay()
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0] && h.point[1] == p[1])return i
            }
            return -1
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1], axisx = series.xaxis, axisy = series.yaxis, highlightColor = typeof series.highlightColor === "string" ? series.highlightColor : $.color.parse(series.color).scale("a", .5).toString();
            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)return;
            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);
            octx.beginPath();
            if (series.points.symbol == "circle")octx.arc(x, y, radius, 0, 2 * Math.PI, false); else series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke()
        }

        function drawBarHighlight(series, point) {
            var highlightColor = typeof series.highlightColor === "string" ? series.highlightColor : $.color.parse(series.color).scale("a", .5).toString(), fillStyle = highlightColor, barLeft;
            switch (series.bars.align) {
                case"left":
                    barLeft = 0;
                    break;
                case"right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2
            }
            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;
            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth, function () {
                return fillStyle
            }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth)
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")return spec; else {
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);
                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)co = co.scale("rgb", c.brightness);
                        if (c.opacity != null)co.a *= c.opacity;
                        c = co.toString()
                    }
                    gradient.addColorStop(i / (l - 1), c)
                }
                return gradient
            }
        }
    }

    $.plot = function (placeholder, data, options) {
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        return plot
    };
    $.plot.version = "0.8.3";
    $.plot.plugins = [];
    $.fn.plot = function (data, options) {
        return this.each(function () {
            $.plot(this, data, options)
        })
    };
    function floorInBase(n, base) {
        return base * Math.floor(n / base)
    }
})(jQuery);

/*!
 * Flot plugin for rendering pie charts.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Created by Brian Medendorp
 * Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars
 */
(function ($) {
    var REDRAW_ATTEMPTS = 10;
    var REDRAW_SHRINK = .95;

    function init(plot) {
        var canvas = null, target = null, options = null, maxRadius = null, centerLeft = null, centerTop = null, processed = false, ctx = null;
        var highlights = [];
        plot.hooks.processOptions.push(function (plot, options) {
            if (options.series.pie.show) {
                options.grid.show = false;
                if (options.series.pie.label.show == "auto") {
                    if (options.legend.show) {
                        options.series.pie.label.show = false
                    } else {
                        options.series.pie.label.show = true
                    }
                }
                if (options.series.pie.radius == "auto") {
                    if (options.series.pie.label.show) {
                        options.series.pie.radius = 3 / 4
                    } else {
                        options.series.pie.radius = 1
                    }
                }
                if (options.series.pie.tilt > 1) {
                    options.series.pie.tilt = 1
                } else if (options.series.pie.tilt < 0) {
                    options.series.pie.tilt = 0
                }
            }
        });
        plot.hooks.bindEvents.push(function (plot, eventHolder) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                if (options.grid.hoverable) {
                    eventHolder.unbind("mousemove").mousemove(onMouseMove)
                }
                if (options.grid.clickable) {
                    eventHolder.unbind("click").click(onClick)
                }
            }
        });
        plot.hooks.processDatapoints.push(function (plot, series, data, datapoints) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                processDatapoints(plot, series, data, datapoints)
            }
        });
        plot.hooks.drawOverlay.push(function (plot, octx) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                drawOverlay(plot, octx)
            }
        });
        plot.hooks.draw.push(function (plot, newCtx) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                draw(plot, newCtx)
            }
        });
        function processDatapoints(plot, series, datapoints) {
            if (!processed) {
                processed = true;
                canvas = plot.getCanvas();
                target = $(canvas).parent();
                options = plot.getOptions();
                plot.setData(combine(plot.getData()))
            }
        }

        function combine(data) {
            var total = 0, combined = 0, numCombined = 0, color = options.series.pie.combine.color, newdata = [];
            for (var i = 0; i < data.length; ++i) {
                var value = data[i].data;
                if ($.isArray(value) && value.length == 1) {
                    value = value[0]
                }
                if ($.isArray(value)) {
                    if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
                        value[1] = +value[1]
                    } else {
                        value[1] = 0
                    }
                } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
                    value = [1, +value]
                } else {
                    value = [1, 0]
                }
                data[i].data = [value]
            }
            for (var i = 0; i < data.length; ++i) {
                total += data[i].data[0][1]
            }
            for (var i = 0; i < data.length; ++i) {
                var value = data[i].data[0][1];
                if (value / total <= options.series.pie.combine.threshold) {
                    combined += value;
                    numCombined++;
                    if (!color) {
                        color = data[i].color
                    }
                }
            }
            for (var i = 0; i < data.length; ++i) {
                var value = data[i].data[0][1];
                if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
                    newdata.push($.extend(data[i], {
                        data: [[1, value]],
                        color: data[i].color,
                        label: data[i].label,
                        angle: value * Math.PI * 2 / total,
                        percent: value / (total / 100)
                    }))
                }
            }
            if (numCombined > 1) {
                newdata.push({
                    data: [[1, combined]],
                    color: color,
                    label: options.series.pie.combine.label,
                    angle: combined * Math.PI * 2 / total,
                    percent: combined / (total / 100)
                })
            }
            return newdata
        }

        function draw(plot, newCtx) {
            if (!target) {
                return
            }
            var canvasWidth = plot.getPlaceholder().width(), canvasHeight = plot.getPlaceholder().height(), legendWidth = target.children().filter(".legend").children().width() || 0;
            ctx = newCtx;
            processed = false;
            maxRadius = Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
            centerTop = canvasHeight / 2 + options.series.pie.offset.top;
            centerLeft = canvasWidth / 2;
            if (options.series.pie.offset.left == "auto") {
                if (options.legend.position.match("w")) {
                    centerLeft += legendWidth / 2
                } else {
                    centerLeft -= legendWidth / 2
                }
                if (centerLeft < maxRadius) {
                    centerLeft = maxRadius
                } else if (centerLeft > canvasWidth - maxRadius) {
                    centerLeft = canvasWidth - maxRadius
                }
            } else {
                centerLeft += options.series.pie.offset.left
            }
            var slices = plot.getData(), attempts = 0;
            do {
                if (attempts > 0) {
                    maxRadius *= REDRAW_SHRINK
                }
                attempts += 1;
                clear();
                if (options.series.pie.tilt <= .8) {
                    drawShadow()
                }
            } while (!drawPie() && attempts < REDRAW_ATTEMPTS);
            if (attempts >= REDRAW_ATTEMPTS) {
                clear();
                target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")
            }
            if (plot.setSeries && plot.insertLegend) {
                plot.setSeries(slices);
                plot.insertLegend()
            }
            function clear() {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                target.children().filter(".pieLabel, .pieLabelBackground").remove()
            }

            function drawShadow() {
                var shadowLeft = options.series.pie.shadow.left;
                var shadowTop = options.series.pie.shadow.top;
                var edge = 10;
                var alpha = options.series.pie.shadow.alpha;
                var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
                if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
                    return
                }
                ctx.save();
                ctx.translate(shadowLeft, shadowTop);
                ctx.globalAlpha = alpha;
                ctx.fillStyle = "#000";
                ctx.translate(centerLeft, centerTop);
                ctx.scale(1, options.series.pie.tilt);
                for (var i = 1; i <= edge; i++) {
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
                    ctx.fill();
                    radius -= i
                }
                ctx.restore()
            }

            function drawPie() {
                var startAngle = Math.PI * options.series.pie.startAngle;
                var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
                ctx.save();
                ctx.translate(centerLeft, centerTop);
                ctx.scale(1, options.series.pie.tilt);
                ctx.save();
                var currentAngle = startAngle;
                for (var i = 0; i < slices.length; ++i) {
                    slices[i].startAngle = currentAngle;
                    drawSlice(slices[i].angle, slices[i].color, true)
                }
                ctx.restore();
                if (options.series.pie.stroke.width > 0) {
                    ctx.save();
                    ctx.lineWidth = options.series.pie.stroke.width;
                    currentAngle = startAngle;
                    for (var i = 0; i < slices.length; ++i) {
                        drawSlice(slices[i].angle, options.series.pie.stroke.color, false)
                    }
                    ctx.restore()
                }
                drawDonutHole(ctx);
                ctx.restore();
                if (options.series.pie.label.show) {
                    return drawLabels()
                } else return true;
                function drawSlice(angle, color, fill) {
                    if (angle <= 0 || isNaN(angle)) {
                        return
                    }
                    if (fill) {
                        ctx.fillStyle = color
                    } else {
                        ctx.strokeStyle = color;
                        ctx.lineJoin = "round"
                    }
                    ctx.beginPath();
                    if (Math.abs(angle - Math.PI * 2) > 1e-9) {
                        ctx.moveTo(0, 0)
                    }
                    ctx.arc(0, 0, radius, currentAngle, currentAngle + angle / 2, false);
                    ctx.arc(0, 0, radius, currentAngle + angle / 2, currentAngle + angle, false);
                    ctx.closePath();
                    currentAngle += angle;
                    if (fill) {
                        ctx.fill()
                    } else {
                        ctx.stroke()
                    }
                }

                function drawLabels() {
                    var currentAngle = startAngle;
                    var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;
                    for (var i = 0; i < slices.length; ++i) {
                        if (slices[i].percent >= options.series.pie.label.threshold * 100) {
                            if (!drawLabel(slices[i], currentAngle, i)) {
                                return false
                            }
                        }
                        currentAngle += slices[i].angle
                    }
                    return true;
                    function drawLabel(slice, startAngle, index) {
                        if (slice.data[0][1] == 0) {
                            return true
                        }
                        var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;
                        if (lf) {
                            text = lf(slice.label, slice)
                        } else {
                            text = slice.label
                        }
                        if (plf) {
                            text = plf(text, slice)
                        }
                        var halfAngle = (startAngle + slice.angle + startAngle) / 2;
                        var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
                        var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;
                        var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
                        target.append(html);
                        var label = target.children("#pieLabel" + index);
                        var labelTop = y - label.height() / 2;
                        var labelLeft = x - label.width() / 2;
                        label.css("top", labelTop);
                        label.css("left", labelLeft);
                        if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
                            return false
                        }
                        if (options.series.pie.label.background.opacity != 0) {
                            var c = options.series.pie.label.background.color;
                            if (c == null) {
                                c = slice.color
                            }
                            var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
                            $("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>").css("opacity", options.series.pie.label.background.opacity).insertBefore(label)
                        }
                        return true
                    }
                }
            }
        }

        function drawDonutHole(layer) {
            if (options.series.pie.innerRadius > 0) {
                layer.save();
                var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
                layer.globalCompositeOperation = "destination-out";
                layer.beginPath();
                layer.fillStyle = options.series.pie.stroke.color;
                layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
                layer.fill();
                layer.closePath();
                layer.restore();
                layer.save();
                layer.beginPath();
                layer.strokeStyle = options.series.pie.stroke.color;
                layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
                layer.stroke();
                layer.closePath();
                layer.restore()
            }
        }

        function isPointInPoly(poly, pt) {
            for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)(poly[i][1] <= pt[1] && pt[1] < poly[j][1] || poly[j][1] <= pt[1] && pt[1] < poly[i][1]) && pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0] && (c = !c);
            return c
        }

        function findNearbySlice(mouseX, mouseY) {
            var slices = plot.getData(), options = plot.getOptions(), radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius, x, y;
            for (var i = 0; i < slices.length; ++i) {
                var s = slices[i];
                if (s.pie.show) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
                    ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
                    ctx.closePath();
                    x = mouseX - centerLeft;
                    y = mouseY - centerTop;
                    if (ctx.isPointInPath) {
                        if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
                            ctx.restore();
                            return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i}
                        }
                    } else {
                        var p1X = radius * Math.cos(s.startAngle), p1Y = radius * Math.sin(s.startAngle), p2X = radius * Math.cos(s.startAngle + s.angle / 4), p2Y = radius * Math.sin(s.startAngle + s.angle / 4), p3X = radius * Math.cos(s.startAngle + s.angle / 2), p3Y = radius * Math.sin(s.startAngle + s.angle / 2), p4X = radius * Math.cos(s.startAngle + s.angle / 1.5), p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5), p5X = radius * Math.cos(s.startAngle + s.angle), p5Y = radius * Math.sin(s.startAngle + s.angle), arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]], arrPoint = [x, y];
                        if (isPointInPoly(arrPoly, arrPoint)) {
                            ctx.restore();
                            return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i}
                        }
                    }
                    ctx.restore()
                }
            }
            return null
        }

        function onMouseMove(e) {
            triggerClickHoverEvent("plothover", e)
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e)
        }

        function triggerClickHoverEvent(eventname, e) {
            var offset = plot.offset();
            var canvasX = parseInt(e.pageX - offset.left);
            var canvasY = parseInt(e.pageY - offset.top);
            var item = findNearbySlice(canvasX, canvasY);
            if (options.grid.autoHighlight) {
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname && !(item && h.series == item.series)) {
                        unhighlight(h.series)
                    }
                }
            }
            if (item) {
                highlight(item.series, eventname)
            }
            var pos = {pageX: e.pageX, pageY: e.pageY};
            target.trigger(eventname, [pos, item])
        }

        function highlight(s, auto) {
            var i = indexOfHighlight(s);
            if (i == -1) {
                highlights.push({series: s, auto: auto});
                plot.triggerRedrawOverlay()
            } else if (!auto) {
                highlights[i].auto = false
            }
        }

        function unhighlight(s) {
            if (s == null) {
                highlights = [];
                plot.triggerRedrawOverlay()
            }
            var i = indexOfHighlight(s);
            if (i != -1) {
                highlights.splice(i, 1);
                plot.triggerRedrawOverlay()
            }
        }

        function indexOfHighlight(s) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s)return i
            }
            return -1
        }

        function drawOverlay(plot, octx) {
            var options = plot.getOptions();
            var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
            octx.save();
            octx.translate(centerLeft, centerTop);
            octx.scale(1, options.series.pie.tilt);
            for (var i = 0; i < highlights.length; ++i) {
                drawHighlight(highlights[i].series)
            }
            drawDonutHole(octx);
            octx.restore();
            function drawHighlight(series) {
                if (series.angle <= 0 || isNaN(series.angle)) {
                    return
                }
                octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")";
                octx.beginPath();
                if (Math.abs(series.angle - Math.PI * 2) > 1e-9) {
                    octx.moveTo(0, 0)
                }
                octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
                octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
                octx.closePath();
                octx.fill()
            }
        }
    }

    var options = {
        series: {
            pie: {
                show: false,
                radius: "auto",
                innerRadius: 0,
                startAngle: 3 / 2,
                tilt: 1,
                shadow: {left: 5, top: 15, alpha: .02},
                offset: {top: 0, left: "auto"},
                stroke: {color: "#fff", width: 1},
                label: {
                    show: "auto", formatter: function (label, slice) {
                        return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>"
                    }, radius: 1, background: {color: null, opacity: 0}, threshold: 0
                },
                combine: {threshold: -1, color: null, label: "Other"},
                highlight: {opacity: .5}
            }
        }
    };
    $.plot.plugins.push({init: init, options: options, name: "pie", version: "1.1"})
})(jQuery);

/*!
 * Flot plugin for automatically redrawing plots as the placeholder resizes.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, e, t) {
    "$:nomunge";
    var i = [], n = $.resize = $.extend($.resize, {}), a, r = false, s = "setTimeout", u = "resize", m = u + "-special-event", o = "pendingDelay", l = "activeDelay", f = "throttleWindow";
    n[o] = 200;
    n[l] = 20;
    n[f] = true;
    $.event.special[u] = {
        setup: function () {
            if (!n[f] && this[s]) {
                return false
            }
            var e = $(this);
            i.push(this);
            e.data(m, {w: e.width(), h: e.height()});
            if (i.length === 1) {
                a = t;
                h()
            }
        }, teardown: function () {
            if (!n[f] && this[s]) {
                return false
            }
            var e = $(this);
            for (var t = i.length - 1; t >= 0; t--) {
                if (i[t] == this) {
                    i.splice(t, 1);
                    break
                }
            }
            e.removeData(m);
            if (!i.length) {
                if (r) {
                    cancelAnimationFrame(a)
                } else {
                    clearTimeout(a)
                }
                a = null
            }
        }, add: function (e) {
            if (!n[f] && this[s]) {
                return false
            }
            var i;

            function a(e, n, a) {
                var r = $(this), s = r.data(m) || {};
                s.w = n !== t ? n : r.width();
                s.h = a !== t ? a : r.height();
                i.apply(this, arguments)
            }

            if ($.isFunction(e)) {
                i = e;
                return a
            } else {
                i = e.handler;
                e.handler = a
            }
        }
    };
    function h(t) {
        if (r === true) {
            r = t || 1
        }
        for (var s = i.length - 1; s >= 0; s--) {
            var l = $(i[s]);
            if (l[0] == e || l.is(":visible")) {
                var f = l.width(), c = l.height(), d = l.data(m);
                if (d && (f !== d.w || c !== d.h)) {
                    l.trigger(u, [d.w = f, d.h = c]);
                    r = t || true
                }
            } else {
                d = l.data(m);
                d.w = 0;
                d.h = 0
            }
        }
        if (a !== null) {
            if (r && (t == null || t - r < 1e3)) {
                a = e.requestAnimationFrame(h)
            } else {
                a = setTimeout(h, n[o]);
                r = false
            }
        }
    }

    if (!e.requestAnimationFrame) {
        e.requestAnimationFrame = function () {
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t, i) {
                    return e.setTimeout(function () {
                        t((new Date).getTime())
                    }, n[l])
                }
        }()
    }
    if (!e.cancelAnimationFrame) {
        e.cancelAnimationFrame = function () {
            return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
        }()
    }
})(jQuery, this);
(function ($) {
    var options = {};

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();
            if (placeholder.width() == 0 || placeholder.height() == 0)return;
            plot.resize();
            plot.setupGrid();
            plot.draw()
        }

        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize)
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize)
        }

        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown)
    }

    $.plot.plugins.push({init: init, options: options, name: "resize", version: "1.0"})
})(jQuery);

/*!
 * Flot plugin for stacking data sets rather than overlyaing them.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 */
(function ($) {
    var options = {series: {stack: null}};

    function init(plot) {
        function findMatchingSeries(s, allseries) {
            var res = null;
            for (var i = 0; i < allseries.length; ++i) {
                if (s == allseries[i])break;
                if (allseries[i].stack == s.stack)res = allseries[i]
            }
            return res
        }

        function stackData(plot, s, datapoints) {
            if (s.stack == null || s.stack === false)return;
            var other = findMatchingSeries(s, plot.getData());
            if (!other)return;
            var ps = datapoints.pointsize, points = datapoints.points, otherps = other.datapoints.pointsize, otherpoints = other.datapoints.points, newpoints = [], px, py, intery, qx, qy, bottom, withlines = s.lines.show, horizontal = s.bars.horizontal, withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y), withsteps = withlines && s.lines.steps, fromgap = true, keyOffset = horizontal ? 1 : 0, accumulateOffset = horizontal ? 0 : 1, i = 0, j = 0, l, m;
            while (true) {
                if (i >= points.length)break;
                l = newpoints.length;
                if (points[i] == null) {
                    for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
                    i += ps
                } else if (j >= otherpoints.length) {
                    if (!withlines) {
                        for (m = 0; m < ps; ++m)newpoints.push(points[i + m])
                    }
                    i += ps
                } else if (otherpoints[j] == null) {
                    for (m = 0; m < ps; ++m)newpoints.push(null);
                    fromgap = true;
                    j += otherps
                } else {
                    px = points[i + keyOffset];
                    py = points[i + accumulateOffset];
                    qx = otherpoints[j + keyOffset];
                    qy = otherpoints[j + accumulateOffset];
                    bottom = 0;
                    if (px == qx) {
                        for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
                        newpoints[l + accumulateOffset] += qy;
                        bottom = qy;
                        i += ps;
                        j += otherps
                    } else if (px > qx) {
                        if (withlines && i > 0 && points[i - ps] != null) {
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);
                            newpoints.push(intery + qy);
                            for (m = 2; m < ps; ++m)newpoints.push(points[i + m]);
                            bottom = qy
                        }
                        j += otherps
                    } else {
                        if (fromgap && withlines) {
                            i += ps;
                            continue
                        }
                        for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);
                        newpoints[l + accumulateOffset] += bottom;
                        i += ps
                    }
                    fromgap = false;
                    if (l != newpoints.length && withbottom)newpoints[l + 2] += bottom
                }
                if (withsteps && l != newpoints.length && l > 0 && newpoints[l] != null && newpoints[l] != newpoints[l - ps] && newpoints[l + 1] != newpoints[l - ps + 1]) {
                    for (m = 0; m < ps; ++m)newpoints[l + ps + m] = newpoints[l + m];
                    newpoints[l + 1] = newpoints[l - ps + 1]
                }
            }
            datapoints.points = newpoints
        }

        plot.hooks.processDatapoints.push(stackData)
    }

    $.plot.plugins.push({init: init, options: options, name: "stack", version: "1.2"})
})(jQuery);

/*
 * Pretty handling of time axes.
 *
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * Set axis.mode to "time" to enable. See the section "Time series data" in
 * API.txt for details.
 */
(function ($) {
    var options = {xaxis: {timezone: null, timeformat: null, twelveHourClock: false, monthNames: null}};

    function floorInBase(n, base) {
        return base * Math.floor(n / base)
    }

    function formatDate(d, fmt, monthNames, dayNames) {
        if (typeof d.strftime == "function") {
            return d.strftime(fmt)
        }
        var leftPad = function (n, pad) {
            n = "" + n;
            pad = "" + (pad == null ? "0" : pad);
            return n.length == 1 ? pad + n : n
        };
        var r = [];
        var escape = false;
        var hours = d.getHours();
        var isAM = hours < 12;
        if (monthNames == null) {
            monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
        if (dayNames == null) {
            dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
        var hours12;
        if (hours > 12) {
            hours12 = hours - 12
        } else if (hours == 0) {
            hours12 = 12
        } else {
            hours12 = hours
        }
        for (var i = 0; i < fmt.length; ++i) {
            var c = fmt.charAt(i);
            if (escape) {
                switch (c) {
                    case"a":
                        c = "" + dayNames[d.getDay()];
                        break;
                    case"b":
                        c = "" + monthNames[d.getMonth()];
                        break;
                    case"d":
                        c = leftPad(d.getDate());
                        break;
                    case"e":
                        c = leftPad(d.getDate(), " ");
                        break;
                    case"h":
                    case"H":
                        c = leftPad(hours);
                        break;
                    case"I":
                        c = leftPad(hours12);
                        break;
                    case"l":
                        c = leftPad(hours12, " ");
                        break;
                    case"m":
                        c = leftPad(d.getMonth() + 1);
                        break;
                    case"M":
                        c = leftPad(d.getMinutes());
                        break;
                    case"q":
                        c = "" + (Math.floor(d.getMonth() / 3) + 1);
                        break;
                    case"S":
                        c = leftPad(d.getSeconds());
                        break;
                    case"y":
                        c = leftPad(d.getFullYear() % 100);
                        break;
                    case"Y":
                        c = "" + d.getFullYear();
                        break;
                    case"p":
                        c = isAM ? "" + "am" : "" + "pm";
                        break;
                    case"P":
                        c = isAM ? "" + "AM" : "" + "PM";
                        break;
                    case"w":
                        c = "" + d.getDay();
                        break
                }
                r.push(c);
                escape = false
            } else {
                if (c == "%") {
                    escape = true
                } else {
                    r.push(c)
                }
            }
        }
        return r.join("")
    }

    function makeUtcWrapper(d) {
        function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
            sourceObj[sourceMethod] = function () {
                return targetObj[targetMethod].apply(targetObj, arguments)
            }
        }

        var utc = {date: d};
        if (d.strftime != undefined) {
            addProxyMethod(utc, "strftime", d, "strftime")
        }
        addProxyMethod(utc, "getTime", d, "getTime");
        addProxyMethod(utc, "setTime", d, "setTime");
        var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];
        for (var p = 0; p < props.length; p++) {
            addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
            addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p])
        }
        return utc
    }

    function dateGenerator(ts, opts) {
        if (opts.timezone == "browser") {
            return new Date(ts)
        } else if (!opts.timezone || opts.timezone == "utc") {
            return makeUtcWrapper(new Date(ts))
        } else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
            var d = new timezoneJS.Date;
            d.setTimezone(opts.timezone);
            d.setTime(ts);
            return d
        } else {
            return makeUtcWrapper(new Date(ts))
        }
    }

    var timeUnitSize = {
        second: 1e3,
        minute: 60 * 1e3,
        hour: 60 * 60 * 1e3,
        day: 24 * 60 * 60 * 1e3,
        month: 30 * 24 * 60 * 60 * 1e3,
        quarter: 3 * 30 * 24 * 60 * 60 * 1e3,
        year: 365.2425 * 24 * 60 * 60 * 1e3
    };
    var baseSpec = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]];
    var specMonths = baseSpec.concat([[3, "month"], [6, "month"], [1, "year"]]);
    var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);

    function init(plot) {
        plot.hooks.processOptions.push(function (plot, options) {
            $.each(plot.getAxes(), function (axisName, axis) {
                var opts = axis.options;
                if (opts.mode == "time") {
                    axis.tickGenerator = function (axis) {
                        var ticks = [];
                        var d = dateGenerator(axis.min, opts);
                        var minSize = 0;
                        var spec = opts.tickSize && opts.tickSize[1] === "quarter" || opts.minTickSize && opts.minTickSize[1] === "quarter" ? specQuarters : specMonths;
                        if (opts.minTickSize != null) {
                            if (typeof opts.tickSize == "number") {
                                minSize = opts.tickSize
                            } else {
                                minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]]
                            }
                        }
                        for (var i = 0; i < spec.length - 1; ++i) {
                            if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]] + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2 && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
                                break
                            }
                        }
                        var size = spec[i][0];
                        var unit = spec[i][1];
                        if (unit == "year") {
                            if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
                                size = Math.floor(opts.minTickSize[0])
                            } else {
                                var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
                                var norm = axis.delta / timeUnitSize.year / magn;
                                if (norm < 1.5) {
                                    size = 1
                                } else if (norm < 3) {
                                    size = 2
                                } else if (norm < 7.5) {
                                    size = 5
                                } else {
                                    size = 10
                                }
                                size *= magn
                            }
                            if (size < 1) {
                                size = 1
                            }
                        }
                        axis.tickSize = opts.tickSize || [size, unit];
                        var tickSize = axis.tickSize[0];
                        unit = axis.tickSize[1];
                        var step = tickSize * timeUnitSize[unit];
                        if (unit == "second") {
                            d.setSeconds(floorInBase(d.getSeconds(), tickSize))
                        } else if (unit == "minute") {
                            d.setMinutes(floorInBase(d.getMinutes(), tickSize))
                        } else if (unit == "hour") {
                            d.setHours(floorInBase(d.getHours(), tickSize))
                        } else if (unit == "month") {
                            d.setMonth(floorInBase(d.getMonth(), tickSize))
                        } else if (unit == "quarter") {
                            d.setMonth(3 * floorInBase(d.getMonth() / 3, tickSize))
                        } else if (unit == "year") {
                            d.setFullYear(floorInBase(d.getFullYear(), tickSize))
                        }
                        d.setMilliseconds(0);
                        if (step >= timeUnitSize.minute) {
                            d.setSeconds(0)
                        }
                        if (step >= timeUnitSize.hour) {
                            d.setMinutes(0)
                        }
                        if (step >= timeUnitSize.day) {
                            d.setHours(0)
                        }
                        if (step >= timeUnitSize.day * 4) {
                            d.setDate(1)
                        }
                        if (step >= timeUnitSize.month * 2) {
                            d.setMonth(floorInBase(d.getMonth(), 3))
                        }
                        if (step >= timeUnitSize.quarter * 2) {
                            d.setMonth(floorInBase(d.getMonth(), 6))
                        }
                        if (step >= timeUnitSize.year) {
                            d.setMonth(0)
                        }
                        var carry = 0;
                        var v = Number.NaN;
                        var prev;
                        do {
                            prev = v;
                            v = d.getTime();
                            ticks.push(v);
                            if (unit == "month" || unit == "quarter") {
                                if (tickSize < 1) {
                                    d.setDate(1);
                                    var start = d.getTime();
                                    d.setMonth(d.getMonth() + (unit == "quarter" ? 3 : 1));
                                    var end = d.getTime();
                                    d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                                    carry = d.getHours();
                                    d.setHours(0)
                                } else {
                                    d.setMonth(d.getMonth() + tickSize * (unit == "quarter" ? 3 : 1))
                                }
                            } else if (unit == "year") {
                                d.setFullYear(d.getFullYear() + tickSize)
                            } else {
                                d.setTime(v + step)
                            }
                        } while (v < axis.max && v != prev);
                        return ticks
                    };
                    axis.tickFormatter = function (v, axis) {
                        var d = dateGenerator(v, axis.options);
                        if (opts.timeformat != null) {
                            return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames)
                        }
                        var useQuarters = axis.options.tickSize && axis.options.tickSize[1] == "quarter" || axis.options.minTickSize && axis.options.minTickSize[1] == "quarter";
                        var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
                        var span = axis.max - axis.min;
                        var suffix = opts.twelveHourClock ? " %p" : "";
                        var hourCode = opts.twelveHourClock ? "%I" : "%H";
                        var fmt;
                        if (t < timeUnitSize.minute) {
                            fmt = hourCode + ":%M:%S" + suffix
                        } else if (t < timeUnitSize.day) {
                            if (span < 2 * timeUnitSize.day) {
                                fmt = hourCode + ":%M" + suffix
                            } else {
                                fmt = "%b %d " + hourCode + ":%M" + suffix
                            }
                        } else if (t < timeUnitSize.month) {
                            fmt = "%b %d"
                        } else if (useQuarters && t < timeUnitSize.quarter || !useQuarters && t < timeUnitSize.year) {
                            if (span < timeUnitSize.year) {
                                fmt = "%b"
                            } else {
                                fmt = "%b %Y"
                            }
                        } else if (useQuarters && t < timeUnitSize.year) {
                            if (span < timeUnitSize.year) {
                                fmt = "Q%q"
                            } else {
                                fmt = "Q%q %Y"
                            }
                        } else {
                            fmt = "%Y"
                        }
                        var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);
                        return rt
                    }
                }
            })
        })
    }

    $.plot.plugins.push({init: init, options: options, name: "time", version: "1.0"});
    $.plot.formatDate = formatDate;
    $.plot.dateGenerator = dateGenerator
})(jQuery);

/*!
 * Datepicker for Bootstrap v1.6.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }

    function f(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    function g(a) {
        return a && !isNaN(a.getTime())
    }

    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }

        var e, f = a(b).data(), g = {}, h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f)c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g
    }

    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0], q[b])) {
            var d = q[b];
            return a.each(p, function (a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }

    var j = function () {
        var b = {
            get: function (a) {
                return this.slice(a)[0]
            }, contains: function (a) {
                for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)if (this[c].valueOf() === b)return c;
                return -1
            }, remove: function (a) {
                this.splice(a, 1)
            }, replace: function (b) {
                b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
            }, clear: function () {
                this.length = 0
            }, copy: function () {
                var a = new j;
                return a.replace(this), a
            }
        };
        return function () {
            var c = [];
            return c.push.apply(c, arguments), a.extend(c, b), c
        }
    }(), k = function (b, c) {
        a(b).data("datepicker", this), this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
            return parseInt(b) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
    k.prototype = {
        constructor: k, _resolveViewName: function (a, c) {
            return 0 === a || "days" === a || "month" === a ? 0 : 1 === a || "months" === a || "year" === a ? 1 : 2 === a || "years" === a || "decade" === a ? 2 : 3 === a || "decades" === a || "century" === a ? 3 : 4 === a || "centuries" === a || "millennium" === a ? 4 : c === b ? !1 : c
        }, _check_template: function (c) {
            try {
                if (c === b || "" === c)return !1;
                if ((c.match(/[<>]/g) || []).length <= 0)return !0;
                var d = a(c);
                return d.length > 0
            } catch (e) {
                return !1
            }
        }, _process_options: function (b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o), f = e.language;
            q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView, 0), e.minViewMode = this._resolveViewName(e.minViewMode, 0), e.maxViewMode = this._resolveViewName(e.maxViewMode, 4), e.startView = Math.min(e.startView, e.maxViewMode), e.startView = Math.max(e.startView, e.minViewMode), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            if (e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], a.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = a.map(e.daysOfWeekDisabled, function (a) {
                    return parseInt(a, 10)
                }), e.daysOfWeekHighlighted = e.daysOfWeekHighlighted || [], a.isArray(e.daysOfWeekHighlighted) || (e.daysOfWeekHighlighted = e.daysOfWeekHighlighted.split(/[,\s]*/)), e.daysOfWeekHighlighted = a.map(e.daysOfWeekHighlighted, function (a) {
                    return parseInt(a, 10)
                }), e.datesDisabled = e.datesDisabled || [], !a.isArray(e.datesDisabled)) {
                var h = [];
                h.push(r.parseDate(e.datesDisabled, g, e.language, e.assumeNearbyYear)), e.datesDisabled = h
            }
            e.datesDisabled = a.map(e.datesDisabled, function (a) {
                return r.parseDate(a, g, e.language, e.assumeNearbyYear)
            });
            var i = String(e.orientation).toLowerCase().split(/\s+/g), j = e.orientation.toLowerCase();
            if (i = a.grep(i, function (a) {
                    return /^auto|left|right|top|bottom$/.test(a)
                }), e.orientation = {x: "auto", y: "auto"}, j && "auto" !== j)if (1 === i.length)switch (i[0]) {
                case"top":
                case"bottom":
                    e.orientation.y = i[0];
                    break;
                case"left":
                case"right":
                    e.orientation.x = i[0]
            } else j = a.grep(i, function (a) {
                return /^left|right$/.test(a)
            }), e.orientation.x = j[0] || "auto", j = a.grep(i, function (a) {
                return /^top|bottom$/.test(a)
            }), e.orientation.y = j[0] || "auto"; else;
            if (e.defaultViewDate) {
                var k = e.defaultViewDate.year || (new Date).getFullYear(), l = e.defaultViewDate.month || 0, m = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(k, l, m)
            } else e.defaultViewDate = d()
        }, _events: [], _secondaryEvents: [], _applyEvents: function (a) {
            for (var c, d, e, f = 0; f < a.length; f++)c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
        }, _unapplyEvents: function (a) {
            for (var c, d, e, f = 0; f < a.length; f++)c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
        }, _buildEvents: function () {
            var b = {
                keyup: a.proxy(function (b) {
                    -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this), keydown: a.proxy(this.keydown, this), paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), b], [this.component, {click: a.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: a.proxy(this.show, this)}]], this._events.push([this.element, "*", {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function (a) {
                    this.update(a.date)
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: a.proxy(this.click, this)}], [a(window), {resize: a.proxy(this.place, this)}], [a(document), {
                mousedown: a.proxy(function (a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (b, c) {
            var d = c || this.dates.get(-1), e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function (a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        }, show: function () {
            var b = this.component ? this.element.find("input") : this.element;
            if (!b.attr("readonly") || this.o.enableOnReadonly !== !1)return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this
        }, hide: function () {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        }, destroy: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        }, paste: function (b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types))c = b.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData)return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c), this.update(), b.preventDefault()
        }, _utc_to_local: function (a) {
            return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
        }, _local_to_utc: function (a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        }, _zero_time: function (a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }, _zero_utc_time: function (a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        }, getDates: function () {
            return a.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return a.map(this.dates, function (a) {
                return new Date(a)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            var a = this.dates.get(-1);
            return "undefined" != typeof a ? new Date(a) : null
        }, clearDates: function () {
            var a;
            this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        }, setDates: function () {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this
        }, setUTCDates: function () {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        }, setDate: f("setDates"), setUTCDate: f("setUTCDates"), remove: f("destroy"), setValue: function () {
            var a = this.getFormattedDate();
            return this.isInput ? this.element.val(a) : this.component && this.element.find("input").val(a), this
        }, getFormattedDate: function (c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function (a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        }, getStartDate: function () {
            return this.o.startDate
        }, setStartDate: function (a) {
            return this._process_options({startDate: a}), this.update(), this.updateNavArrows(), this
        }, getEndDate: function () {
            return this.o.endDate
        }, setEndDate: function (a) {
            return this._process_options({endDate: a}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekDisabled: function (a) {
            return this._process_options({daysOfWeekDisabled: a}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekHighlighted: function (a) {
            return this._process_options({daysOfWeekHighlighted: a}), this.update(), this
        }, setDatesDisabled: function (a) {
            this._process_options({datesDisabled: a}), this.update(), this.updateNavArrows()
        }, place: function () {
            if (this.isInline)return this;
            var b = this.picker.outerWidth(), c = this.picker.outerHeight(), d = 10, e = a(this.o.container), f = e.width(), g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(), h = e.offset(), i = [];
            this.element.parents().each(function () {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== b && i.push(parseInt(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset, k = this.component ? this.component.parent().offset() : this.element.offset(), l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), n = k.left - h.left, o = k.top - h.top;
            "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c, q = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({top: o, right: r, zIndex: j})
            } else this.picker.css({top: o, left: n, zIndex: j});
            return this
        }, _allow_update: !0, update: function () {
            if (!this._allow_update)return this;
            var b = this.dates.copy(), c = [], d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
            }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
                return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), c = a.grep(c, a.proxy(function (a) {
                return !this.dateWithinRange(a) || !a
            }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        }, fillDow: function () {
            var b = this.o.weekStart, c = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (a, b) {
                return parseInt(b) + 1
            }), c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;)c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) > -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
            c += "</tr>", this.picker.find(".datepicker-days thead").append(c)
        }, fillMonths: function () {
            for (var a = this._utc_to_local(this.viewDate), b = "", c = 0; 12 > c;) {
                var d = a && a.getMonth() === c ? " focused" : "";
                b += '<span class="month' + d + '">' + q[this.o.language].monthsShort[c++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(b)
        }, setRange: function (b) {
            b && b.length ? this.range = a.map(b, function (a) {
                return a.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (b) {
            var c = [], d = this.viewDate.getUTCFullYear(), e = this.viewDate.getUTCMonth(), f = new Date;
            return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), (!this.dateWithinRange(b) || this.dateIsDisabled(b)) && c.push("disabled"), -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c
        }, _fill_yearsView: function (c, d, e, f, g, h, i, j) {
            var k, l, m, n, o, p, q, r, s, t, u;
            for (k = "", l = this.picker.find(c), m = parseInt(g / e, 10) * e, o = parseInt(h / f, 10) * f, p = parseInt(i / f, 10) * f, n = a.map(this.dates, function (a) {
                return parseInt(a.getUTCFullYear() / f, 10) * f
            }), l.find(".datepicker-switch").text(m + "-" + (m + 9 * f)), q = m - f, r = -1; 11 > r; r += 1)s = [d], t = null, -1 === r ? s.push("old") : 10 === r && s.push("new"), -1 !== a.inArray(q, n) && s.push("active"), (o > q || q > p) && s.push("disabled"), q === this.viewDate.getFullYear() && s.push("focused"), j !== a.noop && (u = j(new Date(q, 0, 1)), u === b ? u = {} : "boolean" == typeof u ? u = {enabled: u} : "string" == typeof u && (u = {classes: u}), u.enabled === !1 && s.push("disabled"), u.classes && (s = s.concat(u.classes.split(/\s+/))), u.tooltip && (t = u.tooltip)), k += '<span class="' + s.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + q + "</span>", q += f;
            l.find("td").html(k)
        }, fill: function () {
            var d, e, f = new Date(this.viewDate), g = f.getUTCFullYear(), h = f.getUTCMonth(), i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, m = q[this.o.language].today || q.en.today || "", n = q[this.o.language].clear || q.en.clear || "", o = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(g) && !isNaN(h)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var p = c(g, h - 1, 28), s = r.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(s), p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();
                for (var u, v = []; p.valueOf() < t;) {
                    if (p.getUTCDay() === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
                        var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5), x = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5), y = new Date(Number(y = c(x.getUTCFullYear(), 0, 1)) + (11 - y.getUTCDay()) % 7 * 864e5), z = (x - y) / 864e5 / 7 + 1;
                        v.push('<td class="cw">' + z + "</td>")
                    }
                    u = this.getClassNames(p), u.push("day"), this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = {enabled: e} : "string" == typeof e && (e = {classes: e}), e.enabled === !1 && u.push("disabled"), e.classes && (u = u.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip)), u = a.unique(u), v.push('<td class="' + u.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + p.getUTCDate() + "</td>"), d = null, p.getUTCDay() === this.o.weekEnd && v.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
                var A = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months", B = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? A : g).end().find("span").removeClass("active");
                if (a.each(this.dates, function (a, b) {
                        b.getUTCFullYear() === g && B.eq(b.getUTCMonth()).addClass("active")
                    }), (i > g || g > k) && B.addClass("disabled"), g === i && B.slice(0, j).addClass("disabled"), g === k && B.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
                    var C = this;
                    a.each(B, function (c, d) {
                        var e = new Date(g, c, 1), f = C.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = {enabled: f} : "string" == typeof f && (f = {classes: f}), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, g, i, k, this.o.beforeShowCentury)
            }
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var a = new Date(this.viewDate), b = a.getUTCFullYear(), c = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (b) {
            b.preventDefault(), b.stopPropagation();
            var e, f, g, h, i, j, k;
            e = a(b.target), e.hasClass("datepicker-switch") && this.showMode(1);
            var l = e.closest(".prev, .next");
            l.length > 0 && (f = r.modes[this.viewMode].navStep * (l.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, f), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, f), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), e.hasClass("today") && (this.showMode(-2), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("day") && (g = parseInt(e.text(), 10) || 1, h = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), e.hasClass("old") && (0 === i ? (i = 11, h -= 1, j = !0, k = !0) : (i -= 1, j = !0)), e.hasClass("new") && (11 === i ? (i = 0, h += 1, j = !0, k = !0) : (i += 1, j = !0)), this._setDate(c(h, i, g)), k && this._trigger("changeYear", this.viewDate), j && this._trigger("changeMonth", this.viewDate)), e.hasClass("month") && (this.viewDate.setUTCDate(1), g = 1, i = e.parent().find("span").index(e), h = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(c(h, i, g)), this.showMode()) : this.showMode(-1), this.fill()), (e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), g = 1, i = 0, h = parseInt(e.text(), 10) || 0, this.viewDate.setUTCFullYear(h), e.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(c(h, i, g))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
        }, _toggle_multidate: function (a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), -1 !== b ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate)for (; this.dates.length > this.o.multidate;)this.dates.remove(0)
        }, _setDate: function (a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate");
            var c;
            this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" !== b || this.hide()
        }, moveDay: function (a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b), c
        }, moveWeek: function (a, b) {
            return this.moveDay(a, 7 * b)
        }, moveMonth: function (a, b) {
            if (!g(a))return this.o.defaultViewDate;
            if (!b)return a;
            var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), h = e.getUTCMonth(), i = Math.abs(b);
            if (b = b > 0 ? 1 : -1, 1 === i)d = -1 === b ? function () {
                return e.getUTCMonth() === h
            } : function () {
                return e.getUTCMonth() !== c
            }, c = h + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12); else {
                for (var j = 0; i > j; j++)e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function () {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d();)e.setUTCDate(--f), e.setUTCMonth(c);
            return e
        }, moveYear: function (a, b) {
            return this.moveMonth(a, 12 * b)
        }, moveAvailableDate: function (a, b, c) {
            do {
                if (a = this[c](a, b), !this.dateWithinRange(a))return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        }, weekOfDateIsDisabled: function (b) {
            return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)
        }, dateIsDisabled: function (b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
                    return e(b, a)
                }).length > 0
        }, dateWithinRange: function (a) {
            return a >= this.o.startDate && a <= this.o.endDate
        }, keydown: function (a) {
            if (!this.picker.is(":visible"))return void((40 === a.keyCode || 27 === a.keyCode) && (this.show(), a.stopPropagation()));
            var b, c, d = !1, e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length)break;
                    b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse)break;
                    e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (d) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var f;
                this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change()
            }
        }, showMode: function (a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a))), this.picker.children("div").hide().filter(".datepicker-" + r.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var l = function (b, c) {
        a(b).data("datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function () {
            this.dates = a.map(this.pickers, function (a) {
                return a.getUTCDate()
            }), this.updateRanges()
        }, updateRanges: function () {
            var b = a.map(this.dates, function (a) {
                return a.valueOf()
            });
            a.each(this.pickers, function (a, c) {
                c.setRange(b)
            })
        }, dateUpdated: function (b) {
            if (!this.updating) {
                this.updating = !0;
                var c = a(b.target).data("datepicker");
                if ("undefined" != typeof c) {
                    var d = c.getUTCDate(), e = a.inArray(b.target, this.inputs), f = e - 1, g = e + 1, h = this.inputs.length;
                    if (-1 !== e) {
                        if (a.each(this.pickers, function (a, b) {
                                b.getUTCDate() || b.setUTCDate(d)
                            }), d < this.dates[f])for (; f >= 0 && d < this.dates[f];)this.pickers[f--].setUTCDate(d); else if (d > this.dates[g])for (; h > g && d > this.dates[g];)this.pickers[g++].setUTCDate(d);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        }, remove: function () {
            a.map(this.pickers, function (a) {
                a.remove()
            }), delete this.element.data().datepicker
        }
    };
    var m = a.fn.datepicker, n = function (c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (this.each(function () {
                var b = a(this), f = b.data("datepicker"), g = "object" == typeof c && c;
                if (!f) {
                    var j = h(this, "date"), m = a.extend({}, o, j, g), n = i(m.language), p = a.extend({}, o, n, j, g);
                    b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {inputs: p.inputs || b.find("input").toArray()}), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f)
                }
                "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
            }), e === b || e instanceof k || e instanceof l)return this;
        if (this.length > 1)throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
        return e
    };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !0,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "pt-BR",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "bottom left",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {leftArrow: "&laquo;", rightArrow: "&raquo;"}
    }, p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, r = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}, {
            clsName: "decades",
            navFnc: "FullDecade",
            navStep: 100
        }, {clsName: "centuries", navFnc: "FullCentury", navStep: 1e3}],
        isLeapYear: function (a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        getDaysInMonth: function (a, b) {
            return [31, r.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (a) {
            if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)return a;
            var b = a.replace(this.validParts, "\x00").split("\x00"), c = a.match(this.validParts);
            if (!b || !b.length || !c || 0 === c.length)throw new Error("Invalid date format.");
            return {separators: b, parts: c}
        },
        parseDate: function (e, f, g, h) {
            function i(a, b) {
                return b === !0 && (b = 10), 100 > a && (a += 2e3, a > (new Date).getFullYear() + b && (a -= 100)), a
            }

            function j() {
                var a = this.slice(0, s[n].length), b = s[n].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase()
            }

            if (!e)return b;
            if (e instanceof Date)return e;
            if ("string" == typeof f && (f = r.parseFormat(f)), f.toValue)return f.toValue(e, f, g);
            var l, m, n, o, p = /([\-+]\d+)([dmwy])/, s = e.match(/([\-+]\d+)([dmwy])/g), t = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            }, u = {yesterday: "-1d", today: "+0d", tomorrow: "+1d"};
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                for (e = new Date, n = 0; n < s.length; n++)l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m);
                return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
            }
            if ("undefined" != typeof u[e] && (e = u[e], s = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))) {
                for (e = new Date, n = 0; n < s.length; n++)l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m);
                return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
            }
            s = e && e.match(this.nonpunctuation) || [], e = new Date;
            var v, w, x = {}, y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], z = {
                yyyy: function (a, b) {
                    return a.setUTCFullYear(h ? i(b, h) : b)
                }, yy: function (a, b) {
                    return a.setUTCFullYear(h ? i(b, h) : b)
                }, m: function (a, b) {
                    if (isNaN(a))return a;
                    for (b -= 1; 0 > b;)b += 12;
                    for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;)a.setUTCDate(a.getUTCDate() - 1);
                    return a
                }, d: function (a, b) {
                    return a.setUTCDate(b)
                }
            };
            z.M = z.MM = z.mm = z.m, z.dd = z.d, e = d();
            var A = f.parts.slice();
            if (s.length !== A.length && (A = a(A).filter(function (b, c) {
                    return -1 !== a.inArray(c, y)
                }).toArray()), s.length === A.length) {
                var B;
                for (n = 0, B = A.length; B > n; n++) {
                    if (v = parseInt(s[n], 10), l = A[n], isNaN(v))switch (l) {
                        case"MM":
                            w = a(q[g].months).filter(j), v = a.inArray(w[0], q[g].months) + 1;
                            break;
                        case"M":
                            w = a(q[g].monthsShort).filter(j), v = a.inArray(w[0], q[g].monthsShort) + 1;
                    }
                    x[l] = v
                }
                var C, D;
                for (n = 0; n < y.length; n++)D = y[n], D in x && !isNaN(x[D]) && (C = new Date(e), z[D](C, x[D]), isNaN(C) || (e = C))
            }
            return e
        },
        formatDate: function (b, c, d) {
            if (!b)return "";
            if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay)return c.toDisplay(b, c, d);
            var e = {
                d: b.getUTCDate(),
                D: q[d].daysShort[b.getUTCDay()],
                DD: q[d].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: q[d].monthsShort[b.getUTCMonth()],
                MM: q[d].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++)f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
            return b.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
        return a.fn.datepicker = m, this
    }, a.fn.datepicker.version = "1.6.0", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"))
    }), a(function () {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
});

!function (a) {
    a.fn.datepicker.dates["pt-BR"] = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        monthsTitle: "Meses",
        clear: "Limpar",
        format: "dd/mm/yyyy"
    }
}(jQuery);

/*! bootstrap-timepicker v0.2.5
 * http://jdewit.github.com/bootstrap-timepicker
 * Copyright (c) 2013 Joris de Wit
 * MIT License
 */
!function (a, b, c) {
    "use strict";
    var d = function (b, c) {
        this.widget = "", this.$element = a(b), this.defaultTime = c.defaultTime, this.disableFocus = c.disableFocus, this.disableMousewheel = c.disableMousewheel, this.isOpen = c.isOpen, this.minuteStep = c.minuteStep, this.modalBackdrop = c.modalBackdrop, this.secondStep = c.secondStep, this.showInputs = c.showInputs, this.showMeridian = c.showMeridian, this.showSeconds = c.showSeconds, this.template = c.template, this.appendWidgetTo = c.appendWidgetTo, this.showWidgetOnAddonClick = c.showWidgetOnAddonClick, this._init()
    };
    d.prototype = {
        constructor: d, _init: function () {
            var b = this;
            this.showWidgetOnAddonClick && (this.$element.parent().hasClass("input-group") || this.$element.parent().hasClass("input-group")) ? (this.$element.parent(".input-group").find(".input-group-addon, .input-group-btn").on({"click.timepicker": a.proxy(this.showWidget, this)}), this.$element.on({
                "focus.timepicker": a.proxy(this.highlightUnit, this),
                "click.timepicker": a.proxy(this.highlightUnit, this),
                "keydown.timepicker": a.proxy(this.elementKeydown, this),
                "blur.timepicker": a.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
            })) : this.template ? this.$element.on({
                "focus.timepicker": a.proxy(this.showWidget, this),
                "click.timepicker": a.proxy(this.showWidget, this),
                "blur.timepicker": a.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
            }) : this.$element.on({
                "focus.timepicker": a.proxy(this.highlightUnit, this),
                "click.timepicker": a.proxy(this.highlightUnit, this),
                "keydown.timepicker": a.proxy(this.elementKeydown, this),
                "blur.timepicker": a.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
            }), this.$widget = this.template !== !1 ? a(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click", a.proxy(this.widgetClick, this)) : !1, this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function () {
                a(this).on({
                    "click.timepicker": function () {
                        a(this).select()
                    }, "keydown.timepicker": a.proxy(b.widgetKeydown, b), "keyup.timepicker": a.proxy(b.widgetKeyup, b)
                })
            }), this.setDefaultTime(this.defaultTime)
        }, blurElement: function () {
            this.highlightedUnit = null, this.updateFromElementVal()
        }, clear: function () {
            this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
        }, decrementHour: function () {
            if (this.showMeridian)if (1 === this.hour)this.hour = 12; else {
                if (12 === this.hour)return this.hour--, this.toggleMeridian();
                if (0 === this.hour)return this.hour = 11, this.toggleMeridian();
                this.hour--
            } else this.hour <= 0 ? this.hour = 23 : this.hour--
        }, decrementMinute: function (a) {
            var b;
            b = a ? this.minute - a : this.minute - this.minuteStep, 0 > b ? (this.decrementHour(), this.minute = b + 60) : this.minute = b
        }, decrementSecond: function () {
            var a = this.second - this.secondStep;
            0 > a ? (this.decrementMinute(!0), this.second = a + 60) : this.second = a
        }, elementKeydown: function (a) {
            switch (a.keyCode) {
                case 9:
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    a.preventDefault(), this.highlightPrevUnit();
                    break;
                case 38:
                    switch (a.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.incrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.incrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.incrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update();
                    break;
                case 39:
                    a.preventDefault(), this.highlightNextUnit();
                    break;
                case 40:
                    switch (a.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.decrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.decrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.decrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update()
            }
        }, getCursorPosition: function () {
            var a = this.$element.get(0);
            if ("selectionStart" in a)return a.selectionStart;
            if (c.selection) {
                a.focus();
                var b = c.selection.createRange(), d = c.selection.createRange().text.length;
                return b.moveStart("character", -a.value.length), b.text.length - d
            }
        }, getTemplate: function () {
            var a, b, c, d, e, f;
            switch (this.showInputs ? (b = '<input type="text" class="form-control bootstrap-timepicker-hour" maxlength="2"/>', c = '<input type="text" class="form-control bootstrap-timepicker-minute" maxlength="2"/>', d = '<input type="text" class="form-control bootstrap-timepicker-second" maxlength="2"/>', e = '<input type="text" class="form-control bootstrap-timepicker-meridian" maxlength="2"/>') : (b = '<span class="bootstrap-timepicker-hour"></span>', c = '<span class="bootstrap-timepicker-minute"></span>', d = '<span class="bootstrap-timepicker-second"></span>', e = '<span class="bootstrap-timepicker-meridian"></span>'), f = '<table><tr><td><a href="#" data-action="incrementHour"><i class="fa fa-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="fa fa-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="fa fa-chevron-up"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-up"></i></a></td>' : "") + "</tr>" + "<tr>" + "<td>" + b + "</td> " + '<td class="separator">:</td>' + "<td>" + c + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + d + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + e + "</td>" : "") + "</tr>" + "<tr>" + '<td><a href="#" data-action="decrementHour"><i class="fa fa-chevron-down"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" data-action="decrementMinute"><i class="fa fa-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="fa fa-chevron-down"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-down"></i></a></td>' : "") + "</tr>" + "</table>", this.template) {
                case"modal":
                    a = '<div class="modal fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '">' + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + '<a href="#" class="close" data-dismiss="modal">×</a>' + "<h3>Pick Time</h3>" + "</div>" + '<div class="modal-content"><div class="bootstrap-timepicker-widget">' + f + "</div></div>" + '<div class="modal-footer">' + '<a href="#" class="btn btn-sm btn-primary" data-dismiss="modal">OK</a>' + "</div>" + "</div>" + "</div>" + "</div>";
                    break;
                case"dropdown":
                    a = '<div class="bootstrap-timepicker-widget dropdown-menu">' + f + "</div>"
            }
            return a
        }, getTime: function () {
            return this.hour || this.minute || this.second ? this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "") : ""
        }, hideWidget: function () {
            this.isOpen !== !1 && (this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), a(c).off("mousedown.timepicker, touchend.timepicker"), this.isOpen = !1)
        }, highlightUnit: function () {
            this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
        }, highlightNextUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.highlightMinute();
                    break;
                case"minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"meridian":
                    this.highlightHour()
            }
        }, highlightPrevUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                    break;
                case"minute":
                    this.highlightHour();
                    break;
                case"second":
                    this.highlightMinute();
                    break;
                case"meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
            }
        }, highlightHour: function () {
            var a = this.$element.get(0), b = this;
            this.highlightedUnit = "hour", a.setSelectionRange && setTimeout(function () {
                b.hour < 10 ? a.setSelectionRange(0, 1) : a.setSelectionRange(0, 2)
            }, 0)
        }, highlightMinute: function () {
            var a = this.$element.get(0), b = this;
            this.highlightedUnit = "minute", a.setSelectionRange && setTimeout(function () {
                b.hour < 10 ? a.setSelectionRange(2, 4) : a.setSelectionRange(3, 5)
            }, 0)
        }, highlightSecond: function () {
            var a = this.$element.get(0), b = this;
            this.highlightedUnit = "second", a.setSelectionRange && setTimeout(function () {
                b.hour < 10 ? a.setSelectionRange(5, 7) : a.setSelectionRange(6, 8)
            }, 0)
        }, highlightMeridian: function () {
            var a = this.$element.get(0), b = this;
            this.highlightedUnit = "meridian", a.setSelectionRange && (this.showSeconds ? setTimeout(function () {
                b.hour < 10 ? a.setSelectionRange(8, 10) : a.setSelectionRange(9, 11)
            }, 0) : setTimeout(function () {
                b.hour < 10 ? a.setSelectionRange(5, 7) : a.setSelectionRange(6, 8)
            }, 0))
        }, incrementHour: function () {
            if (this.showMeridian) {
                if (11 === this.hour)return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            return 23 === this.hour ? (this.hour = 0, void 0) : (this.hour++, void 0)
        }, incrementMinute: function (a) {
            var b;
            b = a ? this.minute + a : this.minute + this.minuteStep - this.minute % this.minuteStep, b > 59 ? (this.incrementHour(), this.minute = b - 60) : this.minute = b
        }, incrementSecond: function () {
            var a = this.second + this.secondStep - this.second % this.secondStep;
            a > 59 ? (this.incrementMinute(!0), this.second = a - 60) : this.second = a
        }, mousewheel: function (b) {
            if (!this.disableMousewheel) {
                b.preventDefault(), b.stopPropagation();
                var c = b.originalEvent.wheelDelta || -b.originalEvent.detail, d = null;
                switch ("mousewheel" === b.type ? d = -1 * b.originalEvent.wheelDelta : "DOMMouseScroll" === b.type && (d = 40 * b.originalEvent.detail), d && (b.preventDefault(), a(this).scrollTop(d + a(this).scrollTop())), this.highlightedUnit) {
                    case"minute":
                        c > 0 ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                        break;
                    case"second":
                        c > 0 ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                        break;
                    case"meridian":
                        this.toggleMeridian(), this.highlightMeridian();
                        break;
                    default:
                        c > 0 ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                }
                return !1
            }
        }, remove: function () {
            a("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
        }, setDefaultTime: function (a) {
            if (this.$element.val())this.updateFromElementVal(); else if ("current" === a) {
                var b = new Date, c = b.getHours(), d = b.getMinutes(), e = b.getSeconds(), f = "AM";
                0 !== e && (e = Math.ceil(b.getSeconds() / this.secondStep) * this.secondStep, 60 === e && (d += 1, e = 0)), 0 !== d && (d = Math.ceil(b.getMinutes() / this.minuteStep) * this.minuteStep, 60 === d && (c += 1, d = 0)), this.showMeridian && (0 === c ? c = 12 : c >= 12 ? (c > 12 && (c -= 12), f = "PM") : f = "AM"), this.hour = c, this.minute = d, this.second = e, this.meridian = f, this.update()
            } else a === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(a)
        }, setTime: function (a, b) {
            if (!a)return this.clear(), void 0;
            var c, d, e, f, g;
            "object" == typeof a && a.getMonth ? (d = a.getHours(), e = a.getMinutes(), f = a.getSeconds(), this.showMeridian && (g = "AM", d > 12 && (g = "PM", d %= 12), 12 === d && (g = "PM"))) : (g = null !== a.match(/p/i) ? "PM" : "AM", a = a.replace(/[^0-9\:]/g, ""), c = a.split(":"), d = c[0] ? c[0].toString() : c.toString(), e = c[1] ? c[1].toString() : "", f = c[2] ? c[2].toString() : "", d.length > 4 && (f = d.substr(4, 2)), d.length > 2 && (e = d.substr(2, 2), d = d.substr(0, 2)), e.length > 2 && (f = e.substr(2, 2), e = e.substr(0, 2)), f.length > 2 && (f = f.substr(2, 2)), d = parseInt(d, 10), e = parseInt(e, 10), f = parseInt(f, 10), isNaN(d) && (d = 0), isNaN(e) && (e = 0), isNaN(f) && (f = 0), this.showMeridian ? 1 > d ? d = 1 : d > 12 && (d = 12) : (d >= 24 ? d = 23 : 0 > d && (d = 0), 13 > d && "PM" === g && (d += 12)), 0 > e ? e = 0 : e >= 60 && (e = 59), this.showSeconds && (isNaN(f) ? f = 0 : 0 > f ? f = 0 : f >= 60 && (f = 59))), this.hour = d, this.minute = e, this.second = f, this.meridian = g, this.update(b)
        }, showWidget: function () {
            if (!this.isOpen && !this.$element.is(":disabled")) {
                var b = this;
                a(c).on("mousedown.timepicker, touchend.timepicker", function (c) {
                    0 === a(c.target).closest(".bootstrap-timepicker-widget").length && b.hideWidget()
                }), this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), this.disableFocus && this.$element.blur(), this.hour || (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", a.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"), this.isOpen = !0
            }
        }, toggleMeridian: function () {
            this.meridian = "AM" === this.meridian ? "PM" : "AM"
        }, update: function (a) {
            this.updateElement(), a || this.updateWidget(), this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        }, updateElement: function () {
            this.$element.val(this.getTime()).change()
        }, updateFromElementVal: function () {
            this.setTime(this.$element.val())
        }, updateWidget: function () {
            if (this.$widget !== !1) {
                var a = this.hour, b = 1 === this.minute.toString().length ? "0" + this.minute : this.minute, c = 1 === this.second.toString().length ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(a), this.$widget.find("input.bootstrap-timepicker-minute").val(b), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(c), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(a), this.$widget.find("span.bootstrap-timepicker-minute").text(b), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(c), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
            }
        }, updateFromWidgetInputs: function () {
            if (this.$widget !== !1) {
                var a = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                this.setTime(a, !0)
            }
        }, widgetClick: function (b) {
            b.stopPropagation(), b.preventDefault();
            var c = a(b.target), d = c.closest("a").data("action");
            d && this[d](), this.update(), c.is("input") && c.get(0).setSelectionRange(0, 2)
        }, widgetKeydown: function (b) {
            var c = a(b.target), d = c.attr("class").replace("bootstrap-timepicker-", "");
            switch (b.keyCode) {
                case 9:
                    if (this.showMeridian && "meridian" === d || this.showSeconds && "second" === d || !this.showMeridian && !this.showSeconds && "minute" === d)return this.hideWidget();
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (b.preventDefault(), d) {
                        case"hour":
                            this.incrementHour();
                            break;
                        case"minute":
                            this.incrementMinute();
                            break;
                        case"second":
                            this.incrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), c.get(0).setSelectionRange(0, 2);
                    break;
                case 40:
                    switch (b.preventDefault(), d) {
                        case"hour":
                            this.decrementHour();
                            break;
                        case"minute":
                            this.decrementMinute();
                            break;
                        case"second":
                            this.decrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), c.get(0).setSelectionRange(0, 2)
            }
        }, widgetKeyup: function (a) {
            (65 === a.keyCode || 77 === a.keyCode || 80 === a.keyCode || 46 === a.keyCode || 8 === a.keyCode || a.keyCode >= 46 && a.keyCode <= 57) && this.updateFromWidgetInputs()
        }
    }, a.fn.timepicker = function (b) {
        var c = Array.apply(null, arguments);
        return c.shift(), this.each(function () {
            var e = a(this), f = e.data("timepicker"), g = "object" == typeof b && b;
            f || e.data("timepicker", f = new d(this, a.extend({}, a.fn.timepicker.defaults, g, a(this).data()))), "string" == typeof b && f[b].apply(f, c)
        })
    }, a.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: ".bootstrap-timepicker",
        showWidgetOnAddonClick: !0
    }, a.fn.timepicker.Constructor = d
}(jQuery, window, document);

/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function () {
    var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty, d = function (a, b) {
        function d() {
            this.constructor = a
        }

        for (var e in b)c.call(b, e) && (a[e] = b[e]);
        return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
    };
    SelectParser = function () {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }

        return SelectParser.prototype.add_node = function (a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function (a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                title: a.title ? a.title : void 0,
                children: 0,
                disabled: a.disabled,
                classes: a.className
            }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function (a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function (a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function (a) {
        var b, c, d, e, f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++)b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function () {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }

        return AbstractChosen.prototype.set_default_values = function () {
            var a = this;
            return this.click_test_action = function (b) {
                return a.test_active_click(b)
            }, this.activate_action = function (b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, AbstractChosen.prototype.set_default_text = function () {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.choice_label = function (a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
        }, AbstractChosen.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function () {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field)return setTimeout(function () {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field)return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function () {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function (a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
            return b
        }, AbstractChosen.prototype.result_add_option = function (a) {
            var b, c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.result_add_group = function (a) {
            var b, c;
            return a.search_match || a.group_match ? a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.results_update_field = function () {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.reset_single_select_options = function () {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
            return e
        }, AbstractChosen.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function () {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++)b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.get_search_regex = function (a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, AbstractChosen.prototype.search_string_match = function (a, b) {
            var c, d, e, f;
            if (b.test(a))return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))for (e = 0, f = d.length; f > e; e++)if (c = d[e], b.test(c))return !0
        }, AbstractChosen.prototype.choices_count = function () {
            var a, b, c, d;
            if (null != this.selected_option_count)return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function (a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)return this.keydown_backstroke();
                    if (!this.pending_backstroke)return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing)return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function () {
            var a = this;
            return setTimeout(function () {
                return a.results_search()
            }, 50)
        }, AbstractChosen.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function (a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.prototype.search_results_touchstart = function (a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, AbstractChosen.prototype.search_results_touchmove = function (a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, AbstractChosen.prototype.search_results_touchend = function (a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, AbstractChosen.prototype.outerHTML = function (a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, AbstractChosen.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Selecione algumas opções", AbstractChosen.default_single_text = "Selecione uma opção", AbstractChosen.default_no_result_text = "Nenhum resultado", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function (b) {
            return AbstractChosen.browser_is_supported() ? this.each(function () {
                var c, d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function (c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }

        return d(Chosen, c), Chosen.prototype.setup = function () {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function () {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, Chosen.prototype.on_ready = function () {
            return this.form_field_jq.trigger("chosen:ready", {chosen: this})
        }, Chosen.prototype.register_observers = function () {
            var a = this;
            return this.container.bind("touchstart.chosen", function (b) {
                return a.container_mousedown(b), b.preventDefault()
            }), this.container.bind("touchend.chosen", function (b) {
                return a.container_mouseup(b), b.preventDefault()
            }), this.container.bind("mousedown.chosen", function (b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function (b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function (b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function (b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function (b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function (b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function (b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function (b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function (b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function (b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function (b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function (b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function (b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function (a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function () {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function (b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function (a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function (a) {
            var b;
            return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function () {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function () {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function (b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function () {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function (a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e)return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c)return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function () {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
        }, Chosen.prototype.update_results_content = function (a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function () {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function () {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function () {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function (b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function (b) {
            var c, d, e = this;
            return c = a("<li />", {"class": "search-choice"}).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function (a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function (b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function (a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function () {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function () {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function (a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[c.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function (a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, Chosen.prototype.result_deselect = function (a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[b.options_index].value}), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function () {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function () {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function () {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function (b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
        }, Chosen.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function () {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function () {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function () {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function () {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {style: f}), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({width: h + "px"})
            }
        }, Chosen
    }(AbstractChosen)
}).call(this);


/**
 * jQuery validate plugin :
 * version : 1.15.0
 */
$.extend($.fn, {

    // http://jqueryvalidation.org/validate/
    validate: function (options) {

        // If nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
            if (options && options.debug && window.console) {
                console.warn("Nothing selected, can't validate, returning nothing.");
            }
            return;
        }

        // Check if a validator for this form was already created
        var validator = $.data(this[0], "validator");
        if (validator) {
            return validator;
        }

        // Add novalidate tag if HTML5.
        this.attr("novalidate", "novalidate");

        validator = new $.validator(options, this[0]);
        $.data(this[0], "validator", validator);

        if (validator.settings.onsubmit) {

            this.on("click.validate", ":submit", function (event) {
                if (validator.settings.submitHandler) {
                    validator.submitButton = event.target;
                }

                // Allow suppressing validation by adding a cancel class to the submit button
                if ($(this).hasClass("cancel")) {
                    validator.cancelSubmit = true;
                }

                // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                if ($(this).attr("formnovalidate") !== undefined) {
                    validator.cancelSubmit = true;
                }
            });

            // Validate the form on submit
            this.on("submit.validate", function (event) {
                if (validator.settings.debug) {

                    // Prevent form submit to be able to see console output
                    event.preventDefault();
                }
                function handle() {
                    var hidden, result;
                    if (validator.settings.submitHandler) {
                        if (validator.submitButton) {

                            // Insert a hidden input as a replacement for the missing submit button
                            hidden = $("<input type='hidden'/>")
                                .attr("name", validator.submitButton.name)
                                .val($(validator.submitButton).val())
                                .appendTo(validator.currentForm);
                        }
                        result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                        if (validator.submitButton) {

                            // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        if (result !== undefined) {
                            return result;
                        }
                        return false;
                    }
                    return true;
                }

                // Prevent submit for invalid forms or custom submit handlers
                if (validator.cancelSubmit) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if (validator.form()) {
                    if (validator.pendingRequest) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }

        return validator;
    },

    // http://jqueryvalidation.org/valid/
    valid: function () {
        var valid, validator, errorList;

        if ($(this[0]).is("form")) {
            valid = this.validate().form();
        } else {
            errorList = [];
            valid = true;
            validator = $(this[0].form).validate();
            this.each(function () {
                valid = validator.element(this) && valid;
                if (!valid) {
                    errorList = errorList.concat(validator.errorList);
                }
            });
            validator.errorList = errorList;
        }
        return valid;
    },

    // http://jqueryvalidation.org/rules/
    rules: function (command, argument) {
        var element = this[0],
            settings, staticRules, existingRules, data, param, filtered;

        // If nothing is selected, return empty object; can't chain anyway
        if (element == null || element.form == null) {
            return;
        }

        if (command) {
            settings = $.data(element.form, "validator").settings;
            staticRules = settings.rules;
            existingRules = $.validator.staticRules(element);
            switch (command) {
                case "add":
                    $.extend(existingRules, $.validator.normalizeRule(argument));

                    // Remove messages from rules, but allow them to be set separately
                    delete existingRules.messages;
                    staticRules[element.name] = existingRules;
                    if (argument.messages) {
                        settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                    }
                    break;
                case "remove":
                    if (!argument) {
                        delete staticRules[element.name];
                        return existingRules;
                    }
                    filtered = {};
                    $.each(argument.split(/\s/), function (index, method) {
                        filtered[method] = existingRules[method];
                        delete existingRules[method];
                        if (method === "required") {
                            $(element).removeAttr("aria-required");
                        }
                    });
                    return filtered;
            }
        }

        data = $.validator.normalizeRules(
            $.extend(
                {},
                $.validator.classRules(element),
                $.validator.attributeRules(element),
                $.validator.dataRules(element),
                $.validator.staticRules(element)
            ), element);

        // Make sure required is at front
        if (data.required) {
            param = data.required;
            delete data.required;
            data = $.extend({required: param}, data);
            $(element).attr("aria-required", "true");
        }

        // Make sure remote is at back
        if (data.remote) {
            param = data.remote;
            delete data.remote;
            data = $.extend(data, {remote: param});
        }

        return data;
    }
});

// Custom selectors
$.extend($.expr.pseudos || $.expr[":"], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

    // http://jqueryvalidation.org/blank-selector/
    blank: function (a) {
        return !$.trim("" + $(a).val());
    },

    // http://jqueryvalidation.org/filled-selector/
    filled: function (a) {
        var val = $(a).val();
        return val !== null && !!$.trim("" + val);
    },

    // http://jqueryvalidation.org/unchecked-selector/
    unchecked: function (a) {
        return !$(a).prop("checked");
    }
});

// Constructor for validator
$.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function (source, params) {
    if (arguments.length === 1) {
        return function () {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.validator.format.apply(this, args);
        };
    }
    if (params === undefined) {
        return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
        params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
        params = [params];
    }
    $.each(params, function (i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
            return n;
        });
    });
    return source;
};

$.extend($.validator, {

    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: false,
        focusInvalid: true,
        errorContainer: $([]),
        errorLabelContainer: $([]),
        onsubmit: true,
        ignore: ":hidden",
        ignoreTitle: false,
        onfocusin: function (element) {
            this.lastActive = element;

            // Hide error label and remove error class on focus if enabled
            if (this.settings.focusCleanup) {
                if (this.settings.unhighlight) {
                    this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                }
                this.hideThese(this.errorsFor(element));
            }
        },
        onfocusout: function (element) {
            if (!this.checkable(element) && ( element.name in this.submitted || !this.optional(element) )) {
                this.element(element);
            }
        },
        onkeyup: function (element, event) {

            // Avoid revalidate the field when pressing one of the following keys
            // Shift       => 16
            // Ctrl        => 17
            // Alt         => 18
            // Caps lock   => 20
            // End         => 35
            // Home        => 36
            // Left arrow  => 37
            // Up arrow    => 38
            // Right arrow => 39
            // Down arrow  => 40
            // Insert      => 45
            // Num lock    => 144
            // AltGr key   => 225
            var excludedKeys = [
                16, 17, 18, 20, 35, 36, 37,
                38, 39, 40, 45, 144, 225
            ];

            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else if (element.name in this.submitted || element.name in this.invalid) {
                this.element(element);
            }
        },
        onclick: function (element) {

            // Click on selects, radiobuttons and checkboxes
            if (element.name in this.submitted) {
                this.element(element);

                // Or option elements, check parent select in that case
            } else if (element.parentNode.name in this.submitted) {
                this.element(element.parentNode);
            }
        },
        highlight: function (element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }
    },

    // http://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function (settings) {
        $.extend($.validator.defaults, settings);
    },

    messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}."),
        step: $.validator.format("Please enter a multiple of {0}.")
    },

    autoCreateRanges: false,

    prototype: {

        init: function () {
            this.labelContainer = $(this.settings.errorLabelContainer);
            this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
            this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();

            var groups = ( this.groups = {} ),
                rules;
            $.each(this.settings.groups, function (key, value) {
                if (typeof value === "string") {
                    value = value.split(/\s/);
                }
                $.each(value, function (index, name) {
                    groups[name] = key;
                });
            });
            rules = this.settings.rules;
            $.each(rules, function (key, value) {
                rules[key] = $.validator.normalizeRule(value);
            });

            function delegate(event) {

                // Set form expando on contenteditable
                if (!this.form && this.hasAttribute("contenteditable")) {
                    this.form = $(this).closest("form")[0];
                }

                var validator = $.data(this.form, "validator"),
                    eventType = "on" + event.type.replace(/^validate/, ""),
                    settings = validator.settings;
                if (settings[eventType] && !$(this).is(settings.ignore)) {
                    settings[eventType].call(validator, this, event);
                }
            }

            $(this.currentForm)
                .on("focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                    "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                    "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                    "[type='radio'], [type='checkbox'], [contenteditable]", delegate)

                // Support: Chrome, oldIE
                // "select" is provided as event.target when clicking a option
                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

            if (this.settings.invalidHandler) {
                $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
            }

            // Add aria-required to any Static/Data/Class required fields before first validation
            // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
            $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
        },

        // http://jqueryvalidation.org/Validator.form/
        form: function () {
            this.checkForm();
            $.extend(this.submitted, this.errorMap);
            this.invalid = $.extend({}, this.errorMap);
            if (!this.valid()) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
            }
            this.showErrors();
            return this.valid();
        },

        checkForm: function () {
            this.prepareForm();
            for (var i = 0, elements = ( this.currentElements = this.elements() ); elements[i]; i++) {
                this.check(elements[i]);
            }
            return this.valid();
        },

        // http://jqueryvalidation.org/Validator.element/
        element: function (element) {
            var cleanElement = this.clean(element),
                checkElement = this.validationTargetFor(cleanElement),
                v = this,
                result = true,
                rs, group;

            if (checkElement === undefined) {
                delete this.invalid[cleanElement.name];
            } else {
                this.prepareElement(checkElement);
                this.currentElements = $(checkElement);

                // If this element is grouped, then validate all group elements already
                // containing a value
                group = this.groups[checkElement.name];
                if (group) {
                    $.each(this.groups, function (name, testgroup) {
                        if (testgroup === group && name !== checkElement.name) {
                            cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                            if (cleanElement && cleanElement.name in v.invalid) {
                                v.currentElements.push(cleanElement);
                                result = v.check(cleanElement) && result;
                            }
                        }
                    });
                }

                rs = this.check(checkElement) !== false;
                result = result && rs;
                if (rs) {
                    this.invalid[checkElement.name] = false;
                } else {
                    this.invalid[checkElement.name] = true;
                }

                if (!this.numberOfInvalids()) {

                    // Hide error containers on last error
                    this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();

                // Add aria-invalid status for screen readers
                $(element).attr("aria-invalid", !rs);
            }

            return result;
        },

        // http://jqueryvalidation.org/Validator.showErrors/
        showErrors: function (errors) {
            if (errors) {
                var validator = this;

                // Add items to error list and map
                $.extend(this.errorMap, errors);
                this.errorList = $.map(this.errorMap, function (message, name) {
                    return {
                        message: message,
                        element: validator.findByName(name)[0]
                    };
                });

                // Remove items from success list
                this.successList = $.grep(this.successList, function (element) {
                    return !( element.name in errors );
                });
            }
            if (this.settings.showErrors) {
                this.settings.showErrors.call(this, this.errorMap, this.errorList);
            } else {
                this.defaultShowErrors();
            }
        },

        // http://jqueryvalidation.org/Validator.resetForm/
        resetForm: function () {
            if ($.fn.resetForm) {
                $(this.currentForm).resetForm();
            }
            this.invalid = {};
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            var elements = this.elements()
                .removeData("previousValue")
                .removeAttr("aria-invalid");

            this.resetElements(elements);
        },

        resetElements: function (elements) {
            var i;

            if (this.settings.unhighlight) {
                for (i = 0; elements[i]; i++) {
                    this.settings.unhighlight.call(this, elements[i],
                        this.settings.errorClass, "");
                    this.findByName(elements[i].name).removeClass(this.settings.validClass);
                }
            } else {
                elements
                    .removeClass(this.settings.errorClass)
                    .removeClass(this.settings.validClass);
            }
        },

        numberOfInvalids: function () {
            return this.objectLength(this.invalid);
        },

        objectLength: function (obj) {
            /* jshint unused: false */
            var count = 0,
                i;
            for (i in obj) {
                if (obj[i]) {
                    count++;
                }
            }
            return count;
        },

        hideErrors: function () {
            this.hideThese(this.toHide);
        },

        hideThese: function (errors) {
            errors.not(this.containers).text("");
            this.addWrapper(errors).hide();
        },

        valid: function () {
            return this.size() === 0;
        },

        size: function () {
            return this.errorList.length;
        },

        focusInvalid: function () {
            if (this.settings.focusInvalid) {
                try {
                    $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
                        .filter(":visible")
                        .focus()

                        // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                        .trigger("focusin");
                } catch (e) {

                    // Ignore IE throwing errors when focusing hidden elements
                }
            }
        },

        findLastActive: function () {
            var lastActive = this.lastActive;
            return lastActive && $.grep(this.errorList, function (n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
        },

        elements: function () {
            var validator = this,
                rulesCache = {};

            // Select all valid inputs inside the form (no submit or reset buttons)
            return $(this.currentForm)
                .find("input, select, textarea, [contenteditable]")
                .not(":submit, :reset, :image, :disabled")
                .not(this.settings.ignore)
                .filter(function () {
                    var name = this.name || $(this).attr("name"); // For contenteditable
                    if (!name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }

                    // Set form expando on contenteditable
                    if (this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                    }

                    // Select only the first element for each name, and only those with rules specified
                    if (name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false;
                    }

                    rulesCache[name] = true;
                    return true;
                });
        },

        clean: function (selector) {
            return $(selector)[0];
        },

        errors: function () {
            var errorClass = this.settings.errorClass.split(" ").join(".");
            return $(this.settings.errorElement + "." + errorClass, this.errorContext);
        },

        resetInternals: function () {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $([]);
            this.toHide = $([]);
        },

        reset: function () {
            this.resetInternals();
            this.currentElements = $([]);
        },

        prepareForm: function () {
            this.reset();
            this.toHide = this.errors().add(this.containers);
        },

        prepareElement: function (element) {
            this.reset();
            this.toHide = this.errorsFor(element);
        },

        elementValue: function (element) {
            var $element = $(element),
                type = element.type,
                val, idx;

            if (type === "radio" || type === "checkbox") {
                return this.findByName(element.name).filter(":checked").val();
            } else if (type === "number" && typeof element.validity !== "undefined") {
                return element.validity.badInput ? "NaN" : $element.val();
            }

            if (element.hasAttribute("contenteditable")) {
                val = $element.text();
            } else {
                val = $element.val();
            }

            if (type === "file") {

                // Modern browser (chrome & safari)
                if (val.substr(0, 12) === "C:\\fakepath\\") {
                    return val.substr(12);
                }

                // Legacy browsers
                // Unix-based path
                idx = val.lastIndexOf("/");
                if (idx >= 0) {
                    return val.substr(idx + 1);
                }

                // Windows-based path
                idx = val.lastIndexOf("\\");
                if (idx >= 0) {
                    return val.substr(idx + 1);
                }

                // Just the file name
                return val;
            }

            if (typeof val === "string") {
                return val.replace(/\r/g, "");
            }
            return val;
        },

        check: function (element) {
            element = this.validationTargetFor(this.clean(element));

            var rules = $(element).rules(),
                rulesCount = $.map(rules, function (n, i) {
                    return i;
                }).length,
                dependencyMismatch = false,
                val = this.elementValue(element),
                result, method, rule;

            // If a normalizer is defined for this element, then
            // call it to retreive the changed value instead
            // of using the real one.
            // Note that `this` in the normalizer is `element`.
            if (typeof rules.normalizer === "function") {
                val = rules.normalizer.call(element, val);

                if (typeof val !== "string") {
                    throw new TypeError("The normalizer should return a string value.");
                }

                // Delete the normalizer from rules to avoid treating
                // it as a pre-defined method.
                delete rules.normalizer;
            }

            for (method in rules) {
                rule = {method: method, parameters: rules[method]};
                try {
                    result = $.validator.methods[method].call(this, val, element, rule.parameters);

                    // If a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if (result === "dependency-mismatch" && rulesCount === 1) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;

                    if (result === "pending") {
                        this.toHide = this.toHide.not(this.errorsFor(element));
                        return;
                    }

                    if (!result) {
                        this.formatAndAdd(element, rule);
                        return false;
                    }
                } catch (e) {
                    if (this.settings.debug && window.console) {
                        console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                    }
                    if (e instanceof TypeError) {
                        e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                    }

                    throw e;
                }
            }
            if (dependencyMismatch) {
                return;
            }
            if (this.objectLength(rules)) {
                this.successList.push(element);
            }
            return true;
        },

        // Return the custom message for the given element and validation method
        // specified in the element's HTML5 data attribute
        // return the generic message if present and no method specific message is present
        customDataMessage: function (element, method) {
            return $(element).data("msg" + method.charAt(0).toUpperCase() +
                    method.substring(1).toLowerCase()) || $(element).data("msg");
        },

        // Return the custom message for the given element name and validation method
        customMessage: function (name, method) {
            var m = this.settings.messages[name];
            return m && ( m.constructor === String ? m : m[method] );
        },

        // Return the first defined argument, allowing empty strings
        findDefined: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    return arguments[i];
                }
            }
            return undefined;
        },

        // The second parameter 'rule' used to be a string, and extended to an object literal
        // of the following form:
        // rule = {
        //     method: "method name",
        //     parameters: "the given method parameters"
        // }
        //
        // The old behavior still supported, kept to maintain backward compatibility with
        // old code, and will be removed in the next major release.
        defaultMessage: function (element, rule) {
            if (typeof rule === "string") {
                rule = {method: rule};
            }

            var message = this.findDefined(
                this.customMessage(element.name, rule.method),
                this.customDataMessage(element, rule.method),

                // 'title' is never undefined, so handle empty string as undefined
                    !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[rule.method],
                    "<strong>Warning: No message defined for " + element.name + "</strong>"
                ),
                theregex = /\$?\{(\d+)\}/g;
            if (typeof message === "function") {
                message = message.call(this, rule.parameters, element);
            } else if (theregex.test(message)) {
                message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
            }

            return message;
        },

        formatAndAdd: function (element, rule) {
            var message = this.defaultMessage(element, rule);

            this.errorList.push({
                message: message,
                element: element,
                method: rule.method
            });

            this.errorMap[element.name] = message;
            this.submitted[element.name] = message;
        },

        addWrapper: function (toToggle) {
            if (this.settings.wrapper) {
                toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
            }
            return toToggle;
        },

        defaultShowErrors: function () {
            var i, elements, error;
            for (i = 0; this.errorList[i]; i++) {
                error = this.errorList[i];
                if (this.settings.highlight) {
                    this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                }
                this.showLabel(error.element, error.message);
            }
            if (this.errorList.length) {
                this.toShow = this.toShow.add(this.containers);
            }
            if (this.settings.success) {
                for (i = 0; this.successList[i]; i++) {
                    this.showLabel(this.successList[i]);
                }
            }
            if (this.settings.unhighlight) {
                for (i = 0, elements = this.validElements(); elements[i]; i++) {
                    this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                }
            }
            this.toHide = this.toHide.not(this.toShow);
            this.hideErrors();
            this.addWrapper(this.toShow).show();
        },

        validElements: function () {
            return this.currentElements.not(this.invalidElements());
        },

        invalidElements: function () {
            return $(this.errorList).map(function () {
                return this.element;
            });
        },

        showLabel: function (element, message) {
            var place, group, errorID, v,
                error = this.errorsFor(element),
                elementID = this.idOrName(element),
                describedBy = $(element).attr("aria-describedby");

            if (error.length) {

                // Refresh error/success class
                error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

                // Replace message on existing label
                error.html(message);
            } else {

                // Create error element
                error = $("<" + this.settings.errorElement + ">")
                    .attr("id", elementID + "-error")
                    .addClass(this.settings.errorClass)
                    .html(message || "");

                // Maintain reference to the element to be placed into the DOM
                place = error;
                if (this.settings.wrapper) {

                    // Make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if (this.labelContainer.length) {
                    this.labelContainer.append(place);
                } else if (this.settings.errorPlacement) {
                    this.settings.errorPlacement.call(this, place, $(element));
                } else {
                    place.insertAfter(element);
                }

                // Link error back to the element
                if (error.is("label")) {

                    // If the error is a label, then associate using 'for'
                    error.attr("for", elementID);

                    // If the element is not a child of an associated label, then it's necessary
                    // to explicitly apply aria-describedby
                } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                    errorID = error.attr("id");

                    // Respect existing non-error aria-describedby
                    if (!describedBy) {
                        describedBy = errorID;
                    } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {

                        // Add to end of list if not already present
                        describedBy += " " + errorID;
                    }
                    $(element).attr("aria-describedby", describedBy);

                    // If this element is grouped, then assign to all elements in the same group
                    group = this.groups[element.name];
                    if (group) {
                        v = this;
                        $.each(v.groups, function (name, testgroup) {
                            if (testgroup === group) {
                                $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm)
                                    .attr("aria-describedby", error.attr("id"));
                            }
                        });
                    }
                }
            }
            if (!message && this.settings.success) {
                error.text("");
                if (typeof this.settings.success === "string") {
                    error.addClass(this.settings.success);
                } else {
                    this.settings.success(error, element);
                }
            }
            this.toShow = this.toShow.add(error);
        },

        errorsFor: function (element) {
            var name = this.escapeCssMeta(this.idOrName(element)),
                describer = $(element).attr("aria-describedby"),
                selector = "label[for='" + name + "'], label[for='" + name + "'] *";

            // 'aria-describedby' should directly reference the error element
            if (describer) {
                selector = selector + ", #" + this.escapeCssMeta(describer)
                        .replace(/\s+/g, ", #");
            }

            return this
                .errors()
                .filter(selector);
        },

        // See https://api.jquery.com/category/selectors/, for CSS
        // meta-characters that should be escaped in order to be used with JQuery
        // as a literal part of a name/id or any selector.
        escapeCssMeta: function (string) {
            return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },

        idOrName: function (element) {
            return this.groups[element.name] || ( this.checkable(element) ? element.name : element.id || element.name );
        },

        validationTargetFor: function (element) {

            // If radio/checkbox, validate first element in group instead
            if (this.checkable(element)) {
                element = this.findByName(element.name);
            }

            // Always apply ignore filter
            return $(element).not(this.settings.ignore)[0];
        },

        checkable: function (element) {
            return ( /radio|checkbox/i ).test(element.type);
        },

        findByName: function (name) {
            return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
        },

        getLength: function (value, element) {
            switch (element.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", element).length;
                case "input":
                    if (this.checkable(element)) {
                        return this.findByName(element.name).filter(":checked").length;
                    }
            }
            return value.length;
        },

        depend: function (param, element) {
            return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
        },

        dependTypes: {
            "boolean": function (param) {
                return param;
            },
            "string": function (param, element) {
                return !!$(param, element.form).length;
            },
            "function": function (param, element) {
                return param(element);
            }
        },

        optional: function (element) {
            var val = this.elementValue(element);
            return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
        },

        startRequest: function (element) {
            if (!this.pending[element.name]) {
                this.pendingRequest++;
                $(element).addClass(this.settings.pendingClass);
                this.pending[element.name] = true;
            }
        },

        stopRequest: function (element, valid) {
            this.pendingRequest--;

            // Sometimes synchronization fails, make sure pendingRequest is never < 0
            if (this.pendingRequest < 0) {
                this.pendingRequest = 0;
            }
            delete this.pending[element.name];
            $(element).removeClass(this.settings.pendingClass);
            if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                $(this.currentForm).submit();
                this.formSubmitted = false;
            } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.formSubmitted = false;
            }
        },

        previousValue: function (element, method) {
            method = typeof method === "string" && method || "remote";

            return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, {method: method})
                });
        },

        // Cleans up all forms and elements, removes validator-specific events
        destroy: function () {
            this.resetForm();

            $(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur");
        }

    },

    classRuleSettings: {
        required: {required: true},
        email: {email: true},
        url: {url: true},
        date: {date: true},
        dateISO: {dateISO: true},
        number: {number: true},
        digits: {digits: true},
        creditcard: {creditcard: true}
    },

    addClassRules: function (className, rules) {
        if (className.constructor === String) {
            this.classRuleSettings[className] = rules;
        } else {
            $.extend(this.classRuleSettings, className);
        }
    },

    classRules: function (element) {
        var rules = {},
            classes = $(element).attr("class");

        if (classes) {
            $.each(classes.split(" "), function () {
                if (this in $.validator.classRuleSettings) {
                    $.extend(rules, $.validator.classRuleSettings[this]);
                }
            });
        }
        return rules;
    },

    normalizeAttributeRule: function (rules, type, method, value) {

        // Convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if (/min|max|step/.test(method) && ( type === null || /number|range|text/.test(type) )) {
            value = Number(value);

            // Support Opera Mini, which returns NaN for undefined minlength
            if (isNaN(value)) {
                value = undefined;
            }
        }

        if (value || value === 0) {
            rules[method] = value;
        } else if (type === method && type !== "range") {

            // Exception: the jquery validate 'range' method
            // does not test for the html5 'range' type
            rules[method] = true;
        }
    },

    attributeRules: function (element) {
        var rules = {},
            $element = $(element),
            type = element.getAttribute("type"),
            method, value;

        for (method in $.validator.methods) {

            // Support for <input required> in both html5 and older browsers
            if (method === "required") {
                value = element.getAttribute(method);

                // Some browsers return an empty string for the required attribute
                // and non-HTML5 browsers might have required="" markup
                if (value === "") {
                    value = true;
                }

                // Force non-HTML5 browsers to return bool
                value = !!value;
            } else {
                value = $element.attr(method);
            }

            this.normalizeAttributeRule(rules, type, method, value);
        }

        // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
        if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
            delete rules.maxlength;
        }

        return rules;
    },

    dataRules: function (element) {
        var rules = {},
            $element = $(element),
            type = element.getAttribute("type"),
            method, value;

        for (method in $.validator.methods) {
            value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
            this.normalizeAttributeRule(rules, type, method, value);
        }
        return rules;
    },

    staticRules: function (element) {
        var rules = {},
            validator = $.data(element.form, "validator");

        if (validator.settings.rules) {
            rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
        }
        return rules;
    },

    normalizeRules: function (rules, element) {

        // Handle dependency check
        $.each(rules, function (prop, val) {

            // Ignore rule when param is explicitly false, eg. required:false
            if (val === false) {
                delete rules[prop];
                return;
            }
            if (val.param || val.depends) {
                var keepRule = true;
                switch (typeof val.depends) {
                    case "string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case "function":
                        keepRule = val.depends.call(element, element);
                        break;
                }
                if (keepRule) {
                    rules[prop] = val.param !== undefined ? val.param : true;
                } else {
                    $.data(element.form, "validator").resetElements($(element));
                    delete rules[prop];
                }
            }
        });

        // Evaluate parameters
        $.each(rules, function (rule, parameter) {
            rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
        });

        // Clean number parameters
        $.each(["minlength", "maxlength"], function () {
            if (rules[this]) {
                rules[this] = Number(rules[this]);
            }
        });
        $.each(["rangelength", "range"], function () {
            var parts;
            if (rules[this]) {
                if ($.isArray(rules[this])) {
                    rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                } else if (typeof rules[this] === "string") {
                    parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                    rules[this] = [Number(parts[0]), Number(parts[1])];
                }
            }
        });

        if ($.validator.autoCreateRanges) {

            // Auto-create ranges
            if (rules.min != null && rules.max != null) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
            }
            if (rules.minlength != null && rules.maxlength != null) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }

        return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
        if (typeof data === "string") {
            var transformed = {};
            $.each(data.split(/\s/), function () {
                transformed[this] = true;
            });
            data = transformed;
        }
        return data;
    },

    // http://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function (name, method, message) {
        $.validator.methods[name] = method;
        $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
        if (method.length < 3) {
            $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
    },

    // http://jqueryvalidation.org/jQuery.validator.methods/
    methods: {

        // http://jqueryvalidation.org/required-method/
        required: function (value, element, param) {

            // Check if dependency is met
            if (!this.depend(param, element)) {
                return "dependency-mismatch";
            }
            if (element.nodeName.toLowerCase() === "select") {

                // Could be an array for select-multiple or a string, both are fine this way
                var val = $(element).val();
                return val && val.length > 0;
            }
            if (this.checkable(element)) {
                return this.getLength(value, element) > 0;
            }
            return value.length > 0;
        },

        // http://jqueryvalidation.org/email-method/
        email: function (value, element) {

            // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            // Retrieved 2014-01-14
            // If you have a problem with this implementation, report a bug against the above spec
            // Or use custom methods to implement your own email validation
            return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        },

        // http://jqueryvalidation.org/url-method/
        url: function (value, element) {

            // Copyright (c) 2010-2013 Diego Perini, MIT licensed
            // https://gist.github.com/dperini/729294
            // see also https://mathiasbynens.be/demo/url-regex
            // modified to allow protocol-relative URLs
            return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
        },

        // http://jqueryvalidation.org/date-method/
        date: function (value, element) {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
        },

        // http://jqueryvalidation.org/dateISO-method/
        dateISO: function (value, element) {
            return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
        },

        // http://jqueryvalidation.org/number-method/
        number: function (value, element) {
            return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
        },

        // http://jqueryvalidation.org/digits-method/
        digits: function (value, element) {
            return this.optional(element) || /^\d+$/.test(value);
        },

        // http://jqueryvalidation.org/minlength-method/
        minlength: function (value, element, param) {
            var length = $.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length >= param;
        },

        // http://jqueryvalidation.org/maxlength-method/
        maxlength: function (value, element, param) {
            var length = $.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length <= param;
        },

        // http://jqueryvalidation.org/rangelength-method/
        rangelength: function (value, element, param) {
            var length = $.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || ( length >= param[0] && length <= param[1] );
        },

        // http://jqueryvalidation.org/min-method/
        min: function (value, element, param) {
            return this.optional(element) || value >= param;
        },

        // http://jqueryvalidation.org/max-method/
        max: function (value, element, param) {
            return this.optional(element) || value <= param;
        },

        // http://jqueryvalidation.org/range-method/
        range: function (value, element, param) {
            return this.optional(element) || ( value >= param[0] && value <= param[1] );
        },

        // http://jqueryvalidation.org/step-method/
        step: function (value, element, param) {
            var type = $(element).attr("type"),
                errorMessage = "Step attribute on input type " + type + " is not supported.",
                supportedTypes = ["text", "number", "range"],
                re = new RegExp("\\b" + type + "\\b"),
                notSupported = type && !re.test(supportedTypes.join()),
                decimalPlaces = function (num) {
                    var match = ( "" + num ).match(/(?:\.(\d+))?$/);
                    if (!match) {
                        return 0;
                    }

                    // Number of digits right of decimal point.
                    return match[1] ? match[1].length : 0;
                },
                toInt = function (num) {
                    return Math.round(num * Math.pow(10, decimals));
                },
                valid = true,
                decimals;

            // Works only for text, number and range input types
            // TODO find a way to support input types date, datetime, datetime-local, month, time and week
            if (notSupported) {
                throw new Error(errorMessage);
            }

            decimals = decimalPlaces(param);

            // Value can't have too many decimals
            if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                valid = false;
            }

            return this.optional(element) || valid;
        },

        // http://jqueryvalidation.org/equalTo-method/
        equalTo: function (value, element, param) {

            // Bind to the blur event of the target in order to revalidate whenever the target field is updated
            var target = $(param);
            if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    $(element).valid();
                });
            }
            return value === target.val();
        },

        // http://jqueryvalidation.org/remote-method/
        remote: function (value, element, param, method) {
            if (this.optional(element)) {
                return "dependency-mismatch";
            }

            method = typeof method === "string" && method || "remote";

            var previous = this.previousValue(element, method),
                validator, data, optionDataString;

            if (!this.settings.messages[element.name]) {
                this.settings.messages[element.name] = {};
            }
            previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
            this.settings.messages[element.name][method] = previous.message;

            param = typeof param === "string" && {url: param} || param;
            optionDataString = $.param($.extend({data: value}, param.data));
            if (previous.old === optionDataString) {
                return previous.valid;
            }

            previous.old = optionDataString;
            validator = this;
            this.startRequest(element);
            data = {};
            data[element.name] = value;
            $.ajax($.extend(true, {
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: data,
                context: validator.currentForm,
                success: function (response) {
                    var valid = response === true || response === "true",
                        errors, message, submitted;

                    validator.settings.messages[element.name][method] = previous.originalMessage;
                    if (valid) {
                        submitted = validator.formSubmitted;
                        validator.resetInternals();
                        validator.toHide = validator.errorsFor(element);
                        validator.formSubmitted = submitted;
                        validator.successList.push(element);
                        validator.invalid[element.name] = false;
                        validator.showErrors();
                    } else {
                        errors = {};
                        message = response || validator.defaultMessage(element, {method: method, parameters: value});
                        errors[element.name] = previous.message = message;
                        validator.invalid[element.name] = true;
                        validator.showErrors(errors);
                    }
                    previous.valid = valid;
                    validator.stopRequest(element, valid);
                }
            }, param));
            return "pending";
        }
    }

});

// Magnific Popup v1.0.1 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
(function (a) {
    typeof define == "function" && define.amd ? define(["jquery"], a) : typeof exports == "object" ? a(require("jquery")) : a(window.jQuery || window.Zepto)
})(function (a) {
    var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function () {
    }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w = function (a, b) {
        n.ev.on(i + a + j, b)
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, y = function (b, c) {
        n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
    }, z = function (b) {
        if (b !== v || !n.currTemplate.closeBtn)n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), v = b;
        return n.currTemplate.closeBtn
    }, A = function () {
        a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
    }, B = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (a.transition !== undefined)return !0;
        while (b.length)if (b.pop() + "Transition" in a)return !0;
        return !1
    };
    o.prototype = {
        constructor: o, init: function () {
            var b = navigator.appVersion;
            n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = B(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = a(document), n.popupsCache = {}
        }, open: function (b) {
            var c;
            if (b.isObj === !1) {
                n.items = b.items.toArray(), n.index = 0;
                var d = b.items, e;
                for (c = 0; c < d.length; c++) {
                    e = d[c], e.parsed && (e = e.el[0]);
                    if (e === b.el[0]) {
                        n.index = c;
                        break
                    }
                }
            } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
            if (n.isOpen) {
                n.updateItemHTML();
                return
            }
            n.types = [], u = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = s, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = x("bg").on("click" + j, function () {
                n.close()
            }), n.wrap = x("wrap").attr("tabindex", -1).on("click" + j, function (a) {
                n._checkIfClose(a.target) && n.close()
            }), n.container = x("container", n.wrap)), n.contentContainer = x("content"), n.st.preloader && (n.preloader = x("preloader", n.container, n.st.tLoading));
            var h = a.magnificPopup.modules;
            for (c = 0; c < h.length; c++) {
                var i = h[c];
                i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
            }
            y("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (w(f, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), u += " mfp-close-btn-in") : n.wrap.append(z())), n.st.alignTop && (u += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                overflow: n.st.overflowY,
                overflowX: "hidden",
                overflowY: n.st.overflowY
            }) : n.wrap.css({
                top: r.scrollTop(),
                position: "absolute"
            }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                height: s.height(),
                position: "absolute"
            }), n.st.enableEscapeKey && s.on("keyup" + j, function (a) {
                a.keyCode === 27 && n.close()
            }), r.on("resize" + j, function () {
                n.updateSize()
            }), n.st.closeOnContentClick || (u += " mfp-auto-cursor"), u && n.wrap.addClass(u);
            var l = n.wH = r.height(), m = {};
            if (n.fixedContentPos && n._hasScrollBar(l)) {
                var o = n._getScrollbarSize();
                o && (m.marginRight = o)
            }
            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var p = n.st.mainClass;
            return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), y("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)), n._lastFocusedEl = document.activeElement, setTimeout(function () {
                n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), s.on("focusin" + j, n._onFocusIn)
            }, 16), n.isOpen = !0, n.updateSize(l), y(g), b
        }, close: function () {
            if (!n.isOpen)return;
            y(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {
                n._close()
            }, n.st.removalDelay)) : n._close()
        }, _close: function () {
            y(b);
            var c = l + " " + k + " ";
            n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
            if (n.fixedContentPos) {
                var e = {marginRight: ""};
                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            s.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n.st.autoFocusLast && n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, y(d)
        }, updateSize: function (a) {
            if (n.isIOS) {
                var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b;
                n.wrap.css("height", c), n.wH = c
            } else n.wH = a || r.height();
            n.fixedContentPos || n.wrap.css("height", n.wH), y("Resize")
        }, updateItemHTML: function () {
            var b = n.items[n.index];
            n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
            var c = b.type;
            y("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
            if (!n.currTemplate[c]) {
                var d = n.st[c] ? n.st[c].markup : !1;
                y("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
            }
            t && t !== b.type && n.container.removeClass("mfp-" + t + "-holder");
            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
            n.appendContent(e, c), b.preloaded = !0, y(h, b), t = b.type, n.container.prepend(n.contentContainer), y("AfterChange")
        }, appendContent: function (a, b) {
            n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(z()) : n.content = a : n.content = "", y(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
        }, parseEl: function (b) {
            var c = n.items[b], d;
            c.tagName ? c = {el: a(c)} : (d = c.type, c = {data: c, src: c.src});
            if (c.el) {
                var e = n.types;
                for (var f = 0; f < e.length; f++)if (c.el.hasClass("mfp-" + e[f])) {
                    d = e[f];
                    break
                }
                c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
            }
            return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, y("ElementParse", c), n.items[b]
        }, addGroup: function (a, b) {
            var c = function (c) {
                c.mfpEl = this, n._openClick(c, a, b)
            };
            b || (b = {});
            var d = "click.magnificPopup";
            b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
        }, _openClick: function (b, c, d) {
            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey))return;
            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
            if (f)if (a.isFunction(f)) {
                if (!f.call(n))return !0
            } else if (r.width() < f)return !0;
            b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
        }, updateStatus: function (a, b) {
            if (n.preloader) {
                q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
                var c = {status: a, text: b};
                y("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), n.container.addClass("mfp-s-" + a), q = a
            }
        }, _checkIfClose: function (b) {
            if (a(b).hasClass(m))return;
            var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick;
            if (c && d)return !0;
            if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0])return !0;
            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                if (d && a.contains(document, b))return !0
            } else if (c)return !0;
            return !1
        }, _addClassToMFP: function (a) {
            n.bgOverlay.addClass(a), n.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height())
        }, _setFocus: function () {
            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
        }, _onFocusIn: function (b) {
            if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))return n._setFocus(), !1
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(f, [b, c, d]), a.each(c, function (a, c) {
                if (c === undefined || c === !1)return !0;
                e = a.split("_");
                if (e.length > 1) {
                    var d = b.find(j + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(j + "-" + a).html(c)
            })
        }, _getScrollbarSize: function () {
            if (n.scrollbarSize === undefined) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return n.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: o.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Fechar (Esc)",
            tLoading: "Carregando...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (b) {
        A();
        var c = a(this);
        if (typeof b == "string")if (b === "open") {
            var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0;
            e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({mfpEl: d}, c, e)
        } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
        return c
    };
    var C = "inline", D, E, F, G = function () {
        F && (E.after(F.addClass(D)).detach(), F = null)
    };
    a.magnificPopup.registerModule(C, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                n.types.push(C), w(b + "." + C, function () {
                    G()
                })
            }, getInline: function (b, c) {
                G();
                if (b.src) {
                    var d = n.st.inline, e = a(b.src);
                    if (e.length) {
                        var f = e[0].parentNode;
                        f && f.tagName && (E || (D = d.hiddenClass, E = x(D), D = "mfp-" + D), F = e.after(E).detach().removeClass(D)), n.updateStatus("ready")
                    } else n.updateStatus("error", d.tNotFound), e = a("<div>");
                    return b.inlineElement = e, e
                }
                return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
            }
        }
    });
    var H = "ajax", I, J = function () {
        I && a(document.body).removeClass(I)
    }, K = function () {
        J(), n.req && n.req.abort()
    };
    a.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                n.types.push(H), I = n.st.ajax.cursor, w(b + "." + H, K), w("BeforeChange." + H, K)
            }, getAjax: function (b) {
                I && a(document.body).addClass(I), n.updateStatus("loading");
                var c = a.extend({
                    url: b.src, success: function (c, d, e) {
                        var f = {data: c, xhr: e};
                        y("ParseAjax", f), n.appendContent(a(f.data), H), b.finished = !0, J(), n._setFocus(), setTimeout(function () {
                            n.wrap.addClass(k)
                        }, 16), n.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
                    }
                }, n.st.ajax.settings);
                return n.req = a.ajax(c), ""
            }
        }
    });
    var L, M = function (b) {
        if (b.data && b.data.title !== undefined)return b.data.title;
        var c = n.st.image.titleSrc;
        if (c) {
            if (a.isFunction(c))return c.call(n, b);
            if (b.el)return b.el.attr(c) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = n.st.image, d = ".image";
                n.types.push("image"), w(g + d, function () {
                    n.currItem.type === "image" && c.cursor && a(document.body).addClass(c.cursor)
                }), w(b + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), r.off("resize" + j)
                }), w("Resize" + d, n.resizeImage), n.isLowIE && w("AfterChange", n.resizeImage)
            }, resizeImage: function () {
                var a = n.currItem;
                if (!a || !a.img)return;
                if (n.st.image.verticalFit) {
                    var b = 0;
                    n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var b = 0, c = a.img[0], d = function (e) {
                    L && clearInterval(L), L = setInterval(function () {
                        if (c.naturalWidth > 0) {
                            n._onImageHasSize(a);
                            return
                        }
                        b > 200 && clearInterval(L), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
                    }, e)
                };
                d(1)
            }, getImage: function (b, c) {
                var d = 0, e = function () {
                    b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, y("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
                }, f = function () {
                    b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
                }, g = n.st.image, h = c.find(".mfp-img");
                if (h.length) {
                    var i = document.createElement("img");
                    i.className = "mfp-img", b.el && b.el.find("img").length && (i.alt = b.el.find("img").attr("alt")), b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
                }
                return n._parseMarkup(c, {
                    title: M(b),
                    img_replaceWith: b.img
                }, b), n.resizeImage(), b.hasSize ? (L && clearInterval(L), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
            }
        }
    });
    var N, O = function () {
        return N === undefined && (N = document.createElement("p").style.MozTransform !== undefined), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a = n.st.zoom, d = ".zoom", e;
                if (!a.enabled || !n.supportsTransition)return;
                var f = a.duration, g = function (b) {
                    var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + a.duration / 1e3 + "s " + a.easing, e = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }, f = "transition";
                    return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
                }, h = function () {
                    n.content.css("visibility", "visible")
                }, i, j;
                w("BuildControls" + d, function () {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
                        if (!e) {
                            h();
                            return
                        }
                        j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
                            j.css(n._getOffset(!0)), i = setTimeout(function () {
                                h(), setTimeout(function () {
                                    j.remove(), e = j = null, y("ZoomAnimationEnded")
                                }, 16)
                            }, f)
                        }, 16)
                    }
                }), w(c + d, function () {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.st.removalDelay = f;
                        if (!e) {
                            e = n._getItemToZoom();
                            if (!e)return;
                            j = g(e)
                        }
                        j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
                            j.css(n._getOffset())
                        }, 16)
                    }
                }), w(b + d, function () {
                    n._allowZoom() && (h(), j && j.remove(), e = null)
                })
            }, _allowZoom: function () {
                return n.currItem.type === "image"
            }, _getItemToZoom: function () {
                return n.currItem.hasSize ? n.currItem.img : !1
            }, _getOffset: function (b) {
                var c;
                b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
                var d = c.offset(), e = parseInt(c.css("padding-top"), 10), f = parseInt(c.css("padding-bottom"), 10);
                d.top -= a(window).scrollTop() - e;
                var g = {width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e};
                return O() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (n.currTemplate[P]) {
            var b = n.currTemplate[P].find("iframe");
            b.length && (a || (b[0].src = Q), n.isIE8 && b.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                n.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(b + "." + P, function () {
                    R()
                })
            }, getIframe: function (b, c) {
                var d = b.src, e = n.st.iframe;
                a.each(e.patterns, function () {
                    if (d.indexOf(this.index) > -1)return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
                });
                var f = {};
                return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
            }
        }
    });
    var S = function (a) {
        var b = n.items.length;
        return a > b - 1 ? a - b : a < 0 ? b + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = n.st.gallery, d = ".mfp-gallery", e = Boolean(a.fn.mfpFastClick);
                n.direction = !0;
                if (!c || !c.enabled)return !1;
                u += " mfp-gallery", w(g + d, function () {
                    c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function () {
                        if (n.items.length > 1)return n.next(), !1
                    }), s.on("keydown" + d, function (a) {
                        a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
                    })
                }), w("UpdateStatus" + d, function (a, b) {
                    b.text && (b.text = T(b.text, n.currItem.index, n.items.length))
                }), w(f + d, function (a, b, d, e) {
                    var f = n.items.length;
                    d.counter = f > 1 ? T(c.tCounter, e.index, f) : ""
                }), w("BuildControls" + d, function () {
                    if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
                        var b = c.arrowMarkup, d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m), f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m), g = e ? "mfpFastClick" : "click";
                        d[g](function () {
                            n.prev()
                        }), f[g](function () {
                            n.next()
                        }), n.isIE7 && (x("b", d[0], !1, !0), x("a", d[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), n.container.append(d.add(f))
                    }
                }), w(h + d, function () {
                    n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
                        n.preloadNearbyImages(), n._preloadTimeout = null
                    }, 16)
                }), w(b + d, function () {
                    s.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
                })
            }, next: function () {
                n.direction = !0, n.index = S(n.index + 1), n.updateItemHTML()
            }, prev: function () {
                n.direction = !1, n.index = S(n.index - 1), n.updateItemHTML()
            }, goTo: function (a) {
                n.direction = a >= n.index, n.index = a, n.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a = n.st.gallery.preload, b = Math.min(a[0], n.items.length), c = Math.min(a[1], n.items.length), d;
                for (d = 1; d <= (n.direction ? c : b); d++)n._preloadItem(n.index + d);
                for (d = 1; d <= (n.direction ? b : c); d++)n._preloadItem(n.index - d)
            }, _preloadItem: function (b) {
                b = S(b);
                if (n.items[b].preloaded)return;
                var c = n.items[b];
                c.parsed || (c = n.parseEl(b)), y("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                    c.hasSize = !0
                }).on("error.mfploader", function () {
                    c.hasSize = !0, c.loadError = !0, y("LazyLoadError", c)
                }).attr("src", c.src)), c.preloaded = !0
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = n.st.retina, b = a.ratio;
                    b = isNaN(b) ? b() : b, b > 1 && (w("ImageHasSize." + U, function (a, c) {
                        c.img.css({"max-width": c.img[0].naturalWidth / b, width: "100%"})
                    }), w("ElementParse." + U, function (c, d) {
                        d.src = a.replaceSrc(d, b)
                    }))
                }
            }
        }
    }), function () {
        var b = 1e3, c = "ontouchstart" in window, d = function () {
            r.off("touchmove" + f + " touchend" + f)
        }, e = "mfpFastClick", f = "." + e;
        a.fn.mfpFastClick = function (e) {
            return a(this).each(function () {
                var g = a(this), h;
                if (c) {
                    var i, j, k, l, m, n;
                    g.on("touchstart" + f, function (a) {
                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
                            if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10)l = !0, d()
                        }).on("touchend" + f, function (a) {
                            d();
                            if (l || n > 1)return;
                            h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                                h = !1
                            }, b), e()
                        })
                    })
                }
                g.on("click" + f, function () {
                    h || e()
                })
            })
        }, a.fn.destroyMfpFastClick = function () {
            a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
        }
    }(), A()
});

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function (e) {
    e.fn.extend({
        slimScroll: function (f) {
            var a = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, f);
            this.each(function () {
                function v(d) {
                    if (r) {
                        d = d || window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta / 120);
                        d.detail && (c = d.detail / 3);
                        e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
                        d.preventDefault && !k && d.preventDefault();
                        k || (d.returnValue = !1)
                    }
                }

                function n(d, e, f) {
                    k = !1;
                    var g = d, h = b.outerHeight() - c.outerHeight();
                    e && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), h), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({top: g + "px"}));
                    l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                    g = l * (b[0].scrollHeight - b.outerHeight());
                    f && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), h), c.css({top: d + "px"}));
                    b.scrollTop(g);
                    b.trigger("slimscrolling", ~~g);
                    w();
                    q()
                }

                function x() {
                    u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
                    c.css({height: u + "px"});
                    var a = u == b.outerHeight() ? "none" : "block";
                    c.css({display: a})
                }

                function w() {
                    x();
                    clearTimeout(B);
                    l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
                    C = l;
                    u >= b.outerHeight() ? k = !0 : (c.stop(!0,
                        !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"))
                }

                function q() {
                    a.alwaysVisible || (B = setTimeout(function () {
                        a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"))
                    }, 1E3))
                }

                var r, y, z, B, A, u, l, C, k = !1, b = e(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var p = b.scrollTop(), c = b.siblings("." + a.barClass), m = b.siblings("." + a.railClass);
                    x();
                    if (e.isPlainObject(f)) {
                        if ("height" in f && "auto" == f.height) {
                            b.parent().css("height", "auto");
                            b.css("height", "auto");
                            var h = b.parent().parent().height();
                            b.parent().css("height",
                                h);
                            b.css("height", h)
                        } else"height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));
                        if ("scrollTo" in f)p = parseInt(a.scrollTo); else if ("scrollBy" in f)p += parseInt(a.scrollBy); else if ("destroy" in f) {
                            c.remove();
                            m.remove();
                            b.unwrap();
                            return
                        }
                        n(p, !1, !0)
                    }
                } else if (!(e.isPlainObject(f) && "destroy" in f)) {
                    a.height = "auto" == a.height ? b.parent().height() : a.height;
                    p = e("<div></div>").addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: a.width, height: a.height
                    });
                    var m = e("<div></div>").addClass(a.railClass).css({
                        width: a.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: a.alwaysVisible && a.railVisible ? "block" : "none",
                        "border-radius": a.railBorderRadius,
                        background: a.railColor,
                        opacity: a.railOpacity,
                        zIndex: 90
                    }), c = e("<div></div>").addClass(a.barClass).css({
                        background: a.color,
                        width: a.size,
                        position: "absolute",
                        top: 0,
                        opacity: a.opacity,
                        display: a.alwaysVisible ? "block" : "none",
                        "border-radius": a.borderRadius,
                        BorderRadius: a.borderRadius,
                        MozBorderRadius: a.borderRadius,
                        WebkitBorderRadius: a.borderRadius,
                        zIndex: 99
                    }), h = "right" == a.position ? {right: a.distance} : {left: a.distance};
                    m.css(h);
                    c.css(h);
                    b.wrap(p);
                    b.parent().append(c);
                    b.parent().append(m);
                    a.railDraggable && c.bind("mousedown", function (a) {
                        var b = e(document);
                        z = !0;
                        t = parseFloat(c.css("top"));
                        pageY = a.pageY;
                        b.bind("mousemove.slimscroll", function (a) {
                            currTop = t + a.pageY - pageY;
                            c.css("top", currTop);
                            n(0, c.position().top, !1)
                        });
                        b.bind("mouseup.slimscroll", function (a) {
                            z = !1;
                            q();
                            b.unbind(".slimscroll")
                        });
                        return !1
                    }).bind("selectstart.slimscroll",
                        function (a) {
                            a.stopPropagation();
                            a.preventDefault();
                            return !1
                        });
                    m.hover(function () {
                        w()
                    }, function () {
                        q()
                    });
                    c.hover(function () {
                        y = !0
                    }, function () {
                        y = !1
                    });
                    b.hover(function () {
                        r = !0;
                        w();
                        q()
                    }, function () {
                        r = !1;
                        q()
                    });
                    b.bind("touchstart", function (a, b) {
                        a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function (b) {
                        k || b.originalEvent.preventDefault();
                        b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY)
                    });
                    x();
                    "bottom" === a.start ? (c.css({top: b.outerHeight() - c.outerHeight()}), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
                }
            });
            return this
        }
    });
    e.fn.extend({slimscroll: e.fn.slimScroll})
})(jQuery);

/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (a) {
    function b(b) {
        var c = {}, d = /^jQuery\d+$/;
        return a.each(b.attributes, function (a, b) {
            b.specified && !d.test(b.name) && (c[b.name] = b.value)
        }), c
    }

    function c(b, c) {
        var d = this, f = a(this);
        if (d.value === f.attr(h ? "placeholder-x" : "placeholder") && f.hasClass(n.customClass))if (d.value = "", f.removeClass(n.customClass), f.data("placeholder-password")) {
            if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0)return f[0].value = c, c;
            f.focus()
        } else d == e() && d.select()
    }

    function d(d) {
        var e, f = this, g = a(this), i = f.id;
        if (!d || "blur" !== d.type || !g.hasClass(n.customClass))if ("" === f.value) {
            if ("password" === f.type) {
                if (!g.data("placeholder-textinput")) {
                    try {
                        e = g.clone().prop({type: "text"})
                    } catch (j) {
                        e = a("<input>").attr(a.extend(b(this), {type: "text"}))
                    }
                    e.removeAttr("name").data({
                        "placeholder-enabled": !0,
                        "placeholder-password": g,
                        "placeholder-id": i
                    }).bind("focus.placeholder", c), g.data({"placeholder-textinput": e, "placeholder-id": i}).before(e)
                }
                f.value = "", g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
            } else {
                var k = g.data("placeholder-password");
                k && (k[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            g.addClass(n.customClass), g[0].value = g.attr(h ? "placeholder-x" : "placeholder")
        } else g.removeClass(n.customClass)
    }

    function e() {
        try {
            return document.activeElement
        } catch (a) {
        }
    }

    var f, g, h = !1, i = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), j = "placeholder" in document.createElement("input") && !i && !h, k = "placeholder" in document.createElement("textarea") && !i && !h, l = a.valHooks, m = a.propHooks, n = {};
    j && k ? (g = a.fn.placeholder = function () {
        return this
    }, g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function (b) {
        var e = {customClass: "placeholder"};
        return n = a.extend({}, e, b), this.filter((j ? "textarea" : ":input") + "[" + (h ? "placeholder-x" : "placeholder") + "]").not("." + n.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": c,
            "blur.placeholder": d
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, g.input = j, g.textarea = k, f = {
        get: function (b) {
            var c = a(b), d = c.data("placeholder-password");
            return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(n.customClass) ? "" : b.value
        }, set: function (b, f) {
            var g, h, i = a(b);
            return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)), i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(n.customClass) && c.call(b), b.value = f), i) : (b.value = f, i)
        }
    }, j || (l.input = f, m.value = f), k || (l.textarea = f, m.value = f), a(function () {
        a(document).delegate("form", "submit.placeholder", function () {
            var b = a("." + n.customClass, this).each(function () {
                c.call(this, !0, "")
            });
            setTimeout(function () {
                b.each(d)
            }, 10)
        })
    }), a(window).bind("beforeunload.placeholder", function () {
        var b = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (b = !1)
        } catch (c) {
        }
        b && a("." + n.customClass).each(function () {
            this.value = ""
        })
    }))
});

/*!
 * Bootstrap-growl v1.1.0
 *
 * Copyright (c) Nick Larson, http://github.com/ifightcrime
 * Released under the MIT license
 *
 * Pretty simple jQuery plugin that turns standard Bootstrap alerts into hovering "Growl-like" notifications.
 *
 */
(function () {
    var t;
    t = jQuery, t.bootstrapGrowl = function (e, s) {
        var a, o, l;
        switch (s = t.extend({}, t.bootstrapGrowl.default_options, s), a = t("<div>"), a.attr("class", "bootstrap-growl alert"), s.type && a.addClass("alert-" + s.type), s.allow_dismiss && a.append('<a class="close" data-dismiss="alert" href="#">&times;</a>'), a.append(e), s.top_offset && (s.offset = {
            from: "top",
            amount: s.top_offset
        }), l = s.offset.amount, t(".bootstrap-growl").each(function () {
            return l = Math.max(l, parseInt(t(this).css(s.offset.from)) + t(this).outerHeight() + s.stackup_spacing)
        }), o = {
            position: "body" === s.ele ? "fixed" : "absolute",
            margin: 0,
            "z-index": "9999",
            display: "none"
        }, o[s.offset.from] = l + "px", a.css(o), "auto" !== s.width && a.css("width", s.width + "px"), t(s.ele).append(a), s.align) {
            case"center":
                a.css({left: "50%", "margin-left": "-" + a.outerWidth() / 2 + "px"});
                break;
            case"left":
                a.css("left", "20px");
                break;
            default:
                a.css("right", "20px")
        }
        return a.fadeIn(), s.delay > 0 && a.delay(s.delay).fadeOut(function () {
            return t(this).alert("close")
        }), a
    }, t.bootstrapGrowl.default_options = {
        ele: "body",
        type: "info",
        offset: {from: "top", amount: 20},
        align: "right",
        width: 250,
        delay: 30000,
        allow_dismiss: !0,
        stackup_spacing: 10
    }
}).call(this);

/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd)var b = a.fn.select2.amd;
        var b;
        return function () {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function (b) {
                    function e(a, b) {
                        return u.call(a, b)
                    }

                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {};
                        if (a && "." === a.charAt(0))if (b) {
                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)if (m = a[k], "." === m)a.splice(k, 1), k -= 1; else if (".." === m) {
                                if (1 === k && (".." === a[2] || ".." === a[0]))break;
                                k > 0 && (a.splice(k - 1, 2), k -= 2)
                            }
                            a = a.join("/")
                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                        if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n)for (l = n.length; l > 0; l -= 1)if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                    f = e, h = k;
                                    break
                                }
                                if (f)break;
                                !i && p && p[d] && (i = p[d], j = k)
                            }
                            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                        }
                        return a
                    }

                    function g(a, c) {
                        return function () {
                            var d = v.call(arguments, 0);
                            return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                        }
                    }

                    function h(a) {
                        return function (b) {
                            return f(b, a)
                        }
                    }

                    function i(a) {
                        return function (b) {
                            q[a] = b
                        }
                    }

                    function j(a) {
                        if (e(r, a)) {
                            var c = r[a];
                            delete r[a], t[a] = !0, m.apply(b, c)
                        }
                        if (!e(q, a) && !e(t, a))throw new Error("No " + a);
                        return q[a]
                    }

                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                    }

                    function l(a) {
                        return function () {
                            return s && s.config && s.config[a] || {}
                        }
                    }

                    var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/;
                    o = function (a, b) {
                        var c, d = k(a), e = d[0];
                        return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                            f: e ? e + "!" + a : a,
                            n: a,
                            pr: e,
                            p: c
                        }
                    }, p = {
                        require: function (a) {
                            return g(a)
                        }, exports: function (a) {
                            var b = q[a];
                            return "undefined" != typeof b ? b : q[a] = {}
                        }, module: function (a) {
                            return {id: a, uri: "", exports: q[a], config: l(a)}
                        }
                    }, m = function (a, c, d, f) {
                        var h, k, l, m, n, s, u = [], v = typeof d;
                        if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)if (m = o(c[n], f), k = m.f, "require" === k)u[n] = p.require(a); else if ("exports" === k)u[n] = p.exports(a), s = !0; else if ("module" === k)h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k))u[n] = j(k); else {
                                if (!m.p)throw new Error(a + " missing " + k);
                                m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                            }
                            l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                        } else a && (q[a] = d)
                    }, a = c = n = function (a, c, d, e, f) {
                        if ("string" == typeof a)return p[a] ? p[a](c) : j(o(a, c).f);
                        if (!a.splice) {
                            if (s = a, s.deps && n(s.deps, s.callback), !c)return;
                            c.splice ? (a = c, c = d, d = null) : a = b
                        }
                        return c = c || function () {
                            }, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                            m(b, a, c, d)
                        }, 4), n
                    }, n.config = function (a) {
                        return n(a)
                    }, a._defined = q, d = function (a, b, c) {
                        if ("string" != typeof a)throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                    }, d.amd = {jQuery: !0}
                }(), b.requirejs = a, b.require = c, b.define = d
            }
        }(), b.define("almond", function () {
        }), b.define("jquery", [], function () {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
        }), b.define("select2/utils", ["jquery"], function (a) {
            function b(a) {
                var b = a.prototype, c = [];
                for (var d in b) {
                    var e = b[d];
                    "function" == typeof e && "constructor" !== d && c.push(d)
                }
                return c
            }

            var c = {};
            c.Extend = function (a, b) {
                function c() {
                    this.constructor = a
                }

                var d = {}.hasOwnProperty;
                for (var e in b)d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            }, c.Decorate = function (a, c) {
                function d() {
                    var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                }

                function e() {
                    this.constructor = d
                }

                var f = b(c), g = b(a);
                c.displayName = a.displayName, d.prototype = new e;
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i]
                }
                for (var j = (function (a) {
                    var b = function () {
                    };
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                        var a = Array.prototype.unshift;
                        return a.call(arguments, b), e.apply(this, arguments)
                    }
                }), k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l)
                }
                return d
            };
            var d = function () {
                this.listeners = {}
            };
            return d.prototype.on = function (a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
            }, d.prototype.trigger = function (a) {
                var b = Array.prototype.slice;
                this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, d.prototype.invoke = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)a[c].apply(this, b)
            }, c.Observable = d, c.generateChars = function (a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());
                    b += d.toString(36)
                }
                return b
            }, c.bind = function (a, b) {
                return function () {
                    a.apply(b, arguments)
                }
            }, c._convertData = function (a) {
                for (var b in a) {
                    var c = b.split("-"), d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                        }
                        delete a[b]
                    }
                }
                return a
            }, c.hasScroll = function (b, c) {
                var d = a(c), e = c.style.overflowX, f = c.style.overflowY;
                return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
            }, c.escapeMarkup = function (a) {
                var b = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a]
                })
            }, c.appendMany = function (b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function (a) {
                        d = d.add(a)
                    }), c = d
                }
                b.append(c)
            }, c
        }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
            }

            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
            }, c.prototype.clear = function () {
                this.$results.empty()
            }, c.prototype.displayMessage = function (b) {
                var c = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
            }, c.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, c.prototype.append = function (a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c], e = this.option(d);
                    b.push(e)
                }
                this.$results.append(b)
            }, c.prototype.position = function (a, b) {
                var c = b.find(".select2-results");
                c.append(a)
            }, c.prototype.sort = function (a) {
                var b = this.options.get("sorter");
                return b(a)
            }, c.prototype.setClasses = function () {
                var b = this;
                this.data.current(function (c) {
                    var d = a.map(c, function (a) {
                        return a.id.toString()
                    }), e = b.$results.find(".select2-results__option[aria-selected]");
                    e.each(function () {
                        var b = a(this), c = a.data(this, "data"), e = "" + c.id;
                        null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                    });
                    var f = e.filter("[aria-selected=true]");
                    f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter")
                })
            }, c.prototype.showLoading = function (a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching"), c = {
                    disabled: !0,
                    loading: !0,
                    text: b(a)
                }, d = this.option(c);
                d.className += " loading-results", this.$results.prepend(d)
            }, c.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, c.prototype.option = function (b) {
                var c = document.createElement("li");
                c.className = "select2-results__option";
                var d = {role: "treeitem", "aria-selected": "false"};
                b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                for (var e in d) {
                    var f = d[e];
                    c.setAttribute(e, f)
                }
                if (b.children) {
                    var g = a(c), h = document.createElement("strong");
                    h.className = "select2-results__group";
                    a(h);
                    this.template(b, h);
                    for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j], l = this.option(k);
                        i.push(l)
                    }
                    var m = a("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    m.append(i), g.append(h), g.append(m)
                } else this.template(b, c);
                return a.data(c, "data", b), c
            }, c.prototype.bind = function (b, c) {
                var d = this, e = b.id + "-results";
                this.$results.attr("id", e), b.on("results:all", function (a) {
                    d.clear(), d.append(a.data), b.isOpen() && d.setClasses()
                }), b.on("results:append", function (a) {
                    d.append(a.data), b.isOpen() && d.setClasses()
                }), b.on("query", function (a) {
                    d.hideMessages(), d.showLoading(a)
                }), b.on("select", function () {
                    b.isOpen() && d.setClasses()
                }), b.on("unselect", function () {
                    b.isOpen() && d.setClasses()
                }), b.on("open", function () {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                }), b.on("close", function () {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                }), b.on("results:toggle", function () {
                    var a = d.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup")
                }), b.on("results:select", function () {
                    var a = d.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = a.data("data");
                        "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {data: b})
                    }
                }), b.on("results:previous", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a);
                    if (0 !== c) {
                        var e = c - 1;
                        0 === a.length && (e = 0);
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g);
                        0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                    }
                }), b.on("results:next", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a), e = c + 1;
                    if (!(e >= b.length)) {
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top + d.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g;
                        0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                    }
                }), b.on("results:focus", function (a) {
                    a.element.addClass("select2-results__option--highlighted")
                }), b.on("results:message", function (a) {
                    d.displayMessage(a)
                }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - d.$results.scrollTop() + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height();
                    e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this), e = c.data("data");
                    return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                        originalEvent: b,
                        data: e
                    }) : d.trigger("close", {})) : void d.trigger("select", {originalEvent: b, data: e})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this).data("data");
                    d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                        data: c,
                        element: a(this)
                    })
                })
            }, c.prototype.getHighlightedResults = function () {
                var a = this.$results.find(".select2-results__option--highlighted");
                return a
            }, c.prototype.destroy = function () {
                this.$results.remove()
            }, c.prototype.ensureHighlightVisible = function () {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                    f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                }
            }, c.prototype.template = function (b, c) {
                var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
            }, c
        }), b.define("select2/keys", [], function () {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return a
        }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }

            return b.Extend(d, b.Observable), d.prototype.render = function () {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
            }, d.prototype.bind = function (a, b) {
                var d = this, e = (a.id + "-container", a.id + "-results");
                this.container = a, this.$selection.on("focus", function (a) {
                    d.trigger("focus", a)
                }), this.$selection.on("blur", function (a) {
                    d._handleBlur(a)
                }), this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                }), a.on("results:focus", function (a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId)
                }), a.on("selection:update", function (a) {
                    d.update(a.data)
                }), a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                }), a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                }), a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex)
                }), a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1")
                })
            }, d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                }, 1)
            }, d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                    var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open");
                    e.each(function () {
                        var b = a(this);
                        if (this != d[0]) {
                            var c = b.data("element");
                            c.select2("close")
                        }
                    })
                })
            }, d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id)
            }, d.prototype.position = function (a, b) {
                var c = b.find(".selection");
                c.append(a)
            }, d.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, d.prototype.update = function (a) {
                throw new Error("The `update` method must be defined in child classes.")
            }, d
        }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }

            return c.Extend(e, b), e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
            }, e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("focus", function (a) {
                }), this.$selection.on("blur", function (a) {
                }), a.on("selection:update", function (a) {
                    c.update(a.data)
                })
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, e.prototype.selectionContainer = function () {
                return a("<span></span>")
            }, e.prototype.update = function (a) {
                if (0 === a.length)return void this.clear();
                var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text)
            }, e
        }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments)
            }

            return c.Extend(d, b), d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
            }, d.prototype.bind = function (b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
                    e.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this), d = c.parent(), f = d.data("data");
                        e.trigger("unselect", {originalEvent: b, data: f})
                    }
                })
            }, d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, d.prototype.selectionContainer = function () {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return b
            }, d.prototype.update = function (a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d], f = this.selectionContainer(), g = this.display(e, f);
                        f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b)
                }
            }, d
        }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
            }

            return b.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = {id: "", text: b}), b
            }, b.prototype.createPlaceholder = function (a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
            }, b.prototype.update = function (a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1;
                if (d || c)return a.call(this, b);
                this.clear();
                var e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e)
            }, b
        }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
            function c() {
            }

            return c.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
                    d._handleClear(a)
                }), b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b)
                })
            }, c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");
                    if (0 !== c.length) {
                        b.stopPropagation();
                        for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = {data: d[e]};
                            if (this.trigger("unselect", f), f.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
            }, c.prototype.update = function (b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');
                    d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                }
            }, c
        }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c)
            }

            return d.prototype.render = function (b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c, this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(), d
            }, d.prototype.bind = function (a, b, d) {
                var e = this;
                a.call(this, b, d), b.on("open", function () {
                    e.$search.trigger("focus")
                }), b.on("close", function () {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                }), b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex()
                }), b.on("disable", function () {
                    e.$search.prop("disabled", !0)
                }), b.on("focus", function (a) {
                    e.$search.trigger("focus")
                }), b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
                    e.trigger("focus", a)
                }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
                    e._handleBlur(a)
                }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                    var b = a.which;
                    if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var f = d.data("data");
                            e.searchRemoveChoice(f), a.preventDefault()
                        }
                    }
                });
                var f = document.documentMode, g = f && 11 >= f;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
                    if (g && "input" === a.type)return void e.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                })
            }, d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text)
            }, d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
            }, d.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {term: a})
                }
                this._keyUpPrevented = !1
            }, d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", {data: b}), this.$search.val(b.text), this.handleSearch()
            }, d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))a = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var b = this.$search.val().length + 1;
                    a = .75 * b + "em"
                }
                this.$search.css("width", a)
            }, d
        }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
            function b() {
            }

            return b.prototype.bind = function (b, c, d) {
                var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], g = ["opening", "closing", "selecting", "unselecting"];
                b.call(this, c, d), c.on("*", function (b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {params: c});
                        e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                    }
                })
            }, b
        }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
            function c(a) {
                this.dict = a || {}
            }

            return c.prototype.all = function () {
                return this.dict
            }, c.prototype.get = function (a) {
                return this.dict[a]
            }, c.prototype.extend = function (b) {
                this.dict = a.extend({}, b.all(), this.dict)
            }, c._cache = {}, c.loadPath = function (a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d
                }
                return new c(c._cache[a])
            }, c
        }), b.define("select2/diacritics", [], function () {
            var a = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
            return a
        }), b.define("select2/data/base", ["../utils"], function (a) {
            function b(a, c) {
                b.__super__.constructor.call(this)
            }

            return a.Extend(b, a.Observable), b.prototype.current = function (a) {
                throw new Error("The `current` method must be defined in child classes.")
            }, b.prototype.query = function (a, b) {
                throw new Error("The `query` method must be defined in child classes.")
            }, b.prototype.bind = function (a, b) {
            }, b.prototype.destroy = function () {
            }, b.prototype.generateResultId = function (b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
            }, b
        }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }

            return b.Extend(d, a), d.prototype.current = function (a) {
                var b = [], d = this;
                this.$element.find(":selected").each(function () {
                    var a = c(this), e = d.item(a);
                    b.push(e)
                }), a(b)
            }, d.prototype.select = function (a) {
                var b = this;
                if (a.selected = !0, c(a.element).is("option"))return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple"))this.current(function (d) {
                    var e = [];
                    a = [a], a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;
                        -1 === c.inArray(g, e) && e.push(g)
                    }
                    b.$element.val(e), b.$element.trigger("change")
                }); else {
                    var d = a.id;
                    this.$element.val(d), this.$element.trigger("change")
                }
            }, d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple"))return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].id;
                        g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                    }
                    b.$element.val(e), b.$element.trigger("change")
                })
            }, d.prototype.bind = function (a, b) {
                var c = this;
                this.container = a, a.on("select", function (a) {
                    c.select(a.data)
                }), a.on("unselect", function (a) {
                    c.unselect(a.data)
                })
            }, d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    c.removeData(this, "data")
                })
            }, d.prototype.query = function (a, b) {
                var d = [], e = this, f = this.$element.children();
                f.each(function () {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b), g = e.matches(a, f);
                        null !== g && d.push(g)
                    }
                }), b({results: d})
            }, d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a)
            }, d.prototype.option = function (a) {
                var b;
                a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                var d = c(b), e = this._normalizeItem(a);
                return e.element = b, c.data(b, "data", e), d
            }, d.prototype.item = function (a) {
                var b = {};
                if (b = c.data(a[0], "data"), null != b)return b;
                if (a.is("option"))b = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title")
                }; else if (a.is("optgroup")) {
                    b = {text: a.prop("label"), children: [], title: a.prop("title")};
                    for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]), h = this.item(g);
                        e.push(h)
                    }
                    b.children = e
                }
                return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
            }, d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = {id: a, text: a}), a = c.extend({}, {text: ""}, a);
                var b = {selected: !1, disabled: !1};
                return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
            }, d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");
                return c(a, b)
            }, d
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
            }

            return b.Extend(d, a), d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                    return c.value == a.id.toString()
                });
                0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
            }, d.prototype.convertToOptions = function (a) {
                function d(a) {
                    return function () {
                        return c(this).val() == a.id
                    }
                }

                for (var e = this, f = this.$element.find("option"), g = f.map(function () {
                    return e.item(c(this)).id
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, l, j), n = this.option(m);
                        k.replaceWith(n)
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p)
                        }
                        h.push(o)
                    }
                }
                return h
            }, d
        }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
            }

            return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
                var b = {
                    data: function (a) {
                        return c.extend({}, a, {q: a.term})
                    }, transport: function (a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b), e.fail(d), e
                    }
                };
                return c.extend({}, b, a, !0)
            }, d.prototype.processResults = function (a) {
                return a
            }, d.prototype.query = function (a, b) {
                function d() {
                    var d = f.transport(f, function (d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                    }, function () {
                    });
                    e._request = d
                }

                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var f = c.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
            }, d
        }), b.define("select2/data/tags", ["jquery"], function (a) {
            function b(b, c, d) {
                var e = d.get("tags"), f = d.get("createTag");
                if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e))for (var g = 0; g < e.length; g++) {
                    var h = e[g], i = this._normalizeItem(h), j = this.option(i);
                    this.$element.append(j)
                }
            }

            return b.prototype.query = function (a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h], j = null != i.children && !d({results: i.children}, !0), k = i.text === b.term;
                        if (k || j)return f ? !1 : (a.data = g, void c(a))
                    }
                    if (f)return !0;
                    var l = e.createTag(b);
                    if (null != l) {
                        var m = e.option(l);
                        m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                    }
                    a.results = g, c(a)
                }

                var e = this;
                return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
            }, b.prototype.createTag = function (b, c) {
                var d = a.trim(c.term);
                return "" === d ? null : {id: d, text: d}
            }, b.prototype.insertTag = function (a, b, c) {
                b.unshift(c)
            }, b.prototype._removeOldTags = function (b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                c.each(function () {
                    this.selected || a(this).remove()
                })
            }, b
        }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
            }

            return b.prototype.bind = function (a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
            }, b.prototype.query = function (a, b, c) {
                function d(a) {
                    e.trigger("select", {data: a})
                }

                var e = this;
                b.term = b.term || "";
                var f = this.tokenizer(b, this.options, d);
                f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c)
            }, b.prototype.tokenizer = function (b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
                        return {id: a.term, text: a.term}
                    }; h < g.length;) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h), l = a.extend({}, c, {term: k}), m = i(l);
                        null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                    } else h++
                }
                return {term: g}
            }, b
        }), b.define("select2/data/minimumInputLength", [], function () {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: b.term, params: b}
                }) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumInputLength", [], function () {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: b.term, params: b}
                }) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumSelectionLength", [], function () {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                var d = this;
                this.current(function (e) {
                    var f = null != e ? e.length : 0;
                    return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: d.maximumSelectionLength}
                    }) : void a.call(d, b, c)
                })
            }, a
        }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this)
            }

            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
            }, c.prototype.bind = function () {
            }, c.prototype.position = function (a, b) {
            }, c.prototype.destroy = function () {
                this.$dropdown.remove()
            }, c
        }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
            function c() {
            }

            return c.prototype.render = function (b) {
                var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
            }, c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                }), this.$search.on("input", function (b) {
                    a(this).off("keyup")
                }), this.$search.on("keyup input", function (a) {
                    e.handleSearch(a)
                }), c.on("open", function () {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
                        e.$search.focus()
                    }, 0)
                }), c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("")
                }), c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);
                        b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {term: b})
                }
                this._keyUpPrevented = !1
            }, c.prototype.showSearch = function (a, b) {
                return !0
            }, c
        }), b.define("select2/dropdown/hidePlaceholder", [], function () {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
            }

            return a.prototype.append = function (a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b)
            }, a.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = {id: "", text: b}), b
            }, a.prototype.removePlaceholder = function (a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1)
                }
                return c
            }, a
        }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return b.prototype.append = function (a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
            }, b.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), c.on("query", function (a) {
                    e.lastParams = a, e.loading = !0
                }), c.on("query:append", function (a) {
                    e.lastParams = a, e.loading = !0
                }), this.$results.on("scroll", function () {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1), d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                        c + 50 >= d && e.loadMore()
                    }
                })
            }, b.prototype.loadMore = function () {
                this.loading = !0;
                var b = a.extend({}, {page: 1}, this.lastParams);
                b.page++, this.trigger("query:append", b)
            }, b.prototype.showLoadingMore = function (a, b) {
                return b.pagination && b.pagination.more
            }, b.prototype.createLoadingMore = function () {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)), b
            }, b
        }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
            }

            return c.prototype.bind = function (a, b, c) {
                var d = this, e = !1;
                a.call(this, b, c), b.on("open", function () {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }), b.on("results:append", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }))
                }), b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b)
                }), this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation()
                })
            }, c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove()
            }, c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = c
            }, c.prototype.render = function (b) {
                var c = a("<span></span>"), d = b.call(this);
                return c.append(d), this.$dropdownContainer = c, c
            }, c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach()
            }, c.prototype._attachPositioningHandler = function (c, d) {
                var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                    a(this).data("select2-scroll-position", {x: a(this).scrollLeft(), y: a(this).scrollTop()})
                }), i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y)
                }), a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown()
                })
            }, c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id, h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g)
            }, c.prototype._positionDropdown = function () {
                var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = (this.$container.position(), this.$container.offset());
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {height: this.$container.outerHeight(!1)};
                g.top = f.top, g.bottom = f.top + g.height;
                var h = {height: this.$dropdown.outerHeight(!1)}, i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height()
                }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = {left: f.left, top: g.bottom};
                if ("static" !== this.$dropdownParent[0].style.position) {
                    var m = this.$dropdownParent.offset();
                    l.top -= m.top, l.left -= m.left
                }
                c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
            }, c.prototype._resizeDropdown = function () {
                var a = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a)
            }, c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, c
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++
                }
                return c
            }

            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
            }

            return b.prototype.showSearch = function (b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
            }, b
        }), b.define("select2/dropdown/selectOnClose", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("close", function () {
                    d._handleSelectOnClose()
                })
            }, a.prototype._handleSelectOnClose = function () {
                var a = this.getHighlightedResults();
                if (!(a.length < 1)) {
                    var b = a.data("data");
                    null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", {data: b})
                }
            }, a
        }), b.define("select2/dropdown/closeOnSelect", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("select", function (a) {
                    d._selectTriggered(a)
                }), b.on("unselect", function (a) {
                    d._selectTriggered(a)
                })
            }, a.prototype._selectTriggered = function (a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {})
            }, a
        }), b.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "O resultado não pode ser encontrado.."
                }, inputTooLong: function (a) {
                    var b = a.input.length - a.maximum, c = "Por favor, apague" + b + " caractere";
                    return 1 != b && (c += "s"), c
                }, inputTooShort: function (a) {
                    var b = a.minimum - a.input.length, c = "Por favor insira " + b + " ou mais caracteres";
                    return c
                }, loadingMore: function () {
                    return "Carregando mais registros..."
                }, maximumSelected: function (a) {
                    var b = "Você pode selecionar apenas " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"), b
                }, noResults: function () {
                    return "Resultado não encontrado..."
                }, searching: function () {
                    return "Procurando…"
                }
            }
        }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset()
            }

            D.prototype.apply = function (l) {
                if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C)
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D)
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                    if (l.multiple)l.dropdownAdapter = u; else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                }
                if ("string" == typeof l.language)if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"), I = H[0];
                    l.language = [l.language, I]
                } else l.language = [l.language];
                if (a.isArray(l.language)) {
                    var J = new k;
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L], N = {};
                        try {
                            N = k.loadPath(M)
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        J.extend(N)
                    }
                    l.translations = J
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language);
                    R.extend(Q), l.translations = R
                }
                return l
            }, D.prototype.reset = function () {
                function b(a) {
                    function b(a) {
                        return l[a] || a
                    }

                    return a.replace(/[^\u0000-\u007E]/g, b)
                }

                function c(d, e) {
                    if ("" === a.trim(d.term))return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g], i = c(d, h);
                            null == i && f.children.splice(g, 1)
                        }
                        return f.children.length > 0 ? f : c(d, f)
                    }
                    var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase();
                    return j.indexOf(k) > -1 ? e : null
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: j.escapeMarkup,
                    language: C,
                    matcher: c,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (a) {
                        return a
                    },
                    templateResult: function (a) {
                        return a.text
                    },
                    templateSelection: function (a) {
                        return a.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, D.prototype.set = function (b, c) {
                var d = a.camelCase(b), e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f)
            };
            var E = new D;
            return E
        }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                }
            }

            return e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this
            }, e.prototype.get = function (a) {
                return this.options[a]
            }, e.prototype.set = function (a, b) {
                this.options[a] = b
            }, e
        }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
            var e = function (a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                var d = a.attr("tabindex") || 0;
                a.data("old-tabindex", d), a.attr("tabindex", "-1");
                var f = this.options.get("dataAdapter");
                this.dataAdapter = new f(a, this.options);
                var g = this.render();
                this._placeContainer(g);
                var h = this.options.get("selectionAdapter");
                this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                var i = this.options.get("dropdownAdapter");
                this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                var j = this.options.get("resultsAdapter");
                this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var k = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
                    k.trigger("selection:update", {data: a})
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = "select2-" + b
            }, e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b)
            }, e.prototype._resolveWidth = function (a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element")
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return 0 >= e ? "auto" : e + "px"
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f)return null;
                    for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""), k = j.match(c);
                        if (null !== k && k.length >= 1)return k[1]
                    }
                    return null
                }
                return b
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                    b.dataAdapter.current(function (a) {
                        b.trigger("selection:update", {data: a})
                    })
                }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function (c) {
                    a.each(c, b._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1)
            }, e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerSelectionEvents = function () {
                var b = this, c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    b.toggleDropdown()
                }), this.selection.on("focus", function (a) {
                    b.focus(a)
                }), this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e)
                })
            }, e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                    a.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    a.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus")
                }), this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", {data: c, query: b})
                    })
                }), this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                        a.trigger("results:append", {data: c, query: b})
                    })
                }), this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                })
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger, d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === b && (b = {}), a in d) {
                    var f = d[a], g = {prevented: !1, name: a, args: b};
                    if (c.call(this, f, g), g.prevented)return void(b.prevented = !0)
                }
                c.call(this, a, b)
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, e.prototype.focus = function (a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, e.prototype.enable = function (a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b)
            }, e.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function (b) {
                    a = b
                }), a
            }, e.prototype.val = function (b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length)return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function (a) {
                    return a.toString()
                })), this.$element.val(c).trigger("change")
            }, e.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, e.prototype.render = function () {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
            }, e
        }), b.define("select2/compat/utils", ["jquery"], function (a) {
            function b(b, c, d) {
                var e, f, g = [];
                e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && g.push(this)
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f))
                })), b.attr("class", g.join(" "))
            }

            return {syncCssClasses: b}
        }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null
            }

            function d() {
            }

            return d.prototype.render = function (d) {
                var e = d.call(this), f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function (a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a
                    }
                }
                var i = this.options.get("containerCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
            }, d
        }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null
            }

            function d() {
            }

            return d.prototype.render = function (d) {
                var e = d.call(this), f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function (a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a
                    }
                }
                var i = this.options.get("dropdownCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
            }, d
        }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
            }

            return b.prototype.current = function (b, c) {
                var d = this;
                return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                })
            }, b
        }), b.define("select2/compat/inputData", ["jquery"], function (a) {
            function b(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
            }

            return b.prototype.current = function (b, c) {
                function d(b, c) {
                    var e = [];
                    return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                }

                for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];
                    e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                }
                c(e)
            }, b.prototype.select = function (b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();
                    d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                } else this.current(function (b) {
                    a.map(b, function (a) {
                        a.selected = !1
                    })
                }), this.$element.val(c.id), this.$element.trigger("change")
            }, b.prototype.unselect = function (a, b) {
                var c = this;
                b.selected = !1, this.current(function (a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];
                        b.id != f.id && d.push(f.id)
                    }
                    c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                })
            }, b.prototype.query = function (a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e], g = this.matches(b, f);
                    null !== g && d.push(g)
                }
                c({results: d})
            }, b.prototype.addOptions = function (b, c) {
                var d = a.map(c, function (b) {
                    return a.data(b[0], "data")
                });
                this._currentData.push.apply(this._currentData, d)
            }, b
        }), b.define("select2/compat/matcher", ["jquery"], function (a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);
                    if (null == c.term || "" === a.trim(c.term))return e;
                    if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f], h = b(c.term, g.text, g);
                            h || e.children.splice(f, 1)
                        }
                        if (e.children.length > 0)return e
                    }
                    return b(c.term, d.text, d) ? e : null
                }

                return c
            }

            return b
        }), b.define("select2/compat/query", [], function () {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                b.callback = c;
                var d = this.options.get("query");
                d.call(null, b)
            }, a
        }), b.define("select2/dropdown/attachContainer", [], function () {
            function a(a, b, c) {
                a.call(this, b, c)
            }

            return a.prototype.position = function (a, b, c) {
                var d = c.find(".dropdown-wrapper");
                d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
            }, a
        }), b.define("select2/dropdown/stopPropagation", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);
                var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$dropdown.on(d.join(" "), function (a) {
                    a.stopPropagation()
                })
            }, a
        }), b.define("select2/selection/stopPropagation", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);
                var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$selection.on(d.join(" "), function (a) {
                    a.stopPropagation()
                })
            }, a
        }), function (c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
        }(function (a) {
            function b(b) {
                var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");
                        j *= q, m *= q, l *= q
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");
                        j *= r, m *= r, l *= r
                    }
                    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();
                        o = b.clientX - s.left, p = b.clientY - s.top
                    }
                    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                }
            }

            function c() {
                f = null
            }

            function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
            }

            var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
            if (a.event.fixHooks)for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener)for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
                    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (b) {
                    var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                }, getPageHeight: function (b) {
                    return a(b).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            a.fn.extend({
                mousewheel: function (a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                }, unmousewheel: function (a) {
                    return this.unbind("mousewheel", a)
                }
            })
        }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];
                a.fn.select2 = function (b) {
                    if (b = b || {}, "object" == typeof b)return this.each(function () {
                        var d = a.extend(!0, {}, b);
                        new c(a(this), d)
                    }), this;
                    if ("string" == typeof b) {
                        var d;
                        return this.each(function () {
                            var c = a(this).data("select2");
                            null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                            var e = Array.prototype.slice.call(arguments, 1);
                            d = c[b].apply(c, e)
                        }), a.inArray(b, e) > -1 ? this : d
                    }
                    throw new Error("Invalid arguments for Select2: " + b)
                }
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
        }), {define: b.define, require: b.require}
    }(), c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});

//tema default para select2
$.fn.select2.defaults.set("theme", "bootstrap");

/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    if ("function" == typeof define && define.amd)define(e); else if ("object" == typeof exports)module.exports = e(); else {
        var n = window.Cookies, t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = n, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)n[o] = t[o]
        }
        return n
    }

    function n(t) {
        function o(n, r, i) {
            var c;
            if (arguments.length > 1) {
                if (i = e({path: "/"}, o.defaults, i), "number" == typeof i.expires) {
                    var s = new Date;
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s
                }
                try {
                    c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                } catch (a) {
                }
                return r = t.write ? t.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", r, i.expires && "; expires=" + i.expires.toUTCString(), i.path && "; path=" + i.path, i.domain && "; domain=" + i.domain, i.secure ? "; secure" : ""].join("")
            }
            n || (c = {});
            for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                var f = p[u].split("="), l = f[0].replace(d, decodeURIComponent), m = f.slice(1).join("=");
                '"' === m.charAt(0) && (m = m.slice(1, -1));
                try {
                    if (m = t.read ? t.read(m, l) : t(m, l) || m.replace(d, decodeURIComponent), this.json)try {
                        m = JSON.parse(m)
                    } catch (a) {
                    }
                    if (n === l) {
                        c = m;
                        break
                    }
                    n || (c[l] = m)
                } catch (a) {
                }
            }
            return c
        }

        return o.get = o.set = o, o.getJSON = function () {
            return o.apply({json: !0}, [].slice.call(arguments))
        }, o.defaults = {}, o.remove = function (n, t) {
            o(n, "", e(t, {expires: -1}))
        }, o.withConverter = n, o
    }

    return n(function () {
    })
});

/*! Bootstrap Colorpicker 2.3.0 - http://mjolnic.github.io/bootstrap-colorpicker/ */
!function (a) {
    "use strict";
    "object" == typeof exports ? module.exports = a(window.jQuery) : "function" == typeof define && define.amd ? define(["jquery"], a) : window.jQuery && !window.jQuery.fn.colorpicker && a(window.jQuery)
}(function (a) {
    "use strict";
    var b = function (b, c) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, c && a.extend(this.colors, c), b && (void 0 !== b.toLowerCase ? (b += "", this.setColor(b)) : void 0 !== b.h && (this.value = b))
    };
    b.prototype = {
        constructor: b,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function (a) {
            return "number" == typeof a ? a : isNaN(a) || null === a || "" === a || void 0 === a ? 1 : void 0 !== a.toLowerCase ? parseFloat(a) : 1
        },
        isTransparent: function (a) {
            return a ? (a = a.toLowerCase().trim(), "transparent" === a || a.match(/#?00000000/) || a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)) : !1
        },
        rgbaIsTransparent: function (a) {
            return 0 === a.r && 0 === a.g && 0 === a.b && 0 === a.a
        },
        setColor: function (a) {
            a = a.toLowerCase().trim(), a && (this.isTransparent(a) ? this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.value = this.stringToHSB(a) || {h: 0, s: 0, b: 0, a: 1})
        },
        stringToHSB: function (b) {
            b = b.toLowerCase();
            var c;
            "undefined" != typeof this.colors[b] && (b = this.colors[b], c = "alias");
            var d = this, e = !1;
            return a.each(this.stringParsers, function (a, f) {
                var g = f.re.exec(b), h = g && f.parse.apply(d, [g]), i = c || f.format || "rgba";
                return h ? (e = i.match(/hsla?/) ? d.RGBtoHSB.apply(d, d.HSLtoRGB.apply(d, h)) : d.RGBtoHSB.apply(d, h), d.origFormat = i, !1) : !0
            }), e
        },
        setHue: function (a) {
            this.value.h = 1 - a
        },
        setSaturation: function (a) {
            this.value.s = a
        },
        setBrightness: function (a) {
            this.value.b = 1 - a
        },
        setAlpha: function (a) {
            this.value.a = parseInt(100 * (1 - a), 10) / 100
        },
        toRGB: function (a, b, c, d) {
            a || (a = this.value.h, b = this.value.s, c = this.value.b), a *= 360;
            var e, f, g, h, i;
            return a = a % 360 / 60, i = c * b, h = i * (1 - Math.abs(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], {
                r: Math.round(255 * e),
                g: Math.round(255 * f),
                b: Math.round(255 * g),
                a: d || this.value.a
            }
        },
        toHex: function (a, b, c, d) {
            var e = this.toRGB(a, b, c, d);
            return this.rgbaIsTransparent(e) ? "transparent" : "#" + (1 << 24 | parseInt(e.r) << 16 | parseInt(e.g) << 8 | parseInt(e.b)).toString(16).substr(1)
        },
        toHSL: function (a, b, c, d) {
            a = a || this.value.h, b = b || this.value.s, c = c || this.value.b, d = d || this.value.a;
            var e = a, f = (2 - b) * c, g = b * c;
            return g /= f > 0 && 1 >= f ? f : 2 - f, f /= 2, g > 1 && (g = 1), {
                h: isNaN(e) ? 0 : e,
                s: isNaN(g) ? 0 : g,
                l: isNaN(f) ? 0 : f,
                a: isNaN(d) ? 0 : d
            }
        },
        toAlias: function (a, b, c, d) {
            var e = this.toHex(a, b, c, d);
            for (var f in this.colors)if (this.colors[f] === e)return f;
            return !1
        },
        RGBtoHSB: function (a, b, c, d) {
            a /= 255, b /= 255, c /= 255;
            var e, f, g, h;
            return g = Math.max(a, b, c), h = g - Math.min(a, b, c), e = 0 === h ? null : g === a ? (b - c) / h : g === b ? (c - a) / h + 2 : (a - b) / h + 4, e = (e + 360) % 6 * 60 / 360, f = 0 === h ? 0 : h / g, {
                h: this._sanitizeNumber(e),
                s: f,
                b: g,
                a: this._sanitizeNumber(d)
            }
        },
        HueToRGB: function (a, b, c) {
            return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
        },
        HSLtoRGB: function (a, b, c, d) {
            0 > b && (b = 0);
            var e;
            e = .5 >= c ? c * (1 + b) : c + b - c * b;
            var f = 2 * c - e, g = a + 1 / 3, h = a, i = a - 1 / 3, j = Math.round(255 * this.HueToRGB(f, e, g)), k = Math.round(255 * this.HueToRGB(f, e, h)), l = Math.round(255 * this.HueToRGB(f, e, i));
            return [j, k, l, this._sanitizeNumber(d)]
        },
        toString: function (a) {
            a = a || "rgba";
            var b = !1;
            switch (a) {
                case"rgb":
                    return b = this.toRGB(), this.rgbaIsTransparent(b) ? "transparent" : "rgb(" + b.r + "," + b.g + "," + b.b + ")";
                case"rgba":
                    return b = this.toRGB(), "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
                case"hsl":
                    return b = this.toHSL(), "hsl(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%)";
                case"hsla":
                    return b = this.toHSL(), "hsla(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%," + b.a + ")";
                case"hex":
                    return this.toHex();
                case"alias":
                    return this.toAlias() || this.toHex();
                default:
                    return b
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function (a) {
                return [a[1], a[2], a[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function (a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function (a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function (a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function (a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function (a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, format: "hex", parse: function (a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/, format: "hex", parse: function (a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), 1]
            }
        }],
        colorNameToHex: function (a) {
            return "undefined" != typeof this.colors[a.toLowerCase()] ? this.colors[a.toLowerCase()] : !1
        }
    };
    var c = {
        horizontal: !1,
        inline: !1,
        color: !1,
        format: !1,
        input: "input",
        container: !1,
        component: ".add-on, .input-group-addon",
        sliders: {
            saturation: {maxLeft: 100, maxTop: 100, callLeft: "setSaturation", callTop: "setBrightness"},
            hue: {maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setHue"},
            alpha: {maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setAlpha"}
        },
        slidersHorz: {
            saturation: {maxLeft: 100, maxTop: 100, callLeft: "setSaturation", callTop: "setBrightness"},
            hue: {maxLeft: 100, maxTop: 0, callLeft: "setHue", callTop: !1},
            alpha: {maxLeft: 100, maxTop: 0, callLeft: "setAlpha", callTop: !1}
        },
        template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
        align: "right",
        customClass: null,
        colorSelectors: null
    }, d = function (d, e) {
        if (this.element = a(d).addClass("colorpicker-element"), this.options = a.extend(!0, {}, c, this.element.data(), e), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? a(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new b(this.options.color !== !1 ? this.options.color : this.getValue(), this.options.colorSelectors), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.picker = a(this.options.template), this.options.customClass && this.picker.addClass(this.options.customClass), this.options.inline ? this.picker.addClass("colorpicker-inline colorpicker-visible") : this.picker.addClass("colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format || this.options.format === !1) && this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), this.options.colorSelectors) {
            var f = this;
            a.each(this.options.colorSelectors, function (b, c) {
                var d = a("<i />").css("background-color", c).data("class", b);
                d.click(function () {
                    f.setValue(a(this).css("background-color"))
                }), f.picker.find(".colorpicker-selectors").append(d)
            }), this.picker.find(".colorpicker-selectors").show()
        }
        this.picker.on("mousedown.colorpicker touchstart.colorpicker", a.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : a("body")), this.input !== !1 && (this.input.on({"keyup.colorpicker": a.proxy(this.keyup, this)}), this.input.on({"change.colorpicker": a.proxy(this.change, this)}), this.component === !1 && this.element.on({"focus.colorpicker": a.proxy(this.show, this)}), this.options.inline === !1 && this.element.on({"focusout.colorpicker": a.proxy(this.hide, this)})), this.component !== !1 && this.component.on({"click.colorpicker": a.proxy(this.show, this)}), this.input === !1 && this.component === !1 && this.element.on({"click.colorpicker": a.proxy(this.show, this)}), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
            "click.colorpicker": a.proxy(this.show, this),
            "focus.colorpicker": a.proxy(this.show, this)
        }), this.update(), a(a.proxy(function () {
            this.element.trigger("create")
        }, this))
    };
    d.Color = b, d.prototype = {
        constructor: d, destroy: function () {
            this.picker.remove(), this.element.removeData("colorpicker").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({type: "destroy"})
        }, reposition: function () {
            if (this.options.inline !== !1 || this.options.container)return !1;
            var a = this.container && this.container[0] !== document.body ? "position" : "offset", b = this.component || this.element, c = b[a]();
            "right" === this.options.align && (c.left -= this.picker.outerWidth() - b.outerWidth()), this.picker.css({
                top: c.top + b.outerHeight(),
                left: c.left
            })
        }, show: function (b) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), a(window).on("resize.colorpicker", a.proxy(this.reposition, this)), !b || this.hasInput() && "color" !== this.input.attr("type") || b.stopPropagation && b.preventDefault && (b.stopPropagation(), b.preventDefault()), this.options.inline === !1 && a(window.document).on({"mousedown.colorpicker": a.proxy(this.hide, this)}), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        }, hide: function () {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), a(window).off("resize.colorpicker", this.reposition), a(document).off({"mousedown.colorpicker": this.hide}), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        }, updateData: function (a) {
            return a = a || this.color.toString(this.format), this.element.data("color", a), a
        }, updateInput: function (a) {
            if (a = a || this.color.toString(this.format), this.input !== !1) {
                if (this.options.colorSelectors) {
                    var c = new b(a, this.options.colorSelectors), d = c.toAlias();
                    "undefined" != typeof this.options.colorSelectors[d] && (a = d)
                }
                this.input.prop("value", a)
            }
            return a
        }, updatePicker: function (a) {
            void 0 !== a && (this.color = new b(a, this.options.colorSelectors));
            var c = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz, d = this.picker.find("i");
            return 0 !== d.length ? (this.options.horizontal === !1 ? (c = this.options.sliders, d.eq(1).css("top", c.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", c.alpha.maxTop * (1 - this.color.value.a))) : (c = this.options.slidersHorz, d.eq(1).css("left", c.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", c.alpha.maxLeft * (1 - this.color.value.a))), d.eq(0).css({
                top: c.saturation.maxTop - this.color.value.b * c.saturation.maxTop,
                left: this.color.value.s * c.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), a) : void 0
        }, updateComponent: function (a) {
            if (a = a || this.color.toString(this.format), this.component !== !1) {
                var b = this.component.find("i").eq(0);
                b.length > 0 ? b.css({backgroundColor: a}) : this.component.css({backgroundColor: a})
            }
            return a
        }, update: function (a) {
            var b;
            return (this.getValue(!1) !== !1 || a === !0) && (b = this.updateComponent(), this.updateInput(b), this.updateData(b), this.updatePicker()), b
        }, setValue: function (a) {
            this.color = new b(a, this.options.colorSelectors), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: a
            })
        }, getValue: function (a) {
            a = void 0 === a ? "#000000" : a;
            var b;
            return b = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === b || "" === b || null === b) && (b = a), b
        }, hasInput: function () {
            return this.input !== !1
        }, isDisabled: function () {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        }, disable: function () {
            return this.hasInput() ? (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        }, enable: function () {
            return this.hasInput() ? (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        }, currentSlider: null, mousePointer: {left: 0, top: 0}, mousedown: function (b) {
            b.pageX || b.pageY || !b.originalEvent || (b.pageX = b.originalEvent.touches[0].pageX, b.pageY = b.originalEvent.touches[0].pageY), b.stopPropagation(), b.preventDefault();
            var c = a(b.target), d = c.closest("div"), e = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!d.is(".colorpicker")) {
                if (d.is(".colorpicker-saturation"))this.currentSlider = a.extend({}, e.saturation); else if (d.is(".colorpicker-hue"))this.currentSlider = a.extend({}, e.hue); else {
                    if (!d.is(".colorpicker-alpha"))return !1;
                    this.currentSlider = a.extend({}, e.alpha)
                }
                var f = d.offset();
                this.currentSlider.guide = d.find("i")[0].style, this.currentSlider.left = b.pageX - f.left, this.currentSlider.top = b.pageY - f.top, this.mousePointer = {
                    left: b.pageX,
                    top: b.pageY
                }, a(document).on({
                    "mousemove.colorpicker": a.proxy(this.mousemove, this),
                    "touchmove.colorpicker": a.proxy(this.mousemove, this),
                    "mouseup.colorpicker": a.proxy(this.mouseup, this),
                    "touchend.colorpicker": a.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        }, mousemove: function (a) {
            a.pageX || a.pageY || !a.originalEvent || (a.pageX = a.originalEvent.touches[0].pageX, a.pageY = a.originalEvent.touches[0].pageY), a.stopPropagation(), a.preventDefault();
            var b = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((a.pageX || this.mousePointer.left) - this.mousePointer.left))), c = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((a.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = b + "px", this.currentSlider.guide.top = c + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, b / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, c / this.currentSlider.maxTop), "setAlpha" === this.currentSlider.callTop && this.options.format === !1 && (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        }, mouseup: function (b) {
            return b.stopPropagation(), b.preventDefault(), a(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        }, change: function (a) {
            this.keyup(a)
        }, keyup: function (a) {
            38 === a.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === a.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = new b(this.input.val(), this.options.colorSelectors), this.color.origFormat && this.options.format === !1 && (this.format = this.color.origFormat), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, a.colorpicker = d, a.fn.colorpicker = function (b) {
        var c, e = arguments, f = this.each(function () {
            var f = a(this), g = f.data("colorpicker"), h = "object" == typeof b ? b : {};
            g || "string" == typeof b ? "string" == typeof b && (c = g[b].apply(g, Array.prototype.slice.call(e, 1))) : f.data("colorpicker", new d(this, h))
        });
        return "getValue" === b ? c : f
    }, a.fn.colorpicker.constructor = d
});

/*
 FileInput
 */

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 4.3.2
 *
 * Arquivo input styled for Bootstrap 3.0 that utilizes HTML5 Arquivo Input's advanced features including the FileReader API.
 *
 * The plugin drastically enhances the HTML file input to preview multiple files on the client before upload. In
 * addition it provides the ability to preview content of images, text, videos, audio, html, flash and other objects.
 * It also offers the ability to upload and delete files using AJAX, and add files in batches (i.e. preview, append,
 * or remove before upload).
 *
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
}(function (e) {
    "use strict";
    e.fn.fileinputLocales = {};
    var i, t, a, r, n, l, o, s, d, c, p, u, f, v, g, m, h, w, _, b, C, x, y, T, F, E, I, $, k, P, S, D, U, A, j, z, L, O, R, N, B, M, Z, H, W, q, V, K, X, J, Q, Y, G, ee, ie, te;
    i = ".fileinput", t = window.URL || window.webkitURL, a = function (e, i, t) {
        return void 0 !== e && (t ? e === i : e.match(i))
    }, r = function (e) {
        if ("Microsoft Internet Explorer" !== navigator.appName)return !1;
        if (10 === e)return new RegExp("msie\\s" + e, "i").test(navigator.userAgent);
        var i, t = document.createElement("div");
        return t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i
    }, n = function () {
        return new RegExp("Edge/[0-9]+", "i").test(navigator.userAgent)
    }, l = function (e, t, a, r) {
        var n = r ? t : t.split(" ").join(i + " ") + i;
        e.off(n).on(n, a)
    }, o = {
        data: {}, init: function (e) {
            var i = e.initialPreview, t = e.id;
            i.length > 0 && !X(i) && (i = i.split(e.initialPreviewDelimiter)), o.data[t] = {
                content: i, config: e.initialPreviewConfig, tags: e.initialPreviewThumbTags, delimiter: e.initialPreviewDelimiter, template: e.previewGenericTemplate, msg: function (i) {
                    return e._getMsgSelected(i)
                }, initId: e.previewInitId, footer: e._getLayoutTemplate("footer").replace(/\{progress}/g, e._renderThumbProgress()), isDelete: e.initialPreviewShowDelete, caption: e.initialCaption, actions: function (i, t, a, r, n) {
                    return e._renderFileActions(i, t, a, r, n)
                }
            }
        }, fetch: function (e) {
            return o.data[e].content.filter(function (e) {
                return null !== e
            })
        }, count: function (e, i) {
            return o.data[e] && o.data[e].content ? i ? o.data[e].content.length : o.fetch(e).length : 0
        }, get: function (i, t, a) {
            var r, n, l = "init_" + t, s = o.data[i], d = s.config[t], c = s.initId + "-" + l, p = " file-preview-initial";
            return a = void 0 === a ? !0 : a, null === s.content[t] ? "" : (K(d) || K(d.frameClass) || (p += " " + d.frameClass), r = s.template.replace(/\{previewId}/g, c).replace(/\{frameClass}/g, p).replace(/\{fileindex}/g, l).replace(/\{content}/g, s.content[t]).replace(/\{footer}/g, o.footer(i, t, a)), s.tags.length && s.tags[t] && (r = ee(r, s.tags[t])), K(d) || K(d.frameAttr) || (n = e(document.createElement("div")).html(r), n.find(".file-preview-initial").attr(d.frameAttr), r = n.html(), n.remove()), r)
        }, add: function (i, t, a, r, n) {
            var l, s = e.extend(!0, {}, o.data[i]);
            return X(t) || (t = t.split(s.delimiter)), n ? (l = s.content.push(t) - 1, s.config[l] = a, s.tags[l] = r) : (l = t.length - 1, s.content = t, s.config = a, s.tags = r), o.data[i] = s, l
        }, set: function (i, t, a, r, n) {
            var l, s, d = e.extend(!0, {}, o.data[i]);
            if (t && t.length && (X(t) || (t = t.split(d.delimiter)), s = t.filter(function (e) {
                    return null !== e
                }), s.length)) {
                if (void 0 === d.content && (d.content = []), void 0 === d.config && (d.config = []), void 0 === d.tags && (d.tags = []), n) {
                    for (l = 0; l < t.length; l++)t[l] && d.content.push(t[l]);
                    for (l = 0; l < a.length; l++)a[l] && d.config.push(a[l]);
                    for (l = 0; l < r.length; l++)r[l] && d.tags.push(r[l])
                } else d.content = t, d.config = a, d.tags = r;
                o.data[i] = d
            }
        }, unset: function (e, i) {
            var t = o.count(e);
            if (t) {
                if (1 === t)return o.data[e].content = [], o.data[e].config = [], void(o.data[e].tags = []);
                o.data[e].content[i] = null, o.data[e].config[i] = null, o.data[e].tags[i] = null
            }
        }, out: function (e) {
            var i, t = "", a = o.data[e], r = o.count(e, !0);
            if (0 === r)return {content: "", caption: ""};
            for (var n = 0; r > n; n++)t += o.get(e, n);
            return i = a.msg(o.count(e)), {content: t, caption: i}
        }, footer: function (e, i, t) {
            var a = o.data[e];
            if (t = void 0 === t ? !0 : t, 0 === a.config.length || K(a.config[i]))return "";
            var r = a.config[i], n = J("caption", r) ? r.caption : "", l = J("width", r) ? r.width : "auto", s = J("url", r) ? r.url : !1, d = J("key", r) ? r.key : null, c = s === !1 && t, p = a.isDelete ? a.actions(!1, !0, c, s, d) : "", u = a.footer.replace(/\{actions}/g, p);
            return u.replace(/\{caption}/g, n).replace(/\{width}/g, l).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "")
        }
    }, s = function (e, i) {
        return i = i || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? i : e)
    }, d = function () {
        return !(!window.File || !window.FileReader)
    }, c = function () {
        var e = document.createElement("div");
        return !r(9) && !n() && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop)
    }, p = function () {
        return d() && window.FormData
    }, u = function (e, i) {
        e.removeClass(i).addClass(i)
    }, f = 'style="width:{width};height:{height};"', v = '      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n', g = '<div class="file-preview-other">\n   <span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>', m = {
        removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>',
        removeClass: "btn btn-xs btn-default",
        removeTitle: "Remove file",
        uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>',
        uploadClass: "btn btn-xs btn-default",
        uploadTitle: "Upload file",
        indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>',
        indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
        indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
        indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>',
        indicatorNewTitle: "Not uploaded yet",
        indicatorSuccessTitle: "Uploaded",
        indicatorErrorTitle: "Upload Error",
        indicatorLoadingTitle: "Uploading ..."
    }, h = '{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>', w = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', _ = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', C = '<div class="close fileinput-remove">&times;</div>\n', b = '<span class="glyphicon glyphicon-file kv-caption-icon"></span>', x = '<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n', y = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</button>', T = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</a>', F = '<div tabindex="500" class="{css}" {status}>{icon}{label}</div>', E = '<div id="{id}" class="file-preview-detail-modal modal fade" tabindex="-1">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">{heading} <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n           <pre>{body}</pre>\n      </div>\n    </div>\n  </div>\n</div>', I = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>', $ = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}</div>\n    {progress} {actions}\n</div>', k = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload}{delete}{other}    </div>\n    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>', P = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', S = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">   {uploadIcon}\n</button>\n', D = '<button type="button" class="btn btn-default btn-xs btn-block" title="{zoomTitle}: {caption}" onclick="{dialog}">\n   {zoomInd}\n</button>\n', U = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   {content}\n   {footer}\n</div>\n', A = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n    <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       ' + g + "\n    </object>\n   {footer}\n</div>", j = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" ' + f + ">\n   {footer}\n</div>\n", z = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <pre class="file-preview-text" title="{caption}" ' + f + ">{data}</pre>\n   {zoom}\n   {footer}\n</div>", L = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       ' + g + "\n   </video>\n   {footer}\n</div>\n", O = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       ' + g + "\n   </audio>\n   {footer}\n</div>", R = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <object class="file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + v + "       " + g + "\n   </object>\n   {footer}\n</div>\n", N = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       <param name="movie" value="{caption}" />\n' + v + "         " + g + "\n   </object>\n   {footer}\n</div>", B = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <div class="file-preview-other-frame">\n   ' + g + '\n   </div>\n   <div class="file-preview-other-footer">{footer}</div>\n</div>', M = {
        main1: h,
        main2: w,
        preview: _,
        close: C,
        zoom: D,
        icon: b,
        caption: x,
        modal: E,
        progress: I,
        footer: $,
        actions: k,
        actionDelete: P,
        actionUpload: S,
        btnDefault: y,
        btnLink: T,
        btnBrowse: F
    }, Z = {generic: U, html: A, image: j, text: z, video: L, audio: O, flash: R, object: N, other: B}, H = ["image", "html", "text", "video", "audio", "flash", "object"], W = {image: {width: "auto", height: "160px"}, html: {width: "213px", height: "160px"}, text: {width: "160px", height: "136px"}, video: {width: "213px", height: "160px"}, audio: {width: "213px", height: "80px"}, flash: {width: "213px", height: "160px"}, object: {width: "160px", height: "160px"}, other: {width: "160px", height: "160px"}}, V = {
        image: function (e, i) {
            return a(e, "image.*") || a(i, /\.(gif|png|jpe?g)$/i)
        }, html: function (e, i) {
            return a(e, "text/html") || a(i, /\.(htm|html)$/i)
        }, text: function (e, i) {
            return a(e, "text.*") || a(e, /\.(xml|javascript)$/i) || a(i, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)
        }, video: function (e, i) {
            return a(e, "video.*") && (a(e, /(ogg|mp4|mp?g|webm|3gp)$/i) || a(i, /\.(og?|mp4|webm|mp?g|3gp)$/i))
        }, audio: function (e, i) {
            return a(e, "audio.*") && (a(e, /(ogg|mp3|mp?g|wav)$/i) || a(i, /\.(og?|mp3|mp?g|wav)$/i))
        }, flash: function (e, i) {
            return a(e, "application/x-shockwave-flash", !0) || a(i, /\.(swf)$/i)
        }, object: function (e, i) {
            return a(e, "application/pdf", !0) || a(i, /\.(pdf)$/i)
        }, other: function () {
            return !0
        }
    }, K = function (i, t) {
        return void 0 === i || null === i || 0 === i.length || t && "" === e.trim(i)
    }, X = function (e) {
        return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e)
    }, J = function (e, i) {
        return "object" == typeof i && e in i
    }, Q = function (i, t, a) {
        return K(i) || K(i[t]) ? a : e(i[t])
    }, Y = function () {
        return Math.round((new Date).getTime() + 100 * Math.random())
    }, G = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }, ee = function (i, t) {
        var a = i;
        return t ? (e.each(t, function (e, i) {
            "function" == typeof i && (i = i()), a = a.split(e).join(i)
        }), a) : a
    }, ie = function (e) {
        var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
        t.revokeObjectURL(i)
    }, te = function (e) {
        var i = e.lastIndexOf("/");
        return -1 === i && (i = e.lastIndexOf("\\")), e.split(e.substring(i, i + 1)).pop()
    }, q = function (i, t) {
        var a = this;
        a.$element = e(i), a._validate() && (a.isPreviewable = d(), a.isIE9 = r(9), a.isIE10 = r(10), a.isPreviewable || a.isIE9 ? (a._init(t), a._listen()) : a.$element.removeClass("file-loading"))
    }, q.prototype = {
        constructor: q, _init: function (i) {
            var t, a = this, r = a.$element;
            e.each(i, function (e, i) {
                switch (e) {
                    case"minFileCount":
                    case"maxFileCount":
                    case"maxFileSize":
                        a[e] = s(i);
                        break;
                    default:
                        a[e] = i
                }
            }), K(a.allowedPreviewTypes) && (a.allowedPreviewTypes = H), a.fileInputCleared = !1, a.fileBatchCompleted = !0, a.isPreviewable || (a.showPreview = !1), a.uploadFileAttr = K(r.attr("name")) ? "file_data" : r.attr("name"), a.reader = null, a.formdata = {}, a.clearStack(), a.uploadCount = 0, a.uploadStatus = {}, a.uploadLog = [], a.uploadAsyncCount = 0, a.loadedImages = [], a.totalImagesCount = 0, a.ajaxRequests = [], a.isError = !1, a.ajaxAborted = !1, a.cancelling = !1, t = a._getLayoutTemplate("progress"), a.progressTemplate = t.replace("{class}", a.progressClass), a.progressCompleteTemplate = t.replace("{class}", a.progressCompleteClass), a.progressErrorTemplate = t.replace("{class}", a.progressErrorClass), a.dropZoneEnabled = c() && a.dropZoneEnabled, a.isDisabled = a.$element.attr("disabled") || a.$element.attr("readonly"), a.isUploadable = p() && !K(a.uploadUrl), a.slug = "function" == typeof i.slugCallback ? i.slugCallback : a._slugDefault, a.mainTemplate = a.showCaption ? a._getLayoutTemplate("main1") : a._getLayoutTemplate("main2"), a.captionTemplate = a._getLayoutTemplate("caption"), a.previewGenericTemplate = a._getPreviewTemplate("generic"), a.resizeImage && (a.maxImageWidth || a.maxImageHeight) && (a.imageCanvas = document.createElement("canvas"), a.imageCanvasContext = a.imageCanvas.getContext("2d")), K(a.$element.attr("id")) && a.$element.attr("id", Y()), void 0 === a.$container ? a.$container = a._createContainer() : a._refreshContainer(), a.$dropZone = a.$container.find(".file-drop-zone"), a.$progress = a.$container.find(".kv-upload-progress"), a.$btnUpload = a.$container.find(".fileinput-upload"), a.$captionContainer = Q(i, "elCaptionContainer", a.$container.find(".file-caption")), a.$caption = Q(i, "elCaptionText", a.$container.find(".file-caption-name")), a.$previewContainer = Q(i, "elPreviewContainer", a.$container.find(".file-preview")), a.$preview = Q(i, "elPreviewImage", a.$container.find(".file-preview-thumbnails")), a.$previewStatus = Q(i, "elPreviewStatus", a.$container.find(".file-preview-status")), a.$errorContainer = Q(i, "elErrorContainer", a.$previewContainer.find(".kv-fileinput-error")), K(a.msgErrorClass) || u(a.$errorContainer, a.msgErrorClass), a.$errorContainer.hide(), a.fileActionSettings = e.extend(!0, m, i.fileActionSettings), a.previewInitId = "preview-" + Y(), a.id = a.$element.attr("id"), o.init(a), a._initPreview(!0), a._initPreviewDeletes(), a.options = i, a._setFileDropZoneTitle(), a.$element.removeClass("file-loading"), a.$element.attr("disabled") && a.disable()
        }, _validate: function () {
            var e, i = this;
            return "file" === i.$element.attr("type") ? !0 : (e = '<div class="help-block alert alert-warning"><h4>Invalid Input Type</h4>You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.</div>', i.$element.after(e), !1)
        }, _errorsExist: function () {
            var i, t = this;
            return t.$errorContainer.find("li").length ? !0 : (i = e(document.createElement("div")).html(t.$errorContainer.html()), i.find("span.kv-error-close").remove(), i.find("ul").remove(), !!e.trim(i.text()).length)
        }, _errorHandler: function (e, i) {
            var t = this, a = e.target.error;
            a.code === a.NOT_FOUND_ERR ? t._showError(t.msgFileNotFound.replace("{name}", i)) : a.code === a.SECURITY_ERR ? t._showError(t.msgFileSecured.replace("{name}", i)) : a.code === a.NOT_READABLE_ERR ? t._showError(t.msgFileNotReadable.replace("{name}", i)) : a.code === a.ABORT_ERR ? t._showError(t.msgFilePreviewAborted.replace("{name}", i)) : t._showError(t.msgFilePreviewError.replace("{name}", i))
        }, _addError: function (e) {
            var i = this, t = i.$errorContainer;
            e && t.length && (t.html(i.errorCloseButton + e), l(t.find(".kv-error-close"), "click", function () {
                t.fadeOut("slow")
            }))
        }, _resetErrors: function (e) {
            var i = this, t = i.$errorContainer;
            i.isError = !1, i.$container.removeClass("has-error"), t.html(""), e ? t.fadeOut("slow") : t.hide()
        }, _showFolderError: function (e) {
            var i, t = this, a = t.$errorContainer;
            e && (i = t.msgFoldersNotAllowed.replace(/\{n}/g, e), t._addError(i), u(t.$container, "has-error"), a.fadeIn(800), t._raise("filefoldererror", [e, i]))
        }, _showUploadError: function (e, i, t) {
            var a = this, r = a.$errorContainer, n = t || "fileuploaderror", l = i && i.id ? '<li data-file-id="' + i.id + '">' + e + "</li>" : "<li>" + e + "</li>";
            return 0 === r.find("ul").length ? a._addError("<ul>" + l + "</ul>") : r.find("ul").append(l), r.fadeIn(800), a._raise(n, [i, e]), a.$container.removeClass("file-input-new"), u(a.$container, "has-error"), !0
        }, _showError: function (e, i, t) {
            var a = this, r = a.$errorContainer, n = t || "fileerror";
            return i = i || {}, i.reader = a.reader, a._addError(e), r.fadeIn(800), a._raise(n, [i, e]), a.isUploadable || a._clearFileInput(), a.$container.removeClass("file-input-new"), u(a.$container, "has-error"), a.$btnUpload.attr("disabled", !0), !0
        }, _noFilesError: function (e) {
            var i = this, t = i.minFileCount > 1 ? i.filePlural : i.fileSingle, a = i.msgFilesTooLess.replace("{n}", i.minFileCount).replace("{files}", t), r = i.$errorContainer;
            i._addError(a), i.isError = !0, i._updateFileDetails(0), r.fadeIn(800), i._raise("fileerror", [e, a]), i._clearFileInput(), u(i.$container, "has-error")
        }, _parseError: function (i, t, a) {
            var r = this, n = e.trim(t + ""), l = "." === n.slice(-1) ? "" : ".", o = void 0 !== i.responseJSON && void 0 !== i.responseJSON.error ? i.responseJSON.error : i.responseText;
            return r.cancelling && r.msgUploadAborted && (n = r.msgUploadAborted), r.showAjaxErrorDetails && o ? (o = e.trim(o.replace(/\n\s*\n/g, "\n")), o = o.length > 0 ? "<pre>" + o + "</pre>" : "", n += l + o) : n += l, r.cancelling = !1, a ? "<b>" + a + ": </b>" + n : n
        }, _parseFileType: function (e) {
            var i, t, a, r, n = this;
            for (r = 0; r < H.length; r += 1)if (a = H[r], i = J(a, n.fileTypeSettings) ? n.fileTypeSettings[a] : V[a], t = i(e.type, e.name) ? a : "", !K(t))return t;
            return "other"
        }, _parseFilePreviewIcon: function (i, t) {
            var a, r = this, n = r.previewFileIcon;
            return t && t.indexOf(".") > -1 && (a = t.split(".").pop(), r.previewFileIconSettings && r.previewFileIconSettings[a] && (n = r.previewFileIconSettings[a]), r.previewFileExtSettings && e.each(r.previewFileExtSettings, function (e, i) {
                r.previewFileIconSettings[e] && i(a) && (n = r.previewFileIconSettings[e])
            })), i.indexOf("{previewFileIcon}") > -1 ? i.replace(/\{previewFileIconClass}/g, r.previewFileIconClass).replace(/\{previewFileIcon}/g, n) : i
        }, _raise: function (i, t) {
            var a = this, r = e.Event(i);
            if (void 0 !== t ? a.$element.trigger(r, t) : a.$element.trigger(r), r.isDefaultPrevented())return !1;
            if (!r.result)return r.result;
            switch (i) {
                case"filebatchuploadcomplete":
                case"filebatchuploadsuccess":
                case"fileuploaded":
                case"fileclear":
                case"filecleared":
                case"filereset":
                case"fileerror":
                case"filefoldererror":
                case"fileuploaderror":
                case"filebatchuploaderror":
                case"filedeleteerror":
                case"filecustomerror":
                case"filesuccessremove":
                    break;
                default:
                    a.ajaxAborted = r.result
            }
            return !0
        }, _listen: function () {
            var i = this, t = i.$element, a = t.closest("form"), r = i.$container;
            l(t, "change", e.proxy(i._change, i)), l(i.$btnFile, "click", e.proxy(i._browse, i)), l(a, "reset", e.proxy(i.reset, i)), l(r.find(".fileinput-remove:not([disabled])"), "click", e.proxy(i.clear, i)), l(r.find(".fileinput-cancel"), "click", e.proxy(i.cancel, i)), i._initDragDrop(), i.isUploadable || l(a, "submit", e.proxy(i._submitForm, i)), l(i.$container.find(".fileinput-upload"), "click", e.proxy(i._uploadClick, i))
        }, _initDragDrop: function () {
            var i = this, t = i.$dropZone;
            i.isUploadable && i.dropZoneEnabled && i.showPreview && (l(t, "dragenter dragover", e.proxy(i._zoneDragEnter, i)), l(t, "dragleave", e.proxy(i._zoneDragLeave, i)), l(t, "drop", e.proxy(i._zoneDrop, i)), l(e(document), "dragenter dragover drop", i._zoneDragDropInit))
        }, _zoneDragDropInit: function (e) {
            e.stopPropagation(), e.preventDefault()
        }, _zoneDragEnter: function (i) {
            var t = this, a = e.inArray("Files", i.originalEvent.dataTransfer.types) > -1;
            return t._zoneDragDropInit(i), t.isDisabled || !a ? (i.originalEvent.dataTransfer.effectAllowed = "none", void(i.originalEvent.dataTransfer.dropEffect = "none")) : void u(t.$dropZone, "file-highlighted")
        }, _zoneDragLeave: function (e) {
            var i = this;
            i._zoneDragDropInit(e), i.isDisabled || i.$dropZone.removeClass("file-highlighted")
        }, _zoneDrop: function (e) {
            var i = this;
            e.preventDefault(), i.isDisabled || K(e.originalEvent.dataTransfer.files) || (i._change(e, "dragdrop"), i.$dropZone.removeClass("file-highlighted"))
        }, _uploadClick: function (e) {
            var i, t = this, a = t.$container.find(".fileinput-upload"), r = !a.hasClass("disabled") && K(a.attr("disabled"));
            if (!e || !e.isDefaultPrevented()) {
                if (!t.isUploadable)return void(r && "submit" !== a.attr("type") && (i = a.closest("form"), i.length && i.trigger("submit"), e.preventDefault()));
                e.preventDefault(), r && t.upload()
            }
        }, _submitForm: function () {
            var e = this, i = e.$element, t = i.get(0).files;
            return t && e.minFileCount > 0 && e._getFileCount(t.length) < e.minFileCount ? (e._noFilesError({}), !1) : !e._abort({})
        }, _clearPreview: function () {
            var e = this, i = e.showUploadedThumbs ? e.$preview.find(".file-preview-frame:not(.file-preview-success)") : e.$preview.find(".file-preview-frame");
            i.remove(), e.$preview.find(".file-preview-frame").length && e.showPreview || e._resetUpload(), e._validateDefaultPreview()
        }, _initPreview: function (e) {
            var i, t = this, a = t.initialCaption || "";
            return o.count(t.id) ? (i = o.out(t.id), a = e && t.initialCaption ? t.initialCaption : i.caption, t.$preview.html(i.content), t._setCaption(a), void(K(i.content) || t.$container.removeClass("file-input-new"))) : (t._clearPreview(), void(e ? t._setCaption(a) : t._initCaption()))
        }, _initPreviewDeletes: function () {
            var i = this, t = i.deleteExtraData || {}, a = function () {
                var e = i.isUploadable ? o.count(i.id) : i.$element.get(0).files.length;
                0 !== i.$preview.find(".kv-file-remove").length || e || (i.reset(), i.initialCaption = "")
            };
            i.$preview.find(".kv-file-remove").each(function () {
                var r = e(this), n = r.data("url") || i.deleteUrl, s = r.data("key");
                if (!K(n) && void 0 !== s) {
                    var d, c, p, f, v = r.closest(".file-preview-frame"), g = o.data[i.id], m = v.data("fileindex");
                    m = parseInt(m.replace("init_", "")), p = K(g.config) && K(g.config[m]) ? null : g.config[m], f = K(p) || K(p.extra) ? t : p.extra, "function" == typeof f && (f = f()), c = {id: r.attr("id"), key: s, extra: f}, d = e.extend(!0, {}, {
                        url: n, type: "POST", dataType: "json", data: e.extend(!0, {}, {key: s}, f), beforeSend: function (e) {
                            i.ajaxAborted = !1, i._raise("filepredelete", [s, e, f]), i.ajaxAborted ? e.abort() : (u(v, "file-uploading"), u(r, "disabled"))
                        }, success: function (e, t, n) {
                            var l, d;
                            return K(e) || K(e.error) ? (o.unset(i.id, m), l = o.count(i.id), d = l > 0 ? i._getMsgSelected(l) : "", i._raise("filedeleted", [s, n, f]), i._setCaption(d), v.removeClass("file-uploading").addClass("file-deleted"), void v.fadeOut("slow", function () {
                                i._clearObjects(v), v.remove(), a(), l || 0 !== i.getFileStack().length || (i._setCaption(""), i.reset())
                            })) : (c.jqXHR = n, c.response = e, i._showError(e.error, c, "filedeleteerror"), v.removeClass("file-uploading"), r.removeClass("disabled"), void a())
                        }, error: function (e, t, r) {
                            var n = i._parseError(e, r);
                            c.jqXHR = e, c.response = {}, i._showError(n, c, "filedeleteerror"), v.removeClass("file-uploading"), a()
                        }
                    }, i.ajaxDeleteSettings), l(r, "click", function () {
                        return i._validateMinCount() ? void e.ajax(d) : !1
                    })
                }
            })
        }, _clearObjects: function (i) {
            i.find("video audio").each(function () {
                this.pause(), e(this).remove()
            }), i.find("img object div").each(function () {
                e(this).remove()
            })
        }, _clearFileInput: function () {
            var i, t, a, r = this, n = r.$element;
            K(n.val()) || (r.isIE9 || r.isIE10 ? (i = n.closest("form"), t = e(document.createElement("form")), a = e(document.createElement("div")), n.before(a), i.length ? i.after(t) : a.after(t), t.append(n).trigger("reset"), a.before(n).remove(), t.remove()) : n.val(""), r.fileInputCleared = !0)
        }, _resetUpload: function () {
            var e = this;
            e.uploadCache = {content: [], config: [], tags: [], append: !0}, e.uploadCount = 0, e.uploadStatus = {}, e.uploadLog = [], e.uploadAsyncCount = 0, e.loadedImages = [], e.totalImagesCount = 0, e.$btnUpload.removeAttr("disabled"), e._setProgress(0), u(e.$progress, "hide"), e._resetErrors(!1), e.ajaxAborted = !1, e.ajaxRequests = [], e._resetCanvas()
        }, _resetCanvas: function () {
            var e = this;
            e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height)
        }, _hasInitialPreview: function () {
            var e = this;
            return !e.overwriteInitial && o.count(e.id)
        }, _resetPreview: function () {
            var e, i, t = this;
            o.count(t.id) ? (e = o.out(t.id), t.$preview.html(e.content), i = t.initialCaption ? t.initialCaption : e.caption, t._setCaption(i)) : (t._clearPreview(), t._initCaption())
        }, _clearDefaultPreview: function () {
            var e = this;
            e.$preview.find(".file-default-preview").remove()
        }, _validateDefaultPreview: function () {
            var e = this;
            e.showPreview && !K(e.defaultPreviewContent) && (e.$preview.html('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"))
        }, _resetPreviewThumbs: function (e) {
            var i, t = this;
            return e ? (t._clearPreview(), void t.clearStack()) : void(t._hasInitialPreview() ? (i = o.out(t.id), t.$preview.html(i.content), t._setCaption(i.caption), t._initPreviewDeletes()) : t._clearPreview())
        }, _getLayoutTemplate: function (e) {
            var i = this, t = J(e, i.layoutTemplates) ? i.layoutTemplates[e] : M[e];
            return K(i.customLayoutTags) ? t : ee(t, i.customLayoutTags)
        }, _getPreviewTemplate: function (e) {
            var i = this, t = J(e, i.previewTemplates) ? i.previewTemplates[e] : Z[e];
            return K(i.customPreviewTags) ? t : ee(t, i.customPreviewTags)
        }, _getOutData: function (e, i, t) {
            var a = this;
            return e = e || {}, i = i || {}, t = t || a.filestack.slice(0) || {}, {form: a.formdata, files: t, filenames: a.filenames, extra: a._getExtraData(), response: i, reader: a.reader, jqXHR: e}
        }, _getMsgSelected: function (e) {
            var i = this, t = 1 === e ? i.fileSingle : i.filePlural;
            return i.msgSelected.replace("{n}", e).replace("{files}", t)
        }, _getThumbs: function (e) {
            return e = e || "", this.$preview.find(".file-preview-frame:not(.file-preview-initial)" + e)
        }, _getExtraData: function (e, i) {
            var t = this, a = t.uploadExtraData;
            return "function" == typeof t.uploadExtraData && (a = t.uploadExtraData(e, i)), a
        }, _initXhr: function (e, i, t) {
            var a = this;
            return e.upload && e.upload.addEventListener("progress", function (e) {
                var r = 0, n = e.loaded || e.position, l = e.total;
                e.lengthComputable && (r = Math.ceil(n / l * 100)), i ? a._setAsyncUploadStatus(i, r, t) : a._setProgress(Math.ceil(r))
            }, !1), e
        }, _ajaxSubmit: function (i, t, a, r, n, l) {
            var o, s = this;
            s._raise("filepreajax", [n, l]), s._uploadExtra(n, l), o = e.extend(!0, {}, {
                xhr: function () {
                    var i = e.ajaxSettings.xhr();
                    return s._initXhr(i, n, s.getFileStack().length)
                }, url: s.uploadUrl, type: "POST", dataType: "json", data: s.formdata, cache: !1, processData: !1, contentType: !1, beforeSend: i, success: t, complete: a, error: r
            }, s.ajaxSettings), s.ajaxRequests.push(e.ajax(o))
        }, _initUploadSuccess: function (i, t, a) {
            var r, n, l, s, d, c, p, u, f = this;
            f.showPreview && "object" == typeof i && !e.isEmptyObject(i) && void 0 !== i.initialPreview && i.initialPreview.length > 0 && (f.hasInitData = !0, d = i.initialPreview || [], c = i.initialPreviewConfig || [], p = i.initialPreviewThumbTags || [], r = !(void 0 !== i.append && !i.append), f.overwriteInitial = !1, void 0 !== t ? a ? (u = t.attr("data-fileindex"), f.uploadCache.content[u] = d[0], f.uploadCache.config[u] = c[0], f.uploadCache.tags[u] = p[0], f.uploadCache.append = r) : (l = o.add(f.id, d, c[0], p[0], r), n = o.get(f.id, l, !1), s = e(n).hide(), t.after(s).fadeOut("slow", function () {
                s.fadeIn("slow").css("display:inline-block"), f._initPreviewDeletes(), f._clearFileInput(), t.remove()
            })) : (o.set(f.id, d, c, p, r), f._initPreview(), f._initPreviewDeletes()))
        }, _initSuccessThumbs: function () {
            var i = this;
            i.showPreview && i._getThumbs(".file-preview-success").each(function () {
                var t = e(this), a = t.find(".kv-file-remove");
                a.removeAttr("disabled"), l(a, "click", function () {
                    var e = i._raise("filesuccessremove", [t.attr("id"), t.data("fileindex")]);
                    ie(t), e !== !1 && t.fadeOut("slow", function () {
                        t.remove(), i.$preview.find(".file-preview-frame").length || i.reset()
                    })
                })
            })
        }, _checkAsyncComplete: function () {
            var i, t, a = this;
            for (t = 0; t < a.filestack.length; t++)if (a.filestack[t] && (i = a.previewInitId + "-" + t, -1 === e.inArray(i, a.uploadLog)))return !1;
            return a.uploadAsyncCount === a.uploadLog.length
        }, _uploadExtra: function (i, t) {
            var a = this, r = a._getExtraData(i, t);
            0 !== r.length && e.each(r, function (e, i) {
                a.formdata.append(e, i)
            })
        }, _uploadSingle: function (i, t, a) {
            var r, n, l, s, d, c, p, f, v, g, m = this, h = m.getFileStack().length, w = new FormData, _ = m.previewInitId + "-" + i, b = m.filestack.length > 0 || !e.isEmptyObject(m.uploadExtraData), C = {id: _, index: i};
            m.formdata = w, m.showPreview && (n = e("#" + _ + ":not(.file-preview-initial)"), s = n.find(".kv-file-upload"), d = n.find(".kv-file-remove"), e("#" + _).find(".file-thumb-progress").removeClass("hide")), 0 === h || !b || s && s.hasClass("disabled") || m._abort(C) || (g = function (e, i) {
                m.updateStack(e, void 0), m.uploadLog.push(i), m._checkAsyncComplete() && (m.fileBatchCompleted = !0)
            }, l = function () {
                m.fileBatchCompleted && setTimeout(function () {
                    m.showPreview && (o.set(m.id, m.uploadCache.content, m.uploadCache.config, m.uploadCache.tags, m.uploadCache.append), m.hasInitData && (m._initPreview(), m._initPreviewDeletes())), m.unlock(), m._clearFileInput(), m._raise("filebatchuploadcomplete", [m.filestack, m._getExtraData()]), m.uploadCount = 0, m.uploadStatus = {}, m.uploadLog = [], m._setProgress(100)
                }, 100)
            }, c = function (t) {
                r = m._getOutData(t), m.fileBatchCompleted = !1, m.showPreview && (n.hasClass("file-preview-success") || (m._setThumbStatus(n, "Loading"), u(n, "file-uploading")), s.attr("disabled", !0), d.attr("disabled", !0)), a || m.lock(), m._raise("filepreupload", [r, _, i]), e.extend(!0, C, r), m._abort(C) && (t.abort(), m._setProgressCancelled())
            }, p = function (t, l, o) {
                r = m._getOutData(o, t), e.extend(!0, C, r), setTimeout(function () {
                    K(t) || K(t.error) ? (m.showPreview && (m._setThumbStatus(n, "Success"), s.hide(), m._initUploadSuccess(t, n, a)), m._raise("fileuploaded", [r, _, i]), a ? g(i, _) : m.updateStack(i, void 0)) : (m._showUploadError(t.error, C), m._setPreviewError(n, i), a && g(i, _))
                }, 100)
            }, f = function () {
                setTimeout(function () {
                    m.showPreview && (s.removeAttr("disabled"), d.removeAttr("disabled"), n.removeClass("file-uploading")), a ? l() : (m.unlock(!1), m._clearFileInput()), m._initSuccessThumbs()
                }, 100)
            }, v = function (r, l, o) {
                var s = m._parseError(r, o, a ? t[i].name : null);
                setTimeout(function () {
                    a && g(i, _), m.uploadStatus[_] = 100, m._setPreviewError(n, i), e.extend(!0, C, m._getOutData(r)), m._showUploadError(s, C)
                }, 100)
            }, w.append(m.uploadFileAttr, t[i], m.filenames[i]), w.append("file_id", i), m._ajaxSubmit(c, p, f, v, _, i))
        }, _uploadBatch: function () {
            var i, t, a, r, n, l = this, o = l.filestack, s = o.length, d = {}, c = l.filestack.length > 0 || !e.isEmptyObject(l.uploadExtraData);
            l.formdata = new FormData, 0 !== s && c && !l._abort(d) && (n = function () {
                e.each(o, function (e) {
                    l.updateStack(e, void 0)
                }), l._clearFileInput()
            }, i = function (i) {
                l.lock();
                var t = l._getOutData(i);
                l.showPreview && l._getThumbs().each(function () {
                    var i = e(this), t = i.find(".kv-file-upload"), a = i.find(".kv-file-remove");
                    i.hasClass("file-preview-success") || (l._setThumbStatus(i, "Loading"), u(i, "file-uploading")), t.attr("disabled", !0), a.attr("disabled", !0)
                }), l._raise("filebatchpreupload", [t]), l._abort(t) && (i.abort(), l._setProgressCancelled())
            }, t = function (i, t, a) {
                var r = l._getOutData(a, i), o = l._getThumbs(), s = 0, d = K(i) || K(i.errorkeys) ? [] : i.errorkeys;
                K(i) || K(i.error) ? (l._raise("filebatchuploadsuccess", [r]), n(), l.showPreview ? (o.each(function () {
                    var i = e(this), t = i.find(".kv-file-upload");
                    i.find(".kv-file-upload").hide(), l._setThumbStatus(i, "Success"), i.removeClass("file-uploading"), t.removeAttr("disabled")
                }), l._initUploadSuccess(i)) : l.reset()) : (l.showPreview && (o.each(function () {
                    var i = e(this), t = i.find(".kv-file-remove"), a = i.find(".kv-file-upload");
                    return i.removeClass("file-uploading"), a.removeAttr("disabled"), t.removeAttr("disabled"), 0 === d.length ? void l._setPreviewError(i) : (-1 !== e.inArray(s, d) ? l._setPreviewError(i) : (i.find(".kv-file-upload").hide(), l._setThumbStatus(i, "Success"), l.updateStack(s, void 0)), void s++)
                }), l._initUploadSuccess(i)), l._showUploadError(i.error, r, "filebatchuploaderror"))
            }, r = function () {
                l._setProgress(100), l.unlock(), l._initSuccessThumbs(), l._clearFileInput(), l._raise("filebatchuploadcomplete", [l.filestack, l._getExtraData()])
            }, a = function (i, t, a) {
                var r = l._getOutData(i), n = l._parseError(i, a);
                l._showUploadError(n, r, "filebatchuploaderror"), l.uploadFileCount = s - 1, l.showPreview && (l._getThumbs().each(function () {
                    var i = e(this), t = i.attr("data-fileindex");
                    i.removeClass("file-uploading"), void 0 !== l.filestack[t] && l._setPreviewError(i)
                }), l._getThumbs().removeClass("file-uploading"), l._getThumbs(" .kv-file-upload").removeAttr("disabled"), l._getThumbs(" .kv-file-delete").removeAttr("disabled"))
            }, e.each(o, function (e, i) {
                K(o[e]) || l.formdata.append(l.uploadFileAttr, i, l.filenames[e]);
            }), l._ajaxSubmit(i, t, r, a))
        }, _uploadExtraOnly: function () {
            var e, i, t, a, r = this, n = {};
            r.formdata = new FormData, r._abort(n) || (e = function (e) {
                r.lock();
                var i = r._getOutData(e);
                r._raise("filebatchpreupload", [i]), r._setProgress(50), n.data = i, n.xhr = e, r._abort(n) && (e.abort(), r._setProgressCancelled())
            }, i = function (e, i, t) {
                var a = r._getOutData(t, e);
                K(e) || K(e.error) ? (r._raise("filebatchuploadsuccess", [a]), r._clearFileInput(), r._initUploadSuccess(e)) : r._showUploadError(e.error, a, "filebatchuploaderror")
            }, t = function () {
                r._setProgress(100), r.unlock(), r._clearFileInput(), r._raise("filebatchuploadcomplete", [r.filestack, r._getExtraData()])
            }, a = function (e, i, t) {
                var a = r._getOutData(e), l = r._parseError(e, t);
                n.data = a, r._showUploadError(l, a, "filebatchuploaderror")
            }, r._ajaxSubmit(e, i, t, a))
        }, _initFileActions: function () {
            var i = this;
            i.showPreview && (i.$preview.find(".kv-file-remove").each(function () {
                var t, a, r, n, s = e(this), d = s.closest(".file-preview-frame"), c = d.attr("id"), p = d.attr("data-fileindex");
                l(s, "click", function () {
                    return n = i._raise("filepreremove", [c, p]), n !== !1 && i._validateMinCount() ? (t = d.hasClass("file-preview-error"), ie(d), void d.fadeOut("slow", function () {
                        i.updateStack(p, void 0), i._clearObjects(d), d.remove(), c && t && i.$errorContainer.find('li[data-file-id="' + c + '"]').fadeOut("fast", function () {
                            e(this).remove(), i._errorsExist() || i._resetErrors()
                        });
                        var n = i.getFileStack(!0), l = n.length, s = o.count(i.id), u = i.showPreview && i.$preview.find(".file-preview-frame").length;
                        i._clearFileInput(), 0 !== l || 0 !== s || u ? (a = s + l, r = a > 1 ? i._getMsgSelected(a) : n[0] ? i._getFileNames()[0] : "", i._setCaption(r)) : i.reset(), i._raise("fileremoved", [c, p])
                    })) : !1
                })
            }), i.$preview.find(".kv-file-upload").each(function () {
                var t = e(this);
                l(t, "click", function () {
                    var e = t.closest(".file-preview-frame"), a = e.attr("data-fileindex");
                    e.hasClass("file-preview-error") || i._uploadSingle(a, i.filestack, !1)
                })
            }))
        }, _hideFileIcon: function () {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide()
        }, _showFileIcon: function () {
            this.$captionContainer.find(".kv-caption-icon").show()
        }, _previewDefault: function (i, a, r) {
            if (this.showPreview) {
                var n = this, l = "", o = i ? i.name : "", s = t.createObjectURL(i), d = a.slice(a.lastIndexOf("-") + 1), c = n.previewSettings.other || W.other, p = n._renderFileFooter(i.name, c.width), u = n._parseFilePreviewIcon(n._getPreviewTemplate("other"), o);
                r === !0 && (n.isUploadable || (p += '<div class="file-other-error" title="' + n.fileActionSettings.indicatorErrorTitle + '">' + n.fileActionSettings.indicatorError + "</div>")), n._clearDefaultPreview(), n.$preview.append("\n" + u.replace(/\{previewId}/g, a).replace(/\{frameClass}/g, l).replace(/\{fileindex}/g, d).replace(/\{caption}/g, n.slug(i.name)).replace(/\{width}/g, c.width).replace(/\{height}/g, c.height).replace(/\{type}/g, i.type).replace(/\{data}/g, s).replace(/\{footer}/g, p)), r === !0 && n.isUploadable && n._setThumbStatus(e("#" + a), "Error")
            }
        }, _previewFile: function (e, i, t, a, r) {
            if (this.showPreview) {
                var n, l, o, s = this, d = s._parseFileType(i), c = i ? i.name : "", p = s.slug(c), u = s.allowedPreviewTypes, f = s.allowedPreviewMimeTypes, v = s._getPreviewTemplate(d), g = u && u.indexOf(d) >= 0, m = J(d, s.previewSettings) ? s.previewSettings[d] : W[d], h = f && -1 !== f.indexOf(i.type), w = s._renderFileFooter(p, m.width), _ = "", b = a.slice(a.lastIndexOf("-") + 1);
                g || h ? (v = s._parseFilePreviewIcon(v, c.split(".").pop()), "text" === d ? (l = G(t.target.result), o = "text-" + Y(), n = v.replace(/\{zoom}/g, s._getLayoutTemplate("zoom")), _ = s._getLayoutTemplate("modal").replace("{id}", o).replace(/\{title}/g, p).replace(/\{body}/g, l).replace(/\{heading}/g, s.msgZoomModalHeading), n = n.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{frameClass}/g, "").replace(/\{zoomInd}/g, s.zoomIndicator).replace(/\{footer}/g, w).replace(/\{fileindex}/g, b).replace(/\{type}/g, i.type).replace(/\{zoomTitle}/g, s.msgZoomTitle).replace(/\{dialog}/g, "$('#" + o + "').modal('show')").replace(/\{data}/g, l) + _) : n = v.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{frameClass}/g, "").replace(/\{type}/g, i.type).replace(/\{fileindex}/g, b).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{footer}/g, w).replace(/\{data}/g, r), s._clearDefaultPreview(), s.$preview.append("\n" + n), s._validateImage(e, a, p, i.type)) : s._previewDefault(i, a)
            }
        }, _slugDefault: function (e) {
            return K(e) ? "" : String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_")
        }, _readFiles: function (i) {
            this.reader = new FileReader;
            var r, n = this, l = n.$element, o = n.$preview, s = n.reader, d = n.$previewContainer, c = n.$previewStatus, p = n.msgLoading, u = n.msgProgress, f = n.previewInitId, v = i.length, g = n.fileTypeSettings, m = n.filestack.length, h = n.maxFilePreviewSize && parseFloat(n.maxFilePreviewSize), w = o.length && (!h || isNaN(h)), _ = function (t, a, l, o) {
                var s = e.extend(!0, {}, n._getOutData({}, {}, i), {id: l, index: o}), d = {id: l, index: o, file: a, files: i};
                return n._previewDefault(a, l, !0), n.isUploadable && n.addToStack(void 0), setTimeout(r(o + 1), 100), n._initFileActions(), n.removeFromPreviewOnError && e("#" + l).remove(), n.isUploadable ? n._showUploadError(t, s) : n._showError(t, d)
            };
            n.loadedImages = [], n.totalImagesCount = 0, e.each(i, function (e, i) {
                var t = n.fileTypeSettings.image || V.image;
                t && t(i.type) && n.totalImagesCount++
            }), r = function (e) {
                if (K(l.attr("multiple")) && (v = 1), e >= v)return n.isUploadable && n.filestack.length > 0 ? n._raise("filebatchselected", [n.getFileStack()]) : n._raise("filebatchselected", [i]), d.removeClass("file-thumb-loading"), void c.html("");
                var b, C, x, y, T, F, E = m + e, I = f + "-" + E, $ = i[e], k = n.slug($.name), P = ($.size || 0) / 1e3, S = "", D = t.createObjectURL($), U = 0, A = n.allowedFileTypes, j = K(A) ? "" : A.join(", "), z = n.allowedFileExtensions, L = K(z) ? "" : z.join(", ");
                if (K(z) || (S = new RegExp("\\.(" + z.join("|") + ")$", "i")), P = P.toFixed(2), n.maxFileSize > 0 && P > n.maxFileSize)return y = n.msgSizeTooLarge.replace("{name}", k).replace("{size}", P).replace("{maxSize}", n.maxFileSize), void(n.isError = _(y, $, I, e));
                if (!K(A) && X(A)) {
                    for (x = 0; x < A.length; x += 1)T = A[x], C = g[T], F = void 0 !== C && C($.type, k), U += K(F) ? 0 : F.length;
                    if (0 === U)return y = n.msgInvalidFileType.replace("{name}", k).replace("{types}", j), void(n.isError = _(y, $, I, e))
                }
                return 0 !== U || K(z) || !X(z) || K(S) || (F = a(k, S), U += K(F) ? 0 : F.length, 0 !== U) ? n.showPreview ? !w && P > h ? (d.addClass("file-thumb-loading"), n._previewDefault($, I), n._initFileActions(), n._updateFileDetails(v), void r(e + 1)) : (o.length && void 0 !== FileReader ? (c.html(p.replace("{index}", e + 1).replace("{files}", v)), d.addClass("file-thumb-loading"), s.onerror = function (e) {
                    n._errorHandler(e, k)
                }, s.onload = function (i) {
                    n._previewFile(e, $, i, I, D), n._initFileActions()
                }, s.onloadend = function () {
                    y = u.replace("{index}", e + 1).replace("{files}", v).replace("{percent}", 50).replace("{name}", k), setTimeout(function () {
                        c.html(y), n._updateFileDetails(v), r(e + 1)
                    }, 100), n._raise("fileloaded", [$, I, e, s])
                }, s.onprogress = function (i) {
                    if (i.lengthComputable) {
                        var t = i.loaded / i.total * 100, a = Math.ceil(t);
                        y = u.replace("{index}", e + 1).replace("{files}", v).replace("{percent}", a).replace("{name}", k), setTimeout(function () {
                            c.html(y)
                        }, 100)
                    }
                }, b = J("text", g) ? g.text : V.text, b($.type, k) ? s.readAsText($, n.textEncoding) : s.readAsArrayBuffer($)) : (n._previewDefault($, I), setTimeout(function () {
                    r(e + 1), n._updateFileDetails(v)
                }, 100), n._raise("fileloaded", [$, I, e, s])), void n.addToStack($)) : (n.addToStack($), setTimeout(r(e + 1), 100), void n._raise("fileloaded", [$, I, e, s])) : (y = n.msgInvalidFileExtension.replace("{name}", k).replace("{extensions}", L), void(n.isError = _(y, $, I, e)))
            }, r(0), n._updateFileDetails(v, !1)
        }, _updateFileDetails: function (e) {
            var i = this, t = i.$element, a = i.getFileStack(), n = r(9) && te(t.val()) || t[0].files[0] && t[0].files[0].name || a.length && a[0].name || "", l = i.slug(n), s = i.isUploadable ? a.length : e, d = o.count(i.id) + s, c = s > 1 ? i._getMsgSelected(d) : l;
            i.isError ? (i.$previewContainer.removeClass("file-thumb-loading"), i.$previewStatus.html(""), i.$captionContainer.find(".kv-caption-icon").hide()) : i._showFileIcon(), i._setCaption(c, i.isError), i.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && i._raise("fileselect", [e, l]), o.count(i.id) && i._initPreviewDeletes()
        }, _setThumbStatus: function (e, i) {
            var t = this;
            if (t.showPreview) {
                var a = "indicator" + i, r = a + "Title", n = "file-preview-" + i.toLowerCase(), l = e.find(".file-upload-indicator"), o = t.fileActionSettings;
                e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Error" === i && e.find(".kv-file-upload").attr("disabled", !0), l.html(o[a]), l.attr("title", o[r]), e.addClass(n)
            }
        }, _setProgressCancelled: function () {
            var e = this;
            e._setProgress(100, e.$progress, e.msgCancelled)
        }, _setProgress: function (e, i, t) {
            var a = this, r = Math.min(e, 100), n = 100 > r ? a.progressTemplate : t ? a.progressErrorTemplate : a.progressCompleteTemplate;
            i = i || a.$progress, K(n) || (i.html(n.replace(/\{percent}/g, r)), t && i.find('[role="progressbar"]').html(t))
        }, _setFileDropZoneTitle: function () {
            var e = this, i = e.$container.find(".file-drop-zone");
            i.find("." + e.dropZoneTitleClass).remove(), e.isUploadable && e.showPreview && 0 !== i.length && !(e.getFileStack().length > 0) && e.dropZoneEnabled && (0 === i.find(".file-preview-frame").length && K(e.defaultPreviewContent) && i.prepend('<div class="' + e.dropZoneTitleClass + '">' + e.dropZoneTitle + "</div>"), e.$container.removeClass("file-input-new"), u(e.$container, "file-input-ajax-new"))
        }, _setAsyncUploadStatus: function (i, t, a) {
            var r = this, n = 0;
            r._setProgress(t, e("#" + i).find(".file-thumb-progress")), r.uploadStatus[i] = t, e.each(r.uploadStatus, function (e, i) {
                n += i
            }), r._setProgress(Math.ceil(n / a))
        }, _validateMinCount: function () {
            var e = this, i = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;
            return e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(i - 1) < e.minFileCount ? (e._noFilesError({}), !1) : !0
        }, _getFileCount: function (e) {
            var i = this, t = 0;
            return i.validateInitialCount && !i.overwriteInitial && (t = o.count(i.id), e += t), e
        }, _getFileName: function (e) {
            return e && e.name ? this.slug(e.name) : void 0
        }, _getFileNames: function (e) {
            var i = this;
            return i.filenames.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i
            })
        }, _setPreviewError: function (e, i, t) {
            var a = this;
            i && a.updateStack(i, t), a.removeFromPreviewOnError ? e.remove() : a._setThumbStatus(e, "Error")
        }, _checkDimensions: function (e, i, t, a, r, n, l) {
            var o, s, d, c, p = this, u = "Small" === i ? "min" : "max", f = p[u + "Image" + n];
            !K(f) && t.length && (d = t[0], s = "Width" === n ? d.naturalWidth || d.width : d.naturalHeight || d.height, c = "Small" === i ? s >= f : f >= s, c || (o = p["msgImage" + n + i].replace("{name}", r).replace("{size}", f), p._showUploadError(o, l), p._setPreviewError(a, e, null)))
        }, _validateImage: function (e, i, a, r) {
            var n, o, s, d = this, c = d.$preview, p = c.find("#" + i), u = p.find("img");
            a = a || "Untitled", u.length && l(u, "load", function () {
                o = p.width(), s = c.width(), o > s && (u.css("width", "100%"), p.css("width", "97%")), n = {ind: e, id: i}, d._checkDimensions(e, "Small", u, p, a, "Width", n), d._checkDimensions(e, "Small", u, p, a, "Height", n), d.resizeImage || (d._checkDimensions(e, "Large", u, p, a, "Width", n), d._checkDimensions(e, "Large", u, p, a, "Height", n)), d._raise("fileimageloaded", [i]), d.loadedImages.push({ind: e, img: u, thumb: p, pid: i, typ: r}), d._validateAllImages(), t.revokeObjectURL(u.attr("src"))
            })
        }, _validateAllImages: function () {
            var e, i, t, a, r, n, l, o = this, s = {};
            if (o.loadedImages.length === o.totalImagesCount && (o._raise("fileimagesloaded"), o.resizeImage)) {
                for (l = o.isUploadable ? o._showUploadError : o._showError, e = 0; e < o.loadedImages.length; e++)i = o.loadedImages[e], t = i.img, a = i.thumb, r = i.pid, n = i.ind, s = {id: r, index: n}, o._getResizedImage(t[0], i.typ, r, n) || (l(o.msgImageResizeError, s, "fileimageresizeerror"), o._setPreviewError(a, n));
                o._raise("fileimagesresized")
            }
        }, _getResizedImage: function (e, i, t, a) {
            var r, n, l = this, o = e.naturalWidth, s = e.naturalHeight, d = 1, c = l.maxImageWidth || o, p = l.maxImageHeight || s, u = o && s, f = l.imageCanvas, v = l.imageCanvasContext;
            if (!u)return !1;
            if (o === c && s === p)return !0;
            i = i || l.resizeDefaultImageType, r = o > c, n = s > p, d = "width" === l.resizePreference ? r ? c / o : n ? p / s : 1 : n ? p / s : r ? c / o : 1, l._resetCanvas(), o *= d, s *= d, f.width = o, f.height = s;
            try {
                return v.drawImage(e, 0, 0, o, s), f.toBlob(function (e) {
                    l._raise("fileimageresized", [t, a]), l.filestack[a] = e
                }, i, l.resizeQuality), !0
            } catch (g) {
                return !1
            }
        }, _initBrowse: function (e) {
            var i = this;
            i.$btnFile = e.find(".btn-file"), i.$btnFile.append(i.$element)
        }, _initCaption: function () {
            var e = this, i = e.initialCaption || "";
            return e.overwriteInitial || K(i) ? (e.$caption.html(""), !1) : (e._setCaption(i), !0)
        }, _setCaption: function (i, t) {
            var a, r, n, l, o = this, s = o.getFileStack();
            if (o.$caption.length) {
                if (t)a = e("<div>" + o.msgValidationError + "</div>").text(), n = s.length, l = n ? 1 === n && s[0] ? o._getFileNames()[0] : o._getMsgSelected(n) : o._getMsgSelected(o.msgNo), r = '<span class="' + o.msgValidationErrorClass + '">' + o.msgValidationErrorIcon + (K(i) ? l : i) + "</span>"; else {
                    if (K(i))return;
                    a = e("<div>" + i + "</div>").text(), r = o._getLayoutTemplate("icon") + a
                }
                o.$caption.html(r), o.$caption.attr("title", a), o.$captionContainer.find(".file-caption-ellipsis").attr("title", a)
            }
        }, _createContainer: function () {
            var i = this, t = e(document.createElement("div")).attr({"class": "file-input file-input-new"}).html(i._renderMain());
            return i.$element.before(t), i._initBrowse(t), t
        }, _refreshContainer: function () {
            var e = this, i = e.$container;
            i.before(e.$element), i.html(e._renderMain()), e._initBrowse(i)
        }, _renderMain: function () {
            var e = this, i = e.isUploadable && e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled", t = e.showClose ? e._getLayoutTemplate("close") : "", a = e.showPreview ? e._getLayoutTemplate("preview").replace(/\{class}/g, e.previewClass).replace(/\{dropClass}/g, i) : "", r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass, n = e.captionTemplate.replace(/\{class}/g, r + " kv-fileinput-caption");
            return e.mainTemplate.replace(/\{class}/g, e.mainClass).replace(/\{preview}/g, a).replace(/\{close}/g, t).replace(/\{caption}/g, n).replace(/\{upload}/g, e._renderButton("upload")).replace(/\{remove}/g, e._renderButton("remove")).replace(/\{cancel}/g, e._renderButton("cancel")).replace(/\{browse}/g, e._renderButton("browse"))
        }, _renderButton: function (e) {
            var i = this, t = i._getLayoutTemplate("btnDefault"), a = i[e + "Class"], r = i[e + "Title"], n = i[e + "Icon"], l = i[e + "Label"], o = i.isDisabled ? " disabled" : "", s = "button";
            switch (e) {
                case"remove":
                    if (!i.showRemove)return "";
                    break;
                case"cancel":
                    if (!i.showCancel)return "";
                    a += " hide";
                    break;
                case"upload":
                    if (!i.showUpload)return "";
                    i.isUploadable && !i.isDisabled ? t = i._getLayoutTemplate("btnLink").replace("{href}", i.uploadUrl) : s = "submit";
                    break;
                case"browse":
                    t = i._getLayoutTemplate("btnBrowse");
                    break;
                default:
                    return ""
            }
            return a += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", K(l) || (l = ' <span class="' + i.buttonLabelClass + '">' + l + "</span>"), t.replace("{type}", s).replace("{css}", a).replace("{title}", r).replace("{status}", o).replace("{icon}", n).replace("{label}", l)
        }, _renderThumbProgress: function () {
            return '<div class="file-thumb-progress hide">' + this.progressTemplate.replace(/\{percent}/g, "0") + "</div>"
        }, _renderFileFooter: function (e, i) {
            var t, a, r = this, n = r.fileActionSettings, l = r._getLayoutTemplate("footer");
            return r.isUploadable ? (t = l.replace(/\{actions}/g, r._renderFileActions(!0, !0, !1, !1, !1)), a = t.replace(/\{caption}/g, e).replace(/\{width}/g, i).replace(/\{progress}/g, r._renderThumbProgress()).replace(/\{indicator}/g, n.indicatorNew).replace(/\{indicatorTitle}/g, n.indicatorNewTitle)) : a = l.replace(/\{actions}/g, "").replace(/\{caption}/g, e).replace(/\{progress}/g, "").replace(/\{width}/g, i).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, ""), a = ee(a, r.previewThumbTags)
        }, _renderFileActions: function (e, i, t, a, r) {
            if (!e && !i)return "";
            var n = this, l = a === !1 ? "" : ' data-url="' + a + '"', o = r === !1 ? "" : ' data-key="' + r + '"', s = n._getLayoutTemplate("actionDelete"), d = "", c = n._getLayoutTemplate("actions"), p = n.otherActionButtons.replace(/\{dataKey}/g, o), u = n.fileActionSettings, f = t ? u.removeClass + " disabled" : u.removeClass;
            return s = s.replace(/\{removeClass}/g, f).replace(/\{removeIcon}/g, u.removeIcon).replace(/\{removeTitle}/g, u.removeTitle).replace(/\{dataUrl}/g, l).replace(/\{dataKey}/g, o), e && (d = n._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, u.uploadClass).replace(/\{uploadIcon}/g, u.uploadIcon).replace(/\{uploadTitle}/g, u.uploadTitle)), c.replace(/\{delete}/g, s).replace(/\{upload}/g, d).replace(/\{other}/g, p)
        }, _browse: function (e) {
            var i = this;
            i._raise("filebrowse"), e && e.isDefaultPrevented() || (i.isError && !i.isUploadable && i.clear(), i.$captionContainer.focus())
        }, _change: function (i) {
            var t = this, a = t.$element;
            if (!t.isUploadable && K(a.val()) && t.fileInputCleared)return void(t.fileInputCleared = !1);
            t.fileInputCleared = !1;
            var r, n, l, s, d, c, p = arguments.length > 1, u = t.isUploadable, f = 0, v = p ? i.originalEvent.dataTransfer.files : a.get(0).files, g = t.filestack.length, m = K(a.attr("multiple")), h = m && g > 0, w = 0, _ = function (i, a, r, n) {
                var l = e.extend(!0, {}, t._getOutData({}, {}, v), {id: r, index: n}), o = {id: r, index: n, file: a, files: v};
                return t.isUploadable ? t._showUploadError(i, l) : t._showError(i, o)
            };
            if (t.reader = null, t._resetUpload(), t._hideFileIcon(), t.isUploadable && t.$container.find(".file-drop-zone ." + t.dropZoneTitleClass).remove(), p)for (r = []; v[f];)s = v[f], s.type || s.size % 4096 !== 0 ? r.push(s) : w++, f++; else r = void 0 === i.target.files ? i.target && i.target.value ? [{name: i.target.value.replace(/^.+\\/, "")}] : [] : i.target.files;
            if (K(r) || 0 === r.length)return u || t.clear(), t._showFolderError(w), void t._raise("fileselectnone");
            if (t._resetErrors(), c = r.length, l = t._getFileCount(t.isUploadable ? t.getFileStack().length + c : c), t.maxFileCount > 0 && l > t.maxFileCount) {
                if (!t.autoReplace || c > t.maxFileCount)return d = t.autoReplace && c > t.maxFileCount ? c : l, n = t.msgFilesTooMany.replace("{m}", t.maxFileCount).replace("{n}", d), t.isError = _(n, null, null, null), t.$captionContainer.find(".kv-caption-icon").hide(), t._setCaption("", !0), void t.$container.removeClass("file-input-new file-input-ajax-new");
                l > t.maxFileCount && t._resetPreviewThumbs(u)
            } else!u || h ? (t._resetPreviewThumbs(!1), h && t.clearStack()) : !u || 0 !== g || o.count(t.id) && !t.overwriteInitial || t._resetPreviewThumbs(!0);
            t.isPreviewable ? t._readFiles(r) : t._updateFileDetails(1), t._showFolderError(w)
        }, _abort: function (i) {
            var t, a = this;
            return a.ajaxAborted && "object" == typeof a.ajaxAborted && void 0 !== a.ajaxAborted.message ? (t = e.extend(!0, {}, a._getOutData(), i), t.abortData = a.ajaxAborted.data || {}, t.abortMessage = a.ajaxAborted.message, a.cancel(), a._setProgress(100, a.$progress, a.msgCancelled), a._showUploadError(a.ajaxAborted.message, t, "filecustomerror"), !0) : !1
        }, _resetFileStack: function () {
            var i = this, t = 0, a = [], r = [];
            i._getThumbs().each(function () {
                var n = e(this), l = n.attr("data-fileindex"), o = i.filestack[l];
                -1 !== l && (void 0 !== o ? (a[t] = o, r[t] = i._getFileName(o), n.attr({id: i.previewInitId + "-" + t, "data-fileindex": t}), t++) : n.attr({id: "uploaded-" + Y(), "data-fileindex": "-1"}))
            }), i.filestack = a, i.filenames = r
        }, clearStack: function () {
            var e = this;
            return e.filestack = [], e.filenames = [], e.$element
        }, updateStack: function (e, i) {
            var t = this;
            return t.filestack[e] = i, t.filenames[e] = t._getFileName(i), t.$element
        }, addToStack: function (e) {
            var i = this;
            return i.filestack.push(e), i.filenames.push(i._getFileName(e)), i.$element
        }, getFileStack: function (e) {
            var i = this;
            return i.filestack.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i
            })
        }, lock: function () {
            var e = this;
            return e._resetErrors(), e.disable(), e.showRemove && u(e.$container.find(".fileinput-remove"), "hide"), e.showCancel && e.$container.find(".fileinput-cancel").removeClass("hide"), e._raise("filelock", [e.filestack, e._getExtraData()]), e.$element
        }, unlock: function (e) {
            var i = this;
            return void 0 === e && (e = !0), i.enable(), i.showCancel && u(i.$container.find(".fileinput-cancel"), "hide"), i.showRemove && i.$container.find(".fileinput-remove").removeClass("hide"), e && i._resetFileStack(), i._raise("fileunlock", [i.filestack, i._getExtraData()]), i.$element
        }, cancel: function () {
            var i, t = this, a = t.ajaxRequests, r = a.length;
            if (r > 0)for (i = 0; r > i; i += 1)t.cancelling = !0, a[i].abort();
            return t._setProgressCancelled(), t._getThumbs().each(function () {
                var i = e(this), a = i.attr("data-fileindex");
                i.removeClass("file-uploading"), void 0 !== t.filestack[a] && (i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), t.unlock()
            }), t.$element
        }, clear: function () {
            var i, t = this;
            return t.$btnUpload.removeAttr("disabled"), t._getThumbs().find("video,audio,img").each(function () {
                ie(e(this))
            }), t._resetUpload(), t.clearStack(), t._clearFileInput(), t._resetErrors(!0), t._raise("fileclear"), t._hasInitialPreview() ? (t._showFileIcon(), t._resetPreview(), t._initPreviewDeletes(), t.$container.removeClass("file-input-new")) : (t._getThumbs().each(function () {
                t._clearObjects(e(this))
            }), t.isUploadable && (o.data[t.id] = {}), t.$preview.html(""), i = !t.overwriteInitial && t.initialCaption.length > 0 ? t.initialCaption : "", t._setCaption(i), t.$caption.attr("title", ""), u(t.$container, "file-input-new"), t._validateDefaultPreview()), 0 === t.$container.find(".file-preview-frame").length && (t._initCaption() || t.$captionContainer.find(".kv-caption-icon").hide()), t._hideFileIcon(), t._raise("filecleared"), t.$captionContainer.focus(), t._setFileDropZoneTitle(), t.$element
        }, reset: function () {
            var e = this;
            return e._resetPreview(), e.$container.find(".fileinput-filename").text(""), e._raise("filereset"), u(e.$container, "file-input-new"), (e.$preview.find(".file-preview-frame").length || e.isUploadable && e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), e._setFileDropZoneTitle(), e.clearStack(), e.formdata = {}, e.$element
        }, disable: function () {
            var e = this;
            return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), e._initDragDrop(), e.$element
        }, enable: function () {
            var e = this;
            return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), e._initDragDrop(), e.$element
        }, upload: function () {
            var i, t, a, r = this, n = r.getFileStack().length, l = {}, o = !e.isEmptyObject(r._getExtraData());
            if (r.minFileCount > 0 && r._getFileCount(n) < r.minFileCount)return void r._noFilesError(l);
            if (r.isUploadable && !r.isDisabled && (0 !== n || o)) {
                if (r._resetUpload(), r.$progress.removeClass("hide"), r.uploadCount = 0, r.uploadStatus = {}, r.uploadLog = [], r.lock(), r._setProgress(2), 0 === n && o)return void r._uploadExtraOnly();
                if (a = r.filestack.length, r.hasInitData = !1, !r.uploadAsync)return r._uploadBatch(), r.$element;
                for (t = r._getOutData(), r._raise("filebatchpreupload", [t]), r.fileBatchCompleted = !1, r.uploadCache = {content: [], config: [], tags: [], append: !0}, r.uploadAsyncCount = r.getFileStack().length, i = 0; a > i; i++)r.uploadCache.content[i] = null, r.uploadCache.config[i] = null, r.uploadCache.tags[i] = null;
                for (i = 0; a > i; i++)void 0 !== r.filestack[i] && r._uploadSingle(i, r.filestack, !0)
            }
        }, destroy: function () {
            var e = this, t = e.$container;
            return t.find(".file-drop-zone").off(), e.$element.insertBefore(t).off(i).removeData(), t.off().remove(), e.$element
        }, refresh: function (i) {
            var t = this, a = t.$element;
            return i = i ? e.extend(!0, {}, t.options, i) : t.options, t.destroy(), a.fileinput(i), a.val() && a.trigger("change.fileinput"), a
        }
    }, e.fn.fileinput = function (i) {
        if (d() || r(9)) {
            var t = Array.apply(null, arguments), a = [];
            switch (t.shift(), this.each(function () {
                var r, n = e(this), l = n.data("fileinput"), o = "object" == typeof i && i, s = o.language || n.data("language") || "en", d = {};
                l || ("en" === s || K(e.fn.fileinputLocales[s]) || (d = e.fn.fileinputLocales[s]), r = e.extend(!0, {}, e.fn.fileinput.defaults, e.fn.fileinputLocales.en, d, o, n.data()), l = new q(this, r), n.data("fileinput", l)), "string" == typeof i && a.push(l[i].apply(l, t))
            }), a.length) {
                case 0:
                    return this;
                case 1:
                    return a[0];
                default:
                    return a
            }
        }
    }, e.fn.fileinput.defaults = {
        language: "en",
        showCaption: !0,
        showPreview: !0,
        showRemove: !0,
        showUpload: !0,
        showCancel: !0,
        showClose: !0,
        showUploadedThumbs: !0,
        autoReplace: !1,
        mainClass: "",
        previewClass: "",
        captionClass: "",
        mainTemplate: null,
        initialCaption: "",
        initialPreview: [],
        initialPreviewDelimiter: "*$$*",
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: !0,
        removeFromPreviewOnError: !1,
        deleteUrl: "",
        deleteExtraData: {},
        overwriteInitial: !0,
        layoutTemplates: M,
        previewTemplates: Z,
        allowedPreviewTypes: null,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewSettings: W,
        fileTypeSettings: V,
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: "file-icon-4x",
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: "hidden-xs",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
        browseClass: "btn btn-primary",
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: "btn btn-default",
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: "btn btn-default",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        uploadAsync: !0,
        uploadExtraData: {},
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: !1,
        resizePreference: "width",
        resizeQuality: .92,
        resizeDefaultImageType: "image/jpeg",
        maxFileSize: 0,
        maxFilePreviewSize: 25600,
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: !1,
        msgValidationErrorClass: "text-danger",
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: "file-error-message",
        progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar progress-bar-success",
        progressErrorClass: "progress-bar progress-bar-danger",
        previewFileType: "image",
        zoomIndicator: '<i class="glyphicon glyphicon-zoom-in"></i>',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: '<span class="close kv-error-close">&times;</span>',
        slugCallback: null,
        dropZoneEnabled: !0,
        dropZoneTitleClass: "file-drop-zone-title",
        fileActionSettings: {},
        otherActionButtons: "",
        textEncoding: "UTF-8",
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: !0
    }, e.fn.fileinputLocales.en = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgNo: "No",
        msgCancelled: "Cancelled",
        msgZoomTitle: "View details",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'Arquivo "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'Arquivo "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'Arquivo "{name}" is not readable.',
        msgFilePreviewAborted: 'Arquivo preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "Validation Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;"
    }, e.fn.fileinput.Constructor = q, e(document).ready(function () {
        var i = e("input.file[type=file]");
        i.length && i.fileinput()
    })
});

/*!
 * FileInput Brazillian Portuguese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['pt-BR'] = {
        fileSingle: 'arquivo',
        filePlural: 'arquivos',
        browseLabel: 'Procurar&hellip;',
        removeLabel: 'Remover',
        removeTitle: 'Remover arquivos selecionados',
        cancelLabel: 'Cancelar',
        cancelTitle: 'Interromper envio em andamento',
        uploadLabel: 'Enviar',
        uploadTitle: 'Enviar arquivos selecionados',
        msgNo: 'Não',
        msgCancelled: 'Cancelado',
        msgZoomTitle: 'Ver detalhes',
        msgZoomModalHeading: 'Pré-visualização detalhada',
        msgSizeTooLarge: 'O arquivo "{name}" (<b>{size} KB</b>) excede o tamanho máximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Você deve selecionar pelo menos <b>{n}</b> {files} para enviar.',
        msgFilesTooMany: 'O número de arquivos selecionados para o envio <b>({n})</b> excede o limite máximo permitido de <b>{m}</b>.',
        msgFileNotFound: 'O arquivo "{name}" não foi encontrado!',
        msgFileSecured: 'Restrições de segurança impedem a leitura do arquivo "{name}".',
        msgFileNotReadable: 'O arquivo "{name}" não pode ser lido.',
        msgFilePreviewAborted: 'A pré-visualização do arquivo "{name}" foi interrompida.',
        msgFilePreviewError: 'Ocorreu um erro ao ler o arquivo "{name}".',
        msgInvalidFileType: 'Tipo inválido para o arquivo "{name}". Apenas arquivos "{types}" são permitidos.',
        msgInvalidFileExtension: 'Extensão inválida para o arquivo "{name}". Apenas arquivos "{extensions}" são permitidos.',
        msgUploadAborted: 'O upload do arquivo foi abortada',
        msgValidationError: 'Erro de validação',
        msgLoading: 'Enviando arquivo {index} de {files}&hellip;',
        msgProgress: 'Enviando arquivo {index} de {files} - {name} - {percent}% completo.',
        msgSelected: '{n} {files} selecionado(s)',
        msgFoldersNotAllowed: 'Arraste e solte apenas arquivos! {n} soltar pasta(s) ignoradas.',
        msgImageWidthSmall: 'Largura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageHeightSmall: 'Altura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageWidthLarge: 'Largura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageHeightLarge: 'Altura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageResizeError: 'Could not get the image dimensions to resize.',
        msgImageResizeException: 'Erro ao redimensionar a imagem.<pre>{errors}</pre>',
        dropZoneTitle: 'Arraste e solte os arquivos aqui&hellip;',
        fileActionSettings: {
            removeTitle: 'Remover arquivo',
            uploadTitle: 'Carregar arquivo',
            indicatorNewTitle: 'Ainda não carregou',
            indicatorSuccessTitle: 'Carregado',
            indicatorErrorTitle: 'Carregar Erro',
            indicatorLoadingTitle: 'A carregar ...'
        }
    };
})(window.jQuery);


/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2017
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * This library is a standalone javascript library and does not depend on other libraries or plugins like jQuery.
 *
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var DateFormatter;
(function () {
    "use strict";

    var _compare, _lpad, _extend, _indexOf, defaultSettings, DAY, HOUR;
    DAY = 1000 * 60 * 60 * 24;
    HOUR = 3600;

    _compare = function (str1, str2) {
        return typeof(str1) === 'string' && typeof(str2) === 'string' && str1.toLowerCase() === str2.toLowerCase();
    };
    _lpad = function (value, length, chr) {
        var val = value.toString();
        chr = chr || '0';
        return val.length < length ? _lpad(chr + val, length) : val;
    };
    _extend = function (out) {
        var i, obj;
        out = out || {};
        for (i = 1; i < arguments.length; i++) {
            obj = arguments[i];
            if (!obj) {
                continue;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object') {
                        _extend(out[key], obj[key]);
                    } else {
                        out[key] = obj[key];
                    }
                }
            }
        }
        return out;
    };
    _indexOf = function (val, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase() === val.toLowerCase()) {
                return i;
            }
        }
        return -1;
    };
    defaultSettings = {
        dateSettings: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'
            ],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            meridiem: ['AM', 'PM'],
            ordinal: function (number) {
                var n = number % 10, suffixes = {1: 'st', 2: 'nd', 3: 'rd'};
                return Math.floor(number % 100 / 10) === 1 || !suffixes[n] ? 'th' : suffixes[n];
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    };

    DateFormatter = function (options) {
        var self = this, config = _extend(defaultSettings, options);
        self.dateSettings = config.dateSettings;
        self.separators = config.separators;
        self.validParts = config.validParts;
        self.intParts = config.intParts;
        self.tzParts = config.tzParts;
        self.tzClip = config.tzClip;
    };

    DateFormatter.prototype = {
        constructor: DateFormatter,
        getMonth: function (val) {
            var self = this, i;
            i = _indexOf(val, self.dateSettings.monthsShort) + 1;
            if (i === 0) {
                i = _indexOf(val, self.dateSettings.months) + 1;
            }
            return i;
        },
        parseDate: function (vDate, vFormat) {
            var self = this, vFormatParts, vDateParts, i, vDateFlag = false, vTimeFlag = false, vDatePart, iDatePart,
                vSettings = self.dateSettings, vMonth, vMeriIndex, vMeriOffset, len, mer,
                out = {date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0};
            if (!vDate) {
                return null;
            }
            if (vDate instanceof Date) {
                return vDate;
            }
            if (vFormat === 'U') {
                i = parseInt(vDate);
                return i ? new Date(i * 1000) : vDate;
            }
            switch (typeof vDate) {
                case 'number':
                    return new Date(vDate);
                case 'string':
                    break;
                default:
                    return null;
            }
            vFormatParts = vFormat.match(self.validParts);
            if (!vFormatParts || vFormatParts.length === 0) {
                throw new Error("Invalid date format definition.");
            }
            vDateParts = vDate.replace(self.separators, '\0').split('\0');
            for (i = 0; i < vDateParts.length; i++) {
                vDatePart = vDateParts[i];
                iDatePart = parseInt(vDatePart);
                switch (vFormatParts[i]) {
                    case 'y':
                    case 'Y':
                        if (iDatePart) {
                            len = vDatePart.length;
                            out.year = len === 2 ? parseInt((iDatePart < 70 ? '20' : '19') + vDatePart) : iDatePart;
                        } else {
                            return null;
                        }
                        vDateFlag = true;
                        break;
                    case 'm':
                    case 'n':
                    case 'M':
                    case 'F':
                        if (isNaN(iDatePart)) {
                            vMonth = self.getMonth(vDatePart);
                            if (vMonth > 0) {
                                out.month = vMonth;
                            } else {
                                return null;
                            }
                        } else {
                            if (iDatePart >= 1 && iDatePart <= 12) {
                                out.month = iDatePart;
                            } else {
                                return null;
                            }
                        }
                        vDateFlag = true;
                        break;
                    case 'd':
                    case 'j':
                        if (iDatePart >= 1 && iDatePart <= 31) {
                            out.day = iDatePart;
                        } else {
                            return null;
                        }
                        vDateFlag = true;
                        break;
                    case 'g':
                    case 'h':
                        vMeriIndex = (vFormatParts.indexOf('a') > -1) ? vFormatParts.indexOf('a') :
                            (vFormatParts.indexOf('A') > -1) ? vFormatParts.indexOf('A') : -1;
                        mer = vDateParts[vMeriIndex];
                        if (vMeriIndex !== -1) {
                            vMeriOffset = _compare(mer, vSettings.meridiem[0]) ? 0 :
                                (_compare(mer, vSettings.meridiem[1]) ? 12 : -1);
                            if (iDatePart >= 1 && iDatePart <= 12 && vMeriOffset !== -1) {
                                out.hour = iDatePart % 12 === 0 ? vMeriOffset : iDatePart + vMeriOffset;
                            } else {
                                if (iDatePart >= 0 && iDatePart <= 23) {
                                    out.hour = iDatePart;
                                }
                            }
                        } else {
                            if (iDatePart >= 0 && iDatePart <= 23) {
                                out.hour = iDatePart;
                            } else {
                                return null;
                            }
                        }
                        vTimeFlag = true;
                        break;
                    case 'G':
                    case 'H':
                        if (iDatePart >= 0 && iDatePart <= 23) {
                            out.hour = iDatePart;
                        } else {
                            return null;
                        }
                        vTimeFlag = true;
                        break;
                    case 'i':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.min = iDatePart;
                        } else {
                            return null;
                        }
                        vTimeFlag = true;
                        break;
                    case 's':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.sec = iDatePart;
                        } else {
                            return null;
                        }
                        vTimeFlag = true;
                        break;
                }
            }
            if (vDateFlag === true && out.year && out.month && out.day) {
                out.date = new Date(out.year, out.month - 1, out.day, out.hour, out.min, out.sec, 0);
            } else {
                if (vTimeFlag !== true) {
                    return null;
                }
                out.date = new Date(0, 0, 0, out.hour, out.min, out.sec, 0);
            }
            return out.date;
        },
        guessDate: function (vDateStr, vFormat) {
            if (typeof vDateStr !== 'string') {
                return vDateStr;
            }
            var self = this, vParts = vDateStr.replace(self.separators, '\0').split('\0'), vPattern = /^[djmn]/g, len,
                vFormatParts = vFormat.match(self.validParts), vDate = new Date(), vDigit = 0, vYear, i, n, iPart, iSec;

            if (!vPattern.test(vFormatParts[0])) {
                return vDateStr;
            }

            for (i = 0; i < vParts.length; i++) {
                vDigit = 2;
                iPart = vParts[i];
                iSec = parseInt(iPart.substr(0, 2));
                if (isNaN(iSec)) {
                    return null;
                }
                switch (i) {
                    case 0:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setMonth(iSec - 1);
                        } else {
                            vDate.setDate(iSec);
                        }
                        break;
                    case 1:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setDate(iSec);
                        } else {
                            vDate.setMonth(iSec - 1);
                        }
                        break;
                    case 2:
                        vYear = vDate.getFullYear();
                        len = iPart.length;
                        vDigit = len < 4 ? len : 4;
                        vYear = parseInt(len < 4 ? vYear.toString().substr(0, 4 - len) + iPart : iPart.substr(0, 4));
                        if (!vYear) {
                            return null;
                        }
                        vDate.setFullYear(vYear);
                        break;
                    case 3:
                        vDate.setHours(iSec);
                        break;
                    case 4:
                        vDate.setMinutes(iSec);
                        break;
                    case 5:
                        vDate.setSeconds(iSec);
                        break;
                }
                n = iPart.substr(vDigit);
                if (n.length > 0) {
                    vParts.splice(i + 1, 0, n);
                }
            }
            return vDate;
        },
        parseFormat: function (vChar, vDate) {
            var self = this, vSettings = self.dateSettings, fmt, backslash = /\\?(.?)/gi, doFormat = function (t, s) {
                return fmt[t] ? fmt[t]() : s;
            };
            fmt = {
                /////////
                // DAY //
                /////////
                /**
                 * Day of month with leading 0: `01..31`
                 * @return {string}
                 */
                d: function () {
                    return _lpad(fmt.j(), 2);
                },
                /**
                 * Shorthand day name: `Mon...Sun`
                 * @return {string}
                 */
                D: function () {
                    return vSettings.daysShort[fmt.w()];
                },
                /**
                 * Day of month: `1..31`
                 * @return {number}
                 */
                j: function () {
                    return vDate.getDate();
                },
                /**
                 * Full day name: `Monday...Sunday`
                 * @return {number}
                 */
                l: function () {
                    return vSettings.days[fmt.w()];
                },
                /**
                 * ISO-8601 day of week: `1[Mon]..7[Sun]`
                 * @return {number}
                 */
                N: function () {
                    return fmt.w() || 7;
                },
                /**
                 * Day of week: `0[Sun]..6[Sat]`
                 * @return {number}
                 */
                w: function () {
                    return vDate.getDay();
                },
                /**
                 * Day of year: `0..365`
                 * @return {number}
                 */
                z: function () {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j()), b = new Date(fmt.Y(), 0, 1);
                    return Math.round((a - b) / DAY);
                },

                //////////
                // WEEK //
                //////////
                /**
                 * ISO-8601 week number
                 * @return {number}
                 */
                W: function () {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j() - fmt.N() + 3), b = new Date(a.getFullYear(), 0, 4);
                    return _lpad(1 + Math.round((a - b) / DAY / 7), 2);
                },

                ///////////
                // MONTH //
                ///////////
                /**
                 * Full month name: `January...December`
                 * @return {string}
                 */
                F: function () {
                    return vSettings.months[vDate.getMonth()];
                },
                /**
                 * Month w/leading 0: `01..12`
                 * @return {string}
                 */
                m: function () {
                    return _lpad(fmt.n(), 2);
                },
                /**
                 * Shorthand month name; `Jan...Dec`
                 * @return {string}
                 */
                M: function () {
                    return vSettings.monthsShort[vDate.getMonth()];
                },
                /**
                 * Month: `1...12`
                 * @return {number}
                 */
                n: function () {
                    return vDate.getMonth() + 1;
                },
                /**
                 * Days in month: `28...31`
                 * @return {number}
                 */
                t: function () {
                    return (new Date(fmt.Y(), fmt.n(), 0)).getDate();
                },

                //////////
                // YEAR //
                //////////
                /**
                 * Is leap year? `0 or 1`
                 * @return {number}
                 */
                L: function () {
                    var Y = fmt.Y();
                    return (Y % 4 === 0 && Y % 100 !== 0 || Y % 400 === 0) ? 1 : 0;
                },
                /**
                 * ISO-8601 year
                 * @return {number}
                 */
                o: function () {
                    var n = fmt.n(), W = fmt.W(), Y = fmt.Y();
                    return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
                },
                /**
                 * Full year: `e.g. 1980...2010`
                 * @return {number}
                 */
                Y: function () {
                    return vDate.getFullYear();
                },
                /**
                 * Last two digits of year: `00...99`
                 * @return {string}
                 */
                y: function () {
                    return fmt.Y().toString().slice(-2);
                },

                //////////
                // TIME //
                //////////
                /**
                 * Meridian lower: `am or pm`
                 * @return {string}
                 */
                a: function () {
                    return fmt.A().toLowerCase();
                },
                /**
                 * Meridian upper: `AM or PM`
                 * @return {string}
                 */
                A: function () {
                    var n = fmt.G() < 12 ? 0 : 1;
                    return vSettings.meridiem[n];
                },
                /**
                 * Swatch Internet time: `000..999`
                 * @return {string}
                 */
                B: function () {
                    var H = vDate.getUTCHours() * HOUR, i = vDate.getUTCMinutes() * 60, s = vDate.getUTCSeconds();
                    return _lpad(Math.floor((H + i + s + HOUR) / 86.4) % 1000, 3);
                },
                /**
                 * 12-Hours: `1..12`
                 * @return {number}
                 */
                g: function () {
                    return fmt.G() % 12 || 12;
                },
                /**
                 * 24-Hours: `0..23`
                 * @return {number}
                 */
                G: function () {
                    return vDate.getHours();
                },
                /**
                 * 12-Hours with leading 0: `01..12`
                 * @return {string}
                 */
                h: function () {
                    return _lpad(fmt.g(), 2);
                },
                /**
                 * 24-Hours w/leading 0: `00..23`
                 * @return {string}
                 */
                H: function () {
                    return _lpad(fmt.G(), 2);
                },
                /**
                 * Minutes w/leading 0: `00..59`
                 * @return {string}
                 */
                i: function () {
                    return _lpad(vDate.getMinutes(), 2);
                },
                /**
                 * Seconds w/leading 0: `00..59`
                 * @return {string}
                 */
                s: function () {
                    return _lpad(vDate.getSeconds(), 2);
                },
                /**
                 * Microseconds: `000000-999000`
                 * @return {string}
                 */
                u: function () {
                    return _lpad(vDate.getMilliseconds() * 1000, 6);
                },

                //////////////
                // TIMEZONE //
                //////////////
                /**
                 * Timezone identifier: `e.g. Atlantic/Azores, ...`
                 * @return {string}
                 */
                e: function () {
                    var str = /\((.*)\)/.exec(String(vDate))[1];
                    return str || 'Coordinated Universal Time';
                },
                /**
                 * DST observed? `0 or 1`
                 * @return {number}
                 */
                I: function () {
                    var a = new Date(fmt.Y(), 0), c = Date.UTC(fmt.Y(), 0),
                        b = new Date(fmt.Y(), 6), d = Date.UTC(fmt.Y(), 6);
                    return ((a - c) !== (b - d)) ? 1 : 0;
                },
                /**
                 * Difference to GMT in hour format: `e.g. +0200`
                 * @return {string}
                 */
                O: function () {
                    var tzo = vDate.getTimezoneOffset(), a = Math.abs(tzo);
                    return (tzo > 0 ? '-' : '+') + _lpad(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                /**
                 * Difference to GMT with colon: `e.g. +02:00`
                 * @return {string}
                 */
                P: function () {
                    var O = fmt.O();
                    return (O.substr(0, 3) + ':' + O.substr(3, 2));
                },
                /**
                 * Timezone abbreviation: `e.g. EST, MDT, ...`
                 * @return {string}
                 */
                T: function () {
                    var str = (String(vDate).match(self.tzParts) || [""]).pop().replace(self.tzClip, "");
                    return str || 'UTC';
                },
                /**
                 * Timezone offset in seconds: `-43200...50400`
                 * @return {number}
                 */
                Z: function () {
                    return -vDate.getTimezoneOffset() * 60;
                },

                ////////////////////
                // FULL DATE TIME //
                ////////////////////
                /**
                 * ISO-8601 date
                 * @return {string}
                 */
                c: function () {
                    return 'Y-m-d\\TH:i:sP'.replace(backslash, doFormat);
                },
                /**
                 * RFC 2822 date
                 * @return {string}
                 */
                r: function () {
                    return 'D, d M Y H:i:s O'.replace(backslash, doFormat);
                },
                /**
                 * Seconds since UNIX epoch
                 * @return {number}
                 */
                U: function () {
                    return vDate.getTime() / 1000 || 0;
                }
            };
            return doFormat(vChar, vChar);
        },
        formatDate: function (vDate, vFormat) {
            var self = this, i, n, len, str, vChar, vDateStr = '', BACKSLASH = '\\';
            if (typeof vDate === 'string') {
                vDate = self.parseDate(vDate, vFormat);
                if (!vDate) {
                    return null;
                }
            }
            if (vDate instanceof Date) {
                len = vFormat.length;
                for (i = 0; i < len; i++) {
                    vChar = vFormat.charAt(i);
                    if (vChar === 'S' || vChar === BACKSLASH) {
                        continue;
                    }
                    if (i > 0 && vFormat.charAt(i - 1) === BACKSLASH) {
                        vDateStr += vChar;
                        continue;
                    }
                    str = self.parseFormat(vChar, vDate);
                    if (i !== (len - 1) && self.intParts.test(vChar) && vFormat.charAt(i + 1) === 'S') {
                        n = parseInt(str) || 0;
                        str += self.dateSettings.ordinal(n);
                    }
                    vDateStr += str;
                }
                return vDateStr;
            }
            return '';
        }
    };
})();
/**
 * @preserve jQuery DateTimePicker plugin v2.5.4
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */
/*global DateFormatter, document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
;(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'jquery-mousewheel'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';
    var default_options  = {
        i18n: {
            ar: { // Arabic
                months: [
                    "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
                ],
                dayOfWeekShort: [
                    "ن", "ث", "ع", "خ", "ج", "س", "ح"
                ],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: { // Romanian
                months: [
                    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
                ],
                dayOfWeekShort: [
                    "Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"
                ],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: { // Indonesian
                months: [
                    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                ],
                dayOfWeekShort: [
                    "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
                ],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: { // Icelandic
                months: [
                    "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
                ],
                dayOfWeekShort: [
                    "Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
                ],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: { // Bulgarian
                months: [
                    "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
                ],
                dayOfWeekShort: [
                    "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
                ],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: { // Persian/Farsi
                months: [
                    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
                ],
                dayOfWeekShort: [
                    'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
                ],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: { // Russian
                months: [
                    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                dayOfWeekShort: [
                    "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
                ],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: { // Ukrainian
                months: [
                    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
                ],
                dayOfWeekShort: [
                    "Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
                ],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: { // English
                months: [
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                ],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: { // Ελληνικά
                months: [
                    "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
                ],
                dayOfWeekShort: [
                    "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
                ],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: { // German
                months: [
                    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
                ],
                dayOfWeekShort: [
                    "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
                ],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: { // Dutch
                months: [
                    "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
                ],
                dayOfWeekShort: [
                    "zo", "ma", "di", "wo", "do", "vr", "za"
                ],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: { // Turkish
                months: [
                    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
                ],
                dayOfWeekShort: [
                    "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
                ],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: { //French
                months: [
                    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                ],
                dayOfWeekShort: [
                    "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
                ],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: { // Spanish
                months: [
                    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
                ],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: { // Thai
                months: [
                    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
                ],
                dayOfWeekShort: [
                    'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
                ],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: { // Polish
                months: [
                    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
                ],
                dayOfWeekShort: [
                    "nd", "pn", "wt", "śr", "cz", "pt", "sb"
                ],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: { // Portuguese
                months: [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ],
                dayOfWeekShort: [
                    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
                ],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: { // Simplified Chinese
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ]
            },
            se: { // Swedish
                months: [
                    "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
                ]
            },
            km: { // Khmer
                months: [
                    "មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឋិកា​", "ធ្នូ​"
                ],
                dayOfWeekShort: ["អាទិ​", "ចន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                dayOfWeek: ["អាទិត្យ​", "ចន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
            },
            kr: { // Korean
                months: [
                    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ],
                dayOfWeekShort: [
                    "일", "월", "화", "수", "목", "금", "토"
                ],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: { // Italian
                months: [
                    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
                ],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: { // Dansk
                months: [
                    "January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
                ],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: { // Norwegian
                months: [
                    "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
                ],
                dayOfWeekShort: [
                    "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
                ],
                dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
            },
            ja: { // Japanese
                months: [
                    "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
                ],
                dayOfWeekShort: [
                    "日", "月", "火", "水", "木", "金", "土"
                ],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: { // Vietnamese
                months: [
                    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
                ],
                dayOfWeekShort: [
                    "CN", "T2", "T3", "T4", "T5", "T6", "T7"
                ],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: { // Slovenščina
                months: [
                    "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
                ],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: { // Čeština
                months: [
                    "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
                ],
                dayOfWeekShort: [
                    "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
                ]
            },
            hu: { // Hungarian
                months: [
                    "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
                ],
                dayOfWeekShort: [
                    "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
                ],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: { //Azerbaijanian (Azeri)
                months: [
                    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
                ],
                dayOfWeekShort: [
                    "B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
                ],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: { //Bosanski
                months: [
                    "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedjelja","Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: { //Català
                months: [
                    "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
                ],
                dayOfWeekShort: [
                    "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
                ],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            'en-GB': { //English (British)
                months: [
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                ],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: { //"Eesti"
                months: [
                    "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
                ],
                dayOfWeekShort: [
                    "P", "E", "T", "K", "N", "R", "L"
                ],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: { //Euskara
                months: [
                    "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
                ],
                dayOfWeekShort: [
                    "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
                ],
                dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
            },
            fi: { //Finnish (Suomi)
                months: [
                    "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
                ],
                dayOfWeekShort: [
                    "Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
                ],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: { //Galego
                months: [
                    "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
                ],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: { //Hrvatski
                months: [
                    "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: { //Korean (한국어)
                months: [
                    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ],
                dayOfWeekShort: [
                    "일", "월", "화", "수", "목", "금", "토"
                ],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: { //Lithuanian (lietuvių)
                months: [
                    "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
                ],
                dayOfWeekShort: [
                    "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
                ],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: { //Latvian (Latviešu)
                months: [
                    "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
                ],
                dayOfWeekShort: [
                    "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
                ],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: { //Macedonian (Македонски)
                months: [
                    "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
                ],
                dayOfWeekShort: [
                    "нед", "пон", "вто", "сре", "чет", "пет", "саб"
                ],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: { //Mongolian (Монгол)
                months: [
                    "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
                ],
                dayOfWeekShort: [
                    "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
                ],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            'pt-BR': { //Português(Brasil)
                months: [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ],
                dayOfWeekShort: [
                    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
                ],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: { //Slovenčina
                months: [
                    "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
                ],
                dayOfWeekShort: [
                    "Ne", "Po", "Ut", "St", "Št", "Pi", "So"
                ],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: { //Albanian (Shqip)
                months: [
                    "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
                ],
                dayOfWeekShort: [
                    "Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"
                ],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            'sr-YU': { //Serbian (Srpski)
                months: [
                    "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedelja","Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: { //Serbian Cyrillic (Српски)
                months: [
                    "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
                ],
                dayOfWeekShort: [
                    "нед", "пон", "уто", "сре", "чет", "пет", "суб"
                ],
                dayOfWeek: ["Недеља","Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: { //Svenska
                months: [
                    "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
                ],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            'zh-TW': { //Traditional Chinese (繁體中文)
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: { //Simplified Chinese (简体中文)
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            he: { //Hebrew (עברית)
                months: [
                    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
                ],
                dayOfWeekShort: [
                    'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
                ],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: { // Armenian
                months: [
                    "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
                ],
                dayOfWeekShort: [
                    "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
                ],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: { // Kyrgyz
                months: [
                    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
                ],
                dayOfWeekShort: [
                    "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
                ],
                dayOfWeek: [
                    "Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"
                ]
            },
            rm: { // Romansh
                months: [
                    "Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"
                ],
                dayOfWeek: [
                    "Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"
                ]
            },
            ka: { // Georgian
                months: [
                    'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
                ],
                dayOfWeekShort: [
                    "კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"
                ],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            }
        },

        ownerDocument: document,
        contentWindow: window,

        value: '',
        rtl: false,

        format:	'Y/m/d H:i',
        formatTime:	'H:i',
        formatDate:	'Y/m/d',

        startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
        step: 60,
        monthChangeSpinner: true,

        closeOnDateSelect: false,
        closeOnTimeSelect: true,
        closeOnWithoutClick: true,
        closeOnInputClick: true,

        timepicker: true,
        datepicker: true,
        weeks: false,

        defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')
        defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        disabledMinTime: false,
        disabledMaxTime: false,

        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        theme: '',

        onSelectDate: function () {},
        onSelectTime: function () {},
        onChangeMonth: function () {},
        onGetWeekOfYear: function () {},
        onChangeYear: function () {},
        onChangeDateTime: function () {},
        onShow: function () {},
        onClose: function () {},
        onGenerate: function () {},

        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        next: 'xdsoft_next',
        prev : 'xdsoft_prev',
        dayOfWeekStart: 0,
        parentID: 'body',
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        prevButton: true,
        nextButton: true,
        defaultSelect: true,

        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,

        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: '',
        id: '',
        fixed: false,
        roundTime: 'round', // ceil, floor
        className: '',
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates : [],
        allowDateRe : null,
        disabledDates : [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,

        enterLikeTab: true,
        showApplyButton: false
    };

    var dateHelper = null,
        globalLocaleDefault = 'en',
        globalLocale = 'en';

    var dateFormatterOptionsDefault = {
        meridiem: ['AM', 'PM']
    };

    var initDateFormatter = function(){
        var locale = default_options.i18n[globalLocale],
            opts = {
                days: locale.dayOfWeek,
                daysShort: locale.dayOfWeekShort,
                months: locale.months,
                monthsShort: $.map(locale.months, function(n){ return n.substring(0, 3) })
            };

        if (typeof DateFormatter === 'function') {
            dateHelper = new DateFormatter({
                dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
            });
        }
    };

    // for locale settings
    $.datetimepicker = {
        setLocale: function(locale){
            var newLocale = default_options.i18n[locale]?locale:globalLocaleDefault;
            if(globalLocale != newLocale){
                globalLocale = newLocale;
                // reinit date formatter
                initDateFormatter();
            }
        },
        setDateFormatter: function(dateFormatter) {
            dateHelper = dateFormatter;
        },
        RFC_2822: 'D, d M Y H:i:s O',
        ATOM: 'Y-m-d\TH:i:sP',
        ISO_8601: 'Y-m-d\TH:i:sO',
        RFC_822: 'D, d M y H:i:s O',
        RFC_850: 'l, d-M-y H:i:s T',
        RFC_1036: 'D, d M y H:i:s O',
        RFC_1123: 'D, d M Y H:i:s O',
        RSS: 'D, d M Y H:i:s O',
        W3C: 'Y-m-d\TH:i:sP'
    };

    // first init date formatter
    initDateFormatter();

    // fix for ie8
    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function (a, b, c) {
                        return c.toUpperCase();
                    });
                }
                return el.currentStyle[prop] || null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            var i, j;
            for (i = (start || 0), j = this.length; i < j; i += 1) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        };
    }
    Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    };
    $.fn.xdsoftScroller = function (options, percent) {
        return this.each(function () {
            var timeboxparent = $(this),
                pointerEventToXY = function (e) {
                    var out = {x: 0, y: 0},
                        touch;
                    if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                        touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        out.x = touch.clientX;
                        out.y = touch.clientY;
                    } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
                        out.x = e.clientX;
                        out.y = e.clientY;
                    }
                    return out;
                },
                timebox,
                parentHeight,
                height,
                scrollbar,
                scroller,
                maximumOffset = 100,
                start = false,
                startY = 0,
                startTop = 0,
                h1 = 0,
                touchStart = false,
                startTopScroll = 0,
                calcOffset = function () {};
            if (percent === 'hide') {
                timeboxparent.find('.xdsoft_scrollbar').hide();
                return;
            }
            if (!$(this).hasClass('xdsoft_scroller_box')) {
                timebox = timeboxparent.children().eq(0);
                parentHeight = timeboxparent[0].clientHeight;
                height = timebox[0].offsetHeight;
                scrollbar = $('<div class="xdsoft_scrollbar"></div>');
                scroller = $('<div class="xdsoft_scroller"></div>');
                scrollbar.append(scroller);

                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                calcOffset = function calcOffset(event) {
                    var offset = pointerEventToXY(event).y - startY + startTopScroll;
                    if (offset < 0) {
                        offset = 0;
                    }
                    if (offset + scroller[0].offsetHeight > h1) {
                        offset = h1 - scroller[0].offsetHeight;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
                };

                scroller
                    .on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
                        if (!parentHeight) {
                            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
                        }

                        startY = pointerEventToXY(event).y;
                        startTopScroll = parseInt(scroller.css('margin-top'), 10);
                        h1 = scrollbar[0].offsetHeight;

                        if (event.type === 'mousedown' || event.type === 'touchstart') {
                            if (options.ownerDocument) {
                                $(options.ownerDocument.body).addClass('xdsoft_noselect');
                            }
                            $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
                                $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee)
                                    .off('mousemove.xdsoft_scroller', calcOffset)
                                    .removeClass('xdsoft_noselect');
                            });
                            $(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
                        } else {
                            touchStart = true;
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    })
                    .on('touchmove', function (event) {
                        if (touchStart) {
                            event.preventDefault();
                            calcOffset(event);
                        }
                    })
                    .on('touchend touchcancel', function () {
                        touchStart =  false;
                        startTopScroll = 0;
                    });

                timeboxparent
                    .on('scroll_element.xdsoft_scroller', function (event, percentage) {
                        if (!parentHeight) {
                            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
                        }
                        percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

                        scroller.css('margin-top', maximumOffset * percentage);

                        setTimeout(function () {
                            timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
                        }, 10);
                    })
                    .on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
                        var percent, sh;
                        parentHeight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        percent = parentHeight / height;
                        sh = percent * scrollbar[0].offsetHeight;
                        if (percent > 1) {
                            scroller.hide();
                        } else {
                            scroller.show();
                            scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
                            maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
                            if (noTriggerScroll !== true) {
                                timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
                            }
                        }
                    });

                timeboxparent.on('mousewheel', function (event) {
                    var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

                    top = top - (event.deltaY * 20);
                    if (top < 0) {
                        top = 0;
                    }

                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
                    event.stopPropagation();
                    return false;
                });

                timeboxparent.on('touchstart', function (event) {
                    start = pointerEventToXY(event);
                    startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
                });

                timeboxparent.on('touchmove', function (event) {
                    if (start) {
                        event.preventDefault();
                        var coord = pointerEventToXY(event);
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
                    }
                });

                timeboxparent.on('touchend touchcancel', function () {
                    start = false;
                    startTop = 0;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
        });
    };

    $.fn.datetimepicker = function (opt, opt2) {
        var result = this,
            KEY0 = 48,
            KEY9 = 57,
            _KEY0 = 96,
            _KEY9 = 105,
            CTRLKEY = 17,
            DEL = 46,
            ENTER = 13,
            ESC = 27,
            BACKSPACE = 8,
            ARROWLEFT = 37,
            ARROWUP = 38,
            ARROWRIGHT = 39,
            ARROWDOWN = 40,
            TAB = 9,
            F5 = 116,
            AKEY = 65,
            CKEY = 67,
            VKEY = 86,
            ZKEY = 90,
            YKEY = 89,
            ctrlDown	=	false,
            options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

            lazyInitTimer = 0,
            createDateTimePicker,
            destroyDateTimePicker,

            lazyInit = function (input) {
                input
                    .on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
                        if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
                            return;
                        }
                        clearTimeout(lazyInitTimer);
                        lazyInitTimer = setTimeout(function () {

                            if (!input.data('xdsoft_datetimepicker')) {
                                createDateTimePicker(input);
                            }
                            input
                                .off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback)
                                .trigger('open.xdsoft');
                        }, 100);
                    });
            };

        createDateTimePicker = function (input) {
            var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                datepicker = $('<div class="xdsoft_datepicker active"></div>'),
                month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
                    '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
                    '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
                    '<button type="button" class="xdsoft_next"></button></div>'),
                calendar = $('<div class="xdsoft_calendar"></div>'),
                timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
                timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),

                monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                triggerAfterOpen = false,
                XDSoft_datetime,

                xchangeTimer,
                timerclick,
                current_time_index,
                setPos,
                timer = 0,
                _xdsoft_datetime,
                forEachAncestorOf,
                throttle;

            if (options.id) {
                datetimepicker.attr('id', options.id);
            }
            if (options.style) {
                datetimepicker.attr('style', options.style);
            }
            if (options.weeks) {
                datetimepicker.addClass('xdsoft_showweeks');
            }
            if (options.rtl) {
                datetimepicker.addClass('xdsoft_rtl');
            }

            datetimepicker.addClass('xdsoft_' + options.theme);
            datetimepicker.addClass(options.className);

            month_picker
                .find('.xdsoft_month span')
                .after(monthselect);
            month_picker
                .find('.xdsoft_year span')
                .after(yearselect);

            month_picker
                .find('.xdsoft_month,.xdsoft_year')
                .on('touchstart mousedown.xdsoft', function (event) {
                    var select = $(this).find('.xdsoft_select').eq(0),
                        val = 0,
                        top = 0,
                        visible = select.is(':visible'),
                        items,
                        i;

                    month_picker
                        .find('.xdsoft_select')
                        .hide();
                    if (_xdsoft_datetime.currentTime) {
                        val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
                    }

                    select[visible ? 'hide' : 'show']();
                    for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
                        if (items.eq(i).data('value') === val) {
                            break;
                        } else {
                            top += items[0].offsetHeight;
                        }
                    }

                    select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
                    event.stopPropagation();
                    return false;
                });

            month_picker
                .find('.xdsoft_select')
                .xdsoftScroller(options)
                .on('touchstart mousedown.xdsoft', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                })
                .on('touchstart mousedown.xdsoft', '.xdsoft_option', function () {
                    if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    }

                    var year = _xdsoft_datetime.currentTime.getFullYear();
                    if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
                        _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
                    }

                    $(this).parent().parent().hide();

                    datetimepicker.trigger('xchange.xdsoft');
                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                });

            datetimepicker.getValue = function () {
                return _xdsoft_datetime.getCurrentTime();
            };

            datetimepicker.setOptions = function (_options) {
                var highlightedDates = {};

                options = $.extend(true, {}, options, _options);

                if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
                    options.allowTimes = $.extend(true, [], _options.allowTimes);
                }

                if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
                    options.weekends = $.extend(true, [], _options.weekends);
                }

                if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
                    options.allowDates = $.extend(true, [], _options.allowDates);
                }

                if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe)==="[object String]") {
                    options.allowDateRe = new RegExp(_options.allowDateRe);
                }

                if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
                    $.each(_options.highlightedDates, function (index, value) {
                        var splitData = $.map(value.split(','), $.trim),
                            exDesc,
                            hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
                            keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
                        if (highlightedDates[keyDate] !== undefined) {
                            exDesc = highlightedDates[keyDate].desc;
                            if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                            }
                        } else {
                            highlightedDates[keyDate] = hDate;
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
                    highlightedDates = $.extend(true, [], options.highlightedDates);
                    $.each(_options.highlightedPeriods, function (index, value) {
                        var dateTest, // start date
                            dateEnd,
                            desc,
                            hDate,
                            keyDate,
                            exDesc,
                            style;
                        if ($.isArray(value)) {
                            dateTest = value[0];
                            dateEnd = value[1];
                            desc = value[2];
                            style = value[3];
                        }
                        else {
                            var splitData = $.map(value.split(','), $.trim);
                            dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
                            dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
                            desc = splitData[2];
                            style = splitData[3];
                        }

                        while (dateTest <= dateEnd) {
                            hDate = new HighlightedDate(dateTest, desc, style);
                            keyDate = dateHelper.formatDate(dateTest, options.formatDate);
                            dateTest.setDate(dateTest.getDate() + 1);
                            if (highlightedDates[keyDate] !== undefined) {
                                exDesc = highlightedDates[keyDate].desc;
                                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                    highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                                }
                            } else {
                                highlightedDates[keyDate] = hDate;
                            }
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }

                if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
                    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
                }

                if ((options.open || options.opened) && (!options.inline)) {
                    input.trigger('open.xdsoft');
                }

                if (options.inline) {
                    triggerAfterOpen = true;
                    datetimepicker.addClass('xdsoft_inline');
                    input.after(datetimepicker).hide();
                }

                if (options.inverseButton) {
                    options.next = 'xdsoft_prev';
                    options.prev = 'xdsoft_next';
                }

                if (options.datepicker) {
                    datepicker.addClass('active');
                } else {
                    datepicker.removeClass('active');
                }

                if (options.timepicker) {
                    timepicker.addClass('active');
                } else {
                    timepicker.removeClass('active');
                }

                if (options.value) {
                    _xdsoft_datetime.setCurrentTime(options.value);
                    if (input && input.val) {
                        input.val(_xdsoft_datetime.str);
                    }
                }

                if (isNaN(options.dayOfWeekStart)) {
                    options.dayOfWeekStart = 0;
                } else {
                    options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
                }

                if (!options.timepickerScrollbar) {
                    timeboxparent.xdsoftScroller(options, 'hide');
                }

                if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
                    options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
                }

                if (options.maxDate &&  /^[\+\-](.*)$/.test(options.maxDate)) {
                    options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
                }

                applyButton.toggle(options.showApplyButton);

                month_picker
                    .find('.xdsoft_today_button')
                    .css('visibility', !options.todayButton ? 'hidden' : 'visible');

                month_picker
                    .find('.' + options.prev)
                    .css('visibility', !options.prevButton ? 'hidden' : 'visible');

                month_picker
                    .find('.' + options.next)
                    .css('visibility', !options.nextButton ? 'hidden' : 'visible');

                setMask(options);

                if (options.validateOnBlur) {
                    input
                        .off('blur.xdsoft')
                        .on('blur.xdsoft', function () {
                            if (options.allowBlank && (!$.trim($(this).val()).length || (typeof options.mask == "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_')))) {
                                $(this).val(null);
                                datetimepicker.data('xdsoft_datetime').empty();
                            } else {
                                var d = dateHelper.parseDate($(this).val(), options.format);
                                if (d) { // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                                    $(this).val(dateHelper.formatDate(d, options.format));
                                } else {
                                    var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),
                                        splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

                                    // parse the numbers as 0312 => 03:12
                                    if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                                        $(this).val([splittedHours, splittedMinutes].map(function (item) {
                                            return item > 9 ? item : '0' + item;
                                        }).join(':'));
                                    } else {
                                        $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                                    }
                                }
                                datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                            }

                            datetimepicker.trigger('changedatetime.xdsoft');
                            datetimepicker.trigger('close.xdsoft');
                        });
                }
                options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

                datetimepicker
                    .trigger('xchange.xdsoft')
                    .trigger('afterOpen.xdsoft');
            };

            datetimepicker
                .data('options', options)
                .on('touchstart mousedown.xdsoft', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    yearselect.hide();
                    monthselect.hide();
                    return false;
                });

            //scroll_element = timepicker.find('.xdsoft_time_box');
            timeboxparent.append(timebox);
            timeboxparent.xdsoftScroller(options);

            datetimepicker.on('afterOpen.xdsoft', function () {
                timeboxparent.xdsoftScroller(options);
            });

            datetimepicker
                .append(datepicker)
                .append(timepicker);

            if (options.withoutCopyright !== true) {
                datetimepicker
                    .append(xdsoft_copyright);
            }

            datepicker
                .append(month_picker)
                .append(calendar)
                .append(applyButton);

            $(options.parentID)
                .append(datetimepicker);

            XDSoft_datetime = function () {
                var _this = this;
                _this.now = function (norecursion) {
                    var d = new Date(),
                        date,
                        time;

                    if (!norecursion && options.defaultDate) {
                        date = _this.strToDateTime(options.defaultDate);
                        d.setDate(1);
                        d.setFullYear(date.getFullYear());
                        d.setMonth(date.getMonth());
                        d.setDate(date.getDate());
                    }

                    if (options.yearOffset) {
                        d.setFullYear(d.getFullYear() + options.yearOffset);
                    }

                    if (!norecursion && options.defaultTime) {
                        time = _this.strtotime(options.defaultTime);
                        d.setHours(time.getHours());
                        d.setMinutes(time.getMinutes());
                    }
                    return d;
                };

                _this.isValidDate = function (d) {
                    if (Object.prototype.toString.call(d) !== "[object Date]") {
                        return false;
                    }
                    return !isNaN(d.getTime());
                };

                _this.setCurrentTime = function (dTime, requireValidDate) {
                    if (typeof dTime === 'string') {
                        _this.currentTime = _this.strToDateTime(dTime);
                    }
                    else if (_this.isValidDate(dTime)) {
                        _this.currentTime = dTime;
                    }
                    else if (!dTime && !requireValidDate && options.allowBlank) {
                        _this.currentTime = null;
                    }
                    else {
                        _this.currentTime = _this.now();
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                };

                _this.empty = function () {
                    _this.currentTime = null;
                };

                _this.getCurrentTime = function (dTime) {
                    return _this.currentTime;
                };

                _this.nextMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() + 1,
                        year;
                    if (month === 12) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
                        month = 0;
                    }

                    year = _this.currentTime.getFullYear();

                    _this.currentTime.setDate(
                        Math.min(
                            new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
                            _this.currentTime.getDate()
                        )
                    );
                    _this.currentTime.setMonth(month);

                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.prevMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() - 1;
                    if (month === -1) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
                        month = 11;
                    }
                    _this.currentTime.setDate(
                        Math.min(
                            new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
                            _this.currentTime.getDate()
                        )
                    );
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.getWeekOfYear = function (datetime) {
                    if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
                        var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
                        if (typeof week !== 'undefined') {
                            return week;
                        }
                    }
                    var onejan = new Date(datetime.getFullYear(), 0, 1);
                    //First week of the year is th one with the first Thursday according to ISO8601
                    if(onejan.getDay()!=4)
                        onejan.setMonth(0, 1 + ((4 - onejan.getDay()+ 7) % 7));
                    return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
                };

                _this.strToDateTime = function (sDateTime) {
                    var tmpDate = [], timeOffset, currentTime;

                    if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
                        return sDateTime;
                    }

                    tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
                    if (tmpDate) {
                        tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
                    }
                    if (tmpDate  && tmpDate[2]) {
                        timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
                        currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
                    } else {
                        currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
                    }

                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now();
                    }

                    return currentTime;
                };

                _this.strToDate = function (sDate) {
                    if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
                        return sDate;
                    }

                    var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.strtotime = function (sTime) {
                    if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
                        return sTime;
                    }
                    var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.str = function () {
                    return dateHelper.formatDate(_this.currentTime, options.format);
                };
                _this.currentTime = this.now();
            };

            _xdsoft_datetime = new XDSoft_datetime();

            applyButton.on('touchend click', function (e) {//pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker
                .find('.xdsoft_today_button')
                .on('touchend mousedown.xdsoft', function () {
                    datetimepicker.data('changed', true);
                    _xdsoft_datetime.setCurrentTime(0, true);
                    datetimepicker.trigger('afterOpen.xdsoft');
                }).on('dblclick.xdsoft', function () {
                var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
                currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                minDate = _xdsoft_datetime.strToDate(options.minDate);
                minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                if (currentDate < minDate) {
                    return;
                }
                maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
                if (currentDate > maxDate) {
                    return;
                }
                input.val(_xdsoft_datetime.str());
                input.trigger('change');
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker
                .find('.xdsoft_prev,.xdsoft_next')
                .on('touchend mousedown.xdsoft', function () {
                    var $this = $(this),
                        timer = 0,
                        stop = false;

                    (function arguments_callee1(v) {
                        if ($this.hasClass(options.next)) {
                            _xdsoft_datetime.nextMonth();
                        } else if ($this.hasClass(options.prev)) {
                            _xdsoft_datetime.prevMonth();
                        }
                        if (options.monthChangeSpinner) {
                            if (!stop) {
                                timer = setTimeout(arguments_callee1, v || 100);
                            }
                        }
                    }(500));

                    $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
                        clearTimeout(timer);
                        stop = true;
                        $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
                    });
                });

            timepicker
                .find('.xdsoft_prev,.xdsoft_next')
                .on('touchend mousedown.xdsoft', function () {
                    var $this = $(this),
                        timer = 0,
                        stop = false,
                        period = 110;
                    (function arguments_callee4(v) {
                        var pheight = timeboxparent[0].clientHeight,
                            height = timebox[0].offsetHeight,
                            top = Math.abs(parseInt(timebox.css('marginTop'), 10));
                        if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
                            timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
                        } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
                            timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
                        }
                        /**
                         * Fixed bug:
                         * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
                         * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
                         * would cause a bug when you use jquery.css method.
                         * Let's say: * { transition: all .5s ease; }
                         * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
                         * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
                         * next/prev button.
                         *
                         * What we should do:
                         * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
                         */
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
                        period = (period > 10) ? 10 : period - 10;
                        if (!stop) {
                            timer = setTimeout(arguments_callee4, v || period);
                        }
                    }(500));
                    $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
                        clearTimeout(timer);
                        stop = true;
                        $([options.ownerDocument.body, options.contentWindow])
                            .off('touchend mouseup.xdsoft', arguments_callee5);
                    });
                });

            xchangeTimer = 0;
            // base handler - generating a calendar and timepicker
            datetimepicker
                .on('xchange.xdsoft', function (event) {
                    clearTimeout(xchangeTimer);
                    xchangeTimer = setTimeout(function () {

                        if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                            //In case blanks are allowed, delay construction until we have a valid date
                            if (options.allowBlank)
                                return;

                            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        }

                        var table =	'',
                            start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
                            i = 0,
                            j,
                            today = _xdsoft_datetime.now(),
                            maxDate = false,
                            minDate = false,
                            hDate,
                            day,
                            d,
                            y,
                            m,
                            w,
                            classes = [],
                            customDateSettings,
                            newRow = true,
                            time = '',
                            h = '',
                            line_time,
                            description;

                        while (start.getDay() !== options.dayOfWeekStart) {
                            start.setDate(start.getDate() - 1);
                        }

                        table += '<table><thead><tr>';

                        if (options.weeks) {
                            table += '<th></th>';
                        }

                        for (j = 0; j < 7; j += 1) {
                            table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
                        }

                        table += '</tr></thead>';
                        table += '<tbody>';

                        if (options.maxDate !== false) {
                            maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                            maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
                        }

                        if (options.minDate !== false) {
                            minDate = _xdsoft_datetime.strToDate(options.minDate);
                            minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                        }

                        while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
                            classes = [];
                            i += 1;

                            day = start.getDay();
                            d = start.getDate();
                            y = start.getFullYear();
                            m = start.getMonth();
                            w = _xdsoft_datetime.getWeekOfYear(start);
                            description = '';

                            classes.push('xdsoft_date');

                            if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
                                customDateSettings = options.beforeShowDay.call(datetimepicker, start);
                            } else {
                                customDateSettings = null;
                            }

                            if(options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]"){
                                if(!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))){
                                    classes.push('xdsoft_disabled');
                                }
                            } else if(options.allowDates && options.allowDates.length>0){
                                if(options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1){
                                    classes.push('xdsoft_disabled');
                                }
                            } else if ((maxDate !== false && start > maxDate) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
                                classes.push('xdsoft_disabled');
                            } else if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                                classes.push('xdsoft_disabled');
                            } else if (options.disabledWeekDays.indexOf(day) !== -1) {
                                classes.push('xdsoft_disabled');
                            }else if (input.is('[readonly]')) {
                                classes.push('xdsoft_disabled');
                            }

                            if (customDateSettings && customDateSettings[1] !== "") {
                                classes.push(customDateSettings[1]);
                            }

                            if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                                classes.push('xdsoft_other_month');
                            }

                            if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                                classes.push('xdsoft_current');
                            }

                            if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                                classes.push('xdsoft_today');
                            }

                            if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                                classes.push('xdsoft_weekend');
                            }

                            if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
                                hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
                                classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
                                description = hDate.desc === undefined ? '' : hDate.desc;
                            }

                            if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
                                classes.push(options.beforeShowDay(start));
                            }

                            if (newRow) {
                                table += '<tr>';
                                newRow = false;
                                if (options.weeks) {
                                    table += '<th>' + w + '</th>';
                                }
                            }

                            table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
                                '<div>' + d + '</div>' +
                                '</td>';

                            if (start.getDay() === options.dayOfWeekStartPrev) {
                                table += '</tr>';
                                newRow = true;
                            }

                            start.setDate(d + 1);
                        }
                        table += '</tbody></table>';

                        calendar.html(table);

                        month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
                        month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

                        // generate timebox
                        time = '';
                        h = '';
                        m = '';

                        line_time = function line_time(h, m) {
                            var now = _xdsoft_datetime.now(), optionDateTime, current_time,
                                isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
                            now.setHours(h);
                            h = parseInt(now.getHours(), 10);
                            now.setMinutes(m);
                            m = parseInt(now.getMinutes(), 10);
                            optionDateTime = new Date(_xdsoft_datetime.currentTime);
                            optionDateTime.setHours(h);
                            optionDateTime.setMinutes(m);
                            classes = [];
                            if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
                                classes.push('xdsoft_disabled');
                            } else if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || ((options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime()) && (options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()))) {
                                classes.push('xdsoft_disabled');
                            } else if (input.is('[readonly]')) {
                                classes.push('xdsoft_disabled');
                            }

                            current_time = new Date(_xdsoft_datetime.currentTime);
                            current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

                            if (!isALlowTimesInit) {
                                current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                            }

                            if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && ((!isALlowTimesInit && options.step > 59) || current_time.getMinutes() === parseInt(m, 10))) {
                                if (options.defaultSelect || datetimepicker.data('changed')) {
                                    classes.push('xdsoft_current');
                                } else if (options.initTime) {
                                    classes.push('xdsoft_init_time');
                                }
                            }
                            if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                                classes.push('xdsoft_today');
                            }
                            time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
                        };

                        if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
                            for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                                for (j = 0; j < 60; j += options.step) {
                                    h = (i < 10 ? '0' : '') + i;
                                    m = (j < 10 ? '0' : '') + j;
                                    line_time(h, m);
                                }
                            }
                        } else {
                            for (i = 0; i < options.allowTimes.length; i += 1) {
                                h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                                m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                                line_time(h, m);
                            }
                        }

                        timebox.html(time);

                        opt = '';
                        i = 0;

                        for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
                            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
                        }
                        yearselect.children().eq(0)
                            .html(opt);

                        for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
                            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
                        }
                        monthselect.children().eq(0).html(opt);
                        $(datetimepicker)
                            .trigger('generate.xdsoft');
                    }, 10);
                    event.stopPropagation();
                })
                .on('afterOpen.xdsoft', function () {
                    if (options.timepicker) {
                        var classType, pheight, height, top;
                        if (timebox.find('.xdsoft_current').length) {
                            classType = '.xdsoft_current';
                        } else if (timebox.find('.xdsoft_init_time').length) {
                            classType = '.xdsoft_init_time';
                        }
                        if (classType) {
                            pheight = timeboxparent[0].clientHeight;
                            height = timebox[0].offsetHeight;
                            top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
                            if ((height - pheight) < top) {
                                top = height - pheight;
                            }
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
                        } else {
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
                        }
                    }
                });

            timerclick = 0;
            calendar
                .on('touchend click.xdsoft', 'td', function (xdevent) {
                    xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
                    timerclick += 1;
                    var $this = $(this),
                        currentTime = _xdsoft_datetime.currentTime;

                    if (currentTime === undefined || currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        currentTime = _xdsoft_datetime.currentTime;
                    }

                    if ($this.hasClass('xdsoft_disabled')) {
                        return false;
                    }

                    currentTime.setDate(1);
                    currentTime.setFullYear($this.data('year'));
                    currentTime.setMonth($this.data('month'));
                    currentTime.setDate($this.data('date'));

                    datetimepicker.trigger('select.xdsoft', [currentTime]);

                    input.val(_xdsoft_datetime.str());

                    if (options.onSelectDate &&	$.isFunction(options.onSelectDate)) {
                        options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                    }

                    datetimepicker.data('changed', true);
                    datetimepicker.trigger('xchange.xdsoft');
                    datetimepicker.trigger('changedatetime.xdsoft');
                    if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
                        datetimepicker.trigger('close.xdsoft');
                    }
                    setTimeout(function () {
                        timerclick = 0;
                    }, 200);
                });

            timebox
                .on('touchend click.xdsoft', 'div', function (xdevent) {
                    xdevent.stopPropagation();
                    var $this = $(this),
                        currentTime = _xdsoft_datetime.currentTime;

                    if (currentTime === undefined || currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        currentTime = _xdsoft_datetime.currentTime;
                    }

                    if ($this.hasClass('xdsoft_disabled')) {
                        return false;
                    }
                    currentTime.setHours($this.data('hour'));
                    currentTime.setMinutes($this.data('minute'));
                    datetimepicker.trigger('select.xdsoft', [currentTime]);

                    datetimepicker.data('input').val(_xdsoft_datetime.str());

                    if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
                        options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                    }
                    datetimepicker.data('changed', true);
                    datetimepicker.trigger('xchange.xdsoft');
                    datetimepicker.trigger('changedatetime.xdsoft');
                    if (options.inline !== true && options.closeOnTimeSelect === true) {
                        datetimepicker.trigger('close.xdsoft');
                    }
                });

            datepicker
                .on('mousewheel.xdsoft', function (event) {
                    if (!options.scrollMonth) {
                        return true;
                    }
                    if (event.deltaY < 0) {
                        _xdsoft_datetime.nextMonth();
                    } else {
                        _xdsoft_datetime.prevMonth();
                    }
                    return false;
                });

            input
                .on('mousewheel.xdsoft', function (event) {
                    if (!options.scrollInput) {
                        return true;
                    }
                    if (!options.datepicker && options.timepicker) {
                        current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
                        if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
                            current_time_index += event.deltaY;
                        }
                        if (timebox.children().eq(current_time_index).length) {
                            timebox.children().eq(current_time_index).trigger('mousedown');
                        }
                        return false;
                    }
                    if (options.datepicker && !options.timepicker) {
                        datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
                        if (input.val) {
                            input.val(_xdsoft_datetime.str());
                        }
                        datetimepicker.trigger('changedatetime.xdsoft');
                        return false;
                    }
                });

            datetimepicker
                .on('changedatetime.xdsoft', function (event) {
                    if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
                        var $input = datetimepicker.data('input');
                        options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
                        delete options.value;
                        $input.trigger('change');
                    }
                })
                .on('generate.xdsoft', function () {
                    if (options.onGenerate && $.isFunction(options.onGenerate)) {
                        options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    if (triggerAfterOpen) {
                        datetimepicker.trigger('afterOpen.xdsoft');
                        triggerAfterOpen = false;
                    }
                })
                .on('click.xdsoft', function (xdevent) {
                    xdevent.stopPropagation();
                });

            current_time_index = 0;

            /**
             * Runs the callback for each of the specified node's ancestors.
             *
             * Return FALSE from the callback to stop ascending.
             *
             * @param {DOMNode} node
             * @param {Function} callback
             * @returns {undefined}
             */
            forEachAncestorOf = function (node, callback) {
                do {
                    node = node.parentNode;

                    if (callback(node) === false) {
                        break;
                    }
                } while (node.nodeName !== 'HTML');
            };

            /**
             * Sets the position of the picker.
             *
             * @returns {undefined}
             */
            setPos = function () {
                var dateInputOffset,
                    dateInputElem,
                    verticalPosition,
                    left,
                    position,
                    datetimepickerElem,
                    dateInputHasFixedAncestor,
                    $dateInput,
                    windowWidth,
                    verticalAnchorEdge,
                    datetimepickerCss,
                    windowHeight,
                    windowScrollTop;

                $dateInput = datetimepicker.data('input');
                dateInputOffset = $dateInput.offset();
                dateInputElem = $dateInput[0];

                verticalAnchorEdge = 'top';
                verticalPosition = (dateInputOffset.top + dateInputElem.offsetHeight) - 1;
                left = dateInputOffset.left;
                position = "absolute";

                windowWidth = $(options.contentWindow).width();
                windowHeight = $(options.contentWindow).height();
                windowScrollTop = $(options.contentWindow).scrollTop();

                if ((options.ownerDocument.documentElement.clientWidth - dateInputOffset.left) < datepicker.parent().outerWidth(true)) {
                    var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
                    left = left - diff;
                }

                if ($dateInput.parent().css('direction') === 'rtl') {
                    left -= (datetimepicker.outerWidth() - $dateInput.outerWidth());
                }

                if (options.fixed) {
                    verticalPosition -= windowScrollTop;
                    left -= $(options.contentWindow).scrollLeft();
                    position = "fixed";
                } else {
                    dateInputHasFixedAncestor = false;

                    forEachAncestorOf(dateInputElem, function (ancestorNode) {
                        if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
                            dateInputHasFixedAncestor = true;
                            return false;
                        }
                    });

                    if (dateInputHasFixedAncestor) {
                        position = 'fixed';

                        //If the picker won't fit entirely within the viewport then display it above the date input.
                        if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
                            verticalAnchorEdge = 'bottom';
                            verticalPosition = (windowHeight + windowScrollTop) - dateInputOffset.top;
                        } else {
                            verticalPosition -= windowScrollTop;
                        }
                    } else {
                        if (verticalPosition + dateInputElem.offsetHeight > windowHeight + windowScrollTop) {
                            verticalPosition = dateInputOffset.top - dateInputElem.offsetHeight + 1;
                        }
                    }

                    if (verticalPosition < 0) {
                        verticalPosition = 0;
                    }

                    if (left + dateInputElem.offsetWidth > windowWidth) {
                        left = windowWidth - dateInputElem.offsetWidth;
                    }
                }

                datetimepickerElem = datetimepicker[0];

                forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
                    var ancestorNodePosition;

                    ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');

                    if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
                        left = left - ((windowWidth - ancestorNode.offsetWidth) / 2);
                        return false;
                    }
                });

                datetimepickerCss = {
                    position: position,
                    left: left,
                    top: '',  //Initialize to prevent previous values interfering with new ones.
                    bottom: ''  //Initialize to prevent previous values interfering with new ones.
                };

                datetimepickerCss[verticalAnchorEdge] = verticalPosition;

                datetimepicker.css(datetimepickerCss);
            };

            datetimepicker
                .on('open.xdsoft', function (event) {
                    var onShow = true;
                    if (options.onShow && $.isFunction(options.onShow)) {
                        onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                    }
                    if (onShow !== false) {
                        datetimepicker.show();
                        setPos();
                        $(options.contentWindow)
                            .off('resize.xdsoft', setPos)
                            .on('resize.xdsoft', setPos);

                        if (options.closeOnWithoutClick) {
                            $([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
                                datetimepicker.trigger('close.xdsoft');
                                $([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
                            });
                        }
                    }
                })
                .on('close.xdsoft', function (event) {
                    var onClose = true;
                    month_picker
                        .find('.xdsoft_month,.xdsoft_year')
                        .find('.xdsoft_select')
                        .hide();
                    if (options.onClose && $.isFunction(options.onClose)) {
                        onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                    }
                    if (onClose !== false && !options.opened && !options.inline) {
                        datetimepicker.hide();
                    }
                    event.stopPropagation();
                })
                .on('toggle.xdsoft', function () {
                    if (datetimepicker.is(':visible')) {
                        datetimepicker.trigger('close.xdsoft');
                    } else {
                        datetimepicker.trigger('open.xdsoft');
                    }
                })
                .data('input', input);

            timer = 0;

            datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
            datetimepicker.setOptions(options);

            function getCurrentValue() {
                var ct = false, time;

                if (options.startDate) {
                    ct = _xdsoft_datetime.strToDate(options.startDate);
                } else {
                    ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
                    if (ct) {
                        ct = _xdsoft_datetime.strToDateTime(ct);
                    } else if (options.defaultDate) {
                        ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
                        if (options.defaultTime) {
                            time = _xdsoft_datetime.strtotime(options.defaultTime);
                            ct.setHours(time.getHours());
                            ct.setMinutes(time.getMinutes());
                        }
                    }
                }

                if (ct && _xdsoft_datetime.isValidDate(ct)) {
                    datetimepicker.data('changed', true);
                } else {
                    ct = '';
                }

                return ct || 0;
            }

            function setMask(options) {

                var isValidValue = function (mask, value) {
                        var reg = mask
                            .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
                            .replace(/_/g, '{digit+}')
                            .replace(/([0-9]{1})/g, '{digit$1}')
                            .replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
                            .replace(/\{digit[\+]\}/g, '[0-9_]{1}');
                        return (new RegExp(reg)).test(value);
                    },
                    getCaretPos = function (input) {
                        try {
                            if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
                                var range = options.ownerDocument.selection.createRange();
                                return range.getBookmark().charCodeAt(2) - 2;
                            }
                            if (input.setSelectionRange) {
                                return input.selectionStart;
                            }
                        } catch (e) {
                            return 0;
                        }
                    },
                    setCaretPos = function (node, pos) {
                        node = (typeof node === "string" || node instanceof String) ? options.ownerDocument.getElementById(node) : node;
                        if (!node) {
                            return false;
                        }
                        if (node.createTextRange) {
                            var textRange = node.createTextRange();
                            textRange.collapse(true);
                            textRange.moveEnd('character', pos);
                            textRange.moveStart('character', pos);
                            textRange.select();
                            return true;
                        }
                        if (node.setSelectionRange) {
                            node.setSelectionRange(pos, pos);
                            return true;
                        }
                        return false;
                    };
                if(options.mask) {
                    input.off('keydown.xdsoft');
                }
                if (options.mask === true) {
                    if (typeof moment != 'undefined') {
                        options.mask = options.format
                            .replace(/Y{4}/g, '9999')
                            .replace(/Y{2}/g, '99')
                            .replace(/M{2}/g, '19')
                            .replace(/D{2}/g, '39')
                            .replace(/H{2}/g, '29')
                            .replace(/m{2}/g, '59')
                            .replace(/s{2}/g, '59');
                    } else {
                        options.mask = options.format
                            .replace(/Y/g, '9999')
                            .replace(/F/g, '9999')
                            .replace(/m/g, '19')
                            .replace(/d/g, '39')
                            .replace(/H/g, '29')
                            .replace(/i/g, '59')
                            .replace(/s/g, '59');
                    }
                }

                if ($.type(options.mask) === 'string') {
                    if (!isValidValue(options.mask, input.val())) {
                        input.val(options.mask.replace(/[0-9]/g, '_'));
                        setCaretPos(input[0], 0);
                    }

                    input.on('keydown.xdsoft', function (event) {
                        var val = this.value,
                            key = event.which,
                            pos,
                            digit;

                        if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {
                            pos = getCaretPos(this);
                            digit = (key !== BACKSPACE && key !== DEL) ? String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key) : '_';

                            if ((key === BACKSPACE || key === DEL) && pos) {
                                pos -= 1;
                                digit = '_';
                            }

                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
                            }

                            val = val.substr(0, pos) + digit + val.substr(pos + 1);
                            if ($.trim(val) === '') {
                                val = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                if (pos === options.mask.length) {
                                    event.preventDefault();
                                    return false;
                                }
                            }

                            pos += (key === BACKSPACE || key === DEL) ? 0 : 1;
                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
                            }

                            if (isValidValue(options.mask, val)) {
                                this.value = val;
                                setCaretPos(this, pos);
                            } else if ($.trim(val) === '') {
                                this.value = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                input.trigger('error_input.xdsoft');
                            }
                        } else {
                            if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                                return true;
                            }
                        }

                        event.preventDefault();
                        return false;
                    });
                }
            }

            _xdsoft_datetime.setCurrentTime(getCurrentValue());

            input
                .data('xdsoft_datetimepicker', datetimepicker)
                .on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
                    if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
                        return;
                    }
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        if (input.is(':disabled')) {
                            return;
                        }

                        triggerAfterOpen = true;
                        _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
                        if(options.mask) {
                            setMask(options);
                        }
                        datetimepicker.trigger('open.xdsoft');
                    }, 100);
                })
                .on('keydown.xdsoft', function (event) {
                    var elementSelector,
                        key = event.which;
                    if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
                        elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
                        datetimepicker.trigger('close.xdsoft');
                        elementSelector.eq(elementSelector.index(this) + 1).focus();
                        return false;
                    }
                    if ([TAB].indexOf(key) !== -1) {
                        datetimepicker.trigger('close.xdsoft');
                        return true;
                    }
                })
                .on('blur.xdsoft', function () {
                    datetimepicker.trigger('close.xdsoft');
                });
        };
        destroyDateTimePicker = function (input) {
            var datetimepicker = input.data('xdsoft_datetimepicker');
            if (datetimepicker) {
                datetimepicker.data('xdsoft_datetime', null);
                datetimepicker.remove();
                input
                    .data('xdsoft_datetimepicker', null)
                    .off('.xdsoft');
                $(options.contentWindow).off('resize.xdsoft');
                $([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
                if (input.unmousewheel) {
                    input.unmousewheel();
                }
            }
        };
        $(options.ownerDocument)
            .off('keydown.xdsoftctrl keyup.xdsoftctrl')
            .on('keydown.xdsoftctrl', function (e) {
                if (e.keyCode === CTRLKEY) {
                    ctrlDown = true;
                }
            })
            .on('keyup.xdsoftctrl', function (e) {
                if (e.keyCode === CTRLKEY) {
                    ctrlDown = false;
                }
            });

        this.each(function () {
            var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
            if (datetimepicker) {
                if ($.type(opt) === 'string') {
                    switch (opt) {
                        case 'show':
                            $(this).select().focus();
                            datetimepicker.trigger('open.xdsoft');
                            break;
                        case 'hide':
                            datetimepicker.trigger('close.xdsoft');
                            break;
                        case 'toggle':
                            datetimepicker.trigger('toggle.xdsoft');
                            break;
                        case 'destroy':
                            destroyDateTimePicker($(this));
                            break;
                        case 'reset':
                            this.value = this.defaultValue;
                            if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                                datetimepicker.data('changed', false);
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                            break;
                        case 'validate':
                            $input = datetimepicker.data('input');
                            $input.trigger('blur.xdsoft');
                            break;
                        default:
                            if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                                result = datetimepicker[opt](opt2);
                            }
                    }
                } else {
                    datetimepicker
                        .setOptions(opt);
                }
                return 0;
            }
            if ($.type(opt) !== 'string') {
                if (!options.lazyInit || options.open || options.inline) {
                    createDateTimePicker($(this));
                } else {
                    lazyInit($(this));
                }
            }
        });

        return result;
    };

    $.fn.datetimepicker.defaults = default_options;

    function HighlightedDate(date, desc, style) {
        "use strict";
        this.date = date;
        this.desc = desc;
        this.style = style;
    }
}));

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
            ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));