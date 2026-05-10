import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"

interface iTodo {
  id: number
  name: string
}

export default function App() {
  const [todo, setTodo] = useState("")
  const [listTodo, setListTodo] = useState<iTodo[]>([])

  const handleAddToDo = () => {
    if (!todo)
      return Alert.alert("thiếu input toDo", "Todo khong duoc de trong", [
        {
          text: "Xác nhận",
          onPress: () => console.log("Xac nhan"),
          style: "cancel",
        },
      ])
    setListTodo([...listTodo, { id: randomInteger(1, 2000), name: todo }])
    setTodo("")
  }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) * min
  }

  const deletetoDO = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id)
    setListTodo(newTodos)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>TodoApp</Text>

        <View>
          <Text style={{ textAlign: "center" }}>Form</Text>
          <TextInput
            placeholder="Text me"
            style={styles.toDoInput}
            value={todo}
            onChangeText={(value) => setTodo(value)}
          ></TextInput>
          <Button title="Add" color={"red"} onPress={handleAddToDo}></Button>
        </View>
        {/* //List */}
        <View>
          <FlatList
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onLongPress={() => deletetoDO(item.id)}
                >
                  <Text style={styles.TodoItem}>{item.name}</Text>
                </Pressable>
              )
            }}
            keyExtractor={(item) => item.id + ""}
          ></FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    color: "red",
    fontSize: 40,
    textAlign: "center",
  },
  toDoInput: {
    borderColor: "red",
    borderBottomWidth: 1,
    padding: 5,
    margin: 15,
  },
  TodoItem: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    margin: 5,
    borderStyle: "dashed",
  },
})
