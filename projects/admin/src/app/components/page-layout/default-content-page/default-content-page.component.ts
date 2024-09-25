import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-content-page',
  templateUrl: './default-content-page.component.html',
  styleUrl: './default-content-page.component.scss'
})
export class DefaultContentPageComponent {
  @Input({ required: true }) title!: string;

}
