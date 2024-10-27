import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComandaList} from "../../../interfaces/comanda-list.interface";

@Component({
  selector: 'app-mesa-comanda-card',
  templateUrl: './mesa-comanda-card.component.html',
  styleUrl: './mesa-comanda-card.component.scss'
})
export class MesaComandaCardComponent {
  @Input({ required: true }) comanda!: ComandaList;

  @Output('clicked') public click = new EventEmitter<string>();

  onCardClick() {
    this.click.emit(this.comanda.id);
  }
}
