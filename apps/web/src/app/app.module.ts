import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { HiliteDirective } from './hilite.directive';
import * as AppStore from './store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@bitshifters/shared';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HiliteDirective],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    StoreModule.forRoot({app: AppStore.reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
