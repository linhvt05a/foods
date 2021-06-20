import React,{useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView, ActivityIndicator, Alert } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getListMovie} from '../redux/actions'
import * as Animatable from 'react-native-animatable';

export default function Home() {
    const dispatch = useDispatch()
    const movie = useSelector((state)=> state.movie)
    console.log(movie)
    useEffect(()=>{
        dispatch(getListMovie())
    },[])

    function renderList(movie,key){
        return(
            <TouchableOpacity style={styles.cardView} key={key}>
                <Text>{movie.title}</Text>
                <Text>{movie.releaseYear}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView contentContainerStyle = {styles.container}>
            {movie.loading && <ActivityIndicator color='red' size='small' />}
          {movie.loading == false  &&
           <Animatable.View animation="fadeInUp">
                <Text>{movie.movie.description}</Text>
                {movie.movie.movies && movie.movie.movies.map((movie,index)=> renderList(movie,index))}
           </Animatable.View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardView: {
        width: 400,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      }
})