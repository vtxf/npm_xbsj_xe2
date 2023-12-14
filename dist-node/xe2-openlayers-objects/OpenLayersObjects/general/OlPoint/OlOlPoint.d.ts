import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlPoint } from './OlPoint';
export declare class OlOlPoint extends OpenLayersObject<OlPoint> {
    static readonly type: void;
    constructor(sceneObject: OlPoint, olViewer: OpenLayersViewer);
}
