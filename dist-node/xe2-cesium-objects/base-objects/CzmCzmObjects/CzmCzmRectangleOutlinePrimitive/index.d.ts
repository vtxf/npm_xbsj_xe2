import { CzmObject, CzmViewer } from '../../../core';
import { CzmRectangleOutlinePrimitive } from '../../CzmObjects';
export declare class CzmCzmRectangleOutlinePrimitive extends CzmObject<CzmRectangleOutlinePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(rectangle: CzmRectangleOutlinePrimitive, czmViewer: CzmViewer);
}
