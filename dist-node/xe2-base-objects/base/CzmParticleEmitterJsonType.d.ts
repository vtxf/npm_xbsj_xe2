export declare type CzmParticleEmitterJsonType = {
    type: 'BoxEmitter';
    dimensions: [number, number, number];
} | {
    type: 'CircleEmitter';
    radius?: number;
} | {
    type: 'ConeEmitter';
    angle?: number;
} | {
    type: 'SphereEmitter';
    radius?: number;
};
