import { StyleSheet } from 'react-native';

import { Text, View } from '@/src/config/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className='text-3xl font-bold text-[#2adb53]'>Dein Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
