// getWaSettings.ts
import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { executePerItem } from '../helpers/executePerItem';
import { greenApiRequest } from '../helpers/request';

export async function getAccountSettings(this: IExecuteFunctions, items: INodeExecutionData[]) {
	return executePerItem(this, items,
		() => ({}),
		() => greenApiRequest(this, 'GET', 'getAccountSettings', undefined),
	);
}