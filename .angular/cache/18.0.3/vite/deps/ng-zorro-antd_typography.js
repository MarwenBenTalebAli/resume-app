import {
  ALT,
  CONTROL,
  CdkConnectedOverlay,
  DEFAULT_TOOLTIP_POSITIONS,
  ENTER,
  ESCAPE,
  MAC_META,
  META,
  NzConnectedOverlayDirective,
  NzNoAnimationDirective,
  NzOverlayModule,
  OverlayModule,
  POSITION_MAP,
  SHIFT,
  getPlacementName,
  zoomBigMotion
} from "./chunk-WRG33VRQ.js";
import {
  NzI18nService
} from "./chunk-SZ7KWKM4.js";
import "./chunk-V6UD2O5I.js";
import "./chunk-DPEYMEHY.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-7DGD622R.js";
import {
  NgControl
} from "./chunk-BUTJST7K.js";
import {
  BreakpointObserver,
  NzDestroyService,
  NzResizeService,
  cancelRequestAnimationFrame,
  reqAnimFrame
} from "./chunk-XBNBZFXP.js";
import {
  Directionality
} from "./chunk-CFNTZZRK.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-WX4YWH3P.js";
import "./chunk-3JSU54FM.js";
import {
  NzConfigService,
  WithConfig,
  isPresetColor
} from "./chunk-DXE4DR7A.js";
import {
  Platform,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  normalizePassiveListenerOptions
} from "./chunk-5322DHDX.js";
import {
  coerceElement,
  coerceNumberProperty,
  getStatusClassNames,
  isNotNil,
  isStyleSupport,
  measure,
  toBoolean
} from "./chunk-HWIC3F32.js";
import "./chunk-W43KMHDR.js";
import "./chunk-4ESRDJKD.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-JTFJXEPH.js";
import {
  APP_ID,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Self,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  inject,
  isDevMode,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EGKYOYDE.js";
import "./chunk-YWCZMQC3.js";
import {
  asapScheduler,
  fromEvent,
  merge
} from "./chunk-VYB34C76.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  __decorate,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  first,
  map,
  mergeMap,
  of,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil
} from "./chunk-QMXPFFSE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LJ4VCL4A.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-trans-button.mjs
var _NzTransButtonDirective = class _NzTransButtonDirective {
};
_NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) {
  return new (t || _NzTransButtonDirective)();
};
_NzTransButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTransButtonDirective,
  selectors: [["button", "nz-trans-button", ""]],
  hostVars: 8,
  hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    }
  },
  standalone: true
});
var NzTransButtonDirective = _NzTransButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-trans-button]",
      host: {
        "[style.border]": '"0"',
        "[style.background]": '"transparent"',
        "[style.padding]": '"0"',
        "[style.line-height]": '"inherit"'
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTransButtonModule = class _NzTransButtonModule {
};
_NzTransButtonModule.ɵfac = function NzTransButtonModule_Factory(t) {
  return new (t || _NzTransButtonModule)();
};
_NzTransButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTransButtonModule,
  imports: [NzTransButtonDirective],
  exports: [NzTransButtonDirective]
});
_NzTransButtonModule.ɵinj = ɵɵdefineInjector({});
var NzTransButtonModule = _NzTransButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tooltip.mjs
var _c0 = ["overlay"];
function NzToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzToolTipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, NzToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(3);
    ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", ctx_r1.nzTitleContext);
  }
}
var _NzTooltipBaseDirective = class _NzTooltipBaseDirective {
  /**
   * This true title that would be used in other parts on this component.
   */
  get _title() {
    return this.title || this.directiveTitle || null;
  }
  get _content() {
    return this.content || this.directiveContent || null;
  }
  get _trigger() {
    return typeof this.trigger !== "undefined" ? this.trigger : "hover";
  }
  get _placement() {
    const p = this.placement;
    return Array.isArray(p) && p.length > 0 ? p : typeof p === "string" && p ? [p] : ["top"];
  }
  get _visible() {
    return (typeof this.visible !== "undefined" ? this.visible : this.internalVisible) || false;
  }
  get _mouseEnterDelay() {
    return this.mouseEnterDelay || 0.15;
  }
  get _mouseLeaveDelay() {
    return this.mouseLeaveDelay || 0.1;
  }
  get _overlayClassName() {
    return this.overlayClassName || null;
  }
  get _overlayStyle() {
    return this.overlayStyle || null;
  }
  getProxyPropertyMap() {
    return {
      noAnimation: ["noAnimation", () => !!this.noAnimation]
    };
  }
  constructor(componentType) {
    this.componentType = componentType;
    this.visibleChange = new EventEmitter();
    this.internalVisible = false;
    this.destroy$ = new Subject();
    this.triggerDisposables = [];
    this.elementRef = inject(ElementRef);
    this.hostView = inject(ViewContainerRef);
    this.renderer = inject(Renderer2);
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.nzConfigService = inject(NzConfigService);
    this.platformId = inject(PLATFORM_ID);
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createComponent();
      this.registerTriggers();
    }
  }
  ngOnChanges(changes) {
    const {
      trigger
    } = changes;
    if (trigger && !trigger.isFirstChange()) {
      this.registerTriggers();
    }
    if (this.component) {
      this.updatePropertiesByChanges(changes);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearTogglingTimer();
    this.removeTriggerListeners();
  }
  show() {
    this.component?.show();
  }
  hide() {
    this.component?.hide();
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.component) {
      this.component.updatePosition();
    }
  }
  /**
   * Create a dynamic tooltip component. This method can be override.
   */
  createComponent() {
    const componentRef = this.hostView.createComponent(this.componentType);
    this.component = componentRef.instance;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
    this.component.setOverlayOrigin(this.origin || this.elementRef);
    this.initProperties();
    const ngVisibleChange$ = this.component.nzVisibleChange.pipe(distinctUntilChanged());
    ngVisibleChange$.pipe(takeUntil(this.destroy$)).subscribe((visible) => {
      this.internalVisible = visible;
      this.visibleChange.emit(visible);
    });
    ngVisibleChange$.pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntil(this.destroy$)).subscribe(() => {
      this.component?.updatePosition();
    });
  }
  registerTriggers() {
    const el = this.elementRef.nativeElement;
    const trigger = this.trigger;
    this.removeTriggerListeners();
    if (trigger === "hover") {
      let overlayElement;
      this.triggerDisposables.push(this.renderer.listen(el, "mouseenter", () => {
        this.delayEnterLeave(true, true, this._mouseEnterDelay);
      }));
      this.triggerDisposables.push(this.renderer.listen(el, "mouseleave", () => {
        this.delayEnterLeave(true, false, this._mouseLeaveDelay);
        if (this.component?.overlay.overlayRef && !overlayElement) {
          overlayElement = this.component.overlay.overlayRef.overlayElement;
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseenter", () => {
            this.delayEnterLeave(false, true, this._mouseEnterDelay);
          }));
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseleave", () => {
            this.delayEnterLeave(false, false, this._mouseLeaveDelay);
          }));
        }
      }));
    } else if (trigger === "focus") {
      this.triggerDisposables.push(this.renderer.listen(el, "focusin", () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(el, "focusout", () => this.hide()));
    } else if (trigger === "click") {
      this.triggerDisposables.push(this.renderer.listen(el, "click", (e) => {
        e.preventDefault();
        this.show();
      }));
    }
  }
  updatePropertiesByChanges(changes) {
    this.updatePropertiesByKeys(Object.keys(changes));
  }
  updatePropertiesByKeys(keys) {
    const mappingProperties = __spreadValues({
      // common mappings
      title: ["nzTitle", () => this._title],
      directiveTitle: ["nzTitle", () => this._title],
      content: ["nzContent", () => this._content],
      directiveContent: ["nzContent", () => this._content],
      trigger: ["nzTrigger", () => this._trigger],
      placement: ["nzPlacement", () => this._placement],
      visible: ["nzVisible", () => this._visible],
      mouseEnterDelay: ["nzMouseEnterDelay", () => this._mouseEnterDelay],
      mouseLeaveDelay: ["nzMouseLeaveDelay", () => this._mouseLeaveDelay],
      overlayClassName: ["nzOverlayClassName", () => this._overlayClassName],
      overlayStyle: ["nzOverlayStyle", () => this._overlayStyle],
      arrowPointAtCenter: ["nzArrowPointAtCenter", () => this.arrowPointAtCenter],
      cdkConnectedOverlayPush: ["cdkConnectedOverlayPush", () => this.cdkConnectedOverlayPush]
    }, this.getProxyPropertyMap());
    (keys || Object.keys(mappingProperties).filter((key) => !key.startsWith("directive"))).forEach((property) => {
      if (mappingProperties[property]) {
        const [name, valueFn] = mappingProperties[property];
        this.updateComponentValue(name, valueFn());
      }
    });
    this.component?.updateByDirective();
  }
  initProperties() {
    this.updatePropertiesByKeys();
  }
  updateComponentValue(key, value) {
    if (typeof value !== "undefined") {
      this.component[key] = value;
    }
  }
  delayEnterLeave(isOrigin, isEnter, delay2 = -1) {
    if (this.delayTimer) {
      this.clearTogglingTimer();
    } else if (delay2 > 0) {
      this.delayTimer = setTimeout(() => {
        this.delayTimer = void 0;
        isEnter ? this.show() : this.hide();
      }, delay2 * 1e3);
    } else {
      isEnter && isOrigin ? this.show() : this.hide();
    }
  }
  removeTriggerListeners() {
    this.triggerDisposables.forEach((dispose) => dispose());
    this.triggerDisposables.length = 0;
  }
  clearTogglingTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = void 0;
    }
  }
};
_NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) {
  return new (t || _NzTooltipBaseDirective)(ɵɵdirectiveInject(Type));
};
_NzTooltipBaseDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipBaseDirective,
  features: [ɵɵNgOnChangesFeature]
});
var NzTooltipBaseDirective = _NzTooltipBaseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseDirective, [{
    type: Directive
  }], () => [{
    type: Type
  }], null);
})();
var _NzTooltipBaseComponent = class _NzTooltipBaseComponent {
  set nzVisible(value) {
    const visible = toBoolean(value);
    if (this._visible !== visible) {
      this._visible = visible;
      this.nzVisibleChange.next(visible);
    }
  }
  get nzVisible() {
    return this._visible;
  }
  set nzTrigger(value) {
    this._trigger = value;
  }
  get nzTrigger() {
    return this._trigger;
  }
  set nzPlacement(value) {
    const preferredPosition = value.map((placement) => POSITION_MAP[placement]);
    this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
  }
  constructor(cdr, directionality, noAnimation) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzTitle = null;
    this.nzContent = null;
    this.nzArrowPointAtCenter = false;
    this.nzOverlayStyle = {};
    this.nzBackdrop = false;
    this.cdkConnectedOverlayPush = true;
    this.nzVisibleChange = new Subject();
    this._visible = false;
    this._trigger = "hover";
    this.preferredPlacement = "top";
    this.dir = "ltr";
    this._classMap = {};
    this._prefix = "ant-tooltip";
    this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.nzVisibleChange.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
  show() {
    if (this.nzVisible) {
      return;
    }
    if (!this.isEmpty()) {
      this.nzVisible = true;
      this.nzVisibleChange.next(true);
      this.cdr.detectChanges();
    }
    if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === "rtl") {
      this.overlay.overlayRef.setDirection("ltr");
    }
  }
  hide() {
    if (!this.nzVisible) {
      return;
    }
    this.nzVisible = false;
    this.nzVisibleChange.next(false);
    this.cdr.detectChanges();
  }
  updateByDirective() {
    this.updateStyles();
    this.cdr.detectChanges();
    Promise.resolve().then(() => {
      this.updatePosition();
      this.updateVisibilityByTitle();
    });
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.origin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.updatePosition();
    }
  }
  onPositionChange(position) {
    this.preferredPlacement = getPlacementName(position);
    this.updateStyles();
    this.cdr.detectChanges();
  }
  setOverlayOrigin(origin) {
    this.origin = origin;
    this.cdr.markForCheck();
  }
  onClickOutside(event) {
    const target = _getEventTarget(event);
    if (!this.origin.nativeElement.contains(target) && this.nzTrigger !== null) {
      this.hide();
    }
  }
  /**
   * Hide the component while the content is empty.
   */
  updateVisibilityByTitle() {
    if (this.isEmpty()) {
      this.hide();
    }
  }
  updateStyles() {
    this._classMap = {
      [this.nzOverlayClassName]: true,
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true
    };
  }
};
_NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) {
  return new (t || _NzTooltipBaseComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective));
};
_NzTooltipBaseComponent.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipBaseComponent,
  viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
    }
  }
});
var NzTooltipBaseComponent = _NzTooltipBaseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseComponent, [{
    type: Directive
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective
  }], {
    overlay: [{
      type: ViewChild,
      args: ["overlay", {
        static: false
      }]
    }]
  });
})();
function isTooltipEmpty(value) {
  return value instanceof TemplateRef ? false : value === "" || !isNotNil(value);
}
var _NzTooltipDirective = class _NzTooltipDirective extends NzTooltipBaseDirective {
  constructor() {
    super(NzToolTipComponent);
    this.titleContext = null;
    this.trigger = "hover";
    this.placement = "top";
    this.cdkConnectedOverlayPush = true;
    this.visibleChange = new EventEmitter();
  }
  getProxyPropertyMap() {
    return __spreadProps(__spreadValues({}, super.getProxyPropertyMap()), {
      nzTooltipColor: ["nzColor", () => this.nzTooltipColor],
      titleContext: ["nzTitleContext", () => this.titleContext]
    });
  }
};
_NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) {
  return new (t || _NzTooltipDirective)();
};
_NzTooltipDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipDirective,
  selectors: [["", "nz-tooltip", ""]],
  hostVars: 2,
  hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tooltip-open", ctx.visible);
    }
  },
  inputs: {
    title: [0, "nzTooltipTitle", "title"],
    titleContext: [0, "nzTooltipTitleContext", "titleContext"],
    directiveTitle: [0, "nz-tooltip", "directiveTitle"],
    trigger: [0, "nzTooltipTrigger", "trigger"],
    placement: [0, "nzTooltipPlacement", "placement"],
    origin: [0, "nzTooltipOrigin", "origin"],
    visible: [0, "nzTooltipVisible", "visible"],
    mouseEnterDelay: [0, "nzTooltipMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: [0, "nzTooltipMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: [0, "nzTooltipOverlayClassName", "overlayClassName"],
    overlayStyle: [0, "nzTooltipOverlayStyle", "overlayStyle"],
    arrowPointAtCenter: [2, "nzTooltipArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
    cdkConnectedOverlayPush: [2, "cdkConnectedOverlayPush", "cdkConnectedOverlayPush", booleanAttribute],
    nzTooltipColor: "nzTooltipColor"
  },
  outputs: {
    visibleChange: "nzTooltipVisibleChange"
  },
  exportAs: ["nzTooltip"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzTooltipDirective = _NzTooltipDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-tooltip]",
      exportAs: "nzTooltip",
      host: {
        "[class.ant-tooltip-open]": "visible"
      },
      standalone: true
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: ["nzTooltipTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzTooltipTitleContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-tooltip"]
    }],
    trigger: [{
      type: Input,
      args: ["nzTooltipTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzTooltipPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzTooltipOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzTooltipVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzTooltipMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzTooltipMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzTooltipOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzTooltipOverlayStyle"]
    }],
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzTooltipArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    cdkConnectedOverlayPush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipColor: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzTooltipVisibleChange"]
    }]
  });
})();
var _NzToolTipComponent = class _NzToolTipComponent extends NzTooltipBaseComponent {
  constructor(cdr, directionality, noAnimation) {
    super(cdr, directionality, noAnimation);
    this.nzTitle = null;
    this.nzTitleContext = null;
    this._contentStyleMap = {};
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle);
  }
  updateStyles() {
    const isColorPreset = this.nzColor && isPresetColor(this.nzColor);
    this._classMap = {
      [this.nzOverlayClassName]: true,
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
      [`${this._prefix}-${this.nzColor}`]: isColorPreset
    };
    this._contentStyleMap = {
      backgroundColor: !!this.nzColor && !isColorPreset ? this.nzColor : null,
      "--antd-arrow-background-color": this.nzColor
    };
  }
};
_NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) {
  return new (t || _NzToolTipComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzToolTipComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzToolTipComponent,
  selectors: [["nz-tooltip"]],
  exportAs: ["nzTooltipComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content", 3, "ngStyle"], [1, "ant-tooltip-inner", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
  template: function NzToolTipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzToolTipComponent_ng_template_0_Template, 6, 11, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzToolTipComponent_Template_ng_template_detach_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide());
      })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzOverlayModule, NzConnectedOverlayDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzToolTipComponent = _NzToolTipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipComponent, [{
    type: Component,
    args: [{
      selector: "nz-tooltip",
      exportAs: "nzTooltipComponent",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [zoomBigMotion],
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="nzTitle; context: nzTitleContext">{{ nzTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      imports: [OverlayModule, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzOverlayModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], null);
})();
var _NzToolTipModule = class _NzToolTipModule {
};
_NzToolTipModule.ɵfac = function NzToolTipModule_Factory(t) {
  return new (t || _NzToolTipModule)();
};
_NzToolTipModule.ɵmod = ɵɵdefineNgModule({
  type: _NzToolTipModule,
  imports: [NzToolTipComponent, NzTooltipDirective],
  exports: [NzToolTipComponent, NzTooltipDirective]
});
_NzToolTipModule.ɵinj = ɵɵdefineInjector({
  imports: [NzToolTipComponent]
});
var NzToolTipModule = _NzToolTipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipModule, [{
    type: NgModule,
    args: [{
      imports: [NzToolTipComponent, NzTooltipDirective],
      exports: [NzToolTipComponent, NzTooltipDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var _Clipboard = class _Clipboard {
  constructor(document2) {
    this._document = document2;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
_Clipboard.ɵfac = function Clipboard_Factory(t) {
  return new (t || _Clipboard)(ɵɵinject(DOCUMENT));
};
_Clipboard.ɵprov = ɵɵdefineInjectable({
  token: _Clipboard,
  factory: _Clipboard.ɵfac,
  providedIn: "root"
});
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
_CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
  return new (t || _CdkCopyToClipboard)(ɵɵdirectiveInject(Clipboard), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};
_CdkCopyToClipboard.ɵdir = ɵɵdefineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: [0, "cdkCopyToClipboard", "text"],
    attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  },
  standalone: true
});
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
_ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
  return new (t || _ClipboardModule)();
};
_ClipboardModule.ɵmod = ɵɵdefineNgModule({
  type: _ClipboardModule,
  imports: [CdkCopyToClipboard],
  exports: [CdkCopyToClipboard]
});
_ClipboardModule.ɵinj = ɵɵdefineInjector({});
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-form.mjs
function NzFormItemFeedbackIconComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.iconType);
  }
}
var _NzFormStatusService = class _NzFormStatusService {
  constructor() {
    this.formStatusChanges = new ReplaySubject(1);
  }
};
_NzFormStatusService.ɵfac = function NzFormStatusService_Factory(t) {
  return new (t || _NzFormStatusService)();
};
_NzFormStatusService.ɵprov = ɵɵdefineInjectable({
  token: _NzFormStatusService,
  factory: _NzFormStatusService.ɵfac
});
var NzFormStatusService = _NzFormStatusService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormStatusService, [{
    type: Injectable
  }], null, null);
})();
var _NzFormNoStatusService = class _NzFormNoStatusService {
  constructor() {
    this.noFormStatus = new BehaviorSubject(false);
  }
};
_NzFormNoStatusService.ɵfac = function NzFormNoStatusService_Factory(t) {
  return new (t || _NzFormNoStatusService)();
};
_NzFormNoStatusService.ɵprov = ɵɵdefineInjectable({
  token: _NzFormNoStatusService,
  factory: _NzFormNoStatusService.ɵfac
});
var NzFormNoStatusService = _NzFormNoStatusService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormNoStatusService, [{
    type: Injectable
  }], null, null);
})();
var iconTypeMap = {
  error: "close-circle-fill",
  validating: "loading",
  success: "check-circle-fill",
  warning: "exclamation-circle-fill"
};
var _NzFormItemFeedbackIconComponent = class _NzFormItemFeedbackIconComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.status = "";
    this.iconType = null;
  }
  ngOnChanges(_changes) {
    this.updateIcon();
  }
  updateIcon() {
    this.iconType = this.status ? iconTypeMap[this.status] : null;
    this.cdr.markForCheck();
  }
};
_NzFormItemFeedbackIconComponent.ɵfac = function NzFormItemFeedbackIconComponent_Factory(t) {
  return new (t || _NzFormItemFeedbackIconComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzFormItemFeedbackIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormItemFeedbackIconComponent,
  selectors: [["nz-form-item-feedback-icon"]],
  hostAttrs: [1, "ant-form-item-feedback-icon"],
  hostVars: 8,
  hostBindings: function NzFormItemFeedbackIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-form-item-feedback-icon-error", ctx.status === "error")("ant-form-item-feedback-icon-warning", ctx.status === "warning")("ant-form-item-feedback-icon-success", ctx.status === "success")("ant-form-item-feedback-icon-validating", ctx.status === "validating");
    }
  },
  inputs: {
    status: "status"
  },
  exportAs: ["nzFormFeedbackIcon"],
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]],
  template: function NzFormItemFeedbackIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzFormItemFeedbackIconComponent_span_0_Template, 1, 1, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.iconType);
    }
  },
  dependencies: [NgIf, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzFormItemFeedbackIconComponent = _NzFormItemFeedbackIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemFeedbackIconComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item-feedback-icon",
      exportAs: "nzFormFeedbackIcon",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `,
      host: {
        class: "ant-form-item-feedback-icon",
        "[class.ant-form-item-feedback-icon-error]": 'status==="error"',
        "[class.ant-form-item-feedback-icon-warning]": 'status==="warning"',
        "[class.ant-form-item-feedback-icon-success]": 'status==="success"',
        "[class.ant-form-item-feedback-icon-validating]": 'status==="validating"'
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    status: [{
      type: Input
    }]
  });
})();
var _NzFormPatchModule = class _NzFormPatchModule {
};
_NzFormPatchModule.ɵfac = function NzFormPatchModule_Factory(t) {
  return new (t || _NzFormPatchModule)();
};
_NzFormPatchModule.ɵmod = ɵɵdefineNgModule({
  type: _NzFormPatchModule,
  declarations: [NzFormItemFeedbackIconComponent],
  imports: [CommonModule, NzIconModule],
  exports: [NzFormItemFeedbackIconComponent]
});
_NzFormPatchModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, NzIconModule]
});
var NzFormPatchModule = _NzFormPatchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormPatchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NzIconModule],
      exports: [NzFormItemFeedbackIconComponent],
      declarations: [NzFormItemFeedbackIconComponent]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || _MutationObserverFactory)();
};
_MutationObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.ɵfac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
    this._ngZone = inject(NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || _ContentObserver)(ɵɵinject(MutationObserverFactory));
};
_ContentObserver.ɵprov = ɵɵdefineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.ɵfac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || _CdkObserveContent)(ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(ElementRef));
};
_CdkObserveContent.ɵdir = ɵɵdefineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || _ObserversModule)();
};
_ObserversModule.ɵmod = ɵɵdefineNgModule({
  type: _ObserversModule,
  imports: [CdkObserveContent],
  exports: [CdkObserveContent]
});
_ObserversModule.ɵinj = ɵɵdefineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || _AriaDescriber)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
};
_AriaDescriber.ɵprov = ɵɵdefineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.ɵfac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || _InteractivityChecker)(ɵɵinject(Platform));
};
_InteractivityChecker.ɵprov = ɵɵdefineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.ɵfac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (!this._ngZone.isStable) {
      this._ngZone.onStable.pipe(take(1)).subscribe(fn);
    } else {
      if (this._injector) {
        afterNextRender(fn, {
          injector: this._injector
        });
      } else {
        fn();
      }
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = inject(Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
};
_FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || _FocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_FocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.ɵfac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || _CdkTrapFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(DOCUMENT));
};
_CdkTrapFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || _FocusTrapManager)();
};
_FocusTrapManager.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.ɵfac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }
};
_ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || _ConfigurableFocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(FocusTrapManager), ɵɵinject(DOCUMENT), ɵɵinject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.ɵfac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || _InputModalityDetector)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.ɵprov = ɵɵdefineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.ɵfac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || _LiveAnnouncer)(ɵɵinject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.ɵprov = ɵɵdefineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.ɵfac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || _CdkAriaLive)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LiveAnnouncer), ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(NgZone));
};
_CdkAriaLive.ɵdir = ɵɵdefineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [0, "cdkAriaLive", "politeness"],
    duration: [0, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || _FocusMonitor)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(InputModalityDetector), ɵɵinject(DOCUMENT, 8), ɵɵinject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.ɵprov = ɵɵdefineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.ɵfac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || _CdkMonitorFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor));
};
_CdkMonitorFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || _HighContrastModeDetector)(ɵɵinject(Platform), ɵɵinject(DOCUMENT));
};
_HighContrastModeDetector.ɵprov = ɵɵdefineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.ɵfac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || _A11yModule)(ɵɵinject(HighContrastModeDetector));
};
_A11yModule.ɵmod = ɵɵdefineNgModule({
  type: _A11yModule,
  imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
_A11yModule.ɵinj = ɵɵdefineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs
var _c02 = ["nz-input-group-slot", ""];
var _c1 = ["*"];
function NzInputGroupSlotComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.template);
  }
}
function NzInputGroupComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzAddOnBeforeIcon)("template", ctx_r0.nzAddOnBefore);
  }
}
function NzInputGroupComponent_Conditional_0_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NzInputGroupComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, NzInputGroupComponent_Conditional_0_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const affixTemplate_r2 = ɵɵreference(3);
    ɵɵclassProp("ant-input-affix-wrapper-disabled", ctx_r0.disabled)("ant-input-affix-wrapper-sm", ctx_r0.isSmall)("ant-input-affix-wrapper-lg", ctx_r0.isLarge)("ant-input-affix-wrapper-focused", ctx_r0.focused);
    ɵɵproperty("ngClass", ctx_r0.affixInGroupStatusCls);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
  }
}
function NzInputGroupComponent_Conditional_0_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzInputGroupComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_Conditional_0_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
  }
}
function NzInputGroupComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzAddOnAfterIcon)("template", ctx_r0.nzAddOnAfter);
  }
}
function NzInputGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzInputGroupComponent_Conditional_0_Conditional_1_Template, 1, 2, "span", 3)(2, NzInputGroupComponent_Conditional_0_Conditional_2_Template, 2, 10, "span", 4)(3, NzInputGroupComponent_Conditional_0_Conditional_3_Template, 1, 1, null, 5)(4, NzInputGroupComponent_Conditional_0_Conditional_4_Template, 1, 2, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isAffix || ctx_r0.hasFeedback ? 2 : 3);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon ? 4 : -1);
  }
}
function NzInputGroupComponent_Conditional_1_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzInputGroupComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_Conditional_1_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const affixTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
  }
}
function NzInputGroupComponent_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputGroupComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
  }
}
function NzInputGroupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_Conditional_1_Conditional_0_Template, 1, 1, null, 5)(1, NzInputGroupComponent_Conditional_1_Conditional_1_Template, 1, 1, null, 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.isAffix ? 0 : 1);
  }
}
function NzInputGroupComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzPrefixIcon)("template", ctx_r0.nzPrefix);
  }
}
function NzInputGroupComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
}
function NzInputGroupComponent_ng_template_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r0.status);
  }
}
function NzInputGroupComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_Conditional_2_Conditional_1_Template, 1, 1, "nz-form-item-feedback-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzSuffixIcon)("template", ctx_r0.nzSuffix);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isFeedback ? 1 : -1);
  }
}
function NzInputGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_Conditional_0_Template, 1, 2, "span", 7)(1, NzInputGroupComponent_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 5)(2, NzInputGroupComponent_ng_template_2_Conditional_2_Template, 2, 3, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵconditional(ctx_r0.nzPrefix || ctx_r0.nzPrefixIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSuffix || ctx_r0.nzSuffixIcon || ctx_r0.isFeedback ? 2 : -1);
  }
}
function NzInputGroupComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵelement(1, "nz-form-item-feedback-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("status", ctx_r0.status);
  }
}
function NzInputGroupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_4_Conditional_1_Template, 2, 1, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.isAddOn && !ctx_r0.isAffix && ctx_r0.isFeedback ? 1 : -1);
  }
}
var _c2 = [[["textarea", "nz-input", ""]]];
var _c3 = ["textarea[nz-input]"];
var _NzInputGroupSlotComponent = class _NzInputGroupSlotComponent {
  constructor() {
    this.icon = null;
    this.type = null;
    this.template = null;
  }
};
_NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) {
  return new (t || _NzInputGroupSlotComponent)();
};
_NzInputGroupSlotComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputGroupSlotComponent,
  selectors: [["", "nz-input-group-slot", ""]],
  hostVars: 6,
  hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    }
  },
  inputs: {
    icon: "icon",
    type: "type",
    template: "template"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c02,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet"]],
  template: function NzInputGroupSlotComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputGroupSlotComponent_Conditional_0_Template, 1, 1, "span", 0)(1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.icon ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputGroupSlotComponent = _NzInputGroupSlotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupSlotComponent, [{
    type: Component,
    args: [{
      selector: "[nz-input-group-slot]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (icon) {
      <span nz-icon [nzType]="icon"></span>
    }
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-input-group-addon]": `type === 'addon'`,
        "[class.ant-input-prefix]": `type === 'prefix'`,
        "[class.ant-input-suffix]": `type === 'suffix'`
      },
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    template: [{
      type: Input
    }]
  });
})();
var _NzInputDirective = class _NzInputDirective {
  get disabled() {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(ngControl, renderer, elementRef, hostView, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.ngControl = ngControl;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.hostView = hostView;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzBorderless = false;
    this.nzSize = "default";
    this.nzStepperless = true;
    this.nzStatus = "";
    this._disabled = false;
    this.disabled$ = new Subject();
    this.dir = "ltr";
    this.prefixCls = "ant-input";
    this.status = "";
    this.statusCls = {};
    this.hasFeedback = false;
    this.feedbackRef = null;
    this.components = [];
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    if (this.ngControl) {
      this.ngControl.statusChanges?.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$)).subscribe(() => {
        this.disabled$.next(this.ngControl.disabled);
      });
    }
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      disabled,
      nzStatus
    } = changes;
    if (disabled) {
      this.disabled$.next(this.disabled);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.renderFeedbackIcon();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  renderFeedbackIcon() {
    if (!this.status || !this.hasFeedback || !!this.nzFormNoStatusService) {
      this.hostView.clear();
      this.feedbackRef = null;
      return;
    }
    this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
    this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix");
    this.feedbackRef.instance.status = this.status;
    this.feedbackRef.instance.updateIcon();
  }
};
_NzInputDirective.ɵfac = function NzInputDirective_Factory(t) {
  return new (t || _NzInputDirective)(ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputDirective.ɵdir = ɵɵdefineDirective({
  type: _NzInputDirective,
  selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]],
  hostAttrs: [1, "ant-input"],
  hostVars: 13,
  hostBindings: function NzInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled || null);
      ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.nzBorderless)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small")("ant-input-rtl", ctx.dir === "rtl")("ant-input-stepperless", ctx.nzStepperless);
    }
  },
  inputs: {
    nzBorderless: [2, "nzBorderless", "nzBorderless", booleanAttribute],
    nzSize: "nzSize",
    nzStepperless: [2, "nzStepperless", "nzStepperless", booleanAttribute],
    nzStatus: "nzStatus",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["nzInput"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzInputDirective = _NzInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[nz-input],textarea[nz-input]",
      exportAs: "nzInput",
      host: {
        class: "ant-input",
        "[class.ant-input-disabled]": "disabled",
        "[class.ant-input-borderless]": "nzBorderless",
        "[class.ant-input-lg]": `nzSize === 'large'`,
        "[class.ant-input-sm]": `nzSize === 'small'`,
        "[attr.disabled]": "disabled || null",
        "[class.ant-input-rtl]": `dir=== 'rtl'`,
        "[class.ant-input-stepperless]": `nzStepperless`
      },
      standalone: true
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBorderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    nzStepperless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzInputGroupWhitSuffixOrPrefixDirective = class _NzInputGroupWhitSuffixOrPrefixDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) {
  return new (t || _NzInputGroupWhitSuffixOrPrefixDirective)(ɵɵdirectiveInject(ElementRef));
};
_NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = ɵɵdefineDirective({
  type: _NzInputGroupWhitSuffixOrPrefixDirective,
  selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]],
  standalone: true
});
var NzInputGroupWhitSuffixOrPrefixDirective = _NzInputGroupWhitSuffixOrPrefixDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupWhitSuffixOrPrefixDirective, [{
    type: Directive,
    args: [{
      selector: `nz-input-group[nzSuffix], nz-input-group[nzPrefix]`,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _NzInputGroupComponent = class _NzInputGroupComponent {
  constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.focusMonitor = focusMonitor;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzAddOnBeforeIcon = null;
    this.nzAddOnAfterIcon = null;
    this.nzPrefixIcon = null;
    this.nzSuffixIcon = null;
    this.nzStatus = "";
    this.nzSize = "default";
    this.nzSearch = false;
    this.nzCompact = false;
    this.isLarge = false;
    this.isSmall = false;
    this.isAffix = false;
    this.isAddOn = false;
    this.isFeedback = false;
    this.focused = false;
    this.disabled = false;
    this.dir = "ltr";
    this.prefixCls = "ant-input";
    this.affixStatusCls = {};
    this.groupStatusCls = {};
    this.affixInGroupStatusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.destroy$ = new Subject();
  }
  updateChildrenInputSize() {
    if (this.listOfNzInputDirective) {
      this.listOfNzInputDirective.forEach((item) => item.nzSize = this.nzSize);
    }
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      this.focused = !!focusOrigin;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.updateChildrenInputSize();
    const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
    listOfInputChange$.pipe(switchMap((list) => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map((list) => list.some((input) => input.disabled)), takeUntil(this.destroy$)).subscribe((disabled) => {
      this.disabled = disabled;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzSize,
      nzSuffix,
      nzPrefix,
      nzPrefixIcon,
      nzSuffixIcon,
      nzAddOnAfter,
      nzAddOnBefore,
      nzAddOnAfterIcon,
      nzAddOnBeforeIcon,
      nzStatus
    } = changes;
    if (nzSize) {
      this.updateChildrenInputSize();
      this.isLarge = this.nzSize === "large";
      this.isSmall = this.nzSize === "small";
    }
    if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
      this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
      this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
      this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.isFeedback = !!status && hasFeedback;
    const baseAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    this.isAffix = baseAffix || !this.isAddOn && hasFeedback;
    this.affixInGroupStatusCls = this.isAffix || this.isFeedback ? this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback) : {};
    this.cdr.markForCheck();
    this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? "" : status, this.isAddOn ? false : hasFeedback);
    this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : "", this.isAddOn ? hasFeedback : false);
    const statusCls = __spreadValues(__spreadValues({}, this.affixStatusCls), this.groupStatusCls);
    Object.keys(statusCls).forEach((status2) => {
      if (statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) {
  return new (t || _NzInputGroupComponent)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputGroupComponent,
  selectors: [["nz-input-group"]],
  contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzInputDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    }
  },
  hostVars: 40,
  hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    }
  },
  inputs: {
    nzAddOnBeforeIcon: "nzAddOnBeforeIcon",
    nzAddOnAfterIcon: "nzAddOnAfterIcon",
    nzPrefixIcon: "nzPrefixIcon",
    nzSuffixIcon: "nzSuffixIcon",
    nzAddOnBefore: "nzAddOnBefore",
    nzAddOnAfter: "nzAddOnAfter",
    nzPrefix: "nzPrefix",
    nzStatus: "nzStatus",
    nzSuffix: "nzSuffix",
    nzSize: "nzSize",
    nzSearch: [2, "nzSearch", "nzSearch", booleanAttribute],
    nzCompact: [2, "nzCompact", "nzCompact", booleanAttribute]
  },
  exportAs: ["nzInputGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzFormNoStatusService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 1,
  consts: [["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-disabled", "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", "ant-input-affix-wrapper-focused", "ngClass"], [3, "ngTemplateOutlet"], [1, "ant-input-affix-wrapper", 3, "ngClass"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"], [3, "status"], ["nz-input-group-slot", "", "type", "suffix"]],
  template: function NzInputGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputGroupComponent_Conditional_0_Template, 5, 3, "span", 2)(1, NzInputGroupComponent_Conditional_1_Template, 2, 1)(2, NzInputGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzInputGroupComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.isAddOn ? 0 : 1);
    }
  },
  dependencies: [NzInputGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule, NzFormItemFeedbackIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputGroupComponent = _NzInputGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-group",
      exportAs: "nzInputGroup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzFormNoStatusService],
      template: `
    @if (isAddOn) {
      <span class="ant-input-wrapper ant-input-group">
        @if (nzAddOnBefore || nzAddOnBeforeIcon) {
          <span nz-input-group-slot type="addon" [icon]="nzAddOnBeforeIcon" [template]="nzAddOnBefore"></span>
        }

        @if (isAffix || hasFeedback) {
          <span
            class="ant-input-affix-wrapper"
            [class.ant-input-affix-wrapper-disabled]="disabled"
            [class.ant-input-affix-wrapper-sm]="isSmall"
            [class.ant-input-affix-wrapper-lg]="isLarge"
            [class.ant-input-affix-wrapper-focused]="focused"
            [ngClass]="affixInGroupStatusCls"
          >
            <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
          </span>
        } @else {
          <ng-template [ngTemplateOutlet]="contentTemplate" />
        }
        @if (nzAddOnAfter || nzAddOnAfterIcon) {
          <span nz-input-group-slot type="addon" [icon]="nzAddOnAfterIcon" [template]="nzAddOnAfter"></span>
        }
      </span>
    } @else {
      @if (isAffix) {
        <ng-template [ngTemplateOutlet]="affixTemplate" />
      } @else {
        <ng-template [ngTemplateOutlet]="contentTemplate" />
      }
    }

    <!-- affix template -->
    <ng-template #affixTemplate>
      @if (nzPrefix || nzPrefixIcon) {
        <span nz-input-group-slot type="prefix" [icon]="nzPrefixIcon" [template]="nzPrefix"></span>
      }
      <ng-template [ngTemplateOutlet]="contentTemplate" />
      @if (nzSuffix || nzSuffixIcon || isFeedback) {
        <span nz-input-group-slot type="suffix" [icon]="nzSuffixIcon" [template]="nzSuffix">
          @if (isFeedback) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </span>
      }
    </ng-template>

    <!-- content template -->
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      @if (!isAddOn && !isAffix && isFeedback) {
        <span nz-input-group-slot type="suffix">
          <nz-form-item-feedback-icon [status]="status" />
        </span>
      }
    </ng-template>
  `,
      host: {
        "[class.ant-input-group-compact]": `nzCompact`,
        "[class.ant-input-search-enter-button]": `nzSearch`,
        "[class.ant-input-search]": `nzSearch`,
        "[class.ant-input-search-rtl]": `dir === 'rtl'`,
        "[class.ant-input-search-sm]": `nzSearch && isSmall`,
        "[class.ant-input-search-large]": `nzSearch && isLarge`,
        "[class.ant-input-group-wrapper]": `isAddOn`,
        "[class.ant-input-group-wrapper-rtl]": `dir === 'rtl'`,
        "[class.ant-input-group-wrapper-lg]": `isAddOn && isLarge`,
        "[class.ant-input-group-wrapper-sm]": `isAddOn && isSmall`,
        "[class.ant-input-affix-wrapper]": `isAffix && !isAddOn`,
        "[class.ant-input-affix-wrapper-rtl]": `dir === 'rtl'`,
        "[class.ant-input-affix-wrapper-focused]": `isAffix && focused`,
        "[class.ant-input-affix-wrapper-disabled]": `isAffix && disabled`,
        "[class.ant-input-affix-wrapper-lg]": `isAffix && !isAddOn && isLarge`,
        "[class.ant-input-affix-wrapper-sm]": `isAffix && !isAddOn && isSmall`,
        "[class.ant-input-group]": `!isAffix && !isAddOn`,
        "[class.ant-input-group-rtl]": `dir === 'rtl'`,
        "[class.ant-input-group-lg]": `!isAffix && !isAddOn && isLarge`,
        "[class.ant-input-group-sm]": `!isAffix && !isAddOn && isSmall`
      },
      imports: [NzInputGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzInputDirective: [{
      type: ContentChildren,
      args: [NzInputDirective]
    }],
    nzAddOnBeforeIcon: [{
      type: Input
    }],
    nzAddOnAfterIcon: [{
      type: Input
    }],
    nzPrefixIcon: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzAddOnBefore: [{
      type: Input
    }],
    nzAddOnAfter: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCompact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzAutosizeDirective = class _NzAutosizeDirective {
  set nzAutosize(value) {
    const isAutoSizeType = (data) => typeof data !== "string" && typeof data !== "boolean" && (!!data.maxRows || !!data.minRows);
    if (typeof value === "string" || value === true) {
      this.autosize = true;
    } else if (isAutoSizeType(value)) {
      this.autosize = true;
      this.minRows = value.minRows;
      this.maxRows = value.maxRows;
      this.maxHeight = this.setMaxHeight();
      this.minHeight = this.setMinHeight();
    }
  }
  resizeToFitContent(force = false) {
    this.cacheTextareaLineHeight();
    if (!this.cachedLineHeight) {
      return;
    }
    const textarea = this.el;
    const value = textarea.value;
    if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
      return;
    }
    const placeholderText = textarea.placeholder;
    textarea.classList.add("nz-textarea-autosize-measuring");
    textarea.placeholder = "";
    let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
    if (this.maxHeight !== null && height > this.maxHeight) {
      height = this.maxHeight;
    }
    if (this.minHeight !== null && height < this.minHeight) {
      height = this.minHeight;
    }
    textarea.style.height = `${height}px`;
    textarea.classList.remove("nz-textarea-autosize-measuring");
    textarea.placeholder = placeholderText;
    if (typeof requestAnimationFrame !== "undefined") {
      this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
        const {
          selectionStart,
          selectionEnd
        } = textarea;
        if (!this.destroy$.isStopped && document.activeElement === textarea) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
        }
      }));
    }
    this.previousValue = value;
    this.previousMinRows = this.minRows;
  }
  cacheTextareaLineHeight() {
    if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
      return;
    }
    const textareaClone = this.el.cloneNode(false);
    textareaClone.rows = 1;
    textareaClone.style.position = "absolute";
    textareaClone.style.visibility = "hidden";
    textareaClone.style.border = "none";
    textareaClone.style.padding = "0";
    textareaClone.style.height = "";
    textareaClone.style.minHeight = "";
    textareaClone.style.maxHeight = "";
    textareaClone.style.overflow = "hidden";
    this.el.parentNode.appendChild(textareaClone);
    this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
    this.el.parentNode.removeChild(textareaClone);
    this.maxHeight = this.setMaxHeight();
    this.minHeight = this.setMinHeight();
  }
  setMinHeight() {
    const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
    if (minHeight !== null) {
      this.el.style.minHeight = `${minHeight}px`;
    }
    return minHeight;
  }
  setMaxHeight() {
    const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
    if (maxHeight !== null) {
      this.el.style.maxHeight = `${maxHeight}px`;
    }
    return maxHeight;
  }
  noopInputHandler() {
  }
  constructor(elementRef, ngZone, platform, resizeService) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.platform = platform;
    this.resizeService = resizeService;
    this.autosize = false;
    this.el = this.elementRef.nativeElement;
    this.maxHeight = null;
    this.minHeight = null;
    this.destroy$ = new Subject();
    this.inputGap = 10;
  }
  ngAfterViewInit() {
    if (this.autosize && this.platform.isBrowser) {
      this.resizeToFitContent();
      this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.resizeToFitContent(true));
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngDoCheck() {
    if (this.autosize && this.platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
};
_NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) {
  return new (t || _NzAutosizeDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService));
};
_NzAutosizeDirective.ɵdir = ɵɵdefineDirective({
  type: _NzAutosizeDirective,
  selectors: [["textarea", "nzAutosize", ""]],
  hostAttrs: ["rows", "1"],
  hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function NzAutosizeDirective_input_HostBindingHandler() {
        return ctx.noopInputHandler();
      });
    }
  },
  inputs: {
    nzAutosize: "nzAutosize"
  },
  exportAs: ["nzAutosize"],
  standalone: true
});
var NzAutosizeDirective = _NzAutosizeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutosizeDirective, [{
    type: Directive,
    args: [{
      selector: "textarea[nzAutosize]",
      exportAs: "nzAutosize",
      host: {
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        rows: "1",
        "(input)": "noopInputHandler()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzResizeService
  }], {
    nzAutosize: [{
      type: Input
    }]
  });
})();
var _NzTextareaCountComponent = class _NzTextareaCountComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzMaxCharacterCount = 0;
    this.nzComputeCharacterCount = (v) => v.length;
    this.nzFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
    this.configChange$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngAfterContentInit() {
    if (!this.nzInputDirective && isDevMode()) {
      throw new Error("[nz-textarea-count]: Could not find matching textarea[nz-input] child.");
    }
    if (this.nzInputDirective.ngControl) {
      const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
      merge(valueChanges, this.configChange$).pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value)).subscribe((value) => {
        this.setDataCount(value);
      });
    }
  }
  setDataCount(value) {
    const inputValue = isNotNil(value) ? String(value) : "";
    const currentCount = this.nzComputeCharacterCount(inputValue);
    const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
    this.renderer.setAttribute(this.elementRef.nativeElement, "data-count", dataCount);
  }
  ngOnDestroy() {
    this.configChange$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) {
  return new (t || _NzTextareaCountComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NzTextareaCountComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextareaCountComponent,
  selectors: [["nz-textarea-count"]],
  contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzInputDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-input-textarea-show-count"],
  inputs: {
    nzMaxCharacterCount: [2, "nzMaxCharacterCount", "nzMaxCharacterCount", numberAttribute],
    nzComputeCharacterCount: "nzComputeCharacterCount",
    nzFormatter: "nzFormatter"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NzTextareaCountComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTextareaCountComponent = _NzTextareaCountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextareaCountComponent, [{
    type: Component,
    args: [{
      selector: "nz-textarea-count",
      template: ` <ng-content select="textarea[nz-input]"></ng-content> `,
      host: {
        class: "ant-input-textarea-show-count"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzInputDirective: [{
      type: ContentChild,
      args: [NzInputDirective, {
        static: true
      }]
    }],
    nzMaxCharacterCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzComputeCharacterCount: [{
      type: Input
    }],
    nzFormatter: [{
      type: Input
    }]
  });
})();
var _NzInputModule = class _NzInputModule {
};
_NzInputModule.ɵfac = function NzInputModule_Factory(t) {
  return new (t || _NzInputModule)();
};
_NzInputModule.ɵmod = ɵɵdefineNgModule({
  type: _NzInputModule,
  imports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective],
  exports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective]
});
_NzInputModule.ɵinj = ɵɵdefineInjector({
  imports: [NzInputGroupComponent, NzInputGroupSlotComponent]
});
var NzInputModule = _NzInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputModule, [{
    type: NgModule,
    args: [{
      imports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective],
      exports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-typography.mjs
function NzTextCopyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c03 = ["textarea"];
function NzTextEditComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 3, 1);
    ɵɵlistener("blur", function NzTextEditComponent_ng_template_0_Template_textarea_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 4);
    ɵɵlistener("click", function NzTextEditComponent_ng_template_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
    });
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
  }
}
function NzTextEditComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r4);
  }
}
function NzTextEditComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function NzTextEditComponent_ng_template_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵtemplate(1, NzTextEditComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzTooltipTitle", ctx_r1.tooltip === null ? null : ctx_r1.tooltip || (ctx_r1.locale == null ? null : ctx_r1.locale.edit));
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.icon);
  }
}
var _c12 = ["ellipsisContainer"];
var _c22 = ["expandable"];
var _c32 = ["contentTemplate"];
var _c4 = ["*"];
var _c5 = (a0) => ({
  content: a0
});
function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!content"]);
  }
}
function NzTypographyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 4);
    ɵɵtext(1);
  }
  if (rf & 2) {
    const content_r1 = ctx.content;
    ɵɵproperty("ngIf", !content_r1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", content_r1, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8)(2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const contentTemplate_r3 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c5, ctx_r1.nzContent));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.ellipsisStr);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 10, 3);
    ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onExpand());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.locale == null ? null : ctx_r1.locale.expand, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", null, 2);
    ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 4)(3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 4)(4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isEllipsis);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nzSuffix);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nzExpandable && ctx_r1.isEllipsis);
  }
}
function NzTypographyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 7)(2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const jsEllipsis_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.expanded || !ctx_r1.hasOperationsWithEllipsis && ctx_r1.nzEllipsisRows === 1 && !ctx_r1.hasEllipsisObservers || ctx_r1.canCssEllipsis || ctx_r1.nzSuffix && ctx_r1.expanded)("ngIfElse", jsEllipsis_r5);
  }
}
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-edit", 11);
    ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onEndEditing($event));
    })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStartEditing());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r1.nzContent)("icon", ctx_r1.nzEditIcon)("tooltip", ctx_r1.nzEditTooltip);
  }
}
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-copy", 12);
    ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTextCopy($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r1.copyText)("tooltips", ctx_r1.nzCopyTooltips)("icons", ctx_r1.nzCopyIcons);
  }
}
var _NzTextCopyComponent = class _NzTextCopyComponent {
  constructor(host, cdr, clipboard, i18n) {
    this.host = host;
    this.cdr = cdr;
    this.clipboard = clipboard;
    this.i18n = i18n;
    this.copied = false;
    this.nativeElement = this.host.nativeElement;
    this.copyTooltip = null;
    this.copedTooltip = null;
    this.copyIcon = "copy";
    this.copedIcon = "check";
    this.destroy$ = new Subject();
    this.icons = ["copy", "check"];
    this.textCopy = new EventEmitter();
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.updateTooltips();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      tooltips,
      icons
    } = changes;
    if (tooltips) {
      this.updateTooltips();
    }
    if (icons) {
      this.updateIcons();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.copyId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  onClick() {
    if (this.copied) {
      return;
    }
    this.copied = true;
    this.cdr.detectChanges();
    const text = this.text;
    this.textCopy.emit(text);
    this.clipboard.copy(text);
    this.onCopied();
  }
  onCopied() {
    clearTimeout(this.copyId);
    this.copyId = setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 3e3);
  }
  updateTooltips() {
    if (this.tooltips === null) {
      this.copedTooltip = null;
      this.copyTooltip = null;
    } else if (Array.isArray(this.tooltips)) {
      const [copyTooltip, copedTooltip] = this.tooltips;
      this.copyTooltip = copyTooltip || this.locale?.copy;
      this.copedTooltip = copedTooltip || this.locale?.copied;
    } else {
      this.copyTooltip = this.locale?.copy;
      this.copedTooltip = this.locale?.copied;
    }
    this.cdr.markForCheck();
  }
  updateIcons() {
    const [copyIcon, copedIcon] = this.icons;
    this.copyIcon = copyIcon;
    this.copedIcon = copedIcon;
    this.cdr.markForCheck();
  }
};
_NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) {
  return new (t || _NzTextCopyComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Clipboard), ɵɵdirectiveInject(NzI18nService));
};
_NzTextCopyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextCopyComponent,
  selectors: [["nz-text-copy"]],
  inputs: {
    text: "text",
    tooltips: "tooltips",
    icons: "icons"
  },
  outputs: {
    textCopy: "textCopy"
  },
  exportAs: ["nzTextCopy"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextCopyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      ɵɵtemplate(1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-typography-copy-success", ctx.copied);
      ɵɵproperty("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
    }
  },
  dependencies: [NzToolTipModule, NzTooltipDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextCopyComponent = _NzTextCopyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextCopyComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-copy",
      exportAs: "nzTextCopy",
      template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <span nz-icon [nzType]="icon"></span>
      </ng-container>
    </button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      imports: [NzToolTipModule, NzTransButtonModule, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Clipboard
  }, {
    type: NzI18nService
  }], {
    text: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    textCopy: [{
      type: Output
    }]
  });
})();
var _NzTextEditComponent = class _NzTextEditComponent {
  set textarea(textarea) {
    this.textarea$.next(textarea);
  }
  constructor(ngZone, host, cdr, i18n, destroy$) {
    this.ngZone = ngZone;
    this.host = host;
    this.cdr = cdr;
    this.i18n = i18n;
    this.destroy$ = destroy$;
    this.editing = false;
    this.icon = "edit";
    this.startEditing = new EventEmitter();
    this.endEditing = new EventEmitter(true);
    this.nativeElement = this.host.nativeElement;
    this.textarea$ = new BehaviorSubject(null);
    this.injector = inject(Injector);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.textarea$.pipe(switchMap((textarea) => (
      // Caretaker note: we explicitly should call `subscribe()` within the root zone.
      // `runOutsideAngular(() => fromEvent(...))` will just create an observable within the root zone,
      // but `addEventListener` is called when the `fromEvent` is subscribed.
      textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "keydown").subscribe(subscriber))) : EMPTY
    )), takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode !== ESCAPE && event.keyCode !== ENTER) {
        return;
      }
      this.ngZone.run(() => {
        if (event.keyCode === ESCAPE) {
          this.onCancel();
        } else {
          this.onEnter(event);
        }
        this.cdr.markForCheck();
      });
    });
    this.textarea$.pipe(switchMap((textarea) => textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "input").subscribe(subscriber))) : EMPTY), takeUntil(this.destroy$)).subscribe((event) => {
      this.currentText = event.target.value;
    });
  }
  onClick() {
    this.beforeText = this.text;
    this.currentText = this.beforeText;
    this.editing = true;
    this.startEditing.emit();
    this.focusAndSetValue();
  }
  confirm() {
    this.editing = false;
    this.endEditing.emit(this.currentText);
  }
  onEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.confirm();
  }
  onCancel() {
    this.currentText = this.beforeText;
    this.confirm();
  }
  focusAndSetValue() {
    const {
      injector
    } = this;
    afterNextRender(() => {
      this.textarea$.pipe(
        // It may still not be available, so we need to wait until view queries
        // are executed during the change detection. It's safer to wait until
        // the query runs and the textarea is set on the behavior subject.
        first((textarea) => textarea != null),
        takeUntil(this.destroy$)
      ).subscribe((textarea) => {
        textarea.nativeElement.focus();
        textarea.nativeElement.value = this.currentText || "";
        this.autosizeDirective.resizeToFitContent();
        this.cdr.markForCheck();
      });
    }, {
      injector
    });
  }
};
_NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) {
  return new (t || _NzTextEditComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzDestroyService));
};
_NzTextEditComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextEditComponent,
  selectors: [["nz-text-edit"]],
  viewQuery: function NzTextEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c03, 5);
      ɵɵviewQuery(NzAutosizeDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textarea = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    tooltip: "tooltip"
  },
  outputs: {
    startEditing: "startEditing",
    endEditing: "endEditing"
  },
  exportAs: ["nzTextEdit"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["notEditing", ""], ["textarea", ""], [3, "ngIf", "ngIfElse"], ["nz-input", "", "nzAutosize", "", 3, "blur"], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTextEditComponent_ng_template_0_Template, 4, 0, "ng-template", 2)(1, NzTextEditComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const notEditing_r5 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.editing)("ngIfElse", notEditing_r5);
    }
  },
  dependencies: [NgIf, NzInputModule, NzInputDirective, NzAutosizeDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzToolTipModule, NzTooltipDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextEditComponent = _NzTextEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextEditComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-edit",
      exportAs: "nzTextEdit",
      template: `
    <ng-template [ngIf]="editing" [ngIfElse]="notEditing">
      <textarea #textarea nz-input nzAutosize (blur)="confirm()"></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <span nz-icon nzType="enter"></span>
      </button>
    </ng-template>

    <ng-template #notEditing>
      <button
        nz-tooltip
        nz-trans-button
        class="ant-typography-edit"
        [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
        (click)="onClick()"
      >
        <ng-container *nzStringTemplateOutlet="icon; let icon">
          <span nz-icon [nzType]="icon"></span>
        </ng-container>
      </button>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService],
      imports: [NgIf, NzInputModule, NzTransButtonModule, NzIconModule, NzToolTipModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }], {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    startEditing: [{
      type: Output
    }],
    endEditing: [{
      type: Output
    }],
    textarea: [{
      type: ViewChild,
      args: ["textarea", {
        static: false
      }]
    }],
    autosizeDirective: [{
      type: ViewChild,
      args: [NzAutosizeDirective, {
        static: false
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "typography";
var EXPAND_ELEMENT_CLASSNAME = "ant-typography-expand";
var _NzTypographyComponent = class _NzTypographyComponent {
  get hasEllipsisObservers() {
    return this.nzOnEllipsis.observers.length > 0;
  }
  get canCssEllipsis() {
    return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
  }
  get hasOperationsWithEllipsis() {
    return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
  }
  get copyText() {
    return typeof this.nzCopyText === "string" ? this.nzCopyText : this.nzContent;
  }
  constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document2, resizeService, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.cdr = cdr;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.platform = platform;
    this.i18n = i18n;
    this.resizeService = resizeService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzCopyable = false;
    this.nzEditable = false;
    this.nzDisabled = false;
    this.nzExpandable = false;
    this.nzEllipsis = false;
    this.nzCopyTooltips = void 0;
    this.nzCopyIcons = ["copy", "check"];
    this.nzEditTooltip = void 0;
    this.nzEditIcon = "edit";
    this.nzEllipsisRows = 1;
    this.nzContentChange = new EventEmitter();
    this.nzCopy = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnEllipsis = new EventEmitter();
    this.expandableBtnElementCache = null;
    this.editing = false;
    this.cssEllipsis = false;
    this.isEllipsis = true;
    this.expanded = false;
    this.ellipsisStr = "...";
    this.dir = "ltr";
    this.viewInit = false;
    this.rfaId = -1;
    this.destroy$ = new Subject();
    this.windowResizeSubscription = Subscription.EMPTY;
    this.document = document2;
  }
  onTextCopy(text) {
    this.nzCopy.emit(text);
  }
  onStartEditing() {
    this.editing = true;
  }
  onEndEditing(text) {
    this.editing = false;
    this.nzContentChange.emit(text);
    if (this.nzContent === text) {
      this.renderOnNextFrame();
    }
    this.cdr.markForCheck();
  }
  onExpand() {
    this.isEllipsis = false;
    this.expanded = true;
    this.nzExpandChange.emit();
    this.nzOnEllipsis.emit(false);
  }
  canUseCSSEllipsis() {
    if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
      return false;
    }
    if (this.hasEllipsisObservers) {
      return false;
    }
    if (this.nzEllipsisRows === 1) {
      return isStyleSupport("textOverflow");
    } else {
      return isStyleSupport("webkitLineClamp");
    }
  }
  renderOnNextFrame() {
    cancelRequestAnimationFrame(this.rfaId);
    if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
      return;
    }
    this.rfaId = reqAnimFrame(() => {
      this.syncEllipsis();
    });
  }
  getOriginContentViewRef() {
    const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
      content: this.nzContent
    });
    viewRef.detectChanges();
    return {
      viewRef,
      removeView: () => {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
      }
    };
  }
  syncEllipsis() {
    if (this.cssEllipsis) {
      return;
    }
    const {
      viewRef,
      removeView
    } = this.getOriginContentViewRef();
    const fixedNodes = [this.textCopyRef, this.textEditRef].filter((e) => e && e.nativeElement).map((e) => e.nativeElement);
    const expandableBtnElement = this.getExpandableBtnElement();
    if (expandableBtnElement) {
      fixedNodes.push(expandableBtnElement);
    }
    const {
      contentNodes,
      text,
      ellipsis
    } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
    removeView();
    this.ellipsisText = text;
    if (ellipsis !== this.isEllipsis) {
      this.isEllipsis = ellipsis;
      this.nzOnEllipsis.emit(ellipsis);
    }
    const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
    while (ellipsisContainerNativeElement.firstChild) {
      this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
    }
    contentNodes.forEach((n) => {
      this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
    });
    this.cdr.markForCheck();
  }
  // Need to create the element for calculation size before view init
  getExpandableBtnElement() {
    if (this.nzExpandable) {
      const expandText = this.locale ? this.locale.expand : "";
      const cache = this.expandableBtnElementCache;
      if (!cache || cache.innerText === expandText) {
        const el = this.document.createElement("a");
        el.className = EXPAND_ELEMENT_CLASSNAME;
        el.innerText = expandText;
        this.expandableBtnElementCache = el;
      }
      return this.expandableBtnElementCache;
    } else {
      this.expandableBtnElementCache = null;
      return null;
    }
  }
  renderAndSubscribeWindowResize() {
    if (this.platform.isBrowser) {
      this.windowResizeSubscription.unsubscribe();
      this.cssEllipsis = this.canUseCSSEllipsis();
      this.renderOnNextFrame();
      this.windowResizeSubscription = this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.renderOnNextFrame());
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.viewInit = true;
    this.renderAndSubscribeWindowResize();
  }
  ngOnChanges(changes) {
    const {
      nzCopyable,
      nzEditable,
      nzExpandable,
      nzEllipsis,
      nzContent,
      nzEllipsisRows,
      nzSuffix
    } = changes;
    if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
      if (this.nzEllipsis) {
        if (this.expanded) {
          this.windowResizeSubscription.unsubscribe();
        } else {
          this.renderAndSubscribeWindowResize();
        }
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.expandableBtnElementCache = null;
    this.windowResizeSubscription.unsubscribe();
  }
};
_NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) {
  return new (t || _NzTypographyComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzResizeService), ɵɵdirectiveInject(Directionality, 8));
};
_NzTypographyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTypographyComponent,
  selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]],
  viewQuery: function NzTypographyComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTextEditComponent, 5);
      ɵɵviewQuery(NzTextCopyComponent, 5);
      ɵɵviewQuery(_c12, 5);
      ɵɵviewQuery(_c22, 5);
      ɵɵviewQuery(_c32, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    }
  },
  hostVars: 26,
  hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
      ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-single-line", ctx.nzEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    }
  },
  inputs: {
    nzCopyable: [2, "nzCopyable", "nzCopyable", booleanAttribute],
    nzEditable: [2, "nzEditable", "nzEditable", booleanAttribute],
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzExpandable: [2, "nzExpandable", "nzExpandable", booleanAttribute],
    nzEllipsis: [2, "nzEllipsis", "nzEllipsis", booleanAttribute],
    nzCopyTooltips: "nzCopyTooltips",
    nzCopyIcons: "nzCopyIcons",
    nzEditTooltip: "nzEditTooltip",
    nzEditIcon: "nzEditIcon",
    nzContent: "nzContent",
    nzEllipsisRows: [2, "nzEllipsisRows", "nzEllipsisRows", numberAttribute],
    nzType: "nzType",
    nzCopyText: "nzCopyText",
    nzSuffix: "nzSuffix"
  },
  outputs: {
    nzContentChange: "nzContentChange",
    nzCopy: "nzCopy",
    nzExpandChange: "nzExpandChange",
    nzOnEllipsis: "nzOnEllipsis"
  },
  exportAs: ["nzTypography"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 3,
  consts: [["contentTemplate", ""], ["jsEllipsis", ""], ["ellipsisContainer", ""], ["expandable", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], [3, "endEditing", "startEditing", "text", "icon", "tooltip"], [3, "textCopy", "text", "tooltips", "icons"]],
  template: function NzTypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 4)(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 5)(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 6);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.editing);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzEditable);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTypographyComponent = _NzTypographyComponent;
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyComponent, [{
    type: Component,
    args: [{
      selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
      exportAs: "nzTypography",
      template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template
          [ngTemplateOutlet]="contentTemplate"
          [ngTemplateOutletContext]="{ content: nzContent }"
        ></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">
          {{ locale?.expand }}
        </a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      host: {
        "[class.ant-typography]": "!editing",
        "[class.ant-typography-rtl]": 'dir === "rtl"',
        "[class.ant-typography-edit-content]": "editing",
        "[class.ant-typography-secondary]": 'nzType === "secondary"',
        "[class.ant-typography-warning]": 'nzType === "warning"',
        "[class.ant-typography-danger]": 'nzType === "danger"',
        "[class.ant-typography-success]": 'nzType === "success"',
        "[class.ant-typography-disabled]": "nzDisabled",
        "[class.ant-typography-ellipsis]": "nzEllipsis && !expanded",
        "[class.ant-typography-single-line]": "nzEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-single-line]": "canCssEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-multiple-line]": "canCssEllipsis && nzEllipsisRows > 1",
        "[style.-webkit-line-clamp]": "(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null"
      },
      imports: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: NzI18nService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzResizeService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzCopyable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzEditable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzEllipsis: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCopyTooltips: [{
      type: Input
    }],
    nzCopyIcons: [{
      type: Input
    }],
    nzEditTooltip: [{
      type: Input
    }],
    nzEditIcon: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzEllipsisRows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzCopyText: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzContentChange: [{
      type: Output
    }],
    nzCopy: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnEllipsis: [{
      type: Output
    }],
    textEditRef: [{
      type: ViewChild,
      args: [NzTextEditComponent, {
        static: false
      }]
    }],
    textCopyRef: [{
      type: ViewChild,
      args: [NzTextCopyComponent, {
        static: false
      }]
    }],
    ellipsisContainer: [{
      type: ViewChild,
      args: ["ellipsisContainer", {
        static: false
      }]
    }],
    expandableBtn: [{
      type: ViewChild,
      args: ["expandable", {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: false
      }]
    }]
  });
})();
var _NzTypographyModule = class _NzTypographyModule {
};
_NzTypographyModule.ɵfac = function NzTypographyModule_Factory(t) {
  return new (t || _NzTypographyModule)();
};
_NzTypographyModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTypographyModule,
  imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
  exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
});
_NzTypographyModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
});
var NzTypographyModule = _NzTypographyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyModule, [{
    type: NgModule,
    args: [{
      imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
      exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
    }]
  }], null, null);
})();
export {
  NzTextCopyComponent,
  NzTextEditComponent,
  NzTypographyComponent,
  NzTypographyModule
};
//# sourceMappingURL=ng-zorro-antd_typography.js.map
