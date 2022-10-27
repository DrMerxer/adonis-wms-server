# Adonis fullstack application

## Notice

This is my first ever self completed project. And it has been a couple of years I can barely remember how it's worked.
I save this repositry to record my growth, and don't forget why I *start building*.

❤️ It's my best decision to work on a thing I love, and I will always devoted into building more fantastic things.

### 1. Database
When using MySQL 8.x server, execute this SQL sentence in command line, then adonis will be able to connect to the database. 

```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
### 2. Migration
According to the lucid machanism that adonis framework use, migration run in order. The prefix on the name of migration files will execute from low to high. Keep the source of the foreign key in the low bit. 
And the later changes of relationships can build with the select migration option, rollback and run will handles all the problem automatically.
