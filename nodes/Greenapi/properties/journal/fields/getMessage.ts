import { INodeProperties } from 'n8n-workflow';

export const getMessageFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['journal'],
				operation: ['getMessage'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'idMessage',
		type: 'string',
		default: '',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['journal'],
				operation: ['getMessage'],
			},
		},
	},
];