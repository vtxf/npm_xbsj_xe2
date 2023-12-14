import * as Cesium from 'cesium';
export declare type CzmClassificationType = 'Terrain' | 'Cesium3dTile' | 'Both';
export declare function getCzmClassificationType(type: CzmClassificationType): Cesium.ClassificationType | undefined;
