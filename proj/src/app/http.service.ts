import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient){
    this.getAll();
  }
  
  getAll(){
    return this._http.get(`/authors/`);
 }

  addAuthor(newAuthor){
    console.log(newAuthor);
    return this._http.post(`/author/`, newAuthor)  // function call with function value returned
  }
 

  getOneAuthor(authorId){
    return this._http.get(`/author/${authorId}`)
  }

  updateAuthor(editAuthor) {
    return this._http.put(`author`, editAuthor);
  }

  delOne(id){
    return this._http.delete(`/author/${id}`)
  }
}
