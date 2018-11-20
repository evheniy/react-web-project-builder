import { Provider } from 'react-redux';

import { hocCreator } from '../helpers';
import store from '../../store';

export default hocCreator(Provider, { store });
