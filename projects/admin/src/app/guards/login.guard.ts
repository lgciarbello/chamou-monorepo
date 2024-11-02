import {CanActivateFn, GuardResult, MaybeAsync, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {catchError, map, of} from "rxjs";

export const LoginGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    return authenticationService.verifyToken().pipe(
      catchError(() => of(true)),
      map(() => {
        router.navigate(["/"]);
        return false;
      })
    )
  }
}
