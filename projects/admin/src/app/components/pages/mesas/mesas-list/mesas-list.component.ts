import {Component, OnInit} from '@angular/core';
import {MesaService} from "../../../../services/mesa.service";
import {async, Observable} from "rxjs";
import {MesaList} from "../../../../interfaces/mesa-list.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mesas-list',
  templateUrl: './mesas-list.component.html',
  styleUrl: './mesas-list.component.scss'
})
export class MesasListComponent implements OnInit{

  mesas$!: Observable<MesaList[]>;

  constructor(private readonly mesaService: MesaService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { }

  ngOnInit() {
    this.mesas$ = this.mesaService.list();
  }

  onMesaClick(event: string) {
    this.router.navigate(["mesa", event], { relativeTo: this.route });
  }

}
