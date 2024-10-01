import {Component, OnInit} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-itens-page',
  templateUrl: './itens-page.component.html',
  styleUrl: './itens-page.component.scss'
})
export class ItensPageComponent implements OnInit {
  actionButtons: Map<string, IconProp> = new Map();

  ngOnInit() {
    this.actionButtons.set("adicionar", "plus");
    this.actionButtons.set("recarregar", "arrow-rotate-left")
  }

  buttonClicked(event: string) {
    console.log(event);
  }
}
