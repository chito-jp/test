(() => {
  "use strict";
  var t = {
      191: (t, e, i) => {
        i.d(e, { Z: () => s });
        var r = i(645),
          o = i.n(r)()(function (t) {
            return t[1];
          });
        o.push([
          t.id,
          '@keyframes tom-editor-caret-blinking{0%{border-left-color:#333}50%{border-left-color:transparent}}.tom-editor__caret{background:transparent;border:none;border-left:solid .15rem;display:none;height:1.25rem;outline:none;overflow:hidden;padding:0;pointer-events:none;position:absolute;resize:none;width:0}.tom-editor__caret--animation{animation:tom-editor-caret-blinking 1.25s steps(1) infinite both}.tom-editor__caret--focus{display:inline-block}.tom-editor__editor{background:#fff;bottom:0;display:flex;font:normal 1rem/1.25rem Consolas,"Courier New",monospace;justify-content:space-between;left:0;overflow:hidden;position:absolute;right:0;top:0;user-select:none;white-space:pre;width:100%}.tom-editor__editor-wrapper{height:100%;position:relative;width:100%}.tom-editor__horizontal-scrollbar-area{bottom:0;height:1rem;position:absolute;z-index:1}.tom-editor__horizontal-scrollbar-area__horizontal-scrollbar{background:#eee;display:none;height:100%;position:absolute}.tom-editor__horizontal-scrollbar-area__horizontal-scrollbar:hover{background:#ddd}.tom-editor__horizontal-scrollbar-area__horizontal-scrollbar:active{background:#ccc}.tom-editor__horizontal-scrollbar-area__horizontal-scrollbar--valid{display:block}.tom-editor__line-number-area{background:#fff;cursor:default;flex:0 0 calc(5ch + 2rem);overflow:hidden;text-align:right;z-index:1}.tom-editor__line-number-area__line-number{color:#ccc;padding:0 2rem 0 0}.tom-editor__line-number-area__line-number::selection{background:transparent}.tom-editor__line-number-area__line-number:not(.tom-editor__line-number-area__line-number--focus,.tom-editor__line-number-area__line-number--read-only):hover{color:#999}.tom-editor__line-number-area__line-number:last-of-type{height:100%}.tom-editor__line-number-area__line-number--focus{color:#666}.tom-editor__text-area{background:#fff;cursor:text;flex:1 1 auto;overflow:hidden}.tom-editor__text-area__character{display:inline-block}.tom-editor__text-area__character::selection{background:transparent}.tom-editor__text-area__character--eol{margin:0 3rem 0 0}.tom-editor__text-area__character--select{background:#def}.tom-editor__text-area__text-line:last-of-type{height:100%}.tom-editor__text-area__text-lines-wrapper{display:inline-block;height:100%;min-width:100%}.tom-editor__underline{border-bottom:.1rem solid #eee;height:1.25rem;pointer-events:none;position:absolute;display:none}.tom-editor__underline--valid{display:block}.tom-editor__vertical-scrollbar-area{background:#fff;border-left:.1rem solid #eee;flex:0 0 1rem;position:relative;width:1rem;z-index:1}.tom-editor__vertical-scrollbar-area__vertical-scrollbar{background:#eee;display:none;position:absolute;width:100%}.tom-editor__vertical-scrollbar-area__vertical-scrollbar:hover{background:#ddd}.tom-editor__vertical-scrollbar-area__vertical-scrollbar:active{background:#ccc}.tom-editor__vertical-scrollbar-area__vertical-scrollbar--valid{display:block}',
          "",
        ]);
        const s = o;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var i = t(e);
                return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i;
              }).join("");
            }),
            (e.i = function (t, i, r) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var o = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var n = this[s][0];
                  null != n && (o[n] = !0);
                }
              for (var a = 0; a < t.length; a++) {
                var l = [].concat(t[a]);
                (r && o[l[0]]) ||
                  (i &&
                    (l[2]
                      ? (l[2] = "".concat(i, " and ").concat(l[2]))
                      : (l[2] = i)),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      674: (t, e, i) => {
        i.r(e), i.d(e, { default: () => g });
        var r = i(379),
          o = i.n(r),
          s = i(795),
          n = i.n(s),
          a = i(569),
          l = i.n(a),
          c = i(565),
          h = i.n(c),
          d = i(216),
          u = i.n(d),
          f = i(589),
          p = i.n(f),
          m = i(191),
          v = {};
        (v.styleTagTransform = p()),
          (v.setAttributes = h()),
          (v.insert = l().bind(null, "head")),
          (v.domAPI = n()),
          (v.insertStyleElement = u()),
          o()(m.Z, v);
        const g = m.Z && m.Z.locals ? m.Z.locals : void 0;
      },
      379: (t) => {
        var e = [];
        function i(t) {
          for (var i = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              i = r;
              break;
            }
          return i;
        }
        function r(t, r) {
          for (var s = {}, n = [], a = 0; a < t.length; a++) {
            var l = t[a],
              c = r.base ? l[0] + r.base : l[0],
              h = s[c] || 0,
              d = "".concat(c, " ").concat(h);
            s[c] = h + 1;
            var u = i(d),
              f = { css: l[1], media: l[2], sourceMap: l[3] };
            -1 !== u
              ? (e[u].references++, e[u].updater(f))
              : e.push({ identifier: d, updater: o(f, r), references: 1 }),
              n.push(d);
          }
          return n;
        }
        function o(t, e) {
          var i = e.domAPI(e);
          return (
            i.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap
                )
                  return;
                i.update((t = e));
              } else i.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var s = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var n = 0; n < s.length; n++) {
              var a = i(s[n]);
              e[a].references--;
            }
            for (var l = r(t, o), c = 0; c < s.length; c++) {
              var h = i(s[c]);
              0 === e[h].references && (e[h].updater(), e.splice(h, 1));
            }
            s = l;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, i) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var i = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                i instanceof window.HTMLIFrameElement
              )
                try {
                  i = i.contentDocument.head;
                } catch (t) {
                  i = null;
                }
              e[t] = i;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(i);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e), e;
        };
      },
      565: (t, e, i) => {
        t.exports = function (t) {
          var e = i.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (i) {
              !(function (t, e, i) {
                var r = i.css,
                  o = i.media,
                  s = i.sourceMap;
                o ? t.setAttribute("media", o) : t.removeAttribute("media"),
                  s &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        " */",
                      )),
                  e.styleTagTransform(r, t);
              })(e, t, i);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      881: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Caret = void 0),
          (e.Caret = class {
            constructor(t, e) {
              (this.createCaret = () => {
                const t = document.createElement("textarea");
                return t.classList.add(this.styleClass.caret.element), t;
              }),
                (this.definePublishingEventListeners = () => {
                  this.readonlyFlag ||
                    (this.caret.addEventListener("compositionend", () => {
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-compositionend", {}),
                      );
                    }),
                    this.caret.addEventListener("compositionstart", () => {
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-compositionstart", {}),
                      );
                    }),
                    this.caret.addEventListener("blur", () => {
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-blur", {}),
                      );
                    }),
                    this.caret.addEventListener("input", (t) => {
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-input", {
                          detail: {
                            data: t.data,
                            selectionStart: this.caret.selectionStart,
                          },
                        }),
                      );
                    }),
                    this.caret.addEventListener("keydown", (t) => {
                      t.preventDefault(),
                        this.root.dispatchEvent(
                          new CustomEvent("TOMEditor-keydown", {
                            detail: {
                              ctrlKey: t.ctrlKey,
                              key: t.key,
                              shiftKey: t.shiftKey,
                            },
                          }),
                        );
                    }));
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-firstinitialize",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "Caret.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                        );
                      t.detail.editor.appendChild(this.caret);
                    },
                  ),
                    this.readonlyFlag ||
                      this.root.addEventListener(
                        "TOMEditor-movefocuspointposition",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "Caret.prototype.defineSubscribingEventListeners: TOMEditor-movefocuspointpositionイベントのdetailプロパティが空です。",
                            );
                          null === t.detail.left || null === t.detail.top
                            ? this.takeCaret()
                            : this.putCaret(t.detail.left, t.detail.top);
                        },
                      );
                }),
                (this.putCaret = (t, e) => {
                  this.caret.classList.add(
                    this.styleClass.caret.modifier.focus,
                  ),
                    (this.caret.style.left = `${t}px`),
                    (this.caret.style.top = `${e}px`),
                    this.caret.focus(),
                    this.caret.classList.remove(
                      this.styleClass.caret.modifier.animation,
                    ),
                    setTimeout(() => {
                      this.caret.classList.add(
                        this.styleClass.caret.modifier.animation,
                      );
                    }, 50);
                }),
                (this.takeCaret = () => {
                  this.caret.classList.remove(
                    this.styleClass.caret.modifier.animation,
                    this.styleClass.caret.modifier.focus,
                  );
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.styleClass = {
                  caret: {
                    element: "tom-editor__caret",
                    modifier: {
                      animation: "tom-editor__caret--animation",
                      focus: "tom-editor__caret--focus",
                    },
                  },
                }),
                (this.caret = this.createCaret()),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      384: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Editor = void 0),
          (e.Editor = class {
            constructor(t, e, i) {
              (this.createEditor = () => {
                const t = document.createElement("div");
                return t.classList.add(this.styleClass.editor.element), t;
              }),
                (this.createEditorWrapper = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.editorWrapper.element), t
                  );
                }),
                (this.definePublishingEventListeners = () => {
                  this.editor.addEventListener("mousedown", (t) => {
                    t.preventDefault();
                  }),
                    this.editor.addEventListener("mousemove", (t) => {
                      if (null === t.target)
                        throw new Error(
                          "Editor.prototype.definePublishingEventListeners: mousedownイベントのtargetプロパティが空です。",
                        );
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-mousemove", {
                          detail: { left: t.x, target: t.target, top: t.y },
                        }),
                      );
                    }),
                    this.editor.addEventListener("touchend", () => {
                      (this.lastTouchLeft = null), (this.lastTouchTop = null);
                    }),
                    this.editor.addEventListener("touchmove", (t) => {
                      null !== this.lastTouchLeft &&
                        t.touches[0].pageX !== this.lastTouchLeft &&
                        (this.dispatchHorizontalScrollEvent(
                          t.touches[0].pageX - this.lastTouchLeft,
                        ),
                        (this.lastTouchLeft = t.touches[0].pageX)),
                        null !== this.lastTouchTop &&
                          t.touches[0].pageY !== this.lastTouchTop &&
                          (this.dispatchVerticalScrollEvent(
                            t.touches[0].pageY - this.lastTouchTop,
                          ),
                          (this.lastTouchTop = t.touches[0].pageY));
                    }),
                    this.editor.addEventListener("touchstart", (t) => {
                      (this.lastTouchLeft = t.touches[0].pageX),
                        (this.lastTouchTop = t.touches[0].pageY);
                    }),
                    this.editor.addEventListener("wheel", (t) => {
                      const e = Math.sign(t.deltaY) * this.constantScrollSize,
                        i = [];
                      let r = t.target;
                      for (; null !== r; ) i.push(r), (r = r.parentElement);
                      i.includes(this.horizontalScrollbarArea)
                        ? this.dispatchHorizontalScrollEvent(e)
                        : this.dispatchVerticalScrollEvent(e);
                    }),
                    window.addEventListener("mouseup", () => {
                      this.root.dispatchEvent(
                        new CustomEvent("TOMEditor-mouseup"),
                      );
                    }),
                    this.readonlyFlag;
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-firstinitialize",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "Editor.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                        );
                      this.horizontalScrollbarArea =
                        t.detail.horizontalScrollbarArea;
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-mousedownhorizontalscrollbararea",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "Editor.prototype.defineSubscribingEventListeners: TOMEditor-mousedownhorizontalscrollbarareaイベントのdetailプロパティが空です。",
                          );
                        this.dispatchHorizontalScrollEvent(
                          t.detail.scrollDirection * this.constantScrollSize,
                        );
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-mousedownverticalscrollbararea",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "Editor.prototype.defineSubscribingEventListeners: TOMEditor-mousedownverticalscrollbarareaイベントのdetailプロパティが空です。",
                          );
                        this.dispatchVerticalScrollEvent(
                          t.detail.scrollDirection * this.constantScrollSize,
                        );
                      },
                    ),
                    this.readonlyFlag;
                }),
                (this.dispatchHorizontalScrollEvent = (t) => {
                  this.root.dispatchEvent(
                    new CustomEvent("TOMEditor-horizontalscroll", {
                      detail: { scrollSize: t },
                    }),
                  );
                }),
                (this.dispatchVerticalScrollEvent = (t) => {
                  this.root.dispatchEvent(
                    new CustomEvent("TOMEditor-verticalscroll", {
                      detail: { scrollSize: t },
                    }),
                  );
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.lastTouchLeft = null),
                (this.lastTouchTop = null),
                (this.styleClass = {
                  editor: { element: "tom-editor__editor" },
                  editorWrapper: { element: "tom-editor__editor-wrapper" },
                }),
                (this.editorWrapper = this.createEditorWrapper()),
                i.appendChild(this.editorWrapper),
                (this.editor = this.createEditor()),
                this.editorWrapper.appendChild(this.editor),
                (this.constantScrollSize =
                  3.5 * parseFloat(getComputedStyle(this.editor).lineHeight)),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      323: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.HorizontalScrollbarArea = void 0),
          (e.HorizontalScrollbarArea = class {
            constructor(t, e) {
              (this.adjustHorizontalScrollbarStyle = () => {
                1 !== this.lastViewportWidthRatio
                  ? ((this.horizontalScrollbar.style.left =
                      this.lastScrollLeft * this.lastViewportWidthRatio + "px"),
                    this.horizontalScrollbar.classList.add(
                      this.styleClass.horizontalScrollbar.modifier.valid,
                    ),
                    (this.horizontalScrollbar.style.width =
                      100 * this.lastViewportWidthRatio + "%"))
                  : this.horizontalScrollbar.classList.contains(
                      this.styleClass.horizontalScrollbar.modifier.valid,
                    ) &&
                    this.horizontalScrollbar.classList.remove(
                      this.styleClass.horizontalScrollbar.modifier.valid,
                    );
              }),
                (this.createHorizontalScrollbar = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(
                      this.styleClass.horizontalScrollbar.element,
                    ),
                    t
                  );
                }),
                (this.createHorizontalScrollbarArea = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(
                      this.styleClass.horizontalScrollbarArea.element,
                    ),
                    t
                  );
                }),
                (this.definePublishingEventListeners = () => {
                  this.horizontalScrollbar.addEventListener(
                    "mousedown",
                    (t) => {
                      this.draggingLastLeft = t.x;
                    },
                  ),
                    this.horizontalScrollbarArea.addEventListener(
                      "mousedown",
                      (t) => {
                        if (t.target === this.horizontalScrollbar) return;
                        let e;
                        (e =
                          t.x <
                          this.horizontalScrollbar.getBoundingClientRect().left
                            ? -1
                            : 1),
                          this.root.dispatchEvent(
                            new CustomEvent(
                              "TOMEditor-mousedownhorizontalscrollbararea",
                              { detail: { scrollDirection: e } },
                            ),
                          );
                      },
                    ),
                    this.readonlyFlag;
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-changetextareascrollleft",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: changetextareascrollleftイベントのdetailプロパティが空です。",
                        );
                      (this.lastScrollLeft = t.detail.scrollLeft),
                        this.adjustHorizontalScrollbarStyle();
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-changetextareaviewportwidthratio",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: changetextareaviewportwidthratioイベントのdetailプロパティが空です。",
                          );
                        (this.lastViewportWidthRatio =
                          t.detail.viewportWidthRatio),
                          this.adjustHorizontalScrollbarStyle();
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-firstinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                          );
                        t.detail.editor.appendChild(
                          this.horizontalScrollbarArea,
                        );
                      },
                    ),
                    this.root.addEventListener("TOMEditor-mousemove", (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-mousemoveイベントのdetailプロパティが空です。",
                        );
                      if (null === this.draggingLastLeft) return;
                      if (t.detail.left === this.draggingLastLeft) return;
                      const e = t.detail.left - this.draggingLastLeft;
                      (this.draggingLastLeft = t.detail.left),
                        this.root.dispatchEvent(
                          new CustomEvent("TOMEditor-draghorizontalscrollbar", {
                            detail: { distance: e },
                          }),
                        );
                    }),
                    this.root.addEventListener("TOMEditor-mouseup", () => {
                      this.draggingLastLeft = null;
                    }),
                    this.root.addEventListener(
                      "TOMEditor-resizetextareawidth",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-resizetextareawidthイベントのdetailプロパティが空です。",
                          );
                        (this.horizontalScrollbarArea.style.width = `${t.detail.width}px`),
                          this.adjustHorizontalScrollbarStyle();
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-secondinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "HorizontalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-secondinitializeイベントのdetailプロパティが空です。",
                          );
                        this.horizontalScrollbarArea.style.left = `${t.detail.lineNumberAreaWidth}px`;
                      },
                    ),
                    this.readonlyFlag;
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.draggingLastLeft = null),
                (this.lastScrollLeft = 0),
                (this.lastViewportWidthRatio = 1),
                (this.styleClass = {
                  horizontalScrollbar: {
                    element:
                      "tom-editor__horizontal-scrollbar-area__horizontal-scrollbar",
                    modifier: {
                      valid:
                        "tom-editor__horizontal-scrollbar-area__horizontal-scrollbar--valid",
                    },
                  },
                  horizontalScrollbarArea: {
                    element: "tom-editor__horizontal-scrollbar-area",
                  },
                }),
                (this.horizontalScrollbarArea =
                  this.createHorizontalScrollbarArea()),
                (this.horizontalScrollbar = this.createHorizontalScrollbar()),
                this.horizontalScrollbarArea.appendChild(
                  this.horizontalScrollbar,
                ),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      388: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LineNumberArea = void 0),
          (e.LineNumberArea = class {
            constructor(t, e) {
              (this.appendLineNumber = () => {
                const t = this.createLineNumber();
                this.lineNumberList.push(t), this.lineNumberArea.appendChild(t);
              }),
                (this.changeFocusedLineNumber = (t) => {
                  if (null === t) {
                    if (null === this.focusedLineNumberIndex) return;
                    return (
                      void 0 !==
                        this.lineNumberList[this.focusedLineNumberIndex] &&
                        this.lineNumberList[
                          this.focusedLineNumberIndex
                        ].classList.remove(
                          this.styleClass.lineNumber.modifier.focus,
                        ),
                      void (this.focusedLineNumberIndex = null)
                    );
                  }
                  null !== this.focusedLineNumberIndex &&
                    void 0 !==
                      this.lineNumberList[this.focusedLineNumberIndex] &&
                    this.lineNumberList[
                      this.focusedLineNumberIndex
                    ].classList.remove(
                      this.styleClass.lineNumber.modifier.focus,
                    ),
                    (this.focusedLineNumberIndex = t),
                    this.lineNumberList[
                      this.focusedLineNumberIndex
                    ].classList.add(this.styleClass.lineNumber.modifier.focus);
                }),
                (this.createLineNumber = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.lineNumber.element),
                    this.lineNumberArea.classList.contains(
                      this.styleClass.lineNumberArea.modifier.readOnly,
                    ) &&
                      t.classList.add(
                        this.styleClass.lineNumber.modifier.readOnly,
                      ),
                    (t.textContent = `${this.lineNumberList.length + 1}`),
                    t
                  );
                }),
                (this.createLineNumberArea = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.lineNumberArea.element),
                    this.readonlyFlag &&
                      t.classList.add(
                        this.styleClass.lineNumberArea.modifier.readOnly,
                      ),
                    t
                  );
                }),
                (this.definePublishingEventListeners = () => {
                  this.readonlyFlag ||
                    this.lineNumberArea.addEventListener("mousedown", (t) => {
                      (this.lastDraggedIndex = this.lineNumberList.findIndex(
                        (e) => e === t.target,
                      )),
                        this.root.dispatchEvent(
                          new CustomEvent("TOMEditor-mousedownlinenumber", {
                            detail: { lineNumberIndex: this.lastDraggedIndex },
                          }),
                        );
                    });
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-changenumberoftextlines",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "LineNumberArea.prototype.defineSubscribingEventListeners: TOMEditor-changenumberoftextlinesイベントのdetailプロパティが空です。",
                        );
                      const e = Math.abs(
                        t.detail.numberOfTextLines - this.lineNumberList.length,
                      );
                      if (
                        t.detail.numberOfTextLines > this.lineNumberList.length
                      )
                        for (let t = 0; t < e; t += 1) this.appendLineNumber();
                      else if (
                        t.detail.numberOfTextLines < this.lineNumberList.length
                      )
                        for (let t = 0; t < e; t += 1) this.removeLineNumber();
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-changetextareascrolltop",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "LineNumberArea.prototype.defineSubscribingEventListeners: TOMEditor-changetextareascrolltopイベントのdetailプロパティが空です。",
                          );
                        this.lineNumberArea.scrollTop = t.detail.scrollTop;
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-firstinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "LineNumberArea.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                          );
                        t.detail.editor.appendChild(this.lineNumberArea);
                      },
                    ),
                    this.readonlyFlag ||
                      (this.root.addEventListener(
                        "TOMEditor-changefocusedrowindex",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "LineNumberArea.prototype.defineSubscribingEventListeners: TOMEditor-changefocusedrowindexイベントのdetailプロパティが空です。",
                            );
                          this.changeFocusedLineNumber(
                            t.detail.focusedRowIndex,
                          );
                        },
                      ),
                      this.root.addEventListener("TOMEditor-mousemove", (t) => {
                        if (null === this.lastDraggedIndex) return;
                        const e = this.lineNumberList.findIndex((e) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "LineNumberArea.prototype.defineSubscribingEventListeners: TOMEditor-mousemoveイベントのdetailプロパティが空です。",
                            );
                          return e === t.detail.target;
                        });
                        e !== this.lastDraggedIndex &&
                          ((this.lastDraggedIndex = e),
                          this.root.dispatchEvent(
                            new CustomEvent("TOMEditor-draglinenumber", {
                              detail: { draggedIndex: this.lastDraggedIndex },
                            }),
                          ));
                      }),
                      this.root.addEventListener("TOMEditor-mouseup", () => {
                        this.lastDraggedIndex = null;
                      }));
                }),
                (this.removeLineNumber = () => {
                  const t = this.lineNumberList.pop();
                  if (void 0 === t)
                    throw new Error(
                      "LineNumberArea.prototype.removeLineNumber: 全ての行番号が取り除かれました。",
                    );
                  t.remove();
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.focusedLineNumberIndex = null),
                (this.lastDraggedIndex = null),
                (this.styleClass = {
                  lineNumber: {
                    element: "tom-editor__line-number-area__line-number",
                    modifier: {
                      focus: "tom-editor__line-number-area__line-number--focus",
                      readOnly:
                        "tom-editor__line-number-area__line-number--read-only",
                    },
                  },
                  lineNumberArea: {
                    element: "tom-editor__line-number-area",
                    modifier: {
                      readOnly: "tom-editor__line-number-area--read-only",
                    },
                  },
                }),
                (this.lineNumberArea = this.createLineNumberArea()),
                (this.lineNumberList = []),
                this.appendLineNumber(),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      462: function (t, e) {
        var i =
          (this && this.__awaiter) ||
          function (t, e, i, r) {
            return new (i || (i = Promise))(function (o, s) {
              function n(t) {
                try {
                  l(r.next(t));
                } catch (t) {
                  s(t);
                }
              }
              function a(t) {
                try {
                  l(r.throw(t));
                } catch (t) {
                  s(t);
                }
              }
              function l(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        })).then(n, a);
              }
              l((r = r.apply(t, e || [])).next());
            });
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TextArea = void 0),
          (e.TextArea = class {
            constructor(t, e) {
              (this.appendCharacter = (t) => {
                const e = this.createCharacter(t);
                if (
                  null === this.focusPointIndex.row ||
                  null === this.focusPointIndex.column
                )
                  throw new Error(
                    "TextArea.prototype.appendCharacter: フォーカスされていません。",
                  );
                this.textAreaContentList[
                  this.focusPointIndex.row
                ].characterList.splice(this.focusPointIndex.column, 0, e),
                  (this.focusPointIndex.column += 1),
                  this.getFocusedCharacter().before(e);
              }),
                (this.appendTextLine = (t) => {
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.appendTextLine: フォーカスされていません。",
                    );
                  const e = this.createTextLine(),
                    i = this.createCharacter("eol");
                  t.push(i);
                  for (const i of t) e.appendChild(i);
                  const r = { characterList: t, textLine: e };
                  this.textAreaContentList.splice(
                    this.focusPointIndex.row + 1,
                    0,
                    r,
                  ),
                    this.textAreaContentList[
                      this.focusPointIndex.row
                    ].textLine.after(e),
                    (this.focusPointIndex.row += 1),
                    (this.focusPointIndex.column = 0);
                }),
                (this.convertSelectedRangeIntoText = (t) => {
                  let e = "";
                  if (this.selectionRange.length)
                    for (const t of this.selectionRange)
                      for (const i of t) {
                        if (
                          i.classList.contains(
                            this.styleClass.character.modifier.eol,
                          )
                        ) {
                          e += "\n";
                          break;
                        }
                        e += i.textContent;
                      }
                  else e = "";
                  return t && this.removeCharactersInSelectionRange(), e;
                }),
                (this.createCharacter = (t) => {
                  const e = document.createElement("span");
                  if (
                    (e.classList.add(this.styleClass.character.element),
                    "eol" === t)
                  )
                    return (
                      e.classList.add(this.styleClass.character.modifier.eol),
                      (e.textContent = " "),
                      e
                    );
                  if (1 === t.length) return (e.textContent = t), e;
                  throw new Error(
                    `TextArea.prototype.createCharacter: 不正な引数です（${t}）。`,
                  );
                }),
                (this.createTextArea = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.textArea.element),
                    this.readonlyFlag && (t.style.cursor = "default"),
                    t
                  );
                }),
                (this.createTextLine = () => {
                  const t = document.createElement("div");
                  return t.classList.add(this.styleClass.textLine.element), t;
                }),
                (this.createTextLinesWrapper = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.textLinesWrapper.element), t
                  );
                }),
                (this.definePublishingEventListeners = () => {
                  new ResizeObserver(() => {
                    this.dispatchEvents();
                  }).observe(this.textArea),
                    this.readonlyFlag ||
                      this.textArea.addEventListener("mousedown", (t) => {
                        (this.isDragging = !0),
                          this.unselctRange(),
                          this.moveFocusPointByMousedownTarget(t),
                          this.scrollAutomatically(),
                          this.dispatchEvents();
                      });
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-draghorizontalscrollbar",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-draghorizontalscrollbarイベントのdetailプロパティが空です。",
                        );
                      (this.textArea.scrollLeft +=
                        (t.detail.distance / this.textArea.clientWidth) *
                        this.textArea.scrollWidth),
                        this.dispatchEvents();
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-dragverticalscrollbar",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-dragverticalscrollbarイベントのdetailプロパティが空です。",
                          );
                        (this.textArea.scrollTop +=
                          (t.detail.distance / this.textArea.clientHeight) *
                          this.textArea.scrollHeight),
                          this.dispatchEvents();
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-firstinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                          );
                        t.detail.editor.appendChild(this.textArea),
                          this.dispatchEvents();
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-horizontalscroll",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-horizontalscrollイベントのdetailプロパティが空です。",
                          );
                        this.textArea.scrollLeft += t.detail.scrollSize;
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-verticalscroll",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-verticalscrollイベントのdetailプロパティが空です。",
                          );
                        (this.textArea.scrollTop += t.detail.scrollSize),
                          this.dispatchEvents();
                      },
                    ),
                    this.readonlyFlag ||
                      (this.root.addEventListener("TOMEditor-blur", () => {
                        this.unselctRange(),
                          (this.focusPointIndex = { column: null, row: null }),
                          this.dispatchEvents();
                      }),
                      this.root.addEventListener(
                        "TOMEditor-compositionend",
                        () => {
                          (this.compositionState = {
                            isComposing: !1,
                            lastData: null,
                            startColumnIndex: null,
                            startSelectionStart: null,
                          }),
                            this.differenceBetweenCurrentAndHistory() &&
                              this.saveHistory();
                        },
                      ),
                      this.root.addEventListener(
                        "TOMEditor-compositionstart",
                        () => {
                          this.compositionState = {
                            isComposing: !0,
                            lastData: "",
                            startColumnIndex: this.focusPointIndex.column,
                            startSelectionStart: null,
                          };
                        },
                      ),
                      this.root.addEventListener(
                        "TOMEditor-draglinenumber",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-draglinenumberイベントのdetailプロパティが空です。",
                            );
                          if (null === this.focusPointIndex.row)
                            throw new Error(
                              "TextArea.prototype.defineSubscribingEventListeners: this.focusPointIndex.rowがnullです。",
                            );
                          const e = Math.abs(
                            t.detail.draggedIndex -
                              this.focusPointIndex.row -
                              1,
                          );
                          if (
                            t.detail.draggedIndex <
                            this.focusPointIndex.row - 1
                          )
                            for (let t = 0; t < e - 2; t += 1)
                              this.moveFocusPointByKey("ArrowUp", !0);
                          else if (
                            t.detail.draggedIndex >
                            this.focusPointIndex.row - 1
                          )
                            for (let t = 0; t < e; t += 1)
                              this.moveFocusPointByKey("ArrowDown", !0);
                          this.scrollAutomatically(), this.dispatchEvents();
                        },
                      ),
                      this.root.addEventListener("TOMEditor-input", (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-inputイベントのdetailプロパティが空です。",
                          );
                        if (this.compositionState.isComposing) {
                          if (
                            (null ===
                              this.compositionState.startSelectionStart &&
                              (this.compositionState.startSelectionStart =
                                t.detail.selectionStart - t.detail.data.length),
                            t.detail.data !== this.compositionState.lastData)
                          ) {
                            if (
                              ((this.focusPointIndex.column =
                                this.compositionState.startColumnIndex),
                              null === this.compositionState.lastData)
                            )
                              throw new Error(
                                "TextArea.prototype.defineSubscribingEventListeners: TOMEditorInputEvent.lastDataがnullです。",
                              );
                            for (
                              let t = 0;
                              t < this.compositionState.lastData.length;
                              t += 1
                            )
                              this.removeCharacter("Delete");
                            if (
                              ((this.compositionState.lastData = t.detail.data),
                              null !== this.compositionState.lastData)
                            )
                              for (const t of this.compositionState.lastData)
                                this.appendCharacter(t);
                          }
                          this.focusPointIndex.column =
                            this.compositionState.startColumnIndex;
                          for (
                            let e = 0;
                            e <
                            t.detail.selectionStart -
                              this.compositionState.startSelectionStart;
                            e += 1
                          )
                            this.moveFocusPointByKey("ArrowRight", !1);
                          this.scrollAutomatically(), this.dispatchEvents();
                        }
                      }),
                      this.root.addEventListener("TOMEditor-keydown", (t) =>
                        i(this, void 0, void 0, function* () {
                          if (void 0 === t.detail)
                            throw new Error(
                              "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-keydownイベントのdetailプロパティが空です。",
                            );
                          this.compositionState.isComposing ||
                            ((yield this.reflectKey(
                              t.detail.key,
                              t.detail.shiftKey,
                              t.detail.ctrlKey,
                            )) &&
                              (this.scrollAutomatically(),
                              this.differenceBetweenCurrentAndHistory() &&
                                this.saveHistory(),
                              this.dispatchEvents()));
                        }),
                      ),
                      this.root.addEventListener(
                        "TOMEditor-mousedownlinenumber",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-mousedownlinenumberイベントのdetailプロパティが空です。",
                            );
                          this.unselctRange(),
                            (this.focusPointIndex = {
                              column: 0,
                              row: t.detail.lineNumberIndex,
                            }),
                            this.moveFocusPointByKey("ArrowDown", !0),
                            this.scrollAutomatically(),
                            this.dispatchEvents();
                        },
                      ),
                      this.root.addEventListener("TOMEditor-mousemove", (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "TextArea.prototype.defineSubscribingEventListeners: TOMEditor-mousemoveイベントのdetailプロパティが空です。",
                          );
                        this.isDragging &&
                          (this.moveFocusPointByDragTarget(t.detail.target),
                          this.scrollAutomatically(),
                          this.dispatchEvents());
                      }),
                      this.root.addEventListener("TOMEditor-mouseup", () => {
                        (this.isDragging = !1), this.dispatchEvents();
                      }));
                }),
                (this.differenceBetweenCurrentAndHistory = () => {
                  if (
                    this.textAreaContentList.length !==
                    this.history.data[this.history.index].textAreaContentList
                      .length
                  )
                    return !0;
                  for (let t = 0; t < this.textAreaContentList.length; t += 1) {
                    if (
                      this.textAreaContentList[t].characterList.length !==
                      this.history.data[this.history.index].textAreaContentList[
                        t
                      ].characterList.length
                    )
                      return !0;
                    for (
                      let e = 0;
                      e < this.textAreaContentList[t].characterList.length;
                      e += 1
                    )
                      if (
                        this.textAreaContentList[t].characterList[e] !==
                        this.history.data[this.history.index]
                          .textAreaContentList[t].characterList[e]
                      )
                        return !0;
                  }
                  return !1;
                }),
                (this.dispatchEvents = () => {
                  const t = { left: null, top: null };
                  if (
                    null !== this.focusPointIndex.row &&
                    null !== this.focusPointIndex.column
                  ) {
                    const e = this.getFocusedCharacter();
                    (t.left = e.offsetLeft - this.textArea.scrollLeft),
                      (t.top = e.offsetTop - this.textArea.scrollTop);
                  }
                  this.root.dispatchEvent(
                    new CustomEvent("TOMEditor-movefocuspointposition", {
                      detail: t,
                    }),
                  );
                  const e = this.textAreaContentList.length;
                  e !== this.lastDispatchedEventValue.numberOfTextLines &&
                    ((this.lastDispatchedEventValue.numberOfTextLines = e),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-changenumberoftextlines", {
                        detail: {
                          numberOfTextLines:
                            this.lastDispatchedEventValue.numberOfTextLines,
                        },
                      }),
                    ));
                  const i = this.focusPointIndex.row;
                  i !== this.lastDispatchedEventValue.focusedRowIndex &&
                    ((this.lastDispatchedEventValue.focusedRowIndex = i),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-changefocusedrowindex", {
                        detail: {
                          focusedRowIndex:
                            this.lastDispatchedEventValue.focusedRowIndex,
                        },
                      }),
                    ));
                  const r =
                    this.textArea.clientHeight / this.textArea.scrollHeight;
                  r !== this.lastDispatchedEventValue.viewportHeightRatio &&
                    ((this.lastDispatchedEventValue.viewportHeightRatio = r),
                    this.root.dispatchEvent(
                      new CustomEvent(
                        "TOMEditor-changetextareaviewportheightratio",
                        {
                          detail: {
                            viewportHeightRatio:
                              this.lastDispatchedEventValue.viewportHeightRatio,
                          },
                        },
                      ),
                    ));
                  const o = this.textArea.scrollTop;
                  o !== this.lastDispatchedEventValue.scrollTop &&
                    ((this.lastDispatchedEventValue.scrollTop = o),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-changetextareascrolltop", {
                        detail: {
                          scrollTop: this.lastDispatchedEventValue.scrollTop,
                        },
                      }),
                    ));
                  const s =
                    this.textArea.clientWidth / this.textArea.scrollWidth;
                  s !== this.lastDispatchedEventValue.viewportWidthRatio &&
                    ((this.lastDispatchedEventValue.viewportWidthRatio = s),
                    this.root.dispatchEvent(
                      new CustomEvent(
                        "TOMEditor-changetextareaviewportwidthratio",
                        {
                          detail: {
                            viewportWidthRatio:
                              this.lastDispatchedEventValue.viewportWidthRatio,
                          },
                        },
                      ),
                    ));
                  const n = this.textArea.scrollLeft;
                  n !== this.lastDispatchedEventValue.scrollLeft &&
                    ((this.lastDispatchedEventValue.scrollLeft = n),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-changetextareascrollleft", {
                        detail: {
                          scrollLeft: this.lastDispatchedEventValue.scrollLeft,
                        },
                      }),
                    ));
                  const a = this.textArea.clientHeight;
                  a !== this.lastDispatchedEventValue.height &&
                    ((this.lastDispatchedEventValue.height = a),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-resizetextareaheight", {
                        detail: {
                          height: this.lastDispatchedEventValue.height,
                        },
                      }),
                    ));
                  const l = this.textArea.clientWidth;
                  l !== this.lastDispatchedEventValue.width &&
                    ((this.lastDispatchedEventValue.width = l),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-resizetextareawidth", {
                        detail: { width: this.lastDispatchedEventValue.width },
                      }),
                    ));
                  const c = Boolean(this.selectionRange.length);
                  c !== this.lastDispatchedEventValue.selectingRange &&
                    ((this.lastDispatchedEventValue.selectingRange = c),
                    this.root.dispatchEvent(
                      new CustomEvent("TOMEditor-changeselectingrange", {
                        detail: {
                          selectingRange:
                            this.lastDispatchedEventValue.selectingRange,
                        },
                      }),
                    ));
                }),
                (this.getFocusedCharacter = () => {
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.getFocusedCharacter: フォーカスされていません。",
                    );
                  return this.textAreaContentList[this.focusPointIndex.row]
                    .characterList[this.focusPointIndex.column];
                }),
                (this.loadHistory = (t) => {
                  if (void 0 === this.history.data[t])
                    throw new Error(
                      `TextArea.prototype.loadHistory: 存在しない履歴が参照されています（${t}）。`,
                    );
                  this.textLinesWrapper.innerHTML = "";
                  for (
                    let e = 0;
                    e < this.history.data[t].textAreaContentList.length;
                    e += 1
                  ) {
                    const i =
                      this.history.data[t].textAreaContentList[e].textLine;
                    i.textContent = "";
                    for (const r of this.history.data[t].textAreaContentList[e]
                      .characterList)
                      r.classList.contains(
                        this.styleClass.character.modifier.select,
                      ) &&
                        r.classList.remove(
                          this.styleClass.character.modifier.select,
                        ),
                        i.appendChild(r);
                    this.textLinesWrapper.appendChild(i);
                  }
                  (this.textArea.scrollLeft = this.history.data[t].scrollLeft),
                    (this.textArea.scrollTop = this.history.data[t].scrollTop),
                    (this.focusPointIndex = {
                      column: this.history.data[t].focusPointIndex.column,
                      row: this.history.data[t].focusPointIndex.row,
                    }),
                    (this.textAreaContentList = this.history.data[
                      t
                    ].textAreaContentList.map((t) => ({
                      characterList: Array.from(t.characterList),
                      textLine: t.textLine,
                    })));
                }),
                (this.moveFocusPointByDragTarget = (t) => {
                  const e = { column: null, row: null };
                  if (t.classList.contains(this.styleClass.textLine.element))
                    (e.row = this.textAreaContentList.findIndex(
                      (e) => e.textLine === t,
                    )),
                      (e.column =
                        this.textAreaContentList[e.row].characterList.length -
                        1);
                  else {
                    if (
                      !t.classList.contains(this.styleClass.character.element)
                    )
                      return !1;
                    (e.row = this.textAreaContentList.findIndex((e) => {
                      if (null === t)
                        throw new Error(
                          "TextArea.prototype.moveFocusPointByDragTarget: targetがnullです。",
                        );
                      if (!(t instanceof Node))
                        throw new Error(
                          "TextArea.prototype.moveFocusPointByDragTarget: mousedownイベントの発生対象がHTML要素ではありません。",
                        );
                      if (null === t.parentElement) throw new Error();
                      return e.textLine === t.parentElement;
                    })),
                      (e.column = this.textAreaContentList[
                        e.row
                      ].characterList.findIndex((e) => e === t));
                  }
                  if (
                    e.row === this.focusPointIndex.row &&
                    e.column === this.focusPointIndex.column
                  )
                    return !1;
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.moveFocusPointByKey: フォーカスされていません。",
                    );
                  const i = Math.abs(e.row - this.focusPointIndex.row);
                  if (e.row < this.focusPointIndex.row)
                    for (let t = 0; t < i; t += 1)
                      this.moveFocusPointByKey("ArrowUp", !0);
                  else if (e.row > this.focusPointIndex.row)
                    for (let t = 0; t < i; t += 1)
                      this.moveFocusPointByKey("ArrowDown", !0);
                  const r = Math.abs(e.column - this.focusPointIndex.column);
                  if (e.column < this.focusPointIndex.column)
                    for (let t = 0; t < r; t += 1)
                      this.moveFocusPointByKey("ArrowLeft", !0);
                  else if (e.column > this.focusPointIndex.column)
                    for (let t = 0; t < r; t += 1)
                      this.moveFocusPointByKey("ArrowRight", !0);
                  return !0;
                }),
                (this.moveFocusPointByKey = (t, e) => {
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.moveFocusPointByKey: フォーカスされていません。",
                    );
                  if ("ArrowDown" !== t) {
                    if ("ArrowLeft" === t) {
                      if (0 === this.focusPointIndex.column) {
                        if (0 === this.focusPointIndex.row) return;
                        if (
                          ((this.focusPointIndex.row -= 1),
                          (this.focusPointIndex.column =
                            this.textAreaContentList[this.focusPointIndex.row]
                              .characterList.length - 1),
                          !e)
                        )
                          return;
                        return this.selectionRange.length
                          ? this.getFocusedCharacter().classList.contains(
                              this.styleClass.character.modifier.select,
                            )
                            ? (this.getFocusedCharacter().classList.remove(
                                this.styleClass.character.modifier.select,
                              ),
                              this.selectionRange.pop(),
                              void (
                                this.selectionRange.length ||
                                (this.selectionRange = [])
                              ))
                            : (this.getFocusedCharacter().classList.add(
                                this.styleClass.character.modifier.select,
                              ),
                              void this.selectionRange.unshift([
                                this.getFocusedCharacter(),
                              ]))
                          : (this.getFocusedCharacter().classList.add(
                              this.styleClass.character.modifier.select,
                            ),
                            void this.selectionRange.push([
                              this.getFocusedCharacter(),
                            ]));
                      }
                      if (((this.focusPointIndex.column -= 1), !e)) return;
                      return this.selectionRange.length
                        ? this.getFocusedCharacter().classList.contains(
                            this.styleClass.character.modifier.select,
                          )
                          ? (this.getFocusedCharacter().classList.remove(
                              this.styleClass.character.modifier.select,
                            ),
                            this.selectionRange[
                              this.selectionRange.length - 1
                            ].pop(),
                            void (
                              this.selectionRange[0].length ||
                              1 !== this.selectionRange.length ||
                              (this.selectionRange = [])
                            ))
                          : (this.getFocusedCharacter().classList.add(
                              this.styleClass.character.modifier.select,
                            ),
                            void this.selectionRange[0].unshift(
                              this.getFocusedCharacter(),
                            ))
                        : (this.getFocusedCharacter().classList.add(
                            this.styleClass.character.modifier.select,
                          ),
                          void this.selectionRange.push([
                            this.getFocusedCharacter(),
                          ]));
                    }
                    if ("ArrowRight" === t) {
                      if (
                        this.focusPointIndex.column ===
                        this.textAreaContentList[this.focusPointIndex.row]
                          .characterList.length -
                          1
                      ) {
                        if (
                          this.focusPointIndex.row ===
                          this.textAreaContentList.length - 1
                        )
                          return;
                        if (
                          ((this.focusPointIndex.row += 1),
                          (this.focusPointIndex.column = 0),
                          !e)
                        )
                          return;
                        const t =
                          this.textAreaContentList[this.focusPointIndex.row - 1]
                            .characterList[
                            this.textAreaContentList[
                              this.focusPointIndex.row - 1
                            ].characterList.length - 1
                          ];
                        return this.selectionRange.length
                          ? t.classList.contains(
                              this.styleClass.character.modifier.select,
                            )
                            ? (t.classList.remove(
                                this.styleClass.character.modifier.select,
                              ),
                              this.selectionRange.shift(),
                              void (
                                this.selectionRange.length ||
                                (this.selectionRange = [])
                              ))
                            : (t.classList.add(
                                this.styleClass.character.modifier.select,
                              ),
                              this.selectionRange[
                                this.selectionRange.length - 1
                              ].push(t),
                              void this.selectionRange.push([]))
                          : (t.classList.add(
                              this.styleClass.character.modifier.select,
                            ),
                            void this.selectionRange.push([t]));
                      }
                      if (((this.focusPointIndex.column += 1), !e)) return;
                      const t =
                        this.textAreaContentList[this.focusPointIndex.row]
                          .characterList[this.focusPointIndex.column - 1];
                      return this.selectionRange.length
                        ? t.classList.contains(
                            this.styleClass.character.modifier.select,
                          )
                          ? (t.classList.remove(
                              this.styleClass.character.modifier.select,
                            ),
                            this.selectionRange[0].shift(),
                            void (
                              this.selectionRange[0].length ||
                              (this.selectionRange = [])
                            ))
                          : (t.classList.add(
                              this.styleClass.character.modifier.select,
                            ),
                            void this.selectionRange[
                              this.selectionRange.length - 1
                            ].push(t))
                        : (t.classList.add(
                            this.styleClass.character.modifier.select,
                          ),
                          void this.selectionRange.push([t]));
                    }
                    if ("ArrowUp" !== t)
                      if ("End" !== t) {
                        if ("Home" !== t)
                          throw new Error(
                            `TextArea.prototype.moveFocusPointByKey: 想定外の引数です（${t}）。`,
                          );
                        for (let t = 0; t < this.focusPointIndex.column; t += 1)
                          this.moveFocusPointByKey("ArrowUp", e);
                      } else
                        for (
                          let t = 0;
                          t <
                          this.textAreaContentList[this.focusPointIndex.row]
                            .characterList.length -
                            1 -
                            this.focusPointIndex.column;
                          t += 1
                        )
                          this.moveFocusPointByKey("ArrowDown", e);
                    else {
                      const t = this.focusPointIndex.row - 1,
                        i = this.focusPointIndex.column;
                      for (
                        ;
                        !(
                          (this.focusPointIndex.row === t &&
                            this.focusPointIndex.column === i) ||
                          (this.focusPointIndex.row === t &&
                            this.focusPointIndex.column < i) ||
                          (0 === this.focusPointIndex.row &&
                            0 === this.focusPointIndex.column)
                        );

                      )
                        this.moveFocusPointByKey("ArrowLeft", e);
                    }
                  } else {
                    const t = this.focusPointIndex.row + 1,
                      i = this.focusPointIndex.column;
                    for (
                      ;
                      !(
                        (this.focusPointIndex.row === t &&
                          this.focusPointIndex.column === i) ||
                        (this.focusPointIndex.row === t &&
                          this.focusPointIndex.column < i) ||
                        (this.focusPointIndex.row ===
                          this.textAreaContentList.length - 1 &&
                          this.focusPointIndex.column ===
                            this.textAreaContentList[this.focusPointIndex.row]
                              .characterList.length -
                              1)
                      );

                    )
                      this.moveFocusPointByKey("ArrowRight", e);
                  }
                }),
                (this.moveFocusPointByMousedownTarget = (t) => {
                  if (null === t.target)
                    throw new Error(
                      "TextArea.prototype.moveFocusPointByMousedownTarget: MouseEvent.targetがnullです。",
                    );
                  if (!(t.target instanceof HTMLElement))
                    throw new Error(
                      "TextArea.prototype.moveFocusPointByMousedownTarget: mousedownイベントの発生対象がHTML要素ではありません。",
                    );
                  if (
                    t.target.classList.contains(
                      this.styleClass.textLine.element,
                    )
                  )
                    return (
                      (this.focusPointIndex.row =
                        this.textAreaContentList.findIndex(
                          (e) => e.textLine === t.target,
                        )),
                      void (this.focusPointIndex.column =
                        this.textAreaContentList[this.focusPointIndex.row]
                          .characterList.length - 1)
                    );
                  t.target.classList.contains(
                    this.styleClass.character.element,
                  ) &&
                    ((this.focusPointIndex.row =
                      this.textAreaContentList.findIndex((e) => {
                        if (null === t.target)
                          throw new Error(
                            "TextArea.prototype.moveFocusPointByMousedownTarget: MouseEvent.targetがnullです。",
                          );
                        if (!(t.target instanceof Node))
                          throw new Error(
                            "TextArea.prototype.moveFocusPointByMousedownTarget: mousedownイベントの発生対象がHTML要素ではありません。",
                          );
                        if (null === t.target.parentElement) throw new Error();
                        return e.textLine === t.target.parentElement;
                      })),
                    (this.focusPointIndex.column = this.textAreaContentList[
                      this.focusPointIndex.row
                    ].characterList.findIndex((e) => e === t.target)));
                }),
                (this.reflectKey = (t, e, r) =>
                  new Promise((o) =>
                    i(this, void 0, void 0, function* () {
                      if (
                        null === this.focusPointIndex.row ||
                        null === this.focusPointIndex.column
                      )
                        throw new Error(
                          "TextArea.prototype.reflectKey: フォーカスされていません。",
                        );
                      if (r) {
                        if ("a" === t) {
                          (this.selectionRange = this.textAreaContentList.map(
                            (t) => Array.from(t.characterList),
                          )),
                            this.selectionRange[
                              this.selectionRange.length - 1
                            ].pop();
                          for (const t of this.selectionRange)
                            for (const e of t)
                              e.classList.add(
                                this.styleClass.character.modifier.select,
                              );
                          return (
                            (this.focusPointIndex.row =
                              this.textAreaContentList.length - 1),
                            (this.focusPointIndex.column =
                              this.textAreaContentList[this.focusPointIndex.row]
                                .characterList.length - 1),
                            o(!0)
                          );
                        }
                        if ("c" === t) {
                          const t = this.convertSelectedRangeIntoText(!1);
                          return yield navigator.clipboard.writeText(t), o(!0);
                        }
                        if ("v" === t)
                          return navigator.clipboard.readText
                            ? (yield navigator.clipboard
                                .readText()
                                .then((t) => {
                                  if (
                                    null === this.focusPointIndex.row ||
                                    null === this.focusPointIndex.column
                                  )
                                    throw new Error(
                                      "TextArea.prototype.reflectKey: フォーカスされていません。",
                                    );
                                  this.selectionRange.length &&
                                    this.removeCharactersInSelectionRange();
                                  for (const e of t.replace(/\r\n/g, "\n"))
                                    if ("\n" !== e) this.appendCharacter(e);
                                    else {
                                      const t =
                                        this.textAreaContentList[
                                          this.focusPointIndex.row
                                        ].characterList.length -
                                        1 -
                                        this.focusPointIndex.column;
                                      this.appendTextLine(
                                        this.textAreaContentList[
                                          this.focusPointIndex.row
                                        ].characterList.splice(
                                          this.focusPointIndex.column,
                                          t,
                                        ),
                                      );
                                    }
                                }),
                              o(!0))
                            : (alert(
                                "【！ 申し訳ございません ！】\nお使いのブラウザはペースト機能が非対応となっているようです。\nペースト機能をご利用いただく場合は別のブラウザでお願いします。",
                              ),
                              o(!1));
                        if ("x" === t) {
                          const t = this.convertSelectedRangeIntoText(!0);
                          return yield navigator.clipboard.writeText(t), o(!0);
                        }
                        return "y" === t
                          ? void 0 === this.history.data[this.history.index + 1]
                            ? o(!1)
                            : (this.unselctRange(),
                              (this.history.index += 1),
                              this.loadHistory(this.history.index),
                              o(!0))
                          : "z" === t
                            ? void 0 ===
                              this.history.data[this.history.index - 1]
                              ? o(!1)
                              : (this.unselctRange(),
                                (this.history.index -= 1),
                                this.loadHistory(this.history.index),
                                o(!0))
                            : o(!1);
                      }
                      if (1 === t.length)
                        return (
                          this.selectionRange.length &&
                            this.removeCharactersInSelectionRange(),
                          this.appendCharacter(t),
                          o(!0)
                        );
                      if (t.includes("Arrow") || ["End", "Home"].includes(t))
                        return (
                          !e && this.selectionRange.length
                            ? this.unselctRange()
                            : this.moveFocusPointByKey(t, e),
                          o(!0)
                        );
                      if (["Backspace", "Delete"].includes(t))
                        return (
                          this.selectionRange.length
                            ? this.removeCharactersInSelectionRange()
                            : this.removeCharacter(t),
                          o(!0)
                        );
                      if ("Enter" === t) {
                        !e &&
                          this.selectionRange.length &&
                          this.removeCharactersInSelectionRange();
                        const t =
                          this.textAreaContentList[this.focusPointIndex.row]
                            .characterList.length -
                          1 -
                          this.focusPointIndex.column;
                        return (
                          this.appendTextLine(
                            this.textAreaContentList[
                              this.focusPointIndex.row
                            ].characterList.splice(
                              this.focusPointIndex.column,
                              t,
                            ),
                          ),
                          o(!0)
                        );
                      }
                      if ("Tab" === t) {
                        if (e) return o(!1);
                        this.selectionRange.length &&
                          this.removeCharactersInSelectionRange();
                        const t = "    ";
                        for (const e of t) this.appendCharacter(e);
                        return o(!0);
                      }
                      return o(!1);
                    }),
                  )),
                (this.removeCharacter = (t) => {
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.removeCharacter: フォーカスされていません。",
                    );
                  if ("Backspace" === t) {
                    if (0 === this.focusPointIndex.column) {
                      if (0 === this.focusPointIndex.row) return;
                      return (
                        (this.focusPointIndex.row -= 1),
                        (this.focusPointIndex.column =
                          this.textAreaContentList[this.focusPointIndex.row]
                            .characterList.length - 1),
                        void this.removeTextLine()
                      );
                    }
                    return (
                      (this.focusPointIndex.column -= 1),
                      void this.textAreaContentList[
                        this.focusPointIndex.row
                      ].characterList
                        .splice(this.focusPointIndex.column, 1)[0]
                        .remove()
                    );
                  }
                  if ("Delete" !== t)
                    throw new Error(
                      `TextArea.prototype.removeCharacter: 想定外の引数です（${t}）。`,
                    );
                  if (
                    this.focusPointIndex.column !==
                    this.textAreaContentList[this.focusPointIndex.row]
                      .characterList.length -
                      1
                  )
                    this.textAreaContentList[
                      this.focusPointIndex.row
                    ].characterList
                      .splice(this.focusPointIndex.column, 1)[0]
                      .remove();
                  else {
                    if (
                      this.focusPointIndex.row ===
                      this.textAreaContentList.length - 1
                    )
                      return;
                    this.removeTextLine();
                  }
                }),
                (this.removeCharactersInSelectionRange = () => {
                  let t = 0;
                  for (const e of this.selectionRange) t += e.length;
                  if (
                    this.getFocusedCharacter().classList.contains(
                      this.styleClass.character.modifier.select,
                    )
                  )
                    for (let e = 0; e < t; e += 1)
                      this.removeCharacter("Delete");
                  else
                    for (let e = 0; e < t; e += 1)
                      this.removeCharacter("Backspace");
                  this.selectionRange = [];
                }),
                (this.removeTextLine = () => {
                  if (
                    null === this.focusPointIndex.row ||
                    null === this.focusPointIndex.column
                  )
                    throw new Error(
                      "TextArea.prototype.removeCharacter: フォーカスされていません。",
                    );
                  const t =
                    this.textAreaContentList[
                      this.focusPointIndex.row + 1
                    ].characterList.splice(0);
                  for (const e of t.reverse())
                    this.textAreaContentList[
                      this.focusPointIndex.row
                    ].characterList.splice(
                      this.focusPointIndex.column + 1,
                      0,
                      e,
                    ),
                      this.getFocusedCharacter().after(e);
                  this.textAreaContentList
                    .splice(this.focusPointIndex.row + 1, 1)[0]
                    .textLine.remove(),
                    this.textAreaContentList[
                      this.focusPointIndex.row
                    ].characterList
                      .splice(this.focusPointIndex.column, 1)[0]
                      .remove();
                }),
                (this.saveHistory = () => {
                  if (void 0 === this.history)
                    return void (this.history = {
                      data: [
                        {
                          focusPointIndex: { column: 0, row: 0 },
                          scrollLeft: 0,
                          scrollTop: 0,
                          textAreaContentList: [
                            {
                              characterList: Array.from(
                                this.textAreaContentList[0].characterList,
                              ),
                              textLine: this.textAreaContentList[0].textLine,
                            },
                          ],
                        },
                      ],
                      index: 0,
                    });
                  this.history.data.splice(this.history.index + 1);
                  const t = {
                    focusPointIndex: {
                      column: this.focusPointIndex.column,
                      row: this.focusPointIndex.row,
                    },
                    scrollLeft: this.textArea.scrollLeft,
                    scrollTop: this.textArea.scrollTop,
                    textAreaContentList: [],
                  };
                  for (const e of this.textAreaContentList)
                    t.textAreaContentList.push({
                      characterList: Array.from(e.characterList),
                      textLine: e.textLine,
                    });
                  this.history.data.push(t), (this.history.index += 1);
                }),
                (this.scrollAutomatically = () => {
                  const t = this.getFocusedCharacter().getBoundingClientRect(),
                    e = this.textArea.getBoundingClientRect();
                  t.top < e.top + 0.5 * t.height
                    ? (this.textArea.scrollTop -=
                        e.top + 0.5 * t.height - t.top)
                    : t.bottom > e.bottom - 1.5 * t.height &&
                      (this.textArea.scrollTop +=
                        t.bottom - (e.bottom - 1.5 * t.height)),
                    t.left < e.left + 1.5 * t.width
                      ? (this.textArea.scrollLeft -=
                          e.left + 1.5 * t.width - t.left)
                      : t.right > e.right - 2.5 * t.width &&
                        (this.textArea.scrollLeft +=
                          t.right - (e.right - 2.5 * t.width));
                }),
                (this.unselctRange = () => {
                  for (const t of this.selectionRange)
                    for (const e of t)
                      e.classList.remove(
                        this.styleClass.character.modifier.select,
                      );
                  this.selectionRange = [];
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.compositionState = {
                  isComposing: !1,
                  lastData: null,
                  startColumnIndex: null,
                  startSelectionStart: null,
                }),
                (this.focusPointIndex = { column: null, row: null }),
                (this.isDragging = !1),
                (this.lastDispatchedEventValue = {
                  focusedRowIndex: null,
                  height: 0,
                  numberOfTextLines: 1,
                  scrollLeft: 0,
                  scrollTop: 0,
                  selectingRange: !1,
                  viewportHeightRatio: 1,
                  viewportWidthRatio: 1,
                  width: 0,
                }),
                (this.selectionRange = []),
                (this.styleClass = {
                  character: {
                    element: "tom-editor__text-area__character",
                    modifier: {
                      eol: "tom-editor__text-area__character--eol",
                      select: "tom-editor__text-area__character--select",
                    },
                  },
                  textArea: { element: "tom-editor__text-area" },
                  textLine: { element: "tom-editor__text-area__text-line" },
                  textLinesWrapper: {
                    element: "tom-editor__text-area__text-lines-wrapper",
                  },
                }),
                (this.textArea = this.createTextArea()),
                (this.textLinesWrapper = this.createTextLinesWrapper()),
                this.textArea.appendChild(this.textLinesWrapper);
              const r = this.createTextLine();
              this.textLinesWrapper.appendChild(r);
              const o = this.createCharacter("eol");
              r.appendChild(o),
                (this.textAreaContentList = [
                  { characterList: [o], textLine: r },
                ]),
                this.saveHistory(),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      960: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Underline = void 0),
          (e.Underline = class {
            constructor(t, e) {
              (this.adjustUnderlineStyle = () => {
                this.lastSelectingRange || null === this.lastTop
                  ? this.underline.classList.contains(
                      this.styleClass.underline.modifier.valid,
                    ) &&
                    this.underline.classList.remove(
                      this.styleClass.underline.modifier.valid,
                    )
                  : (this.underline.classList.add(
                      this.styleClass.underline.modifier.valid,
                    ),
                    (this.underline.style.top = `${this.lastTop}px`));
              }),
                (this.createUnderline = () => {
                  const t = document.createElement("div");
                  return t.classList.add(this.styleClass.underline.element), t;
                }),
                (this.definePublishingEventListeners = () => {
                  this.readonlyFlag;
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-firstinitialize",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "Underline.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                        );
                      t.detail.editor.appendChild(this.underline);
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-secondinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "Underline.prototype.defineSubscribingEventListeners: TOMEditor-secondinitializeイベントのdetailプロパティが空です。",
                          );
                        this.underline.style.left = `${t.detail.lineNumberAreaWidth}px`;
                      },
                    ),
                    this.readonlyFlag ||
                      (this.root.addEventListener(
                        "TOMEditor-changeselectingrange",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "Underline.prototype.defineSubscribingEventListeners: TOMEditor-changeselectingrangeイベントのdetailプロパティが空です。",
                            );
                          (this.lastSelectingRange = t.detail.selectingRange),
                            this.adjustUnderlineStyle();
                        },
                      ),
                      this.root.addEventListener(
                        "TOMEditor-movefocuspointposition",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "Underline.prototype.defineSubscribingEventListeners: TOMEditor-movefocuspointpositionイベントのdetailプロパティが空です。",
                            );
                          (this.lastTop = t.detail.top),
                            this.adjustUnderlineStyle();
                        },
                      ),
                      this.root.addEventListener(
                        "TOMEditor-resizetextareawidth",
                        (t) => {
                          if (void 0 === t.detail)
                            throw new Error(
                              "Underline.prototype.defineSubscribingEventListeners: TOMEditor-resizetextareawidthイベントのdetailプロパティが空です。",
                            );
                          const e =
                            0.5 *
                            parseFloat(
                              getComputedStyle(this.underline).fontSize,
                            );
                          this.underline.style.width =
                            t.detail.width - e + "px";
                        },
                      ));
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.lastSelectingRange = !1),
                (this.lastTop = null),
                (this.styleClass = {
                  underline: {
                    element: "tom-editor__underline",
                    modifier: { valid: "tom-editor__underline--valid" },
                  },
                }),
                (this.underline = this.createUnderline()),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
      835: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.VerticalScrollbarArea = void 0),
          (e.VerticalScrollbarArea = class {
            constructor(t, e) {
              (this.adjustVerticalScrollbarStyle = () => {
                1 !== this.lastViewportHeightRatio
                  ? ((this.verticalScrollbar.style.top =
                      this.lastScrollTop * this.lastViewportHeightRatio + "px"),
                    this.verticalScrollbar.classList.add(
                      this.styleClass.verticalScrollbar.modifier.valid,
                    ),
                    (this.verticalScrollbar.style.height =
                      100 * this.lastViewportHeightRatio + "%"))
                  : this.verticalScrollbar.classList.contains(
                      this.styleClass.verticalScrollbar.modifier.valid,
                    ) &&
                    this.verticalScrollbar.classList.remove(
                      this.styleClass.verticalScrollbar.modifier.valid,
                    );
              }),
                (this.createVerticalScrollbar = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(this.styleClass.verticalScrollbar.element),
                    t
                  );
                }),
                (this.createVerticalScrollbarArea = () => {
                  const t = document.createElement("div");
                  return (
                    t.classList.add(
                      this.styleClass.verticalScrollbarArea.element,
                    ),
                    t
                  );
                }),
                (this.definePublishingEventListeners = () => {
                  this.verticalScrollbar.addEventListener("mousedown", (t) => {
                    this.draggingLastTop = t.y;
                  }),
                    this.verticalScrollbarArea.addEventListener(
                      "mousedown",
                      (t) => {
                        if (t.target === this.verticalScrollbar) return;
                        let e;
                        (e =
                          t.y <
                          this.verticalScrollbar.getBoundingClientRect().top
                            ? -1
                            : 1),
                          this.root.dispatchEvent(
                            new CustomEvent(
                              "TOMEditor-mousedownverticalscrollbararea",
                              { detail: { scrollDirection: e } },
                            ),
                          );
                      },
                    ),
                    this.readonlyFlag;
                }),
                (this.defineSubscribingEventListeners = () => {
                  this.root.addEventListener(
                    "TOMEditor-changetextareascrolltop",
                    (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "VerticalScrollbarArea.prototype.defineSubscribingEventListeners: changetextareascrolltopイベントのdetailプロパティが空です。",
                        );
                      (this.lastScrollTop = t.detail.scrollTop),
                        this.adjustVerticalScrollbarStyle();
                    },
                  ),
                    this.root.addEventListener(
                      "TOMEditor-changetextareaviewportheightratio",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "VerticalScrollbarArea.prototype.defineSubscribingEventListeners: changetextareaviewportheightratioイベントのdetailプロパティが空です。",
                          );
                        (this.lastViewportHeightRatio =
                          t.detail.viewportHeightRatio),
                          this.adjustVerticalScrollbarStyle();
                      },
                    ),
                    this.root.addEventListener(
                      "TOMEditor-firstinitialize",
                      (t) => {
                        if (void 0 === t.detail)
                          throw new Error(
                            "VerticalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-initializeイベントのdetailプロパティが空です。",
                          );
                        t.detail.editor.appendChild(this.verticalScrollbarArea);
                      },
                    ),
                    this.root.addEventListener("TOMEditor-mousemove", (t) => {
                      if (void 0 === t.detail)
                        throw new Error(
                          "VerticalScrollbarArea.prototype.defineSubscribingEventListeners: TOMEditor-mousemoveイベントのdetailプロパティが空です。",
                        );
                      if (null === this.draggingLastTop) return;
                      if (t.detail.top === this.draggingLastTop) return;
                      const e = t.detail.top - this.draggingLastTop;
                      (this.draggingLastTop = t.detail.top),
                        this.root.dispatchEvent(
                          new CustomEvent("TOMEditor-dragverticalscrollbar", {
                            detail: { distance: e },
                          }),
                        );
                    }),
                    this.root.addEventListener("TOMEditor-mouseup", () => {
                      this.draggingLastTop = null;
                    }),
                    this.readonlyFlag;
                }),
                (this.root = t),
                (this.readonlyFlag = e),
                (this.draggingLastTop = null),
                (this.lastScrollTop = 0),
                (this.lastViewportHeightRatio = 1),
                (this.styleClass = {
                  verticalScrollbar: {
                    element:
                      "tom-editor__vertical-scrollbar-area__vertical-scrollbar",
                    modifier: {
                      valid:
                        "tom-editor__vertical-scrollbar-area__vertical-scrollbar--valid",
                    },
                  },
                  verticalScrollbarArea: {
                    element: "tom-editor__vertical-scrollbar-area",
                  },
                }),
                (this.verticalScrollbarArea =
                  this.createVerticalScrollbarArea()),
                (this.verticalScrollbar = this.createVerticalScrollbar()),
                this.verticalScrollbarArea.appendChild(this.verticalScrollbar),
                this.definePublishingEventListeners(),
                this.defineSubscribingEventListeners();
            }
          });
      },
    },
    e = {};
  function i(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var s = (e[r] = { id: r, exports: {} });
    return t[r].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var r in e)
        i.o(e, r) &&
          !i.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    var t = r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TOMEditor = void 0),
      i(674);
    const e = i(881),
      o = i(384),
      s = i(323),
      n = i(388),
      a = i(462),
      l = i(835),
      c = i(960),
      h = class extends EventTarget {
        constructor(t, i, ...r) {
          if ((super(), void 0 === t))
            throw new Error(
              "第1引数が指定されていません。第1引数にはエディター実装対象となるHTML要素を指定してください。",
            );
          if (!(t instanceof HTMLElement))
            throw new Error(
              `第1引数に${typeof t}型の値が指定されています。第1引数にはエディター実装対象となるHTML要素を指定してください。`,
            );
          if (void 0 !== i) {
            if ("object" != typeof i)
              throw new Error(
                `第2引数に${typeof i}型の値が指定されています。第2引数にはエディターの挙動を制御するオブジェクトを指定してください。`,
              );
            for (const t in i)
              if ("autofocus" !== t) {
                if ("readonly" !== t)
                  throw new Error(
                    `第2引数のキー「${t}」は有効なキー名として許可されていません。`,
                  );
                if ("boolean" != typeof i.readonly)
                  throw new Error(
                    "第2引数のキー「readonly」には真偽値を指定してください。",
                  );
              } else if ("boolean" != typeof i.autofocus)
                throw new Error(
                  "第2引数のキー「autofocus」には真偽値を指定してください。",
                );
          }
          if (r.length)
            throw new Error(
              "引数の数が不正です。当コンストラクタは第1引数と第2引数のみ許容します。",
            );
          let h, d;
          (t.innerHTML = ""),
            void 0 === i
              ? ((h = !1), (d = !1))
              : ((h = void 0 !== i.autofocus && i.autofocus),
                (d = void 0 !== i.readonly && i.readonly)),
            (this.editor = new o.Editor(this, d, t)),
            (this.lineNumberArea = new n.LineNumberArea(this, d)),
            (this.textArea = new a.TextArea(this, d)),
            (this.verticalScrollbarArea = new l.VerticalScrollbarArea(this, d)),
            (this.horizontalScrollbarArea = new s.HorizontalScrollbarArea(
              this,
              d,
            )),
            (this.caret = new e.Caret(this, d)),
            (this.underline = new c.Underline(this, d)),
            this.dispatchEvent(
              new CustomEvent("TOMEditor-firstinitialize", {
                detail: {
                  editor: this.editor.editor,
                  horizontalScrollbarArea:
                    this.horizontalScrollbarArea.horizontalScrollbarArea,
                },
              }),
            ),
            this.dispatchEvent(
              new CustomEvent("TOMEditor-secondinitialize", {
                detail: {
                  lineNumberAreaWidth:
                    this.lineNumberArea.lineNumberArea.clientWidth,
                },
              }),
            ),
            h &&
              ((this.textArea.focusPointIndex = { column: 0, row: 0 }),
              this.textArea.dispatchEvents());
        }
        static get version() {
          return "4.6.0";
        }
        get value() {
          let t = "";
          for (let e = 0; e < this.textArea.textAreaContentList.length; e += 1)
            for (
              let i = 0;
              i < this.textArea.textAreaContentList[e].characterList.length;
              i += 1
            ) {
              if (
                i ===
                this.textArea.textAreaContentList[e].characterList.length - 1
              ) {
                if (e === this.textArea.textAreaContentList.length - 1) break;
                t += "\n";
                break;
              }
              t +=
                this.textArea.textAreaContentList[e].characterList[i]
                  .textContent;
            }
          return t;
        }
        set value(t) {
          if ("string" != typeof t)
            throw new Error(
              `引数に${typeof t}型の値が指定されています。引数にはエディターに入力したい文章をstring型で指定してください。`,
            );
          (this.textArea.focusPointIndex = { column: null, row: null }),
            (this.textArea.selectionRange = []),
            (this.textArea.textAreaContentList = []),
            (this.textArea.textLinesWrapper.innerHTML = "");
          for (const e of t.replace(/\r\n/, "\n").split("\n")) {
            const t = this.textArea.createTextLine(),
              i = [];
            for (const t of e) i.push(this.textArea.createCharacter(t));
            i.push(this.textArea.createCharacter("eol"));
            for (const e of i) t.appendChild(e);
            this.textArea.textLinesWrapper.appendChild(t),
              this.textArea.textAreaContentList.push({
                characterList: i,
                textLine: t,
              });
          }
          this.textArea.dispatchEvents();
        }
        set valueObserver(t) {
          if ("function" != typeof t)
            throw new Error(
              `引数に${typeof t}型の値が指定されています。引数にはエディターの入力内容が変更されたときに実行させたい関数を指定してください。`,
            );
          new MutationObserver(() => {
            this.textArea.compositionState.isComposing || t(this.value);
          }).observe(this.textArea.textLinesWrapper, {
            childList: !0,
            subtree: !0,
          }),
            this.addEventListener("TOMEditor-compositionend", () => {
              t(this.value);
            });
        }
      };
    t.TOMEditor = h;
  })();
  var o = window;
  for (var s in r) o[s] = r[s];
  r.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
})();
