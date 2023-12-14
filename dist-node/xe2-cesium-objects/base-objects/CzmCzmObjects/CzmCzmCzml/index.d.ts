import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmCzml } from '../../CzmObjects';
export declare class CzmCzmCzml extends CzmObject<CzmCzml> {
    static readonly type: void;
    private _dataSource;
    get dataSource(): Cesium.CzmlDataSource | undefined;
    constructor(sceneObject: CzmCzml, czmViewer: CzmViewer);
}
