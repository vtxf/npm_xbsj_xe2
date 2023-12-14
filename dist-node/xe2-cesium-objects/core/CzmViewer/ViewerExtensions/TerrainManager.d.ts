import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmCzmTerrain } from "../../../base-objects";
import * as Cesium from 'cesium';
export declare class TerrainManager extends Destroyable {
    private _viewer;
    private _terrainMap;
    private _nextAnimateFrame;
    private _makeDirty;
    private get _changed();
    constructor(_viewer: Cesium.Viewer);
    add(terrain: CzmCzmTerrain): void;
    delete(terrain: CzmCzmTerrain): void;
}
