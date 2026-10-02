import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
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
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [timeOfBirth, setTimeOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [question, setQuestion] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleDateChange = (_event: unknown, date: Date) => {
    setShowDatePicker(false);

    setSelectedDate(date);

    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}/${date.getFullYear()}`;

    setDateOfBirth(formattedDate);
  };

  const handleTimeChange = (_event: unknown, time: Date) => {
    setShowTimePicker(false);

    setSelectedTime(time);

    setTimeOfBirth(
      time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    );
  };
  const handleConsultationSubmit = async () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedPlaceOfBirth = placeOfBirth.trim();
    const trimmedQuestion = question.trim();

    if (!trimmedName) {
      Alert.alert("Name Required", "Please enter your full name.");
      return;
    }

    if (trimmedName.length < 2) {
      Alert.alert("Invalid Name", "Please enter a valid name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!dateOfBirth) {
      Alert.alert(
        "Date of Birth Required",
        "Please select your date of birth.",
      );
      return;
    }

    if (!timeOfBirth) {
      Alert.alert(
        "Time of Birth Required",
        "Please select your time of birth.",
      );
      return;
    }

    if (!trimmedPlaceOfBirth) {
      Alert.alert(
        "Place of Birth Required",
        "Please enter your place of birth.",
      );
      return;
    }

    if (trimmedQuestion.length < 10) {
      Alert.alert(
        "Question Too Short",
        "Please enter at least 10 characters for your question.",
      );
      return;
    }

    if (!contactTime) {
      Alert.alert(
        "Preferred Time Required",
        "Please select your preferred contact time.",
      );
      return;
    }

    if (!consent) {
      Alert.alert(
        "Consent Required",
        "Please confirm that you agree to be contacted regarding your consultation.",
      );
      return;
    }
    try {
      setSubmitting(true);

      const { error: databaseError } = await supabase.from("enquiries").insert({
        name,
        phone,
        email,
        date_of_birth: dateOfBirth,
        time_of_birth: timeOfBirth,
        place_of_birth: placeOfBirth,
        question,
        contact_time: contactTime,
      });
      if (databaseError) throw databaseError;

      const { error: emailError } = await supabase.functions.invoke(
        "send-enquiry-email",
        {
          body: {
            name,
            phone,
            email,
            dateOfBirth,
            timeOfBirth,
            placeOfBirth,
            question,
            contactTime,
          },
        },
      );

      if (emailError) {
        console.error("Email notification error:", emailError);
        Alert.alert(
          "Request Saved",
          "Your enquiry was saved successfully, but the email notification could not be sent.",
        );
      } else {
        Alert.alert(
          "Request Received",
          "Thank you. Your consultation request has been received.",
        );
      }

      setName("");
      setPhone("");
      setEmail("");
      setDateOfBirth("");
      setTimeOfBirth("");
      setPlaceOfBirth("");
      setQuestion("");
      setContactTime("");
      setConsent(false);
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

  const handleConsultationCall = () => Linking.openURL("tel:+917015733876");
  const handleConsultationWhatsApp = () =>
    Linking.openURL(
      "https://wa.me/917015733876?text=Hello%20AstroKuldevi%2C%20I%20would%20like%20a%20consultation.",
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.backText}>BACK</Text>
        </Pressable>

        <View style={styles.headerBrand}>
          <Text style={styles.headerBrandText}>ASTROKULDEVI</Text>
          <Text style={styles.headerByline}>BY M.K. SHARMA</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.pageIntro}>
          <Text style={styles.pageEyebrow}>PRIVATE CONSULTATION</Text>
          <Text style={styles.pageTitle}>
            Your questions.
            {"\n"}
            <Text style={styles.pageAccent}>Your guidance.</Text>
          </Text>
          <View style={styles.pageLine} />
          <Text style={styles.pageDescription}>
            Take a quiet moment. Tell us what has been on your mind, and we'll
            get in touch with you at a time that feels right.
          </Text>
        </View>

        <View style={styles.consultationSection}>
          <View style={styles.consultationTopRow}>
            <View style={styles.consultationIconBadge}>
              <Ionicons name="sparkles-outline" size={18} color="#D8B75C" />
            </View>
            <View style={styles.consultationTopLine} />
            <Text style={styles.consultationEyebrow}>PRIVATE CONSULTATION</Text>
          </View>
          <Text style={styles.consultationTitle}>
            Your questions.
            {"\n"}
            <Text style={styles.consultationAccent}>Your guidance.</Text>
          </Text>
          <View style={styles.consultationLine} />
          <Text style={styles.consultationDescription}>
            Take a quiet moment. Tell us what has been on your mind, and we'll
            get in touch with you at a time that feels right.
          </Text>

          <Text style={styles.consultationLabel}>YOUR NAME</Text>
          <View style={styles.inputShell}>
            <Ionicons
              name="person-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.consultationInput}
              placeholder="Enter your full name"
              placeholderTextColor="#746A80"
              value={name}
              onChangeText={setName}
              selectionColor="#D8B75C"
            />
          </View>

          <Text style={styles.consultationLabel}>PHONE NUMBER</Text>
          <View style={styles.inputShell}>
            <Ionicons
              name="call-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.consultationInput}
              placeholder="+91 00000 00000"
              placeholderTextColor="#746A80"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              selectionColor="#D8B75C"
            />
          </View>

          <Text style={styles.consultationLabel}>EMAIL ADDRESS</Text>
          <View style={styles.inputShell}>
            <Ionicons
              name="mail-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.consultationInput}
              placeholder="you@example.com"
              placeholderTextColor="#746A80"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              selectionColor="#D8B75C"
            />
          </View>
          <Text style={styles.consultationLabel}>DATE OF BIRTH</Text>
          <Pressable
            style={styles.inputShell}
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons
              name="calendar-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <Text
              style={[
                styles.consultationInput,
                !dateOfBirth && styles.placeholderText,
              ]}
            >
              {dateOfBirth || "DD / MM / YYYY"}
            </Text>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              maximumDate={new Date()}
              onValueChange={handleDateChange}
            />
          )}

          <Text style={styles.consultationLabel}>TIME OF BIRTH</Text>
          <Pressable
            style={styles.inputShell}
            onPress={() => setShowTimePicker(true)}
          >
            <Ionicons
              name="time-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <Text
              style={[
                styles.consultationInput,
                !timeOfBirth && styles.placeholderText,
              ]}
            >
              {timeOfBirth || "e.g. 10:30 AM"}
            </Text>
          </Pressable>

          {showTimePicker && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="default"
              is24Hour={false}
              onValueChange={handleTimeChange}
            />
          )}

          <Text style={styles.consultationLabel}>PLACE OF BIRTH</Text>
          <View style={styles.inputShell}>
            <Ionicons
              name="location-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.consultationInput}
              placeholder="City, State, Country"
              placeholderTextColor="#746A80"
              value={placeOfBirth}
              onChangeText={setPlaceOfBirth}
              selectionColor="#D8B75C"
            />
          </View>

          <View style={styles.consultationSubsection}>
            <Text style={styles.consultationSubEyebrow}>
              THE REASON YOU'RE HERE
            </Text>
            <View style={styles.subTitleRow}>
              <View style={styles.subTitleIcon}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={15}
                  color="#D8B75C"
                />
              </View>
              <Text style={styles.consultationSubTitle}>Your Question</Text>
            </View>
          </View>

          <Text style={styles.consultationLabel}>
            WHAT WOULD YOU LIKE GUIDANCE ABOUT?
          </Text>
          <View style={styles.messageShell}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={17}
              color="#9C8750"
              style={styles.messageIcon}
            />
            <TextInput
              style={styles.consultationMessage}
              placeholder="Tell us what has been on your mind..."
              placeholderTextColor="#746A80"
              multiline
              textAlignVertical="top"
              value={question}
              onChangeText={setQuestion}
              selectionColor="#D8B75C"
            />
          </View>

          <Text style={styles.consultationLabel}>PREFERRED CONTACT TIME</Text>
          <View style={styles.inputShell}>
            <Ionicons
              name="time-outline"
              size={17}
              color="#9C8750"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.consultationInput}
              placeholder="e.g. 6 PM – 8 PM"
              placeholderTextColor="#746A80"
              value={contactTime}
              onChangeText={setContactTime}
              selectionColor="#D8B75C"
            />
          </View>
          <Text style={styles.consultationHint}>
            We'll do our best to reach you within your preferred window.
          </Text>

          <Pressable
            style={styles.consentRow}
            onPress={() => setConsent((current) => !current)}
          >
            <View
              style={[
                styles.consentCheckbox,
                consent && styles.consentCheckboxChecked,
              ]}
            >
              {consent && (
                <Ionicons name="checkmark" size={15} color="#120D1F" />
              )}
            </View>

            <Text style={styles.consentText}>
              I consent to being contacted regarding my consultation request.
            </Text>
          </Pressable>

          <Text style={styles.consultationSubmitEyebrow}>
            WHEN YOU'RE READY
          </Text>
          <Text style={styles.consultationSubmitTitle}>
            Begin the conversation.
          </Text>
          <Text style={styles.consultationSubmitText}>
            Once you submit your request, we'll receive your details and get in
            touch with you.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.consultationButton,
              pressed && styles.consultationPressed,
              submitting && styles.consultationDisabled,
            ]}
            onPress={handleConsultationSubmit}
            disabled={submitting}
          >
            <Text style={styles.consultationButtonText}>
              {submitting ? "SENDING..." : "REQUEST A CALL"}
            </Text>
            <View style={styles.consultationButtonArrow}>
              <Ionicons name="arrow-forward" size={19} color="#120D1F" />
            </View>
          </Pressable>

          <View style={styles.consultationDirect}>
            <Text style={styles.consultationDirectEyebrow}>
              PREFER TO REACH OUT DIRECTLY?
            </Text>
            <Text style={styles.consultationDirectTitle}>
              We're just a call away.
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.consultationContactCard,
                pressed && styles.contactPressed,
              ]}
              onPress={handleConsultationCall}
            >
              <View style={styles.contactIconCircle}>
                <Ionicons name="call-outline" size={19} color="#D8B75C" />
              </View>

              <View style={styles.contactCardText}>
                <Text style={styles.consultationContactLabel}>CALL US</Text>
                <Text style={styles.consultationContactValue}>
                  +91 70157 33876{" "}
                </Text>
              </View>

              <Text style={styles.consultationContactArrow}>↗</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.consultationWhatsappCard,
                pressed && styles.whatsappPressed,
              ]}
              onPress={handleConsultationWhatsApp}
            >
              <View style={styles.whatsappIconCircle}>
                <Ionicons name="logo-whatsapp" size={20} color="#8BCB91" />
              </View>

              <View style={styles.contactCardText}>
                <Text style={styles.consultationWhatsappLabel}>WHATSAPP</Text>
                <Text style={styles.consultationWhatsappValue}>
                  Start a conversation
                </Text>
              </View>

              <Text style={styles.consultationWhatsappArrow}>↗</Text>
            </Pressable>
          </View>

          <View style={styles.consultationPrivacy}>
            <Text style={styles.consultationPrivacyTitle}>
              YOUR PRIVACY MATTERS
            </Text>
            <Text style={styles.consultationPrivacyText}>
              Your information is kept private and is used only for your
              consultation request.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120D1F",
  },
  header: {
    minHeight: 72,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#30263F",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 70,
  },
  backArrow: {
    color: "#D8B75C",
    fontSize: 28,
    lineHeight: 28,
    marginRight: 5,
  },
  backText: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 1.8,
    fontWeight: "600",
  },
  headerBrand: {
    alignItems: "flex-end",
  },
  headerBrandText: {
    color: "#D8B75C",
    fontSize: 13,
    letterSpacing: 3,
    fontWeight: "600",
    fontFamily: "serif",
  },
  headerByline: {
    color: "#A49A8B",
    fontSize: 7,
    letterSpacing: 2,
    marginTop: 4,
    fontFamily: "serif",
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 25,
    paddingBottom: 45,
  },
  pageIntro: {
    marginBottom: 2,
  },
  pageEyebrow: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2.4,
    marginBottom: 14,
  },
  pageTitle: {
    color: "#F4E8C4",
    fontSize: 34,
    lineHeight: 42,
    fontFamily: "serif",
  },
  pageAccent: {
    color: "#D8B75C",
    fontStyle: "italic",
  },
  pageLine: {
    width: 42,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 18,
    marginBottom: 15,
  },
  pageDescription: {
    color: "#AAA0B7",
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 17,
  },
  consultationSection: {
    backgroundColor: "#1A1328",
    borderWidth: 1,
    borderColor: "#342A45",
    borderRadius: 16,
    padding: 21,
    marginTop: 18,
  },
  consultationTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  consultationIconBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#21192B",
    borderWidth: 1,
    borderColor: "#594A2E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  consultationTopLine: {
    width: 18,
    height: 1,
    backgroundColor: "#665738",
    marginRight: 9,
  },
  consultationEyebrow: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 2.3,
    flex: 1,
  },
  consultationTitle: {
    color: "#F4E8C4",
    fontSize: 30,
    lineHeight: 38,
    fontFamily: "serif",
  },
  consultationAccent: { color: "#D8B75C", fontStyle: "italic" },
  consultationLine: {
    width: 42,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 18,
    marginBottom: 16,
  },
  consultationDescription: {
    color: "#AAA0B7",
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 22,
  },
  consultationLabel: {
    color: "#B8AA8B",
    fontSize: 8,
    letterSpacing: 1.6,
    marginBottom: 8,
    marginTop: 3,
  },
  inputShell: {
    minHeight: 52,
    backgroundColor: "#1C152A",
    borderWidth: 1,
    borderColor: "#362C48",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 8,
    marginBottom: 17,
  },
  inputShellFocused: {
    borderColor: "#594A2E",
  },
  inputIcon: {
    marginRight: 9,
  },
  consultationInput: {
    flex: 1,
    minHeight: 50,
    color: "#F4E8C4",
    fontSize: 13,
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  placeholderText: {
    color: "#746A80",
  },
  consultationSubsection: {
    borderTopWidth: 1,
    borderTopColor: "#30263F",
    paddingTop: 24,
    marginTop: 5,
    marginBottom: 20,
  },
  consultationSubEyebrow: {
    color: "#81778F",
    fontSize: 7.5,
    letterSpacing: 1.8,
    marginBottom: 4,
  },
  subTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  subTitleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#594A2E",
    backgroundColor: "#21192B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  consultationSubTitle: {
    color: "#F4E8C4",
    fontSize: 23,
    fontFamily: "serif",
  },
  messageShell: {
    minHeight: 145,
    backgroundColor: "#1C152A",
    borderWidth: 1,
    borderColor: "#362C48",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 14,
    paddingRight: 10,
    paddingTop: 13,
    marginBottom: 17,
  },
  messageIcon: {
    marginTop: 2,
    marginRight: 9,
  },
  consultationMessage: {
    flex: 1,
    minHeight: 118,
    color: "#F4E8C4",
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
  },
  consultationHint: {
    color: "#655B70",
    fontSize: 8.5,
    lineHeight: 13,
    marginTop: -9,
    marginBottom: 20,
  },
  consentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
    paddingRight: 4,
  },

  consentCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#594A2E",
    backgroundColor: "#1C152A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
    marginTop: 1,
  },

  consentCheckboxChecked: {
    backgroundColor: "#D8B75C",
    borderColor: "#D8B75C",
  },

  consentText: {
    flex: 1,
    color: "#8F859B",
    fontSize: 10,
    lineHeight: 16,
  },
  consultationSubmitEyebrow: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 2.1,
    marginTop: 5,
    marginBottom: 8,
  },
  consultationSubmitTitle: {
    color: "#F4E8C4",
    fontSize: 25,
    lineHeight: 32,
    fontFamily: "serif",
  },
  consultationSubmitText: {
    color: "#8F859B",
    fontSize: 11.5,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 19,
  },
  consultationButton: {
    minHeight: 57,
    backgroundColor: "#D8B75C",
    borderRadius: 11,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  consultationPressed: { opacity: 0.82 },
  consultationDisabled: { opacity: 0.6 },
  consultationButtonText: {
    color: "#120D1F",
    fontSize: 9.5,
    letterSpacing: 1.1,
    fontWeight: "700",
    includeFontPadding: false,
  },
  consultationButtonArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#B99942",
    alignItems: "center",
    justifyContent: "center",
  },
  consultationArrow: {
    color: "#120D1F",
    fontSize: 20,
    includeFontPadding: false,
    transform: [{ translateY: -1 }],
  },
  consultationDirect: {
    borderTopWidth: 1,
    borderTopColor: "#30263F",
    marginTop: 28,
    paddingTop: 24,
  },
  consultationDirectEyebrow: {
    color: "#D8B75C",
    fontSize: 7.5,
    letterSpacing: 2,
    marginBottom: 8,
  },
  consultationDirectTitle: {
    color: "#F4E8C4",
    fontSize: 24,
    fontFamily: "serif",
    marginBottom: 16,
  },
  consultationContactCard: {
    minHeight: 68,
    backgroundColor: "#1C152A",
    borderWidth: 1,
    borderColor: "#594A2E",
    borderRadius: 13,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.985 }],
  },
  contactIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#241D2B",
    borderWidth: 1,
    borderColor: "#594A2E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  contactCardText: {
    flex: 1,
  },
  consultationContactLabel: {
    color: "#D8B75C",
    fontSize: 7.5,
    letterSpacing: 1.6,
    marginBottom: 5,
  },
  consultationContactValue: { color: "#E5D8B5", fontSize: 13 },
  consultationWhatsappCard: {
    minHeight: 68,
    backgroundColor: "#18241C",
    borderWidth: 1,
    borderColor: "#405E47",
    borderRadius: 13,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  whatsappPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.985 }],
  },
  whatsappIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#203125",
    borderWidth: 1,
    borderColor: "#405E47",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  consultationWhatsappLabel: {
    color: "#8BCB91",
    fontSize: 7.5,
    letterSpacing: 1.6,
    marginBottom: 5,
  },
  consultationWhatsappValue: { color: "#C8D8CA", fontSize: 13 },

  consultationContactArrow: {
    color: "#D8B75C",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },

  consultationWhatsappArrow: {
    color: "#8BCB91",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },

  consultationPrivacy: {
    marginTop: 20,
    backgroundColor: "#181222",
    borderWidth: 1,
    borderColor: "#2C2439",
    borderRadius: 12,
    padding: 13,
  },
  consultationPrivacyTitle: {
    color: "#8C8195",
    fontSize: 7,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  consultationPrivacyText: { color: "#62596C", fontSize: 8.5, lineHeight: 13 },
});
