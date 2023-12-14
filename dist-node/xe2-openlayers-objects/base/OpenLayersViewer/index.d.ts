import OlMap from 'ol/Map.js';
import { toLonLat, fromLonLat } from 'ol/proj';
import { SceneObject, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged, Listener } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { OlPoisContext } from '../misc/OlPoisContext';
import { OlPickedInfo } from "./OlMapCreating";
export declare type OpenLayersViewerFlyToOptionsType = {
    position?: [number, number];
    zoom?: number;
    rotation?: number;
    duration?: number;
};
export declare class OpenLayersViewer extends Viewer {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        dragPanEnabled: boolean | undefined;
        scaleLineEnabled: boolean | undefined;
        zoomIconEnabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        zoom: number | undefined;
        rotation: number | undefined;
        enableRotation: boolean | undefined;
        resolution: number | undefined;
        boundary: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        projectionCode: string | undefined;
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
    private _map;
    get map(): OlMap | undefined;
    get mapChanged(): Listener<[OlMap | undefined, OlMap | undefined]>;
    setMap(value: OlMap | undefined): void;
    get olPickedEvent(): Event<[pickedResult: OlPickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[OpenLayersViewerFlyToOptionsType]>;
    flyTo(options: OpenLayersViewerFlyToOptionsType): void;
    private _getJsonEvent;
    get getJsonEvent(): Listener;
    static toLonLat: typeof toLonLat;
    static fromLonLat: typeof fromLonLat;
    private _poiContext;
    get poiContext(): OlPoisContext | undefined;
    set poiContext(value: OlPoisContext | undefined);
    get poiContextChanged(): Listener<[OlPoisContext | undefined, OlPoisContext | undefined]>;
    constructor(id?: SceneObjectKey, devTags?: string[]);
    get type(): string;
    private _add;
    private _delete;
    add<T extends SceneObject>(...sceneObjects: T[]): void;
    delete<T extends SceneObject>(...sceneObjects: T[]): void;
    has<T extends SceneObject>(sceneObject: T): boolean;
    static defaultValue: {
        position: [number, number];
        rotation: number;
        zoom: number;
    };
    static defaults: {
        enableRotation: boolean;
        viewerTagsEnums: [string, string][];
    };
    getProperties(): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    getInteractionFromMap(): import("xbsj-xe2/dist-node/xe2-base-objects").ContainerViewerInteraction | undefined;
    getCaptureInteractionFromMap(): import("xbsj-xe2/dist-node/xe2-base-objects").ContainerViewerInteraction | undefined;
    getAttachingFromMap(): import("./OlMapCreating").OlMapAttaching | undefined;
    getCenter(isLonLat?: boolean): import("ol/coordinate").Coordinate | undefined;
    getCenterResolution(): number | undefined;
    setCenterResolution(centerResolution: number): undefined;
    getLBFromPixel(pixel: [number, number]): [number, number] | undefined;
    pick(windowPos: [number, number], attachedInfo?: any): OlPickedInfo | undefined;
}
export declare namespace OpenLayersViewer {
    const createDefaultProps: () => {
        dragPanEnabled: boolean | undefined;
        scaleLineEnabled: boolean | undefined;
        zoomIconEnabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        zoom: number | undefined;
        rotation: number | undefined;
        enableRotation: boolean | undefined;
        resolution: number | undefined;
        boundary: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        projectionCode: string | undefined;
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
export interface OpenLayersViewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OpenLayersViewer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OpenLayersViewer.createDefaultProps> & {
    type: string;
}>;
export {};
