// checkAccount.ts
import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { executePerItem } from '../helpers/executePerItem';
import { getParams } from '../helpers/getParams';
import { greenApiRequest } from '../helpers/request';

export async function checkAccount(this: IExecuteFunctions, items: INodeExecutionData[]) {
	return executePerItem(this, items,
		(i) => getParams(this, i, { phoneNumber: {}, force: {} }),
		(p) => greenApiRequest(this, 'POST', 'checkAccount', { phoneNumber: p.phoneNumber, force: p.force }),
	);
}