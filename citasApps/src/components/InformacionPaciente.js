import React from 'react'
import { Text, SafeAreaView, Pressable, View, StyleSheet } from 'react-native';

const InformacionPaciente = ({ paciente, setModalPaciente,setPaciente }) => {
    const formatearFecha = (fecha) => {
        const formatDate = new Date(fecha)
        const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
            'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const day = dias_semana[formatDate.getDay()];
        const dia = formatDate.getDate();
        const month = meses[formatDate.getMonth()];
        const year = formatDate.getUTCFullYear();
        const hours = formatDate.getHours();
        const minuties = formatDate.getMinutes();
        const fechaFinal = `${day},${dia} de ${month} de ${year} a las ${hours}:${minuties}`

        return fechaFinal;
    }

    return (
        <SafeAreaView style={styles.contenedor}>

            <Text style={styles.titulo}>Informacion <Text style={styles.tituloBold}>
                Paciente </Text></Text>
            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onLongPress={() => {
                        setModalPaciente(false)
                        setPaciente({})
                        }}>
                    <Text style={styles.btnCerrarTexto}>x Cerrar</Text>
                </Pressable>
            </View>
            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas:</Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f59e0b',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        fontWeight: '600',
        color: '#fff',
    },
    tituloBold: {
        fontWeight: 'bold',

    },
    btnCerrar: {
        marginTop: 20,
        backgroundColor: '#e06900',
        marginHorizontal: 30,
        padding: 20,
        marginVertical: 30,
        borderRadius: 10


    },
    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',

    },
    contenido: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,

    },
    campo: {

    },
     label: {
        textTransform:'uppercase',
        color:'#374151',
        fontWeight:'700',
        fontSize:12
    }, 
    valor: {
        fontWeight:'700',
        fontSize:20,
        color:'#334455',
        marginBottom:5
    }
})
export default InformacionPaciente