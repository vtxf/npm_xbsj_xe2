import { GeoPoint } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoPoint extends CzmObject<GeoPoint> {
    static readonly type: void;
    constructor(sceneObject: GeoPoint, czmViewer: CzmViewer);
}
