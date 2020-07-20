import { ClassType } from 'type-graphql';
export default function Partial<TClassType extends ClassType>(BaseClass: TClassType): {
    new (...args: any[]): {
        [x: string]: any;
    };
} & TClassType;
