import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-preco-total',
  templateUrl: './banner-preco-total.component.html',
  styleUrl: './banner-preco-total.component.scss'
})
export class BannerPrecoTotalComponent {
  @Input({ required: true }) public preco: number = 0.00;

}
