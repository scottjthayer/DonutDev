import { Component, OnInit } from '@angular/core';
import { DevService } from '../dev.service';
import { Complete, Developers } from '../devs';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  devList: Complete[] = [];

  constructor(private service:DevService) { }

  ngOnInit(): void {
    this.service.getAllDevs().subscribe((response: Developers) => {
      this.devList = response.complete;
    })
  }

}
