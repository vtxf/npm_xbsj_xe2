import { GeoRectangle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { Rectangle } from './Rectangle';
import { GroundRectangle } from './GroundRectangle';
export declare class CzmGeoRectangle extends CzmObject<GeoRectangle> {
    static readonly type: void;
    private _rectangleOrGroundRectangleResetting;
    get rectangleOrGroundRectangleResetting(): ObjResettingWithEvent<GroundRectangle | Rectangle, Listener<[boolean | undefined, boolean | undefined]>>;
    constructor(sceneObject: GeoRectangle, czmViewer: CzmViewer);
}
