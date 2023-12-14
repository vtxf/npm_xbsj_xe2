import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { EditingProcessing } from ".";
export declare class AddingEditingProcessing extends Destroyable {
    private _editing;
    get editing(): EditingProcessing;
    private _overEvent;
    get overEvent(): Event<[]>;
    private _deletePreviousPointEvent;
    deletePreviousPoint(): void;
    private _cancelEvent;
    cancel(): void;
    constructor(_editing: EditingProcessing, index?: number);
}
