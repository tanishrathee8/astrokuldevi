import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.brand}>AstroKuldevi</Text>
        <Text style={styles.byline}>BY M.K. SHARMA</Text>

        <View style={styles.divider} />

        <Text style={styles.title}>Start Here</Text>

        <Text style={styles.description}>
          Discover personalized guidance through astrology and consultation.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/consultation")}
        >
          <Text style={styles.buttonText}>Request a Consultation</Text>
        </Pressable>

        <Text style={styles.footer}>+91 90345 923981</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171126",
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
  brand: {
    color: "#E8C878",
    fontSize: 36,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
  byline: {
    color: "#D8CDAF",
    fontSize: 12,
    letterSpacing: 3,
    textAlign: "center",
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#8D7642",
    marginVertical: 36,
  },
  title: {
    color: "#F4E8C4",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  description: {
    color: "#C8BED0",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#D8B75C",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 32,
  },
  buttonText: {
    color: "#171126",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  footer: {
    color: "#B9AFC2",
    fontSize: 14,
    textAlign: "center",
    marginTop: 28,
  },
});
