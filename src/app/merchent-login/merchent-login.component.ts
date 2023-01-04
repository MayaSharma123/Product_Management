import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Merchent } from '../merchent';
import { MerchentLoginService } from '../merchent-login.service';


@Component({
  selector: 'app-merchent-login',
  templateUrl: './merchent-login.component.html',
  styleUrls: ['./merchent-login.component.css']
})
export class MerchentLoginComponent implements OnInit {
  merchent =new Merchent();
  msg='';
constructor(private _service :MerchentLoginService , private _router :Router){

}

  ngOnInit(): void {
  }
  MerchentLogin(){
    this._service.loginUserFormRemote(this.merchent).subscribe(
   data =>{
      console.log("response recieved")
      this._router.navigate(['welcome'])

   
   },
   error =>{console.log("exception occured");
   this.msg="Bad Credentials , please enter valid emailId or password";
   
   }
   )
     }
   }
