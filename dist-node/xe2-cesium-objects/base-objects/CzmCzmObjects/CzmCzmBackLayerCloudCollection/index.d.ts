import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmBackLayerCloudCollection } from '../../CzmObjects';
export declare class CzmCzmBackLayerCloudCollection extends CzmObject<CzmBackLayerCloudCollection> {
    static readonly type: void;
    private _cloudCollection;
    get cloudCollection(): Cesium.CloudCollection;
    constructor(sceneObject: CzmBackLayerCloudCollection, czmViewer: CzmViewer);
}
