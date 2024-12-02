import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificacaoService} from "../../services/notificacao.service";
import {Notificacao} from "../../interfaces/notificacao.interface";
import {retry, Subject, switchMap, takeUntil, timer} from "rxjs";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../../../chamou/src/app/services/localstorage.service";

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss'
})
export class NavSidebarComponent implements OnInit, OnDestroy {

  notificacoes!: Notificacao[];
  hasNovasNotificacoes: boolean = true;

  stopPolling = new Subject<void>();

  constructor(private readonly notificacaoService: NotificacaoService,
              private readonly router: Router,
              private readonly localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.getNotificacoes();
    this.pollingNotificacoes();
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }

  pollingNotificacoes() {
    timer(0, 5000).pipe(
      switchMap(() => this.notificacaoService.list()),
      retry(),
      takeUntil(this.stopPolling)
    ).subscribe(notificacoes => {
      console.log("polling");

      if (!notificacoes) {
        return;
      }

      if (notificacoes.length > this.notificacoes.length) {
        this.hasNovasNotificacoes = true;
      }
    })
  }

  getNotificacoes() {
    this.notificacaoService.list().subscribe(notificacoes => {
      this.notificacoes = notificacoes;
    })
  }

  handleNotificacoes() {
    this.hasNovasNotificacoes = false;
    this.getNotificacoes();
  }

  logout() {
    this.localStorageService.removeItem("chamou-token");
    this.router.navigate(['/login']);
  }
}
