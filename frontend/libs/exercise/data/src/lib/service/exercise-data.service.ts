import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exercise } from '../models/exercise';
import { ModuleConfig } from '@fitness-app/shared/models';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ExerciseType } from '../models/exercise-type.enum';

@Injectable()
export class ExerciseDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    @Inject('config') private config: ModuleConfig,
    private http: HttpClient
  ) { }

  getAll(): Observable<Array<Exercise>> {
    console.log(this.config.backendUrl);
    return this.http
      .get<Array<Exercise>>(this.config.backendUrl + '/Exercises')
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getForId(id: string): Observable<Exercise> {
    return this.http
      .get<Exercise>(this.config.backendUrl + '/Exercises/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  create(exercise: Exercise): Observable<Exercise> {
    return this.http
      .post<Exercise>(
        this.config.backendUrl + '/Exercises/',
        JSON.stringify(exercise),
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  update(id: string, exercise: Exercise): Observable<Exercise> {
    return this.http
      .put<Exercise>(
        this.config.backendUrl + '/Exercises/' + id,
        JSON.stringify(exercise),
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  delete(id: string): Observable<Exercise> {
    return this.http
      .delete<Exercise>(
        this.config.backendUrl + '/Exercises/' + id,
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
