import { GeoDirectionMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoDirectionMeasurement extends CzmObject<GeoDirectionMeasurement> {
    static readonly type: void;
    constructor(directionMeasurement: GeoDirectionMeasurement, czmViewer: CzmViewer);
}
