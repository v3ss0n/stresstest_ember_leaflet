import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('monstr-select', 'Integration | Component | monstr select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{monstr-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#monstr-select}}
      template block text
    {{/monstr-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
