import { GeoImageModel } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoImageModel extends CzmObject<GeoImageModel> {
    static readonly type: void;
    constructor(sceneObject: GeoImageModel, czmViewer: CzmViewer);
}
