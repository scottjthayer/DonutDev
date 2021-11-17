import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  donut: Donut = {} as Donut;

  constructor(private route:ActivatedRoute, private service:DonutService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));

    this.service.getDonutById(id).subscribe((response: any) => {
      this.donut = response;
    });
  }
}
