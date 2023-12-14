import { GeoPoint } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoPoint extends OpenLayersObject<GeoPoint> {
    static readonly type: void;
    constructor(sceneObject: GeoPoint, olViewer: OpenLayersViewer);
}
