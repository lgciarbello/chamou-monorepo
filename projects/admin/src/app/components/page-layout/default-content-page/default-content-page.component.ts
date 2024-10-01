import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-default-content-page',
  templateUrl: './default-content-page.component.html',
  styleUrl: './default-content-page.component.scss'
})
export class DefaultContentPageComponent {
  @Input({ required: true }) title!: string;
  @Input({ }) actionButtons!: Map<string, IconProp>;

  @Output() actionButtonClicked = new EventEmitter<string>();

  onActionButtonClick(action: string) {
    this.actionButtonClicked.emit(action);
  }

}
