import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {
  @Input({ required: true }) public quantidadeItens: number = 0.00;

  @Output('clicked') clickEmitter = new EventEmitter<any>();

  onCartClick(event: MouseEvent) {
    this.clickEmitter.emit();
  }

}
