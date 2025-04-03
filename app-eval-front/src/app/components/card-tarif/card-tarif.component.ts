import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tarif',
  standalone: true,
  imports: [],
  templateUrl: './card-tarif.component.html',
  styleUrl: './card-tarif.component.css'
})
export class CardTarifComponent {

  @Input() tarifType:string = '';
  @Input() tarifPrice:string = '';
  @Input() tarifDescription:string = '';
  @Input() tarifDetail1:string = '';
  @Input() tarifDetail2:string = '';
  @Input() tarifDetail3:string = '';
  @Input() tarifDetail4:string = '';
  @Input() tarifDetail5:string = '';
  
}
