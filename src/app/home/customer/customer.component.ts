import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        $('#monthchart').sparkline([5, 6, 2, 9, 4, 7, 10, 12], {
            type: 'bar',
            height: '35',
            barWidth: '4',
            resize: true,
            barSpacing: '4',
            barColor: '#1e88e5'
        });
    $('#lastmonthchart').sparkline([5, 6, 2, 9, 4, 7, 10, 12], {
            type: 'bar',
            height: '35',
            barWidth: '4',
            resize: true,
            barSpacing: '4',
            barColor: '#7460ee'
        });
    }
}