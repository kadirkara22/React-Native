import React, { useState, useEffect } from 'react'
import { View, Text,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Config from 'react-native-config'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Characters from '../Characters/Characters'
import Creators from '../Creators/Creators'
import Events from '../Events/Events'
import Series from '../Series/Series'
import Stories from '../Stories/Stories'
import Comics from '../Comics/Comics'
import MyList from '../MyList'
import styles from "./Home.style"
const Home = () => {
    const [text, setText] = useState("")
    const [urlChar, setUrlChar] = useState(`${Config.API_URL}/characters`)
    const [urlComics, setUrlComics] = useState(`${Config.API_URL}/comics`)
    const [urlCreators, setUrlCreators] = useState(`${Config.API_URL}/creators`)
    const [urlEvents, setUrlEvents] = useState(`${Config.API_URL}/events`)
    const [urlSeries, setUrlSeries] = useState(`${Config.API_URL}/series`)
    const [urlStories, setUrlStories] = useState(`${Config.API_URL}/stories`)
    
    const menus = [
        { name: "Home" },
        { name: "Characters" },
        { name: "Comics" },
        { name: "Creators" },
        { name: "Events" },
        { name: "Series" },
        { name: "Stories" },
    ]
 
    const [active, setActive] = useState("Home")
    const handleMenuClick = (name) => {
        setActive(name)
        setText("")
          if(active==="Characters"){
 setUrlChar( `${Config.API_URL}/characters`)

    }
      if(active==="Comics"){
 setUrlComics(`${Config.API_URL}/comics`)

    }
       if(active==="Creators"){
 setUrlCreators(`${Config.API_URL}/creators`)

    }
              if(active==="Events"){
setUrlEvents( `${Config.API_URL}/events`)

    }

              if(active==="Series"){
setUrlSeries( `${Config.API_URL}/series`)

    }
    }

const searchSubmit =(e)=> {
    if(active==="Characters"){
 setUrlChar( `${Config.API_URL}/characters?nameStartsWith=${e.nativeEvent.text}`)

    }
      if(active==="Comics"){
 setUrlComics( `${Config.API_URL}/comics?titleStartsWith=${e.nativeEvent.text}`)

    }
       if(active==="Creators"){
setUrlCreators( `${Config.API_URL}/creators?nameStartsWith=${e.nativeEvent.text}`)

    }
           if(active==="Events"){
setUrlEvents( `${Config.API_URL}/events?nameStartsWith=${e.nativeEvent.text}`)

    }
               if(active==="Series"){
setUrlSeries( `${Config.API_URL}/series?titleStartsWith=${e.nativeEvent.text}`)

    }
         
}
    return (
        <View style={styles.contianer}>
            <Header menus={menus} handleMenuClick={handleMenuClick} active={active} />
            <View style={styles.input_container} >
                <Input style={styles.input}
                    placeholder={`Search Marvel ${active}`}
                    placeholderTextColor="black"
                    value={text}
                    onChangeText={setText}
                    returnKeyType="search"
                    onSubmitEditing={searchSubmit}
                />
                <Icon name="search" size={25} style={styles.icon} />
            </View>

            {
                active === "Home" ? <MyList />
                    : active === "Characters" ? <Characters url={urlChar} />
                        : active==="Comics" ? <Comics url={urlComics} />
                        :active==="Creators" ? <Creators url={urlCreators} />
                        :active==="Events" ? <Events url={urlEvents} />
                        :active==="Series" ? <Series url={urlSeries} />
                        :active==="Stories" ? <Stories url={urlStories} />
                        :null
            }
        </View>
    )
}

export default Home
