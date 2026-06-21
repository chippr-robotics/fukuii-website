# Fukuii

**The execution client built to finance's standard.**

Fukuii is a Scala execution client for Ethereum and the EVM ecosystem. Feature-complete, sovereign-grade, open source, from solo operators to sovereign funds.

[fukuii.com](https://fukuii.com) · [Download](https://github.com/chippr-robotics/fukuii/releases) · [Guide](https://fukuii.com/guide) · [Docs](https://docs.fukuii.com)

---

## What is Fukuii?

The only Scala EVM execution client. Built on Scala 3 LTS and Pekko Typed Actors, it runs any EVM-compatible network from a single binary. Today that means Ethereum Classic, the largest Proof-of-Work EVM, alongside Ethereum mainnet and Sepolia via Engine API V1 through V4. As Fukuii stabilizes, the same binary extends to sidechains, L2 rollups, and private consortium chains.

One binary. PoW Ethash and PoS Engine API. ETC, ETH, Mordor, Sepolia, and growing.

## Built to the EVM standard.

Feature-complete against go-ethereum and Besu: every wire protocol, sync strategy, and consensus mode tracked against the reference implementations. Performance-sensitive paths draw from Nethermind and Reth where Go and Rust solved problems the JVM ecosystem hadn't prioritized.

- Engine API V1–V4
- SNAP sync
- ETH68 / ETH69 wire protocols
- Built-in MCP server
- Prometheus + Grafana out of the box

## The JVM advantage

Running on the JVM, Fukuii's stack aligns natively with the infrastructure of modern finance: the trading systems, clearing engines, and custody platforms that already run on the JVM. No FFI bridges. No language boundary overhead. Institutions deploying on JVM infrastructure add Fukuii as a first-class dependency.

## Quick start

```bash
# Download the latest release
curl -LO https://github.com/chippr-robotics/fukuii/releases/latest/download/fukuii.jar

# Sync Mordor testnet (SNAP)
java -jar fukuii.jar --network mordor --sync snap
```

See the [installation guide](https://fukuii.com/guide) for Docker, Engine API mode, and hardware requirements.

## Architecture

Three layers, cleanly separated: a chain-agnostic EVM core (`fukuii-core`), a network and infrastructure layer (`fukuii-env`), and a pluggable consensus module on top. Swap consensus without touching the EVM. The Orbita roadmap runs on this split: multi-instance chain execution, checkpoint PoA consensus, and native L2 block derivation — each a layer above the `fukuii-core` boundary.

[Architecture →](https://fukuii.com/architecture) · [Roadmap →](https://fukuii.com/roadmap)

## Run a node. Tell us what you see.

Fukuii is pre-v1.0. Operator feedback shapes the road: sync behavior, peering, resource profiles — the things only a running node reveals.

[Report an issue](https://github.com/chippr-robotics/fukuii/issues) · [Join discussions](https://github.com/chippr-robotics/fukuii/discussions)

## License

Apache 2.0 — maintained by [Chippr Robotics LLC](https://github.com/chippr-robotics).
