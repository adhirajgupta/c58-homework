import React, { Component } from 'react';
import AppBarComponent from '../components/AppBar';
import { View, Dimensions } from 'react-native'
import { Button, IconButton, Colors, Text, withTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import app from '../config';
import { collection, getDocs, getFirestore, addDoc, Timestamp, doc, deleteDoc } from "firebase/firestore";



const { width, height } = Dimensions.get('screen')
const db = getFirestore(app)

class Home extends Component {
    constructor(){
        super()
        this.state={
            doc: [],
        }
    }
    getFirestoreDetails = async () => {
        // console.log(firestore)
        const querySnapshot = await getDocs(collection(db, "Rating"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().toString()}`);
            let list = doc.data()
            this.setState({
                doc:[list]
            }) 
        });
    }

    addFirestoreDoc = async (rating) => {
        const docRef = await addDoc(collection(db, "Rating"), {
            // time: Timestamp().toString(),
            // date: Timestamp().toDate().toString(),
            rating: rating,
            time: Timestamp.now()
        });
        console.log("Document written with ID: ", docRef.id);
    }

    deleteAllDocs = async () => {

    }

    componentDidMount = async() => {
        console.log("executed mount")
      await  this.getFirestoreDetails()
        console.log("doc - ",this.state)
    }

    render() {
        // console.log(this.props)

        return (
            <View style={{ flex: 1 }}>
                <AppBarComponent navigation={this.props.navigation} title="Home" />
                <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flex: 0.8, }}>
                    <Button
                        raised
                        style={{ borderRadius: 10, width: 200, alignContent: 'center' }}
                        mode='contained'
                        onPress={() => { this.props.navigation.navigate('Joke') }} >
                        <Text style={{ textAlign: 'center' }}>  Read a joke</Text>
                    </Button>
                    <Button
                        raised
                        style={{ borderRadius: 10, width: 200, alignContent: 'center' }}
                        mode='contained'
                        onPress={() => { this.props.navigation.navigate('Horoscope') }} >
                        <Text style={{ textAlign: 'center' }}> Horoscope</Text>
                    </Button>
                    <Button
                        raised
                        style={{ borderRadius: 10, width: 200, alignContent: 'center' }}
                        mode='contained'
                        onPress={() => { this.props.navigation.navigate('Weather') }} >
                        <Text style={{ textAlign: 'center' }}> Weather</Text>
                    </Button>
                    <Button
                        raised
                        style={{ borderRadius: 10, width: 200, alignContent: 'center' }}
                        mode='contained'
                        onPress={() => { this.props.navigation.navigate('TopNews') }} >
                        <Text style={{ textAlign: 'center' }}> Top News</Text>
                    </Button>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Rate Us</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginBottom: height / 11 }}>
                    <Ionicons name="thumbs-up" size={50} color="black" onPress={() => {
                        this.addFirestoreDoc('Like')
                        console.log("Firebase")
                    }} />
                    <Ionicons name="thumbs-down" size={50} color="black" onPress={() => {
                        this.addFirestoreDoc('Dislike')
                        console.log("Firebase")
                    }}/>
                </View>
            </View>
        );
    }
}

export default withTheme(Home);