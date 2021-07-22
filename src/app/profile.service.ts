import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
const endpointTutors = 'http://162.0.216.101:8096/xclass/tutors'; //get tutors
const endpointStudents = 'http://162.0.216.101:8096/xclass/students'; //get students

const endpointTutorBase = 'http://162.0.216.101:8096/xclass/tutors'; //get  a tutor
const endpointStudentBase ='http://162.0.216.101:8096/xclass/students'; //get a student


@Injectable({
  providedIn: 'root'
})
export class ProfileService { 
  constructor(private http: HttpClient) { } 
  /** POST: add a profile to the database */


  public createProfile(profile: string): Observable<any> { 
    const obj = JSON.parse(profile);
    const body=JSON.stringify(profile); 
  
     
   if(obj.spinnerCats==2)
   {
     console.log("you are a tutor :"+obj.spinnerCats);
    return this.http.post(endpointTutors, obj,{'headers':headers}) ;
   }
   console.log("you are a student :"+obj.spinnerCats);
   return this.http.post(endpointStudents, profile,{'headers':headers}) ;


  }

  public getProfile(profileId:number,categoryId:number): Observable<any> {   
   if(categoryId==1)
   { 
     return this.http.get(endpointStudentBase+"/"+profileId, { 'headers': headers }); 
   } 
   return this.http.get(endpointTutorBase+"/"+profileId, { 'headers': headers });

  }
}
