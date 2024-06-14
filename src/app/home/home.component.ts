import { Component } from '@angular/core';
import { ApiService } from '../sevice/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = []
  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.api.allProducts().subscribe({
      next: (res: any) => {
        console.log(res)
        this.products = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })

  }

  addWish(product: any) {
    if (sessionStorage.getItem('token')) {
      const { id, title, description, category, price, image, rating } = product
      this.api.addWishlist({ id, title, description, category, price, image, rating }).subscribe({
        next: (res: any) => {
          this.toastr.success("Product Added To Wishlist!!")
        },
        error: (err: any) => {
          console.log(err);
          this.toastr.error(err.error)
        }
      })
    }
    else {
      this.toastr.warning("Please Login First!!")
    }
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
