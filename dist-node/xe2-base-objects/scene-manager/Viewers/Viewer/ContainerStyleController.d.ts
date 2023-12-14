import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { Viewer } from ".";
export declare class ContainerStyleController extends Destroyable {
    private _subContainer;
    private _overlayContainer;
    private _viewer;
    constructor(_subContainer: HTMLDivElement, _overlayContainer: HTMLDivElement, _viewer: Viewer);
}
