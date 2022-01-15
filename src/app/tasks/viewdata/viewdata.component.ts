import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalApiService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent implements OnInit {
  id:any;
  constructor(private activatedRoute:ActivatedRoute,private service:LocalApiService) { }

  ngOnInit(): void {
    this.getId();
    this.loadDataById();
  }
  getId(){
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id');
    })
  }
  loadDataById(){
    this.service.getDataById(this.id).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
