'use strict';

const Homey = require('homey');

class RingDriver extends Homey.Driver {

    onInit() {

        this.homey.flow.getActionCard('4AK1SZ-0EU0-activateSiren')
            .registerRunListener( async ( args, state ) => {
                args.device.activateSiren(args.sirenMode);
                return Promise.resolve( true );
            })

        this.homey.flow.getActionCard('4AK1SZ-0EU0-deactivateSiren')
            .registerRunListener( async ( args, state ) => {
                args.device.deactivateSiren();
                return Promise.resolve( true );
            }) 

        this.homey.flow.getActionCard('4AK1SZ-0EU0-soundChime')
            .registerRunListener( async (args, state) => {
            args.device.soundChime(args.chime,args.volume);
            return Promise.resolve( true );
            });

        this.homey.flow.getActionCard('4AK1SZ-0EU0-setKeypadMode')
            .registerRunListener(async (args, state) => {
            await args.device.setKeypadMode(args.mode, args.custom_value);

            return Promise.resolve(true);
        });

    }
}

module.exports = RingDriver;
