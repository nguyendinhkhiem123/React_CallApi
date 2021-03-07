import React from 'react';
import PageList from './page/PageList';
import Home from './page/Home';
import PageAction from './page/PageAction';
import NotFound from './page/NotFound';


const route =[
    {
        path : '/',
        exact : true,
        main : ()=> <Home></Home>
    },
    {
        path : '/product-list',
        exact : true,
        main : ()=> <PageList></PageList>
    },
    {
        path : '/product/add',
        exact : true,
        main : ({history})=> <PageAction history ={history}></PageAction>
    },
    {
        path : '/product/:id/edit',
        exact : true,
        main : ({match,history})=> <PageAction match ={match} history ={history}></PageAction>
    },
    {
        path : '',
        exact : true,
        main : ()=> <NotFound></NotFound>
    },
]

export default route;