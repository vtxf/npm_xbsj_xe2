declare type NavigationModeType = 'Map' | 'Walk' | 'Line' | 'UserDefined';
/**
 * 漫游模式切换
 * @param {NavigationModeType} Mode 漫游模式
 *
 * Map: 地图模式(正常漫游)
 * Walk: 步行模式(固定高度)
 * Line: 路线模式(沿路线漫游)
 * UserDefined: 自定义模式(沿自定义路径漫游)
 *
 */
export declare function getModeParam(Mode: NavigationModeType, Position?: [number, number, number], idOrPath?: string, Speed?: number, HeightOffset?: number, Loop?: boolean): any;
export {};
