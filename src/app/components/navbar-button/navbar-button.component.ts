import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrl: './navbar-button.component.scss'
})
export class NavbarButtonComponent {
  @Input({required: true}) public iconName: any = '';
  @Input({required: true}) public titulo: string = '';

  @Output("clicked") click = new EventEmitter<string>();

  onClick() {
    console.log(this.iconName, "click");

    const normalizedTitle = this.titulo.normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

    this.click.emit(normalizedTitle);
  }
}
