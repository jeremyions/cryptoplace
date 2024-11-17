import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Settings() {
  const colors = {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#a0aec0',
    neonGreen: '#00ff9d',
    border: '#404040'
  };

  const settingsSections = [
    {
      title: 'Profile',
      icon: <AccountCircleIcon />,
      settings: [
        { name: 'Email', value: 'user@example.com' },
        { name: 'Username', value: 'cryptotrader' },
        { name: 'Time Zone', value: 'UTC-8' }
      ]
    },
    {
      title: 'Notifications',
      icon: <NotificationsIcon />,
      settings: [
        { name: 'Price Alerts', value: 'On' },
        { name: 'News Updates', value: 'Daily' },
        { name: 'Portfolio Updates', value: 'Weekly' }
      ]
    },
    {
      title: 'Security',
      icon: <SecurityIcon />,
      settings: [
        { name: '2FA', value: 'Enabled' },
        { name: 'Login History', value: 'View' },
        { name: 'Connected Devices', value: '2 Active' }
      ]
    },
    {
      title: 'Preferences',
      icon: <PaletteIcon />,
      settings: [
        { name: 'Theme', value: 'Dark' },
        { name: 'Currency', value: 'USD' },
        { name: 'Language', value: 'English' }
      ]
    }
  ];

  return (
    <div>
      <h2 style={{ color: colors.text, marginBottom: '24px' }}>Settings</h2>
      
      {/* Settings Sections */}
      <div style={{ display: 'grid', gap: '24px' }}>
        {settingsSections.map((section, index) => (
          <div key={index} style={{
            backgroundColor: colors.cardBg,
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '20px',
              borderBottom: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ color: colors.neonGreen }}>
                {section.icon}
              </span>
              <h3 style={{ 
                color: colors.text,
                margin: 0,
                fontSize: '18px',
                fontWeight: '500'
              }}>
                {section.title}
              </h3>
            </div>

            <div style={{ padding: '20px' }}>
              {section.settings.map((setting, settingIndex) => (
                <div key={settingIndex} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: settingIndex !== section.settings.length - 1 ? `1px solid ${colors.border}` : 'none'
                }}>
                  <div style={{ color: colors.textSecondary }}>
                    {setting.name}
                  </div>
                  <div style={{ 
                    color: colors.text,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {setting.value}
                    {setting.value === 'View' && (
                      <span style={{
                        fontSize: '12px',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(0, 255, 157, 0.1)',
                        color: colors.neonGreen,
                        borderRadius: '4px'
                      }}>
                        →
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
