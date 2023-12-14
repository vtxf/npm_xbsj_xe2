import { Units } from '@turf/helpers';
declare function geoIntersect(polygon1: [number, number, number][], polygon2: [number, number, number][]): [number, number][][] | [number, number][][][] | undefined;
declare function geoUnion(polygon1: [number, number, number][], polygon2: [number, number, number][]): [number, number][][] | [number, number][][][] | undefined;
declare function geoBuffer(line: [number, number, number][], radius?: number, units?: Units): [number, number][][] | undefined;
declare function geoDifference(polygon1: [number, number, number][], polygon2: [number, number, number][]): [number, number][][] | [number, number][][][] | undefined;
declare function geoPolygonFromCircle(center: [number, number, number], radius: number, steps?: number, units?: Units): [number, number][][];
declare function geoPolygonOverlap(polygon1: [number, number, number][], polygon2: [number, number, number][]): false | "oneBig" | "twoBig";
export { geoIntersect, geoUnion, geoBuffer, geoDifference, geoPolygonFromCircle, geoPolygonOverlap };
