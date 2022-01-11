# ReactNativePesudo1on1Chat
`React Native`를 이용하여 만든, 일대일 채팅 / 내용 수정 모드 및 삭제 모드 전환 / 타이틀 변경 / 채팅 닉네임 변경 등등을 지원하는 앱.   
([앱 링크](https://expo.dev/@kuman514/ReactNativePseudo1on1Chat): `iOS 카메라 앱`이나 `Android Expo Go Scan QR`을 이용하여, 프리뷰의 QR 코드를 스캔하시면 됩니다.)

# ReactNativePesudo1on1Chat을 만드는 이유
- `React Native`를 연습하기 위해. ([React Native를 연습하는 이유](https://github.com/kuman514/ReactNativePractice#react-native%EB%A5%BC-%EB%B0%B0%EC%9A%B0%EA%B3%A0%EC%9E%90-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0))
- 나만의 모바일 채팅 장면을 구현해보고 싶었기 때문.

# 사용한 요소
- 함수형 컴포넌트
  - `Hooks`(`useState`와 `useEffect`)를 사용할 수 있다.
- `Redux` (상태 관리 라이브러리)
  - 앱의 상태가 자주 바뀌고, 하나의 최상위 컴포넌트가 모든 상태를 가지는 것과 `Prop Drilling`을 방지하기 위해, 앱 상태를 보존하는 하나의 근원을 사용하길 결정함.
- `AsyncStorage`
  - 앱을 다시 실행해도 이전 상태를 유지한 채 이용을 재개할 수 있도록, 상태를 기억하는 수단이 필요하였음.
  - 라이브러리 출처: [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)

# 현재 남은 과제
- ~~채팅 추가 시 가장 밑으로 자동 스크롤~~(시도 중)
- ~~채팅 전송 시각 표시가 긴 메시지에 의해 화면 밖으로 나가지 않도록 방지~~(완료)
