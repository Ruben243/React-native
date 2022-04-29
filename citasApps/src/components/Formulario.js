import React, { useState, useEffect } from 'react';
import {
  Modal, Text, StyleSheet, SafeAreaView,
  TextInput, View, ScrollView, Pressable, Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';
const Formulario = ({ modalVisible, setPacientes, pacientes, paciente: pacienteObj, setPaciente: setPacienteApp, cerrarModal }) => {

  const [paciente, setPaciente] = useState('');
  const [id, setId] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');


  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0 && pacienteObj) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);


    }
  }, [pacienteObj])


  const handleNuevaCita = () => {
    // validar
    if ([paciente, propietario, email, telefono, fecha, sintomas].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [{ text: 'Cancelar', style: 'cancel' }, { text: 'Ok' }]
      )
      return;
    }

    const nuevoPaciente = {
      paciente,
      propietario,
      telefono,
      email,
      fecha,
      sintomas
    }

    if (id) {
      // editando
      nuevoPaciente.id = id;
      const pacientesActualizados = pacientes.map((pacienteState) => {
        return pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState
      })


      setPacientes(pacientesActualizados);
      setPacienteApp({})
    } else {
      // nuevo registro
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    cerrarModal();
    // resetear valores
    setId('');
    setPaciente('');
    setPropietario('');
    setTelefono('')
    setEmail('');
    setFecha(new Date());
    setSintomas('');

  }

  return (
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>{pacienteObj.id ? 'Editar' : 'Nueva'} {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable style={styles.btnCancelar} onLongPress={() => {
            setPacienteApp({})
            // resetear valores
            setId('')
            setPaciente('');
            setPropietario('');
            setTelefono('')
            setEmail('');
            setFecha(new Date());
            setSintomas('');
            cerrarModal()
          }
          }>

            <Text style={styles.btnCancelarTexto}>X Cancelar </Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre paciente'
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre propietario'
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Email propietario'
              placeholderTextColor={'#666'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Telefono propietario'
              placeholderTextColor={'#666'}
              keyboardType={'phone-pad'}
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker date={fecha} locale='es'
                onDateChange={(fecha) => setFecha(fecha)}
                textColor={'#000'}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.input]}
              placeholder='Sintomas'
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleNuevaCita}>
            <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'Editar Paciente' : 'Agregar Paciente'}</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
    flex: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: 'bold',

  },
  campo: {
    marginTop: 15,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600'

  },
  sintomasInput: {
    height: 100
  },
  fechaContenedor: {
    backgroundColor: '#fff',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  btnCancelar: {
    marginTop: 20,
    backgroundColor: '#5827a4',
    marginHorizontal: 30,
    padding: 20,
    marginVertical: 30,
    borderRadius: 10


  },
  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    textTransform: 'uppercase',

  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#f59e0b',
    marginHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10

  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827a4',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,

  },
  fechaFormat: {
    color: '#FFF',
    fontSize: 20,

  }
});


export default Formulario;