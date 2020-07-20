export declare type BuildConditionOutput = {
    clause: string;
    value?: any;
    parameters?: any;
};
export declare const buildCondition: (alias: string, fieldName: string, operator: string, value: any, relation: boolean, seq: number) => BuildConditionOutput;
