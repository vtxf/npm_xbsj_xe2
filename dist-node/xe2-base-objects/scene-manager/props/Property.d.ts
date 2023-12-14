import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare abstract class Property extends Destroyable {
    private _name;
    private _description;
    static _accumId: number;
    private _id;
    constructor(_name: string, _description: string);
    get id(): number;
    get name(): string;
    get description(): string;
    abstract get type(): string;
}
