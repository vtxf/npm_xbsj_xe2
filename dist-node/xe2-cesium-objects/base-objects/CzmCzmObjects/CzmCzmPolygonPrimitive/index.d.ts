import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolygonPrimitive } from '../../CzmObjects';
export declare class CzmCzmPolygonPrimitive extends CzmObject<CzmPolygonPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(polygon: CzmPolygonPrimitive, czmViewer: CzmViewer);
}
