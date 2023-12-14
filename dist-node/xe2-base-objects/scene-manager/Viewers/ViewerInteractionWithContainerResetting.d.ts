import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ViewerInteraction } from "./ViewerInteraction";
export declare class ViewerInteractionWithContainerResetting extends Destroyable {
    private _interaction;
    private _container;
    constructor(_interaction: ViewerInteraction, _container: HTMLDivElement);
}
