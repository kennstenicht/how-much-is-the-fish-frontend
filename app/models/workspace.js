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
  @hasMany('venue') venues;

  // Getter and setter
  get displayLabel() {
    return this.name;
  }
}
