export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f5fc888367dcb58e87c530e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s76uo6r5',
                  apiId: 'c8b2658b-d449-414a-8372-9bf291a37b24'
                },
                {
                  buildHookId: '5f5fc888367dcb56dd7c578f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mrptn4kr',
                  apiId: '78fa9478-a8e4-4723-96ac-93caa46ecc65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dylansong/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mrptn4kr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
