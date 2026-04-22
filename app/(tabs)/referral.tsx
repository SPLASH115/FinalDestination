import { PrimaryButton } from '@/components/PrimaryButton';
import { SupportChatButton } from '@/components/SupportChatButton';
import { XendColors } from '@/constants/xend-theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ReferralScreen() {
  const insets = useSafeAreaInsets();
  const referralCode = "XEND-772-MCH";

  const onShare = async () => {
    try {
      await Share.share({
        message: `Join me on XEND Finance! Use my referral code: ${referralCode} to earn points.`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const steps = [
    { icon: 'person-add-outline', title: 'Invite Friends', desc: 'Share your referral code with your friends.' },
    { icon: 'shield-checkmark-outline', title: 'They Verify', desc: 'They complete their KYC and start saving.' },
    { icon: 'gift-outline', title: 'Get Rewards', desc: 'You both earn points and rewards instantly.' },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top || 20 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Referral</Text>
        <SupportChatButton onPress={() => console.log('Support chat pressed')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.rewardCard}>
          <MaterialCommunityIcons name="trophy" size={60} color="#FFD700" style={styles.trophyIcon} />
          <Text style={styles.rewardLabel}>Total Points Earned</Text>
          <Text style={styles.rewardAmount}>2,450 pts</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Friends Joined</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>₦ 5,000</Text>
              <Text style={styles.statLabel}>Cash Earned</Text>
            </View>
          </View>
        </View>

        <View style={styles.codeSection}>
          <Text style={styles.sectionTitle}>YOUR REFERRAL CODE</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>{referralCode}</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={20} color={XendColors.primaryBlue} />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <PrimaryButton 
          label="Share Referral Link"
          variant="blue"
          onPress={onShare}
          style={styles.shareButton}
          left={<Ionicons name="share-social-outline" size={20} color="white" />}
        />

        <View style={styles.howItWorks}>
          <Text style={styles.sectionTitle}>HOW IT WORKS</Text>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepIconBox}>
                <Ionicons name={step.icon as any} size={24} color={XendColors.primaryBlue} />
              </View>
              <View style={styles.stepText}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDesc}>{step.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: XendColors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  rewardCard: {
    backgroundColor: '#1A233E',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#2646C4',
  },
  trophyIcon: {
    marginBottom: 15,
  },
  rewardLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  rewardAmount: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  codeSection: {
    marginTop: 10,
    marginBottom: 25,
  },
  sectionTitle: {
    color: XendColors.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 12,
  },
  codeContainer: {
    flexDirection: 'row',
    backgroundColor: XendColors.backgroundElevated,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  codeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(46, 91, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  copyText: {
    color: XendColors.primaryBlue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  shareButton: {
    marginBottom: 30,
  },
  howItWorks: {
    gap: 20,
  },
  stepItem: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  stepIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(46, 91, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    flex: 1,
  },
  stepTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  stepDesc: {
    color: XendColors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  }
});