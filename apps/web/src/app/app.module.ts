import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddTaskModule } from './add-task/add-task.module';
import { HomeScreenModule } from './home-screen/home-screen.module';
import { LogInModule } from './log-in/log-in.module';
import { IndividualCardModule } from './individual-card/individual-card.module';


const routes: Routes = [
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard',  loadChildren: () => import('./home-screen/home-screen.module').then(m => m.HomeScreenModule)},
  { path: 'addTask',  loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule)},
  { path: 'individualTask',  loadChildren: () => import('./individual-card/individual-card.module').then(m => m.IndividualCardModule)},
]

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, AddTaskModule, HomeScreenModule, LogInModule, IndividualCardModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
