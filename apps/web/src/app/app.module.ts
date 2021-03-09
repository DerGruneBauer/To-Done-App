import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddTaskModule } from './add-task/add-task.module';
import { HomeScreenModule } from './home-screen/home-screen.module';
import { LogInModule } from './log-in/log-in.module';
import { IndividualCardModule } from './individual-card/individual-card.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';



const routes: Routes = [
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard',  loadChildren: () => import('./home-screen/home-screen.module').then(m => m.HomeScreenModule)},
  { path: 'addTask',  loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule)},
  { path: 'individualCard',  loadChildren: () => import('./individual-card/individual-card.module').then(m => m.IndividualCardModule)},
  { path: 'logIn', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)}
]

const firebaseConfig = {
  apiKey: "AIzaSyDHCCV_uGFKVXEwGVUAYjSNuJD9qBLn4qQ",
  authDomain: "to-done-app-42a2b.firebaseapp.com",
  databaseURL: "https://to-done-app-42a2b-default-rtdb.firebaseio.com",
  projectId: "to-done-app-42a2b",
  storageBucket: "to-done-app-42a2b.appspot.com",
  messagingSenderId: "100918341552",
  appId: "1:100918341552:web:55dd605cee93fc20f2b075",
  measurementId: "G-0DD0Q5FN45"
};

@NgModule({
  declarations: [AppComponent ],
  imports: [ 
    BrowserModule, 
    AddTaskModule, 
    HomeScreenModule, 
    LogInModule, 
    IndividualCardModule, 
    RouterModule.forRoot(routes), 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NoopAnimationsModule ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {


}
