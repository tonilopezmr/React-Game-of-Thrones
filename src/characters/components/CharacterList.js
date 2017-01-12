import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/components/List'

const mapStateToProps = (state) => ({
  list: state.characters.list
})

export default connect(mapStateToProps)(List);