import {Component, EventEmitter, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss'
})
export class NavbarMenuComponent {
  lastModalOpened!: HTMLDialogElement | null;

  @Output() clicked = new EventEmitter<string>();

  constructor(private readonly _modalService: ModalService) {}

  openModal(event: string) {
    this.clicked.emit(event);
  }
}
