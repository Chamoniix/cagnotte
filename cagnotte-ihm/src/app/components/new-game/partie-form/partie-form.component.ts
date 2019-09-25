import {Component, EventEmitter, Output} from '@angular/core';
import {Partie} from "../../../model/partie.model";
import * as moment from "moment";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partie-form',
  templateUrl: './partie-form.component.html',
  styleUrls: ['./partie-form.component.scss']
})
export class PartieFormComponent {

  private partie = new Partie({});
  public partieFormGroup: FormGroup;

  @Output()
  public eventPartieNext = new EventEmitter<Partie>();

  constructor(private formBuilder: FormBuilder) {
    this.partieFormGroup = this.formBuilder.group({
          'type': ['', [Validators.required]],
          'nbJoueurs': ['', [Validators.required, Validators.max(4), Validators.min(1)]]
        }
    )
  }

  public partieNext() {
    if (this.partieFormGroup.valid) {
      this.partie.typeJeu = this.partieFormGroup.get('type').value;
      this.partie.nombreJoueurs = this.partieFormGroup.get('nbJoueurs').value;
      this.partie.date = moment();
      this.eventPartieNext.emit(this.partie);
    }

  }

}
