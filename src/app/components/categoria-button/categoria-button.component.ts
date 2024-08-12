import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-categoria-button',
  templateUrl: './categoria-button.component.html',
  styleUrl: './categoria-button.component.scss'
})
export class CategoriaButtonComponent {

  @Input({required: true}) public categoria: string = '';
  @Input() public iconName: any = '';
  @Input({required: true}) public link: string = '';
}
