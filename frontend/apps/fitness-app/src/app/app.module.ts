import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { environment } from '../environments/environment';
import { CalendarDataModule } from '@fitness-app/calendar/data/calendar-data';
import {TranslateModule} from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-AT';

registerLocaleData(localeDeAt, 'deAT');


@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([]),
    ExerciseDataModule.forRoot({ backendUrl: environment.backendURL }),
    CalendarDataModule.forRoot({ backendUrl: environment.backendURL }),
    TranslateModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "deAT" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
