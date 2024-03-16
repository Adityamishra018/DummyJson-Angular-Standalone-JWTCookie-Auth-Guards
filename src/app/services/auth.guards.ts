import { CanActivateFn, ResolveFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const activateGuard : CanActivateFn = ()=>{
    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.isAuthenticated()){
        return true
    }

    return router.parseUrl('/login')
}

export const resolveGuard : ResolveFn<any> = ()=>{
    return new Observable((subs)=>{
        setTimeout(()=>{
            subs.next({data : 'aditya'})
            subs.complete()
        },2000)
    })
} 