import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {lastValueFrom} from "rxjs";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {CategoriaService} from "../../../../services/categoria.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriaRequest} from "../../../../interfaces/categoria-request.interface";
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

  protected readonly freeFaIcons: IconProp[] = [
    'apple-whole', 'bacon', 'beer-mug-empty', 'blender', 'bone', 'bottle-droplet', 'bottle-water', 'bowl-food',
    'bowl-rice', 'bread-slice', 'burger', 'cake-candles', 'candy-cane', 'carrot', 'champagne-glasses', 'cheese',
    'check-circle', 'cloud-meatball', 'cookie', 'cubes-stacked', 'drumstick-bite', 'egg', 'fish', 'fish-fins',
    'flask', 'glass-water', 'glass-water-droplet', 'hotdog', 'ice-cream', 'jar', 'jar-wheat', 'lemon',
    'martini-glass', 'martini-glass-citrus', 'martini-glass-empty', 'mug-hot', 'mug-saucer', 'pepper-hot',
    'pizza', 'plate-wheat', 'seedling', 'shrimp', 'stroopwafel', 'wheat-awn', 'wheat-awn-circle-exclamation',
    'whiskey-glass', 'wine-bottle', 'wine-glass', 'wine-glass-empty'
  ];

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
