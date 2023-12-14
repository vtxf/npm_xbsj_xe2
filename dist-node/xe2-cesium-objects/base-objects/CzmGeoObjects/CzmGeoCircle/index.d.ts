import { GeoCircle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../../core';
import { CzmObject } from '../../../core';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { Circle } from './Circle';
import { GroundCircle } from './GroundCircle';
export declare class CzmGeoCircle extends CzmObject<GeoCircle> {
    static readonly type: void;
    private _circleOrGroundCircleResetting;
    get circleOrGroundCircleResetting(): ObjResettingWithEvent<GroundCircle | Circle, Listener<[boolean | undefined, boolean | undefined]>>;
    constructor(sceneObject: GeoCircle, czmViewer: CzmViewer);
}
