import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { combineLatest } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    isVisible = false
    isDisabled = true
    loginEmail = new FormControl('');
    loginPassword = new FormControl('');
    registerEmail = new FormControl('');
    registerPassword = new FormControl(''); 
    repeatPassword = new FormControl('');
    constructor(private auth: AuthService, public toastController: ToastController) {}
    ngOnInit() {
        combineLatest([this.registerPassword.valueChanges, this.repeatPassword.valueChanges]).subscribe(([password, repeatPassword]) => {
            if(password === repeatPassword){
                this.isDisabled = false
            }else{
                this.isDisabled = true
            }
        })
    }
    async login() {
        try {
        await this.auth.login(this.loginEmail.value, this.loginPassword.value)
            const toast = await this.toastController.create({
                message: 'Successful',
                duration: 2000
              });
              toast.present();
            }
        catch(e) {
            const toast = await this.toastController.create({
                message: 'Error',
                duration: 2000
              });
              toast.present();
        }
        
    }
    async register() {
        if(this.registerPassword.value === this.repeatPassword.value){
        await this.auth.register(this.registerEmail.value, this.registerPassword.value)
        const toast = await this.toastController.create({
            message: 'Successful',
            duration: 2000
          });
          toast.present();
        }else{

        }
    }
}

