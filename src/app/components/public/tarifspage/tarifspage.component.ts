import { Component } from '@angular/core';
import { CardTarifComponent } from "../../card-tarif/card-tarif.component";

@Component({
    selector: 'app-tarifspage',
    imports: [CardTarifComponent],
    templateUrl: './tarifspage.component.html',
    styleUrl: './tarifspage.component.css'
})
export class TarifspageComponent {

  /* List tarifs et details */ 

  type1:string = "basic";
  price1:string = "15";
  description1:string = "Pour les indépendants";
  price1Detail1:string = "Accès aux outils essentiels";
  price1Detail2:string = "Messagerie instantanée";
  price1Detail3:string = "Stockage limité";
  price1Detail4:string = "Support standard";
  price1Detail5:string = "Accès mobile";

  type2:string = "pro";
  price2:string = "25";
  description2:string = "Pour les équipes en croissances";
  price2Detail1:string = "Réunions vidéo HD";
  price2Detail2:string = "Partage de fichiers illimité";
  price2Detail3:string = "Intégrations avancées";
  price2Detail4:string = "Sécurité renforcée";
  price2Detail5:string = "Assistance prioritaire";


  type3:string = "elite";
  price3:string = "30";
  description3:string = "Expérience ultime";
  price3Detail1:string = "Espaces personnalisables";
  price3Detail2:string = "Intelligence artificielle";
  price3Detail3:string = "Collaboration avancée";
  price3Detail4:string = "Accès VIP";
  price3Detail5:string = "Support 24/7";


}
