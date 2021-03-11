//****************************************** */
// "LOG IN" USERNAME: admin
// "LOG IN" PASSWORD: 1234
//********************************************* */

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { AddTaskModule } from './add-task/add-task.module';
import { HomeScreenModule } from './home-screen/home-screen.module';
import { LogInModule } from './log-in/log-in.module';
import { IndividualCardModule } from './individual-card/individual-card.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const routes: Routes = [
  { path: '',  redirectTo: 'logIn', pathMatch: 'full'},
  { path: 'dashboard',  loadChildren: () => import('./home-screen/home-screen.module').then(m => m.HomeScreenModule)},
  { path: 'addTask',  loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule)},
  { path: 'individualCard',  loadChildren: () => import('./individual-card/individual-card.module').then(m => m.IndividualCardModule)},
  { path: 'logIn', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)}
]

@NgModule({
  declarations: [AppComponent ],
  imports: [ 
    BrowserModule, 
    AddTaskModule, 
    HomeScreenModule, 
    LogInModule, 
    IndividualCardModule, 
    RouterModule.forRoot(routes), 
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    NoopAnimationsModule, ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {


}
