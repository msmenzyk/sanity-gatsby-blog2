export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600976db7f8fd5d9394b074d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-2fjrhomn',
                  apiId: 'f355a04c-8348-442a-a68f-7b645123bd29'
                },
                {
                  buildHookId: '600976dbfdb6f0d4baba358a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-mcdtpoh3',
                  apiId: '5f24d8ad-8b76-402b-ab15-e3c11d8f18f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/msmenzyk/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-mcdtpoh3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
