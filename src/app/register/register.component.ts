import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Apollo } from "apollo-angular";
import { ADD_USER_MUTATION } from "../graphql";

type RegisterData = {
  registerWithBasic: { token: string; connected: Boolean };
};

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  email: string = "";
  nickname: string = "";
  password: string = "";

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.status === "VALID") {
      this.email = this.validateForm.value.email;
      this.nickname = this.validateForm.value.nickname;
      this.password = this.validateForm.value.password;
      this.addUser();
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public apollo: Apollo
  ) {}

  addUser() {
    this.apollo
      .mutate<RegisterData>({
        mutation: ADD_USER_MUTATION,
        variables: {
          target: {
            collection: "JUNIOR",
            email: this.email
          },
          login: this.nickname,
          pass: this.password,
          useCookie: false
        }
      })
      .subscribe(response => {
        localStorage.setItem("token", response.data.registerWithBasic.token);
        console.log(response);
        if (response.data.registerWithBasic.connected) {
          this.router.navigate(["/"]);
        }
      });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]]
    });
  }
}