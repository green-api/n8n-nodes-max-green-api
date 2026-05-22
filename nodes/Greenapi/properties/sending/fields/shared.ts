import { INodeProperties } from 'n8n-workflow';

export const sharedFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		placeholder: '',
		default: '',
		displayOptions: {
			show: {
				resource: ['sending'],
			},
			hide: {
				operation: ['uploadFile'],
			},
		},
		required: true,
	},
];