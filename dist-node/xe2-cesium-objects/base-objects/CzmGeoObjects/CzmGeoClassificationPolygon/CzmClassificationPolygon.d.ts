import { GeoClassificationPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
export declare class CzmClassificationPolygon extends Destroyable {
    private _czmClassificationPolygonPrimitive;
    constructor(sceneObject: GeoClassificationPolygon, czmViewer: CzmViewer);
}
