import { CzmObject, CzmViewer } from '../../../core';
import { CzmParticleSystemPrimitive } from '../../CzmObjects';
export declare class CzmCzmParticleSystemPrimitive extends CzmObject<CzmParticleSystemPrimitive> {
    static readonly type: void;
    private _primitive?;
    constructor(particle: CzmParticleSystemPrimitive, czmViewer: CzmViewer);
}
