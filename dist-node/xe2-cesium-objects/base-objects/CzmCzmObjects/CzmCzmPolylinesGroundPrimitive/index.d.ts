import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolylinesGroundPrimitive } from '../../CzmObjects';
export declare class CzmCzmPolylinesGroundPrimitive extends CzmObject<CzmPolylinesGroundPrimitive> {
    static readonly type: void;
    private _groundPrimitive?;
    private _boundingSphere?;
    constructor(polylines: CzmPolylinesGroundPrimitive, czmViewer: CzmViewer);
}
