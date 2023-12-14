import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmImagery } from '../../CzmObjects';
export * from './extends/tilingScheme';
export declare class CzmCzmImagery extends CzmObject<CzmImagery> {
    static readonly type: void;
    private _layer;
    get layer(): Cesium.ImageryLayer | undefined;
    set layer(value: Cesium.ImageryLayer | undefined);
    get layerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.ImageryLayer | undefined, Cesium.ImageryLayer | undefined]>;
    constructor(imagery: CzmImagery, czmViewer: CzmViewer);
}
