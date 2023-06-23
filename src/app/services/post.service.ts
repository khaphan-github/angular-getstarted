import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  constructor(private readonly httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const postsEndpoint = 'https://dummyjson.com/posts';
    return this.httpClient
      .get<{ posts: Post[] }>(postsEndpoint)
      .pipe(
        map((response) => response.posts)
      );
  }


  create(post: Post): Observable<Post> {
    const url = 'https://dummyjson.com/posts/add';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post<Post>(url, post, { headers });
  }

  deleteById(id: string): Observable<void> {
    const url = `https://dummyjson.com/posts/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
