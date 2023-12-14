import Graticule from 'ol/layer/Graticule.js';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlGraticule } from './OlGraticule';
export declare class GraticuleLayer extends Destroyable {
    private _layer;
    get layer(): Graticule;
    constructor(sceneObject: OlGraticule, olViewer: OpenLayersViewer);
}
export declare class OlOlGraticule extends OpenLayersObject<OlGraticule> {
    static readonly type: void;
    constructor(sceneObject: OlGraticule, olViewer: OpenLayersViewer);
}
