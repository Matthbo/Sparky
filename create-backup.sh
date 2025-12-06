docker compose -f docker-compose.standalone.yml exec mysql bash -c 'mysqldump -uroot -p$MYSQL_ROOT_PASSWORD --all-databases' > ../sparky-backups/backup-$(date +%Y-%m-%d).sql
