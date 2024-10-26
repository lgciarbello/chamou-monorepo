import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComandaResponse} from "../../../interfaces/comanda-response.interface";

@Component({
  selector: 'app-mesa-comanda-card',
  templateUrl: './mesa-comanda-card.component.html',
  styleUrl: './mesa-comanda-card.component.scss'
})
export class MesaComandaCardComponent {
  @Input({ required: true }) comanda!: ComandaResponse;

  @Output('clicked') public click = new EventEmitter<string>();

  onCardClick() {
    this.click.emit(this.comanda.id);
  }
}
