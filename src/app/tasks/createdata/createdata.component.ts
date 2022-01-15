import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalApiService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-createdata',
  templateUrl: './createdata.component.html',
  styleUrls: ['./createdata.component.scss']
})
export class CreatedataComponent implements OnInit {
  createData:any;
  constructor(private formBuilder:FormBuilder,private service:LocalApiService,private router:Router) { }

  ngOnInit(): void {
    this.createData=this.formBuilder.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }
  onCreateData(){
    this.service.createPost(this.createData.value.title,this.createData.value.description).subscribe((res:any)=>{
      this.router.navigate(['/tasks'])
    },err=>{
      console.log(err);
    })
  }
}
