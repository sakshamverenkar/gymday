import {Component, OnInit, NgZone} from '@angular/core';
import {ApiService} from '../../services/api.service';

declare const swal: any;

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  public checkoutObj: any;
  public serviceTax = 10;
  public securityDeposit = 2000;
  public totalPrice = 0;
  public paymentRecieved = false;

  constructor(private api: ApiService, private ngzone: NgZone) {
    this.checkoutObj = this.api.checkoutObj;
    this.api.planSelectEmitter.subscribe(value => {
      this.ngzone.run(() => {
        this.checkoutObj = this.api.checkoutObj;
        this.calculateTotalPrice();
      });
      console.log('plans, this', this.api.checkoutObj);
    });
  }

  calculateTotalPrice() {
    this.totalPrice = 0 ;
    Object.keys(this.api.checkoutObj['plan']).map((key) => {
      console.log('key, idx', key, this.api.checkoutObj['plan'][key]);
      let  discount_amt = 0;
      if (this.api.checkoutObj['plan'][key].offer) {
        discount_amt = ((this.api.checkoutObj['plan'][key].offer.discount / 100)
          * this.api.checkoutObj['plan'][key].price);
      }
      this.totalPrice += this.api.checkoutObj['plan'][key].price - discount_amt;
    });
  }
  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {key: key, value: obj[key]};
    });
  }

  ngOnInit() {
  }

  clearOffer(item, event) {
    this.checkoutObj['plan'][item.key]['offer']  = null;
    this.api.checkoutObj['plan'][item.key]['offer']  = null;
    console.log(this.api.checkoutObj['plan'][item.key]['offer']);
    this.calculateTotalPrice();
    event.preventDefault();
  }
  clearPlan(item, event) {
    event.preventDefault();
    this.api.checkoutObj['plan'][item.key] = null;
    this.checkoutObj['plan'][item.key] = null;
    this.api.clearPlanEmitter.emit(item);
    // this.checkoutObj
  }

  changePaymentRecieved() {
    if (this.api.checkoutObj['user']) {
      this.paymentRecieved = true;
    } else {
      swal({
        type: 'error',
        title: 'Please select  a User'
      });
    }
  }

  paymentRecievedSuccess() {
    swal({
      type: 'success',
      title: 'Transaction Complete',
      text: ' Invoice sent to ' + this.checkoutObj['user'].firstname + ' ' + this.checkoutObj['user'].lastname
    }).then(resp => {
      this.ngzone.run(() => {
        this.checkoutObj = [];
        this.api.checkoutObj = [];
        this.api.checkoutObj['plan'] = [];
        this.api.UserSelectEmitter.emit(null);
        this.totalPrice = 0;
        this.api.paymentSucessFullEmitter.emit(true);
        this.api.plans.map(plan => {
          plan.planDetails.map(detail => {
            detail.monthDetails.map(month => {
              month['active'] = 0;
            });
          });
        });
      });
    });
  }

}
