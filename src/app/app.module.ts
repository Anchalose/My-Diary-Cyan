import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryListComponent } from './components/diary-list/diary-list.component';
import { CreateDiaryComponent } from './components/create-diary/create-diary.component';
import { DiaryEntryDetailComponent } from './components/diary-entry-detail/diary-entry-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyModalContentComponent } from './components/my-modal-content/my-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryListComponent,
    CreateDiaryComponent,
    DiaryEntryDetailComponent,
    MyModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
