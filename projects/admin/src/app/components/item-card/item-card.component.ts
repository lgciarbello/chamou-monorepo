import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) preco!: number;
  @Input({ required: true }) categoria!: string;
  @Input() imagem!: string;

  @Output() cardClicked = new EventEmitter<string>();

  onCardClick() {
    this.cardClicked.emit(this.id);
  }

}
