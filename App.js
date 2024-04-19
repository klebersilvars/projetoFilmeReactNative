
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './services/api';
import Filmes from './services/Filmes/Filmes';
import Spinner from 'react-native-loading-spinner-overlay'

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    function carregando() {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }

    carregando()

    async function pegarFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
    }
    pegarFilmes()
  }, [])

  return (

    <View style={styles.container}>

      {loading ? <Spinner
        visible={loading}
        color='black'
        animation='slide'
        size='normal'
      />

        :
        <View style={styles.container}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Filmes mais famosos do cartaz!</Text>

          <FlatList
            data={filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </View>

      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
});
