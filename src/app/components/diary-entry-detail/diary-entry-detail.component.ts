import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryEntry } from '../../interfaces/diaryEntry';
import { DiaryService } from '../../services/diaryService';

@Component({
  selector: 'app-diary-entry-detail',
  templateUrl: './diary-entry-detail.component.html',
  styleUrls: ['./diary-entry-detail.component.scss']
})
export class DiaryEntryDetailComponent implements OnInit {
  entry: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private diaryEntryService: DiaryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.entry = this.diaryEntryService.getEntryById(Number(id));
  }
  returnToList() {
    this.router.navigateByUrl("/home");
  }
}
