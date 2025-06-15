# SkateBet

A React Native mobile application built with Expo for skateboarding enthusiasts to place bets and track their predictions.

## 🚀 Features

- Modern React Native application with TypeScript support
- Built with Expo for easy development and deployment
- Navigation using React Navigation
- Local storage using MMKV for better performance
- Skeleton loading support for better UX
- Cross-platform support (iOS and Android)
- Custom UI components with consistent styling
- Game card system for betting interface
- Profile management system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- Yarn package manager
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd skatebet
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn start
```

## 📱 Running the App

- For iOS:

```bash
yarn ios
```

- For Android:

```bash
yarn android
```

- For Web:

```bash
yarn web
```

## 🏗️ Project Structure

```
skatebet/
├── src/                      # Source files
│   ├── components/          # Reusable UI components
│   │   ├── appshimmer/     # Loading skeleton components
│   │   ├── tabs/           # Tab navigation components
│   │   ├── sectiontitle/   # Section header components
│   │   ├── gamecard/       # Game card components
│   │   └── Button.tsx      # Custom button component
│   ├── pages/              # Screen components
│   │   ├── home/          # Home screen
│   │   ├── details/       # Details screen
│   │   └── profile/       # Profile screen
│   ├── navigation/         # Navigation configuration
│   ├── service/           # API and business logic
│   ├── styling/           # Global styles and themes
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── assets/                 # Images, fonts, and other static assets
├── ios/                    # iOS specific files
├── .expo/                  # Expo configuration
├── App.tsx                 # Root component
├── index.ts               # Entry point
└── package.json           # Project dependencies and scripts
```

## 📦 Dependencies

- React Native
- Expo
- React Navigation
- React Native MMKV
- React Native Auto Skeleton
- TypeScript

## 🔧 Configuration

The app is configured through `app.json` with the following settings:

- App name: skatebet
- Version: 1.0.0
- Orientation: Portrait
- iOS Bundle ID: com.skatebet.app
- Supports both iOS and Android platforms
- Edge-to-edge enabled for Android
- Tablet support for iOS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Expo team for the amazing framework
- React Native community for the excellent tools and libraries
