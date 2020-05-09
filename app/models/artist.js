import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  // Attributes
  @attr('string') name;


  // Meta
  @attr('date') createdAt;
  @attr('date') updatedAt;


  // Relations
  @hasMany('event') events;


  // Getter and setter
  get displayLabel() {
    return this.name;
  }
}
