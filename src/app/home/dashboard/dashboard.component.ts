import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#totalStylistChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
      type: 'bar',
      height: '35',
      barWidth: '6',
      resize: true,
      barSpacing: '2',
      barColor: '#00ffcc'
    });
    $('#revenueChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
      type: 'bar',
      height: '35',
      barWidth: '6',
      resize: true,
      barSpacing: '2',
      barColor: '#dd99ff'
    });
    $('#bookingChart').sparkline([35, 26, 24, 39, 24, 32, 30, 36, 29, 30, 27, 22], {
      type: 'bar',
      height: '35',
      barWidth: '6',
      resize: true,
      barSpacing: '2',
      barColor: '#99e6ff'
    });

    var ctx4 = document.getElementById("paymentChart").getContext("2d");
    var data4 = [
        {
            value: 300,
            color:"#55D8FE",
            highlight: "#55D8FE",
            label: "Cash"
        },
        {
            value: 50,
            color: "#FF8373",
            highlight: "#FF8373",
            label: "Credit card"
        },
        {
            value: 100,
            color: "#FFDA83",
            highlight: "#FFDA83",
            label: "Debit card"
        },
        {
            value: 50,
            color: "#A3A0FB",
            highlight: "#A3A0FB",
            label: "Others"
        }
    ];
    
    var myDoughnutChart = new Chart(ctx4).Doughnut(data4,{
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 0,
        animationSteps : 100,
		    tooltipCornerRadius: 2,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctxBooking = document.getElementById("chartBooking").getContext("2d");
    var bookingChartData = [
        {
            value: 300,
            color:"#FFDA83",
            highlight: "#FFDA83",
            label: "Stylists"
        },
        {
            value: 50,
            color: "#FF8373",
            highlight: "#FF8373",
            label: "Customers"
        },
    ];
    
    var myDoughnutChart = new Chart(ctxBooking).Doughnut(bookingChartData,{
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 0,
        animationSteps : 100,
		    tooltipCornerRadius: 2,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
  }

}
