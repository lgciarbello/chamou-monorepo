import {Component, OnInit} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pedidos-page',
  templateUrl: './pedidos-page.component.html',
  styleUrl: './pedidos-page.component.scss'
})
export class PedidosPageComponent implements OnInit {

  actionButtons: Map<string, IconProp> = new Map();

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.actionButtons.set("adicionar", "plus");
    this.actionButtons.set("historico", "clock-rotate-left")
    this.actionButtons.set("recarregar", "arrow-rotate-left")
  }

  buttonClicked(event: string) {
    if (event === 'adicionar') {
      this.router.navigate(["pedido"], { relativeTo: this.route});
    }

    if (event === 'recarregar') {
      this.router.navigate(["."], { relativeTo: this.route});
    }

    if (event === 'historico') {
      this.router.navigate(["historico"], { relativeTo: this.route});
    }
  }

}
