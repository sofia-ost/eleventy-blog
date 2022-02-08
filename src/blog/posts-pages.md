---
pagination:
  data: posts
  size: 1
  alias: post
permalink: "blog/{{ post.title | slug }}/"
styles:
  - "post.scss"
scripts:
  - "post.js"
layout: post
---

<span class="publication-date">Published {{ post.date | asPostDate }}</span>

# {{ post.title }}{.post-title}

<!-- prettier-ignore -->
{% capture props %}
{
"alt": "{{ post.title }}",
"classes": "lazyload post-banner",
"lazy":true
}
{% endcapture %}
{% assign props = props | parseJSON %}
{% image post.image, props %}

<div class="content">

{{ post.content }}

</div>
