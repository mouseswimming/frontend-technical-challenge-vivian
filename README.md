# Interview Challenge for Frontend Developers

## Overview

This project is a simplified wizard that collects basic account information. All form fields are required, with specific validation requirements.
After the account is successfully created, the state will be cleaned and the success message will be shown.

_Caption: Custom dropdowns with images and names._
![image](https://github.com/mouseswimming/frontend-technical-challenge-vivian/assets/2342125/dd3a9cd1-f8ba-4f83-94ad-3d70d641b5a6)

_Caption: Single column for small screen._
![image](https://github.com/mouseswimming/frontend-technical-challenge-vivian/assets/2342125/5ab84f47-d0aa-40d5-88a2-d59724770b7f)

## Getting Started

#### Clone the repository

`git clone git@github.com:mouseswimming/frontend-technical-challenge-vivian.git`

#### Proxy Configuration

To avoid CORS issues when calling the API hosted on `localhost:5000` from the client server on `localhost:5001`, a proxy has been configured in the `vite.config.ts` file. This ensures seamless communication between the frontend and backend during development. For more details, refer to the [`vite.config.ts`](https://vitejs.dev/config/server-options.html) file.

For this homework, a fallback has been added to the `vite.config.ts`. While in reality, it needs to be configured in the `.env` file. Please refer to `.env.example` for an example configuration.

#### Install Dependencies

- `npm install`

#### Start the API server

- `npm run server`
- Call `localhost:5000` to access the API server.

#### Start the client server

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
