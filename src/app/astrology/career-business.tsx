import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CareerBusinessScreen() {
  const screenOpacity = useRef(new Animated.Value(0)).current;
  const screenTranslateY = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    const entrance = Animated.parallel([
      Animated.timing(screenOpacity, {
        toValue: 1,
        duration: 650,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(screenTranslateY, {
        toValue: 0,
        duration: 650,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);

    entrance.start();

    return () => entrance.stop();
  }, [screenOpacity, screenTranslateY]);

  return (
    <Animated.View
      style={[
        styles.screen,
        {
          opacity: screenOpacity,
          transform: [{ translateY: screenTranslateY }],
        },
      ]}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Career & Business</Text>
            <Text style={styles.headerSubtitle}>ASTROKULDEVI</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>CAREER & PROFESSIONAL LIFE</Text>
          <Text style={styles.title}>Career & Business</Text>
          <Text style={styles.subtitle}>
            Traditional astrological guidance for career direction, professional
            questions and business-related matters
          </Text>
          <View style={styles.goldLine} />
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career and Business Guidance</Text>
          <Text style={styles.bodyText}>
            Career and business are important areas of life where people may
            seek clarity and perspective. Traditional astrology can provide a
            framework for discussing professional interests, opportunities and
            questions about direction.
          </Text>
          <Text style={styles.bodyText}>
            Through a personal consultation, relevant birth-chart factors can be
            considered in the context of the individual's circumstances and the
            specific questions they wish to discuss.
          </Text>
          <Text style={styles.bodyText}>
            The purpose is to provide a structured traditional astrological
            perspective rather than a one-size-fits-all interpretation.
          </Text>
        </View>

        {/* Personal Analysis */}
        <View style={styles.infoCard}>
          <View style={styles.cardIcon}>
            <Text style={styles.cardIconText}>✦</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Personalised Discussion</Text>
            <Text style={styles.cardText}>
              Your individual birth details and the questions relevant to your
              career or business can be considered during a consultation.
            </Text>
          </View>
        </View>

        {/* Career Areas */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>CAREER</Text>
          <Text style={styles.sectionTitle}>Questions people may discuss</Text>
          <Text style={styles.bodyText}>
            Career-related consultations may focus on different professional
            situations and personal questions.
          </Text>

          <View style={styles.topicList}>
            {[
              {
                number: "01",
                title: "Career Direction",
                description:
                  "Discussing professional interests, direction and possible areas of focus.",
              },
              {
                number: "02",
                title: "Career Changes",
                description:
                  "Traditional astrological perspectives on questions surrounding a career transition or change.",
              },
              {
                number: "03",
                title: "Professional Growth",
                description:
                  "Exploring professional goals and questions about future direction.",
              },
              {
                number: "04",
                title: "Work-related Concerns",
                description:
                  "Discussing specific situations or concerns connected with professional life.",
              },
            ].map((item) => (
              <View key={item.number} style={styles.topicRow}>
                <View style={styles.numberCircle}>
                  <Text style={styles.numberText}>{item.number}</Text>
                </View>
                <View style={styles.topicContent}>
                  <Text style={styles.topicTitle}>{item.title}</Text>
                  <Text style={styles.topicText}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Business */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>BUSINESS</Text>
          <Text style={styles.sectionTitle}>Business-related questions</Text>
          <Text style={styles.bodyText}>
            Business owners and professionals may also seek traditional
            astrological guidance when discussing important business-related
            questions.
          </Text>

          <View style={styles.businessGrid}>
            {[
              {
                title: "Business Direction",
                description:
                  "Questions about business direction and development.",
              },
              {
                title: "New Ventures",
                description:
                  "Traditional perspectives around starting something new.",
              },
              {
                title: "Partnerships",
                description:
                  "Questions involving professional or business partnerships.",
              },
              {
                title: "Important Decisions",
                description:
                  "Discussing significant professional or business choices.",
              },
            ].map((item) => (
              <View key={item.title} style={styles.businessCard}>
                <Text style={styles.businessSymbol}>◆</Text>
                <Text style={styles.businessTitle}>{item.title}</Text>
                <Text style={styles.businessText}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Approach */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>TRADITIONAL APPROACH</Text>
          <Text style={styles.sectionTitle}>Your question comes first</Text>
          <Text style={styles.bodyText}>
            Every consultation can be centred around the individual's actual
            circumstances and concerns. Relevant astrological factors are then
            interpreted within the traditional framework.
          </Text>
          <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>
              A note on traditional astrology
            </Text>
            <Text style={styles.noteText}>
              Astrology is presented as a traditional framework for reflection
              and guidance. It does not scientifically establish future career
              or business outcomes.
            </Text>
          </View>
        </View>

        {/* CTA */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaEyebrow}>PERSONAL GUIDANCE</Text>
          <Text style={styles.ctaTitle}>
            Have a career or business question?
          </Text>
          <Text style={styles.ctaText}>
            Request a personal consultation with M.K. Sharma to discuss your
            professional questions.
          </Text>
          <Pressable
            onPress={() => router.push("/consultation")}
            style={({ pressed }) => [
              styles.ctaButton,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
          >
            <Text style={styles.ctaButtonText}>Request a Consultation</Text>
            <Text style={styles.ctaArrow}>→</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>ASTROKULDEVI</Text>
          <Text style={styles.footerByline}>BY M.K. SHARMA</Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#120D1F",
  },
  container: {
    flex: 1,
    backgroundColor: "#120D1F",
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    height: 82,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(212, 175, 55, 0.12)",
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.3)",
    backgroundColor: "rgba(255,255,255,0.035)",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: "#D8B45A",
    fontSize: 34,
    lineHeight: 36,
    marginTop: -3,
  },
  headerCenter: {
    alignItems: "center",
  },
  headerTitle: {
    color: "#F5E9C8",
    fontSize: 17,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: "#B79A54",
    fontSize: 8,
    letterSpacing: 2.2,
    marginTop: 3,
  },
  headerSpacer: {
    width: 44,
  },
  hero: {
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 25,
  },
  eyebrow: {
    color: "#B79A54",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.1,
    marginBottom: 8,
  },
  title: {
    color: "#F5E9C8",
    fontSize: 39,
    fontWeight: "800",
    letterSpacing: -0.7,
  },
  subtitle: {
    color: "#BEB5CC",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 9,
    maxWidth: 345,
  },
  goldLine: {
    width: 54,
    height: 2,
    backgroundColor: "#B79A54",
    marginTop: 19,
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 27,
  },
  sectionEyebrow: {
    color: "#B79A54",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.2,
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#F1E7CC",
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "700",
    marginBottom: 13,
  },
  bodyText: {
    color: "#BEB5CC",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 13,
  },
  infoCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#1B142A",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.16)",
    flexDirection: "row",
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(212, 175, 55, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardIconText: {
    color: "#D8B45A",
    fontSize: 17,
    fontWeight: "800",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: "#E8DFC7",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },
  cardText: {
    color: "#9F96AC",
    fontSize: 13,
    lineHeight: 20,
  },
  topicList: {
    marginTop: 4,
  },
  topicRow: {
    flexDirection: "row",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  numberCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(212, 175, 55, 0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  numberText: {
    color: "#D8B45A",
    fontSize: 10,
    fontWeight: "800",
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  topicText: {
    color: "#9F96AC",
    fontSize: 13,
    lineHeight: 19,
  },
  businessGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },
  businessCard: {
    width: "48%",
    minHeight: 132,
    marginRight: "2%",
    marginBottom: 10,
    padding: 15,
    borderRadius: 16,
    backgroundColor: "#191328",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.13)",
  },
  businessSymbol: {
    color: "#B79A54",
    fontSize: 11,
    marginBottom: 10,
  },
  businessTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
  },
  businessText: {
    color: "#9F96AC",
    fontSize: 12,
    lineHeight: 18,
  },
  noteCard: {
    marginTop: 8,
    padding: 17,
    borderRadius: 16,
    backgroundColor: "rgba(212, 175, 55, 0.055)",
    borderLeftWidth: 2,
    borderLeftColor: "#B79A54",
  },
  noteTitle: {
    color: "#D8B45A",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  noteText: {
    color: "#AAA0B9",
    fontSize: 13,
    lineHeight: 20,
  },
  ctaCard: {
    marginHorizontal: 20,
    marginTop: 42,
    padding: 23,
    borderRadius: 22,
    backgroundColor: "#1D1428",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.28)",
  },
  ctaEyebrow: {
    color: "#B79A54",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2.1,
    marginBottom: 9,
  },
  ctaTitle: {
    color: "#F5E9C8",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
  },
  ctaText: {
    color: "#AAA0B9",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 19,
  },
  ctaButton: {
    minHeight: 54,
    paddingHorizontal: 18,
    borderRadius: 27,
    backgroundColor: "#B79A54",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaButtonText: {
    color: "#171126",
    fontSize: 14,
    fontWeight: "800",
  },
  ctaArrow: {
    color: "#171126",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  footer: {
    alignItems: "center",
    paddingTop: 38,
  },
  footerBrand: {
    color: "#D8B45A",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2.5,
  },
  footerByline: {
    color: "#82778F",
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 4,
  },
});
