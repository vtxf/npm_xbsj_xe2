import { GeoPolygon, GeoPolyline } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmGeoPolygon } from '.';
export declare class BottomPolyline extends Destroyable {
    private _geoPolyline;
    get geoPolyline(): GeoPolyline;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, ground: boolean, czmGeoPolygon: CzmGeoPolygon);
}
