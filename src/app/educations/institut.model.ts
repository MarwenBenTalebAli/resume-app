import { Translatable } from '../shared/translatable.model';

export class Institut {
  constructor(
    public nom: string,
    public diplome: Translatable,
    public dateDebut: string,
    public dateFin: string,
    public adresse: string,
    public details: Translatable,
  ) {}
}
