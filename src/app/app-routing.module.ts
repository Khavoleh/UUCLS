import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'strategic-goals', component: StrategicGoalsComponent },
  { path: 'official-documents', component: OfficialDocumentsComponent },
  { path: 'head', component: HeadComponent },
  { path: 'deputy', component: DeputyComponent },
  { path: 'representatives', component: RepresentativesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'specialists-professional-publications', component: SpealistsProfessionalPublicationsComponent },
  { path: 'meetings-media-content', component: MeetingsMediaContentComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
