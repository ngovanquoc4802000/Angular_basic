import { Component } from '@angular/core';
import { Biography } from '../biography/biography';
import { Account } from '../account/account';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Biography, Account],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {

}
