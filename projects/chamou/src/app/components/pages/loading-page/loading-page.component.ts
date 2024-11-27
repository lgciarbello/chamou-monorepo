import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MesaService} from "../../../services/mesa.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss'
})
export class LoadingPageComponent implements AfterViewInit {

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly mesaService: MesaService,
              private readonly localStorage: LocalStorageService) {
  }

  ngAfterViewInit() {
      firstValueFrom(this.route.params)
        .then(params => {
          if (params['id']) {
            // requisição para pegar a mesa
            return firstValueFrom(this.mesaService.get(params['id']));
          }
          return null;
        })
        .then(mesa => {
          if (mesa) {
            this.localStorage.setItem('chamou.mesa', mesa);
          } else {
            this.localStorage.removeItem('chamou.mesa');
          }
        })
        .catch(err => {
          this.localStorage.removeItem('chamou.mesa');
        })
        .finally(() => this.router.navigateByUrl('/'));
  }
}
