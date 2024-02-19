import { Pressable, View, StyleSheet } from "react-native";
import { GradientText } from "../atoms/GradientText";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

type CustomHeaderProps = { title: string };

export const ScreenHeader = ({ title }: CustomHeaderProps) => (
  <View style={styles.headerContainer}>
    <GradientText style={styles.centeredText}>
      {title}
    </GradientText>

    <Link href="/modal" asChild style={styles.rightContainer}>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            color="#fff"
            style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    paddingHorizontal: 16,
  },
  centeredText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightContainer: {
    position: 'absolute',
    right: 10
  },
  infoIcon: {
    marginLeft: 0,
  },
});