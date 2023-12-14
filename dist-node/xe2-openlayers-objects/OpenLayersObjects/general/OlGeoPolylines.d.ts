import { GeoPolylines } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoPolylines extends OpenLayersObject<GeoPolylines> {
    static readonly type: void;
    constructor(sceneObject: GeoPolylines, olViewer: OpenLayersViewer);
}
