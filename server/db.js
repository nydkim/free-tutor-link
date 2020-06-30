const { Pool } = require('pg');

// const PG_URI = 'postgres://pbxpcmxr:jfFOHyIzqG5XBjISQWX4UKDPjj3GLGyh@ruby.db.elephantsql.com:5432/pbxpcmxr';
const PG_URI =
  'postgres://gtnhdtjk:jT5OJT9y9zoUxjkx8Nfp0XiS-nLRHR6g@ruby.db.elephantsql.com:5432/gtnhdtjk';

const pool = new Pool({
  connectionString: PG_URI,
  password: 'jT5OJT9y9zoUxjkx8Nfp0XiS-nLRHR6g',
  host: 'ruby.db.elephantsql.com',
  database: 'gtnhdtjk',
  // port: ,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
