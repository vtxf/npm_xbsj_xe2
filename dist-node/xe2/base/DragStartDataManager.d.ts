import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { TreeItem } from ".";
export declare type DragStartData = {
    type: 'UITreeA';
    value: TreeItem;
} | {
    type: 'Other';
    value: any[];
};
export declare class DragStartDataManager extends Destroyable {
    private _data;
    constructor();
    set data(value: DragStartData | undefined);
    get data(): DragStartData | undefined;
    get dataChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[DragStartData | undefined, DragStartData | undefined]>;
}
