import { compose } from './helpers';

import strictMode from './hocs/strictMode';
import errorBoundary from './hocs/errorBoundary';
import redux from './hocs/redux';
import router from './hocs/router';
import suspense from './hocs/suspense';

const AppKernel = compose(
    strictMode,
    errorBoundary,
    redux,
    router,
    suspense,
);

export default AppKernel;
