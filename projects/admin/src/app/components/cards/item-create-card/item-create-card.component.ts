import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from "rxjs";
import {CategoriaResponse} from "../../../interfaces/categoria-response.interface";
import {CategoriaService} from "../../../services/categoria.service";
import {ItemModeloService} from "../../../services/item-modelo.service";
import {ItemModeloResponse} from "../../../interfaces/item-modelo-response.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-create-card',
  templateUrl: './item-create-card.component.html',
  styleUrl: './item-create-card.component.scss'
})
export class ItemCreateCardComponent implements OnInit, OnDestroy {

  @Input({ required: true }) public form!: FormGroup;
  @Input({ required: true }) public arrayName!: string;
  @Input({ required: true }) public index!: string;

  @Output('delete-clicked') onDeleteClick = new EventEmitter<void>();

  subscriptions: Subscription = new Subscription();
  categoria$!: Observable<CategoriaResponse[]>;
  itens!: ItemModeloResponse[];

  constructor(private readonly categoriaService: CategoriaService,
              private readonly itemModeloService: ItemModeloService) {}

  ngOnInit() {
    this.categoria$ = this.categoriaService.list();
    this.initItensField();
    this.onChanges();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  initItensField() {
    const value = this.form.controls['itens'].get(this.index)?.get('categoria')?.value;
    if (value) {
      this.itemModeloService.listByCategoria(value.id).subscribe(itens => {
        this.itens = itens;
      })
    }
  }

  onChanges() {
    this.form.controls['itens'].get(this.index)?.get('categoria')?.valueChanges.subscribe((value: ItemModeloResponse) => {
      console.log(value);
      if (value) {
        this.itemModeloService.listByCategoria(value.id).subscribe(itens => {
          this.itens = itens;
          this.form.controls['itens'].get(this.index)?.get('itemModelo')?.patchValue(null);
        })
      } else {
        this.itens = [];
        this.form.controls['itens'].get(this.index)?.get('itemModelo')?.patchValue(null);
      }
    });
  }


  onDelete() {
    this.onDeleteClick.emit();
  }
}
