import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
import { GeoVolumeMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
export declare class CzmGeoVolumeMeasurement extends CzmObject<GeoVolumeMeasurement> {
    static readonly type: void;
    constructor(sceneObject: GeoVolumeMeasurement, czmViewer: CzmViewer);
}
