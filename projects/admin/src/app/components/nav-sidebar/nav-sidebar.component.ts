import {Component, OnInit} from '@angular/core';
import {NotificacaoService} from "../../services/notificacao.service";
import {Notificacao} from "../../interfaces/notificacao.interface";

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss'
})
export class NavSidebarComponent implements OnInit {

  notificacoes!: Notificacao[];

  constructor(private readonly notificacaoService: NotificacaoService) {
  }

  ngOnInit() {

  }

  getNotificacoes() {
    this.notificacaoService.list().subscribe(notificacoes => {
      this.notificacoes = notificacoes;
    })
  }
}
