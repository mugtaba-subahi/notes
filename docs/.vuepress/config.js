module.exports = {
  plugins: ['@vuepress/active-header-links'],

  title: 'MS Docs',

  themeConfig: {
    navbar: false,
    sidebar: [
      {
        title: 'AWS',
        children: [
          {
            title: 'Developer Exam Notes',
            path: '/aws/developer_exam',
            children: [
              {
                title: 'S3',
                path: '/aws/developer_exam/s3'
              },
              {
                title: 'API Gateway',
                path: '/aws/developer_exam/api_gateway'
              },
              {
                title: 'CORS',
                path: '/aws/developer_exam/cors'
              },
              {
                title: 'Cloudfront',
                path: '/aws/developer_exam/cloudfront'
              },
              {
                title: 'EBS',
                path: '/aws/developer_exam/ebs'
              },
              {
                title: 'EC2',
                path: '/aws/developer_exam/ec2'
              },
              {
                title: 'ELB',
                path: '/aws/developer_exam/elb'
              },
              {
                title: 'ElastiCache',
                path: '/aws/developer_exam/elasticache'
              },
              {
                title: 'IAM',
                path: '/aws/developer_exam/iam'
              },
              {
                title: 'Lambda',
                path: '/aws/developer_exam/lambda'
              },
              {
                title: 'RDS',
                path: '/aws/developer_exam/rds'
              },
              {
                title: 'Route 53',
                path: '/aws/developer_exam/route53'
              },
              {
                title: 'X-Ray',
                path: '/aws/developer_exam/xray'
              }
            ]
          },
          {
            title: 'Cost Tips',
            path: '/aws/cost/'
          }
        ]
      },
      {
        title: 'Javascript',
        children: [
          {
            title: 'Bind, Call & Apply',
            path: '/javascript/bind_call_apply'
          },
          {
            title: 'Closures',
            path: '/javascript/closures'
          }
        ]
      },
      {
        title: 'Bob'
      }
    ]
  }
};
