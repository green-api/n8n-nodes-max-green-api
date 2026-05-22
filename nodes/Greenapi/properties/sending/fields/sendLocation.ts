import { INodeProperties } from 'n8n-workflow';

export const sendLocationFields: INodeProperties[] = [
	{
		displayName: 'Location Latitude',
		name: 'latitude',
		type: 'number',
		default: '',
		placeholder: '12.3456789',
		required: true,
		displayOptions: {
			show: {
				operation: ['sendLocation'],
			},
		},
	},
	{
		displayName: 'Location Longitude',
		name: 'longitude',
		type: 'number',
		default: '',
		placeholder: '10.1112131',
		required: true,
		displayOptions: {
			show: {
				operation: ['sendLocation'],
			},
		},
	},
];