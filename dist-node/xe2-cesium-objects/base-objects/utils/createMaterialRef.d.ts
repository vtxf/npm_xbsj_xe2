import { CzmMaterialJsonType } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
import * as Cesium from 'cesium';
export declare function createMaterialFromJson(materialJson: CzmMaterialJsonType): Cesium.Material;
export declare function updateMaterialFromJson(material: Cesium.Material, materialJson: CzmMaterialJsonType): void;
export declare function createMaterialRef(reactMaterialParams: ReactParamsType<CzmMaterialJsonType | undefined>, defaultMaterialJson?: CzmMaterialJsonType): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<Cesium.Material | undefined>;
