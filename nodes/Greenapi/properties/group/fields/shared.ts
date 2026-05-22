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
				resource: ['group'],
				operation: [
					'updateGroupName',
					'getGroupData',
					'addGroupParticipant',
					'removeGroupParticipant',
					'setGroupAdmin',
					'removeAdmin',
					'setGroupPicture',
					'leaveGroup',
				],
			},
		},
	},
	{
		displayName: 'Participant Chat ID',
		name: 'participantChatId',
		type: 'string',
		default: '',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: [
					'addGroupParticipant',
					'removeGroupParticipant',
					'setGroupAdmin',
					'removeAdmin',
				],
			},
		},
	},
];