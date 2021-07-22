
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


const endpoint = 'http://162.0.216.101:8096/xclass/students';;
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private http: HttpClient) { }

 public  getStudents(): Observable<any> {
    return this.http.get(endpoint, { 'headers': headers });
  }
  
}
