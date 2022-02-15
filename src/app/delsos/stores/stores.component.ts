import {Component, OnInit} from '@angular/core';
import {StoreService} from './services/store.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  currentDisplayedStores = [];

  constructor(
    private storeService: StoreService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {

  this.storeService.getAllActivatedStores().subscribe(
    {
      next:(response)=>{
        this.currentDisplayedStores=response;
        console.log(response);
      },
      error:(error:HttpErrorResponse)=>{
        console.log("ERREEEEEEEUR",error);
    }
    }
  )
    console.log(this.currentDisplayedStores);
  }

}
