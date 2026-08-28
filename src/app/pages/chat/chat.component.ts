import { Component, inject, OnInit, signal } from '@angular/core';
import { ChatService } from '../../services/chat.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IMessage } from '../../interfaces/menssage.interface';
import { IChatMessage } from '../../interfaces/chat-messages.interface';
import { MatDialog } from '@angular/material/dialog';
import { EmailDialogComponent } from './dialog/email-dialog/email-dialog.component';


@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private chatService = inject(ChatService)
  private ref = inject(MatDialog)

  showDiv = signal(false)
  messages: IChatMessage[] = []
  sessionId: string = ''
  userMsg = ''

  ngOnInit(): void {
    this.sessionId = 'sessao-' + Math.random().toString(36).substring(2, 9);
    this.loadEmailDialog();
  }


  sendMessage() {

    const msg: IMessage = {
      sessionId: this.sessionId,
      chatInput: this.userMsg
    }

    this.messages.push({
      role: 'user',
      text: this.userMsg
    })

    this.showDiv.set(true)

    this.chatService.sendMessage(msg).subscribe({
      next: (x) => {
        this.showDiv.set(false)

        this.messages.push({
          role: 'ai',
          text: x.output
        })
      },
      error: (error) => {
        alert("Too many requested to the model, please wait until reset")
      }
    })

    this.userMsg = ''

  }

  private loadEmailDialog(): void {
    this.ref.open(EmailDialogComponent, {
      width: '400px',
      disableClose: true,
    })
  }
}