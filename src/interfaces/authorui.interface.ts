import {BaseInterface} from "./base.interface";

export interface AuthoruiInterface extends BaseInterface {
  userId?: string;       /* User ID */
  theme: string;         /* Light or dark */
}