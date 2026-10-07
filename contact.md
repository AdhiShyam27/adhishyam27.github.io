---
title: Contact
tag_n: "04"
tag_label: Contact
heading: Let's talk.
lede: The fastest way to reach me is email. I am also happy to connect on LinkedIn.
body_class: contact-page
---
{% assign profile = site.data.profile %}
<section class="section contact" aria-label="Contact details">
  <div class="wrap contact__grid">
    <div>
      <p class="contact__big"><span class="sr-only">Let's build something together.</span>
        {% assign lines = "Let's build/something together." | split: "/" %}
        {% for line in lines %}<span class="contact__line" aria-hidden="true">{% assign words = line | split: " " %}{% for word in words %}<span class="word">{% assign letters = word | split: "" %}{% for ch in letters %}<span class="hop">{{ ch }}</span>{% endfor %}</span>{% unless forloop.last %} {% endunless %}{% endfor %}</span>{% endfor %}
      </p>
      <div class="contact__email">
        <a class="contact__mail" href="mailto:{{ profile.email }}">{{ profile.email }}</a>
        <button class="chip chip--copy" type="button" data-copy="{{ profile.email }}">Copy</button>
        <span class="mono contact__status" aria-live="polite" data-copy-status></span>
      </div>
      <p class="contact__note">The email link opens your email app.</p>
    </div>
    <div class="contact__side">
      <dl class="facts facts--stack">
        <div><dt class="mono">LinkedIn</dt><dd><a href="{{ profile.linkedin }}" rel="me">{{ profile.linkedin_label }} &nearr;</a></dd></div>
        <div><dt class="mono">GitHub</dt><dd><a href="https://github.com/{{ site.github_username }}" rel="me">github.com/{{ site.github_username }} &nearr;</a></dd></div>
        <div><dt class="mono">Based in</dt><dd>{{ profile.location }}</dd></div>
      </dl>
      <div class="badge" aria-hidden="true">
        <svg viewBox="0 0 200 200" class="badge__ring"><defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs><text><textPath href="#circ">say hello &middot; say hello &middot; say hello &middot;</textPath></text></svg>
        <span class="badge__mark">{{ profile.initials }}</span>
      </div>
    </div>
  </div>
</section>
