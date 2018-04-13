'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet'
import { fetchDog } from './actions/dog';


class Dashboard extends Component {

  componentDidMount() {
    // fetchCat
    this.props.dispatch(fetchDog());
  }

  handleCatAdopt(){
    console.log('cat');
  }

  handleDogAdopt(){
    console.log('dog');
  }
  render() {
    console.log(this.props,'props');
    return (
      <div className='pet-page'>
      <Pet animal={this.props.catToAdopt} handleAdopt={(e) => this.handleCatAdopt()} />
    <Pet animal={this.props.dogToAdopt} handleAdopt={(e) => this.handleDogAdopt()} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  catToAdopt: state.cat.currentCat,
  dogToAdopt: state.dog.currentDog ? state.dog.currentDog : []
})

export default connect(mapStateToProps)(Dashboard);
