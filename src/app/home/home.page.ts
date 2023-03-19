import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // for displaying the number of checkings
  first_or_second_check: string[]= ['Prima masuratoare', 'A doua masuratoare'];

  // blood preasure for left and right hand sistolical and diastolical values
  pr_r_sis: number;
  pr_r_dis: number;
  pr_l_sis: number;
  pr_l_dis: number;

  // blood preasure normal values
  optimal_pr_sis=135;
  optimal_pr_dis=85;

  // keeping track of how many times the user has entered exiding values
  no_tries: number;

  constructor(private alertController: AlertController, public router: Router) {
    this.pr_r_sis=NaN;
    this.pr_r_dis=NaN;
    this.pr_l_sis=NaN;
    this.pr_l_dis=NaN;

    this.no_tries=0;
  }

  AllValuesExisting(){
    return isNaN(this.pr_r_sis) || isNaN(this.pr_r_dis) || isNaN(this.pr_l_sis) || isNaN(this.pr_l_dis)
  }

  async ExcidingValues() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      cssClass: 'ion-text-center',
      subHeader: 'O nu, valorile tensiuni depasesc limitele normale!',
      message: 'Incearca sa iei tensiunea inca odata.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  RedirectToConratulationPage(){
    this.router.navigateByUrl('/congrats');
  }

  SaveBloodPreasure(){
    if(this.pr_r_sis > this.optimal_pr_sis || this.pr_l_sis > this.optimal_pr_sis ||this.pr_r_dis > this.optimal_pr_dis || this.pr_l_dis > this.optimal_pr_dis){
      this.no_tries++;
      
      if(this.no_tries < 2){
        this.ExcidingValues();
      }else{
        console.log('It should be made an alert for the case in wheach blood preassure is in fact too high.\n So that the user to not keep chacking the same thing.');
      }
    }else{
      this.RedirectToConratulationPage();
    }
  }

}
