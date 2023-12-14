import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmGeoPolygon } from '.';
import { GroundInnerPolygon } from './GroundInnerPolygon';
import { GroundBottomPolyline } from './GroundBottomPolyline';
export declare class GroundPolygon extends Destroyable {
    private _innerPolygon;
    get innerPolygon(): GroundInnerPolygon;
    private _bottomPolyline;
    get bottomPolyline(): GroundBottomPolyline;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, czmGeoPolygon: CzmGeoPolygon);
}
