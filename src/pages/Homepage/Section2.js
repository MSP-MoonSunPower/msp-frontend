import React from "react";
import { motion } from "framer-motion";
import styles from "./Section2.module.css";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";

const features = [
  {
    img: img4,
    badge: "🤖 AI 기반 지문 생성",
    title: "Hallucination 최소화",
    desc: "고도화된 프롬프트 엔지니어링으로 신뢰도 높은 지문을 생성합니다. 거짓 정보 없는, 믿을 수 있는 학습 콘텐츠를 제공합니다!",
    color: "#334155",
  },
  {
    img: img5,
    badge: "📚 올인원 학습",
    title: "독해부터 단어까지",
    desc: "지문 독해, 객관식 문제 풀이, 모르는 단어 체크까지 한 번에! 완벽한 문해력 학습 경험을 제공합니다.",
    color: "#1e293b",
  },
];

const Section2 = () => {
  return (
    <motion.section
      id="section2"
      className={styles.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.header}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.mainTitle}>
          왜 <span className={styles.highlight}>MSP</span>인가요?
        </h2>
        <p className={styles.mainDesc}>AI 기술과 교육 전문성의 완벽한 조합</p>
      </motion.div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.imageWrapper}>
              <div
                className={styles.imageBackground}
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                }}
              />
              <motion.img
                src={feature.img}
                alt={feature.title}
                className={styles.featureImage}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>{feature.badge}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section2;
