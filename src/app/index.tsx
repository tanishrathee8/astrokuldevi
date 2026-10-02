import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [, setMenuOpen] = useState(false);
  const helpedCount = useRef(new Animated.Value(0)).current;
  const experienceCount = useRef(new Animated.Value(0)).current;
  const countriesCount = useRef(new Animated.Value(0)).current;
  const statsY = useRef(0);
  const statsAnimated = useRef(false);

  const [helpedDisplay, setHelpedDisplay] = useState("0");
  const [experienceDisplay, setExperienceDisplay] = useState("0");
  const [countriesDisplay, setCountriesDisplay] = useState("0");
  // Main page animations
  const heroAnim = useRef(new Animated.Value(0)).current;
  const heroTranslate = useRef(new Animated.Value(18)).current;

  const sectionAnim = useRef(new Animated.Value(0)).current;
  const sectionTranslate = useRef(new Animated.Value(16)).current;

  const cardOneAnim = useRef(new Animated.Value(0)).current;
  const cardOneTranslate = useRef(new Animated.Value(18)).current;

  const cardTwoAnim = useRef(new Animated.Value(0)).current;
  const cardTwoTranslate = useRef(new Animated.Value(18)).current;

  const quoteAnim = useRef(new Animated.Value(0)).current;
  const quoteTranslate = useRef(new Animated.Value(16)).current;

  const ctaAnim = useRef(new Animated.Value(0)).current;
  const ctaTranslate = useRef(new Animated.Value(18)).current;

  const footerAnim = useRef(new Animated.Value(0)).current;
  const footerTranslate = useRef(new Animated.Value(12)).current;

  const starsAnim = useRef(new Animated.Value(0)).current;
  const starsScale = useRef(new Animated.Value(0.85)).current;

  // Menu animations
  const menuPanelAnim = useRef(new Animated.Value(0)).current;
  const menuOverlayAnim = useRef(new Animated.Value(0)).current;
  const cardOnePress = useRef(new Animated.Value(1)).current;
  const cardTwoPress = useRef(new Animated.Value(1)).current;
  const ctaPress = useRef(new Animated.Value(1)).current;
  const menuButtonPress = useRef(new Animated.Value(1)).current;
  const [menuMounted, setMenuMounted] = useState(false);

  // Main page entrance animations
  useEffect(() => {
    Animated.parallel([
      Animated.timing(starsAnim, {
        toValue: 1,
        duration: 650,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(starsScale, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.back(1.1)),
        useNativeDriver: true,
      }),
      Animated.timing(heroAnim, {
        toValue: 1,
        duration: 550,
        delay: 80,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(heroTranslate, {
        toValue: 0,
        duration: 550,
        delay: 80,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(sectionAnim, {
        toValue: 1,
        duration: 500,
        delay: 260,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(sectionTranslate, {
        toValue: 0,
        duration: 500,
        delay: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(cardOneAnim, {
        toValue: 1,
        duration: 500,
        delay: 380,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(cardOneTranslate, {
        toValue: 0,
        duration: 500,
        delay: 380,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(cardTwoAnim, {
        toValue: 1,
        duration: 500,
        delay: 490,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(cardTwoTranslate, {
        toValue: 0,
        duration: 500,
        delay: 490,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(quoteAnim, {
        toValue: 1,
        duration: 500,
        delay: 650,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(quoteTranslate, {
        toValue: 0,
        duration: 500,
        delay: 650,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(ctaAnim, {
        toValue: 1,
        duration: 500,
        delay: 780,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(ctaTranslate, {
        toValue: 0,
        duration: 500,
        delay: 780,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(footerAnim, {
        toValue: 1,
        duration: 450,
        delay: 900,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(footerTranslate, {
        toValue: 0,
        duration: 450,
        delay: 900,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    heroAnim,
    heroTranslate,
    sectionAnim,
    sectionTranslate,
    cardOneAnim,
    cardOneTranslate,
    cardTwoAnim,
    cardTwoTranslate,
    quoteAnim,
    quoteTranslate,
    ctaAnim,
    ctaTranslate,
    footerAnim,
    footerTranslate,
    starsAnim,
    starsScale,
  ]);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (
      !statsAnimated.current &&
      statsY.current > 0 &&
      scrollY + 500 >= statsY.current
    ) {
      statsAnimated.current = true;

      Animated.parallel([
        Animated.timing(helpedCount, {
          toValue: 10,
          duration: 1800,
          useNativeDriver: false,
          easing: Easing.out(Easing.cubic),
        }),

        Animated.timing(experienceCount, {
          toValue: 15,
          duration: 1400,
          useNativeDriver: false,
          easing: Easing.out(Easing.cubic),
        }),

        Animated.timing(countriesCount, {
          toValue: 12,
          duration: 1600,
          useNativeDriver: false,
          easing: Easing.out(Easing.cubic),
        }),
      ]).start();
    }
  };

  useEffect(() => {
    const helpedListener = helpedCount.addListener(({ value }) => {
      setHelpedDisplay(Math.round(value).toString());
    });

    const experienceListener = experienceCount.addListener(({ value }) => {
      setExperienceDisplay(Math.round(value).toString());
    });

    const countriesListener = countriesCount.addListener(({ value }) => {
      setCountriesDisplay(Math.round(value).toString());
    });

    return () => {
      helpedCount.removeListener(helpedListener);
      experienceCount.removeListener(experienceListener);
      countriesCount.removeListener(countriesListener);
    };
  }, []);

  const animatePress = (value: Animated.Value, toValue: number) => {
    Animated.spring(value, {
      toValue,
      friction: 7,
      tension: 180,
      useNativeDriver: true,
    }).start();
  };

  const openConsultation = () => {
    setMenuOpen(false);
    router.push("/consultation");
  };

  const openRhythm = () => {
    setMenuOpen(false);
    router.push("/rhythm");
  };

  const openGuidance = () => {
    setMenuOpen(false);
    router.push("/guidance");
  };

  const handleCall = () => {
    setMenuOpen(false);
    Linking.openURL("tel:+917015733876");
  };

  const handleWhatsApp = () => {
    setMenuOpen(false);

    Linking.openURL(
      "https://wa.me/917015733876?text=Hello%20AstroKuldevi%2C%20I%20would%20like%20a%20consultation.",
    );
  };
  const openYouTube = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log("Could not open YouTube:", error);
    }
  };

  const openInstagram = async () => {
    try {
      await Linking.openURL("https://www.instagram.com/astrom.ksharma/");
    } catch (error) {
      console.log("Could not open Instagram:", error);
    }
  };

  const openEmail = async () => {
    try {
      await Linking.openURL("mailto:astrokuldevi@gmail.com");
    } catch (error) {
      console.log("Could not open email:", error);
    }
  };
  const openMenu = () => {
    setMenuMounted(true);
    setMenuOpen(true);

    menuPanelAnim.setValue(0);
    menuOverlayAnim.setValue(0);

    Animated.parallel([
      Animated.timing(menuOverlayAnim, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(menuPanelAnim, {
        toValue: 1,
        duration: 360,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(menuOverlayAnim, {
        toValue: 0,
        duration: 180,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(menuPanelAnim, {
        toValue: 0,
        duration: 260,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        setMenuOpen(false);
        setMenuMounted(false);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animatedScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <Pressable
              style={styles.brandBlock}
              onPress={() => router.replace("/")}
            >
              <Text style={styles.brand}>ASTROKULDEVI</Text>

              <View style={styles.brandLine}>
                <View style={styles.brandLineLeft} />

                <Text style={styles.byline}>BY M.K. SHARMA</Text>

                <View style={styles.brandLineRight} />
              </View>
            </Pressable>

            <Animated.View style={{ transform: [{ scale: menuButtonPress }] }}>
              <Pressable
                style={styles.menuButton}
                onPressIn={() => animatePress(menuButtonPress, 0.92)}
                onPressOut={() => animatePress(menuButtonPress, 1)}
                onPress={openMenu}
              >
                <View style={styles.menuLine} />
                <View style={styles.menuLineShort} />
              </Pressable>
            </Animated.View>
          </View>

          <View style={styles.divider} />

          {/* DECORATIVE STARS */}

          <Animated.View
            style={[
              styles.stars,
              {
                opacity: starsAnim,
                transform: [{ scale: starsScale }],
              },
            ]}
          >
            <Text style={styles.starLarge}>✦</Text>
            <Text style={styles.starSmall}>✧</Text>
            <Text style={styles.starTiny}>·</Text>
          </Animated.View>

          {/* HERO */}

          <Animated.View
            style={{
              opacity: heroAnim,
              transform: [{ translateY: heroTranslate }],
            }}
          >
            <View style={styles.hero}>
              <Text style={styles.eyebrow}>A MOMENT FOR YOU</Text>

              <Text style={styles.heroTitle}>
                When the stars{"\n"}
                speak, <Text style={styles.heroAccent}>listen.</Text>
              </Text>

              <View style={styles.heroLine} />

              <Text style={styles.heroText}>
                There are moments when you need more than an answer. You need
                clarity, perspective, and a little guidance.
              </Text>
            </View>
          </Animated.View>

          {/* M.K. SHARMA */}

          <View style={styles.profileSection}>
            <View style={styles.profileImageFrame}>
              <Image
                source={require("../../assets/astrokuldevi/mk-sharma.png")}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.profileTextBlock}>
              <Text style={styles.profileEyebrow}>MEET YOUR ASTROLOGER</Text>

              <Text style={styles.profileName}>M.K. Sharma</Text>

              <Text style={styles.profileRole}>
                Scientific and Technical “Analysis & Diagnosis” in Astrology
              </Text>

              <View style={styles.profileLine} />

              <Text style={styles.profileDescription}>
                With 15+ years of experience, M.K. Sharma has positively helped
                10K+ people across 12+ countries through personalised
                astrological guidance and consultation.
              </Text>

              <Text style={styles.profileDescription}>
                Each consultation focuses on understanding your individual
                questions and providing a thoughtful perspective through
                traditional astrological practices.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.profilePrimaryButton,
                  pressed && styles.profilePressed,
                ]}
                onPress={openConsultation}
              >
                <Text style={styles.profilePrimaryButtonText}>
                  REQUEST A CONSULTATION
                </Text>

                <Text style={styles.profileButtonArrow}>→</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.profileSecondaryButton,
                  pressed && styles.profilePressed,
                ]}
                onPress={() => router.push("/about")}
              >
                <Text style={styles.profileSecondaryButtonText}>
                  VIEW FULL PROFILE
                </Text>

                <Text style={styles.profileSecondaryArrow}>→</Text>
              </Pressable>
            </View>
          </View>
          {/* STATS */}

          <View
            style={styles.statsSection}
            onLayout={(event) => {
              statsY.current = event.nativeEvent.layout.y;
            }}
          >
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{helpedDisplay}K+</Text>
              <Text style={styles.statLabel}>
                PEOPLE POSITIVELY{"\n"}HELPED
              </Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{experienceDisplay}+</Text>
              <Text style={styles.statLabel}>YEARS OF{"\n"}EXPERIENCE</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{countriesDisplay}+</Text>
              <Text style={styles.statLabel}>COUNTRIES{"\n"}REACHED</Text>
            </View>
          </View>
          {/* ASTROLOGY SERVICES */}
          <View style={styles.servicesSection}>
            <Text style={styles.sectionEyebrow}>ASTROLOGY SERVICES</Text>

            <Text style={styles.sectionTitle}>
              Guidance for the Questions That Matter
            </Text>

            <Text style={styles.sectionDescription}>
              Explore personalised astrology consultations focused on different
              areas of life, with direct guidance from M.K. Sharma.
            </Text>

            <View style={styles.servicesGrid}>
              {[
                {
                  title: "Kundli",
                  description:
                    "Understand your birth chart, planetary placements, houses and important life themes.",
                  route: "/astrology/kundli",
                },
                {
                  title: "Horoscope",
                  description:
                    "Explore traditional horoscope-based guidance for your current questions and circumstances.",
                  route: "/astrology/horoscope",
                },
                {
                  title: "Kundli Matching",
                  description:
                    "Explore traditional compatibility analysis for marriage and relationships.",
                  route: "/astrology/kundli-matching",
                },
                {
                  title: "Career & Business",
                  description:
                    "Discuss career direction, professional decisions, business questions and opportunities.",
                  route: "/astrology/career-business",
                },
                {
                  title: "Love & Marriage",
                  description:
                    "Get traditional astrological guidance around relationships, love and marriage.",
                  route: "/astrology/love-marriage",
                },
              ].map((service) => (
                <Pressable
                  key={service.title}
                  style={({ pressed }) => [
                    styles.serviceCard,
                    pressed && styles.serviceCardPressed,
                  ]}
                  onPress={() => router.push(service.route as any)}
                >
                  <View style={styles.serviceCardTop}>
                    <Text style={styles.serviceCardTitle}>{service.title}</Text>
                    <Text style={styles.serviceCardArrow}>↗</Text>
                  </View>

                  <Text style={styles.serviceCardDescription}>
                    {service.description}
                  </Text>

                  <Text style={styles.serviceCardLink}>Explore Service</Text>
                </Pressable>
              ))}
            </View>
          </View>
          {/* WHY ASTROKULDEVI */}
          <View style={styles.whySection}>
            <Text style={styles.sectionEyebrow}>WHY ASTROKULDEVI</Text>

            <Text style={styles.sectionTitle}>
              Guidance That Begins With You
            </Text>

            <Text style={styles.sectionDescription}>
              A personal approach to traditional astrology, focused on your
              questions, circumstances and individual journey.
            </Text>

            <View style={styles.whyGrid}>
              <View style={styles.whyCard}>
                <Text style={styles.whyIcon}>✦</Text>
                <Text style={styles.whyTitle}>Personal Guidance</Text>
                <Text style={styles.whyDescription}>
                  Consultations focused on your individual questions and
                  concerns.
                </Text>
              </View>

              <View style={styles.whyCard}>
                <Text style={styles.whyIcon}>◈</Text>
                <Text style={styles.whyTitle}>Traditional Approach</Text>
                <Text style={styles.whyDescription}>
                  Astrology insights rooted in traditional practices and
                  interpretation.
                </Text>
              </View>

              <View style={styles.whyCard}>
                <Text style={styles.whyIcon}>◇</Text>
                <Text style={styles.whyTitle}>Private Conversations</Text>
                <Text style={styles.whyDescription}>
                  Your consultation details are treated with care and privacy.
                </Text>
              </View>

              <View style={styles.whyCard}>
                <Text style={styles.whyIcon}>↗</Text>
                <Text style={styles.whyTitle}>Direct Consultation</Text>
                <Text style={styles.whyDescription}>
                  Speak directly with M.K. Sharma about the questions that
                  matter to you.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.testimonialsSection}>
            <Text style={styles.sectionEyebrow}>CLIENT EXPERIENCES</Text>

            <Text style={styles.sectionTitle}>What People Say</Text>

            <Text style={styles.sectionDescription}>
              A few words shared by people who have experienced a personal
              consultation.
            </Text>

            <View style={styles.testimonialCard}>
              <View style={styles.testimonialAvatar}>
                <Text style={styles.testimonialAvatarText}>A</Text>
              </View>
              <Text style={styles.testimonialText}>
                Incredibly accurate reading — helped me understand my career
                path with amazing clarity!
              </Text>
              <View style={styles.testimonialLine} />
              <Text style={styles.testimonialName}>Anisha Dahiya</Text>
              <Text style={styles.testimonialLocation}>🇦🇺 Australia</Text>
            </View>

            <View style={styles.testimonialCard}>
              <View style={styles.testimonialAvatar}>
                <Text style={styles.testimonialAvatarText}>M</Text>
              </View>
              <Text style={styles.testimonialText}>
                Compassionate and insightful guidance. Felt truly understood
                after just one session.
              </Text>
              <View style={styles.testimonialLine} />
              <Text style={styles.testimonialName}>Max</Text>
              <Text style={styles.testimonialLocation}>🇺🇸 USA</Text>
            </View>

            <View style={styles.testimonialCard}>
              <View style={styles.testimonialAvatar}>
                <Text style={styles.testimonialAvatarText}>R</Text>
              </View>
              <Text style={styles.testimonialText}>
                Predictions were spot on! This astrologer's wisdom brought real
                peace to my mind.
              </Text>
              <View style={styles.testimonialLine} />
              <Text style={styles.testimonialName}>Riyanka</Text>
              <Text style={styles.testimonialLocation}>🇮🇳 Delhi</Text>
            </View>
          </View>
          {/* START HERE */}

          <Animated.View
            style={{
              opacity: sectionAnim,
              transform: [{ translateY: sectionTranslate }],
            }}
          >
            <View style={styles.sectionHeader}>
              <View style={styles.numberCircle}>
                <Text style={styles.number}>01</Text>
              </View>

              <View>
                <Text style={styles.sectionLabel}>BEGIN HERE</Text>

                <Text style={styles.sectionTitle}>Start Here</Text>
              </View>
            </View>

            <Text style={styles.sectionText}>
              Astrology is a language of patterns. Your consultation is a space
              to understand yours.
            </Text>
          </Animated.View>

          {/* RHYTHM */}

          <Animated.View
            style={{
              opacity: cardOneAnim,
              transform: [
                { translateY: cardOneTranslate },
                { scale: cardOnePress },
              ],
            }}
          >
            <Pressable
              style={styles.featureCard}
              onPressIn={() => animatePress(cardOnePress, 0.985)}
              onPressOut={() => animatePress(cardOnePress, 1)}
              onPress={openRhythm}
            >
              <View style={styles.cardAccent} />

              <View style={styles.cardContent}>
                <View style={styles.cardTop}>
                  <Text style={styles.cardNumber}>01</Text>

                  <Text style={styles.cardSymbol}>✦</Text>
                </View>

                <Text style={styles.cardTitle}>The Rhythm</Text>

                <Text style={styles.cardText}>
                  Every life moves through its own rhythm. Discover what this
                  season may be asking of you.
                </Text>

                <View style={styles.cardAction}>
                  <Text style={styles.cardArrow}>EXPLORE</Text>

                  <View style={styles.cardActionArrow}>
                    <View style={styles.cardArrowLine} />
                    <View style={styles.cardArrowHeadTop} />
                    <View style={styles.cardArrowHeadBottom} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Animated.View>

          {/* GUIDANCE */}

          <Animated.View
            style={{
              opacity: cardTwoAnim,
              transform: [
                { translateY: cardTwoTranslate },
                { scale: cardTwoPress },
              ],
            }}
          >
            <Pressable
              style={styles.featureCard}
              onPressIn={() => animatePress(cardTwoPress, 0.985)}
              onPressOut={() => animatePress(cardTwoPress, 1)}
              onPress={openGuidance}
            >
              <View style={styles.cardAccent} />

              <View style={styles.cardContent}>
                <View style={styles.cardTop}>
                  <Text style={styles.cardNumber}>02</Text>

                  <Text style={styles.cardSymbol}>✧</Text>
                </View>

                <Text style={styles.cardTitle}>Your Guidance</Text>

                <Text style={styles.cardText}>
                  Bring your questions, concerns, or simply the things that have
                  been on your mind.
                </Text>

                <View style={styles.cardAction}>
                  <Text style={styles.cardArrow}>DISCOVER</Text>

                  <View style={styles.cardActionArrow}>
                    <View style={styles.cardArrowLine} />
                    <View style={styles.cardArrowHeadTop} />
                    <View style={styles.cardArrowHeadBottom} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Animated.View>

          {/* QUOTE */}

          <Animated.View
            style={{
              opacity: quoteAnim,
              transform: [{ translateY: quoteTranslate }],
            }}
          >
            <View style={styles.quoteSection}>
              <Text style={styles.quoteMark}>“</Text>

              <Text style={styles.quote}>
                Sometimes clarity begins with simply asking the right question.
              </Text>

              <View style={styles.quoteLine} />

              <Text style={styles.quoteCaption}>ASTROKULDEVI</Text>
            </View>
          </Animated.View>
          {/* PODCAST */}

          <View style={styles.podcastSection}>
            <Text style={styles.sectionEyebrow}>FEATURED ON YOUTUBE</Text>

            <Text style={styles.sectionTitle}>
              Conversations,
              {"\n"}
              insights & guidance.
            </Text>

            <Text style={styles.sectionDescription}>
              Explore conversations featuring M.K. Sharma on astrology, life,
              relationships and the road ahead.
            </Text>
            {/* VIDEO 1 */}

            <Pressable
              style={({ pressed }) => [
                styles.podcastCard,
                pressed && styles.podcastCardPressed,
              ]}
              onPress={() => openYouTube("https://youtu.be/KOrhY7axELg")}
            >
              <View style={styles.podcastThumbnailWrapper}>
                <Image
                  source={{
                    uri: "https://img.youtube.com/vi/KOrhY7axELg/hqdefault.jpg",
                  }}
                  style={styles.podcastThumbnail}
                />

                <View style={styles.youtubeBadge}>
                  <Text style={styles.youtubeBadgeText}>▶</Text>
                  <Text style={styles.youtubeBadgeLabel}>YOUTUBE</Text>
                </View>

                <View style={styles.playButton}>
                  <Text style={styles.playButtonText}>▶</Text>
                </View>
              </View>

              <View style={styles.podcastCardContent}>
                <Text style={styles.podcastCardEyebrow}>
                  THRIVE TALK WITH PARUL
                </Text>

                <Text style={styles.podcastCardTitle}>
                  अगले 5 साल: विकास का दौर या बड़ी चुनौतियाँ?
                </Text>

                <View style={styles.podcastWatchRow}>
                  <Text style={styles.podcastWatchText}>WATCH ON YOUTUBE</Text>
                  <Text style={styles.podcastArrow}>↗</Text>
                </View>
              </View>
            </Pressable>

            {/* VIDEO 2 */}

            <Pressable
              style={({ pressed }) => [
                styles.podcastCard,
                pressed && styles.podcastCardPressed,
              ]}
              onPress={() => openYouTube("https://youtu.be/Bx8ubCOUmb8")}
            >
              <View style={styles.podcastThumbnailWrapper}>
                <Image
                  source={{
                    uri: "https://img.youtube.com/vi/Bx8ubCOUmb8/hqdefault.jpg",
                  }}
                  style={styles.podcastThumbnail}
                />

                <View style={styles.youtubeBadge}>
                  <Text style={styles.youtubeBadgeText}>▶</Text>
                  <Text style={styles.youtubeBadgeLabel}>YOUTUBE</Text>
                </View>

                <View style={styles.playButton}>
                  <Text style={styles.playButtonText}>▶</Text>
                </View>
              </View>

              <View style={styles.podcastCardContent}>
                <Text style={styles.podcastCardEyebrow}>KHAS HARYANA</Text>

                <Text style={styles.podcastCardTitle}>
                  राहुल गाँधी की शादी हो चुकी है ?
                </Text>

                <View style={styles.podcastWatchRow}>
                  <Text style={styles.podcastWatchText}>WATCH ON YOUTUBE</Text>
                  <Text style={styles.podcastArrow}>↗</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* CTA */}

          <Animated.View
            style={{
              opacity: ctaAnim,
              transform: [{ translateY: ctaTranslate }],
            }}
          >
            <View style={styles.ctaSection}>
              <Text style={styles.ctaSmall}>READY WHEN YOU ARE</Text>

              <Text style={styles.ctaTitle}>
                Begin your{"\n"}
                <Text style={styles.ctaAccent}>conversation.</Text>
              </Text>

              <Text style={styles.ctaText}>
                Take a moment. Share what's on your mind.
              </Text>

              <Animated.View
                style={{
                  transform: [{ scale: ctaPress }],
                }}
              >
                <Pressable
                  style={styles.button}
                  onPressIn={() => animatePress(ctaPress, 0.975)}
                  onPressOut={() => animatePress(ctaPress, 1)}
                  onPress={openConsultation}
                >
                  <Text style={styles.buttonText}>REQUEST A CONSULTATION</Text>

                  <View style={styles.buttonArrowBox}>
                    <View style={styles.arrowLine} />
                    <View style={styles.arrowHeadTop} />
                    <View style={styles.arrowHeadBottom} />
                  </View>
                </Pressable>
              </Animated.View>
            </View>
          </Animated.View>

          {/* FOOTER */}

          <View style={styles.footer}>
            <View style={styles.footerTopLine} />

            <View style={styles.footerBrandRow}>
              <View style={styles.footerSmallLine} />

              <Text style={styles.footerBrand}>ASTROKULDEVI</Text>

              <View style={styles.footerSmallLine} />
            </View>

            <Text style={styles.footerByline}>BY M.K. SHARMA</Text>

            <Text style={styles.footerTagline}>
              CLARITY • PERSPECTIVE • GUIDANCE
            </Text>

            <View style={styles.footerSocialRow}>
              <Pressable
                style={styles.footerSocialButton}
                onPress={() =>
                  openYouTube(
                    "https://youtube.com/@astrokuldevi?si=ebR66AIIyjO2Vx2-",
                  )
                }
              >
                <Text style={styles.footerSocialIcon}>▶</Text>
                <Text style={styles.footerSocialText}>YOUTUBE</Text>
              </Pressable>

              <Pressable
                style={styles.footerSocialButton}
                onPress={openInstagram}
              >
                <Text style={styles.footerSocialIcon}>◎</Text>
                <Text style={styles.footerSocialText}>INSTAGRAM</Text>
              </Pressable>

              <Pressable style={styles.footerSocialButton} onPress={openEmail}>
                <Text style={styles.footerSocialIcon}>✉</Text>
                <Text style={styles.footerSocialText}>EMAIL</Text>
              </Pressable>
            </View>

            <Text style={styles.footerEmail}>astrokuldevi@gmail.com</Text>

            <Pressable
              onPress={() => router.push("/privacy")}
              style={styles.footerPrivacyButton}
            >
              <Text style={styles.footerPrivacyText}>PRIVACY POLICY</Text>
            </Pressable>

            <Text style={styles.footerCopyright}>© 2026 ASTROKULDEVI</Text>
          </View>
        </ScrollView>

        {/* MENU */}

        <Modal
          visible={menuMounted}
          transparent
          animationType="none"
          onRequestClose={closeMenu}
        >
          <Animated.View
            style={[
              styles.menuOverlayWrapper,
              {
                opacity: menuOverlayAnim,
              },
            ]}
          >
            <Pressable style={styles.menuOverlay} onPress={closeMenu}>
              <Animated.View
                style={[
                  styles.menuPanel,
                  {
                    transform: [
                      {
                        translateX: menuPanelAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [380, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Pressable
                  style={styles.menuPanelInner}
                  onPress={(event) => event.stopPropagation()}
                >
                  <View style={styles.menuPanelHeader}>
                    <View>
                      <Text style={styles.menuPanelBrand}>ASTROKULDEVI</Text>

                      <Text style={styles.menuPanelByline}>BY M.K. SHARMA</Text>
                    </View>

                    <Pressable onPress={closeMenu} style={styles.closeButton}>
                      <Text style={styles.closeText}>×</Text>
                    </Pressable>
                  </View>

                  <View style={styles.menuDivider} />

                  {/* CONSULTATION */}

                  <Pressable style={styles.menuItem} onPress={openConsultation}>
                    <View>
                      <Text style={styles.menuItemLabel}>CONSULTATION</Text>

                      <Text style={styles.menuItemDescription}>
                        Share your questions
                      </Text>
                    </View>

                    <Text style={styles.menuItemArrow}>→</Text>
                  </Pressable>

                  {/* RHYTHM */}

                  <Pressable style={styles.menuItem} onPress={openRhythm}>
                    <View>
                      <Text style={styles.menuItemLabel}>THE RHYTHM</Text>

                      <Text style={styles.menuItemDescription}>
                        Explore life's seasons
                      </Text>
                    </View>

                    <Text style={styles.menuItemArrow}>→</Text>
                  </Pressable>

                  {/* GUIDANCE */}

                  <Pressable style={styles.menuItem} onPress={openGuidance}>
                    <View>
                      <Text style={styles.menuItemLabel}>YOUR GUIDANCE</Text>

                      <Text style={styles.menuItemDescription}>
                        Find a clearer perspective
                      </Text>
                    </View>

                    <Text style={styles.menuItemArrow}>→</Text>
                  </Pressable>

                  {/* CALL */}

                  <Pressable style={styles.menuItem} onPress={handleCall}>
                    <View>
                      <Text style={styles.menuItemLabel}>CALL</Text>

                      <Text style={styles.menuItemDescription}>
                        Speak with AstroKuldevi
                      </Text>
                    </View>

                    <Text style={styles.menuItemArrow}>↗</Text>
                  </Pressable>

                  {/* WHATSAPP */}

                  <Pressable style={styles.menuItem} onPress={handleWhatsApp}>
                    <View>
                      <Text style={styles.menuItemLabel}>WHATSAPP</Text>

                      <Text style={styles.menuItemDescription}>
                        Start a conversation
                      </Text>
                    </View>

                    <Text style={styles.menuItemArrow}>↗</Text>
                  </Pressable>

                  <View style={styles.menuFooter}>
                    <Text style={styles.menuFooterText}>
                      A SPACE FOR CLARITY
                    </Text>
                  </View>
                </Pressable>
              </Animated.View>
            </Pressable>
          </Animated.View>
        </Modal>
      </View>
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
    paddingTop: 18,
    paddingBottom: 30,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 58,
  },

  brandBlock: {
    flex: 1,
  },

  brand: {
    color: "#D8B75C",
    fontSize: 19,
    letterSpacing: 5.5,
    fontWeight: "600",
    fontFamily: "serif",
  },

  brandLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  brandLineLeft: {
    width: 18,
    height: 1,
    backgroundColor: "#665738",
    marginRight: 8,
  },

  brandLineRight: {
    width: 18,
    height: 1,
    backgroundColor: "#665738",
    marginLeft: 8,
  },

  byline: {
    color: "#A49A8B",
    fontSize: 9,
    letterSpacing: 2.5,
    fontFamily: "serif",
  },

  menuButton: {
    width: 38,
    height: 38,
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 7,
  },

  menuLine: {
    height: 1,
    backgroundColor: "#D8B75C",
    width: 29,
  },

  menuLineShort: {
    height: 1,
    backgroundColor: "#D8B75C",
    width: 19,
  },

  divider: {
    height: 1,
    backgroundColor: "#30263F",
    marginTop: 17,
  },

  /* STARS */

  stars: {
    height: 55,
    position: "relative",
  },

  starLarge: {
    position: "absolute",
    right: 55,
    top: 15,
    color: "#D8B75C",
    fontSize: 15,
  },

  starSmall: {
    position: "absolute",
    right: 15,
    top: 35,
    color: "#8D7C50",
    fontSize: 11,
  },

  starTiny: {
    position: "absolute",
    right: 88,
    top: 40,
    color: "#6E6379",
    fontSize: 18,
  },

  /* HERO */

  hero: {
    paddingTop: 10,
    paddingBottom: 52,
  },

  eyebrow: {
    color: "#D8B75C",
    fontSize: 10,
    letterSpacing: 3,
    marginBottom: 18,
  },

  heroTitle: {
    color: "#F4E8C4",
    fontSize: 43,
    lineHeight: 51,
    fontWeight: "400",
    fontFamily: "serif",
  },

  heroAccent: {
    color: "#D8B75C",
    fontStyle: "italic",
  },

  heroLine: {
    width: 55,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 23,
  },

  heroText: {
    color: "#AAA0B7",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 20,
    maxWidth: 335,
  },
  /* M.K. SHARMA PROFILE */

  profileSection: {
    marginTop: 12,
    marginBottom: 38,
  },

  profileImageFrame: {
    width: "100%",
    height: 330,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#1D162B",
    borderWidth: 1,
    borderColor: "#342A45",
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  profileTextBlock: {
    paddingTop: 24,
  },

  profileEyebrow: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2.4,
    marginBottom: 9,
  },

  profileName: {
    color: "#F4E8C4",
    fontSize: 31,
    fontWeight: "500",
    fontFamily: "serif",
  },

  profileRole: {
    color: "#C8BFAF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  profileLine: {
    width: 48,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 17,
    marginBottom: 17,
  },

  profileDescription: {
    color: "#AAA0B7",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },

  profilePrimaryButton: {
    minHeight: 54,
    backgroundColor: "#D8B75C",
    borderRadius: 11,
    marginTop: 10,
    paddingLeft: 17,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profilePrimaryButtonText: {
    color: "#120D1F",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  profileButtonArrow: {
    color: "#120D1F",
    fontSize: 20,
    fontWeight: "700",
  },

  profileSecondaryButton: {
    minHeight: 52,
    borderRadius: 11,
    marginTop: 10,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: "#665738",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileSecondaryButtonText: {
    color: "#D8B75C",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  profileSecondaryArrow: {
    color: "#D8B75C",
    fontSize: 19,
  },
  testimonialsSection: {
    marginTop: 4,
    marginBottom: 42,
  },
  testimonialAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#30253F",
    borderWidth: 1,
    borderColor: "#D8B75C",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  testimonialAvatarText: {
    color: "#D8B75C",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "serif",
  },
  testimonialCard: {
    backgroundColor: "#1A1328",
    borderWidth: 1,
    borderColor: "#30253F",
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
  },

  quoteMark: {
    color: "#D8B75C",
    fontSize: 34,
    lineHeight: 32,
    fontFamily: "serif",
    marginBottom: 8,
  },

  testimonialText: {
    color: "#E8E0D2",
    fontSize: 14,
    lineHeight: 22,
  },

  testimonialLine: {
    width: 34,
    height: 1,
    backgroundColor: "#D8B75C",
    marginTop: 18,
    marginBottom: 12,
  },

  testimonialName: {
    color: "#F5EEDC",
    fontSize: 14,
    fontWeight: "700",
  },

  testimonialLocation: {
    color: "#8F859C",
    fontSize: 11,
    marginTop: 3,
  },
  whySection: {
    marginTop: 4,
    marginBottom: 42,
  },

  whyGrid: {
    gap: 12,
  },

  whyCard: {
    backgroundColor: "#181225",
    borderWidth: 1,
    borderColor: "#30253F",
    borderRadius: 15,
    padding: 18,
  },

  whyIcon: {
    color: "#D8B75C",
    fontSize: 20,
    marginBottom: 12,
  },

  whyTitle: {
    color: "#F5EEDC",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "serif",
    marginBottom: 7,
  },

  whyDescription: {
    color: "#AAA0B7",
    fontSize: 13,
    lineHeight: 20,
  },
  servicesSection: {
    marginTop: 10,
    marginBottom: 42,
  },

  sectionEyebrow: {
    color: "#D8B75C",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 10,
  },

  sectionTitle: {
    color: "#F5EEDC",
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: "serif",
    marginBottom: 12,
  },

  sectionDescription: {
    color: "#AAA0B7",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 22,
  },

  servicesGrid: {
    gap: 14,
  },

  serviceCard: {
    backgroundColor: "#1A1328",
    borderWidth: 1,
    borderColor: "#30253F",
    borderRadius: 16,
    padding: 20,
  },

  serviceCardPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.985 }],
  },

  serviceCardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  serviceCardTitle: {
    color: "#F5EEDC",
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "serif",
  },

  serviceCardArrow: {
    color: "#D8B75C",
    fontSize: 22,
  },

  serviceCardDescription: {
    color: "#AAA0B7",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },

  serviceCardLink: {
    color: "#D8B75C",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  profilePressed: {
    opacity: 0.75,
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#665738",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  number: {
    color: "#D8B75C",
    fontSize: 10,
    letterSpacing: 1,
  },

  sectionLabel: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 3,
  },

  sectionText: {
    color: "#AAA0B7",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 18,
    marginBottom: 25,
  },

  /* CARDS */

  featureCard: {
    backgroundColor: "#1D162B",
    borderWidth: 1,
    borderColor: "#342A45",
    borderRadius: 15,
    marginBottom: 14,
    overflow: "hidden",
    flexDirection: "row",
  },

  cardAccent: {
    width: 3,
    backgroundColor: "#D8B75C",
  },

  cardContent: {
    flex: 1,
    padding: 21,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  cardNumber: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2,
  },

  cardSymbol: {
    color: "#D8B75C",
    fontSize: 18,
  },

  cardTitle: {
    color: "#F4E8C4",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "serif",
    marginBottom: 9,
  },

  cardText: {
    color: "#A9A0B5",
    fontSize: 14,
    lineHeight: 22,
  },

  cardAction: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  cardArrow: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 1.7,
    fontWeight: "600",
  },

  cardActionArrow: {
    width: 17,
    height: 14,
    marginLeft: 8,
    position: "relative",
  },

  cardArrowLine: {
    position: "absolute",
    width: 17,
    height: 2,
    backgroundColor: "#D8B75C",
    left: 0,
    top: 6,
    borderRadius: 1,
  },

  cardArrowHeadTop: {
    position: "absolute",
    width: 9,
    height: 2,
    backgroundColor: "#D8B75C",
    right: -1,
    top: 3,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },

  cardArrowHeadBottom: {
    position: "absolute",
    width: 9,
    height: 2,
    backgroundColor: "#D8B75C",
    right: -1,
    top: 9,
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },

  /* QUOTE */

  quoteSection: {
    paddingVertical: 48,
    paddingHorizontal: 8,
    alignItems: "center",
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
    marginTop: 20,
  },

  quoteCaption: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2.5,
    marginTop: 12,
  },

  /* CTA */

  ctaSection: {
    backgroundColor: "#1A1328",
    borderWidth: 1,
    borderColor: "#342A45",
    borderRadius: 16,
    padding: 23,
  },

  ctaSmall: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2.5,
    marginBottom: 14,
  },

  ctaTitle: {
    color: "#F4E8C4",
    fontSize: 33,
    lineHeight: 40,
    fontWeight: "400",
    fontFamily: "serif",
  },

  ctaAccent: {
    color: "#D8B75C",
    fontStyle: "italic",
  },

  ctaText: {
    color: "#8F859B",
    fontSize: 13,
    marginTop: 13,
    marginBottom: 23,
  },

  button: {
    backgroundColor: "#D8B75C",
    borderRadius: 11,
    minHeight: 58,
    paddingLeft: 17,
    paddingRight: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    color: "#120D1F",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.1,
    includeFontPadding: false,
  },

  buttonArrowBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#B99942",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  arrowLine: {
    position: "absolute",
    width: 17,
    height: 2,
    backgroundColor: "#120D1F",
    left: 11.5,
    top: 19,
    borderRadius: 1,
  },

  arrowHeadTop: {
    position: "absolute",
    width: 9,
    height: 2,
    backgroundColor: "#120D1F",
    right: 10,
    top: 16,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },

  arrowHeadBottom: {
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
    paddingTop: 40,
  },

  footerTopLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#30263F",
    marginBottom: 27,
  },

  footerBrandRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },

  footerSmallLine: {
    width: 25,
    height: 1,
    backgroundColor: "#665738",
    marginHorizontal: 12,
  },

  footerBrand: {
    color: "#D8B75C",
    fontSize: 13,
    letterSpacing: 4,
    fontWeight: "600",
    fontFamily: "serif",
  },

  footerByline: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2.5,
    marginTop: 8,
  },

  footerTagline: {
    color: "#5F566A",
    fontSize: 7,
    letterSpacing: 1.8,
    marginTop: 17,
  },
  footerPrivacyButton: {
    marginTop: 12,
    alignItems: "center",
  },

  footerPrivacyText: {
    color: "#D8B75C",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  footerCopyright: {
    color: "#443C4D",
    fontSize: 7,
    letterSpacing: 1.2,
    marginTop: 18,
  },

  /* MENU */

  menuOverlayWrapper: {
    flex: 1,
  },

  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(8, 5, 15, 0.72)",
    alignItems: "flex-end",
  },

  menuPanel: {
    width: "82%",
    maxWidth: 360,
    height: "100%",
    backgroundColor: "#171126",
    borderLeftWidth: 1,
    borderLeftColor: "#3A304D",
  },

  menuPanelInner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  menuPanelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuPanelBrand: {
    color: "#D8B75C",
    fontSize: 15,
    letterSpacing: 4,
    fontFamily: "serif",
  },

  menuPanelByline: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 5,
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#4A3C55",
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    color: "#D8B75C",
    fontSize: 23,
    lineHeight: 23,
    fontWeight: "300",
    textAlign: "center",
    includeFontPadding: false,
    marginTop: -1,
  },

  menuDivider: {
    height: 1,
    backgroundColor: "#30263F",
    marginTop: 28,
    marginBottom: 10,
  },

  menuItem: {
    minHeight: 75,
    borderBottomWidth: 1,
    borderBottomColor: "#292137",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuItemLabel: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: "600",
  },

  menuItemDescription: {
    color: "#8F859B",
    fontSize: 12,
    marginTop: 5,
  },

  menuItemArrow: {
    color: "#D8B75C",
    fontSize: 20,
  },

  menuFooter: {
    marginTop: 40,
    alignItems: "center",
  },

  menuFooterText: {
    color: "#51495D",
    fontSize: 7,
    letterSpacing: 2,
  },
  footerSocialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 10,
  },

  footerSocialButton: {
    minWidth: 82,
    borderWidth: 1,
    borderColor: "#30263F",
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  footerSocialIcon: {
    color: "#D8B75C",
    fontSize: 15,
    marginBottom: 5,
  },

  footerSocialText: {
    color: "#93899E",
    fontSize: 7,
    letterSpacing: 1.2,
    fontWeight: "600",
  },

  footerEmail: {
    color: "#81778F",
    fontSize: 10,
    letterSpacing: 0.5,
    marginTop: 15,
  },
  statsSection: {
    marginTop: 4,
    marginBottom: 38,
    paddingVertical: 24,
    paddingHorizontal: 8,
    backgroundColor: "#1A1328",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#30253F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  statItem: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    color: "#D8B75C",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "serif",
  },

  statLabel: {
    color: "#AAA0B7",
    fontSize: 8,
    lineHeight: 12,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 7,
  },

  statDivider: {
    width: 1,
    height: 42,
    backgroundColor: "#3A3048",
  },
  /* PODCAST */

  podcastSection: {
    marginTop: 48,
    marginBottom: 18,
  },

  podcastEyebrow: {
    color: "#D8B75C",
    fontSize: 9,
    letterSpacing: 2.5,
    fontWeight: "600",
    marginBottom: 13,
  },

  podcastTitle: {
    color: "#F1E9D8",
    fontSize: 28,
    lineHeight: 35,
    fontFamily: "serif",
    marginBottom: 13,
  },

  podcastAccent: {
    color: "#D8B75C",
  },

  podcastIntro: {
    color: "#93899E",
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 22,
  },

  podcastCard: {
    backgroundColor: "#191326",
    borderWidth: 1,
    borderColor: "#30263F",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 18,
  },

  podcastCardPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.985 }],
  },

  podcastThumbnailWrapper: {
    width: "100%",
    height: 190,
    position: "relative",
    backgroundColor: "#0D0917",
  },

  podcastThumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  youtubeBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.78)",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 3,
  },

  youtubeBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    marginRight: 5,
  },

  youtubeBadgeLabel: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  playButton: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 52,
    height: 52,
    marginLeft: -26,
    marginTop: -26,
    borderRadius: 26,
    backgroundColor: "rgba(18,13,31,0.88)",
    borderWidth: 1,
    borderColor: "#D8B75C",
    alignItems: "center",
    justifyContent: "center",
  },

  playButtonText: {
    color: "#D8B75C",
    fontSize: 18,
    marginLeft: 3,
  },

  podcastCardContent: {
    padding: 17,
    paddingBottom: 18,
  },

  podcastCardEyebrow: {
    color: "#81778F",
    fontSize: 8,
    letterSpacing: 1.8,
    marginBottom: 8,
  },

  podcastCardTitle: {
    color: "#F1E9D8",
    fontSize: 17,
    lineHeight: 24,
    fontFamily: "serif",
    marginBottom: 15,
  },

  podcastWatchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#30263F",
    paddingTop: 13,
  },

  podcastWatchText: {
    color: "#D8B75C",
    fontSize: 8,
    letterSpacing: 1.7,
    fontWeight: "600",
  },

  podcastArrow: {
    color: "#D8B75C",
    fontSize: 17,
  },
});
