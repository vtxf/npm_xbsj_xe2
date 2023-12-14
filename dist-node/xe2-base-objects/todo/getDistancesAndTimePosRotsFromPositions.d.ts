import { TimePosRotType } from "../SceneObjects/GeoObjects/GeoPath";
export declare function getDistancesAndTimePosRotsFromPositions(positions: [number, number, number][], arcType?: "GEODESIC" | "NONE" | "RHUMB", granularity?: number): {
    timePosRots: TimePosRotType[];
    distances: number[];
} | undefined;
