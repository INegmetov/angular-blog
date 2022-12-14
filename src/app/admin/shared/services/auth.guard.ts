import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class Authguard implements CanActivate{

    constructor(
        private authService: AuthService,
        private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean> {
            if(this.authService.isAuthenticated()){
                return true
            }else {
                this.authService.logout()
                this.router.navigate(['/admin', 'login'], {
                    queryParams:{
                        loginAgain: true
                    }
                })
            }
    }


}