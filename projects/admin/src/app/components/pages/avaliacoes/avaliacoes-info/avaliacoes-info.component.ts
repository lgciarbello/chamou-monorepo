import {Component, OnInit} from '@angular/core';
import {AvaliacaoService} from "../../../../services/avaliacao.service";
import {Avaliacao} from "../../../../interfaces/avaliacao.interface";
import {lastValueFrom} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-avaliacoes-info',
  templateUrl: './avaliacoes-info.component.html',
  styleUrl: './avaliacoes-info.component.scss'
})
export class AvaliacoesInfoComponent implements OnInit {

  avaliacao!: Avaliacao;
  mediaPontuacao!: number;

  constructor(private readonly avaliacaoService: AvaliacaoService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        lastValueFrom(this.avaliacaoService.get(params['id'])).then(avaliacao => {
          if (avaliacao) {
            this.avaliacao = avaliacao;

            const somaPontuacao = avaliacao.perguntasRespostas
              .map(src => src.resposta.valor)
              .reduce((accumulator, valor) => accumulator + valor, 0);

            this.mediaPontuacao = somaPontuacao / avaliacao.perguntasRespostas.length;
          }
        });
      }
    })
  }

}
