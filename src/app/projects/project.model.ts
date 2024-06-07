export class Project {
    constructor(
        public order: number,
        public dateDebut: string,
        public dateFin: string,
        public description: string,
        public nomProjet: string,
        public outils: Array<string>,
        public urlCodeSorce: string,
        public urlDemoEnLigne: string,
        public urlImage: string
    ) { }
}

