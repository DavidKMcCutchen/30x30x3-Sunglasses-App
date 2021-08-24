import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunglassesEnvironment } from "./sunglasses.model";
import { SUNGLASSES_ENVIRONMENT } from "./sunglasses.token";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: SunglassesEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: SUNGLASSES_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }  
}
