import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage({
  name:"user",
  segment: "user"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedFile: File;
  logo = "assets/imgs/grundriss.png";
  reader: FileReader;


  constructor(public navCtrl: NavController) {
    this.reader = new FileReader();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader.onload = (e: any) => {
      this.logo = e.target.result;
    }
    console.log(this.logo);
    this.reader.readAsDataURL(event.target.files[0]);
  }

}
