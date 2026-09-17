import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IMessage } from '../../interfaces/menssage.interface';
import { IChatMessage } from '../../interfaces/chat-messages.interface';
import { MatDialog } from '@angular/material/dialog';
import { EmailDialogComponent } from './dialog/email-dialog/email-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { retryWhen, throwError } from 'rxjs';


@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('chatInput') chatInput!: ElementRef;
  private chatService = inject(ChatService)

  showDiv = signal(false)
  messages: IChatMessage[] = []
  sessionId: string = ''
  userMsg = ''
  isButtonEnable = signal(true)

  ngOnInit(): void {
    this.sessionId = 'sessao-' + Math.random().toString(36).substring(2, 9);
  }


  sendMessage() {

    this.isButtonEnable.set(false)

    const msg: IMessage = {
      sessionId: this.sessionId,
      chatInput: this.userMsg
    }

    this.messages.push({
      role: 'user',
      text: this.userMsg
    })

    this.showDiv.set(true)

    this.chatService.sendMessage(msg)
    .subscribe({
      next: (x) => {
        this.showDiv.set(false)

        this.messages.push({
          role: 'ai',
          text: x.output
        })

        this.isButtonEnable.set(true)
        setTimeout(() => {
      this.chatInput.nativeElement.focus();
    });
      },
      error: (error: HttpErrorResponse) => {
        if(error.status === 502){
          console.error('Bad Gateway: ',error.message)
        }
      }
    })

    this.userMsg = ''

  }
}