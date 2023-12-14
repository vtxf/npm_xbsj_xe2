import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmPolygonPrimitive } from '../../CzmObjects';
import { CzmGeoPolygon } from '.';
export declare class InnerPolygon extends Destroyable {
    private _czmInnerPolygonPrimitive;
    get czmInnerPolygonPrimitive(): CzmPolygonPrimitive;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer, depthEnabled: boolean, ground: boolean, czmGeoPolygon: CzmGeoPolygon);
}
