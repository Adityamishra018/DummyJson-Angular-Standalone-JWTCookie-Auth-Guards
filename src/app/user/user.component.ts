import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy{
  
  users$ : Subscription;
  users : any

  constructor(private dummy : DummyService) {
  }

  ngOnInit(): void {
    this.users$ = this.dummy.getUsers().subscribe(users =>{
      this.users = JSON.stringify(users,null,'\t')
    })
  }

  ngOnDestroy(): void {
    this.users$.unsubscribe()
  }


}
