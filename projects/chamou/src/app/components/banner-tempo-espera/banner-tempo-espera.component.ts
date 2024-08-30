import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-tempo-espera',
  templateUrl: './banner-tempo-espera.component.html',
  styleUrl: './banner-tempo-espera.component.scss'
})
export class BannerTempoEsperaComponent {
  @Input({ required: true }) public numeroPedido: number = 0;
  @Input({ required: true }) public tempoEspera: number = 0;
}
