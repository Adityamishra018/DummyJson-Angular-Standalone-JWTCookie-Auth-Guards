import { Component } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

  me$ : Subscription;
  me : any

  constructor(private dummy : DummyService) {
  }

  ngOnInit(): void {
    this.me$ = this.dummy.getMe().subscribe(me =>{
      this.me = JSON.stringify(me,null,'\t')
    })
  }

  ngOnDestroy(): void {
    this.me$.unsubscribe()
  }

}
