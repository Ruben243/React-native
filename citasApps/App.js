import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, FlatList, Alert, Modal } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0]);


  }
  const pacienteEliminar = (id) => {
    Alert.alert(
      '¿Estas Seguro de eliminar este paciente?',
      'Despues no se podra recuperar ',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, Eliminalo', onPress: () => {
            const pacienteActualizados = pacientes.filter(
              pacientesState => pacientesState.id !== id);

            setPacientes(pacienteActualizados);
          }
        }
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false);

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No Hay Pacientes Aun<Text style={styles.tituloBold}> Agrega Uno</Text></Text>
        : <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            )
          }}
        />}



      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <Formulario
          modalVisible={modalVisible}
          cerrarModal={cerrarModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

      </Modal>



      <Modal
        visible={modalPaciente}
        animationType='fade'

      >
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
    fontWeight: '600',
    color: '#374151',
  },
  tituloBold: {
    fontWeight: 'bold',
    color: '#6D28D9'

  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;
