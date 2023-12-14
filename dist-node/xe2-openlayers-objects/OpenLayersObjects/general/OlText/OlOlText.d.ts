import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlText } from './OlText';
export declare class OlOlText extends OpenLayersObject<OlText> {
    static readonly type: void;
    constructor(sceneObject: OlText, olViewer: OpenLayersViewer);
}
