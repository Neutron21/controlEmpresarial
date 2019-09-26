import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
