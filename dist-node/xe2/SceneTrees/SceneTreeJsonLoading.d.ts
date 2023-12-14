import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneTree, SceneTreeJsonValue } from '.';
export declare class SceneTreeJsonLoading extends Destroyable {
    private _sceneTree;
    private _jsonLoadingEvent;
    get jsonLoadingEvent(): Event<[{
        type: "init" | "loading" | "loaded";
    } | {
        type: "error";
        error?: string | undefined;
    }]>;
    private _setJsonProcessing;
    constructor(_sceneTree: SceneTree);
    private _setJson;
    get json(): SceneTreeJsonValue;
    set json(value: SceneTreeJsonValue);
    get jsonStr(): string;
    set jsonStr(value: string);
}
