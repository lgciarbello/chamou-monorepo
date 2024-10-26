import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {MesaService} from "../../../../services/mesa.service";
import {MesaResponse} from "../../../../interfaces/mesa-response.interface";
import {CategoriaRequest} from "../../../../interfaces/categoria-request.interface";
import {MesaRequest} from "../../../../interfaces/mesa-request.interface";

@Component({
  selector: 'app-mesas-edit',
  templateUrl: './mesas-edit.component.html',
  styleUrl: './mesas-edit.component.scss'
})
export class MesasEditComponent implements OnInit, AfterViewInit {
  title: string = "Nova Mesa";
  backButtonTitle: string = "Voltar para Mesas";
  backRoute: string = "..";
  mesaId!: string;
  mesasForm!: FormGroup;

  constructor(private readonly mesaService: MesaService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.title = "Editar Mesa"
        this.backButtonTitle = "Voltar para Mesa"
        this.mesaId = params['id'];
        lastValueFrom(this.mesaService.get(this.mesaId)).then(mesa => {
          if (mesa) {
            this.setForm(mesa);
          }
        })
      }
    })
  }

  initForm() {
    this.mesasForm = new FormGroup({
      numero: new FormControl('', [Validators.required])
    });
  }

  setForm(mesa: MesaResponse) {
    this.mesasForm.get('numero')?.setValue(mesa.numero);
  }

  onSubmit() {
    if (!this.mesasForm.valid) {
      return;
    }

    const mesaRequest: MesaRequest = {
      numero: this.mesasForm.value.numero,
    } as MesaRequest;

    console.log(mesaRequest);

    if (!this.mesaId) {
      this.createMesa(mesaRequest);
    } else {
      mesaRequest.id = this.mesaId;
      this.updateMesa(mesaRequest);
    }
  }

  createMesa(mesaRequest: MesaRequest) {
    this.mesaService.create(mesaRequest).subscribe({
      next: (response) => {
        console.log(response);
        //TODO implements toast
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (error) => {
        console.log(error);
        //TODO implements toast
      }
    })
  }

  updateMesa(mesaRequest: MesaRequest) {
    this.mesaService.update(mesaRequest).subscribe({
      next: (response) => {
        console.log(response);
        //TODO implements toast
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (error) => {
        console.log(error);
        //TODO implements toast
      }

    })
  }
}
