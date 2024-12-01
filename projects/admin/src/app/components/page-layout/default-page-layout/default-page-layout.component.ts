import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-default-page-layout',
  templateUrl: './default-page-layout.component.html',
  styleUrl: './default-page-layout.component.scss'
})
export class DefaultPageLayoutComponent implements OnInit {

  ngOnInit() {
    initFlowbite()
  }
}
