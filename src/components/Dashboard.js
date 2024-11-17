import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants, containerVariants, listItemVariants } from '../animations';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TimelineIcon from '@mui/icons-material/Timeline';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const DashboardTitle = styled.h1`
  font-family: 'Orbitron', sans-serif;
  color: #00ff9d;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
  letter-spacing: 2px;
`;

const StatValue = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: ${props => props.large ? '1.8rem' : '1.1rem'};
  color: ${props => props.color || '#00ff9d'};
  margin: 0.5rem 0;
  letter-spacing: 1.5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatLabel = styled.div`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.9rem;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 0.25rem;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${StatLabel} {
    margin: 0;
    min-width: 45px;
  }
  
  ${StatValue} {
    margin: 0;
    font-size: 1rem;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: #00ff9d;
    font-size: 24px;
  }
`;

const Card = styled(motion.div)`
  background: #2d2d2d;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-width: 0;
  
  &:hover {
    border-color: rgba(0, 255, 157, 0.3);
    box-shadow: 0 6px 12px rgba(0, 255, 157, 0.1);
  }
`;

const ListItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
  }
`;

const Dashboard = () => {
  const portfolioStats = {
    totalBalance: '25,468.32',
    dailyChange: '+5.23',
    monthlyChange: '+12.45',
    topPerformer: 'BTC',
    topPerformerChange: '+8.32'
  };

  const marketStats = {
    btcDominance: '42.5',
    globalMarketCap: '2.1T',
    dailyVolume: '125.4B',
    fearGreedIndex: '65'
  };

  const topGainers = [
    { coin: 'SOL', price: '123.45', change: '+15.23%' },
    { coin: 'MATIC', price: '1.23', change: '+12.34%' },
    { coin: 'DOT', price: '8.45', change: '+10.56%' }
  ];

  const topLosers = [
    { coin: 'DOGE', price: '0.078', change: '-8.45%' },
    { coin: 'SHIB', price: '0.00002345', change: '-7.23%' },
    { coin: 'ADA', price: '0.45', change: '-5.67%' }
  ];

  const recentTransactions = [
    { type: 'buy', coin: 'BTC', amount: '0.025', price: '42,830.50', time: '2h ago' },
    { type: 'sell', coin: 'ETH', amount: '1.5', price: '2,280.75', time: '5h ago' },
    { type: 'buy', coin: 'SOL', amount: '10', price: '123.45', time: '1d ago' }
  ];

  const newsUpdates = [
    { title: 'Bitcoin Surges Past $45K as Market Sentiment Improves', time: '1h ago', source: 'CryptoNews' },
    { title: 'New DeFi Protocol Launches with $100M TVL', time: '3h ago', source: 'DeFiPulse' },
    { title: 'Major Bank Announces Crypto Custody Service', time: '5h ago', source: 'CoinDesk' }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '20px'
      }}
    >
      {/* Portfolio Overview */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        <Card
          variants={cardVariants}
          whileHover="hover"
        >
          <CardTitle>
            <AccountBalanceWalletIcon />
            Total Balance
          </CardTitle>
          <StatValue large>${portfolioStats.totalBalance}</StatValue>
          <StatContainer>
            <StatRow>
              <StatLabel>24h:</StatLabel>
              <StatValue color={portfolioStats.dailyChange.startsWith('+') ? '#00ff9d' : '#ff4d4d'}>
                {portfolioStats.dailyChange}%
              </StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>30d:</StatLabel>
              <StatValue color={portfolioStats.monthlyChange.startsWith('+') ? '#00ff9d' : '#ff4d4d'}>
                {portfolioStats.monthlyChange}%
              </StatValue>
            </StatRow>
          </StatContainer>
        </Card>

        <Card
          variants={cardVariants}
          whileHover="hover"
        >
          <CardTitle>
            <ShowChartIcon />
            Market Overview
          </CardTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <StatLabel>BTC Dominance:</StatLabel>
              <StatValue>{marketStats.btcDominance}%</StatValue>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <StatLabel>Global Market Cap:</StatLabel>
              <StatValue>${marketStats.globalMarketCap}</StatValue>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <StatLabel>24h Volume:</StatLabel>
              <StatValue>${marketStats.dailyVolume}</StatValue>
            </div>
          </div>
        </Card>

        <Card
          variants={cardVariants}
          whileHover="hover"
        >
          <CardTitle>
            <CurrencyBitcoinIcon />
            Top Performer
          </CardTitle>
          <StatValue large>{portfolioStats.topPerformer}</StatValue>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUpIcon style={{ color: '#00ff9d' }} />
            <StatValue>{portfolioStats.topPerformerChange}%</StatValue>
          </div>
        </Card>

        <Card
          variants={cardVariants}
          whileHover="hover"
        >
          <CardTitle>
            <TimelineIcon />
            Fear & Greed
          </CardTitle>
          <StatValue large>{marketStats.fearGreedIndex}</StatValue>
          <StatLabel>Greed</StatLabel>
        </Card>
      </motion.div>

      {/* Market Movers and Recent Activity */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px'
      }}>
        {/* Market Movers */}
        <Card
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <CardTitle>Market Movers</CardTitle>
          
          {/* Top Gainers */}
          <div style={{ marginBottom: '24px' }}>
            <StatLabel>Top Gainers</StatLabel>
            {topGainers.map((coin, index) => (
              <ListItem
                key={coin.coin}
                variants={listItemVariants}
                whileHover="hover"
              >
                <span style={{ fontWeight: '500' }}>{coin.coin}</span>
                <span>${coin.price}</span>
                <span style={{ color: '#00ff9d' }}>{coin.change}</span>
              </ListItem>
            ))}
          </div>

          {/* Top Losers */}
          <div>
            <StatLabel>Top Losers</StatLabel>
            {topLosers.map((coin, index) => (
              <ListItem
                key={coin.coin}
                variants={listItemVariants}
                whileHover="hover"
              >
                <span style={{ fontWeight: '500' }}>{coin.coin}</span>
                <span>${coin.price}</span>
                <span style={{ color: '#ff4d4d' }}>{coin.change}</span>
              </ListItem>
            ))}
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <CardTitle>Recent Transactions</CardTitle>
          {recentTransactions.map((tx, index) => (
            <ListItem
              key={index}
              variants={listItemVariants}
              whileHover="hover"
            >
              <div>
                <span style={{ 
                  color: tx.type === 'buy' ? '#00ff9d' : '#ff4d4d',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginRight: '8px'
                }}>
                  {tx.type}
                </span>
                <span style={{ fontWeight: '500' }}>{tx.coin}</span>
              </div>
              <div style={{ color: '#a0aec0', fontSize: '14px' }}>
                {tx.amount} @ ${tx.price}
              </div>
              <div style={{ color: '#a0aec0', fontSize: '14px' }}>{tx.time}</div>
            </ListItem>
          ))}
        </Card>

        {/* News Updates */}
        <Card
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <NewspaperIcon style={{ color: '#00ff9d', fontSize: '24px' }} />
            <CardTitle>Latest News</CardTitle>
          </div>
          {newsUpdates.map((news, index) => (
            <ListItem
              key={index}
              variants={listItemVariants}
              whileHover="hover"
            >
              <h4 style={{ color: '#ffffff', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>{news.title}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0aec0', fontSize: '12px' }}>
                <span>{news.source}</span>
                <span>{news.time}</span>
              </div>
            </ListItem>
          ))}
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
