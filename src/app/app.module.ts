import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { MissionComponent } from './pages/information/mission/mission.component';
import { ValuesComponent } from './pages/information/values/values.component';
import { VisionComponent } from './pages/information/vision/vision.component';
import { StrategicGoalsComponent } from './pages/information/strategic-goals/strategic-goals.component';
import { OfficialDocumentsComponent } from './pages/information/official-documents/official-documents.component';

import { HeadComponent } from './pages/management/head/head.component';
import { DeputyComponent } from './pages/management/deputy/deputy.component';
import { RepresentativesComponent } from './pages/management/representatives/representatives.component';

import { NewsComponent } from './pages/news/news.component';

import { SpealistsProfessionalPublicationsComponent } from './pages/gallery/spealists-professional-publications/spealists-professional-publications.component'
import { MeetingsMediaContentComponent } from './pages/gallery/meetings-media-content/meetings-media-content.component';

import { MembershipComponent } from './pages/membership/membership.component';

import { PartnersComponent } from './pages/partners/partners.component';

import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    ValuesComponent,
    VisionComponent,
    StrategicGoalsComponent,
    OfficialDocumentsComponent,
    HeadComponent,
    DeputyComponent,
    RepresentativesComponent,
    NewsComponent,
    SpealistsProfessionalPublicationsComponent,
    MeetingsMediaContentComponent,
    MembershipComponent,
    PartnersComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
