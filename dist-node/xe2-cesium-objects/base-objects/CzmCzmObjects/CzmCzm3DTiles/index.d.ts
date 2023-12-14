import { Destroyable, Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { Czm3DTiles, Czm3DTilesCustomShaderClassType } from '../../CzmObjects';
declare class RelativeClippingPlaneCollectionUpdating extends Destroyable {
    private _tileset;
    private _czmCzm3DTiles;
    get tileset(): Cesium.Cesium3DTileset;
    get czmCzm3DTiles(): CzmCzm3DTiles;
    constructor(_tileset: Cesium.Cesium3DTileset, _czmCzm3DTiles: CzmCzm3DTiles);
}
declare class AbsoluteClippingPlaneCollectionUpdating extends Destroyable {
    private _tileset;
    private _czmCzm3DTiles;
    private _updateMatrixEvent;
    get tileset(): Cesium.Cesium3DTileset;
    get czmCzm3DTiles(): CzmCzm3DTiles;
    constructor(_tileset: Cesium.Cesium3DTileset, _czmCzm3DTiles: CzmCzm3DTiles, _updateMatrixEvent: Event);
}
declare class NativeTilesetReadyResetting extends Destroyable {
    private _tileset;
    private _czmCzm3DTiles;
    private _czmNativeViewer;
    private _czmViewer;
    get tileset(): Cesium.Cesium3DTileset;
    get czmCzm3DTiles(): CzmCzm3DTiles;
    get sceneObject(): Czm3DTiles;
    private _updateMatrixEvent;
    private _updateMatrix;
    private _clippingPlanesCollectionResetting;
    get clippingPlanesCollectionResetting(): ObjResettingWithEvent<RelativeClippingPlaneCollectionUpdating | AbsoluteClippingPlaneCollectionUpdating, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>>;
    constructor(_tileset: Cesium.Cesium3DTileset, _czmCzm3DTiles: CzmCzm3DTiles, _czmNativeViewer: Cesium.Viewer, _czmViewer: CzmViewer);
}
declare class NativeTilesetResetting extends Destroyable {
    private _url;
    private _czmCzm3DTiles;
    private _czmNativeViewer;
    private _czmViewer;
    get url(): string;
    get czmCzm3DTiles(): CzmCzm3DTiles;
    get sceneObject(): Czm3DTiles;
    get czmViewer(): CzmViewer;
    private _tileset;
    get tileset(): Cesium.Cesium3DTileset | undefined;
    set tileset(value: Cesium.Cesium3DTileset | undefined);
    get tilesetChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Cesium3DTileset | undefined, Cesium.Cesium3DTileset | undefined]>;
    private _readyResetting;
    get readyResetting(): ObjResettingWithEvent<NativeTilesetReadyResetting, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Cesium3DTileset | undefined, Cesium.Cesium3DTileset | undefined]>>;
    constructor(_url: string, _czmCzm3DTiles: CzmCzm3DTiles, _czmNativeViewer: Cesium.Viewer, _czmViewer: CzmViewer);
}
export declare class CzmCzm3DTiles extends CzmObject<Czm3DTiles> {
    static readonly type: void;
    private _customShaderInstance;
    get customShaderInstance(): Czm3DTilesCustomShaderClassType | undefined;
    get customShaderInstanceChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Czm3DTilesCustomShaderClassType | undefined, Czm3DTilesCustomShaderClassType | undefined]>;
    set customShaderInstance(value: Czm3DTilesCustomShaderClassType | undefined);
    private _style;
    get style(): Cesium.Cesium3DTileStyle | undefined;
    get styleChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Cesium3DTileStyle | undefined, Cesium.Cesium3DTileStyle | undefined]>;
    set style(value: Cesium.Cesium3DTileStyle | undefined);
    private _originRootTransform;
    get originRootTransform(): Cesium.Matrix4 | undefined;
    set originRootTransform(value: Cesium.Matrix4 | undefined);
    get originRootTransformChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Matrix4 | undefined, Cesium.Matrix4 | undefined]>;
    private _originRootTransformInv;
    get originRootTransformInv(): Cesium.Matrix4 | undefined;
    set originRootTransformInv(value: Cesium.Matrix4 | undefined);
    get originRootTransformInvChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Matrix4 | undefined, Cesium.Matrix4 | undefined]>;
    private _urlReact;
    private _recreateEvent;
    private _nativeTilesetResetting;
    get nativeTilesetResetting(): ObjResettingWithEvent<NativeTilesetResetting, import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent>;
    get tileset(): Cesium.Cesium3DTileset | undefined;
    get tilesetChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[NativeTilesetResetting | undefined, NativeTilesetResetting | undefined]>;
    constructor(sceneObject: Czm3DTiles, czmViewer: CzmViewer);
}
export {};
