window.addEventListener('load', function() {
  'use strict';

  var svg = document.getElementById('ex-020-stage'),
    field = document.getElementById('ex-020-rect'),
    p0 = document.getElementById('ex-020-p0'),
    p1 = document.getElementById('ex-020-p1'),
    p2 = document.getElementById('ex-020-p2'),
    p3 = document.getElementById('ex-020-p3'),
    path = document.getElementById('ex-020-path'),
    line1 = document.getElementById('ex-020-line-1'),
    line2 = document.getElementById('ex-020-line-2'),
    point = svg.createSVGPoint(),
    viewBox = svg.viewBox.baseVal,
    xy = {
      p0: {x: p0.cx.baseVal.value, y: p0.cy.baseVal.value},
      p1: {x: p1.cx.baseVal.value, y: p1.cy.baseVal.value},
      p2: {x: p2.cx.baseVal.value, y: p2.cy.baseVal.value},
      p3: {x: p3.cx.baseVal.value, y: p3.cy.baseVal.value}
    },
    OFFSET = {x: 16, y: 16}, // between draggable element and path seg
    SLIDER_RANGE = 240 - 24, // $ex-020-slider-height - $ex-020-pointer-height
    SLIDER_OFFSET,
    VIEW_WIDTH = 400,
    VIEW_HEIGHT = 240;

  function update(rect, xySeg) {
    if (rect) {
      point.x = rect.left - window.pageXOffset;
      point.y = rect.top - window.pageYOffset;
      point = point.matrixTransform(svg.getScreenCTM().inverse());
      xySeg.x = point.x + OFFSET.x;
      xySeg.y = point.y + OFFSET.y;
    }
    path.setAttribute('d', 'M' + xy.p0.x + ',' + xy.p0.y +
      'C' + xy.p1.x + ',' + xy.p1.y + ' ' +
      xy.p2.x + ',' + xy.p2.y + ' ' +
      xy.p3.x + ',' + xy.p3.y + '');
    line1.x1.baseVal.value = xy.p0.x;
    line1.y1.baseVal.value = xy.p0.y;
    line1.x2.baseVal.value = xy.p1.x;
    line1.y2.baseVal.value = xy.p1.y;
    line2.x1.baseVal.value = xy.p3.x;
    line2.y1.baseVal.value = xy.p3.y;
    line2.x2.baseVal.value = xy.p2.x;
    line2.y2.baseVal.value = xy.p2.y;
  }

  var drgP0 = new PlainDraggable(p0, {containment: field, onMove: function() { update(this.rect, xy.p0); }}),
    drgP1 = new PlainDraggable(p1, {containment: field, onMove: function() { update(this.rect, xy.p1); }}),
    drgP2 = new PlainDraggable(p2, {containment: field, onMove: function() { update(this.rect, xy.p2); }}),
    drgP3 = new PlainDraggable(p3, {containment: field, onMove: function() { update(this.rect, xy.p3); }}),
    pointer = new PlainDraggable(document.getElementById('ex-020-pointer'), {
      onMove: function() {
        var ratio = (this.rect.top + SLIDER_OFFSET) / SLIDER_RANGE + 0.5;
        viewBox.width = VIEW_WIDTH / ratio;
        viewBox.height = VIEW_HEIGHT / ratio;
        drgP0.position();
        drgP1.position();
        drgP2.position();
        drgP3.position();
      }
    });

  SLIDER_OFFSET = SLIDER_RANGE / 2 - pointer.rect.top;
  update();
});