import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {
  @Input({ required: true }) public quantidadeItens: number = 0.00;

}
