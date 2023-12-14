import { CzmObject, CzmViewer } from '../../../core';
import { CzmEllipsoidOutlinePrimitive } from '../../CzmObjects';
export declare class CzmCzmEllipsoidOutlinePrimitive extends CzmObject<CzmEllipsoidOutlinePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(ellipsoid: CzmEllipsoidOutlinePrimitive, czmViewer: CzmViewer);
}
