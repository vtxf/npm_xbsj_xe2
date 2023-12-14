import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmKml } from '../../CzmObjects';
export declare class CzmCzmKml extends CzmObject<CzmKml> {
    static readonly type: void;
    private _dataSource;
    get dataSource(): Cesium.KmlDataSource | undefined;
    constructor(sceneObject: CzmKml, czmViewer: CzmViewer);
}
