import Model, { attr, hasMany } from '@ember-data/model';

export default class WorkspaceModel extends Model {
  // Attributes
  @attr('string') name;


  // Meta
  @attr('date') createdAt;
  @attr('date') updatedAt;


  // Relations
  @hasMany('artist') artists;
  @hasMany('event') events;
  @hasMany('user') users;
  @hasMany('venue') venues;


  // Getter and setter
  get displayLabel() {
    return this.name;
  }

  get initials() {
    let name = this.name || '--';
    let nameSegments = name.trim().split(' ');

    if (nameSegments.length >= 2) {
      let first = nameSegments[0];
      let last = nameSegments[nameSegments.length - 1];

      return `${first.substring(0, 1)}${last.substring(0, 1)}`;
    }

    return `${name.substring(0, 2)}`;
  }
}
