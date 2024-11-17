import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/globalStyles.css';
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarIcon from '@mui/icons-material/Star';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PaidIcon from '@mui/icons-material/Paid';
import Dashboard from './components/Dashboard';
import Markets from './components/Markets';
import Portfolio from './components/Portfolio';
import Favorites from './components/Favorites';
import News from './components/News';
import Settings from './components/Settings';
import Learn from './components/Learn';
import QuickTrade from './components/QuickTrade';
import Trade from './components/Trade';
import AIBots from './components/AIBots';

const AppTitle = styled.h1`
  color: #00ff9d;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
  padding: 6px 0;
`;

const MenuItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 14px 24px;
  cursor: pointer;
  font-family: 'Chakra Petch', sans-serif;
  letter-spacing: 0.5px;
  margin: 4px 0;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.active ? 'rgba(0, 255, 157, 0.15)' : 'transparent'};
  border-right: ${props => props.active ? '3px solid #00ff9d' : '3px solid transparent'};
  
  &:hover {
    background-color: ${props => props.active ? 'rgba(0, 255, 157, 0.15)' : 'rgba(0, 255, 157, 0.1)'};
  }
`;

const MenuText = styled.span`
  margin-left: 16px;
  font-size: 1rem;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 1px;
  color: ${props => props.active ? '#00ff9d' : '#ffffff'};
  transition: color 0.2s ease;
`;

const SidebarContainer = styled(motion.aside)`
  background-color: #1a1a1a;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: ${props => props.isMobile ? '240px' : '280px'};
  overflow-y: auto;
  padding-top: ${props => props.isMobile ? '16px' : '0'};
`;

const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: #00ff9d;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
  }
  
  svg {
    font-size: 20px;
  }
`;

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    neonGreen: '#00ff9d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    border: 'rgba(255,255,255,0.1)'
  };

  const handleMenuClick = (menuId) => {
    setActiveMenuItem(menuId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      color: '#ffffff'
    }}>
      <div style={{ 
        marginLeft: sidebarOpen && !isMobile ? '280px' : '0',
        transition: 'margin-left 0.3s ease'
      }}>
        {/* Header */}
        {isMobile && (
          <Header
            initial={false}
            animate={{ y: isHeaderVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
          >
            <MenuButton onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? (
                <CloseIcon style={{ fontSize: '24px' }} />
              ) : (
                <MenuIcon style={{ fontSize: '24px' }} />
              )}
            </MenuButton>

            <AppTitle>CryptoPlace</AppTitle>

            <div style={{ width: '40px' }} />
          </Header>
        )}

        {/* Sidebar */}
        <SidebarContainer
          initial={false}
          animate={{
            x: sidebarOpen ? 0 : -240,
            boxShadow: sidebarOpen && isMobile ? '2px 0 8px rgba(0,0,0,0.2)' : 'none'
          }}
          isMobile={isMobile}
        >
          {/* Logo - Only show on desktop */}
          {!isMobile && (
            <div style={{ 
              padding: '24px',
              borderBottom: `1px solid ${colors.border}`
            }}>
              <AppTitle>CryptoPlace</AppTitle>
            </div>
          )}

          {/* Navigation */}
          <nav style={{ padding: isMobile ? '12px 0' : '24px 0' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
              { id: 'markets', label: 'Markets', icon: <ShowChartIcon /> },
              { id: 'portfolio', label: 'Portfolio', icon: <AccountBalanceWalletIcon /> },
              { id: 'quicktrade', label: 'Quick Trade', icon: <PaidIcon /> },
              { id: 'trade', label: 'Trade', icon: <CandlestickChartIcon /> },
              { id: 'aibots', label: 'AI Bots', icon: <SmartToyIcon /> },
              { id: 'learn', label: 'Learn', icon: <SchoolIcon /> },
              { id: 'favorites', label: 'Favorites', icon: <StarIcon /> },
              { id: 'news', label: 'News', icon: <NewspaperIcon /> },
              { id: 'settings', label: 'Settings', icon: <SettingsIcon /> }
            ].map((item) => (
              <MenuItem
                key={item.id}
                active={activeMenuItem === item.id}
                onClick={() => handleMenuClick(item.id)}
              >
                <span style={{ 
                  color: activeMenuItem === item.id ? '#00ff9d' : '#a0aec0',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease'
                }}>
                  {item.icon}
                </span>
                <MenuText active={activeMenuItem === item.id}>{item.label}</MenuText>
              </MenuItem>
            ))}
          </nav>
        </SidebarContainer>

        {/* Overlay for mobile */}
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 90
            }}
          />
        )}

        {/* Main Content */}
        <main style={{ 
          padding: '24px',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          <AnimatePresence mode="wait">
            {activeMenuItem === 'dashboard' && <Dashboard />}
            {activeMenuItem === 'markets' && <Markets />}
            {activeMenuItem === 'portfolio' && <Portfolio />}
            {activeMenuItem === 'favorites' && <Favorites />}
            {activeMenuItem === 'news' && <News />}
            {activeMenuItem === 'settings' && <Settings />}
            {activeMenuItem === 'learn' && <Learn />}
            {activeMenuItem === 'quicktrade' && <QuickTrade />}
            {activeMenuItem === 'trade' && <Trade />}
            {activeMenuItem === 'aibots' && <AIBots />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
