import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { environment } from "../environments/environment";

export function resolvePath(path: string): string {
  return `${environment.SUB_PATH ? environment.SUB_PATH + '/' : ''}${path}`;
}

const routes: Routes = [
  { path: resolvePath("hotels"), component: HotelsComponent },
  { path: `${environment.SUB_PATH}`, redirectTo: `${environment.SUB_PATH}/hotels`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }