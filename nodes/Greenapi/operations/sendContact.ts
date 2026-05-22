// sendContact.ts
import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { executePerItem } from '../helpers/executePerItem';
import { getParams } from '../helpers/getParams';
import { greenApiRequest } from '../helpers/request';

export async function sendContact(this: IExecuteFunctions, items: INodeExecutionData[]) {
	return executePerItem(this, items,
		(i) => {
			const params = getParams(this, i, {
				chatId: {},
			});
			const contact = this.getNodeParameter('contact', i) as {
				chatId?: { chatIdText?: string };
			};
			return {
				...params,
				chatIdText: contact.chatId?.chatIdText ?? '',
			};
		},
		(p) => greenApiRequest(this, 'POST', 'sendContact', {
			chatId: p.chatId,
			contact: {
				chatId: p.chatIdText,
			},
		}),
	);
}