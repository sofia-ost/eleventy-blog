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

# {{ post.title }}{.post-title}

![{{ post.title }}]({{ post.image }}){.post-banner}

<div class="content">

{{ post.content }}

</div>
