import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Profile = new Mongo.Collection('Profile');

/**
 * Create the schema for Stuff
 */
export const ProfileSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  preCourse: {
    label: 'preCourse',
    type: String,
    optional: false,
    max: 200,
  },
  currCourse: {
    label: 'currCourse',
    type: String,
    optional: false,
    max: 200,
  },
});

Profile.attachSchema(ProfileSchema);
