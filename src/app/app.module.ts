import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/main/form/form.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LoginComponent } from './components/main/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
///////////////////
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { localStroageService } from './components/service/localstorage.service';
import { PersonalInformationStepComponent } from './components/main/form/personal-information-step/personal-information-step.component';
import { MorePersonalInformationStepComponent } from './components/main/form/more-personal-information-step/more-personal-information-step.component';
import { CarInformationStepComponent } from './components/main/form/car-information-step/car-information-step.component';
import { CompletionStepComponent } from './components/main/form/completion-step/completion-step.component';
import { genericFunction } from './components/functions/genericfunc.service';
import { HttpClientModule } from '@angular/common/http';
import { dashboardFunctions } from './components/functions/dashboared.service';
import { CityMapComponent } from './components/city-map/city-map.component';
// import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    PersonalInformationStepComponent,
    MorePersonalInformationStepComponent,
    CarInformationStepComponent,
    CompletionStepComponent,
    CityMapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    /////////////
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    // GoogleMapsModule,
  ],
  providers: [localStroageService, genericFunction, dashboardFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
