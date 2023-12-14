import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { Viewer } from ".";
export declare class UseDefaultStatusDivRegister extends Destroyable {
    static defaults: {
        load: string;
        succeed: string;
        failure: string;
    };
    constructor(viewer: Viewer);
}
