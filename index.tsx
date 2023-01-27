import * as React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import MyList from './MyList';
import store from './store';

// const toDos = ['Buy ice cream', 'Eat ice cream', 'Go to the gym'];
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
    <MyList />
    </Provider>
  </StrictMode>
);
