---
title: Work Experience
tag_n: "02"
tag_label: Experience
heading: Education and experience, one
accent: path.
lede: Newest first. The line draws as you scroll.
---
<section class="section timeline-wrap">
  <div class="wrap">
    <div class="timeline" data-timeline>
    <span class="timeline__spine" aria-hidden="true"><span class="timeline__fill" data-timeline-fill></span></span>
    <ol class="timeline__list">
      {% for e in site.data.experience %}
      <li class="stop" data-stop>
        <p class="mono stop__year">{{ e.year }}</p>
        <div class="stop__card">
          <p class="mono stop__kind">{{ e.kind }}</p>
          <h2 class="stop__title">{{ e.title }}</h2>
          <p class="stop__place">{{ e.place }}</p>
          {% if e.detail %}<p class="stop__detail">{{ e.detail }}</p>{% endif %}
          {% if e.points %}
          <ul class="stop__points">
            {% for pt in e.points %}<li>{{ pt }}</li>{% endfor %}
          </ul>
          {% endif %}
          {% if e.groups %}
          {% for g in e.groups %}
          <h3 class="mono stop__group">{{ g.name }}</h3>
          <ul class="stop__points">
            {% for pt in g.points %}<li>{{ pt }}</li>{% endfor %}
          </ul>
          {% endfor %}
          {% endif %}
        </div>
      </li>
      {% endfor %}
      <li class="stop stop--next">
        <p class="mono stop__year">2027</p>
        <div class="stop__card stop__card--dashed">
          <p class="mono stop__kind">Next</p>
          <h2 class="stop__title">Your <em class="serif">team?</em></h2>
          <p><a class="link-arrow" href="{{ '/contact/' | relative_url }}">Get in touch &rarr;</a></p>
        </div>
      </li>
    </ol>
    </div>
  </div>
</section>
