import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sevice/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit{

  wishitems:any=[]
  constructor(private api:ApiService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.api.getWishlist().subscribe({
        next:(res:any)=>{
          console.log(res)
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
    }
    else{
      console.log('please login')
    }
  }

}
