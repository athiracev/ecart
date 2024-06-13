import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../sevice/api.service';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[a-zA-Z@_0-9]*')]]
  })

  constructor(private fb:FormBuilder,private toastr:ToastrService,private api:ApiService,private router:Router){}


  handleSubmit(){
    this.api.userLogin(this.logForm.value).subscribe({
      next:(res:any)=>{
        this.toastr.success("Login Successfully!!")
        this.logForm.reset()
        this.router.navigateByUrl('')
        sessionStorage.setItem('token',res.token)
        sessionStorage.setItem('user-details',JSON.stringify(res.existingUser))
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error(err.error)
        
      }
    })
  }

}