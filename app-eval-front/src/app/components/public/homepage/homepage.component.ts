import { Component } from '@angular/core';
import { CardDescriptionComponent } from "../../../card-description/card-description.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardDescriptionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  cardTitle1:string = "Productivité maximale";
  cardText1:string = "Un espace de travail optimisé sans distractions.";
  cardBg1:string = "close-up-young-colleagues-having-meeting.webp";

  cardTitle2:string = "Collaboration facile";
  cardText2:string = "Des outils intuitifs pour travailler en équipe.";
  cardBg2:string = "linkedin-sales-solutions-qbDiSp5IqxA-unsplash.webp";

  cardTitle3:string = "Sécurité garantie";
  cardText3:string = "Des données protégées avec un chiffrement avancé.";
  cardBg3:string = "close-up-young-colleagues-having-meeting.webp";

  cardTitle4:string = "Accessible partout";
  cardText4:string = "Comptatible avec tous vos appareils sans limites.";
  cardBg4:string = "close-up-young-colleagues-having-meeting.webp";

}
