import { INodeProperties } from 'n8n-workflow';

export const serviceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['service'],
			},
		},
		options: [
			{ name: 'Check Account', value: 'checkAccount', action: 'Check MAX account' },
			{ name: 'Delete Message', value: 'deleteMessage', action: 'Delete a message' },
			{ name: 'Edit Message', value: 'editMessage', action: 'Edit the text message' },
			{ name: 'Get Avatar', value: 'getAvatar', action: 'Get avatar' },
			{ name: 'Get Contact Info', value: 'getContactInfo', action: 'Get contact info' },
			{ name: 'Get Contacts', value: 'getContacts', action: 'Get contacts' },
			{ name: 'Get Chats', value: 'getChats', action: 'Get chats' },
		],
		default: 'getContacts',
	},
];