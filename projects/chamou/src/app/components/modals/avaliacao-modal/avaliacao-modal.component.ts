import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AvaliacaoModalInput} from "../../../interfaces/modal/avaliacao-modal-input.interface";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {AvaliacaoService} from "../../../services/avaliacao.service";
import {lastValueFrom} from "rxjs";
import {Pergunta} from "../../../interfaces/avaliacao/pergunta.interface";
import {AvaliacaoForm} from "../../../interfaces/avaliacao/avaliacao-form.interface";
import {AvaliacaoRequest} from "../../../interfaces/avaliacao/avaliacao-request.interface";
import {PerguntaResposta} from "../../../interfaces/avaliacao/pergunta-resposta.interface";
import {InfoModalInput} from "../../../interfaces/modal/info-modal-input.interface";
import {ModalService} from "../../../services/modal.service";
import {InfoModalComponent} from "../info-modal/info-modal.component";

@Component({
  selector: 'app-avaliacao-modal',
  templateUrl: './avaliacao-modal.component.html',
  styleUrl: './avaliacao-modal.component.scss'
})
export class AvaliacaoModalComponent implements OnInit{
  avaliacaoForm!: FormGroup;
  perguntas!: Pergunta[];

  constructor(private readonly dialogRef: MatDialogRef<AvaliacaoModalComponent>,
              private readonly _modalService: ModalService,
              private readonly _avaliacaoService: AvaliacaoService,
              @Inject(MAT_DIALOG_DATA) public data: AvaliacaoModalInput) {
  }

  get perguntasForm(): FormArray {
    return this.avaliacaoForm.get('perguntas') as FormArray;
  }

  ngOnInit() {
    this.createForm();
    this.initForm();
  }

  createForm() {
    this.avaliacaoForm = new FormGroup({
      perguntas: new FormArray([]),
      comentario: new FormControl(null)
    });
  }

  initForm() {
    const perguntas$ = this._avaliacaoService.listPerguntas();

    lastValueFrom(perguntas$).then(perguntas => {
        this.perguntas = perguntas;
        perguntas.forEach(() => this.perguntasForm.push(new FormControl('', [Validators.required])));
    });
  }

  submitForm() {
    const formValue = this.avaliacaoForm.value as AvaliacaoForm;

    const perguntasRespostas = formValue.perguntas.map((pergunta, index)=> {
      return { perguntaId: this.perguntas.at(index)?.id, resposta: pergunta } as PerguntaResposta;
    });

    const avaliacao: AvaliacaoRequest = {
      perguntasRespostas: perguntasRespostas,
      comentario: formValue.comentario
    } as AvaliacaoRequest;

    lastValueFrom(this._avaliacaoService.create(avaliacao))
      .then(avaliacao => {
        console.log(avaliacao);
        this.dialogRef.close();

        const data: InfoModalInput = {
          title: "Avaliação enviada",
          icon: "check-circle",
          message: "Sua avaliação foi enviada com sucesso!",
          buttonText: "Ok",
        };

        this._modalService.openAny(InfoModalComponent, data);
      });
  }
}
