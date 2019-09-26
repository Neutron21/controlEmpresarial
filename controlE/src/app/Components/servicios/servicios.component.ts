import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  loading: boolean;
  constructor() {
    this.loading = true
   }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 800);
    
  }

}
