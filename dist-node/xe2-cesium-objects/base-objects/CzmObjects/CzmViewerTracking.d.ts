import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ObjResettingWithEvent, SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmViewer } from "../../core";
declare class Tracking extends Destroyable {
    constructor(viewer0: CzmViewer, viewer1: CzmViewer);
}
declare class DoubleTracking extends Destroyable {
    private _viewer0;
    private _viewer1;
    private _t0;
    private _t1;
    constructor(_viewer0: CzmViewer, _viewer1: CzmViewer);
}
export declare class CzmViewerTracking extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        viewer0Id: string | undefined;
        viewer1Id: string | undefined;
        double: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _viewer0;
    get viewer0(): CzmViewer | undefined;
    get viewer0Changed(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[CzmViewer | undefined, CzmViewer | undefined]>;
    set viewer0(value: CzmViewer | undefined);
    private _viewer1;
    get viewer1(): CzmViewer | undefined;
    get viewer1Changed(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[CzmViewer | undefined, CzmViewer | undefined]>;
    set viewer1(value: CzmViewer | undefined);
    static defaults: {
        enabled: boolean;
        viewer0Id: string;
        viewer1Id: string;
        double: boolean;
        viewerTagsEnums: [string, string][];
    };
    private _vvdEvent;
    private _vvdResetting;
    get vvdResetting(): ObjResettingWithEvent<Tracking | DoubleTracking, import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmViewerTracking {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        viewer0Id: string | undefined;
        viewer1Id: string | undefined;
        double: boolean | undefined;
    };
}
export interface CzmViewerTracking extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmViewerTracking.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmViewerTracking.createDefaultProps> & {
    type: string;
}>;
export {};
