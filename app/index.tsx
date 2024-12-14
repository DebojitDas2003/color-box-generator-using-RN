import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'

interface ColorBox {
  id: string
  color: string
}

const App: React.FC = () => {
  const [color, setColor] = useState<ColorBox[]>([])

  const generateRandomColor = (): string => {
    const randomColor = `rgb(${Math.random() * 256}), ${Math.random() * 256},${
      Math.random() * 256
    })`
    return randomColor
  }

  const addcolorBox = () => {
    const newColor: ColorBox = {
      id: Math.random().toString(),
      color: generateRandomColor(),
    }
    setColor((prevColor) => [...prevColor, newColor])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Box Generator</Text>
      <TouchableOpacity style={styles.button} onPress={addcolorBox}>
        <Text style={styles.buttonText}>Add Color Box</Text>
      </TouchableOpacity>
      <FlatList
        data={color}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.colorBox, { backgroundColor: item.color }]}>
            <Text style={styles.colorText}>{item.color}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#030303',
    borderRadius: 20,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  colorBox: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  colorText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 2,
  },
})

export default App
