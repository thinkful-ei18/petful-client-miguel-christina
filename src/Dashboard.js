
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet'
import { fetchDog, adoptDog } from './actions/dog';
<<<<<<< HEAD
import { fetchCat, adoptCat} from './actions/cat';
=======
import { fetchCat, adoptCat } from './actions/cat';
>>>>>>> 5a9e39bb2067feeb9e2d97ab8d3df03c5f76900c


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  handleCatAdopt() {
<<<<<<< HEAD
    this.props.dispatch(adoptCat());
  }

  handleDogAdopt() {
    this.props.dispatch(adoptDog());
=======
    this.props.dispatch(adoptCat())
  }

  handleDogAdopt() {
    this.props.dispatch(adoptDog())
>>>>>>> 5a9e39bb2067feeb9e2d97ab8d3df03c5f76900c
  }

  render() {
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
