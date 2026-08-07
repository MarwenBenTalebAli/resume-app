import { Translatable } from '../shared/translatable.model';

export class Project {
  constructor(
    public order: number,
    public dateDebut: string,
    public dateFin: string,
    public description: Translatable = {},
    public nomProjet: string = '',
    public outils: Array<string>,
    public urlCodeSorce: string,
    public urlDemoEnLigne: string,
    public urlImage: string,
  ) {}
}
