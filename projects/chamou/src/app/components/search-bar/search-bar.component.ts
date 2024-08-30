import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  protected readonly faSearch = faSearch;
}
