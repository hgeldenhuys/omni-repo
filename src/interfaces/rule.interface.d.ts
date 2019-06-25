import { BaseInterface } from "./base.interface";
export interface RuleInterface extends BaseInterface {
    name?: string;
    description: string;
    label: string;
    sampleValue: string;
    statedAs?: string;
    dataType: string;
}
