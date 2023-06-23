import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly postService: PostService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  createPost() {
    if (this.postForm.invalid) {
      return;
    }

    const { title, body } = this.postForm.value;
    const newPost = new Post(title, body);
    this.postService.create(newPost).subscribe((response) => {
      alert('Post create successfully');
      this.router.navigate(['/posts']);
    });
  }

}
