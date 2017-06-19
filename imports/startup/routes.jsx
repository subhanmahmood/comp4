import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import { Session } from 'meteor/session';

import MainLayout from '../ui/layouts/layout_main';

import Login from '../ui/components/auth/login.jsx';
import Signup from '../ui/components/auth/signup.jsx';

import Dashboard from '../ui/components/dashboard/Dashboard';

let exposed = FlowRouter.group({ });

let loggedIn = FlowRouter.group({
   triggersEnter: [function( ) {
         let route;
         if (!(Meteor.loggingIn( ) || Meteor.userId( ))) {
            route = FlowRouter.current( );
            if ( route.route.name !== 'sign-in' || route.route.name !== 'sign-up' ) {
               Session.set( 'redirectAfterLogin', route.path );
            }
            return FlowRouter.go( 'sign-in' );
         }
      }
   ]
});

FlowRouter.route('/', {
   name: 'home',
   action( ) {
      mount(MainLayout, {
         content: <Dashboard/>,
         title: 'Dashboard'
      })
   }
});


exposed.route('/sign-in', {
   name: 'sign-in',
   action( ) {
      mount( Login )
   }
});

exposed.route('/sign-up', {
   name: 'sign-up',
   action( ) {
      mount( Signup )
   }
});
