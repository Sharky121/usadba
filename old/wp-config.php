<?php
define( 'WP_CACHE', false ); 
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'usadbana_usad' );
/** Имя пользователя базы данных */
define( 'DB_USER', 'usadbana_usad' );
/** Пароль к базе данных */
define( 'DB_PASSWORD', '$6+!)#~y)*Yi' );
/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );
/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );
/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );
/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#(jjE[wH`jeJY(6j1COStN{rD4:6HY8FV,6Cqk93]$p]AShqk p/6o:KrSmJoFPL' );
define( 'SECURE_AUTH_KEY',  '(|KKnHB,;Dkp6:AnW,hld7yTL-hX(2&}K__Ip,G;e^oV8 j{?h]BU(XvqLfzklvk' );
define( 'LOGGED_IN_KEY',    'W_UI&?:Jm >DV&gP`|3`!(]BEC;bF>98YTwB-elZ>yJ#l~4Hq7oG6hAvrk?{!jk2' );
define( 'NONCE_KEY',        'E4)NjR)0f i!E;p]AMxvQaJv 7wL0%x$Td8u>o3a&n=xS*$#Q07#buqZ >+?}Unm' );
define( 'AUTH_SALT',        '[O>zk`gY^NKOg$|/}MqGGnV<#tG(:99zMc8H$(Yh RD^bOashVG:yJ7fG>|L):%m' );
define( 'SECURE_AUTH_SALT', '}tAJ3H-ojvw;h<zV~qxxMR7mGK!ua?Wv3T*YP!k 3@95=fH}nK|cFl4D=0V.6|gA' );
define( 'LOGGED_IN_SALT',   'lI:sBo_))es2W5><]~DU`hcIYLZ^|8S!^k(#VuRR#T26PGWdpgY=Lrn*JTEb0H~K' );
define( 'NONCE_SALT',       '>[Zw+[b&i}l>S~qN]cESo(uL@r*f#.rC2#H8y[X`M5f!S*J0=?pgk<kef_%h`|1O' );
/**#@-*/
/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'us_';
/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */
/* Это всё, дальше не редактируем. Успехов! */
define('WP_DEBUG', false);
define('WP_ALLOW_MULTISITE', true);
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'usadba-na-pre.ru');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
define( 'WP_MEMORY_LIMIT', '256M' );
define('FORCE_SSL_ADMIN', true);
/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';