import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name: string = '';

  constructor(
    public navCtrl: NavController,
    private socket: Socket,
    public navParams: NavParams
  ) {
    socket.on('setName', (message) => {
      alert(message);
    });
    this.name = this.navParams.get('name');
  }

  joinRoom(room){
    this.socket.emit('joinRoom', room);
  }

}
