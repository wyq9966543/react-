import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'

import store from "./redux/store";
import memoryUtils from "./utils/memoryUtils";
import storageUtils from "./utils/storageUtils";
import App from './app'

//读取本地中保存的user，保存在内存中
const user = storageUtils.getUser()
memoryUtils.user = user

//渲染虚拟DOM
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
    ), document.getElementById('root'))
