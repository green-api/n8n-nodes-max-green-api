import { INodeProperties } from 'n8n-workflow';

export const getChatHistoryFields: INodeProperties[] = [
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
				operation: ['getChatHistory'],
			},
		},
	},
	{
		displayName: 'Count',
		name: 'count',
		type: 'number',
		default: '',
		placeholder: 'Number of messages to retrieve, 100 by default',
		displayOptions: {
			show: {
				operation: ['getChatHistory'],
			},
		},
	},
];