import { INodeProperties } from 'n8n-workflow';

export const downloadFileFields: INodeProperties[] = [
   {
        displayName: 'chatId',
        name: 'chatId',
        placeholder: '',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['receiving',],
                operation:['downloadFile',],
            },
        },
        required: true,
    },
    {
        displayName: 'idMessage',
        name: 'idMessage',
        placeholder: '',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['receiving',],
                operation:['downloadFile',],
            },
        },
        required: true,
    },
]