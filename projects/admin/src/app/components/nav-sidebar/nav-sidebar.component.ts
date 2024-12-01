import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificacaoService} from "../../services/notificacao.service";
import {Notificacao} from "../../interfaces/notificacao.interface";
import {retry, Subject, switchMap, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss'
})
export class NavSidebarComponent implements OnInit, OnDestroy {

  notificacoes!: Notificacao[];
  hasNovasNotificacoes: boolean = true;

  stopPolling = new Subject<void>();

  constructor(private readonly notificacaoService: NotificacaoService) {
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
}
