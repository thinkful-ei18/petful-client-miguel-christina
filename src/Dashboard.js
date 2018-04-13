'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet'


class Dashboard extends Component {

  componentDidMount() {
    // fetchCat
    // fetchDog
  }

  render() {
    return (
      <div className='pet-page'>
        <Pet catToAdopt={this.props.catToAdopt} />
        <Pet dogToAdopt={this.props.dogToAdopt} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
})

export default connect(mapStateToProps)(Dashboard);



