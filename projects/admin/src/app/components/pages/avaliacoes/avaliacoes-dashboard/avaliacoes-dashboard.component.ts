import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AvaliacaoService} from "../../../../services/avaliacao.service";
import {AvaliacaoTotal} from "../../../../interfaces/avaliacao-total.interface";
import {PerguntaPontuacao} from "../../../../interfaces/pergunta-pontuacao.interface";
import {AvaliacaoCliente} from "../../../../interfaces/avaliacao-cliente.interface";

@Component({
  selector: 'app-avaliacoes-dashboard',
  templateUrl: './avaliacoes-dashboard.component.html',
  styleUrl: './avaliacoes-dashboard.component.scss'
})
export class AvaliacoesDashboardComponent implements OnInit {

  avaliacaoTotal!: AvaliacaoTotal;
  perguntaPontuacoes!: PerguntaPontuacao[];
  avaliacoes!: AvaliacaoCliente[];

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly avaliacaoService: AvaliacaoService) { }

  ngOnInit() {
    this.avaliacaoService.mediaTotal().subscribe(avaliacaoTotal => {
      this.avaliacaoTotal = avaliacaoTotal;
    });

    this.avaliacaoService.pontuacaoPerguntas().subscribe(avaliacaoPerguntas => {
      this.perguntaPontuacoes = avaliacaoPerguntas;
    });

    this.avaliacaoService.list().subscribe(avaliacoes => {
      this.avaliacoes = avaliacoes;
    })
  }
}
