import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function LoveMarriageScreen() {
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
          <Text style={styles.headerTitle}>Love & Marriage</Text>
          <Text style={styles.headerSubtitle}>ASTROKULDEVI</Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>RELATIONSHIPS & MARRIAGE</Text>

        <Text style={styles.title}>Love & Marriage</Text>

        <Text style={styles.subtitle}>
          Traditional astrological guidance for relationships, marriage and
          questions of compatibility
        </Text>

        <View style={styles.goldLine} />
      </View>

      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Love and Marriage Guidance</Text>

        <Text style={styles.bodyText}>
          Relationships and marriage are deeply personal parts of life, and
          people may turn to traditional astrology when they have questions
          about compatibility, relationships or their future together.
        </Text>

        <Text style={styles.bodyText}>
          A personal astrological consultation can consider the relevant birth
          charts and traditional astrological factors in the context of the
          individual's circumstances.
        </Text>

        <Text style={styles.bodyText}>
          The discussion can focus on the specific questions and concerns that
          matter to the individual or couple.
        </Text>
      </View>

      {/* Personal Consultation */}
      <View style={styles.infoCard}>
        <View style={styles.cardIcon}>
          <Text style={styles.cardIconText}>♡</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Personalised Relationship Guidance
          </Text>

          <Text style={styles.cardText}>
            Each consultation can be centred around the individual's questions,
            circumstances and the traditional astrological factors relevant to
            their situation.
          </Text>
        </View>
      </View>

      {/* Areas */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>RELATIONSHIPS</Text>

        <Text style={styles.sectionTitle}>Questions people may discuss</Text>

        <Text style={styles.bodyText}>
          Love and marriage consultations may cover a range of personal
          questions and relationship concerns.
        </Text>

        <View style={styles.topicList}>
          <View style={styles.topicRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>01</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Relationship Questions</Text>
              <Text style={styles.topicText}>
                Discussing questions and concerns surrounding a personal
                relationship.
              </Text>
            </View>
          </View>

          <View style={styles.topicRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>02</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Marriage</Text>
              <Text style={styles.topicText}>
                Traditional astrological perspectives on marriage-related
                questions.
              </Text>
            </View>
          </View>

          <View style={styles.topicRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>03</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Compatibility</Text>
              <Text style={styles.topicText}>
                Discussing compatibility through traditional astrological
                principles and relevant birth charts.
              </Text>
            </View>
          </View>

          <View style={styles.topicRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>04</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Future Questions</Text>
              <Text style={styles.topicText}>
                Discussing personal questions about the direction of a
                relationship or marriage.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Before Marriage */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>BEFORE MARRIAGE</Text>

        <Text style={styles.sectionTitle}>Understanding compatibility</Text>

        <Text style={styles.bodyText}>
          Before marriage, some people choose to compare birth charts as part of
          a traditional compatibility discussion. This may include consideration
          of relevant planetary placements and other factors used in traditional
          Kundli Matching.
        </Text>

        <View style={styles.highlightCard}>
          <Text style={styles.highlightTitle}>A broader perspective</Text>

          <Text style={styles.highlightText}>
            A personal consultation can look beyond a single compatibility
            number and discuss the broader astrological context.
          </Text>
        </View>
      </View>

      {/* After Marriage */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>MARRIED LIFE</Text>

        <Text style={styles.sectionTitle}>Questions within marriage</Text>

        <Text style={styles.bodyText}>
          Couples may also seek traditional astrological guidance when
          discussing relationship concerns, important changes or questions about
          their married life.
        </Text>

        <Text style={styles.bodyText}>
          The consultation provides an opportunity to discuss those questions
          personally and consider them within the traditional astrological
          framework.
        </Text>
      </View>

      {/* Privacy */}
      <View style={styles.privacyCard}>
        <View style={styles.privacyIcon}>
          <Text style={styles.privacySymbol}>◆</Text>
        </View>

        <View style={styles.privacyContent}>
          <Text style={styles.privacyTitle}>Private Conversations</Text>

          <Text style={styles.privacyText}>
            Personal relationship matters deserve discretion. Consultation
            details are treated with care and privacy.
          </Text>
        </View>
      </View>

      {/* Note */}
      <View style={styles.section}>
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>A note on traditional astrology</Text>

          <Text style={styles.noteText}>
            Astrology is presented as a traditional framework for reflection and
            guidance. It does not scientifically establish the outcome of a
            relationship or marriage.
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaEyebrow}>PERSONAL GUIDANCE</Text>

        <Text style={styles.ctaTitle}>Have a love or marriage question?</Text>

        <Text style={styles.ctaText}>
          Request a personal consultation with M.K. Sharma to discuss your
          relationship or marriage-related questions.
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
    fontSize: 21,
    fontWeight: "700",
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

  highlightCard: {
    marginTop: 7,
    padding: 17,
    borderRadius: 17,
    backgroundColor: "#191328",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.18)",
  },

  highlightTitle: {
    color: "#D8B45A",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },

  highlightText: {
    color: "#AAA0B9",
    fontSize: 13,
    lineHeight: 20,
  },

  privacyCard: {
    marginHorizontal: 20,
    marginTop: 30,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "rgba(212, 175, 55, 0.055)",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.16)",
    flexDirection: "row",
  },

  privacyIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(212, 175, 55, 0.09)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  privacySymbol: {
    color: "#D8B45A",
    fontSize: 12,
  },

  privacyContent: {
    flex: 1,
  },

  privacyTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },

  privacyText: {
    color: "#9F96AC",
    fontSize: 13,
    lineHeight: 19,
  },

  noteCard: {
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
