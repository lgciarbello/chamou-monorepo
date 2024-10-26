import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MesaList} from "../../../interfaces/mesa-list.interface";

@Component({
  selector: 'app-mesa-card',
  templateUrl: './mesa-card.component.html',
  styleUrl: './mesa-card.component.scss'
})
export class MesaCardComponent {
  @Input({ required: true }) public mesa!: MesaList;

  @Output('cardClicked') clicked = new EventEmitter<string>();

  onCardClick() {
    this.clicked.emit(this.mesa.id);
  }
}
