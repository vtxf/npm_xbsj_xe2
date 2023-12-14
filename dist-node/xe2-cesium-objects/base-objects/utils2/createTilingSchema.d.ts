import * as Cesium from 'cesium';
import { CzmTilingSchemaJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare function createTilingSchema(tilingSchemaJson: CzmTilingSchemaJsonType): Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme | undefined;
