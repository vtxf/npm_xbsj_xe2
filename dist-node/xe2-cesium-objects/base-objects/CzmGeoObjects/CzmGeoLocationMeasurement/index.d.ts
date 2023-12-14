import { GeoLocationMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
export declare class CzmGeoLocationMeasurement extends CzmObject<GeoLocationMeasurement> {
    static readonly type: void;
    constructor(sceneObject: GeoLocationMeasurement, czmViewer: CzmViewer);
}
