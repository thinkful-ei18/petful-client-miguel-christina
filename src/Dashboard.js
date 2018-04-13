'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet'
import { fetchDog } from './actions/dog';
import { fetchCat } from './actions/cat';


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCat());
    // this.props.dispatch(fetchDog());
  }

  render() {
    console.log(this.props, 'props');
    return (
      <div className='pet-page'>
        <Pet animal={this.props.catToAdopt} />
        {/* <Pet animal={this.props.dogToAdopt} /> */}
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  catToAdopt: state.cat.currentCat ? state.cat.currentCat : [],
  // dogToAdopt: state.dog.currentDog
})

export default connect(mapStateToProps)(Dashboard);
