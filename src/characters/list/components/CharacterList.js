import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../../common/components/List'
import * as actions from '../actions'
import {Actions} from 'react-native-router-flux'

const onItemClick = (character) => {
  Actions.characterDetail({character})
}

const mapStateToProps = (state) => ({
  list: state.characters.list,
  isFetching: state.characters.isFetching,
  error: state.characters.error,
  onItemClick,
})

export default connect(
  mapStateToProps,
  actions
)(List);