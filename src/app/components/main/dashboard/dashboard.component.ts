import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Visitor {
  name: string;
  age: number;
  gender: string;
  hobby: string;
}

const ELEMENT_DATA: Visitor[] = [
  { name: 'John', age: 25, gender: 'Male', hobby: 'Reading' },
  { name: 'Jane', age: 30, gender: 'Female', hobby: 'Swimming' },
  { name: 'Doe', age: 22, gender: 'Non-binary', hobby: 'Gaming' },
  // Add more data here...
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  displayedColumns: string[] = ['name', 'age', 'gender', 'hobby'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.createCharts();
  }

  createCharts() {
    // Mock Chart object to avoid "Cannot find name 'Chart'" error
    class Chart {
      constructor(ctx: any, config: any) {
        // Mock implementation
      }
    }

    // Most Picked Colors by Age
    new Chart("colorChart", {
      type: 'bar',
      data: {
        labels: ['Under 20', '20-29', '30-39', '40-49', '50+'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Most Picked Engine Type by Gender
    new Chart("engineChart", {
      type: 'pie',
      data: {
        labels: ['Male', 'Female', 'Non-binary'],
        datasets: [{
          label: '# of Votes',
          data: [30, 20, 10],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    // Most Common Hobby Amongst Visitors
    new Chart("hobbyChart", {
      type: 'doughnut',
      data: {
        labels: ['Reading', 'Swimming', 'Gaming'],
        datasets: [{
          label: '# of Votes',
          data: [10, 15, 5],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
