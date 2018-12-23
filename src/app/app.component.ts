import { Component, OnInit } from '@angular/core';
import { SocialService } from './social.service';

interface Post{
  userId : string;
  id : string;
  title : string;
  body : string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  commentsList : any[];
  photosList : any[];
  albumsList : any[];
  postsList : any[];
  tasksList : any[];
  usersList : any[];
  display : boolean = false;
  post : Post;

  constructor(public socialservice: SocialService){

  }
  
  ngOnInit() { 
    this.socialservice.comments().subscribe(data =>      
        this.commentsList = data        
    );
    this.socialservice.photos().subscribe(data =>
      this.photosList = data
    );
    this.socialservice.albums().subscribe(data =>
      this.albumsList = data
    );
    this.socialservice.posts().subscribe(data =>
      this.postsList = data
    );
    this.socialservice.tasks().subscribe(data =>
      this.tasksList = data
    );
    this.socialservice.users().subscribe(data =>
      this.usersList = data
    );
    this.post = {
      userId : '',
      id : '',
      title : '',
      body : ''
    };
   }

   showDialog() {
    this.display = true;
  }
  savePost(){
    this.display = false;
  }
}
