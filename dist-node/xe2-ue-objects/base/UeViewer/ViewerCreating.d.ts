import { PickedInfo } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, JsonValue } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeViewer } from "./index";
export declare class UePickedInfo extends PickedInfo {
    id?: string | undefined;
    position?: [number, number, number] | undefined;
    screenPosition?: [number, number] | undefined;
    actorTags?: string[] | undefined;
    className?: string | undefined;
    re?: JsonValue;
    parentInfo?: {
        name?: string | undefined;
        className?: string | undefined;
        actorTags?: string[] | undefined;
    }[] | undefined;
    feature?: {
        [k: string]: any;
    } | undefined;
    constructor(id?: string | undefined, position?: [number, number, number] | undefined, screenPosition?: [number, number] | undefined, actorTags?: string[] | undefined, className?: string | undefined, re?: JsonValue, parentInfo?: {
        name?: string | undefined;
        className?: string | undefined;
        actorTags?: string[] | undefined;
    }[] | undefined, feature?: {
        [k: string]: any;
    } | undefined, childPickedInfo?: PickedInfo);
}
export declare class ViewerCreating extends Destroyable {
    constructor(container: HTMLDivElement, uri: string | undefined, ueViewer: UeViewer);
}
