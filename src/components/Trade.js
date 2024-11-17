import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants } from '../animations';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Trade = () => {
  const [orderType, setOrderType] = useState('limit'); // market, limit, stop
  const [side, setSide] = useState('buy'); // buy, sell
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tradingPairs = [
    { pair: 'BTC/USDT', price: '45,230.50', change: '+2.3%' },
    { pair: 'ETH/USDT', price: '2,340.75', change: '+1.8%' },
    { pair: 'SOL/USDT', price: '123.45', change: '+4.2%' },
    { pair: 'BNB/USDT', price: '345.67', change: '-1.2%' },
    { pair: 'XRP/USDT', price: '0.5678', change: '+0.8%' }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 300px',
        gap: '20px',
        maxWidth: '100%'
      }}
    >
      {/* Chart and Order Book Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',
        minWidth: 0 // Prevent overflow on mobile
      }}>
        {/* Trading Chart */}
        <motion.div
          variants={cardVariants}
          style={{
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            padding: isMobile ? '16px' : '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            height: isMobile ? '300px' : '400px'
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '0',
            justifyContent: 'space-between', 
            marginBottom: '20px' 
          }}>
            <div>
              <h2 style={{ color: '#00ff9d', margin: '0 0 8px 0' }}>{selectedPair}</h2>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>
                  ${tradingPairs.find(p => p.pair === selectedPair)?.price}
                </span>
                <span style={{ color: '#00ff9d', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUpIcon />
                  {tradingPairs.find(p => p.pair === selectedPair)?.change}
                </span>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '8px',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}>
              {['1m', '5m', '15m', '1h', '4h', '1d'].map((interval) => (
                <button
                  key={interval}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.2)',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  {interval}
                </button>
              ))}
            </div>
          </div>
          <div style={{ 
            height: '300px', 
            background: 'rgba(0,0,0,0.2)', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a0aec0'
          }}>
            Trading Chart Coming Soon
          </div>
        </motion.div>

        {/* Order Book - Hide on mobile when chart is visible */}
        {!isMobile && (
          <motion.div
            variants={cardVariants}
            style={{
              background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <h3 style={{ color: '#00ff9d', margin: '0 0 16px 0' }}>Order Book</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Asks */}
              <div>
                <div style={{ color: '#ff4d4d', marginBottom: '8px' }}>Sells</div>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '4px 0',
                      color: '#ff4d4d'
                    }}
                  >
                    <span>45,${(230.50 + (i * 10)).toFixed(2)}</span>
                    <span>0.${(Math.random() * 100).toFixed(4)} BTC</span>
                  </div>
                ))}
              </div>
              {/* Bids */}
              <div>
                <div style={{ color: '#00ff9d', marginBottom: '8px' }}>Buys</div>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '4px 0',
                      color: '#00ff9d'
                    }}
                  >
                    <span>45,${(220.50 - (i * 10)).toFixed(2)}</span>
                    <span>0.${(Math.random() * 100).toFixed(4)} BTC</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Trading Interface */}
      <motion.div
        variants={cardVariants}
        style={{
          background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
          padding: isMobile ? '16px' : '24px',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
          height: 'fit-content',
          order: isMobile ? -1 : 0 // Move to top on mobile
        }}
      >
        {/* Order Type Selection */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            marginBottom: '16px'
          }}>
            {['market', 'limit', 'stop'].map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                style={{
                  padding: '8px',
                  borderRadius: '6px',
                  border: 'none',
                  background: orderType === type ? '#00ff9d' : 'rgba(0,0,0,0.2)',
                  color: orderType === type ? '#1a1a1a' : '#ffffff',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {type}
              </button>
            ))}
          </div>
          
          {/* Buy/Sell Toggle */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '8px'
          }}>
            {['buy', 'sell'].map((action) => (
              <button
                key={action}
                onClick={() => setSide(action)}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: side === action 
                    ? action === 'buy' ? '#00ff9d' : '#ff4d4d'
                    : 'rgba(0,0,0,0.2)',
                  color: side === action ? '#1a1a1a' : '#ffffff',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Price Input */}
        {orderType !== 'market' && (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#ffffff', display: 'block', marginBottom: '8px' }}>
              Price
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                placeholder="0.00"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.2)',
                  color: '#ffffff'
                }}
              />
              <span style={{ 
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a0aec0'
              }}>
                USDT
              </span>
            </div>
          </div>
        )}

        {/* Amount Input */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: '#ffffff', display: 'block', marginBottom: '8px' }}>
            Amount
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="number"
              placeholder="0.00"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.2)',
                color: '#ffffff'
              }}
            />
            <span style={{ 
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#a0aec0'
            }}>
              BTC
            </span>
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {['25%', '50%', '75%', '100%'].map((percent) => (
            <button
              key={percent}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.2)',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {percent}
            </button>
          ))}
        </div>

        {/* Place Order Button */}
        <button
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '8px',
            border: 'none',
            background: side === 'buy' ? '#00ff9d' : '#ff4d4d',
            color: '#1a1a1a',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          {side} {selectedPair.split('/')[0]}
        </button>

        {/* Available Balance */}
        <div style={{ 
          marginTop: '16px',
          padding: '12px',
          borderRadius: '6px',
          background: 'rgba(0,0,0,0.2)',
          color: '#a0aec0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Available:</span>
            <span>2.5 BTC ≈ $113,076.25</span>
          </div>
        </div>
      </motion.div>

      {/* Order Book - Show below trading interface on mobile */}
      {isMobile && (
        <motion.div
          variants={cardVariants}
          style={{
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            order: 1
          }}
        >
          <h3 style={{ color: '#00ff9d', margin: '0 0 16px 0' }}>Order Book</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Asks */}
            <div>
              <div style={{ color: '#ff4d4d', marginBottom: '8px' }}>Sells</div>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '4px 0',
                    color: '#ff4d4d'
                  }}
                >
                  <span>45,${(230.50 + (i * 10)).toFixed(2)}</span>
                  <span>0.${(Math.random() * 100).toFixed(4)} BTC</span>
                </div>
              ))}
            </div>
            {/* Bids */}
            <div>
              <div style={{ color: '#00ff9d', marginBottom: '8px' }}>Buys</div>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '4px 0',
                    color: '#00ff9d'
                  }}
                >
                  <span>45,${(220.50 - (i * 10)).toFixed(2)}</span>
                  <span>0.${(Math.random() * 100).toFixed(4)} BTC</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Trade;
