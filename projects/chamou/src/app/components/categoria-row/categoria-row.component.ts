import {Component, Input} from '@angular/core';
import {CategoriaResponse} from "../../interfaces/categoria/categoria-response-interface";

@Component({
  selector: 'app-categoria-row',
  templateUrl: './categoria-row.component.html',
  styleUrl: './categoria-row.component.scss'
})
export class CategoriaRowComponent {
  @Input() public categorias!: CategoriaResponse[] | null;
}
