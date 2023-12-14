export declare type CzmTilingSchemaJsonType = {
    type: 'WebMercatorTilingScheme';
    ellipsoid?: [x: number, y: number, z: number];
    numberOfLevelZeroTilesX?: number;
    numberOfLevelZeroTilesY?: number;
    rectangleSouthwestInMeters?: [number, number];
    rectangleNortheastInMeters?: [number, number];
} | {
    type: 'GeographicTilingScheme';
    ellipsoid?: [x: number, y: number, z: number];
    rectangle?: [west: number, south: number, east: number, north: number];
    numberOfLevelZeroTilesX?: number;
    numberOfLevelZeroTilesY?: number;
} | {
    type: 'ToGCJ02WebMercatorTilingScheme';
    ellipsoid?: [x: number, y: number, z: number];
    numberOfLevelZeroTilesX?: number;
    numberOfLevelZeroTilesY?: number;
    rectangleSouthwestInMeters?: [number, number];
    rectangleNortheastInMeters?: [number, number];
} | {
    type: 'ToWGS84WebMercatorTilingScheme';
    ellipsoid?: [x: number, y: number, z: number];
    numberOfLevelZeroTilesX?: number;
    numberOfLevelZeroTilesY?: number;
    rectangleSouthwestInMeters?: [number, number];
    rectangleNortheastInMeters?: [number, number];
};
