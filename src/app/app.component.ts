import { BehaviorSubject, combineLatest, Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { Component, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stateSubj=new BehaviorSubject({
  });

  readonly stateObs=this.stateSubj.asObservable();

  constructor(private http:HttpClient){}

  title = 'api';

  @Input() code:String = "39913469100191";

  test!: any;
  test2:any;
  clicked:boolean = false;

  public getCode() {
    return this.code;
  }
  public setcode(valeur:String) {
    this.code = valeur;
  }

  setTest(){
    this.test=this.getApi("ok");
    this.clicked=!this.clicked;
  }

  url:String="";

  tableau:any[] = [];

  public async getApi(code:String){
    const url = "https://api.insee.fr/entreprises/sirene/V3/siret/" + this.code;

    const rawResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer f9566632-8afa-3455-9514-e4c776b731ea'
      }
    });
    const content =(await rawResponse.text()).split("\"");
    console.log(content);
    this.newTab=content;
    this.setElements(content);
    return(content);

  }



  denomination:String = "ERREUR" ;
  categorie:String = "ERREUR" ;
  dateCreation:String = "ERREUR" ;
  numeroVoie:String = "ERREUR" ;
  typeVoie:String = "ERREUR" ;
  libellevoie:String = "ERREUR" ;
  codePostal:String = "ERREUR" ;
  commune:String = "ERREUR" ;
  siren:String = "ERREUR" ;
  siret:String = "ERREUR" ;

  newTab: String[]=[];
  setElements(tabb:String[]){
    /*
    parcourir tout le tableau 'test' a laa recherche des éléments interessants
    et prendre l'element à i+2
    */
    this.newTab = this.test;
    let dejafait:boolean = false;
    for(let i =0;i < tabb.length;i++){
      switch(tabb[i]){
        case 'denominationUsuelleEtablissement' :
          if(!dejafait){this.denomination = tabb[i+2];dejafait=true;};
          console.log("wtf")
          break;
        case 'categorieEntreprise' :
          this.categorie= tabb[i+2];
          break;
        case 'dateCreationEtablissement' :
          this.dateCreation= tabb[i+2];
          break;
        case 'numeroVoieEtablissement' :
          this.numeroVoie= tabb[i+2];
          break;
        case 'typeVoieEtablissement' :
          this.typeVoie= tabb[i+2];
          break;
        case 'libelleVoieEtablissement' :
          this.libellevoie= tabb[i+2];
          break;
        case 'codePostalEtablissement' :
          this.codePostal= tabb[i+2];
          break;
        case 'libelleCommuneEtablissement':
          this.commune= tabb[i+2];
          break;
        case 'siren':
          this.siren= tabb[i+2];
          break;
        case 'siret':
          this.siret= tabb[i+2];
          break;
      };
    }
    console.log(tabb.length);
    return(tabb.length);
  }


}
