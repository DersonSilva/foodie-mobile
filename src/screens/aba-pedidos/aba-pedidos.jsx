import { FlatList, Image, View, Text } from "react-native";
import icons from "../../constants/icons.js"
import { pedidos } from "../../constants/dados.js";
import { styles } from "./aba-pedidos.style.js";
import Pedido from "../../components/pedido/pedido.jsx"

const vazio = [];

function AbaPedidos() {
    return <View style={styles.container}>
       <FlatList data={pedidos}
       keyExtractor={(ped) => ped.id}
       showsVerticalScrollIndicator={false}
       renderItem={({item}) => {
        return <Pedido logotipo={item.logotipo}
        nome={item.nome}
        valor={item.vl_total}
        dt_pedido={item.dt_pedido}
        status={item.status}
        />
      
       }}

       contentContainerStyle={styles.containerList}

       ListEmptyComponent={() => {
          return <View style={styles.empty}>
           <Image source={icons.empty} />
           <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
            </View>
       }}

       />
    </View>
}

export default AbaPedidos;