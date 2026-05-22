// removeAdmin.ts
import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { executePerItem } from '../helpers/executePerItem';
import { getParams } from '../helpers/getParams';
import { greenApiRequest } from '../helpers/request';

export async function removeAdmin(this: IExecuteFunctions, items: INodeExecutionData[]) {
	return executePerItem(this, items,
		(i) => getParams(this, i, { chatId: {}, participantChatId: {} }),
		(p) => greenApiRequest(this, 'POST', 'removeAdmin', { chatId: p.chatId, participantChatId: p.participantChatId }),
	);
}