import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/src/config/Themed';
import { user } from '@/data/schema/user.schema';
import { db } from '@/data/database';
import { sql } from 'drizzle-orm';

export default function TabOneScreen() {
  const addUser = async () => {
    const entry = await db
      .insert(user)
      .values({
        id: 1,
        name: 'dave',
        email: 'dave',
        password: 'evad',
        role: 'admin',
      })
      .returning();

    console.warn(entry);
  };

  const logUserCount = async () => {
    const result = (
      await db.select({ count: sql<number>`count(*)` }).from(user)
    )[0].count;
    console.warn(result);
  };
  return (
    <View style={styles.container}>
      <Text className='text-3xl font-bold text-[#2adb53]'>Your Dashboard</Text>
      <Text className='text-m font-bold text-[#76ff96]'>
        You can test the database implementation here:
      </Text>
      <Pressable onPress={addUser}>
        <Text>Add User</Text>
      </Pressable>
      <Pressable onPress={logUserCount}>
        <Text>Log Usercount</Text>
      </Pressable>
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
