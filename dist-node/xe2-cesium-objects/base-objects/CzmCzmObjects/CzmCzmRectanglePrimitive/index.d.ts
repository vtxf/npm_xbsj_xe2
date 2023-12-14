import { CzmObject, CzmViewer } from '../../../core';
import { CzmRectanglePrimitive } from '../../CzmObjects';
export declare class CzmCzmRectanglePrimitive extends CzmObject<CzmRectanglePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(rectangle: CzmRectanglePrimitive, czmViewer: CzmViewer);
}
