Monospace pill for status and metadata. The Fukuii roadmap vocabulary is Primary / In Progress / Planned / Roadmap.

```jsx
<Badge status="Primary" />        {/* green */}
<Badge status="In Progress" />    {/* green */}
<Badge status="Planned" />        {/* muted */}
<Badge tone="gold">Alpha v0.7</Badge>
<Badge>chain 61</Badge>
```

Pass `status` for the canonical vocabulary (auto-toned), or `tone` (`default`/`green`/`gold`) directly. Keep labels one or two words; chain IDs and versions go in mono.
