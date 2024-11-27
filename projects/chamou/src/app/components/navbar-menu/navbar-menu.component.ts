import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss'
})
export class NavbarMenuComponent {
  @Input({ required: true }) hasMesa!: any;

  @Output() clicked = new EventEmitter<string>();

  openModal(event: string) {
    this.clicked.emit(event);
  }
}
