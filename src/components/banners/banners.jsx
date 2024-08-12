import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style.js";

function Banners(props) {
    return <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            props.dados.map((banners, index) => {
            return <View key={index} style={styles.banners}>
               <TouchableOpacity>
                <Image style={styles.icone} source={banners.icone}/>
                </TouchableOpacity>
            </View>
            })
        }
      </ScrollView>
    </View>
}

export default Banners;