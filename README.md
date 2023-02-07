# Pulse

> Pulse is a new kind of configurable document control system.
> Manage your Document Resources easily with the settings you need, how you need them!

## Setup Pulse DMS

<small class="text text-muted">Setup your environment to run Pulse for development or testing.</small>

### **Options**

You have several options to setup Pulse locally. You may use a plain local installation use *Laravel Valet* or DIY. You can also use Docker,
via *Laradock* or *Laravel Sail*

### Local Setups

> Setup your machine locally without any heavy-weight extras involved.
    
    #### Vanilla (Plain)
    
    You may use your computer to setup and serve Pulse. To do this you will need the following installed:
    - PHP (8.0 or higher)
    - Composer (2.0)
    - MySQL
    - NPM

    With MySQL installed, it will need to be configured. In order to do this
    enter MySQL with `mysql -u <DB-User-Name> -p`

    Enter your password.

    Choose a name for your db and then run `CREATE DATABASE <database-name>`
    
    Then, run the following commands:
    
    `composer install`

    `npm install`

    `php artisan key:generate`

    `php artisan migrate`

    `php artisan db:seed`

    #### Valet

### Docker
    ##### Laradock
    #### Laravel Sail

## First Time Setup
