import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function News() {
  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    neonGreen: '#00ff9d',
    border: '#404040'
  };

  const newsItems = [
    {
      title: 'Bitcoin Surges Past $42,000 as Institutional Interest Grows',
      source: 'CryptoNews',
      time: '2 hours ago',
      category: 'Bitcoin',
      snippet: 'The leading cryptocurrency continues its bullish momentum as major financial institutions increase their crypto holdings...'
    },
    {
      title: 'Ethereum Layer 2 Solutions See Record Growth in TVL',
      source: 'DeFi Daily',
      time: '4 hours ago',
      category: 'Ethereum',
      snippet: 'Layer 2 scaling solutions for Ethereum have reached a new milestone in Total Value Locked (TVL) as adoption increases...'
    },
    {
      title: 'New Regulatory Framework Proposed for Cryptocurrency Markets',
      source: 'Crypto Insider',
      time: '6 hours ago',
      category: 'Regulation',
      snippet: 'Government officials have proposed new guidelines for cryptocurrency trading and custody services...'
    },
    {
      title: 'Solana Network Achieves New Transaction Speed Record',
      source: 'Blockchain Times',
      time: '8 hours ago',
      category: 'Solana',
      snippet: 'The Solana blockchain has set a new record for transaction processing speed, handling over 100,000 transactions per second...'
    }
  ];

  return (
    <div>
      <h2 style={{ color: colors.text, marginBottom: '24px' }}>Crypto News</h2>
      
      {/* News Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {newsItems.map((news, index) => (
          <div key={index} style={{
            backgroundColor: colors.cardBg,
            borderRadius: '12px',
            padding: '20px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)'
            }
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ 
                backgroundColor: 'rgba(0, 255, 157, 0.1)',
                color: colors.neonGreen,
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                {news.category}
              </div>
              <div style={{ color: colors.textSecondary, fontSize: '14px' }}>
                {news.time}
              </div>
            </div>
            
            <h3 style={{ 
              color: colors.text,
              marginBottom: '12px',
              fontSize: '18px',
              fontWeight: '500',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              {news.title}
              <OpenInNewIcon style={{ fontSize: '16px', color: colors.textSecondary }} />
            </h3>
            
            <p style={{ 
              color: colors.textSecondary,
              marginBottom: '12px',
              lineHeight: '1.5'
            }}>
              {news.snippet}
            </p>
            
            <div style={{ 
              color: colors.textSecondary,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <NewspaperIcon style={{ fontSize: '16px' }} />
              {news.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
