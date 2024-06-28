export class User {
  constructor(
    public adresse: string,
    public detail: string,
    public email: string,
    public cvUrl: string,
    public githubUrl: string,
    public linkedinUrl: string,
    public nom: string,
    public numero: string,
    public prenom: string,
    public imageFile?: File,
    public imageURL?: string
  ) {}
}
