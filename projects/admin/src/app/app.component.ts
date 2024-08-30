import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'admin';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    initFlowbite();
  }
}
