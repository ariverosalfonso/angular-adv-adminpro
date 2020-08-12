import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
//Llamar desde manera global en un js
declare function customInitFunctions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
