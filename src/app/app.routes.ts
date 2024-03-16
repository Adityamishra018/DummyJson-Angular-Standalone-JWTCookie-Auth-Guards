import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { MeComponent } from './me/me.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { activateGuard, resolveGuard } from './services/auth.guards';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'users', component : UserComponent, resolve : {data : resolveGuard}},  //page only loads after resolved.
    {path : 'posts', component : PostComponent},
    {path : 'me', component : MeComponent, canActivate : [activateGuard]},
    {path : 'logout', component : LogoutComponent},
    {path : '', pathMatch : 'full', redirectTo : 'posts'}
];
