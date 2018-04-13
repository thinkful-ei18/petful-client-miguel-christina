
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet'
import { fetchDog, adoptDog } from './actions/dog';
import { fetchCat, adoptCat} from './actions/cat';


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  handleCatAdopt() {
    this.props.dispatch(adoptCat());
  }

  handleDogAdopt() {
    this.props.dispatch(adoptDog());
  }

  render() {
    console.log(this.props, 'props');
    return (
      <div className='pet-page'>
        <Pet animal={this.props.catToAdopt} handleAdopt={(e) => this.handleCatAdopt()} />
        <Pet animal={this.props.dogToAdopt} handleAdopt={(e) => this.handleDogAdopt()} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  dogToAdopt: state.dog.currentDog ? state.dog.currentDog : [],
  catToAdopt: state.cat.currentCat ? state.cat.currentCat : []
})

export default connect(mapStateToProps)(Dashboard);
