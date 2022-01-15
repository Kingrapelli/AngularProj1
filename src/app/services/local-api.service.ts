import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor(private http:HttpClient) { }

  public getAllApiData():Observable<any>{
    return <any> this.http.get('http://localhost:8080/api/tutorials')
  }
  public getDataById(id:any):Observable<any>{
    return <any> this.http.get(`http://localhost:8080/api/tutorials/${id}`);
  }
  public createPost(title:any, description:any):Observable<any>{
    const headers= {'content-type':'application/json'}
    return <any>this.http.post('http://localhost:8080/api/tutorials',{
      title:title,
      description:description,
    },{headers:headers})
  }
  public deleteDataRecord(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/api/tutorials/${id}`)
  }
}
