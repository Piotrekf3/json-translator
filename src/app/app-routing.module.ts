import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonLoaderComponent } from './components/json-loader/json-loader.component';

const routes: Routes = [
    { path: '', component: JsonLoaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
