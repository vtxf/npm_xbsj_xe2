import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolygonOutlinePrimitive } from '../../CzmObjects';
export declare class CzmCzmPolygonOutlinePrimitive extends CzmObject<CzmPolygonOutlinePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(polygon: CzmPolygonOutlinePrimitive, czmViewer: CzmViewer);
}
