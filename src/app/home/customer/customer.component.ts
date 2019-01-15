import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        $('#usersChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
            type: 'bar',
            height: '35',
            barWidth: '6',
            resize: true,
            barSpacing: '2',
            barColor: '#00ffcc'
          });
          $('#earningChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
            type: 'bar',
            height: '35',
            barWidth: '6',
            resize: true,
            barSpacing: '2',
            barColor: '#dd99ff'
          });
          $('#stylistsChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
            type: 'bar',
            height: '35',
            barWidth: '6',
            resize: true,
            barSpacing: '2',
            barColor: '#99e6ff'
          });
    }
}