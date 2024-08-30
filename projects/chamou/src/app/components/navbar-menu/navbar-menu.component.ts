import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss'
})
export class NavbarMenuComponent {
  lastModalOpened!: HTMLDialogElement | null;

  handleModalVisibility(eventValue: string) {
    if (this.lastModalOpened) {
      this.lastModalOpened.close();
    }

    const dialog = <HTMLDialogElement>document.getElementById(eventValue);

    if (!dialog) {
      return;
    }

    if (dialog.open) {
      dialog.close();
      this.lastModalOpened = null;
    } else {
      dialog.showModal();
      this.lastModalOpened = dialog;
    }

  }
}
