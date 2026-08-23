import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  integrantes: string[]=[
    'Gabriel Cabreira Quirino',
    'Higor Pereira Rocha',
    'Julio Cesar Viana Silva',
    'Mateo Fabian Fujimori Rodriguez',
    'Matheus Paiva Firmino',
    'Nicolas Costa Medina'
  ]
}
