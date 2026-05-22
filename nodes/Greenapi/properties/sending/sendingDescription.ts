import { sendingOperations } from './sendingOperations';
import { sharedFields } from './fields/shared';
import { sendMessageFields } from './fields/sendMessage';
import { sendFileByUrlFields } from './fields/sendFileByUrl';
import { sendContactFields } from './fields/sendContact';
import { sendLocationFields } from './fields/sendLocation';

export const sendingDescription = [
	...sendingOperations,
	...sharedFields,
	...sendMessageFields,
	...sendFileByUrlFields,
	...sendContactFields,
	...sendLocationFields,
];