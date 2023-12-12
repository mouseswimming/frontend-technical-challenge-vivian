# Interview Challenge for Frontend Developers

## Overview

This is a simplified wizard that collects basic account information. All the fields on the form are required with some special validation requirepment as form needed.

## Setup

#### NPM

- Version used for repo:
  - `9.2.0`

#### Node

- Version used for repo:
  - `19.3.0`

#### Express

- Version used for repo:
  - `4.18.2`

## Getting Started

#### Install dependency

- `npm install`

#### Start api server

- `npm run server`
- Call `localhost:5000`

#### start client server

- `npm run client`
- Call `localhost:5001`

## About the homework

This project's frontend is built on top on [Vite][https://vitejs.dev/], using [AntD][https://ant.design/] as its component library and [Tailwind][https://tailwindcss.com/] as its utility css library.

### Features

- Responsive design
- Form validation
  - required field check
  - integer type filed check (business size should be an integer greater than 0)
- State is saved into `localStorage`
- Custom dropdown for POS and Delivery Channels
  - loading indicator
  - searchable select
  - custom option (image + name) to help user quickly locate.
- User feedback (form validation error message, account created success and fail message)
- Tab friendly
