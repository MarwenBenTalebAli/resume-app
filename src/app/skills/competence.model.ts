import { Translatable } from '../shared/translatable.model';

export class Competence {
  constructor(
    public nomCompetence: string,
    public niveau: Translatable,
    public description: Translatable,
    public svg?: string,
  ) {}
}
