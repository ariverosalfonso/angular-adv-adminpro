import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefoun',
  templateUrl: './nopagefoun.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefounComponent  {

  year: number = new Date().getFullYear();

}
