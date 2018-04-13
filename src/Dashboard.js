'use strict';

import React, { Component } from 'react';
import connect from 'react-redux';
import Pet from './components/Pet'


class Dashboard extends Component {
  render() {
    return (
      <div className='pet-page'>
        <Pet catToAdopt={} />
        <Pet dogToAdopt={} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  cat: state.cat,
  dog: state.dog
})

export default connect(mapStateToProps)(Dashboard);



