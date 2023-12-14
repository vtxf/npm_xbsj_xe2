import { CzmObject, CzmViewer } from '../../../core';
import { CzmEllipseOutlinePrimitive } from '../../CzmObjects';
export declare class CzmCzmEllipseOutlinePrimitive extends CzmObject<CzmEllipseOutlinePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(ellipse: CzmEllipseOutlinePrimitive, czmViewer: CzmViewer);
}
