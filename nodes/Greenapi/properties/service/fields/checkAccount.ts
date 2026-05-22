import { INodeProperties } from 'n8n-workflow';

export const checkAccountFields: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'number',
		default: '',
		placeholder: '79000000000',
		required: true,
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['checkAccount'],
			},
		},
	},
	{
		displayName: 'Force',
		name: 'force',
		type: 'boolean',
		default: 'false',
		required: true,
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['checkAccount'],
			},
		},
	},
];