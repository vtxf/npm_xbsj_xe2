import { UeEventsType } from "./UeEventsType";
import { UeFuncsType } from "./UeFuncsType";
export declare type UeFuncType = {
    [Key in keyof UeFuncsType]: {
        f: Key;
        p: UeFuncsType[Key]['params'];
    };
}[keyof UeFuncsType];
export declare type UeFuncWithIdType = UeFuncType & {
    fid: string;
};
export declare type UeFuncResultType = {
    [Key in keyof UeFuncsType]: {
        f: Key;
        r: UeFuncsType[Key]['result'];
    };
}[keyof UeFuncsType];
export declare type UeFuncResultWithIdType = UeFuncResultType & {
    fid: string;
};
export declare type UeEventResultType = {
    [Key in keyof UeEventsType]: UeEventsType[Key];
}[keyof UeEventsType];
export declare type UeCallType = {
    t: 'c';
    n: number;
    tt: number;
    fs: UeFuncWithIdType[];
};
export declare type UeCallWithIdType = UeCallType & {
    callid: string;
};
export declare type UeCallAcceptedType = {
    callid: string;
    [k: string]: any;
};
export declare type UeCallResultType = {
    t: 'cr';
    frs: UeFuncResultWithIdType[];
    ers: UeEventResultType[];
};
