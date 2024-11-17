import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants } from '../animations';
import SchoolIcon from '@mui/icons-material/School';
import WarningIcon from '@mui/icons-material/Warning';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Learn = () => {
  const basicConcepts = [
    {
      title: "What is Cryptocurrency?",
      content: "Digital or virtual currency that uses cryptography for security. Bitcoin is the most well-known example.",
      icon: <MenuBookIcon />
    },
    {
      title: "Understanding Blockchain",
      content: "A decentralized ledger that records all transactions across a network of computers.",
      icon: <SchoolIcon />
    },
    {
      title: "Key Trading Terms",
      content: "Market Order: Instant buy/sell at current price. Limit Order: Buy/sell at specific price.",
      icon: <TipsAndUpdatesIcon />
    }
  ];

  const safetyTips = [
    "Never invest more than you can afford to lose",
    "Use strong passwords and enable 2FA",
    "Research before investing",
    "Start with small amounts",
    "Keep long-term perspective"
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        padding: '20px',
        maxWidth: '100%'
      }}
    >
      {/* Getting Started */}
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
        <h2 style={{ color: '#00ff9d', marginBottom: '20px' }}>Getting Started with Crypto</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {basicConcepts.map((concept, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(0,0,0,0.2)',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ color: '#00ff9d' }}>{concept.icon}</span>
                <h3 style={{ color: '#ffffff', margin: 0 }}>{concept.title}</h3>
              </div>
              <p style={{ color: '#a0aec0', margin: 0 }}>{concept.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Safety First */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <WarningIcon style={{ color: '#00ff9d' }} />
          <h2 style={{ color: '#00ff9d', margin: 0 }}>Safety First</h2>
        </div>
        <div style={{ display: 'grid', gap: '16px' }}>
          {safetyTips.map((tip, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '8px',
                color: '#ffffff'
              }}
            >
              <span style={{ color: '#00ff9d', fontSize: '20px' }}>•</span>
              {tip}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Practice Mode Banner */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        style={{
          background: 'linear-gradient(135deg, rgba(0,255,157,0.1) 0%, rgba(0,255,157,0.05) 100%)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #00ff9d',
          cursor: 'pointer',
          textAlign: 'center'
        }}
      >
        <h2 style={{ color: '#00ff9d', marginBottom: '12px' }}>Ready to Start?</h2>
        <p style={{ color: '#ffffff', marginBottom: '20px' }}>
          Try our Practice Mode with virtual money to get comfortable with trading!
        </p>
        <button
          style={{
            background: '#00ff9d',
            color: '#1a1a1a',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Start Practice Trading
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Learn;
