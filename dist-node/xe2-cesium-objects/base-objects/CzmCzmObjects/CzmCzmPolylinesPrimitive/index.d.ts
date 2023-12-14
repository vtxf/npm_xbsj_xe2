import { CzmObject, CzmViewer } from '../../../core';
import { CzmPolylinesPrimitive } from '../../CzmObjects';
export declare class CzmCzmPolylinesPrimitive extends CzmObject<CzmPolylinesPrimitive> {
    static readonly type: void;
    private _primitive?;
    private _boundingSphere?;
    constructor(polylines: CzmPolylinesPrimitive, czmViewer: CzmViewer);
}
