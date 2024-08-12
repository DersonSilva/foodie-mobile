import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/login.jsx';
import Registro from "./screens/registro/registro.jsx"
import Registro2 from "./screens/registro2/registro2.jsx"
import Busca from './screens/busca/busca.jsx';

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
    <Stack.Navigator>

    {/* <Stack.Screen name="perfil" component={Perfil} options={{
       title: "Meu Perfil",
       headerTitleAlign: "center",
       headerShadowVisible: false,
       }} />
    
    <Stack.Screen name="pedidos" component={Pedidos} options={{
       title: "Meus Pedidos",
       headerTitleAlign: "center",
       headerShadowVisible: false,
       }} />

    <Stack.Screen name="favoritos" component={Favoritos} options={{
       title: "Favoritos",
       headerTitleAlign: "center",
       headerShadowVisible: false,
       }} />

    <Stack.Screen name="home" component={Home} options={{
        headerShown: false
       }} /> */}

     <Stack.Screen name="login" component={Login} options={{
        headerShown: false
       }} />

     <Stack.Screen name="registro2" component={Registro2} options={{
          headerShadowVisible: false,
       }} />
       
      <Stack.Screen name="registro" component={Registro} options={{
      //   headerShadowVisible: false,
        title: "",
        headerBackTitle: "Voltar"
       }} />



    </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;