import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sevice/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit{

  wishitems:any=[]
  constructor(private api:ApiService,private toastr:ToastrService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.api.getWishlist().subscribe({
        next:(res:any)=>{
          this.wishitems=res
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


  deleteWishlist (id:any){
    this.api.removeWish(id).subscribe({
      next:(res:any)=>{
        this.ngOnInit()
      },
      error:(err:any)=>{
        this.toastr.error(err.error)
      }
    })
  }

  addCart(product: any) {
    if (sessionStorage.getItem('token')) {
      const { id, title, price, image } = product
      this.api.addCart({ id, title, price, image }).subscribe({
        next: (res: any) => {
          this.toastr.success(res)
        },
        error: (err: any) => {
          this.toastr.error(err.error)
        }
      })
    }
    else {
      this.toastr.warning("Please Login First")
    }
  }

}
