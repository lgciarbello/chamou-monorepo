import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InfoModalInput} from "../../../interfaces/modal/info-modal-input.interface";

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss'
})
export class InfoModalComponent {

  constructor(private readonly dialogRef: MatDialogRef<InfoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InfoModalInput) {
  }

  onButtonClick() {
    this.dialogRef.close(true);
  }

}
