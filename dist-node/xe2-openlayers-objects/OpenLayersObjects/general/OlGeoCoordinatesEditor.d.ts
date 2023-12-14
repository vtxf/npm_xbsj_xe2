import { GeoCoordinatesEditor } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoCoordinatesEditor extends OpenLayersObject<GeoCoordinatesEditor> {
    static readonly type: void;
    constructor(sceneObject: GeoCoordinatesEditor, olViewer: OpenLayersViewer);
}
