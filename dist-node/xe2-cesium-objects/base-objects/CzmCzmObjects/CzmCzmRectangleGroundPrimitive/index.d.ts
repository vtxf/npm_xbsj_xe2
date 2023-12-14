import { CzmObject, CzmViewer } from '../../../core';
import { CzmRectangleGroundPrimitive } from '../../CzmObjects';
export declare class CzmCzmRectangleGroundPrimitive extends CzmObject<CzmRectangleGroundPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(rectangle: CzmRectangleGroundPrimitive, czmViewer: CzmViewer);
}
