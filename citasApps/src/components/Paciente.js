import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

const Paciente = ({ item, setModalVisible, pacienteEditar, pacienteEliminar, setModalPaciente,setPaciente }) => {
  const { paciente, fecha, id } = item;



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
    <Pressable onLongPress={()=>{
      setPaciente(item)
      setModalPaciente(true)}}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
        <View style={styles.contenedorBotones}>

          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true)
              pacienteEditar(id)
            }}
          >
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnEliminar]} onLongPress={() => { pacienteEliminar(id) }}>
            <Text style={styles.btnTexto}>Eliminar</Text>

          </Pressable>
        </View>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 2,
    marginBottom: 10
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 5
  },
  texto: {
    color: '#6d28d9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5

  },
  fecha: {
    color: '#374151',

  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,

  },
  btnEditar: {
    backgroundColor: '#f59e0b'
  },
  btnEliminar: {
    backgroundColor: '#ef4444'

  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF'
  }
})

export default Paciente