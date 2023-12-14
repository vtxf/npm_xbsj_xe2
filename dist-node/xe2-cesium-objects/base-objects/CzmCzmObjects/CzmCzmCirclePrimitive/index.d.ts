import { CzmObject, CzmViewer } from '../../../core';
import { CzmCirclePrimitive } from '../../CzmObjects';
export declare class CzmCzmCirclePrimitive extends CzmObject<CzmCirclePrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(sceneObject: CzmCirclePrimitive, czmViewer: CzmViewer);
}
