import {EggAppConfig, PowerPartial} from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.sequelize = {
        dialect: 'postgres',
        host: '115.28.138.4',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        timezone: '+08:00',
        define: {
            underscored: false,
        },
    };
    // config.redis = {
    //     client: {
    //         port: 6378,          // Redis port
    //         host: '115.28.138.4',   // Redis host
    //         password: '123456',
    //         db: 0,
    //     },
    // };
    return config;
};
