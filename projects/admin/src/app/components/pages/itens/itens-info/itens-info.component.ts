import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../../../../services/categoria.service";
import {lastValueFrom, Observable} from "rxjs";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModeloRequest} from "../../../../interfaces/item-modelo.request.interface";
import {IdNameMap} from "../../../../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {ItemModeloService} from "../../../../services/item-modelo.service";
import {ItemModelo} from "../../../../../../../chamou/src/app/interfaces/item/item-modelo.interface";
import {NgSelectComponent} from "@ng-select/ng-select";
import {FirebaseStorageService} from "../../../../services/firebase-storage.service";

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
  file!: File;

  loadingFile: boolean = false;
  fileSent: boolean = false;

  @ViewChild(NgSelectComponent) private selectComponent!: NgSelectComponent;
  @ViewChild('foto') private fotoInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly categoriaService: CategoriaService,
              private readonly itemModeloService: ItemModeloService,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly firebaseStorageService: FirebaseStorageService) {}

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
            console.log("item modelo", itemModelo);
            this.setForm(itemModelo);

            const list = new DataTransfer();
            const file = new File([], itemModelo.foto.substring(6));
            list.items.add(file);

            this.fotoInput.nativeElement.files = list.files;

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
      foto: new FormControl(null),
    });
  }

  setForm(itemModelo: ItemModelo)  {
    this.itensForm.get('nome')?.setValue(itemModelo.nome);
    this.itensForm.get('categoria')?.setValue(itemModelo.categoria);
    this.itensForm.get('descricao')?.setValue(itemModelo.descricao);
    this.itensForm.get('preco')?.setValue(itemModelo.preco);
    this.itensForm.get('foto')?.setValue(itemModelo.foto);

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
      preco: this.itensForm.value.preco,
      foto: this.itensForm.value.foto
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

  onFileChange(event: any) {
    this.fileSent = false;
    this.loadingFile = true;

    this.file = event.target.files[0];
    const filePath = `itens/${this.file.name}`;

    this.firebaseStorageService.uploadFile(this.file, filePath)
      .then(() => {
        this.itensForm.get('foto')?.setValue(filePath);
        this.loadingFile = false;
        this.fileSent = true;
      });
  }
}
