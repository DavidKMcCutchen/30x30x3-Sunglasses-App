import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sunglasses } from "@sunglasses/api-interfaces";

@Component({
  selector: 'sunglasses-sunglasses-list',
  templateUrl: './sunglasses-list.component.html',
  styleUrls: ['./sunglasses-list.component.scss']
})
export class SunglassesListComponent {
  @Input() sunglasses: Sunglasses[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
