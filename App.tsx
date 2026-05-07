import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
  const [name, setName] = useState<string>("")
  const [count, setCount] = useState<number>(0)
  const [test, setTest] = useState({
    name: "nghipham",
    age: 12,
  })

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60, fontWeight: "600" }}>
        {test.name} Hello World
      </Text>
      <Text style={{ fontSize: 60 }}>count = {count}</Text>
      <Button title="rblox" onPress={() => setCount(count + 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "red",
    borderColor: "green",
  },
})
