import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sevice/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any =[]

  constructor(private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.api.getCart().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.cartItems=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }


  deleteCartItem(id:any){
    this.api.removeCart(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("item deleted")
        this.ngOnInit()
      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }
   
  }


 


