import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-modal-layout',
  templateUrl: './generic-modal-layout.component.html',
  styleUrl: './generic-modal-layout.component.scss'
})
export class GenericModalLayoutComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public hasFullSize: boolean = true;

}
