import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalApiService } from '../services/local-api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  apiData:any;
  id:any;
  constructor(private service:LocalApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadApiData();
  }
  loadApiData(){
    this.service.getAllApiData().subscribe((res:any)=>{
      this.apiData=res;
    })
  }
  deleteData(postid:any){
    this.service.deleteDataRecord(postid).subscribe((res:any)=>{
      location.reload();
    })
  }
}
