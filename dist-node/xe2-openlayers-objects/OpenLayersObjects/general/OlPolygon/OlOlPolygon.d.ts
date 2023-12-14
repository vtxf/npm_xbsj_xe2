import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlPolygon } from './OlPolygon';
export declare class OlOlPolygon extends OpenLayersObject<OlPolygon> {
    static readonly type: void;
    constructor(sceneObject: OlPolygon, olViewer: OpenLayersViewer);
}
