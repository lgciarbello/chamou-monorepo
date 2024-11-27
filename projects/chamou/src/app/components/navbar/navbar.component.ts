import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input({ required: true }) public titulo: string = '';
  @Input({ required: true }) public numeroMesa!: string | undefined;

  @Output('clicked') clickEmitter = new EventEmitter<any>();

  onMenuClick(event: string) {
    this.clickEmitter.emit(event);
  }

}
