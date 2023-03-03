Simple chat application
---
Description:
---
A simple chat application using NodeJS + WebSocket and HTML/CSS
Idea is to have a lightweight, one-time secure chat room with client-to-client communication.

Current, very simple chat application
---
![](https://github.com/swifty94/nodejs-course/blob/master/chat-app/chat.gif)


TODO for v1:
---

- Create sing up form GUI:
    - I hate GUI though, but I'll create something minimalistic :)
    - Create chat room {room_name, username, who_to_invite}
- Create chat app main interface GUI:
    - Previous rule applies here as well :)
    - Empty chat until user B is connected
- Create single chat room client to client (groups TODO for v2)
- Email functionality :heavy_check_mark:
- Create basic send email upon sing up and creating and individual chat room.
- Create basic sing up + validation algorithm:
   - user A creates a chat room -> user B authenticated from email received from sing up form created by user A -> choose username -> login to chat room
- Send receive message withing room between 2 clients:
    - user A sends message -> user B see an update as well as user A see this on his screen and vise versa.
    - TODO for v2: not only text messages...