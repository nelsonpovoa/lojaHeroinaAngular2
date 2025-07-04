import { Component } from '@angular/core';
import { FormControl, FormControlDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';
import { PasswordRecoveryService } from '../../services/password-recovery.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recover-password',
  //standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {

  body:{} = {"username":""};
  message: { mensagem: string } = { mensagem: "" };
	closeResult = '';
	emailCtrl = new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]);

  constructor(private modalService: NgbModal, private recoverService:PasswordRecoveryService) {
  }

  ngOnInit(): void {
  }

  getEmail(event:Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

  open(content: any) {
    //onSubmit
    const user : string = (<HTMLInputElement>document.getElementById('email')).value;
    this.body = {
      username : user
    }
    this.recoverService.passwordRecovery(this.body).subscribe(data => {
      this.message = data as { mensagem: string };
    });
    this.modalService.open(content, { centered: true, ariaLabelledBy: 'modal-basic-title' });
  }

}
