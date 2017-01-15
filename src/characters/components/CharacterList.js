import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'
import * as actions from '../actions'
import log from '../../log'

const mapStateToProps = (state) => ({
  list: state.characters.list,
  isFetching: state.characters.isFetching,
  error: state.characters.error
})

const mapDispatchToProps = (dispatch, getState) => {
  log(getState)
  return ({
    fetch: () => fetchCharacters()(dispatch, getState)
  })
}

export default connect(
  mapStateToProps,
  actions
)(List);