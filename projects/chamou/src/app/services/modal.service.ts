import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private readonly _matDialogService: MatDialog) {}

  open(component: ComponentType<any>, data: any): MatDialogRef<any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    return this._matDialogService.open(component, dialogConfig);
  }

  closeAll() {
    this._matDialogService.closeAll();
  }


}
