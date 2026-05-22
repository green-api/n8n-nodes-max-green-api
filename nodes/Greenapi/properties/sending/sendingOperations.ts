import { INodeProperties } from 'n8n-workflow';

export const sendingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sending'],
			},
		},
		options: [
			{ name: 'Send Contact', value: 'sendContact', action: 'Send a contact' },
			{ name: 'Send File By URL', value: 'sendFileByUrl', action: 'Send file by url' },
			{ name: 'Send Location', value: 'sendLocation', action: 'Send a location' },
			{ name: 'Send Message', value: 'sendMessage', action: 'Send message' },
		],
		default: 'sendMessage',
	},
];