import {Component, Input} from '@angular/core';
import {IconName} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  @Input({ required: true }) public titulo: string = "Titulo";
  @Input({ required: true }) public icone: IconName = 'accessible-icon';
  @Input() transform: string = "";
}
