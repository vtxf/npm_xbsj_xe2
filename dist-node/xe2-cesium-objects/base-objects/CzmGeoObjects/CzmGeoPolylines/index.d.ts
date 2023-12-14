import { GeoPolylines } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoPolylines extends CzmObject<GeoPolylines> {
    static readonly type: void;
    constructor(sceneObject: GeoPolylines, czmViewer: CzmViewer);
}
