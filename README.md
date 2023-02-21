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

### Docker
    ##### Laradock
    #### Laravel Sail

## First Time Setup
