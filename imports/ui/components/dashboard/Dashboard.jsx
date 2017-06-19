import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import FixedActionButton from '.././fixed-action-button/FixedActionButton';


class Dashboard extends Component {
   render( ) {
      const currentUser = this.props.currentUser || ''
      let isAdmin = currentUser && Roles.userIsInRole( currentUser, 'admin' );
      return (
         <div>
            <div className="row">
               <div className="col s12 m6 push-m3">
               </div>
            </div>
         </div>

      )
   }
}


export default createContainer( ( ) => {
   return {
      currentUser: Meteor.user( ) || {}
   };
}, Dashboard );
