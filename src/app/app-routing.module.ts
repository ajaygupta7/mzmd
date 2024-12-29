import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
// import { Page404Component } from './extrapages/page404/page404.component';
// import { Page500Component } from './extrapages/page500/page500.component';
import { LayoutComponent } from './layouts/layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MacroComponent } from './pages/myzone/macro/macro.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // { path: '', component: LayoutsModule, },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) },
  // { path: 'crypto-ico-landing', component: CyptolandingComponent },
  // { path: '**', component: Page404Component },
  // { path: '**', component: AppComponent },
  { path: 'test', component: TestingComponent},
  // {path: 'mzmd', component: MacroComponent},
  // {path: '', component: TestingComponent}
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
