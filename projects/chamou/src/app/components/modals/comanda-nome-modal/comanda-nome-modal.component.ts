import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlertModalInput} from "../../../interfaces/modal/alert-modal-input.interface";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-comanda-nome-modal',
  templateUrl: './comanda-nome-modal.component.html',
  styleUrl: './comanda-nome-modal.component.scss'
})
export class ComandaNomeModalComponent implements OnInit {

  nome!: FormControl;

  constructor(private readonly dialogRef: MatDialogRef<ComandaNomeModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AlertModalInput) {
  }

  ngOnInit() {
    this.nome = new FormControl(null, Validators.required);
  }

  onAccept() {
    if (!this.nome.valid) {
      return;
    }

    this.dialogRef.close(this.nome.value);
  }

  onDecline() {
    this.dialogRef.close();
  }
}
