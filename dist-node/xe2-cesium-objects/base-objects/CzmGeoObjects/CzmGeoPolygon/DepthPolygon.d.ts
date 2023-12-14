import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { BottomPolyline } from './BottomPolyline';
import { InnerPolygon } from './InnerPolygon';
import { CzmGeoPolygon } from '.';
export declare class DepthPolygon extends Destroyable {
    private _innerPolygon;
    get innerPolygon(): InnerPolygon;
    private _bottomPolyline;
    get bottomPolyline(): BottomPolyline;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, czmGeoPolygon: CzmGeoPolygon);
}
