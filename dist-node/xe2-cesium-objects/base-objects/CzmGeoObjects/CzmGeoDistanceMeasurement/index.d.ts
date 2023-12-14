import { GeoDistanceMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoDistanceMeasurement extends CzmObject<GeoDistanceMeasurement> {
    static readonly type: void;
    constructor(distanceMeasurement: GeoDistanceMeasurement, czmViewer: CzmViewer);
}
