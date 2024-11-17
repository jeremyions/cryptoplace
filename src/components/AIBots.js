import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, cardVariants } from '../animations';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BarChartIcon from '@mui/icons-material/BarChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import TimelineIcon from '@mui/icons-material/Timeline';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const AIBots = () => {
  const [selectedBot, setSelectedBot] = useState(null);

  const bots = [
    {
      id: 'trend-surfer',
      name: 'Trend Surfer',
      icon: <ShowChartIcon />,
      description: 'Rides market trends using advanced momentum indicators',
      strategy: 'Uses multiple timeframe analysis to identify and follow strong market trends',
      riskLevel: 'Medium',
      minInvestment: '$1,000',
      timeHorizon: '3-14 days',
      features: [
        'Dynamic trend detection',
        'Automatic position sizing',
        'Multiple timeframe analysis',
        'Stop-loss optimization'
      ],
      performance: {
        monthlyReturn: '+8.2%',
        winRate: '62%',
        maxDrawdown: '-15%',
        sharpeRatio: '1.8'
      },
      bestFor: 'Traders who want to capture medium to long-term market movements'
    },
    {
      id: 'grid-master',
      name: 'Grid Master',
      icon: <AutoGraphIcon />,
      description: 'Creates a grid of buy/sell orders to profit from price oscillations',
      strategy: 'Places multiple orders above and below the current price to catch all movements',
      riskLevel: 'Low',
      minInvestment: '$500',
      timeHorizon: '1-7 days',
      features: [
        'Automatic grid adjustment',
        'Custom grid spacing',
        'Profit lock-in system',
        'Dynamic order sizing'
      ],
      performance: {
        monthlyReturn: '+5.4%',
        winRate: '78%',
        maxDrawdown: '-8%',
        sharpeRatio: '2.1'
      },
      bestFor: 'Conservative traders who prefer steady, smaller gains'
    },
    {
      id: 'volatility-hunter',
      name: 'Volatility Hunter',
      icon: <TimelineIcon />,
      description: 'Capitalizes on high volatility periods using statistical analysis',
      strategy: 'Identifies and exploits periods of high market volatility',
      riskLevel: 'High',
      minInvestment: '$2,000',
      timeHorizon: '1-3 days',
      features: [
        'Volatility prediction',
        'Risk-adjusted position sizing',
        'Quick profit taking',
        'Advanced risk management'
      ],
      performance: {
        monthlyReturn: '+12.5%',
        winRate: '55%',
        maxDrawdown: '-22%',
        sharpeRatio: '1.6'
      },
      bestFor: 'Aggressive traders comfortable with higher risk for higher returns'
    },
    {
      id: 'pattern-prophet',
      name: 'Pattern Prophet',
      icon: <QueryStatsIcon />,
      description: 'Uses AI to identify and trade chart patterns',
      strategy: 'Machine learning model trained on millions of historical chart patterns',
      riskLevel: 'Medium-High',
      minInvestment: '$1,500',
      timeHorizon: '2-5 days',
      features: [
        'Real-time pattern recognition',
        'Probability-based entries',
        'Pattern strength scoring',
        'Multi-pattern analysis'
      ],
      performance: {
        monthlyReturn: '+9.8%',
        winRate: '58%',
        maxDrawdown: '-18%',
        sharpeRatio: '1.7'
      },
      bestFor: 'Technical traders who believe in chart pattern trading'
    },
    {
      id: 'sentiment-sage',
      name: 'Sentiment Sage',
      icon: <SsidChartIcon />,
      description: 'Trades based on market sentiment and news analysis',
      strategy: 'Analyzes social media, news, and market sentiment to predict price movements',
      riskLevel: 'Medium',
      minInvestment: '$1,000',
      timeHorizon: '1-5 days',
      features: [
        'Real-time sentiment analysis',
        'News impact prediction',
        'Social media monitoring',
        'Sentiment trend detection'
      ],
      performance: {
        monthlyReturn: '+7.6%',
        winRate: '64%',
        maxDrawdown: '-14%',
        sharpeRatio: '1.9'
      },
      bestFor: 'Traders who believe in the impact of market sentiment and news'
    },
    {
      id: 'arbitrage-ace',
      name: 'Arbitrage Ace',
      icon: <MonetizationOnIcon />,
      description: 'Profits from price differences across exchanges',
      strategy: 'Monitors multiple exchanges to find and exploit price discrepancies',
      riskLevel: 'Low',
      minInvestment: '$3,000',
      timeHorizon: 'Minutes to hours',
      features: [
        'Multi-exchange monitoring',
        'Instant execution',
        'Fee optimization',
        'Smart routing'
      ],
      performance: {
        monthlyReturn: '+4.2%',
        winRate: '85%',
        maxDrawdown: '-5%',
        sharpeRatio: '2.4'
      },
      bestFor: 'Traders looking for very low-risk, consistent returns'
    }
  ];

  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    neonGreen: '#00ff9d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    border: 'rgba(255,255,255,0.1)'
  };

  const riskColors = {
    'Low': '#00ff9d',
    'Medium': '#ffb300',
    'Medium-High': '#ff9100',
    'High': '#ff5252'
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        padding: '20px',
        maxWidth: '100%',
        color: colors.text
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          color: colors.neonGreen,
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <SmartToyIcon style={{ fontSize: '32px' }} />
          AI Trading Bots
        </h1>
        <p style={{ color: colors.textSecondary }}>
          Advanced AI-powered trading bots with different strategies and risk levels
        </p>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {bots.map((bot) => (
          <motion.div
            key={bot.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            style={{
              background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
              padding: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => setSelectedBot(selectedBot === bot.id ? null : bot.id)}
          >
            {/* Bot Header */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                backgroundColor: 'rgba(0, 255, 157, 0.1)',
                borderRadius: '8px',
                padding: '8px',
                color: colors.neonGreen
              }}>
                {bot.icon}
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0' }}>{bot.name}</h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    backgroundColor: riskColors[bot.riskLevel],
                    color: '#000000',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {bot.riskLevel} Risk
                  </span>
                  <span style={{ 
                    color: colors.textSecondary,
                    fontSize: '12px'
                  }}>
                    Min: {bot.minInvestment}
                  </span>
                </div>
              </div>
            </div>

            {/* Bot Description */}
            <p style={{ 
              color: colors.textSecondary,
              marginBottom: '16px',
              fontSize: '14px'
            }}>
              {bot.description}
            </p>

            {/* Performance Metrics */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '16px'
            }}>
              {Object.entries(bot.performance).map(([key, value]) => (
                <div key={key}>
                  <div style={{ 
                    fontSize: '12px',
                    color: colors.textSecondary,
                    marginBottom: '4px'
                  }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div style={{ 
                    fontSize: '16px',
                    color: value.startsWith('+') ? colors.neonGreen : colors.text
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded Details */}
            {selectedBot === bot.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ 
                  borderTop: `1px solid ${colors.border}`,
                  paddingTop: '16px',
                  marginTop: '16px'
                }}>
                  {/* Strategy */}
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ 
                      color: colors.neonGreen,
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <AutoGraphIcon style={{ fontSize: '20px' }} />
                      Strategy
                    </h4>
                    <p style={{ 
                      color: colors.textSecondary,
                      fontSize: '14px'
                    }}>
                      {bot.strategy}
                    </p>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ 
                      color: colors.neonGreen,
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <InfoOutlinedIcon style={{ fontSize: '20px' }} />
                      Key Features
                    </h4>
                    <ul style={{ 
                      margin: 0,
                      padding: 0,
                      listStyle: 'none'
                    }}>
                      {bot.features.map((feature, index) => (
                        <li
                          key={index}
                          style={{
                            color: colors.textSecondary,
                            fontSize: '14px',
                            marginBottom: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <span style={{ color: colors.neonGreen }}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 style={{ 
                      color: colors.neonGreen,
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <PriceCheckIcon style={{ fontSize: '20px' }} />
                      Best For
                    </h4>
                    <p style={{ 
                      color: colors.textSecondary,
                      fontSize: '14px',
                      margin: 0
                    }}>
                      {bot.bestFor}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIBots;
