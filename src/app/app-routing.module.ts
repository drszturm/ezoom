import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
      path : '',
      loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
      },

      {
        path : ':pId',
        loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
