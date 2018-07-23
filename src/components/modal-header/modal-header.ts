import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the ModalHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-header',
  templateUrl: 'modal-header.html'
})
export class ModalHeaderComponent {

  text: string;
  @Input() pageTitle: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ModalHeaderComponent Component');
    this.text = 'Hello World';
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
