import MenuItem from './menu-item';

const data = [
    {
        title: 'Усадьба на Пре',
        slug: 'pra',
        submenu: [
            {
                title: 'Об усадьбе',
                slug: 'pra',
            },
            {
                title: 'Территория',
                slug: 'pra-territory',
            },
            {
                title: 'Интерьер усадебного дома',
                slug: 'pra-interior',
            },
            {
                title: 'Обзор интерьера',
                slug: 'pra-interior-review',
            },
        ],
    },
    {
        title: 'Усадьба Ушмор',
        slug: 'ushmor',
        submenu: [
            {
                title: 'Об Усадьбе',
                slug: 'ushmor'
            },
            {
                title: 'Территория',
                slug: 'ushmor-territory'
            },
            {
                title: 'Гостевой дом Усадьбы Ушмор',
                slug: 'ushmor-guest'
            },
            {
                title: 'Обзор интерьера',
                slug: 'ushmor-interior'
            },
        ],
    },
    {
        title: 'Свадьбы',
        slug: 'wedding',
        submenu: [],
    },
    {
        title: 'Контакты',
        slug: 'contacts',
        submenu: [],
    }
];

const Menu = () => {
    return (
        <ul className="site-menu__list">
            {
                data.map((item, index) => <MenuItem key={index} data={item}/>)
            }
        </ul>
    );
}

export default Menu;
