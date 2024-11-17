import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, buttonVariants, listItemVariants, containerVariants } from '../animations';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const Markets = () => {
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const filters = ['all', 'spot', 'futures'];
  
  const marketData = [
    { pair: 'BTC/USDT', price: '45,123.45', change: '+2.34%', volume: '1.2B', type: 'spot' },
    { pair: 'ETH/USDT', price: '3,456.78', change: '-1.23%', volume: '800M', type: 'spot' },
    { pair: 'BNB/USDT', price: '432.10', change: '+0.45%', volume: '400M', type: 'spot' },
    { pair: 'BTC/USDT-PERP', price: '45,223.45', change: '+2.12%', volume: '2.1B', type: 'futures' },
    { pair: 'ETH/USDT-PERP', price: '3,478.90', change: '-0.98%', volume: '1.5B', type: 'futures' },
  ];

  const filteredMarkets = filter === 'all' 
    ? marketData 
    : marketData.filter(market => market.type === filter);

  const toggleFavorite = (pair) => {
    setFavorites(prev => 
      prev.includes(pair) 
        ? prev.filter(p => p !== pair)
        : [...prev, pair]
    );
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Market Stats */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        <motion.div
          variants={listItemVariants}
          whileHover="hover"
          style={{
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <h3 style={{ color: '#00ff9d', marginBottom: '12px' }}>24h Volume</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$42.5B</p>
          <p style={{ color: '#00ff9d', fontSize: '14px' }}>+12.5%</p>
        </motion.div>

        <motion.div
          variants={listItemVariants}
          whileHover="hover"
          style={{
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <h3 style={{ color: '#00ff9d', marginBottom: '12px' }}>Market Cap</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$1.2T</p>
          <p style={{ color: '#ff4d4d', fontSize: '14px' }}>-2.3%</p>
        </motion.div>

        <motion.div
          variants={listItemVariants}
          whileHover="hover"
          style={{
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <h3 style={{ color: '#00ff9d', marginBottom: '12px' }}>Active Pairs</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>156</p>
          <p style={{ color: '#a0aec0', fontSize: '14px' }}>Across all markets</p>
        </motion.div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px'
        }}
      >
        {filters.map(filterOption => (
          <motion.button
            key={filterOption}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setFilter(filterOption)}
            style={{
              padding: '10px 20px',
              background: filter === filterOption 
                ? 'linear-gradient(135deg, #00ff9d 0%, #00cc7d 100%)'
                : 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
              color: filter === filterOption ? '#1a1a1a' : '#fff',
              border: filter === filterOption 
                ? 'none'
                : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontWeight: filter === filterOption ? 'bold' : 'normal',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              minWidth: '100px',
              fontSize: '14px'
            }}
          >
            {filterOption}
          </motion.button>
        ))}
      </motion.div>

      {/* Markets Table */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr 1fr 1fr',
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          fontWeight: 'bold',
          color: '#a0aec0',
          gap: '24px'
        }}>
          <div style={{ width: '40px' }}></div>
          <div>Pair</div>
          <div>Price</div>
          <div>24h Change</div>
          <div>Volume</div>
        </div>

        {/* Table Body */}
        <AnimatePresence mode="wait">
          {filteredMarkets.map((market, index) => (
            <motion.div
              key={market.pair}
              variants={listItemVariants}
              whileHover={{
                backgroundColor: 'rgba(0,255,157,0.05)',
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr 1fr 1fr',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                background: index % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent',
                cursor: 'pointer',
                gap: '24px',
                alignItems: 'center'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(market.pair);
                }}
                style={{ width: '40px' }}
              >
                {favorites.includes(market.pair) ? (
                  <StarIcon style={{ color: '#00ff9d', fontSize: '20px' }} />
                ) : (
                  <StarOutlineIcon style={{ color: '#a0aec0', fontSize: '20px' }} />
                )}
              </motion.div>
              <div style={{ 
                color: '#00ff9d',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500'
              }}>
                {market.pair}
                {market.type === 'futures' && (
                  <span style={{ 
                    fontSize: '12px',
                    padding: '2px 6px',
                    background: 'rgba(0,255,157,0.1)',
                    borderRadius: '4px',
                    color: '#00ff9d'
                  }}>
                    PERP
                  </span>
                )}
              </div>
              <div style={{ fontWeight: '500' }}>${market.price}</div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: market.change.startsWith('+') ? '#00ff9d' : '#ff4d4d',
                fontWeight: '500'
              }}>
                {market.change.startsWith('+') ? (
                  <TrendingUpIcon style={{ fontSize: '20px' }} />
                ) : (
                  <TrendingDownIcon style={{ fontSize: '20px' }} />
                )}
                {market.change}
              </div>
              <div style={{ color: '#a0aec0' }}>${market.volume}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Markets;
