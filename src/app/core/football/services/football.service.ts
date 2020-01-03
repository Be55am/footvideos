import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Football} from '../models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private API_BASE_URL = 'https://free-football-soccer-videos1.p.rapidapi.com/v1/';

  constructor(private http: HttpClient) {
    console.log('Service is running ...');
  }

  getFootballVideos(): Observable<Football[]> {
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-key', '10984f542dmsh2812cda9ac9062dp18bd28jsnf0cd100740c1')
      .set('x-rapidapi-host', 'free-football-soccer-videos1.p.rapidapi.com');

    return this.http
      .get<Football[]>(`${this.API_BASE_URL}`,{headers})
      .pipe(map(result => result));
  }

}
