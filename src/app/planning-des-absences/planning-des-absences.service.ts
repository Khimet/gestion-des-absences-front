import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Absence } from '../models/Absence';
import { JourFerieRtt } from '../models/JourFerieRtt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanningDesAbsencesService {

  constructor(private Http: HttpClient) { }

  getAbsences(): Observable<Absence[]> {
    return this.Http.get<Absence[]>(`${environment.baseUrl}${environment.apiAbsences}`, { withCredentials: true });
  }
  getJFerieRtt(): Observable<JourFerieRtt[]>{
    return this.Http.get<JourFerieRtt[]>(`${environment.baseUrl}${environment.apiJFerieRtt}`, { withCredentials: true });
  }
}

