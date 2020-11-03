import request from '@/utils/request'

const BASE_URI = '/dev-api'

// request.get('/db.json').then(res => {
//     const data = res.data
//     console.log(data)
// })

request({
    method: 'get',
    // url: BASE_URI + '/test2'
    url: '/test2'
}).then(res => {
    const data = res.data
    console.log(data)
})

export default {
    getList: () => request({ method: 'get', url: '/test' })// BASE_URI + '/test' })
}