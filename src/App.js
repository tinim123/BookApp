import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import BookList from './components/bookList';

export default class KitapListesi extends Component{
	render(){
		return(
			<Provider store={createStore(reducers)}>
     <ScrollView style={styles.alan}>
     <Header headerText='Book List'/>

		 <BookList />
		 </ScrollView>
			</Provider>
		);
	}
}
styles=StyleSheet.create({
	alan:{
    marginBottom:15
	}
});
