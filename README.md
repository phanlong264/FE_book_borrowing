project-root/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/            # Các thành phần giao diện chính
│   │   ├── common/            # Thành phần dùng chung
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Layout.tsx
│   │   ├── feature1/          # Thành phần tính năng 1
│   │   │   ├── Feature1Component.tsx
│   │   │   └── Feature1Styles.module.css
│   │   └── feature2/          # Thành phần tính năng 2
│   │       ├── Feature2Component.tsx
│   │       └── Feature2Styles.module.css
│   │
│   ├── pages/                 # Các trang chính
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   └── NotFound.tsx
│   │
│   ├── hooks/                 # Các custom hook
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── useForm.ts
│   │
│   ├── context/               # Context API
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── services/              # Các dịch vụ API
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   └── userService.ts
│   │
│   ├── utils/                 # Các tiện ích chung
│   │   ├── helpers.ts
│   │   ├── validation.ts
│   │   └── constants.ts
│   │
│   ├── styles/                # Các tệp CSS chung
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── reset.css
│   │
│   ├── assets/                # Tài nguyên
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── routes/                # Định nghĩa routing
│   │   ├── PrivateRoute.tsx
│   │   └── Routes.tsx
│   │
│   ├── types/                 # Các định nghĩa kiểu TypeScript
│   │   ├── user.ts
│   │   ├── product.ts
│   │   └── common.ts
│   │
│   ├── App.tsx                # Thành phần chính của ứng dụng
│   └── index.tsx              # Điểm khởi đầu của ứng dụng
│
├── package.json               # Cấu hình các package
├── tsconfig.json              # Cấu hình TypeScript
├── .gitignore                 # Tệp khai báo các tệp/thư mục bị bỏ qua bởi Git
├── README.md                  # Hướng dẫn dự án
└── .env                       # Tệp môi trường



Giải thích cấu trúc:

public/: Chứa các tài nguyên tĩnh và file HTML gốc
src/components/:

common/: Các component dùng chung
Các thư mục feature: Component theo từng tính năng


pages/: Các trang chính của ứng dụng
hooks/: Custom React hooks
context/: React context cho quản lý state toàn cục
services/: Các service gọi API
utils/: Các hàm tiện ích, helper
styles/: Các file CSS toàn cục
assets/: Hình ảnh, icon, font
routes/: Cấu hình định tuyến
types/: Định nghĩa TypeScript

Để bắt đầu, bạn có thể:

Sử dụng Create React App hoặc Vite
Cài đặt TypeScript
Thêm các thư viện cần thiết như React Router, state management
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
