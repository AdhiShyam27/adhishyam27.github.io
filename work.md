---
title: Work
tag_n: "03"
tag_label: Work
heading: Plans, products and
accent: builds.
lede: Fourteen master planning and urban design projects from RSP Architects, four AI products, the apps I am building at Berkeley, and my academic studio work.
---
{% assign projects = site.projects | sort: "order" %}
<section class="section" id="planning" aria-labelledby="planning-title">
  <div class="wrap">
    <div class="section__head">
      {% include tag.html n="A" label="Master planning & urban design" %}
      <h2 class="h2 rv-mask" id="planning-title"><span>Planning <em class="serif">projects.</em></span></h2>
    </div>
    <div class="chips chips--filter" role="group" aria-label="Filter projects by country" data-project-filter>
      <button type="button" class="chip is-on" aria-pressed="true" data-region="all">All</button>
      <button type="button" class="chip" aria-pressed="false" data-region="UAE">UAE</button>
      <button type="button" class="chip" aria-pressed="false" data-region="Singapore">Singapore</button>
      <button type="button" class="chip" aria-pressed="false" data-region="Vietnam">Vietnam</button>
      <button type="button" class="chip" aria-pressed="false" data-region="Cambodia">Cambodia</button>
      <button type="button" class="chip" aria-pressed="false" data-region="Indonesia">Indonesia</button>
      <button type="button" class="chip" aria-pressed="false" data-region="China">China</button>
    </div>
    <ul class="pgrid" data-project-grid>
      {% for p in projects %}
      {% include project-card.html project=p i=forloop.index %}
      {% endfor %}
    </ul>
  </div>
</section>

<section class="section section--band" id="ai-products" aria-labelledby="ai-title">
  <div class="wrap">
    <div class="section__head">
      {% include tag.html n="B" label="AI products at RSP" %}
      <h2 class="h2 rv-mask" id="ai-title"><span>Products I <em class="serif">shipped.</em></span></h2>
      <p class="section__lede rv">Product work at RSP Architects. Peggie and AIVA have full stories with photos; the other two cards use illustrative interfaces, not screenshots.</p>
    </div>
    <ul class="products">
      {% for pr in site.data.products %}
      {% include product-card.html product=pr i=forloop.index features="yes" %}
      {% endfor %}
    </ul>
  </div>
</section>

<section class="section" id="builds" aria-labelledby="builds-title">
  <div class="wrap">
    <div class="section__head">
      {% include tag.html n="C" label="Built at Berkeley" %}
      <h2 class="h2 rv-mask" id="builds-title"><span>Apps and <em class="serif">ventures.</em></span></h2>
    </div>
    <ul class="builds">
      {% for b in site.data.builds %}
      <li class="build rv" style="--i: {{ forloop.index }}">
        <p class="mono build__kicker">{{ b.kicker }}</p>
        <h3 class="build__title">{{ b.title }}</h3>
        <p class="build__desc">{{ b.description }}</p>
        <p class="build__foot"><span class="status mono{% if b.status == 'Live' %} status--live{% endif %}">{{ b.status }}</span>{% if b.link %}<a class="link-arrow" href="{{ b.link }}">{{ b.link_label }} &nearr;</a>{% endif %}</p>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="section section--band" id="academic" aria-labelledby="academic-title">
  <div class="wrap">
    <div class="section__head">
      {% include tag.html n="D" label="Academic studio work" %}
      <h2 class="h2 rv-mask" id="academic-title"><span>From the <em class="serif">studio.</em></span></h2>
      <p class="section__lede rv">National University of Singapore and the School of Planning and Architecture, New Delhi.</p>
    </div>
    <ul class="academic">
      {% for a in site.data.academic %}
      <li class="acard rv" style="--i: {{ forloop.index }}">
        {% if a.image %}
        <a class="acard__media" href="{{ a.image | append: '.webp' | relative_url }}" data-lightbox-src data-caption="{{ a.alt }}">
          <img src="{{ a.image | append: '-sm.webp' | relative_url }}" alt="{{ a.alt }}" width="720" height="460" loading="lazy" decoding="async">
        </a>
        {% endif %}
        <div class="acard__body">
          <p class="mono acard__kicker">{{ a.kicker }}</p>
          <h3 class="acard__title">{{ a.title }}</h3>
          <p>{{ a.description }}</p>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
