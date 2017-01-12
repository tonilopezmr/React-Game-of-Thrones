import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'
import {fetchCharacters} from '../actions'

const mapStateToProps = (state) => ({
  list: state.characters
})

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCharacters())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);