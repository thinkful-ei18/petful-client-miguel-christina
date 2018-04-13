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
    console.log(this.props,'props');
    return (
      <div className='pet-page'>
        <Pet animal={this.props.catToAdopt} />
      <Pet animal={this.props.dogToAdopt} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  catToAdopt: state.cat.currentCat,
  dogToAdopt: state.dog.currentDog
})

export default connect(mapStateToProps)(Dashboard);
