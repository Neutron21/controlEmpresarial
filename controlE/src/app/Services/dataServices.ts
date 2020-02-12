import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings }  from '../Util/constantes';

@Injectable()
export class DataServices {

    constructor(private http: HttpClient) { }

    getPosthttp(){
        
        return this.http.get(AppSettings.ALL_POST);
     }

    addPost (post: any){
        return this.http.post(AppSettings.INSERT_POST, post);
    }

    accesToPost(user: any){

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              
            })
          };


        return this.http.post(AppSettings.VALID_ACCES, user, httpOptions);
    }
}