import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent {
  @Input({required: true}) titulo: string = '';
  @Input() hasButton: boolean = false;

}
