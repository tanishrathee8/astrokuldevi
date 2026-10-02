import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="arrow-back" size={22} color="#F4E8C1" />
        </Pressable>

        <Text style={styles.headerTitle}>PRIVACY POLICY</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>ASTROKULDEVI</Text>

        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.intro}>
          Your privacy matters to us. This policy explains how information
          submitted through AstroKuldevi is collected and used.
        </Text>

        <Section
          title="Information We Collect"
          text="When you submit a consultation request, we collect the information you provide: your name, mobile number, consultation topic, date and time of birth, place of birth, your question, and preferred contact time. We also record whether you have consented to be contacted."
        />

        <Section
          title="How We Use Your Information"
          text="The information you submit is used solely to respond to your consultation request. Your mobile number is used to contact you to schedule and confirm your consultation. Your question and birth details are used to prepare for your consultation."
        />

        <Section
          title="Information Sharing"
          text="Your consultation request information is not shared with third parties. It is accessible only to M.K. Sharma and authorized team members for the purpose of conducting your consultation."
        />

        <Section
          title="Data Retention"
          text="Your consultation request data is retained for as long as necessary to provide the consultation service."
        />

        <Section
          title="Your Consent"
          text="By submitting a consultation request, you consent to being contacted regarding your consultation. You may request that your information be removed at any time by contacting us."
        />

        <Section
          title="Contact"
          text="If you have questions about this privacy policy, please use the contact details on our Contact page."
        />

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120D1F",
  },

  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(216,183,92,0.12)",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#F4E8C1",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
  },

  headerSpacer: {
    width: 40,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 34,
  },

  eyebrow: {
    color: "#D8B75C",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  title: {
    color: "#F7F0DC",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 16,
  },

  intro: {
    color: "#BEB5C8",
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 30,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#E6C86A",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 9,
  },

  sectionText: {
    color: "#C9C1D0",
    fontSize: 14,
    lineHeight: 23,
  },

  bottomSpace: {
    height: 40,
  },
});
