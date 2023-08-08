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
