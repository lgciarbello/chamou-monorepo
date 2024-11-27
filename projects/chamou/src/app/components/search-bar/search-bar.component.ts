import {Component, Input} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input({ required: true }) formControl!: FormControl;

  protected readonly faSearch = faSearch;
}
