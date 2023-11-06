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

    {
      year: "1999년",
      items: [
        {
          month: "2월",
          infoes: [
            {
              titles: [
                "제6회 전국 마이크로 로봇 디지털 동호인 경연대회 참가 (2.27)",
              ],
              texts: [
                "박규은(제어계측`95, 유아)",
                "고강일(전자전기`96, Overload) - 탐색상",
              ],
            },
          ],
        },
        {
          month: "3월",
          infoes: [
            {
              titles: ["8기 회원(`99)을 받음"],
              texts: [],
            },
          ],
        },
        {
          month: "4월",
          infoes: [
            {
              titles: ["아주대학교 `99 마이크로 마우스 로봇 경연대회 (4.10)"],
              texts: ["박규은(제어계측`95, 유아) - 1위"],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: [
                "제2회 전국 라인트레이서 로봇 경연 대회 개최",
                "참가팀: 전국 23개 대학교 63팀",
                "관람인원: 약 400명",
              ],
              texts: [],
            },
            {
              titles: ["제7대 회장 이병석(전자전기`98)"],
              texts: [],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              titles: ["제2회 단국대 전국 마이크로 마우스 경연대회 (10.26)"],
              texts: ["박규은(제어계측`95, 유아) - 최우수상"],
            },
            {
              titles: ["아주대학교 주최 `99 라인 트레이서 경연 대회 (10.30)"],
              texts: ["김미향(전자전기`99, 사다드) - 인기상"],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              titles: [
                "제1회 UNICEM 주최",
                "(컴퓨터,기계,전자 관련 동아리 연합)",
                "학술전시회 참가(11.11~13)",
                "장소: 연세대학교 학생회관",
              ],
              texts: [],
            },
          ],
        },
      ],
    },

    {
      year: "2000년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: ["제7대 회장 이병석(전자전기`98)"],
              texts: [],
            },
          ],
        },
        {
          month: "2월",
          infoes: [
            {
              titles: ["전자전기 예비대학 시범주행"],
              texts: ["마우스 4대 트레이서 2대"],
            },
          ],
        },
        {
          month: "3월",
          infoes: [
            {
              titles: ["제8회 하이텔 전국 마이크로 로봇 경연대회 (3.25)"],
              texts: [
                "이병석(전자전기`98, 돌) - 우수상",
                "김미향(전자전기`99, 사다드) - 장려상",
                "김상희(전자전기`99, 하늘) - 신인상",
              ],
            },
            {
              titles: ["9기 회원(`00)을 받음"],
              texts: [],
            },
          ],
        },
        {
          month: "6월",
          infoes: [
            {
              titles: ["제4회 호서대학교 전국 마이크로 로봇 경연대회 (6.5)"],
              texts: ["이병석(전자전기`98, 돌) - 장려상"],
            },
          ],
        },
        {
          month: "8월",
          infoes: [
            {
              titles: ["제9회 하이텔 전국 마이크로 로봇 경연대회 (8.19~8.20)"],
              texts: [
                "박영숙(전자전기`99, 빵) - 인기상",
                "조태희(전자전기`98, finder) - 4위",
              ],
            },
          ],
        },
        {
          month: "9월",
          infoes: [
            {
              titles: [
                "제3회 전국 라인트레이서 로봇 경연 대회 개최(9.2)",
                "참가팀: 전국 25개 대학교, 일반 등 77팀",
                "관람인원: 500여명",
              ],
              texts: ["문장식(제어계측`94, one_we) - 최우수상"],
            },
            {
              titles: ["제8대 회장 현진욱(전자전기`98)"],
              texts: [],
            },
            {
              titles: ["제18회 서울대 한국 마이크로 로봇 경연대회 (9.23)"],
              texts: [
                "김상희(전자전기`99 하늘) - 4위(격려상)",
                "김미향(전자전기`99, 사다드) - 5위(격려상)",
              ],
            },
            {
              titles: ["제2회 강릉대 라인 트레이서 경연대회 (9.23)"],
              texts: [
                "문장식(제어계측`94, one_we) - 최우수상",
                "조태희(전자전기`98, finder) - 우수상",
                "곽성훈(전자전기`00, 꼴통3호) - 5위",
                "조민우(전자전기`00, cc7700) - 7위",
                "박남수(전자전기`96, shark) - 8위",
              ],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              titles: ["제2회 울산대 마이크로 로봇 경연대회 (10.3)"],
              texts: ["이병석(전자전기`98, 돌) -장려상"],
            },
            {
              titles: ["제1회 경일대 라인 트레이서 로봇 경연대회 (10.7)"],
              texts: [
                "조태희(전자전기`98, finder) - 우수상",
                "문장식(제어계측`94, one_we) - 장려상",
                "천영민(전자전기`98, 휘리릭) - 4위",
                "조민우(전자전기`00, cc7700)",
              ],
            },
            {
              titles: ["제3회 서울산업대 전국 라인 트레이서 경연대회 (10.21)"],
              texts: [
                "문장식(제어계측`94, one_we) - 2위",
                "조태희(전자전기`98, finder) - 장려상",
                "천영민(전자전기`98, 휘리릭) - 3위",
              ],
            },
            {
              titles: ["2000년 아주대 마이크로 로봇 경연대회 (10.28)"],
              texts: ["천영민(전자전기`98, 휘리릭) - 2위"],
            },
            {
              titles: [
                "전자신문에 제틴 동아리 기사화 (10.28)",
                "(http://www.etnews.co.kr->[제틴]검색)",
              ],
              texts: ["활동 내역,수상 경력, 운영 계획 등이 기재."],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              titles: ["제12회 전(全)일본 마이크로 마우스 경연대회"],
              texts: ["조태희(전자전기`98, finder) - 라인트레이서부문 1위"],
            },
          ],
        },
      ],
    },
    {
      year: "2001년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2002년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2003년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2004년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2005년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2006년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2007년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2008년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2009년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2010년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2011년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2012년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2013년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2014년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2015년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2016년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2017년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2018년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
    {
      year: "2019년",
      items: [
        {
          month: "1월",
          infoes: [
            {
              titles: [],
              texts: [],
            },
          ],
        },
      ],
    },
  ];
}
