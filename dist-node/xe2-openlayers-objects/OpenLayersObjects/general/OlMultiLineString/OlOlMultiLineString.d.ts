import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlMultiLineString } from './OlMultiLineString';
export declare class OlOlMultiLineString extends OpenLayersObject<OlMultiLineString> {
    static readonly type: void;
    constructor(sceneObject: OlMultiLineString, olViewer: OpenLayersViewer);
}
