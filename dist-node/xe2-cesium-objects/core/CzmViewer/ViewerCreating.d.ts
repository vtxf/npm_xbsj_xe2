import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import * as Cesium from 'cesium';
import { CzmViewer } from "./index";
import "./initCesiumViewer";
export declare class ViewerCreating extends Destroyable {
    constructor(subContainer: HTMLDivElement, czmViewer: CzmViewer, setViewerFunc: (viewer: Cesium.Viewer | undefined) => void);
}
