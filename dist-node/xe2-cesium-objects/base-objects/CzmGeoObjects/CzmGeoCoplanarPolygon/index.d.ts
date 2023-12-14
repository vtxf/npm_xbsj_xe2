import { GeoCoplanarPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoCoplanarPolygon extends CzmObject<GeoCoplanarPolygon> {
    static readonly type: void;
    constructor(sceneObject: GeoCoplanarPolygon, czmViewer: CzmViewer);
}
