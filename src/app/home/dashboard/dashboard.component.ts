import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.monthchart').sparkline([5, 6, 2, 9, 4, 7, 10, 12], {
      type: 'bar',
      height: '35',
      barWidth: '4',
      resize: true,
      barSpacing: '4',
      barColor: '#1e88e5'
  });
  }

}
