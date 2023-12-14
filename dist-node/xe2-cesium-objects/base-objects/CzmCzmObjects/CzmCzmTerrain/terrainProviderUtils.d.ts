import { CzmTerrainProviderJsonType } from 'xbsj-xe2/dist-node/xe2-base-objects';
import * as Cesium from 'cesium';
import { CzmViewer } from '../../../core';
export declare function needRecreate(oldTerrainProviderJson: CzmTerrainProviderJsonType | undefined, newTerrainProviderJson: CzmTerrainProviderJsonType | undefined): boolean;
export declare function createTerrainProviderFromJson(terrainProviderJson: CzmTerrainProviderJsonType, czmViewer: CzmViewer): Cesium.TerrainProvider | undefined;
