import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmGeoPolygon } from '.';
export declare class TopPolyline extends Destroyable {
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, czmGeoPolygon: CzmGeoPolygon);
}
