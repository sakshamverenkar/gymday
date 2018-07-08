import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  public leftSideBarData = [
    {name: 'Point of Sale', active: 0, image: '<i class="fas fa-shopping-cart"></i>'},
    {name: 'Dashboard', active: 1, image: '<i class="fas fa-chart-line"></i>'},
    {name: 'Customers', active: 0, image: '<i class="fas fa-user-friends"></i>'},
    {name: 'Marketing', active: 0, image: '<i class="fas fa-bullhorn"></i>'},
    {name: 'Administration', active: 0, image: '<i class="fas fa-user-cog"></i>'},
    {name: 'Settings', active: 0, image: '<i class="fas fa-cog"></i>'},
  ];
  public userData = [
    {
      firstname: 'Rama',
      lastname: 'Chatterjee',
      phone: '9769255504',
      status: 0,
      type: 'MEMBER'
    },
    {
      firstname: 'Ramdev',
      lastname: 'Sinha',
      phone: '9769255504',
      status: 1,
      type: 'MEMBER'
    },
    {
      firstname: 'Ramesh',
      lastname: 'Bedi',
      phone: '9769255504',
      status: 2,
      type: 'MEMBER'
    },
    {
      firstname: 'Ramesh',
      lastname: 'Mehan',
      phone: '9769255504',
      status: 3,
      type: 'PROSPECT'
    },
    {
      firstname: 'Ramphal ',
      lastname: 'Gopal',
      phone: '9769255504',
      status: 4,
      type: 'PROSPECT'
    },
    {
      firstname: 'Rama',
      lastname: 'Gopal',
      phone: '9769255504',
      status: 4,
      type: 'PROSPECT'
    },
    {
      firstname: 'Rama',
      lastname: 'Mehan',
      phone: '9769255504',
      status: 2,
      type: 'MEMBER'
    },
    {
      firstname: 'Ramesh',
      lastname: 'Chatterjee',
      phone: '9769255504',
      status: 1,
      type: 'MEMBER'
    },
    {
      firstname: 'rakesh',
      lastname: 'Chatterjee',
      phone: '9769255504',
      status: 4,
      type: 'PROSPECT'
    },

  ];
  public checkoutObj = [];
  public plans = [
    {
      title: 'Gymnasium',
      planDetails: [
        {
          name: 'Standard',
          monthDetails: [
            {
              month: '1 month', price: 4400, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 11500, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 20000, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 28000, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 35000, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
        {
          name: 'Premium',
          monthDetails: [
            {
              month: '1 month', price: 5000, offers: [
                {planname: 'Flat5', description: '15% diwali discount on all memeberships', discount: 5},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 12000, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 22000, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 30000, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 38000, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
      ]
    },
    {
      title: 'Swimming',
      planDetails: [
        {
          name: 'Standard',
          monthDetails: [
            {
              month: '1 month', price: 4400, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 11500, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 20000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 28000, active: 0, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 35000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
        {
          name: 'Premium',
          monthDetails: [
            {
              month: '1 month', price: 5000, active: 0, offers: [
                {planname: 'Flat5', description: '15% diwali discount on all memeberships', discount: 5},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 12000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 22000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 30000, active: 0, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 38000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
      ]
    },
    {
      title: 'Yoga',
      planDetails: [
        {
          name: 'Standard',
          monthDetails: [
            {
              month: '1 month', price: 4400, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 11500, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 20000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 28000, active: 0, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 35000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
        {
          name: 'Premium',
          monthDetails: [
            {
              month: '1 month', price: 5000, active: 0, offers: [
                {planname: 'Flat5', description: '15% diwali discount on all memeberships', discount: 5},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 12000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 22000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 30000, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 38000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
      ]
    },
    {
      title: 'Tennis',
      planDetails: [
        {
          name: 'Standard',
          monthDetails: [
            {
              month: '1 month', price: 4400, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 11500, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 20000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 28000, active: 0, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 35000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
        {
          name: 'Premium',
          monthDetails: [
            {
              month: '1 month', price: 5000, active: 0, offers: [
                {planname: 'Flat5', description: '15% diwali discount on all memeberships', discount: 5},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '3 month', price: 12000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '6 month', price: 22000, active: 0, offers: [
                {planname: 'Flat10', description: '10% diwali discount on all memeberships', discount: 10},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '9 month', price: 30000, active: 0, offers: [
                {planname: 'Flat12', description: '12% diwali discount on all memeberships', discount: 12},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
            {
              month: '12 month', price: 38000, active: 0, offers: [
                {planname: 'Flat25', description: '25% diwali discount on all memeberships', discount: 15},
                {planname: 'Corporate Disount', description: 'Available on customers with corporate jobs.', discount: 15},
              ]
            },
          ]
        },
      ]
    },
  ];
  public planSelectEmitter: EventEmitter<any> = new EventEmitter();
  public UserSelectEmitter: EventEmitter<any> = new EventEmitter();
  public clearPlanEmitter: EventEmitter<any> = new EventEmitter();
  public paymentSucessFullEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.checkoutObj['plan'] = [];
  }


  getLeftSideBarItems() {
    return new Observable(observer => {
      observer.next(this.leftSideBarData);
      observer.complete();
    });
  }

  getUserDetails() {
    return new Observable(observer => {
      observer.next(this.userData);
      observer.complete();
    });
  }

  getPlans() {
    return new Observable(observer => {
      observer.next(this.plans);
      observer.complete();
    });
  }

}
