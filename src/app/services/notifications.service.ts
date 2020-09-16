import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public notifications = [
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },

  ];
  public getNotification() {
    return this.notifications
  }
  public pushNewNotification(name, text) {

    this.notifications.push(new constructorForNotifications(name.name, text))
  }
  constructor() { }
}
function constructorForNotifications(name, message) {
  this.fullName = name
  this.message = message
}