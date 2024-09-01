import {ComponentRef, TemplateRef} from "@angular/core";
import {DefaultButtonComponent} from "../components/default-button/default-button.component";
import {BannerPrecoTotalComponent} from "../components/banner-preco-total/banner-preco-total.component";

export interface GenericModalInput {
  titulo: string,
  data: any,
  content: TemplateRef<any>,
  footer: TemplateRef<DefaultButtonComponent | BannerPrecoTotalComponent>
}
