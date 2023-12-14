import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectsManager } from "./SceneObjectsManager";
import { Viewer } from "./Viewer";
export declare class ViewersManager extends Destroyable {
    private _sceneObjectsManager;
    private _viewers;
    get viewers(): Readonly<Set<Viewer>>;
    get viewersAsArray(): readonly Viewer[];
    private _viewersChanged;
    get viewersChanged(): Event<[toDels: Viewer[], toAdds: Viewer[]]>;
    private _defaultContainerReact;
    get defaultContainer(): HTMLDivElement | undefined;
    set defaultContainer(value: HTMLDivElement | undefined);
    get defaultContainerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[HTMLDivElement | undefined, HTMLDivElement | undefined]>;
    set defaultContainerOrId(value: HTMLDivElement | string | undefined);
    constructor(_sceneObjectsManager: SceneObjectsManager);
}
