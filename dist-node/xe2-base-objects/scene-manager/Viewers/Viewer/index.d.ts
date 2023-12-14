import { Destroyable, Event, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ObjResettingWithEvent, SceneObject, SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject, PickedInfo } from "../../SceneObjects";
import { ViewerInteraction } from "../ViewerInteraction";
import { ViewerInteractionWithContainerResetting } from "../ViewerInteractionWithContainerResetting";
import { ContainerStyleController } from "./ContainerStyleController";
declare class ViewerContainer extends Destroyable {
    private _container;
    private _viewer;
    private _subContainer;
    get subContainer(): HTMLDivElement;
    private _overlayContainer;
    get overlayContainer(): HTMLDivElement;
    private _containerStyleController;
    get containerStyleController(): ContainerStyleController;
    get container(): HTMLDivElement;
    constructor(_container: HTMLDivElement, _viewer: Viewer);
}
/**
 * 视口状态，'Raw'表示初始状态，'Creating'表示正在创建, 'Created'表示创建完成, 'Error'表示创建失败
 */
export declare type ViewerStatus = 'Raw' | 'Creating' | 'Created' | 'Error';
export declare abstract class Viewer extends ESSceneObject {
    protected _container: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<HTMLDivElement | undefined>;
    get container(): HTMLDivElement | undefined;
    set container(value: HTMLDivElement | undefined);
    get containerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[HTMLDivElement | undefined, HTMLDivElement | undefined]>;
    set containerOrId(value: HTMLDivElement | string | undefined);
    private _defaultContainerByManagerReact;
    setDefaultContainerByManager(value: HTMLDivElement | undefined): void;
    private _forceRecreateEvent;
    forceRecreate(): void;
    private _activeRequesting;
    get activeRequesting(): Event<[excluesive: boolean]>;
    private _containerSize;
    get containerSize(): [number, number] | undefined;
    set containerSize(value: [number, number] | undefined);
    get containerSizeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number] | undefined, [number, number] | undefined]>;
    private _finalContainerReact;
    private _containerResettingEvent;
    private _containerResetting;
    get subContainer(): HTMLDivElement | undefined;
    get subContainerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerContainer | undefined, ViewerContainer | undefined]>;
    get overlayerContainer(): HTMLDivElement | undefined;
    get overlayerContainerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerContainer | undefined, ViewerContainer | undefined]>;
    private _interactionUseBubble;
    get interactionUseBubble(): ViewerInteraction;
    protected _interactionUseBubbleResetting: ObjResettingWithEvent<ViewerInteractionWithContainerResetting, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerContainer | undefined, ViewerContainer | undefined]>>;
    get interaction(): ViewerInteraction;
    private _interactionUseCapture;
    get interactionUseCapture(): ViewerInteraction;
    protected _interactionUseCaptureResetting: ObjResettingWithEvent<ViewerInteractionWithContainerResetting, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerContainer | undefined, ViewerContainer | undefined]>>;
    private _nativePickedEvent;
    get nativePickedEvent(): Event<[pickedResult: PickedInfo | undefined]>;
    private _status;
    get status(): ViewerStatus;
    get statusChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerStatus, ViewerStatus]>;
    setStaus(value: ViewerStatus): void;
    private _creatingLog;
    get creatingLog(): string;
    get creatingLogChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string, string]>;
    setCreatingLog(value: string): void;
    constructor(id?: SceneObjectKey);
    abstract get sceneObjects(): IterableIterator<SceneObject>;
    add<T extends SceneObject>(...sceneObjects: T[]): void;
    delete<T extends SceneObject>(...sceneObjects: T[]): void;
    abstract has<T extends SceneObject>(sceneObject: T): boolean;
    abstract get type(): string;
    clearAllSceneObjects(): void;
    /**
     * 单纯的拾取操作，返回值有可能是一个Promise
     * @param windowPos
     * @param attachedInfo
     */
    abstract pick(windowPos: [number, number], attachedInfo?: any): Promise<PickedInfo | undefined> | (PickedInfo | undefined);
    /**
     * 拾取并对外触发事件(nativePickedEvent)
     * @param windowPos
     * @param attachedInfo
     * @returns
     */
    pickAndEmit(windowPos: [number, number], attachedInfo?: any): PickedInfo | Promise<PickedInfo | undefined> | undefined;
    pickAndEmitWithViewerPickingTag(windowPos: [number, number], mouseEvent?: MouseEvent): void;
    getProperties(language?: string): import("../../props").Property[];
    setViewport(type: 'full' | 'left' | 'right' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom' | 'leftTopEagle' | 'rightTopEagle' | 'leftBottomEagle' | 'rightBottomEagle'): void;
}
export declare namespace Viewer {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        opacity: number | undefined;
        actived: boolean;
        activeStyleEnabled: boolean | undefined;
        zIndex: string | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        sizeRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[widthRatio: number, heightRatio: number, widthOffset: number, heightOffset: number] | undefined>;
        useDefaultContainerWhenNoContainer: boolean | undefined;
        useDefaultStatusDiv: boolean | undefined;
    };
}
export interface Viewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof Viewer.createDefaultProps>> {
}
export {};
