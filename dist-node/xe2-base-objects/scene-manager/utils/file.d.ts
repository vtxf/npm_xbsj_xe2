export declare type FileHandleType = {
    readonly kind: string;
    readonly name: string;
};
export declare function getOpenFileHandle(type?: 'txt' | 'js' | 'json'): Promise<FileHandleType | undefined>;
export declare function getSaveFileHandle(type?: 'txt' | 'js' | 'json', suggestedName?: string): Promise<FileHandleType | undefined>;
export declare function requestWriteAccess(handle: FileHandleType): Promise<boolean>;
export declare function getTextFromFile(handle: FileHandleType): Promise<string | undefined>;
export declare function saveFile(handle: FileHandleType, str: string): Promise<void>;
