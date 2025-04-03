import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tools',
  standalone: true,
  imports: [],
  templateUrl: './card-tools.component.html',
  styleUrl: './card-tools.component.css'
})
export class CardToolsComponent {

  @Input() cardNb:string = '';
  @Input() cardTitle:string = '';
  @Input() cardText:string = '';

}
