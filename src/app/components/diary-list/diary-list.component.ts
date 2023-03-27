import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../../interfaces/diaryEntry';
import { DiaryService } from '../../services/diaryService';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MyModalContentComponent } from '../my-modal-content/my-modal-content.component';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.scss']
})
export class DiaryListComponent implements OnInit {

  public entries: DiaryEntry[] = [];
  searchQuery: string = '';
  searchResults: DiaryEntry[] = [];

  constructor(private diaryService: DiaryService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.entries = this.diaryService.getEntries();
  }

  addDiary() {
    this.router.navigateByUrl("/add");
  }

  removeEntry(id: Number) {
    this.diaryService.removeEntry(id);
    this.entries = this.diaryService.getEntries();
  }

  searchEntries(): void {
    this.entries = this.diaryService.searchEntries(this.searchQuery);
  }
  openPopup() {
    const modalRef: NgbModalRef = this.modalService.open(MyModalContentComponent);
    modalRef.componentInstance.modalRef = modalRef;
  }

}
