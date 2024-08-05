import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss'
})
export class ItemModalComponent {
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public descricao: string = '';
  @Input({required: true}) public quantidade: number = 0.00;
  @Input() public imageLink: string = '/assets/img/bolinho.jpg';
}

