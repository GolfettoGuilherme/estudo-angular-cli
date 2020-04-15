import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './singin.coponent.html'
})
export class SingInComponent implements  OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput : ElementRef<HTMLInputElement>; //ele vai na view pelo # que tem la e injeta ele aqui

    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router: Router,
        private platformService : PlatformDetectorService){}

    ngOnInit() : void{
        //esse cara vai controlar o formulario
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required], //esse nome esta la no form
            password: ['', Validators.required] //esse tambem
        });
    } 

    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.autheticate(userName, password).subscribe(
            ()=>{
                console.log("ae carai");
                this.router.navigate(['user',userName]);
            },
            err => {
                console.log(err);
                this.loginForm.reset() //limpa o formulario
                alert('Invalid username or password');
                //isso impede que o Angular tente executar essa linha quando ele estiver em server side.
                if(this.platformService.isPlatformBrowser()){
                    this.userNameInput.nativeElement.focus();
                }
                
            }
        );
    }
}