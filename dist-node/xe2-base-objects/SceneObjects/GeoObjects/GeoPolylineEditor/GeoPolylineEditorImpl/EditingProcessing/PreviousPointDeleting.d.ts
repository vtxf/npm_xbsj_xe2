import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { EditingProcessing } from ".";
import { AddingEditingProcessing } from "./AddingEditingProcessing";
export declare function deletePreviousPoint(editing: EditingProcessing, currentIndex: number): boolean;
export declare class PreviousPointDeleting extends Destroyable {
    private _adding;
    private _overEvent;
    get overEvent(): Event<[boolean]>;
    private _doEvent;
    do(): void;
    constructor(_adding: AddingEditingProcessing, currentIndex: number);
}
