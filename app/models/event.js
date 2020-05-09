import Model, { attr, hasMany } from '@ember-data/model';

export default class EventModel extends Model {
  // Attributes
  @attr('date') date;
  @attr('number') guests;
  @attr('string') name;


  // Meta
  @attr('date') createdAt;
  @attr('date') updatedAt;


  // Relations
  @hasMany('artist') artists;


  // Getter and setter
  get displayLabel() {
    return this.name;
  }
}
