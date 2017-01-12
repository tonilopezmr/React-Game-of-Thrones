import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'
import {fetchHouses} from '../actions'

const mapStateToProps = (state) => ({
  list: state.houses
})

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchHouses())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);