import { OnDestroy, AfterViewInit, Renderer2, ElementRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NailInterface } from '../../nail';
import { UiRouter } from '../../router';
import { BottomInInterface, InjectionParentBase, RunContextBrowser } from '@mubble/browser';
import { Mubble } from '@mubble/core';
export declare const STATE: {
    HALF: string;
    FULL: string;
};
export declare class BottomInComponent extends InjectionParentBase implements AfterViewInit, NailInterface, OnDestroy {
    private renderer;
    private ref;
    __routeAnimation: null;
    animElem: boolean;
    onHostClick(): void;
    onRouteAnimationStart(event: any): void;
    onRouteAnimationDone(event: any): void;
    main: ElementRef;
    header: ElementRef;
    compContainer: ElementRef;
    injectAt: any;
    injectedComponent: BottomInInterface;
    private top;
    title: string;
    state: string;
    allowFullPage: boolean;
    private panY;
    private animValue;
    private panYMin;
    private panYMax;
    private nail;
    private routeName;
    private startTop;
    private backPressed;
    private routeEndProcessed;
    constructor(rc: RunContextBrowser, router: UiRouter, route: ActivatedRoute, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2, ref: ChangeDetectorRef);
    onRouterInit(params: Mubble.uObject<any>): void;
    ngAfterViewInit(): void;
    onPanStart(): void;
    onPanMove(event: any): boolean;
    onPanAnimate(y: number): void;
    onPanEnd(event: any): void;
    onClick(event: any): void;
    ngOnDestroy(): void;
    onHalf(runAnimation: boolean): void;
    onFull(runAnimation: boolean): void;
    animateChange(y: number, runAnimation: boolean): void;
    animateClose(): void;
    onBackPressed(): void;
}