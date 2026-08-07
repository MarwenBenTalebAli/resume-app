import { Translatable } from '../shared/translatable.model';

export class Formation {
  constructor(
    public nomFormation: Translatable = {},
    public societe: string = '',
    public dateDebut: string = '',
    public dateFin: string = '',
    public adresse: string = '',
    public siteWeb: string = '',
    public urlImage: string = '',
  ) {}
}
