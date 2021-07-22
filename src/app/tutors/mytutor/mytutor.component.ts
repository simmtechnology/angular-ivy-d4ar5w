import { TutorService } from './../../tutor.service';
import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core'; 
import { PageEvent } from '@angular/material/paginator';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { StudentService } from 'app/student.service';
import { Router } from '@angular/router';



export interface UserCategory {
  categoryId: number;
  categoryDescription: String;
}


@Component({
  selector: 'mytutor',
  templateUrl: './mytutor.component.html',
  styleUrls: ['./mytutor.component.css']
})
export class MytutorComponent implements OnInit {
  tutors: any[];  
  page = 1;
  pageSize = 10;
  pageOfItems: Array<any>;

  constructor(private teacherService: TutorService,private router:Router) { }
  ngOnInit() {
    this.fetchTutors();
 
  }
  fetchTutors(): void {
    this.teacherService.getTutors()
      .subscribe(
        response => {

          this.tutors = response;
        },
        error => {
          console.log(error);
        });
  }

  viewProfile (tutor:any):void {
    this.router.navigateByUrl("/user-profile/"+tutor.tutorId+"/2", { skipLocationChange: true }); 
    //{ skipLocationChange: true });
  }
 
 

 


}



