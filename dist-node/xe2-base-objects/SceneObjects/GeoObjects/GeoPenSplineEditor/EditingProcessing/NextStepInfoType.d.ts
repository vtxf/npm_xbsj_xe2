import { PenSplineVertex } from '../PenSplineVertex';
export declare type NextStepInfoType = {
    type: 'over';
} | {
    type: 'adding';
    positionRef: PenSplineVertex | undefined;
};
