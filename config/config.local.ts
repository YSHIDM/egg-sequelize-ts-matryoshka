import {EggAppConfig, PowerPartial} from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.sequelize = {
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        timezone: '+08:00',
        define: {
            underscored: false,
        },
    };
    config.redis = {
        client: {
            port: 6378,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: '123456',
            db: 0,
        },
    };
    return config;
};
