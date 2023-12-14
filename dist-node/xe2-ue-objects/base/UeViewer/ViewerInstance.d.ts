import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeViewer } from ".";
import { UeCloudViewerBase } from "./UeCloudViewerBase";
export declare class ViewerInstance extends Destroyable {
    private _viewer;
    get viewer(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<UeCloudViewerBase | undefined>;
    get viewerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[UeCloudViewerBase | undefined, UeCloudViewerBase | undefined]>;
    constructor(ueViewer: UeViewer, cloudViewer: UeCloudViewerBase);
}
