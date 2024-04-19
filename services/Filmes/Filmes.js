import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, Button, Modal} from 'react-native'

//utilizo isso para pegar a tela geral do telefone, a largura
const windowWidth = Dimensions.get('window').width;

export default function Filmes({data}) {

    const [modalAberto, setModalAberto] = useState(false)
    function abrirModal() {
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
    }

    return(
        <View style={{flex: 1, width: windowWidth, alignItems: 'center', justifyContent: 'center', margin: 10}} >
            <Text style={{fontWeight: 'bold', fontSize: 17}}>{data.nome}</Text>
            <Image style={{width: 200, height: 200}} source={{uri: `${data.foto}`}}/>
            <Button onPress={abrirModal} title="leia mais"/>

            {modalAberto && 
            <Modal animationType='slide' visible={modalAberto}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20,}}>
                    <Text style={style.sinopseTitulo}>Sinopse do filme: {data.nome}</Text>
                    <Text style={{fontSize: 17}}>{data.sinopse}</Text>
                    <Button onPress={fecharModal} title='Fechar modal'/>
                </View>
            </Modal>}
        </View>
    )
}

const style = StyleSheet.create({
    sinopseTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    }
})
