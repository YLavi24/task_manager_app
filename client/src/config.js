const config = {
  API_BASE_URL: process.env.REACT_APP_API_URL || 'https://taskmanagerapp-production.up.railway.app'
};

// Debug log to see what URL is being used
console.log('API_BASE_URL:', config.API_BASE_URL);
console.log('REACT_APP_API_URL env var:', process.env.REACT_APP_API_URL);

export default config;