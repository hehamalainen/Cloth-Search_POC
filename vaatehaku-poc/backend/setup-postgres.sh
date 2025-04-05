#!/bin/bash

# Start PostgreSQL service
sudo service postgresql start

# Update PostgreSQL authentication method
sudo sed -i 's/peer/trust/g' /etc/postgresql/12/main/pg_hba.conf
sudo sed -i 's/md5/trust/g' /etc/postgresql/12/main/pg_hba.conf

# Restart PostgreSQL to apply authentication changes
sudo service postgresql restart

# Create user and database using sudo -u postgres
sudo -u postgres psql << EOF
DROP ROLE IF EXISTS codespace;
CREATE ROLE codespace WITH LOGIN PASSWORD 'password' SUPERUSER;
CREATE DATABASE vaatehaku_db;
GRANT ALL PRIVILEGES ON DATABASE vaatehaku_db TO codespace;
\c vaatehaku_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO codespace;
EOF