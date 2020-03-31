import { lang } from 'services/intl/getLocale'

import messages from './messages'


export const ceacleServices = ({ formatMessage, locale }) => ([
  {
    title: 'Main',
    slug: 'main',
    color: 'black',
    services: [
      {
        name: 'ceacle',
        slug: 'ceacle',
        link: `https://ceacle.com${lang(locale)}`,
        description: '',
        image: 'https://cdn1.ceacle.com/ceacle/images/icons-3/icon@96.png',
      },
    ],
  },
  {
    title: 'Creative Tools',
    slug: 'creative-tools',
    color: 'green',
    services: [
      {
        name: 'mockup',
        slug: 'mockup',
        link: `https://mockup.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.mockupDescription),
        image: 'https://cdn1.ceacle.com/mockup/images/icons-3/icon@96.png',
      },
      {
        name: 'showcase',
        slug: 'showcase',
        link: `https://showcase.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.showcaseDescription),
        image: 'https://cdn1.ceacle.com/showcase/images/icons-2/icon@96.png',
        status: formatMessage(messages.beta),
        statusColor: 'gray',
      },
    ],
  },
  {
    title: 'Project management',
    slug: 'project-management',
    color: 'red',
    services: [
      {
        name: 'brief',
        slug: 'brief',
        link: `https://brief.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.briefDescription),
        image: 'https://cdn1.ceacle.com/brief/images/icons-2/icon@96.png',
        status: formatMessage(messages.beta),
        statusColor: 'gray',
      },
    ],
  },
  {
    title: 'Cloud Tools',
    slug: 'cloud-tools',
    color: 'yellow',
    services: [
      {
        name: 'cloudstore',
        slug: 'cloudstore',
        link: `https://cloudstore.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.cloudstoreDescription),
        image: 'https://cdn1.ceacle.com/cloudstore/images/icons-3/icon@96.png',
        status: formatMessage(messages.comingSoon),
      },
    ],
  },
  {
    title: 'Developer Tools',
    slug: 'developer-tools',
    color: 'deepblue',
    services: [
      {
        name: 'modo',
        slug: 'modo',
        link: `https://modo.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.modoDescription),
        image: 'https://cdn1.ceacle.com/modo/images/icons-3/icon@96.png',
      },
    ],
  },
  {
    title: 'User Activity',
    slug: 'user-activity',
    color: 'gray',
    services: [
      {
        name: 'account',
        slug: 'account',
        link: `https://account.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.accountDescription),
        image: 'https://cdn1.ceacle.com/account/images/icons-3/icon@96.png',
      },
      {
        name: 'help center',
        slug: 'helpcenter',
        link: `https://help.ceacle.com${lang(locale)}`,
        description: formatMessage(messages.helpDescription),
        image: 'https://cdn1.ceacle.com/help/images/icons-2/icon@96.png',
      },
    ],
  },
])
