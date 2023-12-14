import { CzmParticleEmitterJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import * as Cesium from 'cesium';
export declare function createParticleSystemEmitterFromJson(particleSystemJson: CzmParticleEmitterJsonType): Cesium.BoxEmitter | Cesium.CircleEmitter | Cesium.ConeEmitter | Cesium.SphereEmitter | undefined;
