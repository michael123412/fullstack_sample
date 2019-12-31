import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ExerciseListModule } from '@fitness-app/exercise/feature/feature-exercise-list';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { environment } from '../environments/environment';
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
    EffectsModule.forRoot([]),
    ExerciseDataModule.forRoot({ backendUrl: environment.backendURL }),
    ExerciseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
