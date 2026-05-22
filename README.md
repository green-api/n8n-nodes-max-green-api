# n8n-nodes-max-green-api

Integration node for [Green API](https://green-api.com/) in [n8n](https://n8n.io).  
This community node allows automation of MAX interactions using Green API — including messaging, file transfer, contacts, groups, statuses, and instance management.

---

## 📖 Overview

The **GreenAPI Node** provides full access to Green API endpoints, enabling you to send messages, manage chats, groups, and retrieve account information.

---

## Installation
### Install community node
Go to `Settings` → `Community Nodes` → `Install`, then enter `@green-api/n8n-nodes-max-greenapi`

## Authentication

To use this node, you need to have an instance and token from [Green-API](https://green-api.com/en) platform and MAX account:

- Sign up at [Green-API](https://green-api.com/en)
- Create an instance
- Get idInstance and apiTokenInstance
- Authorize the instance in the [Console](https://console.green-api.com/instanceList)

## 🧩 Features

| Category | Methods |
|-----------|----------|
| 👤 **Account** | getSettings, setSettings, getStateInstance, reboot, logout, getAccountSettings |
| ✉️ **Sending** | sendMessage, sendFileByUrl, sendLocation, sendContact
| 📥 **Receiving** | webhookTrigger, downloadFile |
| 📜 **Journals** | getChatHistory, getMessage, lastIncomingMessages, lastOutgoingMessages |
| 🧾 **Queues** | showMessagesQueue, clearMessagesQueue |
| 👥 **Groups** | createGroup, updateGroupName, getGroupData, addGroupParticipant, deleteGroupParticipant, setGroupAdmin, removeGroupAdmin, leaveGroup |
| 🧩 **Service** | getContacts, getChats, getContactInfo, editMessage, deleteMessage |

---

## ⚙️ Usage Examples

### 💬 Send Message
```json
{
  "operation": "sendMessage",
  "chatId": "41234567",
  "message": "Hello from n8n and Green API!"
}
```

### 📎 Send File by URL
```json
{
  "operation": "sendFileByUrl",
  "chatId": "41234567",
  "urlFile": "https://example.com/image.jpg",
  "fileName": "photo.jpg"
}
```

### 👥 Create Group
```json
{
  "operation": "createGroup",
  "groupName": "My Team",
  "participants": ["12365498", "41234567"]
}
```

### 🧭 Send Location
```json
{
  "operation": "sendLocation",
  "chatId": "41234567",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### 🔄 Check Account
```json
{
  "operation": "checkAccount",
  "phoneNumber": 79000000000
}
```
---

## 🔗 Resources

- 🌐 [Green API Documentation](https://green-api.com/en/docs/)
- 📘 [n8n Documentation](https://docs.n8n.io)
- 💬 [n8n Community Forum](https://community.n8n.io)

---

## 👤 Author

Developed by [Green API](https://green-api.com/)  
📧 support@green-api.com  
🌍 https://green-api.com/en/

---

## 🪪 License

[MIT License](LICENSE)