import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isopenUserSettings: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) { }

  ngOnInit() {
  }

  openUserSettings = () => {
    this.isopenUserSettings = !this.isopenUserSettings;
  }

  logoutUser = () =>{
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
