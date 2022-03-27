export enum ENUM_ZA_RUTE_KAKO_SE_ZOVU_SAMO_DA_NIJE_NEKI_STRING_KOJI_MORAM_PAMTITI {
  LOGIN = 'login'
}

export const navigation = [
  {
    title: 'Comments',
    routerLink: ['/', 'comments']
  },
  {
    title: 'Albums',
    routerLink: ['/', 'albums']
  },
  {
    title: 'Posts',
    routerLink: ['/', 'posts']
  },
  {
    title: 'Todos',
    routerLink: ['/', 'todos']
  },
  {
    title: 'Login',
    routerLink: ['/', ENUM_ZA_RUTE_KAKO_SE_ZOVU_SAMO_DA_NIJE_NEKI_STRING_KOJI_MORAM_PAMTITI.LOGIN]
  },
]
