import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public quantidade: number = 0.00;
  @Input() public informacoes: string = '';
  @Input() public linkImagem: string = "/assets/img/default_banner.png";


}
