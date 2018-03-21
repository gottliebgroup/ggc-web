---
permalink: /inspire/
layout: page
title: Inspire
lead: |
  Through the years I have had the good fortune to work with a long line of thoughtful, dynamic and ambitious people. And I have learned something valuable from so many. What follows are just a few of the pearls of wisdom I’ve picked up through collaboration and partnership. I will update this running list periodically.
---

{% for quote in site.data.inspirational-quotes %}
  <div class="grid-container section-pad">
    <div class="grid-x grid-margin-x align-center align-middle">
      <div class="cell small-12 medium-4 large-3 text-right-on-medium">
        <h3 class="headline-5">{{ quote.person }}</h3>
        {% if quote.role %}<p class="text-sans">{{ quote.role }}</p>{% endif %}
      </div>
      <div class="cell small-12 medium-8 large-6">
        <blockquote class="quote-large">{{ quote.body }}</blockquote>
      </div>
    </div>
  </div>
{% endfor %}

