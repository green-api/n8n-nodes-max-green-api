import { INodeProperties } from 'n8n-workflow';

export const sendContactFields: INodeProperties[] = [
	{
		displayName: 'Contact',
		name: 'contact',
		type: 'fixedCollection',
		placeholder: 'Add contact',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Chat ID',
				name: 'chatId',
				values: [
					{
						displayName: 'chatId',
						name: 'chatIdText',
						type: 'string',
						default: '',
						placeholder: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['sending'],
				operation: ['sendContact'],
			},
		},
	},
];