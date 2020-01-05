import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrainingDay } from '../models/training-day';
import { ModuleConfig } from '@fitness-app/shared/models';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class TrainingDayDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    @Inject('config') private config: ModuleConfig,
    private http: HttpClient
  ) { }

  getAll(): Observable<Array<TrainingDay>> {
    return this.http
      .get<Array<TrainingDay>>(this.config.backendUrl + '/TrainingDays')
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getForId(id: string): Observable<TrainingDay> {
    return this.http
      .get<TrainingDay>(this.config.backendUrl + '/TrainingDays/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  create(trainingDay: TrainingDay): Observable<TrainingDay> {
    return this.http
      .post<TrainingDay>(
        this.config.backendUrl + '/TrainingDays/',
        JSON.stringify(trainingDay),
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  update(id: string, trainingDay: TrainingDay): Observable<TrainingDay> {
    return this.http
      .put<TrainingDay>(
        this.config.backendUrl + '/TrainingDays/' + id,
        JSON.stringify(trainingDay),
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  delete(id: string): Observable<TrainingDay> {
    return this.http
      .delete<TrainingDay>(
        this.config.backendUrl + '/TrainingDays/' + id,
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
