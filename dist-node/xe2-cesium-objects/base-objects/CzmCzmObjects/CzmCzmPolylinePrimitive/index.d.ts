import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolylinePrimitive } from '../../CzmObjects';
export declare class CzmCzmPolylinePrimitive extends CzmObject<CzmPolylinePrimitive> {
    static readonly type: void;
    constructor(polyline: CzmPolylinePrimitive, czmViewer: CzmViewer);
}
