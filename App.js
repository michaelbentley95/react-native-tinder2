import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Ayy Lmao</Text>
            <Button title="Click me" />
            <StatusBar style="auto" />
        </View>
    );
}
