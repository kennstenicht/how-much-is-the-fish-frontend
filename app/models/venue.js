import Model, { attr } from '@ember-data/model';

export default class VenueModel extends Model {
  // Attributes
  @attr('number') capacity;
  @attr('string') name;


  // Meta
  @attr('date') createdAt;
  @attr('date') updatedAt;


  // Getter and setter
  get displayLabel() {
    return this.name;
  }
}
