import axios from 'axios';

import { baseUrl } from '../constants/url';

export const getCards = () => axios.get(baseUrl);