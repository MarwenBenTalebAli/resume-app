import { Translatable } from '../shared/translatable.model';

export class Experience {
  constructor(
    public order: number,
    public societe: string,
    public nomExperience: Translatable,
    public dateDebut: string,
    public dateFin: string,
    public adresse: string,
    public description: Translatable,
    public urlDescription: Translatable,
    public societeLogo: string,
  ) {}
}
