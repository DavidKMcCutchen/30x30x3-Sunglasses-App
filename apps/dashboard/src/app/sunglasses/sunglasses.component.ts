import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sunglasses, emptySunglasses } from '@sunglasses/api-interfaces';
import { SunglassesFacade } from '@sunglasses/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'sunglasses-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.scss']
})
export class SunglassesComponent implements OnInit {
  sunglasses$: Observable<Sunglasses[]> = this.sunglassesFacade.allSunglasses$;
  selectedSunglass$: Observable<Sunglasses> = this.sunglassesFacade.selectedSunglass$;

  form: FormGroup;

  constructor(
    private sunglassesFacade: SunglassesFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.reset();
    this.sunglassesFacade.loadSunglasses();
  };

  selectedSunglass(sunglass: Sunglasses) {
    this.sunglassesFacade.selectSunglass(sunglass.id);
    this.form.patchValue(sunglass);
  };

  reset() {
    this.selectedSunglass(emptySunglasses);
    this.form.reset();
  }

  createSunglass(sunglass: Sunglasses) {
    this.sunglassesFacade.createSunglass(sunglass);
    this.form.reset();
  };

  updateSunglass(sunglass: Sunglasses) {
    this.sunglassesFacade.updateSunglass(sunglass);
    this.form.reset();
  };

saveSunglass(sunglass: Sunglasses) {
  sunglass.id
  ? this.sunglassesFacade.updateSunglass(sunglass)
  : this.sunglassesFacade.createSunglass(sunglass);
};

deleteSunglass(sunglassId: string) {
  this.sunglassesFacade.deleteSunglass(sunglassId);
  this.form.reset;
};

cancel() {
  this.reset();
};

private initForm() {
  this.form = this.formBuilder.group({
    id: null,
    brand: ['', Validators.required],
    style: ['', Validators.required],
    lensColor: ['', Validators.required],
    frameColor: ['', Validators.required],
    lensOpacity: ['', Validators.required],
    polarized: ['']
  })
}

}
