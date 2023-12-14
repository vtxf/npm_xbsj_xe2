import * as Cesium from 'cesium';
export declare type PolygonHierarchyType = {
    positions: [number, number, number][];
    holes?: PolygonHierarchyType[];
};
export declare type CesiumPolygonHierarchyType = {
    positions: Cesium.Cartesian3[];
    holes: CesiumPolygonHierarchyType[];
};
export declare function createPolygonHierarchy(polygonHierarchyJson: PolygonHierarchyType): CesiumPolygonHierarchyType;
