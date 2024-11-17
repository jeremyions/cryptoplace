import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants, containerVariants } from '../animations';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Portfolio = () => {
  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    neonGreen: '#00ff9d',
    border: '#404040'
  };

  const portfolioValue = {
    total: '127,834.50',
    change: '+12.34',
    holdings: [
      { coin: 'Bitcoin', symbol: 'BTC', amount: '1.23', value: '52,681.52', change: '+2.34' },
      { coin: 'Ethereum', symbol: 'ETH', amount: '15.5', value: '35,351.63', change: '+1.82' },
      { coin: 'Solana', symbol: 'SOL', amount: '245.8', value: '24,247.70', change: '+5.67' },
      { coin: 'Cardano', symbol: 'ADA', amount: '10,234', value: '15,553.65', change: '-0.54' },
    ]
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 style={{ color: colors.text, marginBottom: '24px' }}>Portfolio</h2>
      
      {/* Portfolio Overview Card */}
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={{
          background: colors.cardBg,
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <AccountBalanceWalletIcon style={{ color: colors.neonGreen, fontSize: '28px' }} />
          <div>
            <div style={{ color: colors.textSecondary }}>Total Balance</div>
            <div style={{ 
              color: colors.text,
              fontSize: '24px',
              fontWeight: '500'
            }}>${portfolioValue.total}</div>
          </div>
          <div style={{ 
            marginLeft: 'auto',
            color: portfolioValue.change.startsWith('+') ? colors.neonGreen : '#ff4d4d',
            fontSize: '18px'
          }}>
            {portfolioValue.change}%
          </div>
        </div>
      </motion.div>

      {/* Holdings Table */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          background: colors.cardBg,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
              <th style={{ padding: '16px', color: colors.textSecondary, textAlign: 'left' }}>Asset</th>
              <th style={{ padding: '16px', color: colors.textSecondary, textAlign: 'right' }}>Holdings</th>
              <th style={{ padding: '16px', color: colors.textSecondary, textAlign: 'right' }}>Value</th>
              <th style={{ padding: '16px', color: colors.textSecondary, textAlign: 'right' }}>24h</th>
            </tr>
          </thead>
          <tbody>
            {portfolioValue.holdings.map((holding, index) => (
              <motion.tr
                key={index}
                variants={cardVariants}
                whileHover="hover"
                style={{ 
                  borderBottom: `1px solid ${colors.border}`,
                  background: index % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent',
                }}
              >
                <td style={{ padding: '16px', color: colors.text }}>
                  <div style={{ fontWeight: '500' }}>{holding.coin}</div>
                  <div style={{ color: colors.textSecondary, fontSize: '14px' }}>{holding.symbol}</div>
                </td>
                <td style={{ padding: '16px', color: colors.text, textAlign: 'right' }}>
                  {holding.amount}
                </td>
                <td style={{ padding: '16px', color: colors.text, textAlign: 'right' }}>
                  ${holding.value}
                </td>
                <td style={{ 
                  padding: '16px', 
                  color: holding.change.startsWith('+') ? colors.neonGreen : '#ff4d4d',
                  textAlign: 'right'
                }}>
                  {holding.change}%
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
