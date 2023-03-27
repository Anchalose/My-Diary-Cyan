import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../../interfaces/diaryEntry';
import { DiaryService } from '../../services/diaryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.scss']
})

export class CreateDiaryComponent implements OnInit {
  private diaryEntries: DiaryEntry[] = [];
  title: string = '';
  content: string = '';

  constructor(private diaryEntryService: DiaryService,
    private router: Router) { }

  ngOnInit(): void {
    this.diaryEntries = this.diaryEntryService.getEntries();
  }

  addDiaryEntry(): void {
    const createdTime = new Date();
    const id = Math.max(...this.diaryEntries.map(entry => entry.id), 0) + 1;
    const entry = { id, title: this.title, createdTime, content: this.content };
    this.diaryEntryService.addEntry(entry);
    this.router.navigateByUrl("/home");
  }
}
