import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent {
  @Input({required: true}) titulo: string = '';
  // @Input() hasButton: boolean = false;
  // @Input() buttonTitle: string = '';
  @Input({ required: true }) dialogId: string = '';

  @ViewChild('genericModal') public dialog!: ElementRef<HTMLDialogElement>;

  closeModal() {
    console.log(this.dialog);
    if (this.dialog) {
      this.dialog.nativeElement.close();
    }
  }
}
