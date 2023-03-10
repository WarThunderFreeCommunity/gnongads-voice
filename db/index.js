const DB = require("./DB");
const db = new DB(process.env.DBPATH);

const { AdminChannel, UserChannel, KickedUser } = require("./models");

const models = {};
const adminChannel = new AdminChannel(db, models, "adminChannels");
adminChannel.createTable();

const userChannel = new UserChannel(db, models, "userChannels");
userChannel.createTable();

const kickedUser = new KickedUser(db, models, "kickedUsers");
kickedUser.createTable();

models["AdminChannel"] = adminChannel;
models["UserChannel"] = userChannel;
models["KickedUser"] = kickedUser;

module.exports = { db, models };
