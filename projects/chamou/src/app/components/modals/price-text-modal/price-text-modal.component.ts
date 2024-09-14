import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-text-modal',
  templateUrl: './price-text-modal.component.html',
  styleUrl: './price-text-modal.component.scss'
})
export class PriceTextModalComponent {
  @Input({ required: true }) public titulo!: string;
  @Input({ required: true }) public preco!: number;
  @Input() public defaultCloseObject: any;

}
