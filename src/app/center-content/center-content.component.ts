import {Component, OnInit, ElementRef, HostListener} from '@angular/core';
import {ApiService} from '../../services/api.service';

declare const swal: any;

@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss'],
})
export class CenterContentComponent implements OnInit {

  public users: any;
  public filteredUsers: any;
  public searchText = '';
  public plans: any;
  public selectedPlan: any;
  public selectedPlanTitle = '';
  public currentPlansDetail: any;
  public currentPlansDetailTitle: any;
  public planSelected: any;
  public selectedmonth: any;
  public selectUserObj = null;
  public filteredOffers: any;
  public selectedOffer: any;
  public showOffers = false;
  @HostListener('document:click', ['$event']) clickedOutside($event){
    // here you can hide your menu
    this.filteredUsers = null;
    this.searchText = '';
    this.showOffers = false;
  }

  constructor(private api: ApiService, private eRef: ElementRef) {
    this.getUsers();
    this.getPlans();
    this.api.paymentSucessFullEmitter.subscribe(resp => {
      this.getUsers();
      this.getPlans();
    });
    this.api.UserSelectEmitter.subscribe((value) => {
      if (value) {
        this.api.checkoutObj['user'] = value;
      }

      this.selectUserObj = value;
    });
    this.api.clearPlanEmitter.subscribe(value => {
      const selectedPlan = this.plans.filter(plan => plan.title === value.key)[0];
      const currentPlansDetail = selectedPlan.planDetails.filter(plan => plan.name === value.value.plan)[0];
      currentPlansDetail.monthDetails.map(month => {
        month.active = 0;
      });
    });
  }

  ngOnInit() {
  }

  getUsers() {
    this.api.getUserDetails().subscribe(users => {
      this.users = users;
    });
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getMemberColor(status) {
    switch (status) {

      case 0: {
        return 'red';
      }
      case 1: {
        return 'green';
      }
      case 2: {
        return 'grey';
      }
    }
  }

  getProspectColor(status) {
    switch (status) {
      case 3: {
        return 'red';
      }
      case 4: {
        return 'orange';
      }
    }
  }

  selectUser(user, event) {
    event.preventDefault();
    event.stopPropagation();
    this.api.checkoutObj['user'] = user;
    this.selectUserObj = user;
    this.filteredUsers = null;
  }

  getPlans() {
    this.api.getPlans().subscribe((plans) => {
      this.plans = plans;
      this.selectedPlan = this.plans[0];
      this.selectedPlanTitle = this.selectedPlan.title;
      this.currentPlansDetail = this.selectedPlan.planDetails[0];
      this.currentPlansDetailTitle = this.currentPlansDetail.name;
      this.filteredOffers = this.currentPlansDetail.monthDetails[0].offers;
      this.selectedOffer = this.filteredOffers[0];
    });
  }

  filterPlan(title) {
    this.selectedPlan = this.plans.filter(plan => plan.title === title)[0];
    this.selectedPlanTitle = this.selectedPlan.title;
    this.currentPlansDetail = this.selectedPlan.planDetails[0];
    this.currentPlansDetailTitle = this.currentPlansDetail.name;
    this.filteredOffers = this.currentPlansDetail.monthDetails[0].offers;
    this.selectedOffer = this.filteredOffers[0];
  }

  filterPlanDetail(name) {
    this.currentPlansDetail = this.selectedPlan.planDetails.filter(plan => plan.name === name)[0];
    this.currentPlansDetailTitle = this.currentPlansDetail.name;
    this.filteredOffers = this.currentPlansDetail.monthDetails[0].offers;
    this.selectedOffer = this.filteredOffers[0];
  }

  selectPlan(plan, monthdetail) {
    if (this.api.checkoutObj['user']) {
      this.filteredOffers = monthdetail.offers;
      this.selectedOffer = this.filteredOffers[0];
      this.planSelected = plan;
      this.selectedmonth = monthdetail;
      plan.monthDetails.map(month => {
        month.active = 0;
      });
      monthdetail.active = 1;
      this.filteredOffers = monthdetail.offers;
      // this.api.checkoutObj['plan'] = [];
      this.api.checkoutObj['plan'][this.selectedPlan.title] = {
        plan: plan.name,
        month: monthdetail.month,
        price: monthdetail.price,
        offer: this.selectedOffer,
        title: this.selectedPlan.title
      };
      this.api.planSelectEmitter.emit();
    } else {
      swal({
        type: 'error',
        text: 'Choose a user'
      });
    }
  }

  selectOffer(offer, event) {
    try {
      event.preventDefault();
      event.stopPropagation();

      this.api.checkoutObj['plan'][this.selectedPlan.title] = {
        plan: this.planSelected.name,
        month: this.selectedmonth.month,
        price: this.selectedmonth.price,
        offer: offer,
        title: this.selectedPlan.title
      };
      this.selectedOffer = offer;
      this.showOffers = false;
      this.api.planSelectEmitter.emit();
    } catch (err) {
      swal({
        type: 'error',
        text: 'Select a plan'
      });
      this.showOffers = false;
    }
  }

  toggleOffer(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showOffers = !this.showOffers;
  }
  clearUser() {
    this.api.checkoutObj['user'] = null;
    this.selectUserObj = null;
    this.filteredUsers = null;
    this.searchText = '';
  }

}
