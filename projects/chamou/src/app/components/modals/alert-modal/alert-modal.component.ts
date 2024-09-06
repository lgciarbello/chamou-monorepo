import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlertModalInput} from "../../../interfaces/modal/alert-modal-input.interface";

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {

  constructor(private readonly dialogRef: MatDialogRef<AlertModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AlertModalInput) {
  }

  onAccept() {
    this.dialogRef.close(true);
  }

  onDecline() {
    this.dialogRef.close();
  }

}
