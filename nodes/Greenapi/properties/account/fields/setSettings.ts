import { INodeProperties } from 'n8n-workflow';
/* eslint-disable no-console */
export const setSettingsFields: INodeProperties[] = [
    {
        displayName: 'Settings',
        name: 'settings',
        type: 'collection',
        default: {},
        options: [
            {
                displayName: 'Webhook URL',
                name: 'webhookUrl',
                type: 'string',
                default: '',
                description: 'URL for sending notifications',
            },
            {
                displayName: 'Webhook URL Token',
                name: 'webhookUrlToken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Token to access your notification server',
            },
            {
                displayName: 'Delay Send Messages (ms)',
                name: 'delaySendMessagesMilliseconds',
                type: 'number',
                placeholder: 'Recommended 15000',
                default: 15000,
                description: 'Message sending delay in milliseconds. Recommended value: 15000.',
            },
            {
                displayName: 'Mark Incoming Messages as Read',
                name: 'markIncomingMessagesReaded',
                type: 'boolean',
                default: false,
                description: 'Mark incoming messages read on reply from API',
            },
            {
                displayName: 'Outgoing Webhook',
                name: 'outgoingWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about outgoing messages statuses',
            },
            {
                displayName: 'Outgoing Message Webhook',
                name: 'outgoingMessageWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about messages sent from the phone',
            },
            {
                displayName: 'Outgoing API Message Webhook',
                name: 'outgoingAPIMessageWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about messages sent from API',
            },
            {
                displayName: 'State Webhook',
                name: 'stateWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about the instance authorization state change',
            },
            {
                displayName: 'Incoming Webhook',
                name: 'incomingWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about incoming messages and files',
            },
            {
                displayName: 'Edited Message Webhook',
                name: 'editedMessageWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about edited messages',
            },
            {
                displayName: 'Deleted Message Webhook',
                name: 'deletedMessageWebhook',
                type: 'boolean',
                default: false,
                description: 'Receive notifications about deleted messages',
            },
        ],
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['setSettings'],
            },
        },
        required: true,
    },
];
/* eslint-enable no-console */