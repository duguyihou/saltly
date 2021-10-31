import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default {
  user: {
    name: 'Kong',
    description:
      'A ship in harbor is safe, but that is not what ships are built for.',
    avatar: 'https://avatars.githubusercontent.com/u/9347790?v=4',
    contact: [
      {
        icon: FaGithub,
        href: 'https://github.com/duguyihou',
      },
      {
        icon: SiGmail,
        href: 'duguyihou@gmail.com',
      },
      {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/yongcong-hou/',
      },
    ],
  },
  menu: [
    {
      name: 'Code',
      href: '/code',
    },
    {
      name: 'Life',
      href: '/life',
    },
  ],
}
