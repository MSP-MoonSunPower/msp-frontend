import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Home.module.css";
import mainImg from "../../assets/images/mainMacImg.png";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { createApiCall } from "../../api";

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchTodayText = async () => {
    try {
      const data = await createApiCall("/ai/todaytext");
      console.log("오늘의 지문 가져오기 성공:", data);

      navigate("/Question", {
        state: { passage: data.content, questions: data.questions },
      });
    } catch (error) {
      console.error("오늘의 지문 가져오는 중 오류 발생:", error);
    }
  };

  if (isMobile) {
    return (
      <motion.div
        className={styles.mobileContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={mainImg}
          alt="MSP Logo"
          className={styles.logoImage}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Moon Sun Power
        </motion.h1>
        <motion.p
          className={styles.mobileMessage1}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          개인 맞춤형 문해력 향상 학습 프로그램
        </motion.p>

        <motion.div
          className={styles.buttonContainer}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/select">
            <button className={styles.startButton}>시작하기</button>
          </Link>
          <Link to="#" onClick={fetchTodayText}>
            <button className={styles.questionButton}>오늘의 지문</button>
          </Link>
        </motion.div>
        <motion.p
          className={styles.mobileMessage2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          * 모바일 버전은 추후 업데이트 됩니다. (PC로 학습해주세요!)
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />

      <div className={styles.container}>
        <motion.div
          className={styles.leftContainer}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            MSP는 누구에게나 열려 있는, 무료 학습 커뮤니티입니다.
          </div>

          <motion.h1
            className={styles.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.gradientText}>Moon Sun Power</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            생성형 AI 기반 NLG를 이용한
            <br />
            개인 맞춤형 문해력 향상 학습 프로그램
          </motion.p>

          <motion.div
            className={styles.buttonContainer}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/select">
              <motion.button
                className={styles.startButton}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>시작하기</span>
                <span className={styles.arrow}>→</span>
              </motion.button>
            </Link>
            <Link to="#" onClick={fetchTodayText}>
              <motion.button
                className={styles.questionButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                오늘의 지문 바로가기
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🌐</div>
              <div className={styles.statNumber}>3개 언어</div>
              <div className={styles.statLabel}>한글·영어·독일어 지원</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>📊</div>
              <div className={styles.statNumber}>4단계 난이도</div>
              <div className={styles.statLabel}>초급부터 지옥까지</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>⚡</div>
              <div className={styles.statNumber}>무제한 생성</div>
              <div className={styles.statLabel}>AI 맞춤형 지문</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.rightContainer}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <motion.div
              className={styles.floatingShape1}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={styles.floatingShape2}
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={mainImg}
              alt="MSP Logo"
              className={styles.logoImage}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>

      <Section2 />
      <Section1 />
      <Section3 />

      <footer className={styles.footer}>
        Contact (문의 및 오류 신고) :&nbsp;
        <a
          href="https://pf.kakao.com/_hdaKn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          MSP 카카오 채널
        </a>
        &nbsp;|&nbsp;
        <span
          onClick={() => {
            window.open(
              "https://www.instagram.com/moonsunpower.sg/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className={styles.footerLink}
        >
          Instagram
        </span>
      </footer>
    </div>
  );
}

export default Home;
