import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddTaskModule } from './add-task/add-task.module';
import { EditTaskModule } from './edit-task/edit-task.module';
import { HomeScreenModule } from './home-screen/home-screen.module';
import { LogInModule } from './log-in/log-in.module';


const routes: Routes = [
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard',  loadChildren: () => import('./home-screen/home-screen.module').then(m => m.HomeScreenModule)},

]

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, AddTaskModule, EditTaskModule, HomeScreenModule, LogInModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
