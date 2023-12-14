import { PositionEditingConfigType, PositionsEditingConfigType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ProjectManager } from ".";
export declare type ProjectConfigType = {
    positionsEditing: PositionsEditingConfigType;
    positionEditing: PositionEditingConfigType;
};
export declare class ProjectConfig extends Destroyable {
    private _projectManager;
    private _settings;
    get settings(): ProjectConfigType;
    set settings(value: ProjectConfigType);
    get settingsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ProjectConfigType, ProjectConfigType]>;
    get projectManager(): ProjectManager;
    constructor(_projectManager: ProjectManager);
}
