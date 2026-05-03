# PRD: Reveal Nathan Trainer 반영

## 1. 배경

현재 공식 소개 페이지(`https://awaken-kr.vercel.app/`)는 GAP Community Korea의 Awaken과 Reveal 프로그램을 함께 소개한다.

현재 페이지 상태:
- Reveal 섹션: `트레이너는 추후 공개됩니다.`로 표시
- Awaken 섹션: Amy Maxwell을 GAP Community Master Trainer로 소개

2026-05-03 Paul 확인 사항:
- 이번 Reveal trainer/coach는 **Nathan Neighbour**
- Awaken 4th trainer는 **Amy Maxwell**

따라서 페이지에서 Reveal과 Awaken의 trainer 정보를 명확히 분리해 반영해야 한다.

## 2. 목표

초대자가 페이지를 볼 때 다음을 오해 없이 이해하도록 한다.

1. Reveal 2026은 Nathan Neighbour가 이끄는 3일 프로그램이다.
2. Awaken 4기는 Amy Maxwell이 이끄는 4일 프로그램이다.
3. Nathan의 소개는 GAP Community 공식 bio를 기반으로 신뢰감 있게 제공한다.
4. 기존 페이지의 블랙/골드 프리미엄 톤과 초대 기반 프로그램의 분위기를 유지한다.

## 3. 근거 자료

### GAP Community 공식 Nathan bio
Source: https://gapcommunity.com/bio-nathan

핵심 사실:
- Full name: **Nathan Neighbour**
- Role: **Trainer**
- Speaker, author, spiritual entrepreneur, transformational trainer
- Specializes in spiritual development and character transformation
- Began professional career at age 12 as on-air talent for Children’s Broadcasting Corporation
- Experience in theatre, music, and experience design
- B.A. in Youth Culture and Modern Music from California Baptist University
- Double masters in Entrepreneur Leadership and Theological Studies
- Served 6 years with Mosaic LA community, artisan and communicator teams
- Founder and leader of Humanity Church in Downtown Pomona arts colony
- Author of *Enhanced: It’s Not Enough to Just Believe* (2020)
- Certified transformational trainer and coach
- Has trained thousands in personal and professional contexts
- Passion: helping people experience freedom by realigning vision with commitment, discovering uniqueness, and living out dreams placed within their soul
- Lives in Pomona, CA with wife Marla and two sons
- Dedicated themes: Creativity, Future, Greatness

### Korean messaging angle
권장 요약:
> Nathan Neighbour는 영성 개발과 인격 변화를 전문으로 하는 GAP Community 트레이너입니다. 예술, 커뮤니티, 리더십, 신학을 넘나드는 배경을 바탕으로 사람들이 자신의 고유함을 발견하고, 비전과 헌신을 다시 정렬하도록 돕습니다.

## 4. 사용자 문제

초대자는 보통 다음 질문을 가진다.

- “Reveal은 누가 진행하나요?”
- “Awaken의 Amy가 Reveal도 진행하나요?”
- “이 프로그램을 이끄는 사람이 신뢰할 만한가요?”
- “기독교/영성 색채가 어느 정도 있나요?”

현재 페이지는 Reveal trainer를 TBD로 두고 있어 팀의 실제 확정 정보와 불일치한다.

## 5. 범위

### In scope
- Reveal 섹션의 trainer notice를 Nathan 소개 카드로 교체
- Reveal card 또는 overview에서 “Trainer: Nathan Neighbour”를 간단히 노출
- Awaken 섹션의 Amy 소개가 Awaken 4th에 해당함을 더 명확히 표시
- 필요한 경우 `MasterTrainer` 컴포넌트명을 Awaken 중심으로 명확히 리팩터링
- Nathan bio 출처를 주석 또는 문서에 기록

### Out of scope
- Nathan 사진 추가: 공식 사용 가능한 이미지/저작권 확인 전까지 보류
- GAP Community 원문 전체 번역 삽입
- 결제 기능 배포/병합
- 은행 이체 정보 추가
- 전체 디자인 리브랜딩

## 6. UX / 콘텐츠 요구사항

### Reveal 섹션
현재 trainer notice 영역을 다음과 같은 카드로 변경한다.

Suggested copy:

```text
TRAINER
Nathan Neighbour

Nathan Neighbour는 영성 개발과 인격 변화를 전문으로 하는 GAP Community 트레이너입니다. 예술, 커뮤니티, 리더십, 신학을 넘나드는 배경을 바탕으로 사람들이 자신의 고유함을 발견하고, 비전과 헌신을 다시 정렬하도록 돕습니다.

Certified transformational trainer & coach · Author of Enhanced · Founder of Humanity Church
```

Tone:
- 너무 과장하지 않는다.
- “이번 Reveal은 Nathan이 진행합니다”를 명확히 한다.
- 초대자가 신뢰할 수 있도록 공식 bio 기반의 구체 정보를 2~3개만 노출한다.

