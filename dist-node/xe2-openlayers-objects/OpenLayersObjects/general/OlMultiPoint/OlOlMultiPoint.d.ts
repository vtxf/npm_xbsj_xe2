import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlMultiPoint } from './OlMultiPoint';
export declare class OlOlMultiPoint extends OpenLayersObject<OlMultiPoint> {
    static readonly type: void;
    constructor(sceneObject: OlMultiPoint, olViewer: OpenLayersViewer);
}
