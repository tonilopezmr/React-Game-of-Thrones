import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  ToastAndroid,
  Platform
} from 'react-native';

import {
  Spinner
} from 'native-base'

import Item from './Item';
import log from '../../log'

class List extends Component {
  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    const {fetch} = this.props
    fetch()
  }

  renderList(list, onItemClick) {
    return list.map((item) => {
      return (
        <Item key={item.name} item={item} onItemClick={onItemClick}/>
      )
    })
  }

  render() {
    const {
      list,
      isFetching,
      error,
      onItemClick
    } = this.props
    log(this.props)

    if (isFetching && !list.length) {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Spinner color='#FFB74D'/>
        </View>)
    }

    if (error) {
      if (!list.length) {
        return (
          <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Text>{'Oopss one error :/'}</Text>
            <Button
              onPress={() => this.fetchData()}
              title='Retry'
              color='#FFB74D'
            />
          </View>)
      } else {
        if (Platform.OS !== 'ios') {
          ToastAndroid.show('Oopss one error :/', ToastAndroid.SHORT)
        }
      }
    }

    return (
      <ScrollView>
        {this.renderList(list, onItemClick)}
      </ScrollView>
    )
  }
}

export default List