// Core
import { getFullApiUrl } from 'instruments';

const GROUP_ID = '8o2napjihtkn';
const TOKEN = 'gyo5wxtkci';
const url = 'https://lab.lectrum.io/react/api';
const api = getFullApiUrl(url, GROUP_ID);

export { GROUP_ID, TOKEN, api, url };
