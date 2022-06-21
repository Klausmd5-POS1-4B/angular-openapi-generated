import {Component, OnInit} from '@angular/core';
import {PersonDTO, PersonsService} from "./swagger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  persons: PersonDTO[] = [];

  ngOnInit(): void {
    console.log("ngOnInit");
    this.personServ.personsGetAllPersonsGet().subscribe(x=>this.persons = x);
  }

  constructor(private personServ: PersonsService) {
  }
  title = 'SwaggerGen';
}
