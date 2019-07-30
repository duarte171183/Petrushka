import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadImageEffect();
  }
  loadImageEffect() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }

}
