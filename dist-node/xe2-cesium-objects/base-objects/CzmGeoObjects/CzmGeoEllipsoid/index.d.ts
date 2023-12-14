import { GeoEllipsoid } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmGeoEllipsoid extends CzmObject<GeoEllipsoid> {
    static readonly type: void;
    constructor(sceneObject: GeoEllipsoid, czmViewer: CzmViewer);
}
