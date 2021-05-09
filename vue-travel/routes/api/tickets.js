const express = require('express')
const router = express.Router()
const passport = require('passport')
const ticketController = require('../../controllers/ticketController')
// const AlipaySdk = require('alipay-sdk').default
// const AlipayFormData = require('alipay-sdk/lib/form').default

// 初始化插件
// const alipaySdk = new AlipaySdk({
//   appId: '2021000117660667',
//   gateway: 'https://openapi.alipaydev.com/gateway.do',
//   // signType: 'RSA2', // 注意这里默认是RSA2, 但是我自己只能用RSA, 所以是RSA, 正常不要配置
//   privateKey: 'MIIEowIBAAKCAQEAirYAWkGrx5JktKKE2s4NMYT3uEKKk8Ac18MzRcgAaKwzMptVoCJ6t1Vn4OVMfgZn6j6lUc8e+YLL+2aBOWeHU9ZAtasbcDWFraHlCJWIXr9Qg2ikV4MuBEA1zg49Vjd/fnttZ8PXMu3eza+ZRaSRsThkKTZRxdcETqMf+I0DAxS5io2uTIbWfEuaJxk0wZVJqc2+XNlY+EdIIzpscVAWcRGUmPp/fzB7qeNM55mDfD2w0yl5oeX3Rolzjy4YYhJutHJU+evs/AifHk4sHzVB3bP9+snjuyFTQlxDyWiWPvYFf2gQE8XFvDjcJ3aoDkoDd9EG05U9zRjCXvheJT6vgwIDAQABAoIBAHB8tf57wS2gB3EBVtIGRWbCGQ3hUHYPVpSW5Q6S6dn4w7AnjiHFtFTWut4DtauB0GWDFhgo6kqXioo+j08ZKQKQ/nsU3rR5gwXTA2SZtzR223kltBiP9hJWbAvFOnKfoRHWUFvU0sCnbIbK/3YdxlS8kWVmepwBCaon2XZ8DFRDF3QorxMUgGcdTwGztuyWZQCDX4wN0sHFynNomLIdjHjwzaDJqrlJ2gpsm4b+cYKa4L2jSTtr73D4IIZAQKvtgKQoq4Yxmlmm+qm9aPiRLCiu3sICRmg9p9HUlsY3ZyLszFgMYEuvGdLTrZ327xQzGfTeObR1GyWBesRdvvOM2DkCgYEA1JZFLngL+U4EtqWkxm7XDZYvuT0tjZsiIvP15oUOAqqrcZzjSigyUXVc8UPKynASu637JjAchea9Nc+jqBabHbnUUp212J2vAGnAbz7ItH/l2V2DISWqPd5n9eneG4wts5zllQF/+vvIu3UlBsxP5ONYa7QjjmgwuKQHyT7MsE0CgYEApwmaEP7zs5HtyVJEA5SxjwrJRSCvhgXRc6eWRhspyHxQl9Ld56d6sVhEdFBHbh3gnikT4JudjDp+WcfDoRVldmDi+mTRfLMojKS+li7k8MbeqaG1Ldeui1LGiV3mYzNGy0ZCB6jtOjLzbDYyOBsPnb/MMIrZw6aa3IjgQYFHRw8CgYBeiv31bpoUo6fg+sXPIhguCK7suNJ7eZSy6sBfZqkWcoSQoG9M2ZeXNpTBD58ubK1IHlXlY9wriLR5LADijjsp+yz8GPt4fJgJnP5h+xAThhXYl4frw+50WWburLWEltD0YkCQBfy+yB87jxuKbG7Tom/+Zjyx5pBUbU6xJ2asuQKBgC38s8D4ICoRBBFIJ9eAiX3jL1Rr0kcotOiNfA7jDZbXuuyBrnxHnLzUm0wWigPkD+IbVxCgZzijJgQbvl1L4bo8pGDhftdBD+ngtWPtlzQ+3DCBh7sORUywRl6tTm+DP3tZZXZsaJt8SY5CQYM22A7LLjEzGQ8HgF01BeCi8fe7AoGBAIO9jlpodtDaM6DPsUYhvTfhWXs5LAhWr2PivSXX2bpKeupZ6twLczuXIn4BryRsBcER98YQa846vJ+0I/lPgzXepRxi9NNF4F2fv8zULx5H1RBZpOupFU4sQcT61bWkLMfCyw8bpHJH8jlzJ4u2e80FEHik67qkAVcH5OBj8fsv',
//   alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl78NZX50/zveumE9pmU/D/KyvQBMSeLPUCuHQpQvnFNdi+72ejZZZd+ZgFBM9ydLho/6wpQE8yfwlvlVnyb7igH+gBMXnPBgqDeuz7vYpUs1OCxtouqhKPjOqLKZPddS+pBioYkijIZfwWeZ6DabBsoAHq27tN/YAcgDI+V6iDZbpo94kN8hsM6OeqXp2Lh3YsU2iVFDAuejeA100oRPuD8AcYCCVBiVox2MrpoAwRwtooCJKjENUVvNGhfTJDfb/6+JL4bYX3nNzb7YdYLjarUyNGJeWa6vz37Y0QNl/sGV5f2E4Q1Ta5nkAAvHzU+BG45vM2vq573JbTxWunxcVQIDAQAB'
// })

/* 设置 ticket 路由 */
router.get('/main', (req, res, next) => {
  // 门票信息
  ticketController.ticketInfo(req, res)
})

router.get('/item', (req, res, next) => {
  // 门票信息
  ticketController.ticketInfo(req, res)
})

router.post('/order', (req, res, next) => {
  ticketController.ticketOrder(req, res)
})

module.exports = router;