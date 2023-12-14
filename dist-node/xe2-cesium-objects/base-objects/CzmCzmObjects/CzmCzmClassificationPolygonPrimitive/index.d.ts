import { CzmObject, CzmViewer } from '../../../core';
import { CzmClassificationPolygonPrimitive } from '../../CzmObjects';
export declare class CzmCzmClassificationPolygonPrimitive extends CzmObject<CzmClassificationPolygonPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(sceneObject: CzmClassificationPolygonPrimitive, czmViewer: CzmViewer);
}
