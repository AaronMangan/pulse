# Pulse

> Pulse is a new kind of configurable document control system.
> Manage your Document Resources easily with the settings you need, how you need them!

## Setup Pulse DMS

<small class="text text-muted">Setup your environment to run Pulse for development or testing.</small>

### **Options**

You have several options to setup Pulse locally. You may use a plain local installation use *Laravel Valet* or DIY. You can also use Docker,
via *Laradock* or *Laravel Sail*

___

### Local Setups

**Vanilla Stack**

Pulse can be setup locally using Homebrew:

`brew install composer mysql php npm`

> **Note:** Check out the Composer docs if you want to install it globally (recommended). You should also secure your MySQL installation.

`git clone https://github.com/AaronMangan/pulse.git`

`composer install`

`php artisan key:generate`

`npm install && npm run dev`

Then, in a separate terminal run:

`php artisan serve`

#### Valet

If you don't have Laravel Valet installed, go to https://laravel.com/docs/10.x/valet

Once installed, clone the repo with:

`git clone https://github.com/AaronMangan/pulse.git`

then,

`cd pulse && valet link`

---

### Docker

There are two options for using docker: Laradock and Laravel Sail. Both have slightly different installation requirement, however both require Docker to be installed.

##### Laradock
    
First, decide if you want to install Laradock globally or per project.

**Local**

Installing laradock locally (per project) means adding it as a submodule of your project.

Start by going into your terminal and chaging to the pulse directory.

`cd pulse`

`git submodule add https://github.com/Laradock/laradock.git`

With that done, you can move on to the **Getting Started** section

**Global**

Typically you will have a folder that houses all your projects on your machine and when installing Laradock globally, it is best to put it in this folder.

For example, your folder is called `code`:

`cd code`


`git clone https://github.com/Laradock/laradock.git`

That's it. Go to the **Getting Started** section.

#### Laravel Sail

Laravel Sail is an integrated docker experience and is included in Pulse. Once you have cloned the pulse repository run `composer install` then go to **Getting Started** section

## Getting Started

**Laradock**

How to get started with Laradock

- Change to the Laradock repo
- Copy the `.env.example` to `.env`
- Update `.env` PHP version to `8.1`
- Find the `nginx` folder of laradock and open it.
- Find the `default.conf` file and copy it
- Rename the copied file to `pulse.conf`
- Edit `pulse.conf` file to point to pulse (Generally `/var/www/pulse`)
- Run `docker-compose build nginx mysql`
- Once built, run `docker-compose up -d nginx mysql`
- Enter the container: `docker-compose exec workspace /bin/bash`
- Run: `composer install`
- Run: `php artisan key:generate`
- Run: `php atisan migrate --seed`

**Laravel Sail**

Getting started in Laravel Sail is generally easier.

- Go to the pulse folder
- Enter `./vendor/bin/sail up -d`
- Once run, enter the workspace with `./vendor/bin/sail shell` or root shell with `./vendor/bin/sail root`

*[OPTIONALLY]* You can configure a bash alias to `./vendor/bin/sail` by following these steps:

- `vim ~/.bashrc`
- At the bottom of the file, add the following line: `alias sail='./vendor/bin/sail'`
- If you are you using zsh: `vim ~/.zshrc`
