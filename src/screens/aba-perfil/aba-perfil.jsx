import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./aba-perfil.style.js";
import icons from "../../constants/icons";


function AbaPerfil() {
    return <View style={[styles.container, styles.borderTop]}>

        <TouchableOpacity style={styles.item}>
            <View style={styles.containerIcone}>
                <Image source={icons.endereco} style={styles.icone}/>
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo}>Endereço</Text>
                <Text style={styles.subtitulo}>Meu endereço de entrega</Text>
            </View>

            <View style={styles.containerIcone}>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item}>
            <View style={styles.containerIcone}>
                <Image source={icons.endereco} style={styles.icone}/>
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo}>Meus dados</Text>
                <Text style={styles.subtitulo}>Informações da minha conta</Text>
            </View>

            <View style={styles.containerIcone}>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item}>
            <View style={styles.containerIcone}>
                <Image source={icons.endereco} style={styles.icone}/>
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo}>Desconectar</Text>
                <Text style={styles.subtitulo}>Desconectar seu usuário desse aparelho</Text>
            </View>

            <View style={styles.containerIcone}>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

    </View>
}

export default AbaPerfil;