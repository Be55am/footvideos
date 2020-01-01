import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-example';

  error$: Observable<any>;
  isLoading: Observable<boolean>;

  constructor(
  ) {
  }

  ngOnInit() {

  }
  onRefresh() {
  }

}
