import {Component, OnInit} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comandas-page',
  templateUrl: './comandas-page.component.html',
  styleUrl: './comandas-page.component.scss'
})
export class ComandasPageComponent implements OnInit{

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
      this.router.navigate(["comanda"], { relativeTo: this.route});
    }

    if (event === 'recarregar') {
      this.router.navigate(["."], { relativeTo: this.route});
    }

    if (event === 'historico') {
      this.router.navigate(["historico"], { relativeTo: this.route});
    }
  }

}
