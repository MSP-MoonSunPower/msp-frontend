import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import styles from "./Section3.module.css";

const questions = [
  {
    id: "q1",
    icon: "📝",
    question: "지문의 출처를 알 수 있을까요?",
    answer: `지문과 문제는 주제가 입력됨과 동시에 생성형 AI를 활용하여 즉시 생성됩니다.
비결정적인 방법을 따르므로, 같은 주제를 입력하더라도 서로 다른 지문과 문제가 제공될 수 있습니다.
자료의 신뢰도를 높이고 Hallucination(거짓 정보) 출력을 방지하기 위해 지속적으로 개선하고 있습니다.
단, 최상의 퀄리티의 지문을 제공하기 위해 지문 생성에 다소 시간이 걸릴 수 있다는 점은 양해부탁드립니다! 
혹시라도 잘못된 내용이 출력되었다면, 저희 MoonSunPower 팀에게 알려주세요!`,
  },
  {
    id: "q2",
    icon: "📊",
    question: "난이도는 어떻게 되나요?",
    answer: `초급 : 초등학교 저학년 학생들도 부담 없이 읽을 수 있도록, 쉬운 단어와 짧은 글로 구성되어 있습니다!
중급 : 초등학교 고학년부터 중학생 수준의 지문으로, 초급보다 글의 길이가 조금 더 길어집니다.
고급 : 고등학교 1~2학년 수준의 지문으로, 글의 길이와 단어 난이도가 한층 높아집니다.
지옥 : 수능을 준비하는 수험생들, 각종 시험을 대비하는 대학생들에게도 도움이 될 수 있도록 제작되었습니다.
   모두 지옥 지문을 수월하게 읽을 수 있을 때까지, 하루 한 편씩 MSP에 도전해보는 건 어떨까요? 🔥`,
  },
  {
    id: "q3",
    icon: "📅",
    question: "오늘의 지문은 무엇인가요?",
    answer: `오늘의 지문은 매일 자정에 업데이트되며, 난이도는 '지옥'으로 고정됩니다.
주제는 랜덤으로 선정되어, 매일 다양한 내용을 접하며 학습할 수 있도록 구성되었습니다. 
매일 꾸준히 오늘의 지문을 풀기만 해도, 문해력과 상식이 눈에 띄게 향상되는 것을 경험하게 될 것입니다! 🚀`,
  },
  {
    id: "q4",
    icon: "🤝",
    question: "서비스 방침은 어떤가요?",
    answer: `전 세계, 남녀노소 모두를 위한 웹사이트인 만큼, 아무도 차별받지 않는 모두가 행복한 사이트이길 바랍니다.
저희 MoonSunPower는 중립적이고 객관적인 정보로 여러분들을 맞이하고 싶습니다.
무언가 잘못된 점이 있으면, 저희에게 말씀해주세요!`,
  },
  {
    id: "q5",
    icon: "💎",
    question: "무료 서비스인가요?",
    answer: `구독 시 초급, 중급, 고급, 지옥 네 가지 레벨을 모두 학습하실 수 있습니다.
또한, 오답노트 기능이 활성화되어 복습이 더욱 효과적으로 이루어집니다. 
현재는 이 모든 서비스를 무료로 제공하고 있으니, 부담 없이 이용해 보세요!`,
  },
];

const Section3 = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <motion.section
      className={styles.container}
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
        <div className={styles.badge}>💡 FAQ</div>
        <h2 className={styles.mainTitle}>자주 묻는 질문</h2>
        <p className={styles.mainDesc}>MSP에 대해 궁금한 점이 있으신가요?</p>
      </motion.div>

      <motion.div
        className={styles.card}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Accordion.Root
          type="single"
          collapsible
          className={styles.accordion}
          value={openItem}
          onValueChange={setOpenItem}
        >
          {questions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item value={q.id} className={styles.item}>
                <Accordion.Header>
                  <Accordion.Trigger className={styles.trigger}>
                    <div className={styles.questionContent}>
                      <span className={styles.iconWrapper}>{q.icon}</span>
                      <span className={styles.questionText}>{q.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === q.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={styles.chevron} />
                    </motion.div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.content}>
                  <div
                    className={styles.answerText}
                    dangerouslySetInnerHTML={{
                      __html: q.answer.replace(/\n/g, "<br>"),
                    }}
                  />
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </motion.div>

      <motion.div
        className={styles.ctaSection}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className={styles.ctaTitle}>지금 바로 시작하세요</h3>
        <p className={styles.ctaDesc}>
          AI가 만드는 나만의 학습, 지금 무료로 체험해보세요
        </p>
        <Link to="/select">
          <motion.button
            className={styles.startButton}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>MSP 시작하기</span>
            <span className={styles.arrow}>→</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Section3;
