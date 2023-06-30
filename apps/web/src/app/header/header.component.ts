import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../store/app.actions'
import { Observable } from 'rxjs';
import * as AppSelectors from '../store/app.reducer'

@Component({
  selector: 'bitshifters-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpened$?: Observable<boolean>;

  constructor(private store: Store) {
    this.menuOpened$ = this.store.select(AppSelectors.selectToggleMenu)
  }

  toggleMenu() {
    this.store.dispatch(AppActions.toggleMenu());
  }
}
