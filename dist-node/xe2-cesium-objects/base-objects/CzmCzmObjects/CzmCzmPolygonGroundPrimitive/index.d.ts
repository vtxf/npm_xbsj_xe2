import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolygonGroundPrimitive } from '../../CzmObjects';
export declare class CzmCzmPolygonGroundPrimitive extends CzmObject<CzmPolygonGroundPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(polygon: CzmPolygonGroundPrimitive, czmViewer: CzmViewer);
}
