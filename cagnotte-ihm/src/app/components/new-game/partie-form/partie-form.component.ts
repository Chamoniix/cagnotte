import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Partie} from "../../../model/partie.model";
import * as moment from "moment";

@Component({
  selector: 'app-partie-form',
  templateUrl: './partie-form.component.html',
  styleUrls: ['./partie-form.component.scss']
})
export class PartieFormComponent implements OnInit {

  private partie: Partie;

  @Output()
  public eventPartieNext = new EventEmitter<Partie>();

  constructor() { }

  ngOnInit() {
  }

  public partieNext() {
    this.eventPartieNext.emit(this.partie);
  }

}
