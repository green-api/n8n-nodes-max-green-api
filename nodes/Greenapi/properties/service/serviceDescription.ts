import { serviceOperations } from './serviceOperations';
import { sharedFields } from './fields/shared';
import { deleteMessageFields } from './fields/deleteMessage';
import { editMessageFields } from './fields/editMessage';
import { checkAccountFields } from './fields/checkAccount';

export const serviceDescription = [
	...serviceOperations,
	...sharedFields,
	...deleteMessageFields,
	...editMessageFields,
	...checkAccountFields,
];