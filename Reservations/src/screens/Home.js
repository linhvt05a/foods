import React,{useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity, ActivityIndicator } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getListMovie} from '../redux/actions'

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
        <View style={styles.container}>
            <Text>{movie.movie.description}</Text>
           {movie.loading && <ActivityIndicator color='white' size='small' />}
           {movie.movie.movies && movie.movie.movies.map((movie,index)=> renderList(movie,index))}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    cardView: {
        width: 400,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      }
})