import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-single-button-modal',
  templateUrl: './single-button-modal.component.html',
  styleUrl: './single-button-modal.component.scss'
})
export class SingleButtonModalComponent {
  @Input({ required: true }) public titulo!: string;
  @Input({ required: true }) public buttonTitle!: string;
  @Input({ required: true }) public buttonDisable!: boolean;

  @Output('mainButtonClicked') mainButtonClick = new EventEmitter<any>();

  onButtonClick() {
    this.mainButtonClick.emit();
  }

}




