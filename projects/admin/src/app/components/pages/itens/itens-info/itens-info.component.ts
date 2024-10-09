import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../../../../services/categoria.service";
import {Observable} from "rxjs";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModeloRequest} from "../../../../interfaces/item-modelo.request.interface";
import {IdNameMap} from "../../../../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {ItemModeloService} from "../../../../services/item-modelo.service";

@Component({
  selector: 'app-itens-info',
  templateUrl: './itens-info.component.html',
  styleUrl: './itens-info.component.scss'
})
export class ItensInfoComponent implements OnInit {
  itensForm!: FormGroup;
  categorias$!: Observable<CategoriaResponse[]>;

  constructor(private readonly categoriaService: CategoriaService,
              private readonly itemModeloService: ItemModeloService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {
    this.initForm()
    this.categorias$ = this.categoriaService.list();
  }

  initForm() {
    this.itensForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl(null, Validators.required),
      descricao: new FormControl('', Validators.required),
      preco: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.itensForm.valid) {
      return;
    }

    const itemModeloRequest: ItemModeloRequest = {
      nome: this.itensForm.value.nome,
      categoria: {
        id: this.itensForm.value.categoria.id,
        name: this.itensForm.value.categoria.nome
      } as IdNameMap,
      descricao: this.itensForm.value.descricao,
      preco: this.itensForm.value.preco
    }

    console.log(itemModeloRequest);

    this.itemModeloService.create(itemModeloRequest).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (error) => {
          console.log(error);
          //TODO implements toast
      }

    });
  }
}
