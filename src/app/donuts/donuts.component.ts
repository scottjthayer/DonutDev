import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Donut, Donuts, Result } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  constructor(private donutService: DonutService) { }

  donutList: Result[] = [];

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe((response: Donuts) => {
      this.donutList = response.results;

      console.log(this.donutList);
    })
  }
}
