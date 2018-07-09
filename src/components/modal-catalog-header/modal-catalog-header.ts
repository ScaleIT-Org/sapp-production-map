import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the ModalCatalogHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-catalog-header',
  templateUrl: 'modal-catalog-header.html'
})
export class ModalCatalogHeaderComponent {

  text: string;
  @Input() pageTitle: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ModalCatalogHeaderComponent Component');
    this.text = 'Hello World';
  }

  closeModal() {
    this.navCtrl.pop();

  }
}
