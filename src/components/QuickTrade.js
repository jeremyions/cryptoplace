import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants } from '../animations';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const QuickTrade = () => {
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  
  const popularCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: '45,230.50', change: '+2.3%' },
    { symbol: 'ETH', name: 'Ethereum', price: '2,340.75', change: '+1.8%' },
    { symbol: 'SOL', name: 'Solana', price: '123.45', change: '+4.2%' }
  ];

  const handleQuickBuy = () => {
    // Implement actual trading logic
    console.log(`Buying ${amount} of ${selectedCrypto}`);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '20px', maxWidth: '100%' }}
    >
      {/* Quick Trade Card */}
      <motion.div
        variants={cardVariants}
        style={{
          background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <h2 style={{ color: '#00ff9d', marginBottom: '24px' }}>Quick Trade</h2>
        
        {/* Crypto Selection */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#ffffff', display: 'block', marginBottom: '12px' }}>
            Select Cryptocurrency
          </label>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {popularCryptos.map((crypto) => (
              <motion.div
                key={crypto.symbol}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCrypto(crypto.symbol)}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  border: `1px solid ${selectedCrypto === crypto.symbol ? '#00ff9d' : 'rgba(255,255,255,0.1)'}`,
                  background: selectedCrypto === crypto.symbol ? 'rgba(0,255,157,0.1)' : 'rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#ffffff', fontWeight: '500' }}>{crypto.symbol}</span>
                  <span style={{ color: '#00ff9d' }}>{crypto.change}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#a0aec0', fontSize: '14px' }}>{crypto.name}</span>
                  <span style={{ color: '#ffffff' }}>${crypto.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#ffffff', display: 'block', marginBottom: '12px' }}>
            Amount in USD
            <span style={{ marginLeft: '8px', color: '#a0aec0', fontSize: '14px' }}>
              (Min: $10)
            </span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.2)',
                color: '#ffffff',
                fontSize: '16px'
              }}
            />
            <span style={{ 
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#a0aec0'
            }}>
              USD
            </span>
          </div>
        </div>

        {/* Estimated Output */}
        <div style={{
          padding: '16px',
          borderRadius: '8px',
          background: 'rgba(0,255,157,0.1)',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#a0aec0' }}>You'll receive approximately:</span>
            <span style={{ color: '#ffffff' }}>
              {amount ? (Number(amount) / Number(popularCryptos.find(c => c.symbol === selectedCrypto)?.price.replace(',', ''))).toFixed(8) : '0'} {selectedCrypto}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#a0aec0' }}>Fee:</span>
            <span style={{ color: '#ffffff' }}>$0.99</span>
          </div>
        </div>

        {/* Buy Button */}
        <button
          onClick={handleQuickBuy}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '8px',
            border: 'none',
            background: '#00ff9d',
            color: '#1a1a1a',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Buy {selectedCrypto}
        </button>

        {/* Help Text */}
        <div style={{ 
          marginTop: '24px',
          padding: '16px',
          borderRadius: '8px',
          background: 'rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <HelpOutlineIcon style={{ color: '#00ff9d' }} />
            <span style={{ color: '#ffffff' }}>New to crypto?</span>
          </div>
          <p style={{ color: '#a0aec0', margin: '12px 0 0 0' }}>
            Try our Practice Mode first to get comfortable with trading without risking real money.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuickTrade;
