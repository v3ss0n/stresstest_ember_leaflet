import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('monstr-grid', 'Integration | Component | monstr grid', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{monstr-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#monstr-grid}}
      template block text
    {{/monstr-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
