import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Ô vuông */}
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ màn hình
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: 'white',// Đặt màu nền toàn bộ màn hình là trắng
  },
  square: {
    width: 100, // Chiều rộng ô vuông
    height: 100, // Chiều cao ô vuông
    backgroundColor: 'skyblue', // Màu nền
    justifyContent: 'center', // Căn giữa nội dung bên trong (văn bản)
    alignItems: 'center',
  },
  text: {
    color: 'white', // Màu chữ
    fontSize: 16, // Kích thước chữ
  },
});

export default App;
