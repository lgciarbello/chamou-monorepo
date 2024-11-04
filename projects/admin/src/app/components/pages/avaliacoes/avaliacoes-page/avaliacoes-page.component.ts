import {Component, OnInit} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-avaliacoes-page',
  templateUrl: './avaliacoes-page.component.html',
  styleUrl: './avaliacoes-page.component.scss'
})
export class AvaliacoesPageComponent implements OnInit{
  actionButtons: Map<string, IconProp> = new Map();

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.actionButtons.set("editar perguntas", "pen-to-square");
    this.actionButtons.set("recarregar", "arrow-rotate-left")
  }

  buttonClicked(event: string) {
    if (event === 'recarregar') {
      this.router.navigate(["."], { relativeTo: this.route});
    }
  }
}
