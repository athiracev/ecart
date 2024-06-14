import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  loginStatus:boolean=false
  user:any=""

  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.loginStatus=true
      const userData= sessionStorage.getItem('userData') || ''
      this.user= JSON.parse(userData).username
    }
    else{
      this.loginStatus=false
      this.user=""
    }
  }

}
