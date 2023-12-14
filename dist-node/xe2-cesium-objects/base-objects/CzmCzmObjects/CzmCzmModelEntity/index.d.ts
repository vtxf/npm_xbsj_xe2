import { CzmObject, CzmViewer } from '../../../core';
import { CzmModelEntity } from '../../CzmObjects';
export declare class CzmCzmModelEntity extends CzmObject<CzmModelEntity> {
    static readonly type: void;
    constructor(model: CzmModelEntity, czmViewer: CzmViewer);
}
