import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlCircle } from './OlCircle';
export declare class OlOlCircle extends OpenLayersObject<OlCircle> {
    static readonly type: void;
    constructor(sceneObject: OlCircle, olViewer: OpenLayersViewer);
}
