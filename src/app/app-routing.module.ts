import { ListauthorComponent } from './listauthor/listauthor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiteurComponent } from './visiteur/visiteur.component';

import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { ExposantComponent } from './exposant/exposant.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  {
    path: 'visiteur',
    component: VisiteurComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'addPost',
    component: AddPostComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'update/:id',
    component: UpdatePostComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'listauthor',
    component: ListauthorComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'detailsPost/:id',
    component: DetailsPostComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'exposant',
    component: ExposantComponent,
    canActivate: [AuthGaurdService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGaurdService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
