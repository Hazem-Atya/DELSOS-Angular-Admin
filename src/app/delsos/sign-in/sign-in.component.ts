import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignInService} from './service/sign-in.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private signInService: SignInService,
    private toastr: ToastrService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    if (this.signInService.isAuthenticated()) {
      this.router.navigateByUrl('/admin/statistics')
    }

  }

  login(form: NgForm) {
    console.log(form.value);
    this.signInService.login(form.value).subscribe({
      next: (response) => {
        console.log('tatata',response);
       this.router.navigate(['/admin/statistics']);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error('Please verify your credentials');
      }
    });
  }
}
