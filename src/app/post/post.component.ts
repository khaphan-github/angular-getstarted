import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts = () => {
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
    );
  }

  deleteById(id: string): void {
    this.postService.deleteById(id).subscribe(
      () => {
        alert('Post deleted successfully');
        this.getPosts();
      },
    );
  }
}
