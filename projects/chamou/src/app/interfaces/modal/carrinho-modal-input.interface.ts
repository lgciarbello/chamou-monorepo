import {CarrinhoInterface} from "../carrinho/carrinho.interface";

export interface CarrinhoModalInput {
  titulo: string,
  precoPedidoAtual: number,
  carrinho: CarrinhoInterface,
}
