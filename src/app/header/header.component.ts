import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public users: any;
  public filteredUsers: any;
  public searchText = '';
  constructor(private api: ApiService) {
    this.getUsers();
    this.api.paymentSucessFullEmitter.subscribe(resp => {
      this.getUsers();
    });
  }

  ngOnInit() {
  }


  dateObj() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const date = new Date();
    return days[date.getDay()] + ', ' +  months[date.getMonth()] + ' ' + date.getDate();
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
    this.filteredUsers = null;
    this.searchText = '';
    this.api.UserSelectEmitter.emit(user);
  }
}
