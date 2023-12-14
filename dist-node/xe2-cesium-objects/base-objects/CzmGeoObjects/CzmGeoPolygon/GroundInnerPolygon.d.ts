import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmPolygonGroundPrimitive } from '../../CzmObjects';
import { CzmGeoPolygon } from '.';
export declare class GroundInnerPolygon extends Destroyable {
    private _groundPolygonPrimitive;
    get groundPolygonPrimitive(): CzmPolygonGroundPrimitive;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, czmGeoPolygon: CzmGeoPolygon);
}
