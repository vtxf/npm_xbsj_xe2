import { FeatureLike } from 'ol/Feature';
import Layer from 'ol/layer/Layer';
import OlMap from 'ol/Map.js';
import { ContainerViewerInteraction, PickedInfo } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { OpenLayersViewer } from "./index";
export declare function getInteractionFromMap(map: OlMap): ContainerViewerInteraction | undefined;
export declare function getCaptureInteractionFromMap(map: OlMap): ContainerViewerInteraction | undefined;
export declare function getAttachingFromMap(map: OlMap): OlMapAttaching | undefined;
export declare function setAttachingFromMap(map: OlMap, olMapAttaching: OlMapAttaching | undefined): void;
export declare class OlPickedInfo extends PickedInfo {
    feature: FeatureLike;
    layer: Layer;
    constructor(feature: FeatureLike, layer: Layer, childPickedInfo?: PickedInfo);
}
declare class OlMapPickingManager extends Destroyable {
    private _map;
    private _openLayersViewer;
    constructor(_map: OlMap, _openLayersViewer: OpenLayersViewer);
    pick(windowPosition: [left: number, top: number], attachedInfo?: any): OlPickedInfo | undefined;
}
export declare class OlMapAttaching extends Destroyable {
    private _map;
    private _openLayersViewer;
    private _olMapPickingManager;
    get olMapPickingManager(): OlMapPickingManager;
    constructor(_map: OlMap, _openLayersViewer: OpenLayersViewer);
}
export declare class OlMapCreating extends Destroyable {
    constructor(container: HTMLDivElement, openLayersViewer: OpenLayersViewer);
}
export {};
