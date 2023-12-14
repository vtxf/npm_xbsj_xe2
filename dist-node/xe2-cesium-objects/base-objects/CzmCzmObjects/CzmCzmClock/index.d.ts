import { CzmClock } from '../../CzmObjects';
import * as Cesium from 'cesium';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
declare function czmJulianDateToTimeStamp(julianDate: Cesium.JulianDate): number;
declare function getClockRange(value: Cesium.ClockRange): "CLAMPED" | "LOOP_STOP" | "UNBOUNDED";
declare function getClockStep(value: Cesium.ClockStep): "SYSTEM_CLOCK" | "SYSTEM_CLOCK_MULTIPLIER" | "TICK_DEPENDENT";
export declare class CzmCzmClock extends CzmObject<CzmClock> {
    static readonly type: void;
    static czmJulianDateToTimeStamp: typeof czmJulianDateToTimeStamp;
    static getClockRange: typeof getClockRange;
    static getClockStep: typeof getClockStep;
    constructor(sceneObject: CzmClock, czmViewer: CzmViewer);
}
export {};
