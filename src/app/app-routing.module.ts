import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../app/components/footer/footer.component'
import { HeaderComponent } from '../app/components/header/header.component'

const routes: Routes = [
  { path: 'name', component: FooterComponent,
children:[
  {
    path: '**', component: FooterComponent
  }
] },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
