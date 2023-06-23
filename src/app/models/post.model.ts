export class Post {
  id: any;
  userId = '1';
  title: string;
  body: string;
  constructor(title: string, body: string, id?: number) {
    this.title = title;
    this.body = body;
    this.id = id;
  }
}