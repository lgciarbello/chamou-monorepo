import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GenericModalInput} from "../../interfaces/generic-modal-input.interface";

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent {
  @Input({required: true}) titulo: string = '';

  // @ViewChild('modal-content')
  // @Input() hasButton: boolean = false;
  // @Input() buttonTitle: string = '';

  constructor(private readonly dialogRef: MatDialogRef<GenericModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GenericModalInput) {
  }


}
