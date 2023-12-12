# Interview Challenge for Frontend Developers

## Overview

This project is a simplified wizard that collects basic account information. All form fields are required, with specific validation requirements.
After the account is successfully created, the state will be cleaned and the success message will be shown.

*Caption: Custom dropdowns with images and names.*
![image](https://github.com/mouseswimming/frontend-technical-challenge-vivian/assets/2342125/dd3a9cd1-f8ba-4f83-94ad-3d70d641b5a6)

*Caption: Single column for small screen.*
![image](https://github.com/mouseswimming/frontend-technical-challenge-vivian/assets/2342125/5ab84f47-d0aa-40d5-88a2-d59724770b7f)


## Getting Started

#### Install Dependencies

- `npm install`

#### Start API server

- `npm run server`
- Call `localhost:5000` to access the API server.

#### start client server

- `npm run client`
- Call `localhost:5001` to access the client server.

## About the homework

This project's frontend is built with [Vite](https://vitejs.dev/), using [AntD](https://ant.design/) for component and [Tailwind CSS](https://tailwindcss.com/) for CSS utility.

### Features

- Responsive design
- Form validation:
  - Implemented required field checks.
  - Ensured the business size is an integer greater than 0.
- State Management:
  - State is saved into `localStorage` to improve user experience
- Custom dropdown for POS and Delivery Channels
  - loading indicator
  - searchable select
  - custom option (image + name) to help quick user selection
- Feedback
  - Provided clear feedback messages for form validation errors, successful account creation, and failure scenarios.
- Accessiblity
  - Ensured full tab accessibility and autofocus on the first field upon loading.

### Project Structure

```
├── src
│   ├── assets
│   │   └── background image asset
│   ├── components
│   │   ├── AccountRegister
│   │   │   ├── AccountRegister.tsx (account register component)
│   │   │   ├── ChannelSelect.tsx (custom dropdown component for delivery channel)
│   │   │   ├── PosSelect.tsx (custom dropdown component for POS)
│   │   │   ├── const.ts (account register component related CONST)
│   │   │   └── type.ts (account register component related types)
│   │   └── SelectWithImage.tsx (reusable image option select component)
│   ├── hooks
│   │   ├── useDataFetching.ts (custom hook for calling API, returning data, loading status, and error)
│   │   └── useStorage.ts (custom hook for saving state to localStorage/sessionStorage)
│   └── service
│       └── apiService.ts (middleware for frontend and backend API, better handling API changes in the future)
└── ...

```
