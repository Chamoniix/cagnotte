import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.scss']
})
export class SommeComponent {

  @Input()
  public sommeTotale: number;

  constructor() { }

}