import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-info-page',
  templateUrl: './default-info-page.component.html',
  styleUrl: './default-info-page.component.scss'
})
export class DefaultInfoPageComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) backButtonTitle!: string;
}
