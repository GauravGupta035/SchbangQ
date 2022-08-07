const ipaddr = '192.168.1.6'

export const LocalServerUrl = 'http://localhost:5000/api/v1'
export const LanServerUrl = `http://${ipaddr}:5000/api/v1`

export const ApiBaseUrl = process.env.NODE_ENV === 'development' ? LanServerUrl : '/api/v1'
