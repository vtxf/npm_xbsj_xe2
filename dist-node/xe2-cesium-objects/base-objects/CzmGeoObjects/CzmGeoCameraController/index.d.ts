import { GeoCameraController } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmGeoCameraController extends CzmObject<GeoCameraController> {
    static readonly type: void;
    constructor(sceneObject: GeoCameraController, czmViewer: CzmViewer);
}
