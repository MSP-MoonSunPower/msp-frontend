import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Section1.module.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  {
    src: img1,
    title: "AI 기반 지문 생성",
    desc: "주제를 입력하면 맞춤형 지문이 즉시 생성됩니다 ⏰",
  },
  {
    src: img2,
    title: "4단계 난이도 시스템",
    desc: "초급부터 지옥까지, 당신의 실력에 맞는 학습을 경험해보세요 👍🏻",
  },
  {
    src: img3,
    title: "즉각적인 피드백",
    desc: "틀린 문제는 바로 확인하고 복습하세요 ✅",
  },
];

const Section1 = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const handleNextStep = () => {
    setStep((prev) => (prev + 1) % images.length);
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.section
      id="section1"
      className={styles.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.textContent}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.badge}>✨ 핵심 기능</div>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${step}`}
              className={styles.sectionTitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {images[step].title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${step}`}
              className={styles.sectionDesc}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {images[step].desc}
            </motion.p>
          </AnimatePresence>

          <div className={styles.indicators}>
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`${styles.indicator} ${
                  index === step ? styles.activeIndicator : ""
                }`}
                onClick={() => setStep(index)}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.imageContent}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={step}
                src={images[step].src}
                alt={images[step].title}
                className={styles.sectionImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className={styles.bottomNavButtons}>
        <motion.button
          className={styles.navButton}
          onClick={handlePrevStep}
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronLeft size={24} />
        </motion.button>
        <motion.button
          className={styles.navButton}
          onClick={handleNextStep}
          aria-label="Next slide"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronRight size={24} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Section1;
