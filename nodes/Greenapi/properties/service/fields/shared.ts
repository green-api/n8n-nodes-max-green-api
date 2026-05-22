import { INodeProperties } from 'n8n-workflow';

export const sharedFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['service'],
				operation: [
					'editMessage',
					'deleteMessage',
					'getAvatar',
					'getContactInfo',
				],
			},
		},
	},
];