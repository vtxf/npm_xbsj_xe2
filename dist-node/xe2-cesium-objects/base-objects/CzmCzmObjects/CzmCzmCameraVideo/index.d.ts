import { CzmObject, CzmViewer } from '../../../core';
import { CzmCameraVideo } from '../../CzmObjects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { XbsjCameraVideo } from 'xbsj-xe2/dist-node/xe2-base-cesium';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
declare class XbsjCameraVideoResetting extends Destroyable {
    private _xbsjCameraVideo;
    get xbsjCameraVideo(): XbsjCameraVideo;
    constructor(czmCzmCameraVideo: CzmCzmCameraVideo);
}
export declare class CzmCzmCameraVideo extends CzmObject<CzmCameraVideo> {
    static readonly type: void;
    private _xbsjCameraVideoResettingEvent;
    private _xbsjCameraVideoResetting;
    get xbsjCameraVideoResetting(): ObjResettingWithEvent<XbsjCameraVideoResetting, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<any[]>>;
    get xbsjCameraVideoChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[XbsjCameraVideoResetting | undefined, XbsjCameraVideoResetting | undefined]>;
    get xbsjCameraVideo(): XbsjCameraVideo | undefined;
    constructor(sceneObject: CzmCameraVideo, czmViewer: CzmViewer);
}
export {};
