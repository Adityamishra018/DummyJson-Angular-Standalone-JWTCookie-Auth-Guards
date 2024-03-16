import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  posts$ : Subscription;
  posts : any

  constructor(private dummy : DummyService) {
  }

  ngOnInit(): void {
    this.posts$ = this.dummy.getPosts().subscribe(posts =>{
      this.posts = JSON.stringify(posts,null,'\t')
    })
  }

  ngOnDestroy(): void {
    this.posts$.unsubscribe()
  }
}
