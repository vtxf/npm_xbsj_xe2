import { CzmObject, CzmViewer } from '../../../core';
import { CzmEllipsePrimitive } from '../../CzmObjects';
export declare class CzmCzmEllipsePrimitive extends CzmObject<CzmEllipsePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(ellipse: CzmEllipsePrimitive, czmViewer: CzmViewer);
}
