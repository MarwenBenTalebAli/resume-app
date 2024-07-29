import {
  NzScrollService
} from "./chunk-2TDQGAOK.js";
import {
  Platform,
  PlatformModule,
  normalizePassiveListenerOptions
} from "./chunk-5322DHDX.js";
import {
  BidiModule,
  Directionality
} from "./chunk-CFNTZZRK.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-ZLSREH3V.js";
import {
  coerceElement,
  getStyleAsText,
  numberAttributeWithZeroFallback,
  shallowEqual
} from "./chunk-7VJB33WV.js";
import {
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-JTFJXEPH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-EGKYOYDE.js";
import {
  fromEvent,
  merge
} from "./chunk-VYB34C76.js";
import "./chunk-YWCZMQC3.js";
import {
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  __decorate,
  map,
  takeUntil,
  throttleTime
} from "./chunk-QMXPFFSE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LJ4VCL4A.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var _NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
};
_NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
  return new (t || _NzResizeObserverFactory)();
};
_NzResizeObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserverFactory,
  factory: _NzResizeObserverFactory.ɵfac,
  providedIn: "root"
});
var NzResizeObserverFactory = _NzResizeObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NzResizeObserver = class _NzResizeObserver {
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
    this.observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
};
_NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
  return new (t || _NzResizeObserver)(ɵɵinject(NzResizeObserverFactory));
};
_NzResizeObserver.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserver,
  factory: _NzResizeObserver.ɵfac,
  providedIn: "root"
});
var NzResizeObserver = _NzResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var _NzResizeObserverDirective = class _NzResizeObserverDirective {
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
    this.nzResizeObserve = new EventEmitter();
    this.nzResizeObserverDisabled = false;
    this.currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
};
_NzResizeObserverDirective.ɵfac = function NzResizeObserverDirective_Factory(t) {
  return new (t || _NzResizeObserverDirective)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ElementRef));
};
_NzResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzResizeObserverDirective,
  selectors: [["", "nzResizeObserver", ""]],
  inputs: {
    nzResizeObserverDisabled: [2, "nzResizeObserverDisabled", "nzResizeObserverDisabled", booleanAttribute]
  },
  outputs: {
    nzResizeObserve: "nzResizeObserve"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzResizeObserverFactory]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzResizeObserverDirective = _NzResizeObserverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      standalone: true,
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzResizeObserverModule = class _NzResizeObserverModule {
};
_NzResizeObserverModule.ɵfac = function NzResizeObserverModule_Factory(t) {
  return new (t || _NzResizeObserverModule)();
};
_NzResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzResizeObserverModule,
  imports: [NzResizeObserverDirective],
  exports: [NzResizeObserverDirective]
});
_NzResizeObserverModule.ɵinj = ɵɵdefineInjector({});
var NzResizeObserverModule = _NzResizeObserverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-affix.mjs
var _c0 = ["fixedEl"];
var _c1 = ["*"];
var AffixRespondEvents;
(function(AffixRespondEvents2) {
  AffixRespondEvents2["resize"] = "resize";
  AffixRespondEvents2["scroll"] = "scroll";
  AffixRespondEvents2["touchstart"] = "touchstart";
  AffixRespondEvents2["touchmove"] = "touchmove";
  AffixRespondEvents2["touchend"] = "touchend";
  AffixRespondEvents2["pageshow"] = "pageshow";
  AffixRespondEvents2["load"] = "LOAD";
})(AffixRespondEvents || (AffixRespondEvents = {}));
function isTargetWindow(target) {
  return typeof window !== "undefined" && target === window;
}
function getTargetRect(target) {
  return !isTargetWindow(target) ? target.getBoundingClientRect() : {
    top: 0,
    left: 0,
    bottom: 0
  };
}
var NZ_CONFIG_MODULE_NAME = "affix";
var NZ_AFFIX_CLS_PREFIX = "ant-affix";
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
var _NzAffixComponent = class _NzAffixComponent {
  get target() {
    const el = this.nzTarget;
    return (typeof el === "string" ? this.document.querySelector(el) : el) || window;
  }
  constructor(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer, nzResizeObserver, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.ngZone = ngZone;
    this.platform = platform;
    this.renderer = renderer;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzChange = new EventEmitter();
    this.dir = "ltr";
    this.positionChangeSubscription = Subscription.EMPTY;
    this.offsetChanged$ = new ReplaySubject(1);
    this.destroy$ = new Subject();
    this.placeholderNode = el.nativeElement;
    this.document = doc;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.registerListeners();
      this.updatePosition({});
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzOffsetBottom,
      nzOffsetTop,
      nzTarget
    } = changes;
    if (nzOffsetBottom || nzOffsetTop) {
      this.offsetChanged$.next();
    }
    if (nzTarget) {
      this.registerListeners();
    }
  }
  ngAfterViewInit() {
    this.registerListeners();
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  registerListeners() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListeners();
    const el = this.target === window ? this.document.body : this.target;
    this.positionChangeSubscription = this.ngZone.runOutsideAngular(() => merge(...Object.keys(AffixRespondEvents).map((evName) => fromEvent(this.target, evName)), this.offsetChanged$.pipe(map(() => ({}))), this.nzResizeObserver.observe(el)).pipe(throttleTime(NZ_AFFIX_DEFAULT_SCROLL_TIME, void 0, {
      trailing: true
    }), takeUntil(this.destroy$)).subscribe((e) => this.updatePosition(e)));
    this.timeout = setTimeout(() => this.updatePosition({}));
  }
  removeListeners() {
    clearTimeout(this.timeout);
    this.positionChangeSubscription.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  getOffset(element, target) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = getTargetRect(target);
    const scrollTop = this.scrollSrv.getScroll(target, true);
    const scrollLeft = this.scrollSrv.getScroll(target, false);
    const docElem = this.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;
    return {
      top: elemRect.top - targetRect.top + scrollTop - clientTop,
      left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    };
  }
  setAffixStyle(e, affixStyle) {
    const originalAffixStyle = this.affixStyle;
    const isWindow = this.target === window;
    if (e.type === "scroll" && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if (shallowEqual(originalAffixStyle, affixStyle)) {
      return;
    }
    const fixed = !!affixStyle;
    const wrapEl = this.fixedEl.nativeElement;
    this.renderer.setStyle(wrapEl, "cssText", getStyleAsText(affixStyle));
    this.affixStyle = affixStyle;
    if (fixed) {
      wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
    } else {
      wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
    }
    this.updateRtlClass();
    if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
      this.nzChange.emit(fixed);
    }
  }
  setPlaceholderStyle(placeholderStyle) {
    const originalPlaceholderStyle = this.placeholderStyle;
    if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", getStyleAsText(placeholderStyle));
    this.placeholderStyle = placeholderStyle;
  }
  syncPlaceholderStyle(e) {
    if (!this.affixStyle) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", "");
    this.placeholderStyle = void 0;
    const styleObj = {
      width: this.placeholderNode.offsetWidth,
      height: this.fixedEl.nativeElement.offsetHeight
    };
    this.setAffixStyle(e, __spreadValues(__spreadValues({}, this.affixStyle), styleObj));
    this.setPlaceholderStyle(styleObj);
  }
  updatePosition(e) {
    if (!this.platform.isBrowser) {
      return;
    }
    const targetNode = this.target;
    let offsetTop = this.nzOffsetTop;
    const scrollTop = this.scrollSrv.getScroll(targetNode, true);
    const elemOffset = this.getOffset(this.placeholderNode, targetNode);
    const fixedNode = this.fixedEl.nativeElement;
    const elemSize = {
      width: fixedNode.offsetWidth,
      height: fixedNode.offsetHeight
    };
    const offsetMode = {
      top: false,
      bottom: false
    };
    if (typeof offsetTop !== "number" && typeof this.nzOffsetBottom !== "number") {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === "number";
      offsetMode.bottom = typeof this.nzOffsetBottom === "number";
    }
    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
      const width = elemOffset.width;
      const top = targetRect.top + offsetTop;
      this.setAffixStyle(e, {
        position: "fixed",
        top,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemSize.height
      });
    } else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
      const targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
      const width = elemOffset.width;
      this.setAffixStyle(e, {
        position: "fixed",
        bottom: targetBottomOffset + this.nzOffsetBottom,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height
      });
    } else {
      if (e.type === AffixRespondEvents.resize && this.affixStyle && this.affixStyle.position === "fixed" && this.placeholderNode.offsetWidth) {
        this.setAffixStyle(e, __spreadProps(__spreadValues({}, this.affixStyle), {
          width: this.placeholderNode.offsetWidth
        }));
      } else {
        this.setAffixStyle(e);
      }
      this.setPlaceholderStyle();
    }
    if (e.type === "resize") {
      this.syncPlaceholderStyle(e);
    }
  }
  updateRtlClass() {
    const wrapEl = this.fixedEl.nativeElement;
    if (this.dir === "rtl") {
      if (wrapEl.classList.contains(NZ_AFFIX_CLS_PREFIX)) {
        wrapEl.classList.add(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      } else {
        wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      }
    } else {
      wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
    }
  }
};
_NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) {
  return new (t || _NzAffixComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzAffixComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAffixComponent,
  selectors: [["nz-affix"]],
  viewQuery: function NzAffixComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    }
  },
  inputs: {
    nzTarget: "nzTarget",
    nzOffsetTop: [2, "nzOffsetTop", "nzOffsetTop", numberAttributeWithZeroFallback],
    nzOffsetBottom: [2, "nzOffsetBottom", "nzOffsetBottom", numberAttributeWithZeroFallback]
  },
  outputs: {
    nzChange: "nzChange"
  },
  exportAs: ["nzAffix"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["fixedEl", ""]],
  template: function NzAffixComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  dependencies: [BidiModule, PlatformModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzAffixComponent = _NzAffixComponent;
__decorate([WithConfig()], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([WithConfig()], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixComponent, [{
    type: Component,
    args: [{
      selector: "nz-affix",
      exportAs: "nzAffix",
      standalone: true,
      imports: [BidiModule, PlatformModule],
      template: `
    <div #fixedEl>
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: Renderer2
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    fixedEl: [{
      type: ViewChild,
      args: ["fixedEl", {
        static: true
      }]
    }],
    nzTarget: [{
      type: Input
    }],
    nzOffsetTop: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzOffsetBottom: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzChange: [{
      type: Output
    }]
  });
})();
var _NzAffixModule = class _NzAffixModule {
};
_NzAffixModule.ɵfac = function NzAffixModule_Factory(t) {
  return new (t || _NzAffixModule)();
};
_NzAffixModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAffixModule,
  imports: [NzAffixComponent],
  exports: [NzAffixComponent]
});
_NzAffixModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAffixComponent]
});
var NzAffixModule = _NzAffixModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixModule, [{
    type: NgModule,
    args: [{
      exports: [NzAffixComponent],
      imports: [NzAffixComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-anchor.mjs
var _c02 = ["ink"];
var _c12 = ["*"];
var _c2 = (a0) => ({
  "ant-anchor-wrapper-horizontal": a0
});
var _c3 = (a0) => ({
  "ant-anchor-fixed": a0
});
function NzAnchorComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-affix", 2);
    ɵɵtemplate(1, NzAnchorComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const content_r2 = ɵɵreference(3);
    ɵɵproperty("nzOffsetTop", ctx_r0.nzOffsetTop)("nzTarget", ctx_r0.container);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAnchorComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    ɵɵelement(3, "div", 7, 1);
    ɵɵelementEnd();
    ɵɵprojection(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c2, ctx_r0.nzDirection === "horizontal"))("ngStyle", ctx_r0.wrapperStyle);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c3, !ctx_r0.nzAffix && !ctx_r0.nzShowInkInFixed));
  }
}
var _c4 = ["nzTemplate"];
var _c5 = ["linkTitle"];
function NzAnchorLinkComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.titleStr);
  }
}
function NzAnchorLinkComponent_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzAnchorLinkComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAnchorLinkComponent_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.titleTpl || ctx_r1.nzTemplate);
  }
}
function NzAnchorLinkComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function getOffsetTop(element, container) {
  if (!element || !element.getClientRects().length) {
    return 0;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      const documentElement = element.ownerDocument.documentElement;
      return rect.top - documentElement.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
var VISIBLE_CLASSNAME = "ant-anchor-ink-ball-visible";
var NZ_CONFIG_MODULE_NAME2 = "anchor";
var sharpMatcherRegx = /#([^#]+)$/;
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _NzAnchorComponent = class _NzAnchorComponent {
  constructor(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
    this.doc = doc;
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.cdr = cdr;
    this.platform = platform;
    this.zone = zone;
    this.renderer = renderer;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.nzAffix = true;
    this.nzShowInkInFixed = false;
    this.nzBounds = 5;
    this.nzOffsetTop = void 0;
    this.nzTargetOffset = void 0;
    this.nzDirection = "vertical";
    this.nzClick = new EventEmitter();
    this.nzChange = new EventEmitter();
    this.nzScroll = new EventEmitter();
    this.visible = false;
    this.wrapperStyle = {
      "max-height": "100vh"
    };
    this.links = [];
    this.animating = false;
    this.destroy$ = new Subject();
  }
  registerLink(link) {
    this.links.push(link);
  }
  unregisterLink(link) {
    this.links.splice(this.links.indexOf(link), 1);
  }
  getContainer() {
    return this.container || window;
  }
  ngAfterViewInit() {
    this.registerScrollEvent();
  }
  ngOnDestroy() {
    clearTimeout(this.handleScrollTimeoutID);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  registerScrollEvent() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.destroy$.next(true);
    this.zone.runOutsideAngular(() => {
      fromEvent(this.getContainer(), "scroll", passiveEventListenerOptions).pipe(throttleTime(50), takeUntil(this.destroy$)).subscribe(() => this.handleScroll());
    });
    this.handleScrollTimeoutID = setTimeout(() => this.handleScroll());
  }
  handleScroll() {
    if (typeof document === "undefined" || this.animating) {
      return;
    }
    const sections = [];
    const offsetTop = this.nzTargetOffset ? this.nzTargetOffset : this.nzOffsetTop || 0;
    const scope = offsetTop + this.nzBounds;
    this.links.forEach((comp) => {
      const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
      if (!sharpLinkMatch) {
        return;
      }
      const target = this.doc.getElementById(sharpLinkMatch[1]);
      if (target) {
        const top = getOffsetTop(target, this.getContainer());
        if (top < scope) {
          sections.push({
            top,
            comp
          });
        }
      }
    });
    this.visible = !!sections.length;
    if (!this.visible) {
      this.clearActive();
      this.cdr.detectChanges();
    } else {
      const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      this.handleActive(maxSection.comp);
    }
    this.setVisible();
  }
  clearActive() {
    this.links.forEach((i) => {
      i.unsetActive();
    });
  }
  setActive(comp) {
    const originalActiveLink = this.activeLink;
    const targetComp = this.nzCurrentAnchor && this.links.find((n) => n.nzHref === this.nzCurrentAnchor) || comp;
    if (!targetComp)
      return;
    targetComp.setActive();
    const linkNode = targetComp.getLinkTitleElement();
    if (this.nzDirection === "vertical") {
      this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
    } else {
      this.ink.nativeElement.style.left = `${linkNode.offsetLeft + linkNode.clientWidth / 2}px`;
    }
    this.activeLink = (comp || targetComp).nzHref;
    if (originalActiveLink !== this.activeLink) {
      this.nzChange.emit(this.activeLink);
    }
  }
  handleActive(comp) {
    this.clearActive();
    this.setActive(comp);
    this.visible = true;
    this.setVisible();
    this.nzScroll.emit(comp);
  }
  setVisible() {
    if (this.ink) {
      const visible = this.visible;
      if (visible) {
        this.renderer.addClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
      } else {
        this.renderer.removeClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
      }
    }
  }
  handleScrollTo(linkComp) {
    const el = this.doc.querySelector(linkComp.nzHref);
    if (!el) {
      return;
    }
    this.animating = true;
    const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
    const elOffsetTop = getOffsetTop(el, this.getContainer());
    let targetScrollTop = containerScrollTop + elOffsetTop;
    targetScrollTop -= this.nzTargetOffset !== void 0 ? this.nzTargetOffset : this.nzOffsetTop || 0;
    this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, {
      callback: () => {
        this.animating = false;
        this.handleActive(linkComp);
      }
    });
    this.nzClick.emit(linkComp.nzHref);
  }
  ngOnChanges(changes) {
    const {
      nzOffsetTop,
      nzContainer,
      nzCurrentAnchor
    } = changes;
    if (nzOffsetTop) {
      this.wrapperStyle = {
        "max-height": `calc(100vh - ${this.nzOffsetTop}px)`
      };
    }
    if (nzContainer) {
      const container = this.nzContainer;
      this.container = typeof container === "string" ? this.doc.querySelector(container) : container;
      this.registerScrollEvent();
    }
    if (nzCurrentAnchor) {
      this.setActive();
    }
  }
};
_NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) {
  return new (t || _NzAnchorComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
_NzAnchorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAnchorComponent,
  selectors: [["nz-anchor"]],
  viewQuery: function NzAnchorComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ink = _t.first);
    }
  },
  inputs: {
    nzAffix: [2, "nzAffix", "nzAffix", booleanAttribute],
    nzShowInkInFixed: [2, "nzShowInkInFixed", "nzShowInkInFixed", booleanAttribute],
    nzBounds: [2, "nzBounds", "nzBounds", numberAttribute],
    nzOffsetTop: [2, "nzOffsetTop", "nzOffsetTop", numberAttributeWithZeroFallback],
    nzTargetOffset: [2, "nzTargetOffset", "nzTargetOffset", numberAttributeWithZeroFallback],
    nzContainer: "nzContainer",
    nzCurrentAnchor: "nzCurrentAnchor",
    nzDirection: "nzDirection"
  },
  outputs: {
    nzClick: "nzClick",
    nzChange: "nzChange",
    nzScroll: "nzScroll"
  },
  exportAs: ["nzAnchor"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c12,
  decls: 4,
  vars: 1,
  consts: [["content", ""], ["ink", ""], [3, "nzOffsetTop", "nzTarget"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngClass", "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"]],
  template: function NzAnchorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzAnchorComponent_Conditional_0_Template, 2, 3, "nz-affix", 2)(1, NzAnchorComponent_Conditional_1_Template, 1, 1, null, 3)(2, NzAnchorComponent_ng_template_2_Template, 6, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.nzAffix ? 0 : 1);
    }
  },
  dependencies: [NgClass, NgStyle, NgTemplateOutlet, NzAffixModule, NzAffixComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzAnchorComponent = _NzAnchorComponent;
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzBounds", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzTargetOffset", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorComponent, [{
    type: Component,
    args: [{
      selector: "nz-anchor",
      exportAs: "nzAnchor",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgClass, NgIf, NgStyle, NgTemplateOutlet, NzAffixModule],
      template: `
    @if (nzAffix) {
      <nz-affix [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    }

    <ng-template #content>
      <div
        class="ant-anchor-wrapper"
        [ngClass]="{ 'ant-anchor-wrapper-horizontal': nzDirection === 'horizontal' }"
        [ngStyle]="wrapperStyle"
      >
        <div class="ant-anchor" [ngClass]="{ 'ant-anchor-fixed': !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    ink: [{
      type: ViewChild,
      args: ["ink", {
        static: false
      }]
    }],
    nzAffix: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowInkInFixed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBounds: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzOffsetTop: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzTargetOffset: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzContainer: [{
      type: Input
    }],
    nzCurrentAnchor: [{
      type: Input
    }],
    nzDirection: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }],
    nzChange: [{
      type: Output
    }],
    nzScroll: [{
      type: Output
    }]
  });
})();
var _NzAnchorLinkComponent = class _NzAnchorLinkComponent {
  set nzTitle(value) {
    if (value instanceof TemplateRef) {
      this.titleStr = null;
      this.titleTpl = value;
    } else {
      this.titleStr = value;
    }
  }
  constructor(elementRef, anchorComp, platform, renderer) {
    this.elementRef = elementRef;
    this.anchorComp = anchorComp;
    this.platform = platform;
    this.renderer = renderer;
    this.nzHref = "#";
    this.titleStr = "";
    this.nzDirection = "vertical";
  }
  ngOnInit() {
    this.anchorComp.registerLink(this);
    this.nzDirection = this.anchorComp.nzDirection;
  }
  getLinkTitleElement() {
    return this.linkTitle.nativeElement;
  }
  setActive() {
    this.renderer.addClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  unsetActive() {
    this.renderer.removeClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  goToClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.platform.isBrowser) {
      this.anchorComp.handleScrollTo(this);
    }
  }
  ngOnDestroy() {
    this.anchorComp.unregisterLink(this);
  }
};
_NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) {
  return new (t || _NzAnchorLinkComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzAnchorComponent), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2));
};
_NzAnchorLinkComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAnchorLinkComponent,
  selectors: [["nz-link"]],
  contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
    }
  },
  viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkTitle = _t.first);
    }
  },
  hostAttrs: [1, "ant-anchor-link"],
  inputs: {
    nzHref: "nzHref",
    nzTarget: "nzTarget",
    nzTitle: "nzTitle"
  },
  exportAs: ["nzLink"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c12,
  decls: 5,
  vars: 5,
  consts: [["linkTitle", ""], [1, "ant-anchor-link-title", 3, "click", "href", "title", "target"], [3, "ngTemplateOutlet"]],
  template: function NzAnchorLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "a", 1, 0);
      ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.goToClick($event));
      });
      ɵɵtemplate(2, NzAnchorLinkComponent_Conditional_2_Template, 2, 1, "span")(3, NzAnchorLinkComponent_Conditional_3_Template, 1, 1, null, 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzAnchorLinkComponent_Conditional_4_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵproperty("href", ctx.nzHref, ɵɵsanitizeUrl)("title", ctx.titleStr)("target", ctx.nzTarget);
      ɵɵadvance(2);
      ɵɵconditional(ctx.titleStr ? 2 : 3);
      ɵɵadvance(2);
      ɵɵconditional(ctx.nzDirection === "vertical" ? 4 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzAnchorLinkComponent = _NzAnchorLinkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorLinkComponent, [{
    type: Component,
    args: [{
      selector: "nz-link",
      exportAs: "nzLink",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgTemplateOutlet],
      template: `
    <a
      #linkTitle
      class="ant-anchor-link-title"
      [href]="nzHref"
      [title]="titleStr"
      [target]="nzTarget"
      (click)="goToClick($event)"
    >
      @if (titleStr) {
        <span>{{ titleStr }}</span>
      } @else {
        <ng-template [ngTemplateOutlet]="titleTpl || nzTemplate" />
      }
    </a>
    @if (nzDirection === 'vertical') {
      <ng-content></ng-content>
    }
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-anchor-link"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzAnchorComponent
  }, {
    type: Platform
  }, {
    type: Renderer2
  }], {
    nzHref: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzTemplate: [{
      type: ContentChild,
      args: ["nzTemplate", {
        static: false
      }]
    }],
    linkTitle: [{
      type: ViewChild,
      args: ["linkTitle"]
    }]
  });
})();
var _NzAnchorModule = class _NzAnchorModule {
};
_NzAnchorModule.ɵfac = function NzAnchorModule_Factory(t) {
  return new (t || _NzAnchorModule)();
};
_NzAnchorModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAnchorModule,
  imports: [NzAnchorComponent, NzAnchorLinkComponent],
  exports: [NzAnchorComponent, NzAnchorLinkComponent]
});
_NzAnchorModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAnchorComponent]
});
var NzAnchorModule = _NzAnchorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorModule, [{
    type: NgModule,
    args: [{
      exports: [NzAnchorComponent, NzAnchorLinkComponent],
      imports: [NzAnchorComponent, NzAnchorLinkComponent]
    }]
  }], null, null);
})();
export {
  NzAnchorComponent,
  NzAnchorLinkComponent,
  NzAnchorModule
};
//# sourceMappingURL=ng-zorro-antd_anchor.js.map
