import {Component, OnInit} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-itens-page',
  templateUrl: './itens-page.component.html',
  styleUrl: './itens-page.component.scss'
})
export class ItensPageComponent implements OnInit {
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
      this.router.navigate(["item"], { relativeTo: this.route});
    }
  }
}
