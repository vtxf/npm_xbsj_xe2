import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ObjResettingWithEvent } from "xbsj-xe2/dist-node/xe2-utils";
import * as Cesium from 'cesium';
import { CzmCzmImagery } from "../../../base-objects";
declare class CzmImageryLayersManager extends Destroyable {
    private _viewer;
    get viewer(): Cesium.Viewer;
    private _czmImageryLayerWrappers;
    get czmImageryLayerWrappers(): Set<CzmImageryLayerWrapper>;
    add(czmImageryLayerWrapper: CzmImageryLayerWrapper): void;
    delete(czmImageryLayerWrapper: CzmImageryLayerWrapper): void;
    private _zIndexChangedEvent;
    zIndexChange(): void;
    constructor(_viewer: Cesium.Viewer);
}
declare class CzmImageryLayerWrapper extends Destroyable {
    private _czmCzmImageryWrapper;
    private _imageryLayer;
    get imageryLayer(): Cesium.ImageryLayer;
    get czmCzmImageryWrapper(): CzmCzmImageryWrapper;
    constructor(_czmCzmImageryWrapper: CzmCzmImageryWrapper);
}
declare class CzmCzmImageryWrapperWithShow extends Destroyable {
    private _czmCzmImageryWrapper;
    get czmCzmImageryWrapper(): CzmCzmImageryWrapper;
    private _objResetting;
    get objResetting(): ObjResettingWithEvent<CzmImageryLayerWrapper, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>>;
    constructor(_czmCzmImageryWrapper: CzmCzmImageryWrapper);
}
declare class CzmCzmImageryWrapper extends Destroyable {
    private _imagery;
    private _manager;
    get imagery(): CzmCzmImagery;
    get manager(): ImageriesManager;
    private _czmImageryLayerWrapperObjResetting;
    get czmImageryLayerWrapperObjResetting(): ObjResettingWithEvent<CzmCzmImageryWrapperWithShow, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.ImageryLayer | undefined, Cesium.ImageryLayer | undefined]>>;
    constructor(_imagery: CzmCzmImagery, _manager: ImageriesManager, viewer: Cesium.Viewer);
}
export declare class ImageriesManager extends Destroyable {
    private _viewer;
    private _czmCzmImageryWrappers;
    get czmCzmImageryWrappers(): Set<CzmCzmImageryWrapper>;
    private _czmImageryLayersManager;
    get czmImageryLayersManager(): CzmImageryLayersManager;
    constructor(_viewer: Cesium.Viewer);
    add(imagery: CzmCzmImagery): void;
    delete(imagery: CzmCzmImagery): void;
}
export {};
