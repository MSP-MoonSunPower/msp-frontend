import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("인증 중입니다...");

  useEffect(() => {
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");

    if (!uid || !token) {
      setStatus("잘못된 인증 링크입니다.");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          "https://api.moonsunpower.com/user/email-verify/",
          { uid, token },
          { headers: { "Content-Type": "application/json" } }
        );

        if (res.status === 200) {
          setStatus("이메일 인증이 완료되었습니다!");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          setStatus("이메일 인증에 실패했습니다.");
        }
      } catch (error) {
        console.error(error);
        setStatus("이메일 인증 중 오류가 발생했습니다.");
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{status}</h2>
    </div>
  );
};

export default EmailVerify;
