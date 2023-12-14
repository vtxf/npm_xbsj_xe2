import { CzmTilingSchemaJsonType } from "./CzmTilingSchemaJsonType";
export declare type CzmTerrainProviderJsonType = {
    type: 'ArcGISTiledElevationTerrainProvider';
    url: string;
    token?: string;
    ellipsoid?: [x: number, y: number, z: number];
} | {
    type: 'CesiumTerrainProvider';
    url: string;
    requestVertexNormals?: boolean;
    requestWaterMask?: boolean;
    requestMetadata?: boolean;
    ellipsoid?: [x: number, y: number, z: number];
    credit?: string;
} | {
    type: 'CustomHeightmapTerrainProvider';
    callback: string;
    width: number;
    height: number;
    tilingScheme?: CzmTilingSchemaJsonType;
    ellipsoid?: [x: number, y: number, z: number];
    credit?: string;
} | {
    type: 'EllipsoidTerrainProvider';
    tilingScheme?: CzmTilingSchemaJsonType;
    ellipsoid?: [x: number, y: number, z: number];
} | {
    type: 'GoogleEarthEnterpriseTerrainProvider';
    url: string;
    metadata: string;
    ellipsoid?: [x: number, y: number, z: number];
    credit?: string;
} | {
    type: 'VRTheWorldTerrainProvider';
    url: string;
    ellipsoid?: [x: number, y: number, z: number];
    credit?: string;
};
