import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmGeoJson } from '../../CzmObjects/CzmGeoJson';
export declare class CzmCzmGeoJson extends CzmObject<CzmGeoJson> {
    static readonly type: void;
    private _dataSource;
    get dataSource(): Cesium.GeoJsonDataSource | undefined;
    constructor(sceneObject: CzmGeoJson, czmViewer: CzmViewer);
}
