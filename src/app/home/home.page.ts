import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  // blood preasure for left and right hand sistolical and diastolical values
  pr_r_sis: number;
  pr_r_dis: number;
  pr_l_sis: number;
  pr_l_dis: number;

  // blood preasure normal values
  optimal_pr_sis=135;
  optimal_pr_dis=85;

  constructor() {
    this.pr_r_sis=NaN;
    this.pr_r_dis=NaN;
    this.pr_l_sis=NaN;
    this.pr_l_dis=NaN;
  }

  AllValuesExisting(){
    return isNaN(this.pr_r_sis) || isNaN(this.pr_r_dis) || isNaN(this.pr_l_sis) || isNaN(this.pr_l_dis)
  }

  SaveBloodPreasure(){
    if(this.pr_r_sis > this.optimal_pr_sis || this.pr_l_sis > this.optimal_pr_sis ||this.pr_r_dis > this.optimal_pr_dis || this.pr_l_dis > this.optimal_pr_dis){
      console.log("I have to add an alert for exeding normal values");
    }else{
      console.log("I have to redirect the user to the congratulations page");
    }
  }

}
