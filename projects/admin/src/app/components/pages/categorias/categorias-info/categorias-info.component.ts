import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {lastValueFrom} from "rxjs";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {NgSelectComponent} from "@ng-select/ng-select";
import {CategoriaService} from "../../../../services/categoria.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriaRequest} from "../../../../interfaces/categoria-request.interface";
import {freeFaIcons} from "../../../../free-fa-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-categorias-info',
  templateUrl: './categorias-info.component.html',
  styleUrl: './categorias-info.component.scss'
})
export class CategoriasInfoComponent implements OnInit, AfterViewInit {
  title: string = "Nova Categoria";
  backRoute: string = "..";
  categoriaId!: string;
  categoriasForm!: FormGroup;

  protected readonly freeFaIcons: IconProp[] = ['burger', 'check-circle'];

  @ViewChild(NgSelectComponent) private selectComponent!: NgSelectComponent;

  constructor(private readonly categoriaService: CategoriaService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {
    this.initForm();

    //TODO pegar id do path da rota
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.title = "Editar Categoria"
        this.backRoute = '../..';
        this.categoriaId = params['id'];
        lastValueFrom(this.categoriaService.get(this.categoriaId)).then(categoria => {
          if (categoria) {
            this.setForm(categoria);
            // this.selectComponent.writeValue( `<fa-icon icon="ear" size="sm"></fa-icon>`);
          }
        })
      }
    });
  }

  initForm() {
    this.categoriasForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      icone: new FormControl(null, Validators.required)
    });
  }

  setForm(categoria: CategoriaResponse)  {
    this.categoriasForm.get('nome')?.setValue(categoria.nome);
    this.categoriasForm.get('icone')?.setValue(categoria.icone);

    console.log(categoria);
  }

  onSubmit() {
    if (!this.categoriasForm.valid) {
      return;
    }

    const categoriaRequest: CategoriaRequest = {
      nome: this.categoriasForm.value.nome,
      icone: this.categoriasForm.value.icone,
    };

    console.log(categoriaRequest);

    if (!this.categoriaId) {
      this.createItem(categoriaRequest);
    } else {
      categoriaRequest.id = this.categoriaId;

      this.updateItem(categoriaRequest);
    }
  }

  private createItem(request: CategoriaRequest) {
    this.categoriaService.create(request).subscribe({
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

  private updateItem(request: CategoriaRequest) {
    this.categoriaService.update(request).subscribe({
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
