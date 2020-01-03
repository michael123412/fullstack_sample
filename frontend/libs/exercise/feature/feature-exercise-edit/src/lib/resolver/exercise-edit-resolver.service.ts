import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExercisesFacade } from '@fitness-app/exercise/data';

@Injectable({ providedIn: 'root' })
export class ExerciseEditResolver implements Resolve<any> {
  constructor(private exercisesFacade: ExercisesFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.exercisesFacade.loadSingle(route.params['id']);
    this.exercisesFacade.select(route.params['id']);
    return;
  }
}
