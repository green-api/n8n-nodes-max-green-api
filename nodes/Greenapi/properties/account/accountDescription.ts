import { accountOperations } from './accountOperations';
import { getSettingsFields } from './fields/getSettings';
import { setSettingsFields } from './fields/setSettings';
import { getStateInstanceFields } from './fields/getStateInstance';
import { getAccountSettingsFields } from './fields/getAccountSettings';
import { logoutFields } from './fields/logout';
import { rebootFields } from './fields/reboot';

export const accountDescription = [
	...accountOperations,
	...getSettingsFields,
	...setSettingsFields,
	...getStateInstanceFields,
	...getAccountSettingsFields,
	...logoutFields,
	...rebootFields,
];
