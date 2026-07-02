# Plan: Reveal LP Optimization

## 목적
2026년 8월 진행 예정인 **Reveal 프로그램**의 랜딩페이지를 전환 중심으로 최적화한다.
현재 공개 퍼널은 Awaken이 아니라 Reveal 단일 모집/안내 흐름이므로, 모든 카피·구조·CTA·신뢰 요소를 Reveal 등록/문의 전환에 맞춘다.

## 현재 기준
- Production URL: https://awaken-kr.vercel.app/
- Repository: `kye-ship-it/awaken-kr`
- Base branch/commit: `main` / `f796d58`
- Working branch: `chris-reveal-lp-optimization`
- Legacy branch cleanup reminder: 기존 remote branch `chris`는 작업/PR 완료 후 삭제 여부를 확인한다.

## 핵심 목표
1. 첫 화면에서 “무엇을, 누구에게, 왜 지금”이 5초 안에 이해되게 한다.
2. Reveal의 고관여/고가 프로그램 특성상 즉시 결제보다 **안내 코스·문의·상담 전환**을 자연스럽게 만든다.
3. 비용·종교성·프로그램 강도·효과 신뢰성에 대한 망설임을 페이지 안에서 선제적으로 해소한다.
4. 모바일 사용자의 스크롤/CTA/폼 입력 흐름을 줄인다.
5. 기술적으로 빌드 경고와 보안 audit 이슈를 정리한다.

## 작업 원칙
- 최신 `main` 기준으로만 작업한다.
- 운영 배포는 `main` 머지 전까지 건드리지 않는다.
- 구조 개선과 카피/기능 변경은 가능하면 커밋을 분리한다.
- 각 변경 후 `npm run build`로 검증한다.
- 실제 삭제/remote branch 정리는 오빠 확인 후 진행한다.

## 실행 계획

### 1. Technical baseline 정리
- [ ] Next.js 보안 취약점 패치 가능 버전 확인 및 업데이트
- [ ] Turbopack workspace root 경고 제거 (`next.config.ts`)
- [ ] `npm run build` 통과 확인

### 2. 전환 구조 진단
- [ ] 현재 섹션 순서와 CTA 흐름 맵 작성
- [ ] Hero → 문제 인식 → 프로그램 설명 → 신뢰 → 후기 → FAQ → CTA 흐름에서 이탈 포인트 표시
- [ ] 결제 CTA와 문의 CTA의 역할 분리 기준 정의

### 3. Above-the-fold 최적화
- [ ] Hero headline/subtitle를 Reveal 중심으로 명확화
- [ ] 날짜·장소·가격/얼리버드·대상자를 첫 화면에서 더 빨리 인지하게 조정
- [ ] Primary CTA: 안내 코스/문의 시작
- [ ] Secondary CTA: 프로그램 상세 보기 또는 결제

### 4. 설득 카피 최적화
- [ ] “나에게 필요한가?” 망설임을 더 구체적인 상황 언어로 변환
- [ ] Reveal의 결과 약속을 과장 없이 선명하게 정리
- [ ] 고가/3일 몰입/신앙 기반 우려에 대한 FAQ 보강
- [ ] Awaken 언급은 후속 여정으로만 제한해 공개 퍼널 혼선을 줄임

### 5. CTA/Form 최적화
- [ ] CTA 문구를 결제/문의/안내 코스로 역할별 통일
- [ ] 모바일 sticky CTA 필요 여부 판단
- [ ] CTAForm 필드·문구·성공 메시지 점검
- [ ] PayApp/계좌이체 안내 위치와 부담감 조정

### 6. 신뢰 요소 재배치
- [ ] Trainer Nathan 소개의 신뢰도/맥락 강화
- [ ] Jean-Marie/GAP 글로벌 신뢰 섹션의 과밀도 조정
- [ ] 후기 섹션을 “처음엔 반신반의 → 얻은 변화” 구조로 강화

### 7. 모바일/가독성 개선
- [ ] 긴 문단 줄이기
- [ ] 섹션 간 CTA 반복 빈도 조정
- [ ] 터치 타겟/폼 입력/가격 카드 가독성 확인

### 8. 검증 및 PR 준비
- [ ] `npm run build`
- [ ] `npm audit` 재확인
- [ ] 주요 텍스트 grep으로 Awaken 공개 모집 혼선 여부 확인
- [ ] 변경 요약 작성
- [ ] PR 생성 전 기존 `chris` branch 정리 여부 넛지

## 산출물
- 최적화된 LP 코드
- 변경 전/후 요약
- 검증 로그
- PR 링크

## 운영 변경 로그

### 2026-07-02 21:43 KST - 145만원 결제 링크 SMS 플로우 적용 및 검증
- 운영 가격 기준을 `145만원 / 8월 5일까지`로 변경하고 production URL `<https://awaken-kr.vercel.app/>` 기준으로 반영 확인.
- 기존 LP에 남아 있던 정적 PayApp 링크 `payapp.kr/L/z4d9o3`가 125만원 결제로 연결되는 문제를 발견해 제거함.
- 등록 CTA는 정적 결제 링크가 아니라 신청폼 `#cta-form`으로 이동하게 정리함.
- Zapier `Reveal Nurturing Sequence`는 live v14 기준으로 운영됨.
- PayApp 생성 요청값은 `goodname=리빌 서울`, `price=1450000`으로 확인.
- 새 SMS step `Send Reveal Payment Link SMS`를 PayApp 링크 생성/Sheet 기록 직후, 마케팅 동의 필터 전에 추가함.
- 최종 흐름: `신청 → PayApp 링크 생성 → Sheet 기록 → 결제 링크 SMS 발송 → 마케팅 동의 필터 → Kit/안내 코스/후속 SMS·이메일`.
- 의사결정: Kit 이메일/시퀀스는 수정하지 않음. 바로 결제 니즈는 신청자별 PayApp 링크 SMS로 해결.
- LP/thank-you 문구는 “신청서를 제출하면 개인 결제 링크를 문자로 바로 보내드립니다” 흐름으로 보강함.
- 실제 테스트 번호 `01050414079`로 마케팅 동의 OFF/ON 2건을 공식 LP에서 제출함.
- OFF 테스트: `chriskimjj+reveal-test-off-20260702t121@gmail.com`, PayApp 링크 `<https://www.payapp.kr/z7Tp3L6>`, Sheet row 30 저장 후 마케팅 필터에서 정상 차단.
- ON 테스트: `chriskimjj+reveal-test-on-20260702t121@gmail.com`, PayApp 링크 `<https://www.payapp.kr/z7Tp3RB>`, Sheet row 31 저장 후 Kit 진입 및 기존 Day 0 안내 SMS 성공.
- 두 테스트 모두 `/thank-you` 도착, 개인 PayApp 링크 SMS 수신 완료, PayApp 페이지에서 `145만원` 확인, `125만원` 없음 확인.
- 검증: Zap v14 ON / draft 없음, SMS step이 마케팅 필터보다 앞에 위치, `npm run build` 통과, GitHub `main` push 완료.

## 미결정/확인 필요
- 최종 CTA 우선순위: “문의/안내 코스” vs “얼리버드 결제”
- Reveal 실제 모집 마감/얼리버드 날짜 유지 여부: 현재 2026년 5월 31일
- 신청 폼 필수 필드 유지 여부
- 종교성 표현 강도
