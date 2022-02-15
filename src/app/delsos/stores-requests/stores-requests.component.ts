import {Component, OnInit} from '@angular/core';
import {StoreService} from '../stores/services/store.service';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '../stores/model/store.model';

@Component({
  selector: 'app-stores-requests',
  templateUrl: './stores-requests.component.html',
  styleUrls: ['./stores-requests.component.scss']
})
export class StoresRequestsComponent implements OnInit {

  currentDisplayedStores = [];

  constructor(
    private storeService: StoreService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
  }

  clickedStore: Store;

  ngOnInit(): void {

    this.storeService.getAllDesactivatedStores().subscribe(
      {
        next: (response) => {
          this.currentDisplayedStores = response;
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          console.log('ERREEEEEEEUR', error);
        }
      }
    );
    console.log(this.currentDisplayedStores);
  }

  closeResult = '';

  openModal(store, content) {
    this.clickedStore = store;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  accept(modal) {
    console.log('closing modal');
    this.storeService.acceptStoreRequest(this.clickedStore._id).subscribe({
      next: (response) => {
        this.currentDisplayedStores = this.currentDisplayedStores.filter((obj) => {
          return obj != this.clickedStore;
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        modal.close();
      }
    });
    //  modal.close();
  }

  declineRequest(modal: any) {
    this.storeService.deleteStore(this.clickedStore._id).subscribe({
      next: (response) => {
        this.currentDisplayedStores = this.currentDisplayedStores.filter((obj) => {
          return obj != this.clickedStore;
        });

      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        modal.close();
      }
    });

  }
}
