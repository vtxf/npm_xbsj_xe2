import { AttributesType, IndexType } from "xbsj-xe2/dist-node/xe2-base-cesium";
import { AttributesJsonType, IndexJsonType } from "./types";
export declare function attributesToAttributesJson(attributes: AttributesType): AttributesJsonType;
export declare function attributesJsonToAttributes(attributesJson: AttributesJsonType): AttributesType;
export declare function indexToIndexJson(indexTypedArray: IndexType): IndexJsonType;
export declare function indexJsonToIndex(indexJson: IndexJsonType): Uint8Array | Uint16Array | Uint32Array;
