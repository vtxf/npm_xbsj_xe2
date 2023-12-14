import { GeoPolyline } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoPolyline extends OpenLayersObject<GeoPolyline> {
    static readonly type: void;
    constructor(sceneObject: GeoPolyline, olViewer: OpenLayersViewer);
}
