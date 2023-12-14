import { CzmObject, CzmViewer } from '../../../core';
import { CzmPoint } from '../../CzmObjects';
export declare class CzmCzmPoint extends CzmObject<CzmPoint> {
    static readonly type: void;
    constructor(sceneObject: CzmPoint, czmViewer: CzmViewer);
}
