import React, {Component} from 'react';
import {ScrollView, Text, Container} from 'react-native';
import Item from './Item';

class List extends Component {
  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    const {fetch} = this.props
    fetch()
  }

  renderList(list) {
    return list.map((item) => {
      return (
        <Item key={item.name} item={item}/>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderList(this.props.list)}
      </ScrollView>
    )
  }
}

export default List