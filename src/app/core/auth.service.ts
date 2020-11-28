import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private auth: AngularFireAuth){

    }
    register(email: string, password: string) {
        return this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
        })
    }
    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
        })
    }
}