import { CzmObject, CzmViewer } from '../../../core';
import { CzmEllipseGroundPrimitive } from '../../CzmObjects';
export declare class CzmCzmEllipseGroundPrimitive extends CzmObject<CzmEllipseGroundPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(ellipse: CzmEllipseGroundPrimitive, czmViewer: CzmViewer);
}
