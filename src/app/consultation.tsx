import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Linking,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../lib/supabase";

export default function ConsultationScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !email || !question || !contactTime) {
      Alert.alert("Missing information", "Please fill in all fields.");
      return;
    }

    try {
      setSubmitting(true);

      const { error } = await supabase.from("enquiries").insert({
        name,
        phone,
        email,
        question,
        contact_time: contactTime,
      });

      if (error) {
        throw error;
      }

      Alert.alert(
        "Request Received",
        "Thank you! Your consultation request has been received.",
      );

      setName("");
      setPhone("");
      setEmail("");
      setQuestion("");
      setContactTime("");
    } catch (error) {
      console.error("Enquiry submission error:", error);

      Alert.alert(
        "Something went wrong",
        "We couldn't submit your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCall = () => {
    Linking.openURL("tel:+919034592381");
  };

  const handleWhatsApp = () => {
    Linking.openURL(
      "https://wa.me/919034592381?text=Hello%20AstroKuldevi%2C%20I%20would%20like%20a%20consultation.",
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.back}>← Back</Text>
          </Pressable>

          <Text style={styles.eyebrow}>ASTROKULDEVI</Text>

          <Text style={styles.title}>Your Consultation</Text>

          <Text style={styles.description}>
            Share a few details and we will get in touch with you.
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>YOUR NAME</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#81778F"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PHONE NUMBER</Text>

            <TextInput
              style={styles.input}
              placeholder="+91"
              placeholderTextColor="#81778F"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#81778F"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>YOUR QUESTION</Text>

            <TextInput
              style={[styles.input, styles.message]}
              placeholder="What would you like guidance about?"
              placeholderTextColor="#81778F"
              multiline
              textAlignVertical="top"
              value={question}
              onChangeText={setQuestion}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PREFERRED CONTACT TIME</Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. 6 PM – 8 PM"
              placeholderTextColor="#81778F"
              value={contactTime}
              onChangeText={setContactTime}
            />
          </View>

          <Pressable
            style={[styles.button, submitting && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            <Text style={styles.buttonText}>
              {submitting ? "Sending..." : "Request a Call"}
            </Text>
          </Pressable>

          <Pressable style={styles.callButton} onPress={handleCall}>
            <Text style={styles.callButtonText}>Call +91 90345 92381</Text>
          </Pressable>

          <Pressable style={styles.whatsappButton} onPress={handleWhatsApp}>
            <Text style={styles.whatsappButtonText}>WhatsApp Us</Text>
          </Pressable>

          <Text style={styles.note}>
            We will contact you at the preferred time.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#171126",
  },

  content: {
    padding: 24,
    paddingBottom: 40,
  },

  back: {
    color: "#D8B75C",
    fontSize: 16,
    marginBottom: 35,
  },

  eyebrow: {
    color: "#D8B75C",
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 10,
  },

  title: {
    color: "#F4E8C4",
    fontSize: 34,
    fontWeight: "600",
  },

  description: {
    color: "#B9AFC2",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 30,
  },

  field: {
    marginBottom: 20,
  },

  label: {
    color: "#D8CDAF",
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#211934",
    borderWidth: 1,
    borderColor: "#3B3150",
    borderRadius: 10,
    color: "#F4E8C4",
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },

  message: {
    minHeight: 120,
    paddingTop: 14,
  },

  button: {
    backgroundColor: "#D8B75C",
    borderRadius: 10,
    paddingVertical: 16,
    marginTop: 8,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#171126",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  callButton: {
    borderWidth: 1,
    borderColor: "#D8B75C",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 12,
  },

  callButtonText: {
    color: "#D8B75C",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },

  whatsappButton: {
    borderWidth: 1,
    borderColor: "#6FAF78",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 12,
  },

  whatsappButtonText: {
    color: "#8BCB91",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },

  note: {
    color: "#81778F",
    fontSize: 12,
    textAlign: "center",
    marginTop: 14,
  },
});
