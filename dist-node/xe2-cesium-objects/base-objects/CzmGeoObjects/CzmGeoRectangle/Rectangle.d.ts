import { GeoRectangle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
export declare class Rectangle extends Destroyable {
    constructor(sceneObject: GeoRectangle, czmViewer: CzmViewer);
}
