import { Translatable } from '../shared/translatable.model';

export class Interest {
  constructor(
    public description1: Translatable = {},
    public description2: Translatable = {},
  ) {}
}
