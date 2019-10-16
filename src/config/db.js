const { Client } = require('pg')
      ,logger = require("../config/log")
      ,connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/postgres';
    
const createTables =
    `CREATE TABLE IF NOT EXISTS
        F_USER(
            ID serial PRIMARY KEY,
            USERNAME VARCHAR (100) NOT NULL,
            EMAIL VARCHAR (355) UNIQUE NOT NULL,
            PASSWORD VARCHAR (355) NOT NULL,
            STATUS integer NOT NULL,
            CREATED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            MODIFIED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
     CREATE TABLE IF NOT EXISTS
        F_SYSTEM(
            ID serial PRIMARY KEY,
            NAME VARCHAR (100) UNIQUE NOT NULL,
            DESCRIPTION VARCHAR (355) NOT NULL,
            CREATED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            MODIFIED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );   
     CREATE TABLE IF NOT EXISTS
        F_IMAGE(
            ID serial PRIMARY KEY,
            NAME VARCHAR (100) UNIQUE NOT NULL,
            DESCRIPTION VARCHAR (355) NOT NULL,
            FILENAME VARCHAR (100) NOT NULL,
            FILEPATH VARCHAR (355) NOT NULL,
            FILEHASH VARCHAR (100) NOT NULL,
            IDSYSTEM INTEGER NOT NULL REFERENCES F_SYSTEM(ID),
            CREATED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            MODIFIED TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
     INSERT INTO F_USER (USERNAME,EMAIL,PASSWORD,STATUS) 
        VALUES ('admin','admin@admin.com','$2b$10$.D4l/mRO6Eb.ybTjzRHozunlSFIeCmPWYwsIi70HAJWyjO7agdzxO',1)
        ON CONFLICT (EMAIL) 
        DO NOTHING;
      `;

const client = new Client({
    connectionString,
    //ssl: true,
});

client.connect()
  .then(() => {
    client.query(createTables);  
    logger.info('connected ', connectionString)
    })
  .catch(err => {
    client.end;
    logger.error('connection error', err.stack)
});

module.exports = client;