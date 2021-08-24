import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentModule } from '@sunglasses/environment'
import { environment } from '../environments/environment';
import { CoreDataModule } from "@sunglasses/core-data";
import { CoreStateModule } from "@sunglasses/core-state";
import { MaterialModule } from '@sunglasses/material';
import { UiLoginModule } from '@sunglasses/ui-login';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { SunglassesDetailsComponent } from './sunglasses/sunglasses-details/sunglasses-details.component';
import { SunglassesListComponent } from './sunglasses/sunglasses-list/sunglasses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SunglassesComponent,
    SunglassesListComponent,
    SunglassesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

