import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    // static: true,
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    ejs: {
        enable: true,
        package: 'egg-view-ejs',
    },
    // sequelize: {
    //     enable: true,
    //     package: 'egg-sequelize',
    // },
    sequelize: {
        enable: true,
        package: 'egg-sequelize-ts'
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    },
    graphql: {
        enable: true,
        package: 'egg-graphql',
    },
    oss: {
        enable: true,
        package: 'egg-oss',
    },
};

export default plugin;
