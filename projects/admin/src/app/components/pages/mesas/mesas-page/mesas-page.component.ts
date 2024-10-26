import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-mesas-page',
  templateUrl: './mesas-page.component.html',
  styleUrl: './mesas-page.component.scss'
})
export class MesasPageComponent implements OnInit{

  actionButtons: Map<string, IconProp> = new Map();

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.actionButtons.set("adicionar", "plus");
    this.actionButtons.set("recarregar", "arrow-rotate-left")
  }

  buttonClicked(event: string) {
    if (event === 'adicionar') {
      this.router.navigate(["mesa"], { relativeTo: this.route});
    }

    if (event === 'recarregar') {
      this.router.navigate(["."], { relativeTo: this.route});
    }
  }

}
