import { inject, Injectable } from '@angular/core';
import { IMessage } from '../interfaces/menssage.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessageResponse } from '../interfaces/message-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private http = inject(HttpClient)
  private url = '/n8n'

  sendMessage(msg: IMessage): Observable<IMessageResponse> {
    return this.http.post<IMessageResponse>(this.url, msg)
  }
} 