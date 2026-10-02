import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HoroscopeScreen() {
  return (
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
        >
          <Text style={styles.backIcon}>‹</Text>
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Horoscope</Text>
          <Text style={styles.headerSubtitle}>ASTROKULDEVI</Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>ASTROLOGY</Text>

        <Text style={styles.title}>Horoscope</Text>

        <Text style={styles.subtitle}>
          Traditional astrological guidance for understanding planetary
          influences and life themes
        </Text>

        <View style={styles.goldLine} />
      </View>

      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What is a Horoscope?</Text>

        <Text style={styles.bodyText}>
          A horoscope is an astrological interpretation based on the positions
          of celestial bodies and their relationship with the zodiac signs at a
          particular time.
        </Text>

        <Text style={styles.bodyText}>
          In traditional astrology, horoscopes are used to discuss different
          areas of life by considering planetary positions, zodiac signs and
          other astrological factors.
        </Text>

        <Text style={styles.bodyText}>
          A horoscope can provide a framework for reflection on current
          circumstances, questions and areas of interest in a person's life.
        </Text>
      </View>

      {/* Birth Chart vs Horoscope */}
      <View style={styles.infoCard}>
        <View style={styles.cardIcon}>
          <Text style={styles.cardIconText}>✦</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Personalised Interpretation</Text>

          <Text style={styles.cardText}>
            A personalised horoscope can consider an individual's birth details
            and relevant astrological factors rather than relying only on a
            general zodiac sign.
          </Text>
        </View>
      </View>

      {/* What is considered */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>ASTROLOGICAL FACTORS</Text>

        <Text style={styles.sectionTitle}>
          What can be considered in a horoscope?
        </Text>

        <Text style={styles.bodyText}>
          Traditional horoscope interpretation may consider several elements of
          an individual's astrological chart.
        </Text>

        <View style={styles.detailsList}>
          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>01</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Zodiac Signs</Text>
              <Text style={styles.detailText}>
                The signs associated with the relevant planetary positions.
              </Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>02</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Planetary Positions</Text>
              <Text style={styles.detailText}>
                The positions of planets and their traditional astrological
                interpretations.
              </Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>03</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Houses</Text>
              <Text style={styles.detailText}>
                The houses of a birth chart associated with different areas of
                life.
              </Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>04</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Individual Questions</Text>
              <Text style={styles.detailText}>
                The specific concern or area of life that a person wishes to
                discuss.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Areas */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>AREAS OF GUIDANCE</Text>

        <Text style={styles.sectionTitle}>
          What do people discuss through astrology?
        </Text>

        <Text style={styles.bodyText}>
          People may seek traditional astrological guidance on a variety of
          personal and professional matters.
        </Text>

        <View style={styles.topicGrid}>
          <View style={styles.topicCard}>
            <Text style={styles.topicSymbol}>◆</Text>
            <Text style={styles.topicTitle}>Career</Text>
            <Text style={styles.topicText}>
              Career direction and professional questions.
            </Text>
          </View>

          <View style={styles.topicCard}>
            <Text style={styles.topicSymbol}>◆</Text>
            <Text style={styles.topicTitle}>Relationships</Text>
            <Text style={styles.topicText}>
              Personal relationships and emotional matters.
            </Text>
          </View>

          <View style={styles.topicCard}>
            <Text style={styles.topicSymbol}>◆</Text>
            <Text style={styles.topicTitle}>Marriage</Text>
            <Text style={styles.topicText}>
              Questions relating to marriage and compatibility.
            </Text>
          </View>

          <View style={styles.topicCard}>
            <Text style={styles.topicSymbol}>◆</Text>
            <Text style={styles.topicTitle}>Business</Text>
            <Text style={styles.topicText}>
              Business-related questions and decisions.
            </Text>
          </View>
        </View>
      </View>

      {/* Traditional approach */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>TRADITIONAL APPROACH</Text>

        <Text style={styles.sectionTitle}>
          Guidance based on your individual question
        </Text>

        <Text style={styles.bodyText}>
          Rather than treating a horoscope as a one-size-fits-all answer,
          personal consultation allows the discussion to focus on the specific
          circumstances and questions of the individual.
        </Text>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>A note on traditional astrology</Text>

          <Text style={styles.noteText}>
            Astrology is presented here as a traditional framework for
            reflection and guidance. It does not claim to scientifically predict
            outcomes.
          </Text>
        </View>
      </View>

      {/* Consultation CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaEyebrow}>PERSONAL GUIDANCE</Text>

        <Text style={styles.ctaTitle}>
          Looking for a personalised horoscope?
        </Text>

        <Text style={styles.ctaText}>
          Request a consultation with M.K. Sharma to discuss your questions
          personally.
        </Text>

        <Pressable
          onPress={() => router.push("/consultation")}
          style={({ pressed }) => [styles.ctaButton, pressed && styles.pressed]}
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
  );
}

const styles = StyleSheet.create({
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
    fontSize: 20,
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
    letterSpacing: 2.4,
    marginBottom: 8,
  },

  title: {
    color: "#F5E9C8",
    fontSize: 42,
    fontWeight: "800",
    letterSpacing: -0.8,
  },

  subtitle: {
    color: "#BEB5CC",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 9,
    maxWidth: 340,
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
    fontSize: 18,
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

  detailsList: {
    marginTop: 5,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
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

  detailContent: {
    flex: 1,
  },

  detailTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
  },

  detailText: {
    color: "#9F96AC",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 2,
  },

  topicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },

  topicCard: {
    width: "48%",
    minHeight: 125,
    marginRight: "2%",
    marginBottom: 10,
    padding: 15,
    borderRadius: 16,
    backgroundColor: "#191328",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.13)",
  },

  topicSymbol: {
    color: "#B79A54",
    fontSize: 11,
    marginBottom: 10,
  },

  topicTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
  },

  topicText: {
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
