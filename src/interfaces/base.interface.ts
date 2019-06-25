export interface BaseInterface {
  id: number;              /* The Id of the document */
  createdDate: number;     /* Created date in Unix time */
  changedDate?: number;    /* Changed date in Unix time */
  removed?: boolean;       /* Removed flag. Used for soft deletes */
  documentation?: string;  /* Documentation */
}