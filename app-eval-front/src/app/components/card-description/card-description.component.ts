import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css'
})
export class CardDescriptionComponent {
  @Input() cardTitle:string = '';
  @Input() cardText:string = '';
  @Input() background:string = '';
}
