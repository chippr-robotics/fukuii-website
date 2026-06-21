The signature Fukuii container — sharp corners, hairline borders, a documentary mono label, and an optional CTA bar. Compose with `CellGrid` for the geth-inspired shared-edge layout.

```jsx
<CellGrid columns={2}>
  <Cell label="About" cta="Get started" ctaHref="#quickstart">
    <h2 className="cell-h2">What is Fukuii?</h2>
    <p>The only Scala EVM execution client…</p>
  </Cell>
  <Cell label="Consensus model" elevated>
    <p>One binary. PoW Ethash and PoS Engine API.</p>
  </Cell>
</CellGrid>
```

Use `accent` for a highlighted (Primary) cell. This is the brand's default structural device — reach for it before rounded `Card`s.
