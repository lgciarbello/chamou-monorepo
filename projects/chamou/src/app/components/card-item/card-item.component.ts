import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModelo} from "../../interfaces/item/item-modelo.interface";
import {FirebaseStorageService} from "../../services/firebase-storage.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent implements OnInit {
  @Input({required: true}) public id!: string;
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public descricao: string = '';
  @Input() public imageLink?: string;

  imageSet: boolean = false;

  @Output("clicked") click = new EventEmitter<ItemModelo>();

  constructor(private readonly firebaseStorageService: FirebaseStorageService) {}

  ngOnInit() {
    if (!this.imageLink) {
      this.imageLink = 'assets/img/default_banner.png';
      this.imageSet = true;
      return;
    }

    this.firebaseStorageService.retrieveFileURL(this.imageLink)
      .then(url => {
        this.imageLink = url
        this.imageSet = true;
      });
  }

  onClick() {
    const itemModelo: ItemModelo = {
      id: this.id,
      nome: this.titulo,
      preco: this.preco,
      descricao: this.descricao,
      foto: this.imageLink,
    }

    this.click.emit(itemModelo);
  }
}
