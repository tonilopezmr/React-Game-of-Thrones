import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  list: state.houses.list,
  isFetching: state.houses.isFetching,
  error: state.houses.error,
  onItemClick: () => {}
})

export default connect(
  mapStateToProps,
  actions
)(List);