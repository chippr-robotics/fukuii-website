Action control. `primary` is solid green with sharp corners (matches the hero and cell grid); `gradient` is the emphasis CTA (solid green, soft green glow, rounded); `secondary`/`ghost` recede.

```jsx
<Button variant="primary" href="...">Download</Button>
<Button variant="gradient" rounded>Report an issue</Button>
<Button variant="secondary" leftIcon={<GitHubIcon/>}>GitHub</Button>
```

Default corners are sharp (0 radius) — pass `rounded` for radius-md. The brand does NOT use green→gold gradient fills. Weight 700. One emphasis CTA per view.
