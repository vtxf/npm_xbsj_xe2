import * as Cesium from 'cesium';
import { Czm3DTiles } from '../../CzmObjects';
export declare function createCzm3DTiles(sceneObject: Czm3DTiles, url: string, customShader?: Cesium.CustomShader): Promise<Cesium.Cesium3DTileset | undefined>;
