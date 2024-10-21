import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../../../../services/categoria.service";
import {CategoriaResponse} from "../../../../interfaces/categoria-response.interface";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.scss'
})
export class CategoriasListComponent implements OnInit{

  categorias!: CategoriaResponse[];

  constructor(private readonly _categoriaService: CategoriaService) {
  }

  ngOnInit() {
    this._categoriaService.list().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  drop(event: CdkDragDrop<any, any>) {
    moveItemInArray(this.categorias, event.previousIndex, event.currentIndex);
  }
}
