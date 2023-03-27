import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDiaryComponent } from './components/create-diary/create-diary.component';
import { DiaryEntryDetailComponent } from './components/diary-entry-detail/diary-entry-detail.component';
import { DiaryListComponent } from './components/diary-list/diary-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DiaryListComponent },
  { path: 'add', component: CreateDiaryComponent },
  { path: 'diary/:id', component: DiaryEntryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

