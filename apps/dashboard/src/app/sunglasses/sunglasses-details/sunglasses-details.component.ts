import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Sunglasses } from '@sunglasses/api-interfaces';


@Component({
  selector: 'sunglasses-sunglasses-details',
  templateUrl: './sunglasses-details.component.html',
  styleUrls: ['./sunglasses-details.component.scss']
})
export class SunglassesDetailsComponent {
  currentSunglass: Sunglasses;
  originalTitle: string;

  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;

  @Input() set sunglass(value: Sunglasses | null) {
    if (value) this.originalTitle = value.brand;
    this.currentSunglass = Object.assign({}, value)
  };
  
  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.save.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  };

}
