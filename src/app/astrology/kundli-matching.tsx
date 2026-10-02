import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function KundliMatchingScreen() {
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
          <Text style={styles.headerTitle}>Kundli Matching</Text>
          <Text style={styles.headerSubtitle}>ASTROKULDEVI</Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>RELATIONSHIPS & MARRIAGE</Text>

        <Text style={styles.title}>Kundli Matching</Text>

        <Text style={styles.subtitle}>
          A traditional astrological approach to understanding compatibility
          between two birth charts
        </Text>

        <View style={styles.goldLine} />
      </View>

      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What is Kundli Matching?</Text>

        <Text style={styles.bodyText}>
          Kundli Matching, also known as Kundali Milan, is a traditional
          astrological practice used to compare the birth charts of two people
          before marriage.
        </Text>

        <Text style={styles.bodyText}>
          In traditional Indian astrology, the birth charts of both individuals
          are studied to discuss different aspects of compatibility and married
          life.
        </Text>

        <Text style={styles.bodyText}>
          The process provides a structured framework for discussing
          compatibility according to traditional astrological principles.
        </Text>
      </View>

      {/* Birth Details */}
      <View style={styles.infoCard}>
        <View style={styles.cardIcon}>
          <Text style={styles.cardIconText}>02</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Two Birth Charts</Text>

          <Text style={styles.cardText}>
            Kundli Matching traditionally considers the birth details of both
            individuals to prepare and compare their respective charts.
          </Text>
        </View>
      </View>

      {/* Information Required */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>BIRTH DETAILS</Text>

        <Text style={styles.sectionTitle}>What information is considered?</Text>

        <Text style={styles.bodyText}>
          Accurate birth information for both individuals is traditionally used
          when preparing the charts for comparison.
        </Text>

        <View style={styles.detailsList}>
          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>01</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Date of Birth</Text>
              <Text style={styles.detailText}>
                The date of birth of both individuals.
              </Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>02</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Time of Birth</Text>
              <Text style={styles.detailText}>
                The birth time used for calculating the respective charts.
              </Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>03</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>Place of Birth</Text>
              <Text style={styles.detailText}>
                The birth location of both individuals.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Traditional Matching */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>TRADITIONAL ASTROLOGY</Text>

        <Text style={styles.sectionTitle}>What can be discussed?</Text>

        <Text style={styles.bodyText}>
          Traditional Kundli Matching may consider different astrological
          factors when discussing the compatibility of two individuals.
        </Text>

        <View style={styles.topicList}>
          <View style={styles.topicRow}>
            <View style={styles.topicMark}>
              <Text style={styles.topicSymbol}>✦</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Compatibility</Text>
              <Text style={styles.topicText}>
                Traditional astrological perspectives on compatibility between
                the two charts.
              </Text>
            </View>
          </View>

          <View style={styles.topicRow}>
            <View style={styles.topicMark}>
              <Text style={styles.topicSymbol}>✦</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Planetary Factors</Text>
              <Text style={styles.topicText}>
                Relevant planetary placements and their traditional
                interpretations.
              </Text>
            </View>
          </View>

          <View style={styles.topicRow}>
            <View style={styles.topicMark}>
              <Text style={styles.topicSymbol}>✦</Text>
            </View>

            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>Marriage-related Questions</Text>
              <Text style={styles.topicText}>
                Specific questions and concerns that the couple or families wish
                to discuss.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Consultation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Looking beyond a basic score</Text>

        <Text style={styles.bodyText}>
          A traditional consultation can consider the broader birth charts and
          the individual circumstances rather than relying only on a single
          compatibility score.
        </Text>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>A note on traditional astrology</Text>

          <Text style={styles.noteText}>
            Kundli Matching is presented as a traditional astrological framework
            for reflection and discussion. It does not scientifically establish
            the outcome of a marriage or relationship.
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaEyebrow}>PERSONAL GUIDANCE</Text>

        <Text style={styles.ctaTitle}>Want to discuss Kundli Matching?</Text>

        <Text style={styles.ctaText}>
          Request a personal consultation with M.K. Sharma to discuss the
          relevant questions and astrological factors.
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
    fontSize: 18,
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
    letterSpacing: 2.2,
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
    fontSize: 13,
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

  topicList: {
    marginTop: 4,
  },

  topicRow: {
    flexDirection: "row",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },

  topicMark: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(212, 175, 55, 0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  topicSymbol: {
    color: "#D8B45A",
    fontSize: 14,
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
