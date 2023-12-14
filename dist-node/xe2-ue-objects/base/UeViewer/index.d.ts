import { SceneObject, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { UeCloudViewerBase } from "./UeCloudViewerBase";
import { ESFlyToParam, NavigationModeCallFuncParam } from "./UeFuncsType";
import { UePickedInfo } from "./ViewerCreating";
export { UePickedInfo } from './ViewerCreating';
export { ESUEViewerWrapper } from './inner/ESUEViewerWrapper';
declare type NavigationModeType = 'Map' | 'Walk' | 'Line' | 'UserDefined';
export declare class UeViewer extends Viewer {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        uri: string | undefined;
        debug: boolean | undefined;
        useCache: boolean | undefined;
        clickListening: boolean | undefined;
        dbclickListening: boolean | undefined;
        propChangedListening: boolean | undefined;
        widgetEventListening: boolean | undefined;
        hoverEventListening: boolean | undefined;
        mouseMoveEventListening: boolean | undefined;
        hoverOutEventListening: boolean | undefined;
        speechRecognitionListening: boolean | undefined;
        customMessageListening: boolean | undefined;
        geoReferenceOrigin: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        keepWorldOriginNearCamera: boolean | undefined;
        currentTime: number | undefined;
        hoverTime: number | undefined;
        editingPointSize: number | undefined;
        editingPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAuxiliaryPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingLineWidth: number | undefined;
        editingLineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAxisSize: number | undefined;
        videoSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        signallingServerId: string | undefined;
        globeShow: boolean | undefined;
        editingAuxiliaryPointSize: number | undefined;
        navigationMode: NavigationModeType;
        widgetInteractionDistance: number | undefined;
        cloud: number | undefined;
        night: boolean | undefined;
        rain: number | undefined;
        snow: number | undefined;
        sunIntensity: number | undefined;
        sunSkyControlled: boolean | undefined;
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
    get json(): JsonType;
    set json(value: JsonType);
    private _sceneObjectsMap;
    get sceneObjects(): IterableIterator<SceneObject>;
    private _viewer;
    set viewer(value: UeCloudViewerBase | undefined);
    get viewer(): UeCloudViewerBase | undefined;
    get viewerChanged(): Listener<[UeCloudViewerBase | undefined, UeCloudViewerBase | undefined]>;
    private _click;
    get click(): Event<[{
        et: "click";
        eid: string;
        objId?: string | undefined;
        cartesianIn3D?: [number, number, number] | undefined;
        screenPosition?: [number, number] | undefined;
    }]>;
    private _dbclick;
    get dbclick(): Event<[{
        et: "dbclick";
        eid: string;
        objId?: string | undefined;
        cartesianIn3D?: [number, number, number] | undefined;
        screenPosition?: [number, number] | undefined;
    }]>;
    private _speechRecognition;
    get speechRecognition(): Event<[{
        et: "speechRecognition";
        eid: string;
        result: string;
        error: string;
    }]>;
    private _hoverEvent;
    get hoverEvent(): Event<[{
        et: "hoverEvent";
        eid: string;
        screenPosition: [number, number];
    }]>;
    private _hoverOutEvent;
    get hoverOutEvent(): Event<[{
        et: "hoverOutEvent";
        eid: string;
    }]>;
    private _mouseMoveEvent;
    get mouseMoveEvent(): Event<[{
        et: "mouseMoveEvent";
        eid: string;
        screenPosition: [number, number];
    }]>;
    private _propChanged;
    get propChanged(): Event<[{
        et: "propChanged";
        eid: string;
        objId: string;
        props: {
            [k: string]: any;
        };
    }]>;
    private _widgetEvent;
    get widgetEvent(): Event<[{
        et: "widgetEvent";
        eid: string;
        objId: string;
        type: "leftClick" | "rightClick" | "mouseEnter" | "mouseLeave" | "childMouseLeave" | "childMouseEnter";
        add?: {
            children?: string[] | undefined;
            mousePos?: [number, number] | undefined;
        } | undefined;
    }]>;
    private _customMessage;
    get customMessage(): Event<[{
        et: "customMessage";
        eid: string;
        message: string;
    }]>;
    get uePickedEvent(): Event<[pickedResult: UePickedInfo | undefined]>;
    static globalProperty: string[];
    constructor(id?: SceneObjectKey, devTags?: string[]);
    get type(): string;
    private _add;
    private _delete;
    add<T extends SceneObject>(...sceneObjects: T[]): void;
    delete<T extends SceneObject>(...sceneObjects: T[]): void;
    has<T extends SceneObject>(sceneObject: T): boolean;
    getCurrentCameraInfo(): Promise<{
        position: [number, number, number];
        rotation: [number, number, number];
    } | undefined>;
    getFPS(): Promise<{
        FPS: number;
    } | undefined>;
    lonLatAltToScreenPosition(position: [number, number, number]): Promise<{
        X: number;
        Y: number;
    } | undefined>;
    changeNavigationMode(parms: NavigationModeCallFuncParam): Promise<{
        error: string | undefined;
    } | undefined>;
    resetWithCurrentCamera(id: string): Promise<{
        error: string | undefined;
    } | undefined>;
    uePositionToLonLatAlt(UEPosition: [number, number, number]): Promise<[number, number, number] | undefined>;
    getAllSocketNamesByActorTag(ActorTag: string): Promise<string[] | undefined>;
    capture(x?: number, y?: number): Promise<string | undefined>;
    getVersion(): Promise<{
        version: string;
    } | undefined>;
    getBoundSphere(id: string): Promise<{
        center?: [number, number, number] | undefined;
        radius?: number | undefined;
        tips?: string | undefined;
    } | undefined>;
    getBoundSphereWithChildren(id: string): Promise<{
        center?: [number, number, number] | undefined;
        radius?: number | undefined;
        tips?: string | undefined;
    } | undefined>;
    getStrokeMaterialParamInfo(id: string): Promise<{
        params?: {
            name: string;
            type: string;
            value: number | [number, number, number, number];
        }[] | undefined;
    } | undefined>;
    getFillMaterialParamInfo(id: string): Promise<{
        params?: {
            name: string;
            type: string;
            value: number | [number, number, number, number];
        }[] | undefined;
    } | undefined>;
    getGlobalProperty(props: string[]): Promise<{
        [k: string]: any;
    } | undefined>;
    getObjectByInfo(info: {
        actorTag: string;
        componentTag?: string;
    }): Promise<{
        object?: {
            [k: string]: any;
            type: string;
        } | undefined;
    } | undefined>;
    getHeightByLonLat(Lon: number, Lat: number, Channel: string): Promise<{
        height?: number | undefined;
    } | undefined>;
    getHeightsByLonLats(LonLats: [number, number][], Channels?: string): Promise<(number | null)[] | undefined>;
    flyIn(position: [number, number, number], rotation?: [number, number, number], duration?: number): Promise<{
        endType: 0 | 1;
    } | undefined>;
    flyTo(flyToParam: ESFlyToParam, position: [number, number, number]): Promise<{
        endType: 0 | 1;
    } | undefined>;
    defaultCameraFlyIn(duration?: number): Promise<{
        error: string | undefined;
    } | undefined>;
    setGlobalProperty(params: {
        [k: string]: any;
    }): Promise<{
        error: string | undefined;
    } | undefined>;
    quit(): Promise<{
        error: string | undefined;
    } | undefined>;
    pick(screenPosition?: [number, number], attachedInfo?: any, parentInfo?: boolean): Promise<UePickedInfo | undefined>;
    bindActorByTag(ID: string, ActorTag: string): Promise<{
        re: {
            type: number;
        };
        error: string | undefined;
    } | undefined>;
    restoreOriginalScene(): Promise<{
        error: string | undefined;
    } | undefined>;
    unBindActorByID(ID: string): Promise<{
        error: string | undefined;
    } | undefined>;
    unBindActorByTag(ActorTag: string): Promise<{
        error: string | undefined;
    } | undefined>;
    createActorByClass(ID: string, ActorClass: string): Promise<{
        re: {
            type: number;
        };
        error: string | undefined;
    } | undefined>;
    bind3DTilesetByTag(ID: string, ActorTag: string): Promise<{
        re: {
            type: number;
        };
        error: string | undefined;
    } | undefined>;
    unBind3DTilesetByTag(ActorTag: string): Promise<{
        error: string | undefined;
    } | undefined>;
    unBind3DTilesetById(ID: string): Promise<{
        error: string | undefined;
    } | undefined>;
    bindImageryByTag(ID: string, ActorTag: string, ComponentTag: string): Promise<{
        re: {
            type: number;
        };
        error: string | undefined;
    } | undefined>;
    unBindImageryByTag(ActorTag: string, ComponentTag: string): Promise<{
        error: string | undefined;
    } | undefined>;
    unBindImageryById(ID: string): Promise<{
        error: string | undefined;
    } | undefined>;
    getIdByComponentNameAndHitItem(id: string, ComponentName: string, HitItem: number): Promise<{
        re: {
            TreeId: string;
        };
        error: string | undefined;
    } | undefined>;
    setSpeechRecognitionKeys(APIKey: string, SecretKey: string): Promise<{
        error: string | undefined;
    } | undefined>;
    /**
     * @returns Promise(高度)
     * @deprecated 获取当前视角相机相对地面的高度
     * Channels ?? 'ECC_Visibility'
     */
    getCameraRelativeHeight(Channels: string): Promise<{
        re: {
            height: number;
        };
        error: string | undefined;
    } | undefined>;
    /**
   * 保存str到指定目录下
   *  Path ?? "WindowNoEditor\\ProjectName\\"
   *  File ?? "data.txt"
   */
    saveStringToFile(str: string, Path?: string, File?: string): Promise<{
        error: string | undefined;
    } | undefined>;
    highlightActorByTag(actorTag: string, isHighlight?: boolean): Promise<{
        error: string | undefined;
    } | undefined>;
    sendCustomMessage(Message: string): Promise<{
        error: string | undefined;
    } | undefined>;
    getLengthInPixel(): Promise<{
        length: number;
    } | undefined>;
    changeToWalkPick(): void;
    getProperties(): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace UeViewer {
    const createDefaultProps: () => {
        uri: string | undefined;
        debug: boolean | undefined;
        useCache: boolean | undefined;
        clickListening: boolean | undefined;
        dbclickListening: boolean | undefined;
        propChangedListening: boolean | undefined;
        widgetEventListening: boolean | undefined;
        hoverEventListening: boolean | undefined;
        mouseMoveEventListening: boolean | undefined;
        hoverOutEventListening: boolean | undefined;
        speechRecognitionListening: boolean | undefined;
        customMessageListening: boolean | undefined;
        geoReferenceOrigin: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        keepWorldOriginNearCamera: boolean | undefined;
        currentTime: number | undefined;
        hoverTime: number | undefined;
        editingPointSize: number | undefined;
        editingPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAuxiliaryPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingLineWidth: number | undefined;
        editingLineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAxisSize: number | undefined;
        videoSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        signallingServerId: string | undefined;
        globeShow: boolean | undefined;
        editingAuxiliaryPointSize: number | undefined;
        navigationMode: NavigationModeType;
        widgetInteractionDistance: number | undefined;
        cloud: number | undefined;
        night: boolean | undefined;
        rain: number | undefined;
        snow: number | undefined;
        sunIntensity: number | undefined;
        sunSkyControlled: boolean | undefined;
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
export interface UeViewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof UeViewer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof UeViewer.createDefaultProps> & {
    type: string;
}>;
export * from './CallUeFuncs';
export * from './UeEventsType';
export * from './UeFuncsType';
export * from './UeMessage';
