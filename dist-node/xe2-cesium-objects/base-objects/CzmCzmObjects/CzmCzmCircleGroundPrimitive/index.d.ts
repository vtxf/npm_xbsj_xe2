import { CzmObject, CzmViewer } from '../../../core';
import { CzmCircleGroundPrimitive } from '../../CzmObjects';
export declare class CzmCzmCircleGroundPrimitive extends CzmObject<CzmCircleGroundPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(sceneObject: CzmCircleGroundPrimitive, czmViewer: CzmViewer);
}
