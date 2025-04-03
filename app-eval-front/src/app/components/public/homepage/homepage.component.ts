import { Component } from '@angular/core';
import { CardDescriptionComponent } from "../../../card-description/card-description.component";
import { CardToolsComponent } from "../../../card-tools/card-tools.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardDescriptionComponent, CardToolsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


  /* Contenu cards descriptions */

  cardTitle1:string = "Productivité maximale";
  cardText1:string = "Un espace de travail optimisé sans distractions.";
  cardBg1:string = "close-up-young-colleagues-having-meeting.webp";

  cardTitle2:string = "Collaboration facile";
  cardText2:string = "Des outils intuitifs pour travailler en équipe.";
  cardBg2:string = "linkedin-sales-solutions-qbDiSp5IqxA-unsplash.webp";

  cardTitle3:string = "Sécurité garantie";
  cardText3:string = "Des données protégées avec un chiffrement avancé.";
  cardBg3:string = "sammyayot254-vIQDv6tUHYk-unsplash.webp";

  cardTitle4:string = "Accessible partout";
  cardText4:string = "Comptatible avec tous vos appareils sans limites.";
  cardBg4:string = "giorgio-trovato-FXbizfMpTzQ-unsplash.webp";


  /* Contenu cards outils */

  cardNb1:string = '01';
  cardOutilTitle1:string = 'Agenda intelligent';
  cardOutilText1:string = 'Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive.';

  cardNb2:string = '02';
  cardOutilTitle2:string = 'Outils de productivité';
  cardOutilText2:string = 'Connectez facilement vos applications préférées pour un flux de travail optimisé et sans interruptions.';

  cardNb3:string = '03';
  cardOutilTitle3:string = 'Communication fluide';
  cardOutilText3:string = 'Discutez avec vos collègues en temps réel via chat, messagerie et appels vidéo haute qualité.';

  cardNb4:string = '04';
  cardOutilTitle4:string = 'Tableaux de bord';
  cardOutilText4:string = 'Visualisez l’évolution de vos projets avec des graphiques et statistiques détaillés.';

  cardNb5:string = '05';
  cardOutilTitle5:string = 'Partage facile';
  cardOutilText5:string = 'Partagez rapidement vos fichiers en toute sécurité et travaillez en équipe sur des documents partagés.';


}
