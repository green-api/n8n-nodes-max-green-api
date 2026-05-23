import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

export class GreenapiTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'GREEN-API Trigger',
		name: 'greenapiTrigger',
		icon: 'file:greenapi.svg',
		group: ['trigger'],
		version: 1,
		description: 'Starts the workflow on a Green-Api webhook',
		defaults: {
			name: 'GreenApi Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'greenApiAuthApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName:
					'Applying the settings, which is necessary for trigger node to work, to an instance can take up to 5 minutes.',
				name: 'GreenApiTriggerNotice',
				type: 'notice',
				default: '',
			},
			{
				displayName: 'Trigger On',
				name: 'webhookType',
				hint: 'Types of processed webhooks. All types will be processed if none is selected.',
				type: 'multiOptions',
				options: [
					{
						name: 'Incoming Message',
						value: 'incomingMessageReceived',
						description: 'Trigger on new incoming message',
					},
					{
						name: 'Outgoing Message Sent From Phone',
						value: 'outgoingMessageReceived',
						description: 'Trigger on new outgoing message sent from phone',
					},
					{
						name: 'Outgoing Message Sent From API',
						value: 'outgoingAPIMessageReceived',
						description: 'Trigger on new outgoing message sent from API',
					},
				],
				default: [],
			},
		],
	};

	webhookMethods: any = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const credentials = await this.getCredentials('greenApiAuthApi');
				const webhookUrl = this.getNodeWebhookUrl('default');

				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'greenApiAuthApi',
					{
						method: 'GET',
						url: `https://api.green-api.com/waInstance${credentials.idInstance}/getSettings/${credentials.apiTokenKey}`,
					},
				);
				return response.webhookUrl === webhookUrl;
			},

			async create(this: IHookFunctions): Promise<void> {
				const credentials = await this.getCredentials('greenApiAuthApi');
				const webhookUrl = this.getNodeWebhookUrl('default');

				await this.helpers.httpRequestWithAuthentication.call(
					this,
					'greenApiAuthApi',
					{
						method: 'POST',
						url: `https://api.green-api.com/waInstance${credentials.idInstance}/setSettings/${credentials.apiTokenKey}`,
						body: {
							webhookUrl: webhookUrl,
							incomingWebhook: 'yes',
							outgoingAPIMessageWebhook: 'yes',
							outgoingMessageWebhook: 'yes',
						},
						json: true,
					},
				);
			},

			async delete(this: IHookFunctions): Promise<void> {
				const credentials = await this.getCredentials('greenApiAuthApi');

				await this.helpers.httpRequestWithAuthentication.call(
					this,
					'greenApiAuthApi',
					{
						method: 'POST',
						url: `https://api.green-api.com/waInstance${credentials.idInstance}/setSettings/${credentials.apiTokenKey}`,
						body: {
							webhookUrl: '',
						},
						json: true,
					},
				);
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const typeWebhook = [
			'incomingMessageReceived',
			'outgoingAPIMessageReceived',
			'outgoingMessageReceived',
		];

		const body = this.getBodyData();
		const data = this.helpers.returnJsonArray(body);
		const thisTypeWebhook = data[0].json.typeWebhook as string;
		const chosenTypeWebhook = this.getNodeParameter('webhookType', []) as string[];

		const typeMatches =
			chosenTypeWebhook.length === 0
				? typeWebhook.includes(thisTypeWebhook)
				: chosenTypeWebhook.includes(thisTypeWebhook);

		if (!typeMatches) {
			return { webhookResponse: 'OK' };
		}

		return {
			workflowData: [data],
			webhookResponse: 'OK',
		};
	}
}