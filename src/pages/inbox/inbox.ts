import { MESSAGE_LIST } from './../../mocks/messages/messages.mocks';
import { Message } from './../../models/message/message.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messageList: Message[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.messageList = MESSAGE_LIST;
    console.log('ionViewDidLoad InboxPage');
    console.log("Message List", this.messageList);
  }

}
