import { Translatable } from '../shared/translatable.model';

export class User {
  constructor(
    public adresse: Translatable = {},
    public detail: Translatable = {},
    public email: string = '',
    public cvUrl: Translatable = {},
    public githubUrl: string = '',
    public linkedinUrl: string = '',
    public nom: string = '',
    public numero: string[] = [],
    public prenom: string = '',
    public imageFile?: File,
    public imageURL?: string,
  ) {}
}
