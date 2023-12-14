import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { View } from "./View";
import { ViewCollection } from "./ViewCollection";
export declare type ViewInfo = {
    viewDistance?: number | undefined;
    duration?: number | undefined;
    position: [number, number, number];
    rotation?: [number, number, number] | undefined;
    thumbnail?: string | undefined;
};
export declare class ViewWrapper extends Destroyable {
    private _view;
    get view(): View;
    get viewInfo(): ViewInfo;
    constructor(sceneObject: ViewCollection, viewInfo?: ViewInfo);
}
