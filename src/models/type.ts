export interface Properties { 
    libelle:string;
    codeclassification:string;
    uniteminimalecollecte:string;
    gid:string;
}

export interface Geometry {
   type:string;
   coordinates:Array<Array<Array<string>>>;
}
