import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    text: '#1f2937',
    lightText: '#6b7280',
    background: '#ffffff',
    card: '#ffffff',
    sectionBg: '#f3f4f6',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
  }

  .app {
    position: relative;
    z-index: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .section-subtitle {
    text-align: center;
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  @keyframes gradientPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.5); opacity: 0.8; }
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2.5rem;
    }
    
    .section-subtitle {
      font-size: 1.1rem;
    }
  }
`;
