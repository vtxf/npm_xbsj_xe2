import { CzmImageryProviderJsonType } from 'xbsj-xe2/dist-node/xe2-base-objects';
import * as Cesium from 'cesium';
import { CzmViewer } from '../../../core';
import { BDImageryProvider } from './extends/BDImageryProvider';
export declare function needRecreate(oldImageryProviderJson: CzmImageryProviderJsonType | undefined, newImageryProviderJson: CzmImageryProviderJsonType | undefined): boolean;
export declare function createImageryProviderFromJson(imageryProviderJson: CzmImageryProviderJsonType, czmViewer: CzmViewer): Cesium.WebMapTileServiceImageryProvider | Cesium.UrlTemplateImageryProvider | Cesium.GridImageryProvider | Cesium.ArcGisMapServerImageryProvider | Cesium.BingMapsImageryProvider | Cesium.GoogleEarthEnterpriseImageryProvider | Cesium.IonImageryProvider | Cesium.MapboxImageryProvider | Cesium.MapboxStyleImageryProvider | Cesium.SingleTileImageryProvider | Cesium.TileCoordinatesImageryProvider | Cesium.WebMapServiceImageryProvider | BDImageryProvider | undefined;
export declare function updateImageryProviderFromJson(imageryProvider: Cesium.ImageryProvider, imageryProviderJson: CzmImageryProviderJsonType): void;
