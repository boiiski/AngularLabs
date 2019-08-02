import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username: string = "";
  pwd: string = "";
  user:any = [
    {username: "sam", pwd: "123"},
    {username: "jack", pwd: "123"},
    {username: "john", pwd: "123"}
  ];

  constructor(private router: Router, private el: ElementRef){}

  ngOnInit() {
  }

  itemClicked() {
    let valid = false;
    for (let i=0; i<this.user.length; i++ ){
      if (this.username == this.user[i].username && this.pwd == this.user[i].pwd){
        valid = true;
      }
    }
    let right = this.el.nativeElement.querySelector('#loginform');
    let wrong = this.el.nativeElement.querySelector('#errormsg');

    if (valid == true) {
      right.classList.remove('fail');
      right.classList.add('success');

      wrong.classList.remove('showmessage');
      wrong.classList.add('hidemessage');
      this.router.navigateByUrl('/account');
    } else {
      right.classList.remove('success');
      right.classList.add('fail');
      wrong.classList.remove('hidemessage');
      wrong.classList.add('showmessage');
    }
  }
}

