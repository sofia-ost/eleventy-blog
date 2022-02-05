---
pagination:
  data: posts
  size: 1
  alias: post
permalink: "blog/{{ post.title | slug }}/"
layout: post
---

![{{ post.title }}]({{ post.image }}){.post-banner}

# {{ post.title }}

{{ post.content }}
