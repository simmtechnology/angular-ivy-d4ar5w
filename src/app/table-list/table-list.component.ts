import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from '../student.service';
import { PageEvent } from '@angular/material/paginator';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';



export interface UserCategory {
  categoryId: number;
  categoryDescription: String;
}


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit { 
  student:any;
  students: any[];

  
  page = 1;
  pageSize = 10;
  pageOfItems: Array<any>;

  constructor(private studentService: StudentService,private router:Router) { }
  ngOnInit() {
    this.fetchStudents();
 
  }

  fetchStudents(): void {
    this.studentService.getStudents()
      .subscribe(
        response => {

          this.students = response;
        },
        error => {
          console.log(error);
        });
  }
 
  viewProfile (student:any):void {
    this.student=student;
    this.router.navigateByUrl("/user-profile/"+student.studentId+"/1", { skipLocationChange: true }); 
    //{ skipLocationChange: true });
  }

 


}



