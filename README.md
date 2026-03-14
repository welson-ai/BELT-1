# BELT-1 Stellar Testnet Wallet

## Submission Requirements

### Project Overview
A modern React-based web application for interacting with the Stellar blockchain using Freighter wallet integration. Built with Vite for fast development and deployment.

### Key Features Implemented
- **Wallet Integration**: Seamless connection to Freighter wallet
- **Balance Display**: Real-time XLM balance from Stellar testnet
- **Send Transactions**: Send XLM to any Stellar address
- **Transaction History**: View transaction details with explorer links
- **Error Handling**: Comprehensive error states and user feedback
- **Responsive Design**: Clean, mobile-friendly interface

### Application Screenshots

#### Wallet Connected State
![Wallet Connected State](https://github.com/welson-ai/BELT-1/raw/main/wallet%20connected%20state.png)

#### Wallet Balance Display
![Wallet Balance Display](https://github.com/welson-ai/BELT-1/raw/main/wallet%20balance.png)

---

A modern React-based web application for interacting with the Stellar blockchain using Freighter wallet integration. Built with Vite for fast development and deployment.

## Features

- **Wallet Integration**: Seamless connection to Freighter wallet
- **Balance Display**: Real-time XLM balance from Stellar testnet
- **Send Transactions**: Send XLM to any Stellar address
- **Transaction History**: View transaction details with explorer links
- **Error Handling**: Comprehensive error states and user feedback
- **Responsive Design**: Clean, mobile-friendly interface

## Technology Stack

- **Frontend**: React 19.2.4 with Vite 8.0.0
- **Blockchain**: Stellar SDK for blockchain interactions
- **Wallet**: Freighter API v1.7.1 for wallet connectivity
- **Styling**: Custom CSS with modern design principles
- **Network**: Stellar Testnet (for safe testing)

## Prerequisites

- Node.js 18+ installed
- Freighter browser extension installed
- Freighter configured for Stellar Testnet

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    BELT-1 Wallet Architecture                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │   App.jsx   │────│ WalletHook  │────│ Freighter   │    │
│  │             │    │             │    │   Wallet    │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│         │                   │                   │          │
│         │                   │                   │          │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │ Components  │────│ Stellar API │────│ Stellar     │    │
│  │             │    │             │    │ Testnet     │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
stellar-wallet/
├── public/                     # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/             # React components
│   │   ├── Balance.jsx         # Balance display component
│   │   ├── SendPayment.jsx    # Transaction sending component
│   │   └── WalletConnect.jsx  # Wallet connection component
│   ├── hooks/                  # Custom React hooks
│   │   └── useWallet.js        # Wallet state management
│   ├── utils/                  # Utility functions
│   │   └── stellar.js          # Stellar blockchain interactions
│   ├── assets/                 # Component assets
│   ├── App.css                 # Application styles
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Component Hierarchy                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                        App.jsx                             │
│                       /      \                             │
│                      /        \                            │
│            WalletConnect.jsx    useWallet Hook              │
│                   |                 |                       │
│                   |                 |                       │
│            Balance.jsx      SendPayment.jsx                  │
│                   |                 |                       │
│                   |                 |                       │
│            stellar.js         stellar.js                     │
│                   |                 |                       │
│                   \                 /                       │
│                Stellar Testnet API                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        Data Flow                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  User Action → Component → Hook → Stellar API → Blockchain   │
│       │           │         │           │          │        │
│       │           │         │           │          │        │
│  Click Connect → WalletConnect → useWallet → Freighter →     │
│       |           |         |           |          │        │
│       |           |         |           |          │        │
│  Get Balance → Balance → useWallet → Stellar SDK → Testnet   │
│       |           |         |           |          │        │
│       |           |         |           |          │        │
│  Send XLM → SendPayment → useWallet → Stellar SDK → Testnet  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/welson-ai/BELT-1.git
cd BELT-1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Freighter Extension

- Install [Freighter Wallet](https://www.freighter.app/) for your browser
- Create a new wallet or import existing one
- **Important**: Set network to **Testnet** in Freighter settings

### 4. Get Testnet XLM

Fund your wallet using the Stellar Friendbot:

```
https://friendbot.stellar.org/?addr=YOUR_PUBLIC_KEY
```

Replace `YOUR_PUBLIC_KEY` with your Freighter testnet address.

### 5. Start Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Usage Guide

### Connecting Wallet

1. Ensure Freighter is installed and unlocked
2. Click "Connect Freighter Wallet"
3. Approve the connection in Freighter popup
4. Your public key will be displayed

### Checking Balance

- After connecting, your XLM balance automatically appears
- Balance is fetched from Stellar testnet in real-time

### Sending XLM

1. Enter destination Stellar address
2. Enter amount in XLM
3. Click "Send XLM"
4. Confirm transaction in Freighter popup
5. View transaction result with explorer link

## API Integration

### Freighter API v1.7.1

The application uses the stable Freighter API v1.7.1 with the following methods:

- `isConnected()` - Check wallet availability
- `getPublicKey()` - Retrieve wallet public key
- `signTransaction()` - Sign Stellar transactions

### Stellar SDK

Integration with Stellar blockchain for:

- Account balance queries
- Transaction building and signing
- Testnet network operations

## Security Considerations

- **Testnet Only**: Application only connects to Stellar testnet
- **Client-Side**: All operations happen in the browser
- **No Private Keys**: Private keys never leave Freighter wallet
- **Secure Connections**: Uses HTTPS for all API calls

## Troubleshooting

### Common Issues

**"Freighter not detected"**
- Ensure Freighter extension is installed
- Refresh the page after installation
- Check if Freighter is enabled in browser extensions

**"Could not get public key"**
- Unlock your Freighter wallet
- Ensure you're on Testnet network
- Check if you have a testnet account

**"Transaction Failed"**
- Verify destination address is valid
- Ensure sufficient XLM balance (minimum 1 XLM reserve + 0.0001 XLM fee)
- Check network connectivity

### Debug Mode

Open browser console (F12) to see detailed logs:
- Wallet connection status
- API response details
- Transaction signing results

## Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Useful Links

- [Stellar Documentation](https://developers.stellar.org/)
- [Freighter Wallet](https://www.freighter.app/)
- [Stellar Testnet Explorer](https://stellar.expert/explorer/testnet)
- [Stellar Friendbot](https://friendbot.stellar.org/)
- [Vite Documentation](https://vite.dev/)

## Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Review Stellar and Freighter documentation

---

**Built with love for the Stellar ecosystem**
