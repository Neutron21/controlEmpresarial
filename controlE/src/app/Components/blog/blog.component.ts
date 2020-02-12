import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataServices } from '../../Services/dataServices';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  loading: boolean;
  publicaciones;
  acceso: string;
 
  titulo: string;
  contenido: string;
  fuente: string;
  key: any;
  post = { };
  
  constructor( private http:  HttpClient, private dataServices: DataServices) { 
    this.loading = true;
    this.publicaciones = [];
    
  }
  ngOnInit() {
   this.loading = true;
   this.obtenerPosts();
   
  }
  validaAcceso(){
    debugger
    if (this.acceso) {
      this.loading = true;
      let accesJson = {
        acceso: this.acceso
       };
      // this.dataServices.accesToPost(accesJson).subscribe(newAcces => {
      //this.dataServices.accesToPost({"acceso":this.acceso}).subscribe(newAcces => {
      this.dataServices.accesToPost(this.acceso).subscribe(newAcces => {
        // console.log(this.acceso);
        
        console.log("newAcces ", newAcces);
        // this.key = newAcces;
        this.loading = false;
        return newAcces;
      });
      // this.dataServices.addPost(this.post).subscribe(newPost => this.publicaciones.push(newPost));
      
    }
  
  }
  guardarPost(form: NgForm){
    let t = form.value.titulo;
    let c = form.value.contenido;
    let f = form.value.fuente;
    console.log(t);
    console.log(c);
    console.log(f);
    
  }
  obtenerPosts(){
    this.dataServices.getPosthttp().subscribe(data  => {
      this.publicaciones = data;
      this.loading = false;
     })
  }


}
