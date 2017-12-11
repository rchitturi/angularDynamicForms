/**
 * Created by philip on 4/21/17.
 */
module.exports = {
  PROJECT: 'ACO-MS',
  API_VS: 1,
  production: {
    API_URL: 'https://prod.domain.com',
    API_PREFIX: '/api/service',
    DB: {
      host: '',
      username: '',
      password: ''
    }
  },
  qa: {
    API_URL: 'https://qa.domain.com',
    API_PREFIX: '/api/service',
    DB: {
      host: '',
      username: '',
      password: ''
    }
  },
  development: {
    API_URL: 'http://localhost:3000',
    API_PREFIX: '/local/service',
    DB: {
      host: '',
      username: '',
      password: ''
    }
  }
};
