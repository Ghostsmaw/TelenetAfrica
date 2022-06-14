import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    reducer: {
        // coins api service added to store
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        // news api service added to store
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },

});