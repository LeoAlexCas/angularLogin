const buildAuth = (
    _id = 'asasfsad',
    userName = 'castroleonardo@live.cl',
    pass = '$2a$10$HhEiX6Xu84iOSvYTTxteIeE.oZBswnmZtxgoR0E0SKuFZXwgtGCMq',
    roleId = 'admin',
    userNumber = '13131',
    createdAt = '2022-08-24T03:07:36.617+00:00',
    updatedAt = '2022-08-24T03:07:36.617+00:00',
    __v = '0'
) => {
    return [{
        _id,
        userName,
        pass,
        roleId,
        userNumber,
        createdAt,
        updatedAt,
        __v
    }]
};

module.exports = buildAuth;