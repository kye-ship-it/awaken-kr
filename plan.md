# Plan: CTAForm Webhook 연동

## 목표
CTAForm 제출 시 Zapier Webhook(`https://hooks.zapier.com/hooks/catch/14332708/ug158id/`)으로 데이터 전송

## 필드 매핑
| 폼 필드 | key | 필수 |
|---------|-----|------|
| 이름 | name | Y |
| 연락처 | phone | Y |
| 이메일 | email | Y |
| 추천인 이름 | referrer | N |

## TDD 테스트 계획

### 1. CTAForm 상태 관리
- [x] T1: 이름 입력 시 상태 업데이트
- [x] T2: 연락처 입력 시 상태 업데이트
- [x] T3: 이메일 입력 시 상태 업데이트
- [x] T4: 추천인 이름 입력 시 상태 업데이트

### 2. 폼 유효성 검사
- [x] T5: 이름이 비어있으면 제출 불가
- [x] T6: 연락처가 비어있으면 제출 불가
- [x] T7: 이메일이 비어있으면 제출 불가
- [x] T8: 추천인 이름은 비어있어도 제출 가능

### 3. Webhook 전송
- [x] T9: 제출 시 올바른 payload로 webhook POST 호출
- [x] T10: 전송 중 버튼 비활성화 및 로딩 표시
- [x] T11: 전송 성공 시 성공 메시지 표시
- [x] T12: 전송 실패 시 에러 메시지 표시

### 4. ID 및 Timestamp 추가
- [x] T13: payload에 name+phone 기반 id가 포함됨
- [x] T14: 동일 name+phone 조합은 동일 id 생성
- [x] T15: payload에 timestamp(ISO 8601)가 포함됨

