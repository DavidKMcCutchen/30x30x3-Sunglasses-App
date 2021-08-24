import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunglassesFacade } from './sunglasses/sunglasses.facade';

@NgModule({
  imports: [CommonModule],
  providers: [SunglassesFacade]
})
export class CoreStateModule {}
