import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { localStroageService } from '../../service/localstorage.service';
import { FormRequest } from '../../interface/form.interface';
import { genericFunction } from '../../functions/genericfunc.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'gender', 'birthDate', 'country', 'favoriteColor', 'motor'];
  FormsSubList: FormRequest[] = [];
  mostWantedMotor = '';
 

  constructor(private localstorageService: localStroageService, private genericFunc: genericFunction) {
    this.FormsSubList = this.localstorageService.getJsonDataFromLocalStorage('formList');
    console.log(this.FormsSubList)

    Chart.register(...registerables);
  }


  ngOnInit(): void {
    this.createCharts();
  }


  getDataForFormSender() {
    const ageGroups = [20, 30, 40, 50];
    const data = [0, 0, 0, 0, 0];

    this.FormsSubList.forEach(form => {
      const age = this.genericFunc.calculateAge(form.personalInformation.birthDate);
      // Find the appropriate index for the age
      let index = ageGroups.findIndex(group => age < group);

      if (index === -1) {
        index = data.length - 1;
      }
      data[index]++;
    });
    return data;
  }


 

  getMostWantedMotor() {
    const motorCounts: { [gender: string]: { [motor: string]: number } } = {};
    
    let maxCount = 0;

    this.FormsSubList.forEach(form => {
      // const gendersCount: { [gender: string]: number } = {};
      const gender = form.personalInformation.gender;
      const motor = form.carInformation.motor;
      if (gender && motor) {
        // If the gender is not already in motorCounts, initialize it
        if (!motorCounts[gender]) {
          motorCounts[gender] = {};
        }
        // Update the motor count based on gender and motor type if it doesn't already exist
        if (!motorCounts[gender][motor]) {
          motorCounts[gender][motor] = 1;
        } else {
          motorCounts[gender][motor]++;
        }
        // Update mostWantedMotor if the count for this motor is higher than the current maxCount
        if (motorCounts[gender][motor] > maxCount) {
          maxCount = motorCounts[gender][motor];
          this.mostWantedMotor = motor;
        }
      }
    });

    return this.getGendersCountForMostWantedMotor(this.mostWantedMotor);
    // console.log('Most Wanted Motor:', this.mostWantedMotor);
  }


  getGendersCountForMostWantedMotor(mostWantedMotor: string){
    const gendersCount: { [gender: string]: number } = {};
  
    this.FormsSubList.forEach(form => {
      const gender = form.personalInformation.gender;
      const motor = form.carInformation.motor;
      if (gender && motor && motor === mostWantedMotor) {
        // If the gender is not already in gendersCount, initialize it
        if (!gendersCount[gender]) {
          gendersCount[gender] = 1;
        } else {
          gendersCount[gender]++;
        }
      }
    });
  
    return gendersCount;
  }

  

  

  createCharts() {
    new Chart("agesChart", {
      type: 'bar',
      data: {
        labels: ['Under 20', '20-29', '30-39', '40-49', '50+'],
        datasets: [{
          label: '# of Votes',
          data: this.getDataForFormSender(),
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


    const gendersCounter = this.getMostWantedMotor();
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





    const hobbyData = this.getHobbyData();

    new Chart("hobbyChart", {
      type: 'doughnut',
      data: {
        labels: hobbyData.labels,
        datasets: [{
          label: '# of Votes',
          data: hobbyData.data,
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


  getHobbyData() {
    const hobbyCounts: { [hobby: string]: number } = {};

    this.FormsSubList.forEach(form => {
      form.morePersonalInformation.hobbies.forEach(hobby => {
        let hobbie = String(hobby);
        console.log("my hobby is: " + hobby)
        if (hobbyCounts[hobbie]) {
          hobbyCounts[hobbie]++;
        } else {
          hobbyCounts[hobbie] = 1;
        }
      });
    });

    // // Sort hobby counts in descending order
    const sortedHobbies = Object.keys(hobbyCounts).sort((a, b) => hobbyCounts[b] - hobbyCounts[a]);

    // Take top 3 most common hobbies
    const labels = sortedHobbies.slice(0, 3);
    const data = labels.map(label => hobbyCounts[label]);

    return { labels, data };
  }

}