### Program Overview Reveal card
Reveal 카드에 짧은 trainer line 추가:

```text
Trainer: Nathan Neighbour
```

### Awaken trainer section
현재 `MasterTrainer`는 Amy 중심이므로 섹션 문구에 Awaken 4th 맥락을 명시한다.

Suggested section eyebrow or label:

```text
AWAKEN 4TH MASTER TRAINER
```

또는 현재 `GAP Community Master Trainer` 위에:

```text
Awaken 4기 Master Trainer
```

## 7. 정보 구조 제안

현재 페이지 흐름:
1. Hero
2. 문제/가치 섹션
3. ProgramOverview
4. RevealSection
5. TransitionSeparator
6. InvitationTimeline
7. MasterTrainer(Amy)
8. Founder/Global/Testimonial...

권장 유지:
- RevealSection 내부에 Nathan 소개를 넣는다.
- Amy는 Awaken 흐름(`InvitationTimeline` 이후)에 그대로 둔다.

이유:
- Reveal 정보는 Reveal CTA 근처에서 해결되어야 한다.
- Amy 소개는 Awaken 안내 코스/마스터 트레이너 맥락과 연결된다.

## 8. 구현 계획

### Step 1 — 콘텐츠 상수 추가
`RevealSection.tsx` 상단에 Nathan bio 요약 상수를 추가하거나, 작은 배열/객체로 관리한다.

```ts
const REVEAL_TRAINER = {
  name: "Nathan Neighbour",
  role: "GAP Community Trainer",
  summary: "...",
  highlights: [
    "Certified transformational trainer & coach",
    "Author of Enhanced",
    "Founder of Humanity Church",
  ],
};
```

### Step 2 — Reveal trainer card 교체
`Trainer notice` 블록을 Nathan card로 교체한다.

디자인:
- 기존 `bg-grey-7 border border-grey-border rounded-xl` 유지
- `TRAINER` eyebrow는 gold mono
- 이름은 white, 22~28px
- 요약은 white/70
- highlights는 small pill 또는 bullet list

### Step 3 — ProgramOverview 업데이트
Reveal card 설명 아래에 작은 trainer label 추가.

```tsx
<p className="...">Trainer: Nathan Neighbour</p>
```

기존 pricing badge와 충돌하지 않게 spacing 확인.

### Step 4 — Awaken Amy section 명확화
`MasterTrainer.tsx` 문구 중 하나를 변경.

권장:
- `GAP Community Master Trainer` → `Awaken 4기 Master Trainer`
- 또는 상단 title에 `Awaken 4기를 이끄는 마스터 트레이너` 추가

### Step 5 — 검증
- `npm run build`
- 모바일/데스크톱에서 섹션 흐름 확인
- `rg "트레이너는 추후 공개" app` 결과 0건 확인
- `rg "Nathan|Amy|Awaken 4기" app`로 문구 확인

## 9. Acceptance Criteria

- [ ] Reveal 섹션에 Nathan Neighbour가 trainer로 표시된다.
- [ ] “트레이너는 추후 공개됩니다” 문구가 제거된다.
- [ ] Awaken 4th trainer가 Amy Maxwell임이 더 명확히 표시된다.
- [ ] Nathan bio는 공식 GAP Community bio에 근거한다.
- [ ] 결제 CTA/가격 정보는 기존 PR #1 내용과 충돌하지 않는다.
- [ ] `npm run build`가 통과한다.
- [ ] 모바일 레이아웃에서 trainer card가 깨지지 않는다.

## 10. 리스크 / 확인 필요

1. Nathan 사진 사용 여부
   - 공식 bio 페이지의 이미지가 fetch 결과에 노출되지 않았다.
   - 이미지 사용 전 저작권/사용 허가 확인 필요.
   - 1차 구현은 사진 없이 텍스트 카드 권장.

2. 영성/기독교 표현 수위
   - Nathan bio는 spiritual development, theological studies, Humanity Church 등 신앙/영성 맥락이 강하다.
   - 한국 소개 페이지에서는 초대자 부담을 줄이기 위해 “영성 개발과 인격 변화” 정도로 절제해 표현하는 것을 권장.

3. 기존 PR #1과의 관계
   - PR #1은 결제/가격 CTA를 추가한 브랜치다.
   - Nathan 반영은 같은 브랜치에 후속 커밋으로 올릴지, 별도 브랜치로 분리할지 결정 필요.
   - 추천: PR #1이 아직 미병합이면 같은 브랜치에 후속 커밋으로 추가해 한 번에 리뷰한다.

## 11. 추천 다음 액션

1. 현재 PR #1 브랜치(`add-reveal-earlybird-payment`)에 후속 커밋으로 Nathan trainer 반영
2. `npm run build` 검증
3. PR #1 설명에 “Nathan trainer info added” 업데이트
4. Paul/Chriskim에게 리뷰 요청
