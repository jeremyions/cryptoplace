import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function Favorites() {
  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    neonGreen: '#00ff9d',
    border: '#404040'
  };

  const favoriteCoins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '42,830.50', change: '+2.34', marketCap: '834.2B', starred: true },
    { name: 'Ethereum', symbol: 'ETH', price: '2,280.75', change: '+1.82', marketCap: '274.1B', starred: true },
    { name: 'Solana', symbol: 'SOL', price: '98.65', change: '+5.67', marketCap: '42.1B', starred: true },
  ];

  return (
    <div>
      <h2 style={{ color: colors.text, marginBottom: '24px' }}>Favorites</h2>
      
      {/* Favorites Grid */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {favoriteCoins.map((coin, index) => (
          <div key={index} style={{
            backgroundColor: colors.cardBg,
            borderRadius: '12px',
            padding: '20px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <div style={{ color: colors.text, fontSize: '18px', fontWeight: '500' }}>{coin.name}</div>
                <div style={{ color: colors.textSecondary }}>{coin.symbol}</div>
              </div>
              <StarIcon style={{ 
                color: coin.starred ? colors.neonGreen : colors.textSecondary,
                cursor: 'pointer'
              }} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ color: colors.textSecondary }}>Price</div>
              <div style={{ color: colors.text }}>${coin.price}</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ color: colors.textSecondary }}>24h Change</div>
              <div style={{ 
                color: coin.change.startsWith('+') ? colors.neonGreen : '#ff4d4d'
              }}>{coin.change}%</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ color: colors.textSecondary }}>Market Cap</div>
              <div style={{ color: colors.text }}>${coin.marketCap}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Favorite Button */}
      <button style={{
        backgroundColor: 'transparent',
        border: `1px dashed ${colors.border}`,
        color: colors.textSecondary,
        padding: '16px',
        borderRadius: '12px',
        width: '100%',
        cursor: 'pointer',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <StarIcon style={{ fontSize: '20px' }} />
        Add New Favorite
      </button>
    </div>
  );
}

export default Favorites;
