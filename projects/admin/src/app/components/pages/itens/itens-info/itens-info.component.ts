import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../../../../services/categoria.service";
import {last, lastValueFrom, Observable} from "rxjs";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModeloRequest} from "../../../../interfaces/item-modelo.request.interface";
import {IdNameMap} from "../../../../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {ItemModeloService} from "../../../../services/item-modelo.service";
import {ItemModelo} from "../../../../../../../chamou/src/app/interfaces/item/item-modelo.interface";
import {NgSelectComponent} from "@ng-select/ng-select";

@Component({
  selector: 'app-itens-info',
  templateUrl: './itens-info.component.html',
  styleUrl: './itens-info.component.scss'
})
export class ItensInfoComponent implements OnInit, AfterViewInit {
  title: string = "Novo Item";
  backRoute: string = "..";
  itemId!: string;
  itensForm!: FormGroup;
  categorias$!: Observable<CategoriaResponse[]>;

  @ViewChild(NgSelectComponent) private selectComponent!: NgSelectComponent;

  constructor(private readonly categoriaService: CategoriaService,
              private readonly itemModeloService: ItemModeloService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {
    this.initForm();
    this.categorias$ = this.categoriaService.list();

    //TODO pegar id do path da rota
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.title = "Editar Item"
        this.backRoute = '../..';
        this.itemId = params['id'];
        lastValueFrom(this.itemModeloService.get(this.itemId)).then(itemModelo => {
          if (itemModelo) {
            this.setForm(itemModelo);
            this.selectComponent.writeValue(itemModelo.categoria.name);
          }
        })
      }
    });
  }

  initForm() {
    this.itensForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl(null, Validators.required),
      descricao: new FormControl('', Validators.required),
      preco: new FormControl('', [Validators.required]),
    });
  }

  setForm(itemModelo: ItemModelo)  {
    this.itensForm.get('nome')?.setValue(itemModelo.nome);
    this.itensForm.get('categoria')?.setValue(itemModelo.categoria);
    this.itensForm.get('descricao')?.setValue(itemModelo.descricao);
    this.itensForm.get('preco')?.setValue(itemModelo.preco);

    console.log(itemModelo);
  }

  onSubmit() {
    if (!this.itensForm.valid) {
      return;
    }

    const itemModeloRequest: ItemModeloRequest = {
      nome: this.itensForm.value.nome,
      categoria: {
        id: this.itensForm.value.categoria.id,
        name: this.itensForm.value.categoria.name
      } as IdNameMap,
      descricao: this.itensForm.value.descricao,
      preco: this.itensForm.value.preco
    }

    console.log(itemModeloRequest);

    if (!this.itemId) {
      this.createItem(itemModeloRequest);
    } else {
      itemModeloRequest.id = this.itemId;

      this.updateItem(itemModeloRequest);
    }
  }

  private createItem(request: ItemModeloRequest) {
    this.itemModeloService.create(request).subscribe({
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

  private updateItem(request: ItemModeloRequest) {
    this.itemModeloService.update(this.itemId, request).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['../..'], { relativeTo: this.route });
        //TODO implements toast
      },
      error: (error) => {
        console.log(error);
        //TODO implements toast
      }

    });
  }
}
