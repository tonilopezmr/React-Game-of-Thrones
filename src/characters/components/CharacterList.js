import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  list: state.characters.list,
  isFetching: state.characters.isFetching,
  error: state.characters.error
})

export default connect(
  mapStateToProps,
  actions
)(List);