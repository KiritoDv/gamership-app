import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, StatusBar } from 'react-native'

import CustomTextInput from '../CustomTextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Logo from '../../src/images/SpaceGaming.png'
import { CheckBox } from 'react-native-elements'
import { ScrollView, FlatList } from 'react-native-gesture-handler'

import UserController from "../controllers/User.controller"

export default class RegisterView extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            nick: "",
            email: "",
            password: "",
            repeat: "",
            terms: false,
            validEmail: false,
            validPassword: false,
            validNick: false,
            validName: false,
            validRepeat: false
        }
    }


    validateEmail=(email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendRegister = (e) =>{
        var controller = new UserController();
        if((this.state.validEmail) && (this.state.validRepeat) && (this.state.validNick) && (this.state.validPassword) && (this.state.validName) && (this.state.terms)){
            controller.doRegister({
                name: this.state.name,
                username: this.state.nick,
                email:    this.state.email,
                password: this.state.password,
                address: "Mexico"
            }).then(result => {
                switch(result.code){
                    case 200:
                        this.props.navigation.navigate('Login')
                        break;
                    case 400:
                        alert("Error 400")
                        break;
                    case 500:
                        alert("Error 500")
                        break;
                }
            })
        }
    } 
    
    emailValidator = (e) =>{
        if(e.trim() === ""){
            //alert("No puede estar vacio el correo electronico")
            this.setState({
                validEmail: false
            })
        }else{
            if(!this.validateEmail(e.trim())){
                //alert("Correo electronico invalido")
                this.setState({
                    validEmail: false
                })
            }else{
                this.setState({
                    validEmail: true,
                    email: e.trim().toLowerCase()
                })
            }
        }
    }

    repeatValidator = (e) =>{
        if(e.trim() === ""){
            //alert("No puede estar vacia la contraseña")
            this.setState({
                validRepeat: false
            })
        }else{
            if(this.state.email !== e.trim()){
                this.setState({
                    validRepeat: false
                })
                //alert("Las contraseñas no son iguales")
            }else{
                this.setState({
                    validRepeat: true,
                    repeat: e.trim().toLowerCase()
                })
            }
        }
    }

    nickValidator = (e) =>{
        if(e.trim() === ""){
            //alert("No puede estar vacio el nombre de usuario")
            this.setState({
                validNick: false
            })
        }else{
            if(e.length > 3){
                this.setState({
                    validNick: true,
                    nick: e.trim()
                })
            }else{
                this.setState({
                    validNick: false
                })
                //alert("Nombre de usuario invalido minimo 4 caracteres")
            }
        }      
    }    

    passValidator = (e) =>{
        if(e.trim() === ""){
            //alert("No puede ir vacia la contraseña");
            this.setState({
                validPassword: false
            })
        }else{
            if(e.length > 7){
                this.setState({
                    password: e.trim(),
                    validPassword: true
                })
            }else{
                this.setState({
                    validPassword: false
                })
                //alert("Contraseña Invalida minimo 8 caracteres");
            }
        }
    }

    nameValidator = (e) =>{
        if(e.trim() === ""){
            //alert("No puede ir vacio el nombre");
            this.setState({
                validName: false
            })
        }else{
            if(e.length > 10){
                this.setState({
                    name: e,
                    validName: true
                })
            }else{
                this.setState({
                    validName: false
                })
                //alert("Nombre Invalido");
            }
        }       
    }

    render() {
        return (
            <View style={styles.mainContainer}> 
                <View style={[styles.loginHeader, styles.shadow]}>
                    <Image source={require('../../src/images/color_logo_transparent.png')} style={{width: '70%', height: '85%'}}/>
                </View>
                <Text style={styles.headerText} >Crear una cuenta de Space Gaming</Text>
                <View style={styles.registerContainer}>
                                    
                    <ScrollView bounces style={styles.textInput}>
                        <TextInput
                            style={[styles.inputs, styles.shadow,{
                                borderColor: this.state.validName ? '#373737' : 'red'
                            }]}
                            placeholder="Nombre Completo"
                            textContentType="text"
                            onChangeText={this.nameValidator}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={[styles.inputs, styles.shadow,{
                                borderColor: this.state.validNick ? '#373737' : 'red'
                            }]}
                            placeholder="Nombre de Usuario"
                            textContentType="text"
                            onChangeText={this.nickValidator}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={[styles.inputs, styles.shadow,{
                                borderColor: this.state.validEmail ? '#373737' : 'red'
                            }]}
                            placeholder="Correo Electronico"
                            textContentType="text"
                            onChangeText={this.emailValidator}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={[styles.inputs, styles.shadow,{
                                borderColor: this.state.validRepeat ? '#373737' : 'red'
                            }]}
                            placeholder="Confirmar Correo Electronico"
                            textContentType="text"
                            onChangeText={this.repeatValidator}
                            underlineColorAndroid="transparent"
                        /> 
                        <TextInput
                                style={[styles.inputs, styles.shadow,{
                                    borderColor: this.state.validPassword ? '#373737' : 'red'
                                }]}
                                placeholder="Contraseña"
                                textContentType="password"
                                onChangeText={this.passValidator}
                                underlineColorAndroid="transparent"
                        />                        
                            <CheckBox
                            containerStyle={{backgroundColor: '#f2f2f2', borderColor: 'transparent'}}
                            title='Acepto los Terminos de Uso, Terminos de Venta y la Politica de Privacidad'
                            checked={this.state.terms}
                            onPress={() => this.setState({terms: !this.state.terms})}
                            size={20}
                        />
                        <TouchableHighlight 
                            underlayColor='#BA8B49' 
                            style= {[styles.createAccBtn, styles.shadow]}
                            onPress={this.sendRegister}
                        >
                            <Text style={{color:'#f2f2f2'}}>Crear Una Cuenta</Text>
                        </TouchableHighlight>
                    </ScrollView>                     
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    loginHeader: {
        flex: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    shadow: {
        shadowOpacity: 0.25,
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }
    },    
    headerText: {        
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30,
    },
    inputs: {        
        alignSelf: 'stretch',
        textAlign: 'left',
        height: 40,        
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 20,        
        paddingLeft: 10        
    },
    registerContainer: {
        flex: 70,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
    },
    textInput:{
        width: '100%',
    },
    createAccBtn: {
        width: '80%',
        margin: 30,
        marginBottom: 0,
        borderRadius: 10,
        backgroundColor: '#333333',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})