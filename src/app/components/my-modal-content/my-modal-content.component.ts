import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal-content',
  templateUrl: './my-modal-content.component.html',
  styleUrls: ['./my-modal-content.component.scss']
})
export class MyModalContentComponent {
  @Input() modalRef: NgbModalRef;
  constructor(private modal: NgbModal) { }

  close() {
    this.modalRef.close();
  }
}
