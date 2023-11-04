import { useState } from "react";
import Conts from "./Conts.js";
import YearSelectBtnCntl from "./YearSelectBtnCntl.js";
import "./Css/Milestone.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Milestone(props) {
  const conts = getConts();
  const allYearValue = "all-year";
  const [selected, setSelect] = useState(allYearValue);
  const isSelectAllYear = getIsSelectAllYear(selected, allYearValue);
  const defaultCount = getDefaultCount();

  return (
    <div className="area-milestone">
      <YearSelectBtnCntl
        conts={conts}
        onChange={setSelect}
        allYearValue={allYearValue}
        value={selected}
      />

      <Conts
        selected={selected}
        conts={conts}
        defaultCount={defaultCount}
        isSelectAllYear={isSelectAllYear}
      />
    </div>
  );
}

function getDefaultCount() {
  return 2;
}

function getIsSelectAllYear(selected, allYearValue) {
  if (String(selected) === String(allYearValue)) {
    return true;
  }
  return false;
}

function getConts() {
  return [
    {
      year: "1993년",
      items: [
        {
          month: "9월",
          infoes: [
            {
              titles: ["제어계측공학과 소모임 '제틴(ZETIN)'을 결성"],
              texts: [
                "초대회원",
                "- 박정수(제어계측`88)",
                "- 류경귀(제어계측`92)",
                "- 김영재(제어계측`92)",
              ],
            },
          ],
        },
      ],
    },

    {
      year: "1994년",
      items: [
        {
          month: "3월",
          infoes: [
            {
              titles: ["제1대 회장 류경귀(제어계측`92)"],
              texts: [],
            },
            {
              titles: ["2기 회원(`93)을 받음"],
              texts: [],
            },
          ],
        },
        {
          month: "여름",
          infoes: [
            {
              titles: [
                "[마이크로 로봇 연구회]로 명칭 확정",
                "영문명 ZETIN-ZEro To INfinite 의 약자",
              ],
              texts: [
                "(구)이공관 지하에 입방 및 연구시설 확보",
                "본격적인 마우스 제작 돌입",
              ],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: ["3기 회원(`94)을 받음"],
              texts: [],
            },
            {
              titles: ["하이텔 대회 참가"],
              texts: ["박정수(제어계측`88, muttl) - 본선"],
            },
            {
              titles: ["서울대 대회 참가"],
              texts: ["박정수(제어계측`88, muttl)"],
            },
          ],
        },
      ],
    },

    {
      year: "1995년",
      items: [
        {
          month: "3월",
          infoes: [
            {
              titles: ["4기 회원(`95)을 받음"],
              texts: [],
            },
          ],
        },
        {
          month: "5월",
          infoes: [
            {
              titles: ["제1회 마이크로 로봇 전시회"],
              texts: [],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: ["제2대 회장 박규은(제어계측`95)"],
              texts: [],
            },
          ],
        },
        {
          month: "12월",
          infoes: [
            {
              titles: ["제2회 마이크로 로봇 전시회"],
              texts: [],
            },
          ],
        },
      ],
    },

    {
      year: "1996년",
      items: [
        {
          month: "3월",
          infoes: [
            {
              titles: ["전자전기공학부 소모임으로 성장"],
              texts: [],
            },
            {
              titles: ["5기 회원(`96)을 받음"],
              texts: [],
            },
            {
              titles: ["하이텔 대회 참가"],
              texts: ["김응찬(제어계측`95, TRIAL)"],
            },
          ],
        },
        {
          month: "여름",
          infoes: [
            {
              titles: ["제3대 회장 이영남(제어계측`95)"],
              texts: [],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: ["서울대 대회 참가"],
              texts: [
                "박규은(제어계측`95, 유아)",
                "김응찬(제어계측`95, TRIAL)",
                "김을식(제어계측`91, 시끄럽쥐)",
              ],
            },
            {
              titles: ["제3회 마이크로 로봇 전시회 & 창립제"],
              texts: [],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              titles: ["제1회 광운대 대회 참가"],
              texts: [
                "김응찬(제어계측`95, TRIAL)",
                "김을식(제어계측`91, 시끄럽쥐) - 본선 5위",
              ],
            },
          ],
        },
      ],
    },

    {
      year: "1997년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: ["제4대 회장 이영삼(전자전기`96)"],
              texts: [],
            },
          ],
        },
        {
          month: "3월",
          infoes: [
            {
              titles: ["6기 회원(`97)을 받음"],
              texts: [],
            },
            {
              titles: ["하이텔 대회 참가"],
              texts: [
                "김을식(제어계측`91, 시끄럽쥐) - 예선1위, 본선3위",
                "고강일(전자전기`96, 싸가쥐) - 본선 10위",
              ],
            },
          ],
        },
        {
          month: "여름",
          infoes: [
            {
              titles: ["M.T. (우이동)"],
              texts: [],
            },
            {
              titles: ["공과대학 동아리 승격"],
              texts: [],
            },
          ],
        },
        {
          month: "가을",
          infoes: [
            {
              titles: ["FA저널 제틴의 방향 및 연구 목적 취재, 기사화"],
              texts: [],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: ["제4회 마이크로 로봇 전시회 & 창립제"],
              texts: [],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              titles: ["제2회 광운대 대회 참가"],
              texts: [
                "박규은(제어계측`95, 유아)",
                "김응찬(제어계측`95, TRIAL)",
                "박경태( ? )",
                "김을식(제어계측`91, 시끄럽쥐) - 본선 7위",
              ],
            },
          ],
        },
      ],
    },

    {
      year: "1998년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: ["제5대 회장 정병근(제어계측`93)"],
              texts: [],
            },
          ],
        },
        {
          month: "3월",
          infoes: [
            {
              titles: ["7기 회원(`98)을 받음"],
              texts: [],
            },
          ],
        },
        {
          month: "6월",
          infoes: [
            {
              titles: ["전국 마이크로 로봇 동호인 대회 참가 (6.14)"],
              texts: [
                "박규은(제어계측`95, 유아) - 예선6위, 본선3위",
                "최현철(제어계측`92, 파란쥐)",
                "안규열(제어계측`92, 관두쥐)",
              ],
            },
          ],
        },
        {
          month: "여름",
          infoes: [
            {
              titles: ["M.T. (용문산)"],
              texts: [],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: [
                "개교 80주년 기념",
                "제1회 전국 라인트레이서 대회 개최 (9.12)",
              ],
              texts: [
                "참가팀: 전국 18개 대학교 28팀",
                "관람인원: 약 400명",
                "박규은(제어계측`95, 유아) - 최우수상",
                "이항규(제어계측`91)",
                "문장식(제어계측`94, 꼬로록)",
                "고강일(전자전기`96, 싸가쥐)",
              ],
            },
            {
              titles: ["제6대 회장 문장식(제어계측`94)"],
              texts: [],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              titles: ["제2회 광운대 대회 참가"],
              texts: [
                "박규은(제어계측`95, 유아)",
                "김응찬(제어계측`95, TRIAL)",
                "박경태( ? )",
                "김을식(제어계측`91, 시끄럽쥐) - 본선 7위",
              ],
            },
            {
              titles: ["서울대 대회 참가"],
              texts: [
                "박규은(제어계측`95, 유아)",
                "고강일(전자전기`96, Overload)",
                "최현철(제어계측`92, 파란쥐)",
              ],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              titles: ["전북대 대회 참가(11.21)"],
              texts: ["박규은(제어계측`95, 유아) - 예선2위, 본선3위"],
            },
          ],
        },
      ],
    },
  ];
}
