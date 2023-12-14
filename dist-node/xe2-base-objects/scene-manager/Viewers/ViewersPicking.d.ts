import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PickedInfo, SceneObjectPickedInfo } from "../SceneObjects";
import { SceneObjectsListening } from "./SceneObjectsListening";
import { SceneObjectsManager } from "./SceneObjectsManager";
import { Viewer } from "./Viewer";
declare class ViewerClickEvent extends Event<[PointerEvent]> {
    private _viewer;
    constructor(_viewer: Viewer);
}
export declare type CreateViewerPointerEventFuncType = (viewer: Viewer) => Event<[PointerEvent]>;
export declare type ViewersPickingEventType = 'click' | 'dbclick' | 'pointerUp' | 'pointerDown' | 'pointerMove' | 'pointerHover';
export declare type ViewersPickingFilterType = 'onlyLeft' | 'onlyRight' | 'onlyMiddle' | 'onlyLeftWithCtrl' | 'onlyRightWithCtrl' | 'onlyMiddleWithCtrl';
export declare type ViewersPickingPointerEventFuncType = [
    getEvent: ((viewer: Viewer) => Event<[PointerEvent]>) | ViewersPickingEventType | undefined,
    filter?: ((pointerEvent: PointerEvent) => boolean) | ViewersPickingFilterType | undefined
];
/**
 * 监测视口的拾取操作，监测鼠标交互操作，触发拾取对象的事件
 */
export declare class ViewersPicking extends Destroyable {
    private _sceneObjectsManager;
    private _createViewerPointerEvent;
    debug: boolean;
    enabled: boolean;
    get sceneObjectsManager(): SceneObjectsManager;
    private _sceneObjectPickedEvent;
    get sceneObjectPickedEvent(): Event<[SceneObjectPickedInfo | undefined, PickedInfo | undefined, Viewer]>;
    private _viewerListening;
    get viewerListening(): SceneObjectsListening;
    static defaultCreateViewerClickEvent: (viewer: Viewer) => ViewerClickEvent;
    constructor(_sceneObjectsManager: SceneObjectsManager, _createViewerPointerEvent?: CreateViewerPointerEventFuncType);
    static getEvents: {
        click: (v: Viewer) => Event<[pointerEvent: PointerEvent]>;
        dbclick: (v: Viewer) => Event<[pointerEvent: PointerEvent]>;
        pointerUp: (v: Viewer) => Event<[PointerEvent]>;
        pointerDown: (v: Viewer) => Event<[PointerEvent]>;
        pointerMove: (v: Viewer) => Event<[PointerEvent]>;
        pointerHover: (v: Viewer) => Event<[pointerEvent: PointerEvent]>;
    };
    static filters: {
        onlyLeft: (e: PointerEvent) => boolean;
        onlyRight: (e: PointerEvent) => boolean;
        onlyMiddle: (e: PointerEvent) => boolean;
        onlyLeftWithCtrl: (e: PointerEvent) => boolean;
        onlyRightWithCtrl: (e: PointerEvent) => boolean;
        onlyMiddleWithCtrl: (e: PointerEvent) => boolean;
    };
    /**
     * create
     * @param sceneObjectsManager
     * @param pointerEventFuncs 是一个获取事件和过滤的数组，形如[[getEvent, filter]]
     * @returns
     * @example
     * // 按住ctrl键点击拾取
     * var p = g_appProjectManager.xe2ProjectManager
     * var s = p.sceneObjectsManager
     * // var ViewersPicking = XE2['xe2-base-objects'].ViewersPicking // 控制台测试时需要
     * var vp = ViewersPicking.create(s, [[v => v.interaction.pointerClick.clickEvent, e => !!e.ctrlKey]]); // 点击事件 + ctrl键按下时反馈
     * var d = vp.sceneObjectPickedEvent.disposableOn(e => console.log(e)) // 打印拾取的场景对象
     * // vp.destroy(); // 不用时销毁
     *
     * var vp2 = ViewersPicking.create(s, [[v => v.interaction.pointerUpEvent, e => true]]); // 鼠标抬起时触发
     * var d2 = vp2.sceneObjectPickedEvent.disposableOn(e => console.log('vp2', e));
     * // vp2.destroy(); // 不用时销毁
     *
     * // 另外ViewerPicking还提供了以下静态属性，方便使用
     * // static getEvents = {
     * //     click: (v: Viewer) => v.interaction.pointerClick.clickEvent,
     * //     dbclick: (v: Viewer) => v.interaction.pointerClick.dbclickEvent,
     * //     pointerup: (v: Viewer) => v.interaction.pointerUpEvent,
     * //     pointerdown: (v: Viewer) => v.interaction.pointerDownEvent,
     * //     pointerMove: (v: Viewer) => v.interaction.pointerMoveEvent,
     * //     pointerHover: (v: Viewer) => v.interaction.pointerHover.hoverEvent,
     * // };
     * //
     * // static filters = {
     * //     onlyLeft: (e: PointerEvent) => e.buttons === 1 && e.button === 0,
     * //     onlyRight: (e: PointerEvent) => e.buttons === 1 && e.button === 2,
     * //     onlyMiddle: (e: PointerEvent) => e.buttons === 1 && e.button === 1,
     * //     onlyLeftWithCtrl: (e: PointerEvent) => e.buttons === 1 && e.button === 0 && e.ctrlKey,
     * //     onlyRightWithCtrl: (e: PointerEvent) => e.buttons === 1 && e.button === 2 && e.ctrlKey,
     * //     onlyMiddleWithCtrl: (e: PointerEvent) => e.buttons === 1 && e.button === 1 && e.ctrlKey,
     * // }
     *
     * var vp3 = ViewersPicking.create(s, [[ViewersPicking.getEvents.click, ViewersPicking.filters.onlyLeft]]);
     * var d3 = vp3.sceneObjectPickedEvent.disposableOn(e => console.log('vp3', e));
     *
     */
    static create(sceneObjectsManager: SceneObjectsManager, pointerEventFuncs: ViewersPickingPointerEventFuncType[]): ViewersPicking;
}
export {};
