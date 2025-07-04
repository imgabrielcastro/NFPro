import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clients from "../screens/Clients";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="ClientsTab"
        component={Clients}
        options={{
          tabBarLabel: "Clientes",
          tabBarIcon: () => <Icon name="people" color={"#666"} size={26} />,
        }}
      />

      <Tab.Screen
        name="ClientsTabs"
        component={Clients}
        options={{
          tabBarLabel: "Teste",
          tabBarIcon: () => <Icon name="people" color={"#666"} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
