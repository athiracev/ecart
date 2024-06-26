import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../sevice/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pid: any = ""
  product:any={}

  constructor(private ar: ActivatedRoute, private api: ApiService) {

    this.ar.params.subscribe((res: any) => {
      console.log(res)
      this.pid = res.id
    })
  }

  ngOnInit(): void {
    this.api.getProduct(this.pid).subscribe({
      next: (res: any) => {
        console.log(res)
        this.product=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
