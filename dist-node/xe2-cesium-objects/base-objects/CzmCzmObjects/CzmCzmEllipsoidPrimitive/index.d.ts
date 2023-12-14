import { CzmObject, CzmViewer } from '../../../core';
import { CzmEllipsoidPrimitive } from '../../CzmObjects';
export declare class CzmCzmEllipsoidPrimitive extends CzmObject<CzmEllipsoidPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(ellipsoid: CzmEllipsoidPrimitive, czmViewer: CzmViewer);
}
