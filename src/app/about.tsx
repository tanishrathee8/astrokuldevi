import { router } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function AboutScreen() {
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

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>About</Text>
          <Text style={styles.headerSubtitle}>ASTROKULDEVI</Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {/* Profile Image */}
      <View style={styles.heroImageContainer}>
        <Image
          source={require("../../assets/astrokuldevi/mk-sharma.png")}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <View style={styles.imageOverlay}>
          <Text style={styles.imageLabel}>BY M.K. SHARMA</Text>
        </View>
      </View>

      {/* Profile Introduction */}
      <View style={styles.introSection}>
        <Text style={styles.eyebrow}>ABOUT THE ASTROLOGER</Text>

        <Text style={styles.name}>M.K. Sharma</Text>

        <Text style={styles.professionalTitle}>
          Scientific and Technical{"\n"}
          <Text style={styles.highlight}>“Analysis & Diagnosis”</Text> in
          Astrology
        </Text>

        <View style={styles.goldLine} />

        <Text style={styles.description}>
          M.K. Sharma brings over 15 years of experience in astrology, providing
          personal guidance based on traditional astrological practices and
          detailed analysis of individual birth charts.
        </Text>

        <Text style={styles.description}>
          His consultations focus on understanding the individual questions and
          circumstances of each person, offering an organised and traditional
          approach to areas such as career, relationships, marriage, business
          and other important life decisions.
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>PEOPLE{"\n"}POSITIVELY HELPED</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statLabel}>YEARS OF{"\n"}EXPERIENCE</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12+</Text>
          <Text style={styles.statLabel}>COUNTRIES{"\n"}REACHED</Text>
        </View>
      </View>

      {/* Professional Approach */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>THE APPROACH</Text>

        <Text style={styles.sectionTitle}>
          A Personal Approach to Astrology
        </Text>

        <Text style={styles.bodyText}>
          Every consultation begins with the individual's question. Birth
          details and the relevant astrological factors are considered to
          provide a structured interpretation based on traditional astrology.
        </Text>

        <Text style={styles.bodyText}>
          The aim is to give people a clearer perspective on the matters they
          wish to discuss while keeping each consultation personal, respectful
          and private.
        </Text>
      </View>

      {/* Recognition */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>RECOGNITION</Text>

        <Text style={styles.sectionTitle}>Awards & Achievements</Text>

        <View style={styles.recognitionCard}>
          <View style={styles.recognitionMark}>
            <Text style={styles.recognitionSymbol}>✦</Text>
          </View>

          <View style={styles.recognitionContent}>
            <Text style={styles.recognitionTitle}>
              Chief Guest at Astrology Programs
            </Text>
            <Text style={styles.recognitionText}>
              Invited as Chief Guest at various astrology programs and
              gatherings.
            </Text>
          </View>
        </View>

        <View style={styles.recognitionCard}>
          <View style={styles.recognitionMark}>
            <Text style={styles.recognitionSymbol}>✦</Text>
          </View>

          <View style={styles.recognitionContent}>
            <Text style={styles.recognitionTitle}>
              Jyotishi Punj Global Foundation
            </Text>
            <Text style={styles.recognitionText}>
              Honoured by Jyotishi Punj Global Foundation, Kurukshetra.
            </Text>
          </View>
        </View>

        <View style={styles.recognitionCard}>
          <View style={styles.recognitionMark}>
            <Text style={styles.recognitionSymbol}>✦</Text>
          </View>

          <View style={styles.recognitionContent}>
            <Text style={styles.recognitionTitle}>
              Ek Divasiya Jyotishi Sammelan
            </Text>
            <Text style={styles.recognitionText}>
              Associated with the Ek Divasiya Jyotishi Sammelan, Delhi.
            </Text>
          </View>
        </View>

        <View style={styles.recognitionCard}>
          <View style={styles.recognitionMark}>
            <Text style={styles.recognitionSymbol}>✦</Text>
          </View>

          <View style={styles.recognitionContent}>
            <Text style={styles.recognitionTitle}>
              Vaishnavi Jyotish Anusandhan
            </Text>
            <Text style={styles.recognitionText}>
              Recognition and association with Vaishnavi Jyotish Anusandhan.
            </Text>
          </View>
        </View>
      </View>

      {/* Global Reach */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>GLOBAL REACH</Text>

        <Text style={styles.sectionTitle}>Guidance Across Borders</Text>

        <Text style={styles.bodyText}>
          M.K. Sharma has provided guidance to people across more than 12
          countries, connecting with individuals from different backgrounds and
          locations.
        </Text>

        <View style={styles.countryRow}>
          <View style={styles.countryPill}>
            <Text style={styles.countryText}>Australia</Text>
          </View>

          <View style={styles.countryPill}>
            <Text style={styles.countryText}>USA</Text>
          </View>

          <View style={styles.countryPill}>
            <Text style={styles.countryText}>China</Text>
          </View>

          <View style={styles.countryPill}>
            <Text style={styles.countryText}>Canada</Text>
          </View>

          <View style={styles.countryPill}>
            <Text style={styles.countryText}>12+ Countries</Text>
          </View>
        </View>
      </View>

      {/* Consultation CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaEyebrow}>PERSONAL GUIDANCE</Text>

        <Text style={styles.ctaTitle}>
          Have a question you would like to discuss?
        </Text>

        <Text style={styles.ctaText}>
          Request a personal consultation with M.K. Sharma and discuss your
          questions directly.
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
        <Text style={styles.footerText}>
          Traditional astrology • Personal guidance • Private consultations
        </Text>
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

  headerTitleContainer: {
    alignItems: "center",
  },

  headerTitle: {
    color: "#F5E9C8",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
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

  heroImageContainer: {
    marginHorizontal: 20,
    marginTop: 22,
    height: 330,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.25)",
    backgroundColor: "#191328",
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: "rgba(18, 13, 31, 0.78)",
    borderTopWidth: 1,
    borderTopColor: "rgba(212, 175, 55, 0.2)",
  },

  imageLabel: {
    color: "#D8B45A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },

  introSection: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  eyebrow: {
    color: "#B79A54",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 9,
  },

  name: {
    color: "#F5E9C8",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  professionalTitle: {
    color: "#D8CDAF",
    fontSize: 17,
    lineHeight: 25,
    marginTop: 9,
  },

  highlight: {
    color: "#D8B45A",
    fontWeight: "700",
  },

  goldLine: {
    width: 54,
    height: 2,
    backgroundColor: "#B79A54",
    marginVertical: 19,
  },

  description: {
    color: "#BEB5CC",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 13,
  },

  statsCard: {
    marginHorizontal: 20,
    marginTop: 28,
    paddingVertical: 22,
    paddingHorizontal: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B142A",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.18)",
  },

  statItem: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    color: "#D8B45A",
    fontSize: 25,
    fontWeight: "800",
  },

  statLabel: {
    color: "#AAA0B9",
    fontSize: 8,
    fontWeight: "700",
    lineHeight: 13,
    letterSpacing: 0.7,
    textAlign: "center",
    marginTop: 5,
  },

  statDivider: {
    width: 1,
    height: 45,
    backgroundColor: "rgba(212, 175, 55, 0.16)",
  },

  section: {
    marginTop: 38,
    paddingHorizontal: 24,
  },

  sectionEyebrow: {
    color: "#B79A54",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.3,
    marginBottom: 8,
  },

  sectionTitle: {
    color: "#F1E7CC",
    fontSize: 25,
    lineHeight: 31,
    fontWeight: "700",
    marginBottom: 13,
  },

  bodyText: {
    color: "#BEB5CC",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 13,
  },

  recognitionCard: {
    flexDirection: "row",
    padding: 16,
    marginTop: 11,
    borderRadius: 16,
    backgroundColor: "#191328",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.13)",
  },

  recognitionMark: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(212, 175, 55, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  recognitionSymbol: {
    color: "#D8B45A",
    fontSize: 17,
  },

  recognitionContent: {
    flex: 1,
  },

  recognitionTitle: {
    color: "#E8DFC7",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },

  recognitionText: {
    color: "#9F96AC",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 3,
  },

  countryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },

  countryPill: {
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(212, 175, 55, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.18)",
  },

  countryText: {
    color: "#CBB88A",
    fontSize: 12,
    fontWeight: "600",
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
    letterSpacing: 0.3,
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
    paddingHorizontal: 24,
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

  footerText: {
    color: "#6F667A",
    fontSize: 10,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 16,
  },
});
