import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.scss'
})
export class QuantitySelectorComponent {
  @Input({ required: true }) quantity: number = 0;
  @Output() quantityChange = new EventEmitter<number>();

  onPlusPress() {
    this.quantity += 1;
    this.emitQuantity();
  }

  onMinusPress() {
    if (this.quantity > 0) {
      this.quantity -= 1;
      this.emitQuantity();
    }
  }

  private emitQuantity() {
    this.quantityChange.emit(this.quantity);
  }

}
