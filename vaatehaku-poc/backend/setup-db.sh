#!/bin/bash
sudo -u postgres createuser --superuser codespace
sudo -u postgres createdb vaatehaku_db
sudo -u postgres psql -c "ALTER USER codespace WITH PASSWORD 'password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE vaatehaku_db TO codespace;"