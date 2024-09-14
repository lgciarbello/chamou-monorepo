import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-text-modal',
  templateUrl: './button-text-modal.component.html',
  styleUrl: './button-text-modal.component.scss'
})
export class ButtonTextModalComponent {
  @Input({ required: true }) public titulo!: string;
  @Input({ required: true }) public preco!: number;
  @Input({ required: true }) public tituloBotao!: string;
  @Input() public defaultCloseObject: any;

  @Output('mainButtonClicked') mainButtonClick = new EventEmitter<any>();

  onButtonClick() {
    this.mainButtonClick.emit();
  }
}
