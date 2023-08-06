const commonData = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },

];

export const afterLogin = [
    ...commonData,
    {
        path: '/dashboard',
        title: 'Dashboard' 
    },
    {
        path: '/profile',
        title: 'Profile' 
    },
];

export const beforeLogin = [
    ...commonData,
    {
        path: '/login',
        title: 'Login' 
    },
    {
        path: '/signup',
        title: 'Signup' 
    },
];
