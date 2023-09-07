# [롤 숙련도 검색 롤챔 | CANLab](https://cancorplab.com/)
리그오브레전드 API 를 이용하여 소환사의 챔피언 숙련도 점수를 그래프로 보여줍니다.

# 개발
이 프로젝트는 [`create-next-app --typescript`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 명령어로
생성된 [Next.js](https://nextjs.org/) 프로젝트입니다.

## 환경
- Next.js
- TypeScript
- Styled-Components
- d3
- chart.js
- Kakao Share API
- Riot games API
- AWS S3
- AWS CloudFront
- AWS Route 53
- firebase analytics


## 시작하기


```bash
npm run dev
```

## 프로젝트 세팅

ESLint, Prettier 설치

```bash
# eslint plug-in 과 parser 설치(eslint 가 이미 설치된 상태라면, eslint 제외)
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Airbnb eslint 설치목록 확인
npm info "eslint-config-airbnb@latest" peerDependencies
# peerDependencies 목록
{
  eslint: '^7.32.0 || ^8.2.0',
  'eslint-plugin-import': '^2.25.3',
  'eslint-plugin-jsx-a11y': '^6.5.1',
  'eslint-plugin-react': '^7.28.0',
  'eslint-plugin-react-hooks': '^4.3.0'
}
# 위 목록 전부 설치
npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

# airbnb-config 설치 
npm install -D eslint-config-airbnb --legacy-peer-deps

# airbnb-config-typescript 설치
npm install -D eslint-config-airbnb-typescript

# Prettier 설치 및 eslint 규칙 충돌 해결
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

eslintrc 설정

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "no-nested-ternary": 0,
    "array-callback-return": 1,
    "react/function-component-definition": 0,
    "func-style": [
      "error",
      "expression"
    ],
    "react/no-array-index-key": 1,
    "react/no-unstable-nested-components": 1,
    "react-hooks/exhaustive-deps": 1,
    "jsx-a11y/label-has-associated-control": 1,
    "consistent-return": 1,
    "@typescript-eslint/ban-ts-comment": 1
  }
}
```

prettierrc 설정

```json
{
  "parser": "typescript",
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "printWidth": 80,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true
}
```

## 기능

### 소환사 검색

![ezgif com-video-to-gif](https://github.com/postop09/cancorplab/assets/93017923/fdba7c65-26a5-4370-bd36-213d5d74075a)
- 소환사 닉네임 검색
- 소환사 encryptedId 획득 및 재사용을 위해 세션스토리지 저장
- encryptedId 로 숙련도 정보 api 호출, 챔피언 json 데이터에서 필요한 정보만 필터링 및 맵핑
- 챔피언 데이터에서 역할군을 기준으로 숙련도 점수 필터링 및 합산 -> Radar 차트 결과 출력
- 정의한 성향 기준 json 을 바탕으로 위에서 가공한 데이터와 필터링 -> 성향 결과 출력

### 소환사 비교 검색

![ezgif com-video-to-gif (1)](https://github.com/postop09/cancorplab/assets/93017923/4e3ac162-6c8a-427d-9116-378bc7cacd6d)
- 검색 Hook 을 이용하여 최초 소환사 검색과 동일한 로직 수행
- 호출 후 가공한 데이터(위와 동일한 로직)를 차트 데이터에 배열 형태로 전달
- 비교 그래프 출력

### [버블차트로 숙련도 별 챔피언 보기](src/components/mastery/bubbleChart.ts)

![ezgif com-video-to-gif (2)](https://github.com/postop09/cancorplab/assets/93017923/370d5210-5078-4381-9662-8dce92bc6478)
- d3 의 bubbleChart 참고
- 각 챔피언의 숙련도 점수, 이미지 등 기타 정보 맵핑
- createSVG 함수를 통해 svg root frame 정의
- createZoom 함수를 통해 svg 에 줌 기능 추가
- createTranslate 함수를 통해 각 원(콘텐츠)의 좌표설정
- defineImg 함수를 통해 출력 이미지 할당 및 이미지 경로 설정
- createImg 함수를 통해 이미지 맵핑 및 스타일 설정, 출력
- showChampionInfo 함수를 통해 챔피언 숙련도 세부 정보 출력
- 위 생성된 정보를 바탕으로 return svg;

### 챔피언 숙련도 점수 순위로 보기

![ezgif com-video-to-gif (3)](https://github.com/postop09/cancorplab/assets/93017923/82c72172-fa7b-4447-bb13-7a00d98b5f59)
- 맵핑한 챔피언 숙련도 점수를 순서대로 나열

### 검색 결과 카카오톡 공유하기

![image](https://github.com/postop09/cancorplab/assets/93017923/55497525-90a8-48b3-8f1d-bea6aaf75b35)
- Kakao Dev -> message template api 서비스 이용
- message template 에서 정보 입력 및 커스텀 query 설정
- 페이지에서 카카오톡 공유 시, 분석 결과의 title, description, query 값을 전달
- "결과 보기" 버튼 클릭 시, query 값을 이용하여 공유한 결과 페이지로 이동
