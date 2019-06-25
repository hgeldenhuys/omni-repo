import { RuleInterface } from "../interfaces";
import { Base } from ".";
export declare class Rule extends Base implements RuleInterface {
    static metadataId: number;
    name?: string;
    description: string;
    label: string;
    sampleValue: string;
    statedAs?: string;
    dataType: string;
    constructor(data?: Partial<Rule>);
}
