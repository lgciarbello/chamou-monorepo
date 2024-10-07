import {CanActivateFn, GuardResult, MaybeAsync, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {catchError, map} from "rxjs";

export const AuthGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    return authenticationService.verifyToken().pipe(
      catchError(() => router.navigate(["/login"])),
      map(() => true)
    )
  }
}
