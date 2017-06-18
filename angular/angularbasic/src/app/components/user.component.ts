import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service'

interface Address {
    street : string;
    city : string;
    state : string;
}
interface Post {
    id : number;
    title : string;
    body : string;
}

@Component({moduleId: module.id, selector: 'user', templateUrl: "./user.component.html", providers: [PostsService]})
export class UserComponent implements OnInit {
    name : string;
    email : string;
    address : Address;
    hobbies : string[];
    showHobbies : boolean;
    posts : Post[];

    constructor(private postsService : PostsService) {}

    ngOnInit() {
        this.name = "Sandrapati Anilkumar";
        this.email = "sandrapati.anilkumar@gmail.com";
        this.address = {
            street: 'ACGaurds',
            city: 'Hyderabad',
            state: 'Telangana'
        }
        this.hobbies = [
            'cricket', 'hockey', 'chess'
        ],
        this.showHobbies = false,
        this
            .postsService
            .getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
    }

    // toggleHobbies(){     if(this.showHobbies==true){
    // this.showHobbies=false;     } else {        this.showHobbies=true;     } }
    addHobby(hobby) {
        this
            .hobbies
            .push(hobby);
    }
    deleteHobby(i) {
        debugger;
        this
            .hobbies
            .splice(i, 1);
    }
}