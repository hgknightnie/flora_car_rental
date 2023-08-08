import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },     
      {
        path: 'myrental',
        loadChildren: () => import('../myrental/myrental.module').then(m => m.MyrentalPageModule)
      },
      {
        path: 'mycar',
        loadChildren: () => import('../mycar/mycar.module').then(m => m.MycarPageModule)
      },
      {
        path: 'gmap',
        loadChildren: () => import('../gmap/gmap.module').then(m => m.GmapPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
