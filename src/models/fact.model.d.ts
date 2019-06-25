import { FactInterface } from "../interfaces";
import { Rule } from ".";
export declare class Fact implements FactInterface {
    path: string;
    rule: Rule;
    pathMapping: {};
}
