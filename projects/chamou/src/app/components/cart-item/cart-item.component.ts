import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {ItemModalInput} from "../../interfaces/modal/item-modal-input.interface";
import {AlertModalInput} from "../../interfaces/modal/alert-modal-input.interface";
import {ItemModalOutput} from "../../interfaces/modal/item-modal-output.interface";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input({required: true}) public id: string = '';
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public quantidade: number = 0.00;
  @Input({required: true}) descricao: string = '';
  @Input({required: true}) customizacoes: string[] = [];
  @Input() public informacoes: string = '';
  @Input() public linkImagem: string = "/assets/img/default_banner.png";

  @Output() public excluirItem = new EventEmitter<void>();
  @Output() public editarItem = new EventEmitter<ItemModalOutput>();

  constructor(private readonly _modalService: ModalService) {
  }

  onEdit() {
    const data: ItemModalInput = {
      customizacoes: this.customizacoes,
      descricao: this.descricao,
      itemModeloId: this.id,
      imagePath: this.linkImagem,
      preco: this.preco,
      quantidade: this.quantidade,
      titulo: this.titulo,
      tituloBotao: "Editar"
    } as ItemModalInput;

    this._modalService.openItemModal(data)
      .afterClosed().subscribe(
      itemModalInput => {
        if (itemModalInput && itemModalInput.quantidade > 0) {
          this.editarItem.emit(itemModalInput);
        }
      }
    );
  }

  onDelete() {
    const data: AlertModalInput = {
      title: 'Excluir Item',
      icon: 'trash-can',
      message: 'Deseja mesmo excluir este item?',
      buttonAcceptText: 'Excluir',
      buttonDeclineText: 'Cancelar'
    } as AlertModalInput;

    this._modalService.openAlertModal(data)
      .afterClosed().subscribe(
        isAccept => {
          if (isAccept) {
            this.excluirItem.emit();
          }
        }
    );
  }
}
