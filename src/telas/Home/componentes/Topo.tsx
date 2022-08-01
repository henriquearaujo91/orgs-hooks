import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../../assets/logo.png";

export default function Topo() {
    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}></Image>
        <Text style={estilos.boasVindas}>Ola Henrique</Text>
        <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
}


const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
});