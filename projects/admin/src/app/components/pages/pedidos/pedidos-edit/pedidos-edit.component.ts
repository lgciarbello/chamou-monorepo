import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {lastValueFrom, Observable} from "rxjs";
import {ComandaService} from "../../../../services/comanda.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ComandaList} from "../../../../interfaces/comanda-list.interface";
import {PedidoService} from "../../../../services/pedido.service";
import {PedidoResponse} from "../../../../interfaces/pedido-response.interface";
import {ItemModeloResponse} from "../../../../interfaces/item-modelo-response.interface";
import {ItemPedido} from "../../../../interfaces/item-pedido.interface";
import {PedidoCreateRequest} from "../../../../interfaces/pedido-create-request.interface";

@Component({
  selector: 'app-pedidos-edit',
  templateUrl: './pedidos-edit.component.html',
  styleUrl: './pedidos-edit.component.scss'
})
export class PedidosEditComponent implements OnInit, AfterViewInit {
  title: string = "Novo Pedido";
  backButtonTitle = "Voltar para Pedidos"
  backRoute: string = "..";
  pedidoId!: string;
  pedidosForm!: FormGroup;
  comandas$!: Observable<ComandaList[]>;

  constructor(private readonly pedidoService: PedidoService,
              private readonly comandaService: ComandaService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  get itensForm(): FormArray {
    return this.pedidosForm.get('itens') as FormArray;
  }

  ngOnInit() {
    this.initForm();
    this.comandas$ = this.comandaService.list();

    //TODO pegar id do path da rota
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.title = "Editar Pedido"
        this.backButtonTitle = "Voltar para Pedido"
        this.pedidoId = params['id'];
        lastValueFrom(this.pedidoService.get(this.pedidoId)).then(pedido => {
          if (pedido) {
            this.setForm(pedido);
          }
        })
      }
    });
  }

  initForm() {
    this.pedidosForm = new FormGroup({
      comanda: new FormControl(null, Validators.required),
      itens: new FormArray([], Validators.required),
    });
  }

  setForm(pedido: PedidoResponse)  {
    this.pedidosForm.get('comanda')?.setValue(pedido.comanda);
    this.pedidosForm.get('comanda')?.disable();

    pedido.itens.map(item => {
      const itemModeloResponse = {
        id: item.itemModeloId,
        nome: item.nome,
      } as ItemModeloResponse;

      return {
        itemId: new FormControl(item.id),
        categoria: new FormControl(item.categoria, Validators.required),
        itemModelo: new FormControl(itemModeloResponse, Validators.required),
        quantidade: new FormControl(item.quantidade, Validators.required)
      }
    }).forEach(item => this.itensForm.push(new FormGroup(item)));

    console.log(pedido);
  }

  addFormItem() {
    console.log(this.itensForm);
    this.itensForm.push(new FormGroup({
      itemId: new FormControl(null),
      categoria: new FormControl(null, Validators.required),
      itemModelo: new FormControl(null, Validators.required),
      quantidade: new FormControl(null, Validators.required)
    }));
  }

  deleteItem(i: number) {
    this.itensForm.removeAt(i);
  }

  onSubmit() {
    if (!this.pedidosForm.valid) {
      return;
    }

    const itensForm: any[] = this.pedidosForm.value.itens;
    const itens: ItemPedido[] = itensForm.map(item => {
      const itemPedido = {
        itemModeloId: item.itemModelo.id,
        quantidade: item.quantidade
      } as ItemPedido;

      if (item.itemId) itemPedido.id = item.itemId;

      return itemPedido;
    });

    console.log(this.pedidosForm.controls['comanda'].value);

    const pedidoCreateRequest: PedidoCreateRequest = {
      comandaId: this.pedidosForm.controls['comanda'].value.id,
      itens: itens
    } as PedidoCreateRequest;

    console.log(pedidoCreateRequest);

    if (!this.pedidoId) {
      this.createItem(pedidoCreateRequest);
    } else {
      pedidoCreateRequest.id = this.pedidoId;

      console.log(pedidoCreateRequest);

      this.updateItem(pedidoCreateRequest);
    }
  }

  private createItem(request: PedidoCreateRequest) {
    this.pedidoService.create(request).subscribe({
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

  private updateItem(request: PedidoCreateRequest) {
    this.pedidoService.update(request).subscribe({
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
