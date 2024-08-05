import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent {

  @Input({required: true}) titulo: string = '';
  @Input() public paddingY: string = '2.5'

}
