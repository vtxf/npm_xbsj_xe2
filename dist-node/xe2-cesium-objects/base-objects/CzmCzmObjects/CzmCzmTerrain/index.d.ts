import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmTerrain } from '../../CzmObjects';
export declare function getApproximateTerrainMinimumMaximumHeights(rectangle: Cesium.Rectangle, ellipsoid?: Cesium.Ellipsoid): {
    minimumTerrainHeight: number;
    maximumTerrainHeight: number;
} | undefined;
export declare class CzmCzmTerrain extends CzmObject<CzmTerrain> {
    static readonly type: void;
    private _provider;
    get provider(): Cesium.TerrainProvider | undefined;
    set provider(value: Cesium.TerrainProvider | undefined);
    get providerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.TerrainProvider | undefined, Cesium.TerrainProvider | undefined]>;
    constructor(terrain: CzmTerrain, czmViewer: CzmViewer);
}
