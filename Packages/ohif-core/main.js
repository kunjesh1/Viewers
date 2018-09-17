import { Meteor } from 'meteor/meteor';
import './log.js';

/*
 * Defines the base OHIF object
 */

const OHIF = {
    log: {},
    ui: {},
    utils: {},
    viewer: {},
    cornerstone: {}
};

// Expose the OHIF object to the client if it is on development mode
// @TODO: remove this after applying namespace to this package
if (Meteor.isClient) {
    window.OHIF = OHIF;
}

export { OHIF };
