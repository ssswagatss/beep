import { USER_LIST } from './../users/users.mocks';
import { Message } from './../../models/message/message.interface';
import { User } from './../../models/user/user.interface';

const userlist: User[] = USER_LIST;
const messageList: Message[] = [];

userlist.forEach(user => {
    messageList.push({
        user: user,
        date: new Date(),
        lastMessage: 'Hello World!!'
    });
});

export const MESSAGE_LIST = messageList;