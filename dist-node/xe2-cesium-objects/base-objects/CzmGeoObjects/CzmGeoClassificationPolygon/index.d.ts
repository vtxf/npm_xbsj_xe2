import { GeoClassificationPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmGeoClassificationPolygon extends CzmObject<GeoClassificationPolygon> {
    static readonly type: void;
    constructor(sceneObject: GeoClassificationPolygon, czmViewer: CzmViewer);
}
