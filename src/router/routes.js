// import app pages
import Home from '@/app/pages/Home'

// import admin page components
import Admin from '@/admin/pages/Admin'
import Login from '@/admin/pages/Login'
import Posts from '@/admin/pages/posts/Posts'
import PostNew from '@/admin/pages/posts/PostNew'
import PostEdit from '@/admin/pages/posts/PostEdit'
import Settings from '@/admin/pages/settings/Settings'
import Routing from '@/admin/pages/Routing'
import Pages from '@/admin/pages/Pages'
import Media from '@/admin/pages/Media'
import Database from '@/admin/pages/Database'
import Content from '@/admin/pages/content/Content'
import ContentNew from '@/admin/pages/content/ContentNew'
import ContentType from '@/admin/pages/ContentType'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'posts',
        component: Posts,
        children: [
          {
            path: 'new',
            component: PostNew
          },
          {
            path: 'edit/:key',
            component: PostEdit
          }
        ]
      },
      {
        path: 'settings',
        component: Settings
      },
      {
        path: 'routing',
        component: Routing
      },
      {
        path: 'pages',
        component: Pages
      },
      {
        path: 'media',
        component: Media
      },
      {
        path: 'database',
        component: Database
      },
      {
        path: 'content',
        component: ContentType
      },
      {
        path: 'content/:customContent',
        component: Content,
        children: [
          {
            path: 'new',
            component: ContentNew
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: 'default',
    component: Home
  }
]

export default routes
