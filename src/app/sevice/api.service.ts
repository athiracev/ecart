import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:any ="http://localhost:3000"

  constructor(private http:HttpClient) { }

  allProducts(){
    return this.http.get(`${this.base_url}/all-products`)
  }

  getProduct(id:any){
    return this.http.get(`${this.base_url}/get-product/${id}`)

  }

  userRegister(data:any){
    return this.http.post(`${this.base_url}/register`,data)
  }

  userLogin(data:any){
    return this.http.post(`${this.base_url}/login`,data)
  }


  appendTokenToHeader(){ // to congigure header with token-HttpHeader
    const token = sessionStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
      headers= headers.append('Authorization', `Bearer ${token}`)
    }
    return {headers}

  }

  addWishlist(data:any){
    return this.http.post(`${this.base_url}/addwishlist`,data,this.appendTokenToHeader())
  }

  getWishlist(){
    return this.http.get(`${this.base_url}/getwishlist`,this.appendTokenToHeader())
  }

  removeWish(id:any){
    return this.http.delete(`${this.base_url}/deletewishlist/${id}`,this.appendTokenToHeader())
  }

  addCart(data:any){
    return this.http.post(`${this.base_url}/addcart`,data,this.appendTokenToHeader())

  }

  getCart(){
    return this.http.get(`${this.base_url}/getcart`,this.appendTokenToHeader())
  }

  removeCart(id:any){
    return this.http.delete(`${this.base_url}/removecart/${id}`,this.appendTokenToHeader())
  }

}




