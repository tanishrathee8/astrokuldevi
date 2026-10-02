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
import { SafeAreaView } from "react-native-safe-area-context";

export default function GuidanceScreen() {
  const screenOpacity = useRef(new Animated.Value(0)).current;

  const topAnim = useRef(new Animated.Value(0)).current;
  const topTranslate = useRef(new Animated.Value(12)).current;

  const brandAnim = useRef(new Animated.Value(0)).current;
  const brandTranslate = useRef(new Animated.Value(12)).current;

  const cosmosAnim = useRef(new Animated.Value(0)).current;
  const cosmosScale = useRef(new Animated.Value(0.82)).current;
  const cosmosRotate = useRef(new Animated.Value(0)).current;

  const heroAnim = useRef(new Animated.Value(0)).current;
  const heroTranslate = useRef(new Animated.Value(20)).current;

  const articleAnim = useRef(new Animated.Value(0)).current;
  const articleTranslate = useRef(new Animated.Value(18)).current;

  const quoteAnim = useRef(new Animated.Value(0)).current;
  const quoteTranslate = useRef(new Animated.Value(15)).current;

  const questionsAnim = useRef(new Animated.Value(0)).current;
  const questionsTranslate = useRef(new Animated.Value(18)).current;

  const reflectionAnim = useRef(new Animated.Value(0)).current;
  const reflectionTranslate = useRef(new Animated.Value(16)).current;

  const ctaAnim = useRef(new Animated.Value(0)).current;
  const ctaTranslate = useRef(new Animated.Value(18)).current;

  const footerAnim = useRef(new Animated.Value(0)).current;
  const footerTranslate = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(screenOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),

      Animated.timing(topAnim, {
        toValue: 1,
        duration: 420,
        delay: 50,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(topTranslate, {
        toValue: 0,
        duration: 420,
        delay: 50,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(brandAnim, {
        toValue: 1,
        duration: 450,
        delay: 130,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(brandTranslate, {
        toValue: 0,
        duration: 450,
        delay: 130,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(cosmosAnim, {
        toValue: 1,
        duration: 650,
        delay: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(cosmosScale, {
        toValue: 1,
        duration: 700,
        delay: 220,
        easing: Easing.out(Easing.back(1.08)),
        useNativeDriver: true,
      }),

      Animated.timing(heroAnim, {
        toValue: 1,
        duration: 520,
        delay: 350,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(heroTranslate, {
        toValue: 0,
        duration: 520,
        delay: 350,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(articleAnim, {
        toValue: 1,
        duration: 520,
        delay: 520,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(articleTranslate, {
        toValue: 0,
        duration: 520,
        delay: 520,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(quoteAnim, {
        toValue: 1,
        duration: 500,
        delay: 700,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(quoteTranslate, {
        toValue: 0,
        duration: 500,
        delay: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(questionsAnim, {
        toValue: 1,
        duration: 520,
        delay: 850,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(questionsTranslate, {
        toValue: 0,
        duration: 520,
        delay: 850,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(reflectionAnim, {
        toValue: 1,
        duration: 500,
        delay: 990,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(reflectionTranslate, {
        toValue: 0,
        duration: 500,
        delay: 990,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(ctaAnim, {
        toValue: 1,
        duration: 520,
        delay: 1120,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(ctaTranslate, {
        toValue: 0,
        duration: 520,
        delay: 1120,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(footerAnim, {
        toValue: 1,
        duration: 450,
        delay: 1270,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(footerTranslate, {
        toValue: 0,
        duration: 450,
        delay: 1270,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(cosmosRotate, {
        toValue: 1,
        duration: 18000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    screenOpacity,
    topAnim,
    topTranslate,
    brandAnim,
    brandTranslate,
    cosmosAnim,
    cosmosScale,
    cosmosRotate,
    heroAnim,
    heroTranslate,
    articleAnim,
    articleTranslate,
    quoteAnim,
    quoteTranslate,
    questionsAnim,
    questionsTranslate,
    reflectionAnim,
    reflectionTranslate,
    ctaAnim,
    ctaTranslate,
    footerAnim,
    footerTranslate,
  ]);

  const symbolRotation = cosmosRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.animatedScreen,
          {
            opacity: screenOpacity,
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* TOP BAR */}

          <Animated.View
            style={{
              opacity: topAnim,
              transform: [{ translateY: topTranslate }],
            }}
          >
            <View style={styles.topBar}>
              <Pressable
                onPress={() => router.replace("/")}
                style={({ pressed }) => [
                  styles.backButton,
                  pressed && styles.backPressed,
                ]}
              >
                <Text style={styles.backArrow}>‹</Text>
                <Text style={styles.backText}>BACK</Text>
              </Pressable>

              <Text style={styles.pageNumber}>02 / 02</Text>
            </View>

            <View style={styles.divider} />
          </Animated.View>

          {/* BRAND */}

          <Animated.View
            style={{
              opacity: brandAnim,
              transform: [{ translateY: brandTranslate }],
            }}
          >
            <View style={styles.brandBlock}>
              <Text style={styles.brand}>ASTROKULDEVI</Text>

              <View style={styles.brandLine}>
                <View style={styles.smallLine} />
                <Text style={styles.byline}>BY M.K. SHARMA</Text>
                <View style={styles.smallLine} />
              </View>
            </View>
          </Animated.View>

          {/* DECORATIVE AREA */}

          <Animated.View
            style={[
              styles.cosmos,
              {
                opacity: cosmosAnim,
                transform: [{ scale: cosmosScale }],
              },
            ]}
          >
            <Text style={styles.starOne}>✧</Text>
            <Text style={styles.starTwo}>✦</Text>
            <Text style={styles.starThree}>·</Text>

            <Animated.View
              style={[
                styles.guidanceSymbol,
                {
                  transform: [{ rotate: symbolRotation }],
                },
              ]}
            >
              <View style={styles.symbolRing}>
                <Text style={styles.symbol}>✧</Text>
              </View>
            </Animated.View>
          </Animated.View>

          {/* HERO */}

          <Animated.View
            style={{
              opacity: heroAnim,
              transform: [{ translateY: heroTranslate }],
            }}
          >
            <View style={styles.hero}>
              <Text style={styles.eyebrow}>02 · YOUR GUIDANCE</Text>

              <Text style={styles.title}>
                Sometimes the
                {"\n"}
                <Text style={styles.titleAccent}>question comes first.</Text>
              </Text>

              <View style={styles.goldLine} />

              <Text style={styles.intro}>
                You don't always need an immediate answer. Sometimes you simply
                need a space where your thoughts can become clearer.
              </Text>
            </View>
          </Animated.View>

          {/* ARTICLE */}

          <Animated.View
            style={{
              opacity: articleAnim,
              transform: [{ translateY: articleTranslate }],
            }}
          >
            <View style={styles.article}>
              <Text style={styles.articleLabel}>THE QUESTIONS WE CARRY</Text>

              <Text style={styles.articleTitle}>
                Some things are easier to understand when spoken.
              </Text>

              <Text style={styles.paragraph}>
                There are questions we carry quietly for weeks, months,
                sometimes even years. Questions about relationships, work,
                family, choices, change, direction, or the feeling that
                something in life is asking for our attention.
              </Text>

              <Text style={styles.paragraph}>
                Often, we already know more than we think we do. What we lack is
                the distance to see our situation clearly. When everything is
                happening at once, even a simple decision can feel complicated.
              </Text>

              {/* PULL QUOTE */}

              <Animated.View
                style={{
                  opacity: quoteAnim,
                  transform: [{ translateY: quoteTranslate }],
                }}
              >
                <View style={styles.pullQuote}>
                  <Text style={styles.quoteMark}>“</Text>

                  <Text style={styles.quote}>
                    Clarity does not always arrive as an answer. Sometimes it
                    begins with being heard.
                  </Text>

                  <View style={styles.quoteLine} />
                </View>
              </Animated.View>

              <Text style={styles.articleLabel}>A SPACE FOR PERSPECTIVE</Text>

              <Text style={styles.paragraph}>
                A consultation is not about being told what you must do. It is
                about creating a thoughtful space around the question you are
                already carrying.
              </Text>

              <Text style={styles.paragraph}>
                Through astrology, we can explore patterns, tendencies, timing
                and the different influences surrounding a particular period of
                your life. The purpose is not to remove your choices, but to
                help you look at them with greater awareness.
              </Text>

              <Text style={styles.paragraph}>
                You may arrive with one clear question. You may arrive with
                several. Or perhaps you cannot quite put the question into words
                yet. That is okay. Sometimes the conversation itself helps
                reveal what you were really trying to understand.
              </Text>

              <View style={styles.sectionBreak}>
                <View style={styles.breakLine} />
                <Text style={styles.breakSymbol}>✦</Text>
                <View style={styles.breakLine} />
              </View>

              <Text style={styles.articleLabel}>WHAT CAN YOU BRING?</Text>

              <Text style={styles.articleTitle}>
                Bring what matters to you.
              </Text>

              <Text style={styles.paragraph}>
                Perhaps you are thinking about a career change and wondering
                whether the timing feels right. Perhaps a relationship has left
                you uncertain, or you are standing between two different paths.
              </Text>

              <Text style={styles.paragraph}>
                You might be going through a period of personal change and
                simply want another perspective on what you are experiencing.
              </Text>

              <Text style={styles.paragraph}>
                There is no perfect question to ask. Your concern does not need
                to sound profound or complicated. If it matters to you, it is
                worth exploring.
              </Text>
            </View>
          </Animated.View>

          {/* QUESTIONS CARD */}

          <Animated.View
            style={{
              opacity: questionsAnim,
              transform: [{ translateY: questionsTranslate }],
            }}
          >
            <View style={styles.questionCard}>
              <Text style={styles.questionLabel}>YOU CAN BEGIN WITH</Text>

              <View style={styles.questionItem}>
                <View style={styles.questionDot} />
                <Text style={styles.questionText}>
                  “What should I understand about this period?”
                </Text>
              </View>

              <View style={styles.questionItem}>
                <View style={styles.questionDot} />
                <Text style={styles.questionText}>
                  “Why does this situation feel so uncertain?”
                </Text>
              </View>

              <View style={styles.questionItem}>
                <View style={styles.questionDot} />
                <Text style={styles.questionText}>
                  “What should I be paying attention to?”
                </Text>
              </View>

              <View style={styles.questionItem}>
                <View style={styles.questionDot} />
                <Text style={styles.questionText}>
                  “What direction should I explore?”
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* REFLECTION */}

          <Animated.View
            style={{
              opacity: reflectionAnim,
              transform: [{ translateY: reflectionTranslate }],
            }}
          >
            <View style={styles.reflection}>
              <Text style={styles.reflectionMark}>✧</Text>

              <Text style={styles.reflectionText}>
                You don't need to arrive with all the answers. Just arrive with
                what is on your mind.
              </Text>

              <View style={styles.reflectionLine} />

              <Text style={styles.reflectionCaption}>ASTROKULDEVI</Text>
            </View>
          </Animated.View>

          {/* CTA */}

          <Animated.View
            style={{
              opacity: ctaAnim,
              transform: [{ translateY: ctaTranslate }],
            }}
          >
            <View style={styles.cta}>
              <Text style={styles.ctaEyebrow}>YOUR QUESTIONS ARE WELCOME</Text>

              <Text style={styles.ctaTitle}>
                Start the
                {"\n"}
                <Text style={styles.ctaAccent}>conversation.</Text>
              </Text>

              <Text style={styles.ctaText}>
                Share what has been on your mind and take the first step toward
                a clearer perspective.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => router.push("/consultation")}
              >
                <Text style={styles.buttonText}>BEGIN YOUR CONSULTATION</Text>

                <View style={styles.buttonArrowBox}>
                  <View style={styles.buttonArrowLine} />
                  <View style={styles.buttonArrowHeadTop} />
                  <View style={styles.buttonArrowHeadBottom} />
                </View>
              </Pressable>
            </View>
          </Animated.View>

          {/* FOOTER */}

          <Animated.View
            style={{
              opacity: footerAnim,
              transform: [{ translateY: footerTranslate }],
            }}
          >
            <View style={styles.footer}>
              <View style={styles.footerRule} />

              <View style={styles.footerBrandRow}>
                <View style={styles.footerLine} />

                <Text style={styles.footerBrand}>ASTROKULDEVI</Text>

                <View style={styles.footerLine} />
              </View>

              <Text style={styles.footerByline}>BY M.K. SHARMA</Text>

              <Text style={styles.footerTagline}>
                CLARITY • PERSPECTIVE • GUIDANCE
              </Text>

              <Text style={styles.footerCopyright}>© ASTROKULDEVI</Text>
            </View>
          </Animated.View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120D1F",
  },

  animatedScreen: {
    flex: 1,
    backgroundColor: "#120D1F",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 50,
  },

  /* TOP */

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },

  backPressed: {
    opacity: 0.65,
    transform: [{ translateX: -2 }],
  },

  backArrow: {
    color: "#D8B75C",
    fontSize: 28,
    lineHeight: 28,
    marginRight: 7,
    transform: [{ translateY: -1 }],
  },
  backText: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: "600",
  },

  pageNumber: {
    color: "#62586D",
    fontSize: 9,
    letterSpacing: 1.5,
  },

  divider: {
    height: 1,
    backgroundColor: "#30263F",
    marginTop: 13,
  },

  /* BRAND */

  brandBlock: {
    alignItems: "center",
    marginTop: 21,
  },

  brand: {
    color: "#D8B75C",
    fontSize: 16,
    letterSpacing: 4.5,
    fontWeight: "600",
    fontFamily: "serif",
  },

  brandLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  smallLine: {
    width: 18,
    height: 1,
    backgroundColor: "#665738",
    marginHorizontal: 8,
  },

  byline: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2.2,
    fontFamily: "serif",
  },

  /* DECORATIVE */

  cosmos: {
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  guidanceSymbol: {
    width: 92,
    height: 92,
    borderWidth: 1,
    borderColor: "#30263F",
    borderRadius: 46,
    alignItems: "center",
    justifyContent: "center",
  },

  symbolRing: {
    width: 54,
    height: 54,
    borderWidth: 1,
    borderColor: "#5D4E35",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },

  symbol: {
    color: "#D8B75C",
    fontSize: 18,
  },

  starOne: {
    position: "absolute",
    left: 37,
    top: 30,
    color: "#8D7C50",
    fontSize: 12,
  },

  starTwo: {
    position: "absolute",
    right: 38,
    top: 38,
    color: "#D8B75C",
    fontSize: 14,
  },

  starThree: {
    position: "absolute",
    left: 69,
    bottom: 18,
    color: "#6E6379",
    fontSize: 18,
  },

  /* HERO */

  hero: {
    paddingBottom: 43,
  },

  eyebrow: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2.7,
    marginBottom: 17,
  },

  title: {
    color: "#F4E8C4",
    fontSize: 39,
    lineHeight: 48,
    fontWeight: "400",
    fontFamily: "serif",
  },

  titleAccent: {
    color: "#D8B75C",
    fontStyle: "italic",
  },

  goldLine: {
    width: 48,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 23,
  },

  intro: {
    color: "#AAA0B7",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 19,
  },

  /* ARTICLE */

  article: {
    borderTopWidth: 1,
    borderTopColor: "#30263F",
    paddingTop: 32,
  },

  articleLabel: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 2.1,
    marginBottom: 13,
  },

  articleTitle: {
    color: "#F4E8C4",
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "400",
    fontFamily: "serif",
    marginBottom: 17,
  },

  paragraph: {
    color: "#AAA0B7",
    fontSize: 15,
    lineHeight: 27,
    marginBottom: 22,
  },

  /* QUOTE */

  pullQuote: {
    marginVertical: 16,
    paddingVertical: 28,
    paddingHorizontal: 12,
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#2D253A",
  },

  quoteMark: {
    color: "#D8B75C",
    fontSize: 40,
    lineHeight: 30,
    fontFamily: "serif",
  },

  quote: {
    color: "#D8CDAF",
    fontSize: 19,
    lineHeight: 29,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "serif",
    marginTop: 5,
  },

  quoteLine: {
    width: 30,
    height: 1,
    backgroundColor: "#665738",
    marginTop: 19,
  },

  /* BREAK */

  sectionBreak: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  breakLine: {
    width: 55,
    height: 1,
    backgroundColor: "#30263F",
  },

  breakSymbol: {
    color: "#D8B75C",
    fontSize: 13,
    marginHorizontal: 13,
  },

  /* QUESTIONS */

  questionCard: {
    backgroundColor: "#1A1328",
    borderWidth: 1,
    borderColor: "#342A45",
    borderRadius: 15,
    padding: 22,
    marginTop: 8,
  },

  questionLabel: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 16,
  },

  questionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  questionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D8B75C",
    marginTop: 7,
    marginRight: 12,
  },

  questionText: {
    flex: 1,
    color: "#BDB1C0",
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },

  /* REFLECTION */

  reflection: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 40,
  },

  reflectionMark: {
    color: "#D8B75C",
    fontSize: 20,
  },

  reflectionText: {
    color: "#D8CDAF",
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "serif",
    marginTop: 10,
  },

  reflectionLine: {
    width: 30,
    height: 1,
    backgroundColor: "#665738",
    marginTop: 19,
  },

  reflectionCaption: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2.4,
    marginTop: 11,
  },

  /* CTA */

  cta: {
    backgroundColor: "#1D162B",
    borderWidth: 1,
    borderColor: "#342A45",
    borderRadius: 16,
    padding: 23,
  },

  ctaEyebrow: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 2.3,
    marginBottom: 14,
  },

  ctaTitle: {
    color: "#F4E8C4",
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "serif",
  },

  ctaAccent: {
    color: "#D8B75C",
    fontStyle: "italic",
  },

  ctaText: {
    color: "#8F859B",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 13,
    marginBottom: 22,
  },

  button: {
    minHeight: 58,
    backgroundColor: "#D8B75C",
    borderRadius: 11,
    paddingLeft: 17,
    paddingRight: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.985 }],
  },

  buttonText: {
    color: "#120D1F",
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: "700",
    includeFontPadding: false,
  },

  /* DRAWN ARROW */

  buttonArrowBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#B99942",
    position: "relative",
  },

  buttonArrowLine: {
    position: "absolute",
    width: 17,
    height: 2,
    backgroundColor: "#120D1F",
    left: 11,
    top: 19,
    borderRadius: 1,
  },

  buttonArrowHeadTop: {
    position: "absolute",
    width: 9,
    height: 2,
    backgroundColor: "#120D1F",
    right: 10,
    top: 16,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },

  buttonArrowHeadBottom: {
    position: "absolute",
    width: 9,
    height: 2,
    backgroundColor: "#120D1F",
    right: 10,
    top: 22,
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },

  /* FOOTER */

  footer: {
    alignItems: "center",
    paddingTop: 42,
  },

  footerRule: {
    width: "100%",
    height: 1,
    backgroundColor: "#30263F",
    marginBottom: 25,
  },

  footerBrandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  footerLine: {
    width: 22,
    height: 1,
    backgroundColor: "#665738",
    marginHorizontal: 11,
  },

  footerBrand: {
    color: "#D8B75C",
    fontSize: 11,
    letterSpacing: 3.5,
    fontFamily: "serif",
  },

  footerByline: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2.2,
    marginTop: 7,
  },

  footerTagline: {
    color: "#51495D",
    fontSize: 7,
    letterSpacing: 1.7,
    marginTop: 17,
  },

  footerCopyright: {
    color: "#403848",
    fontSize: 7,
    letterSpacing: 1.1,
    marginTop: 15,
  },
});
