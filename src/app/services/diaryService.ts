import { Injectable } from '@angular/core';
import { DiaryEntry } from '../interfaces/diaryEntry';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private entries: DiaryEntry[] = [];

  addEntry(entry: DiaryEntry) {
    this.entries.push(entry);
    console.log(this.entries, "entries");
  }

  getEntries(): DiaryEntry[] {
    return this.entries;
  }

  getEntryById(id: Number) {
    return this.entries.find(entry => entry.id === id);
  }

  removeEntry(id: Number) {
    this.entries = this.entries.filter(entry => entry.id !== id);
  }

  searchEntries(text: string): DiaryEntry[] {
    return this.entries.filter(entry => entry.content.includes(text));
  }
}