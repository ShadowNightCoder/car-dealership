import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { localStroageService } from '../../service/localstorage.service';
import { FormRequest } from '../../interface/form.interface';
import { genericFunction } from '../../functions/genericfunc.service';
import { dashboardFunctions } from '../../functions/dashboared.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'gender', 'birthDate', 'country', 'favoriteColor', 'motor'];
  FormsSubList: FormRequest[] = [];
  mostWantedMotor = '';
  isSmallScreen: boolean = false;
  private breakpointSubscription: Subscription;
  mostCommonCity: string = '';
  
  constructor(private localstorageService: localStroageService, private breakpointObserver: BreakpointObserver, private dashboardFunc: dashboardFunctions) {
    this.FormsSubList = this.localstorageService.getJsonDataFromLocalStorage('formList');
    Chart.register(...registerables);

    this.breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      '(max-width: 1200px)'
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }


  ngOnInit(): void {
    this.createCharts();
    this.mostCommonCity = this.dashboardFunc.findMostCommonCity(this.FormsSubList);
  }



  createCharts() {
    new Chart("agesChart", {
      type: 'bar',
      data: {
        labels: ['Under 20', '20-29', '30-39', '40-49', '50+'],
        datasets: [{
          label: '# of Votes',
          data: this.dashboardFunc.getDataForFormSender(this.FormsSubList),
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(0, 128, 128, 0.2)',
            'rgba(30, 144, 255, 0.2)',
            'rgba(0, 0, 255, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(30, 144, 255, 1)',
            'rgba(0, 0, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });



    this.mostWantedMotor = this.dashboardFunc.getMostWantedMotor(this.FormsSubList);
    const gendersCounter = this.dashboardFunc.getGendersCountForMostWantedMotor(this.mostWantedMotor, this.FormsSubList);
    const data = ['male', 'female', 'else'].map(gender => gendersCounter[gender] || 0);

    new Chart("engineChart", {
      type: 'pie',
      data: {
        labels: ['Male', 'Female', 'Else'],
        datasets: [{
          label: '# of Votes',
          data: data,
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



    const hobbiesData = this.dashboardFunc.getHobbiesData(this.FormsSubList);

    new Chart("hobbiesChart", {
      type: 'doughnut',
      data: {
        labels: hobbiesData.labels,
        datasets: [{
          label: '# of Votes',
          data: hobbiesData.data,
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


  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
  }
}