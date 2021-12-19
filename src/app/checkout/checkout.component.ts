import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  modalRef: any;
  @ViewChild('myModal') myModal: any;

  constructor(private modalService: ModalManager,) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }
  closeModal() {
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }
}
