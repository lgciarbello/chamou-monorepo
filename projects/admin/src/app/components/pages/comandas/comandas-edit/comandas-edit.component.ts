import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {lastValueFrom, Observable} from "rxjs";
import {ComandaService} from "../../../../services/comanda.service";
import {ComandaList} from "../../../../interfaces/comanda-list.interface";
import {ComandaRequest} from "../../../../interfaces/comanda-request.interface";
import {MesaList} from "../../../../interfaces/mesa-list.interface";
import {MesaService} from "../../../../services/mesa.service";

@Component({
  selector: 'app-comandas-edit',
  templateUrl: './comandas-edit.component.html',
  styleUrl: './comandas-edit.component.scss'
})
export class ComandasEditComponent implements OnInit, AfterViewInit {
  title: string = "Nova Comanda";
  backButtonTitle = "Voltar para Comandas"
  backRoute: string = "..";
  comandaId!: string;
  comandasForm!: FormGroup;
  mesas$!: Observable<MesaList[]>;

  constructor(private readonly comandaService: ComandaService,
              private readonly mesaService: MesaService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {
    this.initForm();
    this.mesas$ = this.mesaService.list();

    //TODO pegar id do path da rota
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.title = "Editar Comanda"
        this.backButtonTitle = "Voltar para Comanda"
        this.comandaId = params['id'];
        lastValueFrom(this.comandaService.getForEdit(this.comandaId)).then(comanda => {
          if (comanda) {
            this.setForm(comanda);
          }
        })
      }
    });
  }

  initForm() {
    this.comandasForm = new FormGroup({
      cliente: new FormControl('', Validators.required),
      mesa: new FormControl(null, Validators.required)
    });
  }

  setForm(comanda: ComandaList)  {
    const mesa: MesaList = {
      id: comanda.mesa.id,
      numero: comanda.mesa.name
    } as MesaList;

    this.comandasForm.get('cliente')?.setValue(comanda.cliente);
    this.comandasForm.get('mesa')?.setValue(mesa);

    console.log(comanda);
  }

  onSubmit() {
    if (!this.comandasForm.valid) {
      return;
    }

    const comandaRequest: ComandaRequest = {
      cliente: this.comandasForm.value.cliente,
      mesa: {
        id: this.comandasForm.value.mesa.id,
        name: this.comandasForm.value.mesa.numero
      },
    };

    console.log(comandaRequest);

    if (!this.comandaId) {
      this.createItem(comandaRequest);
    } else {
      comandaRequest.id = this.comandaId;

      this.updateItem(comandaRequest);
    }
  }

  private createItem(request: ComandaRequest) {
    this.comandaService.create(request).subscribe({
      next: (response) => {
        console.log(response);
        //TODO implements toast
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (error) => {
        console.log(error);
        //TODO implements toast
      }

    });
  }

  private updateItem(request: ComandaRequest) {
    this.comandaService.update(request).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['..'], { relativeTo: this.route });
        //TODO implements toast
      },
      error: (error) => {
        console.log(error);
        //TODO implements toast
      }

    });
  }

}
