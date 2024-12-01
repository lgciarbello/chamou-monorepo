import {Component} from '@angular/core';
import {GarcomService} from "../../../services/garcom.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {InfoModalInput} from "../../../interfaces/modal/info-modal-input.interface";
import {ModalService} from "../../../services/modal.service";
import {InfoModalComponent} from "../info-modal/info-modal.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-garcom-modal',
  templateUrl: './garcom-modal.component.html',
  styleUrl: './garcom-modal.component.scss'
})
export class GarcomModalComponent {

  constructor(private readonly dialogRef: MatDialogRef<GarcomModalComponent>,
              private readonly garcomService: GarcomService,
              private readonly localStorageService: LocalStorageService,
              private readonly modalService: ModalService) {
  }

  chamarGarcom() {
    const mesa =  this.localStorageService.getItem('chamou.mesa');

    if (mesa) {
      this.garcomService.chamar(mesa.id).subscribe(() => {
        this.dialogRef.close();

        const data: InfoModalInput = {
          title: "Garçom solicitado",
          icon: "check-circle",
          message: "Um garçom foi solicitado para sua mesa.",
          buttonText: "Ok",
        };

        this.modalService.openAny(InfoModalComponent, data);
      });
    }

  }
}
