import { JsonValue } from "xbsj-xe2/dist-node/xe2-base-utils";
declare type geoJsonType = 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';
declare type positionType = [number, number, number] | [number, number, number][] | [number, number, number][][] | undefined;
export declare function getGeoJson(type: geoJsonType, position: positionType, name: string): {
    type: string;
    features: {
        type: string;
        properties: {
            name: string;
        };
        geometry: {
            type: geoJsonType;
            coordinates: [number, number, number] | ([number, number, number] | [number, number, number][] | [number, number, number][][])[] | undefined;
        };
    }[];
};
export declare function setGeoJson(geoJsonObj: JsonValue): {
    name: any;
    position: any;
};
export {};
